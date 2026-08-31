import type { MiddleMathExercise, MiddleMathExerciseDifficulty } from "../grade1/exercise-registry";

type Generator = () => Omit<MiddleMathExercise, "id" | "lessonTitles" | "difficulty">;

const angleLessonKeys = [
  "vertical-corresponding-alternate",
  "parallel-line-conditions",
  "triangle-angle-properties",
  "polygon-angle-properties",
] as const;

const proofLessonKeys = [
  "congruence-meaning",
  "triangle-congruence-conditions",
  "proof-structure",
  "isosceles-triangle-proof",
  "parallelogram-properties-proof",
  "parallelogram-conditions-special",
  "converse-counterexample",
  "geometry-proof-application",
] as const;

const unitLessonKeys: Record<string, readonly string[]> = {
  "parallel-lines-polygons": angleLessonKeys,
  "congruence-proofs": proofLessonKeys,
};

const lessonTitles: Record<string, string> = {
  "vertical-corresponding-alternate": "対頂角・同位角・錯角を捉える",
  "parallel-line-conditions": "平行線の性質と条件を使う",
  "triangle-angle-properties": "三角形の内角・外角を説明する",
  "polygon-angle-properties": "多角形の内角・外角を求める",
  "congruence-meaning": "合同の意味と対応を捉える",
  "triangle-congruence-conditions": "三角形の合同条件を使う",
  "proof-structure": "仮定・結論・根拠で証明を組み立てる",
  "isosceles-triangle-proof": "二等辺三角形の性質を証明する",
  "parallelogram-properties-proof": "平行四辺形の性質を証明する",
  "parallelogram-conditions-special": "平行四辺形になる条件と特別な形を捉える",
  "converse-counterexample": "逆と反例を使う",
  "geometry-proof-application": "図形の性質を具体的な場面に活用する",
};

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const angleAnswers = (value: number) => [String(value), `${value}°`, `${value}度`];

const generators: Record<string, Generator> = {
  "vertical-corresponding-alternate": () => {
    const angle = randomInt(35, 145);
    return {
      prompt: `交わる2直線で、一つの角が${angle}°です。その対頂角の大きさを答えてください。`,
      answers: angleAnswers(angle),
      lessonKeys: ["vertical-corresponding-alternate"],
      hint: "対頂角は等しくなります。",
    };
  },
  "parallel-line-conditions": () => {
    const angle = randomInt(35, 145);
    return {
      prompt: `平行な2直線を1本の直線が横切っています。一つの同位角が${angle}°のとき、対応する同位角を答えてください。`,
      answers: angleAnswers(angle),
      lessonKeys: ["parallel-line-conditions"],
      hint: "平行線の同位角は等しいです。",
    };
  },
  "triangle-angle-properties": () => {
    const a = randomInt(25, 70);
    const b = randomInt(25, Math.min(80, 145 - a));
    const c = 180 - a - b;
    return {
      prompt: `三角形の2つの内角が${a}°、${b}°です。残りの内角を答えてください。`,
      answers: angleAnswers(c),
      lessonKeys: ["triangle-angle-properties"],
      hint: "三角形の内角の和は180°です。",
    };
  },
  "polygon-angle-properties": () => {
    const n = randomInt(5, 10);
    const sum = (n - 2) * 180;
    return {
      prompt: `${n}角形の内角の和を答えてください。`,
      answers: angleAnswers(sum),
      lessonKeys: ["polygon-angle-properties"],
      hint: "n角形の内角の和は(n−2)×180°です。",
    };
  },
  "congruence-meaning": () => ({
    prompt: "△ABC≡△DEFです。辺ACに対応する辺を答えてください。",
    answers: ["DF", "FD"],
    lessonKeys: ["congruence-meaning"],
    hint: "AはD、CはFに対応します。",
  }),
  "triangle-congruence-conditions": () => ({
    prompt:
      "二つの三角形で、対応する2組の辺とその間の角がそれぞれ等しいときに使う合同条件を答えてください。",
    answers: ["2組の辺とその間の角", "二組の辺とその間の角", "2辺とその間の角"],
    lessonKeys: ["triangle-congruence-conditions"],
    hint: "与えられている2辺にはさまれた角に注目します。",
  }),
  "proof-structure": () => ({
    prompt: "命題『AB=ACならば∠B=∠C』で、仮定を答えてください。",
    answers: ["AB=AC", "AB＝AC"],
    lessonKeys: ["proof-structure"],
    hint: "『ならば』の前が仮定です。",
  }),
  "isosceles-triangle-proof": () => {
    const vertex = 2 * randomInt(20, 50);
    const base = (180 - vertex) / 2;
    return {
      prompt: `AB=ACの二等辺三角形ABCで、頂角Aが${vertex}°です。底角Bの大きさを答えてください。`,
      answers: angleAnswers(base),
      lessonKeys: ["isosceles-triangle-proof"],
      hint: "二等辺三角形の2つの底角は等しく、三角形の内角の和は180°です。",
    };
  },
  "parallelogram-properties-proof": () => {
    const side = randomInt(20, 90);
    return {
      prompt: `平行四辺形ABCDでAB=${side} cmです。辺CDの長さを答えてください。`,
      answers: [String(side), `${side}cm`, `${side} cm`],
      lessonKeys: ["parallelogram-properties-proof"],
      hint: "平行四辺形の向かい合う辺は等しいです。",
    };
  },
  "parallelogram-conditions-special": () => ({
    prompt: "四角形ABCDでAB∥CDかつAB=CDです。この四角形を答えてください。",
    answers: ["平行四辺形"],
    lessonKeys: ["parallelogram-conditions-special"],
    hint: "1組の対辺が平行で、しかも等しい四角形を考えます。",
  }),
  "converse-counterexample": () => ({
    prompt: "『正方形ならば長方形である』の逆を答えてください。",
    answers: ["長方形ならば正方形である", "長方形なら正方形である"],
    lessonKeys: ["converse-counterexample"],
    hint: "仮定と結論を入れ替えます。",
  }),
  "geometry-proof-application": () => {
    const side = randomInt(30, 95);
    return {
      prompt: `平行四辺形PQRSの形をした枠でPQ=${side} cmです。向かい側RSの長さを答えてください。`,
      answers: [String(side), `${side}cm`, `${side} cm`],
      lessonKeys: ["geometry-proof-application"],
      hint: "平行四辺形の対辺は等しいです。",
    };
  },
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

export const generateMiddleMath2GeometryLessonExercises = (lessonKey: string, count = 3) => {
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

export const generateMiddleMath2GeometryUnitExercises = (unitKey: string, count = 8) => {
  const lessonKeys = unitLessonKeys[unitKey];
  if (!lessonKeys) return [];
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
