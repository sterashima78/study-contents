import type { MathLesson } from "../../../../math1/types";

export const expressRelationsLesson: MathLesson = {
  key: "express-relations",
  title: "数量の関係を式で表す",
  description: "数量の等しい関係や大小関係を、文字を使った等式・不等式で表します。",
  goals: ["数量の等しい関係を等式で表せる。", "「以下」「以上」を ≤、≥ を使って表せる。"],
  concepts: [
    {
      title: "言葉の関係を数学の記号へ置き換える",
      body: [
        "二つの数量が等しいときは = を使って等式にします。",
        "「以下」は ≤、「以上」は ≥ を使います。どちら側に大きい数量があるかを確認して式を作ります。",
      ],
      formulas: ["x 円と120円の合計が500円: x + 120 = 500", "人数 x 人が30人以下: x ≤ 30"],
    },
  ],
  example: {
    title: "例題: 代金の関係を等式で表す",
    problem: "1個80円の品物を x 個買い、合計が640円でした。この関係を等式で表してください。",
    steps: [
      { expression: "品物の代金 = 80x 円", note: "単価×個数で代金を表します。" },
      { expression: "合計は 640 円", note: "問題文の『合計が640円』を確認します。" },
      { expression: "80x = 640", note: "二つの数量が等しいので = で結びます。" },
    ],
  },
  practice: {
    title: "練習: 大小関係を不等式で表す",
    problem: "ある荷物の重さを x kg とします。重さが15kg以下であることを不等式で表してください。",
    steps: [
      {
        prompt: "≤ または ≥ を使って答えてください。",
        answers: ["x≤15", "15≥x"],
        placeholder: "x≤15",
      },
    ],
    hint: "『15以下』は15と等しい場合も含みます。",
  },
  summary: ["数量が等しい関係は = で表す。", "「以下」は ≤、「以上」は ≥ を使って大小関係を表す。"],
};
