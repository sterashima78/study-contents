import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const issues = [];
const [packageJson, studyPage, chat, context, engine, modelConfig, worker, prompt] =
  await Promise.all([
    readJson("package.json"),
    readText("src/components/ui/StudyPage.astro"),
    readText("src/components/ai/StudyAIChat.astro"),
    readText("src/lib/ai/study-context.ts"),
    readText("src/lib/ai/browser-engine.ts"),
    readText("src/lib/ai/model-config.ts"),
    readText("src/workers/study-ai.worker.ts"),
    readText("src/lib/ai/system-prompt.ts"),
  ]);

if (packageJson.dependencies?.["@mlc-ai/web-llm"] !== "0.2.82") {
  issues.push(
    "package.json: Android互換性A/Bテストでは @mlc-ai/web-llm 0.2.82 を完全固定してください。",
  );
}
if (packageJson.dependencies?.["@huggingface/transformers"]) {
  issues.push(
    "package.json: Androidでメモリ問題が確認されたTransformers.jsを依存に残さないでください。",
  );
}
if (!studyPage.includes("<StudyAIChat />")) {
  issues.push("StudyPage.astro: 共通AIチャットを配置してください。");
}
if (!chat.includes("data-study-ai-exclude")) {
  issues.push("StudyAIChat.astro: AIチャット自身を教材コンテキストから除外してください。");
}
for (const unsafeSink of ["innerHTML", "insertAdjacentHTML", "outerHTML"]) {
  if (chat.includes(unsafeSink)) {
    issues.push(`StudyAIChat.astro: モデル出力に ${unsafeSink} を使用しないでください。`);
  }
}
if (!chat.includes("enable_thinking: false")) {
  issues.push("StudyAIChat.astro: Qwen3のthinkingを無効化してください。");
}
if (!chat.includes("data-study-ai-diagnostics")) {
  issues.push("StudyAIChat.astro: 実行失敗時の診断情報UIを維持してください。");
}
if (!chat.includes("buildStudyAIDiagnostics")) {
  issues.push("StudyAIChat.astro: 診断情報はbrowser-engineの安全な整形処理を利用してください。");
}
for (const requiredExclusion of ['"script"', '"template"', '"[data-study-ai-exclude]"']) {
  if (!context.includes(requiredExclusion)) {
    issues.push(`study-context.ts: ${requiredExclusion} を教材コンテキストから除外してください。`);
  }
}
if (!context.includes("MAX_RELEVANT_SECTIONS = 2")) {
  issues.push(
    "study-context.ts: Android向けに教材コンテキストを少数セクションへ制限してください。",
  );
}
if (!modelConfig.includes('STUDY_AI_RUNTIME_VERSION = "0.2.82"')) {
  issues.push("model-config.ts: WebLLM runtime versionを0.2.82へ固定してください。");
}
if (!modelConfig.includes('"Qwen3-0.6B-q0f16-MLC"')) {
  issues.push(
    "model-config.ts: AndroidのQwen3実行経路切り分けではQwen3 0.6B q0f16モデルを固定してください。",
  );
}
if (!modelConfig.includes("STUDY_AI_CONTEXT_WINDOW_SIZE = 2048")) {
  issues.push("model-config.ts: Android向けcontext windowを2048に固定してください。");
}
if (!modelConfig.includes("STUDY_AI_PREFILL_CHUNK_SIZE = 128")) {
  issues.push("model-config.ts: Android向けprefill chunkを128に固定してください。");
}
for (const requiredEngineCode of [
  "CreateWebWorkerMLCEngine",
  "STUDY_AI_CONTEXT_WINDOW_SIZE",
  "STUDY_AI_PREFILL_CHUNK_SIZE",
  "runStudyAISelfTest",
  '"self-test"',
  '"shader-f16"',
]) {
  if (!engine.includes(requiredEngineCode)) {
    issues.push(`browser-engine.ts: ${requiredEngineCode} を維持してください。`);
  }
}
if (engine.includes("navigator.userAgent")) {
  issues.push("browser-engine.ts: 診断情報に完全なUser-Agentを含めないでください。");
}
if (!worker.includes("WebWorkerMLCEngineHandler")) {
  issues.push("study-ai.worker.ts: WebLLM推論を専用Web Workerで実行してください。");
}
if (!prompt.includes("<study_context>")) {
  issues.push("system-prompt.ts: 教材コンテキストの信頼境界を明示してください。");
}

if (issues.length > 0) {
  console.error("Study AI verification failed:");
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log("Study AI verification passed.");
}

async function readText(path) {
  return readFile(new URL(path, root), "utf8");
}

async function readJson(path) {
  return JSON.parse(await readText(path));
}
