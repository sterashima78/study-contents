import type { DiagramPoint, DiagramScene } from "../../../../lib/diagram";
import type { MathLessonDiagrams } from "../../../math1/diagrams";

const BASE = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#047857";
const PURPLE = "#7c3aed";
const point = (x: number, y: number): DiagramPoint => ({ x, y });

const observationScene = (): DiagramScene => ({
  width: 640,
  height: 300,
  ariaLabel: "同じ時間軸に気温、湿度、気圧、風をそろえて記録し、気象要素の変化を比較する模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    { kind: "segment", from: point(75, 245), to: point(590, 245), color: BASE },
    { kind: "segment", from: point(75, 55), to: point(75, 245), color: BASE },
    { kind: "segment", from: point(90, 155), to: point(200, 135), color: ORANGE },
    { kind: "segment", from: point(200, 135), to: point(310, 125), color: ORANGE },
    { kind: "segment", from: point(310, 125), to: point(420, 165), color: ORANGE },
    { kind: "segment", from: point(420, 165), to: point(560, 185), color: ORANGE },
    { kind: "segment", from: point(90, 205), to: point(200, 190), color: BLUE },
    { kind: "segment", from: point(200, 190), to: point(310, 160), color: BLUE },
    { kind: "segment", from: point(310, 160), to: point(420, 120), color: BLUE },
    { kind: "segment", from: point(420, 120), to: point(560, 95), color: BLUE },
    { kind: "segment", from: point(90, 95), to: point(200, 105), color: PURPLE },
    { kind: "segment", from: point(200, 105), to: point(310, 120), color: PURPLE },
    { kind: "segment", from: point(310, 120), to: point(420, 150), color: PURPLE },
    { kind: "segment", from: point(420, 150), to: point(560, 175), color: PURPLE },
    { kind: "label", at: point(505, 55), text: "同じ時間軸で比較", color: BASE },
    { kind: "label", at: point(555, 190), text: "気温", color: ORANGE },
    { kind: "label", at: point(555, 90), text: "湿度", color: BLUE },
    { kind: "label", at: point(555, 170), text: "気圧", color: PURPLE },
    { kind: "label", at: point(330, 275), text: "時刻", color: BASE },
  ],
});

const condensationScene = (): DiagramScene => ({
  width: 640,
  height: 320,
  ariaLabel: "湿った空気が冷やされて露点に達し、凝結して霧や雲になる流れを示す模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    {
      kind: "polygon",
      points: [point(60, 210), point(185, 210), point(165, 105), point(80, 105)],
      color: ORANGE,
    },
    { kind: "arrow", from: point(200, 155), to: point(285, 115), color: BASE },
    {
      kind: "polygon",
      points: [point(300, 210), point(430, 210), point(400, 80), point(330, 80)],
      color: BLUE,
    },
    { kind: "arrow", from: point(440, 135), to: point(520, 135), color: BASE },
    { kind: "circle", center: point(555, 105), radius: 18, color: BLUE },
    { kind: "circle", center: point(585, 135), radius: 16, color: BLUE },
    { kind: "circle", center: point(545, 155), radius: 14, color: BLUE },
    { kind: "label", at: point(125, 245), text: "湿った空気", color: ORANGE },
    { kind: "label", at: point(365, 245), text: "上昇・膨張・冷却", color: BLUE },
    { kind: "label", at: point(565, 205), text: "露点→凝結", color: BLUE },
    { kind: "label", at: point(565, 235), text: "雲・霧", color: BASE },
  ],
});

const frontScene = (): DiagramScene => ({
  width: 640,
  height: 320,
  ariaLabel:
    "寒気が暖気の下へ入り込む寒冷前線と、暖気が寒気の上をゆるやかに進む温暖前線を比較する断面図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    {
      kind: "polygon",
      points: [point(40, 250), point(300, 250), point(300, 180), point(120, 180)],
      color: BLUE,
    },
    { kind: "polygon", points: [point(120, 180), point(300, 180), point(300, 70)], color: ORANGE },
    { kind: "arrow", from: point(75, 220), to: point(175, 205), color: BLUE },
    { kind: "arrow", from: point(210, 150), to: point(245, 95), color: ORANGE },
    { kind: "label", at: point(160, 285), text: "寒冷前線", color: BASE },
    { kind: "label", at: point(100, 215), text: "寒気", color: BLUE },
    { kind: "label", at: point(240, 120), text: "暖気", color: ORANGE },
    {
      kind: "polygon",
      points: [point(345, 250), point(600, 250), point(600, 190), point(445, 190)],
      color: BLUE,
    },
    {
      kind: "polygon",
      points: [point(345, 250), point(445, 190), point(600, 80), point(600, 190)],
      color: ORANGE,
    },
    { kind: "arrow", from: point(420, 195), to: point(520, 125), color: ORANGE },
    { kind: "label", at: point(475, 285), text: "温暖前線", color: BASE },
    { kind: "label", at: point(530, 220), text: "寒気", color: BLUE },
    { kind: "label", at: point(495, 125), text: "暖気", color: ORANGE },
  ],
});

