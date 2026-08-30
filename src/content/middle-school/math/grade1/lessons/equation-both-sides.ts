import type { MathLesson } from "../../../../math1/types";

export const equationBothSidesLesson: MathLesson = {
  key: "equation-both-sides",
  title: "両辺に文字を含む方程式",
  description: "文字の項を一方へ、数の項をもう一方へ集めて ax + b = cx + d の形を解きます。",
  goals: [
    "文字を含む項を一方の辺へ集められる。",
    "ax + b = cx + d を Ax = B の形へ整理して解ける。",
  ],
  concepts: [
    {
      title: "文字の項と数の項を分けて集める",
      body: [
        "両辺に x があるときは、x を含む項を一方の辺へ集めます。数だけの項は反対側へ集めます。",
        "最後に Ax = B の形へ整理し、x の係数を1にします。",
      ],
      formulas: ["5x + 2 = 2x + 11 → 3x = 9 → x = 3"],
    },
  ],
  example: {
    title: "例題: 6x − 5 = 2x + 11 を解く",
    problem: "6x − 5 = 2x + 11",
    steps: [
      { expression: "6x − 2x = 11 + 5", note: "2x を左辺へ、−5 を右辺へ移項します。" },
      { expression: "4x = 16", note: "同じ種類の項をまとめます。" },
      { expression: "x = 4", note: "両辺を4で割ります。" },
    ],
  },
  practice: {
    title: "練習: 両辺の x を整理する",
    problem: "7x + 1 = 3x + 17 を解いてください。",
    steps: [
      {
        prompt: "文字の項と数の項を集めた式を書いてください。",
        answers: ["7x-3x=17-1", "4x=16"],
        placeholder: "4x = …",
      },
      { prompt: "x の値を答えてください。", answers: ["4"], placeholder: "x = …" },
    ],
    hint: "3xを左辺へ、+1を右辺へ移項します。",
  },
  summary: [
    "両辺に文字があるときは文字の項を一方へ集める。",
    "数の項を反対側へ集め、Ax = B の形に整理する。",
  ],
};
