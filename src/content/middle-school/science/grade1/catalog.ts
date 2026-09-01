import { middleScience1EarthArea } from "./earth-catalog";
import { middleScience1Areas as energyAreas } from "./energy-catalog";
import { middleScience1LifeArea } from "./life-catalog";
import { middleScience1MatterArea } from "./matter-catalog";

export const middleScience1Areas = [
  ...energyAreas,
  middleScience1MatterArea,
  middleScience1LifeArea,
  middleScience1EarthArea,
];
