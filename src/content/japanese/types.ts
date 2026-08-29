export type JapanesePractice = {
  prompt: string;
  choices?: string[];
  answer: string;
  explanation: string;
};

export type JapaneseExample = {
  passage?: string;
  prompt: string;
  answer: string;
  reasoning: string[];
};

export type JapaneseLesson = {
  key: string;
  title: string;
  goal: string;
  overview: string[];
  points: string[];
  example: JapaneseExample;
  practice: JapanesePractice;
  summary: string[];
};

export type JapaneseUnit = {
  key: string;
  title: string;
  description: string;
  lessons: JapaneseLesson[];
};

export type JapaneseArea = {
  key: "gendai" | "kobun" | "kanbun";
  title: string;
  kicker: string;
  description: string;
  units: JapaneseUnit[];
};
