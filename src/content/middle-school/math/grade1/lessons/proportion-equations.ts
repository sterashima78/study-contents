import type { MathLesson } from "../../../../math1/types";

export const proportionEquationsLesson: MathLesson = {
  key: "proportion-equations",
  title: "比例式を解く",
  description: "外項の積と内項の積が等しいことを使い、簡単な比例式を一元一次方程式へ直して解きます。",
  goals: ["比例式から外項の積と内項の積が等しい式を作れる。", "比例式を一元一次方程式に直して解ける。"],
  concepts: [
    {
      title: "外項の積と内項の積は等しい",
      body: [
        "a : b = c : d では、外側の a と d の積と、内側の b と c の積が等しくなります。",
        "この性質を使うと、比例式を一元一次方程式に直して解けます。",
      ],
      formulas: ["a : b = c : d → ad = bc", "x : 4 = 6 : 8 → 8x = 24"],
    },
  ],
  example: {
    title: "例題: x : 5 = 6 : 10 を解く",
    problem: "x : 5 = 6 : 10",
    steps: [
      { expression: "10x = 5 × 6", note: "外項の積と内項の積を等しくします。" },
      { expression: "10x = 30", note: "右辺を計算します。" },
      { expression: "x = 3", note: "両辺を10で割ります。" },
    ],
  },
  practice: {
    title: "練習: 比例式を方程式へ直す",
    problem: "3 : x = 6 : 8 を解いてください。",
    steps: [
      {
        prompt: "外項の積と内項の積が等しい式を書いてください。",
        answers: ["3*8=6x", "24=6x", "6x=24", "3×8=6x"],
        placeholder: "24 = 6x",
      },
      { prompt: "x の値を答えてください。", answers: ["4"], placeholder: "x = …" },
    ],
    hint: "3と8が外項、xと6が内項です。",
  },
  summary: ["比例式では外項の積と内項の積が等しい。", "比例式を一元一次方程式へ直したあとは、これまでと同じ手順で解く。"],
};
