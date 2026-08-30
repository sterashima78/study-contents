const coreKinds = new Set([
  "point",
  "segment",
  "line",
  "circle",
  "ellipse",
  "polygon",
  "arrow",
  "arc",
  "label",
  "axes",
  "functionPlot",
]);
const symbolKinds = new Map([
  ["physics", new Set(["mass", "pulley"])],
  ["circuit", new Set(["battery", "resistor", "switch", "lamp"])],
  ["chemistry", new Set(["atom", "molecule", "beaker"])],
  ["biology", new Set(["cell", "nucleus", "chromosome"])],
]);
const constraintKinds = new Set([
  "connected",
  "inside",
  "order",
  "parallel",
  "perpendicular",
  "angle",
  "distance",
  "ratio",
  "circuitConnection",
]);

export function validateDiagramScene(scene, options = {}) {
  const source = options.source ?? "diagram";
  const errors = [];
  const warnings = [];
  if (!isObject(scene))
    return { errors: [`${source}: 図データはオブジェクトである必要があります。`], warnings };

  if (!positive(scene.width)) errors.push(`${source}: width は正の有限数にしてください。`);
  if (!positive(scene.height)) errors.push(`${source}: height は正の有限数にしてください。`);
  if (typeof scene.ariaLabel !== "string" || scene.ariaLabel.trim().length === 0) {
    errors.push(`${source}: ariaLabel が必要です。`);
  }
  if (!Array.isArray(scene.elements)) {
    errors.push(`${source}: elements は配列にしてください。`);
    return { errors, warnings };
  }

  const ids = new Map();
  for (const [index, element] of scene.elements.entries()) {
    const location = `${source}.elements[${index}]`;
    validateElement(element, location, errors);
    if (typeof element?.id === "string" && element.id.length > 0) {
      if (ids.has(element.id))
        errors.push(`${location}: id「${element.id}」が図内で重複しています。`);
      else ids.set(element.id, element);
    }
  }

  for (const [index, element] of scene.elements.entries()) {
    if (!Array.isArray(element?.refs)) continue;
    for (const ref of element.refs) {
      if (typeof ref === "string" && !ids.has(ref)) {
        errors.push(`${source}.elements[${index}]: 参照先 id「${ref}」がありません。`);
      }
    }
  }

  if (scene.constraints !== undefined && !Array.isArray(scene.constraints)) {
    errors.push(`${source}: constraints は配列にしてください。`);
  } else {
    for (const [index, constraint] of (scene.constraints ?? []).entries()) {
      validateConstraint(constraint, `${source}.constraints[${index}]`, ids, errors, warnings);
    }
  }

  if (scene.states !== undefined && !Array.isArray(scene.states)) {
    errors.push(`${source}: states は配列にしてください。`);
  }

  return { errors, warnings };
}

export function assertDiagramScene(scene, options = {}) {
  const result = validateDiagramScene(scene, options);
  if (result.warnings.length > 0) {
    for (const warning of result.warnings) console.warn(`Diagram warning: ${warning}`);
  }
  if (result.errors.length > 0) throw new Error(result.errors.join("\n"));
  return scene;
}

function validateElement(element, location, errors) {
  if (!isObject(element) || typeof element.kind !== "string") {
    errors.push(`${location}: kind が必要です。`);
    return;
  }
  if (element.kind === "symbol") {
    const symbols = symbolKinds.get(element.domain);
    if (!symbols?.has(element.symbol)) {
      errors.push(
        `${location}: 未対応の専用記号 ${String(element.domain)}:${String(element.symbol)} です。`,
      );
    }
    validatePoint(element.at, `${location}.at`, errors);
    if (element.width !== undefined && !positive(element.width))
      errors.push(`${location}.width は正の有限数にしてください。`);
    if (element.height !== undefined && !positive(element.height))
      errors.push(`${location}.height は正の有限数にしてください。`);
    if (element.rotation !== undefined && !finite(element.rotation))
      errors.push(`${location}.rotation は有限数にしてください。`);
  } else if (!coreKinds.has(element.kind)) {
    errors.push(`${location}: 未対応の kind「${element.kind}」です。`);
    return;
  } else {
    validateCoreElement(element, location, errors);
  }

  if (element.id !== undefined && (typeof element.id !== "string" || element.id.length === 0)) {
    errors.push(`${location}.id は空でない文字列にしてください。`);
  }
  if (
    element.refs !== undefined &&
    (!Array.isArray(element.refs) || element.refs.some((ref) => typeof ref !== "string"))
  ) {
    errors.push(`${location}.refs は文字列配列にしてください。`);
  }
  if (element.edit !== undefined) {
    if (!isObject(element.edit)) errors.push(`${location}.edit はオブジェクトにしてください。`);
    else {
      for (const key of ["movable", "deletable", "resizable", "rotatable"]) {
        if (element.edit[key] !== undefined && typeof element.edit[key] !== "boolean") {
          errors.push(`${location}.edit.${key} は boolean にしてください。`);
        }
      }
    }
  }
}

