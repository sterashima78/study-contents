import { getMiddleMath2LessonDiagrams as getMiddleMath2FunctionLessonDiagrams } from "./diagrams";
import { getMiddleMath2GeometryLessonDiagrams } from "./geometry-diagrams";

export const getMiddleMath2LessonDiagrams = (lessonKey: string) =>
  getMiddleMath2FunctionLessonDiagrams(lessonKey) ?? getMiddleMath2GeometryLessonDiagrams(lessonKey);
