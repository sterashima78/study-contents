import type { MathLesson } from "../../../../math1/types";

export const multiplicationNotationLesson: MathLesson = {
  key: "multiplication-notation",
  title: "文字式の乗法の表し方",
  description: "乗法記号を省き、数を文字の前に書く文字式の表記を身に付けます。",
  goals: ["文字式で × を省いて表せる。", "数と文字の積を決められた順序で書ける。"],
  concepts: [
    {
      title: "文字式では × を省く",
      body: [
        "数と文字、文字どうしの積では、ふつう乗法記号 × を省きます。",
        "数と文字の積では数を文字の前に書き、1や−1は必要に応じて省きます。",
      ],
      formulas: ["3 × x = 3x", "x × (−2) = −2x", "1 × a = a"],
    },
  ],
  example: {
    title: "例題: x × 5 を文字式のきまりで表す",
    problem: "x × 5",
    steps: [
      { expression: "数を文字の前へ移す", note: "数と文字の積では数を先に書きます。" },
      { expression: "5 × x", note: "積の順序を入れ替えても値は変わりません。" },
      { expression: "5x", note: "乗法記号 × を省きます。" },
    ],
  },
  practice: {
    title: "練習: 乗法記号を省く",
    problem: "a × (−7) を文字式のきまりで表してください。",
    steps: [
      {
        prompt: "数を文字の前に置き、× を省いて答えてください。",
        answers: ["-7a", "−7a"],
        placeholder: "-7a",
      },
    ],
    hint: "−7 を a の前に置きます。",
  },
  summary: ["数と文字の積では × を省き、数を文字の前に書く。", "係数が1のときは1を省いて文字だけで表せる。"],
};
