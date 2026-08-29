import type { AlgebraUnit } from "../math1/algebra";

export const differentiationUnits: AlgebraUnit[] = [
  {
    key: "derivative-rules",
    title: "いろいろな関数の導関数",
    description: "積・商・合成関数、三角関数、指数関数、対数関数の微分公式を使い分けます。",
    lessons: [
      {
        key: "product-quotient-rule",
        title: "積・商の微分法",
        description: "2つの関数の積や商を、一方ずつ微分する公式で処理します。",
        goals: ["積の微分公式を使える。", "商の微分公式を使える。"],
        concepts: [
          {
            title: "積は2項、商は分母の2乗",
            body: [
              "積fgの導関数は、fだけを微分した項とgだけを微分した項を足します。",
              "商f/gでは、分子はf'g−fg'、分母はg²になります。符号の順序を固定して覚えます。",
            ],
            formulas: ["(fg)' = f'g + fg'", "(f/g)' = (f'g − fg')/g²"],
          },
        ],
        example: {
          title: "例題: y=x²(x+1) を微分する",
          problem: "y = x²(x + 1)",
          steps: [
            { expression: "f=x², g=x+1", note: "積を2つの関数に分けます。" },
            { expression: "y' = 2x(x+1) + x²·1", note: "(fg)'=f'g+fg'を使います。" },
            { expression: "= 3x² + 2x", note: "展開して同類項をまとめます。" },
          ],
        },
        practice: {
          title: "練習: 積の微分",
          problem: "y = x(x² + 2)",
          steps: [
            { prompt: "積の微分公式を使った式を書いてください。", answers: ["1*(x²+2)+x*2x", "(x²+2)+2x²"] },
            { prompt: "整理した導関数を書いてください。", answers: ["3x²+2"] },
          ],
          hint: "f=x、g=x²+2 と置きます。",
        },
        summary: ["積はf'g+fg'と2項に分ける。", "商は分母g²と分子の順序f'g−fg'を確認する。"],
      },
      {
        key: "chain-rule",
        title: "合成関数の微分法",
        description: "外側の関数を微分してから、内側の関数の導関数を掛けます。",
        goals: ["合成関数を外側と内側に分けられる。", "連鎖律を使って微分できる。"],
        concepts: [
          {
            title: "外側を微分し、内側の微分を掛ける",
            body: [
              "y=f(g(x))では、まず外側fをそのままの入力g(x)で微分し、最後にg'(x)を掛けます。",
              "複雑な式でも『外側は何か』『内側は何か』を先に言葉で分けると誤りを減らせます。",
            ],
            formulas: ["d/dx f(g(x)) = f'(g(x))g'(x)"],
          },
        ],
        example: {
          title: "例題: y=(3x+1)⁴ を微分する",
          problem: "y = (3x + 1)⁴",
          steps: [
            { expression: "u = 3x + 1", note: "内側の式をuと置きます。" },
            { expression: "dy/du = 4u³, du/dx = 3", note: "外側u⁴と内側をそれぞれ微分します。" },
            { expression: "y' = 4(3x+1)³·3 = 12(3x+1)³", note: "連鎖律で掛け合わせます。" },
          ],
        },
        practice: {
          title: "練習: 連鎖律を使う",
          problem: "y = (2x − 5)³",
          steps: [
            { prompt: "外側を微分した形を書いてください。", answers: ["3(2x-5)²", "3(2x−5)²"] },
            { prompt: "内側の導関数を答えてください。", answers: ["2"] },
            { prompt: "最終的な導関数を書いてください。", answers: ["6(2x-5)²", "6(2x−5)²"] },
          ],
          hint: "内側2x−5の微分2を最後に掛けます。",
        },
        summary: ["合成関数は外側と内側に分ける。", "外側の導関数に内側の導関数を掛ける。"],
      },
      {
        key: "trig-derivatives",
        title: "三角関数の導関数",
        description: "sin、cos、tanの導関数と合成関数の微分を組み合わせます。",
        goals: ["sin x、cos x、tan xを微分できる。", "sin(ax+b)型を連鎖律で微分できる。"],
        concepts: [
          {
            title: "sinとcosは微分で循環する",
            body: [
              "sin xの導関数はcos x、cos xの導関数は−sin xです。tan xは1/cos²xになります。",
              "角がxそのものではないときは、三角関数を微分した後に角の導関数を掛けます。",
            ],
            formulas: ["(sin x)' = cos x", "(cos x)' = −sin x", "(tan x)' = 1/cos²x"],
          },
        ],
        example: {
          title: "例題: y=sin 3x を微分する",
          problem: "y = sin 3x",
          steps: [
            { expression: "u = 3x", note: "角を内側の関数とみなします。" },
            { expression: "d/du(sin u) = cos u, du/dx = 3", note: "外側と内側を微分します。" },
            { expression: "y' = 3 cos 3x", note: "連鎖律で内側の3を掛けます。" },
          ],
        },
        practice: {
          title: "練習: 三角関数と連鎖律",
          problem: "y = cos 2x",
          steps: [
            { prompt: "cos uの導関数を書いてください。", answers: ["-sin u", "−sin u", "-sinu"] },
            { prompt: "最終的な導関数を書いてください。", answers: ["-2sin2x", "−2sin2x", "-2 sin 2x"] },
          ],
          hint: "cosの微分では負号が付き、角2xの微分2も掛けます。",
        },
        summary: ["(sin x)'=cos x、(cos x)'=−sin x。", "角がax+bなら連鎖律でaを掛ける。"],
      },
      {
        key: "exponential-log-derivatives",
        title: "指数関数・対数関数の導関数",
        description: "自然対数とeを基準に、指数・対数関数を微分します。",
        goals: ["eˣとlog xを微分できる。", "aˣやlogₐxの微分公式を使える。"],
        concepts: [
          {
            title: "自然対数を基準に整理する",
            body: [
              "eˣは微分してもeˣのままです。自然対数log x（ln x）の導関数は1/xです。",
              "一般の底aでは、指数関数にlog aが掛かり、対数関数ではlog aで割ります。",
            ],
            formulas: ["(eˣ)' = eˣ", "(log x)' = 1/x", "(aˣ)' = aˣ log a"],
          },
        ],
        example: {
          title: "例題: y=e^(2x) を微分する",
          problem: "y = e^(2x)",
          steps: [
            { expression: "u = 2x", note: "指数部分を内側の関数とみなします。" },
            { expression: "d/du(eᵘ) = eᵘ, du/dx = 2", note: "eの指数関数と内側を微分します。" },
            { expression: "y' = 2e^(2x)", note: "連鎖律で2を掛けます。" },
          ],
        },
        practice: {
          title: "練習: 対数関数を微分する",
          problem: "y = log(3x)",
          steps: [
            { prompt: "連鎖律を使った形を書いてください。", answers: ["1/(3x)*3", "3/(3x)"] },
            { prompt: "整理した導関数を書いてください。", answers: ["1/x"] },
          ],
          hint: "log uの微分はu'/uです。",
        },
        summary: ["eˣは微分しても同じ形を保つ。", "log uの微分はu'/uと考えると合成関数にも使いやすい。"],
      },
    ],
  },
  {
    key: "derivative-applications",
    title: "導関数の応用",
    description: "接線、増減・極値・凹凸、速度・加速度を導関数で調べます。",
    lessons: [
      {
        key: "tangents",
        title: "接線の方程式",
        description: "導関数から接点での傾きを求め、直線の方程式を作ります。",
        goals: ["接点での微分係数を求められる。", "点傾きの式から接線の方程式を作れる。"],
        concepts: [
          {
            title: "導関数は各点での接線の傾き",
            body: [
              "y=f(x)上のx=aでの接線の傾きはf'(a)です。接点(a,f(a))を通ることと合わせて直線を決めます。",
            ],
            formulas: ["y − f(a) = f'(a)(x − a)"],
          },
        ],
        example: {
          title: "例題: y=x² の x=1 における接線",
          problem: "y = x², x = 1",
          steps: [
            { expression: "f'(x)=2x ⇒ f'(1)=2", note: "接点での傾きを求めます。" },
            { expression: "f(1)=1", note: "接点は(1,1)です。" },
            { expression: "y−1=2(x−1) ⇒ y=2x−1", note: "点傾きの式へ代入して整理します。" },
          ],
        },
        practice: {
          title: "練習: 接線を求める",
          problem: "y=x²+1 の x=2 における接線",
          steps: [
            { prompt: "接線の傾きを求めてください。", answers: ["4"] },
            { prompt: "接点のy座標を求めてください。", answers: ["5"] },
            { prompt: "接線を y=… の形で答えてください。", answers: ["y=4x-3", "y=4x−3"] },
          ],
          hint: "f'(x)=2x、接点は(2,5)です。",
        },
        summary: ["接線の傾きはf'(a)。", "接点(a,f(a))と傾きを点傾きの式へ入れる。"],
      },
      {
        key: "monotonicity-concavity",
        title: "増減・極値・凹凸",
        description: "一階・二階導関数の符号からグラフの形を調べます。",
        goals: ["f'の符号から増減と極値を判定できる。", "f''の符号から凹凸と変曲点を考えられる。"],
        concepts: [
          {
            title: "一階導関数は増減、二階導関数は曲がり方",
            body: [
              "f'(x)>0なら増加、f'(x)<0なら減少します。f'の符号が+から−へ変われば極大、−から+なら極小です。",
              "f''は傾きの変化を表し、その符号が変わる点は変曲点の候補です。",
            ],
            formulas: ["f'(x)>0 ⇒ 増加,  f'(x)<0 ⇒ 減少", "f''の符号変化 ⇒ 変曲点の候補"],
          },
        ],
        example: {
          title: "例題: f(x)=x³−3x の極値候補",
          problem: "f(x)=x³−3x",
          steps: [
            { expression: "f'(x)=3x²−3=3(x−1)(x+1)", note: "一階導関数を因数分解します。" },
            { expression: "f'(x)=0 ⇒ x=−1,1", note: "増減が変わり得る点を求めます。" },
            { expression: "符号: +,−,+", note: "x=−1で極大、x=1で極小と分かります。" },
          ],
        },
        practice: {
          title: "練習: 増減を調べる",
          problem: "f(x)=x²−4x",
          steps: [
            { prompt: "f'(x)を求めてください。", answers: ["2x-4", "2x−4"] },
            { prompt: "f'(x)=0となるxを求めてください。", answers: ["2"] },
            { prompt: "x=2は極大・極小のどちらですか。", answers: ["極小"] },
          ],
          hint: "x<2ではf'<0、x>2ではf'>0です。",
        },
        summary: ["f'の符号表で増減と極値を決める。", "f''はグラフの凹凸や変曲点を調べる手掛かりになる。"],
      },
      {
        key: "motion",
        title: "速度と加速度",
        description: "位置を時間で微分して速度、さらに微分して加速度を求めます。",
        goals: ["位置関数から速度を求められる。", "速度から加速度を求められる。"],
        concepts: [
          {
            title: "時間微分を重ねて運動を読む",
            body: [
              "時刻tでの位置をx(t)とすると、速度v(t)はx'(t)、加速度a(t)はv'(t)=x''(t)です。",
              "速度の符号は進む向き、加速度は速度の変化の仕方を表します。",
            ],
            formulas: ["v(t)=x'(t)", "a(t)=v'(t)=x''(t)"],
          },
        ],
        example: {
          title: "例題: x(t)=t³−3t² の速度と加速度",
          problem: "x(t)=t³−3t²",
          steps: [
            { expression: "v(t)=x'(t)=3t²−6t", note: "位置を1回微分します。" },
            { expression: "a(t)=v'(t)=6t−6", note: "速度をさらに微分します。" },
            { expression: "t=2: v=0, a=6", note: "指定時刻を代入すれば瞬間の運動状態が分かります。" },
          ],
        },
        practice: {
          title: "練習: 位置から速度・加速度へ",
          problem: "x(t)=2t³+t",
          steps: [
            { prompt: "速度v(t)を求めてください。", answers: ["6t²+1"] },
            { prompt: "加速度a(t)を求めてください。", answers: ["12t"] },
            { prompt: "t=1での加速度を求めてください。", answers: ["12"] },
          ],
          hint: "位置を1回、2回と順に微分します。",
        },
        summary: ["位置の一階微分が速度、二階微分が加速度。", "導関数を物理量の変化率として読む。"],
      },
    ],
  },
];
