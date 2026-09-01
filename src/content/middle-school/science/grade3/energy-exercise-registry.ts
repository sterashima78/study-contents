import type { ExerciseDifficulty } from "../../../math1/exercise-generators";
import type { GeneratedExercise } from "../../../math1/exercise-registry";

const lessonTitles: Record<string, string> = {
  "water-pressure-depth": "水圧と深さの関係を捉える",
  buoyancy: "浮力を水圧差から捉える",
  "force-composition": "2力の合力を作図で求める",
  "force-decomposition": "一つの力を分力に分解する",
  "speed-direction": "運動を速さと向きで表す",
  "motion-recording-graphs": "運動記録を表・グラフで読む",
  "force-speed-change": "力と速さの変わり方を関連付ける",
  "uniform-motion-inertia": "等速直線運動と慣性を捉える",
  "action-reaction": "作用・反作用を区別する",
  "slope-free-fall": "斜面運動から自由落下へつなげる",
  "mechanical-work": "力学的な仕事を計算する",
  power: "仕事率を計算する",
  "work-principle": "仕事の原理を道具と関連付ける",
  "potential-kinetic-energy": "位置エネルギーと運動エネルギーを比較する",
  "mechanical-energy-conservation": "力学的エネルギーの保存を捉える",
};

const unitLessonKeys: Record<string, string[]> = {
  "forces-water-composition": [
    "water-pressure-depth",
    "buoyancy",
    "force-composition",
    "force-decomposition",
  ],
  "motion-laws": [
    "speed-direction",
    "motion-recording-graphs",
    "force-speed-change",
    "uniform-motion-inertia",
    "action-reaction",
    "slope-free-fall",
  ],
  "work-mechanical-energy": [
    "mechanical-work",
    "power",
    "work-principle",
    "potential-kinetic-energy",
    "mechanical-energy-conservation",
  ],
};

type Template = {
  prompt: string;
  answers: string[];
  hint: string;
};

