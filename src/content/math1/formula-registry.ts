import { getMath2FormulaDerivation } from "../math2/formula-derivations";
import { getMathBFormulaDerivation } from "../mathb/formula-derivations";
import { getAdditionalFormulaDerivation } from "./additional-formula-derivations";
import { getFormulaDerivation as getAlgebraFormulaDerivation } from "./formula-derivations";

export const getFormulaDerivation = (lessonKey: string) =>
  getAlgebraFormulaDerivation(lessonKey) ??
  getAdditionalFormulaDerivation(lessonKey) ??
  getMathBFormulaDerivation(lessonKey) ??
  getMath2FormulaDerivation(lessonKey);
