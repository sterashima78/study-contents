import { createBiologyExerciseRegistry } from "../biology-exercises";
import { biologyBasicAreas } from "./catalog";

const registry = createBiologyExerciseRegistry("biology-basic", biologyBasicAreas);

export const generateLessonExercises = registry.generateLessonExercises;
export const generateUnitExercises = registry.generateUnitExercises;
