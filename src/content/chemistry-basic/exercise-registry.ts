import type { GeneratedExercise } from "../math1/exercise-registry";

type ChemistryExerciseSpec = {
  lessonKey: string;
  prompt: string;
  answers: string[];
  difficulty: GeneratedExercise["difficulty"];
  hint?: string;
};

const lessonTitles: Record<string, string> = {
  "features-of-chemistry": "化学の特徴",
  "separation-purification": "物質の分離・精製",
  "elements-simple-compounds": "単体と化合物",
  "thermal-motion-states": "熱運動と物質の三態",
  "atomic-structure": "原子の構造",
  "electron-configuration-periodic-table": "電子配置と周期表",
  "ions-ionic-bonding": "イオンとイオン結合",
  "molecules-covalent-bonding": "分子と共有結合",
  "metals-metallic-bonding": "金属と金属結合",
  "amount-of-substance": "物質量",
  "chemical-equations": "化学反応式",
  "acids-bases-neutralization": "酸・塩基と中和",
  "oxidation-reduction": "酸化と還元",
  "chemistry-opens-world": "化学が拓く世界",
};

const unitLessonKeys: Record<string, string[]> = {
  "chemistry-and-matter": [
    "features-of-chemistry",
    "separation-purification",
    "elements-simple-compounds",
    "thermal-motion-states",
  ],
  "constituent-particles": ["atomic-structure", "electron-configuration-periodic-table"],
  "chemical-bonding": ["ions-ionic-bonding", "molecules-covalent-bonding", "metals-metallic-bonding"],
  "amount-and-equations": ["amount-of-substance", "chemical-equations"],
  "chemical-reactions": ["acids-bases-neutralization", "oxidation-reduction"],
  "chemistry-world": ["chemistry-opens-world"],
};

