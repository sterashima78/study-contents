import type { DiagramPoint, DiagramScene } from "../../../../lib/diagram";
import type { MathLessonDiagrams } from "../../../math1/diagrams";

const BASE = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#047857";
const PURPLE = "#7c3aed";
const point = (x: number, y: number): DiagramPoint => ({ x, y });

function strataScene(): DiagramScene {
  return {
    width: 560,
    height: 340,
    ariaLabel:
      "下かられき、砂、泥の層が重なり、古い層が下、新しい層が上にある基本的な地層の重なりを示す図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(80, 230), point(480, 230), point(480, 285), point(80, 285)],
        color: ORANGE,
      },
      {
        kind: "polygon",
        points: [point(80, 170), point(480, 170), point(480, 230), point(80, 230)],
        color: GREEN,
      },
      {
        kind: "polygon",
        points: [point(80, 105), point(480, 105), point(480, 170), point(80, 170)],
        color: BLUE,
      },
      {
        kind: "label",
        at: point(280, 260),
        text: "れきの層（古い）",
        color: ORANGE,
        align: "middle",
      },
      { kind: "label", at: point(280, 202), text: "砂の層", color: GREEN, align: "middle" },
      {
        kind: "label",
        at: point(280, 138),
        text: "泥の層（新しい）",
        color: BLUE,
        align: "middle",
      },
      { kind: "arrow", from: point(515, 275), to: point(515, 115), color: PURPLE },
      { kind: "label", at: point(500, 305), text: "時間", color: PURPLE, align: "end" },
      {
        kind: "label",
        at: point(280, 65),
        text: "通常は下ほど古く、上ほど新しい",
        color: BASE,
        align: "middle",
      },
    ],
  };
}

function depositionScene(): DiagramScene {
  return {
    width: 560,
    height: 340,
    ariaLabel:
      "川の上流から河口・海へ向かって流れが弱まり、大きな粒から先に堆積していく様子を示す図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(40, 105), to: point(520, 250), color: BLUE },
      { kind: "arrow", from: point(70, 115), to: point(440, 225), color: BLUE },
      { kind: "label", at: point(95, 85), text: "上流", color: BASE, align: "middle" },
      { kind: "label", at: point(455, 260), text: "河口・海", color: BASE, align: "middle" },
      { kind: "ellipse", center: point(250, 245), radiusX: 18, radiusY: 12, color: ORANGE },
      { kind: "ellipse", center: point(305, 255), radiusX: 12, radiusY: 9, color: ORANGE },
      { kind: "point", x: 375, y: 265, radius: 6, color: GREEN },
      { kind: "point", x: 405, y: 270, radius: 4, color: GREEN },
      { kind: "point", x: 455, y: 278, radius: 3, color: PURPLE },
      {
        kind: "label",
        at: point(270, 305),
        text: "れき → 砂 → 泥",
        color: PURPLE,
        align: "middle",
      },
      {
        kind: "label",
        at: point(280, 45),
        text: "流れが弱まると大きい粒から堆積しやすい",
        color: BASE,
        align: "middle",
      },
    ],
  };
}

function fossilScene(): DiagramScene {
  return {
    width: 560,
    height: 330,
    ariaLabel:
      "化石を、過去の環境を示す示相化石と地質年代を示す示準化石の二つの役割に分けて示す図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      {
        kind: "label",
        at: point(280, 50),
        text: "化石から分かること",
        color: PURPLE,
        align: "middle",
      },
      { kind: "segment", from: point(280, 75), to: point(280, 120), color: BASE },
      { kind: "segment", from: point(150, 120), to: point(410, 120), color: BASE },
      { kind: "segment", from: point(150, 120), to: point(150, 160), color: BASE },
      { kind: "segment", from: point(410, 120), to: point(410, 160), color: BASE },
      {
        kind: "polygon",
        points: [point(65, 160), point(235, 160), point(235, 230), point(65, 230)],
        color: BLUE,
      },
      {
        kind: "polygon",
        points: [point(325, 160), point(495, 160), point(495, 230), point(325, 230)],
        color: ORANGE,
      },
      { kind: "label", at: point(150, 188), text: "示相化石", color: BLUE, align: "middle" },
      { kind: "label", at: point(150, 212), text: "過去の環境", color: BLUE, align: "middle" },
      { kind: "label", at: point(410, 188), text: "示準化石", color: ORANGE, align: "middle" },
      { kind: "label", at: point(410, 212), text: "地質年代", color: ORANGE, align: "middle" },
      {
        kind: "label",
        at: point(280, 285),
        text: "役割を区別して地層を読み取る",
        color: GREEN,
        align: "middle",
      },
    ],
  };
}

