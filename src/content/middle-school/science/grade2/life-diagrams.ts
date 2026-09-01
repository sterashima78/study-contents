import type { DiagramPoint, DiagramScene } from "../../../../lib/diagram";
import type { MathLessonDiagrams } from "../../../math1/diagrams";

const BASE = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#047857";
const PURPLE = "#7c3aed";
const point = (x: number, y: number): DiagramPoint => ({ x, y });

const cellComparisonScene = (): DiagramScene => ({
  width: 620,
  height: 330,
  ariaLabel:
    "植物細胞と動物細胞を並べ、核と細胞質は共通し、植物細胞には細胞壁、葉緑体、液胞が見られることを示す模式図。",
  responsive: { minWidth: 520, allowHorizontalScroll: true },
  elements: [
    {
      kind: "polygon",
      points: [point(60, 65), point(280, 65), point(280, 265), point(60, 265)],
      color: GREEN,
    },
    { kind: "circle", center: point(160, 155), radius: 28, color: PURPLE },
    { kind: "ellipse", center: point(115, 115), radiusX: 24, radiusY: 12, color: GREEN },
    { kind: "ellipse", center: point(220, 205), radiusX: 30, radiusY: 15, color: BLUE },
    { kind: "circle", center: point(450, 165), radius: 100, color: BLUE },
    { kind: "circle", center: point(450, 165), radius: 28, color: PURPLE },
    { kind: "label", at: point(170, 35), text: "植物細胞", color: GREEN },
    { kind: "label", at: point(450, 35), text: "動物細胞", color: BLUE },
    { kind: "label", at: point(160, 160), text: "核", color: PURPLE },
    { kind: "label", at: point(450, 170), text: "核", color: PURPLE },
    {
      kind: "label",
      at: point(72, 290),
      text: "細胞壁・葉緑体・液胞が特徴",
      align: "start",
      color: GREEN,
    },
    { kind: "label", at: point(410, 290), text: "細胞壁なし", align: "start", color: BLUE },
  ],
});

const hierarchyScene = (): DiagramScene => ({
  width: 620,
  height: 260,
  ariaLabel: "細胞が集まって組織をつくり、複数の組織が組み合わさって器官をつくる階層を示す図。",
  responsive: { minWidth: 520, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(100, 120), radius: 35, color: BLUE },
    { kind: "circle", center: point(265, 100), radius: 25, color: BLUE },
    { kind: "circle", center: point(310, 125), radius: 25, color: BLUE },
    { kind: "circle", center: point(265, 150), radius: 25, color: BLUE },
    {
      kind: "polygon",
      points: [point(440, 70), point(555, 95), point(535, 180), point(425, 165)],
      color: ORANGE,
    },
    { kind: "arrow", from: point(145, 120), to: point(220, 120), color: BASE },
    { kind: "arrow", from: point(345, 125), to: point(410, 125), color: BASE },
    { kind: "label", at: point(100, 205), text: "細胞", color: BLUE },
    { kind: "label", at: point(290, 205), text: "組織", color: BLUE },
    { kind: "label", at: point(490, 205), text: "器官", color: ORANGE },
  ],
});

const plantFlowScene = (): DiagramScene => ({
  width: 620,
  height: 360,
  ariaLabel:
    "根から道管で水が葉へ上がり、葉で光合成した有機物が師管を通って各部へ運ばれ、気孔から蒸散することを示す図。",
  responsive: { minWidth: 520, allowHorizontalScroll: true },
  elements: [
    { kind: "segment", from: point(310, 105), to: point(310, 280), color: BASE },
    { kind: "ellipse", center: point(245, 95), radiusX: 75, radiusY: 32, color: GREEN },
    { kind: "ellipse", center: point(375, 95), radiusX: 75, radiusY: 32, color: GREEN },
    { kind: "segment", from: point(310, 280), to: point(255, 330), color: BASE },
    { kind: "segment", from: point(310, 280), to: point(365, 330), color: BASE },
    { kind: "arrow", from: point(285, 285), to: point(285, 120), color: BLUE },
    { kind: "arrow", from: point(335, 120), to: point(335, 285), color: ORANGE },
    { kind: "arrow", from: point(210, 75), to: point(160, 40), color: BLUE },
    { kind: "label", at: point(255, 190), text: "道管: 水↑", color: BLUE },
    { kind: "label", at: point(385, 190), text: "師管: 有機物↓", color: ORANGE },
    { kind: "label", at: point(105, 35), text: "蒸散", color: BLUE },
    { kind: "label", at: point(310, 55), text: "葉: 光合成", color: GREEN },
    { kind: "label", at: point(310, 345), text: "根: 吸水", color: BASE },
  ],
});

