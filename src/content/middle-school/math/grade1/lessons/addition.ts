import type { MathLesson } from "../../../../math1/types";

export const additionLesson: MathLesson = {
  key: "addition",
  title: "正の数・負の数の加法",
  description: "符号と絶対値に注目して、正の数・負の数の足し算を行います。",
  goals: ["同符号の2数の和を計算できる。", "異符号の2数の和を、絶対値の差を使って計算できる。"],
  concepts: [
    {
      title: "同符号は足し、異符号は差をとる",
      body: [
        "同じ符号どうしでは絶対値を足し、共通の符号を付けます。",
        "異なる符号どうしでは絶対値の差をとり、絶対値が大きい方の符号を付けます。",
      ],
      formulas: ["(−3) + (−5) = −8", "(−3) + (+5) = +2"],
    },
  ],
  example: {
    title: "例題: (−7) + (+4) を計算する",
    problem: "(−7) + (+4)",
    steps: [
      { expression: "7 と 4 を比べる", note: "符号が異なるので絶対値を比べます。" },
      { expression: "7 − 4 = 3", note: "絶対値の大きい方から小さい方を引きます。" },
      { expression: "= −3", note: "絶対値が大きい −7 の符号を付けます。" },
    ],
  },
  practice: {
    title: "練習: 異符号の加法",
    problem: "(+6) + (−10)",
    steps: [
      { prompt: "絶対値の差を求めてください。", answers: ["4"], placeholder: "10−6" },
      {
        prompt: "符号を付けた答えを書いてください。",
        answers: ["-4", "−4"],
        placeholder: "最終結果",
      },
    ],
    hint: "絶対値は10の方が大きいので、答えの符号は負になります。",
  },
  summary: [
    "同符号の加法は絶対値を足す。",
    "異符号の加法は絶対値の差をとり、絶対値が大きい方の符号を付ける。",
  ],
};
