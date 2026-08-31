import type { MathLesson } from "../../../../math1/types";

export const midpointTheoremLesson: MathLesson = {
  key: "midpoint-theorem",
  title: "中点連結定理を相似から捉える",
  description: "2辺の中点を結ぶ線分の性質を、平行線と線分の比の特別な場合として理解します。",
  goals: ["中点連結定理を説明できる。", "相似比1:2から平行と長さの関係を読み取れる。"],
  concepts: [
    {
      title: "相似比1:2の特別な場合",
      body: [
        "△ABCの辺AB、ACの中点をP、QとするとPQ∥BCでPQ=BC/2です。",
        "これは△APQと△ABCの相似比が1:2になる、平行線と線分の比の特別な場合です。",
      ],
      formulas: ["P,Qが中点 → PQ∥BC", "PQ=BC/2"],
    },
  ],
  example: {
    title: "例題: 中点を結ぶ長さ",
    problem: "△ABCでP、Qが2辺の中点、BC=14とします。",
    steps: [
      { expression: "AP:AB=1:2", note: "Pは中点です。" },
      { expression: "PQ:BC=1:2", note: "相似な三角形の対応辺です。" },
      { expression: "PQ=7", note: "BCの半分です。" },
    ],
  },
  practice: {
    title: "練習: 中点連結定理",
    problem: "平行と半分の二つの性質を使います。",
    steps: [
      {
        prompt: "三角形の2辺の中点を結ぶ線分は残りの1辺とどんな位置関係ですか。",
        answers: ["平行", "平行です"],
        placeholder: "位置関係",
      },
      {
        prompt: "BC=18のとき、中点を結ぶ線分PQの長さを答えてください。",
        answers: ["9"],
        placeholder: "長さ",
      },
    ],
    hint: "中点なら相似比は1:2です。",
  },
  summary: [
    "中点連結定理は平行線と線分の比の特別な場合。",
    "中点を結ぶ線分は第3辺に平行で長さは半分。",
  ],
};
