import type { MathLesson } from "../../../../math1/types";

export const translationLesson: MathLesson = {
  key: "translation",
  title: "平行移動",
  description: "図形を一定の方向に一定の距離だけ移す平行移動を、対応する点の動きから捉えます。",
  goals: [
    "平行移動が方向と距離によって決まることを説明できる。",
    "移動前後の対応する点を結ぶ線分が平行で長さも等しいことを読み取れる。",
  ],
  concepts: [
    {
      title: "全ての点を同じ方向・同じ距離へ動かす",
      body: [
        "平行移動では、図形をつくる全ての点が同じ方向へ同じ距離だけ動きます。形や大きさは変わりません。",
        "対応する点AとA'、BとB'などを結ぶ線分は互いに平行で、その長さも等しくなります。",
      ],
    },
  ],
  example: {
    title: "例題: 三角形を右へ4 cm平行移動する",
    problem: "△ABCを右へ4 cm平行移動して△A'B'C'をつくります。",
    steps: [
      { expression: "AA' = BB' = CC' = 4 cm", note: "全ての頂点を同じ距離だけ移します。" },
      {
        expression: "AA' ∥ BB' ∥ CC'",
        note: "全て同じ方向へ移るので、対応点を結ぶ線分は平行です。",
      },
      {
        expression: "△ABCと△A'B'C'は同じ形・同じ大きさ",
        note: "移動では辺の長さや角の大きさは変わりません。",
      },
    ],
  },
  practice: {
    title: "練習: 平行移動を決める条件",
    problem: "図形を左へ3 cm平行移動します。",
    steps: [
      {
        prompt: "各点が動く距離を答えてください。",
        answers: ["3", "3cm", "3 cm"],
        placeholder: "距離",
      },
      {
        prompt:
          "移動前後で図形の大きさは変わりますか。「変わる」または「変わらない」で答えてください。",
        answers: ["変わらない"],
        placeholder: "答え",
      },
    ],
    hint: "平行移動は形や大きさを変えず、全ての点を同じ向き・同じ距離だけ動かします。",
  },
  summary: [
    "平行移動は方向と距離で決まる。",
    "対応する点は全て同じ方向へ同じ距離だけ動き、図形の形と大きさは変わらない。",
  ],
};
