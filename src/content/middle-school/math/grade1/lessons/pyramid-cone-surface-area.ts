import type { MathLesson } from "../../../../math1/types";

export const pyramidConeSurfaceAreaLesson: MathLesson = {
  key: "pyramid-cone-surface-area",
  title: "錐体・円錐の表面積",
  description: "底面と側面を分け、錐体や円錐の表面積を展開図から求めます。",
  goals: [
    "錐体の表面積を、底面と側面の面積の和として求められる。",
    "円錐の側面が扇形になることを使って表面積を求められる。",
  ],
  concepts: [
    {
      title: "錐体も展開図にして面を足す",
      body: [
        "錐体の表面積は、底面と全ての側面の面積を足して求めます。角錐では側面の三角形を、円錐では底面の円と側面の扇形を考えます。",
        "円錐の底面半径をr、母線をlとすると側面積はπrlです。底面積πr²と合わせると表面積はπr² + πrlになります。",
      ],
    },
  ],
  example: {
    title: "例題: 円錐の表面積",
    problem: "底面の半径3 cm、母線5 cmの円錐の表面積を求めます。",
    steps: [
      { expression: "底面: π × 3² = 9π", note: "底面は半径3 cmの円です。" },
      { expression: "側面: π × 3 × 5 = 15π", note: "円錐の側面積はπrlです。" },
      { expression: "9π + 15π = 24π cm²", note: "底面と側面を合計します。" },
    ],
  },
  practice: {
    title: "練習: 円錐の側面積",
    problem: "底面の半径2 cm、母線6 cmの円錐があります。",
    steps: [
      {
        prompt: "側面積をπを使って答えてください。",
        answers: ["12π", "12\\pi", "12pi", "12πcm²", "12π cm²"],
        placeholder: "側面積",
      },
    ],
    hint: "円錐の側面積はπ×底面の半径×母線です。",
  },
  summary: [
    "錐体の表面積は、底面と側面の面積を全て足して求める。",
    "円錐では側面積πrlと底面積πr²を区別する。",
  ],
};
