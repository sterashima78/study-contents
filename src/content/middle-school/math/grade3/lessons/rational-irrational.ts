import type { MathLesson } from "../../../../math1/types";

export const rationalIrrationalLesson: MathLesson = {
  key: "rational-irrational",
  title: "有理数と無理数を区別する",
  description: "平方根を通して数の範囲を無理数まで広げ、有理数と無理数を区別します。",
  goals: [
    "分数で表せる有理数と、分数では表せない無理数を区別できる。",
    "平方数でない正の整数の平方根が無理数になる例を説明できる。",
  ],
  concepts: [
    {
      title: "数の範囲を無理数まで広げる",
      body: [
        "整数や有限小数、循環小数は分数で表せるので有理数です。√2や√5のように分数で表せない数を無理数といいます。",
        "√4=2のように、根号が付いていても値が整数になるものは有理数です。記号だけでなく値で判断します。",
      ],
      formulas: ["√2: 無理数", "√4 = 2: 有理数", "有理数と無理数を合わせて実数という"],
    },
  ],
  example: {
    title: "例題: √9と√10を分類する",
    problem: "√9と√10が有理数か無理数か判断します。",
    steps: [
      { expression: "√9 = 3", note: "3は整数なので有理数です。" },
      { expression: "√10", note: "10は平方数ではなく、√10は分数で表せない無理数です。" },
    ],
  },
  practice: {
    title: "練習: 数を分類する",
    problem: "√16と√7を分類します。",
    steps: [
      { prompt: "√16は有理数・無理数のどちらですか。", answers: ["有理数"], placeholder: "分類" },
      { prompt: "√7は有理数・無理数のどちらですか。", answers: ["無理数"], placeholder: "分類" },
    ],
    hint: "まず根号の値が整数になるか確認します。",
  },
  summary: [
    "分数で表せる数が有理数、分数で表せない数が無理数である。",
    "√aが整数になるかどうかを確認してから分類する。",
  ],
};
