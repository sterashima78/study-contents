export type ExtraExerciseDifficulty = "basic" | "applied" | "challenge";
export type ExtraExerciseAnswerMode = "math" | "text";

export type ExtraGeneratedExercise = {
  id: string;
  prompt: string;
  answers: string[];
  lessonKeys: string[];
  lessonTitles: string[];
  difficulty: ExtraExerciseDifficulty;
  answerMode: ExtraExerciseAnswerMode;
  hint?: string;
};

type Template = {
  prompt: string;
  answers: string[];
  hint?: string;
  answerMode?: ExtraExerciseAnswerMode;
  lessonKeys?: string[];
};

const lessonTitles: Record<string, string> = {
  "right-triangle-trig": "直角三角形の sin・cos・tan",
  "special-angle-trig": "30°・45°・60°の三角比",
  "obtuse-angle-trig": "鈍角の三角比",
  "tan-from-sin-cos": "tan θ = sin θ / cos θ",
  "pythagorean-trig": "sin² θ + cos² θ = 1",
  "trig-from-one-ratio": "1つの三角比から残りを求める",
  "sine-law": "正弦定理",
  "cosine-law": "余弦定理",
  "law-selection": "正弦定理と余弦定理の使い分け",
  "triangle-area": "三角比を使う三角形の面積",
  "solve-triangle": "三角形の辺と角を順に求める",
  "height-distance": "高さ・距離を三角比で測る",
  "basic-parabola": "y = ax² のグラフ",
  "vertex-form": "y = a(x − p)² + q のグラフ",
  "completing-square": "平方完成",
  "quadratic-extrema-all-real": "定義域が実数全体の最大・最小",
  "quadratic-extrema-interval": "定義域が区間の最大・最小",
  "quadratic-extrema-application": "二次関数の最大・最小の文章題",
  "quadratic-roots-graph": "二次方程式の解とx軸との交点",
  "quadratic-formula": "二次方程式の解の公式",
  discriminant: "判別式と実数解の個数",
  "quadratic-inequality-two-roots": "2つの実数解をもつ二次不等式",
  "quadratic-inequality-special-cases": "重解・実数解なしの場合の二次不等式",
  "quadratic-inequality-application": "二次不等式の文章題",
  "range-and-outliers": "範囲と外れた値の影響",
  "quartiles-boxplot": "四分位数と箱ひげ図",
  deviations: "偏差",
  variance: "分散",
  "standard-deviation": "標準偏差",
  "compare-spread": "分散・標準偏差で散らばりを比較する",
  "scatter-plot": "散布図と相関の向き",
  covariance: "共分散",
  "correlation-coefficient": "相関係数",
  "correlation-causation": "相関関係と因果関係",
  "null-hypothesis": "帰無仮説を置く",
  "random-fluctuation": "偶然の揺れと『起こりにくさ』",
  "test-decision": "仮説検定の判断を言葉で表す",
};

const unitLessonKeys: Record<string, string[]> = {
  "trigonometric-ratios": ["right-triangle-trig", "special-angle-trig", "obtuse-angle-trig"],
  "trigonometric-relations": ["tan-from-sin-cos", "pythagorean-trig", "trig-from-one-ratio"],
  "sine-cosine-laws": ["sine-law", "cosine-law", "law-selection"],
  "figure-measurement": ["triangle-area", "solve-triangle", "height-distance"],
  "quadratic-graphs": ["basic-parabola", "vertex-form", "completing-square"],
  "quadratic-extrema": [
    "quadratic-extrema-all-real",
    "quadratic-extrema-interval",
    "quadratic-extrema-application",
  ],
  "quadratic-equations-graphs": ["quadratic-roots-graph", "quadratic-formula", "discriminant"],
  "quadratic-inequalities": [
    "quadratic-inequality-two-roots",
    "quadratic-inequality-special-cases",
    "quadratic-inequality-application",
  ],
  "data-dispersion": ["range-and-outliers", "quartiles-boxplot", "deviations"],
  "variance-standard-deviation": ["variance", "standard-deviation", "compare-spread"],
  "scatter-correlation": ["scatter-plot", "covariance", "correlation-coefficient", "correlation-causation"],
  "hypothesis-testing": ["null-hypothesis", "random-fluctuation", "test-decision"],
};

