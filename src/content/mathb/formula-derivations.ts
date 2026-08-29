import type { FormulaDerivation } from "../math1/formula-derivations";

const mathBFormulaDerivations: Record<string, FormulaDerivation> = {
  "arithmetic-sequence": {
    title: "公式の根拠: 等差数列の一般項",
    introduction: "初項から第n項までに、公差を何回加えるかを数えます。",
    steps: [
      { expression: "a₂=a₁+d, a₃=a₁+2d", note: "1つ先へ進むごとに公差dを1回加えます。" },
      { expression: "第n項までの移動回数は n−1", note: "第1項から第n項へ進む区間はn−1個です。" },
      { expression: "aₙ=a₁+(n−1)d", note: "初項へ公差をn−1回加えた形が一般項です。" },
    ],
  },
  "arithmetic-sum": {
    title: "公式の根拠: 等差数列の和",
    introduction: "同じ和を順方向と逆方向に並べ、対応する項を足します。",
    steps: [
      { expression: "Sₙ=a₁+a₂+…+aₙ", note: "通常の順序で和を書きます。" },
      { expression: "Sₙ=aₙ+aₙ₋₁+…+a₁", note: "同じ和を逆順に書きます。" },
      { expression: "2Sₙ=(a₁+aₙ)+(a₂+aₙ₋₁)+…", note: "上下を足すと、等差数列なので各組はすべてa₁+aₙです。" },
      { expression: "2Sₙ=n(a₁+aₙ) ⇒ Sₙ=n(a₁+aₙ)/2", note: "同じ和がn組あるので、最後に2で割ります。" },
    ],
  },
  "geometric-sequence": {
    title: "公式の根拠: 等比数列の一般項",
    introduction: "初項から第n項までに、公比を何回掛けるかを数えます。",
    steps: [
      { expression: "a₂=a₁r, a₃=a₁r²", note: "1つ先へ進むごとに公比rを1回掛けます。" },
      { expression: "第n項までの倍率は r^(n−1)", note: "第1項から第n項までにrをn−1回掛けます。" },
      { expression: "aₙ=a₁r^(n−1)", note: "初項にその倍率を掛けたものが一般項です。" },
    ],
  },
  "geometric-sum": {
    title: "公式の根拠: 等比数列の和",
    introduction: "Sₙを公比r倍して1項ずらし、元の式との差を取ります。",
    steps: [
      { expression: "Sₙ=a₁+a₁r+…+a₁r^(n−1)", note: "n項の和を書きます。" },
      { expression: "rSₙ=a₁r+a₁r²+…+a₁r^n", note: "両辺をr倍すると中間項が1つずれます。" },
      { expression: "Sₙ−rSₙ=a₁−a₁r^n", note: "同じ中間項がすべて打ち消し合います。" },
      { expression: "Sₙ=a₁(1−r^n)/(1−r)", note: "r≠1として1−rで割ります。r=1はna₁として別に扱います。" },
    ],
  },
  "sums-of-powers": {
    title: "公式の根拠: ΣkとΣk²",
    introduction: "Σkは等差数列の和から、Σk²は立方差の恒等式を足し合わせて導けます。",
    steps: [
      { expression: "1+2+…+n = n(1+n)/2", note: "1からnは初項1、末項n、項数nの等差数列です。" },
      { expression: "(k+1)³−k³ = 3k²+3k+1", note: "平方和を含む恒等式を用意します。" },
      { expression: "Σ[(k+1)³−k³] = (n+1)³−1", note: "k=1からnまで足すと左辺の立方が途中で相殺されます。" },
      { expression: "(n+1)³−1 = 3Σk²+3·n(n+1)/2+n", note: "右辺に自然数の和の公式を代入します。" },
      { expression: "Σk²=n(n+1)(2n+1)/6", note: "Σk²について整理すると平方和の公式が得られます。" },
    ],
  },
  "difference-sequence": {
    title: "公式の根拠: 階差の和で元の数列を復元",
    introduction: "隣り合う項の差を足すと、中間の項が打ち消し合います。",
    steps: [
      { expression: "b₁=a₂−a₁, b₂=a₃−a₂, …", note: "階差を元の数列の差として書きます。" },
      { expression: "b₁+…+bₙ₋₁=(a₂−a₁)+…+(aₙ−aₙ₋₁)", note: "第n項まで必要な差を足します。" },
      { expression: "=aₙ−a₁", note: "+a₂と−a₂のような中間項がすべて消えます。" },
      { expression: "aₙ=a₁+Σ(k=1→n−1)bₖ", note: "a₁を移項すると復元公式になります。" },
    ],
  },
  "linear-recurrence": {
    title: "変形の根拠: 一次漸化式を等比型へ",
    introduction: "変化しない値αを基準に取ると、αからのずれが毎回p倍になります。",
    steps: [
      { expression: "aₙ₊₁=paₙ+q", note: "一次の漸化式を考えます。" },
      { expression: "α=pα+q", note: "同じ規則を適用しても変わらない値αを求めます。" },
      { expression: "aₙ₊₁−α=p(aₙ−α)", note: "2つの式を引くと定数項qが消えます。" },
      { expression: "bₙ=aₙ−α と置けば bₙ₊₁=pbₙ", note: "新しい数列は公比pの等比数列です。" },
    ],
  },
  "induction-principle": {
    title: "証明の根拠: 自然数の和を帰納法で確認",
    introduction: "公式を暗記するだけでなく、nからn+1へ必ずつながることを確認します。",
    steps: [
      { expression: "n=1: 1=1·2/2", note: "最初の自然数で成立します。" },
      { expression: "1+…+k=k(k+1)/2 と仮定", note: "n=kで成立すると仮定します。" },
      { expression: "1+…+k+(k+1)=k(k+1)/2+(k+1)", note: "k+1の場合に仮定を代入します。" },
      { expression: "=(k+1)(k+2)/2", note: "k+1に対する公式と一致し、連鎖が示されます。" },
    ],
  },
  "transformed-random-variable": {
    title: "公式の根拠: 確率変数をaX+bへ変換",
    introduction: "平均からのずれに注目すると、平行移動bが分散へ影響しない理由が分かります。",
    steps: [
      { expression: "E(aX+b)=Σ(ax+b)P(X=x)", note: "期待値の定義へ変換後の値を入れます。" },
      { expression: "=aΣxP(X=x)+bΣP(X=x)", note: "和を分け、定数を外へ出します。" },
      { expression: "=aE(X)+b", note: "確率の総和が1であることを使います。" },
      { expression: "aX+b−E(aX+b)=a(X−E(X))", note: "変換後の平均との差ではbが消えます。" },
      { expression: "V(aX+b)=a²V(X)", note: "ずれを二乗するため倍率aはa²になります。" },
    ],
  },
  "binomial-distribution": {
    title: "公式の根拠: 二項分布の確率",
    introduction: "成功する回の位置を選ぶ数と、1つの成功・失敗の並びの確率を掛けます。",
    steps: [
      { expression: "成功k回・失敗n−k回の1つの並び: p^k(1−p)^(n−k)", note: "独立試行なので各回の確率を掛けます。" },
      { expression: "成功するk回の位置: nCk 通り", note: "n回のうちどのk回を成功とするかを選びます。" },
      { expression: "P(X=k)=nCk p^k(1−p)^(n−k)", note: "同じ確率を持つnCk通りを足すので積の形になります。" },
      { expression: "E(X)=np, V(X)=np(1−p)", note: "成功なら1、失敗なら0の独立な指示変数n個の和として考えると、平均と分散を足して得られます。" },
    ],
  },
  "normal-standardization": {
    title: "変換の根拠: 正規分布の標準化",
    introduction: "平均との差を取り、標準偏差を単位にすることで平均0・分散1へそろえます。",
    steps: [
      { expression: "Y=X−μ", note: "μを引くと平均はE(Y)=0になります。" },
      { expression: "V(Y)=V(X)=σ²", note: "平行移動では分散は変わりません。" },
      { expression: "Z=Y/σ=(X−μ)/σ", note: "さらにσで割ります。" },
      { expression: "E(Z)=0, V(Z)=σ²/σ²=1", note: "平均0、標準偏差1の標準正規分布になります。" },
    ],
  },
  "binomial-normal-approximation": {
    title: "近似の根拠: 二項分布と対応する正規分布",
    introduction: "多数の独立試行の和は、平均と分散を保ちながら滑らかな釣鐘型へ近づきます。",
    steps: [
      { expression: "X~B(n,p)", note: "成功回数Xは0-1変数n個の和と考えられます。" },
      { expression: "E(X)=np", note: "各回の平均pをn個足します。" },
      { expression: "V(X)=np(1−p)", note: "独立なので各回の分散p(1−p)をn個足します。" },
      { expression: "X≈N(np, np(1−p))", note: "nが十分大きいとき、同じ平均・分散を持つ正規分布で近似します。" },
    ],
  },
  "sample-mean-distribution": {
    title: "公式の根拠: 標本平均の平均と標準偏差",
    introduction: "独立な標本X₁,…,Xₙの和の平均と分散を使います。",
    steps: [
      { expression: "X̄=(X₁+…+Xₙ)/n", note: "標本平均の定義です。" },
      { expression: "E(X̄)=(nμ)/n=μ", note: "各標本の平均がμなので、和の平均はnμです。" },
      { expression: "V(X̄)=(nσ²)/n²=σ²/n", note: "独立な標本の分散を足し、1/n倍の二乗を掛けます。" },
      { expression: "σ(X̄)=σ/√n", note: "分散の正の平方根を取ります。" },
    ],
  },
  "confidence-interval": {
    title: "公式の根拠: 95%信頼区間",
    introduction: "標本平均を標準化し、標準正規分布の中央約95%に入る範囲を母平均について解きます。",
    steps: [
      { expression: "Z=(X̄−μ)/(σ/√n)", note: "標本平均の平均μ、標準偏差σ/√nを使って標準化します。" },
      { expression: "約95%で −1.96≤Z≤1.96", note: "標準正規分布の中央約95%に対応する範囲です。" },
      { expression: "−1.96≤(X̄−μ)/(σ/√n)≤1.96", note: "Zの式を戻します。" },
      { expression: "X̄−1.96σ/√n ≤ μ ≤ X̄+1.96σ/√n", note: "μについて解くと95%信頼区間の形になります。" },
    ],
  },
};

export const getMathBFormulaDerivation = (lessonKey: string) => mathBFormulaDerivations[lessonKey];
