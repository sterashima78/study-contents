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

function densityScene(): DiagramScene {
  return {
    width: 560,
    height: 320,
    ariaLabel:
      "同じ20立方センチメートルの二つの物質について、質量が40グラムと80グラムで異なり、密度は質量を体積で割って比べることを示す図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(70, 90), point(210, 90), point(210, 210), point(70, 210)],
        color: BLUE,
      },
      {
        kind: "polygon",
        points: [point(350, 90), point(490, 90), point(490, 210), point(350, 210)],
        color: ORANGE,
      },
      { kind: "label", at: point(140, 135), text: "20 cm³", color: BLUE, align: "middle" },
      { kind: "label", at: point(140, 180), text: "40 g", color: BLUE, align: "middle" },
      { kind: "label", at: point(420, 135), text: "20 cm³", color: ORANGE, align: "middle" },
      { kind: "label", at: point(420, 180), text: "80 g", color: ORANGE, align: "middle" },
      { kind: "label", at: point(140, 245), text: "2 g/cm³", color: GREEN, align: "middle" },
      { kind: "label", at: point(420, 245), text: "4 g/cm³", color: GREEN, align: "middle" },
      {
        kind: "label",
        at: point(280, 292),
        text: "密度 = 質量 ÷ 体積",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function gasCollectionScene(): DiagramScene {
  return {
    width: 600,
    height: 330,
    ariaLabel:
      "気体の捕集法は、まず水に溶けにくいかを確認し、水に溶けにくければ水上置換法、水に溶けやすければ空気に対する密度を比べて上方置換法か下方置換法を選ぶという判断の流れを示す図。",
    responsive: { minWidth: 520, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(200, 35), point(400, 35), point(400, 100), point(200, 100)],
        color: BASE,
      },
      { kind: "label", at: point(300, 72), text: "水に溶けにくい？", color: BASE, align: "middle" },
      { kind: "arrow", from: point(250, 100), to: point(145, 175), color: BLUE },
      { kind: "arrow", from: point(350, 100), to: point(455, 175), color: ORANGE },
      { kind: "label", at: point(185, 135), text: "はい", color: BLUE },
      { kind: "label", at: point(395, 135), text: "いいえ", color: ORANGE },
      {
        kind: "polygon",
        points: [point(45, 175), point(245, 175), point(245, 245), point(45, 245)],
        color: BLUE,
      },
      { kind: "label", at: point(145, 215), text: "水上置換法", color: BLUE, align: "middle" },
      {
        kind: "polygon",
        points: [point(355, 175), point(555, 175), point(555, 245), point(355, 245)],
        color: ORANGE,
      },
      {
        kind: "label",
        at: point(455, 203),
        text: "空気との密度を比較",
        color: ORANGE,
        align: "middle",
      },
      {
        kind: "label",
        at: point(455, 228),
        text: "上方 / 下方置換法",
        color: ORANGE,
        align: "middle",
      },
      {
        kind: "label",
        at: point(300, 295),
        text: "捕集法は気体の性質から選ぶ",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function solutionParticlesScene(): DiagramScene {
  const solutePoints = [
    point(155, 105),
    point(245, 95),
    point(340, 115),
    point(425, 100),
    point(190, 165),
    point(290, 155),
    point(390, 170),
    point(145, 225),
    point(250, 235),
    point(345, 220),
    point(430, 235),
  ];
  return {
    width: 580,
    height: 340,
    ariaLabel:
      "水溶液を表す容器の中に溶質粒子が上部・中央・下部へ均一に分布し、溶質は見えなくなっても溶液全体に存在することを示す粒子モデル。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(100, 55), point(480, 55), point(480, 270), point(100, 270)],
        color: BLUE,
      },
      ...solutePoints.map((sample) => ({
        kind: "point" as const,
        x: sample.x,
        y: sample.y,
        radius: 6,
        color: ORANGE,
      })),
      { kind: "label", at: point(290, 300), text: "水溶液", color: BLUE, align: "middle" },
      { kind: "point", x: 80, y: 318, radius: 6, color: ORANGE },
      { kind: "label", at: point(98, 322), text: "溶質の粒子", color: ORANGE, align: "start" },
      {
        kind: "label",
        at: point(290, 30),
        text: "溶質の粒子は全体に均一に広がる",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function solubilityCurveScene(): DiagramScene {
  const transform = createCartesianTransform({
    width: 580,
    height: 360,
    xMin: 0,
    xMax: 80,
    yMin: 0,
    yMax: 80,
    padding: 55,
  });
  const samples = [point(0, 15), point(20, 22), point(40, 34), point(60, 52), point(80, 75)].map(
    (sample) => transform.toDiagramPoint(sample),
  );
  return {
    width: 580,
    height: 360,
    ariaLabel:
      "横軸を温度、縦軸を100グラムの水に溶ける質量とした溶解度曲線で、温度が高くなるほど溶解度が増える例を示す図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      createCartesianAxes(transform, { color: BASE, grid: true, gridStep: 20 }),
      { kind: "functionPlot", samples, expression: "溶解度", color: BLUE },
      ...samples.map((sample) => ({
        kind: "point" as const,
        x: sample.x,
        y: sample.y,
        radius: 4,
        color: ORANGE,
      })),
      { kind: "label", at: point(500, 315), text: "温度", color: BASE, align: "end" },
      { kind: "label", at: point(65, 45), text: "溶解度", color: BASE },
      { kind: "label", at: point(355, 75), text: "冷やすと析出", color: PURPLE },
    ],
  };
}

function statesScene(): DiagramScene {
  const solid = [
    point(75, 120),
    point(105, 120),
    point(135, 120),
    point(75, 150),
    point(105, 150),
    point(135, 150),
    point(75, 180),
    point(105, 180),
    point(135, 180),
  ];
  const liquid = [
    point(245, 130),
    point(282, 120),
    point(320, 136),
    point(260, 165),
    point(302, 170),
    point(235, 195),
    point(280, 205),
    point(325, 195),
  ];
  const gas = [point(410, 95), point(500, 125), point(440, 180), point(525, 215), point(390, 230)];
  return {
    width: 600,
    height: 330,
    ariaLabel:
      "固体では粒子が規則的に密集し、液体では粒子が近いまま配置を変え、気体では粒子の間隔が大きいことを示す三態の粒子モデル。",
    responsive: { minWidth: 520, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(45, 65), point(165, 65), point(165, 245), point(45, 245)],
        color: BLUE,
      },
      {
        kind: "polygon",
        points: [point(215, 65), point(335, 65), point(335, 245), point(215, 245)],
        color: GREEN,
      },
      {
        kind: "polygon",
        points: [point(385, 65), point(555, 65), point(555, 245), point(385, 245)],
        color: ORANGE,
      },
      ...solid.map((sample) => ({
        kind: "point" as const,
        x: sample.x,
        y: sample.y,
        radius: 6,
        color: BLUE,
      })),
      ...liquid.map((sample) => ({
        kind: "point" as const,
        x: sample.x,
        y: sample.y,
        radius: 6,
        color: GREEN,
      })),
      ...gas.map((sample) => ({
        kind: "point" as const,
        x: sample.x,
        y: sample.y,
        radius: 6,
        color: ORANGE,
      })),
      { kind: "label", at: point(105, 275), text: "固体", color: BLUE, align: "middle" },
      { kind: "label", at: point(275, 275), text: "液体", color: GREEN, align: "middle" },
      { kind: "label", at: point(470, 275), text: "気体", color: ORANGE, align: "middle" },
      {
        kind: "label",
        at: point(300, 315),
        text: "状態変化でも粒子そのものは同じ",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function heatingCurveScene(): DiagramScene {
  const transform = createCartesianTransform({
    width: 580,
    height: 360,
    xMin: 0,
    xMax: 10,
    yMin: 0,
    yMax: 100,
    padding: 55,
  });
  const samples = [
    point(0, 10),
    point(2, 35),
    point(4, 35),
    point(6, 75),
    point(8, 75),
    point(10, 95),
  ].map((sample) => transform.toDiagramPoint(sample));
  return {
    width: 580,
    height: 360,
    ariaLabel:
      "純粋な物質を加熱したときの温度変化を表し、融解中と沸騰中に温度が一定になる水平部分がある模式的な加熱曲線。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      createCartesianAxes(transform, { color: BASE, grid: true }),
      { kind: "functionPlot", samples, expression: "温度変化", color: BLUE },
      { kind: "label", at: point(210, 235), text: "融解中: 温度一定", color: GREEN },
      { kind: "label", at: point(345, 115), text: "沸騰中: 温度一定", color: ORANGE },
      { kind: "label", at: point(505, 315), text: "加熱時間", color: BASE, align: "end" },
      { kind: "label", at: point(65, 45), text: "温度", color: BASE },
    ],
  };
}

function distillationScene(): DiagramScene {
  return {
    width: 580,
    height: 320,
    ariaLabel:
      "沸点が低い成分と高い成分を含む混合物について、沸点が低い成分が先に気体になり、冷却して液体として回収することで分離する考え方を示す模式図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(45, 90), point(205, 90), point(205, 225), point(45, 225)],
        color: BASE,
      },
      { kind: "label", at: point(125, 135), text: "混合物", color: BASE, align: "middle" },
      {
        kind: "label",
        at: point(125, 175),
        text: "低沸点 + 高沸点",
        color: PURPLE,
        align: "middle",
      },
      { kind: "arrow", from: point(205, 145), to: point(360, 145), color: ORANGE },
      {
        kind: "label",
        at: point(280, 125),
        text: "低沸点成分が先に気体へ",
        color: ORANGE,
        align: "middle",
      },
      {
        kind: "polygon",
        points: [point(380, 90), point(535, 90), point(535, 225), point(380, 225)],
        color: BLUE,
      },
      { kind: "label", at: point(458, 135), text: "冷却", color: BLUE, align: "middle" },
      { kind: "label", at: point(458, 175), text: "液体として回収", color: GREEN, align: "middle" },
      {
        kind: "label",
        at: point(290, 280),
        text: "沸点の違いを利用 = 蒸留",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  density: { rule: densityScene(), example: densityScene() },
  "gas-properties-collection": { rule: gasCollectionScene(), example: gasCollectionScene() },
  "solution-particle-model": { rule: solutionParticlesScene(), example: solutionParticlesScene() },
  "mass-percent-concentration": { rule: solutionParticlesScene() },
  solubility: { rule: solubilityCurveScene(), example: solubilityCurveScene() },
  "solubility-curve-recrystallization": {
    rule: solubilityCurveScene(),
    example: solubilityCurveScene(),
  },
  "states-particle-model": { rule: statesScene(), example: statesScene() },
  "state-change-mass-volume": { rule: statesScene(), example: statesScene() },
  "melting-boiling-points": { rule: heatingCurveScene(), example: heatingCurveScene() },
  distillation: { rule: distillationScene(), example: distillationScene() },
};

export const getMiddleScience1MatterLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
