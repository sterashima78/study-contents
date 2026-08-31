import type { MathLesson } from "../../../../math1/types";

export const pythagoreanConverseLesson: MathLesson = {
  key: "pythagorean-converse",
  title: "三平方の定理の逆で直角三角形を判断する",
  description: "3辺の長さがa²+b²=c²を満たすか調べ、直角三角形かどうか判断します。",
  goals: ["三平方の定理の逆の意味を説明できる。", "3辺の長さから直角三角形か判断できる。"],
  concepts: [
    {
      title: "辺の長さから直角を判断する",
      body: [
        "三角形の3辺をa≤b<cとするときa²+b²=c²なら、その三角形は直角三角形です。",
        "元の定理は直角から辺の関係、逆は辺の関係から直角を導きます。",
      ],
      formulas: ["a²+b²=c² → 直角三角形"],
    },
  ],
  example: {
    title: "例題: 7,24,25を調べる",
    problem: "最長辺25を斜辺候補にします。",
    steps: [
      { expression: "7²+24²=49+576=625", note: "短い2辺の平方の和です。" },
      { expression: "25²=625", note: "最長辺の平方と一致します。" },
      { expression: "直角三角形", note: "三平方の定理の逆を使います。" },
    ],
  },
  practice: {
    title: "練習: 直角か判定する",
    problem: "最長辺を最後に置きます。",
    steps: [
      {
        prompt: "辺の長さが5,12,13の三角形は直角三角形ですか。",
        answers: ["はい", "直角三角形", "直角三角形です"],
        placeholder: "はい/いいえ",
      },
      {
        prompt: "辺の長さが4,5,6の三角形は直角三角形ですか。",
        answers: ["いいえ", "直角三角形ではない", "直角三角形ではありません"],
        placeholder: "はい/いいえ",
      },
    ],
    hint: "最長辺の平方と、他の2辺の平方の和を比べます。",
  },
  summary: ["a²+b²=c²なら三平方の定理の逆から直角三角形。", "最長辺をcとして比較する。"],
};
