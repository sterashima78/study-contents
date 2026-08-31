import type { MathLesson } from "../../../../math1/types";

export const quadraticFunctionRepresentationsLesson: MathLesson = {
  key: "quadratic-function-representations",
  title: "表・式・グラフを相互に関連付ける",
  description: "2乗比例の特徴を、表の商、式の係数、グラフの形の三つの表現で読み替えます。",
  goals: ["表からaを求め式へ移せる。", "式からグラフの向き・開き・対応を説明できる。"],
  concepts: [
    {
      title: "同じ特徴を三つの表現で見る",
      body: [
        "表ではy/x²が一定、式ではその一定値がa、グラフではaの符号と絶対値が形に現れます。",
        "一つの表現だけでなく、問題に合う表現を選ぶことが関数の考察では重要です。",
      ],
      formulas: ["表 y/x²=a ↔ 式 y=ax² ↔ 放物線"],
    },
  ],
  example: {
    title: "例題: 表からグラフまで",
    problem: "x=1,2でy=-2,-8です。",
    steps: [
      { expression: "a=-2", note: "y/x²が-2です。" },
      { expression: "y=-2x²", note: "式を決めます。" },
      { expression: "下向きの放物線", note: "a<0だからです。" },
    ],
  },
  practice: {
    title: "練習: 表現を移る",
    problem: "同じaを手掛かりにします。",
    steps: [
      { prompt: "x=2でy=20となるy=ax²のaを答えてください。", answers: ["5"], placeholder: "a" },
      {
        prompt: "y=-x²のグラフは上向きと下向きのどちらですか。",
        answers: ["下向き", "下"],
        placeholder: "向き",
      },
    ],
    hint: "表→a→式→グラフの順に対応させます。",
  },
  summary: [
    "表・式・グラフは同じ関数の特徴を別の形で表す。",
    "目的に応じて表現を選び、相互に読み替える。",
  ],
};
