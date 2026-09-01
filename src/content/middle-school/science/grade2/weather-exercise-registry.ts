import type { ExerciseDifficulty } from "../../../math1/exercise-generators";
import type { GeneratedExercise } from "../../../math1/exercise-registry";

export const WEATHER_OBSERVATION_UNIT_KEY = "weather-observation";
export const WEATHER_CHANGES_UNIT_KEY = "weather-changes";
export const JAPAN_WEATHER_UNIT_KEY = "japan-weather";
export const WEATHER_DISASTERS_UNIT_KEY = "weather-benefits-disasters";

type QuestionSpec = { prompt: string; answers: string[]; hint: string };

const lessonTitles: Record<string, string> = {
  "weather-elements": "気象要素を区別する",
  "pressure-atmospheric-pressure": "圧力と大気圧を捉える",
  "weather-observation-recording": "気象観測の記録をそろえる",
  "weather-data-relationships": "気象データから要素間の関係を読む",
  "saturation-humidity": "飽和水蒸気量と湿度を関連付ける",
  "dew-point-condensation": "露点と凝結を捉える",
  "fog-cloud-formation": "霧や雲のでき方を捉える",
  "warm-cold-fronts": "暖気・寒気と前線の構造を捉える",
  "front-passage-weather": "前線通過に伴う天気の変化を読む",
  "air-mass-properties": "気団の性質を発生場所から捉える",
  "high-low-pressure-wind": "高気圧・低気圧と風の吹き方を読む",
  "winter-weather-japan": "冬の日本の天気を気団と海洋で説明する",
  "seasonal-weather-patterns": "季節ごとの日本の天気を気団で比較する",
  "westerlies-eastward-movement": "偏西風と天気の西から東への移動を捉える",
  "ocean-monsoon-typhoon": "海洋の影響と台風の進路を考える",
  "weather-benefits-water-resources": "気象がもたらす恵みを捉える",
  "weather-disaster-records-public-info": "気象災害を過去資料から分析する",
};

const q = (prompt: string, answers: string[], hint: string): QuestionSpec => ({
  prompt,
  answers,
  hint,
});

