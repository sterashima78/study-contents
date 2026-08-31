import type { MathLesson } from "../../../../math1/types";

export const quadraticEquationInterpretationLesson: MathLesson = {
  key: "quadratic-equation-interpretation",
  title: "二次方程式の解を場面に戻して吟味する",
  description: "得られた二つの解を元の事象に戻し、長さや個数などの条件に合う解だけを答えとして採用します。",
  goals: [
    "二次方程式の解と問題の答えを区別できる。",
    "得られた解を元の事象へ戻し、条件に合うか吟味できる。",
  ],
  concepts: [
    {
      title: "方程式の解がそのまま答えとは限らない",
      body: [
        "二次方程式には二つの解が現れることがありますが、長さや個数を表すxには負の値を採用できないことがあります。",
        "式を解いた後は、単位、正負、問題文の条件を確認し、採用した値で元の数量関係が成り立つか確かめます。",
      ],
      formulas: ["方程式を解く → 条件に合う解を選ぶ → 元の事象で確かめる"],
    },
  ],
  example: {
    title: "例題: x²−25=0を長さの問題へ戻す",
    problem: "元の正方形の1辺x cmについて得た方程式です。",
    steps: [
      { expression: "x²−25=0", note: "因数分解または平方根で解きます。" },
      { expression: "x=5, −5", note: "方程式としては二つとも解です。" },
      { expression: "x>1", note: "短辺x−1も正の長さである必要があります。" },
      { expression: "x=5cm", note: "−5は長さとして不適切なので採用しません。" },
      { expression: "(5+1)(5−1)=24", note: "元の面積条件でも確かめられます。" },
    ],
  },
  practice: {
    title: "練習: 解を吟味する",
    problem: "方程式の解から、問題の条件に合う値を選びます。",
    steps: [
      { prompt: "正方形の1辺x cmについてx²=36を得ました。問題の答えとなる長さを答えてください。", answers: ["6", "6cm", "6cmです"], placeholder: "長さ" },
      { prompt: "連続する正の整数をx、x+1とし、積が72です。x²+x−72=0の解が8と−9のとき、小さい方の整数を答えてください。", answers: ["8"], placeholder: "整数" },
    ],
    hint: "方程式の解を、長さ・個数・正の整数など元の条件へ戻して考えます。",
  },
  summary: ["方程式の解と問題の答えは区別する。", "解を元の事象へ戻し、条件と数量関係の両方を確かめる。"],
};
