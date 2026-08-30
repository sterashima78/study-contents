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

const positiveNegativeLessonKeys = [
  "positive-negative-meaning",
  "number-line-absolute-value",
  "addition",
  "subtraction",
  "multiplication",
  "division",
] as const;

const literalExpressionLessonKeys = [
  "letters-meaning",
  "multiplication-notation",
  "division-notation",
  "substitution-value",
  "terms-coefficients",
  "combine-like-terms",
  "linear-expression-addition-subtraction",
  "express-relations",
] as const;

const lessonTitles: Record<string, string> = {
  "positive-negative-meaning": "正の数・負の数の意味",
  "number-line-absolute-value": "数直線と絶対値",
  addition: "正の数・負の数の加法",
  subtraction: "正の数・負の数の減法",
  multiplication: "正の数・負の数の乗法",
  division: "正の数・負の数の除法",
  "letters-meaning": "文字を使って数量を表す",
  "multiplication-notation": "文字式の乗法の表し方",
  "division-notation": "文字式の除法の表し方",
  "substitution-value": "文字式の値と代入",
  "terms-coefficients": "項と係数",
  "combine-like-terms": "同じ文字の項をまとめる",
  "linear-expression-addition-subtraction": "一次式の加法と減法",
  "express-relations": "数量の関係を式で表す",
};

const unitLessonKeys: Record<string, readonly string[]> = {
  "positive-negative-numbers": positiveNegativeLessonKeys,
  "literal-expressions": literalExpressionLessonKeys,
};

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const nonZeroInt = (min: number, max: number) => {
  let value = 0;
  while (value === 0) value = randomInt(min, max);
  return value;
};

const signed = (value: number) => (value < 0 ? `−${Math.abs(value)}` : `${value}`);

const xTerm = (coefficient: number) => {
  if (coefficient === 1) return "x";
  if (coefficient === -1) return "−x";
  return coefficient < 0 ? `−${Math.abs(coefficient)}x` : `${coefficient}x`;
};

const linearExpression = (coefficient: number, constant: number) => {
  const term = xTerm(coefficient);
  if (constant === 0) return term;
  return `${term}${constant > 0 ? `+${constant}` : `−${Math.abs(constant)}`}`;
};

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
  "letters-meaning": () => {
    const price = randomInt(6, 18) * 10;
    return {
      prompt: `1個${price}円の商品を x 個買うときの代金を、乗法記号を使って文字の式で表してください。`,
      answers: [`${price}×x`, `${price}*x`, `x×${price}`, `x*${price}`, `${price}x`],
      lessonKeys: ["letters-meaning"],
      hint: "1個の値段に個数 x を掛けます。",
    };
  },
  "multiplication-notation": () => {
    const coefficient = nonZeroInt(-9, 9);
    return {
      prompt: `x × (${signed(coefficient)}) を、文字式のきまりに従って表してください。`,
      answers: [xTerm(coefficient)],
      lessonKeys: ["multiplication-notation"],
      hint: "数を文字の前に置き、× を省きます。",
    };
  },
  "division-notation": () => {
    const divisor = randomInt(2, 9);
    return {
      prompt: `x ÷ ${divisor} を、÷ を使わずに表してください。`,
      answers: [`x/${divisor}`],
      lessonKeys: ["division-notation"],
      hint: "x を分子、割る数を分母に置きます。",
    };
  },
  "substitution-value": () => {
    const coefficient = randomInt(2, 6);
    const constant = nonZeroInt(-5, 5);
    const value = nonZeroInt(-5, 5);
    const answer = coefficient * value + constant;
    return {
      prompt: `x = ${signed(value)} のとき、${linearExpression(coefficient, constant)} の値を求めてください。`,
      answers: [String(answer), signed(answer)],
      lessonKeys: ["substitution-value"],
      hint: "x を符号ごと数に置き換え、乗法を先に計算します。",
    };
  },
  "terms-coefficients": () => {
    const coefficient = nonZeroInt(-9, 9);
    const constant = nonZeroInt(-9, 9);
    return {
      prompt: `${linearExpression(coefficient, constant)} の x の係数を答えてください。`,
      answers: [String(coefficient), signed(coefficient)],
      lessonKeys: ["terms-coefficients"],
      hint: "x を含む項で、x に掛かっている数を符号ごと読みます。",
    };
  },
  "combine-like-terms": () => {
    const isAddition = Math.random() < 0.5;
    const smaller = randomInt(2, 6);
    const larger = randomInt(smaller + 1, 9);
    const coefficient = isAddition ? larger + smaller : larger - smaller;
    return {
      prompt: `${larger}x ${isAddition ? "+" : "−"} ${smaller}x を簡単にしてください。`,
      answers: [xTerm(coefficient)],
      lessonKeys: ["combine-like-terms"],
      hint: "x はそのままにして係数を計算します。",
    };
  },
  "linear-expression-addition-subtraction": () => {
    const isAddition = Math.random() < 0.5;
    const c = randomInt(1, 4);
    const a = isAddition ? randomInt(1, 6) : randomInt(c + 1, 8);
    const d = randomInt(1, 4);
    const b = isAddition ? randomInt(1, 6) : randomInt(d, 7);
    const coefficient = isAddition ? a + c : a - c;
    const constant = isAddition ? b + d : b - d;
    const operator = isAddition ? "+" : "−";
    return {
      prompt: `(${linearExpression(a, b)}) ${operator} (${linearExpression(c, d)}) を計算してください。`,
      answers: [linearExpression(coefficient, constant)],
      lessonKeys: ["linear-expression-addition-subtraction"],
      hint: isAddition
        ? "かっこを外し、x の項どうしと数の項どうしをまとめます。"
        : "後ろのかっこの各項の符号を変えてからまとめます。",
    };
  },
  "express-relations": () => {
    if (Math.random() < 0.5) {
      const price = randomInt(4, 12) * 10;
      const count = randomInt(2, 8);
      const total = price * count;
      return {
        prompt: `1個${price}円の商品を x 個買った代金が${total}円です。この数量の関係を等式で表してください。`,
        answers: [`${price}x=${total}`, `${total}=${price}x`],
        lessonKeys: ["express-relations"],
        hint: "単価×個数と合計金額が等しい関係です。",
      };
    }
    const limit = randomInt(10, 40);
    return {
      prompt: `人数 x 人が${limit}人以下であることを、不等式で表してください。`,
      answers: [`x≤${limit}`, `${limit}≥x`],
      lessonKeys: ["express-relations"],
      hint: "『以下』は等しい場合も含むので ≤ を使います。",
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
    withMetadata(
      generator(),
      `${lessonKey}-${Date.now()}-${index}`,
      difficulties[index % difficulties.length],
    ),
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
