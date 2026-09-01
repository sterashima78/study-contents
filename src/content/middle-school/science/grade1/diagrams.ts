import {
  createCartesianAxes,
  createCartesianTransform,
  type DiagramPoint,
  type DiagramScene,
} from "../../../../lib/diagram";
import type { MathLessonDiagrams } from "../../../math1/diagrams";

const BASE = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#047857";
const PURPLE = "#7c3aed";
const point = (x: number, y: number): DiagramPoint => ({ x, y });

function reflectionScene(): DiagramScene {
  return {
    width: 540,
    height: 320,
    ariaLabel:
      "水平な鏡に対して法線を基準に入射光と反射光が左右対称に進み、入射角と反射角が等しいことを示す図。",
    responsive: { minWidth: 460, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(50, 220), to: point(490, 220), color: BASE },
      { kind: "segment", from: point(270, 60), to: point(270, 270), color: GREEN },
      { kind: "arrow", from: point(100, 70), to: point(270, 220), color: BLUE },
      { kind: "arrow", from: point(270, 220), to: point(440, 70), color: ORANGE },
      { kind: "label", at: point(70, 245), text: "鏡", color: BASE },
      { kind: "label", at: point(286, 78), text: "法線", color: GREEN, align: "start" },
      { kind: "label", at: point(200, 150), text: "入射角", color: BLUE },
      { kind: "label", at: point(340, 150), text: "反射角", color: ORANGE },
      {
        kind: "label",
        at: point(270, 295),
        text: "入射角 = 反射角",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function refractionScene(): DiagramScene {
  return {
    width: 540,
    height: 330,
    ariaLabel:
      "空気からガラスへ進む光が境界面で法線に近づく向きへ屈折し、屈折角が入射角より小さくなることを示す図。",
    responsive: { minWidth: 460, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(45, 170), to: point(495, 170), color: BASE },
      { kind: "segment", from: point(270, 40), to: point(270, 300), color: GREEN },
      { kind: "arrow", from: point(85, 60), to: point(270, 170), color: BLUE },
      { kind: "arrow", from: point(270, 170), to: point(330, 290), color: ORANGE },
      { kind: "label", at: point(70, 145), text: "空気", color: BASE },
      { kind: "label", at: point(70, 205), text: "ガラス・水", color: BASE },
      { kind: "label", at: point(190, 120), text: "入射角", color: BLUE },
      { kind: "label", at: point(312, 225), text: "屈折角", color: ORANGE },
      { kind: "label", at: point(405, 305), text: "屈折角 < 入射角", color: PURPLE },
    ],
  };
}

function lensScene(): DiagramScene {
  return {
    width: 560,
    height: 330,
    ariaLabel: "凸レンズの光軸に平行な二本の光がレンズで屈折し、反対側の焦点に集まることを示す図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(35, 170), to: point(525, 170), color: BASE },
      { kind: "ellipse", center: point(280, 170), radiusX: 24, radiusY: 125, color: PURPLE },
      { kind: "arrow", from: point(60, 100), to: point(280, 100), color: BLUE },
      { kind: "arrow", from: point(280, 100), to: point(420, 170), color: ORANGE },
      { kind: "arrow", from: point(60, 240), to: point(280, 240), color: BLUE },
      { kind: "arrow", from: point(280, 240), to: point(420, 170), color: ORANGE },
      { kind: "point", x: 420, y: 170, radius: 5, color: GREEN },
      { kind: "label", at: point(420, 195), text: "焦点F", color: GREEN, align: "middle" },
      { kind: "label", at: point(280, 315), text: "凸レンズ", color: PURPLE, align: "middle" },
    ],
  };
}

function soundScene(): DiagramScene {
  const samples = Array.from({ length: 81 }, (_, index) => {
    const x = 50 + index * 5.5;
    const y = 165 - Math.sin((index / 10) * Math.PI) * 58;
    return point(x, y);
  });
  return {
    width: 540,
    height: 320,
    ariaLabel:
      "音の波形を示し、波形の縦方向の振れ幅が振幅、同じ時間内の繰り返し回数が振動数に対応することを示す図。",
    responsive: { minWidth: 460, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(40, 165), to: point(500, 165), color: BASE },
      { kind: "functionPlot", samples, expression: "音の波形", color: BLUE },
      { kind: "arrow", from: point(85, 165), to: point(85, 107), color: ORANGE },
      { kind: "label", at: point(105, 112), text: "振幅", color: ORANGE },
      {
        kind: "label",
        at: point(270, 290),
        text: "振幅→音の大きさ / 振動数→音の高さ",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function forceScene(): DiagramScene {
  return {
    width: 520,
    height: 300,
    ariaLabel:
      "物体を表す長方形に右向きの力の矢印を描き、矢印の向きが力の向き、長さが力の大きさを表すことを示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(110, 120), point(250, 120), point(250, 210), point(110, 210)],
        color: BASE,
      },
      { kind: "arrow", from: point(250, 165), to: point(440, 165), color: BLUE },
      { kind: "label", at: point(345, 145), text: "力", color: BLUE, align: "middle" },
      {
        kind: "label",
        at: point(330, 235),
        text: "向き: 矢印 / 大きさ: 長さ",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function springScene(): DiagramScene {
  const transform = createCartesianTransform({
    width: 540,
    height: 340,
    xMin: 0,
    xMax: 5,
    yMin: 0,
    yMax: 10,
    padding: 50,
  });
  const samples = [0, 1, 2, 3, 4].map((x) => transform.toDiagramPoint(point(x, x * 2)));
  return {
    width: 540,
    height: 340,
    ariaLabel:
      "横軸を力の大きさ、縦軸をばねの伸びとするグラフで、測定点がおよそ原点を通る直線上に並び比例関係を示す図。",
    responsive: { minWidth: 460, allowHorizontalScroll: true },
    elements: [
      createCartesianAxes(transform, { color: BASE, grid: true, gridStep: 1 }),
      { kind: "functionPlot", samples, expression: "ばねの伸び", color: BLUE },
      ...samples.map((sample) => ({
        kind: "point" as const,
        x: sample.x,
        y: sample.y,
        radius: 4,
        color: ORANGE,
      })),
      { kind: "label", at: point(470, 300), text: "力", color: BASE, align: "end" },
      { kind: "label", at: point(72, 42), text: "伸び", color: BASE },
      { kind: "label", at: point(345, 70), text: "力と伸びは比例", color: PURPLE },
    ],
  };
}

function equilibriumScene(): DiagramScene {
  return {
    width: 540,
    height: 300,
    ariaLabel:
      "一つの物体に同一直線上で同じ大きさの右向きと左向きの二つの力が働き、つり合っていることを示す図。",
    responsive: { minWidth: 460, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(210, 105), point(330, 105), point(330, 205), point(210, 205)],
        color: BASE,
      },
      { kind: "arrow", from: point(210, 155), to: point(70, 155), color: ORANGE },
      { kind: "arrow", from: point(330, 155), to: point(470, 155), color: BLUE },
      { kind: "label", at: point(120, 135), text: "5 N", color: ORANGE, align: "middle" },
      { kind: "label", at: point(420, 135), text: "5 N", color: BLUE, align: "middle" },
      {
        kind: "label",
        at: point(270, 255),
        text: "同じ大きさ・反対向き・同一直線上",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "light-reflection": { rule: reflectionScene(), example: reflectionScene() },
  "light-refraction": { rule: refractionScene(), example: refractionScene() },
  "convex-lens-focus": { rule: lensScene(), example: lensScene() },
  "convex-lens-images": { rule: lensScene(), example: lensScene() },
  "sound-generation-propagation": { rule: soundScene() },
  "sound-amplitude-frequency": { rule: soundScene(), example: soundScene() },
  "force-effects": { rule: forceScene() },
  "force-magnitude-direction": { rule: forceScene(), example: forceScene() },
  "spring-force-extension": { rule: springScene(), example: springScene() },
  "two-force-equilibrium": { rule: equilibriumScene(), example: equilibriumScene() },
};

export const getMiddleScience1LessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
