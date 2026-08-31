import type { MathLesson } from "../../../../math1/types";

export const productExpansionXabLesson: MathLesson = {
  key: "product-expansion-xab",
  title: "(x+a)(x+b)を展開する",
  description: "2つの数の和と積から、x²の係数が1の二次式へ素早く展開します。",
  goals: ["(x+a)(x+b)の公式を使って展開できる。", "xの係数と定数項をa+b、abとして捉えられる。"],
  concepts: [
    {
      title: "足してxの係数、掛けて定数項",
      body: [
        "(x+a)(x+b)を展開すると、ax+bx=(a+b)xとなり、定数項はabです。",
        "この対応は因数分解で逆向きに使うので、和と積の関係を意識します。",
      ],
      formulas: ["(x+a)(x+b)=x²+(a+b)x+ab", "(x+2)(x−5)=x²−3x−10"],
    },
  ],
  example: {
    title: "例題: (x−3)(x+7)を展開する",
    problem: "a=−3、b=7として和と積を求めます。",
    steps: [
      { expression: "a+b = −3+7 = 4", note: "xの係数になります。" },
      { expression: "ab = (−3)·7 = −21", note: "定数項になります。" },
      { expression: "x²+4x−21", note: "公式へ代入します。" },
    ],
  },
  practice: {
    title: "練習: 和と積で展開する",
    problem: "a+bとabを先に考えます。",
    steps: [
      {
        prompt: "(x+4)(x+5)を展開してください。",
        answers: ["x²+9x+20", "x^2+9x+20"],
        placeholder: "式",
      },
      {
        prompt: "(x−2)(x+6)を展開してください。",
        answers: ["x²+4x−12", "x^2+4x-12", "x²+4x-12"],
        placeholder: "式",
      },
    ],
    hint: "xの係数は2数の和、定数項は2数の積です。",
  },
  summary: [
    "(x+a)(x+b)ではa+bがxの係数、abが定数項になる。",
    "この和と積の対応は因数分解でも使う。",
  ],
};
