import type { MathLesson } from "../../../../math1/types";

export const linearFunctionGraphLesson: MathLesson = {
  key: "linear-function-graph",
  title: "一次関数のグラフをかく",
  description: "切片bでy軸上の点を取り、傾きaを使ってもう一点を決め、一次関数の直線をかきます。",
  goals: [
    "y=ax+bのaを傾き、bをy切片として読める。",
    "切片と傾きを使って一次関数のグラフをかける。",
  ],
  concepts: [
    {
      title: "切片から始め、傾きで進む",
      body: [
        "y=ax+bでは、x=0のときy=bなので、グラフは(0,b)を通ります。このbを切片といいます。",
        "aは傾きです。例えばa=2なら、xが1増えるとyが2増えるので、切片から右へ1、上へ2進んだ点も直線上にあります。",
      ],
      formulas: ["傾き = a", "y切片 = b"],
    },
  ],
  example: {
    title: "例題: y = 2x − 1 のグラフ",
    problem: "切片と傾きを使って、直線上の二点を決めます。",
    steps: [
      { expression: "(0, −1)", note: "切片b=−1なので、まずy軸上の点を取ります。" },
      { expression: "右へ1、上へ2", note: "傾きa=2を移動として読みます。" },
      { expression: "(1, 1)", note: "切片の点とこの点を通る直線がグラフです。" },
    ],
  },
  practice: {
    title: "練習: 傾きと切片から点を求める",
    problem: "y = −3x + 2 のグラフについて考えます。",
    steps: [
      { prompt: "y切片を答えてください。", answers: ["2"], placeholder: "切片" },
      { prompt: "x = 1 のときのyを答えてください。", answers: ["-1", "−1"], placeholder: "y" },
    ],
    hint: "まず(0,2)を取り、傾き−3を使います。",
  },
  summary: [
    "一次関数 y=ax+b のaは傾き、bはy切片を表す。",
    "切片の点と、傾きから求めたもう一点を通る直線をかく。",
  ],
};
