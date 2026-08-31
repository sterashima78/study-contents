import type { MathLesson } from "../../../../math1/types";

export const eliminationAddSubtractLesson: MathLesson = {
  key: "elimination-add-subtract",
  title: "加減法で文字を消去する",
  description: "二つの式を加えたり引いたりして一方の文字を消し、一元一次方程式に帰着させます。",
  goals: [
    "係数が同じ、または符号だけ異なる文字を加減法で消去できる。",
    "求めた一方の値を元の式に代入してもう一方の値を求められる。",
  ],
  concepts: [
    {
      title: "一方の文字を消して既習の方程式へ戻す",
      body: [
        "二つの方程式の左辺どうし、右辺どうしを加えたり引いたりすると、新しい等式をつくれます。",
        "一方の文字の係数が反対なら加え、同じなら引くと、その文字を消去できます。",
      ],
    },
  ],
  example: {
    title: "例題: x + y = 7、x − y = 1",
    problem: "x + y = 7、x − y = 1 を加減法で解きます。",
    steps: [
      { expression: "(x + y) + (x − y) = 7 + 1", note: "yの係数が1と−1なので、二つの式を加えます。" },
      { expression: "2x = 8", note: "yが消去されました。" },
      { expression: "x = 4, y = 3", note: "x = 4 を x + y = 7 に代入します。" },
    ],
  },
  practice: {
    title: "練習: 加えて消去する",
    problem: "x + y = 9、x − y = 3 を解いてください。",
    steps: [
      { prompt: "二つの式を加えたときの 2x の値を答えてください。", answers: ["12"], placeholder: "2x" },
      { prompt: "x、y の値を x,y の順に答えてください。", answers: ["6,3", "(6,3)", "x=6,y=3"], placeholder: "x,y" },
    ],
    hint: "二つの式を加えるとyが消えます。",
  },
  summary: [
    "係数が反対の文字は式どうしを加えると消去できる。",
    "係数が同じ文字は式どうしを引くと消去できる。",
    "一方を求めたら元の式に代入してもう一方を求める。",
  ],
};
