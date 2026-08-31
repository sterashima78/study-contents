import type { MathLesson } from "../../../../math1/types";

export const polygonAnglePropertiesLesson: MathLesson = {
  key: "polygon-angle-properties",
  title: "多角形の内角・外角を求める",
  description:
    "n角形を三角形に分けて内角の和を一般化し、多角形の外角の和が360°になることを理解します。",
  goals: [
    "n角形の内角の和を (n−2)×180° で求められる。",
    "多角形の外角の和が360°であることを使える。",
  ],
  concepts: [
    {
      title: "三角形への分割から一般化する",
      body: [
        "一つの頂点から対角線を引くと、n角形は(n−2)個の三角形に分けられます。したがって内角の和は(n−2)×180°です。",
        "各頂点で内角と一つの外角の和は180°です。全頂点について考えると、外角の和は常に360°になります。",
      ],
      formulas: ["n角形の内角の和 = (n − 2) × 180°", "多角形の外角の和 = 360°"],
    },
  ],
  example: {
    title: "例題: 八角形の内角の和",
    problem: "八角形の内角の和を求めます。",
    steps: [
      { expression: "n = 8", note: "八角形なのでn=8です。" },
      { expression: "(8 − 2) × 180", note: "三角形6個分として考えます。" },
      { expression: "1080°", note: "八角形の内角の和は1080°です。" },
    ],
  },
  practice: {
    title: "練習: 十角形の内角の和",
    problem: "十角形の内角の和を求めます。",
    steps: [
      {
        prompt: "内角の和を答えてください。",
        answers: ["1440", "1440°", "1440度"],
        placeholder: "角度",
      },
      {
        prompt: "十角形の外角の和を答えてください。",
        answers: ["360", "360°", "360度"],
        placeholder: "角度",
      },
    ],
    hint: "内角は(n−2)×180°、外角の和は多角形によらず360°です。",
  },
  summary: [
    "n角形の内角の和は(n−2)×180°で求める。",
    "多角形の外角の和は、辺の数によらず360°である。",
  ],
};
