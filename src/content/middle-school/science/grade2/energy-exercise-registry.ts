import type { ExerciseDifficulty } from "../../../math1/exercise-generators";
import type { GeneratedExercise } from "../../../math1/exercise-registry";

export const ELECTRIC_CURRENT_UNIT_KEY = "electric-current-use";

const lessonTitles: Record<string, string> = {
  "circuit-measurement": "回路図と電流計・電圧計のつなぎ方を読む",
  "series-current": "直列回路の電流を捉える",
  "parallel-current": "並列回路の電流を捉える",
  "series-voltage": "直列回路の電圧を捉える",
  "parallel-voltage": "並列回路の電圧を捉える",
  "current-voltage-graph": "電流と電圧の関係をグラフから読む",
  "ohms-law-resistance": "オームの法則と抵抗を使う",
  "series-equivalent-resistance": "直列回路の合成抵抗を求める",
  "parallel-equivalent-resistance": "並列回路の合成抵抗を捉える",
  "electric-power": "電力を電圧と電流から求める",
  "electric-energy": "電力量を電力と時間から求める",
  "static-electricity": "静電気の引力と斥力を捉える",
  "electrons-discharge-radiation": "電子の移動と放電を電流へつなげる",
  "magnetic-field-lines": "磁界と磁力線を読む",
  "current-magnetic-field-coil": "電流がつくる磁界を捉える",
  "force-on-current": "磁界中の電流が受ける力を捉える",
  "electromagnetic-induction-ac-dc": "電磁誘導と直流・交流を捉える",
};

const lessonKeys = Object.keys(lessonTitles);
const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const asNumberAnswers = (value: number, unit: string) => [
  String(value),
  `${value}${unit}`,
  `${value} ${unit}`,
];

