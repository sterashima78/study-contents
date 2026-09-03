import type { PracticeStep } from "../practice";

export type EnglishConcept = {
  title: string;
  body: string[];
};

export type EnglishWorkedStep = {
  expression: string;
  note: string;
};

export type EnglishPracticeStep = PracticeStep;

export type EnglishPassage = {
  title: string;
  paragraphs: string[];
};

type EnglishLessonBase = {
  key: string;
  title: string;
  description: string;
  goals: string[];
  concepts: EnglishConcept[];
  passage?: EnglishPassage;
  example: {
    title: string;
    problem: string;
    steps: EnglishWorkedStep[];
  };
  practice: {
    title: string;
    problem: string;
    steps: EnglishPracticeStep[];
    hint: string;
  };
  summary: string[];
};

export type EnglishLesson =
  | (EnglishLessonBase & {
      rights: "original";
      sourceId?: never;
    })
  | (EnglishLessonBase & {
      rights: "public-domain";
      sourceId: string;
      passage: EnglishPassage;
    });

export type EnglishUnit = {
  key: string;
  title: string;
  description: string;
  lessons: EnglishLesson[];
};

export type EnglishArea = {
  key: string;
  title: string;
  description: string;
  units: EnglishUnit[];
};
