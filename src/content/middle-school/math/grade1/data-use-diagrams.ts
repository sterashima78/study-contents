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

function histogramScene(): DiagramScene {
  const baseline = 255;
  const bars = [70, 130, 195, 95];
  const xPositions = [90, 170, 250, 330];
  return {
    width: 500,
    height: 330,
    ariaLabel:
      "4つの階級の度数を、隙間のない長方形で表したヒストグラム。3番目の階級の度数が最も大きい。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(55, baseline), to: point(430, baseline), color: BASE },
      { kind: "segment", from: point(55, baseline), to: point(55, 45), color: BASE },
      ...bars.map((height, index) => ({
        kind: "polygon" as const,
        points: [
          point(xPositions[index], baseline),
          point(xPositions[index] + 80, baseline),
          point(xPositions[index] + 80, baseline - height),
          point(xPositions[index], baseline - height),
        ],
        color: index === 2 ? ORANGE : BLUE,
      })),
      label(point(250, 302), "階級", BASE),
      label(point(27, 150), "度数", BASE),
      label(point(130, 278), "10〜15", BASE),
      label(point(210, 278), "15〜20", BASE),
      label(point(290, 278), "20〜25", ORANGE),
      label(point(370, 278), "25〜30", BASE),
      label(point(292, 48), "最も多い階級", ORANGE),
    ],
  };
}

function representativeValuesScene(): DiagramScene {
  return {
    width: 500,
    height: 330,
    ariaLabel:
      "4、5、5、6、20の5つの値を数直線上に示し、中央値5と平均値8、離れた値20を区別する図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(65, 190), to: point(445, 190), color: BASE },
      { kind: "point", x: 120, y: 190, radius: 6, color: BLUE },
      { kind: "point", x: 140, y: 190, radius: 8, color: PURPLE },
      { kind: "point", x: 160, y: 190, radius: 6, color: BLUE },
      { kind: "point", x: 200, y: 190, radius: 7, color: GREEN },
      { kind: "point", x: 420, y: 190, radius: 7, color: ORANGE },
      label(point(120, 220), "4", BLUE),
      label(point(140, 220), "5", PURPLE),
      label(point(160, 220), "6", BLUE),
      label(point(200, 220), "平均 8", GREEN),
      label(point(420, 220), "20", ORANGE),
      label(point(140, 135), "中央値・最頻値 5", PURPLE),
      label(point(420, 135), "極端な値", ORANGE),
      label(point(250, 285), "代表値だけでなく分布も確認する", BASE),
    ],
  };
}

function relativeFrequencyScene(): DiagramScene {
  return {
    width: 500,
    height: 330,
    ariaLabel:
      "A組は40人中12人で相対度数0.30、B組は30人中12人で相対度数0.40となり、度数が同じでも割合が異なることを示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "polygon", points: [point(85, 245), point(195, 245), point(195, 125), point(85, 125)], color: BLUE },
      { kind: "polygon", points: [point(300, 245), point(410, 245), point(410, 85), point(300, 85)], color: ORANGE },
      label(point(140, 275), "A組", BLUE),
      label(point(355, 275), "B組", ORANGE),
      label(point(140, 105), "12 / 40 = 0.30", BLUE),
      label(point(355, 65), "12 / 30 = 0.40", ORANGE),
      label(point(250, 315), "人数が違う集団は割合で比較する", BASE),
    ],
  };
}

function cumulativeFrequencyScene(): DiagramScene {
  const values = [3, 7, 13, 20];
  const x = [95, 185, 275, 365];
  const y = values.map((value) => 265 - value * 9);
  return {
    width: 500,
    height: 330,
    ariaLabel:
      "累積度数が3、7、13、20と階級を進むごとに増加し、最後に総度数20と一致することを示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(55, 265), to: point(430, 265), color: BASE },
      { kind: "segment", from: point(55, 265), to: point(55, 55), color: BASE },
      { kind: "segment", from: point(x[0], y[0]), to: point(x[1], y[1]), color: PURPLE },
      { kind: "segment", from: point(x[1], y[1]), to: point(x[2], y[2]), color: PURPLE },
      { kind: "segment", from: point(x[2], y[2]), to: point(x[3], y[3]), color: PURPLE },
      ...x.map((xValue, index) => ({ kind: "point" as const, x: xValue, y: y[index], radius: 6, color: GREEN })),
      ...x.map((xValue, index) => label(point(xValue, y[index] - 18), String(values[index]), GREEN)),
      label(point(250, 302), "小さい階級 → 大きい階級", BASE),
      label(point(395, 62), "最後 = 総度数", ORANGE),
    ],
  };
}

