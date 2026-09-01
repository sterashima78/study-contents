import { getMiddleScience2LessonDiagrams as getEnergyLessonDiagrams } from "./energy-diagrams";
import { getMiddleScience2ParticleLessonDiagrams } from "./particle-diagrams";

export const getMiddleScience2LessonDiagrams = (lessonKey: string) =>
  getEnergyLessonDiagrams(lessonKey) ?? getMiddleScience2ParticleLessonDiagrams(lessonKey);
