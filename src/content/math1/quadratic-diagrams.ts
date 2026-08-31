import {
  type CartesianTransform,
  createCartesianAxes,
  createCartesianTransform,
  type DiagramElement,
  type DiagramPoint,
  type DiagramScene,
  sampleFunctionPlot,
} from "../../lib/diagram";
import type { MathLessonDiagrams } from "./diagrams";

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

function quadraticPlot(options: {
  transform: CartesianTransform;
  a: number;
  p: number;
  q: number;
  xMin: number;
  xMax: number;
  expression: string;
  color: string;
}): DiagramElement {
  return sampleFunctionPlot({
    transform: options.transform,
    fn: (x) => options.a * (x - options.p) ** 2 + options.q,
    xMin: options.xMin,
    xMax: options.xMax,
    sampleCount: 181,
    expression: options.expression,
    color: options.color,
  });
}

function mathLabel(
  transform: CartesianTransform,
  at: DiagramPoint,
  text: string,
  color: string,
  options: { dx?: number; dy?: number; align?: "start" | "middle" | "end" } = {},
): DiagramElement {
  const diagramPoint = transform.toDiagramPoint(at);
  return {
    kind: "label",
    at: {
      x: diagramPoint.x + (options.dx ?? 0),
      y: diagramPoint.y + (options.dy ?? 0),
    },
    text,
    color,
    align: options.align,
  };
}

function mathPoint(
  transform: CartesianTransform,
  at: DiagramPoint,
  color: string,
  radius = 5,
): DiagramElement {
  const diagramPoint = transform.toDiagramPoint(at);
  return { kind: "point", x: diagramPoint.x, y: diagramPoint.y, radius, color };
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

function createVertexFormRuleScene(): DiagramScene {
  const width = 560;
  const height = 370;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -2.5,
    xMax: 5.5,
    yMin: -2.5,
    yMax: 9,
    padding: 42,
  });

  return {
    width,
    height,
    ariaLabel:
      "基準の放物線y=x²を右へ2、上へ1平行移動するとy=(x−2)²+1になる。頂点は原点から2コンマ1へ移り、対称軸はx=2になることを示す図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-2, -1, 1, 2, 3, 4, 5], [-2, 1, 2, 4, 6, 8]),
      quadraticPlot({
        transform,
        a: 1,
        p: 0,
        q: 0,
        xMin: -2.4,
        xMax: 2.9,
        expression: "y=x²",
        color: BLUE,
      }),
      quadraticPlot({
        transform,
        a: 1,
        p: 2,
        q: 1,
        xMin: -0.8,
        xMax: 4.8,
        expression: "y=(x−2)²+1",
        color: ORANGE,
      }),
      mathPoint(transform, point(0, 0), BLUE),
      mathPoint(transform, point(2, 1), ORANGE),
      mathSegment(transform, point(2, -2), point(2, 8.2), PURPLE),
      mathArrow(transform, point(0, 0), point(2, 0), GREEN),
      mathArrow(transform, point(2, 0), point(2, 1), GREEN),
      mathLabel(transform, point(0.8, 0), "右へ2", GREEN, { dy: -14 }),
      mathLabel(transform, point(2, 0.45), "上へ1", GREEN, { dx: 12, align: "start" }),
      mathLabel(transform, point(2, 1), "頂点 (2,1)", ORANGE, {
        dx: 12,
        dy: -12,
        align: "start",
      }),
      mathLabel(transform, point(2, 7.3), "軸 x=2", PURPLE, { dx: 10, align: "start" }),
      mathLabel(transform, point(-1.7, 3.1), "y=x²", BLUE, { dx: -4, align: "end" }),
      mathLabel(transform, point(4.4, 6.6), "y=(x−2)²+1", ORANGE, {
        dx: -5,
        align: "end",
      }),
    ],
  };
}

