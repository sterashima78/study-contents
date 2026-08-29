export type FormulaDerivationStep = {
  expression: string;
  note: string;
};

export type FormulaDerivation = {
  title: string;
  introduction: string;
  steps: FormulaDerivationStep[];
};

const formulaDerivations: Record<string, FormulaDerivation> = {
  "multiplication-formulas": {
    title: "公式の導出: (a + b)²",
    introduction:
      "二乗を同じ式どうしの積に戻し、分配法則で普通に展開すると公式が得られます。",
    steps: [
      {
        expression: "(a + b)² = (a + b)(a + b)",
        note: "二乗は、同じ式を2回掛けることです。",
      },
      {
        expression: "= a² + ab + ab + b²",
        note: "分配法則で4つの積をすべて書き出します。",
      },
      {
        expression: "= a² + 2ab + b²",
        note: "同類項 ab + ab を 2ab とまとめます。これが和の二乗の公式です。",
      },
    ],
  },
  "multiplication-formula-difference-square": {
    title: "公式の導出: (a − b)²",
    introduction:
      "差の二乗も、同じ式どうしの積として書き直してから分配法則で展開します。",
    steps: [
      {
        expression: "(a − b)² = (a − b)(a − b)",
        note: "二乗を積の形に戻します。",
      },
      {
        expression: "= a² − ab − ab + b²",
        note: "4つの積を順に計算すると、中央に −ab が2つ現れます。",
      },
      {
        expression: "= a² − 2ab + b²",
        note: "−ab − ab を −2ab とまとめます。最後は (−b)(−b) = b² なので正です。",
      },
    ],
  },
  "multiplication-formula-sum-difference": {
    title: "公式の導出: (a + b)(a − b)",
    introduction:
      "和と差の積も、特別な操作ではなく分配法則で展開した結果として理解できます。",
    steps: [
      {
        expression: "(a + b)(a − b)",
        note: "まず通常の2つの二項式の積として見ます。",
      },
      {
        expression: "= a² − ab + ab − b²",
        note: "分配法則で4つの積を書き出します。",
      },
      {
        expression: "= a² − b²",
        note: "−ab と +ab が打ち消し合うので、二乗の差だけが残ります。",
      },
    ],
  },
  "common-factor": {
    title: "式変形の根拠: 共通因数でくくる",
    introduction:
      "共通因数による因数分解は、分配法則を逆向きに使った式変形です。",
    steps: [
      {
        expression: "a(b + c) = ab + ac",
        note: "分配法則で展開すると右辺になります。",
      },
      {
        expression: "ab + ac = a(b + c)",
        note: "同じ等式を逆向きに読むと、共通因数 a をくくる因数分解になります。",
      },
    ],
  },
  "quadratic-factorization": {
    title: "公式の導出: x² + px + q の因数分解",
    introduction:
      "因数分解の形は、(x + m)(x + n) を先に展開して係数を比べると導けます。",
    steps: [
      {
        expression: "(x + m)(x + n) = x² + nx + mx + mn",
        note: "分配法則で4つの積を出します。",
      },
      {
        expression: "= x² + (m + n)x + mn",
        note: "一次の同類項 nx + mx をまとめます。",
      },
      {
        expression: "m + n = p, mn = q なら x² + px + q = (x + m)(x + n)",
        note: "x の係数と定数項を比べると、『和が p、積が q』という条件が得られます。",
      },
    ],
  },
  "general-quadratic-factorization": {
    title: "公式の導出: (mx + p)(nx + q)",
    introduction:
      "一般の二項式どうしの積も、4つの積を出してから一次の項をまとめるだけです。",
    steps: [
      {
        expression: "(mx + p)(nx + q)",
        note: "2つの二項式の積をそのまま展開します。",
      },
      {
        expression: "= mnx² + mqx + npx + pq",
        note: "分配法則で4つの積をすべて書き出します。",
      },
      {
        expression: "= mnx² + (mq + np)x + pq",
        note: "一次の項 mqx + npx をまとめると、この形になります。",
      },
    ],
  },
  radicals: {
    title: "公式の導出: √(a²b) = a√b",
    introduction:
      "積の平方根を分けられる範囲で、平方になっている部分を取り出します。",
    steps: [
      {
        expression: "√(a²b) = √(a²)·√b",
        note: "根号の中の積を2つの平方根に分けます。",
      },
      {
        expression: "= a√b  （a ≥ 0）",
        note: "a ≥ 0 なら √(a²) = a なので、a を根号の外へ出せます。",
      },
    ],
  },
  rationalization: {
    title: "公式の導出: 1/√a = √a/a",
    introduction:
      "分子と分母に同じ √a を掛け、分数の値を変えずに分母の根号をなくします。",
    steps: [
      {
        expression: "1/√a = (1/√a)·(√a/√a)",
        note: "√a/√a = 1 なので、掛けても元の値は変わりません。",
      },
      {
        expression: "= √a/(√a·√a)",
        note: "分子どうし、分母どうしを掛けます。",
      },
      {
        expression: "= √a/a",
        note: "√a·√a = a なので、分母から根号がなくなります。",
      },
    ],
  },
};

export const getFormulaDerivation = (lessonKey: string) =>
  formulaDerivations[lessonKey];
