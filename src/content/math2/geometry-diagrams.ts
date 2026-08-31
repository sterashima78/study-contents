import {
  type CartesianTransform,
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

function formatTick(value: number) {
  return String(value).replace("-", "−");
}

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

function mathPoint(
  transform: CartesianTransform,
  at: DiagramPoint,
  color: string,
  radius = 5,
): DiagramElement {
  const p = transform.toDiagramPoint(at);
  return { kind: "point", x: p.x, y: p.y, radius, color };
}

function mathLabel(
  transform: CartesianTransform,
  at: DiagramPoint,
  text: string,
  color: string,
  options: { dx?: number; dy?: number; align?: "start" | "middle" | "end" } = {},
): DiagramElement {
  const p = transform.toDiagramPoint(at);
  return {
    kind: "label",
    at: { x: p.x + (options.dx ?? 0), y: p.y + (options.dy ?? 0) },
    text,
    color,
    align: options.align,
  };
}

function mathSegment(
  transform: CartesianTransform,
  from: DiagramPoint,
  to: DiagramPoint,
  color: string,
): DiagramElement {
  return {
    kind: "segment",
    from: transform.toDiagramPoint(from),
    to: transform.toDiagramPoint(to),
    color,
  };
}

function mathArrow(
  transform: CartesianTransform,
  from: DiagramPoint,
  to: DiagramPoint,
  color: string,
): DiagramElement {
  return {
    kind: "arrow",
    from: transform.toDiagramPoint(from),
    to: transform.toDiagramPoint(to),
    color,
  };
}

function mathCircle(
  transform: CartesianTransform,
  center: DiagramPoint,
  radius: number,
  color: string,
): DiagramElement {
  const p = transform.toDiagramPoint(center);
  return {
    kind: "ellipse",
    center: p,
    radiusX: radius * transform.scaleX,
    radiusY: radius * transform.scaleY,
    color,
  };
}

function createSectionFormulaScene(): DiagramScene {
  const width = 560;
  const height = 350;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: 0,
    xMax: 8,
    yMin: 0,
    yMax: 7,
    padding: 44,
  });
  const a = point(1, 2);
  const p = point(5, 4);
  const b = point(7, 5);

  return {
    width,
    height,
    ariaLabel:
      "座標平面でA1コンマ2、B7コンマ5を結ぶ線分上にP5コンマ4があり、AP対PBが2対1になる。PはAからBへ全体の3分の2進んだ位置であることを示す図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6]),
      mathSegment(transform, a, b, BLUE),
      mathPoint(transform, a, BLUE),
      mathPoint(transform, p, ORANGE),
      mathPoint(transform, b, BLUE),
      mathLabel(transform, a, "A(1,2)", BLUE, { dx: -8, dy: -12, align: "end" }),
      mathLabel(transform, p, "P(5,4)", ORANGE, { dx: 8, dy: -14, align: "start" }),
      mathLabel(transform, b, "B(7,5)", BLUE, { dx: 8, dy: -12, align: "start" }),
      mathArrow(transform, point(1.2, 1.2), point(5, 1.2), GREEN),
      mathArrow(transform, point(5, 1.2), point(6.9, 1.2), PURPLE),
      mathLabel(transform, point(3.1, 1.2), "AP：2", GREEN, { dy: -12 }),
      mathLabel(transform, point(5.95, 1.2), "PB：1", PURPLE, { dy: -12 }),
      mathLabel(transform, point(4.1, 6.3), "AからBへ 2/3 進む", AXIS_COLOR),
    ],
  };
}

function createLineEquationScene(): DiagramScene {
  const width = 540;
  const height = 350;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -1,
    xMax: 5,
    yMin: -1,
    yMax: 9,
    padding: 44,
  });
  const a = point(1, 2);
  const b = point(3, 6);
  const corner = point(3, 2);

  return {
    width,
    height,
    ariaLabel:
      "点A1コンマ2とB3コンマ6を通る直線y=2x。AからBへxが2増える間にyが4増え、傾きが4割る2イコール2になることを示す図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [1, 2, 3, 4], [2, 4, 6, 8]),
      sampleFunctionPlot({
        transform,
        fn: (x) => 2 * x,
        xMin: -0.4,
        xMax: 4.4,
        sampleCount: 121,
        expression: "y=2x",
        color: BLUE,
      }),
      mathPoint(transform, a, ORANGE),
      mathPoint(transform, b, ORANGE),
      mathSegment(transform, a, corner, GREEN),
      mathSegment(transform, corner, b, GREEN),
      mathLabel(transform, a, "A(1,2)", ORANGE, { dx: -8, dy: -12, align: "end" }),
      mathLabel(transform, b, "B(3,6)", ORANGE, { dx: 8, dy: -12, align: "start" }),
      mathLabel(transform, point(2, 2), "Δx=2", GREEN, { dy: 18 }),
      mathLabel(transform, point(3, 4), "Δy=4", GREEN, { dx: 12, align: "start" }),
      mathLabel(transform, point(3.6, 7.6), "傾き 4/2=2", BLUE, { align: "end" }),
    ],
  };
}

