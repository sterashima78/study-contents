import type { MathLesson } from "../../../../math1/types";

export const verticalCorrespondingAlternateLesson: MathLesson = {
  key: "vertical-corresponding-alternate",
  title: "対頂角・同位角・錯角を捉える",
  description:
    "2直線と横切る直線がつくる角に着目し、対頂角・同位角・錯角の位置関係と基本的な性質を理解します。",
  goals: [
    "対頂角・同位角・錯角を図から見分けられる。",
    "対頂角が等しいことを使って角の大きさを求められる。",
  ],
  concepts: [
    {
      title: "角は位置関係で名前を付ける",
      body: [
        "2直線が交わるとき、向かい合う角を対頂角といい、対頂角は等しくなります。",
        "2直線を1本の直線が横切るとき、同じ位置にある角を同位角、2直線の内側で横切る直線の反対側にある角を錯角といいます。",
      ],
      formulas: ["対頂角は等しい"],
    },
  ],
  example: {
    title: "例題: 対頂角から角度を求める",
    problem: "交わる2直線で、一つの角が62°です。向かい合う角を求めます。",
    steps: [
      { expression: "62°", note: "分かっている角の大きさを確認します。" },
      { expression: "対頂角は等しい", note: "向かい合う角は対頂角です。" },
      { expression: "62°", note: "したがって、向かい合う角も62°です。" },
    ],
  },
  practice: {
    title: "練習: 対頂角を使う",
    problem: "交わる2直線で、一つの角が118°です。向かい合う角を求めます。",
    steps: [
      {
        prompt: "向かい合う角の大きさを答えてください。",
        answers: ["118", "118°", "118度"],
        placeholder: "角度",
      },
    ],
    hint: "向かい合う角は対頂角です。",
  },
  summary: [
    "対頂角は向かい合う角で、必ず等しい。",
    "同位角・錯角は、2直線を別の1直線が横切るときの位置関係を表す。",
  ],
};
