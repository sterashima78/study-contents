export type ExerciseDifficulty = "basic" | "applied" | "challenge";

export type GeneratedExercise = {
  id: string;
  prompt: string;
  answers: string[];
  lessonKeys: string[];
  lessonTitles: string[];
  difficulty: ExerciseDifficulty;
  hint?: string;
};

type ExerciseSpec = Omit<GeneratedExercise, "id" | "lessonTitles" | "difficulty">;
type Generator = () => ExerciseSpec;

const lessonTitles: Record<string, string> = {
  expansion: "多項式の展開",
  "multiplication-formulas": "乗法公式：(a + b)²",
  "multiplication-formula-difference-square": "乗法公式：(a − b)²",
  "multiplication-formula-sum-difference": "乗法公式：(a + b)(a − b)",
  "common-factor": "共通因数による因数分解",
  "quadratic-factorization": "x² + px + q の因数分解",
  "general-quadratic-factorization": "ax² + bx + c の因数分解",
  "rational-irrational": "有理数と無理数",
  radicals: "根号の簡単化",
  "absolute-value": "絶対値",
  rationalization: "分母の有理化",
  "inequality-rules": "不等式の基本性質",
  solving: "一次不等式を解く",
  "word-problems": "一次不等式の文章題",
  "set-operations": "集合の和集合と共通部分",
  "propositions-counterexamples": "命題と反例",
  "necessary-sufficient": "必要条件と十分条件",
  contrapositive: "対偶",
};

const unitLessonKeys: Record<string, string[]> = {
  "expansion-factorization": [
    "expansion",
    "multiplication-formulas",
    "multiplication-formula-difference-square",
    "multiplication-formula-sum-difference",
    "common-factor",
    "quadratic-factorization",
    "general-quadratic-factorization",
  ],
  "real-numbers": ["rational-irrational", "radicals", "absolute-value", "rationalization"],
  "linear-inequalities": ["inequality-rules", "solving", "word-problems"],
  "sets-propositions": [
    "set-operations",
    "propositions-counterexamples",
    "necessary-sufficient",
    "contrapositive",
  ],
};

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const choice = <T>(values: readonly T[]) => values[randomInt(0, values.length - 1)];

const nonZeroInt = (min: number, max: number) => {
  let value = 0;
  while (value === 0) value = randomInt(min, max);
  return value;
};

const signText = (value: number, symbol = "") => {
  if (value === 0) return "";
  const absolute = Math.abs(value);
  const coefficient = symbol && absolute === 1 ? "" : String(absolute);
  return `${value > 0 ? "+" : "−"}${coefficient}${symbol}`;
};

const firstTerm = (value: number, symbol: string) => {
  const absolute = Math.abs(value);
  const coefficient = absolute === 1 ? "" : String(absolute);
  return `${value < 0 ? "−" : ""}${coefficient}${symbol}`;
};

const polynomial = (a: number, b: number, c: number) =>
  `${firstTerm(a, "x²")}${signText(b, "x")}${signText(c)}`;

const linearExpression = (a: number, b: number) =>
  `${firstTerm(a, "x")}${signText(b)}`;

const binomial = (a: number, b: number) =>
  `(${firstTerm(a, "x")} ${b >= 0 ? "+" : "−"} ${Math.abs(b)})`;

const reverseInequality = (operator: string) =>
  ({ "<": ">", ">": "<", "≤": "≥", "≥": "≤" })[operator] ?? operator;

const orderedSet = (values: number[]) => [...new Set(values)].sort((a, b) => a - b);

const setAnswer = (values: number[]) => {
  const body = orderedSet(values).join(",");
  return [`{${body}}`, body];
};

const spec = (
  prompt: string,
  answers: string[],
  lessonKeys: string[],
  hint?: string,
): ExerciseSpec => ({ prompt, answers, lessonKeys, hint });

const expansionGenerator: Generator = () => {
  let a = randomInt(2, 5);
  let b = randomInt(1, 6);
  let c = nonZeroInt(-5, 5);
  while (a * c + b === 0) {
    a = randomInt(2, 5);
    b = randomInt(1, 6);
    c = nonZeroInt(-5, 5);
  }
  const answer = polynomial(a, a * c + b, b * c);
  return spec(`${binomial(a, b)}(x ${c >= 0 ? "+" : "−"} ${Math.abs(c)}) を展開してください。`, [answer], ["expansion"], "分配法則で4つの積を作り、最後に同類項をまとめます。");
};

