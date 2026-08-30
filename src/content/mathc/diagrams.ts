import type { DiagramElement, DiagramPoint, DiagramScene } from "../../lib/diagram";
import type { MathLessonDiagrams } from "../math1/diagrams";

const AXIS_COLOR = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#047857";
const PURPLE = "#7c3aed";

const point = (x: number, y: number): DiagramPoint => ({ x, y });

function axes(width: number, height: number, origin: DiagramPoint): DiagramElement[] {
  return [
    { kind: "arrow", from: point(45, origin.y), to: point(width - 35, origin.y), color: AXIS_COLOR },
    { kind: "arrow", from: point(origin.x, height - 35), to: point(origin.x, 35), color: AXIS_COLOR },
    { kind: "label", at: point(width - 42, origin.y - 10), text: "x", color: AXIS_COLOR },
    { kind: "label", at: point(origin.x + 12, 45), text: "y", align: "start", color: AXIS_COLOR },
    { kind: "label", at: point(origin.x - 10, origin.y + 20), text: "O", align: "end", color: AXIS_COLOR },
  ];
}

function createVectorComponentsScene(mode: "rule" | "example"): DiagramScene {
  const width = 540;
  const height = 350;
  const origin = point(90, 285);
  const scale = 38;
  const isExample = mode === "example";
  const aMath = isExample ? point(1, 2) : point(1, 1);
  const bMath = isExample ? point(5, 5) : point(5, 4);
  const toScreen = (value: DiagramPoint) => point(origin.x + value.x * scale, origin.y - value.y * scale);
  const a = toScreen(aMath);
  const b = toScreen(bMath);
  const corner = point(b.x, a.y);

  return {
    width,
    height,
    ariaLabel: isExample
      ? "座標A(1,2)からB(5,5)へのベクトルABを示し、x方向の変化が4、y方向の変化が3、大きさが5であることを示した図。"
      : "点Aから点Bへのベクトルをx方向とy方向の変化に分け、成分が終点から始点を引いて求まることを示した図。",
    responsive: { minWidth: 470, allowHorizontalScroll: true },
    elements: [
      ...axes(width, height, origin),
      { kind: "arrow", from: a, to: b, color: PURPLE },
      { kind: "segment", from: a, to: corner, color: BLUE },
      { kind: "segment", from: corner, to: b, color: ORANGE },
      { kind: "point", x: a.x, y: a.y, radius: 5, color: GREEN },
      { kind: "point", x: b.x, y: b.y, radius: 5, color: GREEN },
      {
        kind: "label",
        at: point(a.x - 12, a.y + 22),
        text: isExample ? "A(1,2)" : "A(x₁,y₁)",
        align: "end",
        color: GREEN,
      },
      {
        kind: "label",
        at: point(b.x + 12, b.y - 12),
        text: isExample ? "B(5,5)" : "B(x₂,y₂)",
        align: "start",
        color: GREEN,
      },
      {
        kind: "label",
        at: point((a.x + corner.x) / 2, a.y + 22),
        text: isExample ? "Δx=4" : "x₂−x₁",
        color: BLUE,
      },
      {
        kind: "label",
        at: point(corner.x + 14, (corner.y + b.y) / 2),
        text: isExample ? "Δy=3" : "y₂−y₁",
        align: "start",
        color: ORANGE,
      },
      {
        kind: "label",
        at: point((a.x + b.x) / 2 - 10, (a.y + b.y) / 2 - 14),
        text: isExample ? "AB⃗=(4,3), |AB⃗|=5" : "AB⃗=(x₂−x₁, y₂−y₁)",
        color: PURPLE,
      },
    ],
  };
}

function createVectorAdditionRuleScene(): DiagramScene {
  const width = 540;
  const height = 330;
  const o = point(105, 255);
  const aEnd = point(285, 205);
  const bFromA = point(390, 105);
  const bEnd = point(210, 155);

  return {
    width,
    height,
    ariaLabel: "ベクトルaの終点からベクトルbをつなぐと、始点から最後の終点への矢印がa+bになる三角形の法則を示した図。",
    responsive: { minWidth: 450, allowHorizontalScroll: true },
    elements: [
      { kind: "arrow", from: o, to: aEnd, color: BLUE },
      { kind: "arrow", from: aEnd, to: bFromA, color: ORANGE },
      { kind: "arrow", from: o, to: bFromA, color: PURPLE },
      { kind: "arrow", from: o, to: bEnd, color: ORANGE },
      { kind: "segment", from: bEnd, to: bFromA, color: AXIS_COLOR },
      { kind: "label", at: point(195, 218), text: "a⃗", color: BLUE },
      { kind: "label", at: point(345, 145), text: "b⃗", color: ORANGE },
      { kind: "label", at: point(257, 160), text: "a⃗+b⃗", color: PURPLE },
      { kind: "label", at: point(155, 195), text: "b⃗", color: ORANGE },
      { kind: "label", at: point(270, 300), text: "終点へつなぐと和になる", color: AXIS_COLOR },
    ],
  };
}

