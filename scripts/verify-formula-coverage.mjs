import { readFile } from "node:fs/promises";

const contentPaths = [
  "../src/content/math1/algebra.ts",
  "../src/content/math1/geometry.ts",
  "../src/content/math1/quadratic.ts",
  "../src/content/math1/data-analysis.ts",
  "../src/content/matha/counting-probability.ts",
  "../src/content/matha/geometry-properties.ts",
  "../src/content/matha/human-activity.ts",
];
const derivationPaths = [
  "../src/content/math1/formula-derivations.ts",
  "../src/content/math1/additional-formula-derivations.ts",
  "../src/content/matha/formula-derivations.ts",
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
]);

const lessonsWithFormulas = new Set();
for (const relativePath of contentPaths) {
  const source = await readFile(new URL(relativePath, import.meta.url), "utf8");
  let currentLessonKey;
  for (const line of source.split("\n")) {
    const keyMatch = line.match(/^\s{8}key: "([^"]+)",/);
    if (keyMatch) currentLessonKey = keyMatch[1];
    if (line.includes("formulas:")) {
      if (!currentLessonKey) {
        throw new Error(`${relativePath}: formulas の所属 lesson key を特定できませんでした。`);
      }
      lessonsWithFormulas.add(currentLessonKey);
    }
  }
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
