import type { MathLesson } from "../../../../math1/types";

export const linearFunctionRateOfChangeLesson: MathLesson = {
  key: "linear-function-rate-of-change",
  title: "変化の割合を求める",
  description:
    "xの増加量に対するyの増加量の割合を求め、一次関数ではその値が一定で傾きaに等しいことを理解します。",
  goals: [
    "二つの点や表から変化の割合を求められる。",
    "一次関数 y = ax + b の変化の割合がaに等しいことを説明できる。",
  ],
  concepts: [
    {
      title: "変化の割合 = yの増加量 ÷ xの増加量",
      body: [
        "xがx₁からx₂へ変化し、yがy₁からy₂へ変化するとき、変化の割合は (y₂−y₁)/(x₂−x₁) です。",
        "一次関数ではどの二点を選んでも変化の割合は一定で、y=ax+bのaに等しくなります。",
      ],
      formulas: ["変化の割合 = (y₂ − y₁) / (x₂ − x₁) = a"],
    },
  ],
  example: {
    title: "例題: y = 2x + 3 の変化の割合",
    problem: "xが1から4まで増えるときの変化の割合を求めます。",
    steps: [
      { expression: "x: 1 → 4", note: "xの増加量は 4−1=3 です。" },
      { expression: "y: 5 → 11", note: "yの増加量は 11−5=6 です。" },
      { expression: "6 ÷ 3 = 2", note: "変化の割合は2で、xの係数aと一致します。" },
    ],
  },
  practice: {
    title: "練習: 二点から変化の割合を求める",
    problem: "一次関数のグラフ上に (2, 7) と (5, 13) があります。",
    steps: [
      { prompt: "xの増加量を答えてください。", answers: ["3"], placeholder: "xの増加量" },
      { prompt: "変化の割合を答えてください。", answers: ["2"], placeholder: "変化の割合" },
    ],
    hint: "yの増加量は13−7=6です。6をxの増加量で割ります。",
  },
  summary: [
    "変化の割合は yの増加量 ÷ xの増加量で求める。",
    "一次関数では変化の割合は一定で、y=ax+bのaに等しい。",
  ],
};
