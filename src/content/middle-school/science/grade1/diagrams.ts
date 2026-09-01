import { getMiddleScience1LessonDiagrams as getEnergyLessonDiagrams } from "./energy-diagrams";
import { getMiddleScience1MatterLessonDiagrams } from "./matter-diagrams";

export const getMiddleScience1LessonDiagrams = (lessonKey: string) =>
  getEnergyLessonDiagrams(lessonKey) ?? getMiddleScience1MatterLessonDiagrams(lessonKey);
