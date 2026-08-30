import { expandDiagramElement } from "./symbols";
import type {
  CoreDiagramElement,
  DiagramEditPermissions,
  DiagramEditorHelpers,
  DiagramEditorTool,
  DiagramElement,
  DiagramPoint,
  DiagramScene,
  DomainSymbolElement,
} from "./types";

const SVG_NS = "http://www.w3.org/2000/svg";
const OWN_COLOR = "#39464f";
const MODEL_COLOR = "#9a5b46";
const GRID_COLOR = "#d8dde0";
const SELECT_COLOR = "#315f78";
const DEFAULT_LEARNER_EDIT: Required<DiagramEditPermissions> = {
  movable: true,
  deletable: true,
  resizable: false,
  rotatable: false,
};

type ViewBox = { x: number; y: number; width: number; height: number };
type SnapResult = { point: DiagramPoint; ref?: string };
type DragState = {
  id: string;
  start: DiagramPoint;
  before: DiagramScene;
};

type EditorState = {
  root: HTMLElement;
  svg: SVGSVGElement;
  baseScene: DiagramScene;
  scene: DiagramScene;
  modelAnswer?: DiagramScene;
  tools: DiagramEditorTool[];
  helpers: DiagramEditorHelpers;
  activeToolIndex: number | null;
  selectedId: string | null;
  answerRevealed: boolean;
  modelVisible: boolean;
  panMode: boolean;
  draftStart: SnapResult | null;
  polygonDraft: SnapResult[];
  undo: DiagramScene[];
  redo: DiagramScene[];
  drag: DragState | null;
  view: ViewBox;
  pointers: Map<number, DiagramPoint>;
  pinchDistance: number | null;
  learnerCounter: number;
};

export const initializeDiagramEditors = () => {
  for (const root of document.querySelectorAll("[data-diagram-editor]")) {
    if (!(root instanceof HTMLElement) || root.dataset.editorReady === "true") continue;
    const svg = root.querySelector("svg");
    if (!(svg instanceof SVGSVGElement)) continue;
    const scene = parseJson<DiagramScene>(root.dataset.scene);
    const tools = parseJson<DiagramEditorTool[]>(root.dataset.tools) ?? [];
    const modelAnswer = parseJson<DiagramScene>(root.dataset.modelAnswer);
    const helpers = parseJson<DiagramEditorHelpers>(root.dataset.helpers) ?? {};
    if (!scene) continue;

    root.dataset.editorReady = "true";
    const runtimeScene = ensureRuntimeIds(clone(scene), "authored");
    const state: EditorState = {
      root,
      svg,
      baseScene: clone(runtimeScene),
      scene: runtimeScene,
      modelAnswer: modelAnswer ? ensureRuntimeIds(clone(modelAnswer), "model") : undefined,
      tools,
      helpers,
      activeToolIndex: null,
      selectedId: null,
      answerRevealed: false,
      modelVisible: false,
      panMode: false,
      draftStart: null,
      polygonDraft: [],
      undo: [],
      redo: [],
      drag: null,
      view: { x: 0, y: 0, width: scene.width, height: scene.height },
      pointers: new Map(),
      pinchDistance: null,
      learnerCounter: 1,
    };
    bindControls(state);
    bindPointerEvents(state);
    bindResize(state);
    render(state);
  }
};

