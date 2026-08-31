import type { MathLesson } from "../../../../math1/types";

export const quadraticFunctionGraphLesson: MathLesson = {
  key: "quadratic-function-graph",
  title: "関数 y=ax² のグラフをかく",
  description: "表から点を取り、原点を通りy軸に対称な放物線としてグラフを捉えます。",
  goals: ["値の表から座標を取りグラフをかける。", "放物線の対称性と原点を通る特徴を説明できる。"],
  concepts: [
    {
      title: "左右対称の曲線",
      body: ["xと−xではx²が同じなのでyの値も同じです。そのためグラフはy軸について対称です。", "x=0ならy=0なので原点を通り、直線ではなく滑らかな曲線である放物線になります。"],
      formulas: ["f(x)=f(−x)", "(0,0)を通る"],
    },
  ],
  example: {
    title: "例題: y=x²の点を取る",
    problem: "x=-2,-1,0,1,2の値を使います。",
    steps: [
      { expression: "y=4,1,0,1,4", note: "左右で同じ値になります。" },
      { expression: "(-2,4),(-1,1),(0,0),(1,1),(2,4)", note: "点を滑らかに結びます。" },
    ],
  },
  practice: {
    title: "練習: グラフの特徴",
    problem: "式と対称性を対応させます。",
    steps: [
      { prompt: "y=3x²でx=-2のときyを答えてください。", answers: ["12"], placeholder: "y" },
      { prompt: "y=ax²のグラフは何軸について対称ですか。", answers: ["y軸", "y軸について対称"], placeholder: "軸" },
    ],
    hint: "xと−xの2乗は同じです。",
  },
  summary: ["y=ax²のグラフは原点を通る放物線。", "y軸について対称になる。"],
};