const templates: Record<string, [Template, Template, Template]> = {
  "water-pressure-depth": [
    {
      prompt: "同じ水の中では、深い位置ほど水圧は大きい・小さいのどちらですか。",
      answers: ["大きい", "大きくなる"],
      hint: "上にある水の重さを考えます。",
    },
    {
      prompt: "水中の物体には水圧が一方向・あらゆる向きのどちらから働きますか。",
      answers: ["あらゆる向き", "あらゆる方向"],
      hint: "物体の側面にも水圧は働きます。",
    },
    {
      prompt: "水圧が生じることと関係するものを、水の重さ・水の色から選んでください。",
      answers: ["水の重さ"],
      hint: "深さとの関係を説明できる方です。",
    },
  ],
  buoyancy: [
    {
      prompt: "水中の物体に働く代表的な上向きの力を何といいますか。",
      answers: ["浮力"],
      hint: "水中でばねばかりの値が小さくなる理由です。",
    },
    {
      prompt: "同じ直方体の上面と下面では、一般にどちらの水圧が大きいですか。",
      answers: ["下面", "下面の水圧"],
      hint: "下面の方が深い位置にあります。",
    },
    {
      prompt: "浮力は上向き・下向きのどちらに働きますか。",
      answers: ["上向き", "上"],
      hint: "物体を水中で支える向きです。",
    },
  ],
  "force-composition": [
    {
      prompt: "二つの力と同じ働きをする一つの力を何といいますか。",
      answers: ["合力"],
      hint: "力を一つにまとめた結果です。",
    },
    {
      prompt: "向きの異なる2力の合力を作図するときに使う図形は何ですか。",
      answers: ["平行四辺形"],
      hint: "2力を隣り合う辺として作ります。",
    },
    {
      prompt: "平行四辺形で2力の合力を表す線は、辺・対角線のどちらですか。",
      answers: ["対角線"],
      hint: "同じ始点から反対側の頂点へ引きます。",
    },
  ],
  "force-decomposition": [
    {
      prompt: "一つの力を複数の力に分けることを何といいますか。",
      answers: ["力の分解", "分解"],
      hint: "力の合成の逆の操作です。",
    },
    {
      prompt: "力の分解によって得られた力を何といいますか。",
      answers: ["分力"],
      hint: "合力と対になる用語です。",
    },
    {
      prompt: "力の合成と力の分解は、互いに同じ操作・逆の操作のどちらですか。",
      answers: ["逆の操作", "逆"],
      hint: "まとめる操作と分ける操作です。",
    },
  ],
  "speed-direction": [
    {
      prompt: "12 mを3 sで進んだ物体の平均の速さは何m/sですか。",
      answers: ["4", "4m/s", "4 m/s"],
      hint: "移動距離÷時間です。",
    },
    {
      prompt: "物体の運動を表す二つの要素は、速さと何ですか。",
      answers: ["向き", "方向"],
      hint: "同じ速さでもこれが変われば運動は変化します。",
    },
    {
      prompt: "20 mを4 sで進んだ物体の平均の速さは何m/sですか。",
      answers: ["5", "5m/s", "5 m/s"],
      hint: "20÷4です。",
    },
  ],
  "motion-recording-graphs": [
    {
      prompt:
        "等時間間隔で記録した点の間隔が広がると、速さは大きくなる・小さくなるのどちらですか。",
      answers: ["大きくなる", "大きい"],
      hint: "同じ時間に進む距離を比べます。",
    },
    {
      prompt: "測定値には必ず含まれるものを、誤差・法則から選んでください。",
      answers: ["誤差"],
      hint: "一つ一つの測定値が完全に同じとは限りません。",
    },
    {
      prompt:
        "測定値の規則性を読むとき、個々の値だけでなく活用するものを表・グラフから一つ答えてください。",
      answers: ["表", "グラフ"],
      hint: "全体の傾向を見ます。",
    },
  ],
  "force-speed-change": [
    {
      prompt: "同じ物体なら、加える力が大きいほど速さの変わり方は大きい・小さいのどちらですか。",
      answers: ["大きい", "大きくなる"],
      hint: "比較条件をそろえます。",
    },
    {
      prompt: "物体に力が働くと変化し得る運動の要素を、速さ・向きから一つ答えてください。",
      answers: ["速さ", "向き"],
      hint: "どちらも運動を表す要素です。",
    },
    {
      prompt: "運動方向と同じ向きの力が働き続けると、速さは変化する・必ず一定のどちらですか。",
      answers: ["変化する", "変わる"],
      hint: "合力がある運動を考えます。",
    },
  ],
  "uniform-motion-inertia": [
    {
      prompt: "合力が0で運動している物体が続ける代表的な運動は何ですか。",
      answers: ["等速直線運動"],
      hint: "速さと向きを保つ運動です。",
    },
    {
      prompt: "物体が運動状態を保とうとする性質を何といいますか。",
      answers: ["慣性"],
      hint: "急発進・急停止の身近な現象にも関係します。",
    },
    {
      prompt: "合力が0で静止している物体は、静止を続ける・必ず動き始めるのどちらですか。",
      answers: ["静止を続ける", "静止"],
      hint: "慣性は静止にも当てはまります。",
    },
  ],
  "action-reaction": [
    {
      prompt: "作用・反作用の2力は、同じ物体・別々の物体のどちらに働きますか。",
      answers: ["別々の物体", "別々"],
      hint: "力を受ける物体をそれぞれ確認します。",
    },
    {
      prompt: "二つの物体が互いに及ぼし合う一組の力を何といいますか。",
      answers: ["作用・反作用", "作用反作用"],
      hint: "押す力と押し返す力の組です。",
    },
    {
      prompt: "作用・反作用は、同じ物体に働く2力のつり合いと同じ・異なるのどちらですか。",
      answers: ["異なる", "違う"],
      hint: "力が働く物体が違います。",
    },
  ],
  "slope-free-fall": [
    {
      prompt: "斜面が急になると、速さの変わり方は大きい・小さいのどちらですか。",
      answers: ["大きい", "大きくなる"],
      hint: "斜面方向に働く力を比べます。",
    },
    {
      prompt: "斜面の角度を90度にした場合につながる落下運動を何といいますか。",
      answers: ["自由落下"],
      hint: "重力だけによる代表的な落下です。",
    },
    {
      prompt: "自由落下する物体の速さは、時間とともに大きくなる・一定のどちらですか。",
      answers: ["大きくなる", "大きい"],
      hint: "重力が働き続けます。",
    },
  ],
  "mechanical-work": [
    {
      prompt: "5 Nの力で、力の向きに4 m動かした仕事は何Jですか。",
      answers: ["20", "20J", "20 J"],
      hint: "仕事=力×距離です。",
    },
    {
      prompt: "力学的な仕事の単位を記号で答えてください。",
      answers: ["J", "j", "ジュール"],
      hint: "ジュールの記号です。",
    },
    {
      prompt: "8 Nの力で、力の向きに3 m動かした仕事は何Jですか。",
      answers: ["24", "24J", "24 J"],
      hint: "8×3です。",
    },
  ],
  power: [
    {
      prompt: "100 Jの仕事を5 sで行う仕事率は何Wですか。",
      answers: ["20", "20W", "20 W"],
      hint: "仕事率=仕事÷時間です。",
    },
    {
      prompt: "単位時間当たりの仕事を何といいますか。",
      answers: ["仕事率"],
      hint: "仕事を時間で割った量です。",
    },
    {
      prompt: "120 Jの仕事を4 sで行う仕事率は何Wですか。",
      answers: ["30", "30W", "30 W"],
      hint: "120÷4です。",
    },
  ],
  "work-principle": [
    {
      prompt:
        "摩擦を無視した理想的な道具では、道具を使っても仕事は同じ・小さくなるのどちらですか。",
      answers: ["同じ", "変わらない"],
      hint: "仕事の原理を確認します。",
    },
    {
      prompt:
        "理想的な道具で必要な力が半分になったとき、同じ仕事をする移動距離は代表的に何倍ですか。",
      answers: ["2", "2倍"],
      hint: "力×距離を一定にします。",
    },
    {
      prompt: "仕事の原理では、小さい力にすると必要な移動距離は長くなる・短くなるのどちらですか。",
      answers: ["長くなる", "長い"],
      hint: "理想的には仕事の量が同じです。",
    },
  ],
  "potential-kinetic-energy": [
    {
      prompt: "同じ質量の物体では、高い位置ほど位置エネルギーは大きい・小さいのどちらですか。",
      answers: ["大きい", "大きくなる"],
      hint: "高さだけを変えて比較します。",
    },
    {
      prompt: "同じ質量の物体では、速いほど運動エネルギーは大きい・小さいのどちらですか。",
      answers: ["大きい", "大きくなる"],
      hint: "速さだけを変えて比較します。",
    },
    {
      prompt: "同じ高さなら、質量が大きい物体ほど位置エネルギーは大きい・小さいのどちらですか。",
      answers: ["大きい", "大きくなる"],
      hint: "高さをそろえて質量を比較します。",
    },
  ],
  "mechanical-energy-conservation": [
    {
      prompt:
        "摩擦を無視したとき、位置エネルギーと運動エネルギーの合計は保存される・されないのどちらですか。",
      answers: ["保存される", "一定", "変わらない"],
      hint: "力学的エネルギーの保存を考えます。",
    },
    {
      prompt:
        "物体が高い位置から下がって速くなるとき、位置エネルギーは減り、何エネルギーが増えますか。",
      answers: ["運動エネルギー"],
      hint: "速さと関係するエネルギーです。",
    },
    {
      prompt:
        "摩擦があると、力学的エネルギーの一部は熱・音などへ変わる・必ず消滅するのどちらですか。",
      answers: ["熱・音などへ変わる", "変わる", "熱や音などへ変わる"],
      hint: "エネルギーは別の形へ移ります。",
    },
  ],
};

