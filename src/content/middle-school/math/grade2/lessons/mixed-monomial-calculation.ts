import type { MathLesson } from "../../../../math1/types";

export const mixedMonomialCalculationLesson: MathLesson = {
  key: "mixed-monomial-calculation",
  title: "単項式の乗除を組み合わせる",
  description: "乗法と除法が混じった単項式の計算を、左から順に、または分数の形にまとめて処理します。",
  goals: ["乗法と除法が混じった式を正しい順序で計算できる。", "途中式を分数の形にして約分できる。"],
  concepts: [
    {
      title: "乗法と除法は同じ優先順位",
      body: [
        "乗法と除法だけが並ぶ式は、基本的に左から順に計算できます。",
        "割る式を分母に置いて一つの分数にまとめると、係数と文字をまとめて約分できる場合があります。",
      ],
    },
  ],
  example: {
    title: "例題: 6a²b × 4ab ÷ 8a",
    problem: "6a²b × 4ab ÷ 8a",
    steps: [
      { expression: "= (6 × 4 / 8) × (a² × a / a) × b²", note: "係数と文字を分けます。" },
      { expression: "6 × 4 / 8 = 3, a² × a / a = a²", note: "約分して整理します。" },
      { expression: "= 3a²b²", note: "残った因数をまとめます。" },
    ],
  },
  practice: {
    title: "練習: 乗除の混じった計算",
    problem: "12x²y × 3xy ÷ 6x",
    steps: [
      { prompt: "係数部分 12×3÷6 を計算してください。", answers: ["6"], placeholder: "係数" },
      { prompt: "式全体を計算してください。", answers: ["6x^2y^2", "6x²y²"], placeholder: "最終結果" },
    ],
    hint: "x²×x÷x=x²、y×y=y²です。",
  },
  summary: ["乗法と除法は同じ優先順位なので左から計算できる。", "係数と文字を分けると整理しやすい。", "分数の形にまとめて約分する方法も使える。"],
};
