import type { MathUnit } from "../math1/types";

export const exponentialLogarithmicUnits: MathUnit[] = [
  {
    key: "exponents-exponential",
    title: "指数の拡張と指数関数",
    description: "指数を整数から有理数へ広げ、指数関数の増減と方程式を扱います。",
    lessons: [
      {
        key: "rational-exponents",
        title: "指数の拡張",
        description: "0・負の整数・分数の指数を、指数法則が保たれるように定義します。",
        goals: ["負の指数を逆数として計算できる。", "分数指数を累乗根へ変換できる。"],
        concepts: [
          {
            title: "指数法則を壊さないよう意味を広げる",
            body: [
              "a⁰=1、a⁻ⁿ=1/aⁿ と定めると、aᵐaⁿ=aᵐ⁺ⁿ が整数全体で成り立ちます。",
              "a^(1/n) は n 乗すると a になる正の数、つまり n 乗根として扱います。",
            ],
          },
        ],
        example: {
          title: "例題: 分数指数を計算する",
          problem: "27^(2/3)",
          steps: [
            { expression: "=(27^(1/3))²", note: "2/3 は、まず3乗根を取り、その結果を2乗する意味です。" },
            { expression: "=3²", note: "27の3乗根は3です。" },
            { expression: "=9", note: "2乗して答えを得ます。" },
          ],
        },
        practice: {
          title: "練習: 負・分数指数",
          problem: "16^(−3/4)",
          steps: [
            { prompt: "負の指数を逆数へ直してください。", answers: ["1/16^(3/4)", "1/(16^(3/4))"] },
            { prompt: "16^(3/4) を計算してください。", answers: ["8"] },
            { prompt: "答えを書いてください。", answers: ["1/8"] },
          ],
          hint: "16^(1/4)=2 を先に使います。",
        },
        summary: ["0・負・分数の指数は指数法則を保つように定義される。", "分数指数は累乗根と整数乗へ分けて考える。"],
      },
      {
        key: "exponential-functions",
        title: "指数関数のグラフ",
        description: "y=aˣ のグラフを、底 a の大きさによる増減の違いと合わせて理解します。",
        goals: ["a>1 と 0<a<1 の増減を区別できる。", "指数関数のグラフが必ず (0,1) を通ると説明できる。"],
        concepts: [
          {
            title: "底が1より大きいか小さいかで向きが変わる",
            body: [
              "a>1 では x が1増えるたび値が a 倍になるため増加します。0<a<1 では a 倍すると小さくなるため減少します。",
              "どちらの場合も a⁰=1 なのでグラフは (0,1) を通り、値は常に正です。",
            ],
          },
        ],
        example: {
          title: "例題: y=2ˣ の値を比較する",
          problem: "2^(−1), 2⁰, 2² の大小を比較する。",
          steps: [
            { expression: "2^(−1)=1/2", note: "負の指数を逆数へ直します。" },
            { expression: "2⁰=1, 2²=4", note: "残りを計算します。" },
            { expression: "1/2<1<4", note: "底2は1より大きいのでxとともに増加しています。" },
          ],
        },
        practice: {
          title: "練習: 指数関数の増減",
          problem: "y=(1/3)ˣ について x=−1,0,1 の値を求める。",
          steps: [
            { prompt: "x=−1 の値を書いてください。", answers: ["3"] },
            { prompt: "x=0 の値を書いてください。", answers: ["1"] },
            { prompt: "x=1 の値を書いてください。", answers: ["1/3"] },
          ],
          hint: "底が1より小さいので、xが増えると値は小さくなります。",
        },
        summary: ["a>1 の指数関数は増加、0<a<1 では減少する。", "指数関数の値域は正で、(0,1) を必ず通る。"],
      },
      {
        key: "exponential-equations",
        title: "指数方程式・不等式",
        description: "底をそろえ、指数関数の単調性を使って方程式・不等式を解きます。",
        goals: ["両辺を同じ底の累乗に直せる。", "底が1未満のとき不等号の向きに注意できる。"],
        concepts: [
          {
            title: "底をそろえたら指数を比較する",
            body: [
              "a>0, a≠1 なら aˣ は同じ値を2回取らないため、aᵖ=aᑫ なら p=q です。",
              "不等式では a>1 なら指数の大小と値の大小が同じ、0<a<1 なら逆になります。",
            ],
          },
        ],
        example: {
          title: "例題: 4ˣ=8 を解く",
          problem: "4ˣ=8",
          steps: [
            { expression: "(2²)ˣ=2³", note: "両辺の底を2へそろえます。" },
            { expression: "2^(2x)=2³", note: "累乗の累乗を整理します。" },
            { expression: "2x=3", note: "底が同じなので指数を等しくします。" },
            { expression: "x=3/2", note: "一次方程式を解きます。" },
          ],
        },
        practice: {
          title: "練習: 指数不等式",
          problem: "(1/2)^(x+1)>(1/2)³",
          steps: [
            { prompt: "指数を比較した不等式を書いてください。", answers: ["x+1<3"] },
            { prompt: "答えを書いてください。", answers: ["x<2"] },
          ],
          hint: "底 1/2 は1より小さいので、指数の大小と関数値の大小は逆です。",
        },
        summary: ["指数方程式は底をそろえて指数を比較する。", "指数不等式は底が1より大きいか小さいかで向きを判断する。"],
      },
    ],
  },
  {
    key: "logarithms",
    title: "対数関数",
    description: "指数の逆操作として対数を定義し、対数法則・方程式・常用対数へつなげます。",
    lessons: [
      {
        key: "logarithm-laws",
        title: "対数の定義と計算法則",
        description: "aᵖ=M と logₐM=p の対応を使い、積・商・累乗の対数を整理します。",
        goals: ["指数表示と対数表示を相互に変換できる。", "積・商・累乗の対数法則を使える。"],
        concepts: [
          {
            title: "対数は指数を答える記号",
            body: [
              "logₐM は『aを何乗するとMになるか』を表します。底は a>0, a≠1、真数は M>0 でなければなりません。",
              "積を対数にすると和、商を対数にすると差になり、累乗の指数は前へ出せます。",
            ],
            formulas: ["logₐ(MN)=logₐM+logₐN", "logₐ(M/N)=logₐM−logₐN", "logₐ(Mʳ)=r logₐM"],
          },
        ],
        example: {
          title: "例題: log₂32−log₂4 を計算する",
          problem: "log₂32−log₂4",
          steps: [
            { expression: "=log₂(32/4)", note: "差を商の対数へまとめます。" },
            { expression: "=log₂8", note: "32/4=8 です。" },
            { expression: "=3", note: "2³=8 なので答えは3です。" },
          ],
        },
        practice: {
          title: "練習: 対数法則を使う",
          problem: "log₃9+log₃27",
          steps: [
            { prompt: "1つの対数へまとめてください。", answers: ["log₃243", "log_3(243)"] },
            { prompt: "答えを書いてください。", answers: ["5"] },
          ],
          hint: "積の法則で log₃(9×27) とまとめます。",
        },
        summary: ["対数は指数関数の逆操作として定義される。", "積・商・累乗の法則は指数法則から得られる。"],
      },
      {
        key: "logarithmic-equations-common-log",
        title: "対数方程式と常用対数",
        description: "真数条件を確認して対数方程式を解き、常用対数で桁数や規模を見積もります。",
        goals: ["対数方程式で真数条件を先に確認できる。", "常用対数から整数部分と桁数の関係を使える。"],
        concepts: [
          {
            title: "方程式を解く前に定義域を確認する",
            body: [
              "logₐf(x) が現れたら、まず f(x)>0 を条件として記録します。対数を外して得た解が条件を満たすか最後に確認します。",
              "常用対数 log₁₀N の整数部分は、正の数Nの10の何乗程度かを表します。",
            ],
          },
        ],
        example: {
          title: "例題: log₂(x−1)=3 を解く",
          problem: "log₂(x−1)=3",
          steps: [
            { expression: "x−1>0", note: "真数条件から x>1 を記録します。" },
            { expression: "x−1=2³", note: "対数表示を指数表示へ戻します。" },
            { expression: "x=9", note: "一次方程式を解きます。" },
            { expression: "9>1", note: "真数条件を満たすので x=9 が解です。" },
          ],
        },
        practice: {
          title: "練習: 対数方程式",
          problem: "log₃(x+2)=2",
          steps: [
            { prompt: "真数条件を書いてください。", answers: ["x>-2", "x+2>0"] },
            { prompt: "対数を外した式を書いてください。", answers: ["x+2=9", "x+2=3²"] },
            { prompt: "答えを書いてください。", answers: ["x=7", "7"] },
          ],
          hint: "3²=9 として対数を指数表示へ戻します。",
        },
        summary: ["対数方程式では真数条件を最初と最後に確認する。", "常用対数は数の桁数や大きさの比較に使える。"],
      },
    ],
  },
];
