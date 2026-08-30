import type { MathLesson } from "../../../../math1/types";

export const combineLikeTermsLesson: MathLesson = {
  key: "combine-like-terms",
  title: "同じ文字の項をまとめる",
  description: "同じ文字を含む項の係数を計算して、一次式を簡単にします。",
  goals: ["同じ文字を含む項を見分けられる。", "係数の加減で同じ文字の項をまとめられる。"],
  concepts: [
    {
      title: "文字の部分が同じ項は係数を計算する",
      body: [
        "3x と 5x のように文字の部分が同じ項は、係数だけを足したり引いたりして一つにまとめられます。",
        "数だけの項は、文字を含む項とは別にまとめます。",
      ],
      formulas: ["3x + 5x = (3 + 5)x = 8x", "7x − 2x = (7 − 2)x = 5x"],
    },
  ],
  example: {
    title: "例題: 4x + 3 − x + 2 を簡単にする",
    problem: "4x + 3 − x + 2",
    steps: [
      { expression: "4x − x と 3 + 2 に分ける", note: "文字を含む項と数だけの項をそれぞれ集めます。" },
      { expression: "(4 − 1)x + 5", note: "x の係数と数だけの項を計算します。" },
      { expression: "= 3x + 5", note: "これ以上まとめられない形にします。" },
    ],
  },
  practice: {
    title: "練習: 同じ文字の項をまとめる",
    problem: "6x + 4 − 2x − 1 を簡単にしてください。",
    steps: [
      {
        prompt: "x を含む項をまとめた結果を書いてください。",
        answers: ["4x"],
        placeholder: "4x",
      },
      { prompt: "式全体を簡単にしてください。", answers: ["4x+3", "3+4x"], placeholder: "最終結果" },
    ],
    hint: "6x−2x と 4−1 を別々に計算します。",
  },
  summary: ["文字の部分が同じ項は係数を計算してまとめる。", "数だけの項は数だけでまとめる。"],
};
