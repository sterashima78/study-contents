export const LEARNING_RECORDS_STORAGE_KEY = "study-contents:learning-records:v1";
export const LEARNING_RECORDS_SCHEMA_VERSION = 1;
export const MAX_STORED_ATTEMPTS = 500;
export const MAX_IMPORT_BYTES = 2 * 1024 * 1024;

export type LearningQuestionResult = {
  lessonKey: string;
  lessonTitle: string;
  unitKey: string;
  unitTitle: string;
  correct: boolean;
};

export type LearningAttempt = {
  id: string;
  completedAt: string;
  courseKey: string;
  courseTitle: string;
  areaKey: string;
  areaTitle: string;
  requestedCount: number;
  totalCount: number;
  correctCount: number;
  results: LearningQuestionResult[];
};

export type LearningRecords = {
  schemaVersion: typeof LEARNING_RECORDS_SCHEMA_VERSION;
  attempts: LearningAttempt[];
};

export type LearningRecordsExport = LearningRecords & {
  exportedAt: string;
};

const emptyRecords = (): LearningRecords => ({
  schemaVersion: LEARNING_RECORDS_SCHEMA_VERSION,
  attempts: [],
});

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const readShortString = (value: unknown, maxLength = 160) =>
  typeof value === "string" && value.length > 0 && value.length <= maxLength ? value : undefined;

const readCount = (value: unknown, max = 10000) =>
  Number.isInteger(value) && Number(value) >= 0 && Number(value) <= max ? Number(value) : undefined;

const parseQuestionResult = (value: unknown): LearningQuestionResult | undefined => {
  if (!isRecord(value)) return undefined;
  const lessonKey = readShortString(value.lessonKey);
  const lessonTitle = readShortString(value.lessonTitle);
  const unitKey = readShortString(value.unitKey);
  const unitTitle = readShortString(value.unitTitle);
  if (!lessonKey || !lessonTitle || !unitKey || !unitTitle || typeof value.correct !== "boolean") {
    return undefined;
  }
  return { lessonKey, lessonTitle, unitKey, unitTitle, correct: value.correct };
};

const parseAttempt = (value: unknown): LearningAttempt | undefined => {
  if (!isRecord(value)) return undefined;
  const id = readShortString(value.id, 200);
  const completedAt = readShortString(value.completedAt, 80);
  const courseKey = readShortString(value.courseKey);
  const courseTitle = readShortString(value.courseTitle);
  const areaKey = readShortString(value.areaKey);
  const areaTitle = readShortString(value.areaTitle);
  const requestedCount = readCount(value.requestedCount, 30);
  const totalCount = readCount(value.totalCount, 30);
  const correctCount = readCount(value.correctCount, 30);
  if (
    !id ||
    !completedAt ||
    Number.isNaN(Date.parse(completedAt)) ||
    !courseKey ||
    !courseTitle ||
    !areaKey ||
    !areaTitle ||
    requestedCount === undefined ||
    totalCount === undefined ||
    correctCount === undefined ||
    correctCount > totalCount ||
    !Array.isArray(value.results) ||
    value.results.length !== totalCount ||
    value.results.length > 30
  ) {
    return undefined;
  }
  const results = value.results.map(parseQuestionResult);
  if (results.some((result) => !result)) return undefined;
  return {
    id,
    completedAt,
    courseKey,
    courseTitle,
    areaKey,
    areaTitle,
    requestedCount,
    totalCount,
    correctCount,
    results: results as LearningQuestionResult[],
  };
};

export const parseLearningRecords = (value: unknown): LearningRecords => {
  if (!isRecord(value) || value.schemaVersion !== LEARNING_RECORDS_SCHEMA_VERSION || !Array.isArray(value.attempts)) {
    throw new Error("対応していない学習記録ファイルです。");
  }
  if (value.attempts.length > MAX_STORED_ATTEMPTS) {
    throw new Error(`学習記録は最大${MAX_STORED_ATTEMPTS}件まで読み込めます。`);
  }
  const attempts = value.attempts.map(parseAttempt);
  if (attempts.some((attempt) => !attempt)) {
    throw new Error("学習記録ファイルの内容が不正です。");
  }
  return { schemaVersion: LEARNING_RECORDS_SCHEMA_VERSION, attempts: attempts as LearningAttempt[] };
};

export const loadLearningRecords = (): LearningRecords => {
  if (typeof window === "undefined") return emptyRecords();
  const serialized = window.localStorage.getItem(LEARNING_RECORDS_STORAGE_KEY);
  if (!serialized) return emptyRecords();
  try {
    return parseLearningRecords(JSON.parse(serialized));
  } catch {
    return emptyRecords();
  }
};

export const saveLearningRecords = (records: LearningRecords) => {
  const validated = parseLearningRecords(records);
  const attempts = [...validated.attempts]
    .sort((a, b) => b.completedAt.localeCompare(a.completedAt))
    .slice(0, MAX_STORED_ATTEMPTS);
  window.localStorage.setItem(
    LEARNING_RECORDS_STORAGE_KEY,
    JSON.stringify({ schemaVersion: LEARNING_RECORDS_SCHEMA_VERSION, attempts }),
  );
};

export const addLearningAttempt = (attempt: LearningAttempt) => {
  const parsed = parseAttempt(attempt);
  if (!parsed) throw new Error("保存する学習記録が不正です。");
  const current = loadLearningRecords();
  const attempts = [parsed, ...current.attempts.filter((item) => item.id !== parsed.id)].slice(
    0,
    MAX_STORED_ATTEMPTS,
  );
  saveLearningRecords({ schemaVersion: LEARNING_RECORDS_SCHEMA_VERSION, attempts });
};

export const mergeLearningRecords = (imported: LearningRecords) => {
  const current = loadLearningRecords();
  const byId = new Map<string, LearningAttempt>();
  for (const attempt of [...current.attempts, ...imported.attempts]) byId.set(attempt.id, attempt);
  const attempts = [...byId.values()]
    .sort((a, b) => b.completedAt.localeCompare(a.completedAt))
    .slice(0, MAX_STORED_ATTEMPTS);
  saveLearningRecords({ schemaVersion: LEARNING_RECORDS_SCHEMA_VERSION, attempts });
  return attempts.length;
};

export const makeLearningRecordsExport = (): LearningRecordsExport => ({
  ...loadLearningRecords(),
  exportedAt: new Date().toISOString(),
});

export const clearLearningRecords = () => {
  window.localStorage.removeItem(LEARNING_RECORDS_STORAGE_KEY);
};
