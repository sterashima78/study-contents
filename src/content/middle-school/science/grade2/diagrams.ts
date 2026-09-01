import { getMiddleScience2LessonDiagrams as getEnergyLessonDiagrams } from "./energy-diagrams";
import { getMiddleScience2LifeLessonDiagrams } from "./life-diagrams";
import { getMiddleScience2ParticleLessonDiagrams } from "./particle-diagrams";
import { getMiddleScience2WeatherLessonDiagrams } from "./weather-diagrams";

export const getMiddleScience2LessonDiagrams = (lessonKey: string) =>
  getEnergyLessonDiagrams(lessonKey) ??
  getMiddleScience2ParticleLessonDiagrams(lessonKey) ??
  getMiddleScience2LifeLessonDiagrams(lessonKey) ??
  getMiddleScience2WeatherLessonDiagrams(lessonKey);
