import type { MathLesson } from "../../../../math1/types";

export const substitutionValueLesson: MathLesson = {
  key: "substitution-value",
  title: "文字式の値と代入",
  description: "文字に数を当てはめ、文字式の値を計算します。",
  goals: ["文字に数を代入できる。", "負の数を代入するときにかっこを使って計算できる。"],
  concepts: [
    {
      title: "文字を数に置き換えて計算する",
      body: [
        "文字に決められた数を当てはめることを代入といい、代入して計算した結果を式の値といいます。",
        "負の数を代入するときは、符号を含めて一つの数として扱えるようにかっこを付けます。",
      ],
      formulas: ["x = 4 のとき 3x + 2 = 3 × 4 + 2", "x = −2 のとき 3x = 3 × (−2)"],
    },
  ],
  example: {
    title: "例題: x = −4 のとき 3x − 2 の値を求める",
    problem: "x = −4 のとき、3x − 2 の値を求めてください。",
    steps: [
      { expression: "3 × (−4) − 2", note: "x を −4 に置き換えます。" },
      { expression: "= −12 − 2", note: "先に乗法を計算します。" },
      { expression: "= −14", note: "最後に減法を計算します。" },
    ],
  },
  practice: {
    title: "練習: 文字に数を代入する",
    problem: "x = −3 のとき、2x + 5 の値を求めてください。",
    steps: [
      {
        prompt: "x を −3 に置き換えた式を書いてください。",
        answers: ["2*(-3)+5", "2×(-3)+5", "2(−3)+5", "2(-3)+5"],
        placeholder: "2×(-3)+5",
      },
      { prompt: "式の値を答えてください。", answers: ["-1", "−1"], placeholder: "答え" },
    ],
    hint: "−3を代入するときは、符号を含めてかっこで囲みます。",
  },
  summary: ["文字に数を当てはめることを代入という。", "負の数を代入するときはかっこを付けて計算する。"],
};
