import type { MathLesson } from "../../../../math1/types";

export const quadraticEquationCompletingSquareLesson: MathLesson = {
  key: "quadratic-equation-completing-square",
  title: "平方の形に変形して二次方程式を解く",
  description: "一次項の係数の半分を使って完全平方を作り、平方根の考えへつなげます。",
  goals: ["x²+2mxの形から(x+m)²を作れる。", "平方完成してX²=kの形へ変形し、二次方程式を解ける。"],
  concepts: [
    {
      title: "足した分を両辺へ足す",
      body: [
        "x²+2mxを平方の形にするにはm²を加えます。等式を保つため、方程式では両辺に同じ数を加えます。",
        "中学校では、一次項の係数が偶数で平方の形へ変形しやすい例を中心に扱います。",
      ],
      formulas: ["x²+2mx+m²=(x+m)²", "x²+4x−7=0 → (x+2)²=11"],
    },
  ],
  example: {
    title: "例題: x²+6x−7=0を解く",
    problem: "x²+6xから(x+3)²を作ります。",
    steps: [
      { expression: "x²+6x=7", note: "定数項を右辺へ移します。" },
      { expression: "x²+6x+9=16", note: "6の半分3の2乗を両辺へ加えます。" },
      { expression: "(x+3)²=16", note: "平方の形になりました。" },
      { expression: "x+3=±4", note: "平方根の考えを使います。" },
      { expression: "x=1, −7", note: "二つの解です。" },
    ],
  },
  practice: {
    title: "練習: 平方完成する",
    problem: "一次項の係数の半分を利用します。",
    steps: [
      {
        prompt: "x²+8x−9=0を(x+4)²=kの形にするとき、kを答えてください。",
        answers: ["25"],
        placeholder: "k",
      },
      {
        prompt: "x²−4x−5=0の解を小さい順にカンマで答えてください。",
        answers: ["-1,5", "−1,5"],
        placeholder: "例: -2,3",
      },
    ],
    hint: "x²+2mxにはm²を加えると完全平方になります。",
  },
  summary: [
    "平方完成は二次方程式をX²=kへ帰着させる方法。",
    "一次項の係数の半分を使って完全平方を作る。",
  ],
};
