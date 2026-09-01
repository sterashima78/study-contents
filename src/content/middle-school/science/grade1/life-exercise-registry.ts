import type { ExerciseDifficulty } from "../../../math1/exercise-generators";
import type { GeneratedExercise } from "../../../math1/exercise-registry";

export const LIFE_UNIT_KEY = "organisms-commonalities";

const lessonTitles: Record<string, string> = {
  "organism-observation-viewpoints": "生物を観察する観点を定める",
  "observation-tools-records": "観察器具と記録を使い分ける",
  "classification-viewpoint-criteria": "分類の観点と基準をつくる",
  "plant-basic-flower-structure": "植物の基本的なつくりと花を捉える",
  "seed-plants-angiosperm-gymnosperm": "被子植物と裸子植物を区別する",
  "angiosperm-monocot-dicot-spores": "被子植物と種子をつくらない植物を分類する",
  "vertebrate-invertebrate": "脊椎動物と無脊椎動物を区別する",
  "vertebrate-five-groups": "脊椎動物を五つの仲間に分類する",
  "arthropod-characteristics": "節足動物の共通点を捉える",
  "mollusk-characteristics": "軟体動物の特徴を節足動物と比べる",
  "unknown-organism-classification": "未知の生物を特徴から分類する",
  "classification-key": "分類表・検索表で生物を整理する",
};

