import type { MiddleMathExercise, MiddleMathExerciseDifficulty } from "../grade1/exercise-registry";

type Generator = () => Omit<MiddleMathExercise, "id" | "lessonTitles" | "difficulty">;

const unitLessons: Record<string, readonly string[]> = {
  similarity: [
    "similarity-meaning",
    "triangle-similarity-conditions",
    "similarity-proof",
    "parallel-lines-segment-ratio",
    "midpoint-theorem",
    "similarity-area-ratio",
    "similarity-volume-ratio",
    "similarity-application",
  ],
  "circle-angles": [
    "inscribed-central-angle",
    "same-arc-inscribed-angles",
    "circle-angle-proof",
    "inscribed-angle-converse",
    "circle-angle-application",
  ],
  "pythagorean-theorem": [
    "pythagorean-meaning",
    "pythagorean-discovery",
    "pythagorean-hypotenuse",
    "pythagorean-leg",
    "pythagorean-converse",
    "pythagorean-coordinate-distance",
    "pythagorean-space",
    "pythagorean-application",
  ],
};

const lessonTitles: Record<string, string> = {
  "similarity-meaning": "相似の意味と対応を捉える",
  "triangle-similarity-conditions": "三角形の相似条件を使う",
  "similarity-proof": "相似条件を根拠に証明する",
  "parallel-lines-segment-ratio": "平行線と線分の比を使う",
  "midpoint-theorem": "中点連結定理を相似から捉える",
  "similarity-area-ratio": "相似比から面積比を求める",
  "similarity-volume-ratio": "相似な立体の体積比を求める",
  "similarity-application": "相似を測量や比較に活用する",
  "inscribed-central-angle": "円周角と中心角の関係を捉える",
  "same-arc-inscribed-angles": "同じ弧に対する円周角が等しいことを使う",
  "circle-angle-proof": "円周角の関係が証明できることを知る",
  "inscribed-angle-converse": "円周角の定理の逆を使う",
  "circle-angle-application": "円周角を作図や測定に活用する",
  "pythagorean-meaning": "三平方の定理の意味を捉える",
  "pythagorean-discovery": "三平方の定理を面積から見いだす",
  "pythagorean-hypotenuse": "三平方の定理で斜辺を求める",
  "pythagorean-leg": "斜辺と1辺から残りの辺を求める",
  "pythagorean-converse": "三平方の定理の逆で直角三角形を判断する",
  "pythagorean-coordinate-distance": "座標平面の2点間の距離を求める",
  "pythagorean-space": "空間図形の中の直角三角形を見付ける",
  "pythagorean-application": "三平方の定理を具体的な場面に活用する",
};

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const triples = [
  [3, 4, 5],
  [5, 12, 13],
  [6, 8, 10],
  [7, 24, 25],
] as const;

