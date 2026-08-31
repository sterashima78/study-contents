import {
  type CartesianTransform,
  createCartesianAxes,
  createCartesianTransform,
  type DiagramElement,
  type DiagramPoint,
  type DiagramScene,
  sampleFunctionPlot,
} from "../../../../lib/diagram";
import type { MathLessonDiagrams } from "../../../math1/diagrams";

const AXIS_COLOR = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#15803d";

const point = (x: number, y: number): DiagramPoint => ({ x, y });

function createAxes(
  transform: CartesianTransform,
  xTicks: number[],
  yTicks: number[],
): DiagramElement[] {
  const origin = transform.toDiagramPoint(point(0, 0));
  const { width, padding } = transform.viewport;
  const elements: DiagramElement[] = [
    createCartesianAxes(transform, { color: AXIS_COLOR, grid: true, gridStep: 1 }),
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
        text: String(value).replace("-", "−"),
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
        text: String(value).replace("-", "−"),
        align: "end",
        color: AXIS_COLOR,
      },
    );
  }

  return elements;
}

function createMeaningScene(): DiagramScene {
  const width = 500;
  const height = 340;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -3,
    xMax: 3,
    yMin: -5,
    yMax: 7,
    padding: 38,
  });

  return {
    width,
    height,
    ariaLabel: "一次関数yイコール2xプラス1のグラフ。y軸の1を通る右上がりの直線。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-2, -1, 1, 2], [-4, -2, 2, 4, 6]),
      sampleFunctionPlot({
        transform,
        fn: (x) => 2 * x + 1,
        xMin: -2.9,
        xMax: 2.9,
        sampleCount: 81,
        expression: "y = 2x + 1",
        color: BLUE,
      }),
      ...[-2, -1, 0, 1, 2].map((x): DiagramElement => {
        const at = transform.toDiagramPoint(point(x, 2 * x + 1));
        return { kind: "point", x: at.x, y: at.y, radius: 4, color: ORANGE };
      }),
      {
        kind: "label",
        at: transform.toDiagramPoint(point(1.5, 4.8)),
        text: "y=2x+1",
        align: "start",
        color: BLUE,
      },
    ],
  };
}

function createRateScene(): DiagramScene {
  const width = 500;
  const height = 340;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -1,
    xMax: 5,
    yMin: -1,
    yMax: 12,
    padding: 38,
  });
  const first = transform.toDiagramPoint(point(1, 5));
  const second = transform.toDiagramPoint(point(4, 11));
  const corner = transform.toDiagramPoint(point(4, 5));

  return {
    width,
    height,
    ariaLabel:
      "一次関数yイコール2xプラス3のグラフ上の2点1コンマ5と4コンマ11。xの増加量3、yの増加量6を示す直角の補助線。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [1, 2, 3, 4], [2, 4, 6, 8, 10]),
      sampleFunctionPlot({
        transform,
        fn: (x) => 2 * x + 3,
        xMin: -0.8,
        xMax: 4.4,
        sampleCount: 81,
        expression: "y = 2x + 3",
        color: BLUE,
      }),
      { kind: "point", x: first.x, y: first.y, radius: 5, color: ORANGE },
      { kind: "point", x: second.x, y: second.y, radius: 5, color: ORANGE },
      { kind: "segment", from: first, to: corner, color: GREEN },
      { kind: "segment", from: corner, to: second, color: GREEN },
      {
        kind: "label",
        at: { x: (first.x + corner.x) / 2, y: first.y + 18 },
        text: "Δx=3",
        color: GREEN,
      },
      {
        kind: "label",
        at: { x: corner.x + 12, y: (corner.y + second.y) / 2 },
        text: "Δy=6",
        align: "start",
        color: GREEN,
      },
    ],
  };
}

function createGraphScene(): DiagramScene {
  const width = 500;
  const height = 340;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -3,
    xMax: 3,
    yMin: -6,
    yMax: 5,
    padding: 38,
  });
  const intercept = transform.toDiagramPoint(point(0, -1));
  const next = transform.toDiagramPoint(point(1, 1));

  return {
    width,
    height,
    ariaLabel: "一次関数yイコール2xマイナス1のグラフ。切片0コンママイナス1と点1コンマ1を通る直線。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-2, -1, 1, 2], [-4, -2, 2, 4]),
      sampleFunctionPlot({
        transform,
        fn: (x) => 2 * x - 1,
        xMin: -2.4,
        xMax: 2.9,
        sampleCount: 81,
        expression: "y = 2x - 1",
        color: BLUE,
      }),
      { kind: "point", x: intercept.x, y: intercept.y, radius: 5, color: ORANGE },
      { kind: "point", x: next.x, y: next.y, radius: 5, color: ORANGE },
      {
        kind: "label",
        at: { x: intercept.x + 10, y: intercept.y + 22 },
        text: "切片 −1",
        align: "start",
        color: ORANGE,
      },
      {
        kind: "label",
        at: transform.toDiagramPoint(point(1.5, 2.5)),
        text: "傾き 2",
        align: "start",
        color: BLUE,
      },
    ],
  };
}

