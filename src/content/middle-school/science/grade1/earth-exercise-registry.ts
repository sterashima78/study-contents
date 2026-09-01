import type { ExerciseDifficulty } from "../../../math1/exercise-generators";
import type { GeneratedExercise } from "../../../math1/exercise-registry";

export const EARTH_UNIT_KEY = "earth-formation-change";

const lessonTitles: Record<string, string> = {
  "terrain-strata-rock-observation": "地形・地層・岩石を観察して記録する",
  "erosion-transport-deposition": "侵食・運搬・堆積を結び付ける",
  "strata-formation": "地層のでき方と重なりを捉える",
  "sedimentary-rocks": "堆積岩を構成物から見分ける",
  "strata-overlap-spread": "地層の重なりと広がりを比較する",
  "fossils-environment-age": "化石から過去の環境と年代を推定する",
  "faults-folds": "断層と褶曲を大地の変動と結び付ける",
  "volcano-shape-magma-viscosity": "マグマの粘性と火山の形を関連付ける",
  "volcanic-ejecta-minerals": "火山噴出物と造岩鉱物を観察する",
  "igneous-rock-texture-cooling": "火成岩の組織を冷え方と結び付ける",
  "earthquake-waves": "初期微動と主要動を地震波で捉える",
  "initial-tremor-distance": "初期微動継続時間と震源距離を関連付ける",
  "magnitude-intensity": "マグニチュードと震度を区別する",
  "plates-earthquake-land-change": "プレートの動きと地震・土地の変化を結び付ける",
  "earth-benefits-disasters": "大地の恵みと災害を仕組みから考える",
};

