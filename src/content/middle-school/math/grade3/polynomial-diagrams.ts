import type { DiagramElement, DiagramPoint, DiagramScene } from "../../../../lib/diagram";
import type { MathLessonDiagrams } from "../../../math1/diagrams";

const BASE = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#047857";
const PURPLE = "#7c3aed";

const point = (x: number, y: number): DiagramPoint => ({ x, y });
const label = (at: DiagramPoint, text: string, color = BASE): DiagramElement => ({
  kind: "label",
  at,
  text,
  color,
  align: "middle",
});

function distributiveAreaScene(): DiagramScene {
  return {
    width: 520,
    height: 350,
    ariaLabel:
      "縦をaとb、横をcとdに分けた長方形を4領域ac、ad、bc、bdに分割し、(a+b)(c+d)の展開を面積で示す図。",
    responsive: { minWidth: 460, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(120, 60), point(430, 60), point(430, 280), point(120, 280)],
        color: BLUE,
      },
      { kind: "segment", from: point(300, 60), to: point(300, 280), color: ORANGE },
      { kind: "segment", from: point(120, 180), to: point(430, 180), color: GREEN },
      label(point(210, 120), "ac", PURPLE),
      label(point(365, 120), "ad", PURPLE),
      label(point(210, 230), "bc", PURPLE),
      label(point(365, 230), "bd", PURPLE),
      label(point(210, 35), "c", BASE),
      label(point(365, 35), "d", BASE),
      label(point(90, 120), "a", BASE),
      label(point(90, 230), "b", BASE),
      label(point(275, 325), "(a+b)(c+d)=ac+ad+bc+bd", ORANGE),
    ],
  };
}

function squareFormulaScene(): DiagramScene {
  return {
    width: 520,
    height: 350,
    ariaLabel:
      "1辺a+bの正方形をaとbで分割し、面積がa²、ab、ab、b²の4領域になるため(a+b)²=a²+2ab+b²と分かる図。",
    responsive: { minWidth: 460, allowHorizontalScroll: true },
    elements: [
      {
        kind: "polygon",
        points: [point(130, 50), point(410, 50), point(410, 290), point(130, 290)],
        color: BLUE,
      },
      { kind: "segment", from: point(330, 50), to: point(330, 290), color: ORANGE },
      { kind: "segment", from: point(130, 210), to: point(410, 210), color: GREEN },
      label(point(230, 130), "a²", PURPLE),
      label(point(370, 130), "ab", PURPLE),
      label(point(230, 250), "ab", PURPLE),
      label(point(370, 250), "b²", PURPLE),
      label(point(270, 325), "(a+b)²=a²+2ab+b²", ORANGE),
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "binomial-expansion-distributive": {
    rule: distributiveAreaScene(),
    example: distributiveAreaScene(),
  },
  "square-expansion": { rule: squareFormulaScene(), example: squareFormulaScene() },
  "square-factorization": { rule: squareFormulaScene() },
};

export const getMiddleMath3PolynomialLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
