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
  "set-cardinality": "集合の要素の個数",
  "addition-multiplication-principles": "和の法則と積の法則",
  "factorial-permutations": "階乗と順列",
  combinations: "組合せ",
  "probability-definition": "確率の意味",
  "complement-addition": "余事象と確率の加法",
  "expected-value": "期待値",
  "independent-trials": "独立な試行の確率",
  "conditional-probability": "条件付き確率",
  "probability-multiplication": "確率の乗法定理",
  "angle-bisector": "角の二等分線と辺の比",
  "triangle-centers": "三角形の外心・内心・重心",
  "ceva-menelaus": "チェバの定理とメネラウスの定理",
  "inscribed-angle": "円周角の性質",
  "power-of-point": "方べきの定理",
  "tangent-circle": "接線と円の関係",
  "line-plane-relations": "直線と平面の位置関係",
  "polyhedra-euler": "多面体とオイラーの多面体定理",
  "divisibility-gcd": "約数・倍数と最大公約数",
  "euclidean-algorithm": "ユークリッドの互除法",
  "base-representation": "n進法と2進法",
  "coordinate-models": "座標で位置を表す",
  "game-strategy": "ゲームの必勝法を数学化する",
};

const unitLessonKeys: Record<string, string[]> = {
  "counting-principles": ["set-cardinality", "addition-multiplication-principles"],
  "permutations-combinations": ["factorial-permutations", "combinations"],
  "probability-basics": ["probability-definition", "complement-addition", "expected-value"],
  "independent-conditional": [
    "independent-trials",
    "conditional-probability",
    "probability-multiplication",
  ],
  "triangle-properties": ["angle-bisector", "triangle-centers", "ceva-menelaus"],
  "circle-properties": ["inscribed-angle", "power-of-point", "tangent-circle"],
  "spatial-geometry": ["line-plane-relations", "polyhedra-euler"],
  "integers-and-algorithms": ["divisibility-gcd", "euclidean-algorithm", "base-representation"],
  "coordinates-and-puzzles": ["coordinate-models", "game-strategy"],
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
  "set-cardinality": [
    m("n(A)=20, n(B)=14, n(A∩B)=5 のとき n(A∪B) を求めよ。", ["29"]),
    m("n(A)=31, n(B)=22, n(A∩B)=9 のとき n(A∪B) を求めよ。", ["44"]),
    m("40人中Aが24人、Bが19人、少なくとも一方が35人。両方に属する人数を求めよ。", ["8"], "applied"),
    m("50人中Aが32人、Bが28人、どちらにも属さない人が6人。両方に属する人数を求めよ。", ["16"], "challenge"),
  ],
  "addition-multiplication-principles": [
    m("上着4種類とズボン3種類から1つずつ選ぶ。組合せは何通りか。", ["12"]),
    m("東京行き3便、大阪行き5便のどちらか1便を選ぶ。選び方は何通りか。", ["8"]),
    m("英字2文字の後に数字1桁を並べる。英字はA〜D、数字は0〜4から選び、重複可。何通りか。", ["80"], "applied"),
    m("AからBへ3経路、BからCへ4経路、AからCへ直通2経路がある。AからCへの行き方は何通りか。", ["14"], "challenge"),
  ],
  "factorial-permutations": [
    m("₆P₂ を求めよ。", ["30"]),
    m("5人を1列に並べる方法は何通りか。", ["120"]),
    m("8人から会長・副会長・書記を1人ずつ選ぶ方法は何通りか。", ["336"], "applied"),
    m("7冊の異なる本から4冊を選んで横一列に並べる方法は何通りか。", ["840"], "challenge"),
  ],
  combinations: [
    m("₇C₂ を求めよ。", ["21"]),
    m("6人から3人を選ぶ方法は何通りか。", ["20"]),
    m("男子5人、女子4人から男子2人・女子1人を選ぶ方法は何通りか。", ["40"], "applied"),
    m("10人から4人を選ぶ。ただし特定の2人A,Bを同時には選ばない。何通りか。", ["182"], "challenge"),
  ],
  "probability-definition": [
    m("公平な6面さいころで3以下が出る確率を求めよ。", ["1/2", "3/6"]),
    m("1〜8から1つを等確率で選ぶ。素数を選ぶ確率を求めよ。", ["1/2", "4/8"]),
    m("2個の公平なコインを投げ、表がちょうど1枚出る確率を求めよ。", ["1/2", "2/4"], "applied"),
    m("2個の公平な6面さいころを投げ、出た目の和が7になる確率を求めよ。", ["1/6", "6/36"], "challenge"),
  ],
  "complement-addition": [
    m("公平な6面さいころで4以上が出ない確率を求めよ。", ["1/2", "3/6"]),
    m("P(A)=0.35 のとき P(A̅) を求めよ。", ["0.65", "65/100"]),
    m("公平なコインを3回投げ、少なくとも1回表が出る確率を求めよ。", ["7/8"], "applied"),
    m("P(A)=0.4, P(B)=0.3, AとBは排反。P(A∪B)を求めよ。", ["0.7", "7/10"], "challenge"),
  ],
  "expected-value": [
    m("1/2で100円、1/2で0円を得るくじの受取額の期待値を求めよ。", ["50"]),
    m("1/4で800点、3/4で0点のゲームの得点の期待値を求めよ。", ["200"]),
    m("1/2で300円、1/3で90円、1/6で0円を得る。期待値を求めよ。", ["180"], "applied"),
    m("公平な6面さいころの出た目をXとする。Xの期待値を求めよ。", ["7/2", "3.5"], "challenge"),
  ],
  "independent-trials": [
    m("公平なコインを2回投げ、2回とも表の確率を求めよ。", ["1/4"]),
    m("公平な6面さいころを2回投げ、2回とも6の確率を求めよ。", ["1/36"]),
    m("成功確率0.8の独立な試行を2回行い、2回とも成功する確率を求めよ。", ["0.64", "16/25"], "applied"),
    m("公平なコインを4回投げ、表・裏・表・表の順になる確率を求めよ。", ["1/16"], "challenge"),
  ],
  "conditional-probability": [
    m("1〜8から1つ選ぶ。偶数と分かったとき4の倍数である確率を求めよ。", ["1/2", "2/4"]),
    m("1〜12から1つ選ぶ。3の倍数と分かったとき偶数である確率を求めよ。", ["1/2", "2/4"]),
    m("P(A)=1/2, P(A∩B)=1/5 のとき P(B|A) を求めよ。", ["2/5", "0.4"], "applied"),
    m("P(A)=0.6, P(A∩B)=0.24 のとき P(B|A) を求めよ。", ["0.4", "2/5"], "challenge"),
  ],
  "probability-multiplication": [
    m("P(A)=1/2, P(B|A)=1/3 のとき P(A∩B) を求めよ。", ["1/6"]),
    m("赤4個、白1個から戻さず2個取る。2個とも赤の確率を求めよ。", ["3/5", "12/20"]),
    m("赤3個、青2個から戻さず2個取る。1個目が赤、2個目が青の確率を求めよ。", ["3/10", "6/20"], "applied"),
    m("赤2個、白3個から戻さず3個取る。赤、白、白の順になる確率を求めよ。", ["1/5", "6/30"], "challenge"),
  ],
  "angle-bisector": [
    m("AB:AC=2:3、BC=20。Aの角の二等分線がBCとDで交わる。BDを求めよ。", ["8"]),
    m("AB=5, AC=10, BC=18。Aの角の二等分線とBCの交点をDとする。DCを求めよ。", ["12"]),
    m("BD=6, DC=9, AB=8。ADが∠Aの二等分線のときACを求めよ。", ["12"], "applied"),
    m("BD:DC=3:5, AC=20。ADが∠Aの二等分線のときABを求めよ。", ["12"], "challenge"),
  ],
  "triangle-centers": [
    m("三角形の中線AD=15、重心GがAD上にある。AGを求めよ。", ["10"]),
    m("重心Gが中線ADを分け、GD=4。AGを求めよ。", ["8"]),
    t("3辺の垂直二等分線の交点を何というか。", ["外心"], "applied"),
    t("3つの角の二等分線の交点を何というか。", ["内心"], "challenge"),
  ],
  "ceva-menelaus": [
    m("共点条件で (BD/DC)=2, (CE/EA)=1/3, (AF/FB)=x。xを求めよ。", ["3/2", "1.5"]),
    m("共点条件で (BD/DC)=1/2, (CE/EA)=2, (AF/FB)=x。xを求めよ。", ["1"]),
    m("チェバの積のうち2つが3/4と2/5である。残りの比を求めよ。", ["10/3"], "applied"),
    t("三角形の3辺またはその延長上の3点が一直線上にある条件を扱う定理名を答えよ。", ["メネラウスの定理", "メネラウス"], "challenge"),
  ],
  "inscribed-angle": [
    m("中心角が100°の弧に対する円周角を求めよ。", ["50"]),
    m("直径ABに対する円周角∠APBを求めよ。", ["90"]),
    m("同じ弧ABを見る円周角∠APB=42°。∠AQBを求めよ。", ["42"], "applied"),
    m("円周角が65°のとき、同じ弧に対する中心角を求めよ。", ["130"], "challenge"),
  ],
  "power-of-point": [
    m("PA=2, PB=12, PC=3。PA·PB=PC·PDのときPDを求めよ。", ["8"]),
    m("PA=4, PB=9, PC=6。PDを求めよ。", ["6"]),
    m("PA=5, PB=8, PC=4。PDを求めよ。", ["10"], "applied"),
    m("PA=3, PB=x, PC=6, PD=5。xを求めよ。", ["10"], "challenge"),
  ],
  "tangent-circle": [
    m("同一点Pから円へ接線PA,PBを引く。PA=9のときPBを求めよ。", ["9"]),
    m("円の中心O、接点Tにおいて、半径OTと接線のなす角を求めよ。", ["90"]),
    m("同一点Qから接線QC,QDを引き、QC=2x+1, QD=11。xを求めよ。", ["5"], "applied"),
    m("同一点Pから接線PA,PBを引き、PA=3x-2, PB=x+8。xを求めよ。", ["5"], "challenge"),
  ],
  "line-plane-relations": [
    t("空間で、交わらず平行でもなく同一平面上にもない2直線の位置関係を何というか。", ["ねじれの位置", "ねじれ"], "basic"),
    t("立方体ABCD-EFGHで辺ABと辺EFの位置関係を答えよ。", ["平行", "平行である"], "basic"),
    t("立方体で、1つの頂点を共有し互いに異なる方向へ伸びる2辺の位置関係を答えよ。", ["交わる", "交差する"], "applied"),
    t("空間の2直線が同一平面上になく、交点も持たない。この2直線は平行か、ねじれの位置か。", ["ねじれの位置", "ねじれ"], "challenge"),
  ],
  "polyhedra-euler": [
    m("凸多面体でV=8,E=12。Fを求めよ。", ["6"]),
    m("凸多面体でV=4,E=6。Fを求めよ。", ["4"]),
    m("凸多面体でV=6,F=8。Eを求めよ。", ["12"], "applied"),
    m("凸多面体でE=15,F=7。Vを求めよ。", ["10"], "challenge"),
  ],
  "divisibility-gcd": [
    m("gcd(24,36)を求めよ。", ["12"]),
    m("lcm(12,18)を求めよ。", ["36"]),
    m("gcd(84,126)を求めよ。", ["42"], "applied"),
    m("gcd(72,120)とlcm(72,120)の積を求めよ。", ["8640"], "challenge"),
  ],
  "euclidean-algorithm": [
    m("gcd(128,48)を互除法で求めよ。", ["16"]),
    m("gcd(391,299)を互除法で求めよ。", ["23"]),
    m("gcd(252,198)を求めよ。", ["18"], "applied"),
    m("987を610で割った余りを求めよ。互除法の最初の1段階として答えよ。", ["377"], "challenge"),
  ],
  "base-representation": [
    m("1011₂を10進数で表せ。", ["11"]),
    m("11100₂を10進数で表せ。", ["28"]),
    m("13を2進数で表せ。", ["1101", "1101_2", "1101₂"], "applied"),
    m("45を2進数で表せ。", ["101101", "101101_2", "101101₂"], "challenge"),
  ],
  "coordinate-models": [
    t("点(2,3)を右に4、上に1移動した座標を(x,y)の形で答えよ。", ["(6,4)"]),
    t("点(-1,5)を左に3、下に2移動した座標を答えよ。", ["(-4,3)", "(−4,3)"]),
    t("点(4,-2)を右にa、上にb移動すると(9,5)になった。a,bを a,b の形で答えよ。", ["5,7", "(5,7)"], "applied"),
    t("空間の点(1,2,3)をx方向+2、y方向-1、z方向+4移動した座標を答えよ。", ["(3,1,7)"], "challenge"),
  ],
  "game-strategy": [
    m("石を1個か2個取り、最後を取った人が勝つゲームで石が5個。先手が最初に取るべき個数を求めよ。", ["2"]),
    m("同じゲームで石が7個。先手が最初に取るべき個数を求めよ。", ["1"]),
    t("同じゲームで石が9個。先手に必勝手はあるか。『ある』『ない』で答えよ。", ["ない"], "applied"),
    m("同じゲームで石が14個。先手が最初に取るべき個数を求めよ。", ["2"], "challenge"),
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
  id: `matha-${lessonKey}-${index}-${Math.random().toString(36).slice(2, 8)}`,
  prompt: spec.prompt,
  answers: spec.answers,
  lessonKeys: [lessonKey],
  lessonTitles: [lessonTitles[lessonKey] ?? lessonKey],
  difficulty: spec.difficulty,
  answerMode: spec.answerMode ?? "math",
  hint: spec.hint,
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
