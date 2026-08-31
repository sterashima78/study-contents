import type { MathLesson } from "../../../../math1/types";

export const pythagoreanHypotenuseLesson: MathLesson = {
  key: "pythagorean-hypotenuse",
  title: "三平方の定理で斜辺を求める",
  description: "直角をはさむ2辺から斜辺の長さを、平方根を使って求めます。",
  goals: ["a²+b²=c²へ値を代入できる。", "平方根を簡単にして斜辺の長さを求められる。"],
  concepts: [
    {
      title: "最後に正の平方根を取る",
      body: [
        "長さを求めるので、c²の値を求めた後は正の平方根を取ります。",
        "平方根の単元で学んだ根号の簡単化が、図形の計量に直接つながります。",
      ],
      formulas: ["c=√(a²+b²)"],
    },
  ],
  example: {
    title: "例題: 辺2と3から斜辺",
    problem: "直角をはさむ2辺が2cmと3cmです。",
    steps: [
      { expression: "c²=2²+3²=13", note: "三平方の定理を使います。" },
      { expression: "c=√13", note: "長さなので正の平方根です。" },
    ],
  },
  practice: {
    title: "練習: 斜辺を求める",
    problem: "平方して足し、平方根を取ります。",
    steps: [
      {
        prompt: "直角をはさむ2辺が6cmと8cmのとき斜辺を答えてください。",
        answers: ["10", "10cm"],
        placeholder: "長さ",
      },
      {
        prompt: "直角をはさむ2辺が1cmと2cmのとき斜辺を根号で答えてください。",
        answers: ["√5", "√5cm"],
        placeholder: "長さ",
      },
    ],
    hint: "斜辺の平方=2辺の平方の和です。",
  },
  summary: ["斜辺はc=√(a²+b²)で求める。", "長さでは正の平方根を採用する。"],
};
