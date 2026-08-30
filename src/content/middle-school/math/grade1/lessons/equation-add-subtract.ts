import type { MathLesson } from "../../../../math1/types";

export const equationAddSubtractLesson: MathLesson = {
  key: "equation-add-subtract",
  title: "加法・減法で方程式を解く",
  description: "両辺に同じ数を加減して、x + a = b の形の方程式を解きます。",
  goals: ["x に加えられた数を両辺から取り除ける。", "x から引かれた数を両辺へ加えて解ける。"],
  concepts: [
    {
      title: "x の横にある数を反対の計算で取り除く",
      body: [
        "x + a = b では両辺から a を引き、x − a = b では両辺に a を加えます。",
        "片方の辺だけを変えず、必ず両辺へ同じ操作をすることが重要です。",
      ],
      formulas: ["x + 6 = 10 → x = 4", "x − 6 = 10 → x = 16"],
    },
  ],
  example: {
    title: "例題: x − 7 = 5 を解く",
    problem: "x − 7 = 5",
    steps: [
      { expression: "x − 7 + 7 = 5 + 7", note: "両辺に7を加えます。" },
      { expression: "x = 12", note: "左辺の −7 と +7 が打ち消し合います。" },
      { expression: "12 − 7 = 5", note: "解を元の方程式に代入して確認します。" },
    ],
  },
  practice: {
    title: "練習: 加減だけで解く",
    problem: "x + 8 = 3 を解いてください。",
    steps: [
      {
        prompt: "両辺から8を引いたあとの x の値を答えてください。",
        answers: ["-5", "−5"],
        placeholder: "x = …",
      },
    ],
    hint: "3−8 を計算します。",
  },
  summary: ["x + a = b は両辺から a を引く。", "x − a = b は両辺に a を加える。"],
};
