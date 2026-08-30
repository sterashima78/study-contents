import type { MathLesson } from "../../../../math1/types";

export const rotationLesson: MathLesson = {
  key: "rotation",
  title: "回転移動",
  description: "ある点を中心として、一定の角度・向きだけ図形を回す回転移動を学びます。",
  goals: [
    "回転移動が回転の中心、回転角、回転の向きで決まることを説明できる。",
    "対応する点が回転の中心から等しい距離にあることを使える。",
  ],
  concepts: [
    {
      title: "中心からの距離を保ったまま回る",
      body: [
        "回転移動では、回転の中心Oから各点までの距離を変えずに、決められた角度だけ回します。",
        "例えば点AがA'へ90°回転したなら、OA=OA'で、∠AOA'=90°です。回転の向きも時計回りか反時計回りかを区別します。",
      ],
    },
  ],
  example: {
    title: "例題: 点AをOのまわりに90°回転する",
    problem: "OA = 6 cmの点Aを、Oを中心に反時計回りに90°回転してA'へ移します。",
    steps: [
      { expression: "OA' = 6 cm", note: "回転では中心から点までの距離は変わりません。" },
      { expression: "∠AOA' = 90°", note: "回転角は90°です。" },
      { expression: "向きは反時計回り", note: "同じ90°でも回転の向きによって移る位置が変わります。" },
    ],
  },
  practice: {
    title: "練習: 半回転を考える",
    problem: "点PをOのまわりに半回転してP'へ移します。",
    steps: [
      { prompt: "半回転の回転角を答えてください。", answers: ["180", "180°", "180度"], placeholder: "角度" },
      { prompt: "OP = 8 cmのとき、OP'を答えてください。", answers: ["8", "8cm", "8 cm"], placeholder: "長さ" },
    ],
    hint: "半回転は180°で、中心からの距離は変わりません。",
  },
  summary: [
    "回転移動は回転の中心、回転角、回転の向きで決まる。",
    "回転の中心から対応する点までの距離は等しい。",
  ],
};
