import { ethicsAreas } from "./ethics/catalog";
import { japaneseHistoryAreas } from "./japanese-history/catalog";
import type { GeneratedExercise } from "./math1/exercise-registry";
import type { MathArea } from "./math1/types";
import { worldHistoryAreas } from "./world-history/catalog";

type ExerciseSource = {
  unitKey: string;
  lessonKey: string;
  lessonTitle: string;
  prompt: string;
  answers: string[];
  hint: string;
  difficulty: GeneratedExercise["difficulty"];
};

const difficultyByStep: GeneratedExercise["difficulty"][] = ["basic", "applied", "challenge"];

const shuffle = <T>(values: readonly T[]) => {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
};

const createRegistry = (prefix: string, areas: MathArea[]) => {
  const sources: ExerciseSource[] = areas.flatMap((area) =>
    area.units.flatMap((unit) =>
      unit.lessons.flatMap((lesson) =>
        lesson.practice.steps.map((step, index) => ({
          unitKey: unit.key,
          lessonKey: lesson.key,
          lessonTitle: lesson.title,
          prompt: step.prompt,
          answers: step.answers,
          hint: lesson.practice.hint,
          difficulty: difficultyByStep[index % difficultyByStep.length] ?? "basic",
        })),
      ),
    ),
  );

  const toExercise = (source: ExerciseSource, index: number): GeneratedExercise => ({
    id: `${prefix}-${source.lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
    prompt: source.prompt,
    answers: source.answers,
    lessonKeys: [source.lessonKey],
    lessonTitles: [source.lessonTitle],
    difficulty: source.difficulty,
    hint: source.hint,
    answerMode: "text",
  });

  const generateLessonExercises = (unitKey: string, lessonKey: string, count = 3) =>
    shuffle(
      sources.filter((source) => source.unitKey === unitKey && source.lessonKey === lessonKey),
    )
      .slice(0, count)
      .map(toExercise);

  const generateUnitExercises = (unitKey: string) => {
    const pool = sources.filter((source) => source.unitKey === unitKey);
    if (pool.length === 0) return [];

    const selected: ExerciseSource[] = [];
    for (const difficulty of ["basic", "applied", "challenge"] as const) {
      const candidate = shuffle(pool.filter((source) => source.difficulty === difficulty))[0];
      if (candidate) selected.push(candidate);
    }

    const remaining = shuffle(pool.filter((source) => !selected.includes(source)));
    selected.push(...remaining.slice(0, Math.max(0, 6 - selected.length)));

    return shuffle(selected).slice(0, 6).map(toExercise);
  };

  return { generateLessonExercises, generateUnitExercises };
};

const japaneseHistoryRegistry = createRegistry("japanese-history", japaneseHistoryAreas);
const worldHistoryRegistry = createRegistry("world-history", worldHistoryAreas);
const ethicsRegistry = createRegistry("ethics", ethicsAreas);

export const generateJapaneseHistoryLessonExercises = japaneseHistoryRegistry.generateLessonExercises;
export const generateJapaneseHistoryUnitExercises = japaneseHistoryRegistry.generateUnitExercises;
export const generateWorldHistoryLessonExercises = worldHistoryRegistry.generateLessonExercises;
export const generateWorldHistoryUnitExercises = worldHistoryRegistry.generateUnitExercises;
export const generateEthicsLessonExercises = ethicsRegistry.generateLessonExercises;
export const generateEthicsUnitExercises = ethicsRegistry.generateUnitExercises;
