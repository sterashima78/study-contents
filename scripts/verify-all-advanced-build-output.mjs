import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const contentDirectory = new URL("../src/content/entrance/", import.meta.url);
const issues = [];
const advancedFiles = (await readdir(contentDirectory))
  .filter((name) => name.endsWith("-advanced.json"))
  .sort();

let topicCount = 0;
let patternCount = 0;

for (const filename of advancedFiles) {
  const document = JSON.parse(await readFile(new URL(filename, contentDirectory), "utf8"));
  if (!Array.isArray(document.topicSets)) continue;

  for (const topicSet of document.topicSets) {
    topicCount += 1;
    const areaUrl = new URL(
      `../dist/${topicSet.course}/${topicSet.topic}/index.html`,
      import.meta.url,
    );
    const areaHtml = await readGeneratedFile(areaUrl);
    if (areaHtml !== undefined) {
      checkMarker(areaHtml, "応用・発展へ進む", areaUrl);
      checkMarker(areaHtml, `${topicSet.areaTitle} 応用・発展`, areaUrl);
    }

    const indexUrl = new URL(
      `../dist/${topicSet.course}/entrance/${topicSet.topic}/index.html`,
      import.meta.url,
    );
    const indexHtml = await readGeneratedFile(indexUrl);
    if (indexHtml !== undefined) {
      checkMarker(indexHtml, topicSet.title, indexUrl);
      checkMarker(indexHtml, topicSet.areaTitle, indexUrl);
      for (const pattern of topicSet.patterns) {
        checkMarker(indexHtml, pattern.title, indexUrl);
      }
    }

    for (const pattern of topicSet.patterns) {
      patternCount += 1;
      const prefix = `${topicSet.course}-${topicSet.topic}-pattern-`;
      const slug = pattern.id.replace(prefix, "");
      const pageUrl = new URL(
        `../dist/${topicSet.course}/entrance/${topicSet.topic}/${slug}/index.html`,
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
}

if (topicCount !== 42) {
  issues.push(`数学I以外の発展教材は42領域必要ですが、${topicCount}領域でした。`);
}

if (issues.length > 0) {
  console.error("All-course application/advanced build verification failed:");
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exitCode = 1;
} else {
  console.log(
    `All-course application/advanced build verification passed: ${advancedFiles.length} documents, ${topicCount} topics, ${patternCount} pattern pages.`,
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
