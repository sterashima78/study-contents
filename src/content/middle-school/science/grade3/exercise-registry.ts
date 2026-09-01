import {
  generateMiddleScience3LessonExercises as generateEnergyLessonExercises,
  generateMiddleScience3UnitExercises as generateEnergyUnitExercises,
} from "./energy-exercise-registry";
import {
  generateMiddleScience3ParticleLessonExercises,
  generateMiddleScience3ParticleUnitExercises,
} from "./particles-exercise-registry";

export const generateMiddleScience3LessonExercises = (
  unitKey: string,
  lessonKey: string,
  count = 3,
) => {
  const energyExercises = generateEnergyLessonExercises(unitKey, lessonKey, count);
  return energyExercises.length
    ? energyExercises
    : generateMiddleScience3ParticleLessonExercises(unitKey, lessonKey, count);
};

export const generateMiddleScience3UnitExercises = (unitKey: string, count = 8) => {
  const energyExercises = generateEnergyUnitExercises(unitKey, count);
  return energyExercises.length
    ? energyExercises
    : generateMiddleScience3ParticleUnitExercises(unitKey, count);
};
