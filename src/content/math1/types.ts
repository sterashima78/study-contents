import type { ConceptTable } from "../concept-table";
import type { PracticeStep } from "../practice";
import type { AlgebraUnit, Lesson } from "./algebra";

export type MathConceptBlock = Lesson["concepts"][number] & {
  table?: ConceptTable;
};

export type MathLesson = Omit<Lesson, "concepts" | "practice"> & {
  concepts: MathConceptBlock[];
  practice: Omit<Lesson["practice"], "steps"> & {
    steps: PracticeStep[];
  };
};

export type MathUnit = Omit<AlgebraUnit, "lessons"> & {
  lessons: MathLesson[];
};

export type MathArea = {
  key: string;
  title: string;
  description: string;
  units: MathUnit[];
};
