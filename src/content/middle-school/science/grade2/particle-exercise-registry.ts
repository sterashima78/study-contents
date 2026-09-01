import type { ExerciseDifficulty } from "../../../math1/exercise-generators";
import type { GeneratedExercise } from "../../../math1/exercise-registry";

const lessonTitles: Record<string, string> = {
  "decomposition-products": "分解で別の物質が生じることを捉える",
  "atoms-elements": "原子と元素を区別する",
  "element-symbols-periodic-table": "元素記号と周期表を読む",
  "molecules-and-models": "分子を原子の集まりとして捉える",
  "chemical-change-new-substance": "化学変化で新しい物質が生じることを捉える",
  "chemical-formulas": "化学式から物質の組成を読む",
  "chemical-equations": "化学反応式で反応前後を表す",
  "equation-atom-conservation": "原子数をそろえて化学反応式を読む",
  oxidation: "酸化を酸素との結び付きで捉える",
  reduction: "還元を酸素が離れる変化として捉える",
  "chemical-change-heat": "化学変化に伴う熱の出入りを捉える",
  "mass-conservation": "化学変化の前後で質量が保存されることを捉える",
  "open-closed-system-mass": "開放した系の見かけの質量変化を説明する",
  "fixed-mass-ratio": "反応する物質の質量比を捉える",
  "mass-data-graph": "測定データから質量の規則性を見いだす",
};

const unitLessonKeys: Record<string, string[]> = {
  "matter-structure": [
    "decomposition-products",
    "atoms-elements",
    "element-symbols-periodic-table",
    "molecules-and-models",
  ],
  "chemical-change": [
    "chemical-change-new-substance",
    "chemical-formulas",
    "chemical-equations",
    "equation-atom-conservation",
    "oxidation",
    "reduction",
    "chemical-change-heat",
  ],
  "mass-relations": [
    "mass-conservation",
    "open-closed-system-mass",
    "fixed-mass-ratio",
    "mass-data-graph",
  ],
};

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const numberAnswers = (value: number, unit = "") => [
  String(value),
  `${value}${unit}`,
  `${value} ${unit}`,
];

