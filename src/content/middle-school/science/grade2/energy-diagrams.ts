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

function seriesCircuitScene(): DiagramScene {
  return {
    width: 580,
    height: 340,
    ariaLabel:
      "電源と二つの抵抗を一つの道筋に直列接続し、回路の各点で電流が等しく、各抵抗の電圧の和が電源電圧になることを示す模式図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(90, 80), to: point(490, 80), color: BASE },
      { kind: "segment", from: point(490, 80), to: point(490, 250), color: BASE },
      { kind: "segment", from: point(490, 250), to: point(90, 250), color: BASE },
      { kind: "segment", from: point(90, 250), to: point(90, 80), color: BASE },
      {
        kind: "polygon",
        points: [point(190, 65), point(270, 65), point(270, 95), point(190, 95)],
        color: BLUE,
      },
      {
        kind: "polygon",
        points: [point(330, 65), point(410, 65), point(410, 95), point(330, 95)],
        color: ORANGE,
      },
      { kind: "segment", from: point(75, 145), to: point(105, 145), color: GREEN },
      { kind: "segment", from: point(82, 165), to: point(98, 165), color: GREEN },
      { kind: "arrow", from: point(120, 250), to: point(220, 250), color: PURPLE },
      { kind: "label", at: point(230, 48), text: "R₁", color: BLUE, align: "middle" },
      { kind: "label", at: point(370, 48), text: "R₂", color: ORANGE, align: "middle" },
      { kind: "label", at: point(55, 158), text: "電源", color: GREEN, align: "end" },
      {
        kind: "label",
        at: point(280, 290),
        text: "Iは各点で同じ / V = V₁ + V₂",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function parallelCircuitScene(): DiagramScene {
  return {
    width: 600,
    height: 360,
    ariaLabel:
      "電源から分岐して二つの抵抗へ流れる並列回路で、分岐前の電流が枝の電流の和となり、各枝の電圧が等しいことを示す模式図。",
    responsive: { minWidth: 520, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(90, 70), to: point(500, 70), color: BASE },
      { kind: "segment", from: point(500, 70), to: point(500, 290), color: BASE },
      { kind: "segment", from: point(500, 290), to: point(90, 290), color: BASE },
      { kind: "segment", from: point(90, 290), to: point(90, 70), color: BASE },
      { kind: "segment", from: point(210, 70), to: point(210, 290), color: BASE },
      { kind: "segment", from: point(390, 70), to: point(390, 290), color: BASE },
      {
        kind: "polygon",
        points: [point(195, 125), point(225, 125), point(225, 205), point(195, 205)],
        color: BLUE,
      },
      {
        kind: "polygon",
        points: [point(375, 125), point(405, 125), point(405, 205), point(375, 205)],
        color: ORANGE,
      },
      { kind: "segment", from: point(75, 145), to: point(105, 145), color: GREEN },
      { kind: "segment", from: point(82, 165), to: point(98, 165), color: GREEN },
      { kind: "arrow", from: point(120, 70), to: point(180, 70), color: PURPLE },
      { kind: "arrow", from: point(210, 95), to: point(210, 120), color: BLUE },
      { kind: "arrow", from: point(390, 95), to: point(390, 120), color: ORANGE },
      { kind: "label", at: point(145, 55), text: "I", color: PURPLE, align: "middle" },
      { kind: "label", at: point(185, 165), text: "I₁", color: BLUE, align: "end" },
      { kind: "label", at: point(365, 165), text: "I₂", color: ORANGE, align: "end" },
      {
        kind: "label",
        at: point(300, 325),
        text: "I = I₁ + I₂ / V = V₁ = V₂",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function ivGraphScene(): DiagramScene {
  const transform = createCartesianTransform({
    width: 560,
    height: 360,
    xMin: 0,
    xMax: 6,
    yMin: 0,
    yMax: 0.6,
    padding: 55,
  });
  const samples = [0, 1, 2, 3, 4, 5, 6].map((x) => transform.toDiagramPoint(point(x, x / 10)));
  return {
    width: 560,
    height: 360,
    ariaLabel:
      "横軸を電圧V、縦軸を電流Aとするグラフで、測定点が原点を通る直線上に並び電流と電圧の比例関係を示す図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      createCartesianAxes(transform, { color: BASE, grid: true, xGridStep: 1, yGridStep: 0.1 }),
      { kind: "functionPlot", samples, expression: "I = V / R", color: BLUE },
      ...samples.slice(1).map((sample) => ({
        kind: "point" as const,
        x: sample.x,
        y: sample.y,
        radius: 4,
        color: ORANGE,
      })),
      { kind: "label", at: point(485, 315), text: "電圧 V", color: BASE, align: "end" },
      { kind: "label", at: point(85, 45), text: "電流 A", color: BASE },
      {
        kind: "label",
        at: point(350, 75),
        text: "原点を通る直線 → 比例",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function resistanceScene(): DiagramScene {
  return {
    width: 580,
    height: 340,
    ariaLabel:
      "二つの抵抗を直列につないだ場合は合成抵抗が大きく、並列につないだ場合は電流の道筋が増えて合成抵抗が小さくなることを比較する図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      { kind: "label", at: point(145, 50), text: "直列", color: BLUE, align: "middle" },
      { kind: "segment", from: point(45, 120), to: point(245, 120), color: BASE },
      {
        kind: "polygon",
        points: [point(80, 105), point(130, 105), point(130, 135), point(80, 135)],
        color: BLUE,
      },
      {
        kind: "polygon",
        points: [point(160, 105), point(210, 105), point(210, 135), point(160, 135)],
        color: BLUE,
      },
      { kind: "label", at: point(145, 165), text: "R = R₁ + R₂", color: BLUE, align: "middle" },
      { kind: "label", at: point(430, 50), text: "並列", color: ORANGE, align: "middle" },
      { kind: "segment", from: point(320, 95), to: point(540, 95), color: BASE },
      { kind: "segment", from: point(320, 205), to: point(540, 205), color: BASE },
      { kind: "segment", from: point(350, 95), to: point(350, 205), color: BASE },
      { kind: "segment", from: point(510, 95), to: point(510, 205), color: BASE },
      {
        kind: "polygon",
        points: [point(390, 80), point(440, 80), point(440, 110), point(390, 110)],
        color: ORANGE,
      },
      {
        kind: "polygon",
        points: [point(390, 190), point(440, 190), point(440, 220), point(390, 220)],
        color: ORANGE,
      },
      {
        kind: "label",
        at: point(430, 250),
        text: "Rは各抵抗より小さい",
        color: ORANGE,
        align: "middle",
      },
      {
        kind: "label",
        at: point(290, 310),
        text: "接続方法で全体の流れにくさが変わる",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function powerEnergyScene(): DiagramScene {
  return {
    width: 580,
    height: 330,
    ariaLabel: "電圧と電流から電力P=VIを求め、電力と時間から電力量E=Ptを求める関係を矢印で示す図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(45, 95), point(180, 95), point(180, 175), point(45, 175)],
        color: BLUE,
      },
      { kind: "label", at: point(112, 122), text: "電圧 V", color: BLUE, align: "middle" },
      { kind: "label", at: point(112, 150), text: "電流 I", color: BLUE, align: "middle" },
      { kind: "arrow", from: point(190, 135), to: point(270, 135), color: PURPLE },
      {
        kind: "polygon",
        points: [point(280, 95), point(420, 95), point(420, 175), point(280, 175)],
        color: GREEN,
      },
      { kind: "label", at: point(350, 125), text: "電力 P = VI", color: GREEN, align: "middle" },
      { kind: "label", at: point(350, 150), text: "単位 W", color: GREEN, align: "middle" },
      { kind: "arrow", from: point(350, 185), to: point(350, 225), color: PURPLE },
      { kind: "label", at: point(390, 210), text: "× 時間 t", color: PURPLE },
      {
        kind: "polygon",
        points: [point(255, 230), point(445, 230), point(445, 295), point(255, 295)],
        color: ORANGE,
      },
      { kind: "label", at: point(350, 255), text: "電力量 E = Pt", color: ORANGE, align: "middle" },
      { kind: "label", at: point(350, 280), text: "単位 J", color: ORANGE, align: "middle" },
    ],
  };
}

function staticElectricityScene(): DiagramScene {
  return {
    width: 580,
    height: 320,
    ariaLabel:
      "同じ種類の電気を帯びた物体どうしは反発し、異なる種類の電気を帯びた物体どうしは引き合うことを示す模式図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      { kind: "ellipse", center: point(105, 105), radiusX: 38, radiusY: 38, color: BLUE },
      { kind: "ellipse", center: point(230, 105), radiusX: 38, radiusY: 38, color: BLUE },
      { kind: "label", at: point(105, 105), text: "+", color: BLUE, align: "middle" },
      { kind: "label", at: point(230, 105), text: "+", color: BLUE, align: "middle" },
      { kind: "arrow", from: point(145, 105), to: point(120, 105), color: PURPLE },
      { kind: "arrow", from: point(190, 105), to: point(215, 105), color: PURPLE },
      { kind: "label", at: point(168, 165), text: "同種 → 反発", color: PURPLE, align: "middle" },
      { kind: "ellipse", center: point(365, 105), radiusX: 38, radiusY: 38, color: ORANGE },
      { kind: "ellipse", center: point(500, 105), radiusX: 38, radiusY: 38, color: GREEN },
      { kind: "label", at: point(365, 105), text: "+", color: ORANGE, align: "middle" },
      { kind: "label", at: point(500, 105), text: "−", color: GREEN, align: "middle" },
      { kind: "arrow", from: point(405, 105), to: point(430, 105), color: PURPLE },
      { kind: "arrow", from: point(460, 105), to: point(435, 105), color: PURPLE },
      { kind: "label", at: point(433, 165), text: "異種 → 引力", color: PURPLE, align: "middle" },
      {
        kind: "label",
        at: point(290, 260),
        text: "電子の移動と電流を関連付ける",
        color: BASE,
        align: "middle",
      },
    ],
  };
}

function magneticFieldScene(): DiagramScene {
  return {
    width: 580,
    height: 340,
    ariaLabel:
      "棒磁石のN極からS極へ向かう磁力線を複数描き、磁力線が密な場所ほど磁界が強いことを示す模式図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(200, 145), point(380, 145), point(380, 205), point(200, 205)],
        color: BASE,
      },
      { kind: "label", at: point(235, 175), text: "N", color: BLUE, align: "middle" },
      { kind: "label", at: point(345, 175), text: "S", color: ORANGE, align: "middle" },
      { kind: "arrow", from: point(220, 130), to: point(360, 130), color: PURPLE },
      { kind: "arrow", from: point(205, 110), to: point(375, 110), color: PURPLE },
      { kind: "arrow", from: point(190, 85), to: point(390, 85), color: PURPLE },
      { kind: "arrow", from: point(220, 220), to: point(360, 220), color: PURPLE },
      { kind: "arrow", from: point(205, 240), to: point(375, 240), color: PURPLE },
      { kind: "arrow", from: point(190, 265), to: point(390, 265), color: PURPLE },
      {
        kind: "label",
        at: point(290, 45),
        text: "磁力線: N極側 → S極側",
        color: BASE,
        align: "middle",
      },
      {
        kind: "label",
        at: point(290, 310),
        text: "線が密な場所ほど磁界が強い",
        color: GREEN,
        align: "middle",
      },
    ],
  };
}

function coilScene(): DiagramScene {
  return {
    width: 580,
    height: 340,
    ariaLabel:
      "コイルに電流が流れると周囲に磁界が生じ、電流を大きくすると磁界が強くなり、電流の向きを逆にすると磁界の向きも逆になることを示す図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      ...[170, 205, 240, 275, 310, 345].map((x) => ({
        kind: "ellipse" as const,
        center: point(x, 170),
        radiusX: 28,
        radiusY: 75,
        color: BLUE,
      })),
      { kind: "arrow", from: point(110, 250), to: point(170, 250), color: ORANGE },
      { kind: "arrow", from: point(345, 90), to: point(420, 90), color: ORANGE },
      { kind: "arrow", from: point(105, 170), to: point(455, 170), color: PURPLE },
      { kind: "label", at: point(140, 275), text: "電流", color: ORANGE, align: "middle" },
      { kind: "label", at: point(280, 55), text: "コイル", color: BLUE, align: "middle" },
      { kind: "label", at: point(470, 170), text: "磁界", color: PURPLE },
      {
        kind: "label",
        at: point(290, 315),
        text: "電流↑ → 磁界↑ / 電流の向き反転 → 磁界も反転",
        color: GREEN,
        align: "middle",
      },
    ],
  };
}

function forceScene(): DiagramScene {
  return {
    width: 580,
    height: 340,
    ariaLabel:
      "磁界中の導線に電流を流すと導線に力が働き、電流の向きを逆にすると力の向きも逆になることを示す模式図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(70, 80), point(170, 80), point(170, 260), point(70, 260)],
        color: BLUE,
      },
      {
        kind: "polygon",
        points: [point(410, 80), point(510, 80), point(510, 260), point(410, 260)],
        color: ORANGE,
      },
      { kind: "label", at: point(120, 170), text: "N", color: BLUE, align: "middle" },
      { kind: "label", at: point(460, 170), text: "S", color: ORANGE, align: "middle" },
      { kind: "arrow", from: point(180, 170), to: point(400, 170), color: PURPLE },
      { kind: "segment", from: point(290, 90), to: point(290, 250), color: GREEN },
      { kind: "arrow", from: point(290, 230), to: point(290, 120), color: GREEN },
      { kind: "arrow", from: point(290, 170), to: point(350, 110), color: BASE },
      { kind: "label", at: point(300, 105), text: "電流", color: GREEN },
      { kind: "label", at: point(365, 95), text: "力", color: BASE },
      {
        kind: "label",
        at: point(290, 310),
        text: "電流または磁界を反転 → 力も反転",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function inductionScene(): DiagramScene {
  const acSamples = Array.from({ length: 61 }, (_, index) => {
    const x = 310 + index * 3.5;
    const y = 230 - Math.sin((index / 10) * Math.PI) * 35;
    return point(x, y);
  });
  return {
    width: 600,
    height: 360,
    ariaLabel:
      "磁石をコイルへ動かして磁界を変化させると誘導電流が生じる電磁誘導と、一定方向の直流・周期的に向きが変わる交流の波形を示す図。",
    responsive: { minWidth: 520, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(45, 100), point(130, 100), point(130, 180), point(45, 180)],
        color: ORANGE,
      },
      { kind: "label", at: point(88, 128), text: "N", color: ORANGE, align: "middle" },
      { kind: "label", at: point(88, 155), text: "S", color: ORANGE, align: "middle" },
      { kind: "arrow", from: point(145, 140), to: point(195, 140), color: PURPLE },
      ...[225, 250, 275].map((x) => ({
        kind: "ellipse" as const,
        center: point(x, 140),
        radiusX: 22,
        radiusY: 62,
        color: BLUE,
      })),
      {
        kind: "label",
        at: point(250, 225),
        text: "磁界変化 → 誘導電流",
        color: GREEN,
        align: "middle",
      },
      { kind: "segment", from: point(325, 85), to: point(545, 85), color: BASE },
      { kind: "segment", from: point(325, 65), to: point(325, 105), color: BASE },
      {
        kind: "functionPlot",
        samples: [point(330, 70), point(540, 70)],
        expression: "直流",
        color: GREEN,
      },
      { kind: "label", at: point(555, 72), text: "直流", color: GREEN },
      { kind: "segment", from: point(310, 230), to: point(550, 230), color: BASE },
      { kind: "functionPlot", samples: acSamples, expression: "交流", color: PURPLE },
      { kind: "label", at: point(555, 230), text: "交流", color: PURPLE },
      {
        kind: "label",
        at: point(300, 325),
        text: "発電機は電磁誘導を利用",
        color: BASE,
        align: "middle",
      },
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "circuit-measurement": { rule: seriesCircuitScene() },
  "series-current": { rule: seriesCircuitScene(), example: seriesCircuitScene() },
  "parallel-current": { rule: parallelCircuitScene(), example: parallelCircuitScene() },
  "series-voltage": { rule: seriesCircuitScene(), example: seriesCircuitScene() },
  "parallel-voltage": { rule: parallelCircuitScene(), example: parallelCircuitScene() },
  "current-voltage-graph": { rule: ivGraphScene(), example: ivGraphScene() },
  "ohms-law-resistance": { rule: ivGraphScene(), example: ivGraphScene() },
  "series-equivalent-resistance": { rule: resistanceScene(), example: resistanceScene() },
  "parallel-equivalent-resistance": { rule: resistanceScene(), example: resistanceScene() },
  "electric-power": { rule: powerEnergyScene(), example: powerEnergyScene() },
  "electric-energy": { rule: powerEnergyScene(), example: powerEnergyScene() },
  "static-electricity": { rule: staticElectricityScene(), example: staticElectricityScene() },
  "electrons-discharge-radiation": { rule: staticElectricityScene() },
  "magnetic-field-lines": { rule: magneticFieldScene(), example: magneticFieldScene() },
  "current-magnetic-field-coil": { rule: coilScene(), example: coilScene() },
  "force-on-current": { rule: forceScene(), example: forceScene() },
  "electromagnetic-induction-ac-dc": { rule: inductionScene(), example: inductionScene() },
};

export const getMiddleScience2LessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
