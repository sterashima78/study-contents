import type { MiddleMathExercise, MiddleMathExerciseDifficulty } from "../grade1/exercise-registry";

type Generator = () => Omit<MiddleMathExercise, "id" | "lessonTitles" | "difficulty">;

const distributionLessonKeys = [
  "quartile-values",
  "interquartile-range",
  "box-plot-reading",
  "box-plot-comparison-critique",
] as const;

const probabilityLessonKeys = [
  "theoretical-probability-meaning",
  "equally-likely-outcomes",
  "count-outcomes-systematically",
  "basic-probability",
  "two-step-probability",
  "probability-comparison-fairness",
  "probability-not-guarantee",
  "probability-application",
] as const;

const unitLessonKeys: Record<string, readonly string[]> = {
  "data-distribution-comparison": distributionLessonKeys,
  "probability-counting": probabilityLessonKeys,
};

const lessonTitles: Record<string, string> = {
  "quartile-values": "四分位数を求める",
  "interquartile-range": "四分位範囲で散らばりを捉える",
  "box-plot-reading": "箱ひげ図を読み、表す",
  "box-plot-comparison-critique": "箱ひげ図で分布を比較し批判的に考察する",
  "theoretical-probability-meaning": "多数回の試行と場合の数の確率を結び付ける",
  "equally-likely-outcomes": "同様に確からしい場合を捉える",
  "count-outcomes-systematically": "起こり得る場合を漏れなく数える",
  "basic-probability": "場合の数から確率を求める",
  "two-step-probability": "二段階の試行の確率を求める",
  "probability-comparison-fairness": "確率を比べて公平さを判断する",
  "probability-not-guarantee": "確率を「必ず」と誤解しない",
  "probability-application": "確率を不確定な事象の説明に活用する",
};

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const generators: Record<string, Generator> = {
  "quartile-values": () => {
    const base = randomInt(1, 8);
    const values = Array.from({ length: 8 }, (_, index) => base + 2 * index);
    const q1 = base + 3;
    return {
      prompt: `小さい順に並んだデータ ${values.join(", ")} の第1四分位数Q1を求めてください。`,
      answers: [String(q1)],
      lessonKeys: ["quartile-values"],
      hint: "前半4個の中央2値の平均を求めます。",
    };
  },
  "interquartile-range": () => {
    const q1 = randomInt(5, 15);
    const range = randomInt(4, 12);
    const q3 = q1 + range;
    return {
      prompt: `あるデータの第1四分位数は${q1}、第3四分位数は${q3}です。四分位範囲を求めてください。`,
      answers: [String(range)],
      lessonKeys: ["interquartile-range"],
      hint: "Q3−Q1で求めます。",
    };
  },
  "box-plot-reading": () => {
    const minimum = randomInt(1, 5);
    const q1 = minimum + randomInt(2, 4);
    const median = q1 + randomInt(2, 4);
    const q3 = median + randomInt(2, 4);
    const maximum = q3 + randomInt(2, 5);
    return {
      prompt: `箱ひげ図の5数要約が、最小値${minimum}、Q1=${q1}、中央値${median}、Q3=${q3}、最大値${maximum}です。箱の長さを求めてください。`,
      answers: [String(q3 - q1)],
      lessonKeys: ["box-plot-reading"],
      hint: "箱の両端はQ1とQ3なので、箱の長さは四分位範囲です。",
    };
  },
  "box-plot-comparison-critique": () => ({
    prompt:
      "二つの集団の箱ひげ図で中央値と四分位範囲が同じでした。分布の細かな形まで必ず同じと言えますか。『言える』か『言えない』で答えてください。",
    answers: ["言えない"],
    lessonKeys: ["box-plot-comparison-critique"],
    hint: "箱ひげ図は分布を5つの値に要約しています。",
  }),
  "theoretical-probability-meaning": () => ({
    prompt: "公平な6面さいころを1回投げるとき、特定の1つの目が出る確率を分数で答えてください。",
    answers: ["1/6"],
    lessonKeys: ["theoretical-probability-meaning"],
    hint: "6つの目は同様に確からしいと考えます。",
  }),
  "equally-likely-outcomes": () => ({
    prompt:
      "公平な硬貨を1枚投げるとき、表と裏は同じ程度に起こると考えられます。この関係を『同様に確からしい』という言葉で答えてください。",
    answers: ["同様に確からしい", "同様に確からしい場合"],
    lessonKeys: ["equally-likely-outcomes"],
    hint: "場合の数で確率を求めるための前提です。",
  }),
  "count-outcomes-systematically": () => {
    const colors = randomInt(2, 4);
    const total = colors * 2;
    return {
      prompt: `${colors}色から1色を選び、その後に公平な硬貨を1回投げます。起こり得る組合せは全部で何通りですか。`,
      answers: [String(total), `${total}通り`],
      lessonKeys: ["count-outcomes-systematically"],
      hint: `色${colors}通りのそれぞれに、表・裏の2通りがあります。`,
    };
  },
  "basic-probability": () => ({
    prompt: "公平な6面さいころを1回投げるとき、偶数の目が出る確率を答えてください。",
    answers: ["1/2", "3/6", "0.5"],
    lessonKeys: ["basic-probability"],
    hint: "偶数は2、4、6の3通りです。",
  }),
  "two-step-probability": () => ({
    prompt: "公平な硬貨を2枚投げるとき、表がちょうど1枚出る確率を答えてください。",
    answers: ["1/2", "2/4", "0.5"],
    lessonKeys: ["two-step-probability"],
    hint: "表表、表裏、裏表、裏裏の4通りを整理します。",
  }),
  "probability-comparison-fairness": () => ({
    prompt:
      "Aの当たる確率が1/4、Bの当たる確率が2/8です。当たりやすさは同じですか。『同じ』か『異なる』で答えてください。",
    answers: ["同じ", "等しい"],
    lessonKeys: ["probability-comparison-fairness"],
    hint: "2/8を約分して比べます。",
  }),
  "probability-not-guarantee": () => ({
    prompt:
      "確率1/4の事象を4回試せば、必ず1回起こると言えますか。『言える』か『言えない』で答えてください。",
    answers: ["言えない"],
    lessonKeys: ["probability-not-guarantee"],
    hint: "確率は少ない試行での結果を保証する値ではありません。",
  }),
  "probability-application": () => ({
    prompt: "1〜10の番号から公平に1つ選び、偶数なら当たりです。当たる確率を答えてください。",
    answers: ["1/2", "5/10", "0.5"],
    lessonKeys: ["probability-application"],
    hint: "偶数は2、4、6、8、10の5通りです。",
  }),
};

