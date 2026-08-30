import {
  createCartesianAxes,
  createCartesianTransform,
  type DiagramElement,
  type DiagramPoint,
  type DiagramScene,
  sampleFunctionPlot,
} from "../../lib/diagram";
import type { MathLessonDiagrams } from "../math1/diagrams";

const AXIS_COLOR = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#047857";
const PURPLE = "#7c3aed";

const point = (x: number, y: number): DiagramPoint => ({ x, y });

function createProjectileScene(): DiagramScene {
  const width = 560;
  const height = 350;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -0.5,
    xMax: 10,
    yMin: -1,
    yMax: 6,
    padding: 46,
  });
  const origin = transform.toDiagramPoint(point(0, 0));
  const velocityEnd = transform.toDiagramPoint(point(2.4, 2.4));
  const vxEnd = transform.toDiagramPoint(point(2.4, 0));
  const vyEnd = transform.toDiagramPoint(point(0, 2.4));

  return {
    width,
    height,
    ariaLabel:
      "斜方投射の軌道を放物線で描き、初速度を水平成分と鉛直成分に分ける。水平方向は等速、鉛直方向は重力加速度を受けることを示す図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      createCartesianAxes(transform, { color: AXIS_COLOR }),
      sampleFunctionPlot({
        transform,
        fn: (x) => 1.05 * x - 0.105 * x * x,
        xMin: 0,
        xMax: 9.3,
        sampleCount: 181,
        color: BLUE,
        expression: "投射軌道",
      }),
      { kind: "arrow", from: origin, to: velocityEnd, color: PURPLE },
      { kind: "arrow", from: origin, to: vxEnd, color: GREEN },
      { kind: "arrow", from: origin, to: vyEnd, color: ORANGE },
      { kind: "arrow", from: point(430, 110), to: point(430, 175), color: ORANGE },
      { kind: "label", at: point(173, 176), text: "v₀", color: PURPLE },
      { kind: "label", at: point(170, 279), text: "v₀ cosθ", color: GREEN },
      { kind: "label", at: point(90, 160), text: "v₀ sinθ", color: ORANGE },
      { kind: "label", at: point(452, 145), text: "g", align: "start", color: ORANGE },
      { kind: "label", at: point(335, 314), text: "x方向: 加速度0", color: GREEN },
      { kind: "label", at: point(335, 335), text: "y方向: 加速度−g", color: ORANGE },
    ],
  };
}

function createTorqueScene(): DiagramScene {
  const width = 560;
  const height = 320;
  const pivot = point(180, 205);
  const forceX = 430;

  return {
    width,
    height,
    ariaLabel:
      "水平な棒の支点から距離ℓだけ離れた位置に垂直な力Fを加える。力のモーメントがFと腕の長さℓの積になることを示す図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(70, 170), to: point(490, 170), color: BLUE },
      {
        kind: "polygon",
        points: [point(150, 245), point(210, 245), pivot],
        color: AXIS_COLOR,
      },
      { kind: "point", x: pivot.x, y: pivot.y, radius: 5, color: PURPLE },
      { kind: "arrow", from: point(forceX, 105), to: point(forceX, 170), color: ORANGE },
      { kind: "segment", from: point(pivot.x, 220), to: point(forceX, 220), color: GREEN },
      { kind: "segment", from: point(pivot.x, 212), to: point(pivot.x, 228), color: GREEN },
      { kind: "segment", from: point(forceX, 212), to: point(forceX, 228), color: GREEN },
      { kind: "label", at: point(forceX + 14, 125), text: "F", align: "start", color: ORANGE },
      { kind: "label", at: point((pivot.x + forceX) / 2, 242), text: "腕の長さ ℓ", color: GREEN },
      { kind: "label", at: point(180, 278), text: "支点", color: PURPLE },
      { kind: "label", at: point(300, 50), text: "モーメント N = Fℓ", color: AXIS_COLOR },
      { kind: "label", at: point(300, 78), text: "ΣF=0 に加えて ΣN=0", color: AXIS_COLOR },
    ],
  };
}

