import type { MathLesson } from "../../../../math1/types";

export const pyramidConeVolumeLesson: MathLesson = {
  key: "pyramid-cone-volume",
  title: "錐体・円錐の体積",
  description: "同じ底面積・高さの柱体との関係から、錐体や円錐の体積を求めます。",
  goals: [
    "錐体の体積が底面積×高さ÷3になることを使える。",
    "円錐の体積を(1/3)πr²hで求められる。",
  ],
  concepts: [
    {
      title: "錐体の体積は対応する柱体の3分の1",
      body: [
        "錐体の体積は、同じ底面積と高さをもつ柱体の体積の3分の1です。したがって、底面積をS、高さをhとするとV = Sh/3です。",
        "円錐では底面積がπr²なので、V = πr²h/3になります。表面積で使う母線ではなく、底面に垂直な高さを使います。",
      ],
    },
  ],
  example: {
    title: "例題: 円錐の体積",
    problem: "底面の半径3 cm、高さ4 cmの円錐の体積を求めます。",
    steps: [
      { expression: "底面積: π × 3² = 9π", note: "底面は半径3 cmの円です。" },
      { expression: "9π × 4 = 36π", note: "対応する円柱の体積を考えます。" },
      { expression: "36π ÷ 3 = 12π cm³", note: "円錐は同じ底面積・高さの円柱の3分の1です。" },
    ],
  },
  practice: {
    title: "練習: 三角錐の体積",
    problem: "底面積18 cm²、高さ5 cmの錐体があります。",
    steps: [
      {
        prompt: "体積を答えてください。",
        answers: ["30", "30cm³", "30 cm³"],
        placeholder: "体積",
      },
    ],
    hint: "底面積×高さを3で割ります。",
  },
  summary: [
    "錐体の体積はV = Sh/3で求める。",
    "円錐ではV = πr²h/3となり、底面に垂直な高さを使う。",
  ],
};