const base = (lessonKey: string, difficulty: ExerciseDifficulty, index: number) => ({
  id: `middle-science2-electric-${lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
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
    case "circuit-measurement":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "抵抗器の両端の電圧を測る電圧計は、抵抗器に直列・並列のどちらにつなぎますか。",
            answers: ["並列"],
            hint: "電圧は二点間を測ります。",
          }
        : {
            ...common,
            prompt:
              "回路を流れる電流を測る電流計は、測りたい部分に直列・並列のどちらにつなぎますか。",
            answers: ["直列"],
            hint: "同じ電流が計器を通るようにつなぎます。",
          };
    case "series-current": {
      const current = randomInt(2, 8) / 10;
      return {
        ...common,
        prompt: `直列回路のA点で${current} A流れている。B点の電流は何Aですか。`,
        answers: asNumberAnswers(current, "A"),
        hint: "直列回路では各点の電流は等しいです。",
      };
    }
    case "parallel-current": {
      const branch1 = randomInt(1, 5) / 10;
      const branch2 = randomInt(1, 5) / 10;
      const total = Number((branch1 + branch2).toFixed(1));
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: `並列回路で分岐前が${total} A、一方の枝が${branch1} Aです。もう一方の枝は何Aですか。`,
            answers: asNumberAnswers(branch2, "A"),
            hint: "分岐前の電流は枝の電流の和です。",
          }
        : {
            ...common,
            prompt: `並列回路の二つの枝が${branch1} Aと${branch2} Aです。分岐前は何Aですか。`,
            answers: asNumberAnswers(total, "A"),
            hint: "枝の電流を足します。",
          };
    }
    case "series-voltage": {
      const v1 = randomInt(1, 5);
      const v2 = randomInt(1, 5);
      return {
        ...common,
        prompt: `直列回路で二つの抵抗の電圧が${v1} Vと${v2} Vです。電源電圧は何Vですか。`,
        answers: asNumberAnswers(v1 + v2, "V"),
        hint: "直列では各部分の電圧の和が電源電圧です。",
      };
    }
    case "parallel-voltage": {
      const voltage = randomInt(2, 9);
      return {
        ...common,
        prompt: `電源${voltage} Vの並列回路で、一つの枝の両端の電圧は何Vですか。`,
        answers: asNumberAnswers(voltage, "V"),
        hint: "並列の各枝は同じ二点につながっています。",
      };
    }
    case "current-voltage-graph": {
      const voltage = randomInt(1, 4);
      const current = voltage / 10;
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: `${voltage} Vで${current} A流れる抵抗器が比例関係にある。電圧を${voltage * 2} Vにすると電流は何Aですか。`,
            answers: asNumberAnswers(Number((current * 2).toFixed(1)), "A"),
            hint: "同じ抵抗器では電圧の倍率と電流の倍率が同じです。",
          }
        : {
            ...common,
            prompt: "電流と電圧が比例するとき、I–Vグラフは原点を通る何になりますか。",
            answers: ["直線"],
            hint: "比例のグラフの特徴です。",
          };
    }
    case "ohms-law-resistance": {
      const resistance = randomInt(2, 10) * 5;
      const current = randomInt(1, 4) / 10;
      const voltage = Number((resistance * current).toFixed(1));
      return difficulty === "basic"
        ? {
            ...common,
            prompt: "電気抵抗の単位をカタカナで答えてください。",
            answers: ["オーム"],
            hint: "記号はΩです。",
          }
        : {
            ...common,
            prompt: `抵抗${resistance} Ωに${current} A流れるとき、両端の電圧は何Vですか。`,
            answers: asNumberAnswers(voltage, "V"),
            hint: "V=RIを使います。",
          };
    }
    case "series-equivalent-resistance": {
      const r1 = randomInt(1, 6) * 2;
      const r2 = randomInt(1, 6) * 2;
      return {
        ...common,
        prompt: `${r1} Ωと${r2} Ωを直列につないだ合成抵抗は何Ωですか。`,
        answers: asNumberAnswers(r1 + r2, "Ω"),
        hint: "直列では抵抗を足します。",
      };
    }
    case "parallel-equivalent-resistance": {
      const resistance = randomInt(2, 6) * 2;
      const equivalent = resistance / 2;
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: `${resistance} Ωの同じ抵抗を2本並列につないだ合成抵抗は何Ωですか。`,
            answers: asNumberAnswers(equivalent, "Ω"),
            hint: "同じ抵抗2本の並列では合成抵抗は半分です。",
          }
        : {
            ...common,
            prompt:
              "二つの抵抗を並列につないだ合成抵抗は、各抵抗より大きい・小さいのどちらですか。",
            answers: ["小さい", "小さくなる"],
            hint: "電流の通り道が増えます。",
          };
    }
    case "electric-power": {
      const voltage = randomInt(2, 8);
      const current = randomInt(1, 4);
      const power = voltage * current;
      return {
        ...common,
        prompt: `${voltage} Vで${current} A流れる器具の電力は何Wですか。`,
        answers: asNumberAnswers(power, "W"),
        hint: "P=VIです。",
      };
    }
    case "electric-energy": {
      const power = randomInt(2, 10);
      const time = randomInt(2, 6) * 10;
      const energy = power * time;
      return {
        ...common,
        prompt: `${power} Wの器具を${time}秒使った電力量は何Jですか。`,
        answers: asNumberAnswers(energy, "J"),
        hint: "E=Ptです。",
      };
    }
    case "static-electricity":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "異なる種類の電気を帯びた物体どうしには、引力・斥力のどちらが働きますか。",
            answers: ["引力", "引き合う"],
            hint: "異種の電気は引き合います。",
          }
        : {
            ...common,
            prompt: "同じ種類の電気を帯びた物体どうしには、引力・斥力のどちらが働きますか。",
            answers: ["斥力", "反発", "反発する"],
            hint: "同種の電気は反発します。",
          };
    case "electrons-discharge-radiation":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "空間を電気が移動する現象を何といいますか。",
            answers: ["放電"],
            hint: "高電圧の再現実験ではなく用語として扱います。",
          }
        : {
            ...common,
            prompt: "金属線中で電流と関係して移動する負の電気をもつ粒子を何といいますか。",
            answers: ["電子"],
            hint: "原子を構成する粒子の一つです。",
          };
    case "magnetic-field-lines":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "磁力線が密な場所では、磁界は強い・弱いのどちらですか。",
            answers: ["強い", "強くなる"],
            hint: "線の密度は磁界の強さを表します。",
          }
        : {
            ...common,
            prompt: "磁力が働く空間を何といいますか。",
            answers: ["磁界"],
            hint: "磁石や電流の周囲にできます。",
          };
    case "current-magnetic-field-coil":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "コイルを流れる電流の向きを逆にすると、磁界の向きはどうなりますか。",
            answers: ["逆になる", "反対になる", "逆"],
            hint: "電流と磁界の向きが対応します。",
          }
        : {
            ...common,
            prompt:
              "コイルを流れる電流を大きくすると、磁界は一般に強く・弱くのどちらになりますか。",
            answers: ["強く", "強くなる", "強い"],
            hint: "電流の大きさと磁界の強さを対応させます。",
          };
    case "force-on-current":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt:
              "磁界の向きを変えずに電流の向きだけを逆にすると、導線が受ける力の向きはどうなりますか。",
            answers: ["逆になる", "反対になる", "逆"],
            hint: "一方の向きを反転すると力も反転します。",
          }
        : {
            ...common,
            prompt: "磁界中の導線に電流を流すと、導線には何が働きますか。",
            answers: ["力", "磁力"],
            hint: "モーターの原理につながります。",
          };
    case "electromagnetic-induction-ac-dc":
      return difficulty === "challenge"
        ? {
            ...common,
            prompt: "電流の向きが周期的に入れ替わる電流を何といいますか。",
            answers: ["交流"],
            hint: "直流との違いを考えます。",
          }
        : {
            ...common,
            prompt: "コイルを通る磁界が変化して電流が生じる現象を何といいますか。",
            answers: ["電磁誘導"],
            hint: "発電機の基本となる現象です。",
          };
    default:
      return {
        ...common,
        prompt: "電流とその利用で学ぶ内容を一つ答えてください。",
        answers: ["回路", "電流", "電圧", "抵抗", "磁界"],
        hint: "回路と磁気現象を思い出します。",
      };
  }
};

export const generateMiddleScience2LessonExercises = (
  unitKey: string,
  lessonKey: string,
  count = 3,
) => {
  if (unitKey !== ELECTRIC_CURRENT_UNIT_KEY || !lessonTitles[lessonKey]) return [];
  const difficulties: ExerciseDifficulty[] = ["basic", "applied", "challenge"];
  return Array.from({ length: count }, (_, index) =>
    make(lessonKey, difficulties[index % difficulties.length], index),
  );
};

export const generateMiddleScience2UnitExercises = (unitKey: string, count = 8) => {
  if (unitKey !== ELECTRIC_CURRENT_UNIT_KEY) return [];
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