function createCircularMotionScene(): DiagramScene {
  const width = 520;
  const height = 340;
  const center = point(245, 185);
  const radius = 105;
  const p = point(319, 111);

  return {
    width,
    height,
    ariaLabel:
      "等速円運動で、速度ベクトルは円の接線方向、向心加速度は中心方向を向くことを示した図。",
    responsive: { minWidth: 450, allowHorizontalScroll: true },
    elements: [
      { kind: "circle", center, radius, color: BLUE },
      { kind: "point", x: center.x, y: center.y, radius: 4, color: AXIS_COLOR },
      { kind: "point", x: p.x, y: p.y, radius: 5, color: PURPLE },
      { kind: "segment", from: center, to: p, color: GREEN },
      { kind: "arrow", from: p, to: point(379, 171), color: ORANGE },
      { kind: "arrow", from: p, to: point(274, 156), color: PURPLE },
      { kind: "label", at: point(391, 180), text: "速度 v", align: "start", color: ORANGE },
      { kind: "label", at: point(286, 136), text: "向心加速度 a", align: "end", color: PURPLE },
      { kind: "label", at: point(281, 152), text: "r", color: GREEN },
      { kind: "label", at: point(245, 205), text: "O", color: AXIS_COLOR },
      { kind: "label", at: point(260, 318), text: "v=rω,  a=v²/r=rω²", color: AXIS_COLOR },
    ],
  };
}

function createSimpleHarmonicScene(): DiagramScene {
  const width = 580;
  const height = 340;
  const center = point(160, 165);
  const radius = 90;
  const p = point(218, 96);
  const projection = point(p.x, center.y);
  const axisY = 255;
  const xPoint = point(395, axisY);

  return {
    width,
    height,
    ariaLabel:
      "等速円運動する点の水平射影が単振動になることを示す。単振動では変位xに対して復元加速度がつり合い位置Oへ向く。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      { kind: "circle", center, radius, color: BLUE },
      { kind: "segment", from: center, to: p, color: PURPLE },
      { kind: "segment", from: p, to: projection, color: GREEN },
      { kind: "point", x: p.x, y: p.y, radius: 5, color: PURPLE },
      { kind: "point", x: projection.x, y: projection.y, radius: 5, color: GREEN },
      { kind: "label", at: point(160, 290), text: "円運動の射影", color: AXIS_COLOR },
      { kind: "arrow", from: point(305, axisY), to: point(535, axisY), color: AXIS_COLOR },
      { kind: "point", x: 420, y: axisY, radius: 4, color: AXIS_COLOR },
      { kind: "point", x: xPoint.x, y: xPoint.y, radius: 5, color: PURPLE },
      { kind: "segment", from: point(420, axisY - 12), to: point(420, axisY + 12), color: AXIS_COLOR },
      { kind: "arrow", from: xPoint, to: point(417, axisY), color: ORANGE },
      { kind: "label", at: point(420, axisY + 28), text: "O", color: AXIS_COLOR },
      { kind: "label", at: point(397, axisY + 28), text: "x", color: PURPLE },
      { kind: "label", at: point(360, axisY - 18), text: "復元力・加速度", color: ORANGE },
      { kind: "label", at: point(420, 315), text: "a = −ω²x", color: AXIS_COLOR },
    ],
  };
}