const banks: Record<string, Template[]> = {
  "right-triangle-trig": [
    { prompt: "斜辺10、角θの向かい側6の直角三角形で sin θ を求めてください。", answers: ["3/5", "6/10"], hint: "sin=向かい側/斜辺です。" },
    { prompt: "斜辺13、角θのとなり側12の直角三角形で cos θ を求めてください。", answers: ["12/13"], hint: "cos=となり側/斜辺です。" },
    { prompt: "角θの向かい側8、となり側15の直角三角形で tan θ を求めてください。", answers: ["8/15"], hint: "tan=向かい側/となり側です。" },
  ],
  "special-angle-trig": [
    { prompt: "sin 30° を求めてください。", answers: ["1/2"] },
    { prompt: "cos 45° を求めてください。", answers: ["√2/2", "1/√2"] },
    { prompt: "tan 60° を求めてください。", answers: ["√3"] },
  ],
  "obtuse-angle-trig": [
    { prompt: "sin 150° を求めてください。", answers: ["1/2"] },
    { prompt: "cos 120° を求めてください。", answers: ["-1/2", "−1/2"] },
    { prompt: "tan 135° を求めてください。", answers: ["-1", "−1"] },
  ],
  "tan-from-sin-cos": [
    { prompt: "sin θ=3/5、cos θ=4/5 のとき tan θ を求めてください。", answers: ["3/4"] },
    { prompt: "sin θ=5/13、cos θ=12/13 のとき tan θ を求めてください。", answers: ["5/12"] },
    { prompt: "sin θ=−4/5、cos θ=3/5 のとき tan θ を求めてください。", answers: ["-4/3", "−4/3"] },
  ],
  "pythagorean-trig": [
    { prompt: "0°<θ<90°、sin θ=3/5 のとき cos θ を求めてください。", answers: ["4/5"] },
    { prompt: "0°<θ<90°、cos θ=8/17 のとき sin θ を求めてください。", answers: ["15/17"] },
    { prompt: "sin θ=5/13 のとき cos² θ を求めてください。", answers: ["144/169"] },
  ],
  "trig-from-one-ratio": [
    { prompt: "90°<θ<180°、sin θ=3/5 のとき cos θ を求めてください。", answers: ["-4/5", "−4/5"] },
    { prompt: "90°<θ<180°、cos θ=−5/13 のとき sin θ を求めてください。", answers: ["12/13"] },
    { prompt: "90°<θ<180°、sin θ=8/17 のとき tan θ を求めてください。", answers: ["-8/15", "−8/15"] },
  ],
  "sine-law": [
    { prompt: "A=30°、B=90°、a=4 の三角形で b を求めてください。", answers: ["8"] },
    { prompt: "A=30°、B=60°、a=5 の三角形で b を求めてください。", answers: ["5√3"] },
    { prompt: "A=45°、B=90°、a=6 の三角形で b を求めてください。", answers: ["6√2"] },
  ],
  "cosine-law": [
    { prompt: "b=3、c=4、A=90° の三角形で a を求めてください。", answers: ["5"] },
    { prompt: "b=5、c=5、A=60° の三角形で a を求めてください。", answers: ["5"] },
    { prompt: "b=4、c=6、A=60° の三角形で a² を求めてください。", answers: ["28"] },
  ],
  "law-selection": [
    { prompt: "A=30°、B=45°、a=5 から b を求めるとき、最初に使う定理を答えてください。", answers: ["正弦定理"], answerMode: "text" },
    { prompt: "a=5、b=7、C=60° から c を求めるとき、最初に使う定理を答えてください。", answers: ["余弦定理"], answerMode: "text" },
    { prompt: "3辺 a,b,c がすべて分かって角Aを求めるとき、最初に使う定理を答えてください。", answers: ["余弦定理"], answerMode: "text" },
  ],
  "triangle-area": [
    { prompt: "2辺が6,8、その間の角が30°の三角形の面積を求めてください。", answers: ["12"] },
    { prompt: "2辺が5,10、その間の角が90°の三角形の面積を求めてください。", answers: ["25"] },
    { prompt: "2辺が4,7、その間の角が60°の三角形の面積を求めてください。", answers: ["7√3"] },
  ],
  "solve-triangle": [
    { prompt: "A=30°、B=60° の三角形で C を求めてください。", answers: ["90", "90°"] },
    { prompt: "A=45°、B=45°、a=5 の三角形で b を求めてください。", answers: ["5"] },
    { prompt: "A=30°、B=90°、a=3 の三角形で b を求めてください。", answers: ["6"] },
  ],
  "height-distance": [
    { prompt: "塔までの水平距離が20m、仰角45°です。目の高さを無視すると塔の高さは何mですか。", answers: ["20", "20m"] },
    { prompt: "木までの水平距離が10m、仰角60°です。目の高さを無視すると木の高さは何mですか。", answers: ["10√3", "10√3m"] },
    { prompt: "高さ12mの建物の頂点への仰角が45°です。水平距離は何mですか。", answers: ["12", "12m"] },
  ],
  "basic-parabola": [
    { prompt: "y=2x² で x=3 のとき y を求めてください。", answers: ["18"] },
    { prompt: "y=−3x² で x=−2 のとき y を求めてください。", answers: ["-12", "−12"] },
    { prompt: "y=(1/2)x² で x=4 のとき y を求めてください。", answers: ["8"] },
  ],
  "vertex-form": [
    { prompt: "y=2(x−3)²−5 の頂点の x 座標を求めてください。", answers: ["3"] },
    { prompt: "y=−(x+4)²+2 の頂点の y 座標を求めてください。", answers: ["2"] },
    { prompt: "y=3(x−1)²+7 の軸を x=□ の形で答えてください。", answers: ["x=1", "1"] },
  ],
  "completing-square": [
    { prompt: "x²+6x+2 を平方完成してください。", answers: ["(x+3)²-7", "(x+3)^2-7"] },
    { prompt: "x²−8x+1 を平方完成してください。", answers: ["(x-4)²-15", "(x-4)^2-15"] },
    { prompt: "2x²+8x+1 を平方完成してください。", answers: ["2(x+2)²-7", "2(x+2)^2-7"] },
  ],
  "quadratic-extrema-all-real": [
    { prompt: "y=3(x−2)²−4 の最小値を求めてください。", answers: ["-4", "−4"] },
    { prompt: "y=−2(x+1)²+6 の最大値を求めてください。", answers: ["6"] },
    { prompt: "y=(x−5)²+3 が最小になる x を求めてください。", answers: ["5"] },
  ],
  "quadratic-extrema-interval": [
    { prompt: "y=x²、−2≤x≤3 の最大値を求めてください。", answers: ["9"] },
    { prompt: "y=(x−1)²−2、0≤x≤2 の最小値を求めてください。", answers: ["-2", "−2"] },
    { prompt: "y=−(x−2)²+5、0≤x≤3 の最小値を求めてください。", answers: ["1"] },
  ],
  "quadratic-extrema-application": [
    { prompt: "正の2数の和が10です。その積の最大値を求めてください。", answers: ["25"] },
    { prompt: "周の長さが24の長方形の面積の最大値を求めてください。", answers: ["36"] },
    { prompt: "0≤x≤8 で x(8−x) の最大値を求めてください。", answers: ["16"] },
  ],
  "quadratic-roots-graph": [
    { prompt: "y=x²−7x+12 と x軸の交点の x 座標を小さい順に書いてください。", answers: ["3,4", "3，4"] },
    { prompt: "y=x²−9 と x軸の交点の x 座標を小さい順に書いてください。", answers: ["-3,3", "−3,3"] },
    { prompt: "y=x²+5x+6 と x軸の交点の x 座標を小さい順に書いてください。", answers: ["-3,-2", "−3,−2"] },
  ],
  "quadratic-formula": [
    { prompt: "x²−2x−1=0 を解いてください。", answers: ["1±√2", "1+√2,1-√2", "1−√2,1+√2"] },
    { prompt: "x²−6x+1=0 を解いてください。", answers: ["3±2√2", "3+2√2,3-2√2", "3−2√2,3+2√2"] },
    { prompt: "2x²−4x−1=0 を解いてください。", answers: ["1±√6/2", "1+√6/2,1-√6/2", "1−√6/2,1+√6/2"] },
  ],
  discriminant: [
    { prompt: "x²−4x+3=0 の判別式 D を求めてください。", answers: ["4"] },
    { prompt: "x²+2x+5=0 の判別式 D を求めてください。", answers: ["-16", "−16"] },
    { prompt: "2x²−4x+2=0 の実数解の個数を求めてください。", answers: ["1", "1個"] },
  ],
  "quadratic-inequality-two-roots": [
    { prompt: "x²−5x+6<0 を解いてください。", answers: ["2<x<3"] },
    { prompt: "x²−x−6≥0 を解いてください。", answers: ["x≤-2またはx≥3", "x≤−2またはx≥3", "x≤-2,x≥3", "x≤−2,x≥3"] },
    { prompt: "−x²+5x−6>0 を解いてください。", answers: ["2<x<3"] },
  ],
  "quadratic-inequality-special-cases": [
    { prompt: "(x−2)²≥0 を満たす x の範囲を答えてください。", answers: ["すべての実数", "全実数"], answerMode: "text" },
    { prompt: "x²+1>0 を満たす x の範囲を答えてください。", answers: ["すべての実数", "全実数"], answerMode: "text" },
    { prompt: "−(x+1)²≤0 を満たす x の範囲を答えてください。", answers: ["すべての実数", "全実数"], answerMode: "text" },
  ],
  "quadratic-inequality-application": [
    { prompt: "0<x<10 で x(10−x)≥21 を解いてください。", answers: ["3≤x≤7"] },
    { prompt: "0<x<12 で x(12−x)>32 を解いてください。", answers: ["4<x<8"] },
    { prompt: "0≤x≤9 で x(9−x)≥20 を解いてください。", answers: ["4≤x≤5"] },
  ],
  "range-and-outliers": [
    { prompt: "データ 2,5,7,9,13 の範囲を求めてください。", answers: ["11"] },
    { prompt: "データ 10,10,12,15,18 の範囲を求めてください。", answers: ["8"] },
    { prompt: "データ −3,0,4,8 の範囲を求めてください。", answers: ["11"] },
  ],
  "quartiles-boxplot": [
    { prompt: "データ 1,3,5,7,9,11,13 の第1四分位数 Q1 を求めてください。", answers: ["3"] },
    { prompt: "データ 2,4,6,8,10,12,14 の第3四分位数 Q3 を求めてください。", answers: ["12"] },
    { prompt: "Q1=5、Q3=17 のとき四分位範囲を求めてください。", answers: ["12"] },
  ],
  deviations: [
    { prompt: "データ 2,4,6 の平均4に対する 2 の偏差を求めてください。", answers: ["-2", "−2"] },
    { prompt: "平均10のデータで値13の偏差を求めてください。", answers: ["3"] },
    { prompt: "平均7のデータで値2の偏差を求めてください。", answers: ["-5", "−5"] },
  ],
  variance: [
    { prompt: "偏差が −2,0,2 の3個のデータの分散を求めてください。", answers: ["8/3"] },
    { prompt: "偏差が −1,−1,1,1 のデータの分散を求めてください。", answers: ["1"] },
    { prompt: "偏差平方の和が36、データ数が6のとき分散を求めてください。", answers: ["6"] },
  ],
  "standard-deviation": [
    { prompt: "分散16のデータの標準偏差を求めてください。", answers: ["4"] },
    { prompt: "分散49/9のデータの標準偏差を求めてください。", answers: ["7/3"] },
    { prompt: "標準偏差が5のデータの分散を求めてください。", answers: ["25"] },
  ],
  "compare-spread": [
    { prompt: "同じ尺度で、標準偏差が4のAと9のBでは、散らばりが大きいのはどちらですか。", answers: ["B", "b"], answerMode: "text" },
    { prompt: "平均が同じで、分散が25のXと4のYでは、散らばりが小さいのはどちらですか。", answers: ["Y", "y"], answerMode: "text" },
    { prompt: "平均は中心、標準偏差は何を表す指標ですか。", answers: ["散らばり", "ばらつき"], answerMode: "text" },
  ],
  "scatter-plot": [
    { prompt: "xが増えるほどyも増える傾向を何の相関といいますか。", answers: ["正の相関", "正"], answerMode: "text" },
    { prompt: "xが増えるほどyが減る傾向を何の相関といいますか。", answers: ["負の相関", "負"], answerMode: "text" },
    { prompt: "散布図の1つの点は、同じ対象から得た何個の変量の組を表しますか。", answers: ["2", "2個", "2つ"], answerMode: "text" },
  ],
  covariance: [
    { prompt: "xの偏差が −1,0,1、yの偏差が −2,0,2 のとき共分散を求めてください。", answers: ["4/3"] },
    { prompt: "偏差の積の和が12、データ数が4のとき共分散を求めてください。", answers: ["3"] },
    { prompt: "xの偏差が −2,2、yの偏差が 3,−3 のとき共分散を求めてください。", answers: ["-6", "−6"] },
  ],
  "correlation-coefficient": [
    { prompt: "共分散6、2変量の標準偏差が2と3のとき相関係数 r を求めてください。", answers: ["1"] },
    { prompt: "共分散−4、標準偏差が2と4のとき相関係数 r を求めてください。", answers: ["-1/2", "−1/2", "-0.5", "−0.5"] },
    { prompt: "共分散3、標準偏差が2と3のとき相関係数 r を求めてください。", answers: ["1/2", "0.5"] },
  ],
  "correlation-causation": [
    { prompt: "強い相関があれば、一方が他方の原因だと必ず言えますか。", answers: ["いいえ", "言えない", "いえない"], answerMode: "text" },
    { prompt: "2変量の両方へ影響して見かけの相関を生む要因を何と考えますか。", answers: ["第三の要因", "第3の要因", "交絡要因"], answerMode: "text" },
    { prompt: "相関係数が表すのは因果関係そのものではなく、主に何の関係ですか。", answers: ["直線的な関係", "直線関係", "相関"], answerMode: "text" },
  ],
  "null-hypothesis": [
    { prompt: "新しい方法に効果があるか調べるとき、最初に置く『効果がない』側の仮説を何といいますか。", answers: ["帰無仮説"], answerMode: "text" },
    { prompt: "コインが公平か調べるときの帰無仮説として『表の確率は何分の何』と置きますか。", answers: ["1/2", "0.5"], answerMode: "text" },
    { prompt: "2群の平均差を調べるとき、典型的な帰無仮説は『平均に何がない』ですか。", answers: ["差", "差がない"], answerMode: "text" },
  ],
  "random-fluctuation": [
    { prompt: "公平なコイン100回で表52回と95回では、より極端なのはどちらですか。", answers: ["95", "95回", "表95回"], answerMode: "text" },
    { prompt: "同じ条件の標本でも結果が少しずつ変わることを何の揺れと考えますか。", answers: ["偶然の揺れ", "偶然", "標本の揺れ"], answerMode: "text" },
    { prompt: "帰無仮説のもとで結果が極端になるほど、その仮説を疑う材料は強くなりますか、弱くなりますか。", answers: ["強くなる", "強い"], answerMode: "text" },
  ],
  "test-decision": [
    { prompt: "帰無仮説のもとで十分起こりにくい結果なら、帰無仮説をどうしますか。", answers: ["棄却する", "棄却"], answerMode: "text" },
    { prompt: "結果が珍しいとまでは言えないとき、帰無仮説をどう表現しますか。", answers: ["棄却できない"], answerMode: "text" },
    { prompt: "『棄却できない』ことは帰無仮説が正しいと証明したことですか。", answers: ["いいえ", "違う", "ちがう"], answerMode: "text" },
  ],
};

