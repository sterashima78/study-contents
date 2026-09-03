import type { DiagramElement, DiagramScene } from "../../../../lib/diagram";
import type { MathLessonDiagrams } from "../../../math1/diagrams";

const AXIS_COLOR = "#52606d";
const ORANGE = "#c2410c";

function createMultiplicationScene(): DiagramScene {
  const width = 560;
  const height = 250;
  const lineY = 145;
  const xFor = (value: number) => 390 + value * 55;
  const elements: DiagramElement[] = [
    {
      kind: "label",
      at: { x: width / 2, y: 28 },
      text: "−2を3回足す = 左へ2ずつ3回進む",
      color: AXIS_COLOR,
    },
    {
      kind: "arrow",
      from: { x: 45, y: lineY },
      to: { x: 520, y: lineY },
      color: AXIS_COLOR,
    },
  ];

  for (const value of [-6, -4, -2, 0, 2]) {
    const x = xFor(value);
    elements.push(
      {
        kind: "segment",
        from: { x, y: lineY - 6 },
        to: { x, y: lineY + 6 },
        color: AXIS_COLOR,
      },
      {
        kind: "label",
        at: { x, y: lineY + 25 },
        text: String(value).replace("-", "−"),
        color: AXIS_COLOR,
      },
    );
  }

  const jumps: Array<[number, number]> = [
    [0, -2],
    [-2, -4],
    [-4, -6],
  ];
  for (const [from, to] of jumps) {
    elements.push(
      {
        kind: "arrow",
        from: { x: xFor(from), y: 102 },
        to: { x: xFor(to), y: 102 },
        color: ORANGE,
      },
      {
        kind: "label",
        at: { x: (xFor(from) + xFor(to)) / 2, y: 88 },
        text: "−2",
        color: ORANGE,
      },
    );
  }

  elements.push(
    {
      kind: "point",
      x: xFor(-6),
      y: lineY,
      radius: 5,
      color: ORANGE,
    },
    {
      kind: "label",
      at: { x: width / 2, y: 220 },
      text: "(−2)×(+3) = (−2)+(−2)+(−2) = −6",
      color: ORANGE,
    },
  );

  return {
    width,
    height,
    ariaLabel:
      "数直線で0から左へ2ずつ3回進み、マイナス6に着く。マイナス2かけるプラス3を、マイナス2を3回足すこととして表した図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements,
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  multiplication: { rule: createMultiplicationScene() },
};

export const getMiddleMath1SignedNumberLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
