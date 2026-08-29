import type { MathUnit } from "../math1/types";

export const calculusUnits: MathUnit[] = [
  {
    key: "derivatives",
    title: "微分係数と導関数",
    description: "平均変化率から瞬間の変化率へ進み、導関数と接線を求めます。",
    lessons: [
      {
        key: "derivative-definition",
        title: "微分係数の意味",
        description: "2点間の平均変化率の間隔を小さくし、1点での変化率を考えます。",
        goals: ["平均変化率を式で求められる。", "微分係数を接線の傾きとして説明できる。"],
        concepts: [
          {
            title: "割線の傾きを接線へ近づける",
            body: [
              "x=a と x=a+h の2点を結ぶ直線の傾きは {f(a+h)−f(a)}/h です。",
              "hを0へ近づけたときこの値が近づく先を f'(a) とし、点(a,f(a))での接線の傾きと考えます。",
            ],
          },
        ],
        example: {
          title: "例題: f(x)=x² の x=2 での微分係数",
          problem: "f(x)=x² のとき f'(2) を定義から求める。",
          steps: [
            { expression: "{f(2+h)−f(2)}/h={((2+h)²−4)}/h", note: "平均変化率へ代入します。" },
            { expression: "=(4+4h+h²−4)/h", note: "平方を展開します。" },
            { expression: "=4+h", note: "h≠0 の段階で h を約分します。" },
            { expression: "h→0 で 4", note: "間隔を0へ近づけると微分係数は4です。" },
          ],
        },
        practice: {
          title: "練習: 定義から微分係数を求める",
          problem: "f(x)=x² のとき f'(3) を求める。",
          steps: [
            { prompt: "差商を簡単にした式を書いてください。", answers: ["6+h"] },
            { prompt: "h→0 の値を書いてください。", answers: ["6"] },
          ],
          hint: "(3+h)²−9 を展開してから h で割ります。",
        },
        summary: ["微分係数は平均変化率の極限として考える。", "グラフでは1点における接線の傾きを表す。"],
      },
      {
        key: "derivative-polynomial",
        title: "導関数と多項式の微分",
        description: "xⁿ の微分公式を使い、多項式を項ごとに微分します。",
        goals: ["xⁿ の微分公式を使える。", "定数倍・和・差を項ごとに微分できる。"],
        concepts: [
          {
            title: "指数を前へ出し、指数を1つ下げる",
            body: [
              "正の整数nについて xⁿ を定義に従って微分すると、二項展開の一次の項だけが残り nxⁿ⁻¹ になります。",
              "多項式は各項を別々に微分し、定数項の微分は0です。",
            ],
            formulas: ["(xⁿ)'=nxⁿ⁻¹", "(af(x)+bg(x))'=af'(x)+bg'(x)"],
          },
        ],
        example: {
          title: "例題: 多項式を微分する",
          problem: "f(x)=3x³−4x²+5x−7 の導関数を求める。",
          steps: [
            { expression: "(3x³)'=9x²", note: "指数3を係数へ掛け、指数を2へ下げます。" },
            { expression: "(−4x²)'=−8x", note: "同じ操作を各項へ行います。" },
            { expression: "(5x)'=5, (−7)'=0", note: "一次式は係数が残り、定数は0です。" },
            { expression: "f'(x)=9x²−8x+5", note: "各項をまとめます。" },
          ],
        },
        practice: {
          title: "練習: 導関数を求める",
          problem: "f(x)=2x⁴−3x²+6 の導関数を求める。",
          steps: [
            { prompt: "2x⁴ の微分を書いてください。", answers: ["8x³"] },
            { prompt: "−3x² の微分を書いてください。", answers: ["-6x"] },
            { prompt: "f'(x) を書いてください。", answers: ["8x³-6x"] },
          ],
          hint: "定数6の微分は0です。",
        },
        summary: ["xⁿ は指数を係数へ掛け、指数を1つ下げる。", "多項式は項ごとに微分して最後にまとめる。"],
      },
      {
        key: "tangent-monotonicity",
        title: "接線・増減・極値",
        description: "導関数の値から接線の方程式と関数の増減を調べます。",
        goals: ["接点と傾きから接線の方程式を作れる。", "f'(x) の符号から増減と極値を判断できる。"],
        concepts: [
          {
            title: "導関数の符号はグラフの向き",
            body: [
              "x=a における接線の傾きは f'(a) なので、点(a,f(a))と合わせて直線の方程式を作れます。",
              "f'(x)>0 なら右上がり、f'(x)<0 なら右下がりです。符号が + から − へ変わる点では極大になります。",
            ],
          },
        ],
        example: {
          title: "例題: 極値を調べる",
          problem: "f(x)=x³−3x の増減と極値を調べる。",
          steps: [
            { expression: "f'(x)=3x²−3=3(x−1)(x+1)", note: "導関数を求めて因数分解します。" },
            { expression: "x<−1: +, −1<x<1: −, x>1: +", note: "導関数の符号を区間ごとに調べます。" },
            { expression: "x=−1 で極大、f(−1)=2", note: "+から−へ変わるので極大です。" },
            { expression: "x=1 で極小、f(1)=−2", note: "−から+へ変わるので極小です。" },
          ],
        },
        practice: {
          title: "練習: 接線を求める",
          problem: "f(x)=x²+1 の x=2 における接線を求める。",
          steps: [
            { prompt: "f'(2) を書いてください。", answers: ["4"] },
            { prompt: "接点のy座標を書いてください。", answers: ["5"] },
            { prompt: "接線の方程式を書いてください。", answers: ["y=4x-3", "y-5=4(x-2)"] },
          ],
          hint: "接点は(2,5)、傾きは4です。",
        },
        summary: ["接線は接点と微分係数から求める。", "導関数の符号変化を表にすると増減と極値を整理できる。"],
      },
    ],
  },
  {
    key: "integrals",
    title: "積分と面積",
    description: "微分の逆操作として不定積分を学び、定積分で変化量や面積を求めます。",
    lessons: [
      {
        key: "indefinite-definite-integral",
        title: "不定積分と定積分",
        description: "原始関数を求め、端点での値の差として定積分を計算します。",
        goals: ["多項式の不定積分を求められる。", "原始関数を使って定積分を計算できる。"],
        concepts: [
          {
            title: "積分は微分の逆向き",
            body: [
              "F'(x)=f(x) となるFをfの原始関数と呼びます。同じ導関数を持つ関数は定数だけ異なるので、不定積分には+Cを付けます。",
              "定積分は原始関数Fを使って F(b)−F(a) と計算し、積分定数は差を取ると消えます。",
            ],
            formulas: ["∫xⁿdx=xⁿ⁺¹/(n+1)+C (n≠−1)", "∫ₐᵇf(x)dx=F(b)−F(a)"],
          },
        ],
        example: {
          title: "例題: 定積分を計算する",
          problem: "∫₀²(3x²+2x)dx",
          steps: [
            { expression: "F(x)=x³+x²", note: "3x²と2xを項ごとに積分します。" },
            { expression: "F(2)−F(0)", note: "上端の値から下端の値を引きます。" },
            { expression: "=(8+4)−0=12", note: "端点を代入して計算します。" },
          ],
        },
        practice: {
          title: "練習: 定積分を計算する",
          problem: "∫₁³2x dx",
          steps: [
            { prompt: "原始関数を書いてください。", answers: ["x²", "x²+C"] },
            { prompt: "端点を代入した式を書いてください。", answers: ["9-1"] },
            { prompt: "答えを書いてください。", answers: ["8"] },
          ],
          hint: "2x の原始関数は x² です。",
        },
        summary: ["不定積分は微分すると元へ戻る関数を求める操作。", "定積分は原始関数の上端値−下端値で計算する。"],
      },
      {
        key: "area-by-integral",
        title: "定積分と面積",
        description: "グラフとx軸、または2つのグラフで囲まれた面積を定積分で求めます。",
        goals: ["関数がx軸の上か下かを確認して面積を立式できる。", "2曲線の上下関係を調べて差を積分できる。"],
        concepts: [
          {
            title: "面積では常に上−下を積分する",
            body: [
              "f(x)≥0 の区間では ∫f(x)dx がそのままx軸との面積になります。f(x)<0 の区間では積分値は負になるため符号を反転します。",
              "2曲線 y=f(x), y=g(x) の間では、交点を求め、上側−下側を積分します。",
            ],
          },
        ],
        example: {
          title: "例題: 放物線とx軸で囲まれた面積",
          problem: "y=4−x² と x軸で囲まれた部分の面積を求める。",
          steps: [
            { expression: "4−x²=0 ⇒ x=−2,2", note: "x軸との交点を求めます。" },
            { expression: "S=∫₋₂²(4−x²)dx", note: "区間内ではグラフがx軸の上にあります。" },
            { expression: "=[4x−x³/3]₋₂²", note: "原始関数を求めます。" },
            { expression: "=32/3", note: "上端値から下端値を引きます。" },
          ],
        },
        practice: {
          title: "練習: 2曲線の間の面積",
          problem: "y=x と y=x² に囲まれた部分の面積を求める。",
          steps: [
            { prompt: "交点のx座標を書いてください。", answers: ["0,1", "1,0"] },
            { prompt: "積分の中身を書いてください。", answers: ["x-x²"] },
            { prompt: "面積を書いてください。", answers: ["1/6"] },
          ],
          hint: "0<x<1 では x の方が x² より上です。",
        },
        summary: ["面積は区間と上下関係を決めてから積分する。", "積分値と面積は、関数が負の区間では符号が異なる。"],
      },
    ],
  },
];
