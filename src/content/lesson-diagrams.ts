import type { MathCourseInfo } from "./math-courses";
import { getMath1LessonDiagrams, type MathLessonDiagrams } from "./math1/diagrams";
import { getMath1QuadraticLessonDiagrams } from "./math1/quadratic-diagrams";
import { getMath1TrigonometryLessonDiagrams } from "./math1/trigonometry-diagrams";
import { getMath2LessonDiagrams } from "./math2/diagrams";
import { getMath2GeometryLessonDiagrams } from "./math2/geometry-diagrams";
import { getMath3LessonDiagrams } from "./math3/diagrams";
import { getMathCLessonDiagrams } from "./mathc/diagrams";
import { getMiddleMath1LessonDiagrams } from "./middle-school/math/grade1/lesson-diagrams";
import { getMiddleMath2LessonDiagrams } from "./middle-school/math/grade2/diagrams";
import { getPhysicsLessonDiagrams } from "./physics/diagrams";
import { getPhysicsBasicsLessonDiagrams } from "./physics-basics/diagrams";

type DiagramResolver = (lessonKey: string) => MathLessonDiagrams | undefined;

const getMath1Diagrams: DiagramResolver = (lessonKey) =>
  getMath1LessonDiagrams(lessonKey) ??
  getMath1QuadraticLessonDiagrams(lessonKey) ??
  getMath1TrigonometryLessonDiagrams(lessonKey);

const getMath2Diagrams: DiagramResolver = (lessonKey) =>
  getMath2LessonDiagrams(lessonKey) ?? getMath2GeometryLessonDiagrams(lessonKey);

const resolvers: Partial<Record<MathCourseInfo["key"], DiagramResolver>> = {
  math1: getMath1Diagrams,
  math2: getMath2Diagrams,
  mathc: getMathCLessonDiagrams,
  math3: getMath3LessonDiagrams,
  "middle-math1": getMiddleMath1LessonDiagrams,
  "middle-math2": getMiddleMath2LessonDiagrams,
  "physics-basics": getPhysicsBasicsLessonDiagrams,
  physics: getPhysicsLessonDiagrams,
};

export function getLessonDiagrams(
  courseKey: MathCourseInfo["key"],
  lessonKey: string,
): MathLessonDiagrams | undefined {
  return resolvers[courseKey]?.(lessonKey);
}
