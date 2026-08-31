import type { MathLesson } from "../../../../math1/types";

export const differenceSquaresFactorizationLesson: MathLesson = {
  key: "difference-squares-factorization",
  title: "平方の差を因数分解する",
  description: "a²−b²の形を見抜き、(a+b)(a−b)へ戻します。",
  goals: ["2つの平方の差を見分けられる。", "平方の差を和と差の積へ因数分解できる。"],
  concepts: [
    {
      title: "2項がどちらも平方なら確認する",
      body: [
        "a²−b²=(a+b)(a−b)は、和と差の積の展開を逆向きにした公式です。",
        "引き算であることと、両方の項が平方として表せることが目印です。",
      ],
      formulas: ["a²−b²=(a+b)(a−b)", "x²−49=(x+7)(x−7)"],
    },
  ],
  example: {
    title: "例題: 9x²−16を因数分解する",
    problem: "9x²=(3x)²、16=4²と見ます。",
    steps: [
      { expression: "9x²−16=(3x)²−4²", note: "2つの平方の差へ書き換えます。" },
      { expression: "(3x+4)(3x−4)", note: "a²−b²=(a+b)(a−b)を使います。" },
    ],
  },
  practice: {
    title: "練習: 平方の差を見抜く",
    problem: "平方の差の公式を逆向きに使います。",
    steps: [
      { prompt: "x²−25を因数分解してください。", answers: ["(x+5)(x−5)", "(x+5)(x-5)"], placeholder: "式" },
      { prompt: "4a²−9を因数分解してください。", answers: ["(2a+3)(2a−3)", "(2a+3)(2a-3)"], placeholder: "式" },
    ],
    hint: "各項を何の2乗と見られるか考えます。",
  },
  summary: ["平方の差a²−b²は(a+b)(a−b)へ戻せる。", "2項・引き算・両方が平方、の3点を確認する。"],
};
