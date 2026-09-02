import { getMiddleScience3EarthLessonDiagrams } from "./earth-diagrams";
import { getMiddleScience3LessonDiagrams as getEnergyLessonDiagrams } from "./energy-diagrams";
import { getMiddleScience3LifeLessonDiagrams } from "./life-diagrams";
import { getMiddleScience3ParticleLessonDiagrams } from "./particles-diagrams";

export const getMiddleScience3LessonDiagrams = (lessonKey: string) =>
  getEnergyLessonDiagrams(lessonKey) ??
  getMiddleScience3ParticleLessonDiagrams(lessonKey) ??
  getMiddleScience3LifeLessonDiagrams(lessonKey) ??
  getMiddleScience3EarthLessonDiagrams(lessonKey);
