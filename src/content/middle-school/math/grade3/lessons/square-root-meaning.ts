import type { MathLesson } from "../../../../math1/types";

export const squareRootMeaningLesson: MathLesson = {
  key: "square-root-meaning",
  title: "平方根の意味を捉える",
  description: "2乗するとaになる数をaの平方根と捉え、√の意味と正負の2つの平方根を区別します。",
  goals: [
    "正の数aの平方根を、2乗するとaになる数として説明できる。",
    "√aは正の平方根を表し、aの平方根は±√aであることを区別できる。",
  ],
  concepts: [
    {
      title: "平方根は2乗の逆から考える",
      body: [
        "x²=aを満たすxをaの平方根といいます。a>0なら正と負の2つがあり、√aはそのうち正の方だけを表します。",
        "例えば9の平方根は3と−3です。一方、√9は3です。0の平方根は0だけです。",
      ],
      formulas: ["x² = a → x = ±√a", "9の平方根 = ±3", "√9 = 3"],
    },
  ],
  example: {
    title: "例題: 25の平方根を答える",
    problem: "25の平方根と√25の値を区別して答えます。",
    steps: [
      { expression: "5² = 25, (−5)² = 25", note: "2乗して25になる数を探します。" },
      { expression: "25の平方根 = 5, −5", note: "正と負の2つがあります。" },
      { expression: "√25 = 5", note: "√25は正の平方根を表します。" },
    ],
  },
  practice: {
    title: "練習: 平方根と根号を区別する",
    problem: "36について考えます。",
    steps: [
      { prompt: "36の正の平方根を答えてください。", answers: ["6"], placeholder: "数" },
      { prompt: "36の負の平方根を答えてください。", answers: ["-6", "−6"], placeholder: "数" },
    ],
    hint: "2乗すると36になる正と負の数を考えます。",
  },
  summary: [
    "a>0の平方根は±√aで、√aは正の平方根だけを表す。",
    "平方根は2乗という計算を逆向きに考えることで導入される。",
  ],
};
