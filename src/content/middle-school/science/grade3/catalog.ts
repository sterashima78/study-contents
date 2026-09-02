import { middleScience3EarthArea } from "./earth-catalog";
import { middleScience3Areas as energyAreas } from "./energy-catalog";
import { middleScience3LifeArea } from "./life-catalog";
import { middleScience3ParticleArea } from "./particles-catalog";
import { addMiddleScience3SustainabilityUnits } from "./sustainability-catalog";

export const middleScience3Areas = addMiddleScience3SustainabilityUnits([
  ...energyAreas,
  middleScience3ParticleArea,
  middleScience3LifeArea,
  middleScience3EarthArea,
]);
