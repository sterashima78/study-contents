import type { MathLesson } from "../../../../math1/types";

export const circleAngleProofLesson: MathLesson = {
  key: "circle-angle-proof",
  title: "円周角の関係が証明できることを知る",
  description:
    "二等辺三角形や外角の性質を根拠に、観察で見いだした円周角の関係を論理的に確かめます。",
  goals: [
    "実測と証明の役割の違いを説明できる。",
    "既習の角の性質を円周角の証明の根拠として使えることを理解する。",
  ],
  concepts: [
    {
      title: "測って確かめるから、いつでも成り立つへ",
      body: [
        "分度器で何例か確かめると関係を予想できますが、すべての場合に成り立つことは証明で確かめます。",
        "半径でできる二等辺三角形の底角や三角形の外角の性質が、円周角と中心角の関係を証明する根拠になります。",
      ],
      formulas: ["観察・実験 → 予想 → 既習事項を根拠に証明"],
    },
  ],
  example: {
    title: "例題: 証明の根拠を整理する",
    problem: "OA=OPなら△AOPは二等辺三角形です。",
    steps: [
      { expression: "OA=OP", note: "どちらも円の半径です。" },
      { expression: "底角が等しい", note: "二等辺三角形の性質を使えます。" },
      { expression: "中心角と円周角の関係へ", note: "既習の角の性質を組み合わせて証明します。" },
    ],
  },
  practice: {
    title: "練習: 証明の意味",
    problem: "根拠となる既習事項を答えます。",
    steps: [
      {
        prompt: "同じ円の半径OAとOPの長さの関係を答えてください。",
        answers: ["等しい", "OA=OP", "同じ"],
        placeholder: "関係",
      },
      {
        prompt: "観察で予想した性質が常に成り立つことを確かめる方法を答えてください。",
        answers: ["証明", "証明する"],
        placeholder: "方法",
      },
    ],
    hint: "測定は有限個の例、証明は根拠から一般に確かめます。",
  },
  summary: [
    "円周角の定理は観察で見いだし、証明で一般に確かめられる。",
    "証明には既習の二等辺三角形や外角の性質を使える。",
  ],
};
