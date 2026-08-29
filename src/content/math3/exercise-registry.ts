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
  "sequence-limits": "数列の収束と発散",
  "geometric-sequence-limits": "等比数列 rⁿ の極限",
  "infinite-series": "無限級数と無限等比級数",
  "rational-radical-functions": "分数関数と無理関数",
  "composite-inverse-functions": "合成関数と逆関数",
  "function-limits-continuity": "関数の極限と連続性",
  "product-quotient-rule": "積・商の微分法",
  "chain-rule": "合成関数の微分法",
  "trig-derivatives": "三角関数の導関数",
  "exponential-log-derivatives": "指数関数・対数関数の導関数",
  tangents: "接線の方程式",
  "monotonicity-concavity": "増減・極値・凹凸",
  motion: "速度と加速度",
  "indefinite-definite-integrals": "不定積分と定積分",
  substitution: "置換積分法",
  "integration-by-parts": "部分積分法",
  "standard-integrals": "いろいろな関数の積分",
  area: "曲線で囲まれた面積",
  volume: "回転体の体積",
  "curve-length": "曲線の長さ",
};

const unitLessonKeys: Record<string, string[]> = {
  "sequences-series": ["sequence-limits", "geometric-sequence-limits", "infinite-series"],
  "functions-limits": [
    "rational-radical-functions",
    "composite-inverse-functions",
    "function-limits-continuity",
  ],
  "derivative-rules": [
    "product-quotient-rule",
    "chain-rule",
    "trig-derivatives",
    "exponential-log-derivatives",
  ],
  "derivative-applications": ["tangents", "monotonicity-concavity", "motion"],
  "integration-techniques": [
    "indefinite-definite-integrals",
    "substitution",
    "integration-by-parts",
    "standard-integrals",
  ],
  "integral-applications": ["area", "volume", "curve-length"],
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
  "sequence-limits": [
    m("aₙ=4+2/n の n→∞ での極限を求めよ。", ["4"]),
    m("aₙ=7−5/n² の n→∞ での極限を求めよ。", ["7"]),
    t("aₙ=(−1)ⁿ は収束するか発散するか。", ["発散"], "applied"),
    t("aₙ=n²−3n の n→∞ での振る舞いを『正の無限大』『負の無限大』『有限値』から答えよ。", ["正の無限大"], "challenge"),
  ],
  "geometric-sequence-limits": [
    m("lim[n→∞](1/3)ⁿ を求めよ。", ["0"]),
    m("lim[n→∞](−2/5)ⁿ を求めよ。", ["0"]),
    t("r=1.2 の等比数列 rⁿ は有限値に収束するか。『収束する』『収束しない』で答えよ。", ["収束しない"]),
    t("lim[n→∞](−1)ⁿ は存在するか。『存在する』『存在しない』で答えよ。", ["存在しない"], "challenge"),
  ],
  "infinite-series": [
    m("1+1/2+1/4+… の和を求めよ。", ["2"]),
    m("6+2+2/3+… の和を求めよ。", ["9"]),
    m("初項5、公比−1/2の無限等比級数の和を求めよ。", ["10/3"] , "applied"),
    t("初項1、公比2の無限等比級数は収束するか。『収束』『発散』で答えよ。", ["発散"], "challenge"),
  ],
  "rational-radical-functions": [
    m("y=3/(x−4)+2 の縦の漸近線 x=a の a を求めよ。", ["4"]),
    m("y=−2/(x+1)−5 の横の漸近線 y=b の b を求めよ。", ["-5", "−5"]),
    t("y=√(x−3) の定義域を x≥a の形で答えよ。", ["x≥3", "x>=3"], "applied"),
    t("y=1/(x²−9) の定義域から除く2値を小さい順に『a,b』で答えよ。", ["-3,3", "−3,3"], "challenge"),
  ],
  "composite-inverse-functions": [
    m("f(x)=2x+3, g(x)=x−1 のとき (f∘g)(4) を求めよ。", ["9"]),
    m("f(x)=x², g(x)=x+2 のとき (f∘g)(1) を求めよ。", ["9"]),
    t("f(x)=3x−6 の逆関数を y=… の形で答えよ。", ["y=(x+6)/3", "y=x/3+2"], "applied"),
    m("f(x)=2x+1 のとき f⁻¹(11) を求めよ。", ["5"], "challenge"),
  ],
  "function-limits-continuity": [
    m("lim[x→2](x²−4)/(x−2) を求めよ。", ["4"]),
    m("lim[x→5](x²−25)/(x−5) を求めよ。", ["10"]),
    m("f(x)=x²+1 のとき lim[x→3]f(x) を求めよ。", ["10"], "applied"),
    t("lim[x→1]f(x)=2, f(1)=3 のとき f は x=1 で連続か。『連続』『不連続』で答えよ。", ["不連続"], "challenge"),
  ],
  "product-quotient-rule": [
    t("y=x(x+2) の導関数を答えよ。", ["2x+2"]),
    t("y=x²(x−1) の導関数を答えよ。", ["3x²-2x", "3x²−2x"]),
    t("y=(x+1)/x の導関数を答えよ。", ["-1/x²", "−1/x²"], "applied"),
    m("y=x²(x+3) の x=1 における微分係数を求めよ。", ["9"], "challenge"),
  ],
  "chain-rule": [
    t("y=(2x+1)² の導関数を答えよ。", ["4(2x+1)", "8x+4"]),
    t("y=(x²+1)³ の導関数を答えよ。", ["6x(x²+1)²"]),
    m("y=(3x−2)⁴ の x=1 における微分係数を求めよ。", ["12"], "applied"),
    t("y=√(2x+1) の導関数を答えよ。", ["1/√(2x+1)", "1/sqrt(2x+1)"], "challenge"),
  ],
  "trig-derivatives": [
    t("y=sin x の導関数を答えよ。", ["cosx", "cos x"]),
    t("y=cos x の導関数を答えよ。", ["-sinx", "−sinx", "-sin x", "−sin x"]),
    t("y=sin 4x の導関数を答えよ。", ["4cos4x", "4 cos 4x"], "applied"),
    t("y=tan 2x の導関数を答えよ。", ["2/cos²2x", "2/(cos²2x)"], "challenge"),
  ],
  "exponential-log-derivatives": [
    t("y=eˣ の導関数を答えよ。", ["eˣ", "e^x"]),
    t("y=log x の導関数を答えよ。", ["1/x"]),
    t("y=e^(3x) の導関数を答えよ。", ["3e^(3x)", "3e^3x"], "applied"),
    m("y=log x の x=2 における微分係数を求めよ。", ["1/2", "0.5"], "challenge"),
  ],
  tangents: [
    t("y=x² の x=2 における接線を y=… の形で答えよ。", ["y=4x-4", "y=4x−4"]),
    t("y=x³ の x=1 における接線を y=… の形で答えよ。", ["y=3x-2", "y=3x−2"]),
    m("y=x²+2x の x=1 における接線の傾きを求めよ。", ["4"], "applied"),
    t("y=1/x の x=1 における接線を y=… の形で答えよ。", ["y=-x+2", "y=−x+2"], "challenge"),
  ],
  "monotonicity-concavity": [
    m("f(x)=x²−6x の極小となるxを求めよ。", ["3"]),
    m("f(x)=x³−3x の極値候補となる正のxを求めよ。", ["1"]),
    t("ある区間でf'(x)>0ならfはその区間で『増加』『減少』のどちらか。", ["増加"]),
    m("f(x)=x³ の変曲点のx座標を求めよ。", ["0"], "challenge"),
  ],
  motion: [
    m("位置x(t)=t²+2t のとき t=3 の速度を求めよ。", ["8"]),
    m("位置x(t)=t³ のとき t=2 の加速度を求めよ。", ["12"]),
    t("位置x(t)から加速度を得るにはtで何回微分するか。", ["2", "2回"] , "applied"),
    m("x(t)=t³−6t²+9t のとき t=1 の速度を求めよ。", ["0"], "challenge"),
  ],
  "indefinite-definite-integrals": [
    m("∫[0→2] x dx を求めよ。", ["2"]),
    m("∫[1→2] 3x² dx を求めよ。", ["7"]),
    t("∫2x dx の不定積分を答えよ。", ["x²+C", "x^2+C"] , "applied"),
    m("∫[−1→1](x²+1)dx を求めよ。", ["8/3"], "challenge"),
  ],
  substitution: [
    t("∫2x(x²+1) dx の不定積分を答えよ。", ["(x²+1)²/2+C", "1/2(x²+1)²+C"]),
    t("∫3x²(x³+1) dx の不定積分を答えよ。", ["(x³+1)²/2+C", "1/2(x³+1)²+C"]),
    m("∫[0→1]2x(x²+1) dx を求めよ。", ["3/2", "1.5"], "applied"),
    t("∫cos(2x) dx の不定積分を答えよ。", ["1/2sin2x+C", "(sin2x)/2+C"], "challenge"),
  ],
  "integration-by-parts": [
    t("∫x eˣ dx の不定積分を答えよ。", ["xeˣ-eˣ+C", "xe^x-e^x+C"]),
    t("∫x cos x dx の不定積分を答えよ。", ["xsinx+cosx+C", "x sin x+cos x+C"]),
    t("部分積分で∫f g' dx = fg − ∫□ dx の□を答えよ。", ["f'g", "f'g"] , "applied"),
    m("∫[0→1]x dx を部分積分で計算しても得られる値を求めよ。", ["1/2", "0.5"], "challenge"),
  ],
  "standard-integrals": [
    t("∫cos x dx の不定積分を答えよ。", ["sinx+C", "sin x+C"]),
    t("∫eˣ dx の不定積分を答えよ。", ["eˣ+C", "e^x+C"]),
    t("∫1/x dx の不定積分を答えよ。", ["log|x|+C", "ln|x|+C"] , "applied"),
    m("∫[0→π/2] sin x dx を求めよ。", ["1"], "challenge"),
  ],
  area: [
    m("0≤x≤1で y=x と y=x² に囲まれる面積を求めよ。", ["1/6"]),
    m("0≤x≤2で y=2x とx軸に囲まれる面積を求めよ。", ["4"]),
    m("0≤x≤2で y=2x と y=x² に囲まれる面積を求めよ。", ["4/3"], "applied"),
    m("−1≤x≤1で y=1−x² とx軸に囲まれる面積を求めよ。", ["4/3"], "challenge"),
  ],
  volume: [
    t("y=x, 0≤x≤1 をx軸回転した体積を答えよ。", ["π/3", "pi/3"]),
    t("y=2, 0≤x≤3 をx軸回転した体積を答えよ。", ["12π", "12pi"]),
    t("y=x², 0≤x≤1 をx軸回転した体積を答えよ。", ["π/5", "pi/5"], "applied"),
    t("y=√x, 0≤x≤4 をx軸回転した体積を答えよ。", ["8π", "8pi"], "challenge"),
  ],
  "curve-length": [
    t("y=x, 0≤x≤1 の長さを答えよ。", ["√2", "sqrt2"]),
    t("y=2x, 0≤x≤2 の長さを答えよ。", ["2√5", "2sqrt5"]),
    t("y=3x, 0≤x≤1 の長さを答えよ。", ["√10", "sqrt10"], "applied"),
    t("y=−x, −2≤x≤2 の長さを答えよ。", ["4√2", "4sqrt2"], "challenge"),
  ],
};