const unitChallenges: Record<string, Template> = {
  "trigonometric-ratios": { prompt: "sin150°+cos120°+tan135° を求めてください。", answers: ["-1", "−1"], lessonKeys: ["special-angle-trig", "obtuse-angle-trig"] },
  "trigonometric-relations": { prompt: "90°<θ<180°、cosθ=−12/13 のとき tanθ を求めてください。", answers: ["-5/12", "−5/12"], lessonKeys: ["pythagorean-trig", "trig-from-one-ratio", "tan-from-sin-cos"] },
  "sine-cosine-laws": { prompt: "b=5、c=7、A=60° の三角形で a² を求めてください。", answers: ["39"], lessonKeys: ["cosine-law", "law-selection"] },
  "figure-measurement": { prompt: "2辺が8,10、その間の角60°の三角形の面積を求めてください。", answers: ["20√3"], lessonKeys: ["triangle-area", "solve-triangle"] },
  "quadratic-graphs": { prompt: "y=2x²−8x+3 を平方完成し、頂点の y 座標を求めてください。", answers: ["-5", "−5"], lessonKeys: ["completing-square", "vertex-form"] },
  "quadratic-extrema": { prompt: "0≤x≤10 で x(10−x) の最大値を求めてください。", answers: ["25"], lessonKeys: ["quadratic-extrema-interval", "quadratic-extrema-application"] },
  "quadratic-equations-graphs": { prompt: "2x²−4x+3=0 の判別式 D を求め、数値だけ答えてください。", answers: ["-8", "−8"], lessonKeys: ["quadratic-formula", "discriminant", "quadratic-roots-graph"] },
  "quadratic-inequalities": { prompt: "0<x<10 で x(10−x)>24 を解いてください。", answers: ["4<x<6"], lessonKeys: ["quadratic-inequality-two-roots", "quadratic-inequality-application"] },
  "data-dispersion": { prompt: "Q1=4、Q3=15、最小値1、最大値20のデータについて四分位範囲を求めてください。", answers: ["11"], lessonKeys: ["quartiles-boxplot", "range-and-outliers"] },
  "variance-standard-deviation": { prompt: "偏差平方の和が100、データ数4のとき標準偏差を求めてください。", answers: ["5"], lessonKeys: ["variance", "standard-deviation"] },
  "scatter-correlation": { prompt: "共分散−6、2変量の標準偏差が2と3のとき相関係数を求めてください。", answers: ["-1", "−1"], lessonKeys: ["covariance", "correlation-coefficient"] },
  "hypothesis-testing": { prompt: "結果が帰無仮説のもとで十分起こりにくいと判断されたときの結論を答えてください。", answers: ["帰無仮説を棄却する", "棄却する", "棄却"], answerMode: "text", lessonKeys: ["null-hypothesis", "random-fluctuation", "test-decision"] },
};