function volcanoScene(): DiagramScene {
  return {
    width: 600,
    height: 350,
    ariaLabel:
      "粘性の小さいマグマがつくるなだらかな火山と、粘性の大きいマグマがつくる急な火山を比較する図。",
    responsive: { minWidth: 520, allowHorizontalScroll: true },
    elements: [
      { kind: "polygon", points: [point(35, 260), point(260, 260), point(150, 155)], color: BLUE },
      {
        kind: "polygon",
        points: [point(340, 260), point(565, 260), point(455, 80)],
        color: ORANGE,
      },
      { kind: "label", at: point(150, 290), text: "なだらか", color: BLUE, align: "middle" },
      { kind: "label", at: point(150, 315), text: "粘性 小", color: BLUE, align: "middle" },
      { kind: "label", at: point(455, 290), text: "急・ドーム状", color: ORANGE, align: "middle" },
      { kind: "label", at: point(455, 315), text: "粘性 大", color: ORANGE, align: "middle" },
      { kind: "arrow", from: point(270, 120), to: point(330, 120), color: PURPLE },
      { kind: "label", at: point(300, 90), text: "流れにくさ", color: PURPLE, align: "middle" },
      {
        kind: "label",
        at: point(300, 40),
        text: "火山の形をマグマの粘性と関連付ける",
        color: BASE,
        align: "middle",
      },
    ],
  };
}

function igneousRockScene(): DiagramScene {
  return {
    width: 580,
    height: 340,
    ariaLabel: "火山岩の斑状組織と深成岩の等粒状組織を、マグマの冷え方の違いと対応させて示す図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(45, 95), point(255, 95), point(255, 250), point(45, 250)],
        color: BLUE,
      },
      { kind: "ellipse", center: point(100, 145), radiusX: 24, radiusY: 19, color: ORANGE },
      { kind: "ellipse", center: point(195, 195), radiusX: 28, radiusY: 22, color: ORANGE },
      ...[point(80, 210), point(135, 185), point(175, 130), point(225, 150), point(120, 120)].map(
        (p) => ({ kind: "point" as const, x: p.x, y: p.y, radius: 4, color: BASE }),
      ),
      {
        kind: "polygon",
        points: [point(325, 95), point(535, 95), point(535, 250), point(325, 250)],
        color: GREEN,
      },
      ...[
        point(365, 135),
        point(430, 135),
        point(495, 135),
        point(365, 205),
        point(430, 205),
        point(495, 205),
      ].map((p) => ({
        kind: "ellipse" as const,
        center: p,
        radiusX: 20,
        radiusY: 18,
        color: PURPLE,
      })),
      {
        kind: "label",
        at: point(150, 280),
        text: "火山岩: 斑状組織",
        color: BLUE,
        align: "middle",
      },
      {
        kind: "label",
        at: point(150, 305),
        text: "比較的急に冷える",
        color: BASE,
        align: "middle",
      },
      {
        kind: "label",
        at: point(430, 280),
        text: "深成岩: 等粒状組織",
        color: GREEN,
        align: "middle",
      },
      { kind: "label", at: point(430, 305), text: "ゆっくり冷える", color: BASE, align: "middle" },
      {
        kind: "label",
        at: point(290, 45),
        text: "結晶の育ち方が変わる",
        color: ORANGE,
        align: "middle",
      },
    ],
  };
}

