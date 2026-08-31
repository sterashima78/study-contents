import type { MathLesson } from "../../../../math1/types";

export const pythagoreanMeaningLesson: MathLesson = {
  key: "pythagorean-meaning",
  title: "三平方の定理の意味を捉える",
  description: "直角三角形の3辺の長さと、その辺上に作る正方形の面積の関係を結び付けます。",
  goals: ["三平方の定理を式で表せる。", "長さの関係と面積の関係を対応させて説明できる。"],
  concepts: [
    {
      title: "斜辺の平方=他の2辺の平方の和",
      body: ["直角をはさむ2辺をa、b、斜辺をcとするとa²+b²=c²です。", "これは各辺を1辺とする正方形の面積について、二つの小さい正方形の面積の和が斜辺上の正方形の面積に等しいことも表します。"],
      formulas: ["a²+b²=c²"],
    },
  ],
  example: {
    title: "例題: 3,4,5の直角三角形",
    problem: "直角をはさむ2辺が3と4、斜辺が5です。",
    steps: [
      { expression: "3²+4²=9+16", note: "2辺の平方を足します。" },
      { expression: "25=5²", note: "斜辺の平方と一致します。" },
    ],
  },
  practice: {
    title: "練習: 式を読む",
    problem: "斜辺を見分けます。",
    steps: [
      { prompt: "直角をはさむ2辺をa,b、斜辺をcとした三平方の定理を答えてください。", answers: ["a²+b²=c²", "a^2+b^2=c^2"], placeholder: "式" },
      { prompt: "直角三角形の最も長い辺を何と呼びますか。", answers: ["斜辺"], placeholder: "用語" },
    ],
    hint: "斜辺は直角の向かい側です。",
  },
  summary: ["直角三角形ではa²+b²=c²。", "定理は辺の長さと正方形の面積を結び付ける。"],
};
