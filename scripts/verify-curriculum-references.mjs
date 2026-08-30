import { access, readdir } from "node:fs/promises";
import { curriculumReferences } from "../src/content/curriculum-references.js";

const pagesDirectory = new URL("../src/pages/", import.meta.url);
const allowedHost = "www.mext.go.jp";
const nonCoursePageDirectories = new Set(["middle-school", "practice", "progress"]);
const requiredFields = [
  "courseTitle",
  "subjectTitle",
  "curriculumCourse",
  "guidelineTitle",
  "guidelineUrl",
  "commentaryTitle",
  "commentaryUrl",
  "lastVerified",
];
const issues = [];

const pageEntries = await readdir(pagesDirectory, { withFileTypes: true });
const courseKeys = pageEntries
  .filter(
    (entry) =>
      entry.isDirectory() &&
      !entry.name.startsWith("[") &&
      !nonCoursePageDirectories.has(entry.name),
  )
  .map((entry) => entry.name)
  .sort();
const registeredKeys = Object.keys(curriculumReferences).sort();

for (const courseKey of courseKeys) {
  if (!curriculumReferences[courseKey]) {
    issues.push(`${courseKey}: 学習指導要領の参照情報が登録されていません。`);
  }
}

for (const courseKey of registeredKeys) {
  const reference = curriculumReferences[courseKey];
  const routeBase = reference.routeBase ?? courseKey;

  try {
    await access(new URL(`../src/pages/${routeBase}/`, import.meta.url));
  } catch {
    issues.push(`${courseKey}: 対応する src/pages/${routeBase}/ が存在しません。`);
  }

  for (const field of requiredFields) {
    if (typeof reference[field] !== "string" || reference[field].trim().length === 0) {
      issues.push(`${courseKey}: ${field} は空でない文字列にしてください。`);
    }
  }

  if (reference.routeBase !== undefined) {
    if (typeof reference.routeBase !== "string" || reference.routeBase.trim().length === 0) {
      issues.push(`${courseKey}: routeBase は指定する場合、空でない文字列にしてください。`);
    } else if (reference.routeBase.startsWith("/") || reference.routeBase.endsWith("/")) {
      issues.push(`${courseKey}: routeBase は先頭・末尾に / を付けないでください。`);
    }
  }

  for (const field of ["guidelineUrl", "commentaryUrl"]) {
    validateOfficialUrl(courseKey, field, reference[field]);
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(reference.lastVerified)) {
    issues.push(`${courseKey}: lastVerified は YYYY-MM-DD 形式にしてください。`);
  }
}

if (issues.length > 0) {
  console.error("Curriculum reference verification failed:");
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log(
    `Curriculum reference verification passed: ${registeredKeys.length} courses are registered.`,
  );
}

function validateOfficialUrl(courseKey, field, value) {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.hostname !== allowedHost) {
      issues.push(`${courseKey}: ${field} は https://${allowedHost}/ の公式URLにしてください。`);
    }
  } catch {
    issues.push(`${courseKey}: ${field} は有効なURLにしてください。`);
  }
}
