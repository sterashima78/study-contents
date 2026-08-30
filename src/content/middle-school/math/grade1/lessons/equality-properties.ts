import type { MathLesson } from "../../../../math1/types";

export const equalityPropertiesLesson: MathLesson = {
  key: "equality-properties",
  title: "等式の性質",
  description: "等式の両辺に同じ操作をしても等しい関係が保たれることを理解します。",
  goals: ["等式の両辺に同じ数を加減して変形できる。", "両辺を同じ0でない数で乗除して変形できる。"],
  concepts: [
    {
      title: "両辺に同じ操作をする",
      body: [
        "等式は、両辺に同じ数を足したり引いたりしても成り立ちます。",
        "両辺に同じ数を掛けても成り立ち、0でない同じ数で両辺を割っても成り立ちます。",
      ],
      formulas: [
        "a = b ならば a + c = b + c",
        "a = b ならば a − c = b − c",
        "a = b ならば ac = bc",
        "a = b, c ≠ 0 ならば a/c = b/c",
      ],
    },
  ],
  example: {
    title: "例題: x + 5 = 12 の両辺から5を引く",
    problem: "x + 5 = 12",
    steps: [
      { expression: "x + 5 − 5 = 12 − 5", note: "両辺から同じ5を引きます。" },
      { expression: "x = 7", note: "左辺の +5 と −5 が打ち消し合います。" },
      { expression: "7 + 5 = 12", note: "求めた値を代入すると等式が成り立ちます。" },
    ],
  },
  practice: {
    title: "練習: 両辺へ同じ操作をする",
    problem: "x − 4 = 9 から x だけを左辺に残すには、両辺に何をしますか。",
    steps: [
      {
        prompt: "両辺に加える数を答えてください。",
        answers: ["4", "+4"],
        placeholder: "加える数",
      },
      { prompt: "変形後の x の値を答えてください。", answers: ["13"], placeholder: "xの値" },
    ],
    hint: "左辺の −4 を消すには、反対の +4 を両辺に加えます。",
  },
  summary: [
    "等式では両辺に同じ操作をすると等しい関係が保たれる。",
    "除法では0でない同じ数で両辺を割る。",
  ],
};