function createVertexFormExampleScene(): DiagramScene {
  const width = 560;
  const height = 380;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -1.5,
    xMax: 6.5,
    yMin: -7,
    yMax: 10,
    padding: 42,
  });

  return {
    width,
    height,
    ariaLabel:
      "y=2x²を右へ3、下へ5平行移動したy=2(x−3)²−5のグラフ。頂点は3コンママイナス5、軸はx=3。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-1, 1, 2, 3, 4, 5, 6], [-6, -4, -2, 2, 4, 6, 8]),
      quadraticPlot({
        transform,
        a: 2,
        p: 0,
        q: 0,
        xMin: -1.4,
        xMax: 2.2,
        expression: "y=2x²",
        color: BLUE,
      }),
      quadraticPlot({
        transform,
        a: 2,
        p: 3,
        q: -5,
        xMin: 0.4,
        xMax: 5.6,
        expression: "y=2(x−3)²−5",
        color: ORANGE,
      }),
      mathPoint(transform, point(0, 0), BLUE),
      mathPoint(transform, point(3, -5), ORANGE),
      mathSegment(transform, point(3, -6.4), point(3, 9), PURPLE),
      mathArrow(transform, point(0, 0), point(3, 0), GREEN),
      mathArrow(transform, point(3, 0), point(3, -5), GREEN),
      mathLabel(transform, point(1.35, 0), "右へ3", GREEN, { dy: -14 }),
      mathLabel(transform, point(3, -2.3), "下へ5", GREEN, { dx: 12, align: "start" }),
      mathLabel(transform, point(3, -5), "頂点 (3,−5)", ORANGE, {
        dx: 12,
        dy: -10,
        align: "start",
      }),
      mathLabel(transform, point(3, 8), "軸 x=3", PURPLE, { dx: 10, align: "start" }),
      mathLabel(transform, point(5.25, 5.2), "y=2(x−3)²−5", ORANGE, { align: "end" }),
    ],
  };
}

function createCompletingSquareExampleScene(): DiagramScene {
  const width = 540;
  const height = 360;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -1,
    xMax: 7,
    yMin: -6,
    yMax: 10,
    padding: 42,
  });

  return {
    width,
    height,
    ariaLabel:
      "y=x²−6x+5を平方完成したy=(x−3)²−4の放物線。頂点3コンママイナス4と対称軸x=3が式から読めることを示す図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [1, 2, 3, 4, 5, 6], [-4, -2, 2, 4, 6, 8]),
      quadraticPlot({
        transform,
        a: 1,
        p: 3,
        q: -4,
        xMin: -0.7,
        xMax: 6.7,
        expression: "y=(x−3)²−4",
        color: ORANGE,
      }),
      mathPoint(transform, point(3, -4), ORANGE),
      mathSegment(transform, point(3, -5.4), point(3, 9), PURPLE),
      mathLabel(transform, point(3, -4), "頂点 (3,−4)", ORANGE, {
        dx: 12,
        dy: -12,
        align: "start",
      }),
      mathLabel(transform, point(3, 7.7), "軸 x=3", PURPLE, { dx: 10, align: "start" }),
      mathLabel(transform, point(5.8, 3.7), "y=(x−3)²−4", ORANGE, { align: "end" }),
      mathLabel(transform, point(0.8, 8.5), "平方完成 → 頂点と軸が見える", GREEN, {
        align: "start",
      }),
    ],
  };
}

function createExtremaRuleScene(): DiagramScene {
  const width = 540;
  const height = 350;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -2,
    xMax: 4,
    yMin: -4,
    yMax: 8,
    padding: 42,
  });

  return {
    width,
    height,
    ariaLabel:
      "上に開く放物線y=(x−1)²−2。頂点1コンママイナス2が最も低く、すべての点でyはマイナス2以上であることを示す図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-1, 1, 2, 3], [-2, 2, 4, 6]),
      quadraticPlot({
        transform,
        a: 1,
        p: 1,
        q: -2,
        xMin: -1.9,
        xMax: 3.9,
        expression: "y=(x−1)²−2",
        color: BLUE,
      }),
      mathPoint(transform, point(1, -2), ORANGE),
      mathSegment(transform, point(-1.8, -2), point(3.8, -2), GREEN),
      mathLabel(transform, point(1, -2), "最小値 −2", ORANGE, {
        dx: 12,
        dy: -12,
        align: "start",
      }),
      mathLabel(transform, point(3.5, -2), "y≥−2", GREEN, { dy: -10, align: "end" }),
      mathLabel(transform, point(1, 6.8), "軸 x=1", PURPLE, { dx: 10, align: "start" }),
      mathSegment(transform, point(1, -3.2), point(1, 7), PURPLE),
    ],
  };
}

