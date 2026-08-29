import type { GeneratedExercise } from "../math1/exercise-registry";
import type { ExerciseDifficulty } from "../math1/exercise-generators";

const lessonTitles: Record<string, string> = {
  "physical-quantities-units": "物理量とSI単位",
  "velocity-graphs": "変位・速度とグラフ",
  acceleration: "加速度と速度―時間グラフ",
  "force-diagrams": "力の種類と力の図示",
  "force-equilibrium": "力の合成・分解とつり合い",
  "newton-law": "運動の三法則と運動方程式",
  "free-fall": "自由落下と鉛直投げ上げ",
  "work-power": "仕事と仕事率",
  "kinetic-potential-energy": "運動エネルギーと位置エネルギー",
  "mechanical-energy-conservation": "力学的エネルギー保存",
  "wave-properties": "波長・振動数・波の速さ",
  "wave-superposition": "波の重ね合わせと反射",
  "sound-resonance": "音・弦・気柱の共鳴",
  "heat-temperature": "熱運動・温度・熱量",
  "heat-balance": "熱平衡と熱の利用",
  "ohms-law": "電流・電圧・電気抵抗",
  "electric-power": "電力・電力量とジュール熱",
  "energy-resources-efficiency": "エネルギーの変換・資源・効率",
  "physics-opens-world": "物理学が拓く世界",
};

const unitLessonKeys: Record<string, string[]> = {
  "motion-description": ["physical-quantities-units", "velocity-graphs", "acceleration"],
  "forces-motion": ["force-diagrams", "force-equilibrium", "newton-law", "free-fall"],
  "work-energy": ["work-power", "kinetic-potential-energy", "mechanical-energy-conservation"],
  "wave-sound": ["wave-properties", "wave-superposition", "sound-resonance"],
  "thermal-energy": ["heat-temperature", "heat-balance"],
  "electric-energy": ["ohms-law", "electric-power"],
  "energy-society": ["energy-resources-efficiency", "physics-opens-world"],
};

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const numberAnswers = (value: number, unit?: string) => {
  const plain = Number.isInteger(value) ? String(value) : String(Number(value.toFixed(2)));
  if (!unit) return [plain];
  return [plain, `${plain}${unit}`, `${plain} ${unit}`];
};

