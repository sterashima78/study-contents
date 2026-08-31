import type { MathLesson } from "../../../../math1/types";

export const monomialPolynomialTermsLesson: MathLesson = {
  key: "monomial-polynomial-terms",
  title: "単項式・多項式と次数を整理する",
  description: "文字を含む式を単項式と多項式に分け、項・係数・次数を正しく読み取ります。",
  goals: [
    "単項式と多項式を区別できる。",
    "式の項、係数、次数を読み取れる。",
  ],
  concepts: [
    {
      title: "項の個数で単項式と多項式を区別する",
      body: [
        "数や文字の積だけでできた式を単項式といいます。加法や減法でいくつかの単項式をつないだ式が多項式です。",
        "多項式では、加法の形に見直して一つ一つの項を確認します。減法の後ろの項は符号まで含めて考えます。",
      ],
    },
    {
      title: "次数は掛け合わされた文字の個数",
      body: [
        "単項式の次数は、掛け合わされた文字の個数です。例えば3x²yはxが2個、yが1個なので3次式です。",
        "多項式の次数は、各項の次数のうち最も大きいものです。",
      ],
    },
  ],
  example: {
    title: "例題: 3x²y − 5x + 2 を読む",
    problem: "式 3x²y − 5x + 2 の項と次数を確認します。",
    steps: [
      { expression: "項: 3x²y, −5x, 2", note: "符号を含めて三つの項に分けます。" },
      { expression: "3x²y は3次、−5xは1次、2は0次", note: "各項の文字の個数を数えます。" },
      { expression: "式全体は3次式", note: "最も次数の大きい項に合わせます。" },
    ],
  },
  practice: {
    title: "練習: 次数を読み取る",
    problem: "式 4a²b + 3a − 7 を考えます。",
    steps: [
      { prompt: "項はいくつありますか。", answers: ["3", "3個", "3つ"], placeholder: "項の個数" },
      { prompt: "式全体の次数を答えてください。", answers: ["3", "3次", "3次式"], placeholder: "○次" },
    ],
    hint: "a²bには文字が合計3個掛け合わされています。",
  },
  summary: [
    "積だけでできた式は単項式、項が二つ以上ある式は多項式である。",
    "項は符号まで含めて分ける。",
    "多項式の次数は、各項の次数の最大値である。",
  ],
};