function validateCoreElement(element, location, errors) {
  switch (element.kind) {
    case "point":
      validatePoint(element, location, errors);
      if (element.radius !== undefined && !positive(element.radius))
        errors.push(`${location}.radius は正の有限数にしてください。`);
      break;
    case "segment":
    case "line":
    case "arrow":
      validatePoint(element.from, `${location}.from`, errors);
      validatePoint(element.to, `${location}.to`, errors);
      break;
    case "circle":
      validatePoint(element.center, `${location}.center`, errors);
      if (!positive(element.radius)) errors.push(`${location}.radius は正の有限数にしてください。`);
      break;
    case "ellipse":
      validatePoint(element.center, `${location}.center`, errors);
      if (!positive(element.radiusX))
        errors.push(`${location}.radiusX は正の有限数にしてください。`);
      if (!positive(element.radiusY))
        errors.push(`${location}.radiusY は正の有限数にしてください。`);
      break;
    case "polygon":
      if (!Array.isArray(element.points) || element.points.length < 3)
        errors.push(`${location}.points は3点以上必要です。`);
      else {
        element.points.forEach((value, index) => {
          validatePoint(value, `${location}.points[${index}]`, errors);
        });
      }
      break;
    case "arc":
      validatePoint(element.center, `${location}.center`, errors);
      if (!positive(element.radius)) errors.push(`${location}.radius は正の有限数にしてください。`);
      if (!finite(element.startAngle) || !finite(element.endAngle))
        errors.push(`${location}: arc の角度は有限数にしてください。`);
      break;
    case "label":
      validatePoint(element.at, `${location}.at`, errors);
      if (typeof element.text !== "string")
        errors.push(`${location}.text は文字列にしてください。`);
      break;
    case "axes":
      validatePoint(element.origin, `${location}.origin`, errors);
      for (const key of ["xMin", "xMax", "yMin", "yMax"])
        if (!finite(element[key])) errors.push(`${location}.${key} は有限数にしてください。`);
      if (element.gridStep !== undefined && !positive(element.gridStep))
        errors.push(`${location}.gridStep は正の有限数にしてください。`);
      break;
    case "functionPlot":
      if (!Array.isArray(element.samples) || element.samples.length < 2)
        errors.push(`${location}.samples は2点以上必要です。`);
      else {
        element.samples.forEach((value, index) => {
          validatePoint(value, `${location}.samples[${index}]`, errors);
        });
      }
      if (element.expression !== undefined && typeof element.expression !== "string")
        errors.push(`${location}.expression は文字列にしてください。`);
      break;
  }
}

function validateConstraint(constraint, location, ids, errors, warnings) {
  if (!isObject(constraint) || !constraintKinds.has(constraint.kind)) {
    errors.push(`${location}: 未対応の制約です。`);
    return;
  }
  const refs = constraintRefs(constraint);
  for (const ref of refs)
    if (!ids.has(ref)) errors.push(`${location}: 参照先 id「${ref}」がありません。`);
  if (refs.some((ref) => !ids.has(ref))) return;

  if (constraint.kind === "circuitConnection") {
    for (const ref of refs) {
      const element = ids.get(ref);
      if (element.kind === "symbol" && element.domain !== "circuit") {
        errors.push(
          `${location}: circuitConnection は回路記号または基本図形だけを参照してください。`,
        );
      }
    }
  }

  if (constraint.kind === "order") {
    const anchors = refs.map((ref) => anchorOf(ids.get(ref))).filter(Boolean);
    if (anchors.length === refs.length) {
      const values = anchors.map((anchor) => anchor[constraint.axis]);
      if (!values.every((value, index) => index === 0 || values[index - 1] <= value))
        warnings.push(
          `${location}: order 制約を現在の基準座標が満たしていません。近似配置の対象です。`,
        );
    }
    return;
  }

  if (constraint.kind === "inside") {
    const inner = anchorOf(ids.get(constraint.inner));
    const outer = ids.get(constraint.outer);
    if (inner && outer && !contains(outer, inner))
      warnings.push(
        `${location}: inside 制約を現在の基準座標が満たしていません。近似配置の対象です。`,
      );
    return;
  }

  if (constraint.kind === "parallel" || constraint.kind === "perpendicular") {
    const first = vectorOf(ids.get(constraint.elements[0]));
    const second = vectorOf(ids.get(constraint.elements[1]));
    if (!first || !second) return;
    const angle = angleBetween(first, second);
    const target = constraint.kind === "parallel" ? 0 : 90;
    const difference =
      constraint.kind === "parallel"
        ? Math.min(angle, Math.abs(180 - angle))
        : Math.abs(angle - target);
    if (difference > (constraint.tolerance ?? 1))
      warnings.push(`${location}: ${constraint.kind} 制約を現在の基準座標が満たしていません。`);
    return;
  }

  if (constraint.kind === "angle") {
    const vector = vectorOf(ids.get(constraint.element));
    if (!vector) return;
    const actual = normalizeDegrees((Math.atan2(vector.y, vector.x) * 180) / Math.PI);
    const difference = Math.min(
      Math.abs(actual - normalizeDegrees(constraint.degrees)),
      360 - Math.abs(actual - normalizeDegrees(constraint.degrees)),
    );
    if (difference > (constraint.tolerance ?? 1))
      warnings.push(`${location}: angle 制約を現在の基準座標が満たしていません。`);
    return;
  }

  if (constraint.kind === "distance") {
    const from = anchorOf(ids.get(constraint.from));
    const to = anchorOf(ids.get(constraint.to));
    if (!from || !to || !positive(constraint.value)) return;
    const actual = Math.hypot(to.x - from.x, to.y - from.y);
    if (Math.abs(actual - constraint.value) > (constraint.tolerance ?? 1))
      warnings.push(`${location}: distance 制約を現在の基準座標が満たしていません。`);
    return;
  }

  if (constraint.kind === "ratio") {
    if (!positive(constraint.value)) {
      errors.push(`${location}.value は正の有限数にしてください。`);
      return;
    }
    const first = pairDistance(constraint.first, ids);
    const second = pairDistance(constraint.second, ids);
    if (!first || !second) return;
    const actual = first / second;
    if (Math.abs(actual - constraint.value) > (constraint.tolerance ?? 0.02))
      warnings.push(`${location}: ratio 制約を現在の基準座標が満たしていません。`);
  }
}

