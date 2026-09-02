export type EnglishCourseInfo = {
  key: "english" | "middle-english1" | "middle-english2" | "middle-english3";
  title: string;
  kicker: string;
  routeBase: string;
  homePath: string;
  scopeLabel?: string;
  curriculumKey?: string;
  unitExerciseCount?: number;
};

export const englishCourse: EnglishCourseInfo = {
  key: "english",
  title: "英語",
  kicker: "ENGLISH",
  routeBase: "english",
  homePath: "english/",
  scopeLabel: "高校英語",
  curriculumKey: "english",
};

export const middleEnglish1Course: EnglishCourseInfo = {
  key: "middle-english1",
  title: "中学英語 1年",
  kicker: "JUNIOR HIGH ENGLISH · GRADE 1",
  routeBase: "middle-school/english/grade1",
  homePath: "middle-school/english/grade1/",
  scopeLabel: "中学1年英語",
  curriculumKey: "middle-english1",
  unitExerciseCount: 8,
};

export const middleEnglish2Course: EnglishCourseInfo = {
  key: "middle-english2",
  title: "中学英語 2年",
  kicker: "JUNIOR HIGH ENGLISH · GRADE 2",
  routeBase: "middle-school/english/grade2",
  homePath: "middle-school/english/grade2/",
  scopeLabel: "中学2年英語",
  curriculumKey: "middle-english2",
  unitExerciseCount: 8,
};

export const middleEnglish3Course: EnglishCourseInfo = {
  key: "middle-english3",
  title: "中学英語 3年",
  kicker: "JUNIOR HIGH ENGLISH · GRADE 3",
  routeBase: "middle-school/english/grade3",
  homePath: "middle-school/english/grade3/",
  scopeLabel: "中学3年英語",
  curriculumKey: "middle-english3",
  unitExerciseCount: 8,
};
