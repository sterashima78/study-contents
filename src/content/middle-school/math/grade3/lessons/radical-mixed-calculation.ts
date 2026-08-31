import type { MathLesson } from "../../../../math1/types";

export const radicalMixedCalculationLesson: MathLesson = {
  key: "radical-mixed-calculation",
  title: "平方根の計算を組み合わせる",
  description: "分配法則や計算の順序を既習事項と結び付け、平方根を含む簡単な四則計算を処理します。",
  goals: [
    "平方根を含む式でも分配法則や計算の順序を使える。",
    "途中で根号を簡単にし、同じ根号の項をまとめられる。",
  ],
  concepts: [
    {
      title: "計算の法則はそのまま使える",
      body: [
        "平方根を含む数でも、交換法則、結合法則、分配法則はこれまでと同じように使えます。",
        "乗除を先に行い、根号を簡単にし、最後に同じ根号の項をまとめると見通しよく計算できます。",
      ],
      formulas: ["√2(√8+3) = √16+3√2 = 4+3√2"],
    },
  ],
  example: {
    title: "例題: √3(√12−√3)を計算する",
    problem: "分配法則を使って展開します。",
    steps: [
      { expression: "√3×√12 − √3×√3", note: "分配法則でそれぞれ掛けます。" },
      { expression: "√36 − √9", note: "根号の中を掛けます。" },
      { expression: "6−3 = 3", note: "平方根を整数に直します。" },
    ],
  },
  practice: {
    title: "練習: 混合計算",
    problem: "平方根の乗法と加減を組み合わせます。",
    steps: [
      { prompt: "√2(√8+√2)を計算してください。", answers: ["6"], placeholder: "答え" },
      { prompt: "2√3+√12を計算してください。", answers: ["4√3"], placeholder: "式" },
    ],
    hint: "√12=2√3に簡単にできます。",
  },
  summary: [
    "平方根を含む式でも既習の計算法則を使える。",
    "乗除、根号の簡単化、加減の順に整理するとよい。",
  ],
};
