import type { MathLesson } from "../../../../math1/types";

export const squareFactorizationLesson: MathLesson = {
  key: "square-factorization",
  title: "完全平方の形を因数分解する",
  description: "a²±2ab+b²の形を見抜き、(a±b)²へ戻します。",
  goals: ["完全平方の3項式を見分けられる。", "中央の項の符号から和・差の2乗を判断できる。"],
  concepts: [
    {
      title: "最初と最後が平方、中央が2倍の積",
      body: [
        "a²+2ab+b²は(a+b)²、a²−2ab+b²は(a−b)²です。展開公式を逆向きに読みます。",
        "最初と最後の項の平方根を見付け、その積の2倍が中央の項か確認します。",
      ],
      formulas: ["a²+2ab+b²=(a+b)²", "a²−2ab+b²=(a−b)²"],
    },
  ],
  example: {
    title: "例題: x²−10x+25を因数分解する",
    problem: "x²と25はそれぞれx、5の2乗です。",
    steps: [
      { expression: "2·x·5 = 10x", note: "中央の項の大きさと一致します。" },
      { expression: "中央が−10x", note: "差の2乗を選びます。" },
      { expression: "x²−10x+25=(x−5)²", note: "展開公式を逆向きに使います。" },
    ],
  },
  practice: {
    title: "練習: 完全平方を見抜く",
    problem: "和と差の2乗へ戻します。",
    steps: [
      {
        prompt: "x²+8x+16を因数分解してください。",
        answers: ["(x+4)²", "(x+4)^2"],
        placeholder: "式",
      },
      {
        prompt: "a²−6a+9を因数分解してください。",
        answers: ["(a−3)²", "(a-3)^2", "(a−3)^2"],
        placeholder: "式",
      },
    ],
    hint: "最初と最後の平方根の積を2倍して中央項と比べます。",
  },
  summary: ["a²±2ab+b²は(a±b)²へ因数分解できる。", "中央項の符号が和か差かを決める。"],
};
