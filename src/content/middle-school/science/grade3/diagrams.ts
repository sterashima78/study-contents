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

const waterPressureScene = (): DiagramScene => ({
  width: 640,
  height: 330,
  ariaLabel:
    "水中では物体にあらゆる向きから水圧が働き、深い位置ほど水圧が大きく、上下の水圧差から上向きの浮力を捉える模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    {
      kind: "polygon",
      points: [point(70, 55), point(570, 55), point(570, 275), point(70, 275)],
      color: BLUE,
    },
    { kind: "segment", from: point(70, 105), to: point(570, 105), color: BLUE },
    label(115, 90, "水面", BLUE),
    {
      kind: "polygon",
      points: [point(275, 145), point(365, 145), point(365, 225), point(275, 225)],
      color: ORANGE,
    },
    arrow(320, 225, 320, 285, BLUE),
    arrow(320, 145, 320, 95, BLUE),
    arrow(275, 185, 225, 185, BLUE),
    arrow(365, 185, 415, 185, BLUE),
    arrow(320, 205, 320, 120, GREEN),
    label(470, 155, "深いほど水圧が大きい", BASE),
    label(455, 210, "上下の差 → 浮力", GREEN),
  ],
});

const compositionScene = (): DiagramScene => ({
  width: 640,
  height: 320,
  ariaLabel:
    "同じ作用点から働く二つの力を平行四辺形の隣り合う辺とし、対角線を合力として表す力の合成・分解の模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    { kind: "point", x: 175, y: 235, radius: 6, color: BASE },
    arrow(175, 235, 365, 235, BLUE),
    arrow(175, 235, 265, 95, ORANGE),
    { kind: "segment", from: point(365, 235), to: point(455, 95), color: BASE },
    { kind: "segment", from: point(265, 95), to: point(455, 95), color: BASE },
    arrow(175, 235, 455, 95, GREEN),
    label(315, 260, "力A", BLUE),
    label(205, 140, "力B", ORANGE),
    label(390, 135, "合力", GREEN),
    label(320, 45, "合成 ⇄ 分解", PURPLE),
  ],
});

const motionRecordScene = (): DiagramScene => ({
  width: 640,
  height: 320,
  ariaLabel:
    "同じ時間間隔で記録した物体の位置の点間隔が次第に広がり、速さが増していることを読み取る模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    { kind: "segment", from: point(55, 190), to: point(595, 190), color: BASE },
    { kind: "point", x: 90, y: 190, radius: 7, color: BLUE },
    { kind: "point", x: 145, y: 190, radius: 7, color: BLUE },
    { kind: "point", x: 225, y: 190, radius: 7, color: BLUE },
    { kind: "point", x: 335, y: 190, radius: 7, color: BLUE },
    { kind: "point", x: 480, y: 190, radius: 7, color: BLUE },
    arrow(90, 125, 480, 125, ORANGE),
    label(285, 95, "同じ時間間隔", BASE),
    label(300, 235, "点間隔が広がる → 速さが増す", ORANGE),
    label(300, 280, "個々のずれより全体の傾向を見る", PURPLE),
  ],
});

const forceMotionScene = (): DiagramScene => ({
  width: 640,
  height: 320,
  ariaLabel:
    "台車に進行方向の力が働く場合は速さが変化し、合力がゼロの場合は等速直線運動を続けることを比較する模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    { kind: "segment", from: point(45, 240), to: point(595, 240), color: BASE },
    {
      kind: "polygon",
      points: [point(115, 185), point(215, 185), point(225, 230), point(105, 230)],
      color: BLUE,
    },
    { kind: "circle", center: point(130, 242), radius: 12, color: BASE },
    { kind: "circle", center: point(200, 242), radius: 12, color: BASE },
    arrow(220, 205, 345, 205, ORANGE),
    arrow(355, 150, 535, 150, GREEN),
    label(280, 185, "合力あり", ORANGE),
    label(445, 125, "速さが変化", GREEN),
    label(315, 285, "合力0なら運動状態を保つ（慣性）", PURPLE),
  ],
});

