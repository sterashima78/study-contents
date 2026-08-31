import type { MathLesson } from "../../../../math1/types";

export const circleAngleApplicationLesson: MathLesson = {
  key: "circle-angle-application",
  title: "円周角を作図や測定に活用する",
  description: "直径に対する円周角が90°になる性質を、接線の作図や円の直径の見積りに使います。",
  goals: [
    "直径に対する円周角が直角になることを使える。",
    "円周角の性質を具体的な作図・測定に結び付けられる。",
  ],
  concepts: [
    {
      title: "直角を円から作る",
      body: [
        "直径OPに対する円周角∠OQPは90°です。これを利用すると、円の外部の点Pから接点Qを決める作図を考えられます。",
        "円周角の性質は、丸い物体の中心や直径を見積もる場面にも利用できます。",
      ],
      formulas: ["OPが直径 → ∠OQP=90°"],
    },
  ],
  example: {
    title: "例題: 直径から直角を作る",
    problem: "線分OPを直径とする円上にQを取ります。",
    steps: [
      { expression: "中心角=180°", note: "OPは直径です。" },
      { expression: "∠OQP=90°", note: "円周角は中心角の半分です。" },
      { expression: "OQ⊥PQ", note: "直角を利用して接線の位置を考えられます。" },
    ],
  },
  practice: {
    title: "練習: 直角を利用する",
    problem: "直径に対する円周角を使います。",
    steps: [
      {
        prompt: "直径ABに対する円周角∠APBは何度ですか。",
        answers: ["90", "90°"],
        placeholder: "角度",
      },
      {
        prompt: "円の接線と接点を通る半径はどんな位置関係ですか。",
        answers: ["垂直", "垂直です", "直角"],
        placeholder: "位置関係",
      },
    ],
    hint: "接線は接点を通る半径に垂直です。",
  },
  summary: ["直径に対する円周角は90°。", "この直角の性質を作図や測定へ活用できる。"],
};
