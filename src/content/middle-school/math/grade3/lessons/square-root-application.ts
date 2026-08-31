import type { MathLesson } from "../../../../math1/types";

export const squareRootApplicationLesson: MathLesson = {
  key: "square-root-application",
  title: "平方根を具体的な場面に活用する",
  description: "長さや面積の関係を平方根で表し、有理数だけでは表し切れなかった量を正確に扱います。",
  goals: [
    "面積から正方形の1辺を平方根で表せる。",
    "平方根で表した値を問題の単位や意味に戻して解釈できる。",
  ],
  concepts: [
    {
      title: "平方根で表せる量が広がる",
      body: [
        "正方形の面積がaなら、1辺の長さは√aです。aが平方数でなくても、根号を使えば正確な値として表せます。",
        "近似値が必要な場面では最後に小数へ直し、途中は√aのまま計算すると誤差を増やしにくくなります。",
      ],
      formulas: ["正方形の面積 = a → 1辺 = √a", "面積20cm² → 1辺 = √20 = 2√5cm"],
    },
  ],
  example: {
    title: "例題: 面積18cm²の正方形の1辺",
    problem: "正方形の面積から1辺の長さを正確に表します。",
    steps: [
      { expression: "x² = 18", note: "1辺をx cmとすると面積はx²です。" },
      { expression: "x = √18", note: "長さなので正の平方根を選びます。" },
      { expression: "x = 3√2 cm", note: "√18=√(9×2)=3√2です。" },
    ],
  },
  practice: {
    title: "練習: 面積から長さを求める",
    problem: "面積32cm²の正方形について考えます。",
    steps: [
      {
        prompt: "1辺の長さを根号を使って簡単に表してください。",
        answers: ["4√2", "4√2cm"],
        placeholder: "長さ",
      },
      {
        prompt: "1辺の長さは正と負のどちらの平方根を使いますか。",
        answers: ["正", "正の平方根", "正の方"],
        placeholder: "正 / 負",
      },
    ],
    hint: "長さは負にならないので正の平方根を使います。",
  },
  summary: [
    "平方根を使うと、平方数でない面積からも長さを正確に表せる。",
    "具体的な量では、正負や単位を元の場面に戻して判断する。",
  ],
};
