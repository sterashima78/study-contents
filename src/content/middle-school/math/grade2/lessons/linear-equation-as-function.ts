import type { MathLesson } from "../../../../math1/types";

export const linearEquationAsFunctionLesson: MathLesson = {
  key: "linear-equation-as-function",
  title: "二元一次方程式を直線として捉える",
  description:
    "二元一次方程式を y=ax+b の形に変形し、その解の組が一次関数のグラフ上の点になることを理解します。",
  goals: [
    "二元一次方程式をyについて解いて一次関数の式に直せる。",
    "二元一次方程式の解の組と直線上の点を結び付けられる。",
  ],
  concepts: [
    {
      title: "方程式の解の組が直線をつくる",
      body: [
        "二元一次方程式 ax+by+c=0 でb≠0なら、yについて解くことで y=px+q の形にできます。",
        "元の方程式を満たす(x,y)の組は、変形した一次関数のグラフ上の点と同じです。方程式と関数を同じ直線として見ることができます。",
      ],
      formulas: ["ax + by + c = 0 → y = px + q"],
    },
  ],
  example: {
    title: "例題: 2x + y − 4 = 0 を直線として見る",
    problem: "方程式をyについて解き、グラフ上の点を確認します。",
    steps: [
      { expression: "y = −2x + 4", note: "2xと−4を移項してyについて解きます。" },
      { expression: "x = 0 → y = 4", note: "(0,4)は元の方程式を満たします。" },
      { expression: "x = 2 → y = 0", note: "(2,0)も元の方程式を満たし、同じ直線上にあります。" },
    ],
  },
  practice: {
    title: "練習: 二元一次方程式を一次関数に直す",
    problem: "3x + y − 6 = 0 を考えます。",
    steps: [
      {
        prompt: "yについて解いた式を答えてください。",
        answers: ["y=-3x+6", "-3x+6"],
        placeholder: "y=...",
      },
      { prompt: "x = 1 のときのyを答えてください。", answers: ["3"], placeholder: "y" },
    ],
    hint: "3xを右辺へ移すと y=−3x+6 です。",
  },
  summary: [
    "二元一次方程式は、yについて解くと一次関数として見られる場合がある。",
    "方程式の解の組は、その一次関数の直線上の点になる。",
  ],
};
