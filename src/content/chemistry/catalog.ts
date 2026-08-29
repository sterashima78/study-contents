import type { MathArea } from "../math1/types";
import { changesEquilibriumUnits } from "./changes-equilibrium";
import { chemistryRoleUnits } from "./chemistry-role";
import { inorganicUnits } from "./inorganic";
import { organicUnits } from "./organic";
import { statesEquilibriumUnits } from "./states-equilibrium";

export const chemistryAreas: MathArea[] = [
  {
    key: "states-equilibrium",
    title: "物質の状態と平衡",
    description:
      "分子間力、気体、結晶、溶液を、粒子の運動・相互作用と平衡の考え方で統一して学びます。",
    units: statesEquilibriumUnits,
  },
  {
    key: "changes-equilibrium",
    title: "物質の変化と平衡",
    description:
      "反応エネルギー、電池・電気分解、反応速度、化学平衡、電離平衡を量的に扱います。",
    units: changesEquilibriumUnits,
  },
  {
    key: "inorganic-properties",
    title: "無機物質の性質",
    description:
      "典型元素と遷移元素の単体・化合物を周期表、酸化還元、沈殿、錯イオンの観点から整理します。",
    units: inorganicUnits,
  },
  {
    key: "organic-properties",
    title: "有機化合物の性質",
    description:
      "炭化水素、官能基、芳香族化合物、高分子化合物を、構造と反応性の関係から学びます。",
    units: organicUnits,
  },
  {
    key: "chemistry-role",
    title: "化学が果たす役割",
    description:
      "材料・エネルギー・環境・資源循環を題材に、化学が人間生活と持続可能な社会へ果たす役割を考えます。",
    units: chemistryRoleUnits,
  },
];
