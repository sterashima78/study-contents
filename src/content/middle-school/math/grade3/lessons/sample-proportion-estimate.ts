import type { MathLesson } from "../../../../math1/types";

export const sampleProportionEstimateLesson: MathLesson = {
  key: "sample-proportion-estimate",
  title: "標本の割合から母集団の割合を推定する",
  description: "無作為標本で得た割合を、母集団の割合の見積りとして使います。",
  goals: ["標本の割合を求められる。", "標本の割合から母集団の割合を推定できる。"],
  concepts: [
    {
      title: "標本の割合を全体の手掛かりにする",
      body: [
        "無作為に抽出した標本である特徴をもつ割合がpなら、母集団でもその割合がpに近いと推定します。",
        "推定値は完全に一致するとは限らず、標本の取り方や大きさに左右されます。",
      ],
      formulas: ["標本割合=該当数/標本数"],
    },
  ],
  example: {
    title: "例題: 200人中120人",
    problem: "無作為標本200人のうち120人がAを選びました。",
    steps: [
      { expression: "120/200=0.60", note: "標本割合は60%です。" },
      { expression: "母集団でも約60%と推定", note: "標本が無作為であることが前提です。" },
    ],
  },
  practice: {
    title: "練習: 割合を推定する",
    problem: "標本の該当数を標本数で割ります。",
    steps: [
      {
        prompt: "無作為標本150人中90人が賛成なら、標本の賛成割合を%で答えてください。",
        answers: ["60", "60%", "60％"],
        placeholder: "%",
      },
      {
        prompt: "無作為標本の賛成割合が0.72なら、母集団の賛成割合をおよそ何%と推定しますか。",
        answers: ["72", "72%", "72％"],
        placeholder: "%",
      },
    ],
    hint: "割合=該当数÷標本数です。",
  },
  summary: ["無作為標本の割合を母集団の割合の推定に使う。", "推定値は標本によって変動する。"],
};
