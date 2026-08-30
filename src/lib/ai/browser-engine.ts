import {
  STUDY_AI_MODEL_DTYPE,
  STUDY_AI_MODEL_ID,
  STUDY_AI_MODEL_REVISION,
} from "./model-config";

export { STUDY_AI_MODEL_ID } from "./model-config";

export type StudyAIProgressReport = {
  progress: number;
};

type StudyAIMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

type StudyAIStage =
  | "tokenizer"
  | "model"
  | "warmup"
  | "generation"
  | "worker"
  | "unknown";

type StudyAICompletionRequest = {
  messages: StudyAIMessage[];
  stream?: boolean;
  temperature?: number;
  top_p?: number;
  max_tokens?: number;
  enable_thinking?: boolean;
};

type StudyAICompletionChunk = {
  choices: Array<{
    delta: {
      content?: string;
    };
  }>;
};

type StudyAIEngineInterface = {
  chat: {
    completions: {
      create(request: StudyAICompletionRequest): Promise<AsyncIterable<StudyAICompletionChunk>>;
    };
  };
};

type WorkerResponse = {
  status: "loading" | "progress" | "ready" | "start" | "update" | "complete" | "error";
  requestId: number;
  chunk?: string;
  error?: string;
  stage?: StudyAIStage;
  progress?: number;
  report?: {
    progress?: number;
  };
};

type GPUAdapterLike = {
  features?: {
    has(feature: string): boolean;
  };
};

type NavigatorWithGPU = Navigator & {
  gpu?: {
    requestAdapter(): Promise<GPUAdapterLike | null>;
  };
};

class StudyAIRuntimeError extends Error {
  readonly stage: StudyAIStage;

  constructor(message: string, stage: StudyAIStage) {
    super(message);
    this.name = "StudyAIRuntimeError";
    this.stage = stage;
  }
}

let worker: Worker | undefined;
let enginePromise: Promise<StudyAIEngineInterface> | undefined;
let requestSequence = 0;
let activeGenerationRequestId: number | undefined;

export function supportsStudyAI() {
  return typeof navigator !== "undefined" && "gpu" in navigator && typeof Worker !== "undefined";
}

export async function buildStudyAIDiagnostics(error: unknown) {
  const stage = error instanceof StudyAIRuntimeError ? error.stage : "unknown";
  const message = sanitizeDiagnosticMessage(error instanceof Error ? error.message : String(error));
  const gpu = await inspectWebGPU();

  return [
    `stage: ${stage}`,
    `runtime: Transformers.js / ONNX Runtime WebGPU`,
    `model: ${STUDY_AI_MODEL_ID}`,
    `revision: ${STUDY_AI_MODEL_REVISION}`,
    `dtype: ${STUDY_AI_MODEL_DTYPE}`,
    `webgpu: ${gpu.webgpu}`,
    `adapter: ${gpu.adapter}`,
    `shader-f16: ${gpu.shaderF16}`,
    `error: ${message}`,
  ].join("\n");
}

export async function getStudyAIEngine(
  onProgress: (report: StudyAIProgressReport) => void,
): Promise<StudyAIEngineInterface> {
  if (!enginePromise) {
    enginePromise = loadEngine(onProgress);
  }

  try {
    return await enginePromise;
  } catch (error) {
    enginePromise = undefined;
    resetWorker();
    throw error;
  }
}

export async function interruptStudyAI() {
  if (activeGenerationRequestId === undefined) return;
  getWorker().postMessage({ type: "interrupt" });
}

async function loadEngine(
  onProgress: (report: StudyAIProgressReport) => void,
): Promise<StudyAIEngineInterface> {
  const runtimeWorker = getWorker();
  const requestId = nextRequestId();

  await new Promise<void>((resolve, reject) => {
    const onMessage = (event: MessageEvent<WorkerResponse>) => {
      const response = event.data;
      if (response.requestId !== requestId) return;

      if (response.status === "progress") {
        onProgress({ progress: normalizeProgress(response.report?.progress) });
        return;
      }
      if (response.status === "ready") {
        onProgress({ progress: 1 });
        cleanup();
        resolve();
        return;
      }
      if (response.status === "error") {
        cleanup();
        reject(
          new StudyAIRuntimeError(
            response.error ?? "Failed to load the AI model.",
            response.stage ?? "unknown",
          ),
        );
      }
    };

    const onError = (event: ErrorEvent) => {
      cleanup();
      reject(new StudyAIRuntimeError(event.message || "Study AI worker failed.", "worker"));
    };

    const cleanup = () => {
      runtimeWorker.removeEventListener("message", onMessage);
      runtimeWorker.removeEventListener("error", onError);
    };

    runtimeWorker.addEventListener("message", onMessage);
    runtimeWorker.addEventListener("error", onError);
    runtimeWorker.postMessage({ type: "load", requestId });
  });

  return {
    chat: {
      completions: {
        create: createCompletion,
      },
    },
  };
}

