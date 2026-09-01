import {
  generateMiddleScience2LessonExercises as generateEnergyLessonExercises,
  generateMiddleScience2UnitExercises as generateEnergyUnitExercises,
} from "./energy-exercise-registry";
import {
  generateMiddleScience2ParticleLessonExercises,
  generateMiddleScience2ParticleUnitExercises,
} from "./particle-exercise-registry";

export const generateMiddleScience2LessonExercises = (
  unitKey: string,
  lessonKey: string,
  count = 3,
) => {
  const energyExercises = generateEnergyLessonExercises(unitKey, lessonKey, count);
  return energyExercises.length
    ? energyExercises
    : generateMiddleScience2ParticleLessonExercises(unitKey, lessonKey, count);
};

export const generateMiddleScience2UnitExercises = (unitKey: string, count = 8) => {
  const energyExercises = generateEnergyUnitExercises(unitKey, count);
  return energyExercises.length
    ? energyExercises
    : generateMiddleScience2ParticleUnitExercises(unitKey, count);
};
