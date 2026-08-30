import type { MathLesson } from "../../../../math1/types";

export const linePlaneRelationsLesson: MathLesson = {
  key: "line-plane-relations",
  title: "直線と平面の位置関係",
  description: "空間にある直線と平面を、含まれる・交わる・平行の関係に分け、垂直の意味を確認します。",
  goals: [
    "直線と平面の位置関係を、含まれる・交わる・平行に分類できる。",
    "直線が平面に垂直であるための考え方を説明できる。",
  ],
  concepts: [
    {
      title: "直線と平面が交わる特別な場合が垂直",
      body: [
        "直線lと平面Pには、lがPに含まれる場合、一点で交わる場合、交わらず平行な場合があります。",
        "lがPに垂直とは、交点を通る平面P上の全ての直線にlが垂直になることです。実際には、交点で交わる平面上の二直線への垂直を使って確認できます。",
      ],
    },
  ],
  example: {
    title: "例題: 平面に垂直な直線",
    problem: "直線lは平面Pと点Oで交わり、P上でOを通る交わる二直線m、nの両方に垂直です。",
    steps: [
      { expression: "l ⟂ m", note: "lは平面P上の直線mに垂直です。" },
      { expression: "l ⟂ n", note: "lはmと交わる別の直線nにも垂直です。" },
      { expression: "l ⟂ P", note: "このときlは平面Pに垂直であると判断できます。" },
    ],
  },
  practice: {
    title: "練習: 垂直な直線と平面",
    problem: "直線lは平面Pに垂直です。lとPのなす角を考えます。",
    steps: [
      { prompt: "lとPのなす角を答えてください。", answers: ["90", "90°", "90度"], placeholder: "角度" },
    ],
    hint: "直線が平面に垂直なら、その交わり方は直角です。",
  },
  summary: [
    "直線と平面には、含まれる・交わる・平行という位置関係がある。",
    "平面に垂直な直線は、交点を通る平面上の方向に対して傾いていない。",
  ],
};
