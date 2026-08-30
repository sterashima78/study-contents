import type { AxesElement, DiagramPoint, FunctionPlotElement } from "./types";

export type CartesianViewport = {
  width: number;
  height: number;
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  padding?: number;
};

export type CartesianTransform = {
  viewport: Required<CartesianViewport>;
  scaleX: number;
  scaleY: number;
  toDiagramPoint: (point: DiagramPoint) => DiagramPoint;
  toMathPoint: (point: DiagramPoint) => DiagramPoint;
};

export type CartesianAxesOptions = {
  id?: string;
  color?: string;
  grid?: boolean;
  gridStep?: number;
};

export type FunctionPlotSamplingOptions = {
  transform: CartesianTransform;
  fn: (x: number) => number;
  xMin?: number;
  xMax?: number;
  sampleCount?: number;
  expression?: string;
  id?: string;
  color?: string;
};

export type QuadraticPlotOptions = Omit<FunctionPlotSamplingOptions, "fn" | "expression"> & {
  a: number;
  b?: number;
  c?: number;
  expression?: string;
};

export function createCartesianTransform(viewport: CartesianViewport): CartesianTransform {
  const padding = viewport.padding ?? 0;
  validateViewport(viewport, padding);

  const normalized: Required<CartesianViewport> = { ...viewport, padding };
  const drawableWidth = viewport.width - padding * 2;
  const drawableHeight = viewport.height - padding * 2;
  const scaleX = drawableWidth / (viewport.xMax - viewport.xMin);
  const scaleY = drawableHeight / (viewport.yMax - viewport.yMin);

  const toDiagramPoint = ({ x, y }: DiagramPoint): DiagramPoint => ({
    x: padding + (x - viewport.xMin) * scaleX,
    y: viewport.height - padding - (y - viewport.yMin) * scaleY,
  });

  const toMathPoint = ({ x, y }: DiagramPoint): DiagramPoint => ({
    x: viewport.xMin + (x - padding) / scaleX,
    y: viewport.yMin + (viewport.height - padding - y) / scaleY,
  });

  return { viewport: normalized, scaleX, scaleY, toDiagramPoint, toMathPoint };
}

export function createCartesianAxes(
  transform: CartesianTransform,
  options: CartesianAxesOptions = {},
): AxesElement {
  const { width, height, xMin, xMax, yMin, yMax, padding } = transform.viewport;
  const origin = transform.toDiagramPoint({
    x: clamp(0, xMin, xMax),
    y: clamp(0, yMin, yMax),
  });

  return {
    kind: "axes",
    id: options.id,
    color: options.color,
    origin,
    xMin: padding,
    xMax: width - padding,
    yMin: padding,
    yMax: height - padding,
    grid: options.grid,
    gridStep: options.gridStep,
  };
}

export function sampleFunctionPlot(options: FunctionPlotSamplingOptions): FunctionPlotElement {
  const { transform } = options;
  const xMin = options.xMin ?? transform.viewport.xMin;
  const xMax = options.xMax ?? transform.viewport.xMax;
  const sampleCount = options.sampleCount ?? 121;

  if (!Number.isFinite(xMin) || !Number.isFinite(xMax) || xMax <= xMin) {
    throw new Error("function plot の x 範囲は有限数で xMin < xMax にしてください。");
  }
  if (!Number.isInteger(sampleCount) || sampleCount < 2 || sampleCount > 5000) {
    throw new Error("function plot の sampleCount は 2 以上 5000 以下の整数にしてください。");
  }

  const samples = Array.from({ length: sampleCount }, (_, index) => {
    const x = xMin + ((xMax - xMin) * index) / (sampleCount - 1);
    const y = options.fn(x);
    if (!Number.isFinite(y)) {
      throw new Error(`function plot の計算結果が有限数ではありません: x=${x}`);
    }
    return transform.toDiagramPoint({ x, y });
  });

  return {
    kind: "functionPlot",
    id: options.id,
    color: options.color,
    expression: options.expression,
    samples,
  };
}

export function createQuadraticPlot(options: QuadraticPlotOptions): FunctionPlotElement {
  const b = options.b ?? 0;
  const c = options.c ?? 0;
  for (const [name, value] of [
    ["a", options.a],
    ["b", b],
    ["c", c],
  ] as const) {
    if (!Number.isFinite(value)) {
      throw new Error(`quadratic plot の ${name} は有限数にしてください。`);
    }
  }
  if (options.a === 0) throw new Error("quadratic plot の a は 0 以外にしてください。");

  return sampleFunctionPlot({
    transform: options.transform,
    xMin: options.xMin,
    xMax: options.xMax,
    sampleCount: options.sampleCount,
    id: options.id,
    color: options.color,
    expression: options.expression ?? formatQuadraticExpression(options.a, b, c),
    fn: (x) => options.a * x * x + b * x + c,
  });
}

function validateViewport(viewport: CartesianViewport, padding: number) {
  for (const [name, value] of Object.entries(viewport)) {
    if (name === "padding") continue;
    if (!Number.isFinite(value)) {
      throw new Error(`Cartesian viewport の ${name} は有限数にしてください。`);
    }
  }
  if (viewport.width <= 0 || viewport.height <= 0) {
    throw new Error("Cartesian viewport の width と height は正の数にしてください。");
  }
  if (viewport.xMax <= viewport.xMin || viewport.yMax <= viewport.yMin) {
    throw new Error("Cartesian viewport は min < max になる範囲を指定してください。");
  }
  if (
    !Number.isFinite(padding) ||
    padding < 0 ||
    padding * 2 >= Math.min(viewport.width, viewport.height)
  ) {
    throw new Error("Cartesian viewport の padding は描画領域が残る非負の有限数にしてください。");
  }
}

function formatQuadraticExpression(a: number, b: number, c: number) {
  const terms = [`${formatLeadingCoefficient(a)}x²`];
  if (b !== 0) terms.push(formatSignedTerm(b, "x"));
  if (c !== 0) terms.push(formatSignedTerm(c, ""));
  return `y = ${terms.join(" ")}`;
}

function formatLeadingCoefficient(value: number) {
  if (value === 1) return "";
  if (value === -1) return "−";
  return formatNumber(value);
}

function formatSignedTerm(value: number, suffix: string) {
  const sign = value < 0 ? "−" : "+";
  const absolute = Math.abs(value);
  const coefficient = suffix && absolute === 1 ? "" : formatNumber(absolute);
  return `${sign} ${coefficient}${suffix}`;
}

function formatNumber(value: number) {
  return String(value).replace("-", "−");
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
