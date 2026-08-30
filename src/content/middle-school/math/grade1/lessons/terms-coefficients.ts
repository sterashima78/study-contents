import type { MathLesson } from "../../../../math1/types";

export const termsCoefficientsLesson: MathLesson = {
  key: "terms-coefficients",
  title: "項と係数",
  description: "一次式を項に分け、文字に掛かっている数を係数として読み取ります。",
  goals: ["式を項に分けて読める。", "文字を含む項の係数を答えられる。"],
  concepts: [
    {
      title: "+ と − を境に項を分ける",
      body: [
        "加法だけの形で表したとき、それぞれの部分を項といいます。負の項では符号も項に含めます。",
        "文字を含む項で、文字に掛かっている数を係数といいます。",
      ],
      formulas: ["5x − 3 の項: 5x, −3", "5x の係数: 5", "−x の係数: −1"],
    },
  ],
  example: {
    title: "例題: −4x + 7 の項と係数を読む",
    problem: "−4x + 7 の項と、x の係数を答えてください。",
    steps: [
      { expression: "項: −4x, 7", note: "+ を境に式を分けます。−4x の負号も項に含めます。" },
      { expression: "x を含む項は −4x", note: "係数を調べる項を確認します。" },
      { expression: "係数: −4", note: "x に掛かっている数は −4 です。" },
    ],
  },
  practice: {
    title: "練習: 係数を読み取る",
    problem: "6 − 3x の x の係数を答えてください。",
    steps: [
      {
        prompt: "符号を含めて係数を答えてください。",
        answers: ["-3", "−3"],
        placeholder: "係数",
      },
    ],
    hint: "x を含む項は −3x です。",
  },
  summary: [
    "項は加法だけの形にしたときの一つ一つの部分。",
    "係数は文字に掛かっている数で、符号も含めて読む。",
  ],
};
