import { readFile } from "node:fs/promises";

const algebraSource = await readFile(new URL("../src/content/math1/algebra.ts", import.meta.url), "utf8");
const derivationSource = await readFile(
  new URL("../src/content/math1/formula-derivations.ts", import.meta.url),
  "utf8",
);

const formulaExemptions = new Map([
  ["expansion", "分配法則はこの単元で展開の出発点として使う基本法則"],
  ["rational-irrational", "有理数の定義"],
  ["absolute-value", "絶対値の定義"],
  ["set-operations", "集合演算の記号と意味の定義"],
  ["necessary-sufficient", "必要条件・十分条件の用語の定義"],
]);

const lessonsWithFormulas = new Set();
let currentLessonKey;

for (const line of algebraSource.split("\n")) {
  const keyMatch = line.match(/^\s*key: "([^"]+)",/);
  if (keyMatch) currentLessonKey = keyMatch[1];

  if (line.includes("formulas:")) {
    if (!currentLessonKey) {
      throw new Error("formulas の所属 lesson key を特定できませんでした。");
    }
    lessonsWithFormulas.add(currentLessonKey);
  }
}

const derivationKeys = new Set();
const derivationKeyPattern = /^  (?:"([^"]+)"|([A-Za-z][A-Za-z0-9]*)): \{$/gm;

for (const match of derivationSource.matchAll(derivationKeyPattern)) {
  derivationKeys.add(match[1] ?? match[2]);
}

const errors = [];

for (const lessonKey of lessonsWithFormulas) {
  const hasDerivation = derivationKeys.has(lessonKey);
  const exemption = formulaExemptions.get(lessonKey);

  if (!hasDerivation && !exemption) {
    errors.push(
      `${lessonKey}: formulas があるため、導出を追加するか定義・基本法則として明示的に分類してください。`,
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
