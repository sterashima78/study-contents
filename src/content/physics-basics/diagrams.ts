import {
  createCartesianAxes,
  createCartesianTransform,
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

function createMotionAxisLabels(
  transform: ReturnType<typeof createCartesianTransform>,
  xLabel: string,
  yLabel: string,
): DiagramElement[] {
  const origin = transform.toDiagramPoint(point(0, 0));
  const { width, padding } = transform.viewport;
  return [
    createCartesianAxes(transform, { color: AXIS_COLOR }),
    {
      kind: "label",
      at: point(width - padding - 2, origin.y - 10),
      text: xLabel,
      align: "end",
      color: AXIS_COLOR,
    },
    {
      kind: "label",
      at: point(origin.x + 12, padding + 14),
      text: yLabel,
      align: "start",
      color: AXIS_COLOR,
    },
    { kind: "label", at: point(origin.x - 8, origin.y + 18), text: "O", align: "end", color: AXIS_COLOR },
  ];
}

function createPositionTimeScene(mode: "rule" | "example"): DiagramScene {
  const width = 540;
  const height = 340;
  const isExample = mode === "example";
  const transform = createCartesianTransform({
    width,
    height,
    xMin: 0,
    xMax: 5,
    yMin: 0,
    yMax: 16,
    padding: 48,
  });
  const start = transform.toDiagramPoint(point(0, 2));
  const end = transform.toDiagramPoint(point(4, 14));
  const corner = transform.toDiagramPoint(point(4, 2));

  return {
    width,
    height,
    ariaLabel: isExample
      ? "位置時間グラフで0秒の2メートルから4秒の14メートルへ直線的に変化し、変位12メートルを4秒で割った傾き3メートル毎秒が平均速度になることを示した図。"
      : "位置時間グラフの2点を結ぶ直線について、横の時間変化Δtと縦の位置変化Δxの比が平均速度になることを示した図。",
    responsive: { minWidth: 470, allowHorizontalScroll: true },
    elements: [
      ...createMotionAxisLabels(transform, "t", "x"),
      { kind: "segment", from: start, to: end, color: BLUE },
      { kind: "segment", from: start, to: corner, color: GREEN },
      { kind: "segment", from: corner, to: end, color: ORANGE },
      { kind: "point", x: start.x, y: start.y, radius: 5, color: PURPLE },
      { kind: "point", x: end.x, y: end.y, radius: 5, color: PURPLE },
      {
        kind: "label",
        at: point((start.x + corner.x) / 2, start.y + 24),
        text: isExample ? "Δt=4.0 s" : "Δt",
        color: GREEN,
      },
      {
        kind: "label",
        at: point(corner.x + 14, (corner.y + end.y) / 2),
        text: isExample ? "Δx=12 m" : "Δx",
        align: "start",
        color: ORANGE,
      },
      {
        kind: "label",
        at: point(285, 50),
        text: isExample ? "傾き = 12/4.0 = 3.0 m/s" : "傾き = Δx / Δt = 平均の速度",
        color: BLUE,
      },
    ],
  };
}

function createVelocityTimeScene(mode: "rule" | "example"): DiagramScene {
  const width = 560;
  const height = 350;
  const isExample = mode === "example";
  const transform = createCartesianTransform({
    width,
    height,
    xMin: 0,
    xMax: 7,
    yMin: 0,
    yMax: 16,
    padding: 50,
  });
  const start = transform.toDiagramPoint(point(0, 2));
  const end = transform.toDiagramPoint(point(6, 14));
  const corner = transform.toDiagramPoint(point(6, 2));
  const groundStart = transform.toDiagramPoint(point(0, 0));
  const groundEnd = transform.toDiagramPoint(point(6, 0));

  return {
    width,
    height,
    ariaLabel: isExample
      ? "速度時間グラフで速度が2メートル毎秒から6秒後に14メートル毎秒へ増加し、傾きが2メートル毎秒毎秒の加速度になることを示した図。グラフと時間軸に囲まれる面積が変位を表す。"
      : "速度時間グラフで直線の傾きが加速度、グラフと時間軸に囲まれる符号付き面積が変位を表すことを示した図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      ...createMotionAxisLabels(transform, "t", "v"),
      { kind: "segment", from: start, to: end, color: BLUE },
      { kind: "segment", from: start, to: corner, color: GREEN },
      { kind: "segment", from: corner, to: end, color: ORANGE },
      {
        kind: "polygon",
        points: [groundStart, groundEnd, end, start],
        color: PURPLE,
      },
      {
        kind: "label",
        at: point((start.x + corner.x) / 2, start.y + 24),
        text: isExample ? "Δt=6.0 s" : "Δt",
        color: GREEN,
      },
      {
        kind: "label",
        at: point(corner.x + 14, (corner.y + end.y) / 2),
        text: isExample ? "Δv=12 m/s" : "Δv",
        align: "start",
        color: ORANGE,
      },
      {
        kind: "label",
        at: point(295, 48),
        text: isExample ? "傾き = 12/6.0 = 2.0 m/s²" : "傾き = Δv / Δt = 加速度",
        color: BLUE,
      },
      {
        kind: "label",
        at: point(300, 292),
        text: "囲まれた面積 = 変位",
        color: PURPLE,
      },
    ],
  };
}

function createForceDiagramScene(mode: "rule" | "example"): DiagramScene {
  const width = 520;
  const height = 350;
  const isExample = mode === "example";
  const center = point(260, 190);
  const top = point(center.x, 95);
  const bottom = point(center.x, 295);

  return {
    width,
    height,
    ariaLabel: isExample
      ? "水平な床の上で静止する質量2キログラムの物体について、上向きの垂直抗力19.6ニュートンと下向きの重力19.6ニュートンがつり合う自由物体図。"
      : "水平な床の上の物体だけを対象に取り出し、床から受ける垂直抗力を上向き、地球から受ける重力を下向きの矢印で示した自由物体図。",
    responsive: { minWidth: 430, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(115, 235), to: point(405, 235), color: AXIS_COLOR },
      {
        kind: "symbol",
        domain: "physics",
        symbol: "mass",
        at: center,
        width: 100,
        height: 70,
        color: BLUE,
      },
      { kind: "arrow", from: point(center.x, 155), to: top, color: GREEN },
      { kind: "arrow", from: point(center.x, 225), to: bottom, color: ORANGE },
      {
        kind: "label",
        at: point(center.x + 18, 112),
        text: isExample ? "N=19.6 N" : "垂直抗力 N",
        align: "start",
        color: GREEN,
      },
      {
        kind: "label",
        at: point(center.x + 18, 282),
        text: isExample ? "W=mg=19.6 N" : "重力 W=mg",
        align: "start",
        color: ORANGE,
      },
      {
        kind: "label",
        at: point(260, 55),
        text: isExample ? "鉛直方向の合力 = 0" : "対象物体に外部から働く力だけを描く",
        color: AXIS_COLOR,
      },
    ],
  };
}

const lessonDiagrams: Record<string, MathLessonDiagrams> = {
  "velocity-graphs": {
    rule: createPositionTimeScene("rule"),
    example: createPositionTimeScene("example"),
  },
  acceleration: {
    rule: createVelocityTimeScene("rule"),
    example: createVelocityTimeScene("example"),
  },
  "force-diagrams": {
    rule: createForceDiagramScene("rule"),
    example: createForceDiagramScene("example"),
  },
};

export function getPhysicsBasicsLessonDiagrams(lessonKey: string): MathLessonDiagrams | undefined {
  return lessonDiagrams[lessonKey];
}
