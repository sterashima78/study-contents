import type { DiagramElement, DiagramPoint, DiagramScene } from "../../../../lib/diagram";
import type { MathLessonDiagrams } from "../../../math1/diagrams";

const BASE = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#047857";
const PURPLE = "#7c3aed";

const point = (x: number, y: number): DiagramPoint => ({ x, y });
const label = (
  at: DiagramPoint,
  text: string,
  color = BASE,
  align: "start" | "middle" | "end" = "middle",
): DiagramElement => ({ kind: "label", at, text, color, align });

function squareRootMeaningScene(): DiagramScene {
  return {
    width: 500,
    height: 330,
    ariaLabel: "1辺が1の正方形とその対角線を示し、対角線の2乗が2なので長さを√2と表すことを示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(120, 250), point(340, 250), point(340, 30), point(120, 30)],
        color: BLUE,
      },
      { kind: "segment", from: point(120, 250), to: point(340, 30), color: ORANGE },
      label(point(230, 278), "1", BASE),
      label(point(92, 140), "1", BASE),
      label(point(250, 126), "対角線 √2", ORANGE),
      label(point(250, 310), "(√2)² = 2", PURPLE),
    ],
  };
}

function approximationScene(): DiagramScene {
  const x = (value: number) => 70 + ((value - 1.3) / 0.3) * 360;
  return {
    width: 500,
    height: 300,
    ariaLabel: "数直線上で1.4と1.5の間に√2を置き、1.4²は2より小さく1.5²は2より大きいことを示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(65, 170), to: point(440, 170), color: BASE },
      ...[1.3, 1.4, 1.5, 1.6].map((value) => ({
        kind: "segment" as const,
        from: point(x(value), 160),
        to: point(x(value), 180),
        color: BASE,
      })),
      label(point(x(1.4), 205), "1.4", BASE),
      label(point(x(1.5), 205), "1.5", BASE),
      { kind: "point", x: x(Math.SQRT2), y: 170, radius: 7, color: ORANGE },
      label(point(x(Math.SQRT2), 135), "√2", ORANGE),
      label(point(250, 65), "1.4² < 2 < 1.5²", PURPLE),
    ],
  };
}

function errorRangeScene(): DiagramScene {
  const x = (value: number) => 80 + ((value - 8.3) / 0.2) * 340;
  return {
    width: 500,
    height: 300,
    ariaLabel:
      "測定値8.4を0.1の位まで丸めたとき、真の値が8.35以上8.45未満にあることを数直線で示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(70, 165), to: point(430, 165), color: BASE },
      { kind: "segment", from: point(x(8.35), 165), to: point(x(8.45), 165), color: BLUE },
      { kind: "point", x: x(8.35), y: 165, radius: 7, color: GREEN },
      { kind: "point", x: x(8.4), y: 165, radius: 7, color: ORANGE },
      label(point(x(8.35), 205), "8.35", GREEN),
      label(point(x(8.4), 125), "測定値 8.4", ORANGE),
      label(point(x(8.45), 205), "8.45 未満", BLUE),
      label(point(250, 65), "8.35 ≤ 真の値 < 8.45", PURPLE),
    ],
  };
}

function applicationScene(): DiagramScene {
  return {
    width: 500,
    height: 330,
    ariaLabel:
      "面積18平方センチメートルの正方形について、1辺xと面積x²=18を対応させ、長さが3√2センチメートルになることを示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(135, 250), point(355, 250), point(355, 30), point(135, 30)],
        color: BLUE,
      },
      label(point(245, 140), "面積 18 cm²", PURPLE),
      label(point(245, 280), "x cm", BASE),
      label(point(95, 140), "x cm", BASE),
      label(point(245, 315), "x²=18 → x=3√2", ORANGE),
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "square-root-meaning": { rule: squareRootMeaningScene(), example: squareRootMeaningScene() },
  "rational-irrational": { rule: squareRootMeaningScene() },
  "square-root-approximation": { rule: approximationScene(), example: approximationScene() },
  "error-approximation-scientific-notation": {
    rule: errorRangeScene(),
    example: errorRangeScene(),
  },
  "square-root-application": { rule: applicationScene(), example: applicationScene() },
};

export const getMiddleMath3LessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
