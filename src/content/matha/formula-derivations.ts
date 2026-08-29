import type { FormulaDerivation } from "../math1/formula-derivations";

const mathAFormulaDerivations: Record<string, FormulaDerivation> = {
  "set-cardinality": {
    title: "公式の根拠: 和集合の要素数",
    introduction: "AとBの要素数を足したとき、共通部分だけが2回数えられることに注目します。",
    steps: [
      {
        expression: "n(A) + n(B)",
        note: "Aだけ、Bだけの要素は1回ずつ数えられますが、A∩Bの要素は両方に含まれるため2回数えられます。",
      },
      {
        expression: "n(A) + n(B) − n(A ∩ B)",
        note: "二重に数えた共通部分を1回分だけ引くと、すべての要素がちょうど1回ずつ数えられます。",
      },
      {
        expression: "= n(A ∪ B)",
        note: "残った数が、AまたはBに属する要素の総数です。",
      },
    ],
  },
  "factorial-permutations": {
    title: "公式の根拠: 順列 ₙPᵣ",
    introduction: "1つ選ぶたびに候補が1つ減るため、積の法則で連続する整数の積になります。",
    steps: [
      {
        expression: "n(n−1)(n−2)…(n−r+1)",
        note: "1番目はn通り、2番目はn−1通りと、r番目まで候補が1つずつ減ります。",
      },
      {
        expression: "n! = n(n−1)…(n−r+1)(n−r)!",
        note: "n!を、順列で使う部分と残りの階乗に分けます。",
      },
      {
        expression: "ₙPᵣ = n!/(n−r)!",
        note: "両辺を(n−r)!で割ると、順列の積だけが残ります。",
      },
    ],
  },
  combinations: {
    title: "公式の根拠: 組合せ ₙCᵣ",
    introduction: "順列では同じr人の組を並べ替えたr!通りを別々に数えるため、その重複を除きます。",
    steps: [
      {
        expression: "ₙPᵣ",
        note: "n個からr個を選んで順番まで付けるとₙPᵣ通りです。",
      },
      {
        expression: "1組につき r! 通りの並べ方",
        note: "同じr個を選んだ組でも、順列ではr!通りの順序を別々に数えています。",
      },
      {
        expression: "ₙCᵣ = ₙPᵣ/r! = n!/{r!(n−r)!}",
        note: "順序による重複r!を割ると、順序を区別しない組合せの数になります。",
      },
    ],
  },
  "complement-addition": {
    title: "公式の根拠: 余事象と排反な事象",
    introduction: "全事象が重ならない部分に分かれることを、確率の合計として読み替えます。",
    steps: [
      {
        expression: "A と A̅ は排反、A ∪ A̅ = U",
        note: "Aが起こる場合と起こらない場合は同時に起こらず、合わせると全事象になります。",
      },
      {
        expression: "P(A) + P(A̅) = P(U) = 1",
        note: "排反な事象の確率は足せ、全事象の確率は1です。",
      },
      {
        expression: "P(A̅) = 1 − P(A)",
        note: "P(A)を移項すると余事象の公式が得られます。",
      },
    ],
  },
  "probability-multiplication": {
    title: "公式の根拠: 確率の乗法定理",
    introduction: "条件付き確率の定義を、共通部分の確率について解き直します。",
    steps: [
      {
        expression: "P(B|A) = P(A∩B)/P(A)",
        note: "Aが起きたという条件のもとでBが起きる確率の定義です。",
      },
      {
        expression: "P(A)P(B|A) = P(A∩B)",
        note: "両辺にP(A)を掛けます。",
      },
      {
        expression: "P(A∩B) = P(A)P(B|A)",
        note: "Aが起き、その後Aの条件下でBが起きるという2段階の積として読めます。",
      },
    ],
  },
  "angle-bisector": {
    title: "定理の根拠: 角の二等分線と辺の比",
    introduction: "二等分線でできる2つの三角形の面積を、共通する高さと三角比の両方から比べます。",
    steps: [
      {
        expression: "[ABD] : [ACD] = BD : DC",
        note: "2つの三角形はBCへの高さが同じなので、面積比は底辺BDとDCの比です。",
      },
      {
        expression: "[ABD] : [ACD] = AB·sin∠BAD : AC·sin∠CAD",
        note: "面積を2辺とその間の角で表します。ADは共通なので比では消えます。",
      },
      {
        expression: "∠BAD = ∠CAD より BD:DC = AB:AC",
        note: "二等分線なので2つの正弦が等しくなり、求める比の関係が残ります。",
      },
    ],
  },
  "inscribed-angle": {
    title: "定理の根拠: 円周角は中心角の半分",
    introduction: "中心と円周上の点を結び、半径が等しい二等辺三角形の角を使って説明できます。",
    steps: [
      {
        expression: "OA = OP = OB",
        note: "OA, OP, OBはいずれも同じ円の半径なので、OAPやOBPは二等辺三角形になります。",
      },
      {
        expression: "中心角は外角として底角の和になる",
        note: "二等辺三角形の底角の関係を使うと、弧ABに対する中心角は円周角の2倍になります。",
      },
      {
        expression: "∠APB = 1/2 ∠AOB",
        note: "したがって同じ弧に対する円周角は中心角の半分です。配置が異なる場合も同様に分けて考えられます。",
      },
    ],
  },
  "power-of-point": {
    title: "定理の根拠: 方べき",
    introduction: "交わる弦でできる2つの三角形が、円周角の性質によって相似になることを使います。",
    steps: [
      {
        expression: "∠PAC = ∠PDB, ∠PCA = ∠PBD",
        note: "それぞれ同じ弧に対する円周角なので等しくなります。",
      },
      {
        expression: "△PAC ∽ △PDB",
        note: "2組の角が等しいため、2つの三角形は相似です。",
      },
      {
        expression: "PA/PD = PC/PB ⇒ PA·PB = PC·PD",
        note: "相似比を交差に掛けると、方べきの積の関係が得られます。",
      },
    ],
  },
  "tangent-circle": {
    title: "定理の根拠: 同一点から引いた接線の長さ",
    introduction: "中心と接点を結ぶと2つの直角三角形ができ、合同から接線の長さが等しいと分かります。",
    steps: [
      {
        expression: "OA ⟂ PA, OB ⟂ PB",
        note: "半径は接点で接線に垂直です。",
      },
      {
        expression: "OPは共通、OA = OB",
        note: "斜辺OPは共通で、OAとOBは同じ円の半径です。",
      },
      {
        expression: "△OAP ≡ △OBP ⇒ PA = PB",
        note: "直角三角形の斜辺と他の1辺がそれぞれ等しいので合同となり、対応する接線の長さが等しくなります。",
      },
    ],
  },
  "euclidean-algorithm": {
    title: "互除法の根拠: 余りへ置き換えられる理由",
    introduction: "a=bq+rとしたとき、aとbの共通約数とbとrの共通約数が同じであることを確認します。",
    steps: [
      {
        expression: "a = bq + r",
        note: "aをbで割った商をq、余りをrとします。",
      },
      {
        expression: "r = a − bq",
        note: "aとbをともに割り切る数は、a−bqであるrも割り切ります。",
      },
      {
        expression: "gcd(a,b) = gcd(b,r)",
        note: "逆にbとrの共通約数はbq+r=aも割り切るので、共通約数の集合が一致します。",
      },
    ],
  },
  "base-representation": {
    title: "表記の根拠: n進法の位取り",
    introduction: "右端から各桁が1,n,n²,…個のまとまりを何個持つかとして数を表します。",
    steps: [
      {
        expression: "a₀ × 1",
        note: "右端の桁は1=n⁰のまとまりの個数です。",
      },
      {
        expression: "a₁ × n, a₂ × n², …",
        note: "左へ1桁進むごとに位の重みはn倍になります。",
      },
      {
        expression: "(aₖ…a₁a₀)ₙ = aₖnᵏ + … + a₁n + a₀",
        note: "各桁の『個数×位の重み』を足すと、通常の整数としての値になります。",
      },
    ],
  },
};

export const getMathAFormulaDerivation = (lessonKey: string) =>
  mathAFormulaDerivations[lessonKey];
