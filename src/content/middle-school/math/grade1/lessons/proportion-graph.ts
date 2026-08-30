import type { MathLesson } from "../../../../math1/types";

export const proportionGraphLesson: MathLesson = {
  key: "proportion-graph",
  title: "比例のグラフ",
  description: "比例 y = ax の対応する点を座標平面に取り、原点を通る直線になることを理解します。",
  goals: [
    "比例の式から対応する点を求めてグラフ上に捉えられる。",
    "比例のグラフが原点を通る直線になることを説明できる。",
  ],
  concepts: [
    {
      title: "比例のグラフは原点を通る直線",
      body: [
        "y = ax では x = 0 のとき y = 0 なので、グラフは必ず原点 O を通ります。",
        "対応する (x, y) の点をいくつか取り、それらを結ぶと一本の直線になります。比例定数 a の符号で右上がりか右下がりかが決まります。",
      ],
      formulas: ["y = ax → (0, 0) を通る直線"],
    },
  ],
  example: {
    title: "例題: y = 2x のグラフを考える",
    problem: "y = 2x について、いくつかの点を求めてグラフの特徴を確認します。",
    steps: [
      {
        expression: "x = −2, −1, 0, 1, 2",
        note: "原点の両側からいくつかの x の値を選びます。",
      },
      {
        expression: "y = −4, −2, 0, 2, 4",
        note: "それぞれ y = 2x に代入して y を求めます。",
      },
      {
        expression: "(−2,−4), (−1,−2), (0,0), (1,2), (2,4)",
        note: "座標平面上では、これらの点が同じ直線上に並びます。",
      },
    ],
  },
  practice: {
    title: "練習: 比例のグラフ上の点を求める",
    problem: "y = −3x のグラフについて考えます。",
    steps: [
      {
        prompt: "x = 2 のときの y を答えてください。",
        answers: ["-6", "−6"],
        placeholder: "y",
      },
      {
        prompt: "このグラフは原点を通りますか。「通る」または「通らない」で答えてください。",
        answers: ["通る"],
        placeholder: "通る / 通らない",
      },
    ],
    hint: "比例 y = ax では x = 0 を代入すると y = 0 になります。",
  },
  summary: [
    "比例 y = ax のグラフは原点を通る直線になる。",
    "式から対応する点を求め、座標として捉えると表・式・グラフを結び付けられる。",
  ],
};
