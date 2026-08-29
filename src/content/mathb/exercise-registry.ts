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
  "sequence-general-term": "数列と一般項",
  "arithmetic-sequence": "等差数列の一般項",
  "arithmetic-sum": "等差数列の和",
  "geometric-sequence": "等比数列の一般項",
  "geometric-sum": "等比数列の和",
  "sigma-notation": "Σ記号と和の分解",
  "sums-of-powers": "自然数と平方数の和",
  "difference-sequence": "階差数列から一般項を求める",
  "recurrence-basics": "漸化式から項を求める",
  "linear-recurrence": "一次の漸化式を等比型へ変形する",
  "induction-principle": "数学的帰納法の仕組み",
  "induction-applications": "数学的帰納法で整除性を示す",
  "random-variable-distribution": "確率変数と確率分布",
  "expectation-variance": "確率変数の平均・分散・標準偏差",
  "transformed-random-variable": "確率変数の変換と平均・分散",
  "binomial-distribution": "二項分布",
  "continuous-random-variable": "連続型確率変数と密度",
  "normal-distribution": "正規分布の形と性質",
  "normal-standardization": "正規分布の標準化",
  "binomial-normal-approximation": "二項分布の正規近似",
  "population-sample": "母集団・標本・無作為抽出",
  "sample-mean-distribution": "標本平均の分布",
  "confidence-interval": "母平均の区間推定",
  "hypothesis-testing": "仮説検定の考え方",
  "modeling-cycle": "問題を数学化する",
  "formulate-and-solve": "数学的な手法を選んで解く",
  "evaluate-model": "モデルを現実と照らして評価・改善する",
  "decision-making": "複数の条件を比べて意思決定する",
};

