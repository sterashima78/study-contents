import type { MathLesson } from "../../../../math1/types";

export const parallelogramPropertiesProofLesson: MathLesson = {
  key: "parallelogram-properties-proof",
  title: "平行四辺形の性質を証明する",
  description:
    "対角線で平行四辺形を2つの三角形に分け、平行線の性質と三角形の合同条件から辺や角の性質を証明します。",
  goals: [
    "平行線の錯角を合同の根拠として使える。",
    "平行四辺形の向かい合う辺や角が等しいことを合同から説明できる。",
  ],
  concepts: [
    {
      title: "対角線で合同な三角形をつくる",
      body: [
        "平行四辺形ABCDに対角線ACを引くと、△ABCと△CDAを比べられます。AB∥CD、BC∥ADなので錯角がそれぞれ等しく、ACは共通です。",
        "1組の辺とその両端の角がそれぞれ等しいので2三角形は合同となり、AB=CD、BC=ADや向かい合う角が等しいことを導けます。",
      ],
      formulas: [
        "平行四辺形 → 2組の対辺はそれぞれ等しい",
        "平行四辺形 → 2組の対角はそれぞれ等しい",
      ],
    },
  ],
  example: {
    title: "例題: 対辺が等しいことを証明する",
    problem: "平行四辺形ABCDに対角線ACを引きます。",
    steps: [
      { expression: "∠BAC = ∠DCA", note: "AB∥CDより錯角が等しいです。" },
      { expression: "∠BCA = ∠DAC", note: "BC∥ADより錯角が等しいです。" },
      { expression: "AC = CA", note: "共通な辺です。" },
      { expression: "△ABC ≡ △CDA", note: "1組の辺とその両端の角がそれぞれ等しいからです。" },
    ],
  },
  practice: {
    title: "練習: 合同後の結論を読む",
    problem: "△ABC≡△CDAが示せました。",
    steps: [
      {
        prompt: "辺ABに対応して等しい辺を答えてください。",
        answers: ["CD", "DC"],
        placeholder: "辺",
      },
    ],
    hint: "合同な三角形の頂点の対応を確認します。",
  },
  summary: [
    "平行四辺形では、対角線を引くと合同な三角形を作れる。",
    "平行線の錯角と合同条件を根拠に、対辺・対角の性質を証明できる。",
  ],
};
