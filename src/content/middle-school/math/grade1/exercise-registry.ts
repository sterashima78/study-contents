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

const linearEquationLessonKeys = [
  "equation-meaning",
  "equality-properties",
  "equation-add-subtract",
  "equation-multiply-divide",
  "transposition",
  "equation-both-sides",
  "proportion-equations",
  "equation-word-problems",
] as const;

const proportionLessonKeys = [
  "function-meaning",
  "variables-domain",
  "proportion-table-expression",
  "coordinates",
  "proportion-graph",
  "inverse-proportion-table-expression",
  "inverse-proportion-graph",
  "function-representations-application",
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
  "equation-meaning": "方程式と解の意味",
  "equality-properties": "等式の性質",
  "equation-add-subtract": "加法・減法で方程式を解く",
  "equation-multiply-divide": "乗法・除法で方程式を解く",
  transposition: "移項を使って解く",
  "equation-both-sides": "両辺に文字を含む方程式",
  "proportion-equations": "比例式を解く",
  "equation-word-problems": "方程式を文章題に利用する",
  "function-meaning": "関数関係の意味",
  "variables-domain": "変数と変域",
  "proportion-table-expression": "比例を式と表で表す",
  coordinates: "座標の意味と読み取り",
  "proportion-graph": "比例のグラフ",
  "inverse-proportion-table-expression": "反比例を式と表で表す",
  "inverse-proportion-graph": "反比例のグラフ",
  "function-representations-application": "表・式・グラフを結び付けて活用する",
};

