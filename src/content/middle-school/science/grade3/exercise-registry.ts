import {
  generateMiddleScience3LessonExercises as generateEnergyLessonExercises,
  generateMiddleScience3UnitExercises as generateEnergyUnitExercises,
} from "./energy-exercise-registry";
import {
  generateMiddleScience3LifeLessonExercises,
  generateMiddleScience3LifeUnitExercises,
} from "./life-exercise-registry";
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
  if (energyExercises.length) return energyExercises;
  const particleExercises = generateMiddleScience3ParticleLessonExercises(
    unitKey,
    lessonKey,
    count,
  );
  return particleExercises.length
    ? particleExercises
    : generateMiddleScience3LifeLessonExercises(unitKey, lessonKey, count);
};

export const generateMiddleScience3UnitExercises = (unitKey: string, count = 8) => {
  const energyExercises = generateEnergyUnitExercises(unitKey, count);
  if (energyExercises.length) return energyExercises;
  const particleExercises = generateMiddleScience3ParticleUnitExercises(unitKey, count);
  return particleExercises.length
    ? particleExercises
    : generateMiddleScience3LifeUnitExercises(unitKey, count);
};