const digestionScene = (): DiagramScene => ({
  width: 620,
  height: 300,
  ariaLabel: "食物が口、食道、胃、小腸へ進み、消化された栄養分が小腸から吸収される流れを示す図。",
  responsive: { minWidth: 520, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(80, 130), radius: 35, color: BASE },
    {
      kind: "polygon",
      points: [point(190, 90), point(270, 90), point(285, 165), point(205, 180)],
      color: ORANGE,
    },
    {
      kind: "polygon",
      points: [point(380, 80), point(525, 80), point(525, 185), point(380, 185)],
      color: GREEN,
    },
    { kind: "arrow", from: point(120, 130), to: point(180, 130), color: BASE },
    { kind: "arrow", from: point(295, 130), to: point(365, 130), color: BASE },
    { kind: "arrow", from: point(455, 195), to: point(455, 245), color: BLUE },
    { kind: "label", at: point(80, 205), text: "口・食道", color: BASE },
    { kind: "label", at: point(240, 205), text: "胃", color: ORANGE },
    { kind: "label", at: point(450, 205), text: "小腸", color: GREEN },
    { kind: "label", at: point(455, 270), text: "栄養分を吸収", color: BLUE },
  ],
});

const respirationCirculationScene = (): DiagramScene => ({
  width: 620,
  height: 340,
  ariaLabel:
    "肺胞で酸素が血液へ入り二酸化炭素が血液から出ることと、心臓が血液を全身へ循環させることを示す図。",
  responsive: { minWidth: 520, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(145, 115), radius: 65, color: BLUE },
    { kind: "circle", center: point(310, 170), radius: 45, color: ORANGE },
    {
      kind: "polygon",
      points: [point(470, 90), point(560, 90), point(560, 235), point(470, 235)],
      color: GREEN,
    },
    { kind: "arrow", from: point(205, 105), to: point(270, 145), color: BLUE },
    { kind: "arrow", from: point(350, 150), to: point(455, 120), color: BLUE },
    { kind: "arrow", from: point(455, 210), to: point(350, 195), color: PURPLE },
    { kind: "arrow", from: point(275, 195), to: point(205, 145), color: PURPLE },
    { kind: "label", at: point(145, 115), text: "肺胞", color: BLUE },
    { kind: "label", at: point(310, 175), text: "心臓", color: ORANGE },
    { kind: "label", at: point(515, 165), text: "全身の細胞", color: GREEN },
    { kind: "label", at: point(390, 95), text: "O₂", color: BLUE },
    { kind: "label", at: point(390, 230), text: "CO₂", color: PURPLE },
  ],
});

const nervousScene = (): DiagramScene => ({
  width: 620,
  height: 280,
  ariaLabel:
    "刺激が感覚器官、感覚神経、中枢、運動神経、筋肉へ伝わって反応が起こる情報の流れを示す図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(70, 125), radius: 30, color: BLUE },
    { kind: "circle", center: point(305, 125), radius: 42, color: PURPLE },
    {
      kind: "polygon",
      points: [point(500, 85), point(570, 105), point(555, 170), point(485, 165)],
      color: ORANGE,
    },
    { kind: "arrow", from: point(105, 125), to: point(255, 125), color: BLUE },
    { kind: "arrow", from: point(350, 125), to: point(475, 125), color: ORANGE },
    { kind: "label", at: point(70, 190), text: "感覚器官", color: BLUE },
    { kind: "label", at: point(180, 100), text: "感覚神経", color: BLUE },
    { kind: "label", at: point(305, 190), text: "中枢", color: PURPLE },
    { kind: "label", at: point(410, 100), text: "運動神経", color: ORANGE },
    { kind: "label", at: point(530, 205), text: "筋肉・反応", color: ORANGE },
  ],
});

const diagrams: Record<string, MathLessonDiagrams> = {
  "cells-common-structure": { rule: cellComparisonScene() },
  "plant-animal-cell-comparison": { rule: cellComparisonScene(), example: cellComparisonScene() },
  "tissue-organ-organization": { rule: hierarchyScene(), example: hierarchyScene() },
  "leaf-structure-stomata": { rule: plantFlowScene() },
  photosynthesis: { rule: plantFlowScene(), example: plantFlowScene() },
  "respiration-photosynthesis": { rule: plantFlowScene() },
  transpiration: { rule: plantFlowScene(), example: plantFlowScene() },
  "root-stem-xylem": { rule: plantFlowScene(), example: plantFlowScene() },
  "phloem-integrated-transport": { rule: plantFlowScene(), example: plantFlowScene() },
  "digestion-organs": { rule: digestionScene(), example: digestionScene() },
  "digestive-enzymes": { rule: digestionScene() },
  "small-intestine-absorption": { rule: digestionScene(), example: digestionScene() },
  "respiration-alveoli": {
    rule: respirationCirculationScene(),
    example: respirationCirculationScene(),
  },
  "heart-blood-circulation": {
    rule: respirationCirculationScene(),
    example: respirationCirculationScene(),
  },
  "kidney-liver-excretion": { rule: respirationCirculationScene() },
  "stimulus-nervous-response": { rule: nervousScene(), example: nervousScene() },
  "bones-muscles-movement": { rule: nervousScene() },
};

export const getMiddleScience2LifeLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