function seismogramScene(): DiagramScene {
  const samples = [
    point(45, 170),
    point(75, 168),
    point(100, 174),
    point(125, 165),
    point(150, 172),
    point(175, 155),
    point(195, 188),
    point(215, 142),
    point(235, 205),
    point(255, 125),
    point(275, 215),
    point(295, 118),
    point(315, 220),
    point(335, 130),
    point(355, 205),
    point(385, 145),
    point(420, 185),
    point(460, 160),
    point(510, 170),
  ];
  return {
    width: 580,
    height: 330,
    ariaLabel:
      "地震計記録でP波到着後に小さな初期微動があり、S波到着後に大きな主要動が続く様子を示す図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(35, 170), to: point(535, 170), color: BASE },
      { kind: "functionPlot", samples, expression: "地震計記録", color: BLUE },
      { kind: "segment", from: point(150, 75), to: point(150, 255), color: GREEN },
      { kind: "segment", from: point(235, 75), to: point(235, 255), color: ORANGE },
      { kind: "label", at: point(150, 55), text: "P波到着", color: GREEN, align: "middle" },
      { kind: "label", at: point(235, 55), text: "S波到着", color: ORANGE, align: "middle" },
      { kind: "label", at: point(190, 285), text: "初期微動", color: GREEN, align: "middle" },
      { kind: "label", at: point(355, 285), text: "主要動", color: ORANGE, align: "middle" },
      { kind: "arrow", from: point(155, 260), to: point(230, 260), color: PURPLE },
      {
        kind: "label",
        at: point(192, 315),
        text: "初期微動継続時間",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function plateScene(): DiagramScene {
  return {
    width: 600,
    height: 350,
    ariaLabel: "海側のプレートが陸側のプレートの下へ沈み込み、その境界付近で地震が起こる模式図。",
    responsive: { minWidth: 520, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [
          point(30, 130),
          point(330, 130),
          point(500, 275),
          point(430, 310),
          point(260, 185),
          point(30, 185),
        ],
        color: BLUE,
      },
      {
        kind: "polygon",
        points: [point(260, 105), point(570, 105), point(570, 185), point(360, 185)],
        color: GREEN,
      },
      { kind: "arrow", from: point(100, 155), to: point(285, 155), color: BLUE },
      { kind: "arrow", from: point(500, 145), to: point(390, 145), color: GREEN },
      { kind: "point", x: 360, y: 200, radius: 7, color: ORANGE },
      { kind: "label", at: point(170, 215), text: "海側プレート", color: BLUE, align: "middle" },
      { kind: "label", at: point(470, 75), text: "陸側プレート", color: GREEN, align: "middle" },
      { kind: "label", at: point(385, 235), text: "震源", color: ORANGE },
      {
        kind: "label",
        at: point(300, 325),
        text: "プレートの動きと地震を関連付ける",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function benefitDisasterScene(): DiagramScene {
  return {
    width: 580,
    height: 330,
    ariaLabel:
      "火山や地震などの大地の活動を中心に、地熱・温泉などの恵みと、噴火・強い揺れ・津波などの災害の両面へ分ける図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      { kind: "ellipse", center: point(290, 90), radiusX: 95, radiusY: 42, color: PURPLE },
      { kind: "label", at: point(290, 90), text: "大地の活動", color: PURPLE, align: "middle" },
      { kind: "arrow", from: point(235, 125), to: point(150, 180), color: GREEN },
      { kind: "arrow", from: point(345, 125), to: point(430, 180), color: ORANGE },
      {
        kind: "polygon",
        points: [point(55, 180), point(245, 180), point(245, 260), point(55, 260)],
        color: GREEN,
      },
      {
        kind: "polygon",
        points: [point(335, 180), point(525, 180), point(525, 260), point(335, 260)],
        color: ORANGE,
      },
      { kind: "label", at: point(150, 205), text: "恵み", color: GREEN, align: "middle" },
      {
        kind: "label",
        at: point(150, 235),
        text: "地熱・温泉・景観",
        color: GREEN,
        align: "middle",
      },
      { kind: "label", at: point(430, 205), text: "災害", color: ORANGE, align: "middle" },
      {
        kind: "label",
        at: point(430, 235),
        text: "噴火・揺れ・津波",
        color: ORANGE,
        align: "middle",
      },
      {
        kind: "label",
        at: point(290, 305),
        text: "仕組みと資料を関連付けて理解する",
        color: BASE,
        align: "middle",
      },
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "terrain-strata-rock-observation": { rule: strataScene() },
  "erosion-transport-deposition": { rule: depositionScene(), example: depositionScene() },
  "strata-formation": { rule: strataScene(), example: strataScene() },
  "sedimentary-rocks": { rule: depositionScene() },
  "strata-overlap-spread": { rule: strataScene() },
  "fossils-environment-age": { rule: fossilScene(), example: fossilScene() },
  "faults-folds": { rule: strataScene() },
  "volcano-shape-magma-viscosity": { rule: volcanoScene(), example: volcanoScene() },
  "volcanic-ejecta-minerals": { rule: volcanoScene() },
  "igneous-rock-texture-cooling": { rule: igneousRockScene(), example: igneousRockScene() },
  "earthquake-waves": { rule: seismogramScene(), example: seismogramScene() },
  "initial-tremor-distance": { rule: seismogramScene(), example: seismogramScene() },
  "magnitude-intensity": { rule: seismogramScene() },
  "plates-earthquake-land-change": { rule: plateScene(), example: plateScene() },
  "earth-benefits-disasters": { rule: benefitDisasterScene(), example: benefitDisasterScene() },
};

export const getMiddleScience1EarthLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