function createInnerProductScene(mode: "rule" | "example"): DiagramScene {
  const width = 520;
  const height = 330;
  const o = point(250, 235);
  const isExample = mode === "example";
  const aEnd = isExample ? point(390, 165) : point(395, 190);
  const bEnd = isExample ? point(180, 95) : point(185, 115);

  return {
    width,
    height,
    ariaLabel: isExample
      ? "同じ始点からa=(2,1)とb=(1,-2)に対応する2本のベクトルを描き、互いに垂直で内積が0であることを示した図。"
      : "同じ始点から2本のベクトルを描き、なす角θと内積a・b=|a||b|cosθの関係を示した図。",
    responsive: { minWidth: 430, allowHorizontalScroll: true },
    elements: [
      { kind: "arrow", from: o, to: aEnd, color: BLUE },
      { kind: "arrow", from: o, to: bEnd, color: ORANGE },
      {
        kind: "arc",
        center: o,
        radius: 52,
        startAngle: 206,
        endAngle: 334,
        color: PURPLE,
      },
      { kind: "label", at: point(338, 192), text: isExample ? "a⃗=(2,1)" : "a⃗", color: BLUE },
      { kind: "label", at: point(190, 148), text: isExample ? "b⃗=(1,−2)" : "b⃗", color: ORANGE },
      { kind: "label", at: point(250, 175), text: isExample ? "90°" : "θ", color: PURPLE },
      {
        kind: "label",
        at: point(260, 292),
        text: isExample ? "a⃗·b⃗=2·1+1·(−2)=0" : "a⃗·b⃗=|a⃗||b⃗|cosθ",
        color: AXIS_COLOR,
      },
    ],
  };
}

function createSectionPointScene(mode: "rule" | "example"): DiagramScene {
  const width = 540;
  const height = 280;
  const a = point(70, 145);
  const b = point(470, 145);
  const isExample = mode === "example";
  const ratioM = isExample ? 2 : 3;
  const ratioN = isExample ? 1 : 2;
  const px = a.x + ((b.x - a.x) * ratioM) / (ratioM + ratioN);
  const p = point(px, a.y);

  return {
    width,
    height,
    ariaLabel: isExample
      ? "線分ABをAP対PBが2対1になる点Pで内分し、PがB寄りに位置することを示した図。"
      : "線分ABを点Pがm対nに内分し、Pの位置ベクトルが両端の重み付き平均になることを示した図。",
    responsive: { minWidth: 450, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: a, to: b, color: BLUE },
      { kind: "point", x: a.x, y: a.y, radius: 5, color: GREEN },
      { kind: "point", x: p.x, y: p.y, radius: 5, color: PURPLE },
      { kind: "point", x: b.x, y: b.y, radius: 5, color: GREEN },
      { kind: "label", at: point(a.x, a.y + 28), text: isExample ? "A(1,2)" : "A", color: GREEN },
      { kind: "label", at: point(p.x, p.y - 18), text: isExample ? "P(5,4)" : "P", color: PURPLE },
      { kind: "label", at: point(b.x, b.y + 28), text: isExample ? "B(7,5)" : "B", color: GREEN },
      {
        kind: "label",
        at: point((a.x + p.x) / 2, a.y - 18),
        text: isExample ? "2" : "m",
        color: ORANGE,
      },
      {
        kind: "label",
        at: point((p.x + b.x) / 2, a.y - 18),
        text: isExample ? "1" : "n",
        color: ORANGE,
      },
      {
        kind: "label",
        at: point(270, 230),
        text: isExample ? "AP:PB=2:1" : "p⃗=(n a⃗+m b⃗)/(m+n)",
        color: AXIS_COLOR,
      },
    ],
  };
}

function createVectorEquationScene(mode: "rule" | "example"): DiagramScene {
  const width = 550;
  const height = 340;
  const origin = point(100, 270);
  const isExample = mode === "example";
  const a = isExample ? point(175, 230) : point(180, 220);
  const d = isExample ? point(70, -105) : point(85, -70);
  const lineStart = point(a.x - d.x * 1.3, a.y - d.y * 1.3);
  const lineEnd = point(a.x + d.x * 3.4, a.y + d.y * 3.4);
  const t2 = point(a.x + d.x * 2, a.y + d.y * 2);

  return {
    width,
    height,
    ariaLabel: isExample
      ? "点Aから方向ベクトルdの実数倍だけ進む点が一直線上に並び、t=2で点Pに到達することを示した図。"
      : "基準点Aから方向ベクトルdをt倍して進むことで、tの値に応じた点が同一直線上に並ぶことを示した図。",
    responsive: { minWidth: 470, allowHorizontalScroll: true },
    elements: [
      ...axes(width, height, origin),
      { kind: "line", from: lineStart, to: lineEnd, color: AXIS_COLOR },
      { kind: "point", x: a.x, y: a.y, radius: 5, color: GREEN },
      { kind: "arrow", from: a, to: point(a.x + d.x, a.y + d.y), color: BLUE },
      { kind: "point", x: t2.x, y: t2.y, radius: 5, color: PURPLE },
      { kind: "label", at: point(a.x - 10, a.y + 25), text: isExample ? "A(1,−1)" : "A", color: GREEN },
      { kind: "label", at: point(a.x + d.x / 2 + 18, a.y + d.y / 2), text: isExample ? "d⃗=(2,3)" : "d⃗", color: BLUE },
      { kind: "label", at: point(t2.x + 12, t2.y - 12), text: isExample ? "t=2 → P(5,5)" : "t=2", align: "start", color: PURPLE },
      { kind: "label", at: point(285, 315), text: "p⃗=a⃗+t d⃗  (t∈R)", color: AXIS_COLOR },
    ],
  };
}

const lessonDiagrams: Record<string, MathLessonDiagrams> = {
  "vector-components": {
    rule: createVectorComponentsScene("rule"),
    example: createVectorComponentsScene("example"),
  },
  "vector-operations": {
    rule: createVectorAdditionRuleScene(),
  },
  "inner-product": {
    rule: createInnerProductScene("rule"),
    example: createInnerProductScene("example"),
  },
  "position-vectors": {
    rule: createSectionPointScene("rule"),
    example: createSectionPointScene("example"),
  },
  "vector-equations": {
    rule: createVectorEquationScene("rule"),
    example: createVectorEquationScene("example"),
  },
};

export function getMathCLessonDiagrams(lessonKey: string): MathLessonDiagrams | undefined {
  return lessonDiagrams[lessonKey];
}
