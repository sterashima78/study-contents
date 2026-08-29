import { getAdditionalFormulaDerivation } from "./additional-formula-derivations";
import { getFormulaDerivation as getAlgebraFormulaDerivation } from "./formula-derivations";

export const getFormulaDerivation = (lessonKey: string) =>
  getAlgebraFormulaDerivation(lessonKey) ?? getAdditionalFormulaDerivation(lessonKey);