async function createCompletion(
  request: StudyAICompletionRequest,
): Promise<AsyncIterable<StudyAICompletionChunk>> {
  if (activeGenerationRequestId !== undefined) {
    throw new StudyAIRuntimeError("AI generation is already running.", "generation");
  }

  const runtimeWorker = getWorker();
  const requestId = nextRequestId();
  activeGenerationRequestId = requestId;
  const queue = new AsyncQueue<StudyAICompletionChunk>();
  let cleanedUp = false;

  const cleanup = () => {
    if (cleanedUp) return;
    cleanedUp = true;
    runtimeWorker.removeEventListener("message", onMessage);
    runtimeWorker.removeEventListener("error", onError);
    if (activeGenerationRequestId === requestId) activeGenerationRequestId = undefined;
  };

  const onMessage = (event: MessageEvent<WorkerResponse>) => {
    const response = event.data;
    if (response.requestId !== requestId) return;

    if (response.status === "update") {
      queue.push({ choices: [{ delta: { content: response.chunk ?? "" } }] });
      return;
    }
    if (response.status === "complete") {
      queue.close();
      cleanup();
      return;
    }
    if (response.status === "error") {
      queue.fail(
        new StudyAIRuntimeError(
          response.error ?? "AI generation failed.",
          response.stage ?? "generation",
        ),
      );
      cleanup();
    }
  };

  const onError = (event: ErrorEvent) => {
    queue.fail(new StudyAIRuntimeError(event.message || "Study AI worker failed.", "worker"));
    cleanup();
  };

  runtimeWorker.addEventListener("message", onMessage);
  runtimeWorker.addEventListener("error", onError);
  runtimeWorker.postMessage({
    type: "generate",
    requestId,
    data: {
      messages: request.messages,
      temperature: request.temperature ?? 0.4,
      topP: request.top_p ?? 0.9,
      maxTokens: request.max_tokens ?? 320,
      enableThinking: false,
    },
  });

  return {
    async *[Symbol.asyncIterator]() {
      try {
        for await (const chunk of queue) yield chunk;
      } finally {
        if (!cleanedUp) {
          runtimeWorker.postMessage({ type: "interrupt" });
          cleanup();
        }
      }
    },
  };
}

function getWorker() {
  worker ??= new Worker(new URL("../../workers/study-ai.worker.ts", import.meta.url), {
    type: "module",
  });
  return worker;
}

function resetWorker() {
  worker?.terminate();
  worker = undefined;
  activeGenerationRequestId = undefined;
}

function nextRequestId() {
  requestSequence += 1;
  return requestSequence;
}

function normalizeProgress(value: number | undefined) {
  if (!Number.isFinite(value)) return 0;
  const finiteValue = value ?? 0;
  const normalized = finiteValue > 1 ? finiteValue / 100 : finiteValue;
  return Math.min(Math.max(normalized, 0), 1);
}

function sanitizeDiagnosticMessage(value: string) {
  return value
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, " ")
    .replace(/([?&](?:token|access_token|auth)=)[^&\s]+/gi, "$1[redacted]")
    .replace(/Bearer\s+[A-Za-z0-9._~+\/-]+=*/gi, "Bearer [redacted]")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 1200);
}

async function inspectWebGPU() {
  if (typeof navigator === "undefined" || !("gpu" in navigator)) {
    return { webgpu: "unavailable", adapter: "unavailable", shaderF16: "unknown" };
  }

  const gpu = (navigator as NavigatorWithGPU).gpu;
  if (!gpu) {
    return { webgpu: "unavailable", adapter: "unavailable", shaderF16: "unknown" };
  }

  try {
    const adapter = await gpu.requestAdapter();
    if (!adapter) {
      return { webgpu: "available", adapter: "unavailable", shaderF16: "unknown" };
    }
    return {
      webgpu: "available",
      adapter: "available",
      shaderF16: adapter.features?.has("shader-f16") ? "available" : "unavailable",
    };
  } catch {
    return { webgpu: "available", adapter: "error", shaderF16: "unknown" };
  }
}

class AsyncQueue<T> implements AsyncIterable<T> {
  private values: T[] = [];
  private waiters: Array<{
    resolve: (result: IteratorResult<T>) => void;
    reject: (error: unknown) => void;
  }> = [];
  private closed = false;
  private failure: unknown;

  push(value: T) {
    if (this.closed || this.failure !== undefined) return;
    const waiter = this.waiters.shift();
    if (waiter) waiter.resolve({ value, done: false });
    else this.values.push(value);
  }

  close() {
    if (this.closed || this.failure !== undefined) return;
    this.closed = true;
    for (const waiter of this.waiters.splice(0)) {
      waiter.resolve({ value: undefined, done: true });
    }
  }

  fail(error: unknown) {
    if (this.closed || this.failure !== undefined) return;
    this.failure = error;
    for (const waiter of this.waiters.splice(0)) waiter.reject(error);
  }

  async *[Symbol.asyncIterator]() {
    while (true) {
      const result = await this.next();
      if (result.done) return;
      yield result.value;
    }
  }

  private next(): Promise<IteratorResult<T>> {
    if (this.values.length > 0) {
      return Promise.resolve({ value: this.values.shift() as T, done: false });
    }
    if (this.failure !== undefined) return Promise.reject(this.failure);
    if (this.closed) return Promise.resolve({ value: undefined, done: true });

    return new Promise((resolve, reject) => {
      this.waiters.push({ resolve, reject });
    });
  }
}
