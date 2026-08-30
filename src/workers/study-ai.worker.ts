import {
  AutoModelForCausalLM,
  AutoTokenizer,
  InterruptableStoppingCriteria,
  TextStreamer,
} from "@huggingface/transformers";
import {
  STUDY_AI_MODEL_DTYPE,
  STUDY_AI_MODEL_ID,
  STUDY_AI_MODEL_REVISION,
} from "../lib/ai/model-config";

type StudyAIMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

type StudyAIStage = "tokenizer" | "model" | "warmup" | "generation";

type LoadMessage = {
  type: "load";
  requestId: number;
};

type GenerateMessage = {
  type: "generate";
  requestId: number;
  data: {
    messages: StudyAIMessage[];
    temperature: number;
    topP: number;
    maxTokens: number;
  };
};

type InterruptMessage = {
  type: "interrupt";
};

type WorkerRequest = LoadMessage | GenerateMessage | InterruptMessage;

class StudyAIStageError extends Error {
  readonly stage: StudyAIStage;

  constructor(stage: StudyAIStage, error: unknown) {
    super(serializeError(error));
    this.name = "StudyAIStageError";
    this.stage = stage;
  }
}

let tokenizerPromise: ReturnType<typeof AutoTokenizer.from_pretrained> | undefined;
let modelPromise: ReturnType<typeof AutoModelForCausalLM.from_pretrained> | undefined;
let modelReady = false;
let generating = false;
const stoppingCriteria = new InterruptableStoppingCriteria();

function post(status: string, requestId: number, data: Record<string, unknown> = {}) {
  self.postMessage({ status, requestId, ...data });
}

function serializeError(error: unknown) {
  const message = error instanceof Error ? `${error.name}: ${error.message}` : String(error);
  return message.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, " ").slice(0, 1200);
}

function stageOf(error: unknown, fallback: StudyAIStage) {
  return error instanceof StudyAIStageError ? error.stage : fallback;
}

function withStage<T>(stage: StudyAIStage, promise: Promise<T>) {
  return promise.catch((error) => {
    throw new StudyAIStageError(stage, error);
  });
}

function getModel(progressCallback?: (report: Record<string, unknown>) => void) {
  tokenizerPromise ??= withStage(
    "tokenizer",
    AutoTokenizer.from_pretrained(STUDY_AI_MODEL_ID, {
      revision: STUDY_AI_MODEL_REVISION,
      progress_callback: progressCallback,
    }),
  );
  modelPromise ??= withStage(
    "model",
    AutoModelForCausalLM.from_pretrained(STUDY_AI_MODEL_ID, {
      revision: STUDY_AI_MODEL_REVISION,
      device: "webgpu",
      dtype: STUDY_AI_MODEL_DTYPE,
      progress_callback: progressCallback,
    }),
  );
  return Promise.all([tokenizerPromise, modelPromise]);
}

async function load(requestId: number) {
  if (modelReady) {
    post("ready", requestId, { progress: 1 });
    return;
  }

  try {
    post("loading", requestId, { label: "AIモデルを読み込んでいます…" });
    const [tokenizer, model] = await getModel((report) => {
      post("progress", requestId, { report });
    });

    post("loading", requestId, { label: "WebGPU向けにモデルを準備しています…" });
    try {
      const warmupInputs = tokenizer("こんにちは");
      await model.generate({ ...warmupInputs, max_new_tokens: 1 });
    } catch (error) {
      throw new StudyAIStageError("warmup", error);
    }
    modelReady = true;
    post("ready", requestId, { progress: 1 });
  } catch (error) {
    tokenizerPromise = undefined;
    modelPromise = undefined;
    modelReady = false;
    post("error", requestId, {
      stage: stageOf(error, "model"),
      error: serializeError(error),
    });
  }
}

async function generate(requestId: number, data: GenerateMessage["data"]) {
  if (generating) {
    post("error", requestId, {
      stage: "generation",
      error: "AI generation is already running.",
    });
    return;
  }

  generating = true;
  stoppingCriteria.reset();

  try {
    const [tokenizer, model] = await getModel();
    const inputs = tokenizer.apply_chat_template(data.messages, {
      add_generation_prompt: true,
      return_dict: true,
      enable_thinking: false,
    });

    let answer = "";
    const streamer = new TextStreamer(tokenizer, {
      skip_prompt: true,
      skip_special_tokens: true,
      callback_function: (chunk) => {
        answer += chunk;
        post("update", requestId, { chunk });
      },
    });

    post("start", requestId);
    await model.generate({
      ...inputs,
      do_sample: true,
      temperature: Math.min(Math.max(data.temperature, 0.05), 1),
      top_p: Math.min(Math.max(data.topP, 0.1), 1),
      top_k: 20,
      max_new_tokens: Math.min(Math.max(Math.trunc(data.maxTokens), 1), 512),
      streamer,
      stopping_criteria: stoppingCriteria,
    });
    post("complete", requestId, { answer });
  } catch (error) {
    post("error", requestId, {
      stage: stageOf(error, "generation"),
      error: serializeError(error),
    });
  } finally {
    generating = false;
  }
}

self.addEventListener("message", (event: MessageEvent<WorkerRequest>) => {
  const message = event.data;
  switch (message.type) {
    case "load":
      void load(message.requestId);
      break;
    case "generate":
      void generate(message.requestId, message.data);
      break;
    case "interrupt":
      stoppingCriteria.interrupt();
      break;
  }
});
