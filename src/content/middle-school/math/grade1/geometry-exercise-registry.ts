import type {
  MiddleMathExercise,
  MiddleMathExerciseDifficulty,
} from "./exercise-registry";

type Generator = () => Omit<MiddleMathExercise, "id" | "lessonTitles" | "difficulty">;

const planeGeometryLessonKeys = [
  "construction-symmetry",
  "angle-bisector-construction",
  "perpendicular-bisector-construction",
  "perpendicular-construction",
  "translation",
  "reflection",
  "rotation",
  "tangent-construction-application",
] as const;

const lessonTitles: Record<string, string> = {
  "construction-symmetry": "作図と対称性",
  "angle-bisector-construction": "角の二等分線を作図する",
  "perpendicular-bisector-construction": "線分の垂直二等分線を作図する",
  "perpendicular-construction": "垂線を作図する",
  translation: "平行移動",
  reflection: "対称移動",
  rotation: "回転移動",
  "tangent-construction-application": "作図を円の接線に活用する",
};

const unitLessonKeys: Record<string, readonly string[]> = {
  "plane-geometry": planeGeometryLessonKeys,
};

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const generators: Record<string, Generator> = {
  "construction-symmetry": () => {
    const radius = randomInt(3, 9);
    return {
      prompt: `点A、Bを中心とする半径${radius} cmの二つの円の交点をPとします。APの長さを答えてください。`,
      answers: [String(radius), `${radius}cm`, `${radius} cm`],
      lessonKeys: ["construction-symmetry"],
      hint: "PはAを中心とする円の円周上にあります。",
    };
  },
  "angle-bisector-construction": () => {
    const half = randomInt(15, 55);
    const angle = half * 2;
    return {
      prompt: `${angle}°の角の二等分線を作図しました。二等分された一方の角の大きさを答えてください。`,
      answers: [String(half), `${half}°`, `${half}度`],
      lessonKeys: ["angle-bisector-construction"],
      hint: "角の二等分線は、もとの角を等しい二つの角に分けます。",
    };
  },
  "perpendicular-bisector-construction": () => {
    const distance = randomInt(3, 12);
    return {
      prompt: `点Pは線分ABの垂直二等分線上にあり、PA=${distance} cmです。PBの長さを答えてください。`,
      answers: [String(distance), `${distance}cm`, `${distance} cm`],
      lessonKeys: ["perpendicular-bisector-construction"],
      hint: "垂直二等分線上の点は、線分の両端から等距離です。",
    };
  },
  "perpendicular-construction": () => ({
    prompt: "直線lに垂直な直線mを作図しました。lとmのなす角を答えてください。",
    answers: ["90", "90°", "90度"],
    lessonKeys: ["perpendicular-construction"],
    hint: "垂直な二直線がつくる角は90°です。",
  }),
  translation: () => {
    const distance = randomInt(2, 8);
    return {
      prompt: `図形を右へ${distance} cm平行移動しました。どの頂点も移動する距離は何cmですか。`,
      answers: [String(distance), `${distance}cm`, `${distance} cm`],
      lessonKeys: ["translation"],
      hint: "平行移動では全ての点を同じ方向へ同じ距離だけ動かします。",
    };
  },
  reflection: () => {
    const distance = randomInt(2, 9);
    return {
      prompt: `点Pは対称軸lから${distance} cm離れています。lについて対称移動した点P'からlまでの距離を答えてください。`,
      answers: [String(distance), `${distance}cm`, `${distance} cm`],
      lessonKeys: ["reflection"],
      hint: "対称軸の両側で、対応する点までの距離は等しくなります。",
    };
  },
  rotation: () => {
    const quarterTurns = randomInt(1, 3);
    const angle = quarterTurns * 90;
    return {
      prompt: `点AをOのまわりに${quarterTurns === 1 ? "4分の1" : quarterTurns === 2 ? "半" : "4分の3"}回転しました。回転角の大きさを答えてください。`,
      answers: [String(angle), `${angle}°`, `${angle}度`],
      lessonKeys: ["rotation"],
      hint: "1回転は360°です。",
    };
  },
  "tangent-construction-application": () => ({
    prompt: "円の接点Tにおける接線lと、接点を通る半径OTのなす角を答えてください。",
    answers: ["90", "90°", "90度"],
    lessonKeys: ["tangent-construction-application"],
    hint: "円の接線は接点を通る半径に垂直です。",
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

export const generateMiddleMath1GeometryLessonExercises = (lessonKey: string, count = 3) => {
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

export const generateMiddleMath1GeometryUnitExercises = (unitKey: string, count = 8) => {
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
