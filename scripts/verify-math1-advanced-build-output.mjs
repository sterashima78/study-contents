import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const contentFiles = [
  "math1-algebra.json",
  "math1-geometry.json",
  "math1-quadratic.json",
  "math1-data-analysis.json",
];

const issues = [];
let patternCount = 0;

for (const filename of contentFiles) {
  const contentUrl = new URL(`../src/content/entrance/${filename}`, import.meta.url);
  const document = JSON.parse(await readFile(contentUrl, "utf8"));
  const indexUrl = new URL(`../dist/math1/entrance/${document.topic}/index.html`, import.meta.url);
  const indexHtml = await readGeneratedFile(indexUrl);

  if (indexHtml !== undefined) {
    checkMarker(indexHtml, document.title, indexUrl);
    for (const pattern of document.patterns) {
      checkMarker(indexHtml, pattern.title, indexUrl);
    }
  }

  for (const pattern of document.patterns) {
    patternCount += 1;
    const prefix = `math1-${document.topic}-pattern-`;
    const slug = pattern.id.replace(prefix, "");
    const pageUrl = new URL(
      `../dist/math1/entrance/${document.topic}/${slug}/index.html`,
      import.meta.url,
    );
    const html = await readGeneratedFile(pageUrl);
    if (html === undefined) continue;

    for (const marker of [
      pattern.title,
      "考え方・着眼点",
      "例題",
      "ステップバイステップの練習",
      "実践",
    ]) {
      checkMarker(html, marker, pageUrl);
    }

    if (html.includes("application-diagram")) {
      issues.push(
        `${fileURLToPath(pageUrl)}: 図解停止中ですが application-diagram が出力されています。`,
      );
    }
  }
}

if (issues.length > 0) {
  console.error("Math I application/advanced build verification failed:");
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exitCode = 1;
} else {
  console.log(
    `Math I application/advanced build verification passed: ${contentFiles.length} topics, ${patternCount} pattern pages.`,
  );
}

async function readGeneratedFile(url) {
  try {
    return await readFile(url, "utf8");
  } catch (error) {
    issues.push(`${fileURLToPath(url)}: 生成HTMLを読み込めません: ${error.message}`);
    return undefined;
  }
}

function checkMarker(html, marker, url) {
  if (!html.includes(marker)) {
    issues.push(`${fileURLToPath(url)}: 必須文字列「${marker}」が見つかりません。`);
  }
}
