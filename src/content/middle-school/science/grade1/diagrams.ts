import { getMiddleScience1EarthLessonDiagrams } from "./earth-diagrams";
import { getMiddleScience1LessonDiagrams as getEnergyLessonDiagrams } from "./energy-diagrams";
import { getMiddleScience1LifeLessonDiagrams } from "./life-diagrams";
import { getMiddleScience1MatterLessonDiagrams } from "./matter-diagrams";

export const getMiddleScience1LessonDiagrams = (lessonKey: string) =>
  getEnergyLessonDiagrams(lessonKey) ??
  getMiddleScience1MatterLessonDiagrams(lessonKey) ??
  getMiddleScience1LifeLessonDiagrams(lessonKey) ??
  getMiddleScience1EarthLessonDiagrams(lessonKey);
