import type { ExerciseDifficulty } from "../../../math1/exercise-generators";
import type { GeneratedExercise } from "../../../math1/exercise-registry";

export const CELLS_UNIT_KEY = "cells-and-organization";
export const PLANT_UNIT_KEY = "plant-body-function";
export const ANIMAL_UNIT_KEY = "animal-body-function";

type QuestionSpec = {
  prompt: string;
  answers: string[];
  hint: string;
};

const lessonTitles: Record<string, string> = {
  "cells-common-structure": "生物の体が細胞からできていることを捉える",
  "plant-animal-cell-comparison": "植物細胞と動物細胞を比較する",
  "tissue-organ-organization": "細胞・組織・器官の階層を捉える",
  "leaf-structure-stomata": "葉のつくりと気孔を働きにつなげる",
  photosynthesis: "光合成で物質がつくられることを捉える",
  "respiration-photosynthesis": "光合成と呼吸の関係を比較する",
  transpiration: "蒸散と吸水を関連付ける",
  "root-stem-xylem": "根の吸水と道管の水の流れを捉える",
  "phloem-integrated-transport": "師管と植物全体の物質移動を統合する",
  "digestion-organs": "消化器官と消化の流れを捉える",
  "digestive-enzymes": "消化酵素の働きを捉える",
  "small-intestine-absorption": "小腸での吸収を捉える",
  "respiration-alveoli": "肺胞でのガス交換を捉える",
  "heart-blood-circulation": "心臓と血液循環で物質を運ぶ",
  "kidney-liver-excretion": "腎臓と肝臓の働きを排出につなげる",
  "stimulus-nervous-response": "刺激から反応までの神経の流れを捉える",
  "bones-muscles-movement": "骨格と筋肉で運動が起こることを捉える",
};