const bindControls = (state: EditorState) => {
  const { root } = state;
  root.querySelector("[data-select-tool]")?.addEventListener("click", () => selectTool(state));
  root.querySelectorAll("[data-tool-index]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!(button instanceof HTMLButtonElement) || state.answerRevealed) return;
      const index = Number(button.dataset.toolIndex);
      if (!Number.isInteger(index) || !state.tools[index]) return;
      state.activeToolIndex = index;
      state.panMode = false;
      state.selectedId = null;
      clearDraft(state);
      updateControls(state);
      setStatus(state, `${state.tools[index].label}を連続して配置できます。`);
    });
  });
  root.querySelector("[data-pan-tool]")?.addEventListener("click", () => {
    state.panMode = !state.panMode;
    state.activeToolIndex = null;
    state.selectedId = null;
    clearDraft(state);
    updateControls(state);
    setStatus(state, state.panMode ? "図をドラッグして表示位置を移動できます。" : "表示移動を終了しました。");
  });
  root.querySelector("[data-cancel-tool]")?.addEventListener("click", () => selectTool(state));
  root.querySelector("[data-finish-shape]")?.addEventListener("click", () => finishPolygon(state));
  root.querySelector("[data-undo]")?.addEventListener("click", () => undo(state));
  root.querySelector("[data-redo]")?.addEventListener("click", () => redo(state));
  root.querySelector("[data-delete]")?.addEventListener("click", () => deleteSelected(state));
  root.querySelector("[data-shrink]")?.addEventListener("click", () => resizeSelected(state, 0.9));
  root.querySelector("[data-grow]")?.addEventListener("click", () => resizeSelected(state, 1.1));
  root.querySelector("[data-rotate]")?.addEventListener("click", () => rotateSelected(state, 15));
  root.querySelector("[data-zoom-out]")?.addEventListener("click", () => zoomView(state, 1.25));
  root.querySelector("[data-zoom-in]")?.addEventListener("click", () => zoomView(state, 0.8));
  root.querySelector("[data-zoom-reset]")?.addEventListener("click", () => {
    state.view = { x: 0, y: 0, width: state.scene.width, height: state.scene.height };
    render(state);
  });
  root.querySelector("[data-answer-toggle]")?.addEventListener("click", () => toggleAnswer(state));

  root.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      selectTool(state);
      return;
    }
    if (event.key === "Enter" && state.polygonDraft.length >= 3) {
      event.preventDefault();
      finishPolygon(state);
    }
  });
};

const bindPointerEvents = (state: EditorState) => {
  const { svg } = state;
  svg.addEventListener("pointerdown", (event) => {
    svg.setPointerCapture(event.pointerId);
    const at = eventPoint(state, event);
    state.pointers.set(event.pointerId, at);
    if (state.pointers.size === 2) {
      const points = [...state.pointers.values()];
      state.pinchDistance = distance(points[0], points[1]);
      return;
    }

    if (state.panMode || state.answerRevealed) {
      state.drag = { id: "__pan__", start: at, before: clone(state.scene) };
      return;
    }

    if (state.activeToolIndex !== null) {
      handleToolPoint(state, at);
      return;
    }

    const target = event.target instanceof Element ? event.target.closest("[data-element-id]") : null;
    const id = target instanceof SVGElement ? target.dataset.elementId : undefined;
    state.selectedId = id || null;
    if (state.selectedId) {
      const element = findElement(state.scene, state.selectedId);
      if (element?.edit?.movable === true) {
        state.drag = { id: state.selectedId, start: at, before: clone(state.scene) };
      }
    }
    render(state);
  });

  svg.addEventListener("pointermove", (event) => {
    const current = eventPoint(state, event);
    state.pointers.set(event.pointerId, current);
    if (state.pointers.size === 2) {
      const points = [...state.pointers.values()];
      const nextDistance = distance(points[0], points[1]);
      if (state.pinchDistance && nextDistance > 0) {
        const factor = state.pinchDistance / nextDistance;
        zoomView(state, factor, midpoint(points[0], points[1]));
      }
      state.pinchDistance = nextDistance;
      return;
    }
    if (!state.drag) return;
    const dx = current.x - state.drag.start.x;
    const dy = current.y - state.drag.start.y;
    if (state.drag.id === "__pan__") {
      state.view.x -= dx;
      state.view.y -= dy;
      state.drag.start = current;
      render(state);
      return;
    }
    const element = findElement(state.scene, state.drag.id);
    const beforeElement = findElement(state.drag.before, state.drag.id);
    if (!element || !beforeElement) return;
    replaceElement(state.scene, state.drag.id, translateElement(beforeElement, dx, dy));
    render(state);
  });

  const finishPointer = (event: PointerEvent) => {
    state.pointers.delete(event.pointerId);
    if (state.pointers.size < 2) state.pinchDistance = null;
    if (!state.drag) return;
    if (state.drag.id !== "__pan__" && JSON.stringify(state.drag.before) !== JSON.stringify(state.scene)) {
      state.undo.push(state.drag.before);
      state.redo = [];
    }
    state.drag = null;
    updateControls(state);
  };
  svg.addEventListener("pointerup", finishPointer);
  svg.addEventListener("pointercancel", finishPointer);
  svg.addEventListener("wheel", (event) => {
    event.preventDefault();
    zoomView(state, event.deltaY > 0 ? 1.1 : 0.9, eventPoint(state, event));
  }, { passive: false });
};

