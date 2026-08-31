import type { MathLesson } from "../../../../math1/types";

export const quadraticEquationFactorizationLesson: MathLesson = {
  key: "quadratic-equation-factorization",
  title: "因数分解して二次方程式を解く",
  description: "左辺を一次式の積にし、AB=0ならA=0またはB=0を使って一次方程式へ帰着させます。",
  goals: [
    "二次式を因数分解して積が0の形へ変形できる。",
    "AB=0ならA=0またはB=0を使って二つの一次方程式へ分けられる。",
  ],
  concepts: [
    {
      title: "積が0なら、どちらかが0",
      body: [
        "二つの数A、Bの積ABが0なら、A=0またはB=0です。この性質を使うと、二次方程式を二つの一次方程式へ帰着できます。",
        "前の単元で学んだ因数分解が、そのまま二次方程式の解法になります。",
      ],
      formulas: ["AB=0 → A=0 または B=0", "(x−m)(x−n)=0 → x=m または x=n"],
    },
  ],
  example: {
    title: "例題: x²−5x+6=0を解く",
    problem: "左辺を因数分解します。",
    steps: [
      { expression: "x²−5x+6=(x−2)(x−3)", note: "和が−5、積が6になる組を使います。" },
      { expression: "(x−2)(x−3)=0", note: "積が0の形になりました。" },
      { expression: "x−2=0 または x−3=0", note: "一次方程式へ分けます。" },
      { expression: "x=2, 3", note: "二つの解を得ます。" },
    ],
  },
  practice: {
    title: "練習: 因数分解して解く",
    problem: "因数分解できる形を見抜きます。",
    steps: [
      {
        prompt: "x²−7x+12=0の解を小さい順にカンマで答えてください。",
        answers: ["3,4"],
        placeholder: "例: 1,5",
      },
      {
        prompt: "x²+x−6=0の解を小さい順にカンマで答えてください。",
        answers: ["-3,2", "−3,2"],
        placeholder: "例: -2,3",
      },
    ],
    hint: "左辺を(x−m)(x−n)の形へ因数分解します。",
  },
  summary: [
    "因数分解できる二次方程式は積が0の形へ直す。",
    "AB=0からA=0またはB=0として一次方程式へ帰着させる。",
  ],
};