const plusSquareGenerator: Generator = () => {
  const a = randomInt(1, 5);
  const b = randomInt(1, 7);
  const answer = polynomial(a * a, 2 * a * b, b * b);
  return spec(`${binomial(a, b)}² を展開してください。`, [answer], ["multiplication-formulas"], "(a + b)² = a² + 2ab + b² を使います。");
};

const minusSquareGenerator: Generator = () => {
  const a = randomInt(1, 5);
  const b = randomInt(1, 7);
  const answer = polynomial(a * a, -2 * a * b, b * b);
  return spec(`${binomial(a, -b)}² を展開してください。`, [answer], ["multiplication-formula-difference-square"], "(a − b)² = a² − 2ab + b² で、中央だけが負になります。");
};

const sumDifferenceGenerator: Generator = () => {
  const a = randomInt(1, 6);
  const b = randomInt(1, 8);
  const answer = polynomial(a * a, 0, -(b * b));
  return spec(`${binomial(a, b)}${binomial(a, -b)} を展開してください。`, [answer], ["multiplication-formula-sum-difference"], "(a + b)(a − b) = a² − b² を使います。");
};

const commonFactorGenerator: Generator = () => {
  const g = randomInt(2, 7);
  const a = randomInt(1, 5);
  const b = nonZeroInt(-6, 6);
  const promptExpression = polynomial(g * a, g * b, 0);
  const factor = firstTerm(g, "x");
  const inside = `${firstTerm(a, "x")} ${b >= 0 ? "+" : "−"} ${Math.abs(b)}`;
  const answer = `${factor}(${inside.replaceAll(" ", "")})`;
  return spec(`${promptExpression} を共通因数で因数分解してください。`, [answer], ["common-factor"], "数の最大公約数と、すべての項に共通する x を探します。");
};

const quadraticFactorizationGenerator: Generator = () => {
  const m = nonZeroInt(-6, 6);
  const n = nonZeroInt(-6, 6);
  const promptExpression = polynomial(1, m + n, m * n);
  const first = `(x${signText(m)})`;
  const second = `(x${signText(n)})`;
  return spec(`${promptExpression} を因数分解してください。`, [`${first}${second}`, `${second}${first}`], ["quadratic-factorization"], "和が x の係数、積が定数項になる2数を探します。");
};

const generalQuadraticFactorizationGenerator: Generator = () => {
  const a = randomInt(2, 4);
  const b = randomInt(2, 5);
  const p = randomInt(1, 5);
  const q = randomInt(1, 5);
  const promptExpression = polynomial(a * b, a * q + b * p, p * q);
  const first = `(${firstTerm(a, "x")}+${p})`;
  const second = `(${firstTerm(b, "x")}+${q})`;
  return spec(`${promptExpression} を因数分解してください。`, [`${first}${second}`, `${second}${first}`], ["general-quadratic-factorization"], "先頭項と定数項から候補を作り、交差項の和を確認します。");
};

const rationalIrrationalGenerator: Generator = () => {
  const candidates = [
    { value: "0.125", answer: "有理数" },
    { value: "0.333…（3が循環）", answer: "有理数" },
    { value: "√2", answer: "無理数" },
    { value: "√11", answer: "無理数" },
    { value: "−7/5", answer: "有理数" },
    { value: "π", answer: "無理数" },
  ] as const;
  const item = choice(candidates);
  return spec(`${item.value} は有理数・無理数のどちらですか。`, [item.answer], ["rational-irrational"], "分数で正確に表せるかを考えます。");
};

const radicalsGenerator: Generator = () => {
  const k = randomInt(2, 8);
  const n = choice([2, 3, 5, 6, 7, 10, 11, 13] as const);
  const radicand = k * k * n;
  return spec(`√${radicand} を簡単にしてください。`, [`${k}√${n}`], ["radicals"], `${radicand} の中に ${k * k} という平方数が含まれています。`);
};

const absoluteValueGenerator: Generator = () => {
  const a = randomInt(2, 12);
  const b = randomInt(1, 9);
  const operator = choice(["+", "−"] as const);
  const answer = operator === "+" ? a + b : a - b;
  return spec(`|−${a}| ${operator} |${b}| を計算してください。`, [String(answer)], ["absolute-value"], "絶対値を先に1つずつ外してから計算します。");
};

const rationalizationGenerator: Generator = () => {
  const p = choice([1, 2, 4, 7] as const);
  const q = choice([3, 5, 7, 11] as const);
  return spec(`${p}/√${q} を有理化してください。`, [`${p}√${q}/${q}`], ["rationalization"], `分子と分母に √${q} を掛けます。`);
};

