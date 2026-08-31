import type { MathLesson } from "../../../../math1/types";

export const similarityProofLesson: MathLesson = {
  key: "similarity-proof",
  title: "相似条件を根拠に証明する",
  description: "相似であることを示すために必要な角や辺の比を逆算し、証明の方針を立てます。",
  goals: ["結論から必要な相似条件を逆算できる。", "既習の角の性質を根拠に相似を証明できる。"],
  concepts: [
    {
      title: "証明は結論から逆算する",
      body: ["二つの三角形が相似だと示したいなら、まず使えそうな相似条件を決めます。", "平行線の同位角・錯角や共通角などから、条件に必要な角の等しさを集めます。"],
      formulas: ["仮定 → 根拠 → 相似条件 → 結論"],
    },
  ],
  example: {
    title: "例題: 平行線から相似を示す",
    problem: "△ABCでDはAB上、EはAC上、DE∥BCとします。",
    steps: [
      { expression: "∠ADE=∠ABC", note: "平行線の同位角です。" },
      { expression: "∠AED=∠ACB", note: "平行線の同位角です。" },
      { expression: "△ADE∽△ABC", note: "2組の角がそれぞれ等しいためです。" },
    ],
  },
  practice: {
    title: "練習: 根拠を言葉にする",
    problem: "相似条件につながる根拠を答えます。",
    steps: [
      { prompt: "DE∥BCから∠ADE=∠ABCといえる根拠を答えてください。", answers: ["同位角", "平行線の同位角"], placeholder: "根拠" },
      { prompt: "2組の角がそれぞれ等しいことから使える相似条件を答えてください。", answers: ["2組の角", "二組の角"], placeholder: "条件" },
    ],
    hint: "平行線から作られる同位角・錯角に注目します。",
  },
  summary: ["相似を証明するときは使う相似条件を先に見通す。", "仮定から条件に必要な根拠を集める。"],
};
