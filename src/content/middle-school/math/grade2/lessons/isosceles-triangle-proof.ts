import type { MathLesson } from "../../../../math1/types";

export const isoscelesTriangleProofLesson: MathLesson = {
  key: "isosceles-triangle-proof",
  title: "二等辺三角形の性質を証明する",
  description:
    "三角形の合同条件を根拠に、二等辺三角形の底角が等しいことなどを論理的に確かめます。",
  goals: [
    "補助線を使って合同な三角形を見つけられる。",
    "合同な図形の対応する角が等しいことから二等辺三角形の性質を証明できる。",
  ],
  concepts: [
    {
      title: "性質を合同へ帰着させる",
      body: [
        "AB=ACの二等辺三角形ABCで、頂点Aから底辺BCの中点Mへ線を引くと、△ABMと△ACMを比べられます。",
        "AB=AC、BM=CM、AMは共通なので3組の辺が等しく、2三角形は合同です。したがって対応する底角∠Bと∠Cは等しくなります。",
      ],
      formulas: ["AB = AC → ∠B = ∠C"],
    },
  ],
  example: {
    title: "例題: 二等辺三角形の底角を証明する",
    problem: "AB=AC、MはBCの中点です。△ABMと△ACMの合同を使います。",
    steps: [
      { expression: "AB = AC", note: "仮定です。" },
      { expression: "BM = CM, AM = AM", note: "中点の定義と共通な辺です。" },
      { expression: "△ABM ≡ △ACM", note: "3組の辺がそれぞれ等しいので合同です。" },
      { expression: "∠B = ∠C", note: "合同な図形の対応する角は等しいからです。" },
    ],
  },
  practice: {
    title: "練習: 合同の根拠を確認する",
    problem: "上の証明で、AMとAMが等しい理由を答えます。",
    steps: [
      { prompt: "理由を答えてください。", answers: ["共通な辺", "共通の辺", "AMは共通"], placeholder: "理由" },
    ],
    hint: "二つの三角形が同じ線分AMを使っています。",
  },
  summary: [
    "図形の性質を証明するとき、合同な三角形を作る補助線が有効である。",
    "合同条件を満たした後、対応する辺や角が等しいことを結論へ使う。",
  ],
};
