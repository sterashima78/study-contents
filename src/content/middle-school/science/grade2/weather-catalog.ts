import type { MathArea, MathLesson } from "../../../math1/types";

type LessonSpec = {
  key: string;
  title: string;
  description: string;
  goals: [string, string];
  conceptTitle: string;
  body: string[];
  exampleTitle: string;
  exampleProblem: string;
  exampleSteps: Array<[string, string]>;
  practiceSteps: Array<{ prompt: string; answers: string[] }>;
  hint: string;
  summary: [string, string];
  formulas?: string[];
};

const lesson = (spec: LessonSpec): MathLesson => ({
  key: spec.key,
  title: spec.title,
  description: spec.description,
  goals: spec.goals,
  concepts: [
    {
      title: spec.conceptTitle,
      body: spec.body,
      ...(spec.formulas ? { formulas: spec.formulas } : {}),
    },
  ],
  example: {
    title: spec.exampleTitle,
    problem: spec.exampleProblem,
    steps: spec.exampleSteps.map(([expression, note]) => ({ expression, note })),
  },
  practice: {
    title: `練習: ${spec.title}`,
    problem: "用語・関係・資料の読み取りを確認します。",
    steps: spec.practiceSteps,
    hint: spec.hint,
  },
  summary: spec.summary,
});

