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
const line = (
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  color = BASE,
): DiagramElement => ({ kind: "segment", from: point(fromX, fromY), to: point(toX, toY), color });

const dailyMotionScene = (): DiagramScene => ({
  width: 760,
  height: 360,
  ariaLabel:
    "地球が西から東へ自転するため、地球上の観察者には太陽や星が東から西へ日周運動して見えることを示す模式図。",
  responsive: { minWidth: 660, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(205, 185), radius: 105, color: BLUE },
    label(205, 190, "地球", BLUE),
    arrow(160, 90, 245, 80, GREEN),
    label(205, 55, "自転: 西 → 東", GREEN),
    { kind: "circle", center: point(610, 120), radius: 22, color: ORANGE },
    label(610, 85, "遠い星", ORANGE),
    arrow(560, 255, 410, 255, ORANGE),
    label(485, 285, "見かけ: 東 → 西", ORANGE),
    label(205, 325, "観察者も地球と一緒に回転", BASE),
    label(545, 325, "日周運動 = 自転による相対運動", PURPLE),
  ],
});

const starDirectionsScene = (): DiagramScene => ({
  width: 760,
  height: 360,
  ariaLabel:
    "日本付近で北の空では北極星付近を中心に星が回り、東の空では昇り、西の空では沈むように見える模式図。",
  responsive: { minWidth: 660, allowHorizontalScroll: true },
  elements: [
    label(150, 45, "北の空", BLUE),
    { kind: "circle", center: point(150, 180), radius: 12, color: PURPLE },
    label(150, 215, "北極星付近", PURPLE),
    line(65, 180, 235, 180, BLUE),
    line(150, 95, 150, 265, BLUE),
    arrow(105, 115, 80, 160, BLUE),
    arrow(215, 160, 190, 115, BLUE),
    label(380, 45, "東の空", GREEN),
    arrow(345, 270, 420, 105, GREEN),
    label(380, 300, "昇る", GREEN),
    label(610, 45, "西の空", ORANGE),
    arrow(570, 105, 645, 270, ORANGE),
    label(610, 300, "沈む", ORANGE),
    label(380, 340, "見え方は違っても原因は同じ地球の自転", BASE),
  ],
});

const annualMotionScene = (): DiagramScene => ({
  width: 760,
  height: 390,
  ariaLabel:
    "太陽を中心に地球が公転し、地球の位置によって夜側から見える星座の方向が変わることで年周運動が生じる模式図。",
  responsive: { minWidth: 660, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(380, 195), radius: 48, color: ORANGE },
    label(380, 200, "太陽", ORANGE),
    { kind: "circle", center: point(170, 195), radius: 28, color: BLUE },
    { kind: "circle", center: point(590, 195), radius: 28, color: BLUE },
    label(170, 240, "地球A", BLUE),
    label(590, 240, "地球B", BLUE),
    line(210, 195, 330, 195, BASE),
    line(430, 195, 550, 195, BASE),
    arrow(170, 165, 135, 135, GREEN),
    arrow(590, 225, 625, 255, GREEN),
    label(105, 105, "夜側に見える星座A", PURPLE),
    label(645, 285, "夜側に見える星座B", PURPLE),
    arrow(275, 75, 485, 75, GREEN),
    label(380, 50, "地球の公転", GREEN),
    label(380, 345, "同じ時刻でも季節で見える星座が変わる → 年周運動", BASE),
  ],
});

const seasonsScene = (): DiagramScene => ({
  width: 760,
  height: 390,
  ariaLabel:
    "地軸が傾いたまま地球が公転することで、北半球では夏に太陽の南中高度が高く昼が長く、冬に低く短くなる模式図。",
  responsive: { minWidth: 660, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(380, 195), radius: 48, color: ORANGE },
    label(380, 200, "太陽", ORANGE),
    { kind: "circle", center: point(145, 195), radius: 50, color: BLUE },
    { kind: "circle", center: point(615, 195), radius: 50, color: BLUE },
    line(125, 245, 165, 145, PURPLE),
    line(595, 245, 635, 145, PURPLE),
    label(145, 275, "北半球の夏", GREEN),
    label(615, 275, "北半球の冬", BLUE),
    arrow(335, 195, 200, 195, ORANGE),
    arrow(425, 195, 560, 195, ORANGE),
    label(145, 320, "南中高度 高・昼 長", GREEN),
    label(615, 320, "南中高度 低・昼 短", BLUE),
    label(380, 365, "地軸の向きをほぼ保ったまま公転", BASE),
  ],
});

const sunScene = (): DiagramScene => ({
  width: 760,
  height: 350,
  ariaLabel:
    "安全に取得済みの太陽画像を想定し、太陽表面の黒点が日ごとに移動することから太陽の自転を読み取る模式図。",
  responsive: { minWidth: 660, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(250, 175), radius: 115, color: ORANGE },
    { kind: "circle", center: point(220, 145), radius: 14, color: PURPLE },
    { kind: "circle", center: point(270, 145), radius: 14, color: PURPLE },
    { kind: "circle", center: point(320, 145), radius: 14, color: PURPLE },
    arrow(205, 115, 330, 115, PURPLE),
    label(270, 85, "黒点の位置が日ごとに移動", PURPLE),
    label(250, 315, "太陽は球形・自ら発光・自転", ORANGE),
    arrow(390, 175, 600, 120, GREEN),
    arrow(390, 190, 600, 230, GREEN),
    label(620, 115, "光", GREEN),
    label(620, 235, "熱", GREEN),
    label(575, 315, "地球の大気・生命活動へ影響", BASE),
  ],
});

