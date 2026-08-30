import type { MathCourseInfo } from "./math-courses";
import { getMath1LessonDiagrams, type MathLessonDiagrams } from "./math1/diagrams";
import { getMath1TrigonometryLessonDiagrams } from "./math1/trigonometry-diagrams";
import { getMath2LessonDiagrams } from "./math2/diagrams";
import { getMath3LessonDiagrams } from "./math3/diagrams";
import { getMathCLessonDiagrams } from "./mathc/diagrams";
import { getMiddleMath1LessonDiagrams } from "./middle-school/math/grade1/diagrams";
import { getPhysicsLessonDiagrams } from "./physics/diagrams";
import { getPhysicsBasicsLessonDiagrams } from "./physics-basics/diagrams";

type DiagramResolver = (lessonKey: string) => MathLessonDiagrams | undefined;

const getMath1Diagrams: DiagramResolver = (lessonKey) =>
  getMath1LessonDiagrams(lessonKey) ?? getMath1TrigonometryLessonDiagrams(lessonKey);

const resolvers: Partial<Record<MathCourseInfo["key"], DiagramResolver>> = {
  math1: getMath1Diagrams,
  math2: getMath2LessonDiagrams,
  mathc: getMathCLessonDiagrams,
  math3: getMath3LessonDiagrams,
  "middle-math1": getMiddleMath1LessonDiagrams,
  "physics-basics": getPhysicsBasicsLessonDiagrams,
  physics: getPhysicsLessonDiagrams,
};

export function getLessonDiagrams(
  courseKey: MathCourseInfo["key"],
  lessonKey: string,
): MathLessonDiagrams | undefined {
  return resolvers[courseKey]?.(lessonKey);
}
