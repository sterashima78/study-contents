import {
  createCartesianAxes,
  createCartesianTransform,
  createQuadraticPlot,
  type CartesianTransform,
  type DiagramElement,
  type DiagramPoint,
  type DiagramScene,
} from "../../lib/diagram";

export type MathLessonDiagrams = {
  rule?: DiagramScene;
  example?: DiagramScene;
  exampleSteps?: Record<number, DiagramScene>;
};

const AXIS_COLOR = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#047857";
const PURPLE = "#7c3aed";

const point = (x: number, y: number): DiagramPoint => ({ x, y });

function createAxisDecorations(
  transform: CartesianTransform,
  xTicks: number[],
  yTicks: number[],
): DiagramElement[] {
  const origin = transform.toDiagramPoint(point(0, 0));
  const { width, padding } = transform.viewport;
  const elements: DiagramElement[] = [
    createCartesianAxes(transform, { color: AXIS_COLOR }),
    {
      kind: "label",
      at: { x: width - padding - 4, y: origin.y - 10 },
      text: "x",
      align: "end",
      color: AXIS_COLOR,
    },
    {
      kind: "label",
      at: { x: origin.x + 12, y: padding + 14 },
      text: "y",
      align: "start",
      color: AXIS_COLOR,
    },
    {
      kind: "label",
      at: { x: origin.x - 8, y: origin.y + 18 },
      text: "O",
      align: "end",
      color: AXIS_COLOR,
    },
  ];

  for (const value of xTicks) {
    if (value === 0) continue;
    const at = transform.toDiagramPoint(point(value, 0));
    elements.push(
      {
        kind: "segment",
        from: { x: at.x, y: origin.y - 4 },
        to: { x: at.x, y: origin.y + 4 },
        color: AXIS_COLOR,
      },
      {
        kind: "label",
        at: { x: at.x, y: origin.y + 20 },
        text: formatTick(value),
        color: AXIS_COLOR,
      },
    );
  }

  for (const value of yTicks) {
    if (value === 0) continue;
    const at = transform.toDiagramPoint(point(0, value));
    elements.push(
      {
        kind: "segment",
        from: { x: origin.x - 4, y: at.y },
        to: { x: origin.x + 4, y: at.y },
        color: AXIS_COLOR,
      },
      {
        kind: "label",
        at: { x: origin.x - 10, y: at.y + 5 },
        text: formatTick(value),
        align: "end",
        color: AXIS_COLOR,
      },
    );
  }

  return elements;
}

function curveLabel(
  transform: CartesianTransform,
  mathPoint: DiagramPoint,
  text: string,
  color: string,
  options: { dx?: number; dy?: number; align?: "start" | "middle" | "end" } = {},
): DiagramElement {
  const at = transform.toDiagramPoint(mathPoint);
  return {
    kind: "label",
    at: { x: at.x + (options.dx ?? 0), y: at.y + (options.dy ?? 0) },
    text,
    color,
    align: options.align,
  };
}

function formatTick(value: number) {
  return String(value).replace("-", "−");
}

function createBasicParabolaComparison(): DiagramScene {
  const width = 520;
  const height = 360;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -2.5,
    xMax: 2.5,
    yMin: -5.5,
    yMax: 10.5,
    padding: 36,
  });

  return {
    width,
    height,
    ariaLabel:
      "y=x²、y=2x²、y=0.5x²、y=−x² の4本の放物線。係数の符号で開く向きが変わり、絶対値が大きいほど細くなる。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      ...createAxisDecorations(transform, [-2, -1, 1, 2], [-4, -2, 2, 4, 6, 8]),
      createQuadraticPlot({ transform, a: 0.5, color: GREEN, sampleCount: 181 }),
      createQuadraticPlot({ transform, a: 1, color: BLUE, sampleCount: 181 }),
      createQuadraticPlot({ transform, a: 2, color: ORANGE, sampleCount: 181 }),
      createQuadraticPlot({ transform, a: -1, color: PURPLE, sampleCount: 181 }),
      curveLabel(transform, point(1.58, 2 * 1.58 ** 2), "y=2x²", ORANGE, {
        dx: 8,
        dy: -6,
        align: "start",
      }),
      curveLabel(transform, point(2.08, 2.08 ** 2), "y=x²", BLUE, {
        dx: -6,
        dy: -7,
        align: "end",
      }),
      curveLabel(transform, point(2.15, 0.5 * 2.15 ** 2), "y=0.5x²", GREEN, {
        dx: -6,
        dy: 16,
        align: "end",
      }),
      curveLabel(transform, point(1.95, -(1.95 ** 2)), "y=−x²", PURPLE, {
        dx: -6,
        dy: -8,
        align: "end",
      }),
    ],
  };
}

function createDoubleParabolaExample(): DiagramScene {
  const width = 520;
  const height = 340;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -2.2,
    xMax: 2.2,
    yMin: -1.5,
    yMax: 9,
    padding: 36,
  });
  const left = transform.toDiagramPoint(point(-1, 2));
  const vertex = transform.toDiagramPoint(point(0, 0));
  const right = transform.toDiagramPoint(point(1, 2));

  return {
    width,
    height,
    ariaLabel:
      "y=2x² の放物線。頂点は原点で、点 (−1,2) と (1,2) を通り、y軸について対称である。",
    responsive: { minWidth: 460, allowHorizontalScroll: true },
    elements: [
      ...createAxisDecorations(transform, [-2, -1, 1, 2], [2, 4, 6, 8]),
      createQuadraticPlot({
        transform,
        a: 2,
        xMin: -2.05,
        xMax: 2.05,
        color: ORANGE,
        sampleCount: 161,
      }),
      { kind: "point", x: left.x, y: left.y, radius: 4.5, color: ORANGE },
      { kind: "point", x: vertex.x, y: vertex.y, radius: 4.5, color: ORANGE },
      { kind: "point", x: right.x, y: right.y, radius: 4.5, color: ORANGE },
      {
        kind: "label",
        at: { x: left.x - 8, y: left.y - 10 },
        text: "(−1,2)",
        align: "end",
        color: ORANGE,
      },
      {
        kind: "label",
        at: { x: right.x + 8, y: right.y - 10 },
        text: "(1,2)",
        align: "start",
        color: ORANGE,
      },
      curveLabel(transform, point(1.55, 2 * 1.55 ** 2), "y=2x²", ORANGE, {
        dx: 8,
        dy: -8,
        align: "start",
      }),
      {
        kind: "label",
        at: { x: vertex.x + 12, y: vertex.y - 10 },
        text: "頂点 (0,0)",
        align: "start",
        color: ORANGE,
      },
    ],
  };
}

const lessonDiagrams: Record<string, MathLessonDiagrams> = {
  "basic-parabola": {
    rule: createBasicParabolaComparison(),
    example: createDoubleParabolaExample(),
  },
};

export function getMath1LessonDiagrams(lessonKey: string): MathLessonDiagrams | undefined {
  return lessonDiagrams[lessonKey];
}
