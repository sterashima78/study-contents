import type { MathLesson } from "../../../../math1/types";

export const sampleCountEstimateLesson: MathLesson = {
  key: "sample-count-estimate",
  title: "標本の割合から母集団の個数を推定する",
  description: "母集団の大きさに標本の割合を掛け、該当する個数を見積もります。",
  goals: ["母集団の大きさと推定割合から個数を求められる。", "結果を概数として適切に解釈できる。"],
  concepts: [
    {
      title: "割合×全体で個数を見積もる",
      body: ["標本から母集団の割合をpと推定したら、母集団の大きさNにpを掛けて該当数を見積もれます。", "標本調査からの値なので、必要以上に細かい桁まで確定値のように扱わないことが大切です。"],
      formulas: ["推定個数≈母集団の大きさ×標本割合"],
    },
  ],
  example: {
    title: "例題: 5000個のうち不良品を推定",
    problem: "標本の不良率が2%でした。",
    steps: [
      { expression: "5000×0.02", note: "全体に推定割合を掛けます。" },
      { expression: "≈100個", note: "推定値として解釈します。" },
    ],
  },
  practice: {
    title: "練習: 推定個数を求める",
    problem: "割合を小数へ直します。",
    steps: [
      { prompt: "母集団2000個、推定割合15%のとき該当数をおよそ何個と推定しますか。", answers: ["300", "300個"], placeholder: "個数" },
      { prompt: "母集団800人、推定割合0.25のとき該当人数をおよそ何人と推定しますか。", answers: ["200", "200人"], placeholder: "人数" },
    ],
    hint: "母集団の大きさ×割合です。",
  },
  summary: ["推定個数は母集団の大きさ×推定割合。", "標本から求めた値なので概数として扱う。"],
};