const lessonKeys = Object.keys(lessonTitles);
const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const base = (lessonKey: string, difficulty: ExerciseDifficulty, index: number) => ({
  id: `middle-science1-life-${lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
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
    case "organism-observation-viewpoints": {
      const prompts = [
        [
          "生物の外見から比較できる特徴を一つ答えてください。",
          ["形", "色", "大きさ", "体のつくり"],
        ],
        ["生物が生活している場所を表す観察項目を答えてください。", ["生活場所", "生息場所"]],
      ] as const;
      const [prompt, answers] = prompts[index % prompts.length];
      return {
        ...common,
        prompt,
        answers: [...answers],
        hint: "複数の生物で同じように比べられる観点を使います。",
      };
    }
    case "observation-tools-records":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "観察結果を後から比較するため、形を簡潔な図として残す方法を答えてください。",
            answers: ["スケッチ"],
            hint: "観察記録の一つです。",
          }
        : {
            ...common,
            prompt: "小さな生物の外部形態を立体的に拡大して観察する代表的な器具を答えてください。",
            answers: ["双眼実体顕微鏡"],
            hint: "外部形態を立体的に観察できます。",
          };
    case "classification-viewpoint-criteria":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "分類に使う観点を変えると、分類の結果は変わることがありますか。",
            answers: ["ある", "はい", "変わる"],
            hint: "目的に応じて観点や基準は変えられます。",
          }
        : {
            ...common,
            prompt: "『背骨の有無』は分類の観点と基準のどちらですか。",
            answers: ["観点", "分類の観点"],
            hint: "何に注目するかを表します。",
          };
    case "plant-basic-flower-structure": {
      const prompts = [
        ["植物の体の基本的な三つの部分を、根・茎ともう一つ答えてください。", ["葉"]],
        ["柱頭・花柱・子房からなる花の部分を何といいますか。", ["めしべ"]],
        ["おしべの先にあり、花粉をつくる部分を何といいますか。", ["やく"]],
      ] as const;
      const [prompt, answers] = prompts[index % prompts.length];
      return {
        ...common,
        prompt,
        answers: [...answers],
        hint: "植物全体と花の基本構造を整理します。",
      };
    }
    case "seed-plants-angiosperm-gymnosperm":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "胚珠が子房に包まれず外から見える種子植物の仲間を答えてください。",
            answers: ["裸子植物"],
            hint: "マツなどが代表例です。",
          }
        : {
            ...common,
            prompt: "胚珠が子房の中にある種子植物の仲間を答えてください。",
            answers: ["被子植物"],
            hint: "子房に包まれているかに注目します。",
          };
    case "angiosperm-monocot-dicot-spores":
      if (difficulty === "challenge") {
        return {
          ...common,
          prompt: "種子をつくらない植物がつくるものを答えてください。",
          answers: ["胞子"],
          hint: "種子植物との違いです。",
        };
      }
      return index % 2 === 0
        ? {
            ...common,
            prompt: "平行脈をもつものが多い被子植物の仲間を答えてください。",
            answers: ["単子葉類"],
            hint: "ひげ根も代表的な特徴です。",
          }
        : {
            ...common,
            prompt: "網状脈をもつものが多い被子植物の仲間を答えてください。",
            answers: ["双子葉類"],
            hint: "主根と側根も代表的な特徴です。",
          };
    case "vertebrate-invertebrate":
      return index % 2 === 0
        ? {
            ...common,
            prompt: "背骨をもつ動物をまとめて何といいますか。",
            answers: ["脊椎動物"],
            hint: "魚、カエル、鳥、ヒトなどが含まれます。",
          }
        : {
            ...common,
            prompt: "イカは脊椎動物と無脊椎動物のどちらですか。",
            answers: ["無脊椎動物"],
            hint: "背骨の有無を基準にします。",
          };
    case "vertebrate-five-groups": {
      const groups = [
        ["体表が羽毛で覆われる脊椎動物の仲間を答えてください。", "鳥類"],
        ["体表が毛で覆われ、子を乳で育てる脊椎動物の仲間を答えてください。", "哺乳類"],
        ["魚類、両生類、爬虫類、鳥類と、もう一つの脊椎動物の仲間を答えてください。", "哺乳類"],
      ] as const;
      const [prompt, answer] = groups[index % groups.length];
      return {
        ...common,
        prompt,
        answers: [answer],
        hint: "体表や呼吸、子の生まれ方などを組み合わせます。",
      };
    }
    case "arthropod-characteristics":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "外骨格と節のあるあしを共通してもつ無脊椎動物の仲間を答えてください。",
            answers: ["節足動物"],
            hint: "昆虫やエビなどが含まれます。",
          }
        : {
            ...common,
            prompt: "節足動物の体の表面を覆う丈夫なつくりを何といいますか。",
            answers: ["外骨格"],
            hint: "体を外側から支えるつくりです。",
          };
    case "mollusk-characteristics":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "軟体動物のあしには、節足動物のような節がありますか。",
            answers: ["ない", "ありません", "ないです"],
            hint: "節足動物との相違点です。",
          }
        : {
            ...common,
            prompt: "イカや貝が含まれる無脊椎動物の仲間を答えてください。",
            answers: ["軟体動物"],
            hint: "節足動物とは異なる仲間です。",
          };
    case "unknown-organism-classification": {
      const cases = [
        ["背骨がなく、外骨格と節のあるあしをもつ動物の仲間を答えてください。", "節足動物"],
        ["背骨があり、体表が羽毛で覆われる動物の仲間を答えてください。", "鳥類"],
        ["平行脈とひげ根をもつ被子植物の仲間を答えてください。", "単子葉類"],
      ] as const;
      const [prompt, answer] = cases[index % cases.length];
      return {
        ...common,
        prompt,
        answers: [answer],
        hint: "特徴を既知の分類基準へ順に対応させます。",
      };
    }
    case "classification-key":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "分類結果を説明するとき、結論とともに示すべきものを一語で答えてください。",
            answers: ["根拠", "特徴", "分類の根拠"],
            hint: "どの特徴が基準に当てはまったかを示します。",
          }
        : {
            ...common,
            prompt: "動物を脊椎動物と無脊椎動物へ最初に分ける基準を答えてください。",
            answers: ["背骨の有無", "背骨", "背骨があるかないか"],
            hint: "大きく二つに分けられる特徴です。",
          };
    default:
      return {
        ...common,
        prompt: "生物を分類するときに比べるものを一つ答えてください。",
        answers: ["共通点", "相違点", "特徴", "体のつくり"],
        hint: "観察できる特徴を使います。",
      };
  }
};

export const generateMiddleScience1LifeLessonExercises = (
  unitKey: string,
  lessonKey: string,
  count = 3,
) => {
  if (unitKey !== LIFE_UNIT_KEY || !lessonTitles[lessonKey]) return [];
  const difficulties: ExerciseDifficulty[] = ["basic", "applied", "challenge"];
  return Array.from({ length: count }, (_, index) =>
    make(lessonKey, difficulties[index % difficulties.length], index),
  );
};

export const generateMiddleScience1LifeUnitExercises = (unitKey: string, count = 8) => {
  if (unitKey !== LIFE_UNIT_KEY) return [];
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
