import { readFile } from "node:fs/promises";

const contentPaths = [
  "../src/content/math1/algebra.ts",
  "../src/content/math1/geometry.ts",
  "../src/content/math1/quadratic.ts",
  "../src/content/math1/data-analysis.ts",
  "../src/content/matha/counting-probability.ts",
  "../src/content/matha/geometry-properties.ts",
  "../src/content/matha/human-activity.ts",
  "../src/content/math2/expressions.ts",
  "../src/content/math2/geometry-equations.ts",
  "../src/content/math2/exponential-logarithmic.ts",
  "../src/content/math2/trigonometric-functions.ts",
  "../src/content/math2/calculus.ts",
  "../src/content/mathb/sequences.ts",
  "../src/content/mathb/statistical-inference.ts",
  "../src/content/mathb/social-life.ts",
  "../src/content/mathc/catalog.ts",
  "../src/content/math3/limits.ts",
  "../src/content/math3/differentiation.ts",
  "../src/content/math3/integration.ts",
  "../src/content/physics-basics/catalog.ts",
];
const derivationPaths = [
  "../src/content/math1/formula-derivations.ts",
  "../src/content/math1/additional-formula-derivations.ts",
  "../src/content/matha/formula-derivations.ts",
  "../src/content/math2/formula-derivations.ts",
  "../src/content/mathb/formula-derivations.ts",
  "../src/content/mathc/formula-derivations.ts",
  "../src/content/math3/formula-derivations.ts",
  "../src/content/physics-basics/formula-derivations.ts",
  "../src/content/physics/formula-derivations.ts",
];

const formulaExemptions = new Map([
  ["expansion", "分配法則はこの単元で展開の出発点として使う基本法則"],
  ["rational-irrational", "有理数の定義"],
  ["absolute-value", "絶対値の定義"],
  ["set-operations", "集合演算の記号と意味の定義"],
  ["necessary-sufficient", "必要条件・十分条件の用語の定義"],
  ["right-triangle-trig", "sin・cos・tan の定義"],
  ["basic-parabola", "二次関数の基本形 y=ax²"],
  ["range-and-outliers", "範囲の定義"],
  ["quartiles-boxplot", "四分位範囲の定義"],
  ["variance", "分散の定義"],
  ["standard-deviation", "標準偏差の定義"],
  ["covariance", "共分散の定義"],
  ["probability-definition", "同様に確からしい場合における確率の定義"],
  ["expected-value", "期待値の定義"],
  ["independent-trials", "独立な試行を扱う際の積の基本法則"],
  ["conditional-probability", "条件付き確率の定義"],
  ["triangle-centers", "重心の位置を表す基本定理をこの小単元の出発点として扱う"],
  ["ceva-menelaus", "チェバ・メネラウスの定理を辺の比を扱う小単元の出発点として扱う"],
  ["polyhedra-euler", "オイラーの多面体定理を凸多面体を扱う小単元の出発点として扱う"],
  ["sequence-general-term", "数列と一般項の記法の定義"],
  ["sigma-notation", "Σ記号の意味と和に対する線形性を基本法則として扱う"],
  ["recurrence-basics", "漸化式の意味を示す具体例"],
  ["random-variable-distribution", "確率分布と確率の総和の定義・基本性質"],
  ["expectation-variance", "期待値・分散・標準偏差の定義"],
  ["continuous-random-variable", "確率密度と区間確率の定義"],
  ["normal-distribution", "正規分布N(μ,σ²)の記法の定義"],
  ["hypothesis-testing", "有意水準による基本的な検定判断ルール"],
  ["evaluate-model", "誤差と相対誤差の定義"],
  ["sequence-limits", "数列の極限記号と収束の定義"],
  ["composite-inverse-functions", "合成関数と逆関数の定義"],
  ["function-limits-continuity", "関数の連続性の定義"],
  ["motion", "位置・速度・加速度の定義"],
  ["force-diagrams", "重力W=mgは重力加速度の定義と運動法則を前提にする基本関係"],
  ["force-equilibrium", "ΣF=0は加速度0の場合の運動法則を表す基本条件"],
  ["newton-law", "ΣF=maは実験に基づく運動の基本法則"],
  ["work-power", "W=FxとP=W/tはこの範囲で用いる仕事・仕事率の定義"],
  ["wave-superposition", "重ね合わせy=y₁+y₂は線形な波を扱う基本原理"],
  ["heat-temperature", "Q=mcΔTは比熱の定義を含む熱量の基本関係"],
  ["heat-balance", "Q失=Q得は断熱系のエネルギー保存を熱量で表した基本関係"],
  ["ohms-law", "V=IRは金属導体で成り立つ実験法則、R=ρL/Aは抵抗率の基本関係"],
  ["energy-resources-efficiency", "効率は入力に対する有効出力の割合として定義する量"],
  ["planar-vectors", "ベクトル成分と相対速度は平面運動を表す定義・基本関係"],
  ["rigid-body-equilibrium", "モーメントと剛体のつり合い条件を基本定義・基本条件として扱う"],
  ["momentum-conservation", "運動量保存は外力の力積が無視できる系に対する基本的な保存則"],
  ["collision-energy", "はね返り係数は衝突前後の相対速度比として定義する量"],
  ["kepler-laws", "ケプラーの法則は惑星観測から得られた経験法則"],
  ["universal-gravitation", "万有引力の法則は実験・天体観測に基づく基本法則"],
  ["kinetic-theory-pressure", "理想気体の状態方程式と平均運動エネルギーの関係は気体分子運動論の基本関係"],
  ["thermodynamic-process", "熱力学第一法則は熱と仕事を含むエネルギー保存の基本法則"],
  ["wave-interference-diffraction", "干渉条件は重ね合わせと位相差から用いる波動の基本関係"],
  ["sound-interference", "うなりの振動数は近接する二振動の重ね合わせから得る基本関係"],
  ["doppler-effect", "ドップラー効果の式は音源・観測者と媒質の相対運動を表す基本関係"],
  ["geometrical-optics", "屈折率・スネルの法則・レンズの式は幾何光学で用いる定義・基本法則"],
  ["electric-field-coulomb", "クーロンの法則は静電気力の実験法則、電界は単位電荷あたりの力の定義"],
  ["electric-potential", "電位は単位電荷あたりの位置エネルギーとして定義する量"],
  ["dc-circuits", "キルヒホッフの法則は回路における電荷保存・エネルギー保存の基本法則"],
  ["magnetic-field-current", "電流がつくる磁界の式は電流と磁界の基本法則として扱う"],
  ["electromagnetic-induction", "ファラデーの法則とレンツの法則は電磁誘導の基本法則"],
  ["electron-charge-mass", "電気素量と比電荷は実験により測定される電子の基本量"],
  ["wave-particle-duality", "E=hfとλ=h/pは量子論の基本関係として導入する"],
  ["atomic-spectrum", "原子のエネルギー準位と光子エネルギーの関係は量子論の基本関係"],
]);

