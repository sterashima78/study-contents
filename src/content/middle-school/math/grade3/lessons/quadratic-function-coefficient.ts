import type { MathLesson } from "../../../../math1/types";

export const quadraticFunctionCoefficientLesson: MathLesson = {
  key: "quadratic-function-coefficient",
  title: "比例定数aと放物線の形を結び付ける",
  description: "aの符号と絶対値が、放物線の開く向きと開き具合を決めることを理解します。",
  goals: ["aの符号から開く向きを判断できる。", "|a|の大小と放物線の開き具合を関連付けられる。"],
  concepts: [
    {
      title: "符号は向き、絶対値は開き具合",
      body: [
        "a>0なら上向き、a<0なら下向きに開きます。",
        "同じxで|a|が大きいほど|y|が大きくなるため、グラフはy軸に近い細い形になります。",
      ],
      formulas: ["a>0 → 上向き", "a<0 → 下向き", "|a|大 → 開きが小さい"],
    },
  ],
  example: {
    title: "例題: y=2x²とy=1/2x²",
    problem: "同じx=2で比べます。",
    steps: [
      { expression: "y=8 と y=2", note: "|a|が大きい方が原点から縦に離れます。" },
      { expression: "y=2x²の方が細い", note: "y軸に近い放物線になります。" },
    ],
  },
  practice: {
    title: "練習: aから形を読む",
    problem: "符号と絶対値を分けて考えます。",
    steps: [
      {
        prompt: "y=-3x²の放物線は上向きと下向きのどちらですか。",
        answers: ["下向き", "下"],
        placeholder: "向き",
      },
      {
        prompt: "y=x²とy=4x²では、どちらが開きが小さいですか。",
        answers: ["y=4x²", "4x²"],
        placeholder: "式",
      },
    ],
    hint: "aの符号は向き、|a|は開き具合です。",
  },
  summary: ["a>0なら上向き、a<0なら下向き。", "|a|が大きいほど放物線の開きは小さい。"],
};