const bindResize = (state: EditorState) => {
  const viewport = state.root.querySelector("[data-editor-viewport]");
  if (!(viewport instanceof HTMLElement) || typeof ResizeObserver === "undefined") return;
  const observer = new ResizeObserver(() => {
    const available = viewport.clientWidth;
    if (available <= 0) return;
    const padding = state.baseScene.responsive?.padding ?? 24;
    const minimumScale = 0.72;
    const scale = Math.max(minimumScale, Math.min(1, (available - padding) / state.baseScene.width));
    const learner = state.scene.elements.filter((element) => element.source === "learner");
    const authored = state.baseScene.elements.map((element) => scaleElementFromOrigin(element, scale));
    state.scene = { ...state.scene, elements: [...authored, ...learner] };
    render(state);
  });
  observer.observe(viewport);
};

const handleToolPoint = (state: EditorState, rawPoint: DiagramPoint) => {
  const tool = state.activeToolIndex === null ? undefined : state.tools[state.activeToolIndex];
  if (!tool) return;
  const snapped = snapPoint(state, rawPoint);

  if (tool.kind === "point") {
    commit(state, () => addLearnerElement(state, tool, { kind: "point", x: snapped.point.x, y: snapped.point.y, refs: snapped.ref ? [snapped.ref] : [] }));
    return;
  }
  if (tool.kind === "symbol") {
    commit(state, () => {
      const element: DomainSymbolElement = {
        kind: "symbol",
        domain: tool.domain,
        symbol: tool.symbol as DomainSymbolElement["symbol"],
        at: snapped.point,
        width: tool.width,
        height: tool.height,
        refs: snapped.ref ? [snapped.ref] : [],
      } as DomainSymbolElement;
      addLearnerElement(state, tool, element);
    });
    return;
  }
  if (tool.kind === "polygon") {
    state.polygonDraft.push(snapped);
    updateControls(state);
    setStatus(state, `${state.polygonDraft.length}点を指定しました。3点以上で「図形を確定」を押します。`);
    return;
  }

  if (!state.draftStart) {
    state.draftStart = snapped;
    updateControls(state);
    setStatus(state, `${tool.label}の始点を指定しました。終点を選んでください。`);
    return;
  }

  const adjusted = assistSecondPoint(state, state.draftStart.point, snapped.point);
  const refs = [state.draftStart.ref, snapped.ref].filter((value): value is string => Boolean(value));
  commit(state, () => {
    if (tool.kind === "circle") {
      addLearnerElement(state, tool, {
        kind: "circle",
        center: state.draftStart?.point ?? snapped.point,
        radius: Math.max(4, distance(state.draftStart?.point ?? snapped.point, adjusted)),
        refs,
      });
    } else {
      addLearnerElement(state, tool, {
        kind: tool.kind,
        from: state.draftStart?.point ?? snapped.point,
        to: adjusted,
        refs,
      });
    }
  });
  state.draftStart = null;
  updateControls(state);
  setStatus(state, `${tool.label}を配置しました。同じツールを続けて使えます。`);
};

const finishPolygon = (state: EditorState) => {
  if (state.answerRevealed || state.polygonDraft.length < 3 || state.activeToolIndex === null) return;
  const tool = state.tools[state.activeToolIndex];
  if (tool?.kind !== "polygon") return;
  const draft = [...state.polygonDraft];
  commit(state, () => addLearnerElement(state, tool, {
    kind: "polygon",
    points: draft.map((value) => value.point),
    refs: [...new Set(draft.map((value) => value.ref).filter((value): value is string => Boolean(value)))],
  }));
  state.polygonDraft = [];
  updateControls(state);
  setStatus(state, "多角形を配置しました。同じツールを続けて使えます。");
};

const addLearnerElement = (
  state: EditorState,
  tool: DiagramEditorTool,
  element: DiagramElement,
) => {
  const edit = { ...DEFAULT_LEARNER_EDIT, ...(tool.edit ?? {}) };
  state.scene.elements.push({
    ...element,
    id: `learner-${state.learnerCounter++}`,
    source: "learner",
    edit,
  } as DiagramElement);
};

const assistSecondPoint = (state: EditorState, start: DiagramPoint, end: DiagramPoint) => {
  let result = { ...end };
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  if (state.helpers.horizontalVerticalAssist) {
    if (Math.abs(dx) > Math.abs(dy) * 2.5) result.y = start.y;
    else if (Math.abs(dy) > Math.abs(dx) * 2.5) result.x = start.x;
  }
  if (state.helpers.angleAssist) {
    const radius = distance(start, result);
    const angle = Math.atan2(result.y - start.y, result.x - start.x);
    const step = Math.PI / 12;
    const snappedAngle = Math.round(angle / step) * step;
    result = { x: start.x + Math.cos(snappedAngle) * radius, y: start.y + Math.sin(snappedAngle) * radius };
  }
  return result;
};

