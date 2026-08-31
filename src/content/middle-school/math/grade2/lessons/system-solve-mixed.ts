import type { MathLesson } from "../../../../math1/types";

export const systemSolveMixedLesson: MathLesson = {
  key: "system-solve-mixed",
  title: "解き方を選んで連立方程式を解く",
  description: "連立方程式の形を見て、加減法と代入法のどちらが効率よいか判断して解きます。",
  goals: [
    "係数や式の形から加減法と代入法を選べる。",
    "求めた解を元の二つの式に代入して確かめられる。",
  ],
  concepts: [
    {
      title: "式の形に応じて方法を選ぶ",
      body: [
        "係数がそろっている、または少ない倍数でそろうなら加減法が使いやすいです。",
        "一方が x = ... や y = ... の形なら代入法が使いやすいです。どちらで解いても同じ解になります。",
      ],
    },
  ],
  example: {
    title: "例題: 3x + 2y = 13、2x − y = 4",
    problem: "3x + 2y = 13、2x − y = 4 を解きます。",
    steps: [
      { expression: "4x − 2y = 8", note: "二つ目の式を2倍すると、yを加えて消去できます。" },
      { expression: "7x = 21", note: "一つ目の式と加えます。" },
      { expression: "x = 3, y = 2", note: "元の式に代入して両方が成り立つことを確かめます。" },
    ],
  },
  practice: {
    title: "練習: 解法を選ぶ",
    problem: "x + 2y = 8、3x − 2y = 8 を解いてください。",
    steps: [
      { prompt: "二つの式を加えたときの 4x の値を答えてください。", answers: ["16"], placeholder: "4x" },
      { prompt: "x、y の値を x,y の順に答えてください。", answers: ["4,2", "(4,2)", "x=4,y=2"], placeholder: "x,y" },
    ],
    hint: "yの係数が2と−2なので、そのまま加減法を使えます。",
  },
  summary: [
    "連立方程式の形を見て、文字を消しやすい方法を選ぶ。",
    "解いた後は元の二つの方程式に代入して確認する。",
  ],
};
