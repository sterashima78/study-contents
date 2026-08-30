import {
  type CartesianTransform,
  createCartesianAxes,
  createCartesianTransform,
  createQuadraticPlot,
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
    ariaLabel: "y=2x² の放物線。頂点は原点で、点 (−1,2) と (1,2) を通り、y軸について対称である。",
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

function createRightTriangleScene(mode: "rule" | "example"): DiagramScene {
  const width = 520;
  const height = 330;
  const a = point(100, 265);
  const b = point(380, 265);
  const c = point(380, 55);
  const isExample = mode === "example";

  return {
    width,
    height,
    ariaLabel: isExample
      ? "3-4-5の直角三角形。角θのとなり側が4、向かい側が3、斜辺が5である。"
      : "直角三角形で角θを基準に、となり側、向かい側、斜辺の位置を示した図。",
    responsive: { minWidth: 430, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: a, to: b, color: BLUE },
      { kind: "segment", from: b, to: c, color: ORANGE },
      { kind: "segment", from: c, to: a, color: GREEN },
      {
        kind: "arc",
        center: a,
        radius: 43,
        startAngle: 323,
        endAngle: 360,
        color: PURPLE,
      },
      { kind: "segment", from: point(358, 265), to: point(358, 243), color: AXIS_COLOR },
      { kind: "segment", from: point(358, 243), to: point(380, 243), color: AXIS_COLOR },
      {
        kind: "label",
        at: point(145, 247),
        text: "θ",
        align: "start",
        color: PURPLE,
      },
      {
        kind: "label",
        at: point(240, 294),
        text: isExample ? "となり側 4" : "となり側",
        color: BLUE,
      },
      {
        kind: "label",
        at: point(402, 165),
        text: isExample ? "向かい側 3" : "向かい側",
        align: "start",
        color: ORANGE,
      },
      {
        kind: "label",
        at: point(218, 142),
        text: isExample ? "斜辺 5" : "斜辺",
        color: GREEN,
      },
      {
        kind: "label",
        at: point(389, 250),
        text: "直角",
        align: "start",
        color: AXIS_COLOR,
      },
    ],
  };
}

function createSpecialAngleRuleScene(): DiagramScene {
  const width = 560;
  const height = 330;
  const leftA = point(45, 255);
  const leftB = point(175, 255);
  const leftC = point(175, 125);
  const rightA = point(300, 255);
  const rightB = point(473, 255);
  const rightC = point(473, 155);

  return {
    width,
    height,
    ariaLabel:
      "45度の直角二等辺三角形は辺の比が1対1対√2。30度と60度の直角三角形は辺の比が1対√3対2であることを並べて示した図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: leftA, to: leftB, color: BLUE },
      { kind: "segment", from: leftB, to: leftC, color: ORANGE },
      { kind: "segment", from: leftC, to: leftA, color: GREEN },
      { kind: "segment", from: point(155, 255), to: point(155, 235), color: AXIS_COLOR },
      { kind: "segment", from: point(155, 235), to: point(175, 235), color: AXIS_COLOR },
      { kind: "label", at: point(110, 285), text: "1", color: BLUE },
      { kind: "label", at: point(195, 193), text: "1", align: "start", color: ORANGE },
      { kind: "label", at: point(102, 180), text: "√2", color: GREEN },
      { kind: "label", at: point(88, 238), text: "45°", color: PURPLE },
      { kind: "label", at: point(207, 100), text: "45°: 1 : 1 : √2", color: AXIS_COLOR },
      { kind: "segment", from: rightA, to: rightB, color: BLUE },
      { kind: "segment", from: rightB, to: rightC, color: ORANGE },
      { kind: "segment", from: rightC, to: rightA, color: GREEN },
      { kind: "segment", from: point(453, 255), to: point(453, 235), color: AXIS_COLOR },
      { kind: "segment", from: point(453, 235), to: point(473, 235), color: AXIS_COLOR },
      { kind: "label", at: point(386, 285), text: "√3", color: BLUE },
      { kind: "label", at: point(493, 207), text: "1", align: "start", color: ORANGE },
      { kind: "label", at: point(381, 190), text: "2", color: GREEN },
      { kind: "label", at: point(342, 241), text: "30°", color: PURPLE },
      { kind: "label", at: point(445, 175), text: "60°", color: PURPLE },
      { kind: "label", at: point(386, 100), text: "30°・60°: 1 : √3 : 2", color: AXIS_COLOR },
    ],
  };
}

