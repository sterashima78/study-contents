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

const electrolyteScene = (): DiagramScene => ({
  width: 640,
  height: 330,
  ariaLabel:
    "電解質の水溶液には陽イオンと陰イオンがあり電流が流れる一方、非電解質の水溶液では移動できるイオンがほとんどないことを比較する模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    box(55, 85, 285, 270, BLUE),
    box(355, 85, 585, 270, BASE),
    label(170, 55, "電解質", BLUE),
    label(470, 55, "非電解質", BASE),
    { kind: "circle", center: point(110, 135), radius: 22, color: ORANGE },
    { kind: "circle", center: point(210, 155), radius: 22, color: GREEN },
    { kind: "circle", center: point(155, 215), radius: 22, color: ORANGE },
    { kind: "circle", center: point(235, 225), radius: 22, color: GREEN },
    label(110, 140, "+", ORANGE),
    label(210, 160, "−", GREEN),
    label(155, 220, "+", ORANGE),
    label(235, 230, "−", GREEN),
    arrow(85, 290, 255, 290, PURPLE),
    label(170, 315, "イオンが移動 → 電流", PURPLE),
    label(470, 170, "移動できるイオンが\nほとんどない", BASE),
  ],
});

const atomIonScene = (): DiagramScene => ({
  width: 640,
  height: 330,
  ariaLabel:
    "原子核の陽子と周囲の電子を示し、電子を失うと陽イオン、電子を受け取ると陰イオンになることを示す模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(195, 165), radius: 58, color: BLUE },
    { kind: "circle", center: point(195, 165), radius: 25, color: ORANGE },
    { kind: "circle", center: point(195, 95), radius: 10, color: GREEN },
    { kind: "circle", center: point(255, 195), radius: 10, color: GREEN },
    { kind: "circle", center: point(140, 205), radius: 10, color: GREEN },
    label(195, 170, "核", ORANGE),
    label(195, 60, "電子 e⁻", GREEN),
    arrow(280, 115, 390, 85, PURPLE),
    arrow(390, 245, 280, 215, PURPLE),
    { kind: "circle", center: point(475, 85), radius: 35, color: ORANGE },
    { kind: "circle", center: point(475, 245), radius: 35, color: GREEN },
    label(475, 90, "+", ORANGE),
    label(475, 250, "−", GREEN),
    label(500, 55, "電子を失う → 陽イオン", ORANGE),
    label(500, 300, "電子を受け取る → 陰イオン", GREEN),
  ],
});

const electrolysisScene = (): DiagramScene => ({
  width: 640,
  height: 330,
  ariaLabel:
    "電解質水溶液の陽イオンが負極側へ、陰イオンが正極側へ移動することを示す電気分解の粒子模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    box(110, 70, 530, 270, BLUE),
    { kind: "segment", from: point(175, 95), to: point(175, 245), color: BASE },
    { kind: "segment", from: point(465, 95), to: point(465, 245), color: BASE },
    label(175, 55, "負極 −", BASE),
    label(465, 55, "正極 +", BASE),
    { kind: "circle", center: point(320, 135), radius: 24, color: ORANGE },
    label(320, 140, "+", ORANGE),
    { kind: "circle", center: point(320, 210), radius: 24, color: GREEN },
    label(320, 215, "−", GREEN),
    arrow(290, 135, 205, 135, ORANGE),
    arrow(350, 210, 435, 210, GREEN),
    label(245, 110, "陽イオン", ORANGE),
    label(395, 185, "陰イオン", GREEN),
    label(320, 305, "電極付近の変化をイオン移動で説明", PURPLE),
  ],
});

const phScene = (): DiagramScene => ({
  width: 640,
  height: 300,
  ariaLabel:
    "pH0から14の尺度で、7より小さい側を酸性、7を中性、7より大きい側をアルカリ性として示す模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    { kind: "segment", from: point(75, 160), to: point(565, 160), color: BASE },
    { kind: "point", x: 75, y: 160, radius: 6, color: ORANGE },
    { kind: "point", x: 320, y: 160, radius: 8, color: GREEN },
    { kind: "point", x: 565, y: 160, radius: 6, color: BLUE },
    label(75, 190, "0", BASE),
    label(320, 190, "7", GREEN),
    label(565, 190, "14", BASE),
    arrow(290, 110, 100, 110, ORANGE),
    arrow(350, 110, 540, 110, BLUE),
    label(175, 80, "酸性 · H⁺", ORANGE),
    label(465, 80, "アルカリ性 · OH⁻", BLUE),
    label(320, 235, "中性", GREEN),
  ],
});