function createExtremaExampleScene(): DiagramScene {
  const width = 540;
  const height = 350;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -2,
    xMax: 4,
    yMin: -5,
    yMax: 10,
    padding: 42,
  });

  return {
    width,
    height,
    ariaLabel:
      "y=2(x−1)²−3の放物線。頂点1コンママイナス3が最小点で、x=1のとき最小値マイナス3になることを示す図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-1, 1, 2, 3], [-4, -2, 2, 4, 6, 8]),
      quadraticPlot({
        transform,
        a: 2,
        p: 1,
        q: -3,
        xMin: -1.5,
        xMax: 3.5,
        expression: "y=2(x−1)²−3",
        color: BLUE,
      }),
      mathPoint(transform, point(1, -3), ORANGE),
      mathSegment(transform, point(-1.5, -3), point(3.5, -3), GREEN),
      mathSegment(transform, point(1, -4.2), point(1, 9), PURPLE),
      mathLabel(transform, point(1, -3), "x=1 で最小値 −3", ORANGE, {
        dx: 12,
        dy: -12,
        align: "start",
      }),
      mathLabel(transform, point(3.25, -3), "y≥−3", GREEN, { dy: -10, align: "end" }),
    ],
  };
}

function createIntervalExtremaRuleScene(): DiagramScene {
  const width = 560;
  const height = 360;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -2,
    xMax: 5,
    yMin: -4,
    yMax: 8,
    padding: 42,
  });
  const left = point(0, 3);
  const vertex = point(2, -1);
  const right = point(4, 3);

  return {
    width,
    height,
    ariaLabel:
      "放物線y=(x−2)²−1に定義域0以上4以下を重ねた図。軸x=2は区間内にあり、最大最小の候補は左端、頂点、右端の3点になる。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-1, 1, 2, 3, 4], [-2, 2, 4, 6]),
      quadraticPlot({
        transform,
        a: 1,
        p: 2,
        q: -1,
        xMin: -1.2,
        xMax: 5,
        expression: "y=(x−2)²−1",
        color: BLUE,
      }),
      quadraticPlot({
        transform,
        a: 1,
        p: 2,
        q: -1,
        xMin: 0,
        xMax: 4,
        expression: "0≤x≤4",
        color: ORANGE,
      }),
      mathPoint(transform, left, ORANGE),
      mathPoint(transform, vertex, ORANGE),
      mathPoint(transform, right, ORANGE),
      mathSegment(transform, point(2, -3.2), point(2, 7), PURPLE),
      mathLabel(transform, left, "左端", ORANGE, { dx: -8, dy: -10, align: "end" }),
      mathLabel(transform, vertex, "頂点", ORANGE, { dx: 10, dy: -12, align: "start" }),
      mathLabel(transform, right, "右端", ORANGE, { dx: 8, dy: -10, align: "start" }),
      mathLabel(transform, point(2, 6.4), "軸 x=2 は区間内", PURPLE, {
        dx: 10,
        align: "start",
      }),
      mathLabel(transform, point(3.6, 5.5), "橙色が定義域内", ORANGE, { align: "end" }),
    ],
  };
}

function createIntervalExtremaExampleScene(): DiagramScene {
  const width = 560;
  const height = 360;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -2,
    xMax: 4,
    yMin: -4,
    yMax: 7,
    padding: 42,
  });
  const left = point(-1, 2);
  const vertex = point(1, -2);
  const right = point(3, 2);

  return {
    width,
    height,
    ariaLabel:
      "y=(x−1)²−2のグラフで定義域マイナス1以上3以下を強調した図。頂点1コンママイナス2と両端マイナス1コンマ2、3コンマ2を比較する。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-1, 1, 2, 3], [-2, 2, 4, 6]),
      quadraticPlot({
        transform,
        a: 1,
        p: 1,
        q: -2,
        xMin: -1.8,
        xMax: 3.8,
        expression: "y=(x−1)²−2",
        color: BLUE,
      }),
      quadraticPlot({
        transform,
        a: 1,
        p: 1,
        q: -2,
        xMin: -1,
        xMax: 3,
        expression: "−1≤x≤3",
        color: ORANGE,
      }),
      mathPoint(transform, left, ORANGE),
      mathPoint(transform, vertex, ORANGE),
      mathPoint(transform, right, ORANGE),
      mathSegment(transform, point(1, -3.2), point(1, 6), PURPLE),
      mathLabel(transform, left, "(−1,2)", ORANGE, { dx: -8, dy: -12, align: "end" }),
      mathLabel(transform, vertex, "(1,−2) 最小", ORANGE, {
        dx: 10,
        dy: -12,
        align: "start",
      }),
      mathLabel(transform, right, "(3,2)", ORANGE, { dx: 8, dy: -12, align: "start" }),
      mathLabel(transform, point(1, 5.3), "軸 x=1 は定義域内", PURPLE, {
        dx: 10,
        align: "start",
      }),
    ],
  };
}

