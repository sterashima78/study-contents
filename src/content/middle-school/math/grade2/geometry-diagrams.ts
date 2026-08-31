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

function parallelAnglesScene(): DiagramScene {
  return {
    width: 520,
    height: 340,
    ariaLabel:
      "平行な2直線lとmを斜めの直線tが横切り、同位角と錯角の位置を色分けして示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "line", from: point(70, 110), to: point(450, 110), color: BLUE },
      { kind: "line", from: point(70, 245), to: point(450, 245), color: BLUE },
      { kind: "line", from: point(185, 35), to: point(335, 315), color: BASE },
      { kind: "arc", center: point(225, 110), radius: 36, startAngle: 0, endAngle: 61, color: ORANGE },
      { kind: "arc", center: point(297, 245), radius: 36, startAngle: 180, endAngle: 241, color: ORANGE },
      { kind: "arc", center: point(225, 110), radius: 52, startAngle: 119, endAngle: 180, color: GREEN },
      { kind: "arc", center: point(297, 245), radius: 52, startAngle: 119, endAngle: 180, color: GREEN },
      label(point(465, 115), "l", BLUE, "start"),
      label(point(465, 250), "m", BLUE, "start"),
      label(point(350, 305), "t", BASE, "start"),
      label(point(272, 83), "同位角", ORANGE),
      label(point(205, 205), "錯角", GREEN),
    ],
  };
}

function triangleAnglesScene(): DiagramScene {
  const a = point(260, 60);
  const b = point(100, 275);
  const c = point(420, 275);
  return {
    width: 520,
    height: 340,
    ariaLabel:
      "三角形ABCの頂点Aを通り辺BCに平行な直線を引き、錯角と同位角によって3つの内角を一直線上に集める図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "polygon", points: [a, b, c], color: BASE },
      { kind: "line", from: point(60, 60), to: point(460, 60), color: BLUE },
      { kind: "arc", center: a, radius: 45, startAngle: 0, endAngle: 53, color: ORANGE },
      { kind: "arc", center: a, radius: 58, startAngle: 127, endAngle: 180, color: GREEN },
      { kind: "arc", center: a, radius: 34, startAngle: 53, endAngle: 127, color: PURPLE },
      label(point(260, 42), "A", PURPLE),
      label(point(84, 295), "B"),
      label(point(436, 295), "C"),
      label(point(260, 104), "3つで180°", BASE),
    ],
  };
}

function polygonScene(): DiagramScene {
  const vertices = [
    point(260, 45),
    point(425, 145),
    point(365, 300),
    point(155, 300),
    point(95, 145),
  ];
  return {
    width: 520,
    height: 350,
    ariaLabel:
      "五角形の一つの頂点から対角線を2本引き、3つの三角形に分割して内角の和を考える図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "polygon", points: vertices, color: BLUE },
      { kind: "segment", from: vertices[0], to: vertices[2], color: ORANGE },
      { kind: "segment", from: vertices[0], to: vertices[3], color: ORANGE },
      label(point(260, 25), "5角形 → 3個の三角形", BASE),
      label(point(260, 190), "3×180°", PURPLE),
    ],
  };
}

function congruenceScene(): DiagramScene {
  const left = [point(80, 265), point(205, 265), point(145, 100)];
  const right = [point(315, 265), point(440, 265), point(380, 100)];
  return {
    width: 520,
    height: 340,
    ariaLabel:
      "同じ形と大きさの三角形ABCとDEFを並べ、対応する頂点と辺を同じ色で示す合同の図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "polygon", points: left, color: BLUE },
      { kind: "polygon", points: right, color: ORANGE },
      label(point(68, 285), "A", BLUE),
      label(point(217, 285), "B", BLUE),
      label(point(145, 82), "C", BLUE),
      label(point(303, 285), "D", ORANGE),
      label(point(452, 285), "E", ORANGE),
      label(point(380, 82), "F", ORANGE),
      label(point(260, 185), "≡", PURPLE),
    ],
  };
}

