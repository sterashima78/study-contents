import type { ExerciseDifficulty } from "../../../math1/exercise-generators";
import type { GeneratedExercise } from "../../../math1/exercise-registry";

const lessonTitles: Record<string, string> = {
  "cell-division-sequence": "体細胞分裂の順序を模式図から読む",
  "chromosome-copy-distribution": "染色体の複製と分配を捉える",
  "cell-division-growth": "細胞分裂と生物の成長を関連付ける",
  "asexual-reproduction": "無性生殖の特徴を捉える",
  "sexual-reproduction-fertilization": "有性生殖と受精を捉える",
  "meiosis-gametes": "減数分裂と生殖細胞を関連付ける",
  "reproduction-inheritance": "生殖の違いと形質の受け継がれ方を比べる",
  "traits-genes-chromosomes": "形質・遺伝子・染色体を関連付ける",
  "mendel-f1": "交配資料から子の形質の規則性を読む",
  "mendel-f2": "孫の世代の比から遺伝の規則性を読む",
  "segregation-law": "分離の法則を遺伝子モデルで説明する",
  "genes-dna": "遺伝子とDNAの関係を捉える",
  "fossils-evolution": "化石から生物の長期的な変化を考える",
  "homologous-organs": "相同器官から生物のつながりを考える",
  "vertebrate-evolution": "脊椎動物の共通性から進化を説明する",
};

const unitLessonKeys: Record<string, string[]> = {
  "growth-reproduction": [
    "cell-division-sequence",
    "chromosome-copy-distribution",
    "cell-division-growth",
    "asexual-reproduction",
    "sexual-reproduction-fertilization",
    "meiosis-gametes",
    "reproduction-inheritance",
  ],
  "heredity-genes": [
    "traits-genes-chromosomes",
    "mendel-f1",
    "mendel-f2",
    "segregation-law",
    "genes-dna",
  ],
  "diversity-evolution": ["fossils-evolution", "homologous-organs", "vertebrate-evolution"],
};

type ExerciseSpec = {
  prompt: string;
  answers: string[];
  hint: string;
};

