import { getMiddleMath3DataLessonDiagrams } from "./data-diagrams";
import { getMiddleMath3LessonDiagrams as getSquareRootLessonDiagrams } from "./diagrams";
import { getMiddleMath3FunctionLessonDiagrams } from "./function-diagrams";
import { getMiddleMath3GeometryLessonDiagrams } from "./geometry-diagrams";
import { getMiddleMath3PolynomialLessonDiagrams } from "./polynomial-diagrams";
import { getMiddleMath3QuadraticLessonDiagrams } from "./quadratic-diagrams";

export const getMiddleMath3LessonDiagrams = (lessonKey: string) =>
  getSquareRootLessonDiagrams(lessonKey) ??
  getMiddleMath3PolynomialLessonDiagrams(lessonKey) ??
  getMiddleMath3QuadraticLessonDiagrams(lessonKey) ??
  getMiddleMath3GeometryLessonDiagrams(lessonKey) ??
  getMiddleMath3FunctionLessonDiagrams(lessonKey) ??
  getMiddleMath3DataLessonDiagrams(lessonKey);
