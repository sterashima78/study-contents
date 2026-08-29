import type { MathUnit } from "../math1/types";

export const expressionUnits: MathUnit[] = [
  {
    key: "polynomial-expressions",
    title: "整式と式の証明",
    description: "三次式の展開・因数分解、整式の除法を扱い、式変形を根拠付きで進めます。",
    lessons: [
      {
        key: "cubic-identities",
        title: "三次の展開と因数分解",
        description: "三次の乗法公式を、二次までの展開を繰り返して使える形にします。",
        goals: ["(a+b)³ の展開を途中式から再現できる。", "三次式を公式を使って因数分解できる。"],
        concepts: [
          {
            title: "三次式も分配法則から作る",
            body: [
              "三次の公式を暗記だけで扱わず、(a+b)³=(a+b)²(a+b) と見て二次の展開へ戻します。",
              "因数分解では展開の逆向きに、4項の係数が 1:3:3:1 になっているかを確認します。",
            ],
            formulas: ["(a+b)³=a³+3a²b+3ab²+b³", "a³+b³=(a+b)(a²−ab+b²)"],
          },
        ],
        example: {
          title: "例題: (2x+1)³ を展開する",
          problem: "(2x+1)³",
          steps: [
            { expression: "=(2x)³+3(2x)²·1+3(2x)·1²+1³", note: "a=2x、b=1 として公式へ代入します。" },
            { expression: "=8x³+12x²+6x+1", note: "各項を順に計算します。" },
          ],
        },
        practice: {
          title: "練習: 三次の展開",
          problem: "(x−2)³",
          steps: [
            { prompt: "公式へ代入した形を書いてください。", answers: ["x³-3x²*2+3x*4-8", "x³-6x²+12x-8"] },
            { prompt: "答えを書いてください。", answers: ["x³-6x²+12x-8"] },
          ],
          hint: "(a−b)³=a³−3a²b+3ab²−b³ と符号を交互に確認します。",
        },
        summary: ["三次の公式も分配法則の繰り返しで得られる。", "因数分解では展開結果の係数と符号を逆向きに確認する。"],
      },
      {
        key: "polynomial-division",
        title: "整式の除法と分数式",
        description: "次数の高い項から順に割り、商と余りを確認します。",
        goals: ["整式の筆算で商と余りを求められる。", "分数式の約分では因数分解を先に行える。"],
        concepts: [
          {
            title: "最高次の項をそろえて引く",
            body: [
              "整式の除法では、割られる式の最高次の項を割るために必要な項を商へ置きます。",
              "分数式は数の分数と同じく、分子・分母を因数分解して共通因数を約分します。",
            ],
          },
        ],
        example: {
          title: "例題: x³+2x²−5x−6 を x+3 で割る",
          problem: "(x³+2x²−5x−6)÷(x+3)",
          steps: [
            { expression: "x³÷x=x²", note: "最高次の項をそろえるため、商の最初を x² とします。" },
            { expression: "(x³+2x²)−(x³+3x²)=−x²", note: "x²(x+3) を引きます。" },
            { expression: "−x²−5x−6=−x(x+3)−2(x+3)", note: "同じ操作を続けます。" },
            { expression: "商 x²−x−2、余り 0", note: "最後に余りの次数が1未満になったことを確認します。" },
          ],
        },
        practice: {
          title: "練習: 整式の除法",
          problem: "(x³−x²−4x+4)÷(x−1)",
          steps: [
            { prompt: "商の最初の項を書いてください。", answers: ["x²"] },
            { prompt: "商を書いてください。", answers: ["x²-4"] },
            { prompt: "余りを書いてください。", answers: ["0"] },
          ],
          hint: "x³÷x=x² から始め、引き算の符号に注意します。",
        },
        summary: ["整式の除法は最高次の項から順に処理する。", "分数式は因数分解してから共通因数を約分する。"],
      },
      {
        key: "identity-inequality-proof",
        title: "等式・不等式の証明",
        description: "証明したい式を変形し、既知の恒等式や平方の非負性へ結び付けます。",
        goals: ["等式は一方の辺から他方へ変形して証明できる。", "不等式を平方の非負性へ帰着できる。"],
        concepts: [
          {
            title: "不等式は差を作る",
            body: [
              "A≥B を示したいときは A−B を計算し、それが 0 以上になる形へ変形します。",
              "実数の平方は必ず0以上なので、平方完成は不等式証明の基本手段です。",
            ],
            formulas: ["a²+b²≥2ab"],
          },
        ],
        example: {
          title: "例題: x²+4≥4x を証明する",
          problem: "すべての実数 x について x²+4≥4x を示す。",
          steps: [
            { expression: "x²+4−4x", note: "左辺と右辺の差を取ります。" },
            { expression: "=(x−2)²", note: "平方完成します。" },
            { expression: "(x−2)²≥0", note: "実数の平方は0以上なので元の不等式が成り立ちます。" },
          ],
        },
        practice: {
          title: "練習: 平方の非負性を使う",
          problem: "a²+9≥6a を証明するため、左辺−右辺を平方の形にする。",
          steps: [
            { prompt: "差を書いてください。", answers: ["a²+9-6a", "a²-6a+9"] },
            { prompt: "平方の形にしてください。", answers: ["(a-3)²"] },
          ],
          hint: "a²−6a+9 は完全平方です。",
        },
        summary: ["等式は既知の式へ変形して両辺が一致することを示す。", "不等式は差を取り、平方など明らかに非負な形を作る。"],
      },
    ],
  },
  {
    key: "complex-equations",
    title: "複素数と高次方程式",
    description: "数の範囲を複素数まで広げ、二次方程式の解と高次方程式を統一的に扱います。",
    lessons: [
      {
        key: "complex-numbers",
        title: "複素数の計算",
        description: "i²=−1 を使って、複素数の四則計算を行います。",
        goals: ["実部と虚部を区別して加減できる。", "i²=−1 を使って積を整理できる。"],
        concepts: [
          {
            title: "i² を −1 に置き換える",
            body: [
              "複素数 a+bi では a を実部、b を虚部の係数として扱います。",
              "掛け算は普通の展開と同じで、最後に i²=−1 を使って整理します。",
            ],
          },
        ],
        example: {
          title: "例題: (2+3i)(1−i) を計算する",
          problem: "(2+3i)(1−i)",
          steps: [
            { expression: "=2−2i+3i−3i²", note: "分配法則で展開します。" },
            { expression: "=2+i+3", note: "i²=−1 なので −3i²=+3 です。" },
            { expression: "=5+i", note: "実部と虚部をまとめます。" },
          ],
        },
        practice: {
          title: "練習: 複素数の積",
          problem: "(3+2i)(2+i)",
          steps: [
            { prompt: "展開した式を書いてください。", answers: ["6+3i+4i+2i²", "6+7i+2i²"] },
            { prompt: "答えを書いてください。", answers: ["4+7i"] },
          ],
          hint: "2i² は −2 になります。",
        },
        summary: ["複素数の四則計算も分配法則や同類項の整理を使う。", "i²=−1 を最後に代入して実部と虚部を分ける。"],
      },
      {
        key: "roots-coefficients-factor-theorem",
        title: "解と係数・因数定理",
        description: "二次方程式の解と係数の関係、因数定理を使って方程式を解きます。",
        goals: ["二次方程式の解から和と積を求められる。", "P(a)=0 から x−a が因数だと判断できる。"],
        concepts: [
          {
            title: "方程式の解を因数へ戻す",
            body: [
              "ax²+bx+c=0 の解を α,β とすると、多項式は a(x−α)(x−β) と表せます。",
              "高次式でも P(a)=0 なら x−a が因数なので、次数を1つ下げて残りを解けます。",
            ],
            formulas: ["α+β=−b/a, αβ=c/a", "P(a)=0 ⇔ x−a は P(x) の因数"],
          },
        ],
        example: {
          title: "例題: x³−2x²−5x+6=0 を解く",
          problem: "x³−2x²−5x+6=0",
          steps: [
            { expression: "P(1)=1−2−5+6=0", note: "x=1 を代入すると0なので x−1 が因数です。" },
            { expression: "P(x)=(x−1)(x²−x−6)", note: "整式の除法で2次式へ下げます。" },
            { expression: "=(x−1)(x−3)(x+2)", note: "2次式を因数分解します。" },
            { expression: "x=1,3,−2", note: "各因数を0とします。" },
          ],
        },
        practice: {
          title: "練習: 因数定理で高次方程式を解く",
          problem: "x³−4x²+x+6=0",
          steps: [
            { prompt: "整数解を1つ書いてください。", answers: ["2", "x=2"] },
            { prompt: "因数分解した形を書いてください。", answers: ["(x-2)(x-3)(x+1)"] },
            { prompt: "すべての解を書いてください。", answers: ["-1,2,3", "2,3,-1", "x=-1,2,3"] },
          ],
          hint: "まず ±1,±2,±3,±6 を代入して0になる値を探します。",
        },
        summary: ["二次方程式の解と係数は因数分解から読み取れる。", "因数定理で高次式の次数を下げると解きやすい。"],
      },
    ],
  },
];
