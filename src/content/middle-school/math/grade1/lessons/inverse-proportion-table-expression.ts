import type { MathLesson } from "../../../../math1/types";

export const inverseProportionTableExpressionLesson: MathLesson = {
  key: "inverse-proportion-table-expression",
  title: "反比例を式と表で表す",
  description: "y = a/x の形と x と y の積に着目し、反比例する二つの数量を式と表で結び付けます。",
  goals: [
    "反比例する関係を y = a/x の形で表せる。",
    "対応する x と y の値から比例定数 a を求められる。",
  ],
  concepts: [
    {
      title: "反比例では xy が一定になる",
      body: [
        "y が x に反比例するとき、対応する x と y の積 xy はいつも一定です。この一定の数を比例定数といいます。",
        "比例定数を a とすると、反比例の関係は y = a/x と表せます。x = 0 では割ることができないので、x は0以外です。",
      ],
      formulas: ["y = a/x", "a = xy（x ≠ 0）"],
    },
  ],
  example: {
    title: "例題: 対応する値から反比例の式を作る",
    problem: "y は x に反比例し、x = 2 のとき y = 6 です。",
    steps: [
      {
        expression: "a = 2 × 6",
        note: "反比例では x と y の積が比例定数です。",
      },
      {
        expression: "a = 12",
        note: "比例定数は12です。",
      },
      {
        expression: "y = 12/x",
        note: "反比例の式 y = a/x に a = 12 を入れます。",
      },
    ],
  },
  practice: {
    title: "練習: 反比例の式を求める",
    problem: "y は x に反比例し、x = 3 のとき y = −4 です。",
    steps: [
      {
        prompt: "比例定数 a を求めてください。",
        answers: ["-12", "−12"],
        placeholder: "a",
      },
      {
        prompt: "y を x の式で表してください。",
        answers: ["y=-12/x", "y=−12/x", "-12/x=y", "−12/x=y"],
        placeholder: "y = …",
      },
    ],
    hint: "a = xy に x = 3、y = −4 を入れます。",
  },
  summary: [
    "y が x に反比例するとき y = a/x と表せる。",
    "対応する x と y の積 xy は一定で、その値が比例定数になる。",
  ],
};
