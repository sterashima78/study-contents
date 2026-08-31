import type { MathLesson } from "../../../../math1/types";

export const eliminationMultiplyLesson: MathLesson = {
  key: "elimination-multiply",
  title: "式を倍してから加減法を使う",
  description:
    "そのままでは文字を消去できない連立方程式で、式全体を倍して係数をそろえてから加減法を使います。",
  goals: [
    "消去したい文字の係数がそろうように方程式全体を何倍かできる。",
    "係数をそろえた後に加減法で連立方程式を解ける。",
  ],
  concepts: [
    {
      title: "式全体を同じ数倍しても等式は保たれる",
      body: [
        "方程式の両辺を同じ0でない数倍すると、同じ解をもつ方程式になります。",
        "消去したい文字の係数を最小公倍数などにそろえてから、式どうしを加減します。",
      ],
    },
  ],
  example: {
    title: "例題: x + y = 5、2x + 3y = 12",
    problem: "x + y = 5、2x + 3y = 12 を加減法で解きます。",
    steps: [
      { expression: "2x + 2y = 10", note: "一つ目の式を2倍してxの係数をそろえます。" },
      { expression: "y = 2", note: "二つ目の式から2倍した式を引きます。" },
      { expression: "x = 3", note: "x + y = 5 に y = 2 を代入します。" },
    ],
  },
  practice: {
    title: "練習: 係数をそろえる",
    problem: "x + y = 6、2x + 3y = 16 を解いてください。",
    steps: [
      { prompt: "一つ目の式を2倍した右辺を答えてください。", answers: ["12"], placeholder: "右辺" },
      {
        prompt: "x、y の値を x,y の順に答えてください。",
        answers: ["2,4", "(2,4)", "x=2,y=4"],
        placeholder: "x,y",
      },
    ],
    hint: "一つ目を2倍すると 2x+2y=12 です。",
  },
  summary: [
    "係数がそろっていないときは、方程式全体を倍して消去しやすい形にする。",
    "係数をそろえた後は加減法で一方の文字を消去する。",
  ],
};