const bank: ChemistryExerciseSpec[] = [
  {
    lessonKey: "features-of-chemistry",
    prompt: "物質の性質を公平に比較する実験で、比較したい条件以外をそろえる考え方を何というか。",
    answers: ["条件制御", "条件の制御"],
    difficulty: "basic",
    hint: "実験条件を意図的に管理します。",
  },
  {
    lessonKey: "features-of-chemistry",
    prompt: "薬品のにおいを確かめるとき、容器に鼻を近づけず手であおいで少量を確認する。この操作の目的を一語で答えよ。",
    answers: ["安全", "安全性", "事故防止"],
    difficulty: "basic",
  },
  {
    lessonKey: "features-of-chemistry",
    prompt: "同じ体積の物質AとBを比べ、Aの質量の方が大きかった。Aの方が大きいと判断できる物理量は何か。",
    answers: ["密度"],
    difficulty: "applied",
  },
  {
    lessonKey: "separation-purification",
    prompt: "液体混合物を沸点の違いで分ける操作を何というか。",
    answers: ["蒸留"],
    difficulty: "basic",
  },
  {
    lessonKey: "separation-purification",
    prompt: "温度による溶解度の差を利用して固体物質の純度を高める操作を何というか。",
    answers: ["再結晶"],
    difficulty: "basic",
  },
  {
    lessonKey: "separation-purification",
    prompt: "ろ紙上に残る固体を何というか。",
    answers: ["残留物", "残渣", "残さ"],
    difficulty: "challenge",
    hint: "ろ液と対になる名称です。",
  },
  {
    lessonKey: "elements-simple-compounds",
    prompt: "O₂は単体・化合物・混合物のどれか。",
    answers: ["単体"],
    difficulty: "basic",
  },
  {
    lessonKey: "elements-simple-compounds",
    prompt: "CO₂は単体・化合物・混合物のどれか。",
    answers: ["化合物"],
    difficulty: "basic",
  },
  {
    lessonKey: "elements-simple-compounds",
    prompt: "窒素、酸素、アルゴンなどからなる空気は、単体・化合物・混合物のどれか。",
    answers: ["混合物"],
    difficulty: "applied",
  },
  {
    lessonKey: "thermal-motion-states",
    prompt: "液体から気体への状態変化を総称して何というか。",
    answers: ["気化"],
    difficulty: "basic",
  },
  {
    lessonKey: "thermal-motion-states",
    prompt: "気体から液体への状態変化を何というか。",
    answers: ["凝縮", "液化"],
    difficulty: "basic",
  },
  {
    lessonKey: "thermal-motion-states",
    prompt: "温度が高くなると、粒子の熱運動は一般にどうなるか。",
    answers: ["激しくなる", "速くなる", "活発になる"],
    difficulty: "applied",
  },
  {
    lessonKey: "atomic-structure",
    prompt: "原子番号は原子核中の何の数を表すか。",
    answers: ["陽子", "陽子数"],
    difficulty: "basic",
  },
  {
    lessonKey: "atomic-structure",
    prompt: "原子番号8、質量数16の酸素原子の中性子数を答えよ。",
    answers: ["8", "8個"],
    difficulty: "basic",
  },
  {
    lessonKey: "atomic-structure",
    prompt: "原子番号17、質量数37の中性塩素原子について、陽子数・中性子数・電子数をカンマ区切りで答えよ。",
    answers: ["17,20,17", "17，20，17"],
    difficulty: "challenge",
  },
  {
    lessonKey: "electron-configuration-periodic-table",
    prompt: "原子番号11のNa原子の価電子数を答えよ。",
    answers: ["1", "1個"],
    difficulty: "basic",
  },
  {
    lessonKey: "electron-configuration-periodic-table",
    prompt: "周期表の縦の列を何というか。",
    answers: ["族"],
    difficulty: "basic",
  },
  {
    lessonKey: "electron-configuration-periodic-table",
    prompt: "原子番号18のArが属する族を答えよ。",
    answers: ["18族", "18"],
    difficulty: "applied",
  },
  {
    lessonKey: "ions-ionic-bonding",
    prompt: "原子が電子を失ってできるイオンを何というか。",
    answers: ["陽イオン"],
    difficulty: "basic",
  },
  {
    lessonKey: "ions-ionic-bonding",
    prompt: "Mg²⁺とCl⁻からできるイオン結晶の組成式を答えよ。",
    answers: ["MgCl2", "MgCl₂"],
    difficulty: "basic",
  },
  {
    lessonKey: "ions-ionic-bonding",
    prompt: "Al³⁺とO²⁻からできるイオン結晶の組成式を答えよ。",
    answers: ["Al2O3", "Al₂O₃"],
    difficulty: "challenge",
  },
  {
    lessonKey: "molecules-covalent-bonding",
    prompt: "原子間で電子対を共有してできる結合を何というか。",
    answers: ["共有結合"],
    difficulty: "basic",
  },
  {
    lessonKey: "molecules-covalent-bonding",
    prompt: "O₂分子のO原子間は何重結合か。",
    answers: ["二重結合", "2重結合"],
    difficulty: "basic",
  },
  {
    lessonKey: "molecules-covalent-bonding",
    prompt: "ダイヤモンドは独立した分子からなるか、共有結合が連続した結晶か。",
    answers: ["共有結合が連続した結晶", "共有結合の結晶", "結晶"],
    difficulty: "applied",
  },
  {
    lessonKey: "metals-metallic-bonding",
    prompt: "金属結晶中を特定の原子に属さず移動できる電子を何というか。",
    answers: ["自由電子"],
    difficulty: "basic",
  },
  {
    lessonKey: "metals-metallic-bonding",
    prompt: "金属を薄く広げられる性質を何というか。",
    answers: ["展性"],
    difficulty: "basic",
  },
  {
    lessonKey: "metals-metallic-bonding",
    prompt: "銅が電線に適する理由となる性質を1つ答えよ。",
    answers: ["電気伝導性", "電気伝導性が高い", "延性", "電気をよく通す"],
    difficulty: "applied",
  },
  {
    lessonKey: "amount-of-substance",
    prompt: "1 molに含まれる粒子数を約何個と表すか。",
    answers: ["6.02×10^23", "6.02*10^23", "6.02×10²³", "6.0×10^23", "6.0×10²³"],
    difficulty: "basic",
  },
  {
    lessonKey: "amount-of-substance",
    prompt: "モル質量40 g/molの物質20 gの物質量を答えよ。",
    answers: ["0.5", "0.5mol", "0.50", "0.50mol"],
    difficulty: "basic",
  },
  {
    lessonKey: "amount-of-substance",
    prompt: "0.20 molの溶質を水に溶かして1.0 Lの溶液にした。モル濃度を答えよ。",
    answers: ["0.20", "0.2", "0.20mol/L", "0.2mol/L"],
    difficulty: "challenge",
  },
  {
    lessonKey: "chemical-equations",
    prompt: "H₂ + O₂ → H₂O を最小整数比で係数をそろえた式を書け。",
    answers: ["2H2+O2→2H2O", "2H2+O2=2H2O", "2H₂+O₂→2H₂O"],
    difficulty: "basic",
  },
  {
    lessonKey: "chemical-equations",
    prompt: "N₂ + 3H₂ → 2NH₃で、N₂とNH₃の物質量比を答えよ。",
    answers: ["1:2", "1：2"],
    difficulty: "basic",
  },
  {
    lessonKey: "chemical-equations",
    prompt: "2H₂ + O₂ → 2H₂Oで、O₂ 1.5 molが十分なH₂と反応するとH₂Oは何mol生じるか。",
    answers: ["3", "3.0", "3mol", "3.0mol"],
    difficulty: "applied",
  },
  {
    lessonKey: "acids-bases-neutralization",
    prompt: "酸性水溶液で増える代表的なイオンを化学式で答えよ。",
    answers: ["H+", "H⁺", "水素イオン"],
    difficulty: "basic",
  },
  {
    lessonKey: "acids-bases-neutralization",
    prompt: "H⁺とOH⁻が反応して生じる物質を化学式で答えよ。",
    answers: ["H2O", "H₂O", "水"],
    difficulty: "basic",
  },
  {
    lessonKey: "acids-bases-neutralization",
    prompt: "0.10 mol/L HCl 30 mLを0.10 mol/L NaOHで完全に中和する。NaOH水溶液は何mL必要か。",
    answers: ["30", "30mL", "30ml"],
    difficulty: "challenge",
  },
  {
    lessonKey: "oxidation-reduction",
    prompt: "電子を失う変化を酸化・還元のどちらというか。",
    answers: ["酸化"],
    difficulty: "basic",
  },
  {
    lessonKey: "oxidation-reduction",
    prompt: "Zn → Zn²⁺ + 2e⁻ でZnは酸化・還元のどちらを受けているか。",
    answers: ["酸化", "酸化される"],
    difficulty: "basic",
  },
  {
    lessonKey: "oxidation-reduction",
    prompt: "Zn + Cu²⁺ → Zn²⁺ + Cu で酸化剤となる粒子を答えよ。",
    answers: ["Cu2+", "Cu²⁺", "銅イオン", "銅(II)イオン", "銅Ⅱイオン"],
    difficulty: "applied",
  },
  {
    lessonKey: "chemistry-opens-world",
    prompt: "使用済み製品を原料として再び利用することを一般に何というか。",
    answers: ["リサイクル", "再資源化"],
    difficulty: "basic",
  },
  {
    lessonKey: "chemistry-opens-world",
    prompt: "製品の原料採取から製造、使用、廃棄までを通して環境影響を考える視点を、短く答えよ。",
    answers: ["ライフサイクル", "製品の一生", "ライフサイクル全体"],
    difficulty: "basic",
  },
  {
    lessonKey: "chemistry-opens-world",
    prompt: "充電式電池の評価で、性能以外に考えるべき観点を1つ答えよ。",
    answers: ["安全性", "資源", "環境負荷", "リサイクル", "費用", "発火", "資源量"],
    difficulty: "basic",
  },
  {
    lessonKey: "chemistry-opens-world",
    prompt: "化学技術を評価するとき、利便性だけでなく安全性や環境影響も比べる。このように複数の観点から判断することを何というか。",
    answers: ["多面的評価", "多面的に評価", "多面的な評価", "総合的評価", "総合的に評価"],
    difficulty: "basic",
  },
  {
    lessonKey: "chemistry-opens-world",
    prompt: "軽量材料を輸送機器に使うことで期待できる環境面の利点を1つ答えよ。",
    answers: ["燃料消費の削減", "省エネルギー", "CO2排出削減", "二酸化炭素排出削減", "燃費向上"],
    difficulty: "applied",
  },
  {
    lessonKey: "chemistry-opens-world",
    prompt: "ある材料が高性能でも、採掘時の環境負荷が大きく回収も難しい。採用判断で性能と同時に評価すべき要素を2つ挙げよ。",
    answers: [
      "環境負荷とリサイクル",
      "環境負荷,リサイクル",
      "環境負荷、リサイクル",
      "資源とリサイクル",
      "資源,リサイクル",
      "安全性と環境負荷",
    ],
    difficulty: "challenge",
    hint: "製造前と使用後まで含めて考えます。",
  },
];

