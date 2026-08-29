import type { MathLesson } from "./math1/types";

type SocialLessonInput = {
  key: string;
  title: string;
  description: string;
  goals: string[];
  concepts: MathLesson["concepts"];
  exampleTitle: string;
  exampleProblem: string;
  exampleSteps: MathLesson["example"]["steps"];
  checks: MathLesson["practice"]["steps"];
  hint: string;
  summary: string[];
};

export const socialLesson = (input: SocialLessonInput): MathLesson => ({
  key: input.key,
  title: input.title,
  description: input.description,
  goals: input.goals,
  concepts: input.concepts,
  example: {
    title: `例題: ${input.exampleTitle}`,
    problem: input.exampleProblem,
    steps: input.exampleSteps,
  },
  practice: {
    title: "確認: 用語と関係を整理する",
    problem: "重要語句だけでなく、出来事・思想の関係まで確認します。",
    steps: input.checks,
    hint: input.hint,
  },
  summary: input.summary,
});
