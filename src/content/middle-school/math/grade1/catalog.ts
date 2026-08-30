import type { MathArea } from "../../../math1/types";
import { additionLesson } from "./lessons/addition";
import { combineLikeTermsLesson } from "./lessons/combine-like-terms";
import { divisionLesson } from "./lessons/division";
import { divisionNotationLesson } from "./lessons/division-notation";
import { equalityPropertiesLesson } from "./lessons/equality-properties";
import { equationAddSubtractLesson } from "./lessons/equation-add-subtract";
import { equationBothSidesLesson } from "./lessons/equation-both-sides";
import { equationMeaningLesson } from "./lessons/equation-meaning";
import { equationMultiplyDivideLesson } from "./lessons/equation-multiply-divide";
import { equationWordProblemsLesson } from "./lessons/equation-word-problems";
import { expressRelationsLesson } from "./lessons/express-relations";
import { lettersMeaningLesson } from "./lessons/letters-meaning";
import { linearExpressionAdditionSubtractionLesson } from "./lessons/linear-expression-addition-subtraction";
import { multiplicationLesson } from "./lessons/multiplication";
import { multiplicationNotationLesson } from "./lessons/multiplication-notation";
import { numberLineAbsoluteValueLesson } from "./lessons/number-line-absolute-value";
import { positiveNegativeMeaningLesson } from "./lessons/positive-negative-meaning";
import { proportionEquationsLesson } from "./lessons/proportion-equations";
import { substitutionValueLesson } from "./lessons/substitution-value";
import { subtractionLesson } from "./lessons/subtraction";
import { termsCoefficientsLesson } from "./lessons/terms-coefficients";
import { transpositionLesson } from "./lessons/transposition";

export const middleMath1Areas: MathArea[] = [
  {
    key: "numbers-expressions",
    title: "数と式",
    description: "正の数・負の数から始め、文字を使った数量の表現と一元一次方程式へ進みます。",
    units: [
      {
        key: "positive-negative-numbers",
        title: "正の数・負の数",
        description: "0を基準に正負の数を捉え、数直線と符号を使いながら四則計算へ進みます。",
        lessons: [
          positiveNegativeMeaningLesson,
          numberLineAbsoluteValueLesson,
          additionLesson,
          subtractionLesson,
          multiplicationLesson,
          divisionLesson,
        ],
      },
      {
        key: "literal-expressions",
        title: "文字と式",
        description:
          "文字で数量を一般的に表し、表記・代入・一次式の加減・数量関係の表現を学びます。",
        lessons: [
          lettersMeaningLesson,
          multiplicationNotationLesson,
          divisionNotationLesson,
          substitutionValueLesson,
          termsCoefficientsLesson,
          combineLikeTermsLesson,
          linearExpressionAdditionSubtractionLesson,
          expressRelationsLesson,
        ],
      },
      {
        key: "linear-equations",
        title: "一元一次方程式",
        description:
          "方程式と解の意味から、等式の性質、移項、比例式、文章題への活用まで段階的に学びます。",
        lessons: [
          equationMeaningLesson,
          equalityPropertiesLesson,
          equationAddSubtractLesson,
          equationMultiplyDivideLesson,
          transpositionLesson,
          equationBothSidesLesson,
          proportionEquationsLesson,
          equationWordProblemsLesson,
        ],
      },
    ],
  },
];

export const findMiddleMath1Area = (areaKey: string) =>
  middleMath1Areas.find((area) => area.key === areaKey);