function createRootsRuleScene(): DiagramScene {
  const width = 540;
  const height = 350;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -3,
    xMax: 4,
    yMin: -4,
    yMax: 8,
    padding: 42,
  });

  return {
    width,
    height,
    ariaLabel:
      "y=(x+1)(x−2)の放物線がx軸とマイナス1コンマ0、2コンマ0で交わる図。f(x)=0の解がx軸との交点のx座標に一致する。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-2, -1, 1, 2, 3], [-2, 2, 4, 6]),
      sampleFunctionPlot({
        transform,
        fn: (x) => (x + 1) * (x - 2),
        xMin: -2.8,
        xMax: 3.8,
        sampleCount: 181,
        expression: "y=(x+1)(x−2)",
        color: BLUE,
      }),
      mathPoint(transform, point(-1, 0), ORANGE),
      mathPoint(transform, point(2, 0), ORANGE),
      mathLabel(transform, point(-1, 0), "解 x=−1", ORANGE, { dx: -8, dy: -14, align: "end" }),
      mathLabel(transform, point(2, 0), "解 x=2", ORANGE, { dx: 8, dy: -14, align: "start" }),
      mathLabel(transform, point(0.5, -3), "f(x)=0 ↔ x軸との交点", GREEN),
    ],
  };
}

function createRootsExampleScene(): DiagramScene {
  const width = 540;
  const height = 350;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: 0,
    xMax: 5,
    yMin: -2,
    yMax: 8,
    padding: 42,
  });

  return {
    width,
    height,
    ariaLabel:
      "y=x²−5x+6の放物線がx軸と2コンマ0、3コンマ0で交わる。二次方程式x²−5x+6=0の解2と3が交点のx座標になる図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [1, 2, 3, 4], [-1, 1, 2, 4, 6]),
      sampleFunctionPlot({
        transform,
        fn: (x) => x * x - 5 * x + 6,
        xMin: 0.2,
        xMax: 4.8,
        sampleCount: 181,
        expression: "y=x²−5x+6",
        color: BLUE,
      }),
      mathPoint(transform, point(2, 0), ORANGE),
      mathPoint(transform, point(3, 0), ORANGE),
      mathLabel(transform, point(2, 0), "(2,0)", ORANGE, { dx: -8, dy: -14, align: "end" }),
      mathLabel(transform, point(3, 0), "(3,0)", ORANGE, { dx: 8, dy: -14, align: "start" }),
      mathLabel(transform, point(2.5, -1.2), "解 2, 3 ↔ 2つの交点", GREEN),
    ],
  };
}

function createDiscriminantRuleScene(): DiagramScene {
  const width = 580;
  const height = 350;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -5.5,
    xMax: 5.5,
    yMin: -2.5,
    yMax: 4.5,
    padding: 42,
  });

  return {
    width,
    height,
    ariaLabel:
      "上に開く3つの放物線を並べ、Dが正ならx軸と2点で交わり、Dが0なら1点で接し、Dが負ならx軸と交わらないことを比較する図。",
    responsive: { minWidth: 520, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-4, -3, -2, 2, 3, 4], [-2, 1, 2, 3, 4]),
      quadraticPlot({
        transform,
        a: 1,
        p: -3,
        q: -1,
        xMin: -5.1,
        xMax: -0.9,
        expression: "D>0",
        color: BLUE,
      }),
      quadraticPlot({
        transform,
        a: 1,
        p: 0,
        q: 0,
        xMin: -1.8,
        xMax: 1.8,
        expression: "D=0",
        color: ORANGE,
      }),
      quadraticPlot({
        transform,
        a: 1,
        p: 3,
        q: 1,
        xMin: 1.2,
        xMax: 4.8,
        expression: "D<0",
        color: PURPLE,
      }),
      mathPoint(transform, point(-4, 0), BLUE, 4.5),
      mathPoint(transform, point(-2, 0), BLUE, 4.5),
      mathPoint(transform, point(0, 0), ORANGE, 4.5),
      mathLabel(transform, point(-3, 3.5), "D>0：2交点", BLUE),
      mathLabel(transform, point(0, 3.5), "D=0：接する", ORANGE),
      mathLabel(transform, point(3.1, 3.5), "D<0：交わらない", PURPLE),
    ],
  };
}

