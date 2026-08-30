import type { MathLesson } from "../../../../math1/types";

export const numberLineAbsoluteValueLesson: MathLesson = {
  key: "number-line-absolute-value",
  title: "数直線と絶対値",
  description: "数直線上の位置と0からの距離を使って、数の大小と絶対値を捉えます。",
  goals: ["正の数・負の数を数直線上に表せる。", "絶対値を0からの距離として求められる。"],
  concepts: [
    {
      title: "右にある数ほど大きい",
      body: [
        "数直線では0の右側に正の数、左側に負の数を並べ、右にある数ほど大きくなります。",
        "絶対値は、その数を表す点と0との距離です。",
      ],
      formulas: ["|+5| = 5", "|−5| = 5"],
    },
  ],
  example: {
    title: "例題: −6 の絶対値を求める",
    problem: "|−6|",
    steps: [
      { expression: "−6 は 0 の左にある", note: "数直線上で −6 の位置を考えます。" },
      { expression: "0 からの距離は 6", note: "絶対値は0からの距離を表します。" },
      { expression: "|−6| = 6", note: "したがって絶対値は6です。" },
    ],
  },
  practice: {
    title: "練習: 絶対値を求める",
    problem: "|−9| を求めてください。",
    steps: [
      { prompt: "0からの距離を答えてください。", answers: ["9", "+9"], placeholder: "絶対値" },
    ],
    hint: "−9 が0から何だけ離れているかを考えます。",
  },
  summary: ["数直線では右にある数ほど大きい。", "絶対値は0からの距離なので負にはならない。"],
};
