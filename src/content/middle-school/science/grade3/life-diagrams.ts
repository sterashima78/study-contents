import type { DiagramElement, DiagramPoint, DiagramScene } from "../../../../lib/diagram";
import type { MathLessonDiagrams } from "../../../math1/diagrams";

const BASE = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#047857";
const PURPLE = "#7c3aed";
const point = (x: number, y: number): DiagramPoint => ({ x, y });
const label = (x: number, y: number, text: string, color = BASE): DiagramElement => ({
  kind: "label",
  at: point(x, y),
  text,
  color,
});
const arrow = (
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  color = BASE,
): DiagramElement => ({ kind: "arrow", from: point(fromX, fromY), to: point(toX, toY), color });
const box = (x1: number, y1: number, x2: number, y2: number, color = BASE): DiagramElement => ({
  kind: "polygon",
  points: [point(x1, y1), point(x2, y1), point(x2, y2), point(x1, y2)],
  color,
});

const cellDivisionScene = (): DiagramScene => ({
  width: 720,
  height: 340,
  ariaLabel:
    "体細胞分裂で染色体が複製され、中央に並び、二つの側へ分かれて二つの細胞になる順序を示す模式図。",
  responsive: { minWidth: 620, allowHorizontalScroll: true },
  elements: [
    box(35, 95, 165, 245, BLUE),
    box(205, 95, 335, 245, BLUE),
    box(375, 95, 505, 245, BLUE),
    box(545, 95, 685, 245, GREEN),
    label(100, 75, "複製", BLUE),
    label(270, 75, "中央に並ぶ", BLUE),
    label(440, 75, "二群へ分かれる", ORANGE),
    label(615, 75, "二つの細胞", GREEN),
    label(100, 165, "X  X", PURPLE),
    label(270, 155, "X", PURPLE),
    label(270, 185, "X", PURPLE),
    label(415, 165, "X", PURPLE),
    label(465, 165, "X", PURPLE),
    { kind: "segment", from: point(615, 105), to: point(615, 235), color: GREEN },
    label(585, 155, "X", PURPLE),
    label(645, 185, "X", PURPLE),
    arrow(165, 170, 205, 170, BASE),
    arrow(335, 170, 375, 170, BASE),
    arrow(505, 170, 545, 170, BASE),
    label(360, 300, "複製した染色体を等しく分配 → 染色体数を保つ", BASE),
  ],
});

const reproductionScene = (): DiagramScene => ({
  width: 720,
  height: 350,
  ariaLabel:
    "無性生殖では一個体から受精なしに殖え、有性生殖では二つの生殖細胞が受精して受精卵になる違いを比較する模式図。",
  responsive: { minWidth: 620, allowHorizontalScroll: true },
  elements: [
    label(180, 45, "無性生殖", BLUE),
    { kind: "circle", center: point(95, 150), radius: 38, color: BLUE },
    label(95, 155, "親", BLUE),
    arrow(140, 150, 250, 110, BLUE),
    arrow(140, 150, 250, 190, BLUE),
    { kind: "circle", center: point(290, 110), radius: 32, color: BLUE },
    { kind: "circle", center: point(290, 190), radius: 32, color: BLUE },
    label(290, 115, "子", BLUE),
    label(290, 195, "子", BLUE),
    label(185, 260, "受精なし・親と基本的に同じ遺伝情報", BASE),
    { kind: "segment", from: point(360, 40), to: point(360, 305), color: BASE },
    label(545, 45, "有性生殖", ORANGE),
    { kind: "circle", center: point(455, 125), radius: 34, color: ORANGE },
    { kind: "circle", center: point(455, 215), radius: 34, color: PURPLE },
    label(455, 130, "生殖細胞", ORANGE),
    label(455, 220, "生殖細胞", PURPLE),
    arrow(495, 125, 570, 165, ORANGE),
    arrow(495, 215, 570, 175, PURPLE),
    { kind: "circle", center: point(620, 170), radius: 45, color: GREEN },
    label(620, 175, "受精卵", GREEN),
    label(540, 270, "減数分裂 → 受精 → 体細胞分裂", BASE),
  ],
});

