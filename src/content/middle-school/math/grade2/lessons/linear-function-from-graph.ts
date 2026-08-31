import type { MathLesson } from "../../../../math1/types";

export const linearFunctionFromGraphLesson: MathLesson = {
  key: "linear-function-from-graph",
  title: "グラフから一次関数の式を求める",
  description:
    "グラフ上の二点から傾きを求め、y軸との交点から切片を読み取って一次関数の式を決めます。",
  goals: ["グラフ上の二点から傾きを求められる。", "傾きと切片を使って y=ax+b の式を決められる。"],
  concepts: [
    {
      title: "グラフからaとbを読む",
      body: [
        "直線上の二点が分かれば、yの増加量をxの増加量で割って傾きaを求められます。",
        "直線がy軸と交わる点のy座標が切片bです。aとbが決まれば一次関数の式が決まります。",
      ],
      formulas: ["a = (y₂ − y₁) / (x₂ − x₁)", "y = ax + b"],
    },
  ],
  example: {
    title: "例題: (0,2) と (2,6) を通る直線",
    problem: "二点の座標から一次関数の式を求めます。",
    steps: [
      { expression: "a = (6 − 2) ÷ (2 − 0) = 2", note: "二点から傾きを求めます。" },
      { expression: "b = 2", note: "(0,2)を通るので切片は2です。" },
      { expression: "y = 2x + 2", note: "a=2、b=2を式に入れます。" },
    ],
  },
  practice: {
    title: "練習: 二点を通る一次関数を求める",
    problem: "グラフが (0,−3) と (4,5) を通ります。",
    steps: [
      { prompt: "傾きaを答えてください。", answers: ["2"], placeholder: "a" },
      {
        prompt: "一次関数の式を答えてください。",
        answers: ["y=2x-3", "2x-3"],
        placeholder: "y=...",
      },
    ],
    hint: "yの増加量は8、xの増加量は4です。",
  },
  summary: [
    "直線上の二点から傾きaを求める。",
    "y軸との交点、または一つの点を使ってbを求め、式を決める。",
  ],
};
