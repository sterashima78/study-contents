import type { MathLesson } from "../../../../math1/types";

export const geometryProofApplicationLesson: MathLesson = {
  key: "geometry-proof-application",
  title: "図形の性質を具体的な場面に活用する",
  description:
    "平行線・合同・平行四辺形の性質を、図案や構造の中の長さ・角・位置関係を確かめる場面に活用します。",
  goals: [
    "具体的な図から使える図形の性質を選べる。",
    "求めた長さや角を、使った根拠とともに説明できる。",
  ],
  concepts: [
    {
      title: "具体的な図でも根拠を明らかにする",
      body: [
        "装飾のパターンや骨組みの図でも、平行・等しい長さ・対角線など数学的な条件を取り出せば、学んだ図形の性質を使えます。",
        "答えだけでなく、平行線の錯角、合同な三角形の対応する辺、平行四辺形の対辺など、どの性質を根拠にしたかを明らかにします。",
      ],
      formulas: ["条件を読む → 使える性質を選ぶ → 結果を元の場面で解釈する"],
    },
  ],
  example: {
    title: "例題: 平行四辺形の骨組みを考える",
    problem: "平行四辺形ABCDの形をした骨組みでAB=75 cmです。向かい側CDの長さを求めます。",
    steps: [
      { expression: "ABCDは平行四辺形", note: "図の条件を確認します。" },
      { expression: "AB = CD", note: "平行四辺形の2組の対辺はそれぞれ等しいです。" },
      { expression: "CD = 75 cm", note: "元の場面の長さとして答えます。" },
    ],
  },
  practice: {
    title: "練習: 性質を具体的な長さに使う",
    problem: "平行四辺形PQRSでPQ=42 cmです。",
    steps: [
      {
        prompt: "辺RSの長さを答えてください。",
        answers: ["42", "42cm", "42 cm"],
        placeholder: "長さ",
      },
      {
        prompt: "使った性質を短く答えてください。",
        answers: ["対辺は等しい", "平行四辺形の対辺は等しい"],
        placeholder: "根拠",
      },
    ],
    hint: "PQとRSは平行四辺形の向かい合う辺です。",
  },
  summary: [
    "具体的な場面から、平行・合同・平行四辺形などの数学的な条件を取り出す。",
    "答えとともに、どの図形の性質を根拠にしたかを説明する。",
  ],
};
