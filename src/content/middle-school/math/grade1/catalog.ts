import type { MathArea } from "../../../math1/types";
import { additionLesson } from "./lessons/addition";
import { divisionLesson } from "./lessons/division";
import { multiplicationLesson } from "./lessons/multiplication";
import { numberLineAbsoluteValueLesson } from "./lessons/number-line-absolute-value";
import { positiveNegativeMeaningLesson } from "./lessons/positive-negative-meaning";
import { subtractionLesson } from "./lessons/subtraction";

export const middleMath1Areas: MathArea[] = [
  {
    key: "numbers-expressions",
    title: "数と式",
    description: "正の数・負の数から始め、数の範囲を広げながら計算の意味と手順を身に付けます。",
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
    ],
  },
];

export const findMiddleMath1Area = (areaKey: string) =>
  middleMath1Areas.find((area) => area.key === areaKey);
