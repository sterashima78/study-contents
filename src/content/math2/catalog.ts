import type { MathArea } from "../math1/types";
import { calculusUnits } from "./calculus";
import { exponentialLogarithmicUnits } from "./exponential-logarithmic";
import { expressionUnits } from "./expressions";
import { geometryEquationUnits } from "./geometry-equations";
import { trigonometricFunctionUnits } from "./trigonometric-functions";

export const math2Areas: MathArea[] = [
  {
    key: "expressions",
    title: "いろいろな式",
    description: "三次式、整式の除法、複素数、方程式と証明を通して、式を論理的に扱う力を伸ばします。",
    units: expressionUnits,
  },
  {
    key: "geometry-equations",
    title: "図形と方程式",
    description: "点・直線・円・軌跡を座標と方程式で表し、図形の条件を代数的に調べます。",
    units: geometryEquationUnits,
  },
  {
    key: "exponential-logarithmic",
    title: "指数関数・対数関数",
    description: "指数の範囲を広げ、指数関数とその逆である対数関数の性質や方程式を学びます。",
    units: exponentialLogarithmicUnits,
  },
  {
    key: "trigonometric-functions",
    title: "三角関数",
    description: "角を一般化して三角関数を定義し、グラフ・加法定理・三角方程式へ進みます。",
    units: trigonometricFunctionUnits,
  },
  {
    key: "calculus",
    title: "微分・積分の考え",
    description: "変化率を微分で捉え、積分を微分の逆操作として面積や変化量の計算へつなげます。",
    units: calculusUnits,
  },
];
