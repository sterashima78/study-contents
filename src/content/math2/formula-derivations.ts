import type { FormulaDerivation } from "../math1/formula-derivations";

const math2FormulaDerivations: Record<string, FormulaDerivation> = {
  "cubic-identities": {
    title: "公式の導出: 三次の展開",
    introduction: "二次の展開と分配法則を続けて使い、三次の公式を作ります。",
    steps: [
      { expression: "(a+b)³=(a+b)²(a+b)", note: "3乗を2乗と1乗の積に分けます。" },
      { expression: "=(a²+2ab+b²)(a+b)", note: "二次の乗法公式を使います。" },
      { expression: "=a³+a²b+2a²b+2ab²+ab²+b³", note: "分配法則ですべての積を書き出します。" },
      { expression: "=a³+3a²b+3ab²+b³", note: "同類項をまとめます。" },
    ],
  },
  "identity-inequality-proof": {
    title: "不等式の根拠: 平方の非負性",
    introduction: "2つの数の差の平方が0以上であることから基本不等式を得ます。",
    steps: [
      { expression: "(a−b)²≥0", note: "実数の平方は必ず0以上です。" },
      { expression: "a²−2ab+b²≥0", note: "左辺を展開します。" },
      { expression: "a²+b²≥2ab", note: "2abを右辺へ移項します。" },
    ],
  },
  "roots-coefficients-factor-theorem": {
    title: "公式の導出: 解と係数・因数定理",
    introduction: "方程式の解を因数の形へ戻し、係数比較と整式の除法から2つの性質を確認します。",
    steps: [
      { expression: "ax²+bx+c=a(x−α)(x−β)", note: "α,βが二次方程式の解なら右辺の形に因数分解できます。" },
      { expression: "=ax²−a(α+β)x+aαβ", note: "右辺を展開します。" },
      { expression: "α+β=−b/a, αβ=c/a", note: "xの係数と定数項を比較します。" },
      { expression: "P(x)=(x−a)Q(x)+r", note: "P(x)をx−aで割った商をQ(x)、余りをrとします。" },
      { expression: "P(a)=r", note: "x=aを代入すると(x−a)Q(x)が0になります。" },
      { expression: "P(a)=0 ⇔ r=0 ⇔ x−aが因数", note: "余りが0であることと因数であることは同じ条件です。" },
    ],
  },
  "section-formula": {
    title: "公式の導出: 内分点の座標",
    introduction: "AからBへ線分全体の m/(m+n) だけ進むと考えます。",
    steps: [
      { expression: "P=A+{m/(m+n)}(B−A)", note: "AP:PB=m:n なので、AからBへ全体のm/(m+n)だけ進みます。" },
      { expression: "x=x₁+{m/(m+n)}(x₂−x₁)", note: "x座標だけ取り出します。" },
      { expression: "=(nx₁+mx₂)/(m+n)", note: "分母をそろえて整理します。y座標も同様です。" },
    ],
  },
  "line-equations": {
    title: "公式の導出: 点と傾きから直線を表す",
    introduction: "傾きの定義を、直線上の任意の点について書き直します。",
    steps: [
      { expression: "m=(y−y₁)/(x−x₁)", note: "点(x₁,y₁)と任意の点(x,y)を結ぶ傾きはmです。" },
      { expression: "m(x−x₁)=y−y₁", note: "両辺にx−x₁を掛けます。" },
      { expression: "y−y₁=m(x−x₁)", note: "点傾きの形が得られます。" },
    ],
  },
  "circle-equations": {
    title: "公式の導出: 円の方程式",
    introduction: "円上の点は中心からの距離が常に半径rであるという定義を式にします。",
    steps: [
      { expression: "√{(x−a)²+(y−b)²}=r", note: "中心(a,b)と点(x,y)の距離を距離公式で表します。" },
      { expression: "(x−a)²+(y−b)²=r²", note: "両辺を2乗すると円の標準形になります。" },
    ],
  },
  "logarithm-laws": {
    title: "公式の導出: 対数の積の法則",
    introduction: "対数を指数へ戻し、指数法則を使って積の法則を得ます。商・累乗も同様です。",
    steps: [
      { expression: "p=logₐM, q=logₐN", note: "2つの対数をp,qと置きます。" },
      { expression: "M=aᵖ, N=aᑫ", note: "対数の定義から指数表示へ戻します。" },
      { expression: "MN=aᵖaᑫ=aᵖ⁺ᑫ", note: "指数法則を使います。" },
      { expression: "logₐ(MN)=p+q=logₐM+logₐN", note: "もう一度対数表示へ戻します。" },
    ],
  },
  "trig-functions-identities": {
    title: "公式の根拠: 三角関数の基本関係",
    introduction: "単位円上の点の座標を使うと、三平方の関係から基本式が得られます。",
    steps: [
      { expression: "P=(cosθ,sinθ)", note: "単位円上の角θに対応する点の座標です。" },
      { expression: "x²+y²=1", note: "半径1の円の方程式です。" },
      { expression: "cos²θ+sin²θ=1", note: "x=cosθ, y=sinθを代入します。" },
      { expression: "tanθ=sinθ/cosθ", note: "cosθ≠0のとき、傾きy/xとしてtanθを表せます。" },
    ],
  },
  "addition-theorem": {
    title: "公式の導出: cosの差から加法定理へ",
    introduction: "単位円上の2点の内積を、角度差と座標の2通りで表します。",
    steps: [
      { expression: "u=(cosα,sinα), v=(cosβ,sinβ)", note: "角α,βに対応する単位ベクトルを考えます。" },
      { expression: "u·v=cos(α−β)", note: "2つの単位ベクトルのなす角はα−βなので、内積はその余弦です。" },
      { expression: "u·v=cosαcosβ+sinαsinβ", note: "座標で内積を計算します。" },
      { expression: "cos(α−β)=cosαcosβ+sinαsinβ", note: "2つの表し方を等しくします。" },
      { expression: "β→−β などを代入", note: "sinの奇関数性、cosの偶関数性を使うと和の公式やsinの公式が得られます。" },
    ],
  },
  "double-angle-equations": {
    title: "公式の導出: 倍角公式",
    introduction: "加法定理で2つの角を同じθにします。",
    steps: [
      { expression: "sin(θ+θ)=sinθcosθ+cosθsinθ", note: "sinの加法定理にα=β=θを代入します。" },
      { expression: "sin2θ=2sinθcosθ", note: "同じ項をまとめます。" },
      { expression: "cos(θ+θ)=cos²θ−sin²θ", note: "cosの加法定理も同様に使います。" },
      { expression: "cos2θ=2cos²θ−1=1−2sin²θ", note: "sin²θ+cos²θ=1を使って片方だけの式へ変形できます。" },
    ],
  },
  "derivative-polynomial": {
    title: "公式の導出: xⁿの微分",
    introduction: "微分係数の定義と二項展開から、正の整数nに対する公式を得ます。",
    steps: [
      { expression: "{(x+h)ⁿ−xⁿ}/h", note: "xⁿの差商を書きます。" },
      { expression: "(x+h)ⁿ=xⁿ+nxⁿ⁻¹h+…+hⁿ", note: "二項展開します。" },
      { expression: "{nxⁿ⁻¹h+…+hⁿ}/h=nxⁿ⁻¹+…", note: "xⁿが消え、残った各項からhを1つ約分します。" },
      { expression: "h→0 で nxⁿ⁻¹", note: "hを含む残りの項は0へ近づきます。" },
    ],
  },
  "indefinite-definite-integral": {
    title: "公式の根拠: 多項式の積分",
    introduction: "積分結果を微分して元の関数へ戻ることを確かめます。",
    steps: [
      { expression: "F(x)=xⁿ⁺¹/(n+1)", note: "n≠−1として、この関数を候補にします。" },
      { expression: "F'(x)={(n+1)/(n+1)}xⁿ=xⁿ", note: "微分すると元のxⁿへ戻ります。" },
      { expression: "∫xⁿdx=xⁿ⁺¹/(n+1)+C", note: "定数を足しても微分すると0なので、積分定数Cを付けます。" },
      { expression: "∫ₐᵇf(x)dx=F(b)−F(a)", note: "定積分では原始関数の端点の差を取るため、積分定数は消えます。" },
    ],
  },
};

export const getMath2FormulaDerivation = (lessonKey: string) => math2FormulaDerivations[lessonKey];
