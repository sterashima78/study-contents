export { STUDY_AI_MODEL_ID } from "./model-config";

export type StudyAIProgressReport = {
  progress: number;
};

type StudyAIMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

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
  progress?: number;
  report?: {
    progress?: number;
  };
};

let worker: Worker | undefined;
let enginePromise: Promise<StudyAIEngineInterface> | undefined;
let requestSequence = 0;
let activeGenerationRequestId: number | undefined;

export function supportsStudyAI() {
  return typeof navigator !== "undefined" && "gpu" in navigator && typeof Worker !== "undefined";
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
        reject(new Error(response.error ?? "Failed to load the AI model."));
      }
    };

    const onError = (event: ErrorEvent) => {
      cleanup();
      reject(new Error(event.message || "Study AI worker failed."));
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
    throw new Error("AI generation is already running.");
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
      queue.fail(new Error(response.error ?? "AI generation failed."));
      cleanup();
    }
  };

  const onError = (event: ErrorEvent) => {
    queue.fail(new Error(event.message || "Study AI worker failed."));
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
