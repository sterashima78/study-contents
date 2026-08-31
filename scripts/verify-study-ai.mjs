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
  issues.push("StudyAIChat.astro: thinkingを無効化した生成設定を維持してください。");
}
if (!chat.includes("data-study-ai-diagnostics")) {
  issues.push("StudyAIChat.astro: 実行失敗時の診断情報UIを維持してください。");
}
if (!chat.includes("buildStudyAIDiagnostics")) {
  issues.push("StudyAIChat.astro: 診断情報はbrowser-engineの安全な整形処理を利用してください。");
}
if (!chat.includes("buildStudyContext(question)")) {
  issues.push("StudyAIChat.astro: 現在の質問を教材コンテキスト選択へ明示的に渡してください。");
}
if (!chat.includes('finishReason === "length"')) {
  issues.push("StudyAIChat.astro: WebLLMのlength終了を検出して途中終了を明示してください。");
}
if (!chat.includes("回答が長いためここで区切りました")) {
  issues.push("StudyAIChat.astro: 生成上限到達時に『続き』で再開できる案内を表示してください。");
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
if (!context.includes("PRACTICE_CONTEXT_LIMIT = 760")) {
  issues.push("study-context.ts: 練習問題の具体的な問題文を保持する専用上限を維持してください。");
}
if (!context.includes('"[data-guided-practice]"')) {
  issues.push("study-context.ts: 練習・演習質問ではGuidedPracticeを優先参照してください。");
}
if (!context.includes("uniqueContexts([practiceText, focusText")) {
  issues.push("study-context.ts: 練習問題コンテキストをviewport・一般検索より先に選択してください。");
}
if (!modelConfig.includes('STUDY_AI_RUNTIME_VERSION = "0.2.82"')) {
  issues.push("model-config.ts: WebLLM runtime versionを0.2.82へ固定してください。");
}
if (!modelConfig.includes('"Llama-3.2-1B-Instruct-q4f16_1-MLC"')) {
  issues.push(
    "model-config.ts: Androidのモデルアーキテクチャ比較ではLlama 3.2 1B q4f16モデルを固定してください。",
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
if (!prompt.includes("複数問題を勝手に作ったり")) {
  issues.push("system-prompt.ts: 練習問題を1問ずつ説明する制約を維持してください。");
}
if (!prompt.includes("原則250字程度")) {
  issues.push("system-prompt.ts: 小型端末内モデル向けの短い回答上限を維持してください。");
}
if (!prompt.includes("Markdownの見出し記号や強調記号は使わず")) {
  issues.push("system-prompt.ts: textContent表示に適したプレーンテキスト回答を要求してください。");
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
