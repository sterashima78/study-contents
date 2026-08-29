import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const checks = [
  {
    path: new URL("../dist/index.html", import.meta.url),
    markers: [
      "学習する科目",
      "数学I",
      "数学A",
      "数学B",
      "数学C",
      "物理基礎",
      "科目の目次を見る",
    ],
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
    path: new URL("../dist/mathb/index.html", import.meta.url),
    markers: ["数学B", "学習する3つの領域", "全28小教材", "科目一覧へ"],
  },
  {
    path: new URL(
      "../dist/mathb/sequences/sequence-basics/arithmetic-sum/index.html",
      import.meta.url,
    ),
    markers: ["等差数列の和", "公式の根拠: 等差数列の和", "理解を確認する3問"],
  },
  {
    path: new URL(
      "../dist/mathb/statistical-inference/sampling-inference/confidence-interval/index.html",
      import.meta.url,
    ),
    markers: ["母平均の区間推定", "公式の根拠: 95%信頼区間", "理解を確認する3問"],
  },
  {
    path: new URL(
      "../dist/mathb/social-life/social-problem-solving/evaluate-model/index.html",
      import.meta.url,
    ),
    markers: ["モデルを現実と照らして評価・改善する", "相対誤差", "理解を確認する3問"],
  },
  {
    path: new URL(
      "../dist/mathb/sequences/recurrence-relations/exercise/index.html",
      import.meta.url,
    ),
    markers: ["漸化式の単元末演習", "単元末演習"],
  },
  {
    path: new URL("../dist/mathc/index.html", import.meta.url),
    markers: ["数学C", "学習する3つの領域", "全14小教材", "科目一覧へ"],
  },
  {
    path: new URL("../dist/mathc/vectors/vector-basics/inner-product/index.html", import.meta.url),
    markers: ["ベクトルの内積", "公式の根拠: 成分による内積", "理解を確認する3問"],
  },
  {
    path: new URL(
      "../dist/mathc/curves-complex/complex-plane/polar-demoivre/index.html",
      import.meta.url,
    ),
    markers: ["複素数の極形式とド・モアブルの定理", "公式の根拠: ド・モアブルの定理"],
  },
  {
    path: new URL(
      "../dist/mathc/mathematical-expression/representation-tools/matrices/index.html",
      import.meta.url,
    ),
    markers: ["行列でデータと変換を表す", "公式の根拠: 行列の和と実数倍"],
  },
  {
    path: new URL("../dist/mathc/vectors/vector-basics/exercise/index.html", import.meta.url),
    markers: ["ベクトルの基本と内積の単元末演習", "単元末演習"],
  },
  {
    path: new URL("../dist/physics-basics/index.html", import.meta.url),
    markers: ["物理基礎", "学習する5つの領域", "全18小教材", "科目一覧へ"],
  },
  {
    path: new URL(
      "../dist/physics-basics/motion/motion-description/acceleration/index.html",
      import.meta.url,
    ),
    markers: [
      "加速度と速度―時間グラフ",
      "式の根拠: 等加速度運動の v = v₀ + at",
      "理解を確認する3問",
    ],
  },
  {
    path: new URL(
      "../dist/physics-basics/forces-energy/work-energy/mechanical-energy-conservation/index.html",
      import.meta.url,
    ),
    markers: ["力学的エネルギー保存", "保存則の根拠: 重力だけが仕事をする場合"],
  },
  {
    path: new URL(
      "../dist/physics-basics/waves/wave-sound/sound-resonance/index.html",
      import.meta.url,
    ),
    markers: ["音・弦・気柱の共鳴", "片側閉管の基本振動 L = λ/4"],
  },
  {
    path: new URL(
      "../dist/physics-basics/thermal-electricity/electric-energy/exercise/index.html",
      import.meta.url,
    ),
    markers: ["電気とその利用の単元末演習", "単元末演習"],
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
  "Generated HTML rendering checks passed for the course index, Math I, Math A, Math B, Math C, and Physics Basics.",
);
