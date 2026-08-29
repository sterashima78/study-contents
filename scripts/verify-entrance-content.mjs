import { readdir, readFile } from "node:fs/promises";

const entranceDirectory = new URL("../src/content/entrance/", import.meta.url);
const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const allowedLevels = new Set(["application", "advanced"]);
const allowedGeneratorKeys = new Set([
  "bounded-minimum",
  "parabola-tangent",
  "triangle-rectangle",
  "determine-quadratic",
]);
const allowedDiagramKinds = new Set(["parabola-tangent", "triangle-rectangle"]);
const forbiddenOriginalFields = new Set([
  "sourceText",
  "sourceProblem",
  "sourceSolution",
  "sourceImage",
  "sourceTable",
]);

const issues = [];
const files = await findJsonFiles(entranceDirectory);

if (files.length === 0) {
  issues.push("src/content/entrance/ に検証対象のJSON教材がありません。");
}

for (const file of files) {
  const relativeName = file.pathname.split("/src/content/entrance/").at(-1) ?? file.pathname;
  let document;

  try {
    document = JSON.parse(await readFile(file, "utf8"));
  } catch (error) {
    issues.push(`${relativeName}: JSONを解析できません: ${error.message}`);
    continue;
  }

  if (document.copyrightPolicyVersion !== 2) {
    issues.push(`${relativeName}: copyrightPolicyVersion は 2 にしてください。`);
  }

  if (!Array.isArray(document.patterns) || document.patterns.length === 0) {
    issues.push(`${relativeName}: patterns は1件以上の配列にしてください。`);
    continue;
  }

  const ids = new Set();

  for (const [index, pattern] of document.patterns.entries()) {
    const location = `${relativeName} patterns[${index}]`;

    if (typeof pattern.id !== "string" || pattern.id.length === 0) {
      issues.push(`${location}: id が必要です。`);
    } else if (ids.has(pattern.id)) {
      issues.push(`${location}: id「${pattern.id}」が重複しています。`);
    } else {
      ids.add(pattern.id);
    }

    if (!allowedLevels.has(pattern.level)) {
      issues.push(`${location}: level は application または advanced にしてください。`);
    }

    if (pattern.level === "entrance-standard") {
      issues.push(`${location}: entrance-standard は難易度ラベルとして使用しません。`);
    }

    validateLearningStructure(pattern, location);
    validateGenerator(pattern, location);
    validateDiagram(pattern, location);
    validateRights(pattern, location);

    for (const field of forbiddenOriginalFields) {
      if (hasOwnPropertyDeep(pattern, field)) {
        issues.push(
          `${location}: original 教材には外部問題本文等を保持するフィールド「${field}」を含めないでください。`,
        );
      }
    }
  }
}

if (issues.length > 0) {
  console.error("Entrance content verification failed:");
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exitCode = 1;
} else {
  console.log(`Entrance content verification passed: ${files.length} file(s).`);
}

function validateLearningStructure(pattern, location) {
  if (!Array.isArray(pattern.thinking?.body) || pattern.thinking.body.length === 0) {
    issues.push(`${location}: thinking.body に考え方の説明が必要です。`);
  }
  if (!Array.isArray(pattern.thinking?.checkpoints) || pattern.thinking.checkpoints.length === 0) {
    issues.push(`${location}: thinking.checkpoints に着眼点が必要です。`);
  }

  if (!Array.isArray(pattern.example?.statement) || pattern.example.statement.length === 0) {
    issues.push(`${location}: example.statement に例題が必要です。`);
  }
  if (
    !Array.isArray(pattern.example?.solution?.steps) ||
    pattern.example.solution.steps.length === 0
  ) {
    issues.push(`${location}: example.solution.steps に例題の解答過程が必要です。`);
  }

  if (!Array.isArray(pattern.guidedPractice?.steps) || pattern.guidedPractice.steps.length === 0) {
    issues.push(`${location}: guidedPractice.steps にステップ練習が必要です。`);
  } else {
    for (const [stepIndex, step] of pattern.guidedPractice.steps.entries()) {
      if (!Array.isArray(step.answers) || step.answers.length === 0) {
        issues.push(`${location}: guidedPractice.steps[${stepIndex}].answers が必要です。`);
      }
    }
  }

  if (!Array.isArray(pattern.practice?.statement) || pattern.practice.statement.length === 0) {
    issues.push(`${location}: practice.statement に実践問題が必要です。`);
  }
  if (
    !Array.isArray(pattern.practice?.solution?.steps) ||
    pattern.practice.solution.steps.length === 0
  ) {
    issues.push(`${location}: practice.solution.steps に実践問題の解答過程が必要です。`);
  }
}

function validateGenerator(pattern, location) {
  if (pattern.generatorKey === undefined) return;
  if (!allowedGeneratorKeys.has(pattern.generatorKey)) {
    issues.push(
      `${location}: generatorKey「${pattern.generatorKey}」は許可済み生成器ではありません。`,
    );
  }
}

function validateDiagram(pattern, location) {
  if (pattern.diagram === undefined) return;
  if (!allowedDiagramKinds.has(pattern.diagram.kind)) {
    issues.push(`${location}: diagram.kind「${pattern.diagram.kind}」は未対応です。`);
  }
  if (typeof pattern.diagram.caption !== "string" || pattern.diagram.caption.length === 0) {
    issues.push(`${location}: diagram.caption が必要です。`);
  }
}

function validateRights(pattern, location) {
  if (pattern.rights?.origin !== "original") {
    issues.push(`${location}: rights.origin は original のみ公開可能です。`);
  }

  if (pattern.rights?.reviewStatus !== "reviewed") {
    issues.push(`${location}: rights.reviewStatus は reviewed にしてください。`);
  }

  if (
    typeof pattern.rights?.reviewedAt !== "string" ||
    !datePattern.test(pattern.rights.reviewedAt) ||
    !isValidDate(pattern.rights.reviewedAt)
  ) {
    issues.push(`${location}: rights.reviewedAt は有効な YYYY-MM-DD 形式の日付にしてください。`);
  }
}

async function findJsonFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const child = new URL(entry.name, directory);
    if (entry.isDirectory()) {
      child.pathname += "/";
      files.push(...(await findJsonFiles(child)));
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      files.push(child);
    }
  }

  return files.sort((left, right) => left.pathname.localeCompare(right.pathname));
}

function hasOwnPropertyDeep(value, field) {
  if (Array.isArray(value)) {
    return value.some((item) => hasOwnPropertyDeep(item, field));
  }

  if (value && typeof value === "object") {
    if (Object.hasOwn(value, field)) return true;
    return Object.values(value).some((item) => hasOwnPropertyDeep(item, field));
  }

  return false;
}

function isValidDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
  );
}
