import type { MathLesson } from "../../../../math1/types";

export const equationMeaningLesson: MathLesson = {
  key: "equation-meaning",
  title: "方程式と解の意味",
  description: "文字を含む等式が成り立つ値を調べ、方程式と解の意味を理解します。",
  goals: ["方程式が表す条件を説明できる。", "数を代入して、その数が方程式の解か判断できる。"],
  concepts: [
    {
      title: "方程式の解は、等式を成り立たせる値",
      body: [
        "文字を含み、その文字の値によって成り立つかどうかが決まる等式を方程式といいます。",
        "方程式の文字に代入したとき、左辺と右辺が等しくなる値をその方程式の解といいます。",
      ],
      formulas: ["x + 3 = 5", "x = 2 のとき 2 + 3 = 5"],
    },
  ],
  example: {
    title: "例題: x = 4 が 2x + 1 = 9 の解か調べる",
    problem: "x = 4 は、方程式 2x + 1 = 9 の解ですか。",
    steps: [
      { expression: "左辺 = 2 × 4 + 1", note: "x に4を代入します。" },
      { expression: "= 9", note: "左辺を計算します。" },
      { expression: "左辺 = 右辺", note: "右辺も9なので等式が成り立ちます。" },
      { expression: "x = 4 は解", note: "等式を成り立たせるので解です。" },
    ],
  },
  practice: {
    title: "練習: 解かどうかを確かめる",
    problem: "x = 3 は、方程式 3x − 2 = 7 の解ですか。",
    steps: [
      {
        prompt: "x = 3 を代入した左辺の値を答えてください。",
        answers: ["7"],
        placeholder: "左辺の値",
      },
      {
        prompt: "「解」または「解ではない」と答えてください。",
        answers: ["解"],
        placeholder: "解 / 解ではない",
      },
    ],
    hint: "3×3−2 と右辺7を比べます。",
  },
  summary: ["方程式は、文字の値によって成り立つかどうかが決まる等式。", "解は方程式を成り立たせる文字の値。"],
};