const snapPoint = (state: EditorState, input: DiagramPoint): SnapResult => {
  if (!state.helpers.snap) return { point: applyGrid(state, input) };
  const threshold = (state.view.width / Math.max(state.svg.clientWidth, 1)) * 14;
  let best: { point: DiagramPoint; ref: string; distance: number } | null = null;
  for (const element of state.scene.elements) {
    if (!element.id) continue;
    for (const anchor of anchorsOf(element)) {
      const currentDistance = distance(input, anchor);
      if (currentDistance <= threshold && (!best || currentDistance < best.distance)) {
        best = { point: anchor, ref: element.id, distance: currentDistance };
      }
    }
  }
  if (best) return { point: best.point, ref: best.ref };
  return { point: applyGrid(state, input) };
};

const applyGrid = (state: EditorState, input: DiagramPoint) => {
  if (!state.helpers.grid) return input;
  const step = state.helpers.gridStep ?? 20;
  return { x: Math.round(input.x / step) * step, y: Math.round(input.y / step) * step };
};

const selectTool = (state: EditorState) => {
  state.activeToolIndex = null;
  state.panMode = false;
  clearDraft(state);
  updateControls(state);
  setStatus(state, "選択モードです。");
};

const clearDraft = (state: EditorState) => {
  state.draftStart = null;
  state.polygonDraft = [];
};

const commit = (state: EditorState, action: () => void) => {
  if (state.answerRevealed) return;
  state.undo.push(clone(state.scene));
  state.redo = [];
  action();
  render(state);
};

const undo = (state: EditorState) => {
  if (state.answerRevealed) return;
  const previous = state.undo.pop();
  if (!previous) return;
  state.redo.push(clone(state.scene));
  state.scene = previous;
  state.selectedId = null;
  render(state);
};

const redo = (state: EditorState) => {
  if (state.answerRevealed) return;
  const next = state.redo.pop();
  if (!next) return;
  state.undo.push(clone(state.scene));
  state.scene = next;
  state.selectedId = null;
  render(state);
};

const deleteSelected = (state: EditorState) => {
  if (!state.selectedId || state.answerRevealed) return;
  const element = findElement(state.scene, state.selectedId);
  if (element?.edit?.deletable !== true) return;
  commit(state, () => {
    state.scene.elements = state.scene.elements.filter((value) => value.id !== state.selectedId);
    state.selectedId = null;
  });
};

const resizeSelected = (state: EditorState, factor: number) => {
  if (!state.selectedId || state.answerRevealed) return;
  const element = findElement(state.scene, state.selectedId);
  if (element?.edit?.resizable !== true) return;
  commit(state, () => replaceElement(state.scene, state.selectedId ?? "", resizeElement(element, factor)));
};

const rotateSelected = (state: EditorState, degrees: number) => {
  if (!state.selectedId || state.answerRevealed) return;
  const element = findElement(state.scene, state.selectedId);
  if (element?.edit?.rotatable !== true) return;
  commit(state, () => replaceElement(state.scene, state.selectedId ?? "", rotateElement(element, degrees)));
};

const toggleAnswer = (state: EditorState) => {
  if (!state.modelAnswer) return;
  if (!state.answerRevealed) {
    state.answerRevealed = true;
    state.modelVisible = true;
    state.activeToolIndex = null;
    state.selectedId = null;
    state.panMode = false;
    clearDraft(state);
    setStatus(state, "模範図を重ねて表示しました。作図内容は編集できません。");
  } else {
    state.modelVisible = !state.modelVisible;
    setStatus(state, state.modelVisible ? "模範図を表示しました。" : "模範図を隠しました。");
  }
  render(state);
};

const zoomView = (state: EditorState, factor: number, center?: DiagramPoint) => {
  const nextWidth = Math.max(state.scene.width * 0.35, Math.min(state.scene.width * 2, state.view.width * factor));
  const nextHeight = (nextWidth / state.view.width) * state.view.height;
  const focus = center ?? { x: state.view.x + state.view.width / 2, y: state.view.y + state.view.height / 2 };
  const xRatio = (focus.x - state.view.x) / state.view.width;
  const yRatio = (focus.y - state.view.y) / state.view.height;
  state.view = {
    x: focus.x - nextWidth * xRatio,
    y: focus.y - nextHeight * yRatio,
    width: nextWidth,
    height: nextHeight,
  };
  render(state);
};

