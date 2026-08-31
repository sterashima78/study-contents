import type { MathLesson } from "../../../../math1/types";

export const quadraticFunctionExpressionLesson: MathLesson = {
  key: "quadratic-function-expression",
  title: "表や1点から y=ax² の式を求める",
  description: "対応するxとyから比例定数aを求め、関数の式を決めます。",
  goals: ["a=y/x²で比例定数を求められる。", "点や表からy=ax²の式を決められる。"],
  concepts: [
    {
      title: "1組の対応でaが決まる",
      body: [
        "y=ax²では未知なのは比例定数aだけなので、x≠0の1組の対応を代入すればaを求められます。",
        "求めた式は別の表の値にも合うか確かめると安全です。",
      ],
      formulas: ["a=y/x²"],
    },
  ],
  example: {
    title: "例題: 点(2,12)を通る",
    problem: "y=ax²が点(2,12)を通ります。",
    steps: [
      { expression: "12=a·2²", note: "x=2、y=12を代入します。" },
      { expression: "12=4a", note: "2²=4です。" },
      { expression: "a=3 → y=3x²", note: "式が決まりました。" },
    ],
  },
  practice: {
    title: "練習: aを決める",
    problem: "x≠0の対応を使います。",
    steps: [
      { prompt: "y=ax²が点(3,18)を通るときaを答えてください。", answers: ["2"], placeholder: "a" },
      {
        prompt: "y=ax²が点(-2,-8)を通るとき式を答えてください。",
        answers: ["y=-2x²", "y=-2x^2"],
        placeholder: "式",
      },
    ],
    hint: "a=y/x²なのでxが負でもx²は正です。",
  },
  summary: ["y=ax²では1組の対応からaを決められる。", "a=y/x²を使う。"],
};
