import type { MathLesson } from "../../../../math1/types";

export const radicalSimplificationLesson: MathLesson = {
  key: "radical-simplification",
  title: "根号の中を簡単にする",
  description: "平方数を因数として取り出し、√12=2√3のように平方根を扱いやすい形へ直します。",
  goals: [
    "根号の中から平方数の因数を見付けられる。",
    "√(m²n)=m√nを使って平方根を簡単にできる。",
  ],
  concepts: [
    {
      title: "平方数を根号の外へ出す",
      body: [
        "根号の中に4、9、16などの平方数の因数があれば、その平方根を根号の外へ出せます。",
        "加法や減法をする前にも、まず根号の中を簡単にすると同じ種類の項を見付けやすくなります。",
      ],
      formulas: ["√12 = √(4×3) = 2√3", "√45 = √(9×5) = 3√5"],
    },
  ],
  example: {
    title: "例題: √72を簡単にする",
    problem: "72の中から大きな平方数の因数を見付けます。",
    steps: [
      { expression: "72 = 36×2", note: "36は平方数です。" },
      { expression: "√72 = √36×√2", note: "積の平方根に分けます。" },
      { expression: "√72 = 6√2", note: "√36=6を根号の外へ出します。" },
    ],
  },
  practice: {
    title: "練習: 根号を簡単にする",
    problem: "√27と√20を簡単にします。",
    steps: [
      { prompt: "√27を簡単にしてください。", answers: ["3√3"], placeholder: "式" },
      { prompt: "√20を簡単にしてください。", answers: ["2√5"], placeholder: "式" },
    ],
    hint: "27=9×3、20=4×5と分けます。",
  },
  summary: [
    "根号の中に平方数の因数があれば、その平方根を外へ出せる。",
    "計算の前に根号の中を簡単にすると式を整理しやすい。",
  ],
};
