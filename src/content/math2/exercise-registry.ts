import type { GeneratedExercise } from "../math1/exercise-registry";
import { math2Areas } from "./catalog";

type ExerciseTemplate = {
  prompt: string;
  answers: string[];
  hint?: string;
};

const lessonExercisePools: Record<string, ExerciseTemplate[]> = {
  "cubic-identities": [
    { prompt: "(x+2)³ を展開しなさい。", answers: ["x³+6x²+12x+8"] },
    { prompt: "x³+8 を因数分解しなさい。", answers: ["(x+2)(x²-2x+4)"] },
    { prompt: "(2x−1)³ を展開しなさい。", answers: ["8x³-12x²+6x-1"] },
  ],
  "polynomial-division": [
    { prompt: "(x²+5x+6)÷(x+2) の商を求めなさい。", answers: ["x+3"] },
    { prompt: "x³−1 を x−1 で割った商を求めなさい。", answers: ["x²+x+1"] },
    { prompt: "(2x³+x²−5x+2)÷(x+2) の余りを求めなさい。", answers: ["4"] },
  ],
  "identity-inequality-proof": [
    { prompt: "x²−6x+9 を平方の形にしなさい。", answers: ["(x-3)²"] },
    { prompt: "a²+b²−2ab を因数分解しなさい。", answers: ["(a-b)²"] },
    { prompt: "x²+4x+5 の最小値を求めなさい。", answers: ["1"] },
  ],
  "complex-numbers": [
    { prompt: "(1+2i)+(3−5i) を計算しなさい。", answers: ["4-3i"] },
    { prompt: "(2+i)(2−i) を計算しなさい。", answers: ["5"] },
    { prompt: "i⁶ を計算しなさい。", answers: ["-1"] },
  ],
  "roots-coefficients-factor-theorem": [
    { prompt: "x²−5x+6=0 の2解の和を求めなさい。", answers: ["5"] },
    { prompt: "x²−5x+6=0 の2解の積を求めなさい。", answers: ["6"] },
    { prompt: "x³−6x²+11x−6=0 の解をすべて書きなさい。", answers: ["1,2,3", "x=1,2,3"] },
  ],
  "section-formula": [
    { prompt: "A(0,0), B(6,3) の中点を求めなさい。", answers: ["(3,3/2)", "(3,1.5)"] },
    { prompt: "A(1,2), B(7,8) を1:2に内分する点を求めなさい。", answers: ["(3,4)"] },
    { prompt: "A(−2,4), B(4,−2) を2:1に内分する点を求めなさい。", answers: ["(2,0)"] },
  ],
  "line-equations": [
    { prompt: "点(1,2)を通り傾き3の直線を求めなさい。", answers: ["y=3x-1", "y-2=3(x-1)"] },
    { prompt: "(0,1),(2,5)を通る直線の傾きを求めなさい。", answers: ["2"] },
    { prompt: "(−1,4),(3,−4)を通る直線を求めなさい。", answers: ["y=-2x+2"] },
  ],
  "parallel-perpendicular-lines": [
    { prompt: "y=4x+1 に平行な直線の傾きを答えなさい。", answers: ["4"] },
    { prompt: "y=−2x+3 に垂直な直線の傾きを答えなさい。", answers: ["1/2"] },
    { prompt: "点(2,0)を通り y=x+5 に垂直な直線を求めなさい。", answers: ["y=-x+2"] },
  ],
  "circle-equations": [
    { prompt: "中心(2,−1)、半径3の円の方程式を書きなさい。", answers: ["(x-2)²+(y+1)²=9"] },
    { prompt: "(x+1)²+(y−4)²=25 の半径を答えなさい。", answers: ["5"] },
    { prompt: "x²+y²−6x+4y−3=0 の中心を求めなさい。", answers: ["(3,-2)"] },
  ],
  "circle-line-locus-region": [
    { prompt: "x²+y²=4 と y=0 の共有点をすべて書きなさい。", answers: ["(-2,0),(2,0)", "(2,0),(-2,0)"] },
    { prompt: "中心(0,0)、半径2の円の内部を不等式で表しなさい。", answers: ["x²+y²<4", "x²+y²≤4"] },
    { prompt: "点(x,y)が点(1,0)から距離2にあるときの軌跡を方程式で表しなさい。", answers: ["(x-1)²+y²=4"] },
  ],
  "rational-exponents": [
    { prompt: "8^(2/3) を計算しなさい。", answers: ["4"] },
    { prompt: "25^(−1/2) を計算しなさい。", answers: ["1/5"] },
    { prompt: "16^(3/4) を計算しなさい。", answers: ["8"] },
  ],
  "exponential-functions": [
    { prompt: "2^(−3) を計算しなさい。", answers: ["1/8"] },
    { prompt: "(1/2)^(−2) を計算しなさい。", answers: ["4"] },
    { prompt: "3^0+3^1+3^2 を計算しなさい。", answers: ["13"] },
  ],
  "exponential-equations": [
    { prompt: "2^x=16 を解きなさい。", answers: ["4", "x=4"] },
    { prompt: "9^x=27 を解きなさい。", answers: ["3/2", "x=3/2"] },
    { prompt: "(1/3)^x>9 を解きなさい。", answers: ["x<-2"] },
  ],
  "logarithm-laws": [
    { prompt: "log₂8 を求めなさい。", answers: ["3"] },
    { prompt: "log₃9+log₃3 を求めなさい。", answers: ["3"] },
    { prompt: "log₂32−log₂4 を求めなさい。", answers: ["3"] },
  ],
  "logarithmic-equations-common-log": [
    { prompt: "log₂x=5 を解きなさい。", answers: ["32", "x=32"] },
    { prompt: "log₃(x−1)=2 を解きなさい。", answers: ["10", "x=10"] },
    { prompt: "log₁₀10000 を求めなさい。", answers: ["4"] },
  ],
  radians: [
    { prompt: "60°を弧度法で表しなさい。", answers: ["π/3"] },
    { prompt: "3π/4 rad を度数法で表しなさい。", answers: ["135", "135°"] },
    { prompt: "−270°を弧度法で表しなさい。", answers: ["-3π/2"] },
  ],
  "trig-functions-identities": [
    { prompt: "sinθ=3/5, cosθ>0 のとき cosθ を求めなさい。", answers: ["4/5"] },
    { prompt: "sinθ=1/2, cosθ=√3/2 のとき tanθ を求めなさい。", answers: ["1/√3", "√3/3"] },
    { prompt: "cosθ=−5/13, π/2<θ<π のとき sinθ を求めなさい。", answers: ["12/13"] },
  ],
  "trig-graphs": [
    { prompt: "y=3sin2x の振幅を求めなさい。", answers: ["3"] },
    { prompt: "y=sin4x の周期を求めなさい。", answers: ["π/2"] },
    { prompt: "y=−2cos(x/3) の周期を求めなさい。", answers: ["6π"] },
  ],
  "addition-theorem": [
    { prompt: "sin75° を求めなさい。", answers: ["(√6+√2)/4"] },
    { prompt: "cos15° を求めなさい。", answers: ["(√6+√2)/4"] },
    { prompt: "sin15° を求めなさい。", answers: ["(√6-√2)/4"] },
  ],
  "double-angle-equations": [
    { prompt: "sinθ=3/5, cosθ=4/5 のとき sin2θ を求めなさい。", answers: ["24/25"] },
    { prompt: "cosθ=3/5 のとき cos2θ を求めなさい。", answers: ["-7/25"] },
    { prompt: "0≤x<2π で sinx=0 を解きなさい。", answers: ["0,π", "x=0,π"] },
  ],
  "derivative-definition": [
    { prompt: "f(x)=x² の x=1 における微分係数を求めなさい。", answers: ["2"] },
    { prompt: "f(x)=x² の x=−2 における微分係数を求めなさい。", answers: ["-4"] },
    { prompt: "f(x)=3x+1 の任意の点での微分係数を求めなさい。", answers: ["3"] },
  ],
  "derivative-polynomial": [
    { prompt: "f(x)=x³−2x の導関数を求めなさい。", answers: ["3x²-2"] },
    { prompt: "f(x)=4x⁴+3x²−5 の導関数を求めなさい。", answers: ["16x³+6x"] },
    { prompt: "f(x)=2x³−x²+x の f'(2) を求めなさい。", answers: ["21"] },
  ],
  "tangent-monotonicity": [
    { prompt: "y=x² の x=1 における接線を求めなさい。", answers: ["y=2x-1"] },
    { prompt: "f(x)=x²−4x の極小となるxを求めなさい。", answers: ["2", "x=2"] },
    { prompt: "f(x)=x³−3x の極大値を求めなさい。", answers: ["2"] },
  ],
  "indefinite-definite-integral": [
    { prompt: "∫2x dx を求めなさい。", answers: ["x²+C", "x²+c"] },
    { prompt: "∫₀²x dx を求めなさい。", answers: ["2"] },
    { prompt: "∫₁²3x² dx を求めなさい。", answers: ["7"] },
  ],
  "area-by-integral": [
    { prompt: "y=x, x=0, x=2, x軸で囲まれる面積を求めなさい。", answers: ["2"] },
    { prompt: "y=x², x=0, x=1, x軸で囲まれる面積を求めなさい。", answers: ["1/3"] },
    { prompt: "y=x と y=x² に囲まれる面積を求めなさい。", answers: ["1/6"] },
  ],
};

