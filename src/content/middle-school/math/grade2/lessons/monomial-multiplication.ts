import type { MathLesson } from "../../../../math1/types";

export const monomialMultiplicationLesson: MathLesson = {
  key: "monomial-multiplication",
  title: "単項式を掛ける",
  description: "係数どうしと文字どうしを分けて、単項式の乗法を計算します。",
  goals: ["単項式の乗法で係数と文字を分けて計算できる。", "同じ文字の積を指数を使って表せる。"],
  concepts: [
    {
      title: "数と文字をそれぞれ掛ける",
      body: [
        "単項式どうしの乗法では、係数どうしを掛け、文字どうしを掛けます。",
        "同じ文字を掛けるときは x×x=x² のように指数を使って表します。符号の計算も数の乗法と同じです。",
      ],
      formulas: ["(ax)(by) = abxy", "xᵐ × xⁿ = xᵐ⁺ⁿ"],
    },
  ],
  example: {
    title: "例題: (−3a²) × 4ab",
    problem: "(−3a²) × 4ab",
    steps: [
      { expression: "係数: (−3) × 4 = −12", note: "まず数の部分を計算します。" },
      { expression: "文字: a² × a × b = a³b", note: "aは指数を足します。" },
      { expression: "= −12a³b", note: "係数と文字を合わせます。" },
    ],
  },
  practice: {
    title: "練習: 単項式の乗法",
    problem: "2x² × (−5xy)",
    steps: [
      { prompt: "係数の積を答えてください。", answers: ["-10", "−10"], placeholder: "係数" },
      { prompt: "式全体の積を答えてください。", answers: ["-10x^3y", "−10x³y", "-10x³y"], placeholder: "積" },
    ],
    hint: "x²×x=x³です。",
  },
  summary: ["単項式の乗法は係数と文字に分けて計算する。", "同じ文字の指数は足す。", "符号は数の乗法と同じ規則で決める。"],
};
