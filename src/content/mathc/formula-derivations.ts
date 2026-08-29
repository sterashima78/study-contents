import type { FormulaDerivation } from "../math1/formula-derivations";

const mathCFormulaDerivations: Record<string, FormulaDerivation> = {
  "vector-components": {
    title: "公式の根拠: ベクトルの成分と大きさ",
    introduction: "始点から終点までの横・縦の変化量を成分とし、その2成分を直角三角形の辺として考えます。",
    steps: [
      { expression: "Δx=x₂−x₁, Δy=y₂−y₁", note: "終点までの水平方向・鉛直方向の変化量です。" },
      { expression: "AB⃗=(Δx,Δy)", note: "位置そのものではなく変化量なので、平行移動しても同じベクトルです。" },
      { expression: "|AB⃗|²=(Δx)²+(Δy)²", note: "成分を直角三角形の2辺とみて三平方の定理を使います。" },
    ],
  },
  "vector-operations": {
    title: "公式の根拠: ベクトルの成分演算",
    introduction: "ベクトルの連続する移動をx方向・y方向に分解すると、各成分を独立に足せることが分かります。",
    steps: [
      { expression: "a⃗=(a,b), b⃗=(c,d)", note: "2つの移動を成分で表します。" },
      { expression: "x方向の総変化=a+c, y方向の総変化=b+d", note: "それぞれの方向の変化量を合計します。" },
      { expression: "a⃗+b⃗=(a+c,b+d)", note: "2方向の総変化をまとめると和の成分表示になります。" },
    ],
  },
  "inner-product": {
    title: "公式の根拠: 成分による内積",
    introduction: "座標軸方向の単位ベクトルが互いに垂直であることを使って内積を展開します。",
    steps: [
      { expression: "a⃗=a i⃗+b j⃗, b⃗=c i⃗+d j⃗", note: "2次元ベクトルをx軸・y軸方向へ分解します。" },
      { expression: "i⃗·i⃗=1, j⃗·j⃗=1, i⃗·j⃗=0", note: "単位ベクトルの大きさは1で、2軸は垂直です。" },
      { expression: "a⃗·b⃗=ac+bd", note: "分配法則で展開すると交差項が0になり、同じ軸どうしの積だけが残ります。" },
    ],
  },
  "position-vectors": {
    title: "公式の根拠: 内分点の位置ベクトル",
    introduction: "内分点PがAからBへ一定割合だけ進んだ点であることを使います。",
    steps: [
      { expression: "AP⃗ = m/(m+n) AB⃗", note: "AP:PB=m:nなので、AB全体のうちAPはm/(m+n)です。" },
      { expression: "p⃗−a⃗ = m/(m+n)(b⃗−a⃗)", note: "AP⃗とAB⃗を位置ベクトルで書き換えます。" },
      { expression: "p⃗=(n a⃗+m b⃗)/(m+n)", note: "p⃗について整理すると内分点の公式になります。" },
    ],
  },
  "vector-equations": {
    title: "公式の根拠: 直線のベクトル方程式",
    introduction: "直線上では、基準点から任意の点への変位が一定の方向ベクトルと平行になります。",
    steps: [
      { expression: "AP⃗ ∥ d⃗", note: "Pが直線上にあるなら、AからPへのベクトルは方向ベクトルd⃗に平行です。" },
      { expression: "AP⃗=t d⃗", note: "平行なベクトルは実数倍の関係で表せます。" },
      { expression: "p⃗=a⃗+t d⃗", note: "AP⃗=p⃗−a⃗を代入して整理します。" },
    ],
  },
  "spatial-vectors": {
    title: "公式の根拠: 空間ベクトルの大きさ",
    introduction: "まずxy平面上の射影の長さを求め、それとz成分にもう一度三平方の定理を使います。",
    steps: [
      { expression: "xy平面上の長さ²=a²+b²", note: "x成分とy成分から平面上の長さを求めます。" },
      { expression: "|v⃗|²=(a²+b²)+c²", note: "その長さとz方向の長さcが直交します。" },
      { expression: "|v⃗|=√(a²+b²+c²)", note: "正の平方根を取ると大きさの公式になります。" },
    ],
  },
  "parabola-conics": {
    title: "公式の根拠: 放物線 y²=4px",
    introduction: "焦点F(p,0)と準線x=−pから等距離にある点P(x,y)を式で表します。",
    steps: [
      { expression: "PF²=(x−p)²+y²", note: "焦点までの距離の平方です。" },
      { expression: "準線までの距離²=(x+p)²", note: "点Pから直線x=−pまでの水平距離です。" },
      { expression: "(x−p)²+y²=(x+p)² ⇒ y²=4px", note: "等距離条件を置き、展開して整理します。" },
    ],
  },
  "ellipse-hyperbola": {
    title: "公式の根拠: 楕円の焦点距離 c²=a²−b²",
    introduction: "楕円の右端(a,0)で、2焦点までの距離の和が2aになることを使います。",
    steps: [
      { expression: "焦点を(±c,0)とする", note: "長軸がx軸上にある標準形を考えます。" },
      { expression: "点(0,b)から各焦点までの距離=√(b²+c²)", note: "対称なので2つの距離は等しいです。" },
      { expression: "2√(b²+c²)=2a ⇒ c²=a²−b²", note: "楕円の距離の和が2aである条件から整理します。" },
    ],
  },
  "parametric-polar": {
    title: "公式の根拠: 極座標と直交座標の変換",
    introduction: "原点O、点P、x軸への垂線でできる直角三角形に三角比を使います。",
    steps: [
      { expression: "cosθ=x/r", note: "斜辺OPがr、x方向の長さがxです。" },
      { expression: "sinθ=y/r", note: "y方向の長さがyです。" },
      { expression: "x=r cosθ, y=r sinθ", note: "それぞれ両辺にrを掛ければ変換式になります。" },
    ],
  },
  "complex-geometry": {
    title: "公式の根拠: 複素数の絶対値",
    introduction: "複素数z=a+biを点(a,b)に対応させ、原点からの距離として絶対値を定めます。",
    steps: [
      { expression: "z=a+bi ↔ P(a,b)", note: "実部を横軸、虚部を縦軸に対応させます。" },
      { expression: "OP²=a²+b²", note: "座標平面の距離公式、つまり三平方の定理を使います。" },
      { expression: "|z|=OP=√(a²+b²)", note: "距離は非負なので正の平方根を取ります。" },
    ],
  },
  "polar-demoivre": {
    title: "公式の根拠: ド・モアブルの定理",
    introduction: "極形式の複素数の積では、三角関数の加法定理により偏角が加わることを繰り返します。",
    steps: [
      { expression: "(cosα+i sinα)(cosβ+i sinβ)", note: "2つの単位複素数を掛けます。" },
      { expression: "=cos(α+β)+i sin(α+β)", note: "実部・虚部を整理すると三角関数の加法定理になります。" },
      { expression: "[r(cosθ+i sinθ)]ⁿ=rⁿ(cos nθ+i sin nθ)", note: "同じ積をn回繰り返すと絶対値はn乗、偏角はn倍になります。" },
    ],
  },
  "discrete-graphs": {
    title: "公式の根拠: 次数の総和は辺数の2倍",
    introduction: "無向グラフの1本の辺が、その両端の頂点の次数をそれぞれ1ずつ増やすことを数えます。",
    steps: [
      { expression: "1本の辺には端点が2つ", note: "自己ループを除く通常の無向グラフを考えます。" },
      { expression: "辺1本につき次数の総和へ2を加える", note: "両端の頂点で1回ずつ数えられます。" },
      { expression: "次数の総和=2E", note: "E本すべてについて合計すると握手補題が得られます。" },
    ],
  },
  matrices: {
    title: "公式の根拠: 行列の和と実数倍",
    introduction: "同じ意味を持つ位置の数量どうしを対応させて計算するため、成分ごとの演算になります。",
    steps: [
      { expression: "A=(aᵢⱼ), B=(bᵢⱼ)", note: "同じ型の行列では同じ行・列位置の成分が対応します。" },
      { expression: "A+B=(aᵢⱼ+bᵢⱼ)", note: "対応する数量どうしを足します。" },
      { expression: "kA=(kaᵢⱼ)", note: "全体をk倍する操作は各成分をk倍することに対応します。" },
    ],
  },
};

export const getMathCFormulaDerivation = (lessonKey: string) =>
  mathCFormulaDerivations[lessonKey];
