import type { MathLesson } from "../../../../math1/types";

export const polynomialMonomialDivisionLesson: MathLesson = {
  key: "polynomial-monomial-division",
  title: "多項式を単項式で割る",
  description: "多項式の各項を同じ単項式で割り、係数と文字を整理します。",
  goals: ["多項式の各項を単項式で割れる。", "文字の指数と符号を正しく整理できる。"],
  concepts: [
    {
      title: "各項を同じ式で割る",
      body: [
        "(A+B)÷m=A÷m+B÷mとして、多項式の各項を同じ単項式で割ります。",
        "係数の除法と文字の除法を分けて考えると、4x²÷2x=2xのように整理できます。",
      ],
      formulas: ["(4x²+6x)÷2x = 2x+3", "(9a²−6ab)÷3a = 3a−2b"],
    },
  ],
  example: {
    title: "例題: (12x²−8x)÷4x",
    problem: "2つの項をそれぞれ4xで割ります。",
    steps: [
      { expression: "12x²÷4x = 3x", note: "係数12÷4、文字x²÷xを計算します。" },
      { expression: "−8x÷4x = −2", note: "符号を保って割ります。" },
      { expression: "(12x²−8x)÷4x = 3x−2", note: "結果を並べます。" },
    ],
  },
  practice: {
    title: "練習: 各項を割る",
    problem: "多項式を単項式で割ります。",
    steps: [
      { prompt: "(15a²+10a)÷5aを計算してください。", answers: ["3a+2"], placeholder: "式" },
      {
        prompt: "(8x²−12xy)÷4xを計算してください。",
        answers: ["2x−3y", "2x-3y"],
        placeholder: "式",
      },
    ],
    hint: "多項式の各項を同じ単項式で割ります。",
  },
  summary: ["多項式÷単項式は、各項を同じ単項式で割る。", "係数と文字を分けて整理する。"],
};
