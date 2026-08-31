import type { MathLesson } from "../../../../math1/types";

export const parallelLineConditionsLesson: MathLesson = {
  key: "parallel-line-conditions",
  title: "平行線の性質と条件を使う",
  description:
    "平行な2直線では同位角・錯角が等しいことと、その逆に同位角・錯角が等しければ2直線が平行になることを使います。",
  goals: [
    "平行線の同位角・錯角が等しいことを使える。",
    "同位角または錯角が等しいことから2直線が平行だと判断できる。",
  ],
  concepts: [
    {
      title: "性質と条件を区別する",
      body: [
        "2直線が平行なら、横切る直線がつくる同位角と錯角はそれぞれ等しくなります。",
        "逆に、同位角または錯角が等しいことが分かれば、2直線は平行だと判断できます。",
      ],
      formulas: ["l ∥ m → 同位角・錯角が等しい", "同位角または錯角が等しい → l ∥ m"],
    },
  ],
  example: {
    title: "例題: 平行線の錯角を使う",
    problem: "l ∥ m で、横切る直線がつくる一つの角が47°です。錯角を求めます。",
    steps: [
      { expression: "l ∥ m", note: "2直線が平行であることを確認します。" },
      { expression: "錯角は等しい", note: "平行線にできる錯角の性質を使います。" },
      { expression: "47°", note: "求める錯角も47°です。" },
    ],
  },
  practice: {
    title: "練習: 同位角から平行を判断する",
    problem: "2直線l、mを1本の直線が横切り、対応する同位角がどちらも73°です。",
    steps: [
      {
        prompt: "lとmの関係を答えてください。",
        answers: ["平行", "l∥m", "l//m"],
        placeholder: "関係",
      },
    ],
    hint: "同位角が等しいことは、2直線が平行になるための条件です。",
  },
  summary: [
    "平行線では同位角と錯角が等しい。",
    "同位角または錯角が等しければ、2直線は平行である。",
  ],
};
