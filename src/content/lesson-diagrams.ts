import type { MathCourseInfo } from "./math-courses";
import { getMath1LessonDiagrams, type MathLessonDiagrams } from "./math1/diagrams";
import { getMath2LessonDiagrams } from "./math2/diagrams";
import { getMathCLessonDiagrams } from "./mathc/diagrams";
import { getPhysicsBasicsLessonDiagrams } from "./physics-basics/diagrams";

type DiagramResolver = (lessonKey: string) => MathLessonDiagrams | undefined;

const resolvers: Partial<Record<MathCourseInfo["key"], DiagramResolver>> = {
  math1: getMath1LessonDiagrams,
  math2: getMath2LessonDiagrams,
  mathc: getMathCLessonDiagrams,
  "physics-basics": getPhysicsBasicsLessonDiagrams,
};

export function getLessonDiagrams(
  courseKey: MathCourseInfo["key"],
  lessonKey: string,
): MathLessonDiagrams | undefined {
  return resolvers[courseKey]?.(lessonKey);
}