const lessonKeys = Object.keys(lessonTitles);
const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const base = (lessonKey: string, difficulty: ExerciseDifficulty, index: number) => ({
  id: `middle-science1-earth-${lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
  lessonKeys: [lessonKey],
  lessonTitles: [lessonTitles[lessonKey] ?? lessonKey],
  difficulty,
  answerMode: "text" as const,
});

const make = (
  lessonKey: string,
  difficulty: ExerciseDifficulty,
  index: number,
): GeneratedExercise => {
  const common = base(lessonKey, difficulty, index);
  switch (lessonKey) {
    case "terrain-strata-rock-observation":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt:
              "『粒が細かい』と『静かな水中で堆積したと考えられる』のうち、観察事実はどちらですか。",
            answers: ["粒が細かい", "粒が細かい方"],
            hint: "見たまま記録できる内容を選びます。",
          }
        : {
            ...common,
            prompt: "地層の観察で、見えた事実からでき方を推定する作業を何といいますか。",
            answers: ["考察"],
            hint: "観察結果をもとに理由を考える段階です。",
          };
    case "erosion-transport-deposition": {
      const items = [
        ["流れる水が土地を削る働き", "侵食"],
        ["流れる水が土砂を運ぶ働き", "運搬"],
        ["運ばれた土砂が積もる働き", "堆積"],
      ] as const;
      const [prompt, answer] = items[index % items.length];
      return {
        ...common,
        prompt: `${prompt}を何といいますか。`,
        answers: [answer],
        hint: "削る・運ぶ・積もるを区別します。",
      };
    }
    case "strata-formation":
      return {
        ...common,
        prompt: "大きく変形していない地層では、一般に古い層は上と下のどちらにありますか。",
        answers: ["下", "下側"],
        hint: "堆積する順序を考えます。",
      };
    case "sedimentary-rocks": {
      const items = [
        ["れきが固まってできた堆積岩", "れき岩"],
        ["砂が固まってできた堆積岩", "砂岩"],
        ["泥が固まってできた堆積岩", "泥岩"],
      ] as const;
      const [prompt, answer] = items[index % items.length];
      return {
        ...common,
        prompt: `${prompt}を答えてください。`,
        answers: [answer],
        hint: "材料名と岩石名を対応させます。",
      };
    }
    case "strata-overlap-spread":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt:
              "離れた地点の地層を対応付けるとき、広い範囲に見られる特徴的な何層が目印になりますか。",
            answers: ["火山灰層", "火山灰"],
            hint: "短時間に広く堆積することがある層です。",
          }
        : {
            ...common,
            prompt: "地層を縦方向に重なり順で表した図を何といいますか。",
            answers: ["柱状図"],
            hint: "複数地点の比較に使います。",
          };
    case "fossils-environment-age":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt:
              "アンモナイトなど、地層のできた年代を推定する手掛かりになる化石を何といいますか。",
            answers: ["示準化石"],
            hint: "年代を示す役割です。",
          }
        : {
            ...common,
            prompt: "過去の環境を推定する手掛かりになる化石を何といいますか。",
            answers: ["示相化石"],
            hint: "環境を示す役割です。",
          };
    case "faults-folds":
      return difficulty === "basic"
        ? {
            ...common,
            prompt: "地層が割れてずれた構造を何といいますか。",
            answers: ["断層"],
            hint: "ずれを伴います。",
          }
        : {
            ...common,
            prompt: "地層が波打つように曲がった構造を何といいますか。",
            answers: ["褶曲", "しゅう曲", "しゅうきょく"],
            hint: "曲がりを表す構造です。",
          };
    case "volcano-shape-magma-viscosity":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt:
              "広くなだらかな火山をつくりやすいマグマは、粘性が大きい・小さいのどちらですか。",
            answers: ["小さい", "小さい方"],
            hint: "流れやすいマグマです。",
          }
        : {
            ...common,
            prompt: "マグマの流れにくさの程度を表す性質を何といいますか。",
            answers: ["粘性"],
            hint: "火山の形や噴火の様子と関係します。",
          };
    case "volcanic-ejecta-minerals":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "岩石をつくる鉱物をまとめて何といいますか。",
            answers: ["造岩鉱物"],
            hint: "火山灰や火成岩の観察で扱います。",
          }
        : {
            ...common,
            prompt: "細かな粒として放出される代表的な火山噴出物を答えてください。",
            answers: ["火山灰"],
            hint: "空中へ広がる細かな噴出物です。",
          };
    case "igneous-rock-texture-cooling":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "地下深くでゆっくり冷えてできる深成岩に代表的な組織を何といいますか。",
            answers: ["等粒状組織"],
            hint: "比較的大きな結晶が組み合わさります。",
          }
        : {
            ...common,
            prompt: "地表付近で比較的急に冷えた火山岩に代表的な組織を何といいますか。",
            answers: ["斑状組織"],
            hint: "大きな結晶と細かな部分が混じります。",
          };
    case "earthquake-waves":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "S波が到着した後に始まる大きな揺れを何といいますか。",
            answers: ["主要動"],
            hint: "初期微動の後の揺れです。",
          }
        : {
            ...common,
            prompt: "地震で先に到着し、初期微動を起こす波を何波といいますか。",
            answers: ["P波", "p波"],
            hint: "S波より速く伝わります。",
          };
    case "initial-tremor-distance": {
      const short = randomInt(2, 6);
      const long = short + randomInt(4, 10);
      return {
        ...common,
        prompt: `同じ地震で地点Aの初期微動継続時間が${short}秒、地点Bが${long}秒だった。震源から遠い可能性が高いのはA・Bのどちらですか。`,
        answers: ["B", "b", "地点B", "地点b"],
        hint: "一般に震源から遠いほどP波とS波の到着差が大きくなります。",
      };
    }
    case "magnitude-intensity":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "同じ地震でも観測地点ごとに異なる、揺れの強さを表すものを何といいますか。",
            answers: ["震度"],
            hint: "場所ごとの揺れです。",
          }
        : {
            ...common,
            prompt: "地震そのものの規模を表す量を何といいますか。",
            answers: ["マグニチュード"],
            hint: "地点ごとの値ではありません。",
          };
    case "plates-earthquake-land-change":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "地震で海底が急激に変化したときに生じることがある大きな波を何といいますか。",
            answers: ["津波"],
            hint: "海底の変化が海水を動かします。",
          }
        : {
            ...common,
            prompt: "日本付近の地震と関係する、地球表面を覆う板状の部分を何といいますか。",
            answers: ["プレート"],
            hint: "複数の板状部分が動いています。",
          };
    case "earth-benefits-disasters":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt:
              "実際の災害時に優先して確認すべきなのは、学習教材と最新の公的情報のどちらですか。",
            answers: ["最新の公的情報", "公的情報", "最新情報"],
            hint: "現実の避難判断では最新情報を使います。",
          }
        : {
            ...common,
            prompt: "火山地域で利用される、地下の熱によるエネルギーを何といいますか。",
            answers: ["地熱", "地熱エネルギー"],
            hint: "火山活動がもたらす恵みの一例です。",
          };
    default:
      return {
        ...common,
        prompt: "大地の成り立ちと変化で学ぶ現象を一つ答えてください。",
        answers: ["地層", "火山", "地震"],
        hint: "この単元の三つの大きな柱です。",
      };
  }
};

export const generateMiddleScience1EarthLessonExercises = (
  unitKey: string,
  lessonKey: string,
  count = 3,
) => {
  if (unitKey !== EARTH_UNIT_KEY || !lessonTitles[lessonKey]) return [];
  const difficulties: ExerciseDifficulty[] = ["basic", "applied", "challenge"];
  return Array.from({ length: count }, (_, index) =>
    make(lessonKey, difficulties[index % difficulties.length], index),
  );
};

export const generateMiddleScience1EarthUnitExercises = (unitKey: string, count = 8) => {
  if (unitKey !== EARTH_UNIT_KEY) return [];
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
