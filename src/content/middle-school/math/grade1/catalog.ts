import type { MathArea } from "../../../math1/types";
import { additionLesson } from "./lessons/addition";
import { combineLikeTermsLesson } from "./lessons/combine-like-terms";
import { divisionLesson } from "./lessons/division";
import { divisionNotationLesson } from "./lessons/division-notation";
import { expressRelationsLesson } from "./lessons/express-relations";
import { lettersMeaningLesson } from "./lessons/letters-meaning";
import { linearExpressionAdditionSubtractionLesson } from "./lessons/linear-expression-addition-subtraction";
import { multiplicationLesson } from "./lessons/multiplication";
import { multiplicationNotationLesson } from "./lessons/multiplication-notation";
import { numberLineAbsoluteValueLesson } from "./lessons/number-line-absolute-value";
import { positiveNegativeMeaningLesson } from "./lessons/positive-negative-meaning";
import { substitutionValueLesson } from "./lessons/substitution-value";
import { subtractionLesson } from "./lessons/subtraction";
import { termsCoefficientsLesson } from "./lessons/terms-coefficients";

export const middleMath1Areas: MathArea[] = [
  {
    key: "numbers-expressions",
    title: "数と式",
    description: "正の数・負の数から始め、文字を使った数量の表現と一次式の計算へ進みます。",
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
        description: "文字で数量を一般的に表し、表記・代入・一次式の加減・数量関係の表現を学びます。",
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
    ],
  },
];

export const findMiddleMath1Area = (areaKey: string) =>
  middleMath1Areas.find((area) => area.key === areaKey);
