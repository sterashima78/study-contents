import type { MathLesson } from "../../../../math1/types";

export const squareRootApproximationLesson: MathLesson = {
  key: "square-root-approximation",
  title: "平方根の近似値を捉える",
  description: "平方して前後の値と比べることで、√2などの平方根がどの範囲にあるかを段階的に絞ります。",
  goals: [
    "平方根を整数や小数の間に位置付けられる。",
    "2乗した値を比較して平方根の近似値を絞り込める。",
  ],
  concepts: [
    {
      title: "2乗してはさむ",
      body: [
        "√aの近似値は、候補となる数を2乗してaと比べることで求められます。まず整数で挟み、必要なら小数第1位、第2位へ細かくします。",
        "近似値は元の無理数そのものではありません。どの桁まで求めた値かを意識します。",
      ],
      formulas: ["1.4² = 1.96 < 2", "1.5² = 2.25 > 2", "1.4 < √2 < 1.5"],
    },
  ],
  example: {
    title: "例題: √5を整数で挟む",
    problem: "√5がどの連続する整数の間にあるか求めます。",
    steps: [
      { expression: "2² = 4 < 5", note: "2は√5より小さいと分かります。" },
      { expression: "3² = 9 > 5", note: "3は√5より大きいと分かります。" },
      { expression: "2 < √5 < 3", note: "2乗の大小から位置を決めます。" },
    ],
  },
  practice: {
    title: "練習: √10を整数で挟む",
    problem: "√10について考えます。",
    steps: [
      { prompt: "√10より小さい最大の整数を答えてください。", answers: ["3"], placeholder: "整数" },
      { prompt: "√10より大きい最小の整数を答えてください。", answers: ["4"], placeholder: "整数" },
    ],
    hint: "3²と4²を10と比べます。",
  },
  summary: [
    "平方根の位置は、前後の数を2乗して比較すると分かる。",
    "近似値は必要な精度に応じて段階的に細かくする。",
  ],
};