const render = (state: EditorState) => {
  state.svg.replaceChildren();
  state.svg.setAttribute("viewBox", `${state.view.x} ${state.view.y} ${state.view.width} ${state.view.height}`);
  state.svg.setAttribute("aria-label", state.scene.ariaLabel);
  const markerId = `diagram-editor-arrow-${state.root.dataset.editorId ?? "default"}`;
  state.svg.append(createMarker(markerId, OWN_COLOR));
  state.svg.append(renderSceneGroup(state.scene, markerId, OWN_COLOR, state.selectedId));
  if (state.modelAnswer && state.answerRevealed && state.modelVisible) {
    const modelMarker = `${markerId}-model`;
    state.svg.append(createMarker(modelMarker, MODEL_COLOR));
    const modelGroup = renderSceneGroup(state.modelAnswer, modelMarker, MODEL_COLOR, null);
    modelGroup.setAttribute("pointer-events", "none");
    modelGroup.setAttribute("aria-hidden", "true");
    state.svg.append(modelGroup);
  }
  renderDraft(state, markerId);
  updateControls(state);
};

const renderSceneGroup = (scene: DiagramScene, markerId: string, color: string, selectedId: string | null) => {
  const group = svgElement("g");
  for (const element of scene.elements) {
    for (const primitive of expandDiagramElement(element)) {
      group.append(renderPrimitive(scene, primitive, markerId, color, primitive.id === selectedId));
    }
  }
  return group;
};

const renderPrimitive = (
  scene: DiagramScene,
  element: CoreDiagramElement,
  markerId: string,
  color: string,
  selected: boolean,
) => {
  const group = svgElement("g");
  if (element.id) group.dataset.elementId = element.id;
  const common = { stroke: selected ? SELECT_COLOR : color, "stroke-width": selected ? "3" : "2", fill: "none", "vector-effect": "non-scaling-stroke" };
  const appendLine = (from: DiagramPoint, to: DiagramPoint, arrow = false) => {
    const line = svgElement("line");
    attrs(line, { ...common, x1: from.x, y1: from.y, x2: to.x, y2: to.y });
    if (arrow) line.setAttribute("marker-end", `url(#${markerId})`);
    group.append(line);
  };

  switch (element.kind) {
    case "point": {
      const circle = svgElement("circle");
      attrs(circle, { cx: element.x, cy: element.y, r: element.radius ?? 3.5, fill: selected ? SELECT_COLOR : color, stroke: selected ? SELECT_COLOR : color });
      group.append(circle);
      break;
    }
    case "segment":
      appendLine(element.from, element.to);
      break;
    case "line": {
      const extended = extendedLine(scene, element.from, element.to);
      appendLine(extended.from, extended.to);
      break;
    }
    case "arrow":
      appendLine(element.from, element.to, true);
      break;
    case "circle": {
      const circle = svgElement("circle");
      attrs(circle, { ...common, cx: element.center.x, cy: element.center.y, r: element.radius });
      group.append(circle);
      break;
    }
    case "ellipse": {
      const ellipse = svgElement("ellipse");
      attrs(ellipse, { ...common, cx: element.center.x, cy: element.center.y, rx: element.radiusX, ry: element.radiusY });
      group.append(ellipse);
      break;
    }
    case "polygon": {
      const polygon = svgElement("polygon");
      attrs(polygon, { ...common, points: element.points.map((value) => `${value.x},${value.y}`).join(" ") });
      group.append(polygon);
      break;
    }
    case "arc": {
      const path = svgElement("path");
      attrs(path, { ...common, d: arcPath(element.center, element.radius, element.startAngle, element.endAngle) });
      group.append(path);
      break;
    }
    case "label": {
      const text = svgElement("text");
      attrs(text, { x: element.at.x, y: element.at.y, fill: color, "text-anchor": element.align ?? "middle", "font-size": "15", "font-family": '"Times New Roman", "Yu Mincho", serif' });
      text.textContent = element.text;
      group.append(text);
      break;
    }
    case "axes": {
      if (element.grid) {
        for (const line of axesGridLines(element)) {
          const grid = svgElement("line");
          attrs(grid, { x1: line.from.x, y1: line.from.y, x2: line.to.x, y2: line.to.y, stroke: GRID_COLOR, "stroke-width": "1", "vector-effect": "non-scaling-stroke" });
          group.append(grid);
        }
      }
      appendLine({ x: element.xMin, y: element.origin.y }, { x: element.xMax, y: element.origin.y });
      appendLine({ x: element.origin.x, y: element.yMin }, { x: element.origin.x, y: element.yMax });
      break;
    }
    case "functionPlot": {
      const polyline = svgElement("polyline");
      attrs(polyline, { ...common, points: element.samples.map((value) => `${value.x},${value.y}`).join(" ") });
      group.append(polyline);
      break;
    }
  }
  return group;
};

