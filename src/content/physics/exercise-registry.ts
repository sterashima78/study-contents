import type { ExerciseDifficulty } from "../math1/exercise-generators";
import type { GeneratedExercise } from "../math1/exercise-registry";

const lessonTitles: Record<string, string> = {
  "planar-vectors": "曲線運動の速度と加速度",
  "projectile-motion": "水平投射と斜方投射",
  "rigid-body-equilibrium": "剛体のつり合いと力のモーメント",
  "momentum-impulse": "運動量と力積",
  "momentum-conservation": "運動量保存の法則",
  "collision-energy": "衝突と力学的エネルギー",
  "uniform-circular-motion": "等速円運動",
  "simple-harmonic-motion": "単振動",
  "kepler-laws": "惑星の運動とケプラーの法則",
  "universal-gravitation": "万有引力と重力による位置エネルギー",
  "kinetic-theory-pressure": "気体分子の運動と圧力",
  "ideal-gas-internal-energy": "理想気体の内部エネルギー",
  "thermodynamic-process": "気体の状態変化と熱力学第一法則",
  "wave-equation-phase": "波の式・位相・ホイヘンスの原理",
  "wave-interference-diffraction": "水面波の干渉と回折",
  "sound-interference": "音の干渉・回折と周波数分析",
  "doppler-effect": "音のドップラー効果",
  "geometrical-optics": "光の伝わり方と幾何光学",
  "light-interference-diffraction": "光の回折と干渉",
  "electric-field-coulomb": "電荷と電界",
  "electric-potential": "電界と電位",
  capacitance: "コンデンサーと電気容量",
  "dc-circuits": "直流回路・内部抵抗・半導体",
  "magnetic-field-current": "電流がつくる磁界",
  "magnetic-force": "電流が磁界から受ける力とローレンツ力",
  "electromagnetic-induction": "電磁誘導・自己誘導・交流",
  "electromagnetic-waves": "電磁波の発生・性質・利用",
  "electron-charge-mass": "電子の電荷と質量",
  "wave-particle-duality": "光と電子の粒子性・波動性",
  "atomic-spectrum": "原子の構造とスペクトル",
  "nuclear-physics": "原子核・崩壊・核反応",
  "elementary-particles": "素粒子と基本的な力",
  "physics-future": "物理学が築く未来",
};

const unitLessonKeys: Record<string, string[]> = {
  "planar-rigid-body": ["planar-vectors", "projectile-motion", "rigid-body-equilibrium"],
  momentum: ["momentum-impulse", "momentum-conservation", "collision-energy"],
  "circular-oscillation": ["uniform-circular-motion", "simple-harmonic-motion"],
  gravitation: ["kepler-laws", "universal-gravitation"],
  "kinetic-theory": [
    "kinetic-theory-pressure",
    "ideal-gas-internal-energy",
    "thermodynamic-process",
  ],
  "wave-propagation": ["wave-equation-phase", "wave-interference-diffraction"],
  sound: ["sound-interference", "doppler-effect"],
  light: ["geometrical-optics", "light-interference-diffraction"],
  "electricity-current": ["electric-field-coulomb", "electric-potential", "capacitance", "dc-circuits"],
  "current-magnetic-field": [
    "magnetic-field-current",
    "magnetic-force",
    "electromagnetic-induction",
    "electromagnetic-waves",
  ],
  "electron-light": ["electron-charge-mass", "wave-particle-duality"],
  "atom-nucleus": ["atomic-spectrum", "nuclear-physics", "elementary-particles"],
  "future-physics": ["physics-future"],
};

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const choice = <T>(values: readonly T[]) => values[randomInt(0, values.length - 1)] as T;

const numberAnswers = (value: number, unit?: string) => {
  const plain = Number.isInteger(value) ? String(value) : String(Number(value.toFixed(3)));
  if (!unit) return [plain];
  return [plain, `${plain}${unit}`, `${plain} ${unit}`];
};

