import type { MiddleMathExercise, MiddleMathExerciseDifficulty } from "../grade1/exercise-registry";

type Generator = () => Omit<MiddleMathExercise, "id" | "lessonTitles" | "difficulty">;

const lessonKeys = [
  "census-sample-meaning",
  "population-sample",
  "random-sampling",
  "sample-proportion-estimate",
  "sample-count-estimate",
  "sampling-bias",
  "sampling-variability",
  "sample-survey-planning",
] as const;

const lessonTitles: Record<string, string> = {
  "census-sample-meaning": "全数調査と標本調査を使い分ける",
  "population-sample": "母集団と標本を区別する",
  "random-sampling": "無作為に標本を取り出す",
  "sample-proportion-estimate": "標本の割合から母集団の割合を推定する",
  "sample-count-estimate": "標本の割合から母集団の個数を推定する",
  "sampling-bias": "標本調査の方法を批判的に考察する",
  "sampling-variability": "標本による推定値のばらつきを理解する",
  "sample-survey-planning": "簡単な標本調査を計画し判断する",
};

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const generators: Record<string, Generator> = {
  "census-sample-meaning": () => ({
    prompt:
      "大量生産品の破壊検査で、一部を取り出して全体の傾向を推定する調査方法を答えてください。",
    answers: ["標本調査"],
    lessonKeys: ["census-sample-meaning"],
    hint: "全てを壊して調べることは現実的ではありません。",
  }),
  "population-sample": () => ({
    prompt: "全校生徒の傾向を調べるとき、結論を出したい全校生徒全体を何と呼びますか。",
    answers: ["母集団"],
    lessonKeys: ["population-sample"],
    hint: "推定したい対象全体の用語です。",
  }),
  "random-sampling": () => ({
    prompt: "名簿の全員に番号を付け、乱数で対象者を選ぶ方法を何と呼びますか。",
    answers: ["無作為抽出", "無作為に抽出", "無作為"],
    lessonKeys: ["random-sampling"],
    hint: "人の都合による選び方の偏りを減らします。",
  }),
  "sample-proportion-estimate": () => {
    const sample = randomInt(4, 10) * 20;
    const percent = randomInt(3, 8) * 10;
    const count = (sample * percent) / 100;
    return {
      prompt: `無作為標本${sample}人中${count}人が賛成でした。母集団の賛成割合をおよそ何%と推定しますか。`,
      answers: [String(percent), `${percent}%`, `${percent}％`],
      lessonKeys: ["sample-proportion-estimate"],
      hint: "標本の賛成数÷標本数を%にします。",
    };
  },
  "sample-count-estimate": () => {
    const total = randomInt(5, 20) * 100;
    const percent = randomInt(1, 8) * 10;
    const estimate = (total * percent) / 100;
    return {
      prompt: `母集団${total}人で、標本から該当割合を${percent}%と推定しました。該当人数をおよそ何人と見積もりますか。`,
      answers: [String(estimate), `${estimate}人`],
      lessonKeys: ["sample-count-estimate"],
      hint: "母集団の大きさ×推定割合です。",
    };
  },
  "sampling-bias": () => ({
    prompt:
      "学校全体の通学方法を調べるため自転車置き場にいる人だけを標本にすると、偏りが生じる可能性がありますか。",
    answers: ["はい", "ある", "あります"],
    lessonKeys: ["sampling-bias"],
    hint: "自転車通学者が選ばれやすくなります。",
  }),
  "sampling-variability": () => ({
    prompt: "同じ母集団から別々に無作為抽出した2標本の割合は必ず一致しますか。",
    answers: ["いいえ", "一致しない", "必ずしも一致しない"],
    lessonKeys: ["sampling-variability"],
    hint: "選ばれる対象は偶然によって変わります。",
  }),
  "sample-survey-planning": () => ({
    prompt: "標本調査で結果を推定した後、標本の選び方や偏りを振り返って検討することは必要ですか。",
    answers: ["はい", "必要", "必要です"],
    lessonKeys: ["sample-survey-planning"],
    hint: "調査方法と結果を合わせて批判的に考察します。",
  }),
};

const withMetadata = (
  generated: ReturnType<Generator>,
  id: string,
  difficulty: MiddleMathExerciseDifficulty,
): MiddleMathExercise => ({
  ...generated,
  id,
  difficulty,
  lessonTitles: generated.lessonKeys.map((key) => lessonTitles[key] ?? key),
});

export const generateMiddleMath3DataLessonExercises = (lessonKey: string, count = 3) => {
  const generator = generators[lessonKey];
  if (!generator) return [];
  const difficulties: MiddleMathExerciseDifficulty[] = ["basic", "applied", "challenge"];
  return Array.from({ length: count }, (_, index) =>
    withMetadata(generator(), `${lessonKey}-${Date.now()}-${index}`, difficulties[index % 3]),
  );
};

export const generateMiddleMath3DataUnitExercises = (unitKey: string, count = 8) => {
  if (unitKey !== "sample-survey") return [];
  const difficulties: MiddleMathExerciseDifficulty[] = [
    "basic",
    "basic",
    "basic",
    "applied",
    "applied",
    "challenge",
  ];
  const startIndex = randomInt(0, lessonKeys.length - 1);
  return Array.from({ length: count }, (_, index) => {
    const lessonKey = lessonKeys[(startIndex + index) % lessonKeys.length];
    return withMetadata(
      generators[lessonKey](),
      `${unitKey}-${Date.now()}-${index}`,
      difficulties[index % difficulties.length],
    );
  });
};
