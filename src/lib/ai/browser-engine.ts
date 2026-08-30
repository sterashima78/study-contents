import type { InitProgressReport, MLCEngineInterface } from "@mlc-ai/web-llm";

export const STUDY_AI_MODEL_ID = "Qwen3-1.7B-q4f16_1-MLC";

let enginePromise: Promise<MLCEngineInterface> | undefined;
let activeEngine: MLCEngineInterface | undefined;

export function supportsStudyAI() {
  return typeof navigator !== "undefined" && "gpu" in navigator && typeof Worker !== "undefined";
}

export async function getStudyAIEngine(onProgress: (report: InitProgressReport) => void) {
  if (activeEngine) return activeEngine;
  if (!enginePromise) {
    enginePromise = (async () => {
      const { CreateWebWorkerMLCEngine } = await import("@mlc-ai/web-llm");
      const worker = new Worker(new URL("../../workers/study-ai.worker.ts", import.meta.url), {
        type: "module",
      });
      try {
        const engine = await CreateWebWorkerMLCEngine(
          worker,
          STUDY_AI_MODEL_ID,
          { initProgressCallback: onProgress, logLevel: "WARN" },
          { context_window_size: 4096 },
        );
        activeEngine = engine;
        return engine;
      } catch (error) {
        worker.terminate();
        throw error;
      }
    })();
  }

  try {
    return await enginePromise;
  } catch (error) {
    enginePromise = undefined;
    throw error;
  }
}

export async function interruptStudyAI() {
  await activeEngine?.interruptGenerate();
}
