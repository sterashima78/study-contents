import type { MathLesson } from "../../../../math1/types";

export const transpositionLesson: MathLesson = {
  key: "transposition",
  title: "移項を使って解く",
  description: "等式の性質を短く書く方法として移項を使い、方程式を整理します。",
  goals: ["移項が等式の性質から導かれることを説明できる。", "項を移項して Ax = B の形へ整理できる。"],
  concepts: [
    {
      title: "移項は両辺への同じ加減を省略した書き方",
      body: [
        "ある項を反対の辺へ移して符号を変える操作を移項といいます。",
        "これは、両辺に同じ数を加えたり引いたりする等式の性質を短く書いたものです。",
      ],
      formulas: ["x + 5 = 12 → x = 12 − 5", "3x − 4 = 11 → 3x = 11 + 4"],
    },
  ],
  example: {
    title: "例題: 4x + 3 = 19 を移項して解く",
    problem: "4x + 3 = 19",
    steps: [
      { expression: "4x = 19 − 3", note: "+3 を右辺へ移項し、−3 にします。" },
      { expression: "4x = 16", note: "右辺を計算します。" },
      { expression: "x = 4", note: "両辺を4で割ります。" },
    ],
  },
  practice: {
    title: "練習: 定数項を移項する",
    problem: "3x − 5 = 16 を解いてください。",
    steps: [
      {
        prompt: "−5 を右辺へ移項した式を書いてください。",
        answers: ["3x=16+5", "3x=21"],
        placeholder: "3x = …",
      },
      { prompt: "x の値を答えてください。", answers: ["7"], placeholder: "x = …" },
    ],
    hint: "−5 は右辺へ移すと +5 になります。",
  },
  summary: ["移項は等式の性質を使った変形を短く書く方法。", "移項したあと Ax = B の形にして x の係数を1にする。"],
};