const inequalityRulesGenerator: Generator = () => {
  const left = randomInt(-5, 2);
  const right = left + randomInt(1, 7);
  const multiplier = -randomInt(2, 5);
  return spec(`${left} < ${right} の両辺に ${multiplier} を掛けた結果を、不等号まで含めて書いてください。`, [`${left * multiplier}>${right * multiplier}`], ["inequality-rules"], "負の数を掛けるので、不等号の向きを反転します。");
};

const solvingGenerator: Generator = () => {
  const a = choice([-5, -4, -3, 2, 3, 4, 5] as const);
  const b = nonZeroInt(-8, 8);
  const solution = randomInt(-5, 6);
  const operator = choice(["<", "≤", ">", "≥"] as const);
  const right = a * solution + b;
  const solvedOperator = a < 0 ? reverseInequality(operator) : operator;
  return spec(`${linearExpression(a, b)} ${operator} ${right} を解いてください。`, [`x${solvedOperator}${solution}`], ["solving", ...(a < 0 ? ["inequality-rules"] : [])], a < 0 ? "最後に負の数で割るため、不等号を反転します。" : "x の項と定数項を分けてから係数で割ります。");
};

const wordProblemsGenerator: Generator = () => {
  const price = choice([80, 120, 150, 180, 250] as const);
  const fixed = choice([50, 100, 200, 300, 500] as const);
  const maxCount = randomInt(4, 10);
  const budget = fixed + price * maxCount + randomInt(0, price - 1);
  return spec(`1個${price}円の商品を買い、固定費${fixed}円を含めて${budget}円以下にします。最大何個買えますか。`, [String(maxCount), `${maxCount}個`], ["word-problems", "solving"], `個数を x として ${price}x + ${fixed} ≤ ${budget} と置きます。`);
};

const setOperationsGenerator: Generator = () => {
  const pool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const a = orderedSet(shuffled.slice(0, 4));
  const b = orderedSet([...shuffled.slice(2, 4), ...shuffled.slice(4, 6)]);
  const operation = choice(["union", "intersection"] as const);
  const symbol = operation === "union" ? "A ∪ B" : "A ∩ B";
  const result = operation === "union" ? orderedSet([...a, ...b]) : a.filter((value) => b.includes(value));
  return spec(`A={${a.join(",")}}, B={${b.join(",")}} の ${symbol} を小さい順に書いてください。`, setAnswer(result), ["set-operations"], operation === "union" ? "和集合は少なくとも一方に含まれる要素です。" : "共通部分は両方に含まれる要素です。");
};

const counterexampleGenerator: Generator = () => {
  const k = randomInt(1, 5);
  return spec(`命題「x² ≥ ${k * k} ならば x ≥ ${k}」の反例となる整数を1つ書いてください。`, [`-${k}`, `−${k}`, `-${k + 1}`, `−${k + 1}`, `-${k + 2}`, `−${k + 2}`], ["propositions-counterexamples"], `負の整数で、絶対値が ${k} 以上のものを試します。`);
};

const necessarySufficientGenerator: Generator = () => {
  const template = choice([
    {
      prompt: "p: x = 0, q: x² = 0 とします。p は q の何条件ですか。",
      answers: ["必要十分条件", "十分かつ必要条件"],
      hint: "p ⇒ q と q ⇒ p の両方を確認します。",
    },
    {
      prompt: "p: x = 3, q: x² = 9 とします。p は q の何条件ですか。",
      answers: ["十分条件"],
      hint: "x = −3 は q を満たしますが p を満たしません。",
    },
    {
      prompt: "p: x > 5, q: x > 2 とします。p は q の何条件ですか。",
      answers: ["十分条件"],
      hint: "p が成り立てば q は必ず成り立つかを確認します。",
    },
  ] as const);
  return spec(template.prompt, [...template.answers], ["necessary-sufficient"], template.hint);
};

const contrapositiveGenerator: Generator = () => {
  const lower = randomInt(-3, 4);
  const upper = lower + randomInt(2, 7);
  return spec(`命題「x > ${upper} ならば x > ${lower}」の対偶を書いてください。`, [`x≤${lower}⇒x≤${upper}`, `x≤${lower}ならばx≤${upper}`], ["contrapositive"], "結論を否定し、条件を否定して、順番を逆にします。");
};

