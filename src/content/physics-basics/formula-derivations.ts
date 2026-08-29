import type { FormulaDerivation } from "../math1/formula-derivations";

const physicsBasicsFormulaDerivations: Record<string, FormulaDerivation> = {
  "physical-quantities-units": {
    title: "換算の根拠: 1 m/s = 3.6 km/h",
    introduction: "1 mをkmへ、1 sをhへ同時に換算して比を保ちます。",
    steps: [
      {
        expression: "1 m/s = 0.001 km / (1/3600) h",
        note: "1 m = 0.001 km、1 s = 1/3600 hです。",
      },
      {
        expression: "= 0.001 × 3600 km/h",
        note: "分母の1/3600で割ることは3600を掛けることです。",
      },
      {
        expression: "= 3.6 km/h",
        note: "したがってm/sからkm/hへは3.6倍、逆は3.6で割ります。",
      },
    ],
  },
  "velocity-graphs": {
    title: "式の根拠: 平均の速度は位置―時間グラフの傾き",
    introduction: "変位の定義とグラフの傾きの定義を対応させます。",
    steps: [
      {
        expression: "Δx = x₂ − x₁, Δt = t₂ − t₁",
        note: "2つの時刻の間で位置と時間がどれだけ変化したかを表します。",
      },
      {
        expression: "グラフの傾き = (x₂ − x₁)/(t₂ − t₁)",
        note: "縦軸の変化量を横軸の変化量で割ったものが傾きです。",
      },
      {
        expression: "= Δx/Δt = v",
        note: "これは平均の速度の定義と同じなので、位置―時間グラフの傾きが速度になります。",
      },
    ],
  },
  acceleration: {
    title: "式の根拠: 等加速度運動の v = v₀ + at",
    introduction: "加速度の定義を、速度vについて解き直します。",
    steps: [
      {
        expression: "a = (v − v₀)/t",
        note: "一定の加速度aでは、速度の変化量を時間で割った値がaです。",
      },
      {
        expression: "at = v − v₀",
        note: "両辺にtを掛けます。",
      },
      {
        expression: "v = v₀ + at",
        note: "v₀を右辺へ移すと、時刻tの速度を表す式になります。",
      },
    ],
  },
  "free-fall": {
    title: "式の根拠: 自由落下の加速度がgになる理由",
    introduction: "空気抵抗を無視し、落下中に重力だけが働くとして運動方程式を使います。",
    steps: [
      {
        expression: "ΣF = mg",
        note: "下向きを正に取ると、落下物体に働く合力は重力mgです。",
      },
      {
        expression: "ma = mg",
        note: "運動方程式ΣF = maへ代入します。",
      },
      {
        expression: "a = g",
        note: "両辺を質量mで割ると、質量によらず加速度がgになることが分かります。",
      },
    ],
  },
  "kinetic-potential-energy": {
    title: "式の根拠: 運動エネルギー K = 1/2 mv²",
    introduction:
      "静止していた物体へ一定の合力を加える場合の仕事を、運動方程式と等加速度運動から整理します。",
    steps: [
      {
        expression: "W = Fx = max",
        note: "力と移動が同方向ならW = Fxで、F = maを代入できます。",
      },
      {
        expression: "v² = 2ax ⇒ ax = v²/2",
        note: "初速度0の等加速度運動ではv² = 2axが成り立ちます。",
      },
      {
        expression: "W = m(v²/2) = 1/2 mv²",
        note: "静止状態から速さvまで加速するのにされた仕事が運動エネルギーの増加に対応します。",
      },
    ],
  },
  "mechanical-energy-conservation": {
    title: "保存則の根拠: 重力だけが仕事をする場合",
    introduction: "重力がした仕事を運動エネルギーと位置エネルギーの変化の両方から表します。",
    steps: [
      {
        expression: "W重力 = ΔK",
        note: "仕事と運動エネルギーの関係から、重力がした仕事は運動エネルギーの変化に等しくなります。",
      },
      {
        expression: "W重力 = −ΔU",
        note: "重力が正の仕事をすると位置エネルギーは同じ量だけ減るので、符号が反対です。",
      },
      {
        expression: "ΔK = −ΔU ⇒ Δ(K + U) = 0",
        note: "KとUの変化を足すと0になり、K + Uが一定だと分かります。",
      },
    ],
  },
  "wave-properties": {
    title: "式の根拠: v = fλ",
    introduction: "1周期の間に波形が1波長だけ進むことから導きます。",
    steps: [
      {
        expression: "1周期Tの間に進む距離 = λ",
        note: "同じ位相の点から次の同じ位相の点までが1波長です。",
      },
      {
        expression: "v = λ/T",
        note: "速さは距離を時間で割った量です。",
      },
      {
        expression: "f = 1/T より v = fλ",
        note: "1/Tを振動数fへ置き換えると、基本関係が得られます。",
      },
    ],
  },
  "sound-resonance": {
    title: "式の根拠: 片側閉管の基本振動 L = λ/4",
    introduction: "閉端と開口端での空気の変位の条件から、定常波の形を読み取ります。",
    steps: [
      {
        expression: "閉端: 変位の節",
        note: "閉じた端では空気が端を越えて動けないため、変位が0の節になります。",
      },
      {
        expression: "開口端: 変位の腹",
        note: "開いた端では空気が動きやすく、基本振動では腹になります。",
      },
      {
        expression: "節から隣の腹まで = λ/4 ⇒ L = λ/4",
        note: "基本振動では管内に節から腹までの最短の定常波が入ります。",
      },
    ],
  },
  "electric-power": {
    title: "式の根拠: E = Pt",
    introduction: "電力を『単位時間あたりに変換されるエネルギー』という定義から整理します。",
    steps: [
      {
        expression: "P = E/t",
        note: "電力Pは時間tあたりに変換されるエネルギーEです。",
      },
      {
        expression: "Pt = E",
        note: "両辺にtを掛けます。",
      },
      {
        expression: "E = Pt",
        note: "一定の電力を時間tだけ使うときの電力量を表す式になります。",
      },
    ],
  },
};

export const getPhysicsBasicsFormulaDerivation = (lessonKey: string) =>
  physicsBasicsFormulaDerivations[lessonKey];
