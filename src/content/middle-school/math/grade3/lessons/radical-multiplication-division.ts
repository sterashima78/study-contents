import type { MathLesson } from "../../../../math1/types";

export const radicalMultiplicationDivisionLesson: MathLesson = {
  key: "radical-multiplication-division",
  title: "平方根を掛ける・割る",
  description: "√a×√b=√(ab)などの関係を使い、平方根を含む乗法・除法を計算します。",
  goals: [
    "平方根の積を一つの根号にまとめて計算できる。",
    "平方根の商を根号の中の商として扱い、必要に応じて簡単にできる。",
  ],
  concepts: [
    {
      title: "乗法・除法は根号の中をまとめる",
      body: [
        "a>0、b>0のとき、√a×√b=√(ab)が成り立ちます。除法も同じ考えで根号の中の商として扱えます。",
        "計算後に平方数の因数ができたら、根号の外へ出して簡単にします。",
      ],
      formulas: ["√a × √b = √(ab)", "√18 ÷ √2 = √9 = 3"],
    },
  ],
  example: {
    title: "例題: √6×√15を計算する",
    problem: "積を一つの根号にまとめ、最後に簡単にします。",
    steps: [
      { expression: "√6×√15 = √90", note: "根号の中を掛けます。" },
      { expression: "√90 = √(9×10)", note: "平方数9を見付けます。" },
      { expression: "√90 = 3√10", note: "√9=3を外へ出します。" },
    ],
  },
  practice: {
    title: "練習: 乗法と除法",
    problem: "平方根を含む式を計算します。",
    steps: [
      { prompt: "√3×√12を計算してください。", answers: ["6"], placeholder: "答え" },
      { prompt: "√50÷√2を計算してください。", answers: ["5"], placeholder: "答え" },
    ],
    hint: "根号の中を先に掛けたり割ったりします。",
  },
  summary: [
    "平方根の乗法・除法は根号の中をまとめて考える。",
    "計算後に平方数の因数を取り出して簡単にする。",
  ],
};
