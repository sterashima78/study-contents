import type { MathLesson } from "../../../../math1/types";

export const inverseProportionGraphLesson: MathLesson = {
  key: "inverse-proportion-graph",
  title: "反比例のグラフ",
  description: "反比例 y = a/x の点を座標平面に取り、二つに分かれた曲線になることを理解します。",
  goals: [
    "反比例の式から対応する点を求められる。",
    "反比例のグラフが座標軸に近づく二つの曲線になることを説明できる。",
  ],
  concepts: [
    {
      title: "反比例のグラフは二つの曲線に分かれる",
      body: [
        "y = a/x では x = 0 を取れないため、グラフは y 軸を通りません。また y = 0 にもならないので x 軸も通りません。",
        "x の正負に分けて点を取ると、グラフは二つに分かれたなめらかな曲線になります。",
      ],
      formulas: ["y = a/x（x ≠ 0）"],
    },
  ],
  example: {
    title: "例題: y = 6/x のグラフを考える",
    problem: "y = 6/x について、x の正負それぞれで対応する点を求めます。",
    steps: [
      {
        expression: "x = 1, 2, 3 → y = 6, 3, 2",
        note: "x が正のときは y も正になります。",
      },
      {
        expression: "x = −1, −2, −3 → y = −6, −3, −2",
        note: "x が負のときは y も負になります。",
      },
      {
        expression: "第1象限と第3象限に曲線",
        note: "比例定数6が正なので、二つの曲線はこの位置に現れます。",
      },
    ],
  },
  practice: {
    title: "練習: 反比例のグラフ上の点を求める",
    problem: "y = −8/x のグラフについて考えます。",
    steps: [
      {
        prompt: "x = 2 のときの y を答えてください。",
        answers: ["-4", "−4"],
        placeholder: "y",
      },
      {
        prompt: "x = −4 のときの y を答えてください。",
        answers: ["2", "+2"],
        placeholder: "y",
      },
    ],
    hint: "それぞれの x を y = −8/x に代入します。",
  },
  summary: [
    "反比例のグラフは座標軸を通らず、二つに分かれた曲線になる。",
    "式に x の値を代入して座標を求めると、グラフの位置を確認できる。",
  ],
};
