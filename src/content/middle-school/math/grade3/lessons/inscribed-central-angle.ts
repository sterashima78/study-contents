import type { MathLesson } from "../../../../math1/types";

export const inscribedCentralAngleLesson: MathLesson = {
  key: "inscribed-central-angle",
  title: "円周角と中心角の関係を捉える",
  description: "同じ弧に対する円周角が中心角の半分になることを観察し、角度計算に使います。",
  goals: ["円周角と中心角を区別できる。", "同じ弧に対する中心角と円周角の関係を使える。"],
  concepts: [
    {
      title: "円周角は中心角の半分",
      body: ["同じ弧ABに対する中心角∠AOBと円周角∠APBを比べると、円周角は中心角の半分です。", "この関係は点Pの位置を円周上で動かしても、同じ弧を見る限り変わりません。"],
      formulas: ["∠APB=1/2∠AOB"],
    },
  ],
  example: {
    title: "例題: 円周角を求める",
    problem: "同じ弧に対する中心角が120°です。",
    steps: [
      { expression: "120÷2", note: "円周角は中心角の半分です。" },
      { expression: "円周角=60°", note: "同じ弧に対する角であることを確認します。" },
    ],
  },
  practice: {
    title: "練習: 半分と2倍",
    problem: "中心角と円周角を対応させます。",
    steps: [
      { prompt: "中心角が100°のとき、同じ弧に対する円周角を答えてください。", answers: ["50", "50°"], placeholder: "角度" },
      { prompt: "円周角が35°のとき、同じ弧に対する中心角を答えてください。", answers: ["70", "70°"], placeholder: "角度" },
    ],
    hint: "円周角=中心角÷2です。",
  },
  summary: ["同じ弧に対する円周角は中心角の半分。", "中心角は円周角の2倍。"],
};
