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

const dot = (at: DiagramPoint, color = ORANGE): DiagramElement => ({
  kind: "point",
  x: at.x,
  y: at.y,
  radius: 4.5,
  color,
});

function constructionSymmetryScene(): DiagramScene {
  const a = point(140, 180);
  const b = point(380, 180);
  const p = point(260, 90);
  const q = point(260, 270);
  return {
    width: 520,
    height: 340,
    ariaLabel:
      "線分ABの両端を中心とする同じ半径の二つの円がPとQで交わり、直線PQがABの対称軸になる図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: a, to: b, color: BASE },
      { kind: "circle", center: a, radius: 150, color: BLUE },
      { kind: "circle", center: b, radius: 150, color: GREEN },
      { kind: "line", from: point(260, 55), to: point(260, 305), color: ORANGE },
      dot(a, BLUE),
      dot(b, GREEN),
      dot(p),
      dot(q),
      label(point(128, 200), "A", BLUE),
      label(point(392, 200), "B", GREEN),
      label(point(278, 82), "P", ORANGE, "start"),
      label(point(278, 286), "Q", ORANGE, "start"),
    ],
  };
}

function angleBisectorScene(): DiagramScene {
  const o = point(105, 275);
  const x = point(430, 275);
  const y = point(315, 70);
  const p = point(365, 167);
  return {
    width: 520,
    height: 340,
    ariaLabel:
      "角XOYの内部に半直線OPがあり、OPが角を二等分する作図の図。円弧の交点を使って対称軸を作る。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: o, to: x, color: BASE },
      { kind: "segment", from: o, to: y, color: BASE },
      { kind: "segment", from: o, to: p, color: ORANGE },
      { kind: "arc", center: o, radius: 95, startAngle: -45, endAngle: 0, color: BLUE },
      {
        kind: "arc",
        center: point(172, 208),
        radius: 130,
        startAngle: -35,
        endAngle: 15,
        color: GREEN,
      },
      {
        kind: "arc",
        center: point(200, 275),
        radius: 130,
        startAngle: -75,
        endAngle: -25,
        color: GREEN,
      },
      dot(o, BASE),
      dot(p),
      label(point(90, 296), "O"),
      label(point(446, 284), "X"),
      label(point(323, 57), "Y"),
      label(point(381, 158), "P", ORANGE, "start"),
    ],
  };
}

function perpendicularBisectorScene(): DiagramScene {
  const a = point(140, 180);
  const b = point(380, 180);
  const p = point(260, 90);
  const q = point(260, 270);
  return {
    width: 520,
    height: 340,
    ariaLabel:
      "線分ABの両端を中心とする同じ半径の円の交点P、Qを結び、ABの垂直二等分線を作図する図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: a, to: b, color: BASE },
      { kind: "circle", center: a, radius: 150, color: BLUE },
      { kind: "circle", center: b, radius: 150, color: GREEN },
      { kind: "line", from: point(260, 50), to: point(260, 310), color: ORANGE },
      dot(a, BLUE),
      dot(b, GREEN),
      dot(p),
      dot(q),
      label(point(128, 201), "A", BLUE),
      label(point(392, 201), "B", GREEN),
      label(point(279, 90), "P", ORANGE, "start"),
      label(point(279, 274), "Q", ORANGE, "start"),
      label(point(278, 165), "90°", PURPLE, "start"),
    ],
  };
}

function perpendicularScene(): DiagramScene {
  const a = point(140, 205);
  const b = point(380, 205);
  const p = point(260, 85);
  const q = point(260, 325);
  return {
    width: 520,
    height: 360,
    ariaLabel: "直線l上のA、Bから等距離の点P、Qを結び、直線lへの垂線を作図する図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "line", from: point(60, 205), to: point(460, 205), color: BASE },
      { kind: "circle", center: a, radius: 170, color: BLUE },
      { kind: "circle", center: b, radius: 170, color: GREEN },
      { kind: "line", from: point(260, 45), to: point(260, 335), color: ORANGE },
      dot(a, BLUE),
      dot(b, GREEN),
      dot(p),
      dot(q),
      label(point(475, 211), "l", BASE, "start"),
      label(point(276, 73), "P", ORANGE, "start"),
      label(point(276, 330), "Q", ORANGE, "start"),
      label(point(279, 190), "90°", PURPLE, "start"),
    ],
  };
}

