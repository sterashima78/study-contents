import type { MathLesson } from "../../../../math1/types";

export const polynomialAdditionLesson: MathLesson = {
  key: "polynomial-addition",
  title: "多項式を加える",
  description: "かっこを外して同類項を集め、多項式どうしの加法を計算します。",
  goals: ["多項式どうしの加法でかっこを正しく外せる。", "同類項をまとめて計算結果を整理できる。"],
  concepts: [
    {
      title: "加法では各項をそのまま並べる",
      body: [
        "多項式を加えるときは、加える式の各項を符号を変えずに並べます。",
        "その後、文字の部分が同じ項どうしをまとめます。",
      ],
    },
  ],
  example: {
    title: "例題: (3x + 2y) + (4x − 5y)",
    problem: "(3x + 2y) + (4x − 5y)",
    steps: [
      { expression: "= 3x + 2y + 4x − 5y", note: "加える式の符号はそのままです。" },
      { expression: "= (3x + 4x) + (2y − 5y)", note: "同類項を集めます。" },
      { expression: "= 7x − 3y", note: "係数を計算します。" },
    ],
  },
  practice: {
    title: "練習: 多項式の加法",
    problem: "(2a − 3b) + (5a + b)",
    steps: [
      { prompt: "かっこを外した式を書いてください。", answers: ["2a-3b+5a+b"], placeholder: "かっこを外す" },
      { prompt: "計算結果を答えてください。", answers: ["7a-2b"], placeholder: "最終結果" },
    ],
    hint: "aの項どうし、bの項どうしをまとめます。",
  },
  summary: ["多項式の加法では、各項の符号を変えずにかっこを外す。", "同類項を集めて係数を計算する。"],
};
