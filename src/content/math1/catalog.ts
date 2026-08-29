import { algebraUnits } from "./algebra";
import { dataAnalysisUnits } from "./data-analysis";
import { geometryUnits } from "./geometry";
import { quadraticUnits } from "./quadratic";
import type { MathArea } from "./types";

export const math1Areas: MathArea[] = [
  {
    key: "algebra",
    title: "数と式",
    description: "数や式の扱い方を整理し、数学Iの計算と論理の土台をつくります。",
    units: algebraUnits,
  },
  {
    key: "geometry",
    title: "図形と計量",
    description: "三角比を使って、角度・長さ・面積を数量として捉えます。",
    units: geometryUnits,
  },
  {
    key: "quadratic",
    title: "二次関数",
    description: "グラフと式を行き来しながら、変化の特徴や条件を読み取ります。",
    units: quadraticUnits,
  },
  {
    key: "data-analysis",
    title: "データの分析",
    description: "データの散らばりや関係を数値とグラフで捉え、判断につなげます。",
    units: dataAnalysisUnits,
  },
];

export const findMath1Area = (areaKey: string) => math1Areas.find((area) => area.key === areaKey);
