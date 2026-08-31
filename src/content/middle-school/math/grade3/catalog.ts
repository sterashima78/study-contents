import type { MathArea } from "../../../math1/types";
import { binomialExpansionDistributiveLesson } from "./lessons/binomial-expansion-distributive";
import { broaderFunctionRelationsLesson } from "./lessons/broader-function-relations";
import { censusSampleMeaningLesson } from "./lessons/census-sample-meaning";
import { circleAngleApplicationLesson } from "./lessons/circle-angle-application";
import { circleAngleProofLesson } from "./lessons/circle-angle-proof";
import { commonFactorFactorizationLesson } from "./lessons/common-factor-factorization";
import { differenceSquaresFactorizationLesson } from "./lessons/difference-squares-factorization";
import { errorApproximationScientificNotationLesson } from "./lessons/error-approximation-scientific-notation";
import { formulaEfficientCalculationLesson } from "./lessons/formula-efficient-calculation";
import { inscribedAngleConverseLesson } from "./lessons/inscribed-angle-converse";
import { inscribedCentralAngleLesson } from "./lessons/inscribed-central-angle";
import { midpointTheoremLesson } from "./lessons/midpoint-theorem";
import { monomialPolynomialMultiplicationLesson } from "./lessons/monomial-polynomial-multiplication";
import { parallelLinesSegmentRatioLesson } from "./lessons/parallel-lines-segment-ratio";
import { polynomialMonomialDivisionLesson } from "./lessons/polynomial-monomial-division";
import { polynomialRelationExplanationLesson } from "./lessons/polynomial-relation-explanation";
import { populationSampleLesson } from "./lessons/population-sample";
import { productExpansionXabLesson } from "./lessons/product-expansion-xab";
import { pythagoreanApplicationLesson } from "./lessons/pythagorean-application";
import { pythagoreanConverseLesson } from "./lessons/pythagorean-converse";
import { pythagoreanCoordinateDistanceLesson } from "./lessons/pythagorean-coordinate-distance";
import { pythagoreanDiscoveryLesson } from "./lessons/pythagorean-discovery";
import { pythagoreanHypotenuseLesson } from "./lessons/pythagorean-hypotenuse";
import { pythagoreanLegLesson } from "./lessons/pythagorean-leg";
import { pythagoreanMeaningLesson } from "./lessons/pythagorean-meaning";
import { pythagoreanSpaceLesson } from "./lessons/pythagorean-space";
import { quadraticEquationCompletingSquareLesson } from "./lessons/quadratic-equation-completing-square";
import { quadraticEquationFactorizationLesson } from "./lessons/quadratic-equation-factorization";
import { quadraticEquationInterpretationLesson } from "./lessons/quadratic-equation-interpretation";
import { quadraticEquationMeaningLesson } from "./lessons/quadratic-equation-meaning";
import { quadraticEquationMethodSelectionLesson } from "./lessons/quadratic-equation-method-selection";
import { quadraticEquationModelingLesson } from "./lessons/quadratic-equation-modeling";
import { quadraticEquationSquareRootLesson } from "./lessons/quadratic-equation-square-root";
import { quadraticFormulaDerivationLesson } from "./lessons/quadratic-formula-derivation";
import { quadraticFormulaSolvingLesson } from "./lessons/quadratic-formula-solving";
import { quadraticFunctionApplicationLesson } from "./lessons/quadratic-function-application";
import { quadraticFunctionChangeLesson } from "./lessons/quadratic-function-change";
import { quadraticFunctionCoefficientLesson } from "./lessons/quadratic-function-coefficient";
import { quadraticFunctionExpressionLesson } from "./lessons/quadratic-function-expression";
import { quadraticFunctionGraphLesson } from "./lessons/quadratic-function-graph";
import { quadraticFunctionMeaningLesson } from "./lessons/quadratic-function-meaning";
import { quadraticFunctionRateLesson } from "./lessons/quadratic-function-rate";
import { quadraticFunctionRepresentationsLesson } from "./lessons/quadratic-function-representations";
import { radicalAdditionSubtractionLesson } from "./lessons/radical-addition-subtraction";
import { radicalMixedCalculationLesson } from "./lessons/radical-mixed-calculation";
import { radicalMultiplicationDivisionLesson } from "./lessons/radical-multiplication-division";
import { radicalSimplificationLesson } from "./lessons/radical-simplification";
import { randomSamplingLesson } from "./lessons/random-sampling";
import { rationalIrrationalLesson } from "./lessons/rational-irrational";
import { sameArcInscribedAnglesLesson } from "./lessons/same-arc-inscribed-angles";
import { sampleCountEstimateLesson } from "./lessons/sample-count-estimate";
import { sampleProportionEstimateLesson } from "./lessons/sample-proportion-estimate";
import { sampleSurveyPlanningLesson } from "./lessons/sample-survey-planning";
import { samplingBiasLesson } from "./lessons/sampling-bias";
import { samplingVariabilityLesson } from "./lessons/sampling-variability";
import { similarityApplicationLesson } from "./lessons/similarity-application";
import { similarityAreaRatioLesson } from "./lessons/similarity-area-ratio";
import { similarityMeaningLesson } from "./lessons/similarity-meaning";
import { similarityProofLesson } from "./lessons/similarity-proof";
import { similarityVolumeRatioLesson } from "./lessons/similarity-volume-ratio";
import { squareExpansionLesson } from "./lessons/square-expansion";
import { squareFactorizationLesson } from "./lessons/square-factorization";
import { squareRootApplicationLesson } from "./lessons/square-root-application";
import { squareRootApproximationLesson } from "./lessons/square-root-approximation";
import { squareRootMeaningLesson } from "./lessons/square-root-meaning";
import { sumDifferenceExpansionLesson } from "./lessons/sum-difference-expansion";
import { triangleSimilarityConditionsLesson } from "./lessons/triangle-similarity-conditions";
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
  {
    key: "geometry",
    title: "図形",
    description:
      "合同と証明の学習を発展させ、相似、円周角、三平方の定理を使って図形を論理的に考察・計量します。",
    units: [
      {
        key: "similarity",
        title: "図形の相似",
        description:
          "相似の意味と三角形の相似条件、証明、平行線と線分の比、中点連結定理、面積比・体積比、測量への活用を学びます。",
        lessons: [
          similarityMeaningLesson,
          triangleSimilarityConditionsLesson,
          similarityProofLesson,
          parallelLinesSegmentRatioLesson,
          midpointTheoremLesson,
          similarityAreaRatioLesson,
          similarityVolumeRatioLesson,
          similarityApplicationLesson,
        ],
      },
      {
        key: "circle-angles",
        title: "円周角と中心角",
        description:
          "円周角と中心角の関係、同じ弧に対する円周角、証明、定理の逆、作図・測定への活用を学びます。",
        lessons: [
          inscribedCentralAngleLesson,
          sameArcInscribedAnglesLesson,
          circleAngleProofLesson,
          inscribedAngleConverseLesson,
          circleAngleApplicationLesson,
        ],
      },
      {
        key: "pythagorean-theorem",
        title: "三平方の定理",
        description:
          "三平方の定理を面積から見いだし、辺の計量、定理の逆、座標・空間図形・具体的な距離の問題へ活用します。",
        lessons: [
          pythagoreanMeaningLesson,
          pythagoreanDiscoveryLesson,
          pythagoreanHypotenuseLesson,
          pythagoreanLegLesson,
          pythagoreanConverseLesson,
          pythagoreanCoordinateDistanceLesson,
          pythagoreanSpaceLesson,
          pythagoreanApplicationLesson,
        ],
      },
    ],
  },
  {
    key: "functions",
    title: "関数",
    description:
      "比例・反比例・一次関数の学習を発展させ、関数 y=ax² とさらに広い関数関係を考察します。",
    units: [
      {
        key: "quadratic-functions",
        title: "関数 y=ax²",
        description:
          "2乗比例の意味、式、値の変化、放物線、比例定数、変化の割合、表・式・グラフの関連、具体的な活用と関数概念の広がりを学びます。",
        lessons: [
          quadraticFunctionMeaningLesson,
          quadraticFunctionExpressionLesson,
          quadraticFunctionChangeLesson,
          quadraticFunctionGraphLesson,
          quadraticFunctionCoefficientLesson,
          quadraticFunctionRateLesson,
          quadraticFunctionRepresentationsLesson,
          quadraticFunctionApplicationLesson,
          broaderFunctionRelationsLesson,
        ],
      },
    ],
  },
  {
    key: "data",
    title: "データの活用",
    description:
      "全体を直接調べられない場面で標本を無作為に取り出し、母集団の傾向を推定して批判的に判断します。",
    units: [
      {
        key: "sample-survey",
        title: "標本調査",
        description:
          "全数調査との違い、母集団と標本、無作為抽出、割合と個数の推定、偏り・ばらつき、調査計画と批判的考察を学びます。",
        lessons: [
          censusSampleMeaningLesson,
          populationSampleLesson,
          randomSamplingLesson,
          sampleProportionEstimateLesson,
          sampleCountEstimateLesson,
          samplingBiasLesson,
          samplingVariabilityLesson,
          sampleSurveyPlanningLesson,
        ],
      },
    ],
  },
];

export const findMiddleMath3Area = (areaKey: string) =>
  middleMath3Areas.find((area) => area.key === areaKey);
