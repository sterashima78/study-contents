import {
  createCartesianAxes,
  createCartesianTransform,
  type DiagramElement,
  type DiagramPoint,
  type DiagramScene,
  sampleFunctionPlot,
} from "../../../../lib/diagram";
import type { MathLessonDiagrams } from "../../../math1/diagrams";

const AXIS = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const point = (x: number, y: number): DiagramPoint => ({ x, y });

function parabolaScene(a = 1): DiagramScene {
  const transform = createCartesianTransform({
    width: 540,
    height: 360,
    padding: 45,
    xMin: -4,
    xMax: 4,
    yMin: -10,
    yMax: 18,
  });
  const plot = sampleFunctionPlot(transform, (x) => a * x * x, {
    xMin: -4,
    xMax: 4,
    samples: 100,
    color: a > 0 ? BLUE : ORANGE,
    expression: `y=${a}x²`,
  });
  const origin = transform.toDiagramPoint(point(0, 0));
  const elements: DiagramElement[] = [
    createCartesianAxes(transform, { color: AXIS, grid: true, gridStep: 1 }),
    plot,
    { kind: "label", at: { x: 500, y: origin.y - 10 }, text: "x", align: "end", color: AXIS },
    { kind: "label", at: { x: origin.x + 12, y: 40 }, text: "y", align: "start", color: AXIS },
    { kind: "label", at: { x: 420, y: 65 }, text: `y=${a}x²`, align: "middle", color: a > 0 ? BLUE : ORANGE },
  ];
  return {
    width: 540,
    height: 360,
    ariaLabel: `座標平面上に関数y=${a}x二乗の放物線を描き、原点を通りy軸に対称な形を示す図。`,
    responsive: { minWidth: 460, allowHorizontalScroll: true },
    elements,
  };
}

function compareParabolasScene(): DiagramScene {
  const transform = createCartesianTransform({
    width: 540,
    height: 360,
    padding: 45,
    xMin: -3,
    xMax: 3,
    yMin: -2,
    yMax: 20,
  });
  return {
    width: 540,
    height: 360,
    ariaLabel: "y=x二乗とy=3x二乗の二つの放物線を同じ座標平面に描き、比例定数の絶対値が大きい方が細く開くことを示す図。",
    responsive: { minWidth: 460, allowHorizontalScroll: true },
    elements: [
      createCartesianAxes(transform, { color: AXIS, grid: true, gridStep: 1 }),
      sampleFunctionPlot(transform, (x) => x * x, { xMin: -3, xMax: 3, samples: 90, color: BLUE, expression: "y=x²" }),
      sampleFunctionPlot(transform, (x) => 3 * x * x, { xMin: -3, xMax: 3, samples: 90, color: ORANGE, expression: "y=3x²" }),
      { kind: "label", at: point(440, 75), text: "y=3x²", color: ORANGE, align: "middle" },
      { kind: "label", at: point(440, 105), text: "y=x²", color: BLUE, align: "middle" },
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "quadratic-function-meaning": { rule: parabolaScene(1), example: parabolaScene(2) },
  "quadratic-function-expression": { example: parabolaScene(2) },
  "quadratic-function-change": { rule: parabolaScene(1) },
  "quadratic-function-graph": { rule: parabolaScene(1), example: parabolaScene(1) },
  "quadratic-function-coefficient": { rule: compareParabolasScene(), example: parabolaScene(-1) },
  "quadratic-function-rate": { rule: parabolaScene(1) },
  "quadratic-function-representations": { example: parabolaScene(-2) },
  "quadratic-function-application": { example: parabolaScene(2) },
};

export const getMiddleMath3FunctionLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