const unitLessonKeys: Record<string, string[]> = {
  "sequence-basics": [
    "sequence-general-term",
    "arithmetic-sequence",
    "arithmetic-sum",
    "geometric-sequence",
    "geometric-sum",
  ],
  "various-sequences": ["sigma-notation", "sums-of-powers", "difference-sequence"],
  "recurrence-relations": ["recurrence-basics", "linear-recurrence"],
  "mathematical-induction": ["induction-principle", "induction-applications"],
  "probability-distributions": [
    "random-variable-distribution",
    "expectation-variance",
    "transformed-random-variable",
    "binomial-distribution",
  ],
  "normal-distributions": [
    "continuous-random-variable",
    "normal-distribution",
    "normal-standardization",
    "binomial-normal-approximation",
  ],
  "sampling-inference": [
    "population-sample",
    "sample-mean-distribution",
    "confidence-interval",
    "hypothesis-testing",
  ],
  "modeling-process": ["modeling-cycle", "formulate-and-solve"],
  "social-problem-solving": ["evaluate-model", "decision-making"],
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
  "sequence-general-term": [
    m("2,5,8,11,… の第10項を求めよ。", ["29"]),
    m("aₙ=4n−3 のとき a₈ を求めよ。", ["29"]),
    m("7,12,17,22,… の一般項を答えよ。", ["5n+2", "a_n=5n+2"], "applied"),
    m("aₙ=3n+1 の数列で値が100になる項番号nを求めよ。", ["33"], "challenge"),
  ],
  "arithmetic-sequence": [
    m("初項4、公差6の等差数列の第9項を求めよ。", ["52"]),
    m("初項−3、公差4の第15項を求めよ。", ["53"]),
    m("第5項が18、公差3の等差数列の初項を求めよ。", ["6"], "applied"),
    m("第3項が7、第11項が31の等差数列の公差を求めよ。", ["3"], "challenge"),
  ],
  "arithmetic-sum": [
    m("1+2+…+20を求めよ。", ["210"]),
    m("初項3、末項33、項数11の等差数列の和を求めよ。", ["198"]),
    m("5,9,13,…,41の和を求めよ。", ["230"], "applied"),
    m("初項2、公差3の等差数列の初めの20項の和を求めよ。", ["610"], "challenge"),
  ],
  "geometric-sequence": [
    m("初項2、公比3の第5項を求めよ。", ["162"]),
    m("初項81、公比1/3の第4項を求めよ。", ["3"]),
    m("第2項が6、公比2の等比数列の第6項を求めよ。", ["96"], "applied"),
    m("初項5、第4項135の正の公比rを求めよ。", ["3"], "challenge"),
  ],
  "geometric-sum": [
    m("1+2+4+8+16を求めよ。", ["31"]),
    m("3+9+27+81を求めよ。", ["120"]),
    m("初項2、公比2の初めの8項の和を求めよ。", ["510"], "applied"),
    m("4+2+1+1/2+1/4を求めよ。", ["31/4", "7.75"], "challenge"),
  ],
  "sigma-notation": [
    m("Σ(k=1→5) k を求めよ。", ["15"]),
    m("Σ(k=1→4) 2k を求めよ。", ["20"]),
    m("Σ(k=1→6)(k+2)を求めよ。", ["33"], "applied"),
    m("Σ(k=1→5)(3k−1)を求めよ。", ["40"], "challenge"),
  ],
  "sums-of-powers": [
    m("Σ(k=1→10)kを求めよ。", ["55"]),
    m("Σ(k=1→3)k²を求めよ。", ["14"]),
    m("Σ(k=1→5)(k²+k)を求めよ。", ["70"], "applied"),
    m("Σ(k=1→10)(2k²−k)を求めよ。", ["715"], "challenge"),
  ],
  "difference-sequence": [
    m("a₁=2, aₙ₊₁−aₙ=3 のとき a₅を求めよ。", ["14"]),
    m("a₁=1, aₙ₊₁−aₙ=2n のとき a₄を求めよ。", ["13"]),
    m("a₁=4, aₙ₊₁−aₙ=2n+1 のとき a₅を求めよ。", ["28"], "applied"),
    m("a₁=3, aₙ₊₁−aₙ=3n のとき一般項aₙを答えよ。", ["3+3*n*(n-1)/2", "3+3n(n-1)/2"], "challenge"),
  ],
  "recurrence-basics": [
    m("a₁=1, aₙ₊₁=aₙ+4 のとき a₄を求めよ。", ["13"]),
    m("a₁=2, aₙ₊₁=2aₙ のとき a₅を求めよ。", ["32"]),
    m("a₁=3, aₙ₊₁=2aₙ+1 のとき a₄を求めよ。", ["31"], "applied"),
    m("a₁=10, aₙ₊₁=aₙ−n のとき a₆を求めよ。", ["-5", "−5"], "challenge"),
  ],
  "linear-recurrence": [
    m("aₙ₊₁=2aₙ+4 で α=2α+4 を満たすαを求めよ。", ["-4", "−4"]),
    m("aₙ₊₁=3aₙ−6 で α=3α−6 を満たすαを求めよ。", ["3"]),
    m("a₁=5, aₙ₊₁=2aₙ−3 のとき一般項を答えよ。", ["2*2^(n-1)+3", "2^n+3"], "applied"),
    m("a₁=1, aₙ₊₁=4aₙ+6 のとき aₙを答えよ。", ["3*4^(n-1)-2", "3·4^(n−1)−2"], "challenge"),
  ],
  "induction-principle": [
    t("数学的帰納法で最初に確認する代表的な値を答えよ。", ["n=1", "1"]),
    m("1+3+5+…+(2n−1)=n² の帰納法で、n=k+1のとき追加する項を答えよ。", ["2k+1"]),
    m("1+…+k=k(k+1)/2 と仮定したとき、k+1を足した結果を因数分解した形で答えよ。", ["(k+1)(k+2)/2"], "applied"),
    t("n=kで成立すると仮定しn=k+1を示す段階を何というか。", ["帰納法のステップ", "帰納段階", "帰納法の仮定を用いる段階"], "challenge"),
  ],
  "induction-applications": [
    m("5^(k+1)−1=5(5^k−1)+□ の□を求めよ。", ["4"]),
    m("3^(k+1)−1=3(3^k−1)+□ の□を求めよ。", ["2"]),
    t("7^n−1が6の倍数であることを帰納法で示すとき、n=1で成立するか。『成立する』で答えよ。", ["成立する"], "applied"),
    m("2^(k+1)+1 を 2(2^k+1)+c と表すときcを求めよ。", ["-1", "−1"], "challenge"),
  ],
  "random-variable-distribution": [
    m("Xが0を0.2、1を0.5、2を0.3の確率でとる。P(X≥1)を求めよ。", ["0.8", "4/5"]),
    m("Xが1を1/4、2を1/2、3を1/4でとる。確率の総和を求めよ。", ["1"]),
    m("公平なコイン2枚で表の枚数X。P(X=1)を求めよ。", ["1/2"], "applied"),
    m("公平なさいころ2個の出目の和をXとする。P(X=7)を求めよ。", ["1/6"], "challenge"),
  ],
  "expectation-variance": [
    m("Xが0,2を各1/2でとる。E(X)を求めよ。", ["1"]),
    m("Xが1,3を各1/2でとる。V(X)を求めよ。", ["1"]),
    m("Xが0を1/4、2を3/4でとる。E(X)を求めよ。", ["3/2", "1.5"], "applied"),
    m("Xが−1,1を各1/2でとる。標準偏差を求めよ。", ["1"], "challenge"),
  ],
  "transformed-random-variable": [
    m("E(X)=4のときE(3X+2)を求めよ。", ["14"]),
    m("V(X)=5のときV(2X−7)を求めよ。", ["20"]),
    m("E(X)=10,V(X)=9,Y=−2X+5。E(Y)を求めよ。", ["-15", "−15"], "applied"),
    m("E(X)=3,V(X)=4,Y=5X−1。V(Y)を求めよ。", ["100"], "challenge"),
  ],
  "binomial-distribution": [
    m("X~B(10,0.3)の平均を求めよ。", ["3"]),
    m("X~B(20,0.5)の分散を求めよ。", ["5"]),
    m("公平なコインを3回投げ、表がちょうど2回の確率を求めよ。", ["3/8"], "applied"),
    m("成功確率0.2の試行を5回行い、成功が0回の確率を求めよ。", ["0.32768", "0.8^5"], "challenge"),
  ],
  "continuous-random-variable": [
    m("0≤x≤5で一定の密度1/5。P(1≤X≤3)を求めよ。", ["2/5", "0.4"]),
    m("0≤x≤10で一定の密度1/10。P(X≤4)を求めよ。", ["2/5", "0.4"]),
    t("連続型確率変数で1点X=aをとる確率は通常いくつか。", ["0", "0です"], "applied"),
    m("0≤x≤8で一定の密度1/8。P(2≤X≤7)を求めよ。", ["5/8"], "challenge"),
  ],
  "normal-distribution": [
    m("X~N(20,4²)の平均を求めよ。", ["20"]),
    m("X~N(50,9²)の分散を求めよ。", ["81"]),
    m("X~N(100,15²)の標準偏差を求めよ。", ["15"], "applied"),
    t("正規分布は平均を軸に左右対称か。『はい』で答えよ。", ["はい"], "challenge"),
  ],
  "normal-standardization": [
    m("X~N(50,10²)でx=70のz値を求めよ。", ["2"]),
    m("X~N(100,20²)でx=90のz値を求めよ。", ["-0.5", "−0.5"]),
    m("X~N(30,5²)でz=1.2に対応するxを求めよ。", ["36"], "applied"),
    m("X~N(80,8²)でz=−1.5に対応するxを求めよ。", ["68"], "challenge"),
  ],
  "binomial-normal-approximation": [
    m("B(100,0.5)を近似する正規分布の平均を求めよ。", ["50"]),
    m("B(100,0.5)の分散を求めよ。", ["25"]),
    m("B(200,0.3)を近似する正規分布の分散を求めよ。", ["42"], "applied"),
    m("B(400,0.25)の標準偏差を求めよ。", ["√75", "5√3"], "challenge"),
  ],
  "population-sample": [
    t("調べたい対象全体を何というか。", ["母集団"]),
    t("母集団から実際に取り出して調べる一部を何というか。", ["標本"]),
    t("抽出の偏りを避ける基本的方法を答えよ。", ["無作為抽出", "ランダム抽出"], "applied"),
    t("標本から計算される平均のような量を一般に何というか。", ["統計量"], "challenge"),
  ],
  "sample-mean-distribution": [
    m("母平均40、母標準偏差12、n=36。標本平均の平均を求めよ。", ["40"]),
    m("母標準偏差15、n=25。標本平均の標準偏差を求めよ。", ["3"]),
    m("母標準偏差20、n=100。標準誤差を求めよ。", ["2"], "applied"),
    m("標本平均の標準偏差を半分にするには標本サイズを何倍にすればよいか。", ["4"], "challenge"),
  ],
  "confidence-interval": [
    m("x̄=100,σ=10,n=100。95%信頼区間の誤差幅を求めよ。", ["1.96"]),
    m("x̄=50,σ=5,n=25。95%信頼区間の下限を求めよ。", ["48.04"]),
    m("x̄=80,σ=12,n=144。95%信頼区間の上限を求めよ。", ["81.96"], "applied"),
    m("σが同じときnを4倍にすると95%信頼区間の誤差幅は何倍になるか。", ["1/2", "0.5"], "challenge"),
  ],
  "hypothesis-testing": [
    t("有意水準5%、p=0.03。帰無仮説を『棄却する』『棄却しない』で答えよ。", ["棄却する"]),
    t("有意水準5%、p=0.20。帰無仮説をどうするか答えよ。", ["棄却しない"]),
    t("『帰無仮説を棄却できない』は帰無仮説が正しいと証明した意味か。『はい』『いいえ』で答えよ。", ["いいえ"], "applied"),
    t("検定で『差がない』など、まず正しいと仮定する仮説を何というか。", ["帰無仮説"], "challenge"),
  ],
  "modeling-cycle": [
    m("来場者500人、1人平均1.2本、予備10%。必要本数を求めよ。", ["660"]),
    m("生徒900人に1枚ずつ配布し、予備5%。必要枚数を求めよ。", ["945"]),
    t("数理モデルで現実を簡略化するとき、明示すべき前提を何というか。", ["仮定", "前提"], "applied"),
    t("現実の問題を変数・式・図表へ置き換えることを何というか。", ["数学化", "モデル化"], "challenge"),
  ],
  "formulate-and-solve": [
    m("A=1000+300x, B=1800+100x。料金が等しくなるxを求めよ。", ["4"]),
    m("C=500+200x, D=1100+100x。料金が等しくなるxを求めよ。", ["6"]),
    m("A=1200+250x, B=2200+50x。x=7では安い方をA/Bで答えよ。", ["B", "b"], "applied"),
    t("車両台数の計算結果が3.2台になった。現実の制約から通常は切り上げが必要か。『はい』で答えよ。", ["はい"], "challenge"),
  ],
  "evaluate-model": [
    m("予測100、実測120。実測−予測の誤差を求めよ。", ["20"]),
    m("予測80、実測100。相対誤差|実測−予測|/実測を求めよ。", ["0.2", "1/5"]),
    t("予測と実測のずれが大きいとき、モデルの仮定を見直す必要があるか。『はい』で答えよ。", ["はい"], "applied"),
    m("予測450、実測500。相対誤差を百分率で答えよ。", ["10%", "10"], "challenge"),
  ],
  "decision-making": [
    m("Aは必ず1000円。Bは80%で800円、20%で1500円。Bの期待費用を求めよ。", ["940"]),
    m("Pは必ず1200円。Qは90%で1000円、10%で3000円。Qの期待費用を求めよ。", ["1200"]),
    t("期待値が同じでも、高額になる確率などのリスクを比較する必要があるか。『はい』で答えよ。", ["はい"], "applied"),
    t("数学的な結果だけで価値判断が自動的に一意に決まるか。『はい』『いいえ』で答えよ。", ["いいえ"], "challenge"),
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
  id: `mathb-${lessonKey}-${index}-${Math.random().toString(36).slice(2, 8)}`,
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
