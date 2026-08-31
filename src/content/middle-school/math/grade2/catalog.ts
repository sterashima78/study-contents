import type { MathArea } from "../../../math1/types";
import { literalExpressionExplanationLesson } from "./lessons/literal-expression-explanation";
import { mixedMonomialCalculationLesson } from "./lessons/mixed-monomial-calculation";
import { monomialDivisionLesson } from "./lessons/monomial-division";
import { monomialMultiplicationLesson } from "./lessons/monomial-multiplication";
import { monomialPolynomialTermsLesson } from "./lessons/monomial-polynomial-terms";
import { polynomialAdditionLesson } from "./lessons/polynomial-addition";
import { polynomialCombineLikeTermsLesson } from "./lessons/polynomial-combine-like-terms";
import { polynomialSubtractionLesson } from "./lessons/polynomial-subtraction";

export const middleMath2Areas: MathArea[] = [
  {
    key: "numbers-expressions",
    title: "数と式",
    description: "中学1年の文字式を土台に、整式の計算と文字式による説明へ進みます。",
    units: [
      {
        key: "expressions-calculation",
        title: "式の計算と文字式の活用",
        description:
          "単項式・多項式の見方から、整式の加減、単項式の乗除、文字式を使った数量関係の説明まで学びます。",
        lessons: [
          monomialPolynomialTermsLesson,
          polynomialCombineLikeTermsLesson,
          polynomialAdditionLesson,
          polynomialSubtractionLesson,
          monomialMultiplicationLesson,
          monomialDivisionLesson,
          mixedMonomialCalculationLesson,
          literalExpressionExplanationLesson,
        ],
      },
    ],
  },
];

export const findMiddleMath2Area = (areaKey: string) =>
  middleMath2Areas.find((area) => area.key === areaKey);