const questions: Record<string, QuestionSpec[]> = {
  "weather-elements": [
    q("空気中の水蒸気の度合いを表す気象要素は何ですか。", ["湿度"], "百分率で表します。"),
    q(
      "北西の風は、北西から吹く・北西へ吹くのどちらですか。",
      ["北西から吹く", "北西から", "吹いてくる"],
      "風向は風が来る方位です。",
    ),
    q("気圧の代表的な単位を答えてください。", ["hPa", "ヘクトパスカル"], "天気図でも使われます。"),
  ],
  "pressure-atmospheric-pressure": [
    q(
      "同じ力なら面積が小さいほど圧力は大きい・小さいのどちらですか。",
      ["大きい", "大きくなる"],
      "力÷面積です。",
    ),
    q("大気圧は空気に何があることと関係しますか。", ["重さ", "空気の重さ"], "大気も物質です。"),
    q("圧力は、力を何で割った量ですか。", ["面積", "力がはたらく面積"], "単位面積当たりの力です。"),
  ],
  "weather-observation-recording": [
    q(
      "時間変化を比べるとき、観測場所はそろえる・毎回変えるのどちらですか。",
      ["そろえる", "同じにする", "同じ"],
      "比較条件をそろえます。",
    ),
    q(
      "一定間隔で続けて行う観測を何といいますか。",
      ["継続観測", "継続的な観測"],
      "一回だけではありません。",
    ),
    q(
      "時刻による変化を比べるとき、観測間隔はできるだけ一定・不規則のどちらにしますか。",
      ["一定", "一定にする"],
      "比較しやすい記録にします。",
    ),
  ],
  "weather-data-relationships": [
    q(
      "複数の気象要素を比べるとき共通にするとよい軸は何ですか。",
      ["時間軸", "時間", "時刻"],
      "同じ時刻をそろえます。",
    ),
    q(
      "二つの量が同時に変化しただけで因果関係が確定する・しないのどちらですか。",
      ["しない", "確定しない", "言えない"],
      "仕組みも確認します。",
    ),
    q(
      "雨の前後で気温・湿度・気圧をまとめて比べるのは、一つの要素だけを見るより適切・不適切のどちらですか。",
      ["適切"],
      "複数の根拠を使います。",
    ),
  ],
  "saturation-humidity": [
    q(
      "一般に気温が高いほど飽和水蒸気量は大きい・小さいのどちらですか。",
      ["大きい", "大きくなる"],
      "暖かい空気ほど最大量が大きくなります。",
    ),
    q(
      "水蒸気量が同じまま気温が下がると、飽和前の湿度は上がる・下がるのどちらですか。",
      ["上がる", "高くなる"],
      "分母が小さくなります。",
    ),
    q("空気が含める水蒸気の最大量を何といいますか。", ["飽和水蒸気量"], "気温によって変わります。"),
  ],
  "dew-point-condensation": [
    q("空気を冷やして水蒸気が飽和する温度を何といいますか。", ["露点"], "温度の名称です。"),
    q("水蒸気が水滴へ変わることを何といいますか。", ["凝結"], "気体から液体への変化です。"),
    q(
      "露点よりさらに冷えると、余分な水蒸気は主に水滴になる・消えるのどちらですか。",
      ["水滴になる", "水滴"],
      "凝結します。",
    ),
  ],
  "fog-cloud-formation": [
    q(
      "地表付近に細かな水滴が浮かぶ現象を何といいますか。",
      ["霧"],
      "地面近くの雲のような現象です。",
    ),
    q(
      "空気が上昇すると一般に膨張して温度は上がる・下がるのどちらですか。",
      ["下がる", "低くなる"],
      "上空ほど気圧が低いことに注目します。",
    ),
    q(
      "上昇した空気が冷えて露点に達すると、水蒸気は何して雲粒になりますか。",
      ["凝結", "凝結する"],
      "状態変化の名称です。",
    ),
  ],
  "warm-cold-fronts": [
    q("暖気と寒気の境界付近を何といいますか。", ["前線"], "二つの気団の境界です。"),
    q("寒気が暖気の下へ入り込む前線を何といいますか。", ["寒冷前線"], "寒気側が進みます。"),
    q("暖気が寒気の上をゆるやかに進む前線を何といいますか。", ["温暖前線"], "暖気側が進みます。"),
  ],
  "front-passage-weather": [
    q(
      "寒冷前線通過後、代表的には気温は上がる・下がるのどちらですか。",
      ["下がる", "低下する"],
      "寒気に入れ替わります。",
    ),
    q(
      "前線通過を判断するとき、気温だけ・複数の気象要素のどちらを使いますか。",
      ["複数の気象要素", "複数", "複数の要素"],
      "気圧・風向・降水も確認します。",
    ),
    q(
      "前線通過の前後で変化し得るものを、気温・風向・気圧から一つ答えてください。",
      ["気温", "風向", "気圧"],
      "複数の要素が変わります。",
    ),
  ],
  "air-mass-properties": [
    q(
      "広い範囲で似た気温・湿度の性質をもつ空気の集まりを何といいますか。",
      ["気団"],
      "大きな空気の集まりです。",
    ),
    q("冬のシベリア気団は寒冷・温暖のどちらですか。", ["寒冷"], "寒い大陸上で発達します。"),
    q(
      "海洋上で発達する気団は、大陸上の気団より一般に湿りやすい・乾きやすいのどちらですか。",
      ["湿りやすい", "湿潤"],
      "水面から水蒸気を受けます。",
    ),
  ],
  "high-low-pressure-wind": [
    q("同じ気圧の地点を結んだ線を何といいますか。", ["等圧線"], "天気図で使います。"),
    q(
      "北半球の低気圧では地表風は中心へ向かう・離れるのどちらですか。",
      ["中心へ向かう", "内向き"],
      "低気圧へ集まります。",
    ),
    q(
      "等圧線の間隔が狭いほど、風は強い傾向・弱い傾向のどちらですか。",
      ["強い傾向", "強い"],
      "気圧差の変化が大きい場所です。",
    ),
  ],
  "winter-weather-japan": [
    q(
      "冬に日本へ影響する代表的な気団を何といいますか。",
      ["シベリア気団"],
      "寒冷・乾燥した大陸の気団です。",
    ),
    q(
      "冬、日本海側の雪には日本海から供給される何が関係しますか。",
      ["水蒸気", "水分"],
      "海上で空気が湿ります。",
    ),
    q(
      "冬の日本で代表的な季節風は北西・南東のどちらですか。",
      ["北西", "北西の季節風"],
      "大陸側から吹きます。",
    ),
  ],
  "seasonal-weather-patterns": [
    q(
      "夏に日本へ影響する代表的な暖かく湿った気団を何といいますか。",
      ["小笠原気団"],
      "太平洋高気圧と関係します。",
    ),
    q(
      "梅雨期に日本付近で停滞しやすいものを何といいますか。",
      ["梅雨前線", "前線"],
      "性質の異なる気団の境界です。",
    ),
    q(
      "日本の季節の天気は周辺の何の発達・衰退と関係しますか。",
      ["気団", "気団の勢力"],
      "季節で影響する空気が変わります。",
    ),
  ],
  "westerlies-eastward-movement": [
    q("日本上空で代表的に西から東へ吹く風を何といいますか。", ["偏西風"], "中緯度の上空の風です。"),
    q(
      "日本付近の温帯低気圧は代表的に西から東・東から西のどちらへ進みますか。",
      ["西から東", "西→東"],
      "複数日の天気図で追います。",
    ),
    q(
      "高低気圧の移動は毎回まったく同じ速さ・同じとは限らないのどちらですか。",
      ["同じとは限らない", "同じではない"],
      "時系列資料で確認します。",
    ),
  ],
  "ocean-monsoon-typhoon": [
    q(
      "日本の気象へ水蒸気を供給する重要な要因の一つは周囲の何ですか。",
      ["海洋", "海"],
      "日本は海に囲まれています。",
    ),
    q(
      "台風の進路は周囲の何や気団の勢力と関係しますか。",
      ["高気圧", "気圧配置"],
      "大規模な大気の状態を見ます。",
    ),
    q(
      "現在の台風進路には静的教材・最新の公的気象情報のどちらを優先しますか。",
      ["最新の公的気象情報", "公的気象情報", "気象庁", "最新情報"],
      "現在情報は更新されます。",
    ),
  ],
  "weather-benefits-water-resources": [
    q(
      "河川や地下水などの水資源を支える重要な気象現象は何ですか。",
      ["降水", "雨", "降雨"],
      "水循環の一部です。",
    ),
    q(
      "気象現象には災害だけでなく生活を支える何がありますか。",
      ["恵み", "恩恵"],
      "水資源などです。",
    ),
    q(
      "同じ雨でも量や時間的な集中によって、恵みだけでなく何につながることがありますか。",
      ["災害", "気象災害"],
      "影響には両面があります。",
    ),
  ],
  "weather-disaster-records-public-info": [
    q(
      "過去の気象災害は天気図や降水量など何を使って調べますか。",
      ["記録", "資料", "記録や資料", "気象資料"],
      "公式解説も記録・資料の活用を求めています。",
    ),
    q(
      "現在の警報や避難判断では何を優先しますか。",
      ["最新の公的情報", "公的情報", "気象庁", "自治体", "最新情報"],
      "静的教材はリアルタイム防災情報ではありません。",
    ),
    q(
      "過去事例の分析では、気象現象と降水・風・被害記録を関連付ける・別々に暗記するのどちらが適切ですか。",
      ["関連付ける", "関連付け"],
      "複数資料を科学的に結び付けます。",
    ),
  ],
};