function createParallelPerpendicularRuleScene(): DiagramScene {
  const width = 560;
  const height = 350;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -4,
    xMax: 4,
    yMin: -5,
    yMax: 6,
    padding: 44,
  });

  return {
    width,
    height,
    ariaLabel:
      "傾き2の平行な2直線と、傾きマイナス1/2でそれらに垂直な直線を座標平面に示す。平行なら傾きが等しく、垂直なら傾きの積がマイナス1になる。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-3, -2, -1, 1, 2, 3], [-4, -2, 2, 4]),
      sampleFunctionPlot({
        transform,
        fn: (x) => 2 * x,
        xMin: -2.3,
        xMax: 2.8,
        sampleCount: 101,
        expression: "y=2x",
        color: BLUE,
      }),
      sampleFunctionPlot({
        transform,
        fn: (x) => 2 * x + 2,
        xMin: -3.2,
        xMax: 1.8,
        sampleCount: 101,
        expression: "y=2x+2",
        color: GREEN,
      }),
      sampleFunctionPlot({
        transform,
        fn: (x) => -0.5 * x,
        xMin: -3.8,
        xMax: 3.8,
        sampleCount: 101,
        expression: "y=−x/2",
        color: ORANGE,
      }),
      mathLabel(transform, point(1.7, 4.6), "傾き2", BLUE, { align: "end" }),
      mathLabel(transform, point(-0.4, 4.7), "同じ傾き2 → 平行", GREEN, { align: "end" }),
      mathLabel(transform, point(2.8, -1.4), "傾き−1/2 → 垂直", ORANGE, { align: "end" }),
      mathLabel(transform, point(0.2, -4), "2×(−1/2)=−1", PURPLE),
    ],
  };
}

function createParallelPerpendicularExampleScene(): DiagramScene {
  const width = 560;
  const height = 350;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -1,
    xMax: 4,
    yMin: -3,
    yMax: 8,
    padding: 44,
  });
  const given = point(2, 1);
  const intersection = point(1.7, 1.1);

  return {
    width,
    height,
    ariaLabel:
      "直線y=3x−4と、それに垂直で点2コンマ1を通る直線y=−x/3+5/3を示す図。2直線の傾き3とマイナス1/3の積はマイナス1。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [1, 2, 3], [-2, 2, 4, 6]),
      sampleFunctionPlot({
        transform,
        fn: (x) => 3 * x - 4,
        xMin: 0.4,
        xMax: 3.8,
        sampleCount: 101,
        expression: "y=3x−4",
        color: BLUE,
      }),
      sampleFunctionPlot({
        transform,
        fn: (x) => -x / 3 + 5 / 3,
        xMin: -0.8,
        xMax: 3.9,
        sampleCount: 101,
        expression: "y=−x/3+5/3",
        color: ORANGE,
      }),
      mathPoint(transform, given, GREEN),
      mathPoint(transform, intersection, PURPLE, 4.5),
      mathLabel(transform, given, "通る点 (2,1)", GREEN, { dx: 10, dy: 18, align: "start" }),
      mathLabel(transform, point(3.1, 5.3), "傾き3", BLUE, { align: "end" }),
      mathLabel(transform, point(3.1, 0.55), "傾き−1/3", ORANGE, { align: "end" }),
      mathLabel(transform, point(1.1, -2), "3×(−1/3)=−1", PURPLE),
    ],
  };
}

