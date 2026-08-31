import type { MathLesson } from "../../../../math1/types";

export const quadraticEquationSquareRootLesson: MathLesson = {
  key: "quadratic-equation-square-root",
  title: "平方根の考えで二次方程式を解く",
  description: "ax²=bや(x+m)²=kをX²=kと見て、平方根の考えから二つの解を求めます。",
  goals: ["x²=kからx=±√kと解ける。", "ax²=bや(x+m)²=kを平方根の考えで解ける。"],
  concepts: [
    {
      title: "2乗を外すときは±を忘れない",
      body: [
        "X²=k（k≥0）を成り立たせるXは、√kと−√kの二つです。平方根を学んだときの考えを、そのまま二次方程式へ使えます。",
        "(x+m)²=kでは、かっこ全体をXと見ればX²=kです。最後にxへ戻します。",
      ],
      formulas: ["X²=k → X=±√k", "(x+m)²=k → x=−m±√k"],
    },
  ],
  example: {
    title: "例題: 2x²=18を解く",
    problem: "まずx²の係数を1にします。",
    steps: [
      { expression: "2x²=18", note: "両辺を2で割ります。" },
      { expression: "x²=9", note: "平方根の考えを使える形です。" },
      { expression: "x=±3", note: "3と−3の両方が解です。" },
    ],
  },
  practice: {
    title: "練習: 平方の形から解く",
    problem: "X²=kの形を見付けます。",
    steps: [
      {
        prompt: "x²=7の解を答えてください。",
        answers: ["x=±√7", "±√7", "x=√7,-√7", "√7,-√7"],
        placeholder: "x=...",
      },
      {
        prompt: "(x+2)²=16の解を小さい順にカンマで答えてください。",
        answers: ["-6,2", "−6,2"],
        placeholder: "例: -2,3",
      },
    ],
    hint: "かっこ全体をXと見て、X=±√kとしてからxを求めます。",
  },
  summary: ["X²=kではX=±√k。", "平方の形を見付ければ、既習の平方根の考えへ帰着できる。"],
};