const actionReactionScene = (): DiagramScene => ({
  width: 640,
  height: 300,
  ariaLabel:
    "二つの物体が互いに反対向きの力を及ぼし合い、作用と反作用は別々の物体に働くことを示す模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(220, 155), radius: 55, color: BLUE },
    { kind: "circle", center: point(420, 155), radius: 55, color: ORANGE },
    arrow(275, 135, 365, 135, BLUE),
    arrow(365, 180, 275, 180, ORANGE),
    label(220, 160, "A", BLUE),
    label(420, 160, "B", ORANGE),
    label(320, 105, "AがBを押す", BLUE),
    label(320, 215, "BがAを押し返す", ORANGE),
    label(320, 265, "2力は別々の物体に働く", BASE),
  ],
});

const fallingScene = (): DiagramScene => ({
  width: 640,
  height: 330,
  ariaLabel:
    "斜面が急になるほど速さの変化が大きくなり、斜面角を90度にした場合を自由落下としてつなげる模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    { kind: "segment", from: point(65, 255), to: point(300, 120), color: BASE },
    { kind: "circle", center: point(195, 175), radius: 18, color: BLUE },
    arrow(195, 175, 245, 225, ORANGE),
    { kind: "segment", from: point(430, 75), to: point(430, 270), color: BASE },
    { kind: "circle", center: point(430, 135), radius: 18, color: BLUE },
    arrow(430, 135, 430, 225, ORANGE),
    label(180, 285, "斜面運動", BASE),
    label(480, 285, "90° → 自由落下", BASE),
    label(320, 45, "重力によって速さが変化", PURPLE),
  ],
});

const workScene = (): DiagramScene => ({
  width: 640,
  height: 320,
  ariaLabel:
    "物体を力の向きに移動させたとき、仕事が力と移動距離の積で表され、仕事率は仕事を時間で割って表す模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    { kind: "segment", from: point(55, 235), to: point(585, 235), color: BASE },
    {
      kind: "polygon",
      points: [point(120, 165), point(220, 165), point(220, 225), point(120, 225)],
      color: BLUE,
    },
    arrow(220, 195, 365, 195, ORANGE),
    { kind: "segment", from: point(120, 265), to: point(460, 265), color: GREEN },
    label(295, 180, "力 F", ORANGE),
    label(290, 290, "移動距離 d", GREEN),
    label(460, 95, "仕事 = F × d", PURPLE),
    label(460, 130, "仕事率 = 仕事 ÷ 時間", BASE),
  ],
});

const energyScene = (): DiagramScene => ({
  width: 640,
  height: 340,
  ariaLabel:
    "高い位置では位置エネルギーが大きく、低い位置へ進むにつれて運動エネルギーへ移り変わり、摩擦を無視すると合計が保たれる模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    {
      kind: "arc",
      center: point(320, 285),
      radius: 205,
      startAngle: 200,
      endAngle: 340,
      color: BASE,
    },
    { kind: "circle", center: point(145, 180), radius: 18, color: BLUE },
    { kind: "circle", center: point(320, 285), radius: 18, color: ORANGE },
    { kind: "circle", center: point(495, 180), radius: 18, color: BLUE },
    arrow(180, 175, 275, 250, GREEN),
    arrow(365, 250, 460, 175, GREEN),
    label(145, 130, "位置E 大", BLUE),
    label(320, 245, "運動E 大", ORANGE),
    label(495, 130, "位置E 大", BLUE),
    label(320, 60, "摩擦を無視 → 力学的エネルギーの合計は一定", PURPLE),
  ],
});

const diagrams: Record<string, MathLessonDiagrams> = {
  "water-pressure-depth": { rule: waterPressureScene(), example: waterPressureScene() },
  buoyancy: { rule: waterPressureScene(), example: waterPressureScene() },
  "force-composition": { rule: compositionScene(), example: compositionScene() },
  "force-decomposition": { rule: compositionScene(), example: compositionScene() },
  "speed-direction": { rule: motionRecordScene() },
  "motion-recording-graphs": { rule: motionRecordScene(), example: motionRecordScene() },
  "force-speed-change": { rule: forceMotionScene(), example: forceMotionScene() },
  "uniform-motion-inertia": { rule: forceMotionScene(), example: forceMotionScene() },
  "action-reaction": { rule: actionReactionScene(), example: actionReactionScene() },
  "slope-free-fall": { rule: fallingScene(), example: fallingScene() },
  "mechanical-work": { rule: workScene(), example: workScene() },
  power: { rule: workScene(), example: workScene() },
  "work-principle": { rule: workScene(), example: workScene() },
  "potential-kinetic-energy": { rule: energyScene(), example: energyScene() },
  "mechanical-energy-conservation": { rule: energyScene(), example: energyScene() },
};

export const getMiddleScience3LessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
