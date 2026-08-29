import type { MathArea } from "../math1/types";
import { countingProbabilityUnits } from "./counting-probability";
import { geometryPropertyUnits } from "./geometry-properties";
import { humanActivityUnits } from "./human-activity";

export const mathAAreas: MathArea[] = [
  {
    key: "counting-probability",
    title: "場合の数と確率",
    description: "数え上げの原則から条件付き確率・期待値まで、事象の構造を整理して考えます。",
    units: countingProbabilityUnits,
  },
  {
    key: "geometry-properties",
    title: "図形の性質",
    description: "三角形・円・空間図形の関係を、比や角度、論理的な説明を通して理解します。",
    units: geometryPropertyUnits,
  },
  {
    key: "human-activity",
    title: "数学と人間の活動",
    description: "整数・記数法・座標・ゲームを題材に、数学が人の活動を支える仕組みを考えます。",
    units: humanActivityUnits,
  },
];
