export type DiagramDomain = "physics" | "circuit" | "chemistry" | "biology";

export type DiagramPoint = {
  x: number;
  y: number;
};

export type DiagramEditPermissions = {
  movable?: boolean;
  deletable?: boolean;
  resizable?: boolean;
  rotatable?: boolean;
};

export type DiagramElementBase = {
  id?: string;
  source?: "authored" | "learner";
  edit?: DiagramEditPermissions;
  refs?: string[];
};

export type PointElement = DiagramElementBase & {
  kind: "point";
  x: number;
  y: number;
  radius?: number;
};

export type SegmentElement = DiagramElementBase & {
  kind: "segment";
  from: DiagramPoint;
  to: DiagramPoint;
};

export type LineElement = DiagramElementBase & {
  kind: "line";
  from: DiagramPoint;
  to: DiagramPoint;
};

export type CircleElement = DiagramElementBase & {
  kind: "circle";
  center: DiagramPoint;
  radius: number;
};

export type EllipseElement = DiagramElementBase & {
  kind: "ellipse";
  center: DiagramPoint;
  radiusX: number;
  radiusY: number;
};

export type PolygonElement = DiagramElementBase & {
  kind: "polygon";
  points: DiagramPoint[];
};

export type ArrowElement = DiagramElementBase & {
  kind: "arrow";
  from: DiagramPoint;
  to: DiagramPoint;
};

export type ArcElement = DiagramElementBase & {
  kind: "arc";
  center: DiagramPoint;
  radius: number;
  startAngle: number;
  endAngle: number;
};

export type LabelElement = DiagramElementBase & {
  kind: "label";
  at: DiagramPoint;
  text: string;
  align?: "start" | "middle" | "end";
};

export type AxesElement = DiagramElementBase & {
  kind: "axes";
  origin: DiagramPoint;
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  grid?: boolean;
  gridStep?: number;
};

export type FunctionPlotElement = DiagramElementBase & {
  kind: "functionPlot";
  samples: DiagramPoint[];
  expression?: string;
};

export type CoreDiagramElement =
  | PointElement
  | SegmentElement
  | LineElement
  | CircleElement
  | EllipseElement
  | PolygonElement
  | ArrowElement
  | ArcElement
  | LabelElement
  | AxesElement
  | FunctionPlotElement;

export type PhysicsSymbol = "mass" | "pulley";
export type CircuitSymbol = "battery" | "resistor" | "switch" | "lamp";
export type ChemistrySymbol = "atom" | "molecule" | "beaker";
export type BiologySymbol = "cell" | "nucleus" | "chromosome";

export type DomainSymbolElement = DiagramElementBase &
  (
    | { kind: "symbol"; domain: "physics"; symbol: PhysicsSymbol }
    | { kind: "symbol"; domain: "circuit"; symbol: CircuitSymbol }
    | { kind: "symbol"; domain: "chemistry"; symbol: ChemistrySymbol }
    | { kind: "symbol"; domain: "biology"; symbol: BiologySymbol }
  ) & {
    at: DiagramPoint;
    width?: number;
    height?: number;
    rotation?: number;
  };

export type DiagramElement = CoreDiagramElement | DomainSymbolElement;

export type DiagramConstraint =
  | { kind: "connected"; elements: [string, string] }
  | { kind: "inside"; inner: string; outer: string }
  | { kind: "order"; axis: "x" | "y"; elements: string[] }
  | { kind: "parallel"; elements: [string, string]; tolerance?: number }
  | { kind: "perpendicular"; elements: [string, string]; tolerance?: number }
  | { kind: "angle"; element: string; degrees: number; tolerance?: number }
  | { kind: "distance"; from: string; to: string; value: number; tolerance?: number }
  | {
      kind: "ratio";
      first: [string, string];
      second: [string, string];
      value: number;
      tolerance?: number;
    }
  | { kind: "circuitConnection"; elements: [string, string] };

export type DiagramState = {
  id: string;
  visibleElementIds?: string[];
  transforms?: Record<
    string,
    { translateX?: number; translateY?: number; scale?: number; rotation?: number }
  >;
};

export type DiagramScene = {
  width: number;
  height: number;
  ariaLabel: string;
  elements: DiagramElement[];
  constraints?: DiagramConstraint[];
  responsive?: {
    minWidth?: number;
    padding?: number;
    allowHorizontalScroll?: boolean;
  };
  states?: DiagramState[];
};

export type DiagramSymbolTool = {
  kind: "symbol";
  label: string;
  width?: number;
  height?: number;
  edit?: DiagramEditPermissions;
} & (
  | { domain: "physics"; symbol: PhysicsSymbol }
  | { domain: "circuit"; symbol: CircuitSymbol }
  | { domain: "chemistry"; symbol: ChemistrySymbol }
  | { domain: "biology"; symbol: BiologySymbol }
);

export type DiagramEditorTool =
  | { kind: "point"; label: string; edit?: DiagramEditPermissions }
  | { kind: "segment"; label: string; edit?: DiagramEditPermissions }
  | { kind: "line"; label: string; edit?: DiagramEditPermissions }
  | { kind: "circle"; label: string; edit?: DiagramEditPermissions }
  | { kind: "polygon"; label: string; edit?: DiagramEditPermissions }
  | { kind: "arrow"; label: string; edit?: DiagramEditPermissions }
  | DiagramSymbolTool;

export type DiagramEditorHelpers = {
  snap?: boolean;
  grid?: boolean;
  gridStep?: number;
  angleAssist?: boolean;
  horizontalVerticalAssist?: boolean;
  domainAssist?: boolean;
};
