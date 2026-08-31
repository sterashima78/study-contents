import type { MathLesson } from "../../../../math1/types";

export const pythagoreanDiscoveryLesson: MathLesson = {
  key: "pythagorean-discovery",
  title: "三平方の定理を面積から見いだす",
  description: "方眼や正方形の面積を比べ、直角三角形に特有の平方の関係を見いだします。",
  goals: [
    "複数の直角三角形で平方の関係を確かめられる。",
    "観察から定理を予想し、証明できることを理解する。",
  ],
  concepts: [
    {
      title: "観察から一般的な関係を予想する",
      body: [
        "方眼上の直角三角形について3辺を1辺とする正方形の面積を調べると、二つの面積の和が斜辺側の面積と一致します。",
        "いくつかの例から予想し、その関係が証明できることを知るのが三平方の定理の学習です。",
      ],
      formulas: ["面積a²+面積b²=面積c²"],
    },
  ],
  example: {
    title: "例題: 面積で確かめる",
    problem: "辺5、12、13の三角形を考えます。",
    steps: [
      { expression: "5²+12²=25+144", note: "短い2辺の平方を足します。" },
      { expression: "169=13²", note: "最長辺の平方と一致します。" },
    ],
  },
  practice: {
    title: "練習: 平方を比べる",
    problem: "平方の和に注目します。",
    steps: [
      { prompt: "6²+8²の値を答えてください。", answers: ["100"], placeholder: "値" },
      {
        prompt: "6,8,10では6²+8²と10²はどんな関係ですか。",
        answers: ["等しい", "同じ", "6²+8²=10²", "6^2+8^2=10^2"],
        placeholder: "関係",
      },
    ],
    hint: "平方を計算して比較します。",
  },
  summary: [
    "三平方の定理は面積の関係として見いだせる。",
    "観察で予想した後、証明できることを知る。",
  ],
};
