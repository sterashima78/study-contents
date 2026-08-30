import type { DiagramPoint, DiagramScene } from "../../lib/diagram";
import type { MathLessonDiagrams } from "./diagrams";

const AXIS_COLOR = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#047857";
const PURPLE = "#7c3aed";

const point = (x: number, y: number): DiagramPoint => ({ x, y });

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
      {
        kind: "label",
        at: point(386, 100),
        text: "30°・60°: 1 : √3 : 2",
        color: AXIS_COLOR,
      },
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
  const radians = (120 * Math.PI) / 180;
  const p = point(center.x + radius * Math.cos(radians), center.y - radius * Math.sin(radians));
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
      {
        kind: "label",
        at: point(center.x - 10, center.y + 20),
        text: "O",
        align: "end",
        color: AXIS_COLOR,
      },
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

const lessonDiagrams: Record<string, MathLessonDiagrams> = {
  "special-angle-trig": {
    rule: createSpecialAngleRuleScene(),
    example: createSpecialAngleExampleScene(),
  },
  "obtuse-angle-trig": {
    rule: createObtuseTrigScene("rule"),
    example: createObtuseTrigScene("example"),
  },
};

export function getMath1TrigonometryLessonDiagrams(
  lessonKey: string,
): MathLessonDiagrams | undefined {
  return lessonDiagrams[lessonKey];
}
