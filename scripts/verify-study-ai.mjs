import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const issues = [];
const [packageJson, studyPage, chat, context, engine, modelConfig, worker, prompt] = await Promise.all([
  readJson("package.json"),
  readText("src/components/ui/StudyPage.astro"),
  readText("src/components/ai/StudyAIChat.astro"),
  readText("src/lib/ai/study-context.ts"),
  readText("src/lib/ai/browser-engine.ts"),
  readText("src/lib/ai/model-config.ts"),
  readText("src/workers/study-ai.worker.ts"),
  readText("src/lib/ai/system-prompt.ts"),
]);

if (packageJson.dependencies?.["@huggingface/transformers"] !== "4.2.0") {
  issues.push("package.json: @huggingface/transformers は検証済みの 4.2.0 に固定してください。");
}
if (packageJson.dependencies?.["@mlc-ai/web-llm"]) {
  issues.push("package.json: 置換済みの @mlc-ai/web-llm を依存に残さないでください。");
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
for (const requiredExclusion of ['"script"', '"template"', '"[data-study-ai-exclude]"']) {
  if (!context.includes(requiredExclusion)) {
    issues.push(`study-context.ts: ${requiredExclusion} を教材コンテキストから除外してください。`);
  }
}
if (!modelConfig.includes('"onnx-community/Qwen3-1.7B-ONNX"')) {
  issues.push("model-config.ts: 許可済みQwen3 ONNXモデルを固定してください。");
}
if (!/STUDY_AI_MODEL_REVISION\s*=\s*"[0-9a-f]{40}"/.test(modelConfig)) {
  issues.push("model-config.ts: Hugging Faceモデルを40桁のcommit idで固定してください。");
}
if (!modelConfig.includes('STUDY_AI_MODEL_DTYPE = "q4f16"')) {
  issues.push("model-config.ts: Android検証対象のq4f16量子化を固定してください。");
}
if (!engine.includes("new Worker")) {
  issues.push("browser-engine.ts: 推論はWeb Workerで実行してください。");
}
for (const requiredWorkerCode of [
  "AutoModelForCausalLM",
  'device: "webgpu"',
  "STUDY_AI_MODEL_REVISION",
  "enable_thinking: false",
]) {
  if (!worker.includes(requiredWorkerCode)) {
    issues.push(`study-ai.worker.ts: ${requiredWorkerCode} を維持してください。`);
  }
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
