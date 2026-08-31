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

const polynomialLessonKeys = [
  "monomial-polynomial-multiplication",
  "polynomial-monomial-division",
  "binomial-expansion-distributive",
  "square-expansion",
  "sum-difference-expansion",
  "product-expansion-xab",
  "common-factor-factorization",
  "square-factorization",
  "difference-squares-factorization",
  "trinomial-factorization",
  "formula-efficient-calculation",
  "polynomial-relation-explanation",
] as const;

const quadraticLessonKeys = [
  "quadratic-equation-meaning",
  "quadratic-equation-square-root",
  "quadratic-equation-factorization",
  "quadratic-equation-completing-square",
  "quadratic-formula-derivation",
  "quadratic-formula-solving",
  "quadratic-equation-method-selection",
  "quadratic-equation-modeling",
  "quadratic-equation-interpretation",
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
  "monomial-polynomial-multiplication": "単項式と多項式を掛ける",
  "polynomial-monomial-division": "多項式を単項式で割る",
  "binomial-expansion-distributive": "分配法則で一次式の積を展開する",
  "square-expansion": "和と差の2乗を展開する",
  "sum-difference-expansion": "和と差の積を展開する",
  "product-expansion-xab": "(x+a)(x+b)を展開する",
  "common-factor-factorization": "共通因数で因数分解する",
  "square-factorization": "完全平方の形を因数分解する",
  "difference-squares-factorization": "平方の差を因数分解する",
  "trinomial-factorization": "x²+px+qを因数分解する",
  "formula-efficient-calculation": "展開・因数分解の公式を数の計算に活用する",
  "polynomial-relation-explanation": "文字式で数量の関係を説明する",
  "quadratic-equation-meaning": "二次方程式の意味と解を捉える",
  "quadratic-equation-square-root": "平方根の考えで二次方程式を解く",
  "quadratic-equation-factorization": "因数分解して二次方程式を解く",
  "quadratic-equation-completing-square": "平方の形に変形して二次方程式を解く",
  "quadratic-formula-derivation": "解の公式が生まれる流れを知る",
  "quadratic-formula-solving": "解の公式で二次方程式を解く",
  "quadratic-equation-method-selection": "二次方程式の解法を選ぶ",
  "quadratic-equation-modeling": "具体的な場面から二次方程式をつくる",
  "quadratic-equation-interpretation": "二次方程式の解を場面に戻して吟味する",
};

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const signedTerm = (value: number, variable = "") =>
  value > 0 ? `+${value}${variable}` : value < 0 ? `${value}${variable}` : "";
const randomNonZero = (min: number, max: number) => {
  let value = 0;
  while (value === 0) value = randomInt(min, max);
  return value;
};
const rootPair = (first: number, second: number) =>
  [first, second]
    .sort((a, b) => a - b)
    .map(String)
    .join(",");