function createWaveInterferenceScene(): DiagramScene {
  const width = 600;
  const height = 350;
  const s1 = point(95, 120);
  const s2 = point(95, 230);
  const p = point(315, 150);
  const opening = point(455, 175);

  return {
    width,
    height,
    ariaLabel:
      "二つの同位相波源S1とS2から観測点Pまでの経路差で干渉を判断する図と、狭い開口を通った波が回折して広がる図。",
    responsive: { minWidth: 520, allowHorizontalScroll: true },
    elements: [
      { kind: "point", x: s1.x, y: s1.y, radius: 6, color: BLUE },
      { kind: "point", x: s2.x, y: s2.y, radius: 6, color: BLUE },
      { kind: "point", x: p.x, y: p.y, radius: 6, color: PURPLE },
      { kind: "segment", from: s1, to: p, color: GREEN },
      { kind: "segment", from: s2, to: p, color: ORANGE },
      { kind: "label", at: point(73, 117), text: "S₁", align: "end", color: BLUE },
      { kind: "label", at: point(73, 235), text: "S₂", align: "end", color: BLUE },
      { kind: "label", at: point(330, 145), text: "P", align: "start", color: PURPLE },
      { kind: "label", at: point(190, 118), text: "r₁", color: GREEN },
      { kind: "label", at: point(190, 205), text: "r₂", color: ORANGE },
      { kind: "label", at: point(205, 300), text: "経路差 Δr=|r₂−r₁|", color: AXIS_COLOR },
      { kind: "segment", from: point(420, 70), to: point(420, 155), color: AXIS_COLOR },
      { kind: "segment", from: point(420, 195), to: point(420, 280), color: AXIS_COLOR },
      { kind: "segment", from: point(360, 175), to: opening, color: BLUE },
      { kind: "arc", center: opening, radius: 32, startAngle: 270, endAngle: 450, color: BLUE },
      { kind: "arc", center: opening, radius: 62, startAngle: 270, endAngle: 450, color: BLUE },
      { kind: "arc", center: opening, radius: 92, startAngle: 270, endAngle: 450, color: BLUE },
      { kind: "label", at: point(500, 300), text: "開口で回折", color: AXIS_COLOR },
    ],
  };
}

function createGeometricalOpticsScene(): DiagramScene {
  const width = 570;
  const height = 350;
  const boundaryY = 175;
  const hit = point(270, boundaryY);

  return {
    width,
    height,
    ariaLabel:
      "媒質の境界で光が屈折する様子を、法線、入射光、屈折光、入射角と屈折角で示す図。",
    responsive: { minWidth: 490, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(55, boundaryY), to: point(515, boundaryY), color: BLUE },
      { kind: "segment", from: point(hit.x, 45), to: point(hit.x, 305), color: AXIS_COLOR },
      { kind: "arrow", from: point(125, 65), to: hit, color: ORANGE },
      { kind: "arrow", from: hit, to: point(360, 305), color: GREEN },
      { kind: "arc", center: hit, radius: 48, startAngle: 220, endAngle: 270, color: PURPLE },
      { kind: "arc", center: hit, radius: 48, startAngle: 270, endAngle: 305, color: PURPLE },
      { kind: "label", at: point(92, 60), text: "入射光", color: ORANGE },
      { kind: "label", at: point(385, 300), text: "屈折光", color: GREEN },
      { kind: "label", at: point(280, 62), text: "法線", align: "start", color: AXIS_COLOR },
      { kind: "label", at: point(235, 132), text: "θ₁", color: PURPLE },
      { kind: "label", at: point(300, 232), text: "θ₂", color: PURPLE },
      { kind: "label", at: point(120, 157), text: "媒質1", color: AXIS_COLOR },
      { kind: "label", at: point(120, 202), text: "媒質2", color: AXIS_COLOR },
      { kind: "label", at: point(285, 330), text: "n₁ sinθ₁ = n₂ sinθ₂", color: AXIS_COLOR },
    ],
  };
}

