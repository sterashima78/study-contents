import type { MathLesson } from "../../../../math1/types";

export const radicalAdditionSubtractionLesson: MathLesson = {
  key: "radical-addition-subtraction",
  title: "平方根を足す・引く",
  description: "根号の中を簡単にした上で、同じ√aを含む項を同類項のようにまとめます。",
  goals: [
    "同じ根号をもつ項を係数でまとめられる。",
    "根号の中を簡単にしてから加法・減法を行える。",
  ],
  concepts: [
    {
      title: "同じ根号だけをまとめる",
      body: [
        "2√3+5√3は、文字式の2a+5aと同じように係数を足して7√3とできます。",
        "√2+√3を√5とはできません。根号の中が異なる項はそのまま別の数として扱います。",
      ],
      formulas: ["2√3 + 5√3 = 7√3", "√2 + √3 ≠ √5"],
    },
  ],
  example: {
    title: "例題: √12+√27を計算する",
    problem: "まずそれぞれの根号を簡単にします。",
    steps: [
      { expression: "√12 = 2√3", note: "12=4×3です。" },
      { expression: "√27 = 3√3", note: "27=9×3です。" },
      { expression: "2√3+3√3 = 5√3", note: "同じ√3を係数でまとめます。" },
    ],
  },
  practice: {
    title: "練習: 加法と減法",
    problem: "根号を簡単にしてから計算します。",
    steps: [
      { prompt: "√8+√18を計算してください。", answers: ["5√2"], placeholder: "式" },
      { prompt: "3√5−√5を計算してください。", answers: ["2√5"], placeholder: "式" },
    ],
    hint: "√8=2√2、√18=3√2です。",
  },
  summary: [
    "加法・減法では、根号の中が同じ項だけを係数でまとめる。",
    "異なる根号を無理に一つの根号へまとめない。",
  ],
};
