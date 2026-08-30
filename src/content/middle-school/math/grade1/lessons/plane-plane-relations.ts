import type { MathLesson } from "../../../../math1/types";

export const planePlaneRelationsLesson: MathLesson = {
  key: "plane-plane-relations",
  title: "平面どうしの位置関係",
  description: "空間にある二つの平面が交わる場合と平行な場合を、交線に着目して捉えます。",
  goals: [
    "二平面が交わる場合、その共通部分が直線になることを説明できる。",
    "交わらない二平面を平行な平面として捉えられる。",
  ],
  concepts: [
    {
      title: "二つの平面の交わりは直線",
      body: [
        "空間の二平面には、交わる場合と交わらない場合があります。交わる二平面の共通部分は一つの直線になり、これを交線として捉えます。",
        "交わらない二平面は平行です。直方体では向かい合う面が平行で、隣り合う面は一つの辺を交線として交わります。",
      ],
    },
  ],
  example: {
    title: "例題: 直方体の二つの面",
    problem: "直方体の上面と下面の位置関係を考えます。",
    steps: [
      { expression: "上面と下面は交わらない", note: "二つの面は共通の点をもちません。" },
      { expression: "上面 ∥ 下面", note: "交わらない向かい合う二平面なので平行です。" },
    ],
  },
  practice: {
    title: "練習: 二平面の交わりを読む",
    problem: "二つの平面P、Qが交わっています。",
    steps: [
      {
        prompt: "PとQの共通部分は何になりますか。",
        answers: ["直線", "1本の直線", "一つの直線"],
        placeholder: "図形",
      },
    ],
    hint: "空間で二つの平面が交わると、その交わりは線になります。",
  },
  summary: ["二平面が交わると、その共通部分は一つの直線になる。", "交わらない二平面は平行である。"],
};
