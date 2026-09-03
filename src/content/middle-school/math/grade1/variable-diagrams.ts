import type { DiagramElement, DiagramPoint, DiagramScene } from "../../../../lib/diagram";
import type { MathLessonDiagrams } from "../../../math1/diagrams";

const AXIS_COLOR = "#52606d";
const RANGE_COLOR = "#2563eb";

const point = (x: number, y: number): DiagramPoint => ({ x, y });

function numberLineX(value: number, min: number, max: number, left: number, right: number) {
  if (!(max > min)) throw new Error("number line scale requires max > min");
  return left + ((value - min) / (max - min)) * (right - left);
}

function createVariableDomainScene(): DiagramScene {
  const width = 520;
  const height = 230;
  const min = -1;
  const max = 6;
  const left = 55;
  const right = 465;
  const y = 145;
  const domainMinX = numberLineX(0, min, max, left, right);
  const domainMaxX = numberLineX(5, min, max, left, right);
  const elements: DiagramElement[] = [
    { kind: "segment", from: point(left, y), to: point(right, y), color: AXIS_COLOR },
    { kind: "segment", from: point(right, y), to: point(right - 10, y - 6), color: AXIS_COLOR },
    { kind: "segment", from: point(right, y), to: point(right - 10, y + 6), color: AXIS_COLOR },
  ];

  for (let value = min; value <= max; value += 1) {
    const x = numberLineX(value, min, max, left, right);
    elements.push(
      {
        kind: "segment",
        from: point(x, y - 6),
        to: point(x, y + 6),
        color: AXIS_COLOR,
      },
      {
        kind: "label",
        at: point(x, y + 26),
        text: String(value).replace("-", "−"),
        color: AXIS_COLOR,
      },
    );
  }

  elements.push(
    {
      kind: "segment",
      from: point(domainMinX, y),
      to: point(domainMaxX, y),
      color: RANGE_COLOR,
    },
    { kind: "point", x: domainMinX, y, radius: 6, color: RANGE_COLOR },
    { kind: "point", x: domainMaxX, y, radius: 6, color: RANGE_COLOR },
    {
      kind: "label",
      at: point((domainMinX + domainMaxX) / 2, 58),
      text: "0 ≤ x ≤ 5",
      color: RANGE_COLOR,
    },
    {
      kind: "label",
      at: point((domainMinX + domainMaxX) / 2, 88),
      text: "この区間が x の変域",
      color: RANGE_COLOR,
    },
    {
      kind: "label",
      at: point((domainMinX + domainMaxX) / 2, 208),
      text: "0 と 5 も変域に含む",
      color: RANGE_COLOR,
    },
    {
      kind: "label",
      at: point(right - 2, y - 18),
      text: "x",
      align: "end",
      color: AXIS_COLOR,
    },
  );

  return {
    width,
    height,
    ariaLabel:
      "x軸上で0から5までの区間を青い線で示し、0と5を塗りつぶした点で示す。xの変域は0以上5以下で、0と5も含む。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements,
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "variables-domain": { rule: createVariableDomainScene() },
};

export const getMiddleMath1VariableLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
