import type { MathLesson } from "../../../../math1/types";

export const positiveNegativeMeaningLesson: MathLesson = {
  key: "positive-negative-meaning",
  title: "正の数・負の数の意味",
  description: "0を基準に、反対向きの量を正の数と負の数で表します。",
  goals: [
    "0より大きい数と0より小さい数を、正負の符号を使って表せる。",
    "反対向きの量を正の数・負の数で表せる。",
  ],
  concepts: [
    {
      title: "0を基準に反対向きの量を表す",
      body: [
        "0より大きい数を正の数、0より小さい数を負の数といいます。",
        "上昇と下降のような反対向きの量は、一方を正と決めるともう一方を負で表せます。",
      ],
      formulas: ["0より3大きい数 = +3", "0より3小さい数 = −3"],
    },
  ],
  example: {
    title: "例題: 0℃より4℃低い気温を表す",
    problem: "0℃より4℃低い気温を、符号を付けた数で表してください。",
    steps: [
      { expression: "基準は 0℃", note: "まず0とする基準を確認します。" },
      { expression: "低い向きを負とする", note: "0℃より低いので負の符号を使います。" },
      { expression: "−4℃", note: "0から低い向きへ4だけ進むので −4℃ です。" },
    ],
  },
  practice: {
    title: "練習: 基準からの違いを符号で表す",
    problem: "海面を0mとするとき、海面より7m低い位置を表してください。",
    steps: [
      {
        prompt: "符号を付けた数で答えてください。",
        answers: ["-7", "−7", "-7m", "−7m"],
        placeholder: "例: -7",
      },
    ],
    hint: "海面より低い向きを負として表します。",
  },
  summary: [
    "正の数と負の数は、0を基準に反対向きの量を表すために使える。",
    "負の数には − の符号を付ける。",
  ],
};