const solarSystemScene = (): DiagramScene => ({
  width: 820,
  height: 390,
  ariaLabel:
    "太陽を中心に内側の地球型惑星と外側の木星型惑星が並び、太陽系が銀河系の一部であることを示す模式図。距離と大きさは縮尺どおりではない。",
  responsive: { minWidth: 720, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(90, 195), radius: 42, color: ORANGE },
    label(90, 250, "太陽", ORANGE),
    { kind: "circle", center: point(180, 195), radius: 11, color: BASE },
    { kind: "circle", center: point(235, 195), radius: 14, color: ORANGE },
    { kind: "circle", center: point(295, 195), radius: 15, color: BLUE },
    { kind: "circle", center: point(355, 195), radius: 12, color: ORANGE },
    label(265, 155, "地球型", BLUE),
    { kind: "circle", center: point(470, 195), radius: 32, color: GREEN },
    { kind: "circle", center: point(550, 195), radius: 28, color: GREEN },
    { kind: "circle", center: point(625, 195), radius: 23, color: GREEN },
    { kind: "circle", center: point(695, 195), radius: 22, color: GREEN },
    label(585, 145, "木星型", GREEN),
    label(410, 310, "太陽系: 惑星・衛星・小惑星・彗星など", BASE),
    label(410, 350, "太陽系 ⊂ 銀河系（図は縮尺どおりではない）", PURPLE),
  ],
});

const moonScene = (): DiagramScene => ({
  width: 780,
  height: 400,
  ariaLabel:
    "太陽、地球、月の位置関係により月の公転・満ち欠けが生じ、一直線に近い配置で日食や月食が起こることを示す模式図。",
  responsive: { minWidth: 680, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(90, 200), radius: 42, color: ORANGE },
    label(90, 260, "太陽", ORANGE),
    { kind: "circle", center: point(390, 200), radius: 50, color: BLUE },
    label(390, 270, "地球", BLUE),
    { kind: "circle", center: point(390, 70), radius: 25, color: BASE },
    { kind: "circle", center: point(390, 330), radius: 25, color: BASE },
    { kind: "circle", center: point(245, 200), radius: 25, color: BASE },
    { kind: "circle", center: point(555, 200), radius: 25, color: BASE },
    label(390, 35, "月", BASE),
    arrow(310, 100, 270, 150, GREEN),
    arrow(510, 265, 550, 215, GREEN),
    label(650, 120, "約1か月で公転", GREEN),
    line(135, 200, 220, 200, ORANGE),
    line(270, 200, 335, 200, ORANGE),
    label(250, 165, "新月側", PURPLE),
    label(555, 165, "満月側", PURPLE),
    label(390, 380, "位置関係で満ち欠け・食を説明", BASE),
  ],
});

const venusScene = (): DiagramScene => ({
  width: 780,
  height: 390,
  ariaLabel:
    "地球より内側を公転する金星が、地球に近い位置では細く大きく、遠い位置では丸く小さく見える関係を示す模式図。",
  responsive: { minWidth: 680, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(360, 195), radius: 45, color: ORANGE },
    label(360, 200, "太陽", ORANGE),
    { kind: "circle", center: point(680, 195), radius: 35, color: BLUE },
    label(680, 250, "地球", BLUE),
    { kind: "circle", center: point(515, 195), radius: 24, color: GREEN },
    label(515, 155, "金星A", GREEN),
    { kind: "circle", center: point(225, 195), radius: 24, color: PURPLE },
    label(225, 155, "金星B", PURPLE),
    line(405, 195, 490, 195, BASE),
    line(250, 195, 315, 195, BASE),
    arrow(545, 215, 645, 215, GREEN),
    label(595, 250, "近い → 大きく見える", GREEN),
    label(225, 300, "遠い → 小さく見える", PURPLE),
    label(390, 355, "太陽に照らされた面と地球からの距離で形・大きさが変化", BASE),
  ],
});

const diagrams: Record<string, MathLessonDiagrams> = {
  "daily-motion-sun-stars": { rule: dailyMotionScene(), example: dailyMotionScene() },
  "earth-rotation-relative-motion": { rule: dailyMotionScene(), example: dailyMotionScene() },
  "star-trails-directions": { rule: starDirectionsScene(), example: starDirectionsScene() },
  "annual-motion-constellations": { rule: annualMotionScene(), example: annualMotionScene() },
  "solar-altitude-day-length": { rule: seasonsScene(), example: seasonsScene() },
  "axial-tilt-seasons": { rule: seasonsScene(), example: seasonsScene() },
  "sun-features-sunspots": { rule: sunScene(), example: sunScene() },
  "sun-energy-earth": { rule: sunScene(), example: sunScene() },
  "planets-stars-difference": { rule: solarSystemScene(), example: solarSystemScene() },
  "planet-groups-properties": { rule: solarSystemScene(), example: solarSystemScene() },
  "solar-system-milky-way": { rule: solarSystemScene(), example: solarSystemScene() },
  "moon-revolution-position": { rule: moonScene(), example: moonScene() },
  "moon-phases": { rule: moonScene(), example: moonScene() },
  "solar-lunar-eclipses": { rule: moonScene(), example: moonScene() },
  "venus-phases-size": { rule: venusScene(), example: venusScene() },
};

export const getMiddleScience3EarthLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
