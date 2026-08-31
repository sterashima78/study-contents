import type { MathLesson } from "../../../../math1/types";

export const linearFunctionMeaningLesson: MathLesson = {
  key: "linear-function-meaning",
  title: "一次関数の意味を捉える",
  description: "一次関数 y = ax + b を、xの変化に応じてyが一定の割合で変化する関係として捉えます。",
  goals: [
    "一次関数を y = ax + b の形で捉えられる。",
    "比例 y = ax が一次関数の特別な場合であることを説明できる。",
  ],
  concepts: [
    {
      title: "一次関数は y = ax + b",
      body: [
        "一次関数では、xが1増えるごとにyはいつも同じ量だけ増減します。その一定の変化をaで表し、x=0のときのyの値をbで表すと、y=ax+bとなります。",
        "b=0なら y=ax となるので、中学1年で学んだ比例は一次関数の特別な場合です。",
      ],
      formulas: ["y = ax + b", "b = 0 のとき y = ax"],
    },
  ],
  example: {
    title: "例題: y = 3x + 2 の変化を調べる",
    problem: "x = 0, 1, 2 のときのyを求め、一次関数の特徴を確認します。",
    steps: [
      { expression: "x = 0 → y = 2", note: "x=0のときのyの値2がbです。" },
      { expression: "x = 1 → y = 5", note: "xが1増えるとyは3増えます。" },
      { expression: "x = 2 → y = 8", note: "さらにxが1増えてもyは3増えます。" },
    ],
  },
  practice: {
    title: "練習: 一次関数の対応を確かめる",
    problem: "y = −2x + 5 について考えます。",
    steps: [
      { prompt: "x = 0 のときのyを答えてください。", answers: ["5"], placeholder: "y" },
      { prompt: "x = 3 のときのyを答えてください。", answers: ["-1", "−1"], placeholder: "y" },
    ],
    hint: "xの値を y = −2x + 5 に代入します。",
  },
  summary: [
    "一次関数は y = ax + b の形で表される。",
    "xが1増えるとyはaだけ増減し、x=0のときy=bになる。",
  ],
};
