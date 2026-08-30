export type MiddleMathExerciseDifficulty = "basic" | "applied" | "challenge";

export type MiddleMathExercise = {
  id: string;
  prompt: string;
  answers: string[];
  lessonKeys: string[];
  lessonTitles: string[];
  difficulty: MiddleMathExerciseDifficulty;
  hint?: string;
};

type Generator = () => Omit<MiddleMathExercise, "id" | "lessonTitles" | "difficulty">;

const lessonTitles: Record<string, string> = {
  "positive-negative-meaning": "正の数・負の数の意味",
  "number-line-absolute-value": "数直線と絶対値",
  addition: "正の数・負の数の加法",
  subtraction: "正の数・負の数の減法",
  multiplication: "正の数・負の数の乗法",
  division: "正の数・負の数の除法",
};

const unitLessonKeys: Record<string, string[]> = {
  "positive-negative-numbers": Object.keys(lessonTitles),
};

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const nonZeroInt = (min: number, max: number) => {
  let value = 0;
  while (value === 0) value = randomInt(min, max);
  return value;
};

const signed = (value: number) => (value < 0 ? `−${Math.abs(value)}` : `${value}`);

const generators: Record<string, Generator> = {
  "positive-negative-meaning": () => {
    const distance = randomInt(2, 12);
    const isBelow = Math.random() < 0.5;
    const value = isBelow ? -distance : distance;
    return {
      prompt: `0を基準に、${isBelow ? "低い" : "高い"}向きへ${distance}だけ離れた位置を符号を付けた数で表してください。`,
      answers: [String(value), signed(value)],
      lessonKeys: ["positive-negative-meaning"],
      hint: `${isBelow ? "低い" : "高い"}向きを${isBelow ? "負" : "正"}で表します。`,
    };
  },
  "number-line-absolute-value": () => {
    const value = nonZeroInt(-12, 12);
    return {
      prompt: `${signed(value)} の絶対値を求めてください。`,
      answers: [String(Math.abs(value)), `+${Math.abs(value)}`],
      lessonKeys: ["number-line-absolute-value"],
      hint: "絶対値は0からの距離です。",
    };
  },
  addition: () => {
    const a = nonZeroInt(-12, 12);
    const b = nonZeroInt(-12, 12);
    const answer = a + b;
    return {
      prompt: `(${signed(a)}) + (${signed(b)}) を計算してください。`,
      answers: [String(answer), signed(answer)],
      lessonKeys: ["addition"],
      hint: "同符号なら絶対値を足し、異符号なら絶対値の差を考えます。",
    };
  },
  subtraction: () => {
    const a = nonZeroInt(-12, 12);
    const b = nonZeroInt(-12, 12);
    const answer = a - b;
    return {
      prompt: `(${signed(a)}) − (${signed(b)}) を計算してください。`,
      answers: [String(answer), signed(answer)],
      lessonKeys: ["subtraction"],
      hint: "引く数の符号を反対にして、加法へ直します。",
    };
  },
  multiplication: () => {
    const a = nonZeroInt(-9, 9);
    const b = nonZeroInt(-9, 9);
    const answer = a * b;
    return {
      prompt: `(${signed(a)}) × (${signed(b)}) を計算してください。`,
      answers: [String(answer), signed(answer)],
      lessonKeys: ["multiplication"],
      hint: "同符号の積は正、異符号の積は負です。",
    };
  },
  division: () => {
    const quotient = nonZeroInt(-9, 9);
    const divisor = nonZeroInt(-9, 9);
    const dividend = quotient * divisor;
    return {
      prompt: `(${signed(dividend)}) ÷ (${signed(divisor)}) を計算してください。`,
      answers: [String(quotient), signed(quotient)],
      lessonKeys: ["division"],
      hint: "符号を決めてから絶対値どうしを割ります。",
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

export const generateMiddleMath1LessonExercises = (lessonKey: string, count = 3) => {
  const generator = generators[lessonKey];
  if (!generator) return [];
  const difficulties: MiddleMathExerciseDifficulty[] = ["basic", "applied", "challenge"];
  return Array.from({ length: count }, (_, index) =>
    withMetadata(generator(), `${lessonKey}-${Date.now()}-${index}`, difficulties[index % difficulties.length]),
  );
};

export const generateMiddleMath1UnitExercises = (unitKey: string, count = 8) => {
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
    const generator = generators[lessonKey];
    return withMetadata(
      generator(),
      `${unitKey}-${Date.now()}-${index}`,
      difficulties[index % difficulties.length],
    );
  });
};
