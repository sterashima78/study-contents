import type { DiagramElement, DiagramPoint, DiagramScene } from "../../../../lib/diagram";
import type { MathLessonDiagrams } from "../../../math1/diagrams";

const BASE = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#047857";
const point = (x: number, y: number): DiagramPoint => ({ x, y });
const label = (at: DiagramPoint, text: string, color = BASE): DiagramElement => ({ kind: "label", at, text, color, align: "middle" });

function samplingFlowScene(): DiagramScene {
  return {
    width: 560,
    height: 300,
    ariaLabel: "大きな母集団から一部の標本を無作為に抽出し、標本の結果から母集団の傾向を推定する流れを示す模式図。",
    responsive: { minWidth: 470, allowHorizontalScroll: true },
    elements: [
      { kind: "circle", center: point(120, 150), radius: 85, color: BLUE },
      { kind: "circle", center: point(305, 150), radius: 48, color: ORANGE },
      { kind: "arrow", from: point(205, 150), to: point(250, 150), color: BASE },
      { kind: "arrow", from: point(355, 150), to: point(455, 150), color: BASE },
      label(point(120, 150), "母集団", BLUE),
      label(point(305, 150), "標本", ORANGE),
      label(point(465, 135), "推定", GREEN),
      label(point(465, 165), "判断", GREEN),
      label(point(228, 125), "無作為抽出", BASE),
    ],
  };
}

function biasedSamplingScene(): DiagramScene {
  return {
    width: 560,
    height: 300,
    ariaLabel: "母集団の中の異なるグループのうち一部のグループからだけ標本を選ぶと偏りが生じることを示す模式図。",
    responsive: { minWidth: 470, allowHorizontalScroll: true },
    elements: [
      { kind: "polygon", points: [point(55, 55), point(320, 55), point(320, 245), point(55, 245)], color: BLUE },
      { kind: "circle", center: point(130, 120), radius: 38, color: ORANGE },
      { kind: "circle", center: point(240, 120), radius: 38, color: GREEN },
      { kind: "circle", center: point(185, 200), radius: 32, color: BASE },
      { kind: "arrow", from: point(130, 120), to: point(435, 120), color: ORANGE },
      label(point(185, 35), "母集団", BLUE),
      label(point(455, 105), "一部だけから", ORANGE),
      label(point(455, 135), "選ぶと偏る", ORANGE),
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "census-sample-meaning": { rule: samplingFlowScene() },
  "population-sample": { rule: samplingFlowScene(), example: samplingFlowScene() },
  "random-sampling": { rule: samplingFlowScene() },
  "sample-proportion-estimate": { example: samplingFlowScene() },
  "sample-count-estimate": { example: samplingFlowScene() },
  "sampling-bias": { rule: biasedSamplingScene(), example: biasedSamplingScene() },
  "sampling-variability": { rule: samplingFlowScene() },
  "sample-survey-planning": { rule: samplingFlowScene(), example: biasedSamplingScene() },
};

export const getMiddleMath3DataLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
