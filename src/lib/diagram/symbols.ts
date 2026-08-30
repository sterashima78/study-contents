import type {
  CoreDiagramElement,
  DiagramElement,
  DiagramPoint,
  DomainSymbolElement,
} from "./types";

const point = (x: number, y: number): DiagramPoint => ({ x, y });

const rotatePoint = (value: DiagramPoint, center: DiagramPoint, degrees: number) => {
  if (degrees === 0) return value;
  const radians = (degrees * Math.PI) / 180;
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  const dx = value.x - center.x;
  const dy = value.y - center.y;
  return {
    x: center.x + dx * cos - dy * sin,
    y: center.y + dx * sin + dy * cos,
  };
};

const transformPrimitive = (
  primitive: CoreDiagramElement,
  center: DiagramPoint,
  degrees: number,
): CoreDiagramElement => {
  if (degrees === 0) return primitive;
  switch (primitive.kind) {
    case "point": {
      const at = rotatePoint(point(primitive.x, primitive.y), center, degrees);
      return { ...primitive, x: at.x, y: at.y };
    }
    case "segment":
    case "line":
    case "arrow":
      return {
        ...primitive,
        from: rotatePoint(primitive.from, center, degrees),
        to: rotatePoint(primitive.to, center, degrees),
      };
    case "circle":
    case "ellipse":
      return { ...primitive, center: rotatePoint(primitive.center, center, degrees) };
    case "polygon":
      return {
        ...primitive,
        points: primitive.points.map((item) => rotatePoint(item, center, degrees)),
      };
    case "arc":
      return {
        ...primitive,
        center: rotatePoint(primitive.center, center, degrees),
        startAngle: primitive.startAngle + degrees,
        endAngle: primitive.endAngle + degrees,
      };
    case "label":
      return { ...primitive, at: rotatePoint(primitive.at, center, degrees) };
    case "axes":
    case "functionPlot":
      return primitive;
  }
};

const withParentMetadata = (
  parent: DomainSymbolElement,
  primitives: CoreDiagramElement[],
): CoreDiagramElement[] =>
  primitives.map((primitive) => ({
    ...primitive,
    id: parent.id,
    source: parent.source,
    edit: parent.edit,
    refs: parent.refs,
  }));

export const expandDomainSymbol = (element: DomainSymbolElement): CoreDiagramElement[] => {
  const width = element.width ?? 54;
  const height = element.height ?? 40;
  const { x, y } = element.at;
  const left = x - width / 2;
  const right = x + width / 2;
  const top = y - height / 2;
  const bottom = y + height / 2;
  let primitives: CoreDiagramElement[];

  if (element.domain === "circuit") {
    switch (element.symbol) {
      case "battery":
        primitives = [
          { kind: "segment", from: point(left, y), to: point(x - 7, y) },
          { kind: "segment", from: point(x - 7, top + 5), to: point(x - 7, bottom - 5) },
          { kind: "segment", from: point(x + 7, top + 11), to: point(x + 7, bottom - 11) },
          { kind: "segment", from: point(x + 7, y), to: point(right, y) },
        ];
        break;
      case "resistor": {
        const step = width / 8;
        const points = Array.from({ length: 9 }, (_, index) =>
          point(left + step * index, index === 0 || index === 8 ? y : y + (index % 2 ? -9 : 9)),
        );
        primitives = points.slice(0, -1).map((from, index) => ({
          kind: "segment" as const,
          from,
          to: points[index + 1],
        }));
        break;
      }
      case "switch":
        primitives = [
          { kind: "segment", from: point(left, y), to: point(x - 12, y) },
          { kind: "point", x: x - 12, y, radius: 3 },
          { kind: "point", x: x + 12, y, radius: 3 },
          { kind: "segment", from: point(x - 10, y - 2), to: point(x + 9, y - 14) },
          { kind: "segment", from: point(x + 12, y), to: point(right, y) },
        ];
        break;
      case "lamp":
        primitives = [
          { kind: "segment", from: point(left, y), to: point(x - 15, y) },
          { kind: "circle", center: point(x, y), radius: 15 },
          { kind: "segment", from: point(x - 10, y - 10), to: point(x + 10, y + 10) },
          { kind: "segment", from: point(x + 10, y - 10), to: point(x - 10, y + 10) },
          { kind: "segment", from: point(x + 15, y), to: point(right, y) },
        ];
        break;
    }
  } else if (element.domain === "physics") {
    switch (element.symbol) {
      case "mass":
        primitives = [
          {
            kind: "polygon",
            points: [point(left, top), point(right, top), point(right, bottom), point(left, bottom)],
          },
        ];
        break;
      case "pulley":
        primitives = [
          { kind: "circle", center: point(x, y), radius: Math.min(width, height) * 0.35 },
          { kind: "point", x, y, radius: 3 },
          { kind: "segment", from: point(x, top), to: point(x, y - height * 0.35) },
        ];
        break;
    }
  } else if (element.domain === "chemistry") {
    switch (element.symbol) {
      case "atom":
        primitives = [
          { kind: "circle", center: point(x, y), radius: 5 },
          { kind: "ellipse", center: point(x, y), radiusX: width * 0.42, radiusY: height * 0.18 },
          { kind: "ellipse", center: point(x, y), radiusX: width * 0.18, radiusY: height * 0.42 },
        ];
        break;
      case "molecule":
        primitives = [
          { kind: "segment", from: point(x - 10, y), to: point(x + 10, y) },
          { kind: "circle", center: point(x - 15, y), radius: 10 },
          { kind: "circle", center: point(x + 15, y), radius: 10 },
        ];
        break;
      case "beaker":
        primitives = [
          {
            kind: "polygon",
            points: [
              point(left + 8, top),
              point(right - 8, top),
              point(right, bottom),
              point(left, bottom),
            ],
          },
          { kind: "segment", from: point(left + 5, y + 6), to: point(right - 5, y + 6) },
        ];
        break;
    }
  } else {
    switch (element.symbol) {
      case "cell":
        primitives = [
          { kind: "ellipse", center: point(x, y), radiusX: width * 0.48, radiusY: height * 0.44 },
          { kind: "circle", center: point(x + width * 0.12, y), radius: Math.min(width, height) * 0.13 },
        ];
        break;
      case "nucleus":
        primitives = [{ kind: "circle", center: point(x, y), radius: Math.min(width, height) * 0.35 }];
        break;
      case "chromosome":
        primitives = [
          { kind: "segment", from: point(left + 8, top), to: point(right - 8, bottom) },
          { kind: "segment", from: point(right - 8, top), to: point(left + 8, bottom) },
        ];
        break;
    }
  }

  return withParentMetadata(
    element,
    primitives.map((primitive) => transformPrimitive(primitive, element.at, element.rotation ?? 0)),
  );
};

export const expandDiagramElement = (element: DiagramElement): CoreDiagramElement[] =>
  element.kind === "symbol" ? expandDomainSymbol(element) : [element];
