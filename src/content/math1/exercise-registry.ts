import {
  generateLessonExercises as generateMathBLessonExercises,
  generateUnitExercises as generateMathBUnitExercises,
} from "../mathb/exercise-registry";
import {
  type ExtraExerciseAnswerMode,
  generateAdditionalLessonExercises,
  generateAdditionalUnitExercises,
} from "./additional-exercise-generators";
import {
  type GeneratedExercise as AlgebraGeneratedExercise,
  generateLessonExercises as generateAlgebraLessonExercises,
  generateUnitExercises as generateAlgebraUnitExercises,
} from "./exercise-generators";

export type GeneratedExercise = AlgebraGeneratedExercise & {
  answerMode: ExtraExerciseAnswerMode;
};

const algebraTextAnswerLessonKeys = new Set([
  "rational-irrational",
  "propositions-counterexamples",
  "necessary-sufficient",
]);

const mathBUnitKeys = new Set([
  "sequence-basics",
  "various-sequences",
  "recurrence-relations",
  "mathematical-induction",
  "probability-distributions",
  "normal-distributions",
  "sampling-inference",
  "modeling-process",
  "social-problem-solving",
]);

const addAlgebraAnswerMode = (exercise: AlgebraGeneratedExercise): GeneratedExercise => ({
  ...exercise,
  answerMode:
    exercise.lessonKeys.length > 0 &&
    exercise.lessonKeys.some((key) => algebraTextAnswerLessonKeys.has(key))
      ? "text"
      : "math",
});

export const generateLessonExercises = (unitKey: string, lessonKey: string, count = 3) => {
  if (mathBUnitKeys.has(unitKey)) return generateMathBLessonExercises(unitKey, lessonKey, count);
  const algebra = generateAlgebraLessonExercises(unitKey, lessonKey, count);
  if (algebra.length > 0) return algebra.map(addAlgebraAnswerMode);
  return generateAdditionalLessonExercises(unitKey, lessonKey, count);
};

export const generateUnitExercises = (unitKey: string) => {
  if (mathBUnitKeys.has(unitKey)) return generateMathBUnitExercises(unitKey);
  const algebra = generateAlgebraUnitExercises(unitKey);
  if (algebra.length > 0) return algebra.map(addAlgebraAnswerMode);
  return generateAdditionalUnitExercises(unitKey);
};
