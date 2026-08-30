import type { MathArea } from "../../../math1/types";
import { additionLesson } from "./lessons/addition";
import { angleBisectorConstructionLesson } from "./lessons/angle-bisector-construction";
import { combineLikeTermsLesson } from "./lessons/combine-like-terms";
import { constructionSymmetryLesson } from "./lessons/construction-symmetry";
import { coordinatesLesson } from "./lessons/coordinates";
import { divisionLesson } from "./lessons/division";
import { divisionNotationLesson } from "./lessons/division-notation";
import { equalityPropertiesLesson } from "./lessons/equality-properties";
import { equationAddSubtractLesson } from "./lessons/equation-add-subtract";
import { equationBothSidesLesson } from "./lessons/equation-both-sides";
import { equationMeaningLesson } from "./lessons/equation-meaning";
import { equationMultiplyDivideLesson } from "./lessons/equation-multiply-divide";
import { equationWordProblemsLesson } from "./lessons/equation-word-problems";
import { expressRelationsLesson } from "./lessons/express-relations";
import { functionMeaningLesson } from "./lessons/function-meaning";
import { functionRepresentationsApplicationLesson } from "./lessons/function-representations-application";
import { inverseProportionGraphLesson } from "./lessons/inverse-proportion-graph";
import { inverseProportionTableExpressionLesson } from "./lessons/inverse-proportion-table-expression";
import { lettersMeaningLesson } from "./lessons/letters-meaning";
import { linePlaneRelationsLesson } from "./lessons/line-plane-relations";
import { linearExpressionAdditionSubtractionLesson } from "./lessons/linear-expression-addition-subtraction";
import { multiplicationLesson } from "./lessons/multiplication";
import { multiplicationNotationLesson } from "./lessons/multiplication-notation";
import { netsLesson } from "./lessons/nets";
import { numberLineAbsoluteValueLesson } from "./lessons/number-line-absolute-value";
import { perpendicularBisectorConstructionLesson } from "./lessons/perpendicular-bisector-construction";
import { perpendicularConstructionLesson } from "./lessons/perpendicular-construction";
import { perspectiveDrawingLesson } from "./lessons/perspective-drawing";
import { planePlaneRelationsLesson } from "./lessons/plane-plane-relations";
import { positiveNegativeMeaningLesson } from "./lessons/positive-negative-meaning";
import { projectionsLesson } from "./lessons/projections";
import { proportionEquationsLesson } from "./lessons/proportion-equations";
import { proportionGraphLesson } from "./lessons/proportion-graph";
import { proportionTableExpressionLesson } from "./lessons/proportion-table-expression";
import { reflectionLesson } from "./lessons/reflection";
import { rotationLesson } from "./lessons/rotation";
import { solidByTranslationLesson } from "./lessons/solid-by-translation";
import { solidsOfRevolutionLesson } from "./lessons/solids-of-revolution";
import { spatialLineRelationsLesson } from "./lessons/spatial-line-relations";
import { substitutionValueLesson } from "./lessons/substitution-value";
import { subtractionLesson } from "./lessons/subtraction";
import { tangentConstructionApplicationLesson } from "./lessons/tangent-construction-application";
import { termsCoefficientsLesson } from "./lessons/terms-coefficients";
import { translationLesson } from "./lessons/translation";
import { transpositionLesson } from "./lessons/transposition";
import { variablesDomainLesson } from "./lessons/variables-domain";

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
  {
    key: "geometry",
    title: "図形",
    description: "平面図形の作図と移動から、空間図形の位置関係や平面上での表現へ広げます。",
    units: [
      {
        key: "plane-geometry",
        title: "平面図形",
        description:
          "定規とコンパスによる基本作図と図形の移動を、図形の性質や対応点と結び付けて学びます。",
        lessons: [
          constructionSymmetryLesson,
          angleBisectorConstructionLesson,
          perpendicularBisectorConstructionLesson,
          perpendicularConstructionLesson,
          translationLesson,
          reflectionLesson,
          rotationLesson,
          tangentConstructionApplicationLesson,
        ],
      },
      {
        key: "spatial-relationships-representations",
        title: "空間図形：位置関係と表現",
        description:
          "空間の直線・平面の位置関係を捉え、見取図・展開図・投影図や図形の運動で立体を表します。",
        lessons: [
          spatialLineRelationsLesson,
          linePlaneRelationsLesson,
          planePlaneRelationsLesson,
          perspectiveDrawingLesson,
          netsLesson,
          projectionsLesson,
          solidByTranslationLesson,
          solidsOfRevolutionLesson,
        ],
      },
    ],
  },
  {
    key: "functions",
    title: "関数",
    description: "二つの数量の変化と対応に着目し、比例・反比例を表、式、座標、グラフで捉えます。",
    units: [
      {
        key: "proportion-inverse-proportion",
        title: "比例・反比例",
        description:
          "関数関係の意味から、比例・反比例の式とグラフ、表・式・グラフを用いた活用まで学びます。",
        lessons: [
          functionMeaningLesson,
          variablesDomainLesson,
          proportionTableExpressionLesson,
          coordinatesLesson,
          proportionGraphLesson,
          inverseProportionTableExpressionLesson,
          inverseProportionGraphLesson,
          functionRepresentationsApplicationLesson,
        ],
      },
    ],
  },
];

export const findMiddleMath1Area = (areaKey: string) =>
  middleMath1Areas.find((area) => area.key === areaKey);
