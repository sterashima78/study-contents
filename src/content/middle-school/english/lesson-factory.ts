import type { EnglishLesson } from "../../english/types";

type PracticeSpec = {
  prompt: string;
  answers: string[];
  placeholder?: string;
};

export type MiddleEnglishLessonSpec = {
  key: string;
  title: string;
  description: string;
  goals: [string, string];
  points: string[];
  example: string;
  analysis: Array<[string, string]>;
  practice: [PracticeSpec, PracticeSpec];
  hint: string;
  summary: [string, string];
  passage?: {
    title: string;
    paragraphs: string[];
  };
};

export const middleEnglishLesson = (spec: MiddleEnglishLessonSpec): EnglishLesson => ({
  key: spec.key,
  title: spec.title,
  description: spec.description,
  rights: "original",
  goals: spec.goals,
  concepts: [{ title: spec.title, body: spec.points }],
  ...(spec.passage ? { passage: spec.passage } : {}),
  example: {
    title: `例題: ${spec.title}`,
    problem: spec.example,
    steps: spec.analysis.map(([expression, note]) => ({ expression, note })),
  },
  practice: {
    title: `練習: ${spec.title}`,
    problem: "短い文脈の中で英語を組み立て、意味と形を確認します。",
    steps: spec.practice,
    hint: spec.hint,
  },
  summary: spec.summary,
});
