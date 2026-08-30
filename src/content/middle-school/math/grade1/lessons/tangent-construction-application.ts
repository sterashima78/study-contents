import type { MathLesson } from "../../../../math1/types";

export const tangentConstructionApplicationLesson: MathLesson = {
  key: "tangent-construction-application",
  title: "作図を円の接線に活用する",
  description: "円の接線と接点を通る半径の垂直関係を使い、垂線の作図を具体的な場面へ活用します。",
  goals: [
    "円の接線が接点を通る半径に垂直であることを説明できる。",
    "接点で半径への垂線を作図することで接線を引けることを理解できる。",
  ],
  concepts: [
    {
      title: "接線は接点の半径に垂直",
      body: [
        "円に一点Tだけで接する直線を、その円の接線といいます。接点Tと円の中心Oを結ぶ半径OTは、接線に垂直です。",
        "したがって、円周上の点Tで接線を引きたいときは、まず半径OTを引き、Tを通るOTへの垂線を作図すればよいことになります。",
      ],
    },
  ],
  example: {
    title: "例題: 円周上の点Tで接線を引く",
    problem: "中心Oの円の円周上に点Tがあります。Tでの接線lを作図します。",
    steps: [
      { expression: "半径OTを引く", note: "接点Tと中心Oを結びます。" },
      { expression: "Tを通るOTへの垂線を作図する", note: "前に学んだ垂線の作図を使います。" },
      { expression: "OT ⟂ l", note: "できた直線lがTでの接線です。" },
    ],
  },
  practice: {
    title: "練習: 接線と半径の角度",
    problem: "円の接点Tにおける接線lと、接点を通る半径OTについて考えます。",
    steps: [
      {
        prompt: "OTとlのなす角を答えてください。",
        answers: ["90", "90°", "90度"],
        placeholder: "角度",
      },
      { prompt: "OTとlの関係を表す記号を答えてください。", answers: ["⊥"], placeholder: "記号" },
    ],
    hint: "接線は接点を通る半径に垂直です。",
  },
  summary: [
    "円の接線は、接点を通る半径に垂直である。",
    "接点で半径への垂線を作図すれば、その点での接線をつくれる。",
  ],
};
