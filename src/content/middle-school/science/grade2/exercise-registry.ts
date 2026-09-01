import {
  generateMiddleScience2LessonExercises as generateEnergyLessonExercises,
  generateMiddleScience2UnitExercises as generateEnergyUnitExercises,
} from "./energy-exercise-registry";
import {
  generateMiddleScience2LifeLessonExercises,
  generateMiddleScience2LifeUnitExercises,
} from "./life-exercise-registry";
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
  if (energyExercises.length) return energyExercises;
  const particleExercises = generateMiddleScience2ParticleLessonExercises(
    unitKey,
    lessonKey,
    count,
  );
  return particleExercises.length
    ? particleExercises
    : generateMiddleScience2LifeLessonExercises(unitKey, lessonKey, count);
};

export const generateMiddleScience2UnitExercises = (unitKey: string, count = 8) => {
  const energyExercises = generateEnergyUnitExercises(unitKey, count);
  if (energyExercises.length) return energyExercises;
  const particleExercises = generateMiddleScience2ParticleUnitExercises(unitKey, count);
  return particleExercises.length
    ? particleExercises
    : generateMiddleScience2LifeUnitExercises(unitKey, count);
};
