import type { MiddleMathExercise, MiddleMathExerciseDifficulty } from "./exercise-registry";

type Generator = () => Omit<MiddleMathExercise, "id" | "lessonTitles" | "difficulty">;

const dataDistributionLessonKeys = [
  "frequency-distribution-range",
  "histogram-reading",
  "representative-values-distribution",
  "relative-frequency",
  "cumulative-frequency",
  "data-distribution-critique",
] as const;

const experimentalProbabilityLessonKeys = [
  "experimental-probability",
  "probability-from-observations",
] as const;

const unitLessonKeys: Record<string, readonly string[]> = {
  "data-distribution": dataDistributionLessonKeys,
  "experimental-probability": experimentalProbabilityLessonKeys,
};

const lessonTitles: Record<string, string> = {
  "frequency-distribution-range": "範囲・階級・度数を整理する",
  "histogram-reading": "ヒストグラムを作り、分布を読む",
  "representative-values-distribution": "代表値を分布と結び付ける",
  "relative-frequency": "相対度数で割合を比べる",
  "cumulative-frequency": "累積度数・累積相対度数を読む",
  "data-distribution-critique": "分布を批判的に考察する",
  "experimental-probability": "多数回の試行から確率を捉える",
  "probability-from-observations": "観察結果から起こりやすさを予測する",
};

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const generators: Record<string, Generator> = {
  "frequency-distribution-range": () => {
    const minimum = randomInt(5, 20);
    const range = randomInt(8, 24);
    const maximum = minimum + range;
    return {
      prompt: `あるデータの最小値は${minimum}、最大値は${maximum}です。このデータの範囲を求めてください。`,
      answers: [String(range)],
      lessonKeys: ["frequency-distribution-range"],
      hint: "範囲は最大値−最小値で求めます。",
    };
  },
  "histogram-reading": () => {
    const classes = ["10以上15未満", "15以上20未満", "20以上25未満", "25以上30未満"];
    const peakIndex = randomInt(0, classes.length - 1);
    const frequencies = classes.map((_, index) => (index === peakIndex ? 9 : randomInt(2, 7)));
    return {
      prompt: `ヒストグラムの各階級の度数が順に ${frequencies.join(", ")} です。最も度数が大きい階級を答えてください。階級は順に10以上15未満、15以上20未満、20以上25未満、25以上30未満です。`,
      answers: [classes[peakIndex], `${classes[peakIndex]}の階級`],
      lessonKeys: ["histogram-reading"],
      hint: "最も高い長方形に対応する階級を探します。",
    };
  },
  "representative-values-distribution": () => {
    const center = randomInt(5, 15);
    const values = [center - 3, center - 1, center, center + 2, center + 7];
    return {
      prompt: `データ ${values.join(", ")} の中央値を求めてください。`,
      answers: [String(center)],
      lessonKeys: ["representative-values-distribution"],
      hint: "値は小さい順に並んでいます。5個の値の中央は3番目です。",
    };
  },
  "relative-frequency": () => {
    const totalCandidates = [20, 40, 50, 100] as const;
    const total = totalCandidates[randomInt(0, totalCandidates.length - 1)];
    const tenths = randomInt(1, 8);
    const frequency = (total * tenths) / 10;
    const relativeFrequency = tenths / 10;
    return {
      prompt: `総度数${total}のデータで、ある階級の度数は${frequency}です。この階級の相対度数を小数で求めてください。`,
      answers: [String(relativeFrequency), relativeFrequency.toFixed(2)],
      lessonKeys: ["relative-frequency"],
      hint: "その階級の度数を総度数で割ります。",
    };
  },
  "cumulative-frequency": () => {
    const first = randomInt(2, 5);
    const second = randomInt(3, 7);
    const third = randomInt(4, 8);
    const cumulative = first + second + third;
    return {
      prompt: `小さい階級から順に度数が ${first}, ${second}, ${third}, ${randomInt(3, 8)} です。3番目の階級までの累積度数を求めてください。`,
      answers: [String(cumulative), `${cumulative}人`, `${cumulative}個`],
      lessonKeys: ["cumulative-frequency"],
      hint: "最初から3番目までの度数を足します。",
    };
  },
  "data-distribution-critique": () => ({
    prompt:
      "同じデータでも、ヒストグラムの階級の幅を変えると分布の見え方が変わることがありますか。『変わる』か『変わらない』で答えてください。",
    answers: ["変わる", "変わることがある", "変化する"],
    lessonKeys: ["data-distribution-critique"],
    hint: "階級を細かくするか粗くするかで、山の見え方が変わる場合があります。",
  }),
  "experimental-probability": () => {
    const trials = 200;
    const successes = 20 * randomInt(3, 7);
    const relativeFrequency = successes / trials;
    return {
      prompt: `同じ条件で${trials}回試したところ、ある事象が${successes}回起きました。この事象の相対度数を求めてください。`,
      answers: [String(relativeFrequency), relativeFrequency.toFixed(2)],
      lessonKeys: ["experimental-probability"],
      hint: "起きた回数を試行回数で割ります。",
    };
  },
  "probability-from-observations": () => {
    const probabilityTenths = randomInt(2, 7);
    const probability = probabilityTenths / 10;
    const total = 100 * randomInt(2, 6);
    const expected = total * probability;
    return {
      prompt: `多数回の観察から、ある事象が起きる確率を${probability}と見積もりました。今後${total}回の機会があるとき、この事象はおよそ何回起きると見積もれますか。`,
      answers: [String(expected), `${expected}回`, `約${expected}`, `約${expected}回`],
      lessonKeys: ["probability-from-observations"],
      hint: "全体の回数×確率で、おおよその回数を求めます。",
    };
  },
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

export const generateMiddleMath1DataLessonExercises = (lessonKey: string, count = 3) => {
  const generator = generators[lessonKey];
  if (!generator) return [];
  const difficulties: MiddleMathExerciseDifficulty[] = ["basic", "applied", "challenge"];
  return Array.from({ length: count }, (_, index) =>
    withMetadata(
      generator(),
      `${lessonKey}-${Date.now()}-${index}`,
      difficulties[index % difficulties.length],
    ),
  );
};

export const generateMiddleMath1DataUnitExercises = (unitKey: string, count = 8) => {
  const lessonKeys = unitLessonKeys[unitKey] ?? [];
  if (lessonKeys.length === 0) return [];
  const difficulties: MiddleMathExerciseDifficulty[] = [
    "basic",
    "basic",
    "basic",
    "applied",
    "applied",
    "challenge",
  ];
  return Array.from({ length: count }, (_, index) => {
    const lessonKey = lessonKeys[index % lessonKeys.length];
    const generator = generators[lessonKey];
    return withMetadata(
      generator(),
      `${unitKey}-${Date.now()}-${index}`,
      difficulties[index % difficulties.length],
    );
  });
};
