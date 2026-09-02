import {
  generateMiddleScience3EarthLessonExercises,
  generateMiddleScience3EarthUnitExercises,
} from "./earth-exercise-registry";
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
import {
  generateMiddleScience3SustainabilityLessonExercises,
  generateMiddleScience3SustainabilityUnitExercises,
} from "./sustainability-exercise-registry";

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
  if (particleExercises.length) return particleExercises;
  const lifeExercises = generateMiddleScience3LifeLessonExercises(unitKey, lessonKey, count);
  if (lifeExercises.length) return lifeExercises;
  const earthExercises = generateMiddleScience3EarthLessonExercises(unitKey, lessonKey, count);
  return earthExercises.length
    ? earthExercises
    : generateMiddleScience3SustainabilityLessonExercises(unitKey, lessonKey, count);
};

export const generateMiddleScience3UnitExercises = (unitKey: string, count = 8) => {
  const energyExercises = generateEnergyUnitExercises(unitKey, count);
  if (energyExercises.length) return energyExercises;
  const particleExercises = generateMiddleScience3ParticleUnitExercises(unitKey, count);
  if (particleExercises.length) return particleExercises;
  const lifeExercises = generateMiddleScience3LifeUnitExercises(unitKey, count);
  if (lifeExercises.length) return lifeExercises;
  const earthExercises = generateMiddleScience3EarthUnitExercises(unitKey, count);
  return earthExercises.length
    ? earthExercises
    : generateMiddleScience3SustainabilityUnitExercises(unitKey, count);
};
