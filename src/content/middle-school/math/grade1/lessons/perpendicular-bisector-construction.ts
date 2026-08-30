import type { MathLesson } from "../../../../math1/types";

export const perpendicularBisectorConstructionLesson: MathLesson = {
  key: "perpendicular-bisector-construction",
  title: "線分の垂直二等分線を作図する",
  description:
    "線分の両端から等距離にある点を二つつくり、その二点を結んで垂直二等分線を作図します。",
  goals: [
    "線分の垂直二等分線を定規とコンパスで作図できる。",
    "垂直二等分線上の点が線分の両端から等距離にあることを説明できる。",
  ],
  concepts: [
    {
      title: "両端から等距離の点を結ぶ",
      body: [
        "線分ABの両端A、Bを中心として、ABの半分より大きい同じ半径の円弧をかきます。二つの交点をP、Qとします。",
        "AP=BP、AQ=BQなので、PとQはいずれもA、Bから等距離です。直線PQはABの中点を通り、ABに垂直になります。",
      ],
    },
  ],
  example: {
    title: "例題: ABの垂直二等分線上の点P",
    problem: "点Pは線分ABの垂直二等分線上にあり、PA = 7 cmです。",
    steps: [
      { expression: "PA = PB", note: "垂直二等分線上の点は、線分の両端A、Bから等距離です。" },
      { expression: "PB = 7 cm", note: "PAが7 cmなので、PBも7 cmです。" },
    ],
  },
  practice: {
    title: "練習: 等距離の性質を使う",
    problem: "点Qは線分CDの垂直二等分線上にあり、QC = 9 cmです。",
    steps: [
      { prompt: "QDの長さを答えてください。", answers: ["9", "9cm", "9 cm"], placeholder: "長さ" },
      {
        prompt: "垂直二等分線とCDのなす角を答えてください。",
        answers: ["90", "90°", "90度"],
        placeholder: "角度",
      },
    ],
    hint: "垂直二等分線は線分を垂直に二等分します。",
  },
  summary: [
    "線分の両端を中心とする同じ半径の円弧の交点を二つ取り、その二点を結ぶ。",
    "垂直二等分線上の点は、線分の両端から等距離にある。",
  ],
};
