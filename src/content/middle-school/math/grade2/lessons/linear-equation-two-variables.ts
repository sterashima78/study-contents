import type { MathLesson } from "../../../../math1/types";

export const linearEquationTwoVariablesLesson: MathLesson = {
  key: "linear-equation-two-variables",
  title: "二元一次方程式の解を捉える",
  description: "二つの文字を含む一次方程式について、方程式を成り立たせる値の組が解であることを理解します。",
  goals: [
    "二元一次方程式を成り立たせるx、yの値の組を確かめられる。",
    "一元一次方程式と違い、二元一次方程式には複数の解があり得ることを説明できる。",
  ],
  concepts: [
    {
      title: "解は二つの値の組",
      body: [
        "二元一次方程式では、xとyの両方に値を代入して等式が成り立つとき、その値の組を解といいます。",
        "変域によっては、一つの二元一次方程式に解がいくつもあります。",
      ],
    },
  ],
  example: {
    title: "例題: 2x + y = 7 の解を確かめる",
    problem: "2x + y = 7 で、x = 2 のときの y を求めます。",
    steps: [
      { expression: "2 × 2 + y = 7", note: "x = 2 を代入します。" },
      { expression: "4 + y = 7", note: "数の部分を計算します。" },
      { expression: "y = 3", note: "したがって (x, y) = (2, 3) は解です。" },
    ],
  },
  practice: {
    title: "練習: 値の組を確かめる",
    problem: "3x + y = 11 で、x = 2 のときの y を求めてください。",
    steps: [
      { prompt: "x = 2 を代入した式の左辺の数の部分を答えてください。", answers: ["6"], placeholder: "3×2" },
      { prompt: "y の値を答えてください。", answers: ["5"], placeholder: "y" },
    ],
    hint: "3×2+y=11 として、一元一次方程式と同じように解きます。",
  },
  summary: [
    "二元一次方程式の解は、等式を成り立たせる二つの値の組である。",
    "一つの二元一次方程式には複数の解があり得る。",
  ],
};