function critiqueScene(): DiagramScene {
  return {
    width: 500,
    height: 330,
    ariaLabel:
      "同じデータを細かい階級幅と粗い階級幅で表した2つの模式的なヒストグラムを並べ、見え方が変わることを示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(40, 250), to: point(230, 250), color: BASE },
      { kind: "polygon", points: [point(55, 250), point(85, 250), point(85, 190), point(55, 190)], color: BLUE },
      { kind: "polygon", points: [point(85, 250), point(115, 250), point(115, 115), point(85, 115)], color: ORANGE },
      { kind: "polygon", points: [point(115, 250), point(145, 250), point(145, 155), point(115, 155)], color: BLUE },
      { kind: "polygon", points: [point(145, 250), point(175, 250), point(175, 105), point(145, 105)], color: ORANGE },
      { kind: "polygon", points: [point(175, 250), point(205, 250), point(205, 195), point(175, 195)], color: BLUE },
      { kind: "segment", from: point(270, 250), to: point(460, 250), color: BASE },
      { kind: "polygon", points: [point(290, 250), point(355, 250), point(355, 105), point(290, 105)], color: GREEN },
      { kind: "polygon", points: [point(355, 250), point(420, 250), point(420, 130), point(355, 130)], color: GREEN },
      label(point(135, 285), "細かい階級幅", BLUE),
      label(point(355, 285), "粗い階級幅", GREEN),
      label(point(250, 55), "同じデータでも見え方を確認する", PURPLE),
    ],
  };
}

function probabilityScene(): DiagramScene {
  const samples = [
    point(75, 95),
    point(115, 195),
    point(155, 130),
    point(205, 170),
    point(260, 145),
    point(320, 155),
    point(390, 150),
  ];
  return {
    width: 500,
    height: 330,
    ariaLabel:
      "試行回数が増えるにつれて相対度数の上下の振れが小さくなり、0.5付近で安定していく模式図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "segment", from: point(55, 260), to: point(440, 260), color: BASE },
      { kind: "segment", from: point(55, 260), to: point(55, 55), color: BASE },
      { kind: "segment", from: point(55, 150), to: point(440, 150), color: GREEN },
      ...samples.slice(0, -1).map((sample, index) => ({
        kind: "segment" as const,
        from: sample,
        to: samples[index + 1],
        color: BLUE,
      })),
      ...samples.map((sample) => ({ kind: "point" as const, x: sample.x, y: sample.y, radius: 5, color: ORANGE })),
      label(point(32, 150), "0.5", GREEN),
      label(point(260, 300), "試行回数が増える", BASE),
      label(point(340, 125), "割合が安定", GREEN),
    ],
  };
}

function predictionScene(): DiagramScene {
  return {
    width: 500,
    height: 330,
    ariaLabel:
      "過去500回中140回という観察から相対度数0.28を求め、今後800回では約224回と見積もる流れを示す図。",
    responsive: { minWidth: 440, allowHorizontalScroll: true },
    elements: [
      { kind: "polygon", points: [point(55, 225), point(180, 225), point(180, 105), point(55, 105)], color: BLUE },
      { kind: "arrow", from: point(205, 165), to: point(285, 165), color: PURPLE },
      { kind: "polygon", points: [point(310, 225), point(435, 225), point(435, 85), point(310, 85)], color: ORANGE },
      label(point(118, 85), "140 / 500 = 0.28", BLUE),
      label(point(372, 65), "800 × 0.28 ≈ 224", ORANGE),
      label(point(118, 255), "過去の観察", BLUE),
      label(point(372, 255), "将来の見積もり", ORANGE),
      label(point(250, 305), "見積もりは断定ではない", BASE),
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "frequency-distribution-range": { rule: histogramScene(), example: histogramScene() },
  "histogram-reading": { rule: histogramScene(), example: histogramScene() },
  "representative-values-distribution": {
    rule: representativeValuesScene(),
    example: representativeValuesScene(),
  },
  "relative-frequency": { rule: relativeFrequencyScene(), example: relativeFrequencyScene() },
  "cumulative-frequency": { rule: cumulativeFrequencyScene(), example: cumulativeFrequencyScene() },
  "data-distribution-critique": { rule: critiqueScene(), example: critiqueScene() },
  "experimental-probability": { rule: probabilityScene(), example: probabilityScene() },
  "probability-from-observations": { rule: predictionScene(), example: predictionScene() },
};

export const getMiddleMath1DataLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
