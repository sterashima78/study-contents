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

const boxPlotElements = (
  y: number,
  positions: [number, number, number, number, number],
  color: string,
): DiagramElement[] => {
  const [minimum, q1, median, q3, maximum] = positions;
  return [
    { kind: "segment", from: point(minimum, y), to: point(q1, y), color },
    { kind: "segment", from: point(q3, y), to: point(maximum, y), color },
    { kind: "segment", from: point(minimum, y - 25), to: point(minimum, y + 25), color },
    { kind: "segment", from: point(maximum, y - 25), to: point(maximum, y + 25), color },
    {
      kind: "polygon",
      points: [point(q1, y - 42), point(q3, y - 42), point(q3, y + 42), point(q1, y + 42)],
      color,
    },
    { kind: "segment", from: point(median, y - 42), to: point(median, y + 42), color: PURPLE },
  ];
};

function quartileBoxPlotScene(): DiagramScene {
  return {
    width: 520,
    height: 330,
    ariaLabel:
      "最小値4、第1四分位数8、中央値11、第3四分位数15、最大値20を横向きの箱ひげ図で示し、箱の幅が四分位範囲であることを示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(65, 255), to: point(455, 255), color: BASE },
      ...boxPlotElements(150, [120, 185, 235, 305, 390], BLUE),
      label(point(120, 220), "最小値 4", BASE),
      label(point(185, 90), "Q1=8", GREEN),
      label(point(235, 90), "中央値 11", PURPLE),
      label(point(305, 90), "Q3=15", GREEN),
      label(point(390, 220), "最大値 20", BASE),
      label(point(245, 315), "箱の幅 = Q3 − Q1", ORANGE),
    ],
  };
}

function comparisonScene(): DiagramScene {
  return {
    width: 520,
    height: 360,
    ariaLabel:
      "同じ尺度上にAとBの二つの箱ひげ図を並べ、Bは中央値が大きく、箱の幅も広いことを比較する図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      ...boxPlotElements(120, [90, 165, 225, 285, 365], BLUE),
      ...boxPlotElements(245, [105, 145, 270, 365, 430], ORANGE),
      label(point(55, 125), "A", BLUE),
      label(point(55, 250), "B", ORANGE),
      label(point(225, 55), "中央値", PURPLE),
      label(point(270, 310), "Bは中央値も四分位範囲も大きい", BASE),
      label(point(260, 345), "分布の細かな形は箱ひげ図だけでは分からない", GREEN),
    ],
  };
}

function probabilityMeaningScene(): DiagramScene {
  const samples = [
    point(90, 90),
    point(135, 215),
    point(185, 150),
    point(245, 185),
    point(315, 165),
    point(390, 170),
  ];
  return {
    width: 520,
    height: 330,
    ariaLabel:
      "さいころの特定の目の理論的確率1/6を水平線で示し、試行回数が増えるにつれて観察した相対度数がその近くで安定する模式図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(60, 260), to: point(450, 260), color: BASE },
      { kind: "segment", from: point(60, 260), to: point(60, 55), color: BASE },
      { kind: "segment", from: point(60, 170), to: point(450, 170), color: GREEN },
      ...samples.slice(0, -1).map((sample, index) => ({
        kind: "segment" as const,
        from: sample,
        to: samples[index + 1],
        color: BLUE,
      })),
      ...samples.map((sample) => ({
        kind: "point" as const,
        x: sample.x,
        y: sample.y,
        radius: 5,
        color: ORANGE,
      })),
      label(point(35, 170), "1/6", GREEN),
      label(point(275, 302), "試行回数が増える", BASE),
      label(point(350, 142), "理論的な確率の近くで安定", GREEN),
    ],
  };
}

function outcomeTreeScene(): DiagramScene {
  const root = point(80, 175);
  const firstHead = point(220, 95);
  const firstTail = point(220, 255);
  const hh = point(410, 55);
  const ht = point(410, 135);
  const th = point(410, 215);
  const tt = point(410, 295);
  return {
    width: 520,
    height: 350,
    ariaLabel:
      "公平な硬貨を2枚投げる結果を樹形図で整理し、表表、表裏、裏表、裏裏の4通りを漏れなく示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: root, to: firstHead, color: BLUE },
      { kind: "segment", from: root, to: firstTail, color: ORANGE },
      { kind: "segment", from: firstHead, to: hh, color: BLUE },
      { kind: "segment", from: firstHead, to: ht, color: BLUE },
      { kind: "segment", from: firstTail, to: th, color: ORANGE },
      { kind: "segment", from: firstTail, to: tt, color: ORANGE },
      label(point(145, 115), "表", BLUE),
      label(point(145, 235), "裏", ORANGE),
      label(point(440, 55), "表・表", BASE, "start"),
      label(point(440, 135), "表・裏", GREEN, "start"),
      label(point(440, 215), "裏・表", GREEN, "start"),
      label(point(440, 295), "裏・裏", BASE, "start"),
      label(point(270, 330), "4通りを漏れなく数える", PURPLE),
    ],
  };
}

function fairnessScene(): DiagramScene {
  return {
    width: 520,
    height: 330,
    ariaLabel:
      "Aの当選確率1/3とBの当選確率2/5を同じ尺度の棒で比較し、Bの方が当たりやすいため公平ではない例を示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(65, 250), to: point(455, 250), color: BASE },
      {
        kind: "polygon",
        points: [point(120, 250), point(220, 250), point(220, 150), point(120, 150)],
        color: BLUE,
      },
      {
        kind: "polygon",
        points: [point(300, 250), point(400, 250), point(400, 130), point(300, 130)],
        color: ORANGE,
      },
      label(point(170, 280), "A", BLUE),
      label(point(350, 280), "B", ORANGE),
      label(point(170, 125), "1/3", BLUE),
      label(point(350, 105), "2/5", ORANGE),
      label(point(260, 55), "確率を同じ基準で比べる", PURPLE),
      label(point(260, 315), "Bの方が当たりやすい", GREEN),
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "quartile-values": { rule: quartileBoxPlotScene(), example: quartileBoxPlotScene() },
  "interquartile-range": { rule: quartileBoxPlotScene(), example: quartileBoxPlotScene() },
  "box-plot-reading": { rule: quartileBoxPlotScene(), example: quartileBoxPlotScene() },
  "box-plot-comparison-critique": { rule: comparisonScene(), example: comparisonScene() },
  "theoretical-probability-meaning": {
    rule: probabilityMeaningScene(),
    example: probabilityMeaningScene(),
  },
  "equally-likely-outcomes": { rule: outcomeTreeScene() },
  "count-outcomes-systematically": { rule: outcomeTreeScene(), example: outcomeTreeScene() },
  "basic-probability": { rule: outcomeTreeScene() },
  "two-step-probability": { rule: outcomeTreeScene(), example: outcomeTreeScene() },
  "probability-comparison-fairness": { rule: fairnessScene(), example: fairnessScene() },
  "probability-not-guarantee": { rule: probabilityMeaningScene() },
  "probability-application": { rule: fairnessScene(), example: outcomeTreeScene() },
};

export const getMiddleMath2DataLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
