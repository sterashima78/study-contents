import type { MathLesson } from "../../../../math1/types";

export const lettersMeaningLesson: MathLesson = {
  key: "letters-meaning",
  title: "文字を使って数量を表す",
  description: "変わる数量を文字で置き、数量を一般的な式として表します。",
  goals: ["変わる数量を文字で表せる。", "具体的な数量を文字を使った式に置き換えられる。"],
  concepts: [
    {
      title: "文字は、いろいろな数をまとめて表せる",
      body: [
        "個数や長さのように値が変わる数量を x や a などの文字で表すと、同じ関係を一つの式にまとめられます。",
        "まず何を文字で置くかを決め、その文字が表す数量と単位をはっきりさせます。",
      ],
      formulas: ["1個80円の品物を x 個買う代金 = 80 × x 円"],
    },
  ],
  example: {
    title: "例題: 1本120円のペンを x 本買う代金を表す",
    problem: "1本120円のペンを x 本買うときの代金を、文字を使った式で表してください。",
    steps: [
      { expression: "本数 = x 本", note: "変わる数量である本数を x とします。" },
      { expression: "120 × x", note: "1本の値段に本数を掛けます。" },
      { expression: "120 × x 円", note: "代金の単位まで確認します。" },
    ],
  },
  practice: {
    title: "練習: 長さを文字で表す",
    problem: "1辺が a cm の正方形の周の長さを、乗法記号を使って表してください。",
    steps: [
      {
        prompt: "周の長さを式で答えてください。",
        answers: ["4*a", "4×a", "a*4", "a×4"],
        placeholder: "4×a",
      },
    ],
    hint: "正方形の周は同じ長さの辺4本分です。",
  },
  summary: [
    "変わる数量を文字で置くと、数量の関係を一般的に表せる。",
    "文字が何を表すかと単位を先に確認する。",
  ],
};
