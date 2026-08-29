import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const checks = [
  {
    path: new URL("../dist/index.html", import.meta.url),
    markers: ["学習する4つの領域", "全55小教材"],
  },
  {
    path: new URL("../dist/math1/algebra/expansion-factorization/expansion/index.html", import.meta.url),
    markers: ["多項式の展開", "理解を確認する3問"],
  },
  {
    path: new URL("../dist/math1/geometry/trigonometric-ratios/special-angle-trig/index.html", import.meta.url),
    markers: ["30°・45°・60°の三角比", "特別な角の三角比を図形から作る"],
  },
  {
    path: new URL("../dist/math1/quadratic/quadratic-equations-graphs/quadratic-formula/index.html", import.meta.url),
    markers: ["二次方程式の解の公式", "二次方程式の解の公式の導出"],
  },
  {
    path: new URL("../dist/math1/data-analysis/hypothesis-testing/test-decision/index.html", import.meta.url),
    markers: ["仮説検定の判断を言葉で表す", "理解を確認する3問"],
  },
  {
    path: new URL("../dist/math1/data-analysis/scatter-correlation/exercise/index.html", import.meta.url),
    markers: ["散布図・相関係数の単元末演習", "単元末演習"],
  },
];

for (const check of checks) {
  const html = await readFile(check.path, "utf8");
  const filePath = fileURLToPath(check.path);

  for (const marker of check.markers) {
    if (!html.includes(marker)) {
      throw new Error(`${filePath} に期待する教材表示がありません: ${marker}`);
    }
  }

  if (html.includes("<_Math") || html.includes("<_Algebra") || html.includes("[object Object]")) {
    throw new Error(`${filePath} に未解決のAstroコンポーネント出力があります`);
  }
}

console.log("Generated HTML rendering checks passed for all Math I areas.");