const withMetadata = (
  generated: ReturnType<Generator>,
  id: string,
  difficulty: MiddleMathExerciseDifficulty,
): MiddleMathExercise => ({
  ...generated,
  id,
  difficulty,
  lessonTitles: generated.lessonKeys.map((key) => lessonTitles[key] ?? key),
});

export const generateMiddleMath2DataLessonExercises = (lessonKey: string, count = 3) => {
  const generator = generators[lessonKey];
  if (!generator) return [];
  const difficulties: MiddleMathExerciseDifficulty[] = ["basic", "applied", "challenge"];
  return Array.from({ length: count }, (_, index) =>
    withMetadata(
      generator(),
      `${lessonKey}-${Date.now()}-${index}`,
      difficulties[index % difficulties.length],
    ),
  );
};

export const generateMiddleMath2DataUnitExercises = (unitKey: string, count = 8) => {
  const lessonKeys = unitLessonKeys[unitKey] ?? [];
  if (lessonKeys.length === 0) return [];
  const difficulties: MiddleMathExerciseDifficulty[] = [
    "basic",
    "basic",
    "basic",
    "applied",
    "applied",
    "challenge",
  ];
  return Array.from({ length: count }, (_, index) => {
    const lessonKey = lessonKeys[index % lessonKeys.length];
    return withMetadata(
      generators[lessonKey](),
      `${unitKey}-${Date.now()}-${index}`,
      difficulties[index % difficulties.length],
    );
  });
};
