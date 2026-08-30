import { toPortableMathText } from "../../lib/math-display";
import type { GeneratedExercise } from "../math1/exercise-registry";

type Difficulty = GeneratedExercise["difficulty"];
type AnswerMode = GeneratedExercise["answerMode"];
type ExerciseSpec = {
  prompt: string;
  answers: string[];
  difficulty: Difficulty;
  answerMode?: AnswerMode;
  hint?: string;
};

const lessonTitles: Record<string, string> = {
  "vector-components": "ベクトルと成分表示",
  "vector-operations": "ベクトルの和・差・実数倍",
  "inner-product": "ベクトルの内積",
  "position-vectors": "位置ベクトルと内分点",
  "vector-equations": "直線のベクトル方程式",
  "spatial-vectors": "空間座標と空間ベクトル",
  "parabola-conics": "放物線の標準形",
  "ellipse-hyperbola": "楕円と双曲線の標準形",
  "parametric-polar": "媒介変数表示と極座標",
  "complex-geometry": "複素数平面と図形",
  "polar-demoivre": "複素数の極形式とド・モアブルの定理",
  "representation-choice": "目的に応じた数学的表現",
  "discrete-graphs": "離散グラフでつながりを表す",
  matrices: "行列でデータと変換を表す",
};

const unitLessonKeys: Record<string, string[]> = {
  "vector-basics": ["vector-components", "vector-operations", "inner-product"],
  "vector-geometry": ["position-vectors", "vector-equations", "spatial-vectors"],
  "plane-curves": ["parabola-conics", "ellipse-hyperbola", "parametric-polar"],
  "complex-plane": ["complex-geometry", "polar-demoivre"],
  "representation-tools": ["representation-choice", "discrete-graphs", "matrices"],
};

const m = (
  prompt: string,
  answers: string[],
  difficulty: Difficulty = "basic",
  hint?: string,
): ExerciseSpec => ({ prompt, answers, difficulty, answerMode: "math", hint });

const t = (
  prompt: string,
  answers: string[],
  difficulty: Difficulty = "basic",
  hint?: string,
): ExerciseSpec => ({ prompt, answers, difficulty, answerMode: "text", hint });