const make = (
  lessonKey: string,
  difficulty: ExerciseDifficulty,
  index: number,
): GeneratedExercise => {
  const title = lessonTitles[lessonKey] ?? lessonKey;
  const base = {
    id: `physics-${lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
    lessonKeys: [lessonKey],
    lessonTitles: [title],
    difficulty,
    answerMode: "text" as const,
  };

  switch (lessonKey) {
    case "physical-quantities-units": {
      const ms = randomInt(2, difficulty === "challenge" ? 30 : 20);
      const kmh = ms * 3.6;
      return {
        ...base,
        prompt: `${kmh} km/h を m/s に換算しなさい。`,
        answers: numberAnswers(ms, "m/s"),
        hint: "km/hからm/sへは3.6で割ります。",
      };
    }
    case "velocity-graphs": {
      const time = randomInt(2, 8);
      const velocity = randomInt(-5, 8) || 3;
      const start = randomInt(-5, 5);
      const end = start + velocity * time;
      return {
        ...base,
        prompt: `物体が x=${start} m から ${time} s 後に x=${end} m へ移動した。平均の速度を求めなさい。`,
        answers: numberAnswers(velocity, "m/s"),
        hint: "変位を経過時間で割ります。変位には向きを表す符号があります。",
      };
    }
    case "acceleration": {
      const time = randomInt(2, 6);
      const acceleration = randomInt(-3, 4) || 2;
      const v0 = randomInt(0, 8);
      const v = v0 + acceleration * time;
      return {
        ...base,
        prompt: `速度が ${v0} m/s から ${time} s 後に ${v} m/s になった。加速度を求めなさい。`,
        answers: numberAnswers(acceleration, "m/s²"),
        hint: "a=(v−v₀)/tを使います。",
      };
    }
    case "force-diagrams": {
      const mass = randomInt(1, 8);
      const weight = mass * 9.8;
      return {
        ...base,
        prompt: `質量 ${mass} kg の物体に働く重力の大きさを、g=9.8 m/s² として求めなさい。`,
        answers: numberAnswers(Number(weight.toFixed(1)), "N"),
        hint: "重力の大きさはmgです。",
      };
    }
    case "force-equilibrium": {
      const right = randomInt(4, 15);
      const left = randomInt(1, right - 1);
      const net = right - left;
      return {
        ...base,
        prompt: `右向き ${right} N、左向き ${left} N の力が同一直線上で働く。右向きを正として合力を求めなさい。`,
        answers: numberAnswers(net, "N"),
        hint: `+${right}+(−${left}) と符号付きで足します。`,
      };
    }
    case "newton-law": {
      const mass = randomInt(2, 8);
      const acceleration = randomInt(1, difficulty === "challenge" ? 6 : 4);
      const force = mass * acceleration;
      return {
        ...base,
        prompt: `質量 ${mass} kg の物体に ${acceleration} m/s² の加速度を生じさせる合力を求めなさい。`,
        answers: numberAnswers(force, "N"),
        hint: "ΣF=maを使います。",
      };
    }
    case "free-fall": {
      const time = randomInt(1, 4);
      const speed = Number((9.8 * time).toFixed(1));
      return {
        ...base,
        prompt: `物体を静かに離して自由落下させる。${time} s 後の速さを、g=9.8 m/s² として求めなさい。`,
        answers: numberAnswers(speed, "m/s"),
        hint: "初速度0なのでv=gtです。",
      };
    }
    case "work-power": {
      const force = randomInt(2, 12) * 5;
      const distance = randomInt(2, 8);
      const work = force * distance;
      if (difficulty === "basic") {
        return {
          ...base,
          prompt: `物体を移動方向に ${force} N の力で ${distance} m 動かした。仕事を求めなさい。`,
          answers: numberAnswers(work, "J"),
          hint: "力と移動が同方向ならW=Fxです。",
        };
      }
      const time = randomInt(2, 10);
      return {
        ...base,
        prompt: `${work} J の仕事を ${time} s で行った。仕事率を求めなさい。`,
        answers: numberAnswers(Number((work / time).toFixed(2)), "W"),
        hint: "仕事率P=W/tを使います。",
      };
    }
    case "kinetic-potential-energy": {
      const mass = randomInt(1, 6) * 2;
      const speed = randomInt(2, 6);
      const kinetic = 0.5 * mass * speed ** 2;
      return {
        ...base,
        prompt: `質量 ${mass} kg の物体が ${speed} m/s で運動している。運動エネルギーを求めなさい。`,
        answers: numberAnswers(kinetic, "J"),
        hint: "K=1/2 mv²を使います。",
      };
    }
    case "mechanical-energy-conservation": {
      const lost = randomInt(2, 20) * 10;
      return {
        ...base,
        prompt: `摩擦を無視できる運動で位置エネルギーが ${lost} J 減少した。運動エネルギーの増加量を求めなさい。`,
        answers: numberAnswers(lost, "J"),
        hint: "力学的エネルギーが保存するので、Uの減少量とKの増加量は等しくなります。",
      };
    }
    case "wave-properties": {
      const f = randomInt(2, 12) * 10;
      const wavelength = randomInt(1, 8) / 2;
      const speed = f * wavelength;
      return {
        ...base,
        prompt: `振動数 ${f} Hz、波長 ${wavelength} m の波の速さを求めなさい。`,
        answers: numberAnswers(speed, "m/s"),
        hint: "v=fλを使います。",
      };
    }
    case "wave-superposition": {
      const first = randomInt(1, 5);
      const second = randomInt(-4, 4);
      const result = first + second;
      return {
        ...base,
        prompt: `同じ位置で変位 +${first} cm の波と変位 ${second >= 0 ? "+" : ""}${second} cm の波が重なった。合成変位を求めなさい。`,
        answers: numberAnswers(result, "cm"),
        hint: "変位を符号付きで足します。",
      };
    }
    case "sound-resonance": {
      const length = randomInt(1, 6) / 10;
      const wavelength = Number((4 * length).toFixed(1));
      return {
        ...base,
        prompt: `長さ ${length} m の片側閉管が基本振動している。波長を求めなさい。`,
        answers: numberAnswers(wavelength, "m"),
        hint: "片側閉管の基本振動ではL=λ/4です。",
      };
    }
    case "heat-temperature": {
      const mass = randomInt(1, 5) / 10;
      const c = randomInt(2, 6) * 100;
      const deltaT = randomInt(2, 8) * 5;
      const heat = mass * c * deltaT;
      return {
        ...base,
        prompt: `質量 ${mass} kg、比熱 ${c} J/(kg·K) の物体を ${deltaT} K 温めるのに必要な熱量を求めなさい。`,
        answers: numberAnswers(heat, "J"),
        hint: "Q=mcΔTを使います。",
      };
    }
    case "heat-balance": {
      const low = randomInt(1, 3) * 10;
      const high = low + randomInt(2, 5) * 20;
      const equilibrium = (low + high) / 2;
      return {
        ...base,
        prompt: `同じ質量の ${low} ℃ の水と ${high} ℃ の水を断熱容器で混ぜる。最終温度を求めなさい。`,
        answers: [String(equilibrium), `${equilibrium}℃`, `${equilibrium} ℃`],
        hint: "同質量・同比熱なら、失う熱量と得る熱量が等しいので温度の中間になります。",
      };
    }
    case "ohms-law": {
      const resistance = randomInt(2, 12);
      const current = randomInt(1, 5) / 2;
      const voltage = resistance * current;
      return {
        ...base,
        prompt: `抵抗 ${resistance} Ω に ${voltage} V の電圧を加えた。電流を求めなさい。`,
        answers: numberAnswers(current, "A"),
        hint: "I=V/Rを使います。",
      };
    }
    case "electric-power": {
      const voltage = choice([6, 12, 100, 120]);
      const current = randomInt(1, 5);
      const power = voltage * current;
      return {
        ...base,
        prompt: `${voltage} V で ${current} A の電流が流れる機器の電力を求めなさい。`,
        answers: numberAnswers(power, "W"),
        hint: "P=VIを使います。",
      };
    }
    case "energy-resources-efficiency": {
      const input = randomInt(4, 10) * 100;
      const percent = choice([50, 60, 70, 75, 80, 90]);
      const useful = (input * percent) / 100;
      return {
        ...base,
        prompt: `入力エネルギー ${input} J のうち ${useful} J を有効利用できた。変換効率を求めなさい。`,
        answers: [String(percent), `${percent}%`, `${percent} %`],
        hint: "有効利用エネルギー÷入力エネルギー×100 %です。",
      };
    }
    case "physics-opens-world": {
      const concepts = [
        ["加速度センサー", "加速度", ["加速度", "a"]],
        ["スピーカー", "波", ["波", "音", "音と振動"]],
        ["電気ヒーター", "電力", ["電力", "ジュール熱", "電気"]],
      ] as const;
      const [device, concept, answers] = concepts[index % concepts.length];
      return {
        ...base,
        prompt: `${device}の仕組みを考えるとき、物理基礎で特に関係の深い概念を1つ答えなさい。`,
        answers: [...answers],
        hint: `${device}では「${concept}」が重要な手がかりです。`,
      };
    }
    default:
      return {
        ...base,
        prompt: `${title}の内容を復習し、この小単元で使う代表的な物理量を1つ答えなさい。`,
        answers: [title],
        hint: "教材本文の見出しと式を確認してください。",
      };
  }
};

function choice<T>(values: readonly T[]): T {
  return values[randomInt(0, values.length - 1)] as T;
}

export const generateLessonExercises = (unitKey: string, lessonKey: string, count = 3) => {
  if (!unitLessonKeys[unitKey]?.includes(lessonKey)) return [];
  return Array.from({ length: count }, (_, index) =>
    make(lessonKey, index === count - 1 ? "applied" : "basic", index),
  );
};

export const generateUnitExercises = (unitKey: string) => {
  const lessonKeys = unitLessonKeys[unitKey];
  if (!lessonKeys || lessonKeys.length === 0) return [];
  const difficulties: ExerciseDifficulty[] = [
    ...Array.from({ length: 12 }, () => "basic" as const),
    ...Array.from({ length: 3 }, () => "applied" as const),
    "challenge",
  ];
  return difficulties.map((difficulty, index) =>
    make(lessonKeys[index % lessonKeys.length] as string, difficulty, index),
  );
};
