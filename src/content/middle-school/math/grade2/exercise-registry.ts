import type {
  MiddleMathExercise,
  MiddleMathExerciseDifficulty,
} from "../grade1/exercise-registry";

type Generator = () => Omit<MiddleMathExercise, "id" | "lessonTitles" | "difficulty">;

const lessonKeys = [
  "monomial-polynomial-terms",
  "polynomial-combine-like-terms",
  "polynomial-addition",
  "polynomial-subtraction",
  "monomial-multiplication",
  "monomial-division",
  "mixed-monomial-calculation",
  "literal-expression-explanation",
] as const;

const lessonTitles: Record<string, string> = {
  "monomial-polynomial-terms": "単項式・多項式と次数を整理する",
  "polynomial-combine-like-terms": "多項式の同類項をまとめる",
  "polynomial-addition": "多項式を加える",
  "polynomial-subtraction": "多項式を引く",
  "monomial-multiplication": "単項式を掛ける",
  "monomial-division": "単項式を割る",
  "mixed-monomial-calculation": "単項式の乗除を組み合わせる",
  "literal-expression-explanation": "文字式を使って数量関係を説明する",
};

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const signedTerm = (coefficient: number, variable: string) => {
  if (coefficient === 0) return "0";
  if (coefficient === 1) return variable;
  if (coefficient === -1) return `-${variable}`;
  return `${coefficient}${variable}`;
};

const twoTerm = (a: number, b: number) => {
  const first = signedTerm(a, "x");
  if (b === 0) return first;
  return `${first}${b > 0 ? "+" : ""}${signedTerm(b, "y")}`;
};

const power = (exponent: number) => (exponent === 1 ? "x" : `x^${exponent}`);
const monomial = (coefficient: number, exponent: number) => `${coefficient}${power(exponent)}`;

const generators: Record<string, Generator> = {
  "monomial-polynomial-terms": () => {
    const xPower = randomInt(1, 3);
    const yPower = randomInt(0, 2);
    const degree = xPower + yPower;
    const yPart = yPower === 0 ? "" : yPower === 1 ? "y" : `y^${yPower}`;
    return {
      prompt: `単項式 4x^${xPower}${yPart} の次数を答えてください。`,
      answers: [String(degree), `${degree}次`, `${degree}次式`],
      lessonKeys: ["monomial-polynomial-terms"],
      hint: "掛け合わされている文字の個数を指数で数えます。",
    };
  },
  "polynomial-combine-like-terms": () => {
    const a = randomInt(2, 8);
    const b = randomInt(1, a - 1);
    const result = a - b;
    return {
      prompt: `${a}x + 3y - ${b}x + 2y を簡単にしてください。`,
      answers: [`${result}x+5y`, `5y+${result}x`],
      lessonKeys: ["polynomial-combine-like-terms"],
      hint: "xの項とyの項を別々にまとめます。",
    };
  },
  "polynomial-addition": () => {
    const a = randomInt(1, 6);
    const b = randomInt(1, 6);
    const c = randomInt(1, 6);
    const d = randomInt(1, 6);
    return {
      prompt: `(${twoTerm(a, b)}) + (${twoTerm(c, -d)}) を計算してください。`,
      answers: [twoTerm(a + c, b - d)],
      lessonKeys: ["polynomial-addition"],
      hint: "加える式の符号は変えず、同類項をまとめます。",
    };
  },
  "polynomial-subtraction": () => {
    const a = randomInt(4, 9);
    const b = randomInt(1, 6);
    const c = randomInt(1, 3);
    const d = randomInt(1, 5);
    return {
      prompt: `(${twoTerm(a, b)}) - (${twoTerm(c, -d)}) を計算してください。`,
      answers: [twoTerm(a - c, b + d)],
      lessonKeys: ["polynomial-subtraction"],
      hint: "後ろのかっこの全ての項の符号を変えます。",
    };
  },
  "monomial-multiplication": () => {
    const a = randomInt(2, 6);
    const b = randomInt(2, 5);
    const m = randomInt(1, 3);
    const n = randomInt(1, 2);
    const coefficient = a * b;
    const exponent = m + n;
    return {
      prompt: `${monomial(a, m)} × ${monomial(b, n)} を計算してください。`,
      answers: [`${coefficient}${power(exponent)}`],
      lessonKeys: ["monomial-multiplication"],
      hint: "係数は掛け、同じ文字の指数は足します。",
    };
  },
  "monomial-division": () => {
    const divisor = randomInt(2, 5);
    const quotient = randomInt(2, 6);
    const n = randomInt(1, 2);
    const gap = randomInt(1, 2);
    const numeratorExponent = n + gap;
    return {
      prompt: `${monomial(divisor * quotient, numeratorExponent)} ÷ ${monomial(divisor, n)} を計算してください。`,
      answers: [`${quotient}${power(gap)}`],
      lessonKeys: ["monomial-division"],
      hint: "係数は割り、同じ文字の指数は引きます。",
    };
  },
  "mixed-monomial-calculation": () => {
    const q = randomInt(2, 5);
    return {
      prompt: `${2 * q}x^2y × 3xy ÷ 6x を計算してください。`,
      answers: [`${q}x^2y^2`],
      lessonKeys: ["mixed-monomial-calculation"],
      hint: "係数、x、yに分けて計算します。",
    };
  },
  "literal-expression-explanation": () => ({
    prompt: "整数 n の次の整数を、n を使った式で表してください。",
    answers: ["n+1", "1+n"],
    lessonKeys: ["literal-expression-explanation"],
    hint: "連続する整数は1ずつ増えます。",
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

export const generateMiddleMath2LessonExercises = (lessonKey: string, count = 3) => {
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

export const generateMiddleMath2UnitExercises = (unitKey: string, count = 8) => {
  if (unitKey !== "expressions-calculation") return [];
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
