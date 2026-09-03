import { getMiddleMath1DataLessonDiagrams } from "./data-use-diagrams";
import { getMiddleMath1LessonDiagrams as getMiddleMath1FunctionLessonDiagrams } from "./diagrams";
import { getMiddleMath1GeometryLessonDiagrams } from "./geometry-diagrams";
import { getMiddleMath1SignedNumberLessonDiagrams } from "./signed-number-diagrams";
import { getMiddleMath1MeasurementLessonDiagrams } from "./solid-measurement-diagrams";
import { getMiddleMath1SpatialLessonDiagrams } from "./spatial-geometry-diagrams";
import { getMiddleMath1VariableLessonDiagrams } from "./variable-diagrams";

export const getMiddleMath1LessonDiagrams = (lessonKey: string) =>
  getMiddleMath1SignedNumberLessonDiagrams(lessonKey) ??
  getMiddleMath1VariableLessonDiagrams(lessonKey) ??
  getMiddleMath1FunctionLessonDiagrams(lessonKey) ??
  getMiddleMath1GeometryLessonDiagrams(lessonKey) ??
  getMiddleMath1SpatialLessonDiagrams(lessonKey) ??
  getMiddleMath1MeasurementLessonDiagrams(lessonKey) ??
  getMiddleMath1DataLessonDiagrams(lessonKey);
