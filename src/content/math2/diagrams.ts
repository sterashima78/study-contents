import {
  createCartesianAxes,
  createCartesianTransform,
  sampleFunctionPlot,
  type DiagramElement,
  type DiagramPoint,
  type DiagramScene,
} from "../../lib/diagram";
import type { MathLessonDiagrams } from "../math1/diagrams";

const AXIS_COLOR = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#047857";
const PURPLE = "#7c3aed";

const point = (x: number, y: number): DiagramPoint => ({ x, y });

function circlePoint(center: DiagramPoint, radius: number, degrees: number): DiagramPoint {
  const radians = (degrees * Math.PI) / 180;
  return point(center.x + radius * Math.cos(radians), center.y - radius * Math.sin(radians));
}

function createRadianRuleScene(): DiagramScene {
  const width = 520;
  const height = 330;
  const center = point(235, 185);
  const radius = 105;
  const end = circlePoint(center, radius, 180 / Math.PI);
  const right = circlePoint(center, radius, 0);

  return {
    width,
    height,
    ariaLabel:
      "半径rの円で、半径と同じ長さrの弧に対応する中心角が1ラジアンであることを示した図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "circle", center, radius, color: BLUE },
      { kind: "segment", from: center, to: right, color: GREEN },
      { kind: "segment", from: center, to: end, color: GREEN },
      {
        kind: "arc",
        center,
        radius,
        startAngle: 360 - 180 / Math.PI,
        endAngle: 360,
        color: ORANGE,
      },
      {
        kind: "arc",
        center,
        radius: 48,
        startAngle: 360 - 180 / Math.PI,
        endAngle: 360,
        color: PURPLE,
      },
      { kind: "point", x: center.x, y: center.y, radius: 4, color: AXIS_COLOR },
      { kind: "label", at: point(287, 205), text: "1 rad", color: PURPLE },
      { kind: "label", at: point(292, 176), text: "半径 r", color: GREEN },
      { kind: "label", at: point(324, 93), text: "弧の長さ r", color: ORANGE },
      { kind: "label", at: point(235, 310), text: "1周 = 2π rad、半周 = π rad", color: AXIS_COLOR },
    ],
  };
}

function createRadianExampleScene(): DiagramScene {
  const width = 520;
  const height = 320;
  const center = point(250, 180);
  const radius = 105;
  const angle = 150;
  const end = circlePoint(center, radius, angle);
  const right = circlePoint(center, radius, 0);

  return {
    width,
    height,
    ariaLabel: "150度が半周180度の5/6に当たり、5π/6ラジアンであることを円上で示した図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "circle", center, radius, color: BLUE },
      { kind: "segment", from: center, to: right, color: AXIS_COLOR },
      { kind: "segment", from: center, to: end, color: PURPLE },
      { kind: "label", at: point(194, 128), text: "150°", color: PURPLE },
      { kind: "label", at: point(250, 302), text: "150° / 180° = 5/6", color: AXIS_COLOR },
      { kind: "label", at: point(250, 40), text: "150° = 5π/6 rad", color: ORANGE },
    ],
  };
}

function createUnitCircleIdentityScene(mode: "rule" | "example"): DiagramScene {
  const width = 520;
  const height = 350;
  const center = point(250, 190);
  const radius = 112;
  const isExample = mode === "example";
  const degrees = isExample ? (Math.acos(3 / 5) * 180) / Math.PI : 42;
  const p = circlePoint(center, radius, degrees);
  const px = point(p.x, center.y);
  const py = point(center.x, p.y);

  return {
    width,
    height,
    ariaLabel: isExample
      ? "単位円の第1象限に点Pをとり、cosθが3/5ならsinθが4/5となる直角三角形を示した図。"
      : "単位円上の点Pのx座標がcosθ、y座標がsinθであり、半径1からcos²θ+sin²θ=1が得られることを示した図。",
    responsive: { minWidth: 450, allowHorizontalScroll: true },
    elements: [
      { kind: "circle", center, radius, color: BLUE },
      { kind: "arrow", from: point(82, center.y), to: point(430, center.y), color: AXIS_COLOR },
      { kind: "arrow", from: point(center.x, 320), to: point(center.x, 45), color: AXIS_COLOR },
      { kind: "segment", from: center, to: p, color: PURPLE },
      { kind: "segment", from: p, to: px, color: ORANGE },
      { kind: "segment", from: p, to: py, color: GREEN },
      { kind: "point", x: p.x, y: p.y, radius: 5, color: PURPLE },
      {
        kind: "label",
        at: point(p.x + 8, p.y - 12),
        text: isExample ? "P=(3/5, 4/5)" : "P=(cosθ, sinθ)",
        align: "start",
        color: PURPLE,
      },
      {
        kind: "label",
        at: point((center.x + p.x) / 2, center.y + 23),
        text: isExample ? "cosθ=3/5" : "cosθ",
        color: GREEN,
      },
      {
        kind: "label",
        at: point(p.x + 18, (center.y + p.y) / 2),
        text: isExample ? "sinθ=4/5" : "sinθ",
        align: "start",
        color: ORANGE,
      },
      { kind: "label", at: point(285, 148), text: "半径 1", color: PURPLE },
      {
        kind: "label",
        at: point(250, 338),
        text: isExample ? "(3/5)² + (4/5)² = 1" : "cos²θ + sin²θ = 1",
        color: AXIS_COLOR,
      },
    ],
  };
}

