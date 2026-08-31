import type { MathLesson } from "../../../../math1/types";

export const polynomialCombineLikeTermsLesson: MathLesson = {
  key: "polynomial-combine-like-terms",
  title: "多項式の同類項をまとめる",
  description: "文字の部分が同じ項を見つけ、係数を計算して多項式を簡単にします。",
  goals: ["同類項を見分けられる。", "同類項の係数を計算して式を整理できる。"],
  concepts: [
    {
      title: "文字の部分が同じ項だけをまとめる",
      body: [
        "2xと5xのように文字の部分が同じ項を同類項といいます。係数だけを加減してまとめられます。",
        "xとx²、xとyのように文字の部分が異なる項はまとめられません。",
      ],
      formulas: ["ax + bx = (a + b)x"],
    },
  ],
  example: {
    title: "例題: 3x + 2y − x + 5y を整理する",
    problem: "3x + 2y − x + 5y",
    steps: [
      { expression: "(3x − x) + (2y + 5y)", note: "xの項とyの項をそれぞれ集めます。" },
      { expression: "(3 − 1)x + (2 + 5)y", note: "文字を残して係数を計算します。" },
      { expression: "2x + 7y", note: "同類項をまとめた結果です。" },
    ],
  },
  practice: {
    title: "練習: 同類項をまとめる",
    problem: "5a − 3b − 2a + 7b",
    steps: [
      { prompt: "aの項をまとめてください。", answers: ["3a"], placeholder: "aの項" },
      { prompt: "式全体を簡単にしてください。", answers: ["3a+4b", "4b+3a"], placeholder: "整理した式" },
    ],
    hint: "5a−2aと、−3b+7bを別々に計算します。",
  },
  summary: ["同類項は文字の部分が同じ項である。", "同類項は係数だけを加減する。", "文字の部分が異なる項はまとめない。"],
};
