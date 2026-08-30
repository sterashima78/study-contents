import type { MathLesson } from "../../../../math1/types";

export const sectorAreaLesson: MathLesson = {
  key: "sector-area",
  title: "扇形の面積",
  description: "中心角が円全体の何分のいくつかに着目し、扇形の面積を求めます。",
  goals: [
    "扇形の面積を、円の面積と中心角の割合から求められる。",
    "S = πr² × θ/360 の意味を説明できる。",
  ],
  concepts: [
    {
      title: "扇形の面積は円の面積の一部",
      body: [
        "半径rの円の面積はπr²です。中心角θ°の扇形は円全体のθ/360に当たるので、扇形の面積Sは円の面積にこの割合を掛けます。",
        "したがって S = πr² × θ/360 です。弧の長さと同じ割合を使いますが、もとになる量は円周ではなく円の面積です。",
      ],
    },
  ],
  example: {
    title: "例題: 120°の扇形の面積",
    problem: "半径6 cm、中心角120°の扇形の面積を求めます。",
    steps: [
      { expression: "π × 6² = 36π", note: "半径6 cmの円の面積です。" },
      { expression: "120 / 360 = 1 / 3", note: "扇形は円全体の3分の1です。" },
      { expression: "36π × 1 / 3 = 12π cm²", note: "円の面積に中心角の割合を掛けます。" },
    ],
  },
  practice: {
    title: "練習: 4分の1円の面積",
    problem: "半径4 cm、中心角90°の扇形の面積を求めます。",
    steps: [
      {
        prompt: "面積をπを使って答えてください。",
        answers: ["4π", "4\\pi", "4pi", "4πcm²", "4π cm²"],
        placeholder: "面積",
      },
    ],
    hint: "90°は360°の4分の1です。",
  },
  summary: [
    "扇形の面積は、円の面積に中心角の割合を掛けて求める。",
    "S = πr² × θ/360 を、円の一部という意味と結び付ける。",
  ],
};
