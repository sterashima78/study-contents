import type { MathLesson } from "../../../../math1/types";

export const equationMultiplyDivideLesson: MathLesson = {
  key: "equation-multiply-divide",
  title: "乗法・除法で方程式を解く",
  description: "両辺を同じ数で乗除して、ax = b や x/a = b の形の方程式を解きます。",
  goals: ["ax = b の両辺を a で割って解ける。", "x/a = b の両辺に a を掛けて解ける。"],
  concepts: [
    {
      title: "x の係数を1にする",
      body: [
        "ax = b では、a が0でないとき両辺を a で割ると x だけを残せます。",
        "x/a = b では、両辺に a を掛けると分母を取り除けます。",
      ],
      formulas: ["4x = 20 → x = 5", "x/3 = 7 → x = 21"],
    },
  ],
  example: {
    title: "例題: −3x = 18 を解く",
    problem: "−3x = 18",
    steps: [
      { expression: "(−3x)/(−3) = 18/(−3)", note: "両辺を −3 で割ります。" },
      { expression: "x = −6", note: "左辺の x の係数が1になります。" },
      { expression: "−3 × (−6) = 18", note: "元の方程式へ代入すると成り立ちます。" },
    ],
  },
  practice: {
    title: "練習: x の係数を1にする",
    problem: "5x = −35 を解いてください。",
    steps: [
      {
        prompt: "両辺を5で割った結果として x の値を答えてください。",
        answers: ["-7", "−7"],
        placeholder: "x = …",
      },
    ],
    hint: "−35÷5 を計算します。",
  },
  summary: ["ax = b では両辺を a で割って x の係数を1にする。", "x/a = b では両辺に a を掛ける。"],
};