function translationScene(): DiagramScene {
  const original = [point(95, 255), point(180, 255), point(135, 160)];
  const moved = [point(290, 175), point(375, 175), point(330, 80)];
  return {
    width: 520,
    height: 340,
    ariaLabel:
      "青い三角形ABCを右上へ平行移動し、橙色の三角形A'B'C'に重ねる図。対応点を結ぶ矢印は平行で同じ長さ。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "polygon", points: original, color: BLUE },
      { kind: "polygon", points: moved, color: ORANGE },
      ...original.map(
        (from, index): DiagramElement => ({ kind: "arrow", from, to: moved[index], color: GREEN }),
      ),
      label(point(83, 276), "A", BLUE),
      label(point(190, 276), "B", BLUE),
      label(point(135, 145), "C", BLUE),
      label(point(278, 196), "A'", ORANGE),
      label(point(386, 196), "B'", ORANGE),
      label(point(330, 65), "C'", ORANGE),
    ],
  };
}

function reflectionScene(): DiagramScene {
  const original = [point(115, 265), point(190, 245), point(165, 125)];
  const moved = [point(405, 265), point(330, 245), point(355, 125)];
  return {
    width: 520,
    height: 340,
    ariaLabel:
      "中央の直線lを対称軸として、左の三角形ABCを右の三角形A'B'C'へ対称移動する図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "line", from: point(260, 45), to: point(260, 310), color: PURPLE },
      { kind: "polygon", points: original, color: BLUE },
      { kind: "polygon", points: moved, color: ORANGE },
      ...original.map(
        (from, index): DiagramElement => ({
          kind: "segment",
          from,
          to: moved[index],
          color: GREEN,
        }),
      ),
      label(point(273, 57), "対称軸 l", PURPLE, "start"),
      label(point(100, 285), "A", BLUE),
      label(point(198, 267), "B", BLUE),
      label(point(150, 110), "C", BLUE),
      label(point(420, 285), "A'", ORANGE),
      label(point(322, 267), "B'", ORANGE),
      label(point(370, 110), "C'", ORANGE),
    ],
  };
}

function rotationScene(): DiagramScene {
  const o = point(260, 220);
  const original = [point(340, 220), point(340, 140), point(290, 170)];
  const moved = [point(260, 140), point(180, 140), point(210, 190)];
  return {
    width: 520,
    height: 340,
    ariaLabel:
      "点Oを中心に青い三角形ABCを反時計回りに90度回転し、橙色の三角形A'B'C'へ移す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "polygon", points: original, color: BLUE },
      { kind: "polygon", points: moved, color: ORANGE },
      { kind: "segment", from: o, to: original[0], color: GREEN },
      { kind: "segment", from: o, to: moved[0], color: GREEN },
      { kind: "arc", center: o, radius: 55, startAngle: -90, endAngle: 0, color: PURPLE },
      dot(o, PURPLE),
      label(point(247, 241), "O", PURPLE),
      label(point(302, 185), "90°", PURPLE),
      label(point(356, 226), "A", BLUE, "start"),
      label(point(356, 136), "B", BLUE, "start"),
      label(point(260, 125), "A'", ORANGE),
      label(point(164, 136), "B'", ORANGE, "end"),
    ],
  };
}

function tangentScene(): DiagramScene {
  const o = point(245, 180);
  const t = point(355, 180);
  return {
    width: 520,
    height: 340,
    ariaLabel:
      "中心O、接点Tの円に、Tを通る接線lが引かれている。半径OTと接線lは90度で交わる。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "circle", center: o, radius: 110, color: BLUE },
      { kind: "segment", from: o, to: t, color: GREEN },
      { kind: "line", from: point(355, 45), to: point(355, 315), color: ORANGE },
      dot(o, GREEN),
      dot(t, ORANGE),
      label(point(232, 201), "O", GREEN),
      label(point(374, 178), "T", ORANGE, "start"),
      label(point(372, 60), "接線 l", ORANGE, "start"),
      label(point(320, 165), "半径", GREEN),
      label(point(370, 201), "90°", PURPLE, "start"),
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "construction-symmetry": {
    rule: constructionSymmetryScene(),
    example: constructionSymmetryScene(),
  },
  "angle-bisector-construction": { rule: angleBisectorScene(), example: angleBisectorScene() },
  "perpendicular-bisector-construction": {
    rule: perpendicularBisectorScene(),
    example: perpendicularBisectorScene(),
  },
  "perpendicular-construction": { rule: perpendicularScene(), example: perpendicularScene() },
  translation: { rule: translationScene(), example: translationScene() },
  reflection: { rule: reflectionScene(), example: reflectionScene() },
  rotation: { rule: rotationScene(), example: rotationScene() },
  "tangent-construction-application": { rule: tangentScene(), example: tangentScene() },
};

export const getMiddleMath1GeometryLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
