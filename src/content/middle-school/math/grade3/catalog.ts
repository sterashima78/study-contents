import type { MathArea } from "../../../math1/types";
import { binomialExpansionDistributiveLesson } from "./lessons/binomial-expansion-distributive";
import { commonFactorFactorizationLesson } from "./lessons/common-factor-factorization";
import { differenceSquaresFactorizationLesson } from "./lessons/difference-squares-factorization";
import { errorApproximationScientificNotationLesson } from "./lessons/error-approximation-scientific-notation";
import { formulaEfficientCalculationLesson } from "./lessons/formula-efficient-calculation";
import { monomialPolynomialMultiplicationLesson } from "./lessons/monomial-polynomial-multiplication";
import { polynomialMonomialDivisionLesson } from "./lessons/polynomial-monomial-division";
import { polynomialRelationExplanationLesson } from "./lessons/polynomial-relation-explanation";
import { productExpansionXabLesson } from "./lessons/product-expansion-xab";
import { quadraticEquationCompletingSquareLesson } from "./lessons/quadratic-equation-completing-square";
import { quadraticEquationFactorizationLesson } from "./lessons/quadratic-equation-factorization";
import { quadraticEquationInterpretationLesson } from "./lessons/quadratic-equation-interpretation";
import { quadraticEquationMeaningLesson } from "./lessons/quadratic-equation-meaning";
import { quadraticEquationMethodSelectionLesson } from "./lessons/quadratic-equation-method-selection";
import { quadraticEquationModelingLesson } from "./lessons/quadratic-equation-modeling";
import { quadraticEquationSquareRootLesson } from "./lessons/quadratic-equation-square-root";
import { quadraticFormulaDerivationLesson } from "./lessons/quadratic-formula-derivation";
import { quadraticFormulaSolvingLesson } from "./lessons/quadratic-formula-solving";
import { radicalAdditionSubtractionLesson } from "./lessons/radical-addition-subtraction";
import { radicalMixedCalculationLesson } from "./lessons/radical-mixed-calculation";
import { radicalMultiplicationDivisionLesson } from "./lessons/radical-multiplication-division";
import { radicalSimplificationLesson } from "./lessons/radical-simplification";
import { rationalIrrationalLesson } from "./lessons/rational-irrational";
import { squareExpansionLesson } from "./lessons/square-expansion";
import { squareFactorizationLesson } from "./lessons/square-factorization";
import { squareRootApplicationLesson } from "./lessons/square-root-application";
import { squareRootApproximationLesson } from "./lessons/square-root-approximation";
import { squareRootMeaningLesson } from "./lessons/square-root-meaning";
import { sumDifferenceExpansionLesson } from "./lessons/sum-difference-expansion";
import { trinomialFactorizationLesson } from "./lessons/trinomial-factorization";

export const middleMath3Areas: MathArea[] = [
  {
    key: "numbers-expressions",
    title: "数と式",
    description: "平方根で数の範囲を広げ、式の展開・因数分解を経て二次方程式へ進みます。",
    units: [
      {
        key: "square-roots",
        title: "平方根",
        description:
          "平方根の意味、有理数と無理数、近似値、平方根を含む計算、誤差と数の表し方、具体的な活用を学びます。",
        lessons: [
          squareRootMeaningLesson,
          rationalIrrationalLesson,
          squareRootApproximationLesson,
          radicalSimplificationLesson,
          radicalMultiplicationDivisionLesson,
          radicalAdditionSubtractionLesson,
          radicalMixedCalculationLesson,
          errorApproximationScientificNotationLesson,
          squareRootApplicationLesson,
        ],
      },
      {
        key: "polynomial-expansion-factorization",
        title: "式の展開と因数分解",
        description:
          "単項式と多項式の計算から、一次式の積、4つの典型公式、因数分解、公式を使う数の計算、文字式による数量関係の説明へ進みます。",
        lessons: [
          monomialPolynomialMultiplicationLesson,
          polynomialMonomialDivisionLesson,
          binomialExpansionDistributiveLesson,
          squareExpansionLesson,
          sumDifferenceExpansionLesson,
          productExpansionXabLesson,
          commonFactorFactorizationLesson,
          squareFactorizationLesson,
          differenceSquaresFactorizationLesson,
          trinomialFactorizationLesson,
          formulaEfficientCalculationLesson,
          polynomialRelationExplanationLesson,
        ],
      },
      {
        key: "quadratic-equations",
        title: "二次方程式",
        description:
          "二次方程式の意味から、平方根・因数分解・平方完成・解の公式による解法、解法の選択、具体的な場面での方程式化と解の吟味へ進みます。",
        lessons: [
          quadraticEquationMeaningLesson,
          quadraticEquationSquareRootLesson,
          quadraticEquationFactorizationLesson,
          quadraticEquationCompletingSquareLesson,
          quadraticFormulaDerivationLesson,
          quadraticFormulaSolvingLesson,
          quadraticEquationMethodSelectionLesson,
          quadraticEquationModelingLesson,
          quadraticEquationInterpretationLesson,
        ],
      },
    ],
  },
];

export const findMiddleMath3Area = (areaKey: string) =>
  middleMath3Areas.find((area) => area.key === areaKey);
