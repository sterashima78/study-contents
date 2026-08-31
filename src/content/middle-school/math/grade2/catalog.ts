import type { MathArea } from "../../../math1/types";
import { basicProbabilityLesson } from "./lessons/basic-probability";
import { boxPlotComparisonCritiqueLesson } from "./lessons/box-plot-comparison-critique";
import { boxPlotReadingLesson } from "./lessons/box-plot-reading";
import { congruenceMeaningLesson } from "./lessons/congruence-meaning";
import { converseCounterexampleLesson } from "./lessons/converse-counterexample";
import { countOutcomesSystematicallyLesson } from "./lessons/count-outcomes-systematically";
import { eliminationAddSubtractLesson } from "./lessons/elimination-add-subtract";
import { eliminationMultiplyLesson } from "./lessons/elimination-multiply";
import { equallyLikelyOutcomesLesson } from "./lessons/equally-likely-outcomes";
import { geometryProofApplicationLesson } from "./lessons/geometry-proof-application";
import { interquartileRangeLesson } from "./lessons/interquartile-range";
import { isoscelesTriangleProofLesson } from "./lessons/isosceles-triangle-proof";
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
import { parallelLineConditionsLesson } from "./lessons/parallel-line-conditions";
import { parallelogramConditionsSpecialLesson } from "./lessons/parallelogram-conditions-special";
import { parallelogramPropertiesProofLesson } from "./lessons/parallelogram-properties-proof";
import { polygonAnglePropertiesLesson } from "./lessons/polygon-angle-properties";
import { polynomialAdditionLesson } from "./lessons/polynomial-addition";
import { polynomialCombineLikeTermsLesson } from "./lessons/polynomial-combine-like-terms";
import { polynomialSubtractionLesson } from "./lessons/polynomial-subtraction";
import { probabilityApplicationLesson } from "./lessons/probability-application";
import { probabilityComparisonFairnessLesson } from "./lessons/probability-comparison-fairness";
import { probabilityNotGuaranteeLesson } from "./lessons/probability-not-guarantee";
import { proofStructureLesson } from "./lessons/proof-structure";
import { quartileValuesLesson } from "./lessons/quartile-values";
import { substitutionMethodLesson } from "./lessons/substitution-method";
import { systemMeaningLesson } from "./lessons/system-meaning";
import { systemSolveMixedLesson } from "./lessons/system-solve-mixed";
import { systemWordApplicationLesson } from "./lessons/system-word-application";
import { systemWordModelLesson } from "./lessons/system-word-model";
import { systemsAndGraphsLesson } from "./lessons/systems-and-graphs";
import { theoreticalProbabilityMeaningLesson } from "./lessons/theoretical-probability-meaning";
import { triangleAnglePropertiesLesson } from "./lessons/triangle-angle-properties";
import { triangleCongruenceConditionsLesson } from "./lessons/triangle-congruence-conditions";
import { twoStepProbabilityLesson } from "./lessons/two-step-probability";
import { verticalCorrespondingAlternateLesson } from "./lessons/vertical-corresponding-alternate";

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
    key: "geometry",
    title: "図形",
    description:
      "平行線と角の性質から多角形へ広げ、三角形の合同条件を根拠に図形の性質を証明する力を身に付けます。",
    units: [
      {
        key: "parallel-lines-polygons",
        title: "平行線と多角形の角",
        description:
          "対頂角・同位角・錯角、平行線の性質と条件を基に、三角形や多角形の角の性質を見いだし説明します。",
        lessons: [
          verticalCorrespondingAlternateLesson,
          parallelLineConditionsLesson,
          triangleAnglePropertiesLesson,
          polygonAnglePropertiesLesson,
        ],
      },
      {
        key: "congruence-proofs",
        title: "合同と証明",
        description:
          "合同の意味と三角形の合同条件から、証明の組み立て、三角形・平行四辺形の性質、逆・反例、活用へ進みます。",
        lessons: [
          congruenceMeaningLesson,
          triangleCongruenceConditionsLesson,
          proofStructureLesson,
          isoscelesTriangleProofLesson,
          parallelogramPropertiesProofLesson,
          parallelogramConditionsSpecialLesson,
          converseCounterexampleLesson,
          geometryProofApplicationLesson,
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
  {
    key: "data",
    title: "データの活用",
    description:
      "四分位数・箱ひげ図で複数のデータ分布を比較し、同様に確からしい場合の数を基に確率を求めて不確定な事象を考察します。",
    units: [
      {
        key: "data-distribution-comparison",
        title: "データの分布と比較",
        description:
          "四分位数、四分位範囲、箱ひげ図を使って複数の分布を比較し、表現から読み取れることを批判的に考察します。",
        lessons: [
          quartileValuesLesson,
          interquartileRangeLesson,
          boxPlotReadingLesson,
          boxPlotComparisonCritiqueLesson,
        ],
      },
      {
        key: "probability-counting",
        title: "場合の数と確率",
        description:
          "同様に確からしい場合を漏れなく整理して確率を求め、確率を不確定な事象の比較・判断・説明に活用します。",
        lessons: [
          theoreticalProbabilityMeaningLesson,
          equallyLikelyOutcomesLesson,
          countOutcomesSystematicallyLesson,
          basicProbabilityLesson,
          twoStepProbabilityLesson,
          probabilityComparisonFairnessLesson,
          probabilityNotGuaranteeLesson,
          probabilityApplicationLesson,
        ],
      },
    ],
  },
];

export const findMiddleMath2Area = (areaKey: string) =>
  middleMath2Areas.find((area) => area.key === areaKey);
