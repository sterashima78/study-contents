import type { MathLesson } from "../../../../math1/types";

export const systemsAndGraphsLesson: MathLesson = {
  key: "systems-and-graphs",
  title: "連立方程式の解をグラフで捉える",
  description:
    "二つの二元一次方程式を直線として表し、連立方程式の解が二直線の交点の座標になることを理解します。",
  goals: [
    "二つの方程式をそれぞれ直線として捉えられる。",
    "連立方程式の解と二直線の交点を結び付けられる。",
  ],
  concepts: [
    {
      title: "同時に満たす点は二直線の交点",
      body: [
        "一つの二元一次方程式を満たす点は一本の直線上に並びます。二つの方程式を同時に満たす点は、二本の直線の両方に属する点です。",
        "したがって、連立方程式の解(x,y)は、二直線の交点の座標として視覚的に捉えられます。",
      ],
      formulas: ["連立方程式の解 ↔ 2直線の交点"],
    },
  ],
  example: {
    title: "例題: y = x + 1 と y = −x + 5",
    problem: "二直線の交点と連立方程式の解を比べます。",
    steps: [
      { expression: "x + 1 = −x + 5", note: "交点では同じxに対するyの値が等しくなります。" },
      { expression: "2x = 4 → x = 2", note: "交点のx座標を求めます。" },
      { expression: "y = 3", note: "交点は(2,3)で、連立方程式の解と一致します。" },
    ],
  },
  practice: {
    title: "練習: 二直線の交点を求める",
    problem: "y = 2x と y = −x + 6 の交点を求めます。",
    steps: [
      { prompt: "交点のx座標を答えてください。", answers: ["2"], placeholder: "x" },
      {
        prompt: "交点を x,y の順に答えてください。",
        answers: ["2,4", "(2,4)", "x=2,y=4"],
        placeholder: "x,y",
      },
    ],
    hint: "交点では 2x = −x + 6 が成り立ちます。",
  },
  summary: [
    "二元一次方程式のグラフは直線として捉えられる。",
    "連立方程式の解は、二つの直線の交点の座標になる。",
  ],
};
