import type { MathUnit } from "../math1/types";

export const trigonometricFunctionUnits: MathUnit[] = [
  {
    key: "angles-functions",
    title: "一般角と三角関数",
    description: "角を実数全体へ広げ、弧度法と単位円から三角関数を定義します。",
    lessons: [
      {
        key: "radians",
        title: "一般角と弧度法",
        description: "回転として角を捉え、弧の長さを基準にラジアンで表します。",
        goals: ["度数法と弧度法を相互に変換できる。", "負の角や360°を超える角を同じ終辺で整理できる。"],
        concepts: [
          {
            title: "半径と同じ長さの弧に対する角が1ラジアン",
            body: [
              "半径 r の円で弧の長さが r になる中心角を1 radと定めます。円周は2πrなので1周は2π radです。",
              "したがって180°=π rad を基準に度数法と弧度法を変換できます。",
            ],
          },
        ],
        example: {
          title: "例題: 150°を弧度法で表す",
          problem: "150°をラジアンで表す。",
          steps: [
            { expression: "150°×π/180°", note: "180°=π rad を使い、度を消します。" },
            { expression: "=5π/6", note: "150/180 を約分します。" },
          ],
        },
        practice: {
          title: "練習: 弧度法へ変換する",
          problem: "−120°を弧度法で表す。",
          steps: [
            { prompt: "π/180 を掛けた式を書いてください。", answers: ["-120π/180", "-120*π/180"] },
            { prompt: "答えを書いてください。", answers: ["-2π/3"] },
          ],
          hint: "符号はそのままにして 120/180 を約分します。",
        },
        summary: ["1周は2π rad、半周はπ rad。", "一般角では回転の向きと回数を含めて角を表せる。"],
      },
      {
        key: "trig-functions-identities",
        title: "三角関数と基本関係",
        description: "単位円上の座標として sin, cos, tan を捉え、基本関係を使います。",
        goals: ["任意の角のsin・cosの符号を単位円から判断できる。", "sin²θ+cos²θ=1 を使って未知の値を求められる。"],
        concepts: [
          {
            title: "単位円の座標が cos と sin",
            body: [
              "単位円上で角θの終辺と円の交点を P とすると、P=(cosθ,sinθ) です。",
              "Pは x²+y²=1 上にあるので、cos²θ+sin²θ=1 が成り立ちます。tanθ は cosθ≠0 のとき sinθ/cosθ です。",
            ],
            formulas: ["sin²θ+cos²θ=1", "tanθ=sinθ/cosθ"],
          },
        ],
        example: {
          title: "例題: cosθからsinθを求める",
          problem: "0<θ<π/2, cosθ=3/5 のとき sinθ を求める。",
          steps: [
            { expression: "sin²θ+(3/5)²=1", note: "基本関係へ代入します。" },
            { expression: "sin²θ=16/25", note: "移項して整理します。" },
            { expression: "sinθ=4/5", note: "第1象限なので sinθ は正です。" },
          ],
        },
        practice: {
          title: "練習: 基本関係を使う",
          problem: "π/2<θ<π, sinθ=5/13 のとき cosθ を求める。",
          steps: [
            { prompt: "cos²θ を書いてください。", answers: ["144/169"] },
            { prompt: "cosθ を符号付きで書いてください。", answers: ["-12/13"] },
          ],
          hint: "第2象限では cosθ は負です。",
        },
        summary: ["sinとcosは単位円上のy座標とx座標。", "符号は象限を確認してから平方根を選ぶ。"],
      },
      {
        key: "trig-graphs",
        title: "三角関数のグラフ",
        description: "周期・振幅・位相を意識して sin, cos, tan のグラフを読みます。",
        goals: ["sin・cosの周期が2πであると説明できる。", "y=a sin bx の振幅と周期を読める。"],
        concepts: [
          {
            title: "単位円の動きを横軸の角へ写す",
            body: [
              "θを増やして単位円を1周すると、sinθとcosθの値は元へ戻るため周期は2πです。",
              "y=a sin bx では縦方向に|a|倍、横方向には角がb倍速く進むので周期は2π/|b|です。",
            ],
          },
        ],
        example: {
          title: "例題: y=2sin3x の振幅と周期",
          problem: "y=2sin3x の振幅と周期を求める。",
          steps: [
            { expression: "振幅=|2|=2", note: "sinの値域[-1,1]が縦に2倍されます。" },
            { expression: "周期=2π/3", note: "3xが2π増えるためにxは2π/3増えればよいです。" },
          ],
        },
        practice: {
          title: "練習: グラフの特徴を読む",
          problem: "y=−3cos(2x) の振幅と周期を求める。",
          steps: [
            { prompt: "振幅を書いてください。", answers: ["3"] },
            { prompt: "周期を書いてください。", answers: ["π", "pi"] },
          ],
          hint: "周期は2π/2です。負号は上下反転を表しますが振幅は3です。",
        },
        summary: ["sin・cosの基本周期は2π。", "係数aは振幅、xの係数bは周期に影響する。"],
      },
    ],
  },
  {
    key: "addition-equations",
    title: "加法定理と方程式",
    description: "加法定理から倍角公式を作り、三角方程式の解法へつなげます。",
    lessons: [
      {
        key: "addition-theorem",
        title: "三角関数の加法定理",
        description: "2つの角の和・差の三角関数を、それぞれのsin・cosで表します。",
        goals: ["sin(α±β), cos(α±β) の公式を使える。", "既知角の和として15°や75°の値を求められる。"],
        concepts: [
          {
            title: "角の和を既知の角へ分解する",
            body: [
              "加法定理を使うと、直接値が分からない角を30°・45°など既知の角の組合せへ分解できます。",
              "符号は sin の和・差と cos の和・差で規則が異なるため、式へ代入する前に公式を書きます。",
            ],
            formulas: ["sin(α+β)=sinα cosβ+cosα sinβ", "cos(α+β)=cosα cosβ−sinα sinβ"],
          },
        ],
        example: {
          title: "例題: sin75°を求める",
          problem: "sin75°",
          steps: [
            { expression: "=sin(45°+30°)", note: "75°を45°と30°の和に分けます。" },
            { expression: "=sin45°cos30°+cos45°sin30°", note: "sinの加法定理へ代入します。" },
            { expression: "=(√2/2)(√3/2)+(√2/2)(1/2)", note: "特別な角の値を代入します。" },
            { expression: "=(√6+√2)/4", note: "分子をまとめます。" },
          ],
        },
        practice: {
          title: "練習: 加法定理で値を求める",
          problem: "cos15°=cos(45°−30°) を求める。",
          steps: [
            { prompt: "加法定理へ代入した式を書いてください。", answers: ["cos45°cos30°+sin45°sin30°"] },
            { prompt: "答えを書いてください。", answers: ["(√6+√2)/4"] },
          ],
          hint: "cos(α−β) では中央の符号は + です。",
        },
        summary: ["加法定理で未知の角を既知角の和・差へ分解できる。", "sinとcosで符号の規則が異なるので公式を先に書く。"],
      },
      {
        key: "double-angle-equations",
        title: "倍角公式と三角方程式",
        description: "加法定理から倍角公式を作り、周期を考えて方程式の解を求めます。",
        goals: ["倍角公式を加法定理から作れる。", "指定された範囲で三角方程式のすべての解を求められる。"],
        concepts: [
          {
            title: "α=β=θ と置けば倍角公式になる",
            body: [
              "加法定理の2つの角を同じθにすると sin2θ, cos2θ の公式が得られます。",
              "方程式では単位円上で条件を満たす角を1周期分確認し、指定範囲にあるものをすべて挙げます。",
            ],
            formulas: ["sin2θ=2sinθcosθ", "cos2θ=cos²θ−sin²θ=2cos²θ−1=1−2sin²θ"],
          },
        ],
        example: {
          title: "例題: sin2x=√3/2 を解く",
          problem: "0≤x<π のとき sin2x=√3/2 を解く。",
          steps: [
            { expression: "0≤2x<2π", note: "角2xの範囲を先に求めます。" },
            { expression: "2x=π/3, 2π/3", note: "1周期内で sin が √3/2 になる角を単位円から選びます。" },
            { expression: "x=π/6, π/3", note: "両辺を2で割ります。" },
          ],
        },
        practice: {
          title: "練習: 三角方程式を解く",
          problem: "0≤x<2π のとき cos x=−1/2 を解く。",
          steps: [
            { prompt: "単位円上の2つの角を書いてください。", answers: ["2π/3,4π/3", "4π/3,2π/3"] },
            { prompt: "答えを書いてください。", answers: ["x=2π/3,4π/3", "2π/3,4π/3"] },
          ],
          hint: "cosはx座標なので、第2・第3象限を確認します。",
        },
        summary: ["倍角公式は加法定理に同じ角を代入して得られる。", "三角方程式は角の範囲と周期を先に整理する。"],
      },
    ],
  },
];