const half = (numerator: number) => (numerator === 1 ? "1/2" : numerator === -1 ? "-1/2" : `${numerator}/2`);

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
  "monomial-polynomial-multiplication": () => {
    const m = randomInt(2, 5);
    const a = randomInt(2, 6);
    const b = randomInt(1, 8);
    return {
      prompt: `${m}x(${a}x+${b})を計算してください。`,
      answers: [`${m * a}x²+${m * b}x`, `${m * a}x^2+${m * b}x`],
      lessonKeys: ["monomial-polynomial-multiplication"],
      hint: `${m}xを${a}xと${b}の両方へ掛けます。`,
    };
  },
  "polynomial-monomial-division": () => {
    const m = randomInt(2, 5);
    const a = randomInt(2, 6);
    const b = randomInt(1, 6);
    return {
      prompt: `(${m * a}x²+${m * b}x)÷${m}xを計算してください。`,
      answers: [`${a}x+${b}`],
      lessonKeys: ["polynomial-monomial-division"],
      hint: "2つの項をそれぞれ同じ単項式で割ります。",
    };
  },
  "binomial-expansion-distributive": () => {
    const a = randomInt(1, 5);
    const b = randomInt(1, 6);
    return {
      prompt: `(x+${a})(x+${b})を展開してください。`,
      answers: [`x²+${a + b}x+${a * b}`, `x^2+${a + b}x+${a * b}`],
      lessonKeys: ["binomial-expansion-distributive"],
      hint: "4つの積を作ってから同類項をまとめます。",
    };
  },
  "square-expansion": () => {
    const n = randomInt(2, 8);
    return {
      prompt: `(x+${n})²を展開してください。`,
      answers: [`x²+${2 * n}x+${n * n}`, `x^2+${2 * n}x+${n * n}`],
      lessonKeys: ["square-expansion"],
      hint: `(a+b)²=a²+2ab+b²を使います。`,
    };
  },
  "sum-difference-expansion": () => {
    const n = randomInt(2, 9);
    return {
      prompt: `(x+${n})(x−${n})を展開してください。`,
      answers: [`x²−${n * n}`, `x²-${n * n}`, `x^2-${n * n}`],
      lessonKeys: ["sum-difference-expansion"],
      hint: "和と差の積は平方の差になります。",
    };
  },
  "product-expansion-xab": () => {
    const a = randomInt(2, 7);
    const b = -randomInt(1, 6);
    const p = a + b;
    const q = a * b;
    const middle = signedTerm(p, "x");
    return {
      prompt: `(x+${a})(x${signedTerm(b)})を展開してください。`,
      answers: [`x²${middle}${signedTerm(q)}`, `x^2${middle}${signedTerm(q)}`],
      lessonKeys: ["product-expansion-xab"],
      hint: "xの係数は2数の和、定数項は2数の積です。",
    };
  },
  "common-factor-factorization": () => {
    const common = randomInt(2, 6);
    const pairs = [
      [2, 3],
      [2, 5],
      [3, 4],
      [3, 5],
      [4, 5],
      [5, 6],
    ] as const;
    const [a, b] = pairs[randomInt(0, pairs.length - 1)];
    return {
      prompt: `${common * a}x²+${common * b}xを因数分解してください。`,
      answers: [`${common}x(${a}x+${b})`],
      lessonKeys: ["common-factor-factorization"],
      hint: `${common}xを最大の共通因数としてくくれます。`,
    };
  },
  "square-factorization": () => {
    const n = randomInt(2, 8);
    return {
      prompt: `x²+${2 * n}x+${n * n}を因数分解してください。`,
      answers: [`(x+${n})²`, `(x+${n})^2`],
      lessonKeys: ["square-factorization"],
      hint: "最初と最後の平方根の積を2倍すると中央の項になります。",
    };
  },
  "difference-squares-factorization": () => {
    const n = randomInt(2, 10);
    return {
      prompt: `x²−${n * n}を因数分解してください。`,
      answers: [`(x+${n})(x−${n})`, `(x+${n})(x-${n})`],
      lessonKeys: ["difference-squares-factorization"],
      hint: "a²−b²=(a+b)(a−b)を使います。",
    };
  },
  "trinomial-factorization": () => {
    const a = randomInt(1, 6);
    const b = randomInt(1, 6);
    const p = a + b;
    const q = a * b;
    return {
      prompt: `x²+${p}x+${q}を因数分解してください。`,
      answers: [`(x+${a})(x+${b})`, `(x+${b})(x+${a})`],
      lessonKeys: ["trinomial-factorization"],
      hint: `和が${p}、積が${q}になる2数を探します。`,
    };
  },
  "formula-efficient-calculation": () => {
    const n = randomInt(1, 4);
    const value = 100 + n;
    return {
      prompt: `${value}²を展開公式を使って計算した値を答えてください。`,
      answers: [String(value * value)],
      lessonKeys: ["formula-efficient-calculation"],
      hint: `${value}=100+${n}として和の2乗を使います。`,
    };
  },
  "polynomial-relation-explanation": () => ({
    prompt: "連続する偶数を2n、2n+2とするとき、2n(2n+2)+1を因数分解した形を答えてください。",
    answers: ["(2n+1)²", "(2n+1)^2"],
    lessonKeys: ["polynomial-relation-explanation"],
    hint: "展開すると4n²+4n+1です。",
  }),
  "quadratic-equation-meaning": () => {
    const b = randomNonZero(-7, 7);
    const c = randomInt(-8, 8);
    return {
      prompt: `x²${signedTerm(b, "x")}${signedTerm(c)}=0は何次方程式ですか。`,
      answers: ["二次方程式", "2次方程式"],
      lessonKeys: ["quadratic-equation-meaning"],
      hint: "整理した式の最高次数に注目します。",
    };
  },
  "quadratic-equation-square-root": () => {
    const n = [2, 3, 5, 6, 7, 10, 11, 13][randomInt(0, 7)];
    return {
      prompt: `x²=${n}の解を「小さい方,大きい方」の順で答えてください。`,
      answers: [`-√${n},√${n}`, `−√${n},√${n}`],
      lessonKeys: ["quadratic-equation-square-root"],
      hint: `2乗して${n}になる実数は正負の二つです。`,
    };
  },
  "quadratic-equation-factorization": () => {
    const first = randomNonZero(-6, 6);
    let second = randomNonZero(-6, 6);
    while (second === first) second = randomNonZero(-6, 6);
    const sum = first + second;
    const product = first * second;
    return {
      prompt: `x²${signedTerm(-sum, "x")}${signedTerm(product)}=0の解を小さい順にカンマで答えてください。`,
      answers: [rootPair(first, second)],
      lessonKeys: ["quadratic-equation-factorization"],
      hint: `(x−${first})(x−${second})=0の形へ因数分解できます。`,
    };
  },
  "quadratic-equation-completing-square": () => {
    const m = randomNonZero(-5, 5);
    const radius = randomInt(2, 6);
    const constant = m * m - radius * radius;
    const first = -m - radius;
    const second = -m + radius;
    return {
      prompt: `x²${signedTerm(2 * m, "x")}${signedTerm(constant)}=0を平方の形に変形して解き、解を小さい順にカンマで答えてください。`,
      answers: [rootPair(first, second)],
      lessonKeys: ["quadratic-equation-completing-square"],
      hint: `(x${signedTerm(m)})²=${radius * radius}の形を作ります。`,
    };
  },
  "quadratic-formula-derivation": () => {
    const m = randomInt(2, 6);
    const k = randomInt(2, 15);
    const constant = m * m - k;
    return {
      prompt: `x²+${2 * m}x${signedTerm(constant)}=0を(x+${m})²=kの形にするとき、kを答えてください。`,
      answers: [String(k)],
      lessonKeys: ["quadratic-formula-derivation"],
      hint: `${2 * m}の半分${m}の2乗を両辺に加えます。`,
    };
  },
  "quadratic-formula-solving": () => {
    const integerRoot = randomInt(1, 5);
    const oddNumerator = [-5, -3, -1, 1, 3, 5][randomInt(0, 5)];
    const b = -(2 * integerRoot + oddNumerator);
    const c = integerRoot * oddNumerator;
    const halfRoot = oddNumerator / 2;
    const answers =
      integerRoot < halfRoot
        ? [`${integerRoot},${half(oddNumerator)}`]
        : [`${half(oddNumerator)},${integerRoot}`];
    return {
      prompt: `2x²${signedTerm(b, "x")}${signedTerm(c)}=0を解の公式で解き、解を小さい順にカンマで答えてください。`,
      answers,
      lessonKeys: ["quadratic-formula-solving"],
      hint: `a=2、b=${b}、c=${c}として解の公式へ代入します。`,
    };
  },
  "quadratic-equation-method-selection": () => {
    const pattern = randomInt(0, 3);
    if (pattern === 0) {
      const n = [2, 3, 5, 7, 11][randomInt(0, 4)];
      return {
        prompt: `x²=${n}を解くとき、最も直接的な方法を答えてください。`,
        answers: ["平方根", "平方根の考え"],
        lessonKeys: ["quadratic-equation-method-selection"],
        hint: "すでにX²=kの形です。",
      };
    }
    if (pattern === 1) {
      const first = randomInt(1, 5);
      const second = randomInt(first + 1, 7);
      return {
        prompt: `x²-${first + second}x+${first * second}=0を解くとき、最も直接的な方法を答えてください。`,
        answers: ["因数分解"],
        lessonKeys: ["quadratic-equation-method-selection"],
        hint: "整数の一次式の積へすぐ直せます。",
      };
    }
    if (pattern === 2) {
      const m = randomInt(2, 5);
      return {
        prompt: `x²+${2 * m}x−1=0を、一次項の係数が偶数であることを生かして解く方法を答えてください。`,
        answers: ["平方完成", "平方の形", "平方の形に変形"],
        lessonKeys: ["quadratic-equation-method-selection"],
        hint: "一次項の係数の半分を使うと平方の形を作れます。",
      };
    }
    const n = [1, 3, 4, 5, 7][randomInt(0, 4)];
    return {
      prompt: `x²+x−${n}=0を解くとき、整数で因数分解しにくい場合に使える方法を答えてください。`,
      answers: ["解の公式"],
      lessonKeys: ["quadratic-equation-method-selection"],
      hint: "標準形ax²+bx+c=0なら係数から直接解を求められます。",
    };
  },
  "quadratic-equation-modeling": () => {
    const side = randomInt(4, 10);
    const area = side * side - 1;
    return {
      prompt: `元の正方形の1辺をx cmとし、一方を1cm長く、他方を1cm短くした長方形の面積が${area}cm²です。xについての方程式を答えてください。`,
      answers: [
        `(x+1)(x-1)=${area}`,
        `(x+1)(x−1)=${area}`,
        `x²-1=${area}`,
        `x^2-1=${area}`,
        `x²−1=${area}`,
        `x²-${side * side}=0`,
        `x^2-${side * side}=0`,
      ],
      lessonKeys: ["quadratic-equation-modeling"],
      hint: "長辺×短辺=面積と表します。",
    };
  },
  "quadratic-equation-interpretation": () => {
    const side = randomInt(4, 10);
    const area = side * side - 1;
    return {
      prompt: `元の正方形の1辺をx cmとし、一方を1cm長く、他方を1cm短くした長方形の面積が${area}cm²です。二次方程式を解いて得られる正負の解を吟味し、元の正方形の1辺を答えてください。`,
      answers: [String(side), `${side}cm`],
      lessonKeys: ["quadratic-equation-interpretation"],
      hint: `方程式では±${side}が現れますが、長さとして採用できる値を選びます。`,
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
  const unitLessonKeys =
    unitKey === "square-roots"
      ? squareRootLessonKeys
      : unitKey === "polynomial-expansion-factorization"
        ? polynomialLessonKeys
        : unitKey === "quadratic-equations"
          ? quadraticLessonKeys
          : undefined;
  if (!unitLessonKeys) return [];
  const difficulties: MiddleMathExerciseDifficulty[] = [
    "basic",
    "basic",
    "basic",
    "applied",
    "applied",
    "challenge",
  ];
  const startIndex = randomInt(0, unitLessonKeys.length - 1);
  return Array.from({ length: count }, (_, index) => {
    const lessonKey = unitLessonKeys[(startIndex + index) % unitLessonKeys.length];
    return withMetadata(
      generators[lessonKey](),
      `${unitKey}-${Date.now()}-${index}`,
      difficulties[index % difficulties.length],
    );
  });
};
