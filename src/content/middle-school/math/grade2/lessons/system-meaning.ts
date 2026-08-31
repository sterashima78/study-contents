import type { MathLesson } from "../../../../math1/types";

export const systemMeaningLesson: MathLesson = {
  key: "system-meaning",
  title: "連立方程式とその解を捉える",
  description: "二つの二元一次方程式を同時に満たす値の組が、連立方程式の解であることを理解します。",
  goals: [
    "二つの条件を同時に満たす値の組を連立方程式の解として捉えられる。",
    "二元一次方程式を連立させる必要性を説明できる。",
  ],
  concepts: [
    {
      title: "二つの条件を同時に満たす",
      body: [
        "連立方程式は、二つ以上の方程式を組にして扱うものです。",
        "解は、それぞれの方程式を同時に成り立たせるx、yの値の組です。片方だけを満たしても解ではありません。",
      ],
    },
  ],
  example: {
    title: "例題: 二つの条件を同時に確かめる",
    problem: "x + y = 5、2x + y = 8 の両方を満たす値の組を求めます。",
    steps: [
      { expression: "x + y = 5", note: "一つ目の条件です。" },
      { expression: "2x + y = 8", note: "二つ目の条件です。" },
      { expression: "x = 3, y = 2", note: "3+2=5、2×3+2=8 の両方が成り立ちます。" },
    ],
  },
  practice: {
    title: "練習: 連立方程式の解を確かめる",
    problem: "x + y = 7、2x + y = 11 を同時に満たす x、y を求めてください。",
    steps: [
      { prompt: "二つ目の左辺から一つ目の左辺を引くと、xはいくつですか。", answers: ["4"], placeholder: "x" },
      { prompt: "y の値を答えてください。", answers: ["3"], placeholder: "y" },
    ],
    hint: "二つの式の差を考えると、yが消えます。",
  },
  summary: [
    "連立方程式は複数の条件を同時に表す。",
    "連立方程式の解は、全ての方程式を同時に成り立たせる値の組である。",
  ],
};
