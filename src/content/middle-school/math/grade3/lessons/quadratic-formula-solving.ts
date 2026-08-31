import type { MathLesson } from "../../../../math1/types";

export const quadraticFormulaSolvingLesson: MathLesson = {
  key: "quadratic-formula-solving",
  title: "解の公式で二次方程式を解く",
  description: "ax²+bx+c=0の係数を読み取り、符号と計算順序に注意して解の公式へ代入します。",
  goals: [
    "a、b、cを正しく読み取って解の公式へ代入できる。",
    "根号を簡単にし、二つの実数解を求められる。",
  ],
  concepts: [
    {
      title: "係数を先に書き出す",
      body: [
        "解の公式を使う前に、方程式をax²+bx+c=0の形へ整理し、a、b、cを符号ごと書き出します。",
        "bが負のときの−b、根号の中のb²−4ac、最後の2aの順に区切って計算すると符号の誤りを減らせます。",
      ],
      formulas: ["x=(-b±√(b²−4ac))/(2a)"],
    },
  ],
  example: {
    title: "例題: 2x²+x−3=0を解く",
    problem: "a=2、b=1、c=−3を代入します。",
    steps: [
      { expression: "x=(-1±√(1²−4·2·(−3)))/(2·2)", note: "係数を符号ごと代入します。" },
      { expression: "x=(-1±√25)/4", note: "根号の中は25です。" },
      { expression: "x=(-1±5)/4", note: "±を二通りに分けます。" },
      { expression: "x=1, −3/2", note: "二つの解です。" },
    ],
  },
  practice: {
    title: "練習: 解の公式を使う",
    problem: "a、b、cを確認してから代入します。",
    steps: [
      {
        prompt: "x²+x−1=0の解を答えてください。",
        answers: ["(-1±√5)/2", "x=(-1±√5)/2", "(−1±√5)/2", "x=(−1±√5)/2"],
        placeholder: "x=...",
      },
      {
        prompt: "2x²−5x+2=0の解を小さい順にカンマで答えてください。",
        answers: ["1/2,2", "0.5,2"],
        placeholder: "例: 1/2,3",
      },
    ],
    hint: "まずa、b、cを符号ごと書き出し、b²−4acを先に計算します。",
  },
  summary: ["解の公式を使う前に標準形へ整理し、a、b、cを符号ごと確認する。", "±は二つの解を表す。"],
};
