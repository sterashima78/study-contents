import type { MathLesson } from "../../../../math1/types";

export const sphereVolumeLesson: MathLesson = {
  key: "sphere-volume",
  title: "球の体積",
  description: "球の半径から、体積を(4/3)πr³で求めます。",
  goals: [
    "球の体積を(4/3)πr³で求められる。",
    "面積の公式と体積の公式で、r²とr³を区別できる。",
  ],
  concepts: [
    {
      title: "球の体積は4πr³/3",
      body: [
        "半径rの球の体積VはV = 4πr³/3です。表面積4πr²とは、半径の指数と単位が異なります。",
        "体積なので単位はcm³などの立方単位です。直径が与えられた場合は、表面積と同じく先に半径へ直します。",
      ],
    },
  ],
  example: {
    title: "例題: 半径3 cmの球の体積",
    problem: "半径3 cmの球の体積を求めます。",
    steps: [
      { expression: "4πr³ / 3", note: "球の体積の公式を使います。" },
      { expression: "4π × 3³ / 3 = 36π cm³", note: "r = 3を代入して計算します。" },
    ],
  },
  practice: {
    title: "練習: 半径6 cmの球",
    problem: "半径6 cmの球があります。",
    steps: [
      {
        prompt: "体積をπを使って答えてください。",
        answers: ["288π", "288\\pi", "288pi", "288πcm³", "288π cm³"],
        placeholder: "体積",
      },
    ],
    hint: "6³ = 216として、4×216÷3を計算します。",
  },
  summary: [
    "球の体積はV = 4πr³/3で求める。",
    "表面積は平方単位、体積は立方単位になることを区別する。",
  ],
};
