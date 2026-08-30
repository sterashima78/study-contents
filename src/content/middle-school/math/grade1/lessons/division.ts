import type { MathLesson } from "../../../../math1/types";

export const divisionLesson: MathLesson = {
  key: "division",
  title: "正の数・負の数の除法",
  description: "乗法と同じ符号の規則を使って、正負の数の割り算を行います。",
  goals: ["商の符号を2数の符号から判断できる。", "割り切れる正負の数の除法を計算できる。"],
  concepts: [
    {
      title: "除法の符号も乗法と同じ",
      body: [
        "割り算でも、同じ符号どうしなら正、異なる符号どうしなら負になります。",
        "符号を決めたあと、絶対値どうしの割り算をします。",
      ],
      formulas: ["(−)÷(−) = (+)", "(+)÷(−) = (−)"],
    },
  ],
  example: {
    title: "例題: (−24) ÷ (−6) を計算する",
    problem: "(−24) ÷ (−6)",
    steps: [
      { expression: "符号: (−) ÷ (−) = (+)", note: "同符号なので商は正になります。" },
      { expression: "絶対値: 24 ÷ 6 = 4", note: "絶対値どうしを割ります。" },
      { expression: "= 4", note: "正の4が答えです。" },
    ],
  },
  practice: {
    title: "練習: 除法の符号を判断する",
    problem: "(+35) ÷ (−7)",
    steps: [
      {
        prompt: "商の符号を + または − で答えてください。",
        answers: ["-", "−"],
        placeholder: "+ / -",
      },
      { prompt: "計算結果を書いてください。", answers: ["-5", "−5"], placeholder: "最終結果" },
    ],
    hint: "正と負の異符号なので商は負です。",
  },
  summary: ["除法の符号の決め方は乗法と同じ。", "符号を決めてから絶対値どうしを割る。"],
};
