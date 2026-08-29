import type { MathArea } from "../math1/types";
import { differentiationUnits } from "./differentiation";
import { integrationUnits } from "./integration";
import { limitUnits } from "./limits";

export const math3Areas: MathArea[] = [
  {
    key: "limits",
    title: "極限",
    description: "数列と関数の極限を、収束・無限級数・連続性までつなげて理解します。",
    units: limitUnits,
  },
  {
    key: "differentiation",
    title: "微分法",
    description: "多様な関数の導関数を計算し、接線・増減・凹凸・運動へ応用します。",
    units: differentiationUnits,
  },
  {
    key: "integration",
    title: "積分法",
    description: "置換・部分積分を含む計算法を学び、面積・体積・曲線の長さへ応用します。",
    units: integrationUnits,
  },
];