const lessonGenerators: Record<string, Generator> = {
  expansion: expansionGenerator,
  "multiplication-formulas": plusSquareGenerator,
  "multiplication-formula-difference-square": minusSquareGenerator,
  "multiplication-formula-sum-difference": sumDifferenceGenerator,
  "common-factor": commonFactorGenerator,
  "quadratic-factorization": quadraticFactorizationGenerator,
  "general-quadratic-factorization": generalQuadraticFactorizationGenerator,
  "rational-irrational": rationalIrrationalGenerator,
  radicals: radicalsGenerator,
  "absolute-value": absoluteValueGenerator,
  rationalization: rationalizationGenerator,
  "inequality-rules": inequalityRulesGenerator,
  solving: solvingGenerator,
  "word-problems": wordProblemsGenerator,
  "set-operations": setOperationsGenerator,
  "propositions-counterexamples": counterexampleGenerator,
  "necessary-sufficient": necessarySufficientGenerator,
  contrapositive: contrapositiveGenerator,
};

const expansionApplied: Generator[] = [
  () => {
    const a = randomInt(1, 4);
    const b = randomInt(1, 6);
    return spec(`(${a}x + ${b})² − (${a}x − ${b})² を展開して簡単にしてください。`, [`${4 * a * b}x`], ["multiplication-formulas", "multiplication-formula-difference-square"], "2つの二乗公式をそれぞれ展開すると、二次項と定数項が消えます。");
  },
  () => {
    const g = randomInt(2, 5);
    const m = randomInt(1, 4);
    const n = randomInt(1, 5);
    const expanded = polynomial(g, g * (m + n), g * m * n);
    return spec(`${expanded} をできるだけ因数分解してください。`, [`${g}(x+${m})(x+${n})`, `${g}(x+${n})(x+${m})`], ["common-factor", "quadratic-factorization"], `まず共通因数 ${g} をくくり、その後 x² + px + q の形を因数分解します。`);
  },
  () => {
    const a = randomInt(1, 3);
    const b = randomInt(1, 5);
    const c = randomInt(1, 4);
    const d = randomInt(1, 5);
    const answer = polynomial(a * a + c * c, 2 * c * d, d * d - b * b);
    return spec(`(${a}x + ${b})(${a}x − ${b}) + (${c}x + ${d})² を展開して簡単にしてください。`, [answer], ["multiplication-formula-sum-difference", "multiplication-formulas"], "和と差の積と、和の二乗を別々に展開してから足します。");
  },
];

const realApplied: Generator[] = [
  () => {
    const k = randomInt(2, 6);
    const n = choice([2, 3, 5, 7] as const);
    const a = randomInt(1, 9);
    return spec(`√${k * k * n} + |−${a}| を簡単にしてください。`, [`${k}√${n}+${a}`, `${a}+${k}√${n}`], ["radicals", "absolute-value"], "根号と絶対値をそれぞれ先に簡単にします。");
  },
  () => {
    const q = choice([3, 5, 7] as const);
    const p = randomInt(1, q - 1);
    return spec(`${p}/√${q} + √${q} を有理化した形でまとめてください。`, [`${p + q}√${q}/${q}`], ["rationalization", "radicals"], `√${q} を ${q}√${q}/${q} とみると通分できます。`);
  },
  () => {
    const k = randomInt(2, 7);
    const n = choice([2, 3, 5, 6, 7] as const);
    return spec(`|−√${k * k * n}| を簡単にしてください。`, [`${k}√${n}`], ["absolute-value", "radicals"], "絶対値で符号を外し、その後に根号を簡単にします。");
  },
];

const inequalityApplied: Generator[] = [
  solvingGenerator,
  wordProblemsGenerator,
  () => {
    const a = randomInt(2, 5);
    const b = randomInt(1, 6);
    const c = a + randomInt(1, 4);
    const d = randomInt(7, 14);
    const coefficient = a - c;
    const constant = d - b;
    const operator = coefficient < 0 ? "≥" : "≤";
    const boundary = constant / coefficient;
    const clean = Number.isInteger(boundary);
    if (!clean) return solvingGenerator();
    return spec(`${a}x + ${b} ≤ ${c}x + ${d} を解いてください。`, [`x${operator}${boundary}`], ["solving", "inequality-rules"], "x の項を一方へ集め、負の係数で割る場合は不等号を反転します。");
  },
];

