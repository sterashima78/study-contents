import type { MathLesson } from "../../../../math1/types";

export const trinomialFactorizationLesson: MathLesson = {
  key: "trinomial-factorization",
  title: "x²+px+qを因数分解する",
  description: "和がp、積がqになる2数を探し、(x+a)(x+b)の形へ戻します。",
  goals: ["和と積の条件から2数を探せる。", "x²+px+qを一次式の積へ因数分解できる。"],
  concepts: [
    {
      title: "足してp、掛けてq",
      body: [
        "(x+a)(x+b)=x²+(a+b)x+abなので、因数分解ではa+b=p、ab=qとなるa、bを探します。",
        "qが負ならa、bは異符号です。符号から候補を絞ると見付けやすくなります。",
      ],
      formulas: ["x²+(a+b)x+ab=(x+a)(x+b)", "x²+x−12=(x+4)(x−3)"],
    },
  ],
  example: {
    title: "例題: x²−2x−15を因数分解する",
    problem: "和が−2、積が−15になる2数を探します。",
    steps: [
      { expression: "3 + (−5) = −2", note: "xの係数と一致します。" },
      { expression: "3·(−5) = −15", note: "定数項と一致します。" },
      { expression: "x²−2x−15=(x+3)(x−5)", note: "2数を一次式へ戻します。" },
    ],
  },
  practice: {
    title: "練習: 和と積から探す",
    problem: "pとqの条件を同時に満たす2数を探します。",
    steps: [
      {
        prompt: "x²+7x+12を因数分解してください。",
        answers: ["(x+3)(x+4)", "(x+4)(x+3)"],
        placeholder: "式",
      },
      {
        prompt: "x²−x−6を因数分解してください。",
        answers: ["(x−3)(x+2)", "(x+2)(x−3)", "(x-3)(x+2)", "(x+2)(x-3)"],
        placeholder: "式",
      },
    ],
    hint: "定数項の約数の組を作り、和がxの係数になるか確かめます。",
  },
  summary: ["x²+px+qでは和がp、積がqの2数を探す。", "展開して元の式になるか確認すると確実である。"],
};