const meiosisScene = (): DiagramScene => ({
  width: 720,
  height: 330,
  ariaLabel:
    "体細胞の染色体数を2nとすると減数分裂で生殖細胞はnになり、受精でnとnが合わさって2nに戻ることを示す模式図。",
  responsive: { minWidth: 620, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(105, 155), radius: 58, color: BLUE },
    label(105, 145, "体細胞", BLUE),
    label(105, 180, "2n = 4", PURPLE),
    arrow(170, 155, 290, 105, ORANGE),
    arrow(170, 155, 290, 215, ORANGE),
    label(230, 60, "減数分裂", ORANGE),
    { kind: "circle", center: point(330, 105), radius: 45, color: ORANGE },
    { kind: "circle", center: point(330, 215), radius: 45, color: ORANGE },
    label(330, 110, "n = 2", ORANGE),
    label(330, 220, "n = 2", ORANGE),
    arrow(380, 105, 505, 155, GREEN),
    arrow(380, 215, 505, 165, GREEN),
    label(450, 80, "受精", GREEN),
    { kind: "circle", center: point(575, 160), radius: 62, color: GREEN },
    label(575, 150, "受精卵", GREEN),
    label(575, 185, "2n = 4", PURPLE),
    label(360, 295, "生殖細胞では半分 → 受精で組がそろう", BASE),
  ],
});

const mendelScene = (): DiagramScene => ({
  width: 760,
  height: 380,
  ariaLabel:
    "対になった遺伝子Aとaが減数分裂で分離し、Aaどうしの交配でAA、Aa、Aa、aaの組合せが生じることを示す模式図。",
  responsive: { minWidth: 660, allowHorizontalScroll: true },
  elements: [
    label(380, 40, "Aa × Aa", PURPLE),
    label(165, 95, "親1の生殖細胞", BLUE),
    label(595, 95, "親2の生殖細胞", ORANGE),
    { kind: "circle", center: point(145, 145), radius: 34, color: BLUE },
    { kind: "circle", center: point(215, 145), radius: 34, color: BLUE },
    label(145, 150, "A", BLUE),
    label(215, 150, "a", BLUE),
    { kind: "circle", center: point(555, 145), radius: 34, color: ORANGE },
    { kind: "circle", center: point(625, 145), radius: 34, color: ORANGE },
    label(555, 150, "A", ORANGE),
    label(625, 150, "a", ORANGE),
    box(270, 205, 370, 275, GREEN),
    box(390, 205, 490, 275, GREEN),
    box(270, 290, 370, 360, GREEN),
    box(390, 290, 490, 360, GREEN),
    label(320, 245, "AA", GREEN),
    label(440, 245, "Aa", GREEN),
    label(320, 330, "Aa", GREEN),
    label(440, 330, "aa", GREEN),
    arrow(215, 175, 300, 205, BLUE),
    arrow(215, 175, 420, 205, BLUE),
    arrow(555, 175, 340, 290, ORANGE),
    arrow(625, 175, 460, 290, ORANGE),
    label(620, 330, "形質は典型的に約3 : 1", BASE),
  ],
});

const dnaHierarchyScene = (): DiagramScene => ({
  width: 720,
  height: 330,
  ariaLabel:
    "細胞の中の核、核の中の染色体、染色体にある遺伝子、その本体がDNAであるという関係を示す模式図。",
  responsive: { minWidth: 620, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(120, 165), radius: 90, color: BLUE },
    { kind: "circle", center: point(120, 165), radius: 45, color: PURPLE },
    label(120, 65, "細胞", BLUE),
    label(120, 170, "核", PURPLE),
    arrow(215, 165, 315, 165, BASE),
    label(365, 165, "X", ORANGE),
    label(365, 105, "染色体", ORANGE),
    arrow(405, 165, 500, 165, BASE),
    box(520, 115, 680, 215, GREEN),
    label(600, 145, "遺伝子", GREEN),
    label(600, 185, "本体はDNA", GREEN),
    label(370, 275, "中学校では分子構造や遺伝子発現の詳細には踏み込まない", BASE),
  ],
});

