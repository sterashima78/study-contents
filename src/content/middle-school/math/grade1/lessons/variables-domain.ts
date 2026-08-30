import type { MathLesson } from "../../../../math1/types";

export const variablesDomainLesson: MathLesson = {
  key: "variables-domain",
  title: "変数と変域",
  description: "変化する数量を変数として捉え、具体的な場面で取り得る値の範囲を確認します。",
  goals: [
    "変化する数量を変数として読み取れる。",
    "問題の条件から変数の取り得る範囲である変域を求められる。",
  ],
  concepts: [
    {
      title: "変数には取り得る値の範囲がある",
      body: [
        "いろいろな値を取る文字を変数といいます。関数では x や y を変数として使います。",
        "具体的な場面では、変数がどんな値でも取れるとは限りません。取り得る値の範囲を変域といいます。",
      ],
      formulas: ["0 ≤ x ≤ 5 のように、条件から変域を表す"],
    },
  ],
  example: {
    title: "例題: 5分間歩くときの時間の変域",
    problem: "歩き始めてから x 分後の道のりを y m とします。5分間歩くとき、x の変域を考えます。",
    steps: [
      {
        expression: "歩き始め: x = 0",
        note: "時間は歩き始めた瞬間の0分から考えます。",
      },
      {
        expression: "歩き終わり: x = 5",
        note: "5分間歩くので、時間は5分までです。",
      },
      {
        expression: "0 ≤ x ≤ 5",
        note: "0分以上5分以下が x の変域です。",
      },
    ],
  },
  practice: {
    title: "練習: 変域を条件から読む",
    problem: "長さ12 cmのリボンから x cm切り取ります。切り取る長さは0 cm以上12 cm以下です。",
    steps: [
      {
        prompt: "x の最小値を答えてください。",
        answers: ["0"],
        placeholder: "最小値",
      },
      {
        prompt: "x の最大値を答えてください。",
        answers: ["12"],
        placeholder: "最大値",
      },
    ],
    hint: "問題文にある『以上』『以下』の端の値を確認します。",
  },
  summary: [
    "いろいろな値を取る文字を変数という。",
    "変数が取り得る値の範囲を変域といい、具体的な条件から決める。",
  ],
};