function proofTriangleScene(): DiagramScene {
  const a = point(260, 55);
  const b = point(100, 285);
  const c = point(420, 285);
  const m = point(260, 285);
  return {
    width: 520,
    height: 350,
    ariaLabel:
      "ABイコールACの二等辺三角形ABCで、底辺BCの中点Mと頂点Aを結び、二つの合同な三角形ABMとACMに分ける図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "polygon", points: [a, b, c], color: BLUE },
      { kind: "segment", from: a, to: m, color: ORANGE },
      { kind: "point", x: m.x, y: m.y, radius: 4.5, color: ORANGE },
      label(point(260, 35), "A", BLUE),
      label(point(84, 305), "B", BLUE),
      label(point(436, 305), "C", BLUE),
      label(point(260, 310), "M", ORANGE),
      label(point(160, 160), "AB=AC", GREEN),
      label(point(360, 160), "合同", PURPLE),
    ],
  };
}

function parallelogramScene(): DiagramScene {
  const a = point(125, 265);
  const b = point(360, 265);
  const c = point(415, 85);
  const d = point(180, 85);
  return {
    width: 520,
    height: 350,
    ariaLabel:
      "平行四辺形ABCDに対角線ACを引き、三角形ABCとCDAの合同を平行線の錯角と共通な辺から確かめる図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "polygon", points: [a, b, c, d], color: BLUE },
      { kind: "segment", from: a, to: c, color: ORANGE },
      label(point(108, 286), "A"),
      label(point(370, 286), "B"),
      label(point(430, 77), "C"),
      label(point(165, 77), "D"),
      label(point(260, 165), "ACは共通", ORANGE),
      label(point(265, 325), "AB ∥ CD, BC ∥ AD", GREEN),
    ],
  };
}

function specialQuadrilateralsScene(): DiagramScene {
  return {
    width: 520,
    height: 330,
    ariaLabel:
      "平行四辺形を大きな集合として、その中に長方形とひし形があり、両方の性質を持つ正方形がある関係を示す模式図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "polygon", points: [point(55, 55), point(465, 55), point(465, 285), point(55, 285)], color: BLUE },
      { kind: "polygon", points: [point(90, 105), point(270, 105), point(270, 245), point(90, 245)], color: GREEN },
      { kind: "polygon", points: [point(250, 105), point(430, 105), point(430, 245), point(250, 245)], color: ORANGE },
      { kind: "polygon", points: [point(225, 145), point(300, 145), point(300, 220), point(225, 220)], color: PURPLE },
      label(point(260, 78), "平行四辺形", BLUE),
      label(point(150, 130), "長方形", GREEN),
      label(point(370, 130), "ひし形", ORANGE),
      label(point(262, 185), "正方形", PURPLE),
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "vertical-corresponding-alternate": { rule: parallelAnglesScene(), example: parallelAnglesScene() },
  "parallel-line-conditions": { rule: parallelAnglesScene(), example: parallelAnglesScene() },
  "triangle-angle-properties": { rule: triangleAnglesScene(), example: triangleAnglesScene() },
  "polygon-angle-properties": { rule: polygonScene(), example: polygonScene() },
  "congruence-meaning": { rule: congruenceScene(), example: congruenceScene() },
  "triangle-congruence-conditions": { rule: congruenceScene(), example: congruenceScene() },
  "proof-structure": { rule: proofTriangleScene(), example: proofTriangleScene() },
  "isosceles-triangle-proof": { rule: proofTriangleScene(), example: proofTriangleScene() },
  "parallelogram-properties-proof": { rule: parallelogramScene(), example: parallelogramScene() },
  "parallelogram-conditions-special": {
    rule: specialQuadrilateralsScene(),
    example: parallelogramScene(),
  },
  "converse-counterexample": { rule: specialQuadrilateralsScene() },
  "geometry-proof-application": { rule: parallelogramScene(), example: parallelogramScene() },
};

export const getMiddleMath2GeometryLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
