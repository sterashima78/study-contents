import { readdir, readFile } from "node:fs/promises";

const adrDirectory = new URL("../docs/adr/", import.meta.url);
const filenamePattern = /^(\d{4})-([a-z0-9]+(?:-[a-z0-9]+)*)\.md$/;
const titlePattern = /^# ADR (\d{4}): .+$/m;
const statusPattern = /^- Status: (.+)$/gm;
const datePattern = /^- Date: (\d{4}-\d{2}-\d{2})$/gm;
const supersededByPattern = /^- Superseded by: (.+)$/gm;
const adrReferencePattern = /\bADR (\d{4})\b/g;
const allowedStatuses = new Set(["Proposed", "Accepted", "Rejected", "Deprecated", "Superseded"]);

const issues = [];
const entries = await readdir(adrDirectory, { withFileTypes: true });
const adrFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith(".md"));
const records = [];

for (const entry of adrFiles) {
  const filenameMatch = entry.name.match(filenamePattern);
  if (!filenameMatch) {
    issues.push(`${entry.name}: ファイル名は NNNN-kebab-case.md 形式にしてください。`);
    continue;
  }

  records.push({
    filename: entry.name,
    number: Number(filenameMatch[1]),
    numberText: filenameMatch[1],
    content: await readFile(new URL(entry.name, adrDirectory), "utf8"),
  });
}

records.sort(
  (left, right) => left.number - right.number || left.filename.localeCompare(right.filename),
);

const filenamesByNumber = new Map();
for (const record of records) {
  const duplicates = filenamesByNumber.get(record.number) ?? [];
  duplicates.push(record.filename);
  filenamesByNumber.set(record.number, duplicates);
}

for (const [number, filenames] of filenamesByNumber) {
  if (filenames.length > 1) {
    issues.push(
      `ADR ${String(number).padStart(4, "0")}: 採番が重複しています: ${filenames.join(", ")}`,
    );
  }
}

const uniqueNumbers = [...filenamesByNumber.keys()].sort((left, right) => left - right);
for (const [index, number] of uniqueNumbers.entries()) {
  const expected = index + 1;
  if (number !== expected) {
    issues.push(
      `ADR採番: ${String(expected).padStart(4, "0")} が必要ですが、${String(number).padStart(4, "0")} が見つかりました。欠番や開始番号を確認してください。`,
    );
    break;
  }
}

const knownNumbers = new Set(uniqueNumbers);

for (const record of records) {
  const titleMatch = record.content.match(titlePattern);
  if (!titleMatch) {
    issues.push(`${record.filename}: 見出しは「# ADR NNNN: タイトル」形式にしてください。`);
  } else if (titleMatch[1] !== record.numberText) {
    issues.push(
      `${record.filename}: ファイル名の番号 ${record.numberText} と見出しの番号 ${titleMatch[1]} が一致しません。`,
    );
  }

  const metadata = getMetadata(record.content);
  const statusMatches = [...metadata.matchAll(statusPattern)];
  if (statusMatches.length !== 1) {
    issues.push(`${record.filename}: 「- Status: ...」は1つだけ必要です。`);
  }

  const status = statusMatches[0]?.[1];
  if (status && !allowedStatuses.has(status)) {
    issues.push(
      `${record.filename}: Status「${status}」は使用できません。使用可能: ${[...allowedStatuses].join(", ")}`,
    );
  }

  const dateMatches = [...metadata.matchAll(datePattern)];
  if (dateMatches.length !== 1) {
    issues.push(`${record.filename}: 「- Date: YYYY-MM-DD」は1つだけ必要です。`);
  } else if (!isValidDate(dateMatches[0][1])) {
    issues.push(`${record.filename}: Date「${dateMatches[0][1]}」は有効な日付ではありません。`);
  }

  const supersededByMatches = [...metadata.matchAll(supersededByPattern)];
  if (supersededByMatches.length > 1) {
    issues.push(`${record.filename}: 「- Superseded by: ...」は最大1つです。`);
  }

  if (status === "Superseded" && supersededByMatches.length !== 1) {
    issues.push(
      `${record.filename}: Status が Superseded の場合は「- Superseded by: ADR NNNN」が必要です。`,
    );
  }

  if (status && status !== "Superseded" && supersededByMatches.length > 0) {
    issues.push(
      `${record.filename}: 「Superseded by」は Status が Superseded のADRだけに指定できます。`,
    );
  }

  if (supersededByMatches.length === 1 && !/^ADR \d{4}$/.test(supersededByMatches[0][1])) {
    issues.push(
      `${record.filename}: 「Superseded by」は「ADR NNNN」形式で1件だけ指定してください。`,
    );
  }

  const missingReferences = new Set();
  for (const referenceMatch of record.content.matchAll(adrReferencePattern)) {
    const referencedNumber = Number(referenceMatch[1]);
    if (referencedNumber !== record.number && !knownNumbers.has(referencedNumber)) {
      missingReferences.add(referenceMatch[1]);
    }
  }

  for (const missingReference of missingReferences) {
    issues.push(`${record.filename}: 参照先 ADR ${missingReference} が存在しません。`);
  }
}

if (issues.length > 0) {
  console.error("ADR verification failed:");
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exitCode = 1;
} else {
  console.log(`ADR verification passed: ${records.length} ADRs are consistent and sequential.`);
}

function getMetadata(content) {
  const firstSectionIndex = content.indexOf("\n## ");
  return firstSectionIndex === -1 ? content : content.slice(0, firstSectionIndex);
}

function isValidDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
  );
}
