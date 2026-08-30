import {
  createCartesianAxes,
  createCartesianTransform,
  createQuadraticPlot,
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

function axisLabels(
  transform: ReturnType<typeof createCartesianTransform>,
): DiagramElement[] {
  const origin = transform.toDiagramPoint(point(0, 0));
  const { width, padding } = transform.viewport;
  return [
    createCartesianAxes(transform, { color: AXIS_COLOR }),
    { kind: "label", at: point(width - padding - 4, origin.y - 10), text: "x", align: "end", color: AXIS_COLOR },
    { kind: "label", at: point(origin.x + 12, padding + 14), text: "y", align: "start", color: AXIS_COLOR },
    { kind: "label", at: point(origin.x - 8, origin.y + 18), text: "O", align: "end", color: AXIS_COLOR },
  ];
}

function createTangentScene(mode: "rule" | "example"): DiagramScene {
  const width = 540;
  const height = 350;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -2,
    xMax: 3,
    yMin: -3,
    yMax: 7,
    padding: 42,
  });
  const contact = transform.toDiagramPoint(point(1, 1));
  const isExample = mode === "example";

  return {
    width,
    height,
    ariaLabel: isExample
      ? "放物線y=x²と点(1,1)で接する直線y=2x−1を描き、接線の傾きがf'(1)=2であることを示した図。"
      : "曲線y=f(x)の接点で接線を描き、その傾きがその点での導関数の値になることを示す図。",
    responsive: { minWidth: 470, allowHorizontalScroll: true },
    elements: [
      ...axisLabels(transform),
      createQuadraticPlot({ transform, a: 1, xMin: -1.8, xMax: 2.5, color: BLUE, sampleCount: 181 }),
      sampleFunctionPlot({
        transform,
        fn: (x) => 2 * x - 1,
        xMin: -0.8,
        xMax: 3,
        expression: "y=2x−1",
        color: ORANGE,
        sampleCount: 121,
      }),
      { kind: "point", x: contact.x, y: contact.y, radius: 5, color: PURPLE },
      {
        kind: "label",
        at: point(contact.x + 13, contact.y - 13),
        text: isExample ? "接点 (1,1)" : "接点 (a,f(a))",
        align: "start",
        color: PURPLE,
      },
      {
        kind: "label",
        at: point(335, 70),
        text: isExample ? "接線 y=2x−1" : "接線の傾き = f'(a)",
        color: ORANGE,
      },
      { kind: "label", at: point(140, 70), text: "y=f(x)", color: BLUE },
    ],
  };
}

function createMonotonicityScene(): DiagramScene {
  const width = 560;
  const height = 360;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -2.4,
    xMax: 2.4,
    yMin: -3.5,
    yMax: 3.5,
    padding: 44,
  });
  const max = transform.toDiagramPoint(point(-1, 2));
  const min = transform.toDiagramPoint(point(1, -2));
  const left = transform.toDiagramPoint(point(-1.75, 2.75));
  const middle = transform.toDiagramPoint(point(0, 0));
  const right = transform.toDiagramPoint(point(1.75, -2.75));

  return {
    width,
    height,
    ariaLabel:
      "f(x)=x³−3xのグラフ。x=-1で極大、x=1で極小となり、f'の符号が正、負、正と変化することを示した図。",
    responsive: { minWidth: 490, allowHorizontalScroll: true },
    elements: [
      ...axisLabels(transform),
      sampleFunctionPlot({
        transform,
        fn: (x) => x ** 3 - 3 * x,
        xMin: -2.1,
        xMax: 2.1,
        expression: "f(x)=x³−3x",
        color: BLUE,
        sampleCount: 201,
      }),
      { kind: "point", x: max.x, y: max.y, radius: 5, color: PURPLE },
      { kind: "point", x: min.x, y: min.y, radius: 5, color: PURPLE },
      { kind: "label", at: point(max.x - 10, max.y - 14), text: "極大 x=−1", align: "end", color: PURPLE },
      { kind: "label", at: point(min.x + 10, min.y + 24), text: "極小 x=1", align: "start", color: PURPLE },
      { kind: "arrow", from: point(left.x - 35, left.y + 25), to: point(left.x + 25, left.y - 15), color: GREEN },
      { kind: "arrow", from: point(middle.x - 30, middle.y - 20), to: point(middle.x + 30, middle.y + 20), color: ORANGE },
      { kind: "arrow", from: point(right.x - 25, right.y + 15), to: point(right.x + 35, right.y - 25), color: GREEN },
      { kind: "label", at: point(145, 326), text: "f'>0 増加", color: GREEN },
      { kind: "label", at: point(280, 326), text: "f'<0 減少", color: ORANGE },
      { kind: "label", at: point(420, 326), text: "f'>0 増加", color: GREEN },
    ],
  };
}

