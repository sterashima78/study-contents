import type { MathLesson } from "../../../../math1/types";

export const binomialExpansionDistributiveLesson: MathLesson = {
  key: "binomial-expansion-distributive",
  title: "分配法則で一次式の積を展開する",
  description: "一次式どうしの積を、既習の分配法則を繰り返して多項式へ直します。",
  goals: [
    "一次式どうしの積を分配法則で展開できる。",
    "公式の根拠を既習の計算と結び付けて説明できる。",
  ],
  concepts: [
    {
      title: "一方のかっこを一つの式として分配する",
      body: [
        "(a+b)(c+d)では、まずa+bを一つのまとまりMと見てM(c+d)=Mc+Mdと考えられます。さらに各項へ分配すると4つの積になります。",
        "展開は新しい特別な規則ではなく、交換法則・結合法則・分配法則の組合せです。",
      ],
      formulas: ["(a+b)(c+d)=ac+ad+bc+bd", "(x+2)(x+3)=x²+5x+6"],
    },
  ],
  example: {
    title: "例題: (x+4)(x−2)を展開する",
    problem: "4つの積を作り、同類項をまとめます。",
    steps: [
      { expression: "x·x + x·(−2) + 4·x + 4·(−2)", note: "両方の項を組み合わせます。" },
      { expression: "x²−2x+4x−8", note: "各積を計算します。" },
      { expression: "x²+2x−8", note: "同類項をまとめます。" },
    ],
  },
  practice: {
    title: "練習: 4つの積で展開する",
    problem: "分配法則だけで展開します。",
    steps: [
      {
        prompt: "(x+1)(x+5)を展開してください。",
        answers: ["x²+6x+5", "x^2+6x+5"],
        placeholder: "式",
      },
      {
        prompt: "(a+2)(a−3)を展開してください。",
        answers: ["a²−a−6", "a^2-a-6", "a²-a-6"],
        placeholder: "式",
      },
    ],
    hint: "左の2項と右の2項の組合せを4つ作ります。",
  },
  summary: [
    "一次式の積も分配法則を繰り返せば展開できる。",
    "公式は分配法則を能率化したものとして理解する。",
  ],
};
