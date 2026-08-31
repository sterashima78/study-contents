import type { MathLesson } from "../../../../math1/types";

export const quadraticFunctionRateLesson: MathLesson = {
  key: "quadratic-function-rate",
  title: "変化の割合が一定でないことを捉える",
  description: "区間ごとの変化の割合を求め、一次関数との違いをグラフの曲線と関連付けます。",
  goals: ["区間の変化の割合を求められる。", "y=ax²では変化の割合が一定でない理由を説明できる。"],
  concepts: [
    {
      title: "曲線だから傾き方が変わる",
      body: ["変化の割合は(y₂−y₁)/(x₂−x₁)で求めます。", "y=ax²では区間によってこの値が変わり、一次関数のように一定ではないためグラフは直線になりません。"],
      formulas: ["変化の割合=(y₂−y₁)/(x₂−x₁)"],
    },
  ],
  example: {
    title: "例題: y=x²の区間を比べる",
    problem: "0→1と1→2の変化の割合を比べます。",
    steps: [
      { expression: "0→1: (1−0)/(1−0)=1", note: "最初の区間です。" },
      { expression: "1→2: (4−1)/(2−1)=3", note: "値が変わります。" },
      { expression: "一定ではない", note: "放物線の特徴と対応します。" },
    ],
  },
  practice: {
    title: "練習: 区間で求める",
    problem: "両端のyを先に出します。",
    steps: [
      { prompt: "y=x²でxが2から3まで変化するときの変化の割合を答えてください。", answers: ["5"], placeholder: "変化の割合" },
      { prompt: "y=ax²の変化の割合は一般に一定ですか。", answers: ["いいえ", "一定ではない", "一定でない"], placeholder: "はい/いいえ" },
    ],
    hint: "yの増加量÷xの増加量です。",
  },
  summary: ["y=ax²の変化の割合は区間によって変わる。", "変化の割合が一定でないことと曲線のグラフを関連付ける。"],
};
