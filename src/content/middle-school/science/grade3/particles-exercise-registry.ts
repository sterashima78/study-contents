import type { ExerciseDifficulty } from "../../../math1/exercise-generators";
import type { GeneratedExercise } from "../../../math1/exercise-registry";

const lessonTitles: Record<string, string> = {
  "electrolyte-non-electrolyte": "電解質と非電解質を区別する",
  "atomic-structure": "原子核と電子から原子の構造を捉える",
  "ion-formation": "電子の出入りからイオンの生成を説明する",
  "ion-formulas": "代表的なイオンをイオン式で表す",
  "electrolysis-ion-model": "電気分解の結果をイオンの移動で説明する",
  "acids-alkalis-ions": "酸・アルカリの性質をイオンと結び付ける",
  "ph-scale": "pHから酸性・中性・アルカリ性を読む",
  "neutralization-ion-model": "中和をH⁺とOH⁻の反応で説明する",
  "salts-after-neutralization": "中和後に生じる塩をイオンから捉える",
  "metal-ionization-tendency": "金属のイオンへのなりやすさを比較する",
  "metal-ion-electron-transfer": "金属がイオンになる変化を電子移動で表す",
  "daniell-cell-structure": "ダニエル電池を二つの電極変化として捉える",
  "electrode-reactions-electron-flow": "電極変化と電子の流れを対応させる",
  "chemical-electrical-energy": "電池を化学エネルギーから電気エネルギーへの変換として捉える",
  "batteries-in-society": "身近な電池を用途とエネルギー変換で整理する",
};

const unitLessonKeys: Record<string, string[]> = {
  "aqueous-ions": [
    "electrolyte-non-electrolyte",
    "atomic-structure",
    "ion-formation",
    "ion-formulas",
    "electrolysis-ion-model",
    "acids-alkalis-ions",
    "ph-scale",
    "neutralization-ion-model",
    "salts-after-neutralization",
  ],
  "chemical-cells": [
    "metal-ionization-tendency",
    "metal-ion-electron-transfer",
    "daniell-cell-structure",
    "electrode-reactions-electron-flow",
    "chemical-electrical-energy",
    "batteries-in-society",
  ],
};

const difficulties: ExerciseDifficulty[] = ["basic", "applied", "challenge"];
type Template = { prompt: string; answers: string[]; hint: string };

