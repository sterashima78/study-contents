import type { ExerciseDifficulty } from "../../../math1/exercise-generators";
import type { GeneratedExercise } from "../../../math1/exercise-registry";

export const MATTER_UNIT_KEY = "familiar-matter";

const lessonTitles: Record<string, string> = {
  "matter-properties-classification": "物質を性質で分類する",
  "organic-inorganic": "有機物と無機物を区別する",
  "metal-properties": "金属の共通する性質を捉える",
  density: "密度から物質を区別する",
  "gas-properties-collection": "気体の性質から捕集法を選ぶ",
  "solution-particle-model": "水溶液を粒子モデルで捉える",
  "mass-percent-concentration": "質量パーセント濃度を求める",
  solubility: "溶解度を温度と結び付ける",
  "solubility-curve-recrystallization": "溶解度曲線と再結晶を結び付ける",
  "states-particle-model": "固体・液体・気体を粒子モデルで捉える",
  "state-change-mass-volume": "状態変化と質量・体積を比べる",
  "melting-boiling-points": "融点・沸点から物質を捉える",
  distillation: "沸点の違いで混合物を分離する",
};

const lessonKeys = Object.keys(lessonTitles);
const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const makeBase = (lessonKey: string, difficulty: ExerciseDifficulty, index: number) => ({
  id: `middle-science1-matter-${lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
  lessonKeys: [lessonKey],
  lessonTitles: [lessonTitles[lessonKey] ?? lessonKey],
  difficulty,
  answerMode: "text" as const,
});

const makeMatterExercise = (
  lessonKey: string,
  difficulty: ExerciseDifficulty,
  index: number,
): GeneratedExercise => {
  const base = makeBase(lessonKey, difficulty, index);
  switch (lessonKey) {
    case "matter-properties-classification":
      return difficulty === "challenge"
        ? {
            ...base,
            prompt:
              "見た目が同じ二つの物質を区別するとき、観察や実験で比べるものを一語で答えてください。",
            answers: ["性質", "物質の性質"],
            hint: "溶け方や密度などをまとめた言葉です。",
          }
        : {
            ...base,
            prompt: "物体をつくっている材料そのものを何といいますか。",
            answers: ["物質"],
            hint: "形や用途ではなく材料を表す言葉です。",
          };
    case "organic-inorganic":
      return difficulty === "basic"
        ? {
            ...base,
            prompt: "砂糖は有機物と無機物のどちらに分類されますか。",
            answers: ["有機物"],
            hint: "加熱したとき焦げる代表例です。",
          }
        : {
            ...base,
            prompt: "食塩は有機物と無機物のどちらに分類されますか。",
            answers: ["無機物"],
            hint: "砂糖との加熱時の違いを考えます。",
          };
    case "metal-properties": {
      const prompts = [
        ["金属をたたくと薄く広がる性質を何といいますか。", "展性"],
        ["金属を引っ張ると細く延びる性質を何といいますか。", "延性"],
        ["金属を磨いたときに見られる特有の輝きを何といいますか。", "金属光沢"],
      ] as const;
      const [prompt, answer] = prompts[index % prompts.length];
      return { ...base, prompt, answers: [answer], hint: "金属に共通する性質を整理します。" };
    }
    case "density": {
      const volume = randomInt(2, 8) * 10;
      const density = randomInt(2, 5);
      const mass = volume * density;
      return {
        ...base,
        prompt: `質量${mass} g、体積${volume} cm³の物質の密度は何g/cm³ですか。`,
        answers: [String(density), `${density}g/cm3`, `${density}g/cm³`, `${density} g/cm³`],
        hint: "密度=質量÷体積です。",
      };
    }
    case "gas-properties-collection":
      return difficulty === "challenge"
        ? {
            ...base,
            prompt:
              "水に溶けやすい気体の捕集法を選ぶとき、水への溶けやすさのほかに空気に対する何を比べますか。",
            answers: ["密度", "気体の密度"],
            hint: "空気より重いか軽いかを比べます。",
          }
        : {
            ...base,
            prompt: "水に溶けにくい気体を、空気と混ざりにくく集める代表的な方法を答えてください。",
            answers: ["水上置換法"],
            hint: "水で空気を追い出して集めます。",
          };
    case "solution-particle-model": {
      const prompts = [
        ["水溶液で、水に溶ける側の物質を何といいますか。", "溶質"],
        ["水溶液で、物質を溶かす側の水を何といいますか。", "溶媒"],
      ] as const;
      const [prompt, answer] = prompts[index % prompts.length];
      return difficulty === "challenge"
        ? {
            ...base,
            prompt: "水溶液の中で溶質の粒子は全体にどのように広がっていますか。",
            answers: ["均一", "均一に", "均一に広がる"],
            hint: "場所によって濃さが変わらない状態です。",
          }
        : { ...base, prompt, answers: [answer], hint: "溶ける側と溶かす側を区別します。" };
    }
    case "mass-percent-concentration": {
      const solutionMass = randomInt(2, 6) * 50;
      const percent = randomInt(1, 4) * 5;
      const soluteMass = (solutionMass * percent) / 100;
      if (Number.isInteger(soluteMass)) {
        return {
          ...base,
          prompt: `溶質${soluteMass} gを含む質量${solutionMass} gの水溶液の質量パーセント濃度は何%ですか。`,
          answers: [String(percent), `${percent}%`],
          hint: "溶質の質量÷溶液の質量×100です。",
        };
      }
      return {
        ...base,
        prompt: "質量パーセント濃度の計算で、溶質の質量を割る分母は何の質量ですか。",
        answers: ["溶液", "溶液の質量"],
        hint: "溶質と溶媒を合わせた全体です。",
      };
    }
    case "solubility":
      return difficulty === "challenge"
        ? {
            ...base,
            prompt: "ある温度で限度まで溶質が溶けている水溶液を何といいますか。",
            answers: ["飽和水溶液"],
            hint: "それ以上同じ条件では溶けません。",
          }
        : {
            ...base,
            prompt: "一定量の水に溶ける物質の限度を何といいますか。",
            answers: ["溶解度"],
            hint: "物質や温度によって異なります。",
          };
    case "solubility-curve-recrystallization": {
      const low = randomInt(1, 4) * 5;
      const difference = randomInt(2, 6) * 5;
      const high = low + difference;
      return difficulty === "basic"
        ? {
            ...base,
            prompt:
              "溶解度の違いを利用して、少量の不純物を含む物質から純粋な物質を得る方法を何といいますか。",
            answers: ["再結晶"],
            hint: "温度変化などによる溶解度の差を使います。",
          }
        : {
            ...base,
            prompt: `100 gの水に高温で${high} g、低温で${low} gまで溶ける物質がある。高温で限度まで溶かして低温まで冷やすと何g析出しますか。`,
            answers: [String(difference), `${difference}g`, `${difference} g`],
            hint: "高温と低温の溶解度の差です。",
          };
    }
    case "states-particle-model":
      return difficulty === "challenge"
        ? {
            ...base,
            prompt: "状態変化で変わるのは物質の種類ですか、それとも粒子の並び方や運動ですか。",
            answers: ["粒子の並び方や運動", "粒子の並び方と運動", "粒子の配置や運動"],
            hint: "同じ物質のまま状態だけが変わります。",
          }
        : {
            ...base,
            prompt: "固体・液体・気体の三つの状態をまとめて何といいますか。",
            answers: ["三態", "物質の三態"],
            hint: "三つの状態を表す用語です。",
          };
    case "state-change-mass-volume":
      return difficulty === "challenge"
        ? {
            ...base,
            prompt: "状態変化で変化することがあるのは、質量と体積のどちらですか。",
            answers: ["体積"],
            hint: "粒子の間隔が変化します。",
          }
        : {
            ...base,
            prompt: "物質が外へ出入りしない条件で状態変化したとき、質量は変わりますか。",
            answers: ["変わらない", "変わりません"],
            hint: "粒子の数は変わりません。",
          };
    case "melting-boiling-points": {
      const prompts = [
        ["固体が液体へ変わる温度を何といいますか。", "融点"],
        ["液体が気体へ変わる境目の温度を何といいますか。", "沸点"],
      ] as const;
      const [prompt, answer] = prompts[index % prompts.length];
      return difficulty === "challenge"
        ? {
            ...base,
            prompt: "純粋な物質が状態変化している間、温度は一般にどうなりますか。",
            answers: ["一定", "一定になる", "変わらない"],
            hint: "加熱曲線の水平な部分に注目します。",
          }
        : { ...base, prompt, answers: [answer], hint: "融解と沸騰に対応する温度です。" };
    }
    case "distillation":
      return difficulty === "basic"
        ? {
            ...base,
            prompt: "沸点の違いを利用して混合物を分離する方法を何といいますか。",
            answers: ["蒸留"],
            hint: "気化と冷却を利用します。",
          }
        : {
            ...base,
            prompt:
              "蒸留で混合物の成分を分けるときに利用する、物質ごとに異なる温度を答えてください。",
            answers: ["沸点"],
            hint: "液体が気体へ変わる境目の温度です。",
          };
    default:
      return {
        ...base,
        prompt: "身の回りの物質で調べる性質を一つ答えてください。",
        answers: ["密度", "溶解度", "融点", "沸点"],
        hint: "物質を区別する手掛かりを思い出します。",
      };
  }
};

export const generateMiddleScience1MatterLessonExercises = (
  unitKey: string,
  lessonKey: string,
  count = 3,
) => {
  if (unitKey !== MATTER_UNIT_KEY || !lessonTitles[lessonKey]) return [];
  const difficulties: ExerciseDifficulty[] = ["basic", "applied", "challenge"];
  return Array.from({ length: count }, (_, index) =>
    makeMatterExercise(lessonKey, difficulties[index % difficulties.length], index),
  );
};

export const generateMiddleScience1MatterUnitExercises = (unitKey: string, count = 8) => {
  if (unitKey !== MATTER_UNIT_KEY) return [];
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
    return makeMatterExercise(lessonKey, difficulties[index % difficulties.length], index);
  });
};
