import type { MathLesson } from "../../../../math1/types";

export const proportionTableExpressionLesson: MathLesson = {
  key: "proportion-table-expression",
  title: "比例を式と表で表す",
  description: "y = ax の形と比例定数を使い、比例する二つの数量を式と表で結び付けます。",
  goals: [
    "比例する関係を y = ax の形で表せる。",
    "対応する x と y の値から比例定数 a を求められる。",
  ],
  concepts: [
    {
      title: "比例では y/x が一定になる",
      body: [
        "y が x に比例するとき、0でない x に対する y/x の値はいつも一定です。この一定の数を比例定数といいます。",
        "比例定数を a とすると、比例の関係は y = ax と表せます。",
        "表では、同じ列にある y を x で割った値を比べます。どの列でも同じ値になれば、その値が比例定数です。",
      ],
      formulas: ["y = ax", "a = y/x（x ≠ 0）"],
      table: {
        caption: "y = 3x の対応表と y/x の値",
        headers: ["1列目", "2列目", "3列目"],
        rows: [
          { header: "x", cells: ["1", "2", "3"] },
          { header: "y", cells: ["3", "6", "9"] },
          { header: "y/x", cells: ["3", "3", "3"] },
        ],
      },
    },
  ],
  example: {
    title: "例題: 表から比例の式を作る",
    problem: "x = 1, 2, 3 のとき y = 3, 6, 9 となる関係を式で表します。",
    steps: [
      {
        expression: "3/1 = 6/2 = 9/3 = 3",
        note: "対応する y を x で割ると、どれも3になります。",
      },
      {
        expression: "a = 3",
        note: "一定の値3が比例定数です。",
      },
      {
        expression: "y = 3x",
        note: "比例の式 y = ax に a = 3 を入れます。",
      },
    ],
  },
  practice: {
    title: "練習: 比例定数と式を求める",
    problem: "y は x に比例し、x = 4 のとき y = 20 です。",
    steps: [
      {
        prompt: "比例定数 a を求めてください。",
        answers: ["5"],
        placeholder: "a",
      },
      {
        prompt: "y を x の式で表してください。",
        answers: ["y=5x", "5x=y"],
        placeholder: "y = …",
      },
    ],
    hint: "a = y/x に x = 4、y = 20 を入れます。",
  },
  summary: [
    "y が x に比例するとき y = ax と表せる。",
    "対応する値から y/x を計算すると比例定数を求められる。",
  ],
};
