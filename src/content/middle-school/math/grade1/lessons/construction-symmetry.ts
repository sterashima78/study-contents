import type { MathLesson } from "../../../../math1/types";

export const constructionSymmetryLesson: MathLesson = {
  key: "construction-symmetry",
  title: "作図と対称性",
  description:
    "定規とコンパスによる作図を、線対称や等しい距離という図形の性質と結び付けて捉えます。",
  goals: [
    "数学でいう作図が、定規とコンパスを使って条件を満たす図形をつくることだと説明できる。",
    "二つの円の交点が作図で重要になる理由を、等しい距離と線対称性から説明できる。",
  ],
  concepts: [
    {
      title: "作図は図形の性質を使う",
      body: [
        "作図では、目盛りで長さを測って答えを決めるのではなく、定規で直線を引き、コンパスで円をかいたり長さを写し取ったりします。",
        "同じ半径の二つの円の交点は、二つの中心からの距離が等しい点です。この性質と線対称性が、角の二等分線や垂直二等分線、垂線の作図に共通して現れます。",
      ],
    },
  ],
  example: {
    title: "例題: 二つの円の交点が表すこと",
    problem: "点A、Bを中心とする同じ半径の二つの円が、点PとQで交わっています。",
    steps: [
      {
        expression: "AP = BP",
        note: "Pは両方の円周上にあるので、AからもBからも半径分だけ離れています。",
      },
      { expression: "AQ = BQ", note: "Qについても同じ理由で、AとBからの距離が等しくなります。" },
      {
        expression: "直線PQはABの対称軸",
        note: "AとBから等距離の点P、Qを結ぶことで、線対称性を表す直線が得られます。",
      },
    ],
  },
  practice: {
    title: "練習: 二つの円の交点を読む",
    problem: "A、Bを中心とする半径5 cmの二つの円の交点をPとします。",
    steps: [
      { prompt: "APの長さを答えてください。", answers: ["5", "5cm", "5 cm"], placeholder: "長さ" },
      { prompt: "BPの長さを答えてください。", answers: ["5", "5cm", "5 cm"], placeholder: "長さ" },
    ],
    hint: "Pは二つの円のどちらの円周上にもあります。",
  },
  summary: [
    "作図は定規とコンパスを使い、図形の性質を根拠に条件を満たす図をつくる。",
    "同じ半径の二つの円の交点は、二つの中心から等距離にある。",
  ],
};
