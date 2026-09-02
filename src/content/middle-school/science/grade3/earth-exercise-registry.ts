import type { ExerciseDifficulty } from "../../../math1/exercise-generators";
import type { GeneratedExercise } from "../../../math1/exercise-registry";

const lessonTitles: Record<string, string> = {
  "daily-motion-sun-stars": "太陽と星の日周運動を観察記録から読む",
  "earth-rotation-relative-motion": "日周運動を地球の自転で説明する",
  "star-trails-directions": "方位による星の軌跡の違いを読む",
  "annual-motion-constellations": "星座の年周運動を地球の公転で説明する",
  "solar-altitude-day-length": "太陽の南中高度と昼の長さの季節変化を読む",
  "axial-tilt-seasons": "地軸の傾きと公転から四季を説明する",
  "sun-features-sunspots": "太陽の形・表面・自転を資料から読む",
  "sun-energy-earth": "太陽のエネルギーと地球への影響を関連付ける",
  "planets-stars-difference": "惑星と恒星を区別する",
  "planet-groups-properties": "惑星を地球型と木星型の特徴で比較する",
  "solar-system-milky-way": "太陽系の構造と銀河系での位置付けを捉える",
  "moon-revolution-position": "月の公転と毎日の位置変化を関連付ける",
  "moon-phases": "月の満ち欠けを太陽・地球・月の位置関係で説明する",
  "solar-lunar-eclipses": "日食と月食を位置関係から捉える",
  "venus-phases-size": "金星の満ち欠けと見かけの大きさを公転で説明する",
};

const unitLessonKeys: Record<string, string[]> = {
  "celestial-motion-earth": [
    "daily-motion-sun-stars",
    "earth-rotation-relative-motion",
    "star-trails-directions",
    "annual-motion-constellations",
    "solar-altitude-day-length",
    "axial-tilt-seasons",
  ],
  "solar-system-stars": [
    "sun-features-sunspots",
    "sun-energy-earth",
    "planets-stars-difference",
    "planet-groups-properties",
    "solar-system-milky-way",
    "moon-revolution-position",
    "moon-phases",
    "solar-lunar-eclipses",
    "venus-phases-size",
  ],
};

type ExerciseSpec = { prompt: string; answers: string[]; hint: string };