const observationLessons: MathLesson[] = [
  lesson({
    key: "weather-elements",
    title: "気象要素を区別する",
    description: "気温、湿度、気圧、風向、風速など、天気を表す主な気象要素を整理します。",
    goals: ["主な気象要素を挙げられる。", "風向と風速の意味を正しく説明できる。"],
    conceptTitle: "天気を複数の量で記録する",
    body: [
      "天気の状態は、気温、湿度、気圧、風向、風速など複数の気象要素で表します。一つの量だけではなく、同じ時刻の複数の要素を記録すると変化の関係を調べられます。",
      "風向は風が吹いてくる方位、風速は空気が1秒間に進む距離で表します。",
    ],
    exampleTitle: "例題: 観測記録を分類する",
    exampleProblem: "記録『18 ℃、72 %、1008 hPa、北西、4 m/s』を気象要素へ対応させる。",
    exampleSteps: [
      ["18 ℃ = 気温", "温度の記録です。"],
      ["72 % = 湿度、1008 hPa = 気圧", "水蒸気の度合いと空気の圧力です。"],
      ["北西 = 風向、4 m/s = 風速", "風向は吹いてくる方位です。"],
    ],
    practiceSteps: [
      { prompt: "空気中に水蒸気が含まれている度合いを表す気象要素は何ですか。", answers: ["湿度"] },
      {
        prompt: "北西の風とは、北西から吹いてくる・北西へ吹いていくのどちらですか。",
        answers: ["北西から吹いてくる", "北西から", "吹いてくる"],
      },
    ],
    hint: "単位と意味を対応させます。",
    summary: [
      "主な気象要素には気温、湿度、気圧、風向、風速などがある。",
      "風向は風が吹いてくる方位を表す。",
    ],
  }),
  lesson({
    key: "pressure-atmospheric-pressure",
    title: "圧力と大気圧を捉える",
    description: "圧力が力の大きさと面積に関係することを理解し、大気圧を空気の重さと関連付けます。",
    goals: ["圧力を単位面積当たりの力として説明できる。", "大気圧を空気の重さと関連付けられる。"],
    conceptTitle: "同じ力でも面積が小さいほど圧力は大きい",
    body: [
      "圧力は、面を垂直に押す力をその面積で割った量です。同じ力なら、力が加わる面積が小さいほど圧力は大きくなります。",
      "大気には重さがあるため、地表付近の物体には大気圧が働きます。",
    ],
    formulas: ["圧力 = 面を垂直に押す力 ÷ 力がはたらく面積"],
    exampleTitle: "例題: 面積と圧力を比べる",
    exampleProblem: "同じ大きさの力を、面積が半分の面に加えた。圧力はどう変わるか。",
    exampleSteps: [
      ["力は同じ", "分子は変わりません。"],
      ["面積が1/2", "分母が半分になります。"],
      ["圧力は2倍", "同じ力なら面積が小さいほど大きくなります。"],
    ],
    practiceSteps: [
      {
        prompt: "同じ力なら面積が小さくなると圧力は大きくなる・小さくなるのどちらですか。",
        answers: ["大きくなる", "大きい"],
      },
      {
        prompt: "大気圧は、空気に何があることと関係していますか。",
        answers: ["重さ", "空気の重さ"],
      },
    ],
    hint: "圧力の式で分母の面積に注目します。",
    summary: ["圧力は力÷面積で表される。", "大気圧は空気の重さと関係する。"],
  }),
  lesson({
    key: "weather-observation-recording",
    title: "気象観測の記録をそろえる",
    description: "観測場所・時刻・間隔をそろえ、気象要素を継続的に記録する考え方を学びます。",
    goals: ["比較可能な気象観測の条件を説明できる。", "継続観測の記録から時間変化を読み取れる。"],
    conceptTitle: "比較できるよう条件をそろえて観測する",
    body: [
      "気象要素の変化を調べるには、観測場所、時刻、器具、観測間隔などを計画し、同じ方法で継続して記録します。",
      "公開教材では架空の観測表を使って記録方法と分析の考え方を学びます。",
    ],
    exampleTitle: "例題: 観測計画を比べる",
    exampleProblem:
      "気温と気圧の関係を比べるため、同じ場所で一定間隔に測る計画が適切な理由を説明する。",
    exampleSteps: [
      ["比較したいのは時間変化", "場所の違いは別の要因です。"],
      ["同じ場所・一定間隔", "条件をそろえます。"],
      ["継続記録を比較", "関係を読み取れます。"],
    ],
    practiceSteps: [
      {
        prompt: "時間変化を比べるとき、観測場所はできるだけ同じにする・毎回変えるのどちらですか。",
        answers: ["同じにする", "同じ", "そろえる"],
      },
      { prompt: "続けて観測することを何観測といいますか。", answers: ["継続観測", "継続的な観測"] },
    ],
    hint: "比較したい要因以外をそろえます。",
    summary: [
      "気象観測は場所・時刻・間隔などをそろえて記録する。",
      "継続データから時間変化を調べる。",
    ],
  }),
  lesson({
    key: "weather-data-relationships",
    title: "気象データから要素間の関係を読む",
    description: "気温・湿度・気圧などの時間変化を重ねて、天気との関係や変化の前後を読み取ります。",
    goals: [
      "複数の気象要素の変化を比較できる。",
      "相関と時間的な前後関係を区別して資料を解釈できる。",
    ],
    conceptTitle: "複数のグラフを同じ時間軸で比べる",
    body: [
      "同じ時間軸に気温、湿度、気圧、風向などを並べると、天気が変わる前後にどの要素が変化したかを読みやすくなります。",
      "同時に変化しただけで因果関係が確定するとは限りません。",
    ],
    exampleTitle: "例題: 天気の変化前後を読む",
    exampleProblem: "雨が始まる前に気圧が低下し、湿度が上昇した架空記録から何を読み取れるか。",
    exampleSteps: [
      ["雨の前に気圧低下", "時間的前後を確認します。"],
      ["湿度も上昇", "複数要素を比べます。"],
      ["天気と気象要素に関係", "仕組みと合わせて解釈します。"],
    ],
    practiceSteps: [
      {
        prompt: "複数の気象要素を比べるとき何を共通にしますか。",
        answers: ["時間軸", "時刻", "時間"],
      },
      {
        prompt: "同時に変化しただけで一方が必ず原因だと言えますか。",
        answers: ["言えない", "いえない"],
      },
    ],
    hint: "同じ時間軸で比較します。",
    summary: ["複数の気象要素を同じ時間軸で比較する。", "関係は仕組みと合わせて解釈する。"],
  }),
];

