import type { MathLesson } from "../../../../math1/types";

export const inscribedAngleConverseLesson: MathLesson = {
  key: "inscribed-angle-converse",
  title: "円周角の定理の逆を使う",
  description:
    "等しい円周角から4点が同一円周上にあると判断する、定理の逆を具体的な場面で使います。",
  goals: [
    "円周角の定理の逆の意味を説明できる。",
    "等しい角から4点が同一円周上にあると判断できる。",
  ],
  concepts: [
    {
      title: "角の等しさから円を見付ける",
      body: [
        "点P、Qが直線ABの同じ側にあり∠APB=∠AQBなら、A、B、P、Qは一つの円周上にあります。",
        "定理が円から角を導くのに対し、逆は角の関係から円を判断します。",
      ],
      formulas: ["∠APB=∠AQB → A,B,P,Qは同一円周上"],
    },
  ],
  example: {
    title: "例題: 4点が同一円周上か判断する",
    problem: "∠APB=35°、∠AQB=35°とします。",
    steps: [
      { expression: "∠APB=∠AQB", note: "線分ABを見る角が等しいです。" },
      { expression: "A,B,P,Qは同一円周上", note: "円周角の定理の逆を使います。" },
    ],
  },
  practice: {
    title: "練習: 逆を使う",
    problem: "角の等しさから円を判断します。",
    steps: [
      {
        prompt: "∠APB=∠AQBなら4点A,B,P,Qはどのような位置関係ですか。",
        answers: ["同一円周上", "一つの円周上", "同じ円周上"],
        placeholder: "位置関係",
      },
      {
        prompt: "円から角を導く元の定理に対し、角から円を判断する命題を何と呼びますか。",
        answers: ["逆", "定理の逆", "円周角の定理の逆"],
        placeholder: "用語",
      },
    ],
    hint: "結論と仮定を入れ替えた関係に注目します。",
  },
  summary: ["円周角の定理の逆は角の等しさから同一円周上を判断する。", "定理と逆の向きを区別する。"],
};