const renderDraft = (state: EditorState, markerId: string) => {
  if (state.answerRevealed) return;
  if (state.draftStart) {
    const point = svgElement("circle");
    attrs(point, { cx: state.draftStart.point.x, cy: state.draftStart.point.y, r: 4, fill: SELECT_COLOR });
    point.setAttribute("pointer-events", "none");
    state.svg.append(point);
  }
  if (state.polygonDraft.length > 0) {
    const polyline = svgElement("polyline");
    attrs(polyline, {
      points: state.polygonDraft.map((value) => `${value.point.x},${value.point.y}`).join(" "),
      fill: "none",
      stroke: SELECT_COLOR,
      "stroke-width": "2",
      "stroke-dasharray": "5 4",
      "vector-effect": "non-scaling-stroke",
    });
    polyline.setAttribute("pointer-events", "none");
    state.svg.append(polyline);
  }
  void markerId;
};

const updateControls = (state: EditorState) => {
  const selected = state.selectedId ? findElement(state.scene, state.selectedId) : undefined;
  state.root.querySelectorAll("[data-edit-control]").forEach((control) => {
    if (control instanceof HTMLButtonElement) control.disabled = state.answerRevealed;
  });
  setDisabled(state.root, "[data-undo]", state.answerRevealed || state.undo.length === 0);
  setDisabled(state.root, "[data-redo]", state.answerRevealed || state.redo.length === 0);
  setDisabled(state.root, "[data-delete]", state.answerRevealed || selected?.edit?.deletable !== true);
  setDisabled(state.root, "[data-shrink]", state.answerRevealed || selected?.edit?.resizable !== true);
  setDisabled(state.root, "[data-grow]", state.answerRevealed || selected?.edit?.resizable !== true);
  setDisabled(state.root, "[data-rotate]", state.answerRevealed || selected?.edit?.rotatable !== true);

  const finish = state.root.querySelector("[data-finish-shape]");
  if (finish instanceof HTMLButtonElement) finish.hidden = state.polygonDraft.length < 3 || state.answerRevealed;
  const cancel = state.root.querySelector("[data-cancel-tool]");
  if (cancel instanceof HTMLButtonElement) cancel.hidden = state.activeToolIndex === null && !state.panMode;

  state.root.querySelectorAll("[aria-pressed][data-tool-index], [data-select-tool], [data-pan-tool]").forEach((button) => {
    if (!(button instanceof HTMLButtonElement)) return;
    if (button.hasAttribute("data-select-tool")) button.setAttribute("aria-pressed", String(state.activeToolIndex === null && !state.panMode));
    else if (button.hasAttribute("data-pan-tool")) button.setAttribute("aria-pressed", String(state.panMode));
    else button.setAttribute("aria-pressed", String(Number(button.dataset.toolIndex) === state.activeToolIndex));
  });

  const answer = state.root.querySelector("[data-answer-toggle]");
  if (answer instanceof HTMLButtonElement) {
    answer.textContent = !state.answerRevealed ? "答えを見る" : state.modelVisible ? "模範図を隠す" : "模範図を表示";
  }
};

const eventPoint = (state: EditorState, event: MouseEvent | PointerEvent | WheelEvent): DiagramPoint => {
  const rect = state.svg.getBoundingClientRect();
  return {
    x: state.view.x + ((event.clientX - rect.left) / Math.max(rect.width, 1)) * state.view.width,
    y: state.view.y + ((event.clientY - rect.top) / Math.max(rect.height, 1)) * state.view.height,
  };
};

const ensureRuntimeIds = (scene: DiagramScene, prefix: string) => {
  scene.elements = scene.elements.map((element, index) => ({
    ...element,
    id: element.id ?? `${prefix}-${index + 1}`,
    source: element.source ?? "authored",
  }));
  return scene;
};

const findElement = (scene: DiagramScene, id: string) => scene.elements.find((element) => element.id === id);
const replaceElement = (scene: DiagramScene, id: string, replacement: DiagramElement) => {
  scene.elements = scene.elements.map((element) => (element.id === id ? replacement : element));
};