const conceptQuestions: Record<string, readonly { prompt: string; answers: string[]; hint: string }[]> = {
  "wave-interference-diffraction": [
    {
      prompt: "同位相の二つの波で、経路差が波長の整数倍の点では強め合い・弱め合いのどちらになるか。",
      answers: ["強め合い", "強めあい"],
      hint: "同位相に戻る経路差を考えます。",
    },
    {
      prompt: "波長と開口幅が同程度になると顕著になる波の現象を答えなさい。",
      answers: ["回折"],
      hint: "波が障害物の背後へ回り込みます。",
    },
  ],
  "doppler-effect": [
    {
      prompt: "音源が静止観測者へ近づくと、観測される振動数は高くなるか低くなるか。",
      answers: ["高くなる", "高い", "大きくなる"],
      hint: "音源前方の波長を考えます。",
    },
  ],
  "electromagnetic-waves": [
    {
      prompt: "電磁波が真空中を伝わるために物質の媒質は必要か。",
      answers: ["不要", "必要ない", "いらない"],
      hint: "太陽光は宇宙空間を伝わります。",
    },
    {
      prompt: "可視光は電磁波である。正しいか誤りか。",
      answers: ["正しい", "正", "はい"],
      hint: "光は電磁波の一種です。",
    },
  ],
  "elementary-particles": [
    {
      prompt: "電子はクォークとレプトンのどちらに分類されるか。",
      answers: ["レプトン"],
      hint: "ニュートリノと同じ分類です。",
    },
    {
      prompt: "陽子・中性子の内部を構成する基本粒子を答えなさい。",
      answers: ["クォーク", "quark", "quarks"],
      hint: "アップ、ダウンなどの種類があります。",
    },
  ],
  "physics-future": [
    {
      prompt: "重力波観測が直接扱う対象として『時空のゆがみ』と『化学反応速度』のどちらが適切か。",
      answers: ["時空のゆがみ", "時空"],
      hint: "一般相対論に関係します。",
    },
    {
      prompt: "量子コンピュータの基盤となる物理分野を答えなさい。",
      answers: ["量子力学", "量子物理", "量子論"],
      hint: "重ね合わせなどの量子状態を利用します。",
    },
  ],
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
    case "planar-vectors": {
      const a = choice([3, 5, 6, 8]);
      const b = a === 3 ? 4 : a === 5 ? 12 : a === 6 ? 8 : 15;
      const speed = Math.sqrt(a * a + b * b);
      return {
        ...base,
        prompt: `互いに直交する速度成分が ${a} m/s と ${b} m/s である。速さを求めなさい。`,
        answers: numberAnswers(speed, "m/s"),
        hint: "速度ベクトルの大きさを三平方の関係で求めます。",
      };
    }
    case "projectile-motion": {
      const vx = randomInt(4, 15);
      const time = randomInt(2, 5);
      return {
        ...base,
        prompt: `空気抵抗を無視し、水平速度 ${vx} m/s で投げた物体が ${time} s 後に進む水平距離を求めなさい。`,
        answers: numberAnswers(vx * time, "m"),
        hint: "水平方向は等速運動なのでx=vₓtです。",
      };
    }
    case "rigid-body-equilibrium": {
      const force = randomInt(2, 10) * 5;
      const distance = choice([0.1, 0.2, 0.25, 0.4, 0.5]);
      return {
        ...base,
        prompt: `支点から ${distance} m の位置に ${force} N の力を腕に垂直に加える。力のモーメントの大きさを求めなさい。`,
        answers: numberAnswers(force * distance, "N·m"),
        hint: "N=Fℓです。",
      };
    }
    case "momentum-impulse": {
      const mass = randomInt(1, 6);
      const speed = randomInt(2, 10);
      return {
        ...base,
        prompt: `質量 ${mass} kg の物体が ${speed} m/s で進む。運動量の大きさを求めなさい。`,
        answers: numberAnswers(mass * speed, "kg·m/s"),
        hint: "p=mvです。",
      };
    }
    case "momentum-conservation": {
      const m1 = randomInt(1, 4);
      const m2 = randomInt(1, 4);
      const common = randomInt(1, 4);
      const u1 = common * (m1 + m2) / m1;
      if (!Number.isInteger(u1)) return make(lessonKey, difficulty, index + 10);
      return {
        ...base,
        prompt: `質量 ${m1} kg の物体が ${u1} m/s で進み、静止した ${m2} kg の物体と衝突して一体になった。共通速度を求めなさい。`,
        answers: numberAnswers(common, "m/s"),
        hint: "衝突前後の全運動量を等しくします。",
      };
    }
    case "collision-energy": {
      const incident = randomInt(5, 12);
      const e = choice([0.5, 0.6, 0.75, 0.8]);
      const rebound = incident * e;
      return {
        ...base,
        prompt: `物体が固定壁へ ${incident} m/s で衝突し、逆向きに ${rebound} m/s ではね返った。はね返り係数を求めなさい。`,
        answers: numberAnswers(e),
        hint: "固定壁では、はね返った速さ÷衝突前の速さで求めます。",
      };
    }
    case "uniform-circular-motion": {
      const radius = randomInt(1, 5);
      const speed = radius * randomInt(2, 5);
      const a = (speed * speed) / radius;
      return {
        ...base,
        prompt: `半径 ${radius} m の円を速さ ${speed} m/s で等速円運動する物体の向心加速度を求めなさい。`,
        answers: numberAnswers(a, "m/s²"),
        hint: "a=v²/rです。",
      };
    }
    case "simple-harmonic-motion": {
      const period = choice([1, 2, 4]);
      const answers =
        period === 1
          ? ["2π", "2πrad/s", "2π rad/s"]
          : period === 2
            ? ["π", "πrad/s", "π rad/s"]
            : ["π/2", "π/2rad/s", "π/2 rad/s", "0.5π"];
      return {
        ...base,
        prompt: `周期 ${period} s の単振動の角振動数ωをπを用いて答えなさい。`,
        answers,
        hint: "ω=2π/Tです。",
      };
    }
    case "kepler-laws": {
      const ratio = choice([4, 9, 16]);
      const periodRatio = ratio === 4 ? 8 : ratio === 9 ? 27 : 64;
      return {
        ...base,
        prompt: `同じ中心天体を回る二惑星で軌道長半径の比が ${ratio} のとき、周期の比を求めなさい。`,
        answers: numberAnswers(periodRatio),
        hint: "T²/a³が一定なので、周期比は長半径比の3/2乗です。",
      };
    }
    case "universal-gravitation":
    case "electric-field-coulomb": {
      const factor = choice([2, 3, 4]);
      const denominator = factor * factor;
      return {
        ...base,
        prompt: `${lessonKey === "universal-gravitation" ? "二物体間の万有引力" : "二点電荷間の静電気力"}について、距離だけを ${factor} 倍にすると力は元の何倍になるか。`,
        answers: [`1/${denominator}`, `${denominator}分の1`, String(1 / denominator)],
        hint: "力は距離の2乗に反比例します。",
      };
    }
    case "kinetic-theory-pressure": {
      const n = randomInt(1, 3);
      const temperature = choice([200, 300, 400]);
      const pv = Number((n * 8.31 * temperature).toFixed(1));
      return {
        ...base,
        prompt: `物質量 ${n} mol、温度 ${temperature} K の理想気体についてpVをR=8.31 J/(mol·K)として求めなさい。`,
        answers: numberAnswers(pv, "J"),
        hint: "pV=nRTです。",
      };
    }
    case "ideal-gas-internal-energy": {
      const n = randomInt(1, 3);
      const deltaT = choice([10, 20, 40]);
      const deltaU = Number((1.5 * n * 8.31 * deltaT).toFixed(1));
      return {
        ...base,
        prompt: `${n} mol の単原子分子理想気体を ${deltaT} K 昇温した。内部エネルギーの増加をR=8.31として求めなさい。`,
        answers: numberAnswers(deltaU, "J"),
        hint: "ΔU=(3/2)nRΔTです。",
      };
    }
    case "thermodynamic-process": {
      const work = randomInt(1, 5) * 100;
      const deltaU = randomInt(1, 5) * 100;
      const heat = work + deltaU;
      return {
        ...base,
        prompt: `気体へ ${heat} J の熱を加え、気体が外部へ ${work} J の仕事をした。内部エネルギーの増加を求めなさい。`,
        answers: numberAnswers(deltaU, "J"),
        hint: "Q=ΔU+Wです。",
      };
    }
    case "wave-equation-phase": {
      const wavelength = choice([0.25, 0.5, 1, 2]);
      const frequency = randomInt(2, 8);
      return {
        ...base,
        prompt: `波長 ${wavelength} m、振動数 ${frequency} Hz の波の速さを求めなさい。`,
        answers: numberAnswers(wavelength * frequency, "m/s"),
        hint: "v=fλです。",
      };
    }
    case "sound-interference": {
      const f1 = randomInt(40, 80) * 10;
      const beat = randomInt(2, 8);
      return {
        ...base,
        prompt: `${f1} Hz と ${f1 + beat} Hz の音を同時に鳴らす。うなりの振動数を求めなさい。`,
        answers: numberAnswers(beat, "Hz"),
        hint: "うなりの振動数は二つの振動数の差です。",
      };
    }
    case "geometrical-optics": {
      const n = choice([1.5, 2, 2.5]);
      const speed = 3e8 / n;
      return {
        ...base,
        prompt: `真空中の光速を3.0×10^8 m/sとする。光速が ${speed.toExponential(1)} m/s の媒質の屈折率を求めなさい。`,
        answers: numberAnswers(n),
        hint: "n=c/vです。",
      };
    }
    case "light-interference-diffraction": {
      const wavelengthNm = choice([400, 500, 600]);
      const distance = choice([1, 2]);
      const slitMm = choice([0.5, 1]);
      const fringeMm = (wavelengthNm * 1e-9 * distance) / (slitMm * 1e-3) * 1000;
      return {
        ...base,
        prompt: `波長 ${wavelengthNm} nm、スクリーンまで ${distance} m、スリット間隔 ${slitMm} mm のヤングの実験で縞間隔をmmで求めなさい。`,
        answers: numberAnswers(fringeMm, "mm"),
        hint: "Δx=λL/d。nmとmmの換算に注意します。",
      };
    }
    case "electric-potential": {
      const charge = randomInt(1, 5);
      const voltage = randomInt(2, 12);
      return {
        ...base,
        prompt: `${charge} C の正電荷が ${voltage} V の電位差に相当する位置を移動する。位置エネルギー変化の大きさを求めなさい。`,
        answers: numberAnswers(charge * voltage, "J"),
        hint: "|ΔU|=|qΔV|です。",
      };
    }
    case "capacitance": {
      const capacitance = randomInt(1, 10) * 10;
      const voltage = randomInt(2, 10);
      const chargeMicroC = capacitance * voltage;
      return {
        ...base,
        prompt: `電気容量 ${capacitance} μF のコンデンサーに ${voltage} V を加える。蓄えられる電荷をμCで求めなさい。`,
        answers: numberAnswers(chargeMicroC, "μC"),
        hint: "Q=CVで、μF×V=μCです。",
      };
    }
    case "dc-circuits": {
      const emf = randomInt(6, 15);
      const current = randomInt(1, 4);
      const internal = choice([0.5, 1]);
      const terminal = emf - internal * current;
      return {
        ...base,
        prompt: `起電力 ${emf} V、内部抵抗 ${internal} Ω の電池から ${current} A 流れる。端子電圧を求めなさい。`,
        answers: numberAnswers(terminal, "V"),
        hint: "V=E−rIです。",
      };
    }
    case "magnetic-field-current": {
      const factor = choice([2, 3, 4]);
      return {
        ...base,
        prompt: `長い直線電流からの距離だけを ${factor} 倍にすると、磁束密度は元の何倍になるか。`,
        answers: [`1/${factor}`, `${factor}分の1`, String(1 / factor)],
        hint: "直線電流の磁界は距離rに反比例します。",
      };
    }
    case "magnetic-force": {
      const b = choice([0.2, 0.5, 1]);
      const current = randomInt(2, 6);
      const length = choice([0.1, 0.2, 0.5]);
      return {
        ...base,
        prompt: `磁束密度 ${b} T の磁界に垂直な長さ ${length} m の導線へ ${current} A 流す。導線が受ける力を求めなさい。`,
        answers: numberAnswers(b * current * length, "N"),
        hint: "F=BIlです。",
      };
    }
    case "electromagnetic-induction": {
      const turns = choice([10, 20, 50]);
      const deltaFlux = choice([0.001, 0.002, 0.005]);
      const time = choice([0.05, 0.1, 0.2]);
      const emf = (turns * deltaFlux) / time;
      return {
        ...base,
        prompt: `${turns} 巻きのコイルで、1巻きあたりの磁束が ${time} s の間に ${deltaFlux} Wb 変化した。誘導起電力の大きさを求めなさい。`,
        answers: numberAnswers(emf, "V"),
        hint: "|e|=N|ΔΦ|/Δtです。",
      };
    }
    case "electron-charge-mass": {
      const count = randomInt(2, 8);
      return {
        ...base,
        prompt: `電子 ${count} 個がもつ全電荷を、電気素量eを用いて表しなさい。`,
        answers: [`-${count}e`, `−${count}e`],
        hint: "電子1個の電荷は−eです。",
      };
    }
    case "wave-particle-duality": {
      const items = [
        { prompt: "振動数fの光子1個のエネルギーを式で答えなさい。", answers: ["hf", "E=hf", "e=hf"], hint: "プランク定数hを使います。" },
        { prompt: "運動量pの粒子に対応するド・ブロイ波長を式で答えなさい。", answers: ["h/p", "λ=h/p", "lambda=h/p"], hint: "波長は運動量に反比例します。" },
      ];
      const q = items[index % items.length] as (typeof items)[number];
      return { ...base, ...q };
    }
    case "atomic-spectrum": {
      const energy = choice([1.9, 2, 3.4, 10.2]);
      return {
        ...base,
        prompt: `原子がエネルギー差 ${energy} eV の二準位間を遷移して光子を放出する。光子のエネルギーを求めなさい。`,
        answers: numberAnswers(energy, "eV"),
        hint: "光子エネルギーは準位差|ΔE|です。",
      };
    }
    case "nuclear-physics": {
      const halfLives = randomInt(1, 4);
      const denominator = 2 ** halfLives;
      return {
        ...base,
        prompt: `ある放射性核種について ${halfLives} 回の半減期が経過した。未崩壊核の割合を答えなさい。`,
        answers: [`1/${denominator}`, `${denominator}分の1`, String(1 / denominator)],
        hint: "半減期が1回経過するごとに残存量は1/2になります。",
      };
    }
    default: {
      const questions = conceptQuestions[lessonKey];
      if (questions && questions.length > 0) {
        const question = questions[index % questions.length] as (typeof questions)[number];
        return { ...base, ...question };
      }
      return {
        ...base,
        prompt: `${title}で重要な条件や法則を教材本文で確認し、この小単元の代表的な語句を1つ答えなさい。`,
        answers: [title],
        hint: "教材本文の見出しとまとめを確認してください。",
      };
    }
  }
};

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
