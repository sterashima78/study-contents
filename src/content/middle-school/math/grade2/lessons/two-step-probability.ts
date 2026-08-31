import type { MathLesson } from "../../../../math1/types";

export const twoStepProbabilityLesson: MathLesson = {
  key: "two-step-probability",
  title: "二段階の試行の確率を求める",
  description: "二つの操作が続く場面を樹形図や表で整理し、条件に合う組合せから確率を求めます。",
  goals: [
    "二段階の試行の全結果を整理できる。",
    "複数の結果をまとめた事象の確率を求められる。",
  ],
  concepts: [
    {
      title: "まず全結果を組として書く",
      body: [
        "二段階の試行では、1回目と2回目の結果を一つの組として表します。全結果を整理した後で、問題の条件を満たす組に印を付けて数えます。",
        "各組が同様に確からしいことも確認します。公平な硬貨2枚なら、表表・表裏・裏表・裏裏の4通りは同様に確からしいと考えられます。",
      ],
    },
  ],
  example: {
    title: "例題: 2枚の硬貨で表が1枚だけ出る確率",
    problem: "公平な硬貨を2枚投げます。",
    steps: [
      { expression: "全結果: 表表, 表裏, 裏表, 裏裏", note: "4通りです。" },
      { expression: "表が1枚: 表裏, 裏表", note: "条件に合うのは2通りです。" },
      { expression: "2/4 = 1/2", note: "求める確率です。" },
    ],
  },
  practice: {
    title: "練習: 二段階の結果を数える",
    problem: "公平な硬貨を2枚投げます。",
    steps: [
      { prompt: "少なくとも1枚が表になる確率を答えてください。", answers: ["3/4", "0.75"], placeholder: "確率" },
    ],
    hint: "表表、表裏、裏表が条件に合います。",
  },
  summary: [
    "二段階の試行は、結果を組として漏れなく整理する。",
    "全結果を確認してから条件に合う組を数える。",
  ],
};