function createSpecialAngleExampleScene(): DiagramScene {
  const width = 520;
  const height = 330;
  const a = point(95, 260);
  const b = point(395, 260);
  const c = point(395, 87);

  return {
    width,
    height,
    ariaLabel:
      "30度、60度、90度の直角三角形。30度の向かい側が1、となり側が√3、斜辺が2で、sin60度とtan30度を辺の比から読める。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: a, to: b, color: BLUE },
      { kind: "segment", from: b, to: c, color: ORANGE },
      { kind: "segment", from: c, to: a, color: GREEN },
      { kind: "segment", from: point(373, 260), to: point(373, 238), color: AXIS_COLOR },
      { kind: "segment", from: point(373, 238), to: point(395, 238), color: AXIS_COLOR },
      { kind: "label", at: point(245, 292), text: "√3", color: BLUE },
      { kind: "label", at: point(416, 177), text: "1", align: "start", color: ORANGE },
      { kind: "label", at: point(236, 164), text: "2", color: GREEN },
      { kind: "label", at: point(143, 242), text: "30°", color: PURPLE },
      { kind: "label", at: point(364, 122), text: "60°", color: PURPLE },
      { kind: "label", at: point(242, 54), text: "sin 60° = √3 / 2", color: GREEN },
      { kind: "label", at: point(242, 78), text: "tan 30° = 1 / √3", color: ORANGE },
    ],
  };
}

function createObtuseTrigScene(mode: "rule" | "example"): DiagramScene {
  const width = 520;
  const height = 360;
  const center = point(260, 190);
  const radius = 118;
  const angleDegrees = 120;
  const radians = (angleDegrees * Math.PI) / 180;
  const p = point(
    center.x + radius * Math.cos(radians),
    center.y - radius * Math.sin(radians),
  );
  const projectionX = point(p.x, center.y);
  const projectionY = point(center.x, p.y);
  const isExample = mode === "example";

  return {
    width,
    height,
    ariaLabel: isExample
      ? "単位円の120度の点は第2象限にあり、座標はマイナス1/2、√3/2。したがってsin120度は正、cos120度とtan120度は負である。"
      : "単位円の第2象限にある点Pを示し、x座標cosθは負、y座標sinθは正、tanθは負になることを示した図。",
    responsive: { minWidth: 450, allowHorizontalScroll: true },
    elements: [
      { kind: "circle", center, radius, color: BLUE },
      { kind: "arrow", from: point(72, center.y), to: point(448, center.y), color: AXIS_COLOR },
      { kind: "arrow", from: point(center.x, 326), to: point(center.x, 50), color: AXIS_COLOR },
      { kind: "segment", from: center, to: p, color: PURPLE },
      { kind: "segment", from: p, to: projectionX, color: ORANGE },
      { kind: "segment", from: p, to: projectionY, color: GREEN },
      { kind: "point", x: p.x, y: p.y, radius: 5, color: PURPLE },
      { kind: "label", at: point(454, center.y - 10), text: "x", align: "end", color: AXIS_COLOR },
      { kind: "label", at: point(center.x + 12, 57), text: "y", align: "start", color: AXIS_COLOR },
      { kind: "label", at: point(center.x - 10, center.y + 20), text: "O", align: "end", color: AXIS_COLOR },
      {
        kind: "label",
        at: point(p.x - 8, p.y - 14),
        text: isExample ? "P=(−1/2, √3/2)" : "P=(cosθ, sinθ)",
        align: "end",
        color: PURPLE,
      },
      {
        kind: "label",
        at: point((p.x + center.x) / 2, center.y + 24),
        text: isExample ? "cos120° = −1/2" : "cosθ < 0",
        color: GREEN,
      },
      {
        kind: "label",
        at: point(p.x - 14, (p.y + center.y) / 2),
        text: isExample ? "sin120° = √3/2" : "sinθ > 0",
        align: "end",
        color: ORANGE,
      },
      {
        kind: "label",
        at: point(center.x - 66, center.y - 28),
        text: isExample ? "120° = 180° − 60°" : "第2象限",
        color: PURPLE,
      },
      {
        kind: "label",
        at: point(260, 336),
        text: isExample ? "tan120° = −√3" : "tanθ = sinθ / cosθ < 0",
        color: AXIS_COLOR,
      },
    ],
  };
}

type BoxPlotStats = {
  min: number;
  q1: number;
  q2: number;
  q3: number;
  max: number;
};

