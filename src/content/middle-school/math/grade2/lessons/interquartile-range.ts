import type { MathLesson } from "../../../../math1/types";

export const interquartileRangeLesson: MathLesson = {
  key: "interquartile-range",
  title: "四分位範囲で散らばりを捉える",
  description: "第1四分位数と第3四分位数の差から、中央付近のデータの散らばりを捉えます。",
  goals: [
    "四分位範囲の意味と求め方を説明できる。",
    "範囲と四分位範囲の違いを、極端な値の影響と結び付けて説明できる。",
  ],
  concepts: [
    {
      title: "中央のおよそ半分の広がりを見る",
      body: [
        "四分位範囲は第3四分位数から第1四分位数を引いた値です。Q1からQ3の間には、データの中央付近のおよそ半分が含まれます。",
        "最大値と最小値で決まる範囲に比べ、四分位範囲は極端に大きい値や小さい値の影響を受けにくく、複数の分布の散らばりを比べるときに役立ちます。",
      ],
      formulas: ["四分位範囲 = Q3 − Q1"],
    },
  ],
  example: {
    title: "例題: 四分位範囲を求める",
    problem: "Q1=12、Q3=20のデータについて考えます。",
    steps: [
      { expression: "20 − 12 = 8", note: "四分位範囲は8です。" },
      { expression: "Q1〜Q3", note: "中央付近のおよそ半分のデータがこの幅に入ります。" },
    ],
  },
  practice: {
    title: "練習: 散らばりを比較する",
    problem: "A組はQ1=15、Q3=23、B組はQ1=13、Q3=25です。",
    steps: [
      { prompt: "A組の四分位範囲を答えてください。", answers: ["8"], placeholder: "四分位範囲" },
      {
        prompt: "四分位範囲が大きいのはA組とB組のどちらですか。",
        answers: ["B", "B組", "b", "b組"],
        placeholder: "組",
      },
    ],
    hint: "それぞれQ3−Q1を計算します。",
  },
  summary: [
    "四分位範囲はQ3−Q1で求める。",
    "四分位範囲は極端な値の影響を受けにくい散らばりの指標である。",
  ],
};
