import type { ExerciseDifficulty } from "../../../math1/exercise-generators";
import type { GeneratedExercise } from "../../../math1/exercise-registry";

const UNIT_KEY = "familiar-physical-phenomena";

const lessonTitles: Record<string, string> = {
  "light-reflection": "光の反射の規則性を捉える",
  "light-refraction": "光の屈折と全反射を捉える",
  "convex-lens-focus": "凸レンズの焦点を捉える",
  "convex-lens-images": "凸レンズの実像と虚像を捉える",
  "sound-generation-propagation": "音の発生と伝わり方を捉える",
  "sound-amplitude-frequency": "音の大きさと高さを振動で説明する",
  "force-effects": "力の働きを現象から見いだす",
  "force-magnitude-direction": "力を大きさと向きで表す",
  "spring-force-extension": "ばねの伸びと力の関係を捉える",
  "two-force-equilibrium": "2力がつり合う条件を捉える",
};

const lessonKeys = Object.keys(lessonTitles);
const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const make = (
  lessonKey: string,
  difficulty: ExerciseDifficulty,
  index: number,
): GeneratedExercise => {
  const base = {
    id: `middle-science1-${lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
    lessonKeys: [lessonKey],
    lessonTitles: [lessonTitles[lessonKey] ?? lessonKey],
    difficulty,
    answerMode: "text" as const,
  };

  switch (lessonKey) {
    case "light-reflection": {
      const angle = randomInt(2, 7) * 10;
      return {
        ...base,
        prompt: `入射角が${angle}°のとき、反射角は何度ですか。`,
        answers: [String(angle), `${angle}°`],
        hint: "入射角と反射角は等しくなります。",
      };
    }
    case "light-refraction":
      return difficulty === "challenge"
        ? {
            ...base,
            prompt:
              "水やガラスから空気へ進む光で、入射角を大きくしたとき境界で全て反射する現象を答えてください。",
            answers: ["全反射"],
            hint: "光が外へ出ず、全て境界で反射します。",
          }
        : {
            ...base,
            prompt:
              "光が空気から水へ進むとき、屈折角は入射角より大きくなりますか、小さくなりますか。",
            answers: ["小さい", "小さくなる"],
            hint: "法線に近づく向きへ曲がります。",
          };
    case "convex-lens-focus":
      return {
        ...base,
        prompt: "凸レンズの軸に平行な光が、レンズを通った後に集まる点を何といいますか。",
        answers: ["焦点"],
        hint: "凸レンズの像を考える基準になる点です。",
      };
    case "convex-lens-images":
      return difficulty === "basic"
        ? {
            ...base,
            prompt: "スクリーンに映すことができる像を何といいますか。",
            answers: ["実像"],
            hint: "光が実際に集まってできる像です。",
          }
        : {
            ...base,
            prompt:
              "物体を凸レンズと焦点の間に置いたとき、レンズ越しに見える拡大した像を何といいますか。",
            answers: ["虚像"],
            hint: "スクリーンには映せません。",
          };
    case "sound-generation-propagation":
      return {
        ...base,
        prompt: "音は発音体が何をすることによって生じますか。",
        answers: ["振動", "振動する", "振動すること"],
        hint: "音叉やスピーカーの動きを考えます。",
      };
    case "sound-amplitude-frequency":
      return difficulty === "challenge"
        ? {
            ...base,
            prompt: "音の高さと関係する、1秒間の振動回数を何といいますか。",
            answers: ["振動数"],
            hint: "単位にはHzを使います。",
          }
        : {
            ...base,
            prompt: "発音体の振幅が大きくなると、音は一般に大きくなりますか、小さくなりますか。",
            answers: ["大きい", "大きくなる"],
            hint: "振幅は音の大きさと対応します。",
          };
    case "force-effects":
      return {
        ...base,
        prompt: "スポンジを押して形が変わる現象は、力が物体を何させる働きの例ですか。",
        answers: ["変形", "変形させる"],
        hint: "力は物体の形や運動を変えます。",
      };
    case "force-magnitude-direction":
      return difficulty === "challenge"
        ? {
            ...base,
            prompt: "力の向きを図で表すとき、矢印の長さと向きのどちらを使いますか。",
            answers: ["向き", "矢印の向き"],
            hint: "矢印の長さは大きさを表します。",
          }
        : {
            ...base,
            prompt: "力の大きさの単位をカタカナで答えてください。",
            answers: ["ニュートン"],
            hint: "記号はNです。",
          };
    case "spring-force-extension": {
      const force = randomInt(2, 5);
      const perNewton = randomInt(1, 3);
      const extension = force * perNewton;
      return {
        ...base,
        prompt: `1 Nで${perNewton} cm伸びるばねが比例するとき、${force} Nでは何cm伸びますか。`,
        answers: [String(extension), `${extension}cm`, `${extension} cm`],
        hint: "力の倍率と伸びの倍率は同じです。",
      };
    }
    case "two-force-equilibrium": {
      const force = randomInt(3, 12);
      return difficulty === "challenge"
        ? {
            ...base,
            prompt: `物体に右向き${force} Nの力が働いている。これと同一直線上でつり合う力を「向きと大きさ」で答えてください。`,
            answers: [`左向き${force}N`, `左向き${force} N`, `左${force}N`, `左${force} N`],
            hint: "大きさは同じ、向きは反対です。",
          }
        : {
            ...base,
            prompt: `右向き${force} Nの力とつり合う力の大きさは何Nですか。`,
            answers: [String(force), `${force}N`, `${force} N`],
            hint: "つり合う2力の大きさは等しくなります。",
          };
    }
    default:
      return {
        ...base,
        prompt: "身近な物理現象の学習内容を一つ答えてください。",
        answers: ["光", "音", "力"],
        hint: "この単元の三つの柱を思い出します。",
      };
  }
};

export const generateMiddleScience1LessonExercises = (
  unitKey: string,
  lessonKey: string,
  count = 3,
) => {
  if (unitKey !== UNIT_KEY || !lessonTitles[lessonKey]) return [];
  const difficulties: ExerciseDifficulty[] = ["basic", "applied", "challenge"];
  return Array.from({ length: count }, (_, index) =>
    make(lessonKey, difficulties[index % difficulties.length], index),
  );
};

export const generateMiddleScience1UnitExercises = (unitKey: string, count = 8) => {
  if (unitKey !== UNIT_KEY) return [];
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
