import type { MathLesson } from "../../../../math1/types";

export const literalExpressionExplanationLesson: MathLesson = {
  key: "literal-expression-explanation",
  title: "文字式を使って数量関係を説明する",
  description: "数の性質や数量関係を文字で一般的に表し、式の変形を根拠にして説明します。",
  goals: ["連続する整数や偶数・奇数を文字で表せる。", "文字式の形から数量の性質を説明できる。"],
  concepts: [
    {
      title: "文字で『どんな数でも』を表す",
      body: [
        "連続する二つの整数は n, n+1 のように表せます。偶数は2n、奇数は2n+1と表せます。",
        "文字を使うと、特定の数だけでなく条件を満たすすべての数について同じ計算を行えます。",
      ],
    },
    {
      title: "式の形を根拠に結論を読む",
      body: [
        "計算結果が2×整数の形になれば偶数、3×整数の形になれば3の倍数だと説明できます。",
        "最後の式が何を表す形になっているかまで述べることが大切です。",
      ],
    },
  ],
  example: {
    title: "例題: 連続する二つの整数の和を説明する",
    problem: "連続する二つの整数を n, n+1 として、その和の性質を調べます。",
    steps: [
      { expression: "n + (n + 1) = 2n + 1", note: "二つの整数の和を文字式にします。" },
      { expression: "2n + 1", note: "2×整数+1の形です。" },
      { expression: "したがって和は奇数", note: "式の形を根拠に結論を述べます。" },
    ],
  },
  practice: {
    title: "練習: 連続する整数を文字で表す",
    problem: "整数 n の次の整数と、n の次の次の整数を表します。",
    steps: [
      { prompt: "n の次の整数を表してください。", answers: ["n+1", "1+n"], placeholder: "nを使う" },
      {
        prompt: "n の次の次の整数を表してください。",
        answers: ["n+2", "2+n"],
        placeholder: "nを使う",
      },
    ],
    hint: "整数は1ずつ増えます。",
  },
  summary: [
    "連続する整数、偶数、奇数を文字で一般的に表せる。",
    "式を変形した後の形を根拠に数量の性質を説明する。",
    "具体例だけでなく一般的な説明に文字式を使う。",
  ],
};
