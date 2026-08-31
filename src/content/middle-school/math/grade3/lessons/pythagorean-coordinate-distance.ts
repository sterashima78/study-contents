import type { MathLesson } from "../../../../math1/types";

export const pythagoreanCoordinateDistanceLesson: MathLesson = {
  key: "pythagorean-coordinate-distance",
  title: "座標平面の2点間の距離を求める",
  description: "横方向と縦方向の差を直角三角形の2辺とみなし、2点間の距離を求めます。",
  goals: ["座標の差から直角三角形を作れる。", "三平方の定理で2点間の距離を求められる。"],
  concepts: [
    {
      title: "座標の差が直角辺になる",
      body: [
        "点A(x₁,y₁)、B(x₂,y₂)の横の差と縦の差は互いに垂直です。",
        "2点を結ぶ線分を斜辺とする直角三角形を作れば、三平方の定理で距離を求められます。",
      ],
      formulas: ["AB=√((x₂−x₁)²+(y₂−y₁)²)"],
    },
  ],
  example: {
    title: "例題: A(1,2), B(4,6)",
    problem: "横の差3、縦の差4です。",
    steps: [
      { expression: "Δx=3, Δy=4", note: "座標の差を求めます。" },
      { expression: "AB²=3²+4²=25", note: "三平方の定理を使います。" },
      { expression: "AB=5", note: "距離は正の値です。" },
    ],
  },
  practice: {
    title: "練習: 座標の差を使う",
    problem: "横と縦の差を先に求めます。",
    steps: [
      { prompt: "A(0,0), B(6,8)の距離を答えてください。", answers: ["10"], placeholder: "距離" },
      {
        prompt: "A(1,1), B(3,4)の距離を根号で答えてください。",
        answers: ["√13"],
        placeholder: "距離",
      },
    ],
    hint: "座標差を直角三角形の2辺とみなします。",
  },
  summary: ["座標の横差と縦差は直角辺になる。", "2点間の距離は三平方の定理で求められる。"],
};
