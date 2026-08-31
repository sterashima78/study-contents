import type { MathLesson } from "../../../../math1/types";

export const linearFunctionExpressionLesson: MathLesson = {
  key: "linear-function-expression",
  title: "表から一次関数の式を求める",
  description: "表の対応から変化の割合aとx=0のときの値bを読み取り、一次関数 y = ax + b の式を求めます。",
  goals: [
    "表から変化の割合aを求められる。",
    "x=0のときの値bと組み合わせて一次関数の式を決められる。",
  ],
  concepts: [
    {
      title: "aとbを別々に決める",
      body: [
        "まず表の二つの組から変化の割合aを求めます。次にx=0の列があれば、そのときのyがそのままbです。",
        "x=0の列がない場合でも、求めたaと一組のx,yを y=ax+b に代入すればbを求められます。",
      ],
      formulas: ["y = ax + b", "a = yの増加量 / xの増加量"],
    },
  ],
  example: {
    title: "例題: 表から y = ax + b を求める",
    problem: "x=0,2,5 に対して y=−1,5,14 となる一次関数の式を求めます。",
    steps: [
      { expression: "a = (5 − (−1)) ÷ (2 − 0) = 3", note: "二つの組から変化の割合を求めます。" },
      { expression: "b = −1", note: "x=0のときy=−1なので切片bは−1です。" },
      { expression: "y = 3x − 1", note: "a=3、b=−1を y=ax+b に入れます。" },
    ],
  },
  practice: {
    title: "練習: 表の二つの情報から式を決める",
    problem: "x=0のときy=4、x=3のときy=10となる一次関数を考えます。",
    steps: [
      { prompt: "変化の割合aを答えてください。", answers: ["2"], placeholder: "a" },
      { prompt: "一次関数の式を答えてください。", answers: ["y=2x+4", "2x+4"], placeholder: "y=..." },
    ],
    hint: "yの増加量は6、xの増加量は3です。",
  },
  summary: [
    "表から変化の割合aを求める。",
    "x=0のときのy、または一組のx,yを使ってbを求め、y=ax+bを完成させる。",
  ],
};
