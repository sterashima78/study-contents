import { readdir, readFile } from "node:fs/promises";
import { curriculumReferences } from "../src/content/curriculum-references.js";

const distDirectory = new URL("../dist/", import.meta.url);
const issues = [];
let checkedPages = 0;

for (const [courseKey, reference] of Object.entries(curriculumReferences)) {
  const routeBase = reference.routeBase ?? courseKey;
  const courseDirectory = new URL(`${routeBase}/`, distDirectory);
  let htmlFiles;

  try {
    htmlFiles = await findHtmlFiles(courseDirectory);
  } catch {
    issues.push(`${courseKey}: ビルド出力ディレクトリ ${routeBase}/ が存在しません。`);
    continue;
  }

  if (htmlFiles.length === 0) {
    issues.push(`${courseKey}: 検証対象のHTMLが見つかりません。`);
    continue;
  }

  for (const htmlFile of htmlFiles) {
    const html = await readFile(htmlFile, "utf8");
    checkedPages += 1;

    if (!html.includes("data-curriculum-reference")) {
      issues.push(`${relativePath(htmlFile)}: 学習指導要領の参照表示がありません。`);
    }
    if (!html.includes(`data-curriculum-course="${reference.curriculumCourse}"`)) {
      issues.push(`${relativePath(htmlFile)}: 対応科目の識別情報が一致しません。`);
    }
    if (!html.includes(reference.guidelineUrl) || !html.includes(reference.commentaryUrl)) {
      issues.push(`${relativePath(htmlFile)}: 文部科学省の公式資料リンクが不足しています。`);
    }
  }
}

if (issues.length > 0) {
  console.error("Curriculum build-output verification failed:");
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log(`Curriculum build-output verification passed: ${checkedPages} pages checked.`);
}

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const child = new URL(entry.name, directory);
    if (entry.isDirectory()) {
      child.pathname += "/";
      files.push(...(await findHtmlFiles(child)));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(child);
    }
  }

  return files;
}

function relativePath(file) {
  return file.pathname.slice(distDirectory.pathname.length);
}
