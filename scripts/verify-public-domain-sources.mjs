import { readFile } from "node:fs/promises";

const registryUrl = new URL("../src/content/text-sources/public-domain.json", import.meta.url);
const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const idPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const allowedLanguages = new Set(["ja", "en"]);
const allowedJurisdictions = new Set(["JP"]);
const allowedReviewStatuses = new Set(["candidate", "approved", "rejected"]);
const allowedWartimeReviews = new Set(["not-applicable", "reviewed"]);
const forbiddenTextFields = new Set([
  "text",
  "content",
  "paragraphs",
  "sourceText",
  "translationText",
  "excerpt",
]);

const issues = [];
let registry;

try {
  registry = JSON.parse(await readFile(registryUrl, "utf8"));
} catch (error) {
  console.error(`Public-domain source verification failed: ${error.message}`);
  process.exit(1);
}

if (registry.schemaVersion !== 1) {
  issues.push("schemaVersion は 1 にしてください。");
}

if (registry.policy !== "ADR 0073") {
  issues.push("policy は ADR 0073 にしてください。");
}

if (!Array.isArray(registry.sources)) {
  issues.push("sources は配列にしてください。");
} else {
  const seenIds = new Set();

  for (const [index, source] of registry.sources.entries()) {
    const location = `sources[${index}]`;
    validateNoText(source, location);

    if (typeof source.id !== "string" || !idPattern.test(source.id)) {
      issues.push(`${location}: id は kebab-case のASCII文字列にしてください。`);
    } else if (seenIds.has(source.id)) {
      issues.push(`${location}: id「${source.id}」が重複しています。`);
    } else {
      seenIds.add(source.id);
    }

    requireNonEmptyString(source.title, `${location}.title`);
    requireNonEmptyString(source.author, `${location}.author`);

    if (!allowedLanguages.has(source.language)) {
      issues.push(`${location}.language: ja または en にしてください。`);
    }

    requireNonEmptyString(source.sourceProvider, `${location}.sourceProvider`);
    validateHttpsUrl(source.sourceUrl, `${location}.sourceUrl`);
    validateDate(source.sourceAccessedAt, `${location}.sourceAccessedAt`);

    if (!allowedJurisdictions.has(source.jurisdiction)) {
      issues.push(`${location}.jurisdiction: JP にしてください。`);
    }

    if (!allowedReviewStatuses.has(source.reviewStatus)) {
      issues.push(`${location}.reviewStatus: candidate、approved、rejected のいずれかにしてください。`);
      continue;
    }

    if (source.reviewStatus === "approved") {
      validateApprovedSource(source, location);
    }

    if (source.reviewStatus === "rejected") {
      requireNonEmptyString(source.rejectionReason, `${location}.rejectionReason`);
    }
  }
}

if (issues.length > 0) {
  console.error("Public-domain source verification failed:");
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exitCode = 1;
} else {
  const total = registry.sources.length;
  const approved = registry.sources.filter((source) => source.reviewStatus === "approved").length;
  console.log(`Public-domain source verification passed: ${total} source(s), ${approved} approved.`);
}

function validateApprovedSource(source, location) {
  requireNonEmptyString(source.rightsBasis, `${location}.rightsBasis`);
  validateDate(source.reviewedAt, `${location}.reviewedAt`);

  if (!allowedWartimeReviews.has(source.wartimeExtensionReview)) {
    issues.push(
      `${location}.wartimeExtensionReview: approved では not-applicable または reviewed が必要です。`,
    );
  }

  const hasDeathYear = Number.isInteger(source.authorDeathYear);
  const hasPublicationYear = Number.isInteger(source.publicationYear);
  if (!hasDeathYear && !hasPublicationYear) {
    issues.push(
      `${location}: approved では authorDeathYear または publicationYear の少なくとも一方が必要です。`,
    );
  }

  if (hasDeathYear) validateYear(source.authorDeathYear, `${location}.authorDeathYear`);
  if (hasPublicationYear) validateYear(source.publicationYear, `${location}.publicationYear`);

  if (!Array.isArray(source.evidenceUrls) || source.evidenceUrls.length === 0) {
    issues.push(`${location}.evidenceUrls: approved では1件以上必要です。`);
  } else {
    for (const [index, url] of source.evidenceUrls.entries()) {
      validateHttpsUrl(url, `${location}.evidenceUrls[${index}]`);
    }
  }
}

function requireNonEmptyString(value, location) {
  if (typeof value !== "string" || value.trim().length === 0) {
    issues.push(`${location}: 空でない文字列が必要です。`);
  }
}

function validateHttpsUrl(value, location) {
  if (typeof value !== "string") {
    issues.push(`${location}: HTTPS URL が必要です。`);
    return;
  }

  try {
    const url = new URL(value);
    if (url.protocol !== "https:") {
      issues.push(`${location}: HTTPS URL にしてください。`);
    }
  } catch {
    issues.push(`${location}: 有効なURLではありません。`);
  }
}

function validateDate(value, location) {
  if (typeof value !== "string" || !datePattern.test(value) || !isValidDate(value)) {
    issues.push(`${location}: 有効な YYYY-MM-DD 形式の日付にしてください。`);
  }
}

function validateYear(value, location) {
  const currentYear = new Date().getUTCFullYear();
  if (!Number.isInteger(value) || value < 1 || value > currentYear) {
    issues.push(`${location}: 1〜${currentYear} の整数にしてください。`);
  }
}

function validateNoText(value, location) {
  if (!value || typeof value !== "object") return;

  for (const [key, child] of Object.entries(value)) {
    if (forbiddenTextFields.has(key)) {
      issues.push(`${location}: 権利台帳に本文フィールド「${key}」を保存しないでください。`);
    }
    if (child && typeof child === "object") {
      validateNoText(child, `${location}.${key}`);
    }
  }
}

function isValidDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
  );
}
