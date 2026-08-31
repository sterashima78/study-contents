import type { MathLesson } from "../../../../math1/types";

export const proofStructureLesson: MathLesson = {
  key: "proof-structure",
  title: "仮定・結論・根拠で証明を組み立てる",
  description:
    "命題の仮定と結論を区別し、既に正しいと認められた事柄を根拠として、仮定から結論へ筋道立てて説明します。",
  goals: [
    "命題から仮定と結論を取り出せる。",
    "証明で使う根拠を明示し、仮定から結論まで順序立てられる。",
  ],
  concepts: [
    {
      title: "証明は仮定から結論を導く説明",
      body: [
        "命題は仮定と結論からなります。証明では、仮定から出発し、対頂角、平行線の性質、合同条件など既に認められた事柄を根拠として結論を導きます。",
        "図は一つの例ですが、証明は同じ仮定を満たすすべての場合について結論が成り立つことを示します。",
      ],
      formulas: ["仮定 → 根拠を用いた推論 → 結論"],
    },
  ],
  example: {
    title: "例題: 証明の骨組みを読む",
    problem: "AB=ACの二等辺三角形ABCで、∠B=∠Cを示す証明を考えます。",
    steps: [
      { expression: "仮定: AB = AC", note: "最初に与えられている条件を確認します。" },
      { expression: "補助線: AからBCの中点MへAM", note: "合同な三角形を作る方針を立てます。" },
      { expression: "△ABM ≡ △ACM", note: "合同条件を根拠に対応する角が等しいと導きます。" },
    ],
  },
  practice: {
    title: "練習: 仮定と結論を区別する",
    problem: "『AB=ACならば∠B=∠Cである』という命題を考えます。",
    steps: [
      { prompt: "仮定を答えてください。", answers: ["AB=AC", "AB＝AC"], placeholder: "仮定" },
      { prompt: "結論を答えてください。", answers: ["∠B=∠C", "∠B＝∠C"], placeholder: "結論" },
    ],
    hint: "『ならば』の前が仮定、後が結論です。",
  },
  summary: [
    "証明では仮定と結論を最初にはっきりさせる。",
    "各段階で、何を根拠にそのことがいえるのかを明示する。",
  ],
};