const unitLessonKeys: Record<string, string[]> = {
  [WEATHER_OBSERVATION_UNIT_KEY]: [
    "weather-elements",
    "pressure-atmospheric-pressure",
    "weather-observation-recording",
    "weather-data-relationships",
  ],
  [WEATHER_CHANGES_UNIT_KEY]: [
    "saturation-humidity",
    "dew-point-condensation",
    "fog-cloud-formation",
    "warm-cold-fronts",
    "front-passage-weather",
  ],
  [JAPAN_WEATHER_UNIT_KEY]: [
    "air-mass-properties",
    "high-low-pressure-wind",
    "winter-weather-japan",
    "seasonal-weather-patterns",
    "westerlies-eastward-movement",
    "ocean-monsoon-typhoon",
  ],
  [WEATHER_DISASTERS_UNIT_KEY]: [
    "weather-benefits-water-resources",
    "weather-disaster-records-public-info",
  ],
};

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const make = (
  lessonKey: string,
  difficulty: ExerciseDifficulty,
  index: number,
): GeneratedExercise => {
  const candidates = questions[lessonKey] ?? [];
  const selected = candidates[index % Math.max(candidates.length, 1)] ?? {
    prompt: "この教材で学んだ内容を一つ答えてください。",
    answers: [lessonTitles[lessonKey] ?? lessonKey],
    hint: "教材のまとめを確認します。",
  };
  return {
    id: `middle-science2-weather-${lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
    lessonKeys: [lessonKey],
    lessonTitles: [lessonTitles[lessonKey] ?? lessonKey],
    difficulty,
    answerMode: "text",
    ...selected,
  };
};

export const generateMiddleScience2WeatherLessonExercises = (
  unitKey: string,
  lessonKey: string,
  count = 3,
) => {
  if (!unitLessonKeys[unitKey]?.includes(lessonKey)) return [];
  const difficulties: ExerciseDifficulty[] = ["basic", "applied", "challenge"];
  return Array.from({ length: count }, (_, index) =>
    make(lessonKey, difficulties[index % difficulties.length], index),
  );
};

export const generateMiddleScience2WeatherUnitExercises = (unitKey: string, count = 8) => {
  const lessonKeys = unitLessonKeys[unitKey];
  if (!lessonKeys?.length) return [];
  const difficulties: ExerciseDifficulty[] = [
    "basic",
    "basic",
    "basic",
    "applied",
    "applied",
    "applied",
    "challenge",
    "challenge",
  ];
  const startIndex = randomInt(0, lessonKeys.length - 1);
  return Array.from({ length: count }, (_, index) => {
    const lessonKey = lessonKeys[(startIndex + index) % lessonKeys.length];
    return make(lessonKey, difficulties[index % difficulties.length], index);
  });
};
