import type { MathLesson } from "../../../../math1/types";

export const reflectionLesson: MathLesson = {
  key: "reflection",
  title: "対称移動",
  description: "ある直線を対称軸として図形を反対側の対称な位置へ移す方法を学びます。",
  goals: [
    "対称移動が対称軸の位置によって決まることを説明できる。",
    "対応する点を結ぶ線分を対称軸が垂直二等分することを使える。",
  ],
  concepts: [
    {
      title: "対称軸が対応点の真ん中を通る",
      body: [
        "対称移動では、対応する点AとA'を結ぶ線分AA'を対称軸が垂直に二等分します。",
        "したがって、Aから対称軸までの距離とA'から対称軸までの距離は等しくなります。図形の形と大きさは変わりません。",
      ],
    },
  ],
  example: {
    title: "例題: 点Aを直線lについて対称移動する",
    problem: "点Aから直線lまでの距離が5 cmです。Aをlについて対称移動した点をA'とします。",
    steps: [
      { expression: "Aからlまで = 5 cm", note: "もとの点から対称軸までの距離を確認します。" },
      { expression: "A'からlまで = 5 cm", note: "対称移動では、軸の反対側へ同じ距離だけ取ります。" },
      { expression: "AA' ⟂ l", note: "対称軸lはAA'を垂直二等分します。" },
    ],
  },
  practice: {
    title: "練習: 対称移動した点までの距離",
    problem: "点Pは対称軸mから4 cm離れています。mについて対称移動した点をP'とします。",
    steps: [
      { prompt: "P'からmまでの距離を答えてください。", answers: ["4", "4cm", "4 cm"], placeholder: "距離" },
      { prompt: "PP'とmのなす角を答えてください。", answers: ["90", "90°", "90度"], placeholder: "角度" },
    ],
    hint: "対称軸は対応する二点を結ぶ線分の垂直二等分線です。",
  },
  summary: [
    "対称移動は対称軸の位置で決まる。",
    "対称軸は対応する二点を結ぶ線分を垂直二等分する。",
  ],
};