function createAreaScene(mode: "rule" | "example"): DiagramScene {
  const width = 550;
  const height = 350;
  const isExample = mode === "example";
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -0.2,
    xMax: 1.35,
    yMin: -0.15,
    yMax: 1.35,
    padding: 48,
  });
  const regionSegments: DiagramElement[] = [];
  for (let index = 1; index < 10; index += 1) {
    const x = index / 10;
    const top = transform.toDiagramPoint(point(x, x));
    const bottom = transform.toDiagramPoint(point(x, x * x));
    regionSegments.push({ kind: "segment", from: top, to: bottom, color: PURPLE });
  }

  return {
    width,
    height,
    ariaLabel: isExample
      ? "0から1の区間で直線y=xが放物線y=x²より上にあり、2曲線の間の縦の差x−x²を積分して面積を求めることを示した図。"
      : "同じxにおける上側の関数と下側の関数の縦の差を積み重ねると、2曲線間の面積になることを示した図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      ...axisLabels(transform),
      sampleFunctionPlot({ transform, fn: (x) => x, xMin: 0, xMax: 1.15, expression: "y=x", color: BLUE, sampleCount: 101 }),
      createQuadraticPlot({ transform, a: 1, xMin: 0, xMax: 1.15, expression: "y=x²", color: ORANGE, sampleCount: 101 }),
      ...regionSegments,
      { kind: "label", at: point(350, 88), text: "上: y=x", color: BLUE },
      { kind: "label", at: point(365, 205), text: "下: y=x²", color: ORANGE },
      { kind: "label", at: point(270, 170), text: "高さ = x−x²", color: PURPLE },
      {
        kind: "label",
        at: point(275, 326),
        text: isExample ? "S=∫₀¹(x−x²)dx=1/6" : "面積 = ∫(上−下)dx",
        color: AXIS_COLOR,
      },
    ],
  };
}

function createVolumeScene(): DiagramScene {
  const width = 580;
  const height = 350;
  const graphOrigin = point(70, 270);
  const lineEnd = point(285, 75);
  const sampleX = 220;
  const sampleY = 135;
  const diskCenter = point(440, 175);

  return {
    width,
    height,
    ariaLabel:
      "y=xを0から1までx軸のまわりに回転すると、各位置xで半径y=xの円板ができ、その断面積πx²を積み重ねて体積を求めることを示した模式図。",
    responsive: { minWidth: 510, allowHorizontalScroll: true },
    elements: [
      { kind: "arrow", from: graphOrigin, to: point(315, graphOrigin.y), color: AXIS_COLOR },
      { kind: "arrow", from: graphOrigin, to: point(graphOrigin.x, 45), color: AXIS_COLOR },
      { kind: "segment", from: graphOrigin, to: lineEnd, color: BLUE },
      { kind: "segment", from: point(sampleX, graphOrigin.y), to: point(sampleX, sampleY), color: ORANGE },
      { kind: "label", at: point(180, 155), text: "y=x", color: BLUE },
      { kind: "label", at: point(sampleX + 18, 205), text: "半径 y", align: "start", color: ORANGE },
      { kind: "label", at: point(185, 302), text: "0 ≤ x ≤ 1", color: AXIS_COLOR },
      { kind: "arrow", from: point(315, 175), to: point(355, 175), color: PURPLE },
      { kind: "ellipse", center: diskCenter, radiusX: 82, radiusY: 48, color: PURPLE },
      { kind: "segment", from: point(diskCenter.x, diskCenter.y), to: point(diskCenter.x, diskCenter.y - 48), color: ORANGE },
      { kind: "label", at: point(diskCenter.x + 14, diskCenter.y - 24), text: "半径 f(x)", align: "start", color: ORANGE },
      { kind: "label", at: point(diskCenter.x, 245), text: "断面積 A(x)=π{f(x)}²", color: PURPLE },
      { kind: "label", at: point(290, 330), text: "V=∫A(x)dx = π∫{f(x)}²dx", color: AXIS_COLOR },
    ],
  };
}

const lessonDiagrams: Record<string, MathLessonDiagrams> = {
  tangents: {
    rule: createTangentScene("rule"),
    example: createTangentScene("example"),
  },
  "monotonicity-concavity": {
    rule: createMonotonicityScene(),
    example: createMonotonicityScene(),
  },
  area: {
    rule: createAreaScene("rule"),
    example: createAreaScene("example"),
  },
  volume: {
    rule: createVolumeScene(),
    example: createVolumeScene(),
  },
};

export function getMath3LessonDiagrams(lessonKey: string): MathLessonDiagrams | undefined {
  return lessonDiagrams[lessonKey];
}
