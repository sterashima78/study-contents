import type { MathLesson } from "../../../../math1/types";

export const triangleSimilarityConditionsLesson: MathLesson = {
  key: "triangle-similarity-conditions",
  title: "三角形の相似条件を使う",
  description: "三つの相似条件を合同条件と比較し、必要な情報から相似を判断します。",
  goals: ["三角形の3つの相似条件を説明できる。", "与えられた辺・角から適切な相似条件を選べる。"],
  concepts: [
    {
      title: "三角形を決める三つの条件",
      body: [
        "対応する3組の辺の比、2組の辺の比とその間の角、2組の角のいずれかがそろえば二つの三角形は相似です。",
        "合同条件では辺の長さが等しいことを使いましたが、相似条件では辺の比を使います。",
      ],
      formulas: ["3組の辺の比", "2組の辺の比とその間の角", "2組の角"],
    },
  ],
  example: {
    title: "例題: 2組の角で相似を示す",
    problem: "二つの三角形で∠A=∠D、∠B=∠Eとします。",
    steps: [
      { expression: "∠A=∠D", note: "1組目の角です。" },
      { expression: "∠B=∠E", note: "2組目の角です。" },
      { expression: "△ABC∽△DEF", note: "2組の角がそれぞれ等しい相似条件を使います。" },
    ],
  },
  practice: {
    title: "練習: 条件を選ぶ",
    problem: "どの情報がそろっているか確認します。",
    steps: [
      {
        prompt: "対応する2組の角がそれぞれ等しいとき使う相似条件を答えてください。",
        answers: ["2組の角", "二組の角", "2組の角がそれぞれ等しい"],
        placeholder: "条件",
      },
      {
        prompt: "3辺が3,4,5と6,8,10の三角形は相似ですか。",
        answers: ["はい", "相似", "相似です"],
        placeholder: "はい/いいえ",
      },
    ],
    hint: "長さそのものではなく、対応する辺の比を比べます。",
  },
  summary: ["相似条件は辺の比と角に着目する。", "合同条件との違いを意識すると整理しやすい。"],
};