const questions: Record<string, QuestionSpec[]> = {
  "cells-common-structure": [
    {
      prompt: "生物の体をつくる基本単位を何といいますか。",
      answers: ["細胞"],
      hint: "植物も動物もこの小さな単位からできています。",
    },
    {
      prompt: "植物細胞と動物細胞の両方に見られる代表的な構造を一つ答えてください。",
      answers: ["核", "細胞質"],
      hint: "両方に共通する部分です。",
    },
    {
      prompt: "一つの細胞だけで体ができている生物を何生物といいますか。",
      answers: ["単細胞生物", "単細胞"],
      hint: "『単』は一つという意味です。",
    },
  ],
  "plant-animal-cell-comparison": [
    {
      prompt: "植物細胞にあり、動物細胞にはない外側の丈夫な構造を何といいますか。",
      answers: ["細胞壁"],
      hint: "細胞膜の外側にあります。",
    },
    {
      prompt: "植物細胞で光合成に関係する構造を何といいますか。",
      answers: ["葉緑体"],
      hint: "緑色に見えることのある構造です。",
    },
    {
      prompt: "核・細胞質・細胞壁・葉緑体が観察された細胞は、植物細胞と動物細胞のどちらですか。",
      answers: ["植物細胞", "植物"],
      hint: "細胞壁と葉緑体に注目します。",
    },
  ],
  "tissue-organ-organization": [
    {
      prompt: "同じような形や働きをもつ細胞の集まりを何といいますか。",
      answers: ["組織"],
      hint: "細胞と器官の間の階層です。",
    },
    {
      prompt: "複数の組織が組み合わさってできる体の部分を何といいますか。",
      answers: ["器官"],
      hint: "葉や心臓などが例です。",
    },
    {
      prompt: "細胞、組織、器官を小さい単位から順に『→』で答えてください。",
      answers: ["細胞→組織→器官", "細胞,組織,器官"],
      hint: "基本単位から順に並べます。",
    },
  ],
  "leaf-structure-stomata": [
    {
      prompt: "葉の表皮にあり、気体や水蒸気の出入りに関係する構造を何といいますか。",
      answers: ["気孔"],
      hint: "葉の小さな開口部です。",
    },
    {
      prompt: "光合成が行われる細胞内の構造を何といいますか。",
      answers: ["葉緑体"],
      hint: "植物細胞に特徴的です。",
    },
    {
      prompt: "葉の気孔から水蒸気が出る働きを何といいますか。",
      answers: ["蒸散"],
      hint: "水の移動にも関係します。",
    },
  ],
  photosynthesis: [
    {
      prompt: "光合成で取り入れられる代表的な気体は何ですか。",
      answers: ["二酸化炭素"],
      hint: "呼吸で出す気体と逆です。",
    },
    {
      prompt: "光合成で生じる代表的な気体は何ですか。",
      answers: ["酸素"],
      hint: "多くの生物の呼吸に使われます。",
    },
    {
      prompt: "光合成は細胞中のどの構造で行われますか。",
      answers: ["葉緑体"],
      hint: "葉の細胞に多く見られます。",
    },
  ],
  "respiration-photosynthesis": [
    {
      prompt: "植物の呼吸で取り入れる気体は何ですか。",
      answers: ["酸素"],
      hint: "動物の呼吸と同じ向きです。",
    },
    {
      prompt: "植物の呼吸で放出する気体は何ですか。",
      answers: ["二酸化炭素"],
      hint: "光合成では取り入れる気体です。",
    },
    {
      prompt: "光合成と呼吸の気体の出入りは、同じ向き・逆向きのどちらですか。",
      answers: ["逆向き", "逆"],
      hint: "酸素と二酸化炭素の出入りを比べます。",
    },
  ],
  transpiration: [
    {
      prompt: "植物の体から水が水蒸気として出る働きを何といいますか。",
      answers: ["蒸散"],
      hint: "主に葉で起こります。",
    },
    {
      prompt: "蒸散に大きく関係する葉の構造を何といいますか。",
      answers: ["気孔"],
      hint: "水蒸気の出口です。",
    },
    {
      prompt: "蒸散が盛んになると、根からの水の吸収は一般に増える・減るのどちらですか。",
      answers: ["増える", "増加する", "増加"],
      hint: "葉から失われる水を補います。",
    },
  ],
  "root-stem-xylem": [
    {
      prompt: "根から吸収した水を主に上へ運ぶ管を何といいますか。",
      answers: ["道管"],
      hint: "維管束の一部です。",
    },
    {
      prompt: "道管と師管を含む束を何といいますか。",
      answers: ["維管束"],
      hint: "植物の茎や根に見られます。",
    },
    {
      prompt: "根から葉へ上がる水は、道管と師管のどちらを主に通りますか。",
      answers: ["道管"],
      hint: "水の通り道です。",
    },
  ],
  "phloem-integrated-transport": [
    {
      prompt: "光合成でできた有機物を運ぶ管を何といいますか。",
      answers: ["師管"],
      hint: "道管と対になる通り道です。",
    },
    {
      prompt: "水を運ぶ道管に対して、有機物を運ぶのは何ですか。",
      answers: ["師管"],
      hint: "葉でつくられた物質を運びます。",
    },
    {
      prompt: "葉でつくられた有機物は、植物の他の部位へ運ばれる・葉にとどまるのどちらですか。",
      answers: ["運ばれる", "他の部位へ運ばれる"],
      hint: "成長する部分や根などでも利用されます。",
    },
  ],
  "digestion-organs": [
    {
      prompt: "胃の次に食物が進み、栄養分の吸収が主に行われる器官は何ですか。",
      answers: ["小腸"],
      hint: "消化と吸収が進む器官です。",
    },
    {
      prompt: "口から胃へ食物を運ぶ管を何といいますか。",
      answers: ["食道"],
      hint: "口と胃の間です。",
    },
    {
      prompt: "食物を吸収しやすい物質へ変える過程を何といいますか。",
      answers: ["消化"],
      hint: "吸収の前に行われます。",
    },
  ],
  "digestive-enzymes": [
    {
      prompt: "デンプンの消化に関係する代表的な消化酵素を何といいますか。",
      answers: ["アミラーゼ"],
      hint: "唾液などに含まれます。",
    },
    {
      prompt: "タンパク質の消化に関係する代表的な消化酵素を何といいますか。",
      answers: ["ペプシン"],
      hint: "胃で働く代表例です。",
    },
    {
      prompt: "消化酵素は、食物を吸収しやすい物質へ変える働きを助ける・妨げるのどちらですか。",
      answers: ["助ける", "促進する"],
      hint: "消化を進める働きです。",
    },
  ],
  "small-intestine-absorption": [
    {
      prompt: "栄養分の吸収が主に行われる器官は何ですか。",
      answers: ["小腸"],
      hint: "消化管の一部です。",
    },
    {
      prompt: "小腸の壁から栄養分が体内へ取り込まれることを何といいますか。",
      answers: ["吸収"],
      hint: "消化とは区別します。",
    },
    {
      prompt: "小腸で吸収された栄養分を全身へ運ぶ仕組みに大きく関わるのは何ですか。",
      answers: ["血液", "血液循環", "循環"],
      hint: "全身の物質輸送を担います。",
    },
  ],
  "respiration-alveoli": [
    {
      prompt: "肺胞から血液へ取り込まれる気体は何ですか。",
      answers: ["酸素"],
      hint: "細胞の呼吸に使われます。",
    },
    {
      prompt: "血液から肺胞へ移動して体外へ出される気体は何ですか。",
      answers: ["二酸化炭素"],
      hint: "細胞の活動で生じます。",
    },
    {
      prompt: "肺胞の周りを取り囲み、気体の交換に関わる細い血管を何といいますか。",
      answers: ["毛細血管"],
      hint: "非常に細い血管です。",
    },
  ],
  "heart-blood-circulation": [
    {
      prompt: "血液を全身へ送り出す中心となる器官は何ですか。",
      answers: ["心臓"],
      hint: "拍動する器官です。",
    },
    {
      prompt: "酸素の運搬に大きく関係する血液成分は何ですか。",
      answers: ["赤血球"],
      hint: "赤い色に関係する血球です。",
    },
    {
      prompt: "心臓の拍動によって血液が全身を回ることを何といいますか。",
      answers: ["血液循環", "循環"],
      hint: "物質の運搬につながります。",
    },
  ],
  "kidney-liver-excretion": [
    {
      prompt: "血液中の不要物の排出に関わる器官は何ですか。",
      answers: ["腎臓"],
      hint: "尿をつくる働きに関係します。",
    },
    {
      prompt: "栄養分の貯蔵や有害な物質の処理に関わる器官は何ですか。",
      answers: ["肝臓"],
      hint: "体内の物質を処理する大きな器官です。",
    },
    {
      prompt: "腎臓でこし取られた不要物を含み、体外へ排出される液体を何といいますか。",
      answers: ["尿"],
      hint: "排出される液体です。",
    },
  ],
  "stimulus-nervous-response": [
    {
      prompt: "感覚器官から中枢へ情報を伝える神経を何といいますか。",
      answers: ["感覚神経"],
      hint: "刺激の情報を中枢へ送ります。",
    },
    {
      prompt: "中枢から筋肉などへ命令を伝える神経を何といいますか。",
      answers: ["運動神経"],
      hint: "反応を起こす側へ情報を送ります。",
    },
    {
      prompt: "脳や脊髄など、情報を受け取って処理する部分をまとめて何といいますか。",
      answers: ["中枢", "中枢神経", "中枢神経系"],
      hint: "感覚神経と運動神経の間に位置します。",
    },
  ],
  "bones-muscles-movement": [
    {
      prompt: "骨と骨がつながり、曲げ伸ばしなどの運動が起こる部分を何といいますか。",
      answers: ["関節"],
      hint: "骨格のつなぎ目です。",
    },
    {
      prompt: "筋肉が力を出すとき、主に縮むことを何といいますか。",
      answers: ["収縮"],
      hint: "筋肉は縮むことで骨を引きます。",
    },
    {
      prompt: "体の運動は、骨格と何が協力して起こりますか。",
      answers: ["筋肉"],
      hint: "収縮する器官です。",
    },
  ],
};

const unitLessonKeys: Record<string, string[]> = {
  [CELLS_UNIT_KEY]: [
    "cells-common-structure",
    "plant-animal-cell-comparison",
    "tissue-organ-organization",
  ],
  [PLANT_UNIT_KEY]: [
    "leaf-structure-stomata",
    "photosynthesis",
    "respiration-photosynthesis",
    "transpiration",
    "root-stem-xylem",
    "phloem-integrated-transport",
  ],
  [ANIMAL_UNIT_KEY]: [
    "digestion-organs",
    "digestive-enzymes",
    "small-intestine-absorption",
    "respiration-alveoli",
    "heart-blood-circulation",
    "kidney-liver-excretion",
    "stimulus-nervous-response",
    "bones-muscles-movement",
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
    id: `middle-science2-life-${lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
    lessonKeys: [lessonKey],
    lessonTitles: [lessonTitles[lessonKey] ?? lessonKey],
    difficulty,
    answerMode: "text",
    ...selected,
  };
};

export const generateMiddleScience2LifeLessonExercises = (
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

export const generateMiddleScience2LifeUnitExercises = (unitKey: string, count = 8) => {
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
