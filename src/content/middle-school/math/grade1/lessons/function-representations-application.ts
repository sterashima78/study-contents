import type { MathLesson } from "../../../../math1/types";

export const functionRepresentationsApplicationLesson: MathLesson = {
  key: "function-representations-application",
  title: "表・式・グラフを結び付けて活用する",
  description:
    "具体的な事象を比例・反比例として捉え、表・式・グラフを使い分けて特徴や値を説明します。",
  goals: [
    "具体的な数量の関係が比例か反比例かを判断できる。",
    "表・式・グラフの特徴を結び付け、必要な値や変化の様子を説明できる。",
  ],
  concepts: [
    {
      title: "同じ関係を表・式・グラフで見る",
      body: [
        "表は対応する値を具体的に比べるのに向き、式は任意の値を計算するのに向き、グラフは変化の全体像を見るのに向いています。",
        "比例では y/x が一定、反比例では xy が一定という特徴を手掛かりに、具体的な事象をどちらの関係として捉えられるか判断します。",
      ],
      formulas: ["比例: y = ax", "反比例: y = a/x"],
    },
  ],
  example: {
    title: "例題: 面積24 cm²の長方形の縦と横",
    problem: "面積が24 cm²で一定の長方形について、横を x cm、縦を y cm とします。",
    steps: [
      {
        expression: "xy = 24",
        note: "長方形の面積は横×縦なので、二つの数量の積が一定です。",
      },
      {
        expression: "y = 24/x",
        note: "y について表すと反比例の式になります。",
      },
      {
        expression: "x = 2, 3, 4, 6 → y = 12, 8, 6, 4",
        note: "表にすると、x が大きくなるにつれて y が小さくなる様子を具体的に確認できます。",
      },
      {
        expression: "グラフは反比例の曲線",
        note: "式と表から得た座標は、同じ反比例のグラフ上に並びます。",
      },
    ],
  },
  practice: {
    title: "練習: 事象を比例として捉える",
    problem: "毎分3 Lずつ水を入れます。入れ始めて x 分後の水の量を y L とします。",
    steps: [
      {
        prompt: "y を x の式で表してください。",
        answers: ["y=3x", "3x=y"],
        placeholder: "y = …",
      },
      {
        prompt: "x = 8 のときの y を答えてください。",
        answers: ["24", "+24"],
        placeholder: "水の量",
      },
    ],
    hint: "1分増えるごとに水は3 Lずつ増え、y/x が3で一定です。",
  },
  summary: [
    "表・式・グラフは同じ関数関係を異なる見方で表したもの。",
    "具体的な事象では、比例の y/x、反比例の xy が一定という特徴を使って関係を判断する。",
  ],
};
