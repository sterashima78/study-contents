import type { MathLesson } from "../../../../math1/types";

export const errorApproximationScientificNotationLesson: MathLesson = {
  key: "error-approximation-scientific-notation",
  title: "誤差・近似値と数の表し方を捉える",
  description: "測定値に伴う誤差と近似値を理解し、有効な桁を明確にするa×10^nの表し方を使います。",
  goals: [
    "測定値から真の値が含まれる範囲を説明できる。",
    "数をa×10^nの形で表し、有効な桁を明確にできる。",
  ],
  concepts: [
    {
      title: "測定値には誤差がある",
      body: [
        "測定値は真の値そのものとは限らず、最小目盛や丸め方に応じた範囲を表します。測定値と真の値の差を誤差といいます。",
        "例えば2300が十の位まで信頼できる測定値なら、2.30×10^3と書くことでどの桁まで有効かを示せます。",
      ],
      formulas: ["12.3を0.1の位まで測定 → 12.25 ≤ x < 12.35", "2300 = 2.30×10^3（十の位まで有効）"],
    },
  ],
  example: {
    title: "例題: 8.4cmという測定値の範囲",
    problem: "0.1cmの位まで測った値が8.4cmだったとします。",
    steps: [
      { expression: "半分の単位 = 0.05cm", note: "0.1cmの半分を境界にします。" },
      { expression: "8.35 ≤ x < 8.45", note: "四捨五入して8.4になる範囲です。" },
    ],
  },
  practice: {
    title: "練習: 近似値と指数表現",
    problem: "測定値と数の表し方を確認します。",
    steps: [
      { prompt: "0.1の位まで測った5.6の真の値の下限を答えてください。", answers: ["5.55"], placeholder: "下限" },
      { prompt: "4500を百の位まで有効としてa×10^nの形で表してください。", answers: ["4.5×10^3", "4.5x10^3", "4.5*10^3"], placeholder: "a×10^n" },
    ],
    hint: "0.1の半分は0.05です。4500は4.5×1000です。",
  },
  summary: [
    "近似値は真の値をある範囲で表し、誤差を伴う。",
    "a×10^nの形を使うと、有効な桁を明確に表せる。",
  ],
};
