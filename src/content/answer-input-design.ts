import type { MathCourseInfo } from "./math-courses";
import type { PracticeInputKind, PracticeOption, PracticeStep } from "./practice";

export type AnswerCourseKey = MathCourseInfo["key"] | "english";

export type AnswerInputDesign = {
  input: PracticeInputKind;
  options?: PracticeOption[];
  prompt?: string;
};

type AnswerDesignSource = {
  courseKey: AnswerCourseKey;
  prompt: string;
  answers: string[];
  placeholder?: string;
  requestedInput?: "text" | "math";
};

const mathCourseKeys = new Set<AnswerCourseKey>([
  "math1",
  "matha",
  "math2",
  "mathb",
  "mathc",
  "math3",
]);

const normalizeChoiceText = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replaceAll(/\s+/g, "")
    .replaceAll("（", "(")
    .replaceAll("）", ")")
    .replaceAll("・", "")
    .replaceAll("−", "-")
    .replaceAll("—", "-");

const makeOptions = (labels: string[]): PracticeOption[] =>
  labels.map((label) => ({ value: label, label }));

const optionMatchesAnswer = (option: string, answers: string[]) => {
  const normalizedOption = normalizeChoiceText(option);
  return answers.some((answer) => {
    const normalizedAnswer = normalizeChoiceText(answer);
    return (
      normalizedAnswer === normalizedOption ||
      normalizedAnswer.includes(normalizedOption) ||
      normalizedOption.includes(normalizedAnswer)
    );
  });
};

const validChoiceLabels = (labels: string[], answers: string[]) => {
  const cleaned = [...new Set(labels.map((label) => label.trim()).filter(Boolean))];
  if (cleaned.length < 2 || cleaned.length > 8) return undefined;
  return cleaned.some((label) => optionMatchesAnswer(label, answers)) ? cleaned : undefined;
};

const splitChoiceLabels = (value: string) =>
  value
    .split(/\s*(?:\/|／|・|、)\s*/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0 && item.length <= 24 && !item.includes("…"));

const extractQuotedChoices = (prompt: string, answers: string[]) => {
  const match = prompt.match(/「([^」]+)」から(?:入力|選|答)/);
  if (!match) return undefined;
  return validChoiceLabels(splitChoiceLabels(match[1]), answers);
};

const trimInlineChoice = (value: string) => value.replace(/^.*(?:は|を|が|の|で)/, "").trim();

const extractBinaryInlineChoices = (prompt: string, answers: string[]) => {
  const match = prompt.match(/([^、。?？\s]{1,24})(?:・|／|\/)([^、。?？\s]{1,24})のどちら/);
  if (!match) return undefined;
  return validChoiceLabels([trimInlineChoice(match[1]), trimInlineChoice(match[2])], answers);
};

const strongPlaceholderChoiceCue =
  /真か偽|真偽|分類|判定|どちら|選|用法|文型|種類|なるか|必要条件|十分条件|有理数|無理数|能動|受動/;

const extractPlaceholderChoices = (source: AnswerDesignSource) => {
  if (!source.placeholder || !strongPlaceholderChoiceCue.test(source.prompt + source.placeholder)) {
    return undefined;
  }
  if (!/[/／]/.test(source.placeholder)) return undefined;
  return validChoiceLabels(splitChoiceLabels(source.placeholder), source.answers);
};

