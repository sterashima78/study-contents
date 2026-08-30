import type { MathLesson } from "../../../../math1/types";

export const divisionNotationLesson: MathLesson = {
  key: "division-notation",
  title: "文字式の除法の表し方",
  description: "除法を分数の形へ直し、÷ を使わない文字式の表記を身に付けます。",
  goals: ["文字を含む除法を分数の形で表せる。", "分子と分母に何を書くかを正しく判断できる。"],
  concepts: [
    {
      title: "÷ は分数の形で表す",
      body: [
        "文字式では、除法記号 ÷ を使わず分数の形で表すことができます。",
        "割られる数を分子、割る数を分母に書きます。",
      ],
      formulas: ["x ÷ 4 = x/4", "3 ÷ a = 3/a"],
    },
  ],
  example: {
    title: "例題: a ÷ 5 を分数の形で表す",
    problem: "a ÷ 5",
    steps: [
      { expression: "割られる数は a", note: "a を分子に置きます。" },
      { expression: "割る数は 5", note: "5 を分母に置きます。" },
      { expression: "a/5", note: "÷ を使わない分数の形になります。" },
    ],
  },
  practice: {
    title: "練習: 除法を分数で表す",
    problem: "7 ÷ x を、÷ を使わずに表してください。",
    steps: [
      {
        prompt: "分数の形で答えてください。",
        answers: ["7/x", "\\frac{7}{x}"],
        placeholder: "7/x",
      },
    ],
    hint: "7が割られる数なので分子です。",
  },
  summary: ["除法は分数の形で表せる。", "割られる数を分子、割る数を分母に書く。"],
};