const neutralizationScene = (): DiagramScene => ({
  width: 640,
  height: 330,
  ariaLabel:
    "水素イオンHプラスと水酸化物イオンOHマイナスが一対一で反応して水になり、他のイオンが塩に対応することを示す中和の模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(120, 120), radius: 34, color: ORANGE },
    { kind: "circle", center: point(240, 120), radius: 34, color: BLUE },
    label(120, 125, "H⁺", ORANGE),
    label(240, 125, "OH⁻", BLUE),
    arrow(285, 120, 390, 120, PURPLE),
    { kind: "circle", center: point(465, 120), radius: 43, color: GREEN },
    label(465, 125, "H₂O", GREEN),
    label(190, 60, "1 : 1", BASE),
    { kind: "circle", center: point(220, 245), radius: 30, color: ORANGE },
    { kind: "circle", center: point(340, 245), radius: 30, color: BLUE },
    label(220, 250, "Na⁺", ORANGE),
    label(340, 250, "Cl⁻", BLUE),
    arrow(385, 245, 480, 245, PURPLE),
    label(525, 250, "塩", PURPLE),
    label(320, 305, "中和反応が起きても、必ずpH7とは限らない", BASE),
  ],
});

const metalIonScene = (): DiagramScene => ({
  width: 640,
  height: 320,
  ariaLabel:
    "マグネシウム、亜鉛、銅のイオンへのなりやすさを比較し、金属原子が電子を失って陽イオンになることを示す模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    label(125, 75, "Mg", ORANGE),
    label(320, 75, "Zn", PURPLE),
    label(515, 75, "Cu", BLUE),
    arrow(95, 120, 545, 120, BASE),
    label(320, 150, "イオンになりやすい → なりにくい", BASE),
    { kind: "circle", center: point(210, 235), radius: 34, color: PURPLE },
    label(210, 240, "Zn", PURPLE),
    arrow(255, 220, 365, 185, GREEN),
    label(330, 195, "2e⁻", GREEN),
    { kind: "circle", center: point(440, 235), radius: 34, color: ORANGE },
    label(440, 240, "Zn²⁺", ORANGE),
    label(320, 290, "金属 → 陽イオン + 電子", PURPLE),
  ],
});

const daniellScene = (): DiagramScene => ({
  width: 640,
  height: 350,
  ariaLabel:
    "ダニエル電池で亜鉛側が電子を放出して亜鉛イオンとなり、電子が導線を通って銅側へ移動し銅イオンが銅になることを示す模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    box(70, 120, 285, 300, BLUE),
    box(355, 120, 570, 300, BLUE),
    { kind: "segment", from: point(145, 105), to: point(145, 270), color: BASE },
    { kind: "segment", from: point(495, 105), to: point(495, 270), color: BASE },
    { kind: "segment", from: point(145, 105), to: point(495, 105), color: BASE },
    arrow(185, 85, 455, 85, GREEN),
    label(320, 60, "電子 e⁻: Zn側 → Cu側", GREEN),
    label(145, 330, "Zn側", ORANGE),
    label(495, 330, "Cu側", PURPLE),
    label(185, 190, "Zn → Zn²⁺ + 2e⁻", ORANGE),
    label(455, 190, "Cu²⁺ + 2e⁻ → Cu", PURPLE),
    { kind: "segment", from: point(285, 240), to: point(355, 240), color: BLUE },
    label(320, 265, "イオンの偏りを抑えるつながり", BLUE),
  ],
});

const batteryEnergyScene = (): DiagramScene => ({
  width: 640,
  height: 300,
  ariaLabel:
    "電池で化学エネルギーが電子移動を通して電気エネルギーへ変換され、乾電池、蓄電池、燃料電池などに共通することを示す模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    box(65, 90, 245, 210, ORANGE),
    label(155, 135, "化学変化", ORANGE),
    label(155, 175, "化学エネルギー", ORANGE),
    arrow(265, 150, 385, 150, GREEN),
    label(325, 120, "電子移動", GREEN),
    box(405, 90, 575, 210, BLUE),
    label(490, 135, "外部回路", BLUE),
    label(490, 175, "電気エネルギー", BLUE),
    label(150, 260, "乾電池", BASE),
    label(320, 260, "蓄電池", BASE),
    label(490, 260, "燃料電池", BASE),
  ],
});

const diagrams: Record<string, MathLessonDiagrams> = {
  "electrolyte-non-electrolyte": { rule: electrolyteScene(), example: electrolyteScene() },
  "atomic-structure": { rule: atomIonScene(), example: atomIonScene() },
  "ion-formation": { rule: atomIonScene(), example: atomIonScene() },
  "ion-formulas": { rule: atomIonScene() },
  "electrolysis-ion-model": { rule: electrolysisScene(), example: electrolysisScene() },
  "acids-alkalis-ions": { rule: phScene(), example: phScene() },
  "ph-scale": { rule: phScene(), example: phScene() },
  "neutralization-ion-model": { rule: neutralizationScene(), example: neutralizationScene() },
  "salts-after-neutralization": { rule: neutralizationScene(), example: neutralizationScene() },
  "metal-ionization-tendency": { rule: metalIonScene(), example: metalIonScene() },
  "metal-ion-electron-transfer": { rule: metalIonScene(), example: metalIonScene() },
  "daniell-cell-structure": { rule: daniellScene(), example: daniellScene() },
  "electrode-reactions-electron-flow": { rule: daniellScene(), example: daniellScene() },
  "chemical-electrical-energy": { rule: batteryEnergyScene(), example: batteryEnergyScene() },
  "batteries-in-society": { rule: batteryEnergyScene(), example: batteryEnergyScene() },
};

export const getMiddleScience3ParticleLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
