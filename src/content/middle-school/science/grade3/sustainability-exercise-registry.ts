import type { ExerciseDifficulty } from "../../../math1/exercise-generators";
import type { GeneratedExercise } from "../../../math1/exercise-registry";

const lessonTitles: Record<string, string> = {
  "energy-conversion-chain": "エネルギーの変換を連鎖で捉える",
  "energy-conservation-efficiency": "エネルギー保存と変換効率を区別する",
  "heat-transfer": "熱の伝わり方を3つに整理する",
  "energy-resources-comparison": "エネルギー資源を複数の観点で比較する",
  "radiation-basics": "放射線の性質と利用を概念で捉える",
  "science-technology-development": "科学技術の発展を原理と生活の変化で捉える",
  "natural-artificial-materials": "天然の物質と人工材料を利用目的から比べる",
  "plastics-properties": "プラスチックの性質と利用を関連付ける",
  "materials-reuse-recycling": "再使用・再生利用を物質の流れで考える",
  "material-choice-life-cycle": "材料をライフサイクル全体で比較する",
  "producers-consumers-decomposers": "生産者・消費者・分解者を関連付ける",
  "food-web-balance": "食物網と自然界のつり合いを捉える",
  "material-cycle-microbes": "微生物と物質循環を関連付ける",
  "environment-survey-data": "自然環境の調査資料から変化を読む",
  "climate-change-ecosystems": "気候変動と生態系への影響を資料から考える",
  "invasive-species-conservation": "外来生物と環境保全を影響の資料から考える",
  "regional-disaster-records": "地域の自然災害を記録と地形から分析する",
  "natural-benefits-and-risks": "自然の恵みと災害を同じ地域で捉える",
  "environmental-tech-tradeoffs": "環境保全と科学技術のトレードオフを整理する",
  "sustainability-evidence-comparison": "持続可能性を複数の根拠で比較する",
  "sustainable-society-decision": "科学的根拠から持続可能な社会の提案を組み立てる",
};

const unitLessonKeys: Record<string, string[]> = {
  "energy-resources-technology": [
    "energy-conversion-chain",
    "energy-conservation-efficiency",
    "heat-transfer",
    "energy-resources-comparison",
    "radiation-basics",
    "science-technology-development",
  ],
  "materials-resource-use": [
    "natural-artificial-materials",
    "plastics-properties",
    "materials-reuse-recycling",
    "material-choice-life-cycle",
  ],
  "ecosystem-environment": [
    "producers-consumers-decomposers",
    "food-web-balance",
    "material-cycle-microbes",
    "environment-survey-data",
    "climate-change-ecosystems",
    "invasive-species-conservation",
  ],
  "nature-disasters-sustainability": [
    "regional-disaster-records",
    "natural-benefits-and-risks",
    "environmental-tech-tradeoffs",
    "sustainability-evidence-comparison",
    "sustainable-society-decision",
  ],
};

type ExerciseSpec = {
  prompt: string;
  answers: string[];
  hint: string;
};

