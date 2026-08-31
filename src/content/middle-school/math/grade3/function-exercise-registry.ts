import type { MiddleMathExercise, MiddleMathExerciseDifficulty } from "../grade1/exercise-registry";

type Generator = () => Omit<MiddleMathExercise, "id" | "lessonTitles" | "difficulty">;

const lessonKeys = [
  "quadratic-function-meaning",
  "quadratic-function-expression",
  "quadratic-function-change",
  "quadratic-function-graph",
  "quadratic-function-coefficient",
  "quadratic-function-rate",
  "quadratic-function-representations",
  "quadratic-function-application",
  "broader-function-relations",
] as const;

const lessonTitles: Record<string, string> = {
  "quadratic-function-meaning": "関数 y=ax² の意味を捉える",
  "quadratic-function-expression": "表や1点から y=ax² の式を求める",
  "quadratic-function-change": "xの倍率とyの倍率の関係を捉える",
  "quadratic-function-graph": "関数 y=ax² のグラフをかく",
  "quadratic-function-coefficient": "比例定数aと放物線の形を結び付ける",
  "quadratic-function-rate": "変化の割合が一定でないことを捉える",
  "quadratic-function-representations": "表・式・グラフを相互に関連付ける",
  "quadratic-function-application": "関数 y=ax² を具体的な事象に活用する",
  "broader-function-relations": "式で表しにくい関数関係も捉える",
};

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomNonZero = (min: number, max: number) => {
  let value = 0;
  while (value === 0) value = randomInt(min, max);
  return value;
};

const generators: Record<string, Generator> = {
  "quadratic-function-meaning": () => {
    const a = randomInt(1, 5);
    const x = randomInt(2, 5);
    return {
      prompt: `y=ax²でx=${x}のときy=${a * x * x}です。aを答えてください。`,
      answers: [String(a)],
      lessonKeys: ["quadratic-function-meaning"],
      hint: "a=y/x²です。",
    };
  },
  "quadratic-function-expression": () => {
    const a = randomNonZero(-4, 4);
    const x = randomInt(2, 4);
    const y = a * x * x;
    return {
      prompt: `y=ax²が点(${x},${y})を通ります。式を答えてください。`,
      answers: [`y=${a}x²`, `y=${a}x^2`],
      lessonKeys: ["quadratic-function-expression"],
      hint: `${y}=a×${x}²としてaを求めます。`,
    };
  },
  "quadratic-function-change": () => {
    const m = randomInt(2, 5);
    return {
      prompt: `y=ax²でxを${m}倍にするとyは何倍になりますか。`,
      answers: [String(m * m), `${m * m}倍`],
      lessonKeys: ["quadratic-function-change"],
      hint: "xの倍率を2乗します。",
    };
  },
  "quadratic-function-graph": () => {
    const a = randomInt(1, 4);
    const x = randomInt(1, 4);
    return {
      prompt: `y=${a}x²でx=-${x}のときyを答えてください。`,
      answers: [String(a * x * x)],
      lessonKeys: ["quadratic-function-graph"],
      hint: "負のxも2乗すると正になります。",
    };
  },
  "quadratic-function-coefficient": () => {
    const a = randomNonZero(-5, 5);
    return {
      prompt: `y=${a}x²の放物線は上向きと下向きのどちらですか。`,
      answers: a > 0 ? ["上向き", "上"] : ["下向き", "下"],
      lessonKeys: ["quadratic-function-coefficient"],
      hint: "aの符号で開く向きが決まります。",
    };
  },
  "quadratic-function-rate": () => {
    const a = randomInt(1, 4);
    const x = randomInt(0, 4);
    const rate = a * (2 * x + 1);
    return {
      prompt: `y=${a}x²でxが${x}から${x + 1}まで変化するときの変化の割合を答えてください。`,
      answers: [String(rate)],
      lessonKeys: ["quadratic-function-rate"],
      hint: "両端のyを求め、yの増加量÷xの増加量を計算します。",
    };
  },
  "quadratic-function-representations": () => {
    const a = randomNonZero(-4, 4);
    const x = randomInt(2, 4);
    return {
      prompt: `表でx=${x}のときy=${a * x * x}となるy=ax²のaを答えてください。`,
      answers: [String(a)],
      lessonKeys: ["quadratic-function-representations"],
      hint: "表の値からa=y/x²を求めます。",
    };
  },
  "quadratic-function-application": () => {
    const a = randomInt(1, 4);
    const x = randomInt(2, 6);
    return {
      prompt: `教材用モデルy=${a}x²でx=${x}のときの予測値yを答えてください。`,
      answers: [String(a * x * x)],
      lessonKeys: ["quadratic-function-application"],
      hint: "モデルの式へxを代入します。",
    };
  },
  "broader-function-relations": () => ({
    prompt: "一つのxに異なる2つのyが対応する関係は関数ですか。",
    answers: ["いいえ", "関数ではない", "関数ではありません"],
    lessonKeys: ["broader-function-relations"],
    hint: "関数ではxを一つ決めるとyがただ一つ決まります。",
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

export const generateMiddleMath3FunctionLessonExercises = (lessonKey: string, count = 3) => {
  const generator = generators[lessonKey];
  if (!generator) return [];
  const difficulties: MiddleMathExerciseDifficulty[] = ["basic", "applied", "challenge"];
  return Array.from({ length: count }, (_, index) =>
    withMetadata(generator(), `${lessonKey}-${Date.now()}-${index}`, difficulties[index % 3]),
  );
};

export const generateMiddleMath3FunctionUnitExercises = (unitKey: string, count = 8) => {
  if (unitKey !== "quadratic-functions") return [];
  const difficulties: MiddleMathExerciseDifficulty[] = [
    "basic",
    "basic",
    "basic",
    "applied",
    "applied",
    "challenge",
  ];
  const startIndex = randomInt(0, lessonKeys.length - 1);
  return Array.from({ length: count }, (_, index) => {
    const lessonKey = lessonKeys[(startIndex + index) % lessonKeys.length];
    return withMetadata(
      generators[lessonKey](),
      `${unitKey}-${Date.now()}-${index}`,
      difficulties[index % difficulties.length],
    );
  });
};