const templates: Record<string, Template[]> = {
  "electrolyte-non-electrolyte": [
    {
      prompt: "水溶液にしたとき電流が流れる物質を何といいますか。",
      answers: ["電解質"],
      hint: "電流が流れるかどうかが分類基準です。",
    },
    {
      prompt: "砂糖水のように水溶液へ電流がほとんど流れない物質を何といいますか。",
      answers: ["非電解質"],
      hint: "電解質の反対の分類です。",
    },
    {
      prompt: "電解質水溶液で電流を運ぶと考える、正負の電気をもつ粒子を何といいますか。",
      answers: ["イオン"],
      hint: "陽イオンと陰イオンの総称です。",
    },
  ],
  "atomic-structure": [
    {
      prompt: "原子の中心にあり、陽子と中性子からなる部分を何といいますか。",
      answers: ["原子核"],
      hint: "原子の中心部分です。",
    },
    {
      prompt: "原子核にあり、正の電気をもつ粒子は何ですか。",
      answers: ["陽子"],
      hint: "電子とは反対の電気をもちます。",
    },
    {
      prompt: "原子核の周囲にあり、負の電気をもつ粒子は何ですか。",
      answers: ["電子"],
      hint: "イオン生成で出入りする粒子です。",
    },
  ],
  "ion-formation": [
    {
      prompt: "原子が電子を失ってできる正の電気をもつ粒子を何といいますか。",
      answers: ["陽イオン"],
      hint: "負の電気が減ります。",
    },
    {
      prompt: "原子が電子を受け取ってできる負の電気をもつ粒子を何といいますか。",
      answers: ["陰イオン"],
      hint: "負の電気が増えます。",
    },
    {
      prompt: "原子が陽イオンになるとき、電子を失う・受け取るのどちらですか。",
      answers: ["失う", "電子を失う"],
      hint: "電子は負の電気をもちます。",
    },
  ],
  "ion-formulas": [
    {
      prompt: "Na⁺は陽イオン・陰イオンのどちらですか。",
      answers: ["陽イオン"],
      hint: "右肩の＋を見ます。",
    },
    {
      prompt: "Cl⁻は陽イオン・陰イオンのどちらですか。",
      answers: ["陰イオン"],
      hint: "右肩の−を見ます。",
    },
    {
      prompt: "水酸化物イオンの代表的なイオン式を答えてください。",
      answers: ["OH-", "OH⁻", "oh-", "oh⁻"],
      hint: "OとHからなる一価の陰イオンです。",
    },
  ],
  "electrolysis-ion-model": [
    {
      prompt: "陽イオンは正極・負極のどちら側へ移動しますか。",
      answers: ["負極", "負極側"],
      hint: "異なる電気は引き合います。",
    },
    {
      prompt: "陰イオンは正極・負極のどちら側へ移動しますか。",
      answers: ["正極", "正極側"],
      hint: "陰イオンは負の電気をもちます。",
    },
    {
      prompt: "電極付近の生成物を説明するとき、移動を考える正負の荷電粒子を何といいますか。",
      answers: ["イオン"],
      hint: "水溶液中を移動する粒子です。",
    },
  ],
  "acids-alkalis-ions": [
    {
      prompt: "酸性と共通して関係する水素イオンのイオン式を答えてください。",
      answers: ["H+", "H⁺", "h+", "h⁺"],
      hint: "水素元素Hの一価の陽イオンです。",
    },
    {
      prompt: "アルカリ性と共通して関係する水酸化物イオンのイオン式を答えてください。",
      answers: ["OH-", "OH⁻", "oh-", "oh⁻"],
      hint: "OHの一価の陰イオンです。",
    },
    {
      prompt: "H⁺とOH⁻のうち、酸性と関連するのはどちらですか。",
      answers: ["H+", "H⁺", "h+", "h⁺", "水素イオン"],
      hint: "酸性に共通するイオンです。",
    },
  ],
  "ph-scale": [
    {
      prompt: "pH7の水溶液は酸性・中性・アルカリ性のどれですか。",
      answers: ["中性"],
      hint: "7が基準です。",
    },
    {
      prompt: "pH3の水溶液は酸性・中性・アルカリ性のどれですか。",
      answers: ["酸性"],
      hint: "7より小さい側です。",
    },
    {
      prompt: "pH11の水溶液は酸性・中性・アルカリ性のどれですか。",
      answers: ["アルカリ性"],
      hint: "7より大きい側です。",
    },
  ],
  "neutralization-ion-model": [
    {
      prompt: "中和でH⁺とOH⁻が結び付いてできる代表的な物質は何ですか。",
      answers: ["水", "H2O", "H₂O"],
      hint: "H⁺ + OH⁻ を考えます。",
    },
    {
      prompt: "H⁺6個とOH⁻4個が1:1で反応すると、H⁺は何個余りますか。",
      answers: ["2", "2個"],
      hint: "4組が水になります。",
    },
    {
      prompt: "中和反応が起きた水溶液は必ずpH7になる、と言えますか。",
      answers: ["言えない", "いいえ", "必ずではない"],
      hint: "H⁺またはOH⁻が余る場合があります。",
    },
  ],
  "salts-after-neutralization": [
    {
      prompt: "酸とアルカリの中和で、水とともに生じる物質の種類を何といいますか。",
      answers: ["塩"],
      hint: "H⁺とOH⁻以外のイオンの組合せに注目します。",
    },
    {
      prompt: "Na⁺とCl⁻の組合せに対応する塩の化学式を答えてください。",
      answers: ["NaCl", "nacl"],
      hint: "塩化ナトリウムです。",
    },
    {
      prompt: "塩には水に溶けやすいものと溶けにくいものがある、と言えますか。",
      answers: ["言える", "はい", "ある"],
      hint: "沈殿を生じる塩もあります。",
    },
  ],
  "metal-ionization-tendency": [
    {
      prompt: "Mg > Zn > Cuの順にイオンになりやすいとき、最もイオンになりやすい金属はどれですか。",
      answers: ["Mg", "mg", "マグネシウム"],
      hint: "左側ほどなりやすい順です。",
    },
    {
      prompt: "Mg > Zn > Cuの順にイオンになりやすいとき、最もなりにくい金属はどれですか。",
      answers: ["Cu", "cu", "銅"],
      hint: "右端を見ます。",
    },
    {
      prompt: "金属のイオンへのなりやすさは、金属によって同じ・異なるのどちらですか。",
      answers: ["異なる", "違う"],
      hint: "反応結果を比較して順序を作ります。",
    },
  ],
  "metal-ion-electron-transfer": [
    {
      prompt: "ZnがZn²⁺になるとき、電子を失う・受け取るのどちらですか。",
      answers: ["失う", "電子を失う"],
      hint: "陽イオンになる変化です。",
    },
    {
      prompt: "Cu²⁺がCuになるとき、電子を失う・受け取るのどちらですか。",
      answers: ["受け取る", "電子を受け取る"],
      hint: "正の電気を打ち消す方向です。",
    },
    {
      prompt: "Zn → Zn²⁺ + 2e⁻ で右辺のe⁻は何を表しますか。",
      answers: ["電子", "電子2個", "2個の電子"],
      hint: "負の電気をもつ粒子です。",
    },
  ],
  "daniell-cell-structure": [
    {
      prompt: "ダニエル電池で電子を放出する金属は亜鉛・銅のどちらですか。",
      answers: ["亜鉛", "Zn", "zn"],
      hint: "Zn → Zn²⁺ + 2e⁻です。",
    },
    {
      prompt: "ダニエル電池の銅側で、電子を受け取って銅になるイオンをイオン式で答えてください。",
      answers: ["Cu2+", "Cu²+", "Cu²⁺", "cu2+", "銅イオン"],
      hint: "Cu²⁺ + 2e⁻ → Cuです。",
    },
    {
      prompt: "ダニエル電池では二つの電極で同じ変化・異なる変化のどちらが起こりますか。",
      answers: ["異なる変化", "異なる", "違う変化"],
      hint: "一方で電子を放出し、他方で受け取ります。",
    },
  ],
  "electrode-reactions-electron-flow": [
    {
      prompt: "ダニエル電池の導線中で、電子はZn側からCu側へ流れる・逆向きのどちらですか。",
      answers: ["Zn側からCu側へ流れる", "亜鉛側から銅側", "ZnからCu", "znからcu"],
      hint: "電子の放出側から受取側へ進みます。",
    },
    {
      prompt: "電子の移動方向と慣用的な電流の向きは同じ・反対のどちらですか。",
      answers: ["反対", "逆"],
      hint: "電流の向きは歴史的に電子と逆向きで定義されています。",
    },
    {
      prompt: "電池で導線中を移動する負の電気をもつ粒子は何ですか。",
      answers: ["電子"],
      hint: "e⁻で表します。",
    },
  ],
  "chemical-electrical-energy": [
    {
      prompt: "電池では主に何エネルギーを電気エネルギーへ変換しますか。",
      answers: ["化学エネルギー"],
      hint: "電池内部の化学変化に注目します。",
    },
    {
      prompt: "電池がエネルギーを無から作る、と言えますか。",
      answers: ["言えない", "いいえ", "変換する"],
      hint: "エネルギーは形を変えます。",
    },
    {
      prompt: "化学エネルギーから変換して外部回路で利用する代表的なエネルギーは何ですか。",
      answers: ["電気エネルギー"],
      hint: "電池から取り出すエネルギーです。",
    },
  ],
  "batteries-in-society": [
    {
      prompt: "充電して繰り返し使う代表的な電池の種類を何といいますか。",
      answers: ["蓄電池", "二次電池"],
      hint: "自動車用などにも使われます。",
    },
    {
      prompt: "燃料の化学変化を利用して電気エネルギーを取り出す代表的な電池を何といいますか。",
      answers: ["燃料電池"],
      hint: "名称に「燃料」が入ります。",
    },
    {
      prompt:
        "乾電池・蓄電池・燃料電池に共通する代表的なエネルギー変換は、化学エネルギーから何エネルギーへの変換ですか。",
      answers: ["電気エネルギー"],
      hint: "外部回路で利用する形です。",
    },
  ],
};

