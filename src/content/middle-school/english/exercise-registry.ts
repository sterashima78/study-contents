import type { EnglishArea, EnglishLesson, EnglishUnit } from "../../english/types";
import { middleEnglish1CompleteAreas } from "./grade1/catalog-complete";
import {
  generateMiddleEnglish1LessonExercises,
  generateMiddleEnglish1UnitExercises,
  type MiddleEnglishDifficulty,
  type MiddleEnglishExercise,
} from "./grade1/exercise-registry";
import { middleEnglish2Areas } from "./grade2/catalog";
import { middleEnglish3Areas } from "./grade3/catalog";

export type { MiddleEnglishDifficulty, MiddleEnglishExercise };

const routeAreas: Record<string, EnglishArea[]> = {
  "middle-school/english/grade1": middleEnglish1CompleteAreas,
  "middle-school/english/grade2": middleEnglish2Areas,
  "middle-school/english/grade3": middleEnglish3Areas,
};

const legacyGrade1Units = new Set(["be-verbs", "general-verbs"]);
const difficulties: MiddleEnglishDifficulty[] = ["basic", "applied", "challenge"];

const findUnit = (routeBase: string, unitKey: string): EnglishUnit | undefined =>
  routeAreas[routeBase]
    ?.flatMap((area) => area.units)
    .find((unit) => unit.key === unitKey);

const createExercise = (
  routeBase: string,
  unitKey: string,
  lesson: EnglishLesson,
  templateIndex: number,
  difficulty: MiddleEnglishDifficulty,
): MiddleEnglishExercise | undefined => {
  const steps = lesson.practice.steps;
  const step = steps[templateIndex % steps.length];
  if (!step) return undefined;

  return {
    id: `${routeBase.replaceAll("/", "-")}-${unitKey}-${lesson.key}-${templateIndex}`,
    prompt: step.prompt,
    answers: step.answers,
    lessonKeys: [lesson.key],
    lessonTitles: [lesson.title],
    difficulty,
    hint: lesson.practice.hint,
  };
};

export const generateMiddleEnglishLessonExercises = (
  routeBase: string,
  unitKey: string,
  lessonKey: string,
  count = 3,
): MiddleEnglishExercise[] => {
  if (routeBase === "middle-school/english/grade1" && legacyGrade1Units.has(unitKey)) {
    return generateMiddleEnglish1LessonExercises(unitKey, lessonKey, count);
  }

  const lesson = findUnit(routeBase, unitKey)?.lessons.find((item) => item.key === lessonKey);
  if (!lesson) return [];

  return Array.from({ length: count }, (_, index) =>
    createExercise(routeBase, unitKey, lesson, index, difficulties[index % difficulties.length]),
  ).filter((exercise): exercise is MiddleEnglishExercise => Boolean(exercise));
};

export const generateMiddleEnglishUnitExercises = (
  routeBase: string,
  unitKey: string,
  count = 8,
): MiddleEnglishExercise[] => {
  if (routeBase === "middle-school/english/grade1" && legacyGrade1Units.has(unitKey)) {
    return generateMiddleEnglish1UnitExercises(unitKey, count);
  }

  const unit = findUnit(routeBase, unitKey);
  if (!unit?.lessons.length) return [];

  return Array.from({ length: count }, (_, index) => {
    const lesson = unit.lessons[index % unit.lessons.length];
    if (!lesson) return undefined;
    return createExercise(
      routeBase,
      unitKey,
      lesson,
      index,
      difficulties[index % difficulties.length],
    );
  }).filter((exercise): exercise is MiddleEnglishExercise => Boolean(exercise));
};
