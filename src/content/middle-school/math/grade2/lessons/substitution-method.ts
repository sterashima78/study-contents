import type { MathLesson } from "../../../../math1/types";

export const substitutionMethodLesson: MathLesson = {
  key: "substitution-method",
  title: "代入法で文字を消去する",
  description: "一方の式で一つの文字を別の文字の式として表し、それをもう一方の式に代入して解きます。",
  goals: [
    "x=... や y=... の形の式を別の方程式へ代入できる。",
    "代入によって二元一次方程式を一元一次方程式に変えられる。",
  ],
  concepts: [
    {
      title: "等しいものは置き換えられる",
      body: [
        "y = x + 1 なら、もう一つの式にあるyを(x + 1)で置き換えられます。",
        "代入すると文字が一種類になり、中学1年で学んだ一元一次方程式として解けます。",
      ],
    },
  ],
  example: {
    title: "例題: y = x + 1、2x + y = 10",
    problem: "y = x + 1、2x + y = 10 を代入法で解きます。",
    steps: [
      { expression: "2x + (x + 1) = 10", note: "二つ目の式のyをx+1で置き換えます。" },
      { expression: "3x = 9", note: "同類項をまとめます。" },
      { expression: "x = 3, y = 4", note: "y = x + 1 に x = 3 を代入します。" },
    ],
  },
  practice: {
    title: "練習: 代入して解く",
    problem: "y = x + 2、2x + y = 11 を解いてください。",
    steps: [
      { prompt: "yを代入した後の式を答えてください。", answers: ["2x+(x+2)=11", "2x+x+2=11"], placeholder: "xだけの式" },
      { prompt: "x、y の値を x,y の順に答えてください。", answers: ["3,5", "(3,5)", "x=3,y=5"], placeholder: "x,y" },
    ],
    hint: "yの代わりにx+2を入れます。",
  },
  summary: [
    "一方の文字が他方の文字の式で表されているときは代入法が使いやすい。",
    "代入によって文字を一種類にし、一元一次方程式として解く。",
  ],
};