const lessonMap = new Map(
  math2Areas.flatMap((area) =>
    area.units.flatMap((unit) => unit.lessons.map((lesson) => [lesson.key, lesson] as const)),
  ),
);
const unitMap = new Map(math2Areas.flatMap((area) => area.units.map((unit) => [unit.key, unit] as const)));

const shuffled = <T>(values: readonly T[]) => {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
};

const makeExercise = (
  lessonKey: string,
  template: ExerciseTemplate,
  idSuffix: string,
  difficulty: GeneratedExercise["difficulty"],
): GeneratedExercise => ({
  id: `math2-${lessonKey}-${idSuffix}`,
  prompt: template.prompt,
  answers: template.answers,
  lessonKeys: [lessonKey],
  lessonTitles: [lessonMap.get(lessonKey)?.title ?? lessonKey],
  difficulty,
  hint: template.hint,
  answerMode: "math",
});

export const generateLessonExercises = (unitKey: string, lessonKey: string, count = 3) => {
  const unit = unitMap.get(unitKey);
  if (!unit?.lessons.some((lesson) => lesson.key === lessonKey)) return [];
  const pool = lessonExercisePools[lessonKey] ?? [];
  if (pool.length === 0) return [];
  const selected = shuffled(pool);
  return Array.from({ length: count }, (_, index) =>
    makeExercise(
      lessonKey,
      selected[index % selected.length],
      `${Date.now()}-${index}`,
      index === count - 1 ? "applied" : "basic",
    ),
  );
};

export const generateUnitExercises = (unitKey: string) => {
  const unit = unitMap.get(unitKey);
  if (!unit) return [];
  const candidates = shuffled(
    unit.lessons.flatMap((lesson) =>
      (lessonExercisePools[lesson.key] ?? []).map((template) => ({ lessonKey: lesson.key, template })),
    ),
  );
  if (candidates.length === 0) return [];

  return Array.from({ length: 16 }, (_, index) => {
    const candidate = candidates[index % candidates.length];
    const difficulty: GeneratedExercise["difficulty"] =
      index < 12 ? "basic" : index < 15 ? "applied" : "challenge";
    return makeExercise(
      candidate.lessonKey,
      candidate.template,
      `${Date.now()}-${index}`,
      difficulty,
    );
  });
};
