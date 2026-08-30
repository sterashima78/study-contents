import type { MathLesson } from "../../../../math1/types";

export const perpendicularConstructionLesson: MathLesson = {
  key: "perpendicular-construction",
  title: "垂線を作図する",
  description: "直線上または直線外の点を通り、もとの直線と90°で交わる直線を対称性を使って作図します。",
  goals: [
    "与えられた点を通る垂線を定規とコンパスで作図する考え方を説明できる。",
    "垂線がもとの直線と90°で交わることを確認できる。",
  ],
  concepts: [
    {
      title: "垂線も垂直二等分線と同じ考え方",
      body: [
        "与えられた点Pから直線l上に等距離の二点A、Bをつくります。次にA、Bを中心とする同じ半径の円弧をかき、もう一つの交点Qをつくります。",
        "PとQを結ぶ直線はA、Bから等距離の点を通るので、ABの垂直二等分線です。ABは直線l上にあるため、PQはlに垂直です。",
      ],
    },
  ],
  example: {
    title: "例題: 点Pを通る直線lへの垂線",
    problem: "点Pを通り、直線lと交わる直線mを作図したところ、mはlの垂線になりました。",
    steps: [
      { expression: "PA = PB", note: "Pから直線l上のA、Bまでの距離を等しく取ります。" },
      { expression: "QA = QB", note: "A、Bを中心とする同じ半径の円弧でQをつくります。" },
      { expression: "m ⟂ l", note: "P、QはともにA、Bから等距離なので、PQはABの垂直二等分線です。" },
    ],
  },
  practice: {
    title: "練習: 垂線の性質を確認する",
    problem: "直線mは点Pを通る直線lの垂線です。",
    steps: [
      { prompt: "mとlのなす角を答えてください。", answers: ["90", "90°", "90度"], placeholder: "角度" },
      { prompt: "mとlの関係を表す記号を答えてください。", answers: ["⊥"], placeholder: "記号" },
    ],
    hint: "垂直な二直線がつくる角は90°です。",
  },
  summary: [
    "垂線の作図は、等距離の点をつくることで垂直二等分線へ帰着できる。",
    "垂線はもとの直線と90°で交わる。",
  ],
};
