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
import {
  generateMiddleScience2WeatherLessonExercises,
  generateMiddleScience2WeatherUnitExercises,
} from "./weather-exercise-registry";

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
  if (particleExercises.length) return particleExercises;
  const lifeExercises = generateMiddleScience2LifeLessonExercises(unitKey, lessonKey, count);
  return lifeExercises.length
    ? lifeExercises
    : generateMiddleScience2WeatherLessonExercises(unitKey, lessonKey, count);
};

export const generateMiddleScience2UnitExercises = (unitKey: string, count = 8) => {
  const energyExercises = generateEnergyUnitExercises(unitKey, count);
  if (energyExercises.length) return energyExercises;
  const particleExercises = generateMiddleScience2ParticleUnitExercises(unitKey, count);
  if (particleExercises.length) return particleExercises;
  const lifeExercises = generateMiddleScience2LifeUnitExercises(unitKey, count);
  return lifeExercises.length
    ? lifeExercises
    : generateMiddleScience2WeatherUnitExercises(unitKey, count);
};
