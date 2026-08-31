import type { MathLesson } from "../../../../math1/types";

export const commonFactorFactorizationLesson: MathLesson = {
  key: "common-factor-factorization",
  title: "共通因数で因数分解する",
  description: "すべての項に共通する因数を見付け、分配法則を逆向きに使って積の形へ直します。",
  goals: ["因数と因数分解の意味を説明できる。", "共通因数をくくって因数分解できる。"],
  concepts: [
    {
      title: "因数分解は展開の逆",
      body: [
        "ab+ac=a(b+c)のように、和の形を積の形へ直すことを因数分解といいます。a、b+cのように積を作る一つ一つの式を因数といいます。",
        "まず全ての項に共通する数や文字がないかを確認します。",
      ],
      formulas: ["6x²+9x = 3x(2x+3)", "ab+ac = a(b+c)"],
    },
  ],
  example: {
    title: "例題: 8x²−12xを因数分解する",
    problem: "2項に共通する最大の因数を探します。",
    steps: [
      { expression: "共通因数 = 4x", note: "8と12の共通因数4、文字xが共通です。" },
      { expression: "8x²−12x = 4x(2x−3)", note: "各項を4xで割った式をかっこ内へ置きます。" },
      { expression: "4x(2x−3) → 8x²−12x", note: "展開して元へ戻ることを確認できます。" },
    ],
  },
  practice: {
    title: "練習: 共通因数をくくる",
    problem: "まず共通する数と文字を探します。",
    steps: [
      { prompt: "10x²+15xを因数分解してください。", answers: ["5x(2x+3)"], placeholder: "式" },
      {
        prompt: "6ab−9aを因数分解してください。",
        answers: ["3a(2b−3)", "3a(2b-3)"],
        placeholder: "式",
      },
    ],
    hint: "すべての項に含まれる最大の数・文字を先にくくります。",
  },
  summary: ["因数分解は展開を逆向きにした変形である。", "公式を見る前に共通因数を確認する。"],
};
