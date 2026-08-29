import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const checks = [
  {
    path: new URL("../dist/index.html", import.meta.url),
    markers: ["数学II", "math2/"],
  },
  {
    path: new URL("../dist/math2/index.html", import.meta.url),
    markers: ["数学II", "学習する5つの領域", "全25小教材", "科目一覧へ"],
  },
  {
    path: new URL(
      "../dist/math2/expressions/polynomial-expressions/cubic-identities/index.html",
      import.meta.url,
    ),
    markers: ["三次の展開と因数分解", "公式の導出: 三次の展開", "理解を確認する3問"],
  },
  {
    path: new URL(
      "../dist/math2/trigonometric-functions/addition-equations/addition-theorem/index.html",
      import.meta.url,
    ),
    markers: ["三角関数の加法定理", "公式の導出: cosの差から加法定理へ"],
  },
  {
    path: new URL("../dist/math2/calculus/integrals/area-by-integral/index.html", import.meta.url),
    markers: ["定積分と面積", "理解を確認する3問"],
  },
  {
    path: new URL("../dist/math2/calculus/integrals/exercise/index.html", import.meta.url),
    markers: ["積分と面積の単元末演習", "単元末演習"],
  },
];

for (const check of checks) {
  const html = await readFile(check.path, "utf8");
  const filePath = fileURLToPath(check.path);
  for (const marker of check.markers) {
    if (!html.includes(marker)) {
      throw new Error(`${filePath} に期待する数学II教材表示がありません: ${marker}`);
    }
  }
}

console.log("Generated HTML rendering checks passed for Math II.");
