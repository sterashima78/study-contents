import { getMiddleMath1LessonDiagrams as getMiddleMath1FunctionLessonDiagrams } from "./diagrams";
import { getMiddleMath1GeometryLessonDiagrams } from "./geometry-diagrams";

export const getMiddleMath1LessonDiagrams = (lessonKey: string) =>
  getMiddleMath1FunctionLessonDiagrams(lessonKey) ??
  getMiddleMath1GeometryLessonDiagrams(lessonKey);
