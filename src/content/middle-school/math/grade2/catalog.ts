import type { MathArea } from "../../../math1/types";
import { eliminationAddSubtractLesson } from "./lessons/elimination-add-subtract";
import { eliminationMultiplyLesson } from "./lessons/elimination-multiply";
import { linearEquationAsFunctionLesson } from "./lessons/linear-equation-as-function";
import { linearEquationTwoVariablesLesson } from "./lessons/linear-equation-two-variables";
import { linearFunctionApplicationLesson } from "./lessons/linear-function-application";
import { linearFunctionExpressionLesson } from "./lessons/linear-function-expression";
import { linearFunctionFromGraphLesson } from "./lessons/linear-function-from-graph";
import { linearFunctionGraphLesson } from "./lessons/linear-function-graph";
import { linearFunctionMeaningLesson } from "./lessons/linear-function-meaning";
import { linearFunctionRateOfChangeLesson } from "./lessons/linear-function-rate-of-change";
import { literalExpressionExplanationLesson } from "./lessons/literal-expression-explanation";
import { mixedMonomialCalculationLesson } from "./lessons/mixed-monomial-calculation";
import { monomialDivisionLesson } from "./lessons/monomial-division";
import { monomialMultiplicationLesson } from "./lessons/monomial-multiplication";
import { monomialPolynomialTermsLesson } from "./lessons/monomial-polynomial-terms";
import { polynomialAdditionLesson } from "./lessons/polynomial-addition";
import { polynomialCombineLikeTermsLesson } from "./lessons/polynomial-combine-like-terms";
import { polynomialSubtractionLesson } from "./lessons/polynomial-subtraction";
import { substitutionMethodLesson } from "./lessons/substitution-method";
import { systemMeaningLesson } from "./lessons/system-meaning";
import { systemSolveMixedLesson } from "./lessons/system-solve-mixed";
import { systemWordApplicationLesson } from "./lessons/system-word-application";
import { systemWordModelLesson } from "./lessons/system-word-model";
import { systemsAndGraphsLesson } from "./lessons/systems-and-graphs";

export const middleMath2Areas: MathArea[] = [
  {
    key: "numbers-expressions",
    title: "数と式",
    description:
      "中学1年の文字式と一元一次方程式を土台に、整式の計算、文字式の活用、連立二元一次方程式へ進みます。",
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
      {
        key: "simultaneous-equations",
        title: "連立二元一次方程式",
        description:
          "二元一次方程式と連立方程式の解の意味を押さえ、加減法・代入法で解き、具体的な問題に活用します。",
        lessons: [
          linearEquationTwoVariablesLesson,
          systemMeaningLesson,
          eliminationAddSubtractLesson,
          eliminationMultiplyLesson,
          substitutionMethodLesson,
          systemSolveMixedLesson,
          systemWordModelLesson,
          systemWordApplicationLesson,
        ],
      },
    ],
  },
  {
    key: "functions",
    title: "関数",
    description:
      "中学1年の比例・反比例を土台に、一次関数を表・式・グラフで捉え、二元一次方程式や具体的な事象と結び付けます。",
    units: [
      {
        key: "linear-functions",
        title: "一次関数",
        description:
          "一次関数の意味、変化の割合、式とグラフ、二元一次方程式・連立方程式との関係、具体的な事象への活用を学びます。",
        lessons: [
          linearFunctionMeaningLesson,
          linearFunctionRateOfChangeLesson,
          linearFunctionExpressionLesson,
          linearFunctionGraphLesson,
          linearFunctionFromGraphLesson,
          linearEquationAsFunctionLesson,
          systemsAndGraphsLesson,
          linearFunctionApplicationLesson,
        ],
      },
    ],
  },
];

export const findMiddleMath2Area = (areaKey: string) =>
  middleMath2Areas.find((area) => area.key === areaKey);
