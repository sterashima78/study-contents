import type { MathLesson } from "../../../../math1/types";

export const monomialDivisionLesson: MathLesson = {
  key: "monomial-division",
  title: "単項式を割る",
  description: "除法を分数や逆数の乗法として捉え、係数と文字を約分して計算します。",
  goals: ["単項式の除法を分数の形で整理できる。", "係数と同じ文字を約分して商を求められる。"],
  concepts: [
    {
      title: "割り算は分数にして約分する",
      body: [
        "単項式の除法は、割られる式を分子、割る式を分母に置いた分数として考えると整理しやすくなります。",
        "係数を約分し、分子と分母に共通する文字を同じ個数だけ消します。",
      ],
      formulas: ["axᵐ ÷ bxⁿ = (a/b)xᵐ⁻ⁿ（m ≥ n）"],
    },
  ],
  example: {
    title: "例題: 18a³b ÷ 6ab",
    problem: "18a³b ÷ 6ab",
    steps: [
      { expression: "= 18a³b / 6ab", note: "分数の形にします。" },
      { expression: "18/6 = 3, a³/a = a², b/b = 1", note: "係数と文字を約分します。" },
      { expression: "= 3a²", note: "残った部分をまとめます。" },
    ],
  },
  practice: {
    title: "練習: 単項式の除法",
    problem: "20x³y² ÷ 5xy",
    steps: [
      { prompt: "係数の商を答えてください。", answers: ["4"], placeholder: "係数" },
      { prompt: "式全体の商を答えてください。", answers: ["4x^2y", "4x²y"], placeholder: "商" },
    ],
    hint: "x³÷x=x²、y²÷y=yです。",
  },
  summary: [
    "単項式の除法は分数として整理できる。",
    "係数と共通する文字をそれぞれ約分する。",
    "同じ文字の指数は引き算になる。",
  ],
};