function createTrigGraphRuleScene(): DiagramScene {
  const width = 560;
  const height = 340;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -0.25,
    xMax: Math.PI * 2 + 0.25,
    yMin: -1.5,
    yMax: 1.5,
    padding: 42,
  });
  const elements: DiagramElement[] = [
    createCartesianAxes(transform, { color: AXIS_COLOR }),
    sampleFunctionPlot({
      transform,
      fn: Math.sin,
      xMin: 0,
      xMax: Math.PI * 2,
      sampleCount: 181,
      expression: "y=sin x",
      color: BLUE,
    }),
    sampleFunctionPlot({
      transform,
      fn: Math.cos,
      xMin: 0,
      xMax: Math.PI * 2,
      sampleCount: 181,
      expression: "y=cos x",
      color: ORANGE,
    }),
  ];

  for (const [value, label] of [
    [0, "0"],
    [Math.PI / 2, "π/2"],
    [Math.PI, "π"],
    [(Math.PI * 3) / 2, "3π/2"],
    [Math.PI * 2, "2π"],
  ] as const) {
    const at = transform.toDiagramPoint(point(value, 0));
    elements.push({ kind: "label", at: point(at.x, at.y + 23), text: label, color: AXIS_COLOR });
  }

  const sinLabel = transform.toDiagramPoint(point(Math.PI / 2, 1));
  const cosLabel = transform.toDiagramPoint(point(0.3, Math.cos(0.3)));
  elements.push(
    { kind: "label", at: point(sinLabel.x + 15, sinLabel.y - 10), text: "y=sin x", color: BLUE },
    { kind: "label", at: point(cosLabel.x + 30, cosLabel.y - 14), text: "y=cos x", color: ORANGE },
    { kind: "label", at: point(280, 326), text: "2π進むと同じ値へ戻る", color: AXIS_COLOR },
  );

  return {
    width,
    height,
    ariaLabel: "0から2πまでのy=sin xとy=cos xのグラフ。どちらも2π進むと同じ値へ戻る。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements,
  };
}

function createTrigGraphExampleScene(): DiagramScene {
  const width = 560;
  const height = 340;
  const period = (2 * Math.PI) / 3;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -0.15,
    xMax: period * 1.35,
    yMin: -2.7,
    yMax: 2.7,
    padding: 44,
  });
  const top = transform.toDiagramPoint(point(period / 4, 2));
  const p0 = transform.toDiagramPoint(point(0, -2.35));
  const p1 = transform.toDiagramPoint(point(period, -2.35));

  return {
    width,
    height,
    ariaLabel: "y=2sin3xのグラフを1周期分示し、振幅が2、周期が2π/3であることを示した図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      createCartesianAxes(transform, { color: AXIS_COLOR }),
      sampleFunctionPlot({
        transform,
        fn: (x) => 2 * Math.sin(3 * x),
        xMin: 0,
        xMax: period,
        sampleCount: 181,
        expression: "y=2sin3x",
        color: BLUE,
      }),
      { kind: "label", at: point(top.x + 28, top.y - 8), text: "最大値 2", color: ORANGE },
      { kind: "segment", from: p0, to: p1, color: PURPLE },
      { kind: "label", at: point((p0.x + p1.x) / 2, p0.y - 9), text: "周期 2π/3", color: PURPLE },
      { kind: "label", at: point(280, 40), text: "振幅 = 2", color: ORANGE },
    ],
  };
}

function createDoubleAngleEquationExampleScene(): DiagramScene {
  const width = 520;
  const height = 350;
  const center = point(255, 185);
  const radius = 112;
  const first = circlePoint(center, radius, 60);
  const second = circlePoint(center, radius, 120);
  const y = first.y;

  return {
    width,
    height,
    ariaLabel:
      "単位円でsinが√3/2になる角がπ/3と2π/3の2つあることを示し、sin2x=√3/2の解を考える図。",
    responsive: { minWidth: 450, allowHorizontalScroll: true },
    elements: [
      { kind: "circle", center, radius, color: BLUE },
      { kind: "arrow", from: point(82, center.y), to: point(432, center.y), color: AXIS_COLOR },
      { kind: "arrow", from: point(center.x, 318), to: point(center.x, 45), color: AXIS_COLOR },
      { kind: "segment", from: point(128, y), to: point(382, y), color: ORANGE },
      { kind: "segment", from: center, to: first, color: PURPLE },
      { kind: "segment", from: center, to: second, color: PURPLE },
      { kind: "point", x: first.x, y: first.y, radius: 5, color: PURPLE },
      { kind: "point", x: second.x, y: second.y, radius: 5, color: PURPLE },
      { kind: "label", at: point(first.x + 16, first.y - 10), text: "π/3", color: PURPLE },
      { kind: "label", at: point(second.x - 16, second.y - 10), text: "2π/3", color: PURPLE },
      { kind: "label", at: point(390, y + 5), text: "sin = √3/2", align: "start", color: ORANGE },
      { kind: "label", at: point(255, 338), text: "2x=π/3, 2π/3 → x=π/6, π/3", color: AXIS_COLOR },
    ],
  };
}

const lessonDiagrams: Record<string, MathLessonDiagrams> = {
  radians: {
    rule: createRadianRuleScene(),
    example: createRadianExampleScene(),
  },
  "trig-functions-identities": {
    rule: createUnitCircleIdentityScene("rule"),
    example: createUnitCircleIdentityScene("example"),
  },
  "trig-graphs": {
    rule: createTrigGraphRuleScene(),
    example: createTrigGraphExampleScene(),
  },
  "double-angle-equations": {
    example: createDoubleAngleEquationExampleScene(),
  },
};

export function getMath2LessonDiagrams(lessonKey: string): MathLessonDiagrams | undefined {
  return lessonDiagrams[lessonKey];
}
