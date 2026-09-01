import {
  generateMiddleScience1LessonExercises as generateEnergyLessonExercises,
  generateMiddleScience1UnitExercises as generateEnergyUnitExercises,
} from "./energy-exercise-registry";
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
  return energyExercises.length
    ? energyExercises
    : generateMiddleScience1MatterLessonExercises(unitKey, lessonKey, count);
};

export const generateMiddleScience1UnitExercises = (unitKey: string, count = 8) => {
  const energyExercises = generateEnergyUnitExercises(unitKey, count);
  return energyExercises.length
    ? energyExercises
    : generateMiddleScience1MatterUnitExercises(unitKey, count);
};
