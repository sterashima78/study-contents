export type PracticeInputKind = "text" | "math" | "radio" | "select" | "checkbox";

export type PracticeOption = {
  value: string;
  label: string;
};

export type PracticeStep = {
  prompt: string;
  answers: string[];
  placeholder?: string;
  input?: PracticeInputKind;
  options?: PracticeOption[];
};