const fixedChoiceLabels = (source: AnswerDesignSource): string[] | undefined => {
  const text = `${source.prompt} ${source.placeholder ?? ""}`;

  if (/真か偽|真偽/.test(text)) return validChoiceLabels(["真", "偽"], source.answers);

  if (/最初に使う定理/.test(text)) {
    return validChoiceLabels(["正弦定理", "余弦定理"], source.answers);
  }

  if (/必要条件|十分条件/.test(text) && /関係|判定|分類|どちら/.test(text)) {
    return validChoiceLabels(
      ["必要条件", "十分条件", "必要十分条件", "どちらでもない"],
      source.answers,
    );
  }

  if (/有理数|無理数/.test(text) && /分類|どちら|判定/.test(text)) {
    return validChoiceLabels(["有理数", "無理数"], source.answers);
  }

  if (/文型/.test(text)) {
    return validChoiceLabels(["SV", "SVC", "SVO", "SVOO", "SVOC"], source.answers);
  }

  if (/相関/.test(text) && /向き|分類|判定|どちら|関係/.test(text)) {
    return validChoiceLabels(["正の相関", "負の相関", "相関なし"], source.answers);
  }

  if (/原核細胞/.test(text) && /真核細胞/.test(text)) {
    return validChoiceLabels(["原核細胞", "真核細胞"], source.answers);
  }

  if (/同化/.test(text) && /異化/.test(text)) {
    return validChoiceLabels(["同化", "異化"], source.answers);
  }

  if (/神経系/.test(text) && /内分泌系/.test(text)) {
    return validChoiceLabels(["神経系", "内分泌系"], source.answers);
  }

  if (/体液性免疫/.test(text) && /細胞性免疫/.test(text)) {
    return validChoiceLabels(["体液性免疫", "細胞性免疫"], source.answers);
  }

  if (/酸性/.test(text) && /塩基性/.test(text)) {
    return validChoiceLabels(["酸性", "塩基性"], source.answers);
  }

  if (/酸化/.test(text) && /還元/.test(text) && /どちら|分類|判定/.test(text)) {
    return validChoiceLabels(["酸化", "還元"], source.answers);
  }

  if (/発熱/.test(text) && /吸熱/.test(text)) {
    return validChoiceLabels(["発熱", "吸熱"], source.answers);
  }

  if (/電解質/.test(text) && /非電解質/.test(text)) {
    return validChoiceLabels(["電解質", "非電解質"], source.answers);
  }

  if (/能動/.test(text) && /受動/.test(text)) {
    return validChoiceLabels(["能動", "受動"], source.answers);
  }

  return undefined;
};

const choicePrompt = (prompt: string) =>
  prompt.replace("から入力してください", "から選んでください");

const choiceDesign = (labels: string[], prompt: string): AnswerInputDesign => ({
  input: labels.length <= 4 ? "radio" : "select",
  options: makeOptions(labels),
  prompt: choicePrompt(prompt),
});

const inferChoiceDesign = (source: AnswerDesignSource): AnswerInputDesign | undefined => {
  const labels =
    extractQuotedChoices(source.prompt, source.answers) ??
    extractPlaceholderChoices(source) ??
    fixedChoiceLabels(source) ??
    extractBinaryInlineChoices(source.prompt, source.answers);
  return labels ? choiceDesign(labels, source.prompt) : undefined;
};

export const designAnswerInput = (source: AnswerDesignSource): AnswerInputDesign => {
  const inferredChoice = inferChoiceDesign(source);
  if (inferredChoice) return inferredChoice;

  if (source.requestedInput) return { input: source.requestedInput };
  return { input: mathCourseKeys.has(source.courseKey) ? "math" : "text" };
};

export const designPracticeStep = (
  courseKey: AnswerCourseKey,
  step: PracticeStep,
): PracticeStep => {
  if (step.input) return step;

  const design = designAnswerInput({
    courseKey,
    prompt: step.prompt,
    answers: step.answers,
    placeholder: step.placeholder,
  });

  if (design.input === "radio" || design.input === "select" || design.input === "checkbox") {
    return {
      ...step,
      prompt: design.prompt ?? step.prompt,
      input: design.input,
      options: design.options ?? [],
    };
  }

  return {
    ...step,
    prompt: design.prompt ?? step.prompt,
    input: design.input,
  };
};

export const designPracticeSteps = (courseKey: AnswerCourseKey, steps: PracticeStep[]) =>
  steps.map((step) => designPracticeStep(courseKey, step));
