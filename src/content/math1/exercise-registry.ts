import {
  generateLessonExercises as generateAlgebraLessonExercises,
  generateUnitExercises as generateAlgebraUnitExercises,
  type GeneratedExercise as AlgebraGeneratedExercise,
} from "./exercise-generators";
import {
  generateAdditionalLessonExercises,
  generateAdditionalUnitExercises,
  type ExtraExerciseAnswerMode,
} from "./additional-exercise-generators";

export type GeneratedExercise = AlgebraGeneratedExercise & {
  answerMode: ExtraExerciseAnswerMode;
};

const algebraTextAnswerLessonKeys = new Set([
  "rational-irrational",
  "propositions-counterexamples",
  "necessary-sufficient",
]);

const addAlgebraAnswerMode = (exercise: AlgebraGeneratedExercise): GeneratedExercise => ({
  ...exercise,
  answerMode:
    exercise.lessonKeys.length > 0 &&
    exercise.lessonKeys.every((key) => algebraTextAnswerLessonKeys.has(key))
      ? "text"
      : "math",
});

export const generateLessonExercises = (unitKey: string, lessonKey: string, count = 3) => {
  const algebra = generateAlgebraLessonExercises(unitKey, lessonKey, count);
  if (algebra.length > 0) return algebra.map(addAlgebraAnswerMode);
  return generateAdditionalLessonExercises(unitKey, lessonKey, count);
};

export const generateUnitExercises = (unitKey: string) => {
  const algebra = generateAlgebraUnitExercises(unitKey);
  if (algebra.length > 0) return algebra.map(addAlgebraAnswerMode);
  return generateAdditionalUnitExercises(unitKey);
};
