import type { InitProgressReport, MLCEngineInterface } from "@mlc-ai/web-llm";
import {
  STUDY_AI_CONTEXT_WINDOW_SIZE,
  STUDY_AI_MODEL_ID,
  STUDY_AI_PREFILL_CHUNK_SIZE,
  STUDY_AI_RUNTIME_VERSION,
  STUDY_AI_SELF_TEST_QUESTION,
} from "./model-config";

export { STUDY_AI_MODEL_ID } from "./model-config";

export type StudyAIStage = "model-load" | "self-test" | "generation" | "unknown";

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

let enginePromise: Promise<MLCEngineInterface> | undefined;
let activeEngine: MLCEngineInterface | undefined;
let activeWorker: Worker | undefined;

export function supportsStudyAI() {
  return typeof navigator !== "undefined" && "gpu" in navigator && typeof Worker !== "undefined";
}

export async function buildStudyAIDiagnostics(
  error: unknown,
  fallbackStage: StudyAIStage = "unknown",
) {
  const stage = error instanceof StudyAIRuntimeError ? error.stage : fallbackStage;
  const message = sanitizeDiagnosticMessage(error instanceof Error ? error.message : String(error));
  const gpu = await inspectWebGPU();

  return [
    `stage: ${stage}`,
    `runtime: WebLLM ${STUDY_AI_RUNTIME_VERSION}`,
    `model: ${STUDY_AI_MODEL_ID}`,
    `context-window: ${STUDY_AI_CONTEXT_WINDOW_SIZE}`,
    `prefill-chunk: ${STUDY_AI_PREFILL_CHUNK_SIZE}`,
    `webgpu: ${gpu.webgpu}`,
    `adapter: ${gpu.adapter}`,
    `shader-f16: ${gpu.shaderF16}`,
    `error: ${message}`,
  ].join("\n");
}

export async function getStudyAIEngine(onProgress: (report: InitProgressReport) => void) {
  if (activeEngine) return activeEngine;
  if (!enginePromise) {
    enginePromise = createStudyAIEngine(onProgress);
  }

  try {
    return await enginePromise;
  } catch (error) {
    enginePromise = undefined;
    activeEngine = undefined;
    activeWorker?.terminate();
    activeWorker = undefined;
    throw error;
  }
}

export async function interruptStudyAI() {
  await activeEngine?.interruptGenerate();
}

async function createStudyAIEngine(onProgress: (report: InitProgressReport) => void) {
  const { CreateWebWorkerMLCEngine } = await import("@mlc-ai/web-llm");
  const worker = new Worker(new URL("../../workers/study-ai.worker.ts", import.meta.url), {
    type: "module",
  });
  activeWorker = worker;

  try {
    const engine = await CreateWebWorkerMLCEngine(
      worker,
      STUDY_AI_MODEL_ID,
      { initProgressCallback: onProgress, logLevel: "WARN" },
      {
        context_window_size: STUDY_AI_CONTEXT_WINDOW_SIZE,
        prefill_chunk_size: STUDY_AI_PREFILL_CHUNK_SIZE,
      },
    );
    await runStudyAISelfTest(engine);
    activeEngine = engine;
    return engine;
  } catch (error) {
    if (error instanceof StudyAIRuntimeError) throw error;
    throw new StudyAIRuntimeError(errorMessage(error), "model-load");
  }
}

async function runStudyAISelfTest(engine: MLCEngineInterface) {
  try {
    const response = await engine.chat.completions.create({
      messages: [{ role: "user", content: STUDY_AI_SELF_TEST_QUESTION }],
      stream: false,
      temperature: 0.1,
      top_p: 0.8,
      max_tokens: 16,
      enable_thinking: false,
    });
    const answer = response.choices[0]?.message?.content?.trim() ?? "";
    if (!/(^|\D)2(\D|$)/.test(answer)) {
      throw new Error(`Unexpected self-test response: ${answer.slice(0, 120) || "<empty>"}`);
    }
  } catch (error) {
    throw new StudyAIRuntimeError(errorMessage(error), "self-test");
  }
}

function errorMessage(error: unknown) {
  return error instanceof Error ? `${error.name}: ${error.message}` : String(error);
}

function sanitizeDiagnosticMessage(value: string) {
  return stripControlCharacters(value)
    .replace(/([?&](?:token|access_token|auth)=)[^&\s]+/gi, "$1[redacted]")
    .replace(/Bearer\s+[A-Za-z0-9._~+/-]+=*/gi, "Bearer [redacted]")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 1200);
}

function stripControlCharacters(value: string) {
  return Array.from(value)
    .filter((character) => {
      const code = character.charCodeAt(0);
      return (code >= 32 && code !== 127) || code === 9 || code === 10 || code === 13;
    })
    .join("");
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
