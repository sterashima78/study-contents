import {
  createCartesianAxes,
  createCartesianTransform,
  type DiagramElement,
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

const atom = (x: number, y: number, text: string, color: string): DiagramElement[] => [
  { kind: "circle", center: point(x, y), radius: 22, color },
  { kind: "label", at: point(x, y + 5), text, color, align: "middle" },
];

function decompositionScene(): DiagramScene {
  return {
    width: 600,
    height: 300,
    ariaLabel: "一種類の化合物ABが変化し、性質の異なる物質AとBに分かれる分解を粒子モデルで示す図。",
    responsive: { minWidth: 520, allowHorizontalScroll: true },
    elements: [
      ...atom(110, 120, "A", BLUE),
      ...atom(150, 120, "B", ORANGE),
      { kind: "label", at: point(130, 60), text: "分解前: AB", color: BASE, align: "middle" },
      { kind: "arrow", from: point(205, 120), to: point(345, 120), color: PURPLE },
      { kind: "label", at: point(275, 95), text: "分解", color: PURPLE, align: "middle" },
      ...atom(420, 90, "A", BLUE),
      ...atom(500, 150, "B", ORANGE),
      {
        kind: "label",
        at: point(460, 220),
        text: "元とは異なる性質の生成物",
        color: BASE,
        align: "middle",
      },
    ],
  };
}

function atomMoleculeScene(): DiagramScene {
  return {
    width: 620,
    height: 320,
    ariaLabel:
      "原子を一つの粒子、分子を複数の原子が結び付いたまとまりとして、水分子と二酸化炭素分子の例で示す図。",
    responsive: { minWidth: 540, allowHorizontalScroll: true },
    elements: [
      { kind: "label", at: point(100, 45), text: "原子", color: BASE, align: "middle" },
      ...atom(100, 120, "O", ORANGE),
      { kind: "label", at: point(100, 185), text: "1つの粒子", color: BASE, align: "middle" },
      { kind: "label", at: point(350, 45), text: "水分子 H₂O", color: BASE, align: "middle" },
      ...atom(300, 120, "H", BLUE),
      ...atom(350, 120, "O", ORANGE),
      ...atom(400, 120, "H", BLUE),
      { kind: "label", at: point(350, 185), text: "H 2個 + O 1個", color: PURPLE, align: "middle" },
      { kind: "label", at: point(520, 45), text: "CO₂", color: BASE, align: "middle" },
      ...atom(470, 240, "O", ORANGE),
      ...atom(520, 240, "C", GREEN),
      ...atom(570, 240, "O", ORANGE),
      {
        kind: "label",
        at: point(365, 285),
        text: "分子は原子が結び付いたまとまり",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function elementSymbolScene(): DiagramScene {
  const card = (x: number, symbol: string, name: string, color: string): DiagramElement[] => [
    {
      kind: "polygon",
      points: [point(x - 45, 80), point(x + 45, 80), point(x + 45, 190), point(x - 45, 190)],
      color,
    },
    { kind: "label", at: point(x, 125), text: symbol, color, align: "middle" },
    { kind: "label", at: point(x, 165), text: name, color, align: "middle" },
  ];
  return {
    width: 600,
    height: 300,
    ariaLabel: "元素記号O、Fe、Cuの例と、周期表で多くの元素を整理して確認することを示す図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      {
        kind: "label",
        at: point(300, 40),
        text: "元素は世界共通の記号で表す",
        color: BASE,
        align: "middle",
      },
      ...card(120, "O", "酸素", ORANGE),
      ...card(300, "Fe", "鉄", BLUE),
      ...card(480, "Cu", "銅", GREEN),
      {
        kind: "label",
        at: point(300, 245),
        text: "必要な元素は周期表で確認する",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function chemicalChangeScene(): DiagramScene {
  return {
    width: 660,
    height: 340,
    ariaLabel:
      "水素分子2個と酸素分子1個から水分子2個ができ、化学変化の前後でH原子4個とO原子2個が保存されることを示す粒子モデル。",
    responsive: { minWidth: 580, allowHorizontalScroll: true },
    elements: [
      { kind: "label", at: point(170, 45), text: "反応物", color: BASE, align: "middle" },
      ...atom(75, 110, "H", BLUE),
      ...atom(115, 110, "H", BLUE),
      ...atom(75, 200, "H", BLUE),
      ...atom(115, 200, "H", BLUE),
      ...atom(205, 155, "O", ORANGE),
      ...atom(245, 155, "O", ORANGE),
      { kind: "arrow", from: point(300, 155), to: point(390, 155), color: PURPLE },
      { kind: "label", at: point(345, 125), text: "組合せが変化", color: PURPLE, align: "middle" },
      { kind: "label", at: point(520, 45), text: "生成物", color: BASE, align: "middle" },
      ...atom(455, 110, "H", BLUE),
      ...atom(495, 110, "O", ORANGE),
      ...atom(535, 110, "H", BLUE),
      ...atom(455, 210, "H", BLUE),
      ...atom(495, 210, "O", ORANGE),
      ...atom(535, 210, "H", BLUE),
      {
        kind: "label",
        at: point(330, 300),
        text: "2H₂ + O₂ → 2H₂O / H:4個, O:2個は前後で同じ",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function oxidationReductionScene(): DiagramScene {
  return {
    width: 640,
    height: 340,
    ariaLabel:
      "金属Mが酸素Oと結び付いて酸化物MOになる酸化と、酸化物MOから酸素Oが離れる還元を対比する図。",
    responsive: { minWidth: 560, allowHorizontalScroll: true },
    elements: [
      {
        kind: "label",
        at: point(150, 45),
        text: "酸化: 酸素と結び付く",
        color: BLUE,
        align: "middle",
      },
      ...atom(80, 115, "M", GREEN),
      ...atom(170, 115, "O", ORANGE),
      { kind: "arrow", from: point(215, 115), to: point(300, 115), color: BLUE },
      ...atom(370, 115, "M", GREEN),
      ...atom(410, 115, "O", ORANGE),
      { kind: "label", at: point(390, 165), text: "MO", color: BLUE, align: "middle" },
      {
        kind: "label",
        at: point(150, 225),
        text: "還元: 酸化物から酸素が離れる",
        color: PURPLE,
        align: "middle",
      },
      ...atom(300, 250, "M", GREEN),
      ...atom(340, 250, "O", ORANGE),
      { kind: "arrow", from: point(385, 250), to: point(470, 250), color: PURPLE },
      ...atom(535, 250, "M", GREEN),
      { kind: "arrow", from: point(340, 215), to: point(340, 185), color: ORANGE },
      { kind: "label", at: point(390, 195), text: "Oが離れる", color: ORANGE },
    ],
  };
}

function reactionHeatScene(): DiagramScene {
  return {
    width: 620,
    height: 330,
    ariaLabel:
      "発熱反応では反応系から周囲へ熱が移動し、吸熱反応では周囲から反応系へ熱が移動することを矢印で示す図。",
    responsive: { minWidth: 520, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(80, 90), point(250, 90), point(250, 210), point(80, 210)],
        color: ORANGE,
      },
      { kind: "label", at: point(165, 135), text: "発熱反応", color: ORANGE, align: "middle" },
      { kind: "label", at: point(165, 170), text: "反応系", color: BASE, align: "middle" },
      { kind: "arrow", from: point(165, 80), to: point(165, 35), color: ORANGE },
      { kind: "arrow", from: point(70, 150), to: point(25, 150), color: ORANGE },
      {
        kind: "label",
        at: point(165, 245),
        text: "熱を周囲へ出す",
        color: ORANGE,
        align: "middle",
      },
      {
        kind: "polygon",
        points: [point(370, 90), point(540, 90), point(540, 210), point(370, 210)],
        color: BLUE,
      },
      { kind: "label", at: point(455, 135), text: "吸熱反応", color: BLUE, align: "middle" },
      { kind: "label", at: point(455, 170), text: "反応系", color: BASE, align: "middle" },
      { kind: "arrow", from: point(455, 35), to: point(455, 80), color: BLUE },
      { kind: "arrow", from: point(585, 150), to: point(550, 150), color: BLUE },
      {
        kind: "label",
        at: point(455, 245),
        text: "熱を周囲から受け取る",
        color: BLUE,
        align: "middle",
      },
    ],
  };
}

function massConservationScene(): DiagramScene {
  return {
    width: 650,
    height: 330,
    ariaLabel:
      "閉じた系で反応前のA 6gとB 4gの合計10gが、反応後の生成物10gと等しくなる質量保存を示す図。",
    responsive: { minWidth: 560, allowHorizontalScroll: true },
    elements: [
      { kind: "label", at: point(150, 45), text: "反応前", color: BASE, align: "middle" },
      {
        kind: "polygon",
        points: [point(50, 90), point(250, 90), point(250, 220), point(50, 220)],
        color: BLUE,
      },
      { kind: "label", at: point(150, 130), text: "A 6 g + B 4 g", color: BLUE, align: "middle" },
      { kind: "label", at: point(150, 175), text: "合計 10 g", color: PURPLE, align: "middle" },
      { kind: "arrow", from: point(275, 155), to: point(375, 155), color: PURPLE },
      { kind: "label", at: point(325, 125), text: "閉じた系", color: PURPLE, align: "middle" },
      { kind: "label", at: point(500, 45), text: "反応後", color: BASE, align: "middle" },
      {
        kind: "polygon",
        points: [point(400, 90), point(600, 90), point(600, 220), point(400, 220)],
        color: GREEN,
      },
      { kind: "label", at: point(500, 135), text: "生成物", color: GREEN, align: "middle" },
      { kind: "label", at: point(500, 175), text: "合計 10 g", color: PURPLE, align: "middle" },
      {
        kind: "label",
        at: point(325, 280),
        text: "反応物の総質量 = 生成物の総質量",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function massGraphScene(): DiagramScene {
  const transform = createCartesianTransform({
    width: 600,
    height: 380,
    xMin: 0,
    xMax: 12,
    yMin: 0,
    yMax: 8,
    padding: 60,
  });
  const model = [0, 3, 6, 9, 12].map((x) => transform.toDiagramPoint(point(x, (2 * x) / 3)));
  const observed = [point(3, 2.1), point(6, 3.9), point(9, 6.1), point(12, 7.9)].map((value) =>
    transform.toDiagramPoint(value),
  );
  return {
    width: 600,
    height: 380,
    ariaLabel:
      "横軸を物質Aの質量、縦軸を物質Bの質量とし、測定点が原点を通る比例関係B=2A/3の近くに並ぶ質量関係のグラフ。",
    responsive: { minWidth: 520, allowHorizontalScroll: true },
    elements: [
      createCartesianAxes(transform, { color: BASE, grid: true, xGridStep: 3, yGridStep: 2 }),
      { kind: "functionPlot", samples: model, expression: "B = 2A / 3", color: BLUE },
      ...observed.map((sample) => ({
        kind: "point" as const,
        x: sample.x,
        y: sample.y,
        radius: 5,
        color: ORANGE,
      })),
      { kind: "label", at: point(520, 345), text: "物質Aの質量", color: BASE, align: "end" },
      { kind: "label", at: point(85, 45), text: "物質Bの質量", color: BASE },
      {
        kind: "label",
        at: point(400, 90),
        text: "測定値の傾向から一定比を読む",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "decomposition-products": { rule: decompositionScene(), example: decompositionScene() },
  "atoms-elements": { rule: atomMoleculeScene(), example: atomMoleculeScene() },
  "element-symbols-periodic-table": { rule: elementSymbolScene(), example: elementSymbolScene() },
  "molecules-and-models": { rule: atomMoleculeScene(), example: atomMoleculeScene() },
  "chemical-change-new-substance": { rule: chemicalChangeScene(), example: chemicalChangeScene() },
  "chemical-formulas": { rule: atomMoleculeScene(), example: chemicalChangeScene() },
  "chemical-equations": { rule: chemicalChangeScene(), example: chemicalChangeScene() },
  "equation-atom-conservation": { rule: chemicalChangeScene(), example: chemicalChangeScene() },
  oxidation: { rule: oxidationReductionScene(), example: oxidationReductionScene() },
  reduction: { rule: oxidationReductionScene(), example: oxidationReductionScene() },
  "chemical-change-heat": { rule: reactionHeatScene(), example: reactionHeatScene() },
  "mass-conservation": { rule: massConservationScene(), example: massConservationScene() },
  "open-closed-system-mass": { rule: massConservationScene(), example: massConservationScene() },
  "fixed-mass-ratio": { rule: massGraphScene(), example: massGraphScene() },
  "mass-data-graph": { rule: massGraphScene(), example: massGraphScene() },
};

export const getMiddleScience2ParticleLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