const makeExercise = (
  lessonKey: string,
  difficulty: ExerciseDifficulty,
  templateIndex: number,
  index: number,
): GeneratedExercise => {
  const lessonTemplates = templates[lessonKey];
  const template = lessonTemplates?.[templateIndex % lessonTemplates.length];
  if (!template) {
    return {
      id: `middle-science3-particles-${lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
      lessonKeys: [lessonKey],
      lessonTitles: [lessonTitles[lessonKey] ?? lessonKey],
      difficulty,
      answerMode: "text",
      prompt: "教材のまとめにある重要語句を一つ答えてください。",
      answers: [lessonTitles[lessonKey] ?? lessonKey],
      hint: "教材のまとめを確認します。",
    };
  }
  return {
    id: `middle-science3-particles-${lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
    lessonKeys: [lessonKey],
    lessonTitles: [lessonTitles[lessonKey] ?? lessonKey],
    difficulty,
    answerMode: "text",
    ...template,
  };
};

export const generateMiddleScience3ParticleLessonExercises = (
  unitKey: string,
  lessonKey: string,
  count = 3,
) => {
  if (!unitLessonKeys[unitKey]?.includes(lessonKey) || !templates[lessonKey]) return [];
  return Array.from({ length: count }, (_, index) =>
    makeExercise(lessonKey, difficulties[index % difficulties.length], index, index),
  );
};

export const generateMiddleScience3ParticleUnitExercises = (unitKey: string, count = 8) => {
  const lessonKeys = unitLessonKeys[unitKey];
  if (!lessonKeys) return [];
  const start = Math.floor(Math.random() * lessonKeys.length);
  return Array.from({ length: count }, (_, index) => {
    const lessonKey = lessonKeys[(start + index) % lessonKeys.length];
    const difficulty = difficulties[index % difficulties.length];
    return makeExercise(lessonKey, difficulty, index % 3, index);
  });
};