const shuffle = <T>(values: readonly T[]) => {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
};

const finalize = (
  template: Template,
  defaultLessonKeys: string[],
  difficulty: ExtraExerciseDifficulty,
  index: number,
): ExtraGeneratedExercise => {
  const lessonKeys = template.lessonKeys ?? defaultLessonKeys;
  return {
    id: `${difficulty}-${index}-${Math.random().toString(36).slice(2, 8)}`,
    prompt: template.prompt,
    answers: template.answers,
    hint: template.hint,
    answerMode: template.answerMode ?? "math",
    lessonKeys,
    lessonTitles: lessonKeys.map((key) => lessonTitles[key] ?? key),
    difficulty,
  };
};

export const generateAdditionalLessonExercises = (unitKey: string, lessonKey: string, count = 3) => {
  if (!(unitLessonKeys[unitKey] ?? []).includes(lessonKey)) return [];
  const bank = banks[lessonKey] ?? [];
  if (bank.length === 0) return [];
  const selected = shuffle(bank);
  return Array.from({ length: count }, (_, index) =>
    finalize(selected[index % selected.length], [lessonKey], "basic", index),
  );
};

export const generateAdditionalUnitExercises = (unitKey: string) => {
  const lessons = unitLessonKeys[unitKey] ?? [];
  if (lessons.length === 0) return [];

  const basic = Array.from({ length: 12 }, (_, index) => {
    const lessonKey = lessons[index % lessons.length];
    const bank = banks[lessonKey] ?? [];
    const template = bank[index % Math.max(bank.length, 1)];
    return template ? finalize(template, [lessonKey], "basic", index) : undefined;
  }).filter((item): item is ExtraGeneratedExercise => item !== undefined);

  const applied = lessons.slice(0, 3).map((lessonKey, index) => {
    const bank = banks[lessonKey] ?? [];
    const template = bank[Math.min(2, bank.length - 1)];
    return finalize(template, [lessonKey], "applied", index);
  });

  const challengeTemplate = unitChallenges[unitKey];
  const challenge = challengeTemplate
    ? [finalize(challengeTemplate, lessons, "challenge", 0)]
    : [];

  return [...basic, ...applied, ...challenge];
};
