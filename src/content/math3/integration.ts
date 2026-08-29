import type { AlgebraUnit } from "../math1/algebra";

export const integrationUnits: AlgebraUnit[] = [
  {
    key: "integration-techniques",
    title: "積分の基本と計算法",
    description: "不定積分・定積分から、置換積分法・部分積分法、代表的な関数の積分へ進みます。",
    lessons: [
      {
        key: "indefinite-definite-integrals",
        title: "不定積分と定積分",
        description: "微分の逆として原始関数を求め、定積分では端点の値の差を計算します。",
        goals: ["不定積分で積分定数Cを付けられる。", "原始関数を使って定積分を計算できる。"],
        concepts: [
          {
            title: "積分は微分を逆向きにたどる",
            body: [
              "F'(x)=f(x)となるFをfの原始関数といい、不定積分では原始関数全体をF(x)+Cと表します。",
              "定積分は原始関数Fを使い、上端の値F(b)から下端の値F(a)を引いて求めます。",
            ],
            formulas: ["∫f(x)dx = F(x)+C", "∫[a→b] f(x)dx = F(b)−F(a)"],
          },
        ],
        example: {
          title: "例題: ∫[0→2] 3x² dx",
          problem: "∫[0→2] 3x² dx",
          steps: [
            { expression: "∫3x² dx = x³ + C", note: "x³を微分すると3x²になるので原始関数はx³です。" },
            { expression: "[x³]₀² = 2³ − 0³", note: "上端2と下端0を原始関数へ代入します。" },
            { expression: "= 8", note: "上端の値から下端の値を引きます。" },
          ],
        },
        practice: {
          title: "練習: 定積分を計算する",
          problem: "∫[1→3] 2x dx",
          steps: [
            { prompt: "2xの原始関数を積分定数なしで答えてください。", answers: ["x²"] },
            { prompt: "上端と下端を代入した式を書いてください。", answers: ["3²-1²", "9-1", "9−1"] },
            { prompt: "定積分の値を求めてください。", answers: ["8"] },
          ],
          hint: "2xの原始関数はx²です。",
        },
        summary: ["不定積分には積分定数Cを付ける。", "定積分は原始関数の上端値−下端値で計算する。"],
      },
      {
        key: "substitution",
        title: "置換積分法",
        description: "式の一部を新しい変数に置き換え、連鎖律を逆向きに使って積分します。",
        goals: ["置換する式と微分を対応させられる。", "定積分では積分区間も置換できる。"],
        concepts: [
          {
            title: "合成関数の微分を逆向きに読む",
            body: [
              "積分の中にg(x)とg'(x)が組になって現れるとき、u=g(x)と置くと式が単純になります。",
              "dxをduへ変えるだけでなく、定積分ではxの端点をuの端点へ変えることも忘れません。",
            ],
            formulas: ["u=g(x), du=g'(x)dx ⇒ ∫f(g(x))g'(x)dx = ∫f(u)du"],
          },
        ],
        example: {
          title: "例題: ∫2x(x²+1)³ dx",
          problem: "∫2x(x² + 1)³ dx",
          steps: [
            { expression: "u = x² + 1", note: "3乗されている内側をuと置きます。" },
            { expression: "du = 2x dx", note: "残りの2x dxがそのままduになります。" },
            { expression: "∫u³du = u⁴/4 + C", note: "uについて普通のべき関数として積分します。" },
            { expression: "= (x²+1)⁴/4 + C", note: "最後にuをxの式へ戻します。" },
          ],
        },
        practice: {
          title: "練習: 置換積分",
          problem: "∫3x²(x³+2)² dx",
          steps: [
            { prompt: "uと置く式を書いてください。", answers: ["u=x³+2", "u=x^3+2"] },
            { prompt: "duを答えてください。", answers: ["3x²dx", "du=3x²dx", "3x^2dx"] },
            { prompt: "積分結果を答えてください。", answers: ["(x³+2)³/3+C", "1/3(x³+2)³+C"] },
          ],
          hint: "x³+2を微分すると3x²です。",
        },
        summary: ["置換積分は連鎖律の逆向きの計算。", "uとduが積分の式全体を置き換えているか確認する。"],
      },
      {
        key: "integration-by-parts",
        title: "部分積分法",
        description: "積の微分公式を逆向きに使い、積の形の積分を計算します。",
        goals: ["部分積分の公式を使える。", "微分して簡単になる側を選べる。"],
        concepts: [
          {
            title: "積の微分を積分へ戻す",
            body: [
              "(fg)'=f'g+fg'を積分すると、積fgと2つの積分の関係が得られます。",
              "多項式×指数・三角関数などでは、多項式側を微分して次数を下げると計算しやすくなります。",
            ],
            formulas: ["∫f g' dx = fg − ∫f' g dx"],
          },
        ],
        example: {
          title: "例題: ∫x eˣ dx",
          problem: "∫x eˣ dx",
          steps: [
            { expression: "f=x, g'=eˣ", note: "xを微分する側、eˣを積分する側に選びます。" },
            { expression: "f'=1, g=eˣ", note: "それぞれ微分・積分します。" },
            { expression: "x eˣ − ∫eˣdx", note: "部分積分の公式へ代入します。" },
            { expression: "= x eˣ − eˣ + C", note: "残った積分を計算します。" },
          ],
        },
        practice: {
          title: "練習: 部分積分を使う",
          problem: "∫x cos x dx",
          steps: [
            { prompt: "f=xとしたときf'を答えてください。", answers: ["1"] },
            { prompt: "g'=cos xとしたときgを答えてください。", answers: ["sinx", "sin x"] },
            { prompt: "積分結果を答えてください。", answers: ["xsinx+cosx+C", "x sin x+cos x+C"] },
          ],
          hint: "∫sin x dx=−cos xなので、引き算の中の負号が変わります。",
        },
        summary: ["部分積分は積の微分公式を逆向きに使う。", "微分で簡単になる因子をfに選ぶと計算しやすい。"],
      },
      {
        key: "standard-integrals",
        title: "いろいろな関数の積分",
        description: "三角関数・指数関数・対数型の基本積分を微分公式と対応させます。",
        goals: ["sin x、cos x、eˣを積分できる。", "1/x型の積分とlog|x|を対応させられる。"],
        concepts: [
          {
            title: "微分公式を逆向きに使う",
            body: [
              "積分公式は新しく独立に覚えるのではなく、既知の微分公式を逆向きに確認すると整理できます。",
              "1/xの原始関数はlog|x|です。xが負の場合も含めるため絶対値が必要です。",
            ],
            formulas: ["∫cos x dx = sin x + C", "∫sin x dx = −cos x + C", "∫eˣ dx = eˣ + C", "∫1/x dx = log|x| + C"],
          },
        ],
        example: {
          title: "例題: ∫(eˣ+cos x)dx",
          problem: "∫(eˣ + cos x) dx",
          steps: [
            { expression: "∫eˣdx + ∫cos xdx", note: "和の積分を2つに分けます。" },
            { expression: "= eˣ + sin x + C", note: "それぞれ基本公式を使います。積分定数は最後に1つへまとめます。" },
          ],
        },
        practice: {
          title: "練習: 基本積分を組み合わせる",
          problem: "∫(2eˣ−sin x)dx",
          steps: [
            { prompt: "2eˣの積分を答えてください。", answers: ["2eˣ", "2e^x"] },
            { prompt: "−sin xの積分を答えてください。", answers: ["cosx", "cos x"] },
            { prompt: "全体の積分結果を答えてください。", answers: ["2eˣ+cosx+C", "2e^x+cos x+C"] },
          ],
          hint: "cos xを微分すると−sin xです。",
        },
        summary: ["積分公式は微分公式を逆向きに確認する。", "1/xの積分ではlog|x|と絶対値を付ける。"],
      },
    ],
  },
  {
    key: "integral-applications",
    title: "積分の応用",
    description: "定積分を面積・体積・曲線の長さへ結び付け、図形量を求めます。",
    lessons: [
      {
        key: "area",
        title: "曲線で囲まれた面積",
        description: "上下の関数の差を積分して、曲線間の面積を求めます。",
        goals: ["積分区間で上下関係を確認できる。", "2曲線の差を定積分して面積を求められる。"],
        concepts: [
          {
            title: "面積は『上−下』を積み重ねる",
            body: [
              "x=aからbまで上側がf(x)、下側がg(x)なら、縦の細い帯の高さはf(x)−g(x)です。",
              "途中で上下が入れ替わる場合は交点で区間を分け、面積が負にならないようにします。",
            ],
            formulas: ["S = ∫[a→b] {f(x)−g(x)} dx  (f≥g)"],
          },
        ],
        example: {
          title: "例題: y=x と y=x² に囲まれる面積",
          problem: "0≤x≤1, y=x, y=x²",
          steps: [
            { expression: "x − x² ≥ 0  (0≤x≤1)", note: "区間内ではy=xが上側です。" },
            { expression: "S=∫[0→1](x−x²)dx", note: "上−下を積分します。" },
            { expression: "=[x²/2−x³/3]₀¹=1/2−1/3=1/6", note: "原始関数へ端点を代入します。" },
          ],
        },
        practice: {
          title: "練習: 面積を定積分で求める",
          problem: "0≤x≤2で y=2x と y=x² に囲まれる面積",
          steps: [
            { prompt: "上−下の式を書いてください。", answers: ["2x-x²", "2x−x²"] },
            { prompt: "原始関数を書いてください。", answers: ["x²-x³/3", "x²−x³/3"] },
            { prompt: "面積を求めてください。", answers: ["4/3"] },
          ],
          hint: "0≤x≤2では2x−x²=x(2−x)≥0です。",
        },
        summary: ["曲線間の面積は上の関数−下の関数を積分する。", "上下が変わるときは区間を分ける。"],
      },
      {
        key: "volume",
        title: "回転体の体積",
        description: "断面積を積分して、x軸のまわりに回転してできる立体の体積を求めます。",
        goals: ["円板の断面積πy²を作れる。", "断面積を定積分して体積を求められる。"],
        concepts: [
          {
            title: "体積は断面積の積み重ね",
            body: [
              "y=f(x)とx軸で囲まれた部分をx軸のまわりに回転すると、位置xで半径|f(x)|の円板ができます。",
              "円板の面積π{f(x)}²をx方向に積分すると体積になります。",
            ],
            formulas: ["V = π∫[a→b] {f(x)}² dx"],
          },
        ],
        example: {
          title: "例題: y=x, 0≤x≤1 をx軸回転",
          problem: "y=x, 0≤x≤1",
          steps: [
            { expression: "断面積 A(x)=πx²", note: "半径xの円板の面積を作ります。" },
            { expression: "V=π∫[0→1]x²dx", note: "断面積を区間で積分します。" },
            { expression: "=π[x³/3]₀¹=π/3", note: "定積分を計算します。" },
          ],
        },
        practice: {
          title: "練習: 回転体の体積",
          problem: "y=2x, 0≤x≤1 をx軸のまわりに回転",
          steps: [
            { prompt: "断面積A(x)を答えてください。", answers: ["4πx²", "π(2x)²", "4pi x²"] },
            { prompt: "πを外に出した積分の中身を答えてください。", answers: ["4x²"] },
            { prompt: "体積を答えてください。", answers: ["4π/3", "4pi/3"] },
          ],
          hint: "半径はy=2xなので、円板の面積はπ(2x)²です。",
        },
        summary: ["回転体の体積は断面積を積分する。", "x軸回転の円板法では断面積がπf(x)²になる。"],
      },
      {
        key: "curve-length",
        title: "曲線の長さ",
        description: "小さな線分の長さを積み重ねる考えから、曲線の弧長公式を使います。",
        goals: ["弧長公式の√(1+(y')²)の意味を説明できる。", "簡単な曲線の長さを定積分で求められる。"],
        concepts: [
          {
            title: "微小な直角三角形の斜辺を積み重ねる",
            body: [
              "曲線上の短い区間では、横の変化dxと縦の変化dyを直角三角形の2辺とみなせます。",
              "ds²=dx²+dy²をdx²で割ると、ds=√(1+(dy/dx)²)dxが得られます。",
            ],
            formulas: ["L = ∫[a→b] √{1 + (f'(x))²} dx"],
          },
        ],
        example: {
          title: "例題: 直線 y=2x の 0≤x≤3 の長さ",
          problem: "y=2x, 0≤x≤3",
          steps: [
            { expression: "y'=2", note: "まず導関数を求めます。" },
            { expression: "√(1+(y')²)=√5", note: "弧長公式の被積分関数は一定です。" },
            { expression: "L=∫[0→3]√5 dx=3√5", note: "定数√5を区間の長さ3だけ積み重ねます。" },
          ],
        },
        practice: {
          title: "練習: 直線を弧長公式で確認する",
          problem: "y=3x, 0≤x≤2",
          steps: [
            { prompt: "y'を求めてください。", answers: ["3"] },
            { prompt: "√(1+(y')²)を簡単にしてください。", answers: ["√10", "sqrt10"] },
            { prompt: "曲線の長さを求めてください。", answers: ["2√10", "2sqrt10"] },
          ],
          hint: "導関数は一定3なので、被積分関数も一定です。",
        },
        summary: ["弧長公式は微小なピタゴラスの定理から生まれる。", "曲線の長さでは先にf'(x)を求めてから平方する。"],
      },
    ],
  },
];
