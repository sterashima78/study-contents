import type { FormulaDerivation } from "../math1/formula-derivations";

const physicsFormulaDerivations: Record<string, FormulaDerivation> = {
  "projectile-motion": {
    title: "式の根拠: 投射運動を水平・鉛直成分へ分ける",
    introduction:
      "空気抵抗を無視すると重力は鉛直方向だけに働くため、水平と鉛直の運動を独立に扱えます。",
    steps: [
      {
        expression: "v₀x = v₀ cosθ, v₀y = v₀ sinθ",
        note: "初速度を水平成分と鉛直成分へ分解します。",
      },
      {
        expression: "x = v₀x t = v₀ cosθ · t",
        note: "水平方向の加速度は0なので等速運動です。",
      },
      {
        expression: "y = v₀y t − (1/2)gt²",
        note: "上向きを正に取ると、鉛直方向の加速度は−gです。",
      },
    ],
  },
  "momentum-impulse": {
    title: "式の根拠: 力積と運動量変化 Δp = FΔt",
    introduction: "一定の合力が働く場合に、運動方程式を時間について整理します。",
    steps: [
      {
        expression: "F = ma = mΔv/Δt",
        note: "質量一定として、加速度を速度変化で表します。",
      },
      {
        expression: "FΔt = mΔv",
        note: "両辺に作用時間Δtを掛けます。",
      },
      {
        expression: "FΔt = mv₂ − mv₁ = Δp",
        note: "p=mvと定義すると、力積が運動量変化に等しいことが分かります。",
      },
    ],
  },
  "uniform-circular-motion": {
    title: "式の根拠: 等速円運動の向心加速度 a = v²/r",
    introduction:
      "短い時間に速度ベクトルの向きだけが変わるとき、速度ベクトルの相似関係から中心向き加速度を求めます。",
    steps: [
      {
        expression: "Δv/v ≈ Δs/r",
        note: "微小時間では、速度ベクトルが作る三角形と半径が作る三角形が相似になります。",
      },
      {
        expression: "Δs = vΔt ⇒ Δv ≈ v²Δt/r",
        note: "短時間に進む弧の長さをvΔtで表します。",
      },
      {
        expression: "a = lim(Δv/Δt) = v²/r = rω²",
        note: "Δtを十分小さくすると、加速度は円の中心を向きます。",
      },
    ],
  },
  "simple-harmonic-motion": {
    title: "式の根拠: ばね振り子の周期",
    introduction: "フックの法則と単振動の加速度を運動方程式で対応させます。",
    steps: [
      {
        expression: "F = −kx = ma",
        note: "復元力は変位と反対向きで、運動方程式に従います。",
      },
      {
        expression: "a = −(k/m)x = −ω²x",
        note: "単振動の加速度a=−ω²xと係数を比べます。",
      },
      {
        expression: "ω = √(k/m), T = 2π/ω = 2π√(m/k)",
        note: "角振動数と周期の関係ω=2π/Tを使います。",
      },
    ],
  },
  "ideal-gas-internal-energy": {
    title: "式の根拠: 単原子分子理想気体の内部エネルギー",
    introduction:
      "単原子分子理想気体では、内部エネルギーを分子の並進運動エネルギーの総和として扱います。",
    steps: [
      {
        expression: "1分子の平均並進運動エネルギー = (3/2)kT",
        note: "気体分子運動論で得られる平均値を使います。",
      },
      {
        expression: "N分子では U = N(3/2)kT",
        note: "分子間相互作用の位置エネルギーを無視し、全分子について足します。",
      },
      {
        expression: "Nk = nR より U = (3/2)nRT",
        note: "アボガドロ定数を介した関係R=Nₐkを用います。",
      },
    ],
  },
  "wave-equation-phase": {
    title: "式の根拠: 進行波の位相と v = fλ",
    introduction: "波形が1周期の間に1波長だけ進むことを、位相一定の条件で表します。",
    steps: [
      {
        expression: "位相 = 2π(t/T − x/λ)",
        note: "同じ位相の点を追うと、波形上の同じ状態がどのように移動するか分かります。",
      },
      {
        expression: "1周期Tで進む距離 = λ",
        note: "tをTだけ増やすと、同じ位相を保つためxはλだけ増えます。",
      },
      {
        expression: "v = λ/T = fλ",
        note: "f=1/Tを用いると波の基本式になります。",
      },
    ],
  },
  "light-interference-diffraction": {
    title: "式の根拠: ヤングの干渉縞 Δx = λL/d",
    introduction: "二つのスリットから観測点までの経路差を、小角近似で幾何学的に表します。",
    steps: [
      {
        expression: "経路差 ΔL ≈ d sinθ",
        note: "スリット間隔dに対し観測点が十分遠いとみなします。",
      },
      {
        expression: "明線: d sinθ = mλ",
        note: "経路差が波長の整数倍なら同位相で強め合います。",
      },
      {
        expression: "sinθ ≈ tanθ = x/L ⇒ xₘ ≈ mλL/d",
        note: "隣り合う明線の差を取るとΔx=λL/dです。",
      },
    ],
  },
  capacitance: {
    title: "式の根拠: コンデンサーのエネルギー U = (1/2)CV²",
    introduction: "電荷を0からQまで少しずつ蓄えるときに必要な仕事を電位差から求めます。",
    steps: [
      {
        expression: "V = q/C",
        note: "充電途中で電荷がqのときの電位差です。",
      },
      {
        expression: "dW = Vdq = (q/C)dq",
        note: "微小電荷dqを運ぶ仕事を表します。",
      },
      {
        expression: "U = ∫₀Q(q/C)dq = Q²/(2C) = (1/2)CV²",
        note: "Q=CVを使うと電圧表示へ変形できます。",
      },
    ],
  },
  "magnetic-force": {
    title: "式の根拠: 磁界中の荷電粒子の円運動",
    introduction: "速度と磁界が垂直なら、ローレンツ力が常に速度と垂直な向心力になります。",
    steps: [
      {
        expression: "F磁 = |q|vB",
        note: "vとBが垂直なのでsinθ=1です。",
      },
      {
        expression: "|q|vB = mv²/r",
        note: "磁気力を円運動の向心力に等しく置きます。",
      },
      {
        expression: "r = mv/(|q|B)",
        note: "粒子の運動量が大きいほど軌道半径が大きくなります。",
      },
    ],
  },
  "nuclear-physics": {
    title: "式の根拠: 半減期を用いた残存量",
    introduction: "同じ半減期Tが経過するたび、未崩壊の核種が半分になることを繰り返します。",
    steps: [
      {
        expression: "t = T で N = N₀/2",
        note: "半減期の定義です。",
      },
      {
        expression: "t = 2T で N = N₀(1/2)²",
        note: "さらに1回半減すると残存量は再び半分です。",
      },
      {
        expression: "t/T回の半減 ⇒ N = N₀(1/2)^(t/T)",
        note: "同じ割合で減るので指数関数で表せます。",
      },
    ],
  },
};

export const getPhysicsFormulaDerivation = (lessonKey: string) =>
  physicsFormulaDerivations[lessonKey];
