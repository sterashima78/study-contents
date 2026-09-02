import { curriculumReferences as baseCurriculumReferences } from "./curriculum-references.js";
import { middleEnglishCurriculumReferences } from "./middle-school/english/curriculum-references.js";

export const curriculumReferences = Object.freeze({
  ...baseCurriculumReferences,
  ...middleEnglishCurriculumReferences,
});

export function getCurriculumReference(courseKey) {
  if (typeof courseKey !== "string" || !Object.hasOwn(curriculumReferences, courseKey)) {
    return undefined;
  }
  return curriculumReferences[courseKey];
}
