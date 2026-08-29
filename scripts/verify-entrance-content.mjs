import { readdir, readFile } from "node:fs/promises";

const entranceDirectory = new URL("../src/content/entrance/", import.meta.url);
const datePattern = /^\d{4}-\d{2}-\d{2}$/;
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

  if (document.copyrightPolicyVersion !== 1) {
    issues.push(`${relativeName}: copyrightPolicyVersion は 1 にしてください。`);
  }

  if (!Array.isArray(document.problems) || document.problems.length === 0) {
    issues.push(`${relativeName}: problems は1問以上の配列にしてください。`);
    continue;
  }

  const ids = new Set();

  for (const [index, problem] of document.problems.entries()) {
    const location = `${relativeName} problems[${index}]`;

    if (typeof problem.id !== "string" || problem.id.length === 0) {
      issues.push(`${location}: id が必要です。`);
    } else if (ids.has(problem.id)) {
      issues.push(`${location}: id「${problem.id}」が重複しています。`);
    } else {
      ids.add(problem.id);
    }

    if (problem.rights?.origin !== "original") {
      issues.push(`${location}: rights.origin は original のみ公開可能です。`);
    }

    if (problem.rights?.reviewStatus !== "reviewed") {
      issues.push(`${location}: rights.reviewStatus は reviewed にしてください。`);
    }

    if (
      typeof problem.rights?.reviewedAt !== "string" ||
      !datePattern.test(problem.rights.reviewedAt) ||
      !isValidDate(problem.rights.reviewedAt)
    ) {
      issues.push(`${location}: rights.reviewedAt は有効な YYYY-MM-DD 形式の日付にしてください。`);
    }

    for (const field of forbiddenOriginalFields) {
      if (hasOwnPropertyDeep(problem, field)) {
        issues.push(
          `${location}: original 問題には外部問題本文等を保持するフィールド「${field}」を含めないでください。`,
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
    if (Object.prototype.hasOwnProperty.call(value, field)) return true;
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
