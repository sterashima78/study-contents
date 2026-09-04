import type { MathLesson } from "../../../../math1/types";

export const quadraticFunctionMeaningLesson: MathLesson = {
  key: "quadratic-function-meaning",
  title: "関数 y=ax² の意味を捉える",
  description: "x²とyの比が一定になる関係を、xの2乗に比例する関数として捉えます。",
  goals: ["y=ax²の意味を説明できる。", "表からy/x²が一定か調べられる。"],
  concepts: [
    {
      title: "yはxの2乗に比例する",
      body: [
        "xの値を決めるとyがただ一つ決まり、y/x²が一定になるとき、yはxの2乗に比例します。",
        "比例定数をaとするとy=ax²と表せます。aは0ではない実数として扱います。",
        "表では x² の行を作って y を x² で割ると、比例とは異なる2乗比例の一定値を確認しやすくなります。",
      ],
      formulas: ["y=ax²", "y/x²=a"],
      table: {
        caption: "y = 2x² の対応表と y/x² の値",
        headers: ["1列目", "2列目", "3列目"],
        rows: [
          { header: "x", cells: ["1", "2", "3"] },
          { header: "y", cells: ["2", "8", "18"] },
          { header: "x²", cells: ["1", "4", "9"] },
          { header: "y/x²", cells: ["2", "2", "2"] },
        ],
      },
    },
  ],
  example: {
    title: "例題: 表から関数を読む",
    problem: "x=1,2,3に対してy=2,8,18とします。",
    steps: [
      { expression: "2/1²=2", note: "x²で割ります。" },
      { expression: "8/2²=2, 18/3²=2", note: "商が一定です。" },
      { expression: "y=2x²", note: "a=2と分かります。" },
    ],
  },
  practice: {
    title: "練習: 2乗比例か確かめる",
    problem: "y/x²を比べます。",
    steps: [
      { prompt: "x=2のときy=12となるy=ax²のaを答えてください。", answers: ["3"], placeholder: "a" },
      { prompt: "y=5x²でx=3のときyを答えてください。", answers: ["45"], placeholder: "y" },
    ],
    hint: "a=y/x²です。",
  },
  summary: ["y=ax²はxの2乗に比例する関数。", "表ではy/x²が一定になる。"],
};
