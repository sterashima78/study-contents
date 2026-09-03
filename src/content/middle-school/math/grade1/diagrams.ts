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

const point = (x: number, y: number): DiagramPoint => ({ x, y });

function numberLineX(value: number, min: number, max: number, left: number, right: number) {
  if (!(max > min)) throw new Error("number line scale requires max > min");
  return left + ((value - min) / (max - min)) * (right - left);
}

function createNumberLineElements(
  min: number,
  max: number,
  left: number,
  right: number,
  y: number,
): DiagramElement[] {
  const elements: DiagramElement[] = [
    { kind: "segment", from: point(left, y), to: point(right, y), color: AXIS_COLOR },
    { kind: "segment", from: point(left, y), to: point(left + 10, y - 6), color: AXIS_COLOR },
    { kind: "segment", from: point(left, y), to: point(left + 10, y + 6), color: AXIS_COLOR },
    { kind: "segment", from: point(right, y), to: point(right - 10, y - 6), color: AXIS_COLOR },
    { kind: "segment", from: point(right, y), to: point(right - 10, y + 6), color: AXIS_COLOR },
  ];

  for (let value = min; value <= max; value += 1) {
    const x = numberLineX(value, min, max, left, right);
    elements.push(
      {
        kind: "segment",
        from: point(x, y - 6),
        to: point(x, y + 6),
        color: AXIS_COLOR,
      },
      {
        kind: "label",
        at: point(x, y + 25),
        text: String(value).replace("-", "−"),
        color: AXIS_COLOR,
      },
    );
  }

  return elements;
}

function createSignedNumberLineScene(): DiagramScene {
  const width = 520;
  const height = 230;
  const min = -5;
  const max = 5;
  const left = 55;
  const right = 465;
  const y = 130;
  const negativeX = numberLineX(-3, min, max, left, right);
  const zeroX = numberLineX(0, min, max, left, right);
  const positiveX = numberLineX(3, min, max, left, right);

  return {
    width,
    height,
    ariaLabel:
      "0を基準に、左側へ負の数、右側へ正の数が並ぶ数直線。マイナス3は0の左、プラス3は0の右にある。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      ...createNumberLineElements(min, max, left, right, y),
      { kind: "point", x: negativeX, y, radius: 5, color: BLUE },
      { kind: "point", x: zeroX, y, radius: 5, color: AXIS_COLOR },
      { kind: "point", x: positiveX, y, radius: 5, color: ORANGE },
      {
        kind: "label",
        at: point(145, 54),
        text: "負の数",
        color: BLUE,
      },
      {
        kind: "label",
        at: point(zeroX, 78),
        text: "0を基準",
        color: AXIS_COLOR,
      },
      {
        kind: "label",
        at: point(375, 54),
        text: "正の数",
        color: ORANGE,
      },
      {
        kind: "label",
        at: point(145, 82),
        text: "← 小さい数",
        color: AXIS_COLOR,
      },
      {
        kind: "label",
        at: point(375, 82),
        text: "大きい数 →",
        color: AXIS_COLOR,
      },
    ],
  };
}

function createAbsoluteValueNumberLineScene(): DiagramScene {
  const width = 520;
  const height = 235;
  const min = -6;
  const max = 6;
  const left = 45;
  const right = 475;
  const y = 150;
  const distanceY = 78;
  const negativeX = numberLineX(-5, min, max, left, right);
  const zeroX = numberLineX(0, min, max, left, right);
  const positiveX = numberLineX(5, min, max, left, right);

  return {
    width,
    height,
    ariaLabel:
      "数直線上でマイナス5とプラス5を示し、どちらも0からの距離が5であることを示す。右にある数ほど大きい。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      ...createNumberLineElements(min, max, left, right, y),
      { kind: "segment", from: point(negativeX, distanceY), to: point(zeroX, distanceY), color: BLUE },
      { kind: "segment", from: point(negativeX, distanceY - 7), to: point(negativeX, distanceY + 7), color: BLUE },
      { kind: "segment", from: point(zeroX, distanceY - 7), to: point(zeroX, distanceY + 7), color: BLUE },
      {
        kind: "label",
        at: point((negativeX + zeroX) / 2, 53),
        text: "0からの距離 5",
        color: BLUE,
      },
      { kind: "segment", from: point(zeroX, distanceY), to: point(positiveX, distanceY), color: ORANGE },
      { kind: "segment", from: point(positiveX, distanceY - 7), to: point(positiveX, distanceY + 7), color: ORANGE },
      {
        kind: "label",
        at: point((zeroX + positiveX) / 2, 53),
        text: "0からの距離 5",
        color: ORANGE,
      },
      { kind: "point", x: negativeX, y, radius: 5, color: BLUE },
      { kind: "point", x: zeroX, y, radius: 5, color: AXIS_COLOR },
      { kind: "point", x: positiveX, y, radius: 5, color: ORANGE },
    ],
  };
}