const difficulties: ExerciseDifficulty[] = ["basic", "applied", "challenge"];

const makeExercise = (
  lessonKey: string,
  difficulty: ExerciseDifficulty,
  templateIndex: number,
  index: number,
): GeneratedExercise => {
  const template = templates[lessonKey]?.[templateIndex % 3];
  if (!template) {
    return {
      id: `middle-science3-motion-${lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
      lessonKeys: [lessonKey],
      lessonTitles: [lessonTitles[lessonKey] ?? lessonKey],
      difficulty,
      answerMode: "text",
      prompt: "教材のまとめにある重要語句を一つ答えてください。",
      answers: [lessonTitles[lessonKey] ?? lessonKey],
      hint: "教材のまとめを確認します。",
    };
  }
  return {
    id: `middle-science3-motion-${lessonKey}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
    lessonKeys: [lessonKey],
    lessonTitles: [lessonTitles[lessonKey] ?? lessonKey],
    difficulty,
    answerMode: "text",
    ...template,
  };
};

export const generateMiddleScience3LessonExercises = (
  unitKey: string,
  lessonKey: string,
  count = 3,
) => {
  if (!unitLessonKeys[unitKey]?.includes(lessonKey) || !templates[lessonKey]) return [];
  return Array.from({ length: count }, (_, index) =>
    makeExercise(lessonKey, difficulties[index % difficulties.length], index, index),
  );
};

export const generateMiddleScience3UnitExercises = (unitKey: string, count = 8) => {
  const lessonKeys = unitLessonKeys[unitKey];
  if (!lessonKeys) return [];
  return Array.from({ length: count }, (_, index) => {
    const lessonKey = lessonKeys[index % lessonKeys.length];
    const difficulty = difficulties[index % difficulties.length];
    return makeExercise(lessonKey, difficulty, index % 3, index);
  });
};
