import type { MathArea } from "../math1/types";
import { chemistryAndMatterUnits } from "./chemistry-and-matter";
import { matterChangeUnits } from "./matter-changes";
import { matterStructureUnits } from "./matter-structure";

export const chemistryBasicAreas: MathArea[] = [
  {
    key: "chemistry-human-life",
    title: "化学と人間生活",
    description:
      "身近な物質を題材に、化学の特徴、分離・精製、単体と化合物、熱運動と物質の三態を学びます。",
    units: chemistryAndMatterUnits,
  },
  {
    key: "matter-structure",
    title: "物質の構成",
    description:
      "原子の構造と電子配置から出発し、イオン結合、共有結合、金属結合と物質の性質を結び付けます。",
    units: matterStructureUnits,
  },
  {
    key: "matter-change-use",
    title: "物質の変化とその利用",
    description:
      "物質量と化学反応式、酸・塩基、酸化還元を学び、化学が社会を支える仕組みへつなげます。",
    units: matterChangeUnits,
  },
];