const shuffle = <T>(values: readonly T[]) => {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
};

const toExercise = (lessonKey: string, spec: ExerciseSpec, index: number): GeneratedExercise => ({
  id: `math3-${lessonKey}-${index}-${Math.random().toString(36).slice(2, 8)}`,
  prompt: spec.prompt,
  answers: spec.answers,
  lessonKeys: [lessonKey],
  lessonTitles: [lessonTitles[lessonKey] ?? lessonKey],
  difficulty: spec.difficulty,
  answerMode: spec.answerMode ?? "math",
  hint: spec.hint,
});

export const generateLessonExercises = (_unitKey: string, lessonKey: string, count = 3) =>
  shuffle(exercisePools[lessonKey] ?? [])
    .slice(0, count)
    .map((spec, index) => toExercise(lessonKey, spec, index));

export const generateUnitExercises = (unitKey: string) => {
  const candidates = (unitLessonKeys[unitKey] ?? []).flatMap((lessonKey) =>
    (exercisePools[lessonKey] ?? []).map((spec) => ({ lessonKey, spec })),
  );

  const pick = (difficulty: Difficulty, count: number) => {
    const matching = shuffle(candidates.filter(({ spec }) => spec.difficulty === difficulty));
    if (matching.length === 0) return [];
    return Array.from({ length: count }, (_, index) => {
      const candidate = matching[index % matching.length];
      return toExercise(candidate.lessonKey, candidate.spec, index);
    });
  };

  return shuffle([
    ...pick("basic", 12),
    ...pick("applied", 3),
    ...pick("challenge", 1),
  ]);
};
