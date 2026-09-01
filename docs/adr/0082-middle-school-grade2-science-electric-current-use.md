# ADR 0082: 中学2年「電流とその利用」を17技能と中2理科基盤で実装する

- Status: Accepted
- Date: 2026-09-01
- Related: ADR 0034, ADR 0039, ADR 0075, ADR 0079

## Context

中学校学習指導要領（平成29年告示）解説 理科編の第2学年第1分野（3）「電流とその利用」は、回路の電流・電圧、電流と電圧の関係、電気とエネルギー、静電気と電流、電流と磁界を扱う。

学習では直列・並列回路の測定値を分析し、電流・電圧の規則、オームの法則、抵抗、電力・電力量を関係付ける必要がある。また、静電気と電子、磁界、電流が受ける力、電磁誘導、直流・交流までを現象と模式図から捉える必要がある。

一方、電気分野には家庭用電源、高電圧、真空放電、X線等が関連する。学習サイトが危険な実験手順を提供しない安全境界が必要である。

## Decision

1. コースキー `middle-science2`、ルート `middle-school/science/grade2` を追加する。
2. 最初の領域を `energy`、unitを `electric-current-use` とし、17教材で構成する。
3. 教材は、回路と計器 → 直列/並列の電流 → 直列/並列の電圧 → I–Vグラフ → オームの法則 → 合成抵抗 → 電力 → 電力量 → 静電気 → 電子/放電 → 磁界 → 電流がつくる磁界 → 磁界中の電流が受ける力 → 電磁誘導/直流・交流の順に配置する。
4. 二つの抵抗の接続を中心に、直列合成抵抗 `R=R₁+R₂` と並列関係 `1/R=1/R₁+1/R₂` を扱う。並列は簡単な値で関係性の理解を優先する。
5. 電力は `P=VI`、電力量は `E=Pt` とし、秒を用いたJの計算を基本にする。
6. 静電気と電流は電子の移動で関連付ける。真空放電・X線・放射線は発見や利用の概要に触れるだけとし、装置構成や再現手順を提供しない。
7. 回路は安全な低電圧の模式図・計算問題として扱い、家庭用コンセント、商用電源、高電圧電源への接続手順を提供しない。
8. Diagramは既存の型付き `DiagramScene` APIだけを使用し、新規描画ライブラリや任意SVG/HTMLを導入しない。
9. 演習は各教材3問、単元末8問とし、17技能を再生成時に巡回させる。
10. 教材・演習データは静的またはブラウザ内生成のみとし、外部API、位置情報、実在生徒データ、個人情報を利用しない。
11. `package.json`、lockfile、Study AI runtime/model設定は変更しない。

## Consequences

- 中学2年理科の公開を開始し、中学1年の4領域から継続して学べる。
- 回路計算から電磁誘導までを1ページ1技能で段階的に学べる。
- 高電圧や放射線に関連する危険な再現手順を教材から分離できる。
- 次の第2学年実装は「化学変化と原子・分子」「生物の体のつくりと働き」「気象とその変化」へ拡張できる。

## Validation

- Biome
- ADR numbering and consistency check
- curriculum reference verification
- formula/application verification
- diagram data verification
- component style boundary verification
- Study AI boundary verification
- Astro build
- generated HTML regression checks