const changeLessons: MathLesson[] = [
  lesson({
    key: "saturation-humidity",
    title: "飽和水蒸気量と湿度を関連付ける",
    description: "気温による飽和水蒸気量の変化を湿度と結び付けます。",
    goals: [
      "飽和水蒸気量が気温で変わることを説明できる。",
      "気温低下で湿度が上がる理由を説明できる。",
    ],
    conceptTitle: "暖かい空気ほど多くの水蒸気を含める",
    body: [
      "空気が含める水蒸気の最大量を飽和水蒸気量といい、一般に気温が高いほど大きくなります。",
      "実際の水蒸気量が同じでも、気温が下がると湿度は高くなります。",
    ],
    formulas: ["湿度 = 実際の水蒸気量 ÷ 飽和水蒸気量 × 100"],
    exampleTitle: "例題: 気温低下と湿度",
    exampleProblem: "水蒸気量を変えず空気を冷やした。飽和前の湿度はどうなるか。",
    exampleSteps: [
      ["水蒸気量は同じ", "分子は同じ。"],
      ["飽和水蒸気量が減る", "分母が小さくなる。"],
      ["湿度は上がる", "凝結前の変化です。"],
    ],
    practiceSteps: [
      {
        prompt: "気温が高いほど飽和水蒸気量は大きい・小さいのどちらですか。",
        answers: ["大きい", "大きくなる"],
      },
      {
        prompt: "水蒸気量が同じで気温が下がると湿度はどうなりますか。",
        answers: ["上がる", "高くなる"],
      },
    ],
    hint: "飽和水蒸気量に注目します。",
    summary: ["飽和水蒸気量は気温で変わる。", "同じ水蒸気量なら気温低下で湿度が上がる。"],
  }),
  lesson({
    key: "dew-point-condensation",
    title: "露点と凝結を捉える",
    description: "露点と凝結を関連付けます。",
    goals: ["露点を説明できる。", "凝結を説明できる。"],
    conceptTitle: "露点を下回ると水蒸気が凝結する",
    body: [
      "空気を冷やして水蒸気が飽和する温度を露点といいます。",
      "さらに冷えると余分な水蒸気が水滴へ変わります。",
    ],
    exampleTitle: "例題: 冷たい容器の水滴",
    exampleProblem: "冷たい容器の外側に水滴ができた理由を説明する。",
    exampleSteps: [
      ["周囲の空気が冷える", "表面付近の温度低下。"],
      ["露点に達する", "飽和します。"],
      ["水蒸気が凝結", "水滴になります。"],
    ],
    practiceSteps: [
      { prompt: "水蒸気が飽和する温度を何といいますか。", answers: ["露点"] },
      { prompt: "水蒸気が水滴へ変わることを何といいますか。", answers: ["凝結"] },
    ],
    hint: "露点は温度、凝結は状態変化です。",
    summary: ["露点は飽和する温度。", "露点以下への冷却で凝結が起こる。"],
  }),
  lesson({
    key: "fog-cloud-formation",
    title: "霧や雲のでき方を捉える",
    description: "空気の冷却・上昇と霧や雲の発生を関連付けます。",
    goals: ["霧の発生を説明できる。", "雲の発生を上昇気流と関連付けられる。"],
    conceptTitle: "空気が冷えて凝結すると霧や雲ができる",
    body: [
      "地表付近の空気が冷えて露点に達すると霧ができます。",
      "空気が上昇すると膨張して冷え、露点に達すると雲粒が生じます。",
    ],
    exampleTitle: "例題: 上昇する空気",
    exampleProblem: "湿った空気が上昇して雲ができる流れを説明する。",
    exampleSteps: [
      ["気圧低下で膨張", "上空ほど気圧が低い。"],
      ["温度が下がる", "膨張で冷える。"],
      ["露点で凝結", "雲粒が生じる。"],
    ],
    practiceSteps: [
      { prompt: "地表付近の細かな水滴を何といいますか。", answers: ["霧"] },
      {
        prompt: "上昇する空気は一般に温度が上がる・下がるのどちらですか。",
        answers: ["下がる", "低くなる"],
      },
    ],
    hint: "上昇→膨張→冷却→凝結です。",
    summary: ["霧は地表付近の冷却・凝結でできる。", "雲は上昇する空気の冷却・凝結でできる。"],
  }),
  lesson({
    key: "warm-cold-fronts",
    title: "暖気・寒気と前線の構造を捉える",
    description: "寒冷前線と温暖前線を比較します。",
    goals: ["前線を説明できる。", "寒冷前線と温暖前線を区別できる。"],
    conceptTitle: "前線では暖気と寒気が接する",
    body: [
      "暖気と寒気の境界付近を前線といいます。",
      "寒冷前線では寒気が暖気の下へ入り、温暖前線では暖気が寒気の上を進みます。",
    ],
    exampleTitle: "例題: 前線を判断する",
    exampleProblem: "寒気が暖気の下へ入り込む前線を答える。",
    exampleSteps: [
      ["寒気が下へ入る", "密度の大きい寒気。"],
      ["暖気を押し上げる", "急な上昇。"],
      ["寒冷前線", "構造から判断。"],
    ],
    practiceSteps: [
      { prompt: "暖気と寒気の境界を何といいますか。", answers: ["前線"] },
      { prompt: "寒気が暖気の下へ入る前線は何ですか。", answers: ["寒冷前線"] },
    ],
    hint: "どちらの空気が進むか見ます。",
    summary: ["前線は暖気と寒気の境界。", "寒冷前線と温暖前線では空気の動きが異なる。"],
  }),
  lesson({
    key: "front-passage-weather",
    title: "前線通過に伴う天気の変化を読む",
    description: "観測記録から前線通過を読みます。",
    goals: ["通過前後の気象要素を比較できる。", "寒冷前線通過の代表的変化を説明できる。"],
    conceptTitle: "前線通過では複数の気象要素が変わる",
    body: [
      "前線通過では気温、湿度、気圧、風向、降水などが変化します。",
      "実際の天気は必ず同じ経過ではないため複数データで判断します。",
    ],
    exampleTitle: "例題: 寒冷前線を考える",
    exampleProblem: "強い雨の後に気温が下がり風向が変わった。何が考えられるか。",
    exampleSteps: [
      ["強い雨", "代表的変化。"],
      ["気温低下・風向変化", "寒気への交代。"],
      ["寒冷前線", "複数要素が根拠。"],
    ],
    practiceSteps: [
      { prompt: "寒冷前線通過後、気温は代表的にどうなりますか。", answers: ["下がる", "低下する"] },
      {
        prompt: "前線通過は一つ・複数の要素のどちらで判断しますか。",
        answers: ["複数", "複数の要素"],
      },
    ],
    hint: "通過前後を比べます。",
    summary: ["前線通過では複数要素が変化する。", "複数の観測結果で解釈する。"],
  }),
];

