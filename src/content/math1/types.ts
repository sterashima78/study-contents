import type { AlgebraUnit, Lesson } from "./algebra";

export type MathUnit = AlgebraUnit;
export type MathLesson = Lesson;

export type MathArea = {
  key: string;
  title: string;
  description: string;
  units: MathUnit[];
};
