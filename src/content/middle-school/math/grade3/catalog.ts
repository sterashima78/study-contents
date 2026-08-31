import type { MathArea } from "../../../math1/types";
import { errorApproximationScientificNotationLesson } from "./lessons/error-approximation-scientific-notation";
import { radicalAdditionSubtractionLesson } from "./lessons/radical-addition-subtraction";
import { radicalMixedCalculationLesson } from "./lessons/radical-mixed-calculation";
import { radicalMultiplicationDivisionLesson } from "./lessons/radical-multiplication-division";
import { radicalSimplificationLesson } from "./lessons/radical-simplification";
import { rationalIrrationalLesson } from "./lessons/rational-irrational";
import { squareRootApplicationLesson } from "./lessons/square-root-application";
import { squareRootApproximationLesson } from "./lessons/square-root-approximation";
import { squareRootMeaningLesson } from "./lessons/square-root-meaning";

export const middleMath3Areas: MathArea[] = [
  {
    key: "numbers-expressions",
    title: "数と式",
    description:
      "平方根で数の範囲を無理数まで広げ、続いて式の展開・因数分解、二次方程式へ進みます。",
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
    ],
  },
];

export const findMiddleMath3Area = (areaKey: string) =>
  middleMath3Areas.find((area) => area.key === areaKey);