function createCircleEquationScene(): DiagramScene {
  const width = 560;
  const height = 390;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -4,
    xMax: 8,
    yMin: -9,
    yMax: 4,
    padding: 44,
  });
  const center = point(2, -3);
  const radiusEnd = point(7, -3);

  return {
    width,
    height,
    ariaLabel:
      "円(x−2)²+(y+3)²=25を座標平面に示す。中心は2コンママイナス3、半径は5で、円周上の各点は中心から同じ距離5にある。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-3, -1, 1, 2, 4, 6], [-8, -6, -4, -3, -2, 2]),
      mathCircle(transform, center, 5, BLUE),
      mathPoint(transform, center, ORANGE),
      mathPoint(transform, radiusEnd, GREEN, 4.5),
      mathSegment(transform, center, radiusEnd, GREEN),
      mathLabel(transform, center, "中心 (2,−3)", ORANGE, { dx: 10, dy: -12, align: "start" }),
      mathLabel(transform, point(4.5, -3), "半径 5", GREEN, { dy: -12 }),
      mathLabel(transform, point(5.7, 1.3), "(x−2)²+(y+3)²=25", BLUE, { align: "end" }),
    ],
  };
}

function createCircleLineRuleScene(): DiagramScene {
  const width = 560;
  const height = 370;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -4,
    xMax: 5,
    yMin: -4,
    yMax: 5,
    padding: 44,
  });
  const center = point(0, 0);

  return {
    width,
    height,
    ariaLabel:
      "中心原点半径3の円と直線を座標平面に示し、共有点が方程式を同時に満たす点であること、円の内側の点は中心からの距離が半径より小さいことを示す図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-3, -2, -1, 1, 2, 3, 4], [-3, -2, -1, 1, 2, 3, 4]),
      mathCircle(transform, center, 3, BLUE),
      sampleFunctionPlot({
        transform,
        fn: (x) => x + 1,
        xMin: -3.8,
        xMax: 3.8,
        sampleCount: 101,
        expression: "y=x+1",
        color: ORANGE,
      }),
      mathPoint(transform, point(1, 1), GREEN),
      mathPoint(transform, point(4, 1), PURPLE),
      mathLabel(transform, point(1, 1), "内側：距離<3", GREEN, {
        dx: 10,
        dy: -12,
        align: "start",
      }),
      mathLabel(transform, point(4, 1), "外側", PURPLE, { dx: -8, dy: -12, align: "end" }),
      mathLabel(transform, point(-2.3, 3.6), "共有点 = 連立方程式の解", AXIS_COLOR, {
        align: "start",
      }),
    ],
  };
}

function createCircleLineExampleScene(): DiagramScene {
  const width = 540;
  const height = 360;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -3.5,
    xMax: 3.5,
    yMin: -3.5,
    yMax: 4,
    padding: 44,
  });
  const center = point(0, 0);
  const p1 = point(-2, -1);
  const p2 = point(1, 2);

  return {
    width,
    height,
    ariaLabel:
      "円x²+y²=5と直線y=x+1がマイナス2コンママイナス1と1コンマ2の2点で交わる。連立して異なる2実数解を得ることが2共有点に対応する図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-3, -2, -1, 1, 2, 3], [-3, -2, -1, 1, 2, 3]),
      mathCircle(transform, center, Math.sqrt(5), BLUE),
      sampleFunctionPlot({
        transform,
        fn: (x) => x + 1,
        xMin: -3.3,
        xMax: 2.8,
        sampleCount: 101,
        expression: "y=x+1",
        color: ORANGE,
      }),
      mathPoint(transform, p1, GREEN),
      mathPoint(transform, p2, GREEN),
      mathLabel(transform, p1, "(−2,−1)", GREEN, { dx: -8, dy: 18, align: "end" }),
      mathLabel(transform, p2, "(1,2)", GREEN, { dx: 8, dy: -12, align: "start" }),
      mathLabel(transform, point(0, -3), "実数解2個 ↔ 共有点2個", PURPLE),
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "section-formula": {
    rule: createSectionFormulaScene(),
    example: createSectionFormulaScene(),
  },
  "line-equations": {
    rule: createLineEquationScene(),
    example: createLineEquationScene(),
  },
  "parallel-perpendicular-lines": {
    rule: createParallelPerpendicularRuleScene(),
    example: createParallelPerpendicularExampleScene(),
  },
  "circle-equations": {
    rule: createCircleEquationScene(),
    example: createCircleEquationScene(),
  },
  "circle-line-locus-region": {
    rule: createCircleLineRuleScene(),
    example: createCircleLineExampleScene(),
  },
};

export const getMath2GeometryLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
