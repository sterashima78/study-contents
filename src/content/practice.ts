export type PracticeInputKind = "text" | "math" | "radio" | "select" | "checkbox";

export type PracticeOption = {
  value: string;
  label: string;
};

type PracticeStepBase = {
  prompt: string;
  answers: string[];
  placeholder?: string;
};

export type PracticeStep =
  | (PracticeStepBase & {
      input?: "text" | "math";
      options?: never;
    })
  | (PracticeStepBase & {
      input: "radio" | "select" | "checkbox";
      options: PracticeOption[];
    });
