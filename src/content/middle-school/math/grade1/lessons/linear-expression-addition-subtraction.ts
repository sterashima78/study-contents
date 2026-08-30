import type { MathLesson } from "../../../../math1/types";

export const linearExpressionAdditionSubtractionLesson: MathLesson = {
  key: "linear-expression-addition-subtraction",
  title: "一次式の加法と減法",
  description: "かっこを外して同じ文字の項をまとめ、一次式どうしを加減します。",
  goals: ["一次式どうしの加法を計算できる。", "減法では後ろの式の各項の符号を変えて計算できる。"],
  concepts: [
    {
      title: "かっこを外してから同じ種類の項をまとめる",
      body: [
        "一次式の加法では、かっこを外して文字を含む項どうし、数だけの項どうしをまとめます。",
        "一次式を引くときは、後ろのかっこの各項の符号をすべて変えてからまとめます。",
      ],
      formulas: ["(3x + 2) + (2x − 5) = 5x − 3", "(5x + 1) − (2x − 3) = 3x + 4"],
    },
  ],
  example: {
    title: "例題: (4x − 3) − (x + 2) を計算する",
    problem: "(4x − 3) − (x + 2)",
    steps: [
      { expression: "= 4x − 3 − x − 2", note: "後ろのかっこの x と +2 の符号を両方変えます。" },
      { expression: "= (4x − x) + (−3 − 2)", note: "文字を含む項と数だけの項を分けます。" },
      { expression: "= 3x − 5", note: "それぞれ計算してまとめます。" },
    ],
  },
  practice: {
    title: "練習: 一次式を引く",
    problem: "(6x + 1) − (2x − 4) を計算してください。",
    steps: [
      {
        prompt: "かっこを外した式を書いてください。",
        answers: ["6x+1-2x+4", "6x-2x+1+4"],
        placeholder: "6x+1-…",
      },
      { prompt: "計算結果を書いてください。", answers: ["4x+5", "5+4x"], placeholder: "最終結果" },
    ],
    hint: "−(2x−4) は −2x+4 になります。",
  },
  summary: ["一次式の加減は、かっこを外して同じ種類の項をまとめる。", "式を引くときは後ろの各項の符号をすべて変える。"],
};
