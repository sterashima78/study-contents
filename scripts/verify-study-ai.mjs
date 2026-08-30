import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const issues = [];
const [packageJson, studyPage, chat, context, engine, prompt] = await Promise.all([
  readJson("package.json"),
  readText("src/components/ui/StudyPage.astro"),
  readText("src/components/ai/StudyAIChat.astro"),
  readText("src/lib/ai/study-context.ts"),
  readText("src/lib/ai/browser-engine.ts"),
  readText("src/lib/ai/system-prompt.ts"),
]);

if (packageJson.dependencies?.["@mlc-ai/web-llm"] !== "0.2.84") {
  issues.push("package.json: @mlc-ai/web-llm は検証済みの 0.2.84 に固定してください。");
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
  issues.push("StudyAIChat.astro: 初期版ではQwen3のthinkingを無効化してください。");
}
for (const requiredExclusion of ['"script"', '"template"', '"[data-study-ai-exclude]"']) {
  if (!context.includes(requiredExclusion)) {
    issues.push(`study-context.ts: ${requiredExclusion} を教材コンテキストから除外してください。`);
  }
}
if (!engine.includes('"Qwen3-1.7B-q4f16_1-MLC"')) {
  issues.push("browser-engine.ts: 許可済みQwen3モデルを固定してください。");
}
if (!engine.includes("new Worker")) {
  issues.push("browser-engine.ts: 推論はWeb Workerで実行してください。");
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
