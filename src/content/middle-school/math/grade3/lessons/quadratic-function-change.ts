import type { MathLesson } from "../../../../math1/types";

export const quadraticFunctionChangeLesson: MathLesson = {
  key: "quadratic-function-change",
  title: "xの倍率とyの倍率の関係を捉える",
  description: "xがm倍になるとyがm²倍になる、2乗比例の対応の特徴を理解します。",
  goals: ["xの倍率からyの倍率を求められる。", "2乗比例の特徴を比例と比較できる。"],
  concepts: [
    {
      title: "xをm倍するとyはm²倍",
      body: [
        "y=ax²でxをmxに置き換えるとy=a(mx)²=m²ax²です。",
        "比例y=axではxをm倍するとyもm倍でしたが、2乗比例では倍率が2乗になります。",
      ],
      formulas: ["x→mx なら y→m²y"],
    },
  ],
  example: {
    title: "例題: xが3倍",
    problem: "y=2x²でxを2から6へ変えます。",
    steps: [
      { expression: "6/2=3", note: "xは3倍です。" },
      { expression: "yは3²=9倍", note: "2乗比例の特徴です。" },
    ],
  },
  practice: {
    title: "練習: 倍率を読む",
    problem: "xの倍率を2乗します。",
    steps: [
      {
        prompt: "y=ax²でxを2倍にするとyは何倍ですか。",
        answers: ["4", "4倍"],
        placeholder: "倍率",
      },
      {
        prompt: "y=ax²でxを1/3倍にするとyは何倍ですか。",
        answers: ["1/9", "9分の1"],
        placeholder: "倍率",
      },
    ],
    hint: "xの倍率mを2乗します。",
  },
  summary: ["xをm倍するとyはm²倍。", "比例とは倍率の変わり方が異なる。"],
};
