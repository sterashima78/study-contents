import type { MiddleMathExercise, MiddleMathExerciseDifficulty } from "../grade1/exercise-registry";

type Generator = () => Omit<MiddleMathExercise, "id" | "lessonTitles" | "difficulty">;

const lessonKeys = [
  "linear-function-meaning",
  "linear-function-rate-of-change",
  "linear-function-expression",
  "linear-function-graph",
  "linear-function-from-graph",
  "linear-equation-as-function",
  "systems-and-graphs",
  "linear-function-application",
] as const;

const lessonTitles: Record<string, string> = {
  "linear-function-meaning": "一次関数の意味を捉える",
  "linear-function-rate-of-change": "変化の割合を求める",
  "linear-function-expression": "表から一次関数の式を求める",
  "linear-function-graph": "一次関数のグラフをかく",
  "linear-function-from-graph": "グラフから一次関数の式を求める",
  "linear-equation-as-function": "二元一次方程式を直線として捉える",
  "systems-and-graphs": "連立方程式の解をグラフで捉える",
  "linear-function-application": "一次関数を具体的な事象に活用する",
};

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomNonZero = (min: number, max: number) => {
  let value = 0;
  while (value === 0) value = randomInt(min, max);
  return value;
};

const coefficientX = (coefficient: number) => {
  if (coefficient === 1) return "x";
  if (coefficient === -1) return "-x";
  return `${coefficient}x`;
};

const linearRightSide = (a: number, b: number) => {
  const xPart = coefficientX(a);
  if (b === 0) return xPart;
  return `${xPart}${b > 0 ? "+" : ""}${b}`;
};

const equationAnswers = (a: number, b: number) => {
  const right = linearRightSide(a, b);
  return [`y=${right}`, right];
};

const pairAnswers = (x: number, y: number) => [`${x},${y}`, `(${x},${y})`, `x=${x},y=${y}`];

const generators: Record<string, Generator> = {
  "linear-function-meaning": () => {
    const a = randomNonZero(-4, 4);
    const b = randomInt(-5, 5);
    return {
      prompt: `一次関数 y = ${linearRightSide(a, b)} で、xが1増えるとyはいくつ変化しますか。`,
      answers: [String(a)],
      lessonKeys: ["linear-function-meaning"],
      hint: "y=ax+bでは、xが1増えたときのyの変化量はaです。",
    };
  },
  "linear-function-rate-of-change": () => {
    const a = randomNonZero(-4, 4);
    const b = randomInt(-5, 5);
    const x1 = randomInt(-2, 2);
    const gap = randomInt(2, 4);
    const x2 = x1 + gap;
    const y1 = a * x1 + b;
    const y2 = a * x2 + b;
    return {
      prompt: `一次関数のグラフ上に (${x1},${y1}) と (${x2},${y2}) があります。変化の割合を求めてください。`,
      answers: [String(a)],
      lessonKeys: ["linear-function-rate-of-change"],
      hint: "yの増加量をxの増加量で割ります。",
    };
  },
  "linear-function-expression": () => {
    const a = randomNonZero(-4, 4);
    const b = randomInt(-5, 5);
    const x = randomInt(2, 4);
    const y = a * x + b;
    return {
      prompt: `一次関数で x=0 のとき y=${b}、x=${x} のとき y=${y} です。式を y=ax+b の形で答えてください。`,
      answers: equationAnswers(a, b),
      lessonKeys: ["linear-function-expression"],
      hint: "まず二つの組から変化の割合aを求め、x=0の値からbを読み取ります。",
    };
  },
  "linear-function-graph": () => {
    const a = randomNonZero(-4, 4);
    const b = randomInt(-5, 5);
    return {
      prompt: `y = ${linearRightSide(a, b)} の傾きとy切片を「傾き,切片」の順に答えてください。`,
      answers: [`${a},${b}`, `(${a},${b})`],
      lessonKeys: ["linear-function-graph"],
      hint: "y=ax+bではaが傾き、bがy切片です。",
    };
  },
  "linear-function-from-graph": () => {
    const a = randomNonZero(-3, 3);
    const b = randomInt(-5, 5);
    const x = randomInt(2, 4);
    const y = a * x + b;
    return {
      prompt: `ある直線は (0,${b}) と (${x},${y}) を通ります。一次関数の式を答えてください。`,
      answers: equationAnswers(a, b),
      lessonKeys: ["linear-function-from-graph"],
      hint: "二点から傾きを求め、(0,b)から切片を読み取ります。",
    };
  },
  "linear-equation-as-function": () => {
    const m = randomInt(1, 4);
    const b = randomInt(2, 8);
    return {
      prompt: `${m}x + y = ${b} を y=ax+b の形に直してください。`,
      answers: equationAnswers(-m, b),
      lessonKeys: ["linear-equation-as-function"],
      hint: `${m}xを右辺へ移項します。`,
    };
  },
  "systems-and-graphs": () => {
    const x = randomInt(1, 4);
    const y = randomInt(1, 6);
    const a1 = randomInt(1, 3);
    const a2 = -randomInt(1, 3);
    const b1 = y - a1 * x;
    const b2 = y - a2 * x;
    return {
      prompt: `直線 y=${linearRightSide(a1, b1)} と y=${linearRightSide(a2, b2)} の交点を x,y の順に答えてください。`,
      answers: pairAnswers(x, y),
      lessonKeys: ["systems-and-graphs"],
      hint: "交点では二つの式のyの値が等しくなります。",
    };
  },
  "linear-function-application": () => {
    const rate = randomInt(2, 5);
    const initial = randomInt(10, 30);
    const minutes = randomInt(3, 8);
    const result = rate * minutes + initial;
    return {
      prompt: `開始時${initial}℃の水が、一定の範囲で1分ごとに${rate}℃ずつ上昇するとみなします。${minutes}分後の水温を求めてください。`,
      answers: [String(result), `${result}℃`],
      lessonKeys: ["linear-function-application"],
      hint: `y=${rate}x+${initial} として x=${minutes} を代入します。`,
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

export const generateMiddleMath2FunctionLessonExercises = (lessonKey: string, count = 3) => {
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

export const generateMiddleMath2FunctionUnitExercises = (unitKey: string, count = 8) => {
  if (unitKey !== "linear-functions") return [];
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
