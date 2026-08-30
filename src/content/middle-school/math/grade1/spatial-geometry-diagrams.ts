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

const cuboidElements = (): DiagramElement[] => {
  const a = point(110, 105);
  const b = point(300, 105);
  const c = point(300, 245);
  const d = point(110, 245);
  const e = point(185, 55);
  const f = point(375, 55);
  const g = point(375, 195);
  const h = point(185, 195);
  return [
    { kind: "segment", from: a, to: b, color: BASE },
    { kind: "segment", from: b, to: c, color: BASE },
    { kind: "segment", from: c, to: d, color: BASE },
    { kind: "segment", from: d, to: a, color: BASE },
    { kind: "segment", from: e, to: f, color: BASE },
    { kind: "segment", from: f, to: g, color: BASE },
    { kind: "segment", from: g, to: h, color: BASE },
    { kind: "segment", from: h, to: e, color: BASE },
    { kind: "segment", from: a, to: e, color: BASE },
    { kind: "segment", from: b, to: f, color: BASE },
    { kind: "segment", from: c, to: g, color: BASE },
    { kind: "segment", from: d, to: h, color: BASE },
    label(point(96, 102), "A"),
    label(point(310, 102), "B"),
    label(point(310, 260), "C"),
    label(point(96, 260), "D"),
    label(point(176, 43), "E"),
    label(point(386, 43), "F"),
    label(point(388, 198), "G"),
    label(point(175, 211), "H"),
  ];
};

function lineRelationsScene(): DiagramScene {
  return {
    width: 500,
    height: 320,
    ariaLabel:
      "直方体の見取図で辺ABと辺CGが強調され、二つの辺が交わらず平行でもないねじれの位置にある図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      ...cuboidElements(),
      { kind: "segment", from: point(110, 105), to: point(300, 105), color: BLUE },
      { kind: "segment", from: point(300, 245), to: point(375, 195), color: ORANGE },
      label(point(205, 88), "AB", BLUE),
      label(point(352, 234), "CG", ORANGE),
      label(point(250, 292), "交わらず、平行でもない → ねじれの位置", PURPLE),
    ],
  };
}

function linePlaneScene(): DiagramScene {
  return {
    width: 500,
    height: 330,
    ariaLabel: "平面Pを表す平行四辺形と、点Oで平面に垂直に交わる直線lの図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(105, 215), point(350, 215), point(410, 145), point(165, 145)],
        color: BLUE,
      },
      { kind: "line", from: point(260, 55), to: point(260, 285), color: ORANGE },
      { kind: "point", x: 260, y: 180, radius: 5, color: GREEN },
      label(point(421, 151), "平面P", BLUE, "start"),
      label(point(276, 64), "l", ORANGE, "start"),
      label(point(278, 181), "O", GREEN, "start"),
      label(point(292, 201), "90°", PURPLE, "start"),
    ],
  };
}

function planePlaneScene(): DiagramScene {
  return {
    width: 500,
    height: 330,
    ariaLabel: "交わらない二つの平行な平面PとQを、上下の平行四辺形として表した図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(90, 135), point(340, 135), point(405, 80), point(155, 80)],
        color: BLUE,
      },
      {
        kind: "polygon",
        points: [point(90, 270), point(340, 270), point(405, 215), point(155, 215)],
        color: GREEN,
      },
      label(point(420, 91), "平面P", BLUE, "start"),
      label(point(420, 226), "平面Q", GREEN, "start"),
      label(point(250, 177), "P ∥ Q", PURPLE),
    ],
  };
}

function perspectiveScene(): DiagramScene {
  return {
    width: 500,
    height: 320,
    ariaLabel:
      "立方体の見取図。奥行き方向の辺は斜めに描かれているが、実際の各面は正方形であることを示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      ...cuboidElements(),
      label(point(250, 292), "見た目の角度や長さ ≠ 実際の角度や長さ", PURPLE),
    ],
  };
}

