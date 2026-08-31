import type { MathLesson } from "../../../../math1/types";

export const similarityAreaRatioLesson: MathLesson = {
  key: "similarity-area-ratio",
  title: "相似比から面積比を求める",
  description: "相似な平面図形では、長さの比を2乗すると面積比になることを使います。",
  goals: ["相似比と面積比の関係を説明できる。", "相似比から面積や面積比を求められる。"],
  concepts: [
    {
      title: "面積は長さの2乗で変わる",
      body: ["相似比がm:nなら、縦も横も同じ割合で変わるため面積比はm²:n²です。", "円の面積S=πr²も、半径の比の2乗が面積比になる例です。"],
      formulas: ["相似比 m:n → 面積比 m²:n²"],
    },
  ],
  example: {
    title: "例題: 面積比を求める",
    problem: "相似比が2:3の二つの図形を考えます。",
    steps: [
      { expression: "2²:3²", note: "相似比をそれぞれ2乗します。" },
      { expression: "面積比=4:9", note: "長さの比とは異なります。" },
    ],
  },
  practice: {
    title: "練習: 2乗する",
    problem: "相似比と面積比を区別します。",
    steps: [
      { prompt: "相似比3:5のとき面積比を答えてください。", answers: ["9:25", "9：25"], placeholder: "a:b" },
      { prompt: "相似比1:4で小さい図形の面積が6cm²のとき、大きい図形の面積を答えてください。", answers: ["96", "96cm²", "96cm^2"], placeholder: "面積" },
    ],
    hint: "面積比は相似比の2乗です。",
  },
  summary: ["相似比m:nなら面積比はm²:n²。", "面積は長さの比そのものではなく2乗で変化する。"],
};
