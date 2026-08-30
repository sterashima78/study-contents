import type { MathLesson } from "../../../../math1/types";

export const spatialLineRelationsLesson: MathLesson = {
  key: "spatial-line-relations",
  title: "空間の直線どうしの位置関係",
  description: "空間にある二直線を、交わる・平行・ねじれの位置の3つに分けて捉えます。",
  goals: [
    "空間の二直線の位置関係を、交わる・平行・ねじれの位置に分類できる。",
    "ねじれの位置が、交わらず平行でもない二直線の関係だと説明できる。",
  ],
  concepts: [
    {
      title: "空間では『交わらず平行でもない』関係がある",
      body: [
        "平面上の二直線は、交わるか平行かのどちらかです。空間では、交わらず、平行でもない二直線があり、この関係をねじれの位置といいます。",
        "直方体の辺を使うと、同じ面にあるかだけでなく、二直線を含む一つの平面を考えられるかに注目して分類できます。",
      ],
    },
  ],
  example: {
    title: "例題: 直方体の辺の位置関係を分類する",
    problem: "直方体ABCD-EFGHで、辺ABと辺CGの位置関係を考えます。",
    steps: [
      { expression: "ABとCGは交わらない", note: "二つの辺は共通の点をもちません。" },
      { expression: "ABとCGは平行ではない", note: "二つの辺の向きは異なります。" },
      { expression: "ABとCGはねじれの位置", note: "交わらず平行でもないので、ねじれの位置です。" },
    ],
  },
  practice: {
    title: "練習: 位置関係を言葉で答える",
    problem: "空間にある二直線l、mは交わらず、平行でもありません。",
    steps: [
      { prompt: "lとmの位置関係を答えてください。", answers: ["ねじれの位置", "ねじれ"], placeholder: "位置関係" },
    ],
    hint: "空間では、交わらず平行でもない二直線があります。",
  },
  summary: [
    "空間の二直線には、交わる・平行・ねじれの位置がある。",
    "ねじれの位置は、交わらず平行でもない二直線の関係である。",
  ],
};
