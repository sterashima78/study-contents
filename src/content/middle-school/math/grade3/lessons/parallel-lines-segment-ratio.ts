import type { MathLesson } from "../../../../math1/types";

export const parallelLinesSegmentRatioLesson: MathLesson = {
  key: "parallel-lines-segment-ratio",
  title: "平行線と線分の比を使う",
  description: "三角形を横切る平行線から相似を見いだし、対応する線分の比を求めます。",
  goals: ["平行線から相似な三角形を見いだせる。", "AP:AB=AQ:AC=PQ:BCを使って長さを求められる。"],
  concepts: [
    {
      title: "平行線が相似を作る",
      body: [
        "△ABCでPがAB上、QがAC上にありPQ∥BCなら△APQと△ABCは相似です。",
        "そのため対応する辺の比AP:AB=AQ:AC=PQ:BCが成り立ちます。",
      ],
      formulas: ["PQ∥BC → AP:AB=AQ:AC=PQ:BC"],
    },
  ],
  example: {
    title: "例題: 線分の長さを求める",
    problem: "AP=3、AB=5、AQ=6、PQ∥BCとします。",
    steps: [
      { expression: "AP:AB=AQ:AC", note: "平行線と線分の比を使います。" },
      { expression: "3:5=6:AC", note: "値を代入します。" },
      { expression: "AC=10", note: "比例式を解きます。" },
    ],
  },
  practice: {
    title: "練習: 比例式を作る",
    problem: "対応する位置をそろえます。",
    steps: [
      {
        prompt: "AP=4、AB=10、AQ=6、PQ∥BCのときACを答えてください。",
        answers: ["15"],
        placeholder: "長さ",
      },
      {
        prompt: "AP:AB=2:5、BC=20、PQ∥BCのときPQを答えてください。",
        answers: ["8"],
        placeholder: "長さ",
      },
    ],
    hint: "小さい三角形:大きい三角形の順序をそろえます。",
  },
  summary: ["平行線から相似を作り、対応する辺の比を使う。", "比の左右で対応する位置をそろえる。"],
};
