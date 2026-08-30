import type { MathLesson } from "../../../../math1/types";

export const angleBisectorConstructionLesson: MathLesson = {
  key: "angle-bisector-construction",
  title: "角の二等分線を作図する",
  description: "角の線対称性を使い、二つの辺から等しい位置にある点をつくって角を二等分します。",
  goals: [
    "角の二等分線を定規とコンパスで作図する手順を説明できる。",
    "作図で得られた半直線が角を二等分する理由を線対称性から説明できる。",
  ],
  concepts: [
    {
      title: "角の対称軸をつくる",
      body: [
        "まず頂点Oを中心とする円弧をかき、角の二つの辺との交点をA、Bとします。これでOA=OBになります。",
        "次にA、Bを中心とする同じ半径の円弧をかき、その交点Pを取ります。AP=BPなので、OとPを結ぶ半直線は角の対称軸になります。",
      ],
    },
  ],
  example: {
    title: "例題: 80°の角を二等分する",
    problem: "∠XOY = 80°の二等分線OPを作図しました。",
    steps: [
      { expression: "OA = OB", note: "Oを中心とする同じ円弧で、二つの辺上にA、Bを取ります。" },
      { expression: "AP = BP", note: "A、Bを中心とする同じ半径の円弧の交点をPとします。" },
      {
        expression: "∠XOP = ∠POY = 40°",
        note: "OPは角の対称軸なので、80°を二つの等しい角に分けます。",
      },
    ],
  },
  practice: {
    title: "練習: 二等分後の角を求める",
    problem: "∠AOB = 66°の角の二等分線OPを作図しました。",
    steps: [
      {
        prompt: "∠AOPの大きさを答えてください。",
        answers: ["33", "33°", "33度"],
        placeholder: "角度",
      },
      {
        prompt: "∠POBの大きさを答えてください。",
        answers: ["33", "33°", "33度"],
        placeholder: "角度",
      },
    ],
    hint: "二等分線は一つの角を等しい二つの角に分けます。",
  },
  summary: [
    "角の二等分線は、角の二辺に対する線対称性を使って作図できる。",
    "同じ半径の円弧を使って等距離の点をつくることが作図の根拠になる。",
  ],
};