const pressureScene = (): DiagramScene => ({
  width: 640,
  height: 320,
  ariaLabel:
    "北半球の地表付近で、高気圧から外向きに時計回り、低気圧へ内向きに反時計回りの風が吹く代表的傾向を示す模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(180, 155), radius: 80, color: BLUE },
    { kind: "circle", center: point(470, 155), radius: 80, color: ORANGE },
    { kind: "label", at: point(180, 160), text: "H", color: BLUE },
    { kind: "label", at: point(470, 160), text: "L", color: ORANGE },
    { kind: "arrow", from: point(180, 85), to: point(250, 125), color: BLUE },
    { kind: "arrow", from: point(180, 225), to: point(110, 190), color: BLUE },
    { kind: "arrow", from: point(540, 125), to: point(480, 90), color: ORANGE },
    { kind: "arrow", from: point(400, 190), to: point(455, 225), color: ORANGE },
    { kind: "label", at: point(180, 280), text: "高気圧: 外向き", color: BLUE },
    { kind: "label", at: point(470, 280), text: "低気圧: 内向き", color: ORANGE },
  ],
});

const winterMonsoonScene = (): DiagramScene => ({
  width: 640,
  height: 320,
  ariaLabel:
    "冬の北西季節風が大陸から日本海を渡って水蒸気を受け取り、日本の山地で上昇して雪を降らせる流れを示す模式図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    {
      kind: "polygon",
      points: [point(30, 220), point(160, 220), point(160, 90), point(30, 90)],
      color: BLUE,
    },
    {
      kind: "polygon",
      points: [point(190, 250), point(390, 250), point(390, 185), point(190, 185)],
      color: BLUE,
    },
    { kind: "polygon", points: [point(430, 250), point(520, 110), point(610, 250)], color: GREEN },
    { kind: "arrow", from: point(130, 135), to: point(280, 170), color: BASE },
    { kind: "arrow", from: point(310, 170), to: point(485, 125), color: BASE },
    { kind: "label", at: point(95, 65), text: "大陸・冷たい乾燥空気", color: BLUE },
    { kind: "label", at: point(290, 275), text: "日本海: 水蒸気を供給", color: BLUE },
    { kind: "label", at: point(520, 80), text: "山地で上昇→雪雲", color: GREEN },
  ],
});

const disasterDataScene = (): DiagramScene => ({
  width: 640,
  height: 320,
  ariaLabel:
    "過去の気象災害を天気図、降水量、河川水位など複数の記録から関連付けて分析し、現在の公的情報とは区別する図。",
  responsive: { minWidth: 560, allowHorizontalScroll: true },
  elements: [
    {
      kind: "polygon",
      points: [point(40, 70), point(170, 70), point(170, 190), point(40, 190)],
      color: PURPLE,
    },
    {
      kind: "polygon",
      points: [point(255, 70), point(385, 70), point(385, 190), point(255, 190)],
      color: BLUE,
    },
    {
      kind: "polygon",
      points: [point(470, 70), point(600, 70), point(600, 190), point(470, 190)],
      color: ORANGE,
    },
    { kind: "arrow", from: point(175, 130), to: point(245, 130), color: BASE },
    { kind: "arrow", from: point(390, 130), to: point(460, 130), color: BASE },
    { kind: "label", at: point(105, 130), text: "天気図", color: PURPLE },
    { kind: "label", at: point(320, 130), text: "降水・風", color: BLUE },
    { kind: "label", at: point(535, 130), text: "影響記録", color: ORANGE },
    { kind: "label", at: point(320, 235), text: "過去資料を関連付けて科学的に分析", color: BASE },
    { kind: "label", at: point(320, 280), text: "現在の安全判断 → 最新の公的情報", color: GREEN },
  ],
});

const diagrams: Record<string, MathLessonDiagrams> = {
  "weather-elements": { rule: observationScene(), example: observationScene() },
  "pressure-atmospheric-pressure": { rule: observationScene() },
  "weather-observation-recording": { rule: observationScene(), example: observationScene() },
  "weather-data-relationships": { rule: observationScene(), example: observationScene() },
  "saturation-humidity": { rule: condensationScene() },
  "dew-point-condensation": { rule: condensationScene(), example: condensationScene() },
  "fog-cloud-formation": { rule: condensationScene(), example: condensationScene() },
  "warm-cold-fronts": { rule: frontScene(), example: frontScene() },
  "front-passage-weather": { rule: frontScene(), example: observationScene() },
  "air-mass-properties": { rule: winterMonsoonScene() },
  "high-low-pressure-wind": { rule: pressureScene(), example: pressureScene() },
  "winter-weather-japan": { rule: winterMonsoonScene(), example: winterMonsoonScene() },
  "seasonal-weather-patterns": { rule: pressureScene() },
  "westerlies-eastward-movement": { rule: pressureScene(), example: pressureScene() },
  "ocean-monsoon-typhoon": { rule: winterMonsoonScene() },
  "weather-benefits-water-resources": { rule: disasterDataScene() },
  "weather-disaster-records-public-info": {
    rule: disasterDataScene(),
    example: disasterDataScene(),
  },
};

export const getMiddleScience2WeatherLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