const japanLessons: MathLesson[] = [
  lesson({
    key: "air-mass-properties",
    title: "気団の性質を発生場所から捉える",
    description: "気団の性質を発生場所と関連付けます。",
    goals: ["気団を説明できる。", "発生場所から性質を考えられる。"],
    conceptTitle: "気団の性質は発生場所の影響を受ける",
    body: [
      "広い範囲で似た気温・湿度をもつ空気の集まりを気団といいます。",
      "大陸・海洋、高緯度・低緯度など発生場所で性質が異なります。",
    ],
    exampleTitle: "例題: 冬の大陸の気団",
    exampleProblem: "寒い大陸上で発達した気団の性質を考える。",
    exampleSteps: [
      ["寒い大陸", "発生場所。"],
      ["低温", "寒さの影響。"],
      ["乾燥しやすい", "大陸の影響。"],
    ],
    practiceSteps: [
      { prompt: "広い範囲で似た性質をもつ空気を何といいますか。", answers: ["気団"] },
      { prompt: "シベリア気団は寒冷・温暖のどちらですか。", answers: ["寒冷"] },
    ],
    hint: "発生場所を考えます。",
    summary: ["気団は広い範囲で似た性質の空気。", "性質は発生場所の影響を受ける。"],
  }),
  lesson({
    key: "high-low-pressure-wind",
    title: "高気圧・低気圧と風の吹き方を読む",
    description: "等圧線と高低気圧を読みます。",
    goals: ["高低気圧を見分けられる。", "北半球の代表的な風を説明できる。"],
    conceptTitle: "気圧配置と風には関係がある",
    body: [
      "同じ気圧を結ぶ線を等圧線といいます。",
      "北半球の地表付近では高気圧で時計回りに外向き、低気圧で反時計回りに内向きが代表的です。",
    ],
    exampleTitle: "例題: 低気圧の風",
    exampleProblem: "北半球の低気圧周辺の地表風を答える。",
    exampleSteps: [
      ["北半球", "日本の位置。"],
      ["反時計回り", "回転方向。"],
      ["中心へ", "内向き。"],
    ],
    practiceSteps: [
      { prompt: "同じ気圧を結んだ線は何ですか。", answers: ["等圧線"] },
      { prompt: "低気圧の地表風は中心へ・外へのどちらですか。", answers: ["中心へ", "内向き"] },
    ],
    hint: "低気圧は内向きです。",
    summary: ["等圧線で気圧配置を読む。", "北半球の低気圧周辺は反時計回りに内向き。"],
  }),
  lesson({
    key: "winter-weather-japan",
    title: "冬の日本の天気を気団と海洋で説明する",
    description: "冬の季節風と日本海側の雪を説明します。",
    goals: ["冬の季節風を説明できる。", "日本海側の雪を海洋・山地と関連付けられる。"],
    conceptTitle: "冬の季節風は大陸と海洋の影響を受ける",
    body: [
      "冬はシベリア気団と北西季節風の影響を受けます。",
      "空気は日本海で水蒸気を受け取り山地で上昇して雪雲をつくります。",
    ],
    exampleTitle: "例題: 日本海側の雪",
    exampleProblem: "冬の日本海側で雪が多い理由を説明する。",
    exampleSteps: [
      ["北西季節風", "大陸から来る。"],
      ["日本海で水蒸気", "海洋の影響。"],
      ["山地で上昇", "雪雲ができる。"],
    ],
    practiceSteps: [
      { prompt: "冬の代表的な気団は何ですか。", answers: ["シベリア気団"] },
      { prompt: "日本海から空気が受け取るものは何ですか。", answers: ["水蒸気"] },
    ],
    hint: "大陸→日本海→山地です。",
    summary: ["冬はシベリア気団と北西季節風。", "日本海の水蒸気が降雪に関わる。"],
  }),
  lesson({
    key: "seasonal-weather-patterns",
    title: "季節ごとの日本の天気を気団で比較する",
    description: "梅雨・夏などの天気を気団と結び付けます。",
    goals: ["季節による気団の変化を説明できる。", "梅雨や夏の特徴を説明できる。"],
    conceptTitle: "季節の天気は気団の勢力変化と関係する",
    body: [
      "日本周辺では季節によって影響の大きい気団が変化します。",
      "梅雨期には前線が停滞し、夏には小笠原気団の影響が強まります。",
    ],
    exampleTitle: "例題: 梅雨",
    exampleProblem: "初夏に前線が停滞し雨が続く理由を考える。",
    exampleSteps: [
      ["異なる気団", "境界に前線。"],
      ["勢力がつり合う", "移動しにくい。"],
      ["降水が続く", "梅雨の特徴。"],
    ],
    practiceSteps: [
      { prompt: "夏の代表的な気団は何ですか。", answers: ["小笠原気団"] },
      { prompt: "梅雨期に停滞しやすいものは何ですか。", answers: ["前線", "梅雨前線"] },
    ],
    hint: "季節と気団を結びます。",
    summary: ["季節の天気は気団の勢力変化と関係する。", "梅雨前線や小笠原気団を資料から読む。"],
  }),
  lesson({
    key: "westerlies-eastward-movement",
    title: "偏西風と天気の西から東への移動を捉える",
    description: "高低気圧の移動と偏西風を関連付けます。",
    goals: ["複数日の天気図から移動方向を読める。", "偏西風と天気変化を関連付けられる。"],
    conceptTitle: "日本上空では西から東への流れが卓越する",
    body: [
      "温帯低気圧や移動性高気圧は西から東へ進むことが多いです。",
      "この傾向は上空の偏西風と関連します。",
    ],
    exampleTitle: "例題: 3日分の天気図",
    exampleProblem: "低気圧が西→本州→東へ移動した。方向を答える。",
    exampleSteps: [
      ["位置を追う", "時系列。"],
      ["西から東", "方向。"],
      ["偏西風と関連", "上空の流れ。"],
    ],
    practiceSteps: [
      { prompt: "西から東へ吹く上空の風は何ですか。", answers: ["偏西風"] },
      { prompt: "低気圧は代表的に西から東・東から西のどちらへ進みますか。", answers: ["西から東"] },
    ],
    hint: "複数日の位置を追います。",
    summary: ["高低気圧は西から東へ進むことが多い。", "偏西風と関連する。"],
  }),
  lesson({
    key: "ocean-monsoon-typhoon",
    title: "海洋の影響と台風の進路を考える",
    description: "日本の気象への海洋の影響と台風を考えます。",
    goals: ["海洋の影響を説明できる。", "台風進路と気圧配置を関連付けられる。"],
    conceptTitle: "日本の気象には海洋の影響が大きい",
    body: [
      "日本は海に囲まれ、周辺海洋から水蒸気などの影響を受けます。",
      "台風の進路は周囲の高気圧などと関係します。現在の進路や安全判断にはこの静的教材を使わず、最新の公的情報を確認します。",
    ],
    exampleTitle: "例題: 海洋の影響",
    exampleProblem: "季節風が日本海を渡って水蒸気を受け取る意味を説明する。",
    exampleSteps: [
      ["海上を通過", "大気と海洋が接する。"],
      ["水蒸気を受け取る", "湿り気が変わる。"],
      ["気象へ影響", "降雪などにつながる。"],
    ],
    practiceSteps: [
      { prompt: "日本の気象に水蒸気を供給する重要なものは何ですか。", answers: ["海洋", "海"] },
      {
        prompt: "現在の台風進路は何を優先しますか。",
        answers: ["最新の公的気象情報", "気象庁", "最新情報"],
      },
    ],
    hint: "過去の仕組みと現在情報を区別します。",
    summary: ["日本の気象は海洋の影響を受ける。", "現在の台風判断には最新の公的情報を使う。"],
  }),
];

