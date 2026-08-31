import type { MathLesson } from "../../../../math1/types";

export const formulaEfficientCalculationLesson: MathLesson = {
  key: "formula-efficient-calculation",
  title: "展開・因数分解の公式を数の計算に活用する",
  description: "式の形を見抜き、101²や13²−12²のような数の計算を能率よく行います。",
  goals: ["数の計算を展開・因数分解の公式へ結び付けられる。", "目的に応じて式の形を選んで変形できる。"],
  concepts: [
    {
      title: "計算しやすい基準へ寄せる",
      body: [
        "101²は(100+1)²として和の2乗を使うと、筆算をせずに10000+200+1と計算できます。",
        "平方の差はa²−b²=(a+b)(a−b)へ因数分解すると、積の計算が簡単になることがあります。",
      ],
      formulas: ["101²=(100+1)²=10201", "13²−12²=(13+12)(13−12)=25"],
    },
  ],
  example: {
    title: "例題: 99²を公式で計算する",
    problem: "99を100−1と見ます。",
    steps: [
      { expression: "99²=(100−1)²", note: "差の2乗へ置き換えます。" },
      { expression: "10000−200+1", note: "a²−2ab+b²を使います。" },
      { expression: "9801", note: "簡単な整数計算で求められます。" },
    ],
  },
  practice: {
    title: "練習: 公式で数を計算する",
    problem: "筆算より短い変形を選びます。",
    steps: [
      { prompt: "102²を公式で計算した値を答えてください。", answers: ["10404"], placeholder: "数値" },
      { prompt: "21²−19²を公式で計算した値を答えてください。", answers: ["80"], placeholder: "数値" },
    ],
    hint: "102=100+2、平方の差は和×差へ変形できます。",
  },
  summary: ["公式は文字式だけでなく数の計算も能率化できる。", "目的に合う形へ式を変形することが重要である。"],
};
