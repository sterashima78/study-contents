import type { MathLesson } from "../../../../math1/types";

export const polynomialSubtractionLesson: MathLesson = {
  key: "polynomial-subtraction",
  title: "多項式を引く",
  description: "引く式の各項の符号を変えてから、同類項をまとめて計算します。",
  goals: ["多項式の減法を加法に直せる。", "引く式の全ての項の符号を正しく変えられる。"],
  concepts: [
    {
      title: "引く式は全ての項の符号を変える",
      body: [
        "多項式を引くときは、引く式全体に−1を掛けると考えます。そのため、かっこの中の全ての項の符号が変わります。",
        "最初の項だけでなく、かっこの中の各項に注意します。",
      ],
    },
  ],
  example: {
    title: "例題: (5x − 2y) − (3x + 4y)",
    problem: "(5x − 2y) − (3x + 4y)",
    steps: [
      { expression: "= 5x − 2y − 3x − 4y", note: "後ろのかっこの各項の符号を変えます。" },
      { expression: "= (5x − 3x) + (−2y − 4y)", note: "同類項を集めます。" },
      { expression: "= 2x − 6y", note: "係数を計算します。" },
    ],
  },
  practice: {
    title: "練習: 多項式の減法",
    problem: "(7a + b) − (2a − 3b)",
    steps: [
      {
        prompt: "かっこを外した式を書いてください。",
        answers: ["7a+b-2a+3b"],
        placeholder: "符号に注意",
      },
      {
        prompt: "計算結果を答えてください。",
        answers: ["5a+4b", "4b+5a"],
        placeholder: "最終結果",
      },
    ],
    hint: "−(2a−3b) は −2a+3b になります。",
  },
  summary: [
    "多項式の減法は、引く式に−1を掛ける加法として考える。",
    "引く式の全ての項の符号を変えてから同類項をまとめる。",
  ],
};
