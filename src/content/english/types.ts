export type EnglishConcept = {
  title: string;
  body: string[];
};

export type EnglishWorkedStep = {
  expression: string;
  note: string;
};

export type EnglishPracticeStep = {
  prompt: string;
  answers: string[];
  placeholder?: string;
};

export type EnglishPassage = {
  title: string;
  paragraphs: string[];
};

export type EnglishLesson = {
  key: string;
  title: string;
  description: string;
  rights: "original";
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
