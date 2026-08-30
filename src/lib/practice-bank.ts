export type PracticeInputKind = "text" | "math" | "radio" | "select" | "checkbox";

export type PracticeBankOption = {
  value: string;
  label: string;
};

export type PracticeBankQuestion = {
  id: string;
  unitKey: string;
  unitTitle: string;
  lessonKey: string;
  lessonTitle: string;
  prompt: string;
  answers: string[];
  input: PracticeInputKind;
  options: PracticeBankOption[];
  placeholder: string;
  hint: string;
};

export type PracticeBankArea = {
  key: string;
  title: string;
  questions: PracticeBankQuestion[];
};

export type PracticeBankCourse = {
  key: string;
  title: string;
  areas: PracticeBankArea[];
};

type CourseSource = {
  key: string;
  title: string;
  areas: unknown;
};

type RecordValue = Record<string, unknown>;

const isRecord = (value: unknown): value is RecordValue =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const readString = (value: unknown) => (typeof value === "string" ? value : undefined);

const readStringArray = (value: unknown) =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];

const readOptions = (value: unknown): PracticeBankOption[] => {
  if (!Array.isArray(value)) return [];
  return value.flatMap((item) => {
    if (!isRecord(item)) return [];
    const optionValue = readString(item.value);
    const label = readString(item.label);
    return optionValue && label ? [{ value: optionValue, label }] : [];
  });
};

const readInputKind = (value: unknown): PracticeInputKind => {
  if (value === "math" || value === "radio" || value === "select" || value === "checkbox") {
    return value;
  }
  return "text";
};

const normalizeStructuredStep = (
  stepValue: unknown,
  stepIndex: number,
  courseKey: string,
  areaKey: string,
  unitKey: string,
  unitTitle: string,
  lessonKey: string,
  lessonTitle: string,
  hint: string,
): PracticeBankQuestion[] => {
  if (!isRecord(stepValue)) return [];
  const prompt = readString(stepValue.prompt);
  const answers = readStringArray(stepValue.answers);
  if (!prompt || answers.length === 0) return [];

  return [
    {
      id: `${courseKey}:${areaKey}:${unitKey}:${lessonKey}:${stepIndex}`,
      unitKey,
      unitTitle,
      lessonKey,
      lessonTitle,
      prompt,
      answers,
      input: readInputKind(stepValue.input),
      options: readOptions(stepValue.options),
      placeholder: readString(stepValue.placeholder) ?? "",
      hint,
    },
  ];
};

const normalizeLesson = (
  lessonValue: unknown,
  courseKey: string,
  areaKey: string,
  unitKey: string,
  unitTitle: string,
): PracticeBankQuestion[] => {
  if (!isRecord(lessonValue)) return [];
  const lessonKey = readString(lessonValue.key);
  const lessonTitle = readString(lessonValue.title);
  const practice = isRecord(lessonValue.practice) ? lessonValue.practice : undefined;
  if (!lessonKey || !lessonTitle || !practice) return [];

  const hint = readString(practice.hint) ?? readString(practice.explanation) ?? "";
  if (Array.isArray(practice.steps)) {
    return practice.steps.flatMap((step, stepIndex) =>
      normalizeStructuredStep(
        step,
        stepIndex,
        courseKey,
        areaKey,
        unitKey,
        unitTitle,
        lessonKey,
        lessonTitle,
        hint,
      ),
    );
  }

  const prompt = readString(practice.prompt);
  const answer = readString(practice.answer);
  if (!prompt || !answer) return [];
  const choices = readStringArray(practice.choices);

  return [
    {
      id: `${courseKey}:${areaKey}:${unitKey}:${lessonKey}:0`,
      unitKey,
      unitTitle,
      lessonKey,
      lessonTitle,
      prompt,
      answers: [answer],
      input: choices.length > 0 ? "radio" : "text",
      options: choices.map((choice) => ({ value: choice, label: choice })),
      placeholder: "",
      hint,
    },
  ];
};

const normalizeArea = (areaValue: unknown, courseKey: string): PracticeBankArea | undefined => {
  if (!isRecord(areaValue)) return undefined;
  const areaKey = readString(areaValue.key);
  const title = readString(areaValue.title);
  if (!areaKey || !title) return undefined;

  const questions = (Array.isArray(areaValue.units) ? areaValue.units : []).flatMap((unitValue) => {
    if (!isRecord(unitValue)) return [];
    const unitKey = readString(unitValue.key);
    const unitTitle = readString(unitValue.title);
    if (!unitKey || !unitTitle) return [];
    return (Array.isArray(unitValue.lessons) ? unitValue.lessons : []).flatMap((lessonValue) =>
      normalizeLesson(lessonValue, courseKey, areaKey, unitKey, unitTitle),
    );
  });

  return { key: areaKey, title, questions };
};

export const buildPracticeBank = (courses: CourseSource[]): PracticeBankCourse[] =>
  courses.map((course) => ({
    key: course.key,
    title: course.title,
    areas: (Array.isArray(course.areas) ? course.areas : []).flatMap((area) => {
      const normalized = normalizeArea(area, course.key);
      return normalized ? [normalized] : [];
    }),
  }));
