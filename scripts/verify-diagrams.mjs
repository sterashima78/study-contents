import { readdir, readFile } from "node:fs/promises";
import { validateDiagramScene } from "../src/lib/diagram/validate.mjs";

const contentDirectory = new URL("../src/content/", import.meta.url);
const issues = [];
const warnings = [];

const validFixture = {
  width: 320,
  height: 220,
  ariaLabel: "三角形と補助線の検証用図",
  elements: [
    { kind: "point", id: "a", x: 60, y: 170 },
    { kind: "point", id: "b", x: 260, y: 170 },
    { kind: "point", id: "c", x: 160, y: 50 },
    { kind: "segment", id: "ab", from: { x: 60, y: 170 }, to: { x: 260, y: 170 } },
    { kind: "segment", id: "ac", from: { x: 60, y: 170 }, to: { x: 160, y: 50 } },
    { kind: "symbol", domain: "circuit", symbol: "resistor", at: { x: 160, y: 200 } },
  ],
  constraints: [{ kind: "order", axis: "x", elements: ["a", "c", "b"] }],
};

collectResult(validateDiagramScene(validFixture, { source: "validator fixture" }));

const invalidFixture = {
  width: 200,
  height: 120,
  ariaLabel: "不正データ検出用",
  elements: [{ kind: "rawSvg", markup: "<script>alert(1)</script>" }],
};
if (validateDiagramScene(invalidFixture, { source: "invalid fixture" }).errors.length === 0) {
  issues.push("invalid fixture: 未対応の rawSvg が拒否されませんでした。");
}

const missingRefFixture = {
  width: 200,
  height: 120,
  ariaLabel: "存在しない参照の検出用",
  elements: [
    { kind: "point", id: "a", x: 20, y: 20 },
    {
      kind: "segment",
      id: "line",
      from: { x: 20, y: 20 },
      to: { x: 120, y: 20 },
      refs: ["missing"],
    },
  ],
};
if (
  validateDiagramScene(missingRefFixture, { source: "missing ref fixture" }).errors.length === 0
) {
  issues.push("missing ref fixture: 存在しない refs が拒否されませんでした。");
}

const polygonContainmentFixture = {
  width: 120,
  height: 120,
  ariaLabel: "多角形包含判定の検証用",
  elements: [
    {
      kind: "polygon",
      id: "triangle",
      points: [
        { x: 0, y: 0 },
        { x: 100, y: 0 },
        { x: 0, y: 100 },
      ],
    },
    { kind: "point", id: "outside", x: 90, y: 90 },
  ],
  constraints: [{ kind: "inside", inner: "outside", outer: "triangle" }],
};
if (
  validateDiagramScene(polygonContainmentFixture, { source: "polygon containment fixture" })
    .warnings.length === 0
) {
  issues.push("polygon containment fixture: 多角形外の点が inside と判定されました。");
}

for (const file of await findJsonFiles(contentDirectory)) {
  let document;
  try {
    document = JSON.parse(await readFile(file, "utf8"));
  } catch {
    continue;
  }
  visit(document, file.pathname.split("/src/content/").at(-1) ?? file.pathname);
}

if (warnings.length > 0) {
  console.warn("Diagram verification warnings:");
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (issues.length > 0) {
  console.error("Diagram verification failed:");
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log(
    "Diagram verification passed: structured diagram data and validator fixtures are valid.",
  );
}

function visit(value, location) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      visit(item, `${location}[${index}]`);
    });
    return;
  }
  if (!value || typeof value !== "object") return;

  for (const [key, child] of Object.entries(value)) {
    const childLocation = `${location}.${key}`;
    if (
      ["diagram", "scene", "initialScene", "modelAnswer"].includes(key) &&
      looksLikeScene(child)
    ) {
      collectResult(validateDiagramScene(child, { source: childLocation }));
    }
    visit(child, childLocation);
  }
}

function collectResult(result) {
  issues.push(...result.errors);
  warnings.push(...result.warnings);
}

function looksLikeScene(value) {
  return Boolean(
    value && typeof value === "object" && !Array.isArray(value) && "elements" in value,
  );
}

async function findJsonFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const child = new URL(entry.name, directory);
    if (entry.isDirectory()) {
      child.pathname += "/";
      files.push(...(await findJsonFiles(child)));
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      files.push(child);
    }
  }
  return files;
}
