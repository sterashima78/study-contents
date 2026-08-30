import type { MathLesson } from "../../../../math1/types";

export const prismCylinderSurfaceAreaLesson: MathLesson = {
  key: "prism-cylinder-surface-area",
  title: "柱体・円柱の表面積",
  description: "二つの底面と側面に分け、柱体や円柱の表面積を求めます。",
  goals: [
    "柱体の表面積を、二つの底面と側面の面積の和として求められる。",
    "円柱の側面積が底面の円周×高さになることを説明できる。",
  ],
  concepts: [
    {
      title: "表面積は展開図の面積の合計",
      body: [
        "柱体の表面積は、合同な二つの底面と側面を合わせた面積です。展開図にすると、どの面を足せばよいか確認しやすくなります。",
        "円柱では側面を開くと、横が底面の円周2πr、縦が高さhの長方形になるので、側面積は2πrhです。",
      ],
    },
  ],
  example: {
    title: "例題: 円柱の表面積",
    problem: "底面の半径3 cm、高さ5 cmの円柱の表面積を求めます。",
    steps: [
      { expression: "底面2枚: 2 × π × 3² = 18π", note: "上下の円を合わせます。" },
      { expression: "側面: 2π × 3 × 5 = 30π", note: "円周×高さで側面積を求めます。" },
      { expression: "18π + 30π = 48π cm²", note: "底面と側面を合計します。" },
    ],
  },
  practice: {
    title: "練習: 円柱の側面積",
    problem: "底面の半径2 cm、高さ6 cmの円柱があります。",
    steps: [
      {
        prompt: "側面積をπを使って答えてください。",
        answers: ["24π", "24\\pi", "24pi", "24πcm²", "24π cm²"],
        placeholder: "側面積",
      },
    ],
    hint: "側面を開いた長方形の横は底面の円周2πrです。",
  },
  summary: [
    "柱体の表面積は、二つの底面と側面の面積の和である。",
    "円柱の側面積は2πrh、表面積は2πr² + 2πrhで求める。",
  ],
};
