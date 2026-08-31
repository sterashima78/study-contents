import type { MathLesson } from "../../../../math1/types";

export const pythagoreanApplicationLesson: MathLesson = {
  key: "pythagorean-application",
  title: "三平方の定理を具体的な場面に活用する",
  description: "直接測れない距離を直角三角形へ単純化し、必要に応じて平方根を近似して解釈します。",
  goals: [
    "具体的な事象に必要な直角三角形を見いだせる。",
    "根号の値を場面に応じて近似し、結果を解釈できる。",
  ],
  concepts: [
    {
      title: "現実を直角三角形としてモデル化する",
      body: [
        "水平距離と高さの差が分かれば、斜めの実距離を直角三角形の斜辺として求められます。",
        "現実を理想化・単純化した結果であることを確認し、必要な精度で近似値を使います。",
      ],
      formulas: ["斜距離=√(水平距離²+高さの差²)"],
    },
  ],
  example: {
    title: "例題: 高低差のある2地点",
    problem: "水平距離100m、高さの差20mとします。",
    steps: [
      { expression: "d²=100²+20²=10400", note: "直角三角形として表します。" },
      { expression: "d=20√26", note: "正確な値です。" },
      { expression: "d≈102m", note: "実際の距離として必要な精度に丸めます。" },
    ],
  },
  practice: {
    title: "練習: 場面を三角形にする",
    problem: "水平・垂直・斜めの関係を見ます。",
    steps: [
      {
        prompt: "水平距離30m、高さの差40mの2地点間の直線距離を答えてください。",
        answers: ["50", "50m"],
        placeholder: "距離",
      },
      {
        prompt: "一辺10cmの正方形の対角線を根号で答えてください。",
        answers: ["10√2", "10√2cm"],
        placeholder: "長さ",
      },
    ],
    hint: "求めたい線分を斜辺にする直角三角形を探します。",
  },
  summary: [
    "直接測れない距離も直角三角形に単純化して求められる。",
    "平方根は場面に応じて近似値へ直して解釈する。",
  ],
};
