import type { MathLesson } from "../../../../math1/types";

export const pythagoreanSpaceLesson: MathLesson = {
  key: "pythagorean-space",
  title: "空間図形の中の直角三角形を見付ける",
  description: "直方体の対角線などを、平面上の直角三角形を段階的に作って求めます。",
  goals: ["空間図形から必要な直角三角形を取り出せる。", "三平方の定理を2段階で使って空間の長さを求められる。"],
  concepts: [
    {
      title: "一度に考えず、面の対角線から",
      body: ["直方体の空間対角線は、まず底面の対角線を求め、その対角線と高さでできる直角三角形に三平方の定理をもう一度使います。", "見えにくい直角三角形を補助線で作ることが重要です。"],
      formulas: ["空間対角線²=縦²+横²+高さ²"],
    },
  ],
  example: {
    title: "例題: 3×4×12の直方体",
    problem: "空間対角線を求めます。",
    steps: [
      { expression: "底面対角線=√(3²+4²)=5", note: "まず底面で三平方を使います。" },
      { expression: "空間対角線=√(5²+12²)", note: "高さ12との直角三角形を作ります。" },
      { expression: "=13", note: "二段階で求められました。" },
    ],
  },
  practice: {
    title: "練習: 空間対角線",
    problem: "3方向の長さを平方して足します。",
    steps: [
      { prompt: "縦1、横2、高さ2の直方体の空間対角線を答えてください。", answers: ["3"], placeholder: "長さ" },
      { prompt: "縦2、横3、高さ6の直方体の空間対角線を答えてください。", answers: ["7"], placeholder: "長さ" },
    ],
    hint: "縦²+横²+高さ²の平方根でも求められます。",
  },
  summary: ["空間では必要な直角三角形を補助的に作る。", "直方体の空間対角線は3方向の長さの平方和から求められる。"],
};
