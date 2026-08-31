import type { MathLesson } from "../../../../math1/types";

export const quadraticEquationModelingLesson: MathLesson = {
  key: "quadratic-equation-modeling",
  title: "具体的な場面から二次方程式をつくる",
  description: "求めたい数量をxとし、二通りに表される数量を等号で結んで二次方程式をつくります。",
  goals: [
    "求めたい数量を文字で表し、数量関係から二次方程式をつくれる。",
    "式が元の事象の数量関係を正しく表しているか確認できる。",
  ],
  concepts: [
    {
      title: "方程式をつくる4段階",
      body: [
        "まず求めたい数量をxで表します。次に、問題の中で同じ数量を二通りに表し、それらを等号で結びます。",
        "二次方程式では面積や積の関係からx²が現れることがあります。解く前に、作った式が元の数量関係を正しく表しているか確かめます。",
      ],
      formulas: ["文字を決める → 数量を二通りに表す → 等号で結ぶ → 解く"],
    },
  ],
  example: {
    title: "例題: 正方形から作った長方形",
    problem: "元の正方形の1辺をx cmとし、一方を1cm長く、他方を1cm短くした長方形の面積を24cm²とします。",
    steps: [
      { expression: "長辺=x+1", note: "元の1辺より1cm長い辺です。" },
      { expression: "短辺=x−1", note: "元の1辺より1cm短い辺です。" },
      { expression: "(x+1)(x−1)=24", note: "縦×横=面積で方程式を作ります。" },
      { expression: "x²−25=0", note: "解きやすい形へ整理します。" },
    ],
  },
  practice: {
    title: "練習: 数量関係を式にする",
    problem: "求める量をxと置いて、面積の関係を作ります。",
    steps: [
      { prompt: "元の正方形の1辺をx cmとし、長辺x+2 cm、短辺x−2 cmの長方形の面積が45cm²です。方程式を答えてください。", answers: ["(x+2)(x-2)=45", "(x+2)(x−2)=45", "x²-4=45", "x^2-4=45", "x²−4=45"], placeholder: "方程式" },
      { prompt: "縦x cm、横x+3 cmの長方形の面積が40cm²です。方程式を答えてください。", answers: ["x(x+3)=40", "x²+3x=40", "x^2+3x=40"], placeholder: "方程式" },
    ],
    hint: "面積なら縦×横を作り、与えられた面積と等号で結びます。",
  },
  summary: ["求めたい数量を文字で表し、同じ数量の二通りの表し方を等号で結ぶ。", "作った方程式が元の数量関係を表しているか確認する。"],
};
