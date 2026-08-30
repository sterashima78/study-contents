import type { MathLesson } from "../../../../math1/types";

export const multiplicationLesson: MathLesson = {
  key: "multiplication",
  title: "正の数・負の数の乗法",
  description: "符号の組合せを判断してから、絶対値どうしを掛けます。",
  goals: ["積の符号を、2数の符号から判断できる。", "正負の数の乗法を正しく計算できる。"],
  concepts: [
    {
      title: "同符号の積は正、異符号の積は負",
      body: [
        "掛け算では、まず符号を判断し、そのあと絶対値どうしを掛けます。",
        "同じ符号どうしなら正、異なる符号どうしなら負です。",
      ],
      formulas: ["(−)×(−) = (+)", "(−)×(+) = (−)"],
    },
  ],
  example: {
    title: "例題: (−4) × (+7) を計算する",
    problem: "(−4) × (+7)",
    steps: [
      { expression: "符号: (−) × (+) = (−)", note: "異符号なので積は負になります。" },
      { expression: "絶対値: 4 × 7 = 28", note: "次に絶対値どうしを掛けます。" },
      { expression: "= −28", note: "負の符号と28を組み合わせます。" },
    ],
  },
  practice: {
    title: "練習: 乗法の符号を判断する",
    problem: "(−6) × (−5)",
    steps: [
      {
        prompt: "積の符号を + または − で答えてください。",
        answers: ["+", "＋"],
        placeholder: "+ / -",
      },
      { prompt: "計算結果を書いてください。", answers: ["30", "+30"], placeholder: "最終結果" },
    ],
    hint: "負の数どうしの積は正になります。",
  },
  summary: [
    "乗法では、符号を判断してから絶対値を掛ける。",
    "同符号の積は正、異符号の積は負になる。",
  ],
};
