import type { MathLesson } from "../../../../math1/types";

export const quadraticEquationMethodSelectionLesson: MathLesson = {
  key: "quadratic-equation-method-selection",
  title: "二次方程式の解法を選ぶ",
  description: "式の形を見て、平方根・因数分解・平方完成・解の公式のうち効率のよい方法を選びます。",
  goals: [
    "二次方程式の形から利用しやすい解法を判断できる。",
    "異なる解法が平方根や一次方程式へ帰着させる考えでつながっていると説明できる。",
  ],
  concepts: [
    {
      title: "形を見てから計算する",
      body: [
        "x²=kなら平方根、左辺がすぐ因数分解できるなら因数分解、平方の形を作りやすいなら平方完成が有効です。どれにも当てはまりにくいときは解の公式が使えます。",
        "どの方法も、既習の平方根や一元一次方程式で処理できる形へ二次方程式を変えるという点でつながっています。",
      ],
      formulas: [
        "x²=k → 平方根",
        "AB=0 → 因数分解",
        "(x+m)²=k → 平方完成",
        "ax²+bx+c=0 → 解の公式",
      ],
    },
  ],
  example: {
    title: "例題: 3つの式に解法を対応させる",
    problem: "計算を始める前に式の特徴を見ます。",
    steps: [
      { expression: "x²=13", note: "平方根の考えが最短です。" },
      { expression: "x²−5x+6=0", note: "整数で因数分解できます。" },
      { expression: "x²+x−1=0", note: "整数では因数分解しにくいので解の公式が有効です。" },
    ],
  },
  practice: {
    title: "練習: 解法を選ぶ",
    problem: "最も直接的な方法を答えます。",
    steps: [
      {
        prompt: "x²=19を解くとき、最も直接的な方法を答えてください。",
        answers: ["平方根", "平方根の考え"],
        placeholder: "方法",
      },
      {
        prompt: "x²−8x+15=0を解くとき、最も直接的な方法を答えてください。",
        answers: ["因数分解"],
        placeholder: "方法",
      },
    ],
    hint: "平方の形か、積が0の形へすぐ直せるかを先に見ます。",
  },
  summary: [
    "解く前に式の形を見て方法を選ぶ。",
    "各解法は既習の平方根・一次方程式へ帰着させる考えでつながっている。",
  ],
};