function createLightInterferenceScene(): DiagramScene {
  const width = 600;
  const height = 350;
  const slit1 = point(220, 135);
  const slit2 = point(220, 215);
  const p = point(500, 105);

  return {
    width,
    height,
    ariaLabel:
      "ヤングの二重スリットで、二つのスリットからスクリーン上の点Pまでの経路差が干渉縞を決めることを示した図。",
    responsive: { minWidth: 520, allowHorizontalScroll: true },
    elements: [
      { kind: "arrow", from: point(55, 175), to: point(175, 175), color: BLUE },
      { kind: "segment", from: point(200, 45), to: point(200, 120), color: AXIS_COLOR },
      { kind: "segment", from: point(200, 150), to: point(200, 200), color: AXIS_COLOR },
      { kind: "segment", from: point(200, 230), to: point(200, 305), color: AXIS_COLOR },
      { kind: "point", x: slit1.x, y: slit1.y, radius: 4, color: PURPLE },
      { kind: "point", x: slit2.x, y: slit2.y, radius: 4, color: PURPLE },
      { kind: "segment", from: point(500, 45), to: point(500, 305), color: AXIS_COLOR },
      { kind: "point", x: p.x, y: p.y, radius: 5, color: ORANGE },
      { kind: "segment", from: slit1, to: p, color: GREEN },
      { kind: "segment", from: slit2, to: p, color: ORANGE },
      { kind: "label", at: point(120, 155), text: "単色光", color: BLUE },
      { kind: "label", at: point(232, 128), text: "S₁", align: "start", color: PURPLE },
      { kind: "label", at: point(232, 223), text: "S₂", align: "start", color: PURPLE },
      { kind: "label", at: point(512, 105), text: "P", align: "start", color: ORANGE },
      { kind: "label", at: point(355, 112), text: "r₁", color: GREEN },
      { kind: "label", at: point(355, 185), text: "r₂", color: ORANGE },
      { kind: "label", at: point(500, 325), text: "スクリーン", color: AXIS_COLOR },
      { kind: "label", at: point(315, 330), text: "Δr = mλ で明線", color: AXIS_COLOR },
    ],
  };
}

function createDcCircuitScene(): DiagramScene {
  const width = 600;
  const height = 350;

  return {
    width,
    height,
    ariaLabel:
      "電池と二つの並列抵抗からなる直流回路。分岐点で電流IがI1とI2に分かれ、再び合流することを示す図。",
    responsive: { minWidth: 520, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(100, 80), to: point(470, 80), color: AXIS_COLOR },
      { kind: "segment", from: point(470, 80), to: point(470, 270), color: AXIS_COLOR },
      { kind: "segment", from: point(470, 270), to: point(100, 270), color: AXIS_COLOR },
      { kind: "segment", from: point(100, 270), to: point(100, 215), color: AXIS_COLOR },
      { kind: "segment", from: point(100, 135), to: point(100, 80), color: AXIS_COLOR },
      {
        kind: "symbol",
        domain: "circuit",
        symbol: "battery",
        at: point(100, 175),
        width: 80,
        height: 50,
        rotation: 90,
        color: BLUE,
      },
      { kind: "segment", from: point(245, 80), to: point(245, 135), color: AXIS_COLOR },
      { kind: "segment", from: point(245, 215), to: point(245, 270), color: AXIS_COLOR },
      {
        kind: "symbol",
        domain: "circuit",
        symbol: "resistor",
        at: point(245, 175),
        width: 80,
        height: 42,
        rotation: 90,
        color: ORANGE,
      },
      { kind: "segment", from: point(365, 80), to: point(365, 135), color: AXIS_COLOR },
      { kind: "segment", from: point(365, 215), to: point(365, 270), color: AXIS_COLOR },
      {
        kind: "symbol",
        domain: "circuit",
        symbol: "resistor",
        at: point(365, 175),
        width: 80,
        height: 42,
        rotation: 90,
        color: GREEN,
      },
      { kind: "arrow", from: point(150, 80), to: point(205, 80), color: PURPLE },
      { kind: "arrow", from: point(245, 115), to: point(245, 150), color: ORANGE },
      { kind: "arrow", from: point(365, 115), to: point(365, 150), color: GREEN },
      { kind: "label", at: point(178, 65), text: "I", color: PURPLE },
      { kind: "label", at: point(268, 132), text: "I₁", align: "start", color: ORANGE },
      { kind: "label", at: point(388, 132), text: "I₂", align: "start", color: GREEN },
      { kind: "label", at: point(300, 325), text: "分岐点: I = I₁ + I₂", color: AXIS_COLOR },
    ],
  };
}