function createDiscriminantExampleScene(): DiagramScene {
  const width = 520;
  const height = 340;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -1,
    xMax: 5,
    yMin: -1.5,
    yMax: 8,
    padding: 42,
  });

  return {
    width,
    height,
    ariaLabel:
      "y=x²−4x+5イコール(x−2)²+1の放物線。頂点は2コンマ1でx軸より上にあり、x軸と交わらないため実数解がないことを示す図。",
    responsive: { minWidth: 470, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [1, 2, 3, 4], [1, 2, 4, 6]),
      quadraticPlot({
        transform,
        a: 1,
        p: 2,
        q: 1,
        xMin: -0.6,
        xMax: 4.6,
        expression: "y=(x−2)²+1",
        color: PURPLE,
      }),
      mathPoint(transform, point(2, 1), ORANGE),
      mathLabel(transform, point(2, 1), "頂点 (2,1)", ORANGE, {
        dx: 10,
        dy: -12,
        align: "start",
      }),
      mathLabel(transform, point(3.9, 0.35), "x軸と交わらない", PURPLE, { align: "end" }),
    ],
  };
}

function createInequalityRuleScene(): DiagramScene {
  const width = 550;
  const height = 350;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -3,
    xMax: 4,
    yMin: -4,
    yMax: 8,
    padding: 42,
  });

  return {
    width,
    height,
    ariaLabel:
      "上に開く放物線y=(x+1)(x−2)で、x軸との交点マイナス1と2の間だけグラフがx軸より下になることを強調した図。",
    responsive: { minWidth: 490, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-2, -1, 1, 2, 3], [-2, 2, 4, 6]),
      sampleFunctionPlot({
        transform,
        fn: (x) => (x + 1) * (x - 2),
        xMin: -2.8,
        xMax: 3.8,
        sampleCount: 181,
        expression: "y=(x+1)(x−2)",
        color: BLUE,
      }),
      sampleFunctionPlot({
        transform,
        fn: (x) => (x + 1) * (x - 2),
        xMin: -1,
        xMax: 2,
        sampleCount: 121,
        expression: "y<0",
        color: ORANGE,
      }),
      mathPoint(transform, point(-1, 0), GREEN),
      mathPoint(transform, point(2, 0), GREEN),
      mathSegment(transform, point(-1, -3.15), point(2, -3.15), GREEN),
      mathLabel(transform, point(0.5, -3.15), "−1<x<2", GREEN, { dy: -10 }),
      mathLabel(transform, point(0.5, -2.3), "x軸より下 → f(x)<0", ORANGE),
    ],
  };
}

function createInequalityExampleScene(): DiagramScene {
  const width = 540;
  const height = 350;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: 0,
    xMax: 5,
    yMin: -2,
    yMax: 8,
    padding: 42,
  });

  return {
    width,
    height,
    ariaLabel:
      "y=x²−5x+6の放物線で、x=2とx=3の間だけグラフがx軸より下にある。したがってx²−5x+6<0の解が2<x<3になる図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [1, 2, 3, 4], [-1, 1, 2, 4, 6]),
      sampleFunctionPlot({
        transform,
        fn: (x) => x * x - 5 * x + 6,
        xMin: 0.2,
        xMax: 4.8,
        sampleCount: 181,
        expression: "y=x²−5x+6",
        color: BLUE,
      }),
      sampleFunctionPlot({
        transform,
        fn: (x) => x * x - 5 * x + 6,
        xMin: 2,
        xMax: 3,
        sampleCount: 101,
        expression: "y<0",
        color: ORANGE,
      }),
      mathPoint(transform, point(2, 0), GREEN),
      mathPoint(transform, point(3, 0), GREEN),
      mathSegment(transform, point(2, -1.3), point(3, -1.3), GREEN),
      mathLabel(transform, point(2.5, -1.3), "2<x<3", GREEN, { dy: -10 }),
      mathLabel(transform, point(2.5, -0.75), "この区間で y<0", ORANGE),
    ],
  };
}

