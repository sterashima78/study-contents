import { createBiologyExerciseRegistry } from "../biology-exercises";
import { biologyAreas } from "./catalog";

const registry = createBiologyExerciseRegistry("biology", biologyAreas);

export const generateLessonExercises = registry.generateLessonExercises;
export const generateUnitExercises = registry.generateUnitExercises;
