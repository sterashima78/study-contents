import type { MathLesson } from "../../../../math1/types";

export const polynomialRelationExplanationLesson: MathLesson = {
  key: "polynomial-relation-explanation",
  title: "文字式で数量の関係を説明する",
  description: "展開・因数分解を使い、数の性質がいつでも成り立つ理由を文字式で説明します。",
  goals: ["数量の関係を文字で一般的に表せる。", "目的に合う形へ式を変形して性質を説明できる。"],
  concepts: [
    {
      title: "示したい性質の形へ変形する",
      body: [
        "連続する2つの偶数を2n、2n+2と表すと、その積に1を足した数は2n(2n+2)+1です。",
        "この式を(2n+1)²へ変形できれば、2つの偶数の間の奇数の2乗であることを一般的に説明できます。",
      ],
      formulas: ["2n(2n+2)+1 = 4n²+4n+1 = (2n+1)²"],
    },
  ],
  example: {
    title: "例題: 連続する偶数の積に1を足す",
    problem: "どの連続する偶数でも、積に1を足すと奇数の2乗になることを説明します。",
    steps: [
      { expression: "2n, 2n+2", note: "連続する偶数を一般に表します。" },
      { expression: "2n(2n+2)+1 = 4n²+4n+1", note: "展開して整理します。" },
      { expression: "4n²+4n+1=(2n+1)²", note: "完全平方へ因数分解します。" },
      { expression: "2n+1は奇数", note: "したがって結果は奇数の2乗です。" },
    ],
  },
  practice: {
    title: "練習: 式の意味を読む",
    problem: "連続する偶数2nと2n+2について確認します。",
    steps: [
      {
        prompt: "2nと2n+2の間にある奇数を式で答えてください。",
        answers: ["2n+1"],
        placeholder: "式",
      },
      {
        prompt: "2n(2n+2)+1を因数分解した形を答えてください。",
        answers: ["(2n+1)²", "(2n+1)^2"],
        placeholder: "式",
      },
    ],
    hint: "展開すると4n²+4n+1です。",
  },
  summary: [
    "文字を使うと、特定の数だけでなく全ての場合をまとめて説明できる。",
    "示したい性質が読み取れる形へ式を変形する。",
  ],
};
