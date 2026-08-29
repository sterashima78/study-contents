import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const checks = [
  {
    path: new URL("../dist/index.html", import.meta.url),
    markers: ["学習する科目", "数学I", "数学A", "化学基礎", "科目の目次を見る"],
  },
  {
    path: new URL("../dist/math1/index.html", import.meta.url),
    markers: ["数学I", "学習する4つの領域", "全55小教材", "科目一覧へ"],
  },
  {
    path: new URL(
      "../dist/math1/algebra/expansion-factorization/expansion/index.html",
      import.meta.url,
    ),
    markers: ["多項式の展開", "理解を確認する3問"],
  },
  {
    path: new URL(
      "../dist/math1/geometry/trigonometric-ratios/special-angle-trig/index.html",
      import.meta.url,
    ),
    markers: ["30°・45°・60°の三角比", "特別な角の三角比を図形から作る"],
  },
  {
    path: new URL(
      "../dist/math1/quadratic/quadratic-equations-graphs/quadratic-formula/index.html",
      import.meta.url,
    ),
    markers: ["二次方程式の解の公式", "二次方程式の解の公式の導出"],
  },
  {
    path: new URL(
      "../dist/math1/data-analysis/hypothesis-testing/test-decision/index.html",
      import.meta.url,
    ),
    markers: ["仮説検定の判断を言葉で表す", "理解を確認する3問"],
  },
  {
    path: new URL(
      "../dist/math1/data-analysis/scatter-correlation/exercise/index.html",
      import.meta.url,
    ),
    markers: ["散布図・相関係数の単元末演習", "単元末演習"],
  },
  {
    path: new URL("../dist/matha/index.html", import.meta.url),
    markers: ["数学A", "学習する3つの領域", "全23小教材", "科目一覧へ"],
  },
  {
    path: new URL(
      "../dist/matha/counting-probability/independent-conditional/conditional-probability/index.html",
      import.meta.url,
    ),
    markers: ["条件付き確率", "理解を確認する3問"],
  },
  {
    path: new URL(
      "../dist/matha/geometry-properties/circle-properties/power-of-point/index.html",
      import.meta.url,
    ),
    markers: ["方べきの定理", "定理の根拠: 方べき"],
  },
  {
    path: new URL(
      "../dist/matha/human-activity/integers-and-algorithms/euclidean-algorithm/index.html",
      import.meta.url,
    ),
    markers: ["ユークリッドの互除法", "互除法の根拠"],
  },
  {
    path: new URL(
      "../dist/matha/counting-probability/probability-basics/exercise/index.html",
      import.meta.url,
    ),
    markers: ["確率の基本の単元末演習", "単元末演習"],
  },
  {
    path: new URL("../dist/chemistry-basic/index.html", import.meta.url),
    markers: ["化学基礎", "学習する3つの領域", "全14小教材", "科目一覧へ"],
  },
  {
    path: new URL(
      "../dist/chemistry-basic/matter-structure/constituent-particles/atomic-structure/index.html",
      import.meta.url,
    ),
    markers: ["原子の構造", "理解を確認する3問", "原子番号 Z = 陽子数"],
  },
  {
    path: new URL(
      "../dist/chemistry-basic/matter-change-use/chemical-reactions/exercise/index.html",
      import.meta.url,
    ),
    markers: ["化学反応の単元末演習", "全6問"],
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

console.log(
  "Generated HTML rendering checks passed for the course index, Math I, Math A, and Basic Chemistry.",
);