const setsApplied: Generator[] = [
  () => {
    const a = [1, 2, 4, 6];
    const b = [2, 3, 4, 7];
    const c = [2, 4, 5, 8];
    return spec(`A={${a}}, B={${b}}, C={${c}} の (A ∪ B) ∩ C を求めてください。`, ["{2,4}", "2,4"], ["set-operations"], "先に A ∪ B を作り、その結果と C の共通部分を取ります。");
  },
  () => {
    const k = randomInt(2, 5);
    return spec(`命題「x² = ${k * k} ならば x = ${k}」は真か偽か。`, ["偽"], ["propositions-counterexamples"], `x = −${k} を反例として確認します。`);
  },
  () => {
    const lower = randomInt(0, 4);
    const upper = lower + randomInt(2, 5);
    return spec(`p: x > ${upper}, q: x > ${lower} とします。p ⇒ q の対偶を書いてください。`, [`x≤${lower}⇒x≤${upper}`, `x≤${lower}ならばx≤${upper}`], ["necessary-sufficient", "contrapositive"], "p ⇒ q が成り立つことを確認し、¬q ⇒ ¬p を作ります。");
  },
];

const unitAppliedGenerators: Record<string, Generator[]> = {
  "expansion-factorization": expansionApplied,
  "real-numbers": realApplied,
  "linear-inequalities": inequalityApplied,
  "sets-propositions": setsApplied,
};

const unitChallengeGenerators: Record<string, Generator> = {
  "expansion-factorization": () => {
    const a = randomInt(2, 4);
    const b = randomInt(1, 4);
    const c = randomInt(2, 4);
    const d = randomInt(1, 4);
    const e = randomInt(1, 3);
    const f = randomInt(1, 4);
    const answer = polynomial(a * c - e * e, a * d + b * c - 2 * e * f, b * d - f * f);
    return spec(`(${a}x + ${b})(${c}x + ${d}) − (${e}x + ${f})² を展開して簡単にしてください。`, [answer], ["expansion", "multiplication-formulas"], "最初の積は分配法則、後半は和の二乗の公式で展開してから引きます。");
  },
  "real-numbers": () =>
    spec("2/√3 + √12 − |−1| を有理化した形で簡単にしてください。", ["8√3/3-1", "−1+8√3/3"], ["rationalization", "radicals", "absolute-value"], "2/√3 を有理化し、√12 を 2√3 に直してから同類の根号をまとめます。"),
  "linear-inequalities": () =>
    spec("料金Aは 800 + 120x 円、料金Bは 2000 + 60x 円です。料金Aが料金B以上になる x の範囲を求めてください。", ["x≥20"], ["word-problems", "solving", "inequality-rules"], "800 + 120x ≥ 2000 + 60x と置いて解きます。"),
  "sets-propositions": () =>
    spec("p: x > 4, q: x > 1 とします。p は q の十分条件であることを踏まえ、p ⇒ q の対偶を書いてください。", ["x≤1⇒x≤4", "x≤1ならばx≤4"], ["necessary-sufficient", "contrapositive"], "p ⇒ q の対偶は ¬q ⇒ ¬p です。"),
};

const finalize = (exercise: ExerciseSpec, difficulty: ExerciseDifficulty, index: number) => ({
  ...exercise,
  id: `${difficulty}-${index}-${Math.random().toString(36).slice(2, 8)}`,
  difficulty,
  lessonTitles: exercise.lessonKeys.map((key) => lessonTitles[key] ?? key),
});

export const generateLessonExercises = (unitKey: string, lessonKey: string, count = 3) => {
  const allowed = unitLessonKeys[unitKey] ?? [];
  const generator = allowed.includes(lessonKey) ? lessonGenerators[lessonKey] : undefined;
  if (!generator) return [];
  return Array.from({ length: count }, (_, index) => finalize(generator(), "basic", index));
};

export const generateUnitExercises = (unitKey: string) => {
  const lessons = unitLessonKeys[unitKey] ?? [];
  if (lessons.length === 0) return [];

  const basic = Array.from({ length: 12 }, (_, index) => {
    const lessonKey = lessons[index % lessons.length];
    return finalize(lessonGenerators[lessonKey](), "basic", index);
  });

  const appliedGenerators = unitAppliedGenerators[unitKey] ?? [];
  const applied = appliedGenerators.slice(0, 3).map((generator, index) => finalize(generator(), "applied", index));

  const challengeGenerator = unitChallengeGenerators[unitKey];
  const challenge = challengeGenerator ? [finalize(challengeGenerator(), "challenge", 0)] : [];

  return [...basic, ...applied, ...challenge];
};