const shuffle = <T>(values: readonly T[]) => {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
};

const toExercise = (spec: ChemistryExerciseSpec, index: number): GeneratedExercise => ({
  id: `chemistry-${spec.lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
  prompt: spec.prompt,
  answers: spec.answers,
  lessonKeys: [spec.lessonKey],
  lessonTitles: [lessonTitles[spec.lessonKey] ?? spec.lessonKey],
  difficulty: spec.difficulty,
  hint: spec.hint,
  answerMode: "text",
});

export const generateLessonExercises = (unitKey: string, lessonKey: string, count = 3) => {
  if (!(unitLessonKeys[unitKey] ?? []).includes(lessonKey)) return [];
  return shuffle(bank.filter((spec) => spec.lessonKey === lessonKey))
    .slice(0, count)
    .map(toExercise);
};

export const generateUnitExercises = (unitKey: string) => {
  const lessonKeys = unitLessonKeys[unitKey] ?? [];
  const pool = bank.filter((spec) => lessonKeys.includes(spec.lessonKey));
  if (pool.length === 0) return [];

  const selected: ChemistryExerciseSpec[] = [];
  const take = (difficulty: GeneratedExercise["difficulty"], count: number) => {
    const candidates = shuffle(pool.filter((spec) => spec.difficulty === difficulty));
    for (const candidate of candidates.slice(0, count)) selected.push(candidate);
  };

  take("basic", 4);
  take("applied", 1);
  take("challenge", 1);

  if (selected.length < 6) {
    const remaining = shuffle(pool.filter((spec) => !selected.includes(spec)));
    selected.push(...remaining.slice(0, 6 - selected.length));
  }

  return shuffle(selected).slice(0, 6).map(toExercise);
};