const unitLessonKeys: Record<string, readonly string[]> = {
  "positive-negative-numbers": positiveNegativeLessonKeys,
  "literal-expressions": literalExpressionLessonKeys,
  "linear-equations": linearEquationLessonKeys,
  "proportion-inverse-proportion": proportionLessonKeys,
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

const numericAnswers = (value: number) => [String(value), signed(value)];

const generators: Record<string, Generator> = {
  "positive-negative-meaning": () => {
    const distance = randomInt(2, 12);
    const isBelow = Math.random() < 0.5;
    const value = isBelow ? -distance : distance;
    return {
      prompt: `0を基準に、${isBelow ? "低い" : "高い"}向きへ${distance}だけ離れた位置を符号を付けた数で表してください。`,
      answers: numericAnswers(value),
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
      answers: numericAnswers(answer),
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
      answers: numericAnswers(answer),
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
      answers: numericAnswers(answer),
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
      answers: numericAnswers(quotient),
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
      answers: numericAnswers(answer),
      lessonKeys: ["substitution-value"],
      hint: "x を符号ごと数に置き換え、乗法を先に計算します。",
    };
  },
  "terms-coefficients": () => {
    const coefficient = nonZeroInt(-9, 9);
    const constant = nonZeroInt(-9, 9);
    return {
      prompt: `${linearExpression(coefficient, constant)} の x の係数を答えてください。`,
      answers: numericAnswers(coefficient),
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
  "equation-meaning": () => {
    const solution = randomInt(-6, 8);
    const offset = nonZeroInt(-7, 7);
    const right = solution + offset;
    const candidateIsSolution = Math.random() < 0.5;
    const candidate = candidateIsSolution ? solution : solution + nonZeroInt(-3, 3);
    return {
      prompt: `x = ${signed(candidate)} は、方程式 x ${offset >= 0 ? "+" : "−"} ${Math.abs(offset)} = ${signed(right)} の解ですか。「解」または「解ではない」で答えてください。`,
      answers: [candidateIsSolution ? "解" : "解ではない"],
      lessonKeys: ["equation-meaning"],
      hint: "候補の値を x に代入して、左辺と右辺が等しくなるか確かめます。",
    };
  },
  "equality-properties": () => {
    const solution = randomInt(-8, 10);
    const offset = randomInt(2, 8);
    const right = solution + offset;
    return {
      prompt: `x + ${offset} = ${signed(right)} を、両辺から同じ数を引いて解いてください。x の値を答えてください。`,
      answers: numericAnswers(solution),
      lessonKeys: ["equality-properties"],
      hint: `両辺から${offset}を引くと x だけが残ります。`,
    };
  },
  "equation-add-subtract": () => {
    const solution = randomInt(-10, 10);
    const offset = nonZeroInt(-9, 9);
    const right = solution + offset;
    return {
      prompt: `x ${offset >= 0 ? "+" : "−"} ${Math.abs(offset)} = ${signed(right)} を解いてください。`,
      answers: numericAnswers(solution),
      lessonKeys: ["equation-add-subtract"],
      hint: "x の横の数を取り除くため、両辺に反対の加減をします。",
    };
  },
  "equation-multiply-divide": () => {
    const coefficient = nonZeroInt(-8, 8);
    const solution = nonZeroInt(-9, 9);
    const right = coefficient * solution;
    return {
      prompt: `${xTerm(coefficient)} = ${signed(right)} を解いてください。`,
      answers: numericAnswers(solution),
      lessonKeys: ["equation-multiply-divide"],
      hint: `両辺を${signed(coefficient)}で割り、x の係数を1にします。`,
    };
  },
  transposition: () => {
    const coefficient = randomInt(2, 7);
    const solution = randomInt(-6, 8);
    const constant = nonZeroInt(-8, 8);
    const right = coefficient * solution + constant;
    return {
      prompt: `${linearExpression(coefficient, constant)} = ${signed(right)} を、移項を使って解いてください。`,
      answers: numericAnswers(solution),
      lessonKeys: ["transposition"],
      hint: "定数項を反対側へ移項してから、x の係数で両辺を割ります。",
    };
  },
  "equation-both-sides": () => {
    const rightCoefficient = randomInt(1, 4);
    const leftCoefficient = randomInt(rightCoefficient + 1, 8);
    const solution = randomInt(-5, 7);
    const leftConstant = nonZeroInt(-7, 7);
    const rightConstant = (leftCoefficient - rightCoefficient) * solution + leftConstant;
    return {
      prompt: `${linearExpression(leftCoefficient, leftConstant)} = ${linearExpression(rightCoefficient, rightConstant)} を解いてください。`,
      answers: numericAnswers(solution),
      lessonKeys: ["equation-both-sides"],
      hint: "x の項を一方へ、数の項をもう一方へ集めます。",
    };
  },
  "proportion-equations": () => {
    const solution = randomInt(2, 9);
    const denominator = randomInt(2, 8);
    const scale = randomInt(2, 5);
    const rightNumerator = solution * scale;
    const rightDenominator = denominator * scale;
    return {
      prompt: `x : ${denominator} = ${rightNumerator} : ${rightDenominator} を解いてください。`,
      answers: numericAnswers(solution),
      lessonKeys: ["proportion-equations"],
      hint: "外項の積と内項の積が等しい式を作ります。",
    };
  },
  "equation-word-problems": () => {
    const price = randomInt(5, 15) * 10;
    const count = randomInt(2, 9);
    const extra = randomInt(2, 8) * 10;
    const total = price * count + extra;
    return {
      prompt: `1個${price}円の商品を x 個買い、${extra}円の袋を付けると合計${total}円でした。x の値を求めてください。`,
      answers: numericAnswers(count),
      lessonKeys: ["equation-word-problems"],
      hint: `${price}x + ${extra} = ${total} と立式します。`,
    };
  },
  "function-meaning": () => {
    const price = randomInt(4, 12) * 10;
    const count = randomInt(2, 9);
    const total = price * count;
    return {
      prompt: `1個${price}円の商品を x 個買うときの代金を y 円とします。x = ${count} のときの y を答えてください。`,
      answers: numericAnswers(total),
      lessonKeys: ["function-meaning"],
      hint: "x を一つ決めると y がただ一つ決まる関係です。単価×個数を計算します。",
    };
  },
  "variables-domain": () => {
    const maximum = randomInt(5, 20);
    return {
      prompt: `長さ${maximum} cmのリボンから x cm切り取ります。0 cm以上、全体の長さ以下だけ切り取れるとき、x の最大値を答えてください。`,
      answers: numericAnswers(maximum),
      lessonKeys: ["variables-domain"],
      hint: "変域は 0 ≤ x ≤ 全体の長さ です。",
    };
  },
  "proportion-table-expression": () => {
    const coefficient = nonZeroInt(-6, 6);
    const x = nonZeroInt(-5, 5);
    const y = coefficient * x;
    return {
      prompt: `y は x に比例し、x = ${signed(x)} のとき y = ${signed(y)} です。比例定数 a を求めてください。`,
      answers: numericAnswers(coefficient),
      lessonKeys: ["proportion-table-expression"],
      hint: "比例では a = y/x です。",
    };
  },
  coordinates: () => {
    const x = nonZeroInt(-5, 5);
    const y = nonZeroInt(-5, 5);
    return {
      prompt: `点 P の x 座標が ${signed(x)}、y 座標が ${signed(y)} です。P の座標を (x,y) の形で答えてください。`,
      answers: [`(${x},${y})`, `(${signed(x)},${signed(y)})`],
      lessonKeys: ["coordinates"],
      hint: "座標は横方向の x、縦方向の y の順に書きます。",
    };
  },
  "proportion-graph": () => {
    const coefficient = nonZeroInt(-5, 5);
    const x = nonZeroInt(-4, 4);
    const y = coefficient * x;
    return {
      prompt: `比例 y = ${xTerm(coefficient)} のグラフ上で、x = ${signed(x)} のときの y を求めてください。`,
      answers: numericAnswers(y),
      lessonKeys: ["proportion-graph"],
      hint: "グラフ上の点 (x,y) は比例の式 y = ax を満たします。",
    };
  },
  "inverse-proportion-table-expression": () => {
    const x = nonZeroInt(-6, 6);
    const y = nonZeroInt(-6, 6);
    const coefficient = x * y;
    return {
      prompt: `y は x に反比例し、x = ${signed(x)} のとき y = ${signed(y)} です。比例定数 a を求めてください。`,
      answers: numericAnswers(coefficient),
      lessonKeys: ["inverse-proportion-table-expression"],
      hint: "反比例では a = xy です。",
    };
  },
  "inverse-proportion-graph": () => {
    const x = nonZeroInt(-6, 6);
    const y = nonZeroInt(-6, 6);
    const coefficient = x * y;
    return {
      prompt: `反比例 y = ${signed(coefficient)}/x のグラフ上で、x = ${signed(x)} のときの y を求めてください。`,
      answers: numericAnswers(y),
      lessonKeys: ["inverse-proportion-graph"],
      hint: "x の値を反比例の式へ代入します。",
    };
  },
  "function-representations-application": () => {
    if (Math.random() < 0.5) {
      const rate = randomInt(2, 8);
      const x = randomInt(2, 10);
      return {
        prompt: `毎分${rate} Lずつ水を入れます。x 分後の水の量を y L とすると y = ${rate}x です。x = ${x} のときの y を求めてください。`,
        answers: numericAnswers(rate * x),
        lessonKeys: ["function-representations-application"],
        hint: "一定の割合で増えるので比例です。式へ x の値を代入します。",
      };
    }
    const area = randomInt(3, 12) * 6;
    const divisorCandidates = [2, 3, 6];
    const x = divisorCandidates[randomInt(0, divisorCandidates.length - 1)];
    return {
      prompt: `面積${area} cm²の長方形で、横を x cm、縦を y cm とすると y = ${area}/x です。x = ${x} のときの y を求めてください。`,
      answers: numericAnswers(area / x),
      lessonKeys: ["function-representations-application"],
      hint: "面積が一定なので縦と横は反比例です。式へ x の値を代入します。",
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
