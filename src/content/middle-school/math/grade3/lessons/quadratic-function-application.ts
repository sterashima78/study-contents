import type { MathLesson } from "../../../../math1/types";

export const quadraticFunctionApplicationLesson: MathLesson = {
  key: "quadratic-function-application",
  title: "関数 y=ax² を具体的な事象に活用する",
  description: "実験や身近な事象を2乗比例とみなし、表・式・グラフから値を予測して妥当性を考えます。",
  goals: ["事象をy=ax²とみなすための根拠を説明できる。", "モデルから値を予測し、適用範囲を考えられる。"],
  concepts: [
    {
      title: "理想化・単純化してモデルを作る",
      body: ["実測値が完全には一致しなくても、y/x²がほぼ一定ならy=ax²とみなして考えることがあります。", "予測と実測の食い違いを確認し、どの範囲でモデルが役立つか考えることも重要です。"],
      formulas: ["実測データ → y/x²を比較 → y=ax²とみなす → 予測"],
    },
  ],
  example: {
    title: "例題: 架空の制動距離モデル",
    problem: "速度xを10km/h単位、制動距離yをmとしてy=2x²とみなします。",
    steps: [
      { expression: "x=4", note: "40km/hを10km/h単位で表します。" },
      { expression: "y=2·4²=32", note: "モデルで予測します。" },
      { expression: "約32m", note: "実際には路面などの条件で変わります。" },
    ],
  },
  practice: {
    title: "練習: モデルで予測する",
    problem: "教材用の架空モデルを使います。",
    steps: [
      { prompt: "y=3x²というモデルでx=4のときyを答えてください。", answers: ["48"], placeholder: "y" },
      { prompt: "xを2倍にすると、このモデルのyは何倍になりますか。", answers: ["4", "4倍"], placeholder: "倍率" },
    ],
    hint: "2乗比例なのでxの倍率を2乗します。",
  },
  summary: ["実データを理想化してy=ax²とみなすことがある。", "予測値はモデルの前提と適用範囲とともに解釈する。"],
};
