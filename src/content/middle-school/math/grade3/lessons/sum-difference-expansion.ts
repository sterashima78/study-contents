import type { MathLesson } from "../../../../math1/types";

export const sumDifferenceExpansionLesson: MathLesson = {
  key: "sum-difference-expansion",
  title: "和と差の積を展開する",
  description: "(a+b)(a−b)で中央の項が打ち消し合うことを使い、平方の差へ変形します。",
  goals: ["和と差の積をa²−b²へ展開できる。", "中央の項が消える理由を説明できる。"],
  concepts: [
    {
      title: "+abと−abが打ち消し合う",
      body: [
        "(a+b)(a−b)を分配するとa²−ab+ab−b²です。中央の2項が0になるため、a²−b²だけが残ります。",
        "同じ形を見抜ければ、4つの積を書かずに能率よく展開できます。",
      ],
      formulas: ["(a+b)(a−b)=a²−b²", "(x+7)(x−7)=x²−49"],
    },
  ],
  example: {
    title: "例題: (2x+3)(2x−3)を展開する",
    problem: "同じ2xに、+3と−3が付く形です。",
    steps: [
      { expression: "a=2x, b=3", note: "和と差の積に対応させます。" },
      { expression: "(2x)²−3²", note: "a²−b²を使います。" },
      { expression: "4x²−9", note: "それぞれを2乗します。" },
    ],
  },
  practice: {
    title: "練習: 平方の差へ展開する",
    problem: "和と差の積を見抜きます。",
    steps: [
      {
        prompt: "(x+6)(x−6)を展開してください。",
        answers: ["x²−36", "x^2-36", "x²-36"],
        placeholder: "式",
      },
      {
        prompt: "(3a+2)(3a−2)を展開してください。",
        answers: ["9a²−4", "9a^2-4", "9a²-4"],
        placeholder: "式",
      },
    ],
    hint: "同じ部分をa、符号だけ違う部分をbと見ます。",
  },
  summary: ["(a+b)(a−b)は中央の項が消えてa²−b²になる。", "形を見抜くと展開を短くできる。"],
};