function createElectricFieldScene(): DiagramScene {
  const width = 540;
  const height = 340;
  const center = point(260, 170);

  return {
    width,
    height,
    ariaLabel:
      "正の点電荷Qの周囲に放射状の電界ができ、点Pに置いた正の試験電荷が電界と同じ向きの力を受けることを示す図。",
    responsive: { minWidth: 460, allowHorizontalScroll: true },
    elements: [
      { kind: "circle", center, radius: 20, color: PURPLE },
      { kind: "label", at: point(center.x, center.y + 5), text: "+Q", color: PURPLE },
      { kind: "arrow", from: point(285, 170), to: point(435, 170), color: BLUE },
      { kind: "arrow", from: point(235, 170), to: point(85, 170), color: BLUE },
      { kind: "arrow", from: point(260, 145), to: point(260, 55), color: BLUE },
      { kind: "arrow", from: point(260, 195), to: point(260, 285), color: BLUE },
      { kind: "arrow", from: point(280, 150), to: point(385, 65), color: BLUE },
      { kind: "arrow", from: point(240, 150), to: point(135, 65), color: BLUE },
      { kind: "arrow", from: point(280, 190), to: point(385, 275), color: BLUE },
      { kind: "arrow", from: point(240, 190), to: point(135, 275), color: BLUE },
      { kind: "point", x: 390, y: 170, radius: 5, color: ORANGE },
      { kind: "label", at: point(390, 150), text: "P", color: ORANGE },
      { kind: "label", at: point(365, 195), text: "E", color: BLUE },
      { kind: "label", at: point(270, 320), text: "E = F/q", color: AXIS_COLOR },
    ],
  };
}

function createMagneticFieldScene(): DiagramScene {
  const width = 540;
  const height = 340;
  const center = point(270, 170);

  return {
    width,
    height,
    ariaLabel:
      "上向きの直線電流の周囲に同心円状の磁界ができ、右ねじの規則で向きを決めることを示した模式図。",
    responsive: { minWidth: 460, allowHorizontalScroll: true },
    elements: [
      { kind: "arrow", from: point(center.x, 285), to: point(center.x, 55), color: ORANGE },
      { kind: "ellipse", center, radiusX: 75, radiusY: 28, color: BLUE },
      { kind: "ellipse", center, radiusX: 125, radiusY: 48, color: BLUE },
      { kind: "ellipse", center, radiusX: 175, radiusY: 68, color: BLUE },
      { kind: "arrow", from: point(345, 170), to: point(335, 155), color: PURPLE },
      { kind: "arrow", from: point(145, 170), to: point(155, 188), color: PURPLE },
      { kind: "label", at: point(290, 75), text: "電流 I", align: "start", color: ORANGE },
      { kind: "label", at: point(455, 150), text: "磁界 B", color: BLUE },
      { kind: "label", at: point(270, 320), text: "右ねじの規則で向きを決める", color: AXIS_COLOR },
    ],
  };
}

