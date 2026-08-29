import type { FormulaDerivation } from "../math1/formula-derivations";

const math3FormulaDerivations: Record<string, FormulaDerivation> = {
  "geometric-sequence-limits": {
    title: "性質の根拠: |r|<1 なら rⁿ→0",
    introduction: "絶対値が1より小さい数を掛け続けると、項の絶対値が段階的に小さくなることを使います。",
    steps: [
      {
        expression: "0 ≤ |r| < 1",
        note: "rの絶対値が1より小さいとします。",
      },
      {
        expression: "|rⁿ| = |r|ⁿ",
        note: "nを1増やすたびに、絶対値はさらに|r|倍されます。",
      },
      {
        expression: "|r|ⁿ → 0 ⇒ rⁿ → 0",
        note: "絶対値が0へ近づくため、元の数列も0へ収束します。",
      },
    ],
  },
  "infinite-series": {
    title: "公式の導出: 無限等比級数の和",
    introduction: "まず有限個まで足した部分和を求め、その極限を取ります。",
    steps: [
      {
        expression: "Sₙ = a(1 − rⁿ)/(1 − r)",
        note: "初項a、公比rの等比数列の第n項までの和です。",
      },
      {
        expression: "|r|<1 ⇒ rⁿ→0",
        note: "収束条件の下ではrⁿが0へ近づきます。",
      },
      {
        expression: "lim[n→∞]Sₙ = a/(1 − r)",
        note: "部分和の極限が無限等比級数の和です。",
      },
    ],
  },
  "rational-radical-functions": {
    title: "漸近線の根拠: y=a/(x−p)+q",
    introduction: "分母が0へ近づく場合と、xの絶対値が大きくなる場合を分けて調べます。",
    steps: [
      {
        expression: "x→p ⇒ x−p→0",
        note: "a≠0なら分数部分の絶対値が限りなく大きくなるため、x=pが縦の漸近線になります。",
      },
      {
        expression: "x→±∞ ⇒ a/(x−p)→0",
        note: "分母の絶対値が大きくなると分数部分は0へ近づきます。",
      },
      {
        expression: "y→q",
        note: "したがってy=qが横の漸近線になります。",
      },
    ],
  },
  "product-quotient-rule": {
    title: "公式の導出: 積の微分法",
    introduction: "差分に同じ量を足して引き、fの変化とgの変化を分けます。",
    steps: [
      {
        expression: "{f(x+h)g(x+h)−f(x)g(x)}/h",
        note: "積fgの差商から始めます。",
      },
      {
        expression: "= {(f(x+h)−f(x))/h}g(x+h) + f(x){(g(x+h)−g(x))/h}",
        note: "f(x)g(x+h)を足して引くと、2つの差商に分けられます。",
      },
      {
        expression: "h→0 ⇒ (fg)' = f'g + fg'",
        note: "各差商が導関数へ、g(x+h)がg(x)へ近づきます。商の公式も積と逆数の微分から得られます。",
      },
    ],
  },
  "chain-rule": {
    title: "公式の根拠: 合成関数の微分法",
    introduction: "外側の変化率と内側の変化率を掛けることで、xに対する全体の変化率を作ります。",
    steps: [
      {
        expression: "u = g(x), y = f(u)",
        note: "合成関数を2段階の対応に分けます。",
      },
      {
        expression: "Δy/Δx = (Δy/Δu)(Δu/Δx)",
        note: "中間の変化量Δuを介して変化率を分解します。",
      },
      {
        expression: "dy/dx = (dy/du)(du/dx) = f'(g(x))g'(x)",
        note: "変化量を0へ近づけると連鎖律になります。",
      },
    ],
  },
  "trig-derivatives": {
    title: "公式の導出: sin x の導関数",
    introduction: "加法定理と基本極限 lim[h→0] sin h/h=1, lim[h→0](cos h−1)/h=0 を使います。",
    steps: [
      {
        expression: "{sin(x+h)−sin x}/h",
        note: "sin xの差商から始めます。",
      },
      {
        expression: "= sin x·{(cos h−1)/h} + cos x·{sin h/h}",
        note: "sin(x+h)の加法定理で2つの基本極限へ分けます。",
      },
      {
        expression: "h→0 ⇒ (sin x)' = cos x",
        note: "第1項は0、第2項はcos xへ近づきます。cos xやtan xも同様に導けます。",
      },
    ],
  },
  "exponential-log-derivatives": {
    title: "公式の根拠: eˣ と log x の導関数",
    introduction: "自然対数の底eを、指数関数が微分で同じ形を保つように選んだ定数として使います。",
    steps: [
      {
        expression: "{e^(x+h)−eˣ}/h = eˣ{(eʰ−1)/h}",
        note: "指数法則でeˣをくくります。",
      },
      {
        expression: "lim[h→0](eʰ−1)/h = 1",
        note: "eの定義に対応する基本極限です。",
      },
      {
        expression: "(eˣ)'=eˣ,  (log x)'=1/x",
        note: "log xはeˣの逆関数なので、逆関数の微分から1/xが得られます。",
      },
    ],
  },
  tangents: {
    title: "公式の根拠: 接線の方程式",
    introduction: "接線が接点を通り、その傾きが微分係数であることを直線の点傾きの式へ入れます。",
    steps: [
      {
        expression: "接点 = (a, f(a))",
        note: "接線は曲線上の接点を通ります。",
      },
      {
        expression: "傾き = f'(a)",
        note: "微分係数はその点での接線の傾きです。",
      },
      {
        expression: "y−f(a)=f'(a)(x−a)",
        note: "直線の点傾きの式へ接点と傾きを代入します。",
      },
    ],
  },
  "monotonicity-concavity": {
    title: "判定の根拠: 導関数の符号と増減",
    introduction: "導関数を局所的な傾きとして読むと、符号とグラフの進み方が対応します。",
    steps: [
      {
        expression: "f'(x)>0",
        note: "xを少し増やしたときf(x)も増える向きの傾きなので、関数は増加します。",
      },
      {
        expression: "f'(x)<0",
        note: "xを少し増やしたときf(x)が減る向きの傾きなので、関数は減少します。",
      },
      {
        expression: "f'の符号変化 +→− / −→+",
        note: "増加から減少なら極大、減少から増加なら極小になります。f''は傾きf'の増減を表します。",
      },
    ],
  },
  "indefinite-definite-integrals": {
    title: "公式の根拠: 微積分の基本定理",
    introduction: "積分で作った面積の増え方を微分すると、元の関数値へ戻ることを使います。",
    steps: [
      {
        expression: "G(x)=∫[a→x] f(t)dt",
        note: "aからxまでの符号付き面積をxの関数とみなします。",
      },
      {
        expression: "G'(x)=f(x)",
        note: "上端を少し動かしたとき増える面積は、およそ高さf(x)×横幅なので変化率はf(x)です。",
      },
      {
        expression: "∫[a→b]f(x)dx=F(b)−F(a)",
        note: "F'=fとなる原始関数を使うと、定積分を端点の値の差で計算できます。",
      },
    ],
  },
  substitution: {
    title: "公式の根拠: 置換積分法",
    introduction: "合成関数の微分法を逆向きに読みます。",
    steps: [
      {
        expression: "u=g(x), du=g'(x)dx",
        note: "内側の関数を新しい変数uに置き換えます。",
      },
      {
        expression: "dF(g(x))/dx = F'(g(x))g'(x)",
        note: "連鎖律では内側の導関数g'(x)が掛かります。",
      },
      {
        expression: "∫f(g(x))g'(x)dx = ∫f(u)du",
        note: "微分を逆向きにたどることで置換積分の形が得られます。",
      },
    ],
  },
  "integration-by-parts": {
    title: "公式の導出: 部分積分法",
    introduction: "積の微分公式を積分して並べ替えます。",
    steps: [
      {
        expression: "(fg)'=f'g+fg'",
        note: "積の微分公式から始めます。",
      },
      {
        expression: "fg = ∫f'g dx + ∫fg' dx",
        note: "両辺を積分します。",
      },
      {
        expression: "∫fg' dx = fg − ∫f'g dx",
        note: "一方の積分を移項すると部分積分の公式になります。",
      },
    ],
  },
  "standard-integrals": {
    title: "積分公式の根拠: 微分公式を逆向きに使う",
    introduction: "原始関数の定義に戻り、候補を微分して被積分関数へ戻ることを確認します。",
    steps: [
      {
        expression: "(sin x)'=cos x ⇒ ∫cos xdx=sin x+C",
        note: "sin xを微分するとcos xへ戻ります。",
      },
      {
        expression: "(−cos x)'=sin x ⇒ ∫sin xdx=−cos x+C",
        note: "負号を含めて微分するとsin xになります。",
      },
      {
        expression: "(eˣ)'=eˣ, (log|x|)'=1/x",
        note: "指数・対数の積分も対応する微分公式を逆向きに使います。",
      },
    ],
  },
  area: {
    title: "公式の根拠: 曲線間の面積",
    introduction: "区間を細かく分け、縦長の長方形の面積を足し合わせます。",
    steps: [
      {
        expression: "高さ ≈ f(xᵢ)−g(xᵢ), 幅=Δx",
        note: "各小区間で曲線をほぼ一定の高さとみなします。",
      },
      {
        expression: "面積 ≈ Σ{f(xᵢ)−g(xᵢ)}Δx",
        note: "細い長方形の面積を区間全体で足します。",
      },
      {
        expression: "Δx→0 ⇒ S=∫[a→b]{f(x)−g(x)}dx",
        note: "分割を限りなく細かくした極限が定積分です。",
      },
    ],
  },
  volume: {
    title: "公式の根拠: 回転体の体積",
    introduction: "回転体を薄い円板に分け、その体積を積み重ねます。",
    steps: [
      {
        expression: "断面積 A(x)=π{f(x)}²",
        note: "x軸回転では半径|f(x)|の円板が断面になります。",
      },
      {
        expression: "薄い円板の体積 ≈ A(xᵢ)Δx",
        note: "厚さΔxの円板として近似します。",
      },
      {
        expression: "V=π∫[a→b]{f(x)}²dx",
        note: "厚さを0へ近づけて全断面を積み重ねます。",
      },
    ],
  },
  "curve-length": {
    title: "公式の導出: 曲線の長さ",
    introduction: "曲線のごく短い部分を直線とみなし、ピタゴラスの定理を使います。",
    steps: [
      {
        expression: "ds² = dx² + dy²",
        note: "微小区間を横dx、縦dyの直角三角形の斜辺dsとみなします。",
      },
      {
        expression: "ds = √{1+(dy/dx)²} dx",
        note: "dx²でくくり、正の長さとして平方根を取ります。",
      },
      {
        expression: "L=∫[a→b]√{1+(f'(x))²}dx",
        note: "微小な長さdsを区間全体で積み重ねます。",
      },
    ],
  },
};

export const getMath3FormulaDerivation = (lessonKey: string) => math3FormulaDerivations[lessonKey];