const questionBank: Record<string, [ExerciseSpec, ExerciseSpec, ExerciseSpec]> = {
  "energy-conversion-chain": [
    {
      prompt: "電池に蓄えられたエネルギーは代表的に何エネルギーですか。",
      answers: ["化学エネルギー", "化学"],
      hint: "電池内部の物質の変化と関係します。",
    },
    {
      prompt: "モーターは電気エネルギーを主に何エネルギーへ変換しますか。",
      answers: ["運動エネルギー", "運動"],
      hint: "回転運動として取り出します。",
    },
    {
      prompt: "エネルギー変換では目的の出力以外に熱や音へ変わることがある・ないのどちらですか。",
      answers: ["ある", "変わることがある"],
      hint: "機器が温かくなったり音が出たりします。",
    },
  ],
  "energy-conservation-efficiency": [
    {
      prompt: "入力100 Jのうち目的に75 J利用できた変換効率は何%ですか。",
      answers: ["75", "75%", "75％"],
      hint: "75÷100×100です。",
    },
    {
      prompt: "変換効率が80%でも、エネルギーの総量は保存される・消滅するのどちらですか。",
      answers: ["保存される", "保存"],
      hint: "目的以外の熱や音も含めます。",
    },
    {
      prompt: "入力200 Jのうち目的に120 J利用できた変換効率は何%ですか。",
      answers: ["60", "60%", "60％"],
      hint: "120÷200×100を計算します。",
    },
  ],
  "heat-transfer": [
    {
      prompt: "金属内部を隣り合う部分へ熱が伝わる主な仕組みを何といいますか。",
      answers: ["熱伝導", "伝導"],
      hint: "物質全体が移動するわけではありません。",
    },
    {
      prompt: "液体や気体そのものが移動して熱を運ぶ仕組みを何といいますか。",
      answers: ["対流"],
      hint: "温度差で流れができます。",
    },
    {
      prompt: "物質がほとんどない空間を越えて熱が伝わる代表的な仕組みを何といいますか。",
      answers: ["放射"],
      hint: "太陽から地球への熱伝達を考えます。",
    },
  ],
  "energy-resources-comparison": [
    {
      prompt: "発電方法を比べるとき、選択肢ごとに同じ何を使って比較することが重要ですか。",
      answers: ["観点", "比較観点", "評価軸"],
      hint: "安定性・資源・環境影響などです。",
    },
    {
      prompt: "太陽光発電の出力に影響する代表的な自然条件を一つ答えてください。",
      answers: ["日射量", "日光", "天候"],
      hint: "太陽から受ける光に関係します。",
    },
    {
      prompt:
        "エネルギー資源は一つの利点だけで絶対評価する・複数の条件で比較するのどちらが適切ですか。",
      answers: ["複数の条件で比較する", "複数の条件", "比較する"],
      hint: "選択肢には異なる長所と課題があります。",
    },
  ],
  "radiation-basics": [
    {
      prompt: "放射線は自然界にも存在する・人工施設にだけ存在するのどちらですか。",
      answers: ["自然界にも存在する", "自然界にも存在", "自然界"],
      hint: "宇宙や地面などにも由来があります。",
    },
    {
      prompt: "放射線の性質は医療や検査などに利用される・一切利用されないのどちらですか。",
      answers: ["利用される", "利用する"],
      hint: "専門的な設備で利用されています。",
    },
    {
      prompt: "放射線を実際に扱う際は専門的な管理が必要・不要のどちらですか。",
      answers: ["必要", "必要である", "専門的な管理が必要"],
      hint: "この教材では実物を扱う手順は扱いません。",
    },
  ],
  "science-technology-development": [
    {
      prompt: "技術を支える科学の知識を、原理・広告から選んでください。",
      answers: ["原理"],
      hint: "自然の規則性や法則を応用します。",
    },
    {
      prompt: "科学技術の評価では有用性だけ・有用性と課題の両方のどちらを確認しますか。",
      answers: ["有用性と課題の両方", "両方"],
      hint: "生活への貢献と影響を併せて見ます。",
    },
    {
      prompt: "科学的な原理が機器や材料へ応用されることを、科学と何のつながりとして捉えますか。",
      answers: ["技術", "科学技術"],
      hint: "科学の知識を社会で利用する側です。",
    },
  ],
  "natural-artificial-materials": [
    {
      prompt: "木材は代表的に天然由来・人工合成のどちらの材料ですか。",
      answers: ["天然由来", "天然"],
      hint: "自然界の生物由来です。",
    },
    {
      prompt: "材料を選ぶとき、用途と対応させて比べるものは材料の何ですか。",
      answers: ["性質", "特性"],
      hint: "強さ、軽さ、加工性などです。",
    },
    {
      prompt: "材料は天然か人工かだけで選ぶ・用途に必要な性質で比較するのどちらが適切ですか。",
      answers: ["用途に必要な性質で比較する", "性質で比較する", "比較する"],
      hint: "目的との対応が重要です。",
    },
  ],
  "plastics-properties": [
    {
      prompt: "プラスチックには一種類だけ・多くの種類があるのどちらですか。",
      answers: ["多くの種類がある", "多くの種類", "多い"],
      hint: "種類ごとに性質が異なります。",
    },
    {
      prompt: "電気コードの被覆には、電気を通しやすい・通しにくい性質の材料が適しますか。",
      answers: ["通しにくい", "電気を通しにくい"],
      hint: "導線の外側を覆う目的を考えます。",
    },
    {
      prompt: "プラスチックの耐熱性や硬さは種類によって異なる・全て同じのどちらですか。",
      answers: ["種類によって異なる", "異なる"],
      hint: "一括りに同じ性質とは考えません。",
    },
  ],
  "materials-reuse-recycling": [
    {
      prompt: "製品を形を保ったまま再び使うことを何といいますか。",
      answers: ["再使用", "リユース"],
      hint: "材料へ戻さず製品として使います。",
    },
    {
      prompt: "廃製品を材料として加工して再び利用することを何といいますか。",
      answers: ["再生利用", "リサイクル"],
      hint: "材料として再利用します。",
    },
    {
      prompt:
        "資源利用の方法を比較するとき、回収や加工に必要な条件も考える・考えないのどちらですか。",
      answers: ["考える", "考慮する"],
      hint: "再利用そのもの以外の工程もあります。",
    },
  ],
  "material-choice-life-cycle": [
    {
      prompt: "原料採取から製造・使用・廃棄までの一連の流れを何と呼ぶことがありますか。",
      answers: ["ライフサイクル"],
      hint: "製品の一生に相当する考え方です。",
    },
    {
      prompt: "材料を比較するとき、評価する範囲はそろえる・ばらばらにするのどちらが適切ですか。",
      answers: ["そろえる", "同じにする"],
      hint: "製造だけと全期間では公平に比べられません。",
    },
    {
      prompt:
        "製造時の負荷が小さいという一つの値だけで、材料の全期間の負荷を断定できる・できないのどちらですか。",
      answers: ["できない", "断定できない"],
      hint: "使用期間や回収も確認します。",
    },
  ],
  "producers-consumers-decomposers": [
    {
      prompt: "光合成などで有機物をつくる生物を生態系で何といいますか。",
      answers: ["生産者"],
      hint: "植物などが代表例です。",
    },
    {
      prompt: "他の生物を食べて有機物を得る生物を何といいますか。",
      answers: ["消費者"],
      hint: "動物などが代表例です。",
    },
    {
      prompt: "遺体や排出物の分解に関わる生物を何といいますか。",
      answers: ["分解者"],
      hint: "菌類や細菌などが関わります。",
    },
  ],
  "food-web-balance": [
    {
      prompt: "複数の食う・食われる関係が網のようにつながったものを何といいますか。",
      answers: ["食物網"],
      hint: "一方向の一本だけではありません。",
    },
    {
      prompt: "自然界のつり合いは個体数が常に完全一定・変動しながら保たれるのどちらですか。",
      answers: ["変動しながら保たれる", "変動する"],
      hint: "相互作用の中で増減します。",
    },
    {
      prompt:
        "ある一種が減少すると、その種と食物関係をもつ複数の生物へ影響し得る・影響しないのどちらですか。",
      answers: ["影響し得る", "影響する"],
      hint: "食物網のつながりを追います。",
    },
  ],
  "material-cycle-microbes": [
    {
      prompt: "落ち葉や遺体の分解に関わる生物群の一つを答えてください。",
      answers: ["微生物", "分解者"],
      hint: "土壌中の細菌や菌類などです。",
    },
    {
      prompt: "生態系で物質は循環する・一方向にだけ流れるのどちらですか。",
      answers: ["循環する", "循環"],
      hint: "環境へ戻り再び利用されます。",
    },
    {
      prompt: "エネルギーと物質を比べたとき、物質は生物と環境の間を何しますか。",
      answers: ["循環する", "循環"],
      hint: "分解者の働きが重要です。",
    },
  ],
  "environment-survey-data": [
    {
      prompt: "環境の時系列変化を比べるとき、調査方法はそろえる・毎回変えるのどちらが適切ですか。",
      answers: ["そろえる", "同じにする"],
      hint: "比較条件を同じにします。",
    },
    {
      prompt:
        "二つの値が同時に変化しただけで、必ず原因関係があると言える・言えないのどちらですか。",
      answers: ["言えない", "断定できない"],
      hint: "相関と因果を区別します。",
    },
    {
      prompt: "原因を考察するときは他の要因や追加データを確認する・確認しないのどちらですか。",
      answers: ["確認する", "調べる"],
      hint: "一つの関係だけで断定しません。",
    },
  ],
  "climate-change-ecosystems": [
    {
      prompt: "気候は一日の天気・長期間の統計的な傾向のどちらで捉えますか。",
      answers: ["長期間の統計的な傾向", "長期間", "統計的な傾向"],
      hint: "短期の一現象とは区別します。",
    },
    {
      prompt: "生物分布の変化を気候だけが原因と即断してよい・他要因も検討するのどちらですか。",
      answers: ["他要因も検討する", "他要因も検討", "検討する"],
      hint: "土地利用など他の環境条件もあります。",
    },
    {
      prompt: "気候変動を考えるには長期資料・一日だけの記録のどちらを優先しますか。",
      answers: ["長期資料", "長期間の資料"],
      hint: "統計的な傾向を確認します。",
    },
  ],
  "invasive-species-conservation": [
    {
      prompt: "外来生物は全て同じ大きさの影響を与える・影響は種や環境で異なるのどちらですか。",
      answers: ["影響は種や環境で異なる", "異なる"],
      hint: "実際の調査資料を確認します。",
    },
    {
      prompt: "外来生物対策を考えるとき基にするのは具体的な調査資料・印象だけのどちらですか。",
      answers: ["具体的な調査資料", "調査資料", "資料"],
      hint: "在来種への影響などを確認します。",
    },
    {
      prompt:
        "外来生物Aの増加と在来種Bの減少が同時に起きただけで、Aが原因と断定できる・できないのどちらですか。",
      answers: ["できない", "断定できない"],
      hint: "捕食・競争や他の環境変化を調べます。",
    },
  ],
  "regional-disaster-records": [
    {
      prompt:
        "地域災害の分析では、過去記録と地形など複数資料を関連付ける・一つだけ見るのどちらが適切ですか。",
      answers: ["複数資料を関連付ける", "関連付ける", "複数資料"],
      hint: "空間と時間の情報を重ねます。",
    },
    {
      prompt: "現在の避難判断で優先するのは静的教材・最新の公的情報のどちらですか。",
      answers: ["最新の公的情報", "公的情報"],
      hint: "気象庁や自治体などの最新情報です。",
    },
    {
      prompt:
        "過去の災害記録は地域の自然条件を理解する資料として使う・現在の安全を保証するのどちらですか。",
      answers: ["理解する資料として使う", "資料として使う"],
      hint: "現在の状況は別途最新情報を確認します。",
    },
  ],
  "natural-benefits-and-risks": [
    {
      prompt: "自然現象は恵みだけ・恵みと災害の両面をもつことがあるのどちらですか。",
      answers: ["恵みと災害の両面をもつことがある", "両面"],
      hint: "火山や河川などを考えます。",
    },
    {
      prompt: "火山地域で利用される自然エネルギーの例を一つ答えてください。",
      answers: ["地熱", "地熱エネルギー"],
      hint: "地下の熱を利用します。",
    },
    {
      prompt:
        "自然と人間の関係は良い・悪いだけで決める・条件ごとの恵みとリスクを比べるのどちらが適切ですか。",
      answers: ["条件ごとの恵みとリスクを比べる", "比べる", "両面を見る"],
      hint: "同じ自然現象に複数の側面があります。",
    },
  ],
  "environmental-tech-tradeoffs": [
    {
      prompt: "一方を改善すると別の条件に課題が生じる関係を何と呼ぶことがありますか。",
      answers: ["トレードオフ"],
      hint: "複数条件を同時に満たす難しさです。",
    },
    {
      prompt: "環境技術を評価するとき、利点だけ・利点と課題の両方のどちらを確認しますか。",
      answers: ["利点と課題の両方", "両方"],
      hint: "製造・使用・廃棄なども見ます。",
    },
    {
      prompt:
        "省エネ効果だけでなく製造時の資源利用も調べることは、多面的な評価・一面的な評価のどちらですか。",
      answers: ["多面的な評価", "多面的"],
      hint: "複数の段階と観点を使っています。",
    },
  ],
  "sustainability-evidence-comparison": [
    {
      prompt: "科学的な比較では選択肢ごとに同じ・異なる評価指標を使うのどちらが基本ですか。",
      answers: ["同じ", "同じ評価指標"],
      hint: "公平に比較します。",
    },
    {
      prompt: "データとして確認できる事実と、何を重視するかという何を区別しますか。",
      answers: ["価値判断", "価値", "判断"],
      hint: "科学的事実と優先順位は同じではありません。",
    },
    {
      prompt:
        "持続可能性は環境負荷一つだけ・資源や安全性など複数指標で比べるのどちらが適切ですか。",
      answers: ["複数指標で比べる", "複数指標", "複数の指標"],
      hint: "一つの評価軸だけに限定しません。",
    },
  ],
  "sustainable-society-decision": [
    {
      prompt:
        "持続可能な社会の提案では、一つの領域だけ・複数領域の根拠を統合するのどちらが適切ですか。",
      answers: ["複数領域の根拠を統合する", "複数領域", "統合する"],
      hint: "エネルギー・物質・生命・地球を横断します。",
    },
    {
      prompt: "提案では結論だけでなく、データの限界や追加で必要な何を示すとよいですか。",
      answers: ["情報", "データ", "資料"],
      hint: "何がまだ分からないかも明示します。",
    },
    {
      prompt: "科学は社会の意思決定に唯一の答えを自動で決める・判断材料を提供するのどちらですか。",
      answers: ["判断材料を提供する", "判断材料", "材料を提供する"],
      hint: "社会では複数の価値も関係します。",
    },
  ],
};