const fossilHomologyScene = (): DiagramScene => ({
  width: 740,
  height: 360,
  ariaLabel:
    "古い地層から新しい地層へ化石の特徴を比較する時間軸と、脊椎動物の前肢に共通する基本骨格を進化の証拠として読む模式図。",
  responsive: { minWidth: 640, allowHorizontalScroll: true },
  elements: [
    label(165, 45, "化石の時間比較", BLUE),
    { kind: "segment", from: point(75, 90), to: point(75, 300), color: BASE },
    arrow(75, 300, 75, 85, BASE),
    label(45, 295, "古い", BASE),
    label(45, 105, "新しい", BASE),
    box(105, 240, 265, 290, BLUE),
    box(105, 175, 265, 225, BLUE),
    box(105, 110, 265, 160, BLUE),
    label(185, 265, "化石A", BLUE),
    label(185, 200, "化石B", BLUE),
    label(185, 135, "現存生物に近い特徴", BLUE),
    { kind: "segment", from: point(330, 55), to: point(330, 315), color: BASE },
    label(535, 45, "相同器官", ORANGE),
    { kind: "segment", from: point(415, 125), to: point(505, 160), color: ORANGE },
    { kind: "segment", from: point(505, 160), to: point(585, 125), color: ORANGE },
    { kind: "segment", from: point(415, 205), to: point(505, 240), color: GREEN },
    { kind: "segment", from: point(505, 240), to: point(600, 220), color: GREEN },
    label(620, 130, "翼", ORANGE),
    label(630, 225, "ひれ", GREEN),
    label(530, 285, "働きは違っても基本骨格が対応", BASE),
    label(370, 335, "複数の証拠を組み合わせて長期的な変化を考える", PURPLE),
  ],
});

const branchingScene = (): DiagramScene => ({
  width: 740,
  height: 360,
  ariaLabel:
    "共通の祖先から複数の系統が枝分かれし、それぞれ変化して現存する多様な脊椎動物につながることを示す分岐模式図。",
  responsive: { minWidth: 640, allowHorizontalScroll: true },
  elements: [
    { kind: "segment", from: point(90, 300), to: point(250, 250), color: BASE },
    { kind: "segment", from: point(250, 250), to: point(330, 190), color: BASE },
    { kind: "segment", from: point(250, 250), to: point(350, 285), color: BASE },
    { kind: "segment", from: point(330, 190), to: point(430, 125), color: BASE },
    { kind: "segment", from: point(330, 190), to: point(445, 210), color: BASE },
    { kind: "segment", from: point(430, 125), to: point(555, 75), color: BASE },
    { kind: "segment", from: point(430, 125), to: point(565, 150), color: BASE },
    { kind: "segment", from: point(445, 210), to: point(585, 235), color: BASE },
    { kind: "segment", from: point(350, 285), to: point(560, 300), color: BASE },
    label(95, 325, "共通の祖先", PURPLE),
    label(620, 80, "鳥類", ORANGE),
    label(625, 155, "爬虫類", GREEN),
    label(635, 235, "哺乳類", BLUE),
    label(620, 300, "魚類など", BASE),
    label(385, 45, "現存群を一直線の『進化の順番』にしない", PURPLE),
  ],
});

const diagrams: Record<string, MathLessonDiagrams> = {
  "cell-division-sequence": { rule: cellDivisionScene(), example: cellDivisionScene() },
  "chromosome-copy-distribution": { rule: cellDivisionScene(), example: cellDivisionScene() },
  "cell-division-growth": { rule: cellDivisionScene(), example: cellDivisionScene() },
  "asexual-reproduction": { rule: reproductionScene(), example: reproductionScene() },
  "sexual-reproduction-fertilization": { rule: reproductionScene(), example: reproductionScene() },
  "meiosis-gametes": { rule: meiosisScene(), example: meiosisScene() },
  "reproduction-inheritance": { rule: reproductionScene(), example: meiosisScene() },
  "traits-genes-chromosomes": { rule: dnaHierarchyScene() },
  "mendel-f1": { rule: mendelScene(), example: mendelScene() },
  "mendel-f2": { rule: mendelScene(), example: mendelScene() },
  "segregation-law": { rule: mendelScene(), example: mendelScene() },
  "genes-dna": { rule: dnaHierarchyScene(), example: dnaHierarchyScene() },
  "fossils-evolution": { rule: fossilHomologyScene(), example: fossilHomologyScene() },
  "homologous-organs": { rule: fossilHomologyScene(), example: fossilHomologyScene() },
  "vertebrate-evolution": { rule: branchingScene(), example: branchingScene() },
};

export const getMiddleScience3LifeLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
