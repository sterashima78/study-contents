import type { MathLesson } from "../../../../math1/types";

export const triangleCongruenceConditionsLesson: MathLesson = {
  key: "triangle-congruence-conditions",
  title: "三角形の合同条件を使う",
  description:
    "3組の辺、2組の辺とその間の角、1組の辺とその両端の角という三角形の合同条件を使って合同を判断します。",
  goals: [
    "三角形の3つの合同条件を区別できる。",
    "与えられた等しい辺・角から使える合同条件を選べる。",
  ],
  concepts: [
    {
      title: "合同を決める3条件",
      body: [
        "三角形は、対応する3組の辺がそれぞれ等しいとき合同です。",
        "また、対応する2組の辺とその間の角がそれぞれ等しい場合、または対応する1組の辺とその両端の角がそれぞれ等しい場合にも合同です。",
      ],
      formulas: ["3辺", "2辺とその間の角", "1辺とその両端の角"],
    },
  ],
  example: {
    title: "例題: 使う合同条件を選ぶ",
    problem: "△ABCと△DEFで、AB=DE、BC=EF、∠B=∠Eです。",
    steps: [
      { expression: "AB = DE, BC = EF", note: "2組の辺が等しいです。" },
      { expression: "∠B = ∠E", note: "その角は等しい2辺の間の角です。" },
      { expression: "2組の辺とその間の角", note: "この合同条件を使えます。" },
    ],
  },
  practice: {
    title: "練習: 合同条件を答える",
    problem: "二つの三角形で、対応する3組の辺がすべて等しいことが分かっています。",
    steps: [
      { prompt: "使う合同条件を答えてください。", answers: ["3組の辺", "三辺", "3辺"], placeholder: "合同条件" },
    ],
    hint: "等しいと分かっている要素をそのまま合同条件に対応させます。",
  },
  summary: [
    "三角形の合同条件は3種類ある。",
    "等しいと分かっている辺・角が、どの合同条件に対応するかを確認する。",
  ],
};
