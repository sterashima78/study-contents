import type { FormulaDerivation } from "./formula-derivations";

const additionalFormulaDerivations: Record<string, FormulaDerivation> = {
  "special-angle-trig": {
    title: "特別な角の三角比を図形から作る",
    introduction: "30°・45°・60°の値は、正三角形と直角二等辺三角形の辺の比から毎回作り直せます。",
    steps: [
      { expression: "45°: 1² + 1² = (斜辺)²", note: "2辺が1の直角二等辺三角形に三平方の定理を使います。" },
      { expression: "斜辺 = √2 → sin45° = cos45° = 1/√2, tan45° = 1", note: "三角比の定義へ辺の比 1:1:√2 を入れます。" },
      { expression: "30°・60°: 一辺2の正三角形を高さで半分にする", note: "斜辺2、短い辺1の直角三角形ができます。" },
      { expression: "高さ² = 2² − 1² = 3 → 高さ = √3", note: "辺の比は 1:√3:2 です。" },
      { expression: "sin30°=1/2, cos30°=√3/2, sin60°=√3/2, cos60°=1/2", note: "三角比の定義へ辺の比を入れると特別な角の値が得られます。" },
    ],
  },
  "obtuse-angle-trig": {
    title: "180°−θ の三角比の根拠",
    introduction: "単位円上で、角 θ と 180°−θ の点が y軸について対称になることを使います。",
    steps: [
      { expression: "θ の点を (cosθ, sinθ) とする", note: "単位円では x座標が cos、y座標が sin です。" },
      { expression: "180°−θ の点は (−cosθ, sinθ)", note: "y軸対称なので x座標だけ符号が反転します。" },
      { expression: "sin(180°−θ)=sinθ, cos(180°−θ)=−cosθ", note: "それぞれ y座標と x座標を読みます。" },
      { expression: "tan(180°−θ)=sinθ/(−cosθ)=−tanθ", note: "tan=sin/cos を使うと tan の符号も分かります。" },
    ],
  },
  "tan-from-sin-cos": {
    title: "公式の導出: tan θ = sin θ / cos θ",
    introduction: "直角三角形の同じ3辺を使った定義どうしを割ると、斜辺が約分されます。",
    steps: [
      { expression: "sinθ = 向かい側/斜辺, cosθ = となり側/斜辺", note: "三角比の定義を書きます。" },
      { expression: "sinθ/cosθ = (向かい側/斜辺)/(となり側/斜辺)", note: "sin を cos で割ります。" },
      { expression: "= 向かい側/となり側", note: "分子・分母に共通する斜辺が消えます。" },
      { expression: "= tanθ", note: "右辺は tan の定義そのものです。" },
    ],
  },
  "pythagorean-trig": {
    title: "公式の導出: sin² θ + cos² θ = 1",
    introduction: "三平方の定理を斜辺の2乗で割ると、辺の比が sin と cos に変わります。",
    steps: [
      { expression: "a² + b² = c²", note: "向かい側を a、となり側を b、斜辺を c とした三平方の定理です。" },
      { expression: "a²/c² + b²/c² = 1", note: "両辺を c² で割ります。" },
      { expression: "(a/c)² + (b/c)² = 1", note: "分数の2乗として書き直します。" },
      { expression: "sin²θ + cos²θ = 1", note: "a/c=sinθ、b/c=cosθ を代入します。" },
    ],
  },
  "sine-law": {
    title: "正弦定理の導出",
    introduction: "三角形に高さを引き、同じ高さを2つの直角三角形から表します。",
    steps: [
      { expression: "辺AB上へ C から高さ h を下ろす", note: "辺 a=BC、b=CA とし、角 A,B を使います。" },
      { expression: "h = b sin A", note: "A側の直角三角形で sinA=h/b です。" },
      { expression: "h = a sin B", note: "B側の直角三角形で sinB=h/a です。" },
      { expression: "b sin A = a sin B", note: "どちらも同じ高さ h なので等しいです。" },
      { expression: "a/sin A = b/sin B", note: "両辺を sinA·sinB で整理します。同様に別の高さを使えば c/sinC も同じ値だと分かります。" },
      { expression: "a/sin A = b/sin B = c/sin C", note: "これが正弦定理です。" },
    ],
  },
  "cosine-law": {
    title: "余弦定理の導出",
    introduction: "1つの頂点から高さを下ろし、底辺方向の長さを cos、垂直方向の長さを sin で表して三平方の定理を使います。",
    steps: [
      { expression: "C から AB へ高さを下ろす", note: "AB=c、AC=b、BC=a、角Aを基準にします。" },
      { expression: "底辺方向 = b cos A, 高さ = b sin A", note: "AC=b の水平成分と垂直成分です。" },
      { expression: "a² = (c − b cos A)² + (b sin A)²", note: "BCを斜辺とする直角三角形に三平方の定理を使います。" },
      { expression: "= c² − 2bc cos A + b²cos²A + b²sin²A", note: "平方を展開します。" },
      { expression: "= b² + c² − 2bc cos A", note: "sin²A+cos²A=1 を使って b²(cos²A+sin²A)=b² とまとめます。" },
    ],
  },
  "triangle-area": {
    title: "公式の導出: S = (1/2)bc sin A",
    introduction: "通常の三角形の面積『底辺×高さ÷2』で、高さだけを sin を使って表します。",
    steps: [
      { expression: "S = (1/2) × c × h", note: "辺 c を底辺、高さを h とします。" },
      { expression: "sin A = h/b", note: "辺 b を斜辺とする直角三角形で三角比を使います。" },
      { expression: "h = b sin A", note: "両辺に b を掛けて高さを表します。" },
      { expression: "S = (1/2)bc sin A", note: "高さ h を面積の式へ代入します。" },
    ],
  },
  "vertex-form": {
    title: "頂点が (p,q) になる理由",
    introduction: "平方が0以上であり、x=p のときだけ0になることから、頂点の位置が決まります。",
    steps: [
      { expression: "y = a(x−p)² + q", note: "頂点形式から始めます。" },
      { expression: "x=p のとき (x−p)²=0", note: "平方の部分が最小の0になります。" },
      { expression: "y=q", note: "そのときの点は (p,q) です。" },
      { expression: "x=p±t では (x−p)²=t²", note: "pから左右へ同じ距離の点で y が同じなので、軸は x=p です。" },
    ],
  },
  "completing-square": {
    title: "平方完成の公式を作る",
    introduction: "完全平方を展開し、元の x²+bx と比べて不足・余分な定数を調整します。",
    steps: [
      { expression: "(x + b/2)²", note: "x の係数 b の半分をかっこへ入れます。" },
      { expression: "= x² + bx + (b/2)²", note: "和の二乗の公式で展開します。" },
      { expression: "x² + bx = (x + b/2)² − (b/2)²", note: "余分に加わった (b/2)² を引けば元の式になります。" },
    ],
  },
  "quadratic-extrema-all-real": {
    title: "頂点で最大・最小になる理由",
    introduction: "頂点形式の平方部分が必ず0以上であることを使います。",
    steps: [
      { expression: "(x−p)² ≥ 0", note: "実数の平方は0以上です。" },
      { expression: "a>0 なら a(x−p)² ≥ 0", note: "正の数を掛けても0以上です。" },
      { expression: "y=a(x−p)²+q ≥ q", note: "したがって x=p のとき最小値 q になります。" },
      { expression: "a<0 なら a(x−p)² ≤ 0 → y≤q", note: "aが負なら同様に x=p で最大値 q になります。" },
    ],
  },
  "quadratic-roots-graph": {
    title: "方程式の解と x軸との交点が一致する理由",
    introduction: "x軸上の点では y座標が0である、という座標の定義をそのまま使います。",
    steps: [
      { expression: "グラフ: y=f(x)", note: "二次関数のグラフを考えます。" },
      { expression: "x軸上では y=0", note: "x軸は y座標が0の点の集まりです。" },
      { expression: "交点では f(x)=0", note: "y=f(x) と y=0 を同時に満たします。" },
      { expression: "f(x)=0 の実数解 = 交点の x座標", note: "このため方程式の解の個数と x軸との交点数が対応します。" },
    ],
  },
  "quadratic-formula": {
    title: "二次方程式の解の公式の導出",
    introduction: "ax²+bx+c=0 を、一般の文字のまま平方完成して x を取り出します。",
    steps: [
      { expression: "ax² + bx + c = 0  (a≠0)", note: "一般の二次方程式から始めます。" },
      { expression: "x² + (b/a)x = −c/a", note: "両辺を a で割り、定数項を右辺へ移します。" },
      { expression: "x² + (b/a)x + (b/2a)² = −c/a + (b/2a)²", note: "左辺を平方にするため同じ数を両辺へ加えます。" },
      { expression: "(x + b/2a)² = (b² − 4ac)/(4a²)", note: "左辺を平方完成し、右辺を通分します。" },
      { expression: "x + b/2a = ±√(b²−4ac)/(2a)", note: "平方根を取り、±の2通りを残します。" },
      { expression: "x = (−b ± √(b²−4ac))/(2a)", note: "b/2a を右辺へ移してまとめます。" },
    ],
  },
  discriminant: {
    title: "判別式が実数解の個数を決める理由",
    introduction: "解の公式で実数として平方根を取れるかどうかは、根号の中 b²−4ac の符号だけで決まります。",
    steps: [
      { expression: "x = (−b ± √D)/(2a), D=b²−4ac", note: "解の公式の根号部分を D と置きます。" },
      { expression: "D>0 → √D>0", note: "+√D と −√D が異なるので、異なる2実数解があります。" },
      { expression: "D=0 → √D=0", note: "±0 は同じ値なので、実数解は重なって1つです。" },
      { expression: "D<0 → 実数の範囲で √D を作れない", note: "したがって実数解はありません。" },
    ],
  },
  deviations: {
    title: "偏差の和が0になる理由",
    introduction: "偏差の定義 xᵢ−x̄ を全部足し、平均値 x̄ の定義を使って整理します。",
    steps: [
      { expression: "偏差の和 = Σ(xᵢ−x̄)", note: "各データから平均値を引いたものを合計します。" },
      { expression: "= Σxᵢ − n x̄", note: "平均値 x̄ は n 回引かれます。" },
      { expression: "x̄ = (Σxᵢ)/n → n x̄ = Σxᵢ", note: "平均値の定義を使います。" },
      { expression: "Σxᵢ − n x̄ = 0", note: "2つが等しいので偏差の和は必ず0です。" },
    ],
  },
  "correlation-coefficient": {
    title: "相関係数の位置付け",
    introduction: "相関係数は、共分散を2つの標準偏差で割って尺度の影響を除くように定義します。値が −1 以上1以下になる完全な証明には、この段階では扱わない不等式を使うため、ここでは性質として利用します。",
    steps: [
      { expression: "r = 共分散/(xの標準偏差 × yの標準偏差)", note: "共分散をそれぞれの散らばりの大きさで標準化する定義です。" },
      { expression: "単位を変えても r は変わらない", note: "分子の尺度変化と分母の標準偏差の尺度変化が相殺されます。" },
      { expression: "−1 ≤ r ≤ 1", note: "この値域は相関係数の基本性質として使います。証明は数学Ⅰの学習目標を越えるためここでは扱いません。" },
    ],
  },
};

export const getAdditionalFormulaDerivation = (lessonKey: string) =>
  additionalFormulaDerivations[lessonKey];
