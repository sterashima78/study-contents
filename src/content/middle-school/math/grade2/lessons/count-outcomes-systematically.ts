import type { MathLesson } from "../../../../math1/types";

export const countOutcomesSystematicallyLesson: MathLesson = {
  key: "count-outcomes-systematically",
  title: "起こり得る場合を漏れなく数える",
  description: "樹形図や表を使って、二段階の試行で起こり得る場合を重複なく整理します。",
  goals: [
    "樹形図や二次元の表を使って起こり得る場合を整理できる。",
    "順序を区別する必要がある場合を漏れなく数えられる。",
  ],
  concepts: [
    {
      title: "漏れと重複を防ぐ",
      body: [
        "確率を正しく求めるには、起こり得る場合を漏れなく、重複なく数える必要があります。二つの操作が続くときは、樹形図や縦横の表を使うと整理しやすくなります。",
        "硬貨を2枚投げると、表表・表裏・裏表・裏裏の4通りです。表裏と裏表は、1枚目と2枚目の結果が違うので別の場合として数えます。",
      ],
    },
  ],
  example: {
    title: "例題: 2枚の硬貨の結果を数える",
    problem: "公平な硬貨A、Bを1回ずつ投げます。",
    steps: [
      { expression: "A表 → B表, B裏", note: "Aが表の枝から2通りあります。" },
      { expression: "A裏 → B表, B裏", note: "Aが裏の枝からも2通りあります。" },
      { expression: "合計4通り", note: "表表、表裏、裏表、裏裏です。" },
    ],
  },
  practice: {
    title: "練習: 場合の数を数える",
    problem: "赤・青・黄の3枚から1枚選び、その後に表・裏のある硬貨を1回投げます。",
    steps: [
      {
        prompt: "起こり得る組合せは全部で何通りですか。",
        answers: ["6", "6通り"],
        placeholder: "通り",
      },
    ],
    hint: "色3通りのそれぞれに、硬貨2通りがあります。",
  },
  summary: [
    "樹形図や表を使うと、場合の漏れや重複を防ぎやすい。",
    "順序を区別する場面では、同じ記号が含まれていても別の場合になることがある。",
  ],
};
