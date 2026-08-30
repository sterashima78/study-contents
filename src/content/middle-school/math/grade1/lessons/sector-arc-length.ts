import type { MathLesson } from "../../../../math1/types";

export const sectorArcLengthLesson: MathLesson = {
  key: "sector-arc-length",
  title: "扇形の弧の長さ",
  description: "中心角が円全体の何分のいくつかに着目し、扇形の弧の長さを求めます。",
  goals: [
    "扇形の弧の長さを、円周と中心角の割合から求められる。",
    "l = 2πr × θ/360 の意味を説明できる。",
  ],
  concepts: [
    {
      title: "弧の長さは円周の一部",
      body: [
        "半径rの円周は2πrです。中心角θ°の扇形は円全体のθ/360に当たるので、弧の長さlは円周にこの割合を掛けます。",
        "したがって l = 2πr × θ/360 です。中心角が180°なら半周、90°なら4分の1周になることからも確認できます。",
      ],
    },
  ],
  example: {
    title: "例題: 90°の扇形の弧の長さ",
    problem: "半径6 cm、中心角90°の扇形の弧の長さを求めます。",
    steps: [
      { expression: "2π × 6 = 12π", note: "半径6 cmの円周です。" },
      { expression: "90 / 360 = 1 / 4", note: "扇形は円全体の4分の1です。" },
      { expression: "12π × 1 / 4 = 3π cm", note: "円周に中心角の割合を掛けます。" },
    ],
  },
  practice: {
    title: "練習: 半円の弧の長さ",
    problem: "半径4 cm、中心角180°の扇形の弧の長さを求めます。",
    steps: [
      {
        prompt: "弧の長さをπを使って答えてください。",
        answers: ["4π", "4\\pi", "4pi", "4πcm", "4π cm"],
        placeholder: "弧の長さ",
      },
    ],
    hint: "180°は360°の2分の1です。",
  },
  summary: [
    "扇形の弧の長さは、円周に中心角の割合を掛けて求める。",
    "l = 2πr × θ/360 を、円周の一部という意味と結び付ける。",
  ],
};
