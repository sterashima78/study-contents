import type { MathLesson } from "../../../../math1/types";

export const monomialPolynomialMultiplicationLesson: MathLesson = {
  key: "monomial-polynomial-multiplication",
  title: "単項式と多項式を掛ける",
  description: "分配法則を使い、単項式を多項式の各項に掛けて計算します。",
  goals: ["単項式を多項式の各項へ正しく分配できる。", "係数と文字の積を整理できる。"],
  concepts: [
    {
      title: "各項へ同じ単項式を掛ける",
      body: [
        "m(A+B)=mA+mBという分配法則は、文字式でもそのまま使えます。符号、係数、文字の順に整理するとミスを減らせます。",
        "この計算は、次に学ぶ多項式どうしの乗法の土台になります。",
      ],
      formulas: ["2a(3a−5b)=6a²−10ab", "−3x(2x+4)=−6x²−12x"],
    },
  ],
  example: {
    title: "例題: 3x(2x−5)を計算する",
    problem: "3xをかっこの中の2項へ分配します。",
    steps: [
      { expression: "3x×2x = 6x²", note: "最初の項へ掛けます。" },
      { expression: "3x×(−5) = −15x", note: "符号を含めて次の項へ掛けます。" },
      { expression: "3x(2x−5)=6x²−15x", note: "2つの積を並べます。" },
    ],
  },
  practice: {
    title: "練習: 分配して掛ける",
    problem: "単項式を多項式へ掛けます。",
    steps: [
      { prompt: "2a(4a+3)を計算してください。", answers: ["8a²+6a", "8a^2+6a"], placeholder: "式" },
      {
        prompt: "−x(3x−2)を計算してください。",
        answers: ["−3x²+2x", "-3x²+2x", "-3x^2+2x"],
        placeholder: "式",
      },
    ],
    hint: "かっこの中のすべての項へ掛けます。",
  },
  summary: ["単項式と多項式の乗法は分配法則で各項へ掛ける。", "負の項では符号も含めて計算する。"],
};