function createInequalitySpecialRuleScene(): DiagramScene {
  const width = 580;
  const height = 350;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -5.5,
    xMax: 5.5,
    yMin: -4.5,
    yMax: 4.5,
    padding: 42,
  });

  return {
    width,
    height,
    ariaLabel:
      "重解でx軸に接する放物線、x軸より上にあって常に正の放物線、x軸より下にあって常に負の放物線を並べ、交点がないと符号が変わらないことを示す図。",
    responsive: { minWidth: 520, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [-4, -3, -2, 2, 3, 4], [-4, -2, 2, 4]),
      quadraticPlot({
        transform,
        a: 1,
        p: -3,
        q: 0,
        xMin: -5,
        xMax: -1,
        expression: "重解",
        color: ORANGE,
      }),
      quadraticPlot({
        transform,
        a: 1,
        p: 0,
        q: 1,
        xMin: -1.8,
        xMax: 1.8,
        expression: "常に正",
        color: BLUE,
      }),
      quadraticPlot({
        transform,
        a: -1,
        p: 3,
        q: -1,
        xMin: 1.2,
        xMax: 4.8,
        expression: "常に負",
        color: PURPLE,
      }),
      mathPoint(transform, point(-3, 0), ORANGE),
      mathLabel(transform, point(-3, 3.5), "接点だけ0", ORANGE),
      mathLabel(transform, point(0, 3.5), "D<0, a>0 → 常に正", BLUE),
      mathLabel(transform, point(3, -3.5), "D<0, a<0 → 常に負", PURPLE),
    ],
  };
}

function createInequalitySpecialExampleScene(): DiagramScene {
  const width = 520;
  const height = 340;
  const transform = createCartesianTransform({
    width,
    height,
    xMin: -1,
    xMax: 5,
    yMin: -1.5,
    yMax: 8,
    padding: 42,
  });

  return {
    width,
    height,
    ariaLabel:
      "y=(x−2)²の放物線がx=2でx軸に接し、それ以外ではx軸より上にある。したがって(x−2)²はすべての実数で0以上になる図。",
    responsive: { minWidth: 470, allowHorizontalScroll: true },
    elements: [
      ...createAxes(transform, [1, 2, 3, 4], [1, 2, 4, 6]),
      quadraticPlot({
        transform,
        a: 1,
        p: 2,
        q: 0,
        xMin: -0.6,
        xMax: 4.6,
        expression: "y=(x−2)²",
        color: ORANGE,
      }),
      mathPoint(transform, point(2, 0), GREEN),
      mathLabel(transform, point(2, 0), "x=2 でだけ y=0", GREEN, {
        dx: 10,
        dy: -14,
        align: "start",
      }),
      mathLabel(transform, point(3.8, 4.5), "それ以外は y>0", ORANGE, { align: "end" }),
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "vertex-form": {
    rule: createVertexFormRuleScene(),
    example: createVertexFormExampleScene(),
  },
  "completing-square": {
    example: createCompletingSquareExampleScene(),
  },
  "quadratic-extrema-all-real": {
    rule: createExtremaRuleScene(),
    example: createExtremaExampleScene(),
  },
  "quadratic-extrema-interval": {
    rule: createIntervalExtremaRuleScene(),
    example: createIntervalExtremaExampleScene(),
  },
  "quadratic-roots-graph": {
    rule: createRootsRuleScene(),
    example: createRootsExampleScene(),
  },
  discriminant: {
    rule: createDiscriminantRuleScene(),
    example: createDiscriminantExampleScene(),
  },
  "quadratic-inequality-two-roots": {
    rule: createInequalityRuleScene(),
    example: createInequalityExampleScene(),
  },
  "quadratic-inequality-special-cases": {
    rule: createInequalitySpecialRuleScene(),
    example: createInequalitySpecialExampleScene(),
  },
};

export const getMath1QuadraticLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
