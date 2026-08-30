import type { MathLesson } from "../../../../math1/types";

export const coordinatesLesson: MathLesson = {
  key: "coordinates",
  title: "座標の意味と読み取り",
  description: "座標軸を使って点の位置を (x, y) の組で表し、グラフを読む準備をします。",
  goals: [
    "点の x 座標と y 座標を正しい順序で読める。",
    "与えられた座標の点を座標平面上で捉えられる。",
  ],
  concepts: [
    {
      title: "座標は x、y の順に書く",
      body: [
        "横の数直線を x 軸、縦の数直線を y 軸といい、その交点を原点 O といいます。",
        "点の位置は、x 軸方向の値を先、y 軸方向の値を後にして (x, y) と表します。",
      ],
      formulas: ["点 P の座標: P(x, y)"],
    },
  ],
  example: {
    title: "例題: 点 P(−2, 3) の位置を読む",
    problem: "点 P の座標が (−2, 3) のとき、x 座標と y 座標を確認します。",
    steps: [
      {
        expression: "x 座標 = −2",
        note: "最初の数は横方向の位置を表します。",
      },
      {
        expression: "y 座標 = 3",
        note: "二つ目の数は縦方向の位置を表します。",
      },
      {
        expression: "原点から左へ2、上へ3",
        note: "符号と軸の向きを対応させると位置を確認できます。",
      },
    ],
  },
  practice: {
    title: "練習: 座標を読み分ける",
    problem: "点 Q の座標は (3, −4) です。",
    steps: [
      {
        prompt: "Q の x 座標を答えてください。",
        answers: ["3", "+3"],
        placeholder: "x座標",
      },
      {
        prompt: "Q の y 座標を答えてください。",
        answers: ["-4", "−4"],
        placeholder: "y座標",
      },
    ],
    hint: "座標は必ず (x, y) の順です。",
  },
  summary: [
    "横軸が x 軸、縦軸が y 軸で、交点が原点 O。",
    "点の座標は (x, y) の順に表し、符号から原点に対する位置を読む。",
  ],
};