const base = (lessonKey: string, difficulty: ExerciseDifficulty, index: number) => ({
  id: `middle-science2-particle-${lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
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
    case "decomposition-products":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "物質Aを変化させると、性質の異なるBとCが生じた。この化学変化を何といいますか。",
            answers: ["分解"],
            hint: "一つの物質から複数の別の物質が生じています。",
          }
        : {
            ...common,
            prompt:
              "分解で生じた物質が元の物質と異なると判断する根拠として比べるものを答えてください。",
            answers: ["性質", "物質の性質"],
            hint: "見た目だけでなく観察できる特徴を使います。",
          };
    case "atoms-elements":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "原子の『種類』を表す用語を答えてください。",
            answers: ["元素"],
            hint: "粒子そのものではなく種類に注目します。",
          }
        : {
            ...common,
            prompt: "物質を構成する非常に小さな粒子を何といいますか。",
            answers: ["原子"],
            hint: "化学変化では組合せが変わる粒子です。",
          };
    case "element-symbols-periodic-table": {
      const choices = [
        ["酸素", "O"],
        ["水素", "H"],
        ["鉄", "Fe"],
        ["銅", "Cu"],
        ["マグネシウム", "Mg"],
      ] as const;
      const [name, symbol] = choices[randomInt(0, choices.length - 1)];
      return {
        ...common,
        prompt: `${name}の元素記号を答えてください。`,
        answers: [symbol, symbol.toLowerCase()],
        hint: "先頭は大文字、二文字目があるときは小文字です。",
      };
    }
    case "molecules-and-models":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "CO₂一分子に含まれる酸素原子は何個ですか。",
            answers: ["2", "2個"],
            hint: "Oの右下の数字を読みます。",
          }
        : {
            ...common,
            prompt: "いくつかの原子が結び付いて一つのまとまりになった粒子を何といいますか。",
            answers: ["分子"],
            hint: "水や二酸化炭素をモデルで表すときに使います。",
          };
    case "chemical-change-new-substance":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "化学変化の前後で、原子の種類ではなく何が変わると考えますか。",
            answers: ["原子の組合せ", "原子の組み合わせ", "組合せ", "組み合わせ"],
            hint: "原子そのものを別元素へ変えるとは考えません。",
          }
        : {
            ...common,
            prompt: "化学変化で反応前とは異なる性質をもつ新しい物質を何といいますか。",
            answers: ["生成物"],
            hint: "反応の結果として生じる物質です。",
          };
    case "chemical-formulas":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "H₂Oで水素原子と酸素原子の個数比を最も簡単な整数比で答えてください。",
            answers: ["2:1", "2対1", "2：1"],
            hint: "元素記号の右下の数字を読みます。",
          }
        : {
            ...common,
            prompt: "CO₂一分子に含まれる炭素原子は何個ですか。",
            answers: ["1", "1個"],
            hint: "右下の数字がないときは1です。",
          };
    case "chemical-equations":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "2Mg + O₂ → 2MgO で生成物の化学式を答えてください。",
            answers: ["MgO", "mgo"],
            hint: "矢印の右側を見ます。",
          }
        : {
            ...common,
            prompt: "化学反応式で矢印の左側に書く物質を何といいますか。",
            answers: ["反応物"],
            hint: "変化する前の物質です。",
          };
    case "equation-atom-conservation":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "2H₂ + O₂ → 2H₂O の左辺にある水素原子は合計何個ですか。",
            answers: ["4", "4個"],
            hint: "係数2とH₂の右下の2を掛けます。",
          }
        : {
            ...common,
            prompt:
              "化学反応式で原子数をそろえるとき、化学式の右下の数字と式の前の係数のどちらを調整しますか。",
            answers: ["係数", "式の前の係数"],
            hint: "物質の組成そのものは変えません。",
          };
    case "oxidation":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "激しく光や熱を出して進む酸化を何といいますか。",
            answers: ["燃焼"],
            hint: "酸化の一種です。",
          }
        : {
            ...common,
            prompt: "物質が何と結び付く反応を酸化といいますか。",
            answers: ["酸素", "O", "o"],
            hint: "生成物に加わった元素に注目します。",
          };
    case "reduction":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "酸化と還元を中学2年の範囲で関連付けるとき、移動に注目する物質は何ですか。",
            answers: ["酸素", "O", "o"],
            hint: "付く反応と離れる反応を対比します。",
          }
        : {
            ...common,
            prompt: "酸化物から酸素が取り除かれる化学変化を何といいますか。",
            answers: ["還元"],
            hint: "酸化の逆向きの見方です。",
          };
    case "chemical-change-heat":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt:
              "反応中に周囲の温度が下がった。周囲から熱を受け取るこの反応を何反応といいますか。",
            answers: ["吸熱反応", "吸熱"],
            hint: "周囲から反応系へ熱が移動します。",
          }
        : {
            ...common,
            prompt: "周囲へ熱を出す化学変化を何反応といいますか。",
            answers: ["発熱反応", "発熱"],
            hint: "使い捨てカイロなどで利用される見方です。",
          };
    case "mass-conservation": {
      const a = randomInt(2, 8);
      const b = randomInt(2, 8);
      const total = a + b;
      return {
        ...common,
        prompt: `閉じた系で${a} gの物質Aと${b} gの物質Bが全て反応した。生成物の総質量は何gですか。`,
        answers: numberAnswers(total, "g"),
        hint: "反応物の総質量と生成物の総質量は等しくなります。",
      };
    }
    case "open-closed-system-mass":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt:
              "開いた容器で気体が外へ出て、容器内の質量が減った。質量保存が成り立たなくなったと言えますか。",
            answers: ["言えない", "いえない", "いいえ", "成り立つ"],
            hint: "外へ出た気体も系全体には含めて考えます。",
          }
        : {
            ...common,
            prompt: "物質が外へ出入りしないように考える系を何系といいますか。",
            answers: ["閉鎖系", "閉じた系"],
            hint: "反応前後で同じ範囲を比較します。",
          };
    case "fixed-mass-ratio": {
      const multiple = randomInt(1, 4);
      const magnesium = 3 * multiple;
      const oxygen = 2 * multiple;
      return {
        ...common,
        prompt: `モデル化した反応でMg:Oの質量比が3:2である。Mg ${magnesium} gに過不足なく反応するOは何gですか。`,
        answers: numberAnswers(oxygen, "g"),
        hint: "3:2を同じ倍率で拡大します。",
      };
    }
    case "mass-data-graph":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt:
              "Aが4, 8, 12 gのときBが2, 4, 6 g反応した。A:Bの質量比を最も簡単な整数比で答えてください。",
            answers: ["2:1", "2対1", "2：1"],
            hint: "複数の組で同じ比になるか確かめます。",
          }
        : {
            ...common,
            prompt: "比例関係を確かめるとき、一つの測定値だけでなく何を見ることが大切ですか。",
            answers: ["データ全体の傾向", "全体の傾向", "複数の測定値", "複数のデータ"],
            hint: "測定誤差によるばらつきを考えます。",
          };
    default:
      return {
        ...common,
        prompt: "化学変化と原子・分子で学ぶ内容を一つ答えてください。",
        answers: ["原子", "分子", "化学変化", "質量保存", "酸化", "還元"],
        hint: "粒子モデルと質量の関係を思い出します。",
      };
  }
};

export const generateMiddleScience2ParticleLessonExercises = (
  unitKey: string,
  lessonKey: string,
  count = 3,
) => {
  if (!unitLessonKeys[unitKey]?.includes(lessonKey) || !lessonTitles[lessonKey]) return [];
  const difficulties: ExerciseDifficulty[] = ["basic", "applied", "challenge"];
  return Array.from({ length: count }, (_, index) =>
    make(lessonKey, difficulties[index % difficulties.length], index),
  );
};

export const generateMiddleScience2ParticleUnitExercises = (unitKey: string, count = 8) => {
  const lessonKeys = unitLessonKeys[unitKey];
  if (!lessonKeys) return [];
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