const questionBank: Record<string, ExerciseSpec[]> = {
  "cell-division-sequence": [
    {
      prompt: "体細胞分裂で、染色体が中央に並んだ後に起こる代表的な変化は何ですか。",
      answers: ["両側へ分かれる", "二つの側へ分かれる", "2つの側へ分かれる", "両側に分かれる"],
      hint: "中央に集まった状態の次を考えます。",
    },
    {
      prompt: "複数の分裂像を時間の流れに沿って並べるとき見いだす性質を何といいますか。",
      answers: ["順序性", "順序"],
      hint: "分裂には決まった流れがあります。",
    },
    {
      prompt: "体細胞分裂の最後には、一つの細胞から基本的にいくつの細胞ができますか。",
      answers: ["2", "2つ", "二つ"],
      hint: "二つの核ができた後を考えます。",
    },
  ],
  "chromosome-copy-distribution": [
    {
      prompt: "体細胞分裂の前に染色体は何されますか。",
      answers: ["複製", "複製される"],
      hint: "二つの細胞へ同じ情報を渡す準備です。",
    },
    {
      prompt: "複製された染色体は、分裂後の二つの細胞へ等しく・不均等にのどちらで分配されますか。",
      answers: ["等しく", "等しく分配される"],
      hint: "二つの細胞が同質になることと関係します。",
    },
    {
      prompt: "体細胞の染色体数が6本なら、通常の体細胞分裂後の各細胞は何本ですか。",
      answers: ["6", "6本"],
      hint: "体細胞分裂では染色体数が保たれます。",
    },
  ],
  "cell-division-growth": [
    {
      prompt: "多細胞生物の成長で細胞数を増やす分裂を何といいますか。",
      answers: ["体細胞分裂"],
      hint: "生殖細胞をつくる分裂ではありません。",
    },
    {
      prompt: "分裂後の細胞自体が長くなることを何といいますか。",
      answers: ["伸長", "細胞の伸長"],
      hint: "細胞数の増加とは別の成長要因です。",
    },
    {
      prompt: "植物の根端で分裂像が多い部分は、成長と関係が深い・浅いのどちらですか。",
      answers: ["深い", "関係が深い"],
      hint: "細胞数が増える場所です。",
    },
  ],
  "asexual-reproduction": [
    {
      prompt: "受精を伴わずに殖える生殖を何といいますか。",
      answers: ["無性生殖"],
      hint: "一個体から殖える場合があります。",
    },
    {
      prompt:
        "ジャガイモのいもやイチゴのほふく茎など、体の一部から殖える無性生殖を何といいますか。",
      answers: ["栄養生殖"],
      hint: "植物の栄養器官を利用します。",
    },
    {
      prompt: "無性生殖では、教材上の基本的な場合、子は親と同じ・異なる遺伝情報を受け継ぎますか。",
      answers: ["同じ", "同じ遺伝情報"],
      hint: "主に体細胞分裂で殖えます。",
    },
  ],
  "sexual-reproduction-fertilization": [
    {
      prompt: "生殖細胞どうしが合体することを何といいますか。",
      answers: ["受精"],
      hint: "新しい個体が生じる出発点です。",
    },
    {
      prompt: "受精によってできる最初の一個の細胞を何といいますか。",
      answers: ["受精卵"],
      hint: "この細胞が分裂を繰り返します。",
    },
    {
      prompt: "受精によって新しい個体が生じる殖え方を何といいますか。",
      answers: ["有性生殖"],
      hint: "無性生殖と対比します。",
    },
  ],
  "meiosis-gametes": [
    {
      prompt: "生殖細胞をつくるとき、染色体数を半分にする分裂を何といいますか。",
      answers: ["減数分裂"],
      hint: "有性生殖に関係する分裂です。",
    },
    {
      prompt: "体細胞の染色体数が12本なら、生殖細胞では何本ですか。",
      answers: ["6", "6本"],
      hint: "減数分裂で半分になります。",
    },
    {
      prompt:
        "二つの生殖細胞が合体すると、受精卵の染色体数は体細胞と同じ・半分のどちらになりますか。",
      answers: ["同じ", "体細胞と同じ"],
      hint: "半分ずつの二組が合わさります。",
    },
  ],
  "reproduction-inheritance": [
    {
      prompt: "両親由来の染色体の組合せを受け継ぐのは有性生殖・無性生殖のどちらですか。",
      answers: ["有性生殖"],
      hint: "減数分裂と受精を伴います。",
    },
    {
      prompt: "親と基本的に同じ遺伝情報を受け継ぐ殖え方は何ですか。",
      answers: ["無性生殖"],
      hint: "主に体細胞分裂で殖えます。",
    },
    {
      prompt:
        "有性生殖で生じる複数の子の形質は、必ず全て同じになる・同じとは限らないのどちらですか。",
      answers: ["同じとは限らない", "必ず同じではない"],
      hint: "両親由来の染色体の組合せを考えます。",
    },
  ],
  "traits-genes-chromosomes": [
    {
      prompt: "生物がもつ形や性質などの特徴を何といいますか。",
      answers: ["形質"],
      hint: "遺伝の規則性を調べるとき一つに絞る特徴です。",
    },
    {
      prompt: "親の形質が子へ伝わる現象を何といいますか。",
      answers: ["遺伝"],
      hint: "世代を越えた形質の伝わりです。",
    },
    {
      prompt: "遺伝子は主に何にありますか。",
      answers: ["染色体", "染色体上"],
      hint: "細胞分裂で観察する構造です。",
    },
  ],
  "mendel-f1": [
    {
      prompt: "交配結果から遺伝の規則性を調べるとき、まず一つに絞る特徴を何といいますか。",
      answers: ["形質"],
      hint: "複数の特徴を同時に混ぜないようにします。",
    },
    {
      prompt:
        "丸い種子の系統としわの種子の系統を交配し、子が全て丸だった。子の世代に現れた形質は何ですか。",
      answers: ["丸", "丸い種子", "丸い形質"],
      hint: "提示された結果をそのまま読みます。",
    },
    {
      prompt: "遺伝の規則性を調べる資料では、親・子・孫を混ぜず何ごとに整理しますか。",
      answers: ["世代", "世代ごと"],
      hint: "時間的な順序を保って比較します。",
    },
  ],
  "mendel-f2": [
    {
      prompt: "典型的な一遺伝子のモデルで、孫の二つの形質はおよそ何対何に分かれますか。",
      answers: ["3対1", "3:1", "3：1"],
      hint: "一方が三、もう一方が一の目安です。",
    },
    {
      prompt:
        "実際の個体数が有限なら、結果は理論の3対1に必ず完全一致する・ずれることがあるのどちらですか。",
      answers: ["ずれることがある", "ずれる"],
      hint: "確率的な結果にはばらつきがあります。",
    },
    {
      prompt:
        "孫80個体で形質Aが61、形質Bが19だった。3対1の傾向と大きく矛盾する・しないのどちらですか。",
      answers: ["大きく矛盾しない", "矛盾しない", "しない"],
      hint: "60対20なら3対1です。",
    },
  ],
  "segregation-law": [
    {
      prompt: "対になった遺伝子が生殖細胞をつくるときに分かれて入る規則を何といいますか。",
      answers: ["分離の法則"],
      hint: "メンデルの交配結果を説明する規則です。",
    },
    {
      prompt: "遺伝子の組がAaの個体からできる生殖細胞はAまたは何をもちますか。",
      answers: ["a", "ａ"],
      hint: "対が分かれます。",
    },
    {
      prompt: "Aaどうしの交配でできる遺伝子の組合せをAA・Aa・aaから一つ答えてください。",
      answers: ["AA", "Aa", "aa", "ＡＡ", "Ａａ", "ａａ"],
      hint: "Aまたはaを一つずつ受け取ります。",
    },
  ],
  "genes-dna": [
    {
      prompt: "遺伝子の本体である物質をアルファベットで答えてください。",
      answers: ["DNA", "dna"],
      hint: "三文字の略称です。",
    },
    {
      prompt: "遺伝子がある構造を何といいますか。",
      answers: ["染色体", "染色体上"],
      hint: "核内で細胞分裂時に観察される構造です。",
    },
    {
      prompt:
        "DNAの分子構造やタンパク質合成の詳細は、この中学校教材で扱う・扱わないのどちらですか。",
      answers: ["扱わない", "扱わない範囲"],
      hint: "高校内容との境界を確認します。",
    },
  ],
  "fossils-evolution": [
    {
      prompt: "過去の生物の体の特徴を調べる重要な資料を何といいますか。",
      answers: ["化石"],
      hint: "地層から見つかります。",
    },
    {
      prompt: "生物が世代を重ねる長い時間の中で変化してきたことを何といいますか。",
      answers: ["進化"],
      hint: "一個体の変身ではありません。",
    },
    {
      prompt:
        "進化は一個体が目的をもって生きている間に変身することだ、と言える・言えないのどちらですか。",
      answers: ["言えない", "いえない"],
      hint: "世代を重ねる集団の長期的変化です。",
    },
  ],
  "homologous-organs": [
    {
      prompt: "起源が同じと考えられ、基本構造が対応する器官を何といいますか。",
      answers: ["相同器官"],
      hint: "働きが同じかどうかではなく基本構造を比べます。",
    },
    {
      prompt: "コウモリの翼とクジラのひれを相同器官として比べるとき、特に何の並び方を見ますか。",
      answers: ["骨", "骨格", "骨の並び方"],
      hint: "外形ではなく内部の基本構造です。",
    },
    {
      prompt: "相同器官は生物の共通の起源を考える証拠の一つになる・ならないのどちらですか。",
      answers: ["なる", "証拠になる"],
      hint: "基本構造の対応を考えます。",
    },
  ],
  "vertebrate-evolution": [
    {
      prompt: "魚類・両生類・爬虫類・鳥類・哺乳類に共通する代表的な構造は何ですか。",
      answers: ["脊椎", "背骨"],
      hint: "脊椎動物という名前の由来です。",
    },
    {
      prompt:
        "現存する魚類から現存する哺乳類へ一直線に進化した、と考えるのは適切・不適切のどちらですか。",
      answers: ["不適切", "適切ではない"],
      hint: "共通の祖先から枝分かれした系統として捉えます。",
    },
    {
      prompt: "遺伝子に変化が起きると、形質が変化することがある・ないのどちらですか。",
      answers: ["ある", "変化することがある"],
      hint: "学習指導要領では進化との関連で触れる事項です。",
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
    id: `middle-science3-life-${lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
    lessonKeys: [lessonKey],
    lessonTitles: [lessonTitles[lessonKey] ?? lessonKey],
    difficulty,
    answerMode: "text",
    prompt: spec.prompt,
    answers: spec.answers,
    hint: spec.hint,
  };
};

export const generateMiddleScience3LifeLessonExercises = (
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

export const generateMiddleScience3LifeUnitExercises = (
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
