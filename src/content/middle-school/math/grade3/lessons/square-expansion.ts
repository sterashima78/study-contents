import type { MathLesson } from "../../../../math1/types";

export const squareExpansionLesson: MathLesson = {
  key: "square-expansion",
  title: "和と差の2乗を展開する",
  description: "(a+b)²と(a−b)²の展開公式を、分配法則とのつながりを保って使います。",
  goals: ["和の2乗と差の2乗を正しく展開できる。", "中央の項2abの符号を根拠を持って判断できる。"],
  concepts: [
    {
      title: "2乗は同じ一次式を2回掛ける",
      body: [
        "(a+b)²=(a+b)(a+b)なので、分配するとabが2回現れて2abになります。",
        "(a−b)²では交差する2つの積がどちらも−abになるため、中央の項は−2abです。",
      ],
      formulas: ["(a+b)²=a²+2ab+b²", "(a−b)²=a²−2ab+b²"],
    },
  ],
  example: {
    title: "例題: (x−5)²を展開する",
    problem: "a=x、b=5として差の2乗を使います。",
    steps: [
      { expression: "(x−5)²=x²−2·x·5+5²", note: "a²−2ab+b²へ当てはめます。" },
      { expression: "x²−10x+25", note: "係数を整理します。" },
    ],
  },
  practice: {
    title: "練習: 2乗公式を使う",
    problem: "和と差を1問ずつ展開します。",
    steps: [
      { prompt: "(x+3)²を展開してください。", answers: ["x²+6x+9", "x^2+6x+9"], placeholder: "式" },
      { prompt: "(a−4)²を展開してください。", answers: ["a²−8a+16", "a^2-8a+16", "a²-8a+16"], placeholder: "式" },
    ],
    hint: "中央の項は±2abです。",
  },
  summary: ["和・差の2乗では中央に2abが現れる。", "差の2乗の最後のb²は正になる。"],
};
