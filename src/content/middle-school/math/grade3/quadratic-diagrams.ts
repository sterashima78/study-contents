import type { DiagramElement, DiagramPoint, DiagramScene } from "../../../../lib/diagram";
import type { MathLessonDiagrams } from "../../../math1/diagrams";

const BASE = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#047857";

const point = (x: number, y: number): DiagramPoint => ({ x, y });
const label = (at: DiagramPoint, text: string, color = BASE): DiagramElement => ({
  kind: "label",
  at,
  text,
  color,
  align: "middle",
});

function squareToRectangleScene(): DiagramScene {
  return {
    width: 620,
    height: 330,
    ariaLabel:
      "1辺xの正方形から、一方の辺を1長くし他方を1短くして、辺x+1とx-1の長方形を作り、面積24から二次方程式を作る図。",
    responsive: { minWidth: 520, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(70, 80), point(240, 80), point(240, 250), point(70, 250)],
        color: BLUE,
      },
      label(point(155, 55), "x", BLUE),
      label(point(45, 165), "x", BLUE),
      { kind: "arrow", from: point(270, 165), to: point(340, 165), color: ORANGE },
      label(point(305, 140), "+1 / −1", ORANGE),
      {
        kind: "polygon",
        points: [point(370, 105), point(570, 105), point(570, 225), point(370, 225)],
        color: GREEN,
      },
      label(point(470, 80), "x+1", GREEN),
      label(point(340, 165), "x−1", GREEN),
      label(point(470, 255), "面積 24", GREEN),
      label(point(310, 300), "(x+1)(x−1)=24", ORANGE),
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "quadratic-equation-meaning": {
    rule: squareToRectangleScene(),
    example: squareToRectangleScene(),
  },
  "quadratic-equation-modeling": { example: squareToRectangleScene() },
  "quadratic-equation-interpretation": { example: squareToRectangleScene() },
};

export const getMiddleMath3QuadraticLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