const translateElement = (element: DiagramElement, dx: number, dy: number): DiagramElement => {
  const move = (value: DiagramPoint) => ({ x: value.x + dx, y: value.y + dy });
  switch (element.kind) {
    case "point": return { ...element, x: element.x + dx, y: element.y + dy };
    case "segment":
    case "line":
    case "arrow": return { ...element, from: move(element.from), to: move(element.to) };
    case "circle":
    case "ellipse":
    case "arc": return { ...element, center: move(element.center) };
    case "polygon": return { ...element, points: element.points.map(move) };
    case "label": return { ...element, at: move(element.at) };
    case "axes": return { ...element, origin: move(element.origin), xMin: element.xMin + dx, xMax: element.xMax + dx, yMin: element.yMin + dy, yMax: element.yMax + dy };
    case "functionPlot": return { ...element, samples: element.samples.map(move) };
    case "symbol": return { ...element, at: move(element.at) };
  }
};

const resizeElement = (element: DiagramElement, factor: number): DiagramElement => {
  switch (element.kind) {
    case "point": return { ...element, radius: (element.radius ?? 3.5) * factor };
    case "circle": return { ...element, radius: element.radius * factor };
    case "ellipse": return { ...element, radiusX: element.radiusX * factor, radiusY: element.radiusY * factor };
    case "arc": return { ...element, radius: element.radius * factor };
    case "symbol": return { ...element, width: (element.width ?? 54) * factor, height: (element.height ?? 40) * factor };
    case "segment":
    case "line":
    case "arrow": {
      const center = midpoint(element.from, element.to);
      return { ...element, from: scaleAround(element.from, center, factor), to: scaleAround(element.to, center, factor) };
    }
    case "polygon": {
      const center = polygonCenter(element.points);
      return { ...element, points: element.points.map((value) => scaleAround(value, center, factor)) };
    }
    case "label":
    case "axes":
    case "functionPlot": return element;
  }
};

const rotateElement = (element: DiagramElement, degrees: number): DiagramElement => {
  if (element.kind === "symbol") return { ...element, rotation: (element.rotation ?? 0) + degrees };
  const rotate = (value: DiagramPoint, center: DiagramPoint) => rotateAround(value, center, degrees);
  if (element.kind === "segment" || element.kind === "line" || element.kind === "arrow") {
    const center = midpoint(element.from, element.to);
    return { ...element, from: rotate(element.from, center), to: rotate(element.to, center) };
  }
  if (element.kind === "polygon") {
    const center = polygonCenter(element.points);
    return { ...element, points: element.points.map((value) => rotate(value, center)) };
  }
  if (element.kind === "ellipse") return element;
  if (element.kind === "arc") return { ...element, startAngle: element.startAngle + degrees, endAngle: element.endAngle + degrees };
  return element;
};

const scaleElementFromOrigin = (element: DiagramElement, factor: number): DiagramElement => {
  const scale = (value: DiagramPoint) => ({ x: value.x * factor, y: value.y * factor });
  switch (element.kind) {
    case "point": return { ...element, x: element.x * factor, y: element.y * factor, radius: element.radius ? element.radius * factor : undefined };
    case "segment":
    case "line":
    case "arrow": return { ...element, from: scale(element.from), to: scale(element.to) };
    case "circle": return { ...element, center: scale(element.center), radius: element.radius * factor };
    case "ellipse": return { ...element, center: scale(element.center), radiusX: element.radiusX * factor, radiusY: element.radiusY * factor };
    case "polygon": return { ...element, points: element.points.map(scale) };
    case "arc": return { ...element, center: scale(element.center), radius: element.radius * factor };
    case "label": return { ...element, at: scale(element.at) };
    case "axes": return { ...element, origin: scale(element.origin), xMin: element.xMin * factor, xMax: element.xMax * factor, yMin: element.yMin * factor, yMax: element.yMax * factor, gridStep: element.gridStep ? element.gridStep * factor : undefined };
    case "functionPlot": return { ...element, samples: element.samples.map(scale) };
    case "symbol": return { ...element, at: scale(element.at), width: element.width ? element.width * factor : undefined, height: element.height ? element.height * factor : undefined };
  }
};

const anchorsOf = (element: DiagramElement): DiagramPoint[] => {
  switch (element.kind) {
    case "point": return [{ x: element.x, y: element.y }];
    case "segment":
    case "line":
    case "arrow": return [element.from, element.to];
    case "circle":
    case "ellipse":
    case "arc": return [element.center];
    case "polygon": return element.points;
    case "label":
    case "symbol": return [element.at];
    case "axes": return [element.origin];
    case "functionPlot": return [];
  }
};

