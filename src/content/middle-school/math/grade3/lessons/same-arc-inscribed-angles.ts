import type { MathLesson } from "../../../../math1/types";

export const sameArcInscribedAnglesLesson: MathLesson = {
  key: "same-arc-inscribed-angles",
  title: "同じ弧に対する円周角が等しいことを使う",
  description: "同じ弧を見る複数の円周角が等しいことを、中心角との関係から理解します。",
  goals: [
    "同じ弧に対する円周角が等しい理由を説明できる。",
    "円周上の点が変わっても同じ弧なら角が等しいことを使える。",
  ],
  concepts: [
    {
      title: "同じ中心角の半分だから等しい",
      body: [
        "同じ弧ABに対する円周角∠APBと∠AQBは、どちらも中心角∠AOBの半分です。",
        "したがって点P、Qの位置が違っても∠APB=∠AQBです。",
      ],
      formulas: ["同じ弧AB → ∠APB=∠AQB"],
    },
  ],
  example: {
    title: "例題: 角を移して考える",
    problem: "同じ弧ABに対して∠APB=42°です。",
    steps: [
      { expression: "∠APB=42°", note: "弧ABを見る円周角です。" },
      { expression: "∠AQB=42°", note: "同じ弧ABに対する円周角なので等しいです。" },
    ],
  },
  practice: {
    title: "練習: 同じ弧を探す",
    problem: "角の両端が同じ2点か確認します。",
    steps: [
      {
        prompt: "同じ弧ABに対する円周角が28°のとき、別の円周角も何度ですか。",
        answers: ["28", "28°"],
        placeholder: "角度",
      },
      {
        prompt: "直径ABに対する円周角を答えてください。",
        answers: ["90", "90°", "直角"],
        placeholder: "角度",
      },
    ],
    hint: "直径に対する中心角は180°です。",
  },
  summary: ["同じ弧に対する円周角は等しい。", "直径に対する円周角は90°。"],
};