function netScene(): DiagramScene {
  const size = 58;
  const squares = [
    [1, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1],
    [1, 2],
  ];
  const elements: DiagramElement[] = squares.map(([column, row]) => ({
    kind: "polygon",
    points: [
      point(110 + column * size, 65 + row * size),
      point(110 + (column + 1) * size, 65 + row * size),
      point(110 + (column + 1) * size, 65 + (row + 1) * size),
      point(110 + column * size, 65 + (row + 1) * size),
    ],
    color: BLUE,
  }));
  return {
    width: 500,
    height: 320,
    ariaLabel: "正方形6枚からなる立方体の展開図。中央の列と横一列に正方形がつながっている。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [...elements, label(point(250, 275), "正方形6枚 → 立方体", PURPLE)],
  };
}

function projectionScene(): DiagramScene {
  return {
    width: 500,
    height: 330,
    ariaLabel: "直方体を正面から見た立面図と、上から見た平面図を二つの長方形として並べた図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(70, 90), point(225, 90), point(225, 205), point(70, 205)],
        color: BLUE,
      },
      {
        kind: "polygon",
        points: [point(285, 110), point(440, 110), point(440, 185), point(285, 185)],
        color: ORANGE,
      },
      label(point(148, 72), "立面図（正面）", BLUE),
      label(point(363, 92), "平面図（上）", ORANGE),
      label(point(148, 229), "幅 × 高さ", BLUE),
      label(point(363, 209), "幅 × 奥行き", ORANGE),
    ],
  };
}

function translatedSolidScene(): DiagramScene {
  const left = [point(100, 95), point(205, 95), point(205, 215), point(100, 215)];
  const right = [point(290, 65), point(395, 65), point(395, 185), point(290, 185)];
  return {
    width: 500,
    height: 320,
    ariaLabel:
      "長方形を右上へ平行移動し、対応する頂点の軌跡を結ぶことで直方体が構成される様子を示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "polygon", points: left, color: BLUE },
      { kind: "polygon", points: right, color: ORANGE },
      ...left.map(
        (from, index): DiagramElement => ({
          kind: "segment",
          from,
          to: right[index],
          color: GREEN,
        }),
      ),
      { kind: "arrow", from: point(205, 260), to: point(325, 230), color: PURPLE },
      label(point(255, 278), "平行移動", PURPLE),
    ],
  };
}

function revolutionScene(): DiagramScene {
  return {
    width: 500,
    height: 330,
    ariaLabel:
      "長方形を縦の辺を軸として回転すると円柱になることを、長方形と円柱の模式図で示した図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "line", from: point(115, 55), to: point(115, 265), color: PURPLE },
      {
        kind: "polygon",
        points: [point(115, 85), point(220, 85), point(220, 235), point(115, 235)],
        color: BLUE,
      },
      { kind: "arrow", from: point(242, 160), to: point(305, 160), color: GREEN },
      { kind: "ellipse", center: point(380, 95), radiusX: 70, radiusY: 24, color: ORANGE },
      { kind: "ellipse", center: point(380, 230), radiusX: 70, radiusY: 24, color: ORANGE },
      { kind: "segment", from: point(310, 95), to: point(310, 230), color: ORANGE },
      { kind: "segment", from: point(450, 95), to: point(450, 230), color: ORANGE },
      label(point(96, 66), "回転の軸", PURPLE, "end"),
      label(point(380, 282), "円柱", ORANGE),
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "spatial-line-relations": { rule: lineRelationsScene(), example: lineRelationsScene() },
  "line-plane-relations": { rule: linePlaneScene(), example: linePlaneScene() },
  "plane-plane-relations": { rule: planePlaneScene(), example: planePlaneScene() },
  "perspective-drawing": { rule: perspectiveScene(), example: perspectiveScene() },
  nets: { rule: netScene(), example: netScene() },
  projections: { rule: projectionScene(), example: projectionScene() },
  "solid-by-translation": { rule: translatedSolidScene(), example: translatedSolidScene() },
  "solids-of-revolution": { rule: revolutionScene(), example: revolutionScene() },
};

export const getMiddleMath1SpatialLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
