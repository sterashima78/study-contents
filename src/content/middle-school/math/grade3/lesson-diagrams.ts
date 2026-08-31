import { getMiddleMath3LessonDiagrams as getSquareRootLessonDiagrams } from "./diagrams";
import { getMiddleMath3PolynomialLessonDiagrams } from "./polynomial-diagrams";

export const getMiddleMath3LessonDiagrams = (lessonKey: string) =>
  getSquareRootLessonDiagrams(lessonKey) ?? getMiddleMath3PolynomialLessonDiagrams(lessonKey);