const lessonsWithFormulas = new Set();
for (const relativePath of contentPaths) {
  const source = await readFile(new URL(relativePath, import.meta.url), "utf8");
  let currentLessonKey;
  for (const line of source.split("\n")) {
    const keyMatch = line.match(/^\s{8,}key: "([^"]+)",/);
    if (keyMatch) currentLessonKey = keyMatch[1];
    if (line.includes("formulas:")) {
      if (!currentLessonKey) {
        throw new Error(`${relativePath}: formulas の所属 lesson key を特定できませんでした。`);
      }
      lessonsWithFormulas.add(currentLessonKey);
    }
  }
}

const physicsCatalogPath = "../src/content/physics/catalog.ts";
const physicsCatalogSource = await readFile(new URL(physicsCatalogPath, import.meta.url), "utf8");
const physicsFormulaList = physicsCatalogSource.match(
  /export const physicsFormulaLessonKeys = \[([\s\S]*?)\] as const;/,
);
if (!physicsFormulaList) {
  throw new Error(`${physicsCatalogPath}: physicsFormulaLessonKeys を読み取れませんでした。`);
}
const physicsFormulaKeys = [...physicsFormulaList[1].matchAll(/"([^"]+)"/g)].map(
  (match) => match[1],
);
const physicsFormulaBlocks = physicsCatalogSource.match(/^\s+formulas: \[/gm) ?? [];
if (physicsFormulaBlocks.length !== physicsFormulaKeys.length) {
  throw new Error(
    `${physicsCatalogPath}: formulas の数 ${physicsFormulaBlocks.length} と physicsFormulaLessonKeys の数 ${physicsFormulaKeys.length} が一致しません。`,
  );
}
for (const key of physicsFormulaKeys) {
  if (!physicsCatalogSource.includes(`key: "${key}",`)) {
    throw new Error(`${physicsCatalogPath}: 公式管理キー ${key} に対応する小単元がありません。`);
  }
  if (lessonsWithFormulas.has(key)) throw new Error(`公式管理キーが重複しています: ${key}`);
  lessonsWithFormulas.add(key);
}

const derivationKeys = new Set();
const derivationKeyPattern = /^ {2}(?:"([^"]+)"|([A-Za-z][A-Za-z0-9-]*)): \{$/gm;
for (const relativePath of derivationPaths) {
  const source = await readFile(new URL(relativePath, import.meta.url), "utf8");
  for (const match of source.matchAll(derivationKeyPattern)) {
    const key = match[1] ?? match[2];
    if (derivationKeys.has(key)) throw new Error(`導出キーが重複しています: ${key}`);
    derivationKeys.add(key);
  }
}

const errors = [];
for (const lessonKey of lessonsWithFormulas) {
  const hasDerivation = derivationKeys.has(lessonKey);
  const exemption = formulaExemptions.get(lessonKey);
  if (!hasDerivation && !exemption) {
    errors.push(
      `${lessonKey}: formulas があるため、導出を追加するか定義・基本法則として分類してください。`,
    );
  }
  if (hasDerivation && exemption) {
    errors.push(`${lessonKey}: 導出対象と例外分類の両方に登録されています。`);
  }
}

for (const lessonKey of derivationKeys) {
  if (!lessonsWithFormulas.has(lessonKey)) {
    errors.push(`${lessonKey}: 導出データがありますが、教材側に formulas がありません。`);
  }
}
for (const lessonKey of formulaExemptions.keys()) {
  if (!lessonsWithFormulas.has(lessonKey)) {
    errors.push(`${lessonKey}: 例外分類がありますが、教材側に formulas がありません。`);
  }
}

if (errors.length > 0) {
  console.error("公式の導出・分類チェックに失敗しました。");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `公式を含む ${lessonsWithFormulas.size} 小単元を確認: 導出 ${derivationKeys.size}、定義・基本法則 ${formulaExemptions.size}`,
);
