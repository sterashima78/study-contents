import type { MathLesson } from "../../../../math1/types";

export const similarityApplicationLesson: MathLesson = {
  key: "similarity-application",
  title: "相似を測量や比較に活用する",
  description: "直接測りにくい高さや距離を、縮図や相似な三角形を使って推定します。",
  goals: ["具体的な場面から相似な三角形を見いだせる。", "相似比を用いて直接測れない量を求められる。"],
  concepts: [
    {
      title: "測れる量から測れない量へ",
      body: ["同じ時刻の物体と影では太陽光の向きがほぼ平行なので、高さと影から相似な直角三角形を作れます。", "現実の事象を単純化したことを意識し、得た値が近似的な推定である場合も確認します。"],
      formulas: ["物体の高さ:影の長さ=基準物の高さ:基準物の影"],
    },
  ],
  example: {
    title: "例題: 影から高さを求める",
    problem: "高さ1.5mの棒の影が2m、木の影が8mです。",
    steps: [
      { expression: "1.5:2=h:8", note: "同じ太陽光でできる三角形は相似とみなせます。" },
      { expression: "h=6", note: "比例式を解きます。" },
      { expression: "木の高さ≈6m", note: "実際の測定には誤差があります。" },
    ],
  },
  practice: {
    title: "練習: 相似で推定する",
    problem: "対応する高さと影をそろえます。",
    steps: [
      { prompt: "高さ2mの棒の影が3m、塔の影が12mのとき塔の高さを答えてください。", answers: ["8", "8m"], placeholder: "高さ" },
      { prompt: "縮尺1:500の図で4cmの距離は実際には何mですか。", answers: ["20", "20m"], placeholder: "距離" },
    ],
    hint: "同じ種類の長さどうしを対応させて比例式を作ります。",
  },
  summary: ["相似は直接測れない高さや距離の推定に使える。", "現実を単純化した条件と誤差にも注意する。"],
};