function constraintRefs(constraint) {
  switch (constraint.kind) {
    case "connected":
    case "parallel":
    case "perpendicular":
    case "circuitConnection":
      return constraint.elements;
    case "inside":
      return [constraint.inner, constraint.outer];
    case "order":
      return constraint.elements;
    case "angle":
      return [constraint.element];
    case "distance":
      return [constraint.from, constraint.to];
    case "ratio":
      return [...constraint.first, ...constraint.second];
    default:
      return [];
  }
}

function anchorOf(element) {
  if (!element) return null;
  if (element.kind === "point") return { x: element.x, y: element.y };
  if (["circle", "ellipse", "arc"].includes(element.kind)) return element.center;
  if (["segment", "line", "arrow"].includes(element.kind))
    return { x: (element.from.x + element.to.x) / 2, y: (element.from.y + element.to.y) / 2 };
  if (element.kind === "polygon") return centroid(element.points);
  if (element.kind === "label" || element.kind === "symbol") return element.at;
  if (element.kind === "axes") return element.origin;
  return null;
}

function vectorOf(element) {
  if (!element || !["segment", "line", "arrow"].includes(element.kind)) return null;
  return { x: element.to.x - element.from.x, y: element.to.y - element.from.y };
}

function contains(outer, inner) {
  if (outer.kind === "circle")
    return Math.hypot(inner.x - outer.center.x, inner.y - outer.center.y) <= outer.radius;
  if (outer.kind === "ellipse") {
    const dx = (inner.x - outer.center.x) / outer.radiusX;
    const dy = (inner.y - outer.center.y) / outer.radiusY;
    return dx * dx + dy * dy <= 1;
  }
  if (outer.kind === "polygon") return pointInPolygon(outer.points, inner);
  return true;
}

function pointInPolygon(points, point) {
  let inside = false;
  for (let index = 0, previous = points.length - 1; index < points.length; previous = index++) {
    const currentPoint = points[index];
    const previousPoint = points[previous];
    if (pointOnSegment(point, previousPoint, currentPoint)) return true;
    const intersects =
      currentPoint.y > point.y !== previousPoint.y > point.y &&
      point.x <
        ((previousPoint.x - currentPoint.x) * (point.y - currentPoint.y)) /
          (previousPoint.y - currentPoint.y) +
          currentPoint.x;
    if (intersects) inside = !inside;
  }
  return inside;
}

function pointOnSegment(point, start, end) {
  const cross = (point.y - start.y) * (end.x - start.x) - (point.x - start.x) * (end.y - start.y);
  if (Math.abs(cross) > 1e-9) return false;
  const dot = (point.x - start.x) * (point.x - end.x) + (point.y - start.y) * (point.y - end.y);
  return dot <= 1e-9;
}

function pairDistance(pair, ids) {
  const first = anchorOf(ids.get(pair[0]));
  const second = anchorOf(ids.get(pair[1]));
  if (!first || !second) return null;
  return Math.hypot(second.x - first.x, second.y - first.y);
}

function centroid(points) {
  if (!Array.isArray(points) || points.length === 0) return null;
  return points.reduce(
    (sum, value) => ({ x: sum.x + value.x / points.length, y: sum.y + value.y / points.length }),
    { x: 0, y: 0 },
  );
}

function angleBetween(first, second) {
  const denominator = Math.hypot(first.x, first.y) * Math.hypot(second.x, second.y);
  if (denominator === 0) return 0;
  const cosine = Math.max(-1, Math.min(1, (first.x * second.x + first.y * second.y) / denominator));
  return (Math.acos(cosine) * 180) / Math.PI;
}

function normalizeDegrees(value) {
  return ((value % 360) + 360) % 360;
}

function validatePoint(value, location, errors) {
  if (!isObject(value) || !finite(value.x) || !finite(value.y))
    errors.push(`${location}: x, y は有限数にしてください。`);
}

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function finite(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function positive(value) {
  return finite(value) && value > 0;
}
