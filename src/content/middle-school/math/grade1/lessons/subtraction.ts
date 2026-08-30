import type { MathLesson } from "../../../../math1/types";

export const subtractionLesson: MathLesson = {
  key: "subtraction",
  title: "正の数・負の数の減法",
  description: "引く数の符号を変えて加法に直し、正負の数の引き算を計算します。",
  goals: ["減法を加法に直せる。", "負の数を引く計算を正しく処理できる。"],
  concepts: [
    {
      title: "引き算は反対の数を足す",
      body: [
        "ある数を引くことは、その数の符号を反対にした数を足すことと同じです。",
        "負の数を引くときも、加法へ直してから計算します。",
      ],
      formulas: ["a − b = a + (−b)", "5 − (−3) = 5 + 3"],
    },
  ],
  example: {
    title: "例題: 4 − (−6) を計算する",
    problem: "4 − (−6)",
    steps: [
      { expression: "= 4 + (+6)", note: "−6 を引くので、反対の数 +6 を足す形に直します。" },
      { expression: "= 10", note: "正の数どうしの加法として計算します。" },
    ],
  },
  practice: {
    title: "練習: 減法を加法に直す",
    problem: "−3 − (−8)",
    steps: [
      {
        prompt: "加法に直した式を書いてください。",
        answers: ["-3+(+8)", "−3+(+8)", "-3+8", "−3+8"],
        placeholder: "−3+…",
      },
      { prompt: "計算結果を書いてください。", answers: ["5", "+5"], placeholder: "最終結果" },
    ],
    hint: "−8 を引くことは +8 を足すことです。",
  },
  summary: [
    "減法は、引く数の符号を反対にして加法へ直す。",
    "加法へ直したあとは、加法のルールで計算する。",
  ],
};