function createFromGraphScene(): DiagramScene {
  const width = 500;
  const height = 340;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -2,
    xMax: 4,
    yMin: -5,
    yMax: 7,
    padding: 38,
  });
  const p1 = transform.toDiagramPoint(point(0, -2));
  const p2 = transform.toDiagramPoint(point(2, 2));

  return {
    width,
    height,
    ariaLabel: "点0コンママイナス2と2コンマ2を通る一次関数yイコール2xマイナス2の直線。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-1, 1, 2, 3], [-4, -2, 2, 4, 6]),
      sampleFunctionPlot({
        transform,
        fn: (x) => 2 * x - 2,
        xMin: -1.4,
        xMax: 4,
        sampleCount: 81,
        expression: "y = 2x - 2",
        color: BLUE,
      }),
      { kind: "point", x: p1.x, y: p1.y, radius: 5, color: ORANGE },
      { kind: "point", x: p2.x, y: p2.y, radius: 5, color: ORANGE },
      {
        kind: "label",
        at: { x: p1.x + 10, y: p1.y + 20 },
        text: "(0,−2)",
        align: "start",
        color: ORANGE,
      },
      {
        kind: "label",
        at: { x: p2.x + 10, y: p2.y - 10 },
        text: "(2,2)",
        align: "start",
        color: ORANGE,
      },
    ],
  };
}

function createLinearEquationScene(): DiagramScene {
  const width = 500;
  const height = 340;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -2,
    xMax: 4,
    yMin: -4,
    yMax: 6,
    padding: 38,
  });

  return {
    width,
    height,
    ariaLabel: "二元一次方程式2xプラスyマイナス4イコール0をyイコールマイナス2xプラス4として表した直線。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-1, 1, 2, 3], [-2, 2, 4]),
      sampleFunctionPlot({
        transform,
        fn: (x) => -2 * x + 4,
        xMin: -0.9,
        xMax: 3.9,
        sampleCount: 81,
        expression: "2x + y - 4 = 0",
        color: BLUE,
      }),
      {
        kind: "label",
        at: transform.toDiagramPoint(point(1.8, 1.1)),
        text: "2x+y−4=0",
        align: "start",
        color: BLUE,
      },
    ],
  };
}

function createSystemsScene(): DiagramScene {
  const width = 500;
  const height = 340;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -1,
    xMax: 6,
    yMin: -1,
    yMax: 7,
    padding: 38,
  });
  const intersection = transform.toDiagramPoint(point(2, 3));

  return {
    width,
    height,
    ariaLabel:
      "直線yイコールxプラス1とyイコールマイナスxプラス5が点2コンマ3で交わるグラフ。交点が連立方程式の解を表す。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]),
      sampleFunctionPlot({
        transform,
        fn: (x) => x + 1,
        xMin: -0.8,
        xMax: 5.8,
        sampleCount: 81,
        expression: "y = x + 1",
        color: BLUE,
      }),
      sampleFunctionPlot({
        transform,
        fn: (x) => -x + 5,
        xMin: -0.8,
        xMax: 5.8,
        sampleCount: 81,
        expression: "y = -x + 5",
        color: GREEN,
      }),
      { kind: "point", x: intersection.x, y: intersection.y, radius: 6, color: ORANGE },
      {
        kind: "label",
        at: { x: intersection.x + 10, y: intersection.y - 12 },
        text: "(2,3)",
        align: "start",
        color: ORANGE,
      },
    ],
  };
}

function createApplicationScene(): DiagramScene {
  const width = 500;
  const height = 360;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: 0,
    xMax: 10,
    yMin: 15,
    yMax: 52,
    padding: 42,
  });

  return {
    width,
    height,
    ariaLabel: "加熱時間x分と水温y度の関係yイコール3xプラス20を表す右上がりの直線。8分後は44度。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [2, 4, 6, 8], [20, 30, 40, 50]),
      sampleFunctionPlot({
        transform,
        fn: (x) => 3 * x + 20,
        xMin: 0,
        xMax: 10,
        sampleCount: 81,
        expression: "y = 3x + 20",
        color: BLUE,
      }),
      {
        kind: "point",
        ...transform.toDiagramPoint(point(8, 44)),
        radius: 5,
        color: ORANGE,
      },
      {
        kind: "label",
        at: transform.toDiagramPoint(point(8.1, 44)),
        text: "8分後 44℃",
        align: "start",
        color: ORANGE,
      },
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "linear-function-meaning": { rule: createMeaningScene() },
  "linear-function-rate-of-change": { rule: createRateScene(), example: createRateScene() },
  "linear-function-graph": { rule: createGraphScene(), example: createGraphScene() },
  "linear-function-from-graph": { example: createFromGraphScene() },
  "linear-equation-as-function": { rule: createLinearEquationScene() },
  "systems-and-graphs": { rule: createSystemsScene(), example: createSystemsScene() },
  "linear-function-application": { example: createApplicationScene() },
};

export const getMiddleMath2LessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
