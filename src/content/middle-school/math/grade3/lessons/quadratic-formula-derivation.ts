import type { MathLesson } from "../../../../math1/types";

export const quadraticFormulaDerivationLesson: MathLesson = {
  key: "quadratic-formula-derivation",
  title: "解の公式が生まれる流れを知る",
  description:
    "平方完成の手順を一般のax²+bx+c=0へ広げ、解の公式が同じ操作の反復をまとめたものだと捉えます。",
  goals: [
    "数値の二次方程式を平方完成する手順と解の公式を関連付けられる。",
    "解の公式が係数a、b、cから解を求める式であることを説明できる。",
  ],
  concepts: [
    {
      title: "平方完成を一般化する",
      body: [
        "因数分解できない二次方程式でも平方完成なら解けますが、毎回の式変形は長くなります。同じ操作をax²+bx+c=0に対して行うと解の公式が得られます。",
        "文字を含む分数や根号の操作そのものを暗記するのではなく、数値の例で行った平方完成と対応させて流れを捉えます。",
      ],
      formulas: ["ax²+bx+c=0", "(x+b/(2a))²=(b²−4ac)/(4a²)", "x=(-b±√(b²−4ac))/(2a)"],
    },
  ],
  example: {
    title: "例題: x²+4x−7=0から公式の形を見る",
    problem: "まず数値の式を平方完成します。",
    steps: [
      { expression: "x²+4x=7", note: "定数項を移します。" },
      { expression: "(x+2)²=11", note: "両辺に4を加えて平方の形にします。" },
      { expression: "x=−2±√11", note: "平方根の考えで解けます。" },
      {
        expression: "x=(-4±√(4²−4·1·(−7)))/2",
        note: "解の公式へa=1、b=4、c=−7を入れても同じ結果です。",
      },
    ],
  },
  practice: {
    title: "練習: 平方完成との対応を確認する",
    problem: "解の公式の前に、平方の形を作る操作を確認します。",
    steps: [
      {
        prompt: "x²+6x−2=0を(x+3)²=kの形にするとき、kを答えてください。",
        answers: ["11"],
        placeholder: "k",
      },
      {
        prompt: "ax²+bx+c=0の解の公式の分母を答えてください。",
        answers: ["2a", "2*a", "2×a"],
        placeholder: "式",
      },
    ],
    hint: "平方完成では一次項の係数の半分を使います。解の公式はその操作を一般化した形です。",
  },
  summary: [
    "解の公式は平方完成の操作を一般の係数a、b、cへ広げたもの。",
    "公式の形だけでなく、どの既習事項から生まれたかを関連付ける。",
  ],
};