function createAbsoluteValueExampleScene(): DiagramScene {
  const width = 520;
  const height = 235;
  const min = -7;
  const max = 2;
  const left = 50;
  const right = 470;
  const y = 150;
  const distanceY = 82;
  const negativeX = numberLineX(-6, min, max, left, right);
  const zeroX = numberLineX(0, min, max, left, right);

  return {
    width,
    height,
    ariaLabel: "数直線上のマイナス6と0の間の距離が6なので、マイナス6の絶対値は6である。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      ...createNumberLineElements(min, max, left, right, y),
      { kind: "segment", from: point(negativeX, distanceY), to: point(zeroX, distanceY), color: ORANGE },
      { kind: "segment", from: point(negativeX, distanceY - 8), to: point(negativeX, distanceY + 8), color: ORANGE },
      { kind: "segment", from: point(zeroX, distanceY - 8), to: point(zeroX, distanceY + 8), color: ORANGE },
      {
        kind: "label",
        at: point((negativeX + zeroX) / 2, 55),
        text: "0からの距離 6",
        color: ORANGE,
      },
      {
        kind: "label",
        at: point((negativeX + zeroX) / 2, 28),
        text: "|−6| = 6",
        color: AXIS_COLOR,
      },
      { kind: "point", x: negativeX, y, radius: 5, color: ORANGE },
      { kind: "point", x: zeroX, y, radius: 5, color: AXIS_COLOR },
    ],
  };
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

function createCoordinatesScene(): DiagramScene {
  const width = 500;
  const height = 340;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -5,
    xMax: 5,
    yMin: -5,
    yMax: 5,
    padding: 38,
  });
  const p = transform.toDiagramPoint(point(-2, 3));

  return {
    width,
    height,
    ariaLabel: "座標平面上の点Pマイナス2コンマ3。原点から左へ2、上へ3の位置にある。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-4, -2, 2, 4], [-4, -2, 2, 4]),
      { kind: "point", x: p.x, y: p.y, radius: 5, color: ORANGE },
      {
        kind: "label",
        at: { x: p.x - 10, y: p.y - 12 },
        text: "P(−2, 3)",
        align: "end",
        color: ORANGE,
      },
      {
        kind: "segment",
        from: p,
        to: transform.toDiagramPoint(point(-2, 0)),
        color: ORANGE,
      },
      {
        kind: "segment",
        from: p,
        to: transform.toDiagramPoint(point(0, 3)),
        color: ORANGE,
      },
    ],
  };
}

function createProportionScene(): DiagramScene {
  const width = 500;
  const height = 340;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -3,
    xMax: 3,
    yMin: -6,
    yMax: 6,
    padding: 38,
  });

  return {
    width,
    height,
    ariaLabel: "比例yイコール2xのグラフ。原点を通る右上がりの直線。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-2, -1, 1, 2], [-4, -2, 2, 4]),
      sampleFunctionPlot({
        transform,
        fn: (x) => 2 * x,
        xMin: -2.9,
        xMax: 2.9,
        sampleCount: 81,
        expression: "y = 2x",
        color: BLUE,
      }),
      ...[-2, -1, 0, 1, 2].map((x): DiagramElement => {
        const at = transform.toDiagramPoint(point(x, 2 * x));
        return { kind: "point", x: at.x, y: at.y, radius: 4, color: ORANGE };
      }),
      {
        kind: "label",
        at: transform.toDiagramPoint(point(2.1, 4.5)),
        text: "y=2x",
        align: "start",
        color: BLUE,
      },
    ],
  };
}

function createInverseProportionScene(): DiagramScene {
  const width = 500;
  const height = 360;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -6,
    xMax: 6,
    yMin: -12,
    yMax: 12,
    padding: 38,
  });

  return {
    width,
    height,
    ariaLabel: "反比例yイコール6割るxのグラフ。第1象限と第3象限に二つの曲線がある。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-4, -2, 2, 4], [-8, -4, 4, 8]),
      sampleFunctionPlot({
        transform,
        fn: (x) => 6 / x,
        xMin: -5.8,
        xMax: -0.5,
        sampleCount: 121,
        expression: "y = 6/x",
        color: BLUE,
      }),
      sampleFunctionPlot({
        transform,
        fn: (x) => 6 / x,
        xMin: 0.5,
        xMax: 5.8,
        sampleCount: 121,
        expression: "y = 6/x",
        color: BLUE,
      }),
      {
        kind: "label",
        at: transform.toDiagramPoint(point(3.2, 3.4)),
        text: "y=6/x",
        align: "start",
        color: BLUE,
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
    xMax: 13,
    yMin: 0,
    yMax: 13,
    padding: 42,
  });
  const samplePoints = [2, 3, 4, 6, 8, 12];

  return {
    width,
    height,
    ariaLabel:
      "面積24平方センチメートルの長方形の横xと縦yの関係yイコール24割るx。表の代表値に対応する点が反比例の曲線上に並ぶ。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [2, 4, 6, 8, 10, 12], [2, 4, 6, 8, 10, 12]),
      sampleFunctionPlot({
        transform,
        fn: (x) => 24 / x,
        xMin: 1.9,
        xMax: 12.5,
        sampleCount: 151,
        expression: "y = 24/x",
        color: BLUE,
      }),
      ...samplePoints.map((x): DiagramElement => {
        const at = transform.toDiagramPoint(point(x, 24 / x));
        return { kind: "point", x: at.x, y: at.y, radius: 4, color: ORANGE };
      }),
      {
        kind: "label",
        at: transform.toDiagramPoint(point(7.1, 4.5)),
        text: "y=24/x",
        align: "start",
        color: BLUE,
      },
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "positive-negative-meaning": { rule: createSignedNumberLineScene() },
  "number-line-absolute-value": {
    rule: createAbsoluteValueNumberLineScene(),
    example: createAbsoluteValueExampleScene(),
  },
  coordinates: { rule: createCoordinatesScene() },
  "proportion-graph": { rule: createProportionScene(), example: createProportionScene() },
  "inverse-proportion-graph": {
    rule: createInverseProportionScene(),
    example: createInverseProportionScene(),
  },
  "function-representations-application": { example: createApplicationScene() },
};

export const getMiddleMath1LessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