const difficulties: ExerciseDifficulty[] = ["basic", "applied", "challenge"];

const makeExercise = (
  lessonKey: string,
  difficulty: ExerciseDifficulty,
  index: number,
): GeneratedExercise => {
  const specs = questionBank[lessonKey];
  if (!specs) throw new Error(`Unknown middle science 3 sustainability lesson: ${lessonKey}`);
  const difficultyIndex = difficulties.indexOf(difficulty);
  const spec = specs[difficultyIndex >= 0 ? difficultyIndex : index % specs.length];
  return {
    id: `middle-science3-sustainability-${lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
    lessonKeys: [lessonKey],
    lessonTitles: [lessonTitles[lessonKey] ?? lessonKey],
    difficulty,
    answerMode: "text",
    prompt: spec.prompt,
    answers: spec.answers,
    hint: spec.hint,
  };
};

export const generateMiddleScience3SustainabilityLessonExercises = (
  unitKey: string,
  lessonKey: string,
  count = 3,
) => {
  const keys = unitLessonKeys[unitKey];
  if (!keys?.includes(lessonKey)) return [];
  return Array.from({ length: count }, (_, index) =>
    makeExercise(lessonKey, difficulties[index % difficulties.length], index),
  );
};

export const generateMiddleScience3SustainabilityUnitExercises = (unitKey: string, count = 8) => {
  const keys = unitLessonKeys[unitKey];
  if (!keys?.length) return [];
  const start = Math.floor(Math.random() * keys.length);
  return Array.from({ length: count }, (_, index) => {
    const lessonKey = keys[(start + index) % keys.length];
    return makeExercise(lessonKey, difficulties[index % difficulties.length], index);
  });
};