function createMagneticForceScene(): DiagramScene {
  const width = 560;
  const height = 340;
  const q = point(205, 190);

  const fieldMarks: DiagramElement[] = [];
  for (const x of [330, 380, 430, 480]) {
    for (const y of [95, 145, 195, 245]) {
      fieldMarks.push({
        kind: "label",
        at: point(x, y),
        text: "×",
        color: BLUE,
      });
    }
  }

  return {
    width,
    height,
    ariaLabel:
      "正電荷が右向きに運動し、磁界が紙面の奥向きのとき、ローレンツ力が上向きになることを示す図。速度、磁界、力は互いに直交する。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      ...fieldMarks,
      { kind: "circle", center: q, radius: 16, color: PURPLE },
      { kind: "label", at: point(q.x, q.y + 5), text: "+q", color: PURPLE },
      { kind: "arrow", from: point(225, q.y), to: point(310, q.y), color: GREEN },
      { kind: "arrow", from: q, to: point(q.x, 80), color: ORANGE },
      { kind: "label", at: point(270, q.y - 12), text: "v", color: GREEN },
      { kind: "label", at: point(q.x + 18, 105), text: "F", align: "start", color: ORANGE },
      { kind: "label", at: point(405, 285), text: "B: 紙面の奥向き", color: BLUE },
      { kind: "label", at: point(280, 320), text: "F = qvB sinθ", color: AXIS_COLOR },
    ],
  };
}

function createInductionScene(): DiagramScene {
  const width = 600;
  const height = 350;
  const coilCenter = point(430, 175);

  return {
    width,
    height,
    ariaLabel:
      "N極をコイルへ近づけるとコイルを貫く磁束が増え、その変化を打ち消す向きに誘導電流が流れることを示した模式図。",
    responsive: { minWidth: 520, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(70, 130), point(205, 130), point(205, 220), point(70, 220)],
        color: PURPLE,
      },
      { kind: "segment", from: point(137, 130), to: point(137, 220), color: AXIS_COLOR },
      { kind: "label", at: point(103, 180), text: "S", color: PURPLE },
      { kind: "label", at: point(171, 180), text: "N", color: PURPLE },
      { kind: "arrow", from: point(220, 175), to: point(310, 175), color: ORANGE },
      { kind: "label", at: point(265, 155), text: "近づける", color: ORANGE },
      { kind: "ellipse", center: coilCenter, radiusX: 70, radiusY: 110, color: BLUE },
      { kind: "ellipse", center: coilCenter, radiusX: 52, radiusY: 110, color: BLUE },
      { kind: "ellipse", center: coilCenter, radiusX: 34, radiusY: 110, color: BLUE },
      { kind: "arrow", from: point(360, 88), to: point(395, 70), color: GREEN },
      { kind: "label", at: point(430, 55), text: "誘導電流", color: GREEN },
      { kind: "arrow", from: point(305, 175), to: point(355, 175), color: PURPLE },
      { kind: "label", at: point(330, 195), text: "磁束 Φ 増加", color: PURPLE },
      { kind: "label", at: point(300, 325), text: "ε = −ΔΦ/Δt", color: AXIS_COLOR },
      { kind: "label", at: point(470, 315), text: "変化を妨げる向き", color: AXIS_COLOR },
    ],
  };
}

const lessonDiagrams: Record<string, MathLessonDiagrams> = {
  "projectile-motion": { rule: createProjectileScene() },
  "rigid-body-equilibrium": { rule: createTorqueScene() },
  "uniform-circular-motion": { rule: createCircularMotionScene() },
  "simple-harmonic-motion": { rule: createSimpleHarmonicScene() },
  "wave-interference-diffraction": { rule: createWaveInterferenceScene() },
  "geometrical-optics": { rule: createGeometricalOpticsScene() },
  "light-interference-diffraction": { rule: createLightInterferenceScene() },
  "dc-circuits": { rule: createDcCircuitScene() },
  "electric-field-coulomb": { rule: createElectricFieldScene() },
  "magnetic-field-current": { rule: createMagneticFieldScene() },
  "magnetic-force": { rule: createMagneticForceScene() },
  "electromagnetic-induction": { rule: createInductionScene() },
};

export function getPhysicsLessonDiagrams(lessonKey: string): MathLessonDiagrams | undefined {
  return lessonDiagrams[lessonKey];
}
