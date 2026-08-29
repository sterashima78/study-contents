import type { GeneratedExercise } from "../math1/exercise-registry";
import { chemistryAreas } from "./catalog";

type ChemistryExerciseSpec = {
  lessonKey: string;
  lessonTitle: string;
  prompt: string;
  answers: string[];
  difficulty: GeneratedExercise["difficulty"];
  hint?: string;
};

const unitLessonKeys: Record<string, string[]> = Object.fromEntries(
  chemistryAreas.flatMap((area) =>
    area.units.map((unit) => [
      unit.key,
      unit.lessons.map((lesson) => lesson.key),
    ]),
  ),
);

const bank: ChemistryExerciseSpec[] = chemistryAreas.flatMap((area) =>
  area.units.flatMap((unit) =>
    unit.lessons.flatMap((lesson, lessonIndex) =>
      lesson.practice.steps.map((step, stepIndex) => ({
        lessonKey: lesson.key,
        lessonTitle: lesson.title,
        prompt: step.prompt,
        answers: step.answers,
        difficulty:
          stepIndex < 2
            ? "basic"
            : lessonIndex % 2 === 0
              ? "applied"
              : "challenge",
        hint: lesson.practice.hint,
      })),
    ),
  ),
);

const shuffle = <T>(values: readonly T[]) => {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
};

const toExercise = (spec: ChemistryExerciseSpec, index: number): GeneratedExercise => ({
  id: `chemistry-${spec.lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
  prompt: spec.prompt,
  answers: spec.answers,
  lessonKeys: [spec.lessonKey],
  lessonTitles: [spec.lessonTitle],
  difficulty: spec.difficulty,
  hint: spec.hint,
  answerMode: "text",
});

export const generateLessonExercises = (unitKey: string, lessonKey: string, count = 3) => {
  if (!(unitLessonKeys[unitKey] ?? []).includes(lessonKey)) return [];
  return shuffle(bank.filter((spec) => spec.lessonKey === lessonKey))
    .slice(0, count)
    .map(toExercise);
};

export const generateUnitExercises = (unitKey: string) => {
  const lessonKeys = unitLessonKeys[unitKey] ?? [];
  const pool = bank.filter((spec) => lessonKeys.includes(spec.lessonKey));
  if (pool.length === 0) return [];

  const selected: ChemistryExerciseSpec[] = [];
  const take = (difficulty: GeneratedExercise["difficulty"], count: number) => {
    const candidates = shuffle(pool.filter((spec) => spec.difficulty === difficulty));
    for (const candidate of candidates.slice(0, count)) selected.push(candidate);
  };

  take("basic", 4);
  take("applied", 1);
  take("challenge", 1);

  if (selected.length < 6) {
    const remaining = shuffle(pool.filter((spec) => !selected.includes(spec)));
    selected.push(...remaining.slice(0, 6 - selected.length));
  }

  return shuffle(selected).slice(0, 6).map(toExercise);
};