function linearPosition(value: number, min: number, max: number, from: number, to: number) {
  if (!(max > min)) throw new Error("box plot scale requires max > min");
  return from + ((value - min) / (max - min)) * (to - from);
}

function createBoxPlotScene(
  stats: BoxPlotStats,
  options: { ariaLabel: string; numeric: boolean },
): DiagramScene {
  const width = 520;
  const height = 300;
  const left = 60;
  const right = 460;
  const centerY = 150;
  const top = 105;
  const bottom = 195;
  const scaleMin = stats.min;
  const scaleMax = stats.max;
  const x = (value: number) => linearPosition(value, scaleMin, scaleMax, left, right);
  const xMin = x(stats.min);
  const xQ1 = x(stats.q1);
  const xQ2 = x(stats.q2);
  const xQ3 = x(stats.q3);
  const xMax = x(stats.max);

  const labels = options.numeric
    ? [
        { x: xMin, text: String(stats.min) },
        { x: xQ1, text: `Q1=${stats.q1}` },
        { x: xQ2, text: `Q2=${stats.q2}` },
        { x: xQ3, text: `Q3=${stats.q3}` },
        { x: xMax, text: String(stats.max) },
      ]
    : [
        { x: xMin, text: "最小値" },
        { x: xQ1, text: "Q1" },
        { x: xQ2, text: "Q2" },
        { x: xQ3, text: "Q3" },
        { x: xMax, text: "最大値" },
      ];

  return {
    width,
    height,
    ariaLabel: options.ariaLabel,
    responsive: { minWidth: 450, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(xMin, centerY), to: point(xQ1, centerY), color: BLUE },
      { kind: "segment", from: point(xQ3, centerY), to: point(xMax, centerY), color: BLUE },
      { kind: "segment", from: point(xMin, top + 18), to: point(xMin, bottom - 18), color: BLUE },
      { kind: "segment", from: point(xMax, top + 18), to: point(xMax, bottom - 18), color: BLUE },
      {
        kind: "polygon",
        points: [point(xQ1, top), point(xQ3, top), point(xQ3, bottom), point(xQ1, bottom)],
        color: BLUE,
      },
      { kind: "segment", from: point(xQ2, top), to: point(xQ2, bottom), color: PURPLE },
      { kind: "segment", from: point(xQ1, 224), to: point(xQ3, 224), color: ORANGE },
      {
        kind: "label",
        at: point((xQ1 + xQ3) / 2, 247),
        text: options.numeric ? `四分位範囲 ${stats.q3 - stats.q1}` : "中央50% = Q3−Q1",
        color: ORANGE,
      },
      ...labels.map<DiagramElement>((label) => ({
        kind: "label",
        at: point(label.x, 85),
        text: label.text,
        color: label.x === xQ2 ? PURPLE : AXIS_COLOR,
      })),
    ],
  };
}

function createQuartileRuleScene(): DiagramScene {
  return createBoxPlotScene(
    { min: 0, q1: 25, q2: 50, q3: 75, max: 100 },
    {
      ariaLabel:
        "箱ひげ図で最小値、第1四分位数Q1、中央値Q2、第3四分位数Q3、最大値を示し、Q1からQ3が中央50パーセントであることを示した図。",
      numeric: false,
    },
  );
}

function createQuartileExampleScene(): DiagramScene {
  return createBoxPlotScene(
    { min: 2, q1: 4, q2: 7, q3: 10, max: 12 },
    {
      ariaLabel: "データ2,4,5,7,8,10,12の箱ひげ図。Q1は4、Q2は7、Q3は10で、四分位範囲は6。",
      numeric: true,
    },
  );
}

const lessonDiagrams: Record<string, MathLessonDiagrams> = {
  "basic-parabola": {
    rule: createBasicParabolaComparison(),
    example: createDoubleParabolaExample(),
  },
  "right-triangle-trig": {
    rule: createRightTriangleScene("rule"),
    example: createRightTriangleScene("example"),
  },
  "special-angle-trig": {
    rule: createSpecialAngleRuleScene(),
    example: createSpecialAngleExampleScene(),
  },
  "obtuse-angle-trig": {
    rule: createObtuseTrigScene("rule"),
    example: createObtuseTrigScene("example"),
  },
  "quartiles-boxplot": {
    rule: createQuartileRuleScene(),
    example: createQuartileExampleScene(),
  },
};

export function getMath1LessonDiagrams(lessonKey: string): MathLessonDiagrams | undefined {
  return lessonDiagrams[lessonKey];
}
