import type { MathLesson } from "../../../../math1/types";

export const similarityVolumeRatioLesson: MathLesson = {
  key: "similarity-volume-ratio",
  title: "相似な立体の体積比を求める",
  description: "相似な立体では、相似比の3乗が体積比になることを理解し活用します。",
  goals: ["相似な立体の意味を説明できる。", "相似比から体積比と体積を求められる。"],
  concepts: [
    {
      title: "体積は長さの3乗で変わる",
      body: ["相似な立体では対応する長さの比がすべて相似比に等しくなります。", "縦・横・高さの三方向が同じ割合で変わるので、相似比m:nに対する体積比はm³:n³です。"],
      formulas: ["相似比 m:n → 体積比 m³:n³"],
    },
  ],
  example: {
    title: "例題: 体積比を求める",
    problem: "相似比が2:3の二つの立体を考えます。",
    steps: [
      { expression: "2³:3³", note: "相似比を3乗します。" },
      { expression: "体積比=8:27", note: "面積比4:9とも区別します。" },
    ],
  },
  practice: {
    title: "練習: 3乗する",
    problem: "立体では3方向の長さが変わります。",
    steps: [
      { prompt: "相似比1:3の立体の体積比を答えてください。", answers: ["1:27", "1：27"], placeholder: "a:b" },
      { prompt: "相似比1:2で小さい立体の体積が10cm³のとき、大きい立体の体積を答えてください。", answers: ["80", "80cm³", "80cm^3"], placeholder: "体積" },
    ],
    hint: "体積比は相似比の3乗です。",
  },
  summary: ["相似な立体では対応する長さの比が等しい。", "相似比m:nなら体積比はm³:n³。"],
};
