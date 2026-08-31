import type { MiddleMathExercise, MiddleMathExerciseDifficulty } from "../grade1/exercise-registry";

type Generator = () => Omit<MiddleMathExercise, "id" | "lessonTitles" | "difficulty">;

const squareRootLessonKeys = [
  "square-root-meaning",
  "rational-irrational",
  "square-root-approximation",
  "radical-simplification",
  "radical-multiplication-division",
  "radical-addition-subtraction",
  "radical-mixed-calculation",
  "error-approximation-scientific-notation",
  "square-root-application",
] as const;

const lessonTitles: Record<string, string> = {
  "square-root-meaning": "平方根の意味を捉える",
  "rational-irrational": "有理数と無理数を区別する",
  "square-root-approximation": "平方根の近似値を捉える",
  "radical-simplification": "根号の中を簡単にする",
  "radical-multiplication-division": "平方根を掛ける・割る",
  "radical-addition-subtraction": "平方根を足す・引く",
  "radical-mixed-calculation": "平方根の計算を組み合わせる",
  "error-approximation-scientific-notation": "誤差・近似値と数の表し方を捉える",
  "square-root-application": "平方根を具体的な場面に活用する",
};

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const generators: Record<string, Generator> = {
  "square-root-meaning": () => {
    const root = randomInt(2, 12);
    const square = root * root;
    return {
      prompt: `${square}の正の平方根を答えてください。`,
      answers: [String(root)],
      lessonKeys: ["square-root-meaning"],
      hint: `2乗すると${square}になる正の数を考えます。`,
    };
  },
  "rational-irrational": () => {
    const nonSquare = [2, 3, 5, 6, 7, 10, 11, 13][randomInt(0, 7)];
    return {
      prompt: `√${nonSquare}は有理数と無理数のどちらですか。`,
      answers: ["無理数"],
      lessonKeys: ["rational-irrational"],
      hint: `${nonSquare}は整数の2乗ではありません。`,
    };
  },
  "square-root-approximation": () => {
    const lower = randomInt(2, 7);
    const value = lower * lower + randomInt(1, 2 * lower);
    return {
      prompt: `√${value}より小さい最大の整数を答えてください。`,
      answers: [String(lower)],
      lessonKeys: ["square-root-approximation"],
      hint: `${lower}²と${lower + 1}²を${value}と比べます。`,
    };
  },
  "radical-simplification": () => {
    const outside = randomInt(2, 5);
    const inside = [2, 3, 5, 6, 7][randomInt(0, 4)];
    const radicand = outside * outside * inside;
    return {
      prompt: `√${radicand}を a√b の形で簡単にしてください。`,
      answers: [`${outside}√${inside}`],
      lessonKeys: ["radical-simplification"],
      hint: `${radicand}=${outside * outside}×${inside}と分けます。`,
    };
  },
  "radical-multiplication-division": () => {
    const n = randomInt(2, 7);
    return {
      prompt: `√${n} × √${4 * n} を計算してください。`,
      answers: [String(2 * n)],
      lessonKeys: ["radical-multiplication-division"],
      hint: `根号の中を掛けると√${4 * n * n}です。`,
    };
  },
  "radical-addition-subtraction": () => {
    const n = [2, 3, 5, 7][randomInt(0, 3)];
    const a = randomInt(2, 5);
    const b = randomInt(1, a - 1);
    return {
      prompt: `${a}√${n} − ${b}√${n} を計算してください。`,
      answers: [`${a - b}√${n}`],
      lessonKeys: ["radical-addition-subtraction"],
      hint: `√${n}を一つの文字のように見て係数を引きます。`,
    };
  },
  "radical-mixed-calculation": () => {
    const n = [2, 3, 5][randomInt(0, 2)];
    return {
      prompt: `√${n} × √${4 * n} + √${n * 4} を計算してください。`,
      answers: [`${2 * n}+2√${n}`, `2√${n}+${2 * n}`],
      lessonKeys: ["radical-mixed-calculation"],
      hint: "乗法を先に行い、それぞれの根号を簡単にします。",
    };
  },
  "error-approximation-scientific-notation": () => {
    const tenths = randomInt(20, 89);
    const value = tenths / 10;
    const lower = (tenths * 10 - 5) / 100;
    return {
      prompt: `0.1の位まで測った値が${value.toFixed(1)}のとき、真の値の下限を答えてください。`,
      answers: [lower.toFixed(2)],
      lessonKeys: ["error-approximation-scientific-notation"],
      hint: "0.1の半分である0.05を測定値から引きます。",
    };
  },
  "square-root-application": () => {
    const outside = randomInt(2, 5);
    const inside = [2, 3, 5][randomInt(0, 2)];
    const area = outside * outside * inside;
    return {
      prompt: `面積${area}cm²の正方形の1辺を、根号を使って簡単に表してください。`,
      answers: [`${outside}√${inside}`, `${outside}√${inside}cm`],
      lessonKeys: ["square-root-application"],
      hint: `1辺は√${area}cmです。平方数の因数を外へ出します。`,
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

export const generateMiddleMath3LessonExercises = (lessonKey: string, count = 3) => {
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

export const generateMiddleMath3UnitExercises = (unitKey: string, count = 8) => {
  if (unitKey !== "square-roots") return [];
  const difficulties: MiddleMathExerciseDifficulty[] = [
    "basic",
    "basic",
    "basic",
    "applied",
    "applied",
    "challenge",
  ];
  const startIndex = randomInt(0, squareRootLessonKeys.length - 1);
  return Array.from({ length: count }, (_, index) => {
    const lessonKey = squareRootLessonKeys[(startIndex + index) % squareRootLessonKeys.length];
    return withMetadata(
      generators[lessonKey](),
      `${unitKey}-${Date.now()}-${index}`,
      difficulties[index % difficulties.length],
    );
  });
};