const questionBank: Record<string, ExerciseSpec[]> = {
  "daily-motion-sun-stars": [
    {
      prompt: "太陽や星の約1日周期の見かけの動きを何といいますか。",
      answers: ["日周運動"],
      hint: "一日の中の見かけの動きです。",
    },
    {
      prompt: "多くの天体は一日の中で東から西・西から東のどちらへ動いて見えますか。",
      answers: ["東から西", "東→西"],
      hint: "日の出と日の入りの方向も思い出します。",
    },
    {
      prompt:
        "日周運動は天体そのものが毎日地球を回る実際の運動・見かけの運動のどちらとして整理しますか。",
      answers: ["見かけの運動", "見かけ"],
      hint: "地球の自転と関連付けます。",
    },
  ],
  "earth-rotation-relative-motion": [
    {
      prompt: "地球の自転方向は西から東・東から西のどちらですか。",
      answers: ["西から東", "西→東"],
      hint: "日周運動とは反対向きです。",
    },
    {
      prompt: "天体の日周運動の主な原因となる地球の運動は何ですか。",
      answers: ["自転", "地球の自転"],
      hint: "約1日周期の地球の運動です。",
    },
    {
      prompt: "地球が西から東へ自転すると、遠い星は東から西・西から東のどちらへ動いて見えますか。",
      answers: ["東から西", "東→西"],
      hint: "相対運動として逆向きに見えます。",
    },
  ],
  "star-trails-directions": [
    {
      prompt: "日本付近で北の空の星が回るように見える中心付近の代表的な星は何ですか。",
      answers: ["北極星"],
      hint: "天の北極に近い星です。",
    },
    {
      prompt: "日本付近で東の空の星は昇る・沈むのどちらに見えますか。",
      answers: ["昇る", "のぼる"],
      hint: "東から西への日周運動です。",
    },
    {
      prompt: "方位ごとに星の軌跡が違って見えても、主な原因は共通して地球の何ですか。",
      answers: ["自転", "地球の自転"],
      hint: "一つの原因で統一的に説明します。",
    },
  ],
  "annual-motion-constellations": [
    {
      prompt: "季節による星座の一年周期の見かけの動きを何といいますか。",
      answers: ["年周運動"],
      hint: "日周運動と区別します。",
    },
    {
      prompt: "星座の年周運動の主な原因となる地球の運動は何ですか。",
      answers: ["公転", "地球の公転"],
      hint: "太陽の周りを回る運動です。",
    },
    {
      prompt: "星座の年周運動を比べるとき、毎回そろえるとよい条件は時刻・季節のどちらですか。",
      answers: ["時刻", "同じ時刻"],
      hint: "一日の時刻による差を除きます。",
    },
  ],
  "solar-altitude-day-length": [
    {
      prompt: "日本付近では夏と冬のどちらで太陽の南中高度が高くなりますか。",
      answers: ["夏"],
      hint: "夏は太陽が高い位置を通ります。",
    },
    {
      prompt: "日本付近で昼の長さが一般に長いのは夏・冬のどちらですか。",
      answers: ["夏"],
      hint: "南中高度とともに季節変化します。",
    },
    {
      prompt: "太陽高度が高いと、同じ光が地面のより狭い・広い面積に分散しますか。",
      answers: ["狭い", "より狭い"],
      hint: "単位面積当たりのエネルギーを考えます。",
    },
  ],
  "axial-tilt-seasons": [
    {
      prompt: "四季の主な原因は地軸の傾きと地球の何ですか。",
      answers: ["公転", "地球の公転"],
      hint: "一年周期の地球の運動です。",
    },
    {
      prompt: "北半球が太陽側へ傾く時期、日本付近は夏・冬のどちらですか。",
      answers: ["夏"],
      hint: "太陽高度と昼の長さを考えます。",
    },
    {
      prompt: "四季は主に地球と太陽の距離だけで生じる、と言える・言えないのどちらですか。",
      answers: ["言えない", "いえない"],
      hint: "地軸の傾きが重要です。",
    },
  ],
  "sun-features-sunspots": [
    {
      prompt: "太陽表面で周囲より暗く見える部分を何といいますか。",
      answers: ["黒点"],
      hint: "表面の位置変化を追う目印にもなります。",
    },
    {
      prompt: "黒点の位置変化から、太陽が何していることを読み取れますか。",
      answers: ["自転", "自転している"],
      hint: "太陽表面が回転しています。",
    },
    {
      prompt: "太陽は自ら光を放つ恒星・惑星のどちらですか。",
      answers: ["恒星"],
      hint: "自ら発光する天体です。",
    },
  ],
  "sun-energy-earth": [
    {
      prompt: "地球の大気の運動や生命活動へ大きな影響を与える主要な天体は何ですか。",
      answers: ["太陽"],
      hint: "地球へ光と熱を届けます。",
    },
    {
      prompt: "植物が太陽光を利用して有機物をつくる働きを何といいますか。",
      answers: ["光合成"],
      hint: "中2生命の学習とつなげます。",
    },
    {
      prompt: "太陽から地球へ届く代表的なエネルギーを、光・熱から一つ答えてください。",
      answers: ["光", "熱", "光エネルギー", "熱エネルギー"],
      hint: "どちらも地球へ影響します。",
    },
  ],
  "planets-stars-difference": [
    {
      prompt: "自ら光を放つ天体を何といいますか。",
      answers: ["恒星"],
      hint: "太陽もこの仲間です。",
    },
    {
      prompt: "地球は恒星・惑星のどちらですか。",
      answers: ["惑星"],
      hint: "太陽の周りを公転しています。",
    },
    {
      prompt: "惑星は主に自ら発光する・恒星の光を反射するのどちらで明るく見えますか。",
      answers: ["恒星の光を反射する", "反射する", "光を反射する"],
      hint: "惑星と恒星の分類基準です。",
    },
  ],
  "planet-groups-properties": [
    {
      prompt: "地球は地球型惑星・木星型惑星のどちらですか。",
      answers: ["地球型惑星", "地球型"],
      hint: "比較的小さく密度が大きいグループです。",
    },
    {
      prompt: "木星は地球型惑星・木星型惑星のどちらですか。",
      answers: ["木星型惑星", "木星型"],
      hint: "非常に大きいグループです。",
    },
    {
      prompt: "惑星を比較する資料として、大きさ・密度・大気組成から一つ答えてください。",
      answers: ["大きさ", "密度", "大気組成"],
      hint: "一つの特徴だけでなく複数を使います。",
    },
  ],
  "solar-system-milky-way": [
    {
      prompt: "太陽と8個の惑星などからなる天体のまとまりを何といいますか。",
      answers: ["太陽系"],
      hint: "地球も含まれます。",
    },
    {
      prompt: "太陽を含む多数の恒星がつくる集団を何といいますか。",
      answers: ["銀河系"],
      hint: "太陽系より大きなまとまりです。",
    },
    {
      prompt: "太陽系に存在する惑星以外の天体を、小惑星・彗星・衛星から一つ答えてください。",
      answers: ["小惑星", "彗星", "衛星"],
      hint: "惑星だけが太陽系の構成要素ではありません。",
    },
  ],
  "moon-revolution-position": [
    {
      prompt: "月が地球の周りを一周する代表的な時間は約1日・約1か月のどちらですか。",
      answers: ["約1か月", "1か月"],
      hint: "月の公転周期です。",
    },
    {
      prompt: "同じ時刻の月の位置が日ごとに変わる主な原因は月の何ですか。",
      answers: ["公転", "月の公転"],
      hint: "地球の周りを回っています。",
    },
    {
      prompt: "一晩の中で月も東から西へ動いて見える主な原因は地球の何ですか。",
      answers: ["自転", "地球の自転"],
      hint: "日周運動です。",
    },
  ],
  "moon-phases": [
    {
      prompt: "月は自ら光る・太陽光を反射するのどちらですか。",
      answers: ["太陽光を反射する", "太陽の光を反射する", "反射する"],
      hint: "明るい側は太陽の方向を向きます。",
    },
    {
      prompt: "月の満ち欠けの代表的な周期は約どのくらいですか。",
      answers: ["約1か月", "1か月"],
      hint: "月の公転と関係します。",
    },
    {
      prompt: "地球から見て月が太陽と反対方向にあるときの代表的な形は何ですか。",
      answers: ["満月"],
      hint: "照らされた面が地球側を向きます。",
    },
  ],
  "solar-lunar-eclipses": [
    {
      prompt: "太陽―月―地球の順にほぼ一直線に並ぶと起こり得る食を何といいますか。",
      answers: ["日食"],
      hint: "月が太陽を隠します。",
    },
    {
      prompt: "太陽―地球―月の順に並び、月が地球の影に入る現象を何といいますか。",
      answers: ["月食"],
      hint: "地球が太陽光を遮ります。",
    },
    {
      prompt: "新月や満月のたびに必ず日食・月食が起こる、と言える・言えないのどちらですか。",
      answers: ["言えない", "いえない"],
      hint: "月の軌道面は少し傾いています。",
    },
  ],
  "venus-phases-size": [
    {
      prompt: "金星は地球より内側・外側のどちらの軌道を公転しますか。",
      answers: ["内側", "地球より内側"],
      hint: "太陽により近い軌道です。",
    },
    {
      prompt: "金星が地球へ比較的近いとき、見かけの大きさは大きく・小さくのどちらになりますか。",
      answers: ["大きく", "大きくなる", "大きい"],
      hint: "距離と見かけの大きさを結び付けます。",
    },
    {
      prompt:
        "金星の満ち欠けは金星が自ら明るさを変える・太陽に照らされた面の見え方が変わるのどちらで説明しますか。",
      answers: ["太陽に照らされた面の見え方が変わる", "照らされた面の見え方が変わる"],
      hint: "月の満ち欠けと共通する考え方です。",
    },
  ],
};

