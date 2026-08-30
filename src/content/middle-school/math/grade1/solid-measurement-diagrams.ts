import type { DiagramElement, DiagramPoint, DiagramScene } from "../../../../lib/diagram";
import type { MathLessonDiagrams } from "../../../math1/diagrams";

const BASE = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#047857";
const PURPLE = "#7c3aed";

const point = (x: number, y: number): DiagramPoint => ({ x, y });
const label = (
  at: DiagramPoint,
  text: string,
  color = BASE,
  align: "start" | "middle" | "end" = "middle",
): DiagramElement => ({ kind: "label", at, text, color, align });

function sectorScene(): DiagramScene {
  const center = point(155, 235);
  const radius = 135;
  return {
    width: 500,
    height: 330,
    ariaLabel: "半径r、中心角θの扇形を示し、弧が円周のθ/360、面積が円の面積のθ/360になることを示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: center, to: point(290, 235), color: BLUE },
      { kind: "segment", from: center, to: point(250, 140), color: BLUE },
      { kind: "arc", center, radius, startAngle: -45, endAngle: 0, color: ORANGE },
      { kind: "arc", center, radius: 48, startAngle: -45, endAngle: 0, color: PURPLE },
      { kind: "point", x: center.x, y: center.y, radius: 5, color: GREEN },
      label(point(218, 245), "r", BLUE),
      label(point(205, 207), "θ", PURPLE),
      label(point(330, 177), "円全体の θ / 360", ORANGE, "start"),
    ],
  };
}

function cylinderSurfaceScene(): DiagramScene {
  return {
    width: 500,
    height: 330,
    ariaLabel: "円柱の展開図として、二つの円と、横が2πr・縦がhの長方形を示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "circle", center: point(100, 165), radius: 50, color: BLUE },
      {
        kind: "polygon",
        points: [point(185, 95), point(405, 95), point(405, 235), point(185, 235)],
        color: ORANGE,
      },
      { kind: "circle", center: point(450, 165), radius: 38, color: BLUE },
      label(point(100, 165), "底面", BLUE),
      label(point(295, 78), "2πr", ORANGE),
      label(point(420, 165), "h", ORANGE, "start"),
      label(point(295, 260), "側面積 = 2πrh", PURPLE),
    ],
  };
}

function coneSurfaceScene(): DiagramScene {
  const center = point(205, 215);
  return {
    width: 500,
    height: 330,
    ariaLabel: "円錐の展開図として、底面の円と、半径が母線lの扇形からなる側面を示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "circle", center: point(80, 215), radius: 42, color: BLUE },
      { kind: "segment", from: center, to: point(205, 65), color: ORANGE },
      { kind: "segment", from: center, to: point(355, 215), color: ORANGE },
      { kind: "arc", center, radius: 150, startAngle: -90, endAngle: 0, color: ORANGE },
      label(point(80, 215), "底面", BLUE),
      label(point(222, 135), "l", ORANGE, "start"),
      label(point(286, 152), "側面の扇形", ORANGE),
      label(point(390, 260), "側面積 = πrl", PURPLE),
    ],
  };
}

function cylinderVolumeScene(): DiagramScene {
  return {
    width: 500,
    height: 330,
    ariaLabel: "円柱を底面積Sの同じ断面が高さhだけ積み重なった立体として示し、体積S×hを示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "ellipse", center: point(245, 80), radiusX: 105, radiusY: 30, color: BLUE },
      { kind: "ellipse", center: point(245, 250), radiusX: 105, radiusY: 30, color: BLUE },
      { kind: "segment", from: point(140, 80), to: point(140, 250), color: BLUE },
      { kind: "segment", from: point(350, 80), to: point(350, 250), color: BLUE },
      { kind: "arrow", from: point(385, 245), to: point(385, 90), color: ORANGE },
      label(point(245, 82), "底面積 S", GREEN),
      label(point(405, 166), "高さ h", ORANGE, "start"),
      label(point(245, 305), "V = Sh", PURPLE),
    ],
  };
}

function coneVolumeScene(): DiagramScene {
  return {
    width: 500,
    height: 330,
    ariaLabel: "同じ底面積Sと高さhをもつ円柱と円錐を並べ、円錐の体積が円柱の3分の1であることを示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "ellipse", center: point(125, 95), radiusX: 72, radiusY: 22, color: BLUE },
      { kind: "ellipse", center: point(125, 245), radiusX: 72, radiusY: 22, color: BLUE },
      { kind: "segment", from: point(53, 95), to: point(53, 245), color: BLUE },
      { kind: "segment", from: point(197, 95), to: point(197, 245), color: BLUE },
      { kind: "ellipse", center: point(365, 245), radiusX: 72, radiusY: 22, color: ORANGE },
      { kind: "segment", from: point(365, 75), to: point(293, 245), color: ORANGE },
      { kind: "segment", from: point(365, 75), to: point(437, 245), color: ORANGE },
      label(point(125, 292), "Sh", BLUE),
      label(point(365, 292), "Sh / 3", ORANGE),
      label(point(245, 165), "→ 1 / 3", PURPLE),
    ],
  };
}

function sphereScene(): DiagramScene {
  return {
    width: 500,
    height: 330,
    ariaLabel: "半径rの球を円と横向きの楕円で表し、表面積4πr²と体積4πr³/3を区別して示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "circle", center: point(195, 165), radius: 105, color: BLUE },
      { kind: "ellipse", center: point(195, 165), radiusX: 105, radiusY: 34, color: GREEN },
      { kind: "segment", from: point(195, 165), to: point(300, 165), color: ORANGE },
      { kind: "point", x: 195, y: 165, radius: 5, color: PURPLE },
      label(point(248, 151), "r", ORANGE),
      label(point(340, 128), "表面積 4πr²", BLUE, "start"),
      label(point(340, 198), "体積 4πr³ / 3", GREEN, "start"),
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "sector-arc-length": { rule: sectorScene(), example: sectorScene() },
  "sector-area": { rule: sectorScene(), example: sectorScene() },
  "prism-cylinder-surface-area": {
    rule: cylinderSurfaceScene(),
    example: cylinderSurfaceScene(),
  },
  "pyramid-cone-surface-area": { rule: coneSurfaceScene(), example: coneSurfaceScene() },
  "prism-cylinder-volume": { rule: cylinderVolumeScene(), example: cylinderVolumeScene() },
  "pyramid-cone-volume": { rule: coneVolumeScene(), example: coneVolumeScene() },
  "sphere-surface-area": { rule: sphereScene(), example: sphereScene() },
  "sphere-volume": { rule: sphereScene(), example: sphereScene() },
};

export const getMiddleMath1MeasurementLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
