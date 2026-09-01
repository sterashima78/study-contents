import {
  generateMiddleScience1LessonExercises as generateEnergyLessonExercises,
  generateMiddleScience1UnitExercises as generateEnergyUnitExercises,
} from "./energy-exercise-registry";
import {
  generateMiddleScience1LifeLessonExercises,
  generateMiddleScience1LifeUnitExercises,
} from "./life-exercise-registry";
import {
  generateMiddleScience1MatterLessonExercises,
  generateMiddleScience1MatterUnitExercises,
} from "./matter-exercise-registry";

export const generateMiddleScience1LessonExercises = (
  unitKey: string,
  lessonKey: string,
  count = 3,
) => {
  const energyExercises = generateEnergyLessonExercises(unitKey, lessonKey, count);
  if (energyExercises.length) return energyExercises;
  const matterExercises = generateMiddleScience1MatterLessonExercises(unitKey, lessonKey, count);
  return matterExercises.length
    ? matterExercises
    : generateMiddleScience1LifeLessonExercises(unitKey, lessonKey, count);
};

export const generateMiddleScience1UnitExercises = (unitKey: string, count = 8) => {
  const energyExercises = generateEnergyUnitExercises(unitKey, count);
  if (energyExercises.length) return energyExercises;
  const matterExercises = generateMiddleScience1MatterUnitExercises(unitKey, count);
  return matterExercises.length
    ? matterExercises
    : generateMiddleScience1LifeUnitExercises(unitKey, count);
};