const generators: Record<string, Generator> = {
  "similarity-meaning": () => {
    const m = randomInt(2, 4);
    const n = m + randomInt(1, 3);
    return {
      prompt: `対応する辺の長さが${m * 2}cmと${n * 2}cmの相似な図形の相似比を小さい図形:大きい図形で答えてください。`,
      answers: [`${m}:${n}`, `${m}：${n}`],
      lessonKeys: ["similarity-meaning"],
      hint: "対応する辺の比を最も簡単な整数比にします。",
    };
  },
  "triangle-similarity-conditions": () => ({
    prompt: "二つの三角形で対応する2組の角がそれぞれ等しいとき、使う相似条件を答えてください。",
    answers: ["2組の角", "二組の角", "2組の角がそれぞれ等しい"],
    lessonKeys: ["triangle-similarity-conditions"],
    hint: "角だけで判定できる相似条件です。",
  }),
  "similarity-proof": () => ({
    prompt: "DE∥BCから∠ADE=∠ABCといえる根拠を答えてください。",
    answers: ["同位角", "平行線の同位角"],
    lessonKeys: ["similarity-proof"],
    hint: "平行線を1本の直線が横切るときの角の性質です。",
  }),
  "parallel-lines-segment-ratio": () => {
    const small = randomInt(2, 5);
    const scale = randomInt(2, 4);
    const aq = randomInt(2, 6);
    return {
      prompt: `△ABCでPQ∥BC、AP=${small}、AB=${small * scale}、AQ=${aq}のときACを答えてください。`,
      answers: [String(aq * scale)],
      lessonKeys: ["parallel-lines-segment-ratio"],
      hint: "AP:AB=AQ:ACを使います。",
    };
  },
  "midpoint-theorem": () => {
    const half = randomInt(3, 12);
    return {
      prompt: `三角形の2辺の中点を結ぶ線分PQがあり、残りの辺BC=${half * 2}cmです。PQを答えてください。`,
      answers: [String(half), `${half}cm`],
      lessonKeys: ["midpoint-theorem"],
      hint: "中点を結ぶ線分の長さは第3辺の半分です。",
    };
  },
  "similarity-area-ratio": () => {
    const m = randomInt(1, 3);
    const n = m + randomInt(1, 3);
    return {
      prompt: `相似比${m}:${n}の相似な平面図形の面積比を答えてください。`,
      answers: [`${m * m}:${n * n}`, `${m * m}：${n * n}`],
      lessonKeys: ["similarity-area-ratio"],
      hint: "面積比は相似比の2乗です。",
    };
  },
  "similarity-volume-ratio": () => {
    const m = randomInt(1, 2);
    const n = m + randomInt(1, 2);
    return {
      prompt: `相似比${m}:${n}の相似な立体の体積比を答えてください。`,
      answers: [`${m ** 3}:${n ** 3}`, `${m ** 3}：${n ** 3}`],
      lessonKeys: ["similarity-volume-ratio"],
      hint: "体積比は相似比の3乗です。",
    };
  },
  "similarity-application": () => {
    const pole = randomInt(1, 3);
    const poleShadow = randomInt(1, 3);
    const scale = randomInt(3, 6);
    return {
      prompt: `高さ${pole}mの棒の影が${poleShadow}m、同時刻の塔の影が${poleShadow * scale}mです。塔の高さを答えてください。`,
      answers: [String(pole * scale), `${pole * scale}m`],
      lessonKeys: ["similarity-application"],
      hint: "高さ:影の長さを対応させます。",
    };
  },
  "inscribed-central-angle": () => {
    const angle = randomInt(2, 8) * 10;
    return {
      prompt: `円周角が${angle}°のとき、同じ弧に対する中心角を答えてください。`,
      answers: [String(angle * 2), `${angle * 2}°`],
      lessonKeys: ["inscribed-central-angle"],
      hint: "中心角は円周角の2倍です。",
    };
  },
  "same-arc-inscribed-angles": () => {
    const angle = randomInt(2, 7) * 10 + 5;
    return {
      prompt: `同じ弧ABに対する円周角∠APBが${angle}°です。別の円周角∠AQBを答えてください。`,
      answers: [String(angle), `${angle}°`],
      lessonKeys: ["same-arc-inscribed-angles"],
      hint: "同じ弧に対する円周角は等しいです。",
    };
  },
  "circle-angle-proof": () => ({
    prompt: "円周角の関係を有限個の測定だけでなく、すべての場合に成り立つと確かめる方法を答えてください。",
    answers: ["証明", "証明する"],
    lessonKeys: ["circle-angle-proof"],
    hint: "既習の図形の性質を根拠に論理的に確かめます。",
  }),
  "inscribed-angle-converse": () => ({
    prompt: "∠APB=∠AQBでP,QがABの同じ側にあるとき、4点A,B,P,Qの位置関係を答えてください。",
    answers: ["同一円周上", "同じ円周上", "一つの円周上"],
    lessonKeys: ["inscribed-angle-converse"],
    hint: "円周角の定理の逆を使います。",
  }),
  "circle-angle-application": () => ({
    prompt: "直径ABに対する円周角∠APBの大きさを答えてください。",
    answers: ["90", "90°"],
    lessonKeys: ["circle-angle-application"],
    hint: "直径に対する中心角は180°です。",
  }),
  "pythagorean-meaning": () => ({
    prompt: "直角をはさむ2辺をa,b、斜辺をcとした三平方の定理を式で答えてください。",
    answers: ["a²+b²=c²", "a^2+b^2=c^2"],
    lessonKeys: ["pythagorean-meaning"],
    hint: "斜辺の平方が他の2辺の平方の和です。",
  }),
  "pythagorean-discovery": () => {
    const [a, b, c] = triples[randomInt(0, triples.length - 1)];
    return {
      prompt: `${a}²+${b}²と${c}²の値はどんな関係ですか。`,
      answers: ["等しい", "同じ", `${a}²+${b}²=${c}²`, `${a}^2+${b}^2=${c}^2`],
      lessonKeys: ["pythagorean-discovery"],
      hint: "それぞれ平方して比較します。",
    };
  },
  "pythagorean-hypotenuse": () => {
    const [a, b, c] = triples[randomInt(0, triples.length - 1)];
    return {
      prompt: `直角をはさむ2辺が${a}cmと${b}cmの直角三角形の斜辺を答えてください。`,
      answers: [String(c), `${c}cm`],
      lessonKeys: ["pythagorean-hypotenuse"],
      hint: "a²+b²=c²を使います。",
    };
  },
  "pythagorean-leg": () => {
    const [a, b, c] = triples[randomInt(0, triples.length - 1)];
    return {
      prompt: `斜辺${c}cm、1辺${a}cmの直角三角形で残りの辺を答えてください。`,
      answers: [String(b), `${b}cm`],
      lessonKeys: ["pythagorean-leg"],
      hint: "斜辺の平方から既知の辺の平方を引きます。",
    };
  },
  "pythagorean-converse": () => {
    const [a, b, c] = triples[randomInt(0, triples.length - 1)];
    return {
      prompt: `3辺が${a},${b},${c}の三角形は直角三角形ですか。`,
      answers: ["はい", "直角三角形", "直角三角形です"],
      lessonKeys: ["pythagorean-converse"],
      hint: "短い2辺の平方の和と最長辺の平方を比べます。",
    };
  },
  "pythagorean-coordinate-distance": () => {
    const [a, b, c] = triples[randomInt(0, triples.length - 1)];
    return {
      prompt: `A(0,0)、B(${a},${b})の2点間の距離を答えてください。`,
      answers: [String(c)],
      lessonKeys: ["pythagorean-coordinate-distance"],
      hint: "横差と縦差を直角辺にします。",
    };
  },
  "pythagorean-space": () => {
    const patterns = [
      [1, 2, 2, 3],
      [2, 3, 6, 7],
      [3, 4, 12, 13],
    ] as const;
    const [a, b, h, d] = patterns[randomInt(0, patterns.length - 1)];
    return {
      prompt: `縦${a}、横${b}、高さ${h}の直方体の空間対角線を答えてください。`,
      answers: [String(d)],
      lessonKeys: ["pythagorean-space"],
      hint: "縦²+横²+高さ²の平方根です。",
    };
  },
  "pythagorean-application": () => {
    const [a, b, c] = triples[randomInt(0, triples.length - 1)];
    const scale = randomInt(2, 5);
    return {
      prompt: `水平距離${a * scale}m、高さの差${b * scale}mの2地点間の直線距離を答えてください。`,
      answers: [String(c * scale), `${c * scale}m`],
      lessonKeys: ["pythagorean-application"],
      hint: "水平距離と高さの差を直角辺として考えます。",
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

export const generateMiddleMath3GeometryLessonExercises = (lessonKey: string, count = 3) => {
  const generator = generators[lessonKey];
  if (!generator) return [];
  const difficulties: MiddleMathExerciseDifficulty[] = ["basic", "applied", "challenge"];
  return Array.from({ length: count }, (_, index) =>
    withMetadata(generator(), `${lessonKey}-${Date.now()}-${index}`, difficulties[index % 3]),
  );
};

export const generateMiddleMath3GeometryUnitExercises = (unitKey: string, count = 8) => {
  const keys = unitLessons[unitKey];
  if (!keys) return [];
  const difficulties: MiddleMathExerciseDifficulty[] = ["basic", "basic", "basic", "applied", "applied", "challenge"];
  const startIndex = randomInt(0, keys.length - 1);
  return Array.from({ length: count }, (_, index) => {
    const lessonKey = keys[(startIndex + index) % keys.length];
    return withMetadata(
      generators[lessonKey](),
      `${unitKey}-${Date.now()}-${index}`,
      difficulties[index % difficulties.length],
    );
  });
};