const disasterLessons: MathLesson[] = [
  lesson({
    key: "weather-benefits-water-resources",
    title: "気象がもたらす恵みを捉える",
    description: "降水などが生活を支える側面を学びます。",
    goals: ["気象の恵みを説明できる。", "降水を水資源と関連付けられる。"],
    conceptTitle: "気象には生活を支える側面がある",
    body: [
      "降水は河川や地下水などの水資源を支えます。",
      "同じ雨でも量や集中の仕方によって恵みと災害の両面があります。",
    ],
    exampleTitle: "例題: 降水の役割",
    exampleProblem: "降水量と河川流量の資料から何を読めるか。",
    exampleSteps: [
      ["降水量増加", "水の供給。"],
      ["河川流量増加", "水循環。"],
      ["水資源を支える", "恵み。"],
    ],
    practiceSteps: [
      { prompt: "水資源を支える気象現象は何ですか。", answers: ["降水", "雨"] },
      { prompt: "気象には災害だけでなく何がありますか。", answers: ["恵み", "恩恵"] },
    ],
    hint: "水循環と生活をつなげます。",
    summary: ["降水は水資源を支える。", "気象を恵みと災害の両面で捉える。"],
  }),
  lesson({
    key: "weather-disaster-records-public-info",
    title: "気象災害を過去資料から分析する",
    description: "過去の災害記録を気象の仕組みと関連付けます。",
    goals: ["過去資料を気象要素と関連付けられる。", "学習資料と現在の公的防災情報を区別できる。"],
    conceptTitle: "過去の記録や資料を用いて分析する",
    body: [
      "学習では過去の天気図、降水量、風速、被害記録などを比較します。",
      "このサイトはリアルタイム防災サービスではありません。現在の警報・避難は気象庁や自治体など最新の公的情報を確認してください。",
    ],
    exampleTitle: "例題: 過去資料を関連付ける",
    exampleProblem: "停滞前線と長時間の大雨、河川水位上昇の過去記録を関連付ける。",
    exampleSteps: [
      ["停滞前線", "気象現象。"],
      ["長時間の降水", "観測記録。"],
      ["河川水位上昇", "影響を関連付ける。"],
    ],
    practiceSteps: [
      { prompt: "過去の気象災害は何を用いて調べますか。", answers: ["記録", "資料", "記録や資料"] },
      {
        prompt: "現在の警報や避難判断では何を優先しますか。",
        answers: ["最新の公的情報", "気象庁", "自治体", "最新情報"],
      },
    ],
    hint: "過去の学習と現在の判断を分けます。",
    summary: [
      "気象災害は過去の記録や資料から学ぶ。",
      "現在の安全判断には最新の公的情報を優先する。",
    ],
  }),
];

export const middleScience2WeatherArea: MathArea = {
  key: "earth",
  title: "地球",
  description: "気象観測、水蒸気と雲・前線、日本の季節の天気、気象の恵みと災害を17技能で学びます。",
  units: [
    {
      key: "weather-observation",
      title: "気象観測",
      description: "気象要素、圧力・大気圧、継続観測、複数データの分析を4技能で学びます。",
      lessons: observationLessons,
    },
    {
      key: "weather-changes",
      title: "天気の変化",
      description: "飽和水蒸気量・露点、霧と雲、暖気・寒気と前線、前線通過を5技能で学びます。",
      lessons: changeLessons,
    },
    {
      key: "japan-weather",
      title: "日本の気象",
      description: "気団、気圧配置、季節の天気、偏西風、海洋と台風の関係を6技能で学びます。",
      lessons: japanLessons,
    },
    {
      key: "weather-benefits-disasters",
      title: "自然の恵みと気象災害",
      description: "気象の恵みと、過去の災害資料の科学的な読み取りを2技能で学びます。",
      lessons: disasterLessons,
    },
  ],
};
