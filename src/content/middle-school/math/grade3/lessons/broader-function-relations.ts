import type { MathLesson } from "../../../../math1/types";

export const broaderFunctionRelationsLesson: MathLesson = {
  key: "broader-function-relations",
  title: "式で表しにくい関数関係も捉える",
  description: "比例・一次関数・y=ax²以外でも、一方を決めると他方がただ一つ決まる関係を関数として捉えます。",
  goals: ["関数の意味を式の形に限定せず説明できる。", "段階的な料金などを表やグラフで考察できる。"],
  concepts: [
    {
      title: "関数は式の種類ではなく対応の考え",
      body: ["料金表のように一つの簡単な式で表しにくい関係でも、入力を一つ決めれば出力がただ一つ決まるなら関数です。", "表やグラフを使えば、式が複雑でも変化や対応の特徴を調べられます。"],
      formulas: ["xを一つ決める → yがただ一つ決まる = 関数"],
    },
  ],
  example: {
    title: "例題: 段階的な送料",
    problem: "重さに応じて送料が100gごとに段階的に変わるとします。",
    steps: [
      { expression: "重さxを決める", note: "入力を一つ決めます。" },
      { expression: "送料yが一つ決まる", note: "簡単な一次式でなくても関数です。" },
      { expression: "表・階段状グラフで表す", note: "適切な表現を選びます。" },
    ],
  },
  practice: {
    title: "練習: 関数か判断する",
    problem: "入力1つに出力が1つかを見ます。",
    steps: [
      { prompt: "時刻を一つ決めると、その時刻の気温が一つ決まる関係は関数とみなせますか。", answers: ["はい", "関数", "関数です"], placeholder: "はい/いいえ" },
      { prompt: "一つのxに異なる2つのyが対応する関係は関数ですか。", answers: ["いいえ", "関数ではない", "関数ではありません"], placeholder: "はい/いいえ" },
    ],
    hint: "xを一つ決めたときyがただ一つ決まるか確認します。",
  },
  summary: ["関数の概念は特定の式に限定されない。", "式で表しにくい関係も表やグラフで考察できる。"],
};
