import type { MathLesson } from "../../../../math1/types";

export const boxPlotReadingLesson: MathLesson = {
  key: "box-plot-reading",
  title: "箱ひげ図を読み、表す",
  description: "最小値・第1四分位数・中央値・第3四分位数・最大値を箱ひげ図に対応させます。",
  goals: [
    "箱ひげ図の箱・中央値・ひげが表す値を読み取れる。",
    "5つの代表的な値から箱ひげ図の構造を説明できる。",
  ],
  concepts: [
    {
      title: "5つの値で分布を要約する",
      body: [
        "箱ひげ図では、箱の左端をQ1、箱の中の線を中央値Q2、箱の右端をQ3として表します。左右のひげの端は最小値と最大値です。",
        "箱の長さは四分位範囲なので、箱が長いほど中央付近のデータの散らばりが大きいと読めます。",
      ],
      formulas: ["最小値 − Q1 − 中央値 − Q3 − 最大値"],
    },
  ],
  example: {
    title: "例題: 箱ひげ図の5つの値を読む",
    problem: "最小値4、Q1=8、中央値11、Q3=15、最大値20の箱ひげ図を考えます。",
    steps: [
      { expression: "箱: 8〜15", note: "箱の両端はQ1とQ3です。" },
      { expression: "箱の中の線: 11", note: "中央値を表します。" },
      { expression: "ひげ: 4〜20", note: "両端が最小値と最大値です。" },
    ],
  },
  practice: {
    title: "練習: 箱ひげ図を読む",
    problem: "ある箱ひげ図は、最小値5、Q1=9、中央値13、Q3=18、最大値24です。",
    steps: [
      { prompt: "箱の左端の値を答えてください。", answers: ["9"], placeholder: "値" },
      { prompt: "箱の長さ、つまり四分位範囲を答えてください。", answers: ["9"], placeholder: "四分位範囲" },
    ],
    hint: "箱の両端はQ1とQ3です。",
  },
  summary: [
    "箱ひげ図は最小値、Q1、中央値、Q3、最大値で分布を要約する。",
    "箱の長さは四分位範囲を表す。",
  ],
};
