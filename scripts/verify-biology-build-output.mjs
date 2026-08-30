import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const checks = [
  {
    path: new URL("../dist/index.html", import.meta.url),
    markers: ["生物基礎", "生物"],
  },
  {
    path: new URL("../dist/biology-basic/index.html", import.meta.url),
    markers: ["生物基礎", "学習する3つの領域", "全13小教材", "生物の多様性と生態系"],
  },
  {
    path: new URL(
      "../dist/biology-basic/biological-features/commonality-and-energy/commonality-diversity-cells/index.html",
      import.meta.url,
    ),
    markers: ["生物の共通性と多様性", "原核細胞と真核細胞", "理解を確認する3問"],
  },
  {
    path: new URL(
      "../dist/biology-basic/human-regulation/nervous-endocrine-homeostasis/exercise/index.html",
      import.meta.url,
    ),
    markers: ["神経・内分泌と恒常性の単元末演習", "単元末演習", "全6問"],
  },
  {
    path: new URL("../dist/biology/index.html", import.meta.url),
    markers: ["生物", "学習する5つの領域", "全10小教材", "生態と環境"],
  },
  {
    path: new URL(
      "../dist/biology/evolution/evolution-mechanisms/variation-natural-selection/index.html",
      import.meta.url,
    ),
    markers: ["遺伝的変異と自然選択", "ハーディ・ワインベルグ平衡", "理解を確認する3問"],
  },
];

for (const check of checks) {
  const html = await readFile(check.path, "utf8");
  const filePath = fileURLToPath(check.path);

  for (const marker of check.markers) {
    if (!html.includes(marker)) {
      throw new Error(`${filePath} に期待する生物教材表示がありません: ${marker}`);
    }
  }

  if (html.includes("<_Biology") || html.includes("[object Object]")) {
    throw new Error(`${filePath} に未解決のAstroコンポーネント出力があります`);
  }
}

console.log("Generated HTML rendering checks passed for biology content.");
