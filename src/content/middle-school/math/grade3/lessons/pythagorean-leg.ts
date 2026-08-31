import type { MathLesson } from "../../../../math1/types";

export const pythagoreanLegLesson: MathLesson = {
  key: "pythagorean-leg",
  title: "斜辺と1辺から残りの辺を求める",
  description: "斜辺の平方から既知の辺の平方を引き、残りの直角辺を求めます。",
  goals: ["斜辺を正しく見分けられる。", "c²−a²から残りの辺を求められる。"],
  concepts: [
    {
      title: "斜辺の平方から引く",
      body: ["a²+b²=c²をbについて見ればb²=c²−a²です。", "最長辺が斜辺であることを確認してから式を立てると、引く向きを誤りにくくなります。"],
      formulas: ["b=√(c²−a²)"],
    },
  ],
  example: {
    title: "例題: 斜辺13、1辺5",
    problem: "残りの直角辺をbとします。",
    steps: [
      { expression: "b²=13²−5²", note: "斜辺の平方から引きます。" },
      { expression: "b²=144", note: "169−25です。" },
      { expression: "b=12", note: "長さなので正の値です。" },
    ],
  },
  practice: {
    title: "練習: 引いて求める",
    problem: "斜辺を先に確認します。",
    steps: [
      { prompt: "斜辺10cm、1辺6cmの直角三角形で残りの辺を答えてください。", answers: ["8", "8cm"], placeholder: "長さ" },
      { prompt: "斜辺5cm、1辺2cmの直角三角形で残りの辺を根号で答えてください。", answers: ["√21", "√21cm"], placeholder: "長さ" },
    ],
    hint: "最長辺の平方から既知の辺の平方を引きます。",
  },
  summary: ["残りの直角辺は斜辺の平方から既知の辺の平方を引く。", "最後は長さなので正の平方根を取る。"],
};
