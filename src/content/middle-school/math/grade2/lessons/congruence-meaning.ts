import type { MathLesson } from "../../../../math1/types";

export const congruenceMeaningLesson: MathLesson = {
  key: "congruence-meaning",
  title: "合同の意味と対応を捉える",
  description:
    "一方を移動して他方に重ねられる図形を合同と捉え、対応する頂点・辺・角を正しく読み取ります。",
  goals: [
    "合同な図形の意味を説明できる。",
    "合同記号≡の並びから対応する頂点・辺・角を読み取れる。",
  ],
  concepts: [
    {
      title: "合同では対応の順序が重要",
      body: [
        "二つの図形は、一方を移動して他方にぴったり重ねられるとき合同です。合同な図形では対応する辺と角がそれぞれ等しくなります。",
        "△ABC≡△DEFなら、A↔D、B↔E、C↔Fの順に対応します。記号を書く順序そのものが対応を表します。",
      ],
      formulas: ["△ABC ≡ △DEF → AB = DE, ∠A = ∠D"],
    },
  ],
  example: {
    title: "例題: 合同記号から対応を読む",
    problem: "△ABC≡△PQRのとき、辺BCに対応する辺を考えます。",
    steps: [
      { expression: "A↔P, B↔Q, C↔R", note: "頂点を順番に対応させます。" },
      { expression: "BC ↔ QR", note: "BとCに対応するQとRを結びます。" },
      { expression: "BC = QR", note: "合同なので対応する辺の長さは等しいです。" },
    ],
  },
  practice: {
    title: "練習: 対応する辺を読む",
    problem: "△ABC≡△XYZです。",
    steps: [
      { prompt: "辺ACに対応する辺を答えてください。", answers: ["XZ", "ZX"], placeholder: "辺" },
    ],
    hint: "AはX、CはZに対応します。",
  },
  summary: [
    "合同な図形は移動によって重ね合わせられ、対応する辺と角が等しい。",
    "合同記号の頂点の順序から対応関係を読む。",
  ],
};
