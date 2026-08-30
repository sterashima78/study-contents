import type { MathLesson } from "../../../../math1/types";

export const sphereSurfaceAreaLesson: MathLesson = {
  key: "sphere-surface-area",
  title: "球の表面積",
  description: "球の半径から、表面積を4πr²で求めます。",
  goals: [
    "球の表面積を4πr²で求められる。",
    "球の表面積が同じ半径の円の面積の4倍になることを説明できる。",
  ],
  concepts: [
    {
      title: "球の表面積は4πr²",
      body: [
        "半径rの球の表面積SはS = 4πr²です。同じ半径の円の面積πr²の4倍になっています。",
        "直径が与えられたときは、先に2で割って半径を求めてから公式に代入します。面積なので単位はcm²などの平方単位です。",
      ],
    },
  ],
  example: {
    title: "例題: 半径3 cmの球の表面積",
    problem: "半径3 cmの球の表面積を求めます。",
    steps: [
      { expression: "4πr²", note: "球の表面積の公式を使います。" },
      { expression: "4π × 3² = 36π cm²", note: "r = 3を代入して計算します。" },
    ],
  },
  practice: {
    title: "練習: 直径から表面積を求める",
    problem: "直径4 cmの球があります。",
    steps: [
      {
        prompt: "表面積をπを使って答えてください。",
        answers: ["16π", "16\\pi", "16pi", "16πcm²", "16π cm²"],
        placeholder: "表面積",
      },
    ],
    hint: "直径4 cmなら半径は2 cmです。",
  },
  summary: [
    "球の表面積はS = 4πr²で求める。",
    "直径が与えられたら、まず半径に直してから公式を使う。",
  ],
};
