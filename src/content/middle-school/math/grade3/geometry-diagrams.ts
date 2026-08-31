import type { DiagramElement, DiagramPoint, DiagramScene } from "../../../../lib/diagram";
import type { MathLessonDiagrams } from "../../../math1/diagrams";

const BASE = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#047857";
const PURPLE = "#7c3aed";
const point = (x: number, y: number): DiagramPoint => ({ x, y });
const label = (at: DiagramPoint, text: string, color = BASE): DiagramElement => ({
  kind: "label",
  at,
  text,
  color,
  align: "middle",
});

function similarityScene(): DiagramScene {
  return {
    width: 540,
    height: 330,
    ariaLabel: "大きさの異なる相似な二つの三角形を並べ、対応する頂点と相似比を示す図。",
    responsive: { minWidth: 460, allowHorizontalScroll: true },
    elements: [
      { kind: "polygon", points: [point(70, 260), point(210, 260), point(130, 110)], color: BLUE },
      {
        kind: "polygon",
        points: [point(295, 270), point(500, 270), point(380, 50)],
        color: ORANGE,
      },
      label(point(140, 295), "相似比 2 : 3", PURPLE),
      label(point(130, 92), "A", BLUE),
      label(point(380, 32), "D", ORANGE),
    ],
  };
}

function parallelRatioScene(): DiagramScene {
  const a = point(270, 40);
  const b = point(80, 290);
  const c = point(460, 290);
  const p = point(175, 165);
  const q = point(365, 165);
  return {
    width: 540,
    height: 340,
    ariaLabel: "三角形ABCの辺AB、AC上の点P、Qを結ぶPQがBCに平行で、相似な三角形APQとABCを示す図。",
    responsive: { minWidth: 460, allowHorizontalScroll: true },
    elements: [
      { kind: "polygon", points: [a, b, c], color: BLUE },
      { kind: "segment", from: p, to: q, color: ORANGE },
      label(point(270, 20), "A"),
      label(point(65, 310), "B"),
      label(point(475, 310), "C"),
      label(point(160, 155), "P", ORANGE),
      label(point(380, 155), "Q", ORANGE),
      label(point(270, 145), "PQ ∥ BC", GREEN),
    ],
  };
}

function circleAngleScene(): DiagramScene {
  const o = point(270, 175);
  const a = point(150, 245);
  const b = point(390, 245);
  const p = point(270, 55);
  return {
    width: 540,
    height: 350,
    ariaLabel: "円の中心O、円周上のA、B、Pを結び、同じ弧ABに対する中心角AOBと円周角APBを示す図。",
    responsive: { minWidth: 460, allowHorizontalScroll: true },
    elements: [
      { kind: "circle", center: o, radius: 135, color: BLUE },
      { kind: "segment", from: o, to: a, color: ORANGE },
      { kind: "segment", from: o, to: b, color: ORANGE },
      { kind: "segment", from: p, to: a, color: GREEN },
      { kind: "segment", from: p, to: b, color: GREEN },
      label(point(270, 190), "O", ORANGE),
      label(point(270, 35), "P", GREEN),
      label(point(140, 265), "A"),
      label(point(400, 265), "B"),
      label(point(270, 305), "円周角 = 中心角 ÷ 2", PURPLE),
    ],
  };
}

function pythagoreanScene(): DiagramScene {
  const a = point(120, 270);
  const b = point(120, 90);
  const c = point(360, 270);
  return {
    width: 540,
    height: 350,
    ariaLabel:
      "直角三角形の直角をはさむ二辺a、bと斜辺cを示し、a二乗足すb二乗イコールc二乗を示す図。",
    responsive: { minWidth: 460, allowHorizontalScroll: true },
    elements: [
      { kind: "polygon", points: [a, b, c], color: BLUE },
      { kind: "segment", from: point(120, 250), to: point(140, 250), color: ORANGE },
      { kind: "segment", from: point(140, 250), to: point(140, 270), color: ORANGE },
      label(point(95, 180), "a", GREEN),
      label(point(240, 290), "b", GREEN),
      label(point(255, 165), "c", ORANGE),
      label(point(385, 150), "a²+b²=c²", PURPLE),
    ],
  };
}

function coordinateDistanceScene(): DiagramScene {
  return {
    width: 540,
    height: 330,
    ariaLabel:
      "座標平面上の二点AとBの横方向の差と縦方向の差で直角三角形を作り、二点間距離を斜辺として示す図。",
    responsive: { minWidth: 460, allowHorizontalScroll: true },
    elements: [
      {
        kind: "axes",
        origin: point(90, 270),
        xMin: -1,
        xMax: 8,
        yMin: -1,
        yMax: 7,
        grid: true,
        gridStep: 1,
        color: BASE,
      },
      { kind: "point", x: 150, y: 230, radius: 5, color: BLUE },
      { kind: "point", x: 390, y: 90, radius: 5, color: ORANGE },
      { kind: "segment", from: point(150, 230), to: point(390, 230), color: GREEN },
      { kind: "segment", from: point(390, 230), to: point(390, 90), color: GREEN },
      { kind: "segment", from: point(150, 230), to: point(390, 90), color: PURPLE },
      label(point(135, 250), "A", BLUE),
      label(point(405, 80), "B", ORANGE),
      label(point(275, 145), "距離", PURPLE),
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "similarity-meaning": { rule: similarityScene(), example: similarityScene() },
  "triangle-similarity-conditions": { rule: similarityScene(), example: similarityScene() },
  "similarity-proof": { rule: parallelRatioScene(), example: parallelRatioScene() },
  "parallel-lines-segment-ratio": { rule: parallelRatioScene(), example: parallelRatioScene() },
  "midpoint-theorem": { rule: parallelRatioScene(), example: parallelRatioScene() },
  "similarity-area-ratio": { rule: similarityScene() },
  "similarity-volume-ratio": { rule: similarityScene() },
  "similarity-application": { example: parallelRatioScene() },
  "inscribed-central-angle": { rule: circleAngleScene(), example: circleAngleScene() },
  "same-arc-inscribed-angles": { rule: circleAngleScene(), example: circleAngleScene() },
  "circle-angle-proof": { rule: circleAngleScene() },
  "inscribed-angle-converse": { rule: circleAngleScene() },
  "circle-angle-application": { example: circleAngleScene() },
  "pythagorean-meaning": { rule: pythagoreanScene(), example: pythagoreanScene() },
  "pythagorean-discovery": { rule: pythagoreanScene() },
  "pythagorean-hypotenuse": { example: pythagoreanScene() },
  "pythagorean-leg": { example: pythagoreanScene() },
  "pythagorean-converse": { rule: pythagoreanScene() },
  "pythagorean-coordinate-distance": { example: coordinateDistanceScene() },
  "pythagorean-space": { rule: pythagoreanScene() },
  "pythagorean-application": { example: pythagoreanScene() },
};

export const getMiddleMath3GeometryLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
