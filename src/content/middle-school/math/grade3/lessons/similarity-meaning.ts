import type { MathLesson } from "../../../../math1/types";

export const similarityMeaningLesson: MathLesson = {
  key: "similarity-meaning",
  title: "相似の意味と対応を捉える",
  description: "形を保った拡大・縮小として相似を捉え、対応する辺と角を読み取ります。",
  goals: ["相似な図形の意味を説明できる。", "対応する辺の比と角の関係を読み取れる。"],
  concepts: [
    {
      title: "相似は形が同じという関係",
      body: ["一方を同じ割合で拡大・縮小すると他方と合同になる二つの図形は相似です。", "相似な図形では対応する辺の比がすべて等しく、対応する角はそれぞれ等しくなります。"],
      formulas: ["△ABC∽△DEF", "AB:DE=BC:EF=CA:FD"],
    },
  ],
  example: {
    title: "例題: 相似比を読む",
    problem: "△ABC∽△DEFでAB=4、DE=6とします。",
    steps: [
      { expression: "AB:DE=4:6", note: "対応する辺をそろえます。" },
      { expression: "相似比=2:3", note: "最も簡単な整数比にします。" },
    ],
  },
  practice: {
    title: "練習: 対応と相似比",
    problem: "対応する順序に注意します。",
    steps: [
      { prompt: "△ABC∽△PQRのとき、辺BCに対応する辺を答えてください。", answers: ["QR", "qr"], placeholder: "辺" },
      { prompt: "対応する辺が6cmと9cmのとき、小さい図形:大きい図形の相似比を答えてください。", answers: ["2:3", "2：3"], placeholder: "a:b" },
    ],
    hint: "相似の記号に書かれた頂点の順序を対応させます。",
  },
  summary: ["相似では対応する辺の比が等しく、対応する角が等しい。", "相似の記号の頂点順序から対応を読む。"],
};
