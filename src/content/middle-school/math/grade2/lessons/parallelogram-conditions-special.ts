import type { MathLesson } from "../../../../math1/types";

export const parallelogramConditionsSpecialLesson: MathLesson = {
  key: "parallelogram-conditions-special",
  title: "平行四辺形になる条件と特別な形を捉える",
  description:
    "四角形が平行四辺形になるための代表的な条件を使い、長方形・ひし形・正方形を平行四辺形の特別な形として整理します。",
  goals: [
    "2組の対辺が等しいなどの条件から平行四辺形だと判断できる。",
    "長方形・ひし形・正方形を平行四辺形の条件を追加した形として捉えられる。",
  ],
  concepts: [
    {
      title: "性質を逆向きに使える条件がある",
      body: [
        "四角形で、2組の対辺がそれぞれ平行、2組の対辺がそれぞれ等しい、2組の対角がそれぞれ等しい、対角線が互いに中点で交わる、1組の対辺が平行で等しい、のいずれかが成り立てば平行四辺形です。",
        "長方形は4角が直角、ひし形は4辺が等しい平行四辺形です。正方形はその両方を満たす特別な平行四辺形です。",
      ],
      formulas: ["1組の対辺が平行かつ等しい → 平行四辺形"],
    },
  ],
  example: {
    title: "例題: 四角形が平行四辺形か判断する",
    problem: "四角形ABCDでAB∥CDかつAB=CDです。",
    steps: [
      { expression: "AB ∥ CD", note: "1組の対辺が平行です。" },
      { expression: "AB = CD", note: "同じ1組の対辺が等しいです。" },
      { expression: "ABCDは平行四辺形", note: "平行四辺形になるための条件を満たします。" },
    ],
  },
  practice: {
    title: "練習: 特別な平行四辺形を分類する",
    problem: "4辺がすべて等しく、4角がすべて直角の四角形です。",
    steps: [
      { prompt: "この四角形を最も具体的な名前で答えてください。", answers: ["正方形"], placeholder: "図形名" },
    ],
    hint: "ひし形と長方形の両方の条件を満たします。",
  },
  summary: [
    "平行四辺形になるための条件を、性質と区別して使う。",
    "長方形・ひし形・正方形は平行四辺形の特別な形として整理できる。",
  ],
};