const exercisePools: Record<string, ExerciseSpec[]> = {
  "vector-components": [
    m("A(1,3), B(5,−2) のとき AB⃗ のx成分を求めよ。", ["4"]),
    m("a⃗=(6,8) の大きさを求めよ。", ["10"], "applied"),
    m("P(−2,4), Q(4,−4) のとき |PQ⃗| を求めよ。", ["10"], "challenge"),
  ],
  "vector-operations": [
    m("a⃗=(2,3), b⃗=(−1,4) のとき a⃗+b⃗ のx成分を求めよ。", ["1"]),
    m("a⃗=(1,−2), b⃗=(3,1) のとき 2a⃗+b⃗ のy成分を求めよ。", ["-3", "−3"], "applied"),
    m("a⃗=(4,−1), b⃗=(2,5) のとき 3a⃗−2b⃗ のx成分を求めよ。", ["8"], "challenge"),
  ],
  "inner-product": [
    m("a⃗=(2,1), b⃗=(3,−2) の内積を求めよ。", ["4"]),
    m("a⃗=(x,2), b⃗=(1,−3) が垂直のとき x を求めよ。", ["6"], "applied"),
    m("|a⃗|=2, |b⃗|=3, なす角60°のとき a⃗·b⃗ を求めよ。", ["3"], "challenge"),
  ],
  "position-vectors": [
    m("A(0,0), B(6,3) を1:2に内分する点Pのx座標を求めよ。", ["2"]),
    m("A(−2,1), B(4,7) の中点のy座標を求めよ。", ["4"], "applied"),
    m("A(0,0), B(6,0), C(0,9) の三角形の重心のy座標を求めよ。", ["3"], "challenge"),
  ],
  "vector-equations": [
    m("p⃗=(1,2)+t(3,−1) で t=2 の点Pのx座標を求めよ。", ["7"]),
    m("点A(2,−1)を通り方向ベクトル(1,4)の直線で t=−1 の点のy座標を求めよ。", ["-5", "−5"], "applied"),
    m("p⃗=(−3,1)+t(2,5) が点(1,y)を通るとき y を求めよ。", ["11"], "challenge"),
  ],
  "spatial-vectors": [
    m("a⃗=(1,2,2) の大きさを求めよ。", ["3"]),
    m("a⃗=(1,−1,2), b⃗=(2,3,1) の内積を求めよ。", ["1"], "applied"),
    m("A(1,0,−1), B(4,4,1) の距離を求めよ。", ["√29", "sqrt29"], "challenge"),
  ],
  "parabola-conics": [
    m("y²=20x の焦点のx座標を求めよ。", ["5"]),
    m("焦点(2,0)、準線x=−2の放物線 y²=4px の p を求めよ。", ["2"], "applied"),
    m("y²=−12x の準線を x=k とするとき k を求めよ。", ["3"], "challenge"),
  ],
  "ellipse-hyperbola": [
    m("x²/25+y²/16=1 の焦点距離 c を求めよ。", ["3"]),
    m("x²/16−y²/9=1 の焦点距離 c を求めよ。", ["5"], "applied"),
    m("楕円 x²/36+y²/20=1 の焦点のx座標の絶対値を求めよ。", ["4"], "challenge"),
  ],
  "parametric-polar": [
    m("r=3, θ=0° の点のx座標を求めよ。", ["3"]),
    m("点(0,5)の極座標で r を求めよ。", ["5"], "applied"),
    m("r=6, θ=60° の点のy座標を求めよ。", ["3√3", "3sqrt3"], "challenge"),
  ],
  "complex-geometry": [
    m("z=3+4i の |z| を求めよ。", ["5"]),
    m("z=−8+6i の |z| を求めよ。", ["10"], "applied"),
    m("複素数平面で点zが(5,−12)に対応するとき |z| を求めよ。", ["13"], "challenge"),
  ],
  "polar-demoivre": [
    m("z=2(cos30°+i sin30°) の絶対値を求めよ。", ["2"]),
    m("z=cos20°+i sin20° の z³ の偏角を度で求めよ。", ["60", "60°"], "applied"),
    m("z=2(cos45°+i sin45°) の z⁴ の絶対値を求めよ。", ["16"], "challenge"),
  ],
  "representation-choice": [
    t("時間に沿った数量の変化を見るのに適したグラフ名を答えよ。", ["折れ線グラフ", "折れ線"]),
    t("対象どうしのつながりを頂点と辺で表す表現を答えよ。", ["離散グラフ", "グラフ"], "applied"),
    t("複数の数量を行と列に整理して計算対象にする表現を答えよ。", ["行列"], "challenge"),
  ],
  "discrete-graphs": [
    m("辺が6本ある無向グラフの次数の総和を求めよ。", ["12"]),
    m("全頂点の次数の総和が20の無向グラフの辺数を求めよ。", ["10"], "applied"),
    m("次数が3,3,2,2,2,2の無向グラフの辺数を求めよ。", ["7"], "challenge"),
  ],
  matrices: [
    m("A=[[1,2],[3,4]], B=[[2,1],[0,5]] の A+B の右下成分を求めよ。", ["9"]),
    m("A=[[2,−1],[4,3]] の 3A の左下成分を求めよ。", ["12"], "applied"),
    m("A=[[1,2],[−3,4]], B=[[5,−1],[2,0]] の 2A−B の左上成分を求めよ。", ["-3", "−3"], "challenge"),
  ],
};

const shuffle = <T>(items: T[]) => {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
};

const toExercise = (lessonKey: string, spec: ExerciseSpec, index: number): GeneratedExercise => ({
  id: `mathc-${lessonKey}-${index}-${Math.random().toString(36).slice(2, 8)}`,
  prompt: toPortableMathText(spec.prompt),
  answers: spec.answers,
  lessonKeys: [lessonKey],
  lessonTitles: [lessonTitles[lessonKey] ?? lessonKey],
  difficulty: spec.difficulty,
  answerMode: spec.answerMode ?? "math",
  hint: spec.hint ? toPortableMathText(spec.hint) : spec.hint,
});

export const generateLessonExercises = (_unitKey: string, lessonKey: string, count = 3) => {
  const pool = exercisePools[lessonKey] ?? [];
  return shuffle(pool)
    .slice(0, count)
    .map((spec, index) => toExercise(lessonKey, spec, index));
};

const selectForDifficulty = (
  lessonKeys: string[],
  difficulty: Difficulty,
  count: number,
): GeneratedExercise[] => {
  const candidates = lessonKeys.flatMap((lessonKey) =>
    (exercisePools[lessonKey] ?? [])
      .filter((spec) => spec.difficulty === difficulty)
      .map((spec, index) => toExercise(lessonKey, spec, index)),
  );
  if (candidates.length === 0) return [];

  const shuffled = shuffle(candidates);
  const selected: GeneratedExercise[] = [];
  for (let index = 0; index < count; index += 1) {
    const exercise = shuffled[index % shuffled.length];
    if (!exercise) break;
    selected.push({ ...exercise, id: `${exercise.id}-${index}` });
  }
  return selected;
};

export const generateUnitExercises = (unitKey: string) => {
  const lessonKeys = unitLessonKeys[unitKey] ?? [];
  return [
    ...selectForDifficulty(lessonKeys, "basic", 12),
    ...selectForDifficulty(lessonKeys, "applied", 3),
    ...selectForDifficulty(lessonKeys, "challenge", 1),
  ];
};