const createMarker = (id: string, color: string) => {
  const defs = svgElement("defs");
  const marker = svgElement("marker");
  attrs(marker, { id, viewBox: "0 0 10 10", refX: "8", refY: "5", markerWidth: "6", markerHeight: "6", orient: "auto-start-reverse" });
  const path = svgElement("path");
  attrs(path, { d: "M 0 0 L 10 5 L 0 10 z", fill: color, stroke: color });
  marker.append(path);
  defs.append(marker);
  return defs;
};

const axesGridLines = (element: Extract<CoreDiagramElement, { kind: "axes" }>) => {
  const result: Array<{ from: DiagramPoint; to: DiagramPoint }> = [];
  const step = element.gridStep ?? 20;
  for (let x = element.origin.x; x <= element.xMax; x += step) result.push({ from: { x, y: element.yMin }, to: { x, y: element.yMax } });
  for (let x = element.origin.x - step; x >= element.xMin; x -= step) result.push({ from: { x, y: element.yMin }, to: { x, y: element.yMax } });
  for (let y = element.origin.y; y <= element.yMax; y += step) result.push({ from: { x: element.xMin, y }, to: { x: element.xMax, y } });
  for (let y = element.origin.y - step; y >= element.yMin; y -= step) result.push({ from: { x: element.xMin, y }, to: { x: element.xMax, y } });
  return result;
};

const extendedLine = (scene: DiagramScene, from: DiagramPoint, to: DiagramPoint) => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy) || 1;
  const factor = (Math.max(scene.width, scene.height) * 2) / length;
  return {
    from: { x: from.x - dx * factor, y: from.y - dy * factor },
    to: { x: to.x + dx * factor, y: to.y + dy * factor },
  };
};

const arcPath = (center: DiagramPoint, radius: number, startAngle: number, endAngle: number) => {
  const start = (startAngle * Math.PI) / 180;
  const end = (endAngle * Math.PI) / 180;
  const x1 = center.x + Math.cos(start) * radius;
  const y1 = center.y + Math.sin(start) * radius;
  const x2 = center.x + Math.cos(end) * radius;
  const y2 = center.y + Math.sin(end) * radius;
  const span = ((endAngle - startAngle) % 360 + 360) % 360;
  return `M ${x1} ${y1} A ${radius} ${radius} 0 ${span > 180 ? 1 : 0} 1 ${x2} ${y2}`;
};

const svgElement = (tag: string) => document.createElementNS(SVG_NS, tag);
const attrs = (element: Element, values: Record<string, string | number>) => {
  for (const [key, value] of Object.entries(values)) element.setAttribute(key, String(value));
};
const setDisabled = (root: HTMLElement, selector: string, disabled: boolean) => {
  const button = root.querySelector(selector);
  if (button instanceof HTMLButtonElement) button.disabled = disabled;
};
const setStatus = (state: EditorState, message: string) => {
  const status = state.root.querySelector("[data-editor-status]");
  if (status instanceof HTMLElement) status.textContent = message;
};
const clone = <T>(value: T): T => structuredClone(value);
const parseJson = <T>(value?: string) => {
  if (!value) return undefined;
  try {
    return JSON.parse(value) as T;
  } catch {
    return undefined;
  }
};
const distance = (first: DiagramPoint, second: DiagramPoint) => Math.hypot(second.x - first.x, second.y - first.y);
const midpoint = (first: DiagramPoint, second: DiagramPoint): DiagramPoint => ({ x: (first.x + second.x) / 2, y: (first.y + second.y) / 2 });
const polygonCenter = (points: DiagramPoint[]) => points.reduce((sum, value) => ({ x: sum.x + value.x / points.length, y: sum.y + value.y / points.length }), { x: 0, y: 0 });
const scaleAround = (value: DiagramPoint, center: DiagramPoint, factor: number): DiagramPoint => ({ x: center.x + (value.x - center.x) * factor, y: center.y + (value.y - center.y) * factor });
const rotateAround = (value: DiagramPoint, center: DiagramPoint, degrees: number): DiagramPoint => {
  const radians = (degrees * Math.PI) / 180;
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  const dx = value.x - center.x;
  const dy = value.y - center.y;
  return { x: center.x + dx * cos - dy * sin, y: center.y + dx * sin + dy * cos };
};