const difficulties: ExerciseDifficulty[] = ["basic", "applied", "challenge"];
const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const makeExercise = (
  lessonKey: string,
  difficulty: ExerciseDifficulty,
  index: number,
): GeneratedExercise => {
  const bank = questionBank[lessonKey] ?? [];
  const spec = bank[index % Math.max(bank.length, 1)] ?? {
    prompt: "教材のまとめで確認した用語を答えてください。",
    answers: [lessonTitles[lessonKey] ?? lessonKey],
    hint: "教材のまとめを確認します。",
  };
  return {
    id: `middle-science3-earth-${lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
    lessonKeys: [lessonKey],
    lessonTitles: [lessonTitles[lessonKey] ?? lessonKey],
    difficulty,
    answerMode: "text",
    prompt: spec.prompt,
    answers: spec.answers,
    hint: spec.hint,
  };
};

export const generateMiddleScience3EarthLessonExercises = (
  unitKey: string,
  lessonKey: string,
  count = 3,
): GeneratedExercise[] => {
  const keys = unitLessonKeys[unitKey];
  if (!keys?.includes(lessonKey) || !questionBank[lessonKey]) return [];
  return Array.from({ length: count }, (_, index) =>
    makeExercise(lessonKey, difficulties[index % difficulties.length], index),
  );
};

export const generateMiddleScience3EarthUnitExercises = (
  unitKey: string,
  count = 8,
): GeneratedExercise[] => {
  const keys = unitLessonKeys[unitKey];
  if (!keys?.length) return [];
  const start = randomInt(0, keys.length - 1);
  return Array.from({ length: count }, (_, index) => {
    const lessonKey = keys[(start + index) % keys.length];
    return makeExercise(lessonKey, difficulties[index % difficulties.length], index);
  });
};
