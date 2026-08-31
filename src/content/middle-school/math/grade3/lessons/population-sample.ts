import type { MathLesson } from "../../../../math1/types";

export const populationSampleLesson: MathLesson = {
  key: "population-sample",
  title: "母集団と標本を区別する",
  description: "調べたい対象全体を母集団、実際に取り出して調べる一部を標本として整理します。",
  goals: ["母集団と標本の意味を説明できる。", "具体的な調査で母集団と標本を特定できる。"],
  concepts: [
    {
      title: "推定したい全体と、調べる一部",
      body: ["母集団は結論を出したい対象全体、標本はそこから取り出して実際に調べる一部です。", "標本の特徴から母集団の特徴を推定するため、標本が母集団を適切に代表していることが重要です。"],
      formulas: ["母集団 → 標本を抽出 → 標本を調べる → 母集団を推定"],
    },
  ],
  example: {
    title: "例題: 10000個の製品から100個検査",
    problem: "製品の不良率を推定します。",
    steps: [
      { expression: "母集団=10000個の製品", note: "推定したい全体です。" },
      { expression: "標本=抽出した100個", note: "実際に調べる一部です。" },
    ],
  },
  practice: {
    title: "練習: 用語を対応させる",
    problem: "全体と一部を区別します。",
    steps: [
      { prompt: "全校生徒の傾向を調べるとき、全校生徒全体を何と呼びますか。", answers: ["母集団"], placeholder: "用語" },
      { prompt: "全校生徒から無作為に選んだ80人を何と呼びますか。", answers: ["標本"], placeholder: "用語" },
    ],
    hint: "結論を出したい全体が母集団です。",
  },
  summary: ["母集団は調べたい対象全体。", "標本は母集団から取り出して実際に調べる一部。"],
};
