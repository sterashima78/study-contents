import type { MathLesson } from "../../../../math1/types";

export const prismCylinderVolumeLesson: MathLesson = {
  key: "prism-cylinder-volume",
  title: "柱体・円柱の体積",
  description: "底面積と高さに着目し、柱体や円柱の体積を求めます。",
  goals: ["柱体の体積を底面積×高さで求められる。", "円柱の体積をπr²hで求められる。"],
  concepts: [
    {
      title: "柱体の体積は底面積×高さ",
      body: [
        "柱体は同じ形・同じ大きさの断面が高さ方向に積み重なった立体と考えられます。そのため、体積は底面積×高さで求めます。",
        "円柱も同じ考え方で、底面積がπr²なので体積Vはπr²hです。高さは底面どうしの垂直な距離を使います。",
      ],
    },
  ],
  example: {
    title: "例題: 円柱の体積",
    problem: "底面の半径3 cm、高さ4 cmの円柱の体積を求めます。",
    steps: [
      { expression: "底面積: π × 3² = 9π", note: "底面は半径3 cmの円です。" },
      { expression: "9π × 4 = 36π cm³", note: "底面積に高さ4 cmを掛けます。" },
    ],
  },
  practice: {
    title: "練習: 円柱の体積",
    problem: "底面の半径2 cm、高さ5 cmの円柱があります。",
    steps: [
      {
        prompt: "体積をπを使って答えてください。",
        answers: ["20π", "20\\pi", "20pi", "20πcm³", "20π cm³"],
        placeholder: "体積",
      },
    ],
    hint: "底面積πr²に高さを掛けます。",
  },
  summary: ["柱体の体積は底面積×高さで求める。", "円柱の体積はV = πr²hで求める。"],
};
