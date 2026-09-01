import type { MathArea, MathLesson } from "../../../math1/types";

type LessonInput = {
  key: string;
  title: string;
  description: string;
  goals: string[];
  conceptTitle: string;
  body: string[];
  formulas?: string[];
  exampleTitle: string;
  exampleProblem: string;
  exampleSteps: { expression: string; note: string }[];
  practiceTitle: string;
  practiceProblem: string;
  practiceSteps: { prompt: string; answers: string[] }[];
  hint: string;
  summary: string[];
};

const lesson = (input: LessonInput): MathLesson => ({
  key: input.key,
  title: input.title,
  description: input.description,
  goals: input.goals,
  concepts: [
    {
      title: input.conceptTitle,
      body: input.body,
      ...(input.formulas ? { formulas: input.formulas } : {}),
    },
  ],
  example: {
    title: input.exampleTitle,
    problem: input.exampleProblem,
    steps: input.exampleSteps,
  },
  practice: {
    title: input.practiceTitle,
    problem: input.practiceProblem,
    steps: input.practiceSteps,
    hint: input.hint,
  },
  summary: input.summary,
});

export const middleScience2ParticleArea: MathArea = {
  key: "particles",
  title: "粒子",
  description:
    "物質の分解、原子・分子、化学変化、質量の関係を、観察結果と粒子モデルを往復しながら学びます。",
  units: [
    {
      key: "matter-structure",
      title: "物質の成り立ち",
      description:
        "分解で生じる物質の違いを手掛かりに、原子・分子・元素記号・周期表を4技能で整理します。",
      lessons: [
        lesson({
          key: "decomposition-products",
          title: "分解で別の物質が生じることを捉える",
          description:
            "一つの物質から元とは性質の異なる複数の物質が生じる変化を、観察結果から判断します。",
          goals: ["分解の意味を説明できる。", "生成物の性質を根拠に元の物質との違いを判断できる。"],
          conceptTitle: "分解では一つの物質から別の物質が生じる",
          body: [
            "化合物に変化を起こすと、一つの物質から二種類以上の物質が生じることがあります。このような化学変化を分解といいます。",
            "教材では危険な加熱や電気分解の手順を再現せず、提示された観察結果から、生成物が元の物質と異なることを読み取ります。",
          ],
          exampleTitle: "例題: 分解と判断できる根拠",
          exampleProblem:
            "物質Aを変化させると、性質の異なる物質BとCが得られた。何が分解の根拠になるか。",
          exampleSteps: [
            { expression: "A → B + C", note: "一つの物質から複数の物質が生じています。" },
            {
              expression: "B・Cの性質はAと異なる",
              note: "別の物質が生成したことを性質で確かめます。",
            },
            { expression: "分解と判断", note: "観察事実を根拠に結論を出します。" },
          ],
          practiceTitle: "練習: 分解を説明する",
          practiceProblem: "分解の基本を確認します。",
          practiceSteps: [
            {
              prompt: "一つの物質から二種類以上の別の物質が生じる化学変化を何といいますか。",
              answers: ["分解"],
            },
            {
              prompt: "生成物が元の物質と異なると判断するために比べるものは何ですか。",
              answers: ["性質", "物質の性質"],
            },
          ],
          hint: "物質を見分けるときは、色や気体の性質など複数の観察結果を使います。",
          summary: [
            "分解では一つの物質から二種類以上の別の物質が生じる。",
            "生成物の性質を元の物質と比べて判断する。",
          ],
        }),
        lesson({
          key: "atoms-elements",
          title: "原子と元素を区別する",
          description:
            "物質をつくる非常に小さな粒子として原子を捉え、原子の種類を元素と呼ぶことを学びます。",
          goals: [
            "原子を物質を構成する基本的な粒子として説明できる。",
            "原子と元素の用語を区別できる。",
          ],
          conceptTitle: "原子は粒子、元素は原子の種類",
          body: [
            "原子は物質を構成する非常に小さな粒子として扱います。化学変化では原子そのものが別の種類へ変わるのではなく、原子の組合せが変わると考えます。",
            "原子の種類を元素といいます。水素原子や酸素原子という粒子の種類を、水素元素、酸素元素として分類します。",
          ],
          exampleTitle: "例題: 原子と元素を整理する",
          exampleProblem: "『酸素原子』と『酸素元素』は何を表すか。",
          exampleSteps: [
            { expression: "酸素原子", note: "一つ一つの粒子に注目した言い方です。" },
            { expression: "酸素元素", note: "原子の種類に注目した言い方です。" },
          ],
          practiceTitle: "練習: 用語を区別する",
          practiceProblem: "原子と元素の意味を答えます。",
          practiceSteps: [
            { prompt: "物質を構成する非常に小さな粒子を何といいますか。", answers: ["原子"] },
            { prompt: "原子の種類を何といいますか。", answers: ["元素"] },
          ],
          hint: "粒子そのものと、粒子の種類を分けます。",
          summary: ["原子は物質を構成する非常に小さな粒子。", "元素は原子の種類を表す。"],
        }),
        lesson({
          key: "element-symbols-periodic-table",
          title: "元素記号と周期表を読む",
          description:
            "基礎的な元素記号を読み、周期表が多くの元素を整理した表であることを捉えます。",
          goals: ["基礎的な元素記号を読める。", "周期表を元素の整理表として利用できる。"],
          conceptTitle: "元素は世界共通の記号で表す",
          body: [
            "元素はH、C、N、O、Na、Mg、Al、S、Cl、K、Ca、Fe、Cu、Zn、Agなどの元素記号で表します。先頭は大文字で、二文字目があるときは小文字です。",
            "周期表は多くの元素を一定の規則で並べた表です。この段階では全てを暗記するのではなく、よく使う元素記号を読み、必要に応じて周期表で確認します。",
          ],
          exampleTitle: "例題: 元素記号を読む",
          exampleProblem: "O、Fe、Cuが表す元素を答える。",
          exampleSteps: [
            { expression: "O = 酸素", note: "一文字の元素記号です。" },
            { expression: "Fe = 鉄", note: "元素名の日本語と記号を対応させます。" },
            { expression: "Cu = 銅", note: "二文字目は小文字です。" },
          ],
          practiceTitle: "練習: 記号と元素を対応させる",
          practiceProblem: "基礎的な元素記号を確認します。",
          practiceSteps: [
            { prompt: "水素の元素記号を答えてください。", answers: ["H", "h"] },
            { prompt: "Mgが表す元素名を答えてください。", answers: ["マグネシウム"] },
          ],
          hint: "周期表を参照してよい技能として扱います。",
          summary: ["元素は元素記号で表す。", "周期表は多くの元素を整理して確認するために使える。"],
        }),
        lesson({
          key: "molecules-and-models",
          title: "分子を原子の集まりとして捉える",
          description:
            "いくつかの原子が結び付いたまとまりとして分子を捉え、粒子モデルから構成を読みます。",
          goals: [
            "分子を原子が結び付いたまとまりとして説明できる。",
            "モデルから原子の種類と個数を読み取れる。",
          ],
          conceptTitle: "分子は複数の原子が結び付いた粒子",
          body: [
            "分子は、いくつかの原子が結び付いて一つのまとまりになった粒子です。例えば水分子は水素原子二つと酸素原子一つからなるモデルで表せます。",
            "全ての物質が独立した分子として存在するわけではありませんが、中学2年では代表的な物質を原子・分子モデルで表し、構成を読み取ります。",
          ],
          formulas: ["H₂O: Hが2個、Oが1個", "CO₂: Cが1個、Oが2個"],
          exampleTitle: "例題: 水分子のモデルを読む",
          exampleProblem: "H₂O一分子に含まれる水素原子と酸素原子の個数を答える。",
          exampleSteps: [
            { expression: "H₂", note: "右下の2は水素原子が二つあることを表します。" },
            { expression: "O", note: "数字がないときは一つです。" },
            { expression: "H:2個 / O:1個", note: "原子の種類と個数を分けて読みます。" },
          ],
          practiceTitle: "練習: 分子の構成を読む",
          practiceProblem: "CO₂の構成を確認します。",
          practiceSteps: [
            { prompt: "CO₂一分子に炭素原子は何個ありますか。", answers: ["1", "1個"] },
            { prompt: "CO₂一分子に酸素原子は何個ありますか。", answers: ["2", "2個"] },
          ],
          hint: "元素記号の右下の数字に注目します。",
          summary: [
            "分子は複数の原子が結び付いたまとまり。",
            "モデルや化学式から原子の種類と個数を読み取る。",
          ],
        }),
      ],
    },
    {
      key: "chemical-change",
      title: "化学変化を原子・分子で表す",
      description:
        "新しい物質の生成、化学式・化学反応式、酸化と還元、反応に伴う熱の出入りを7技能で学びます。",
      lessons: [
        lesson({
          key: "chemical-change-new-substance",
          title: "化学変化で新しい物質が生じることを捉える",
          description:
            "反応前後の物質の性質を比べ、新しい物質が生じたことを観察事実から判断します。",
          goals: [
            "化学変化を新しい物質が生じる変化として説明できる。",
            "反応前後の性質を根拠に判断できる。",
          ],
          conceptTitle: "化学変化では原子の組合せが変わる",
          body: [
            "二種類以上の物質が反応して、反応前とは異なる性質をもつ物質が生じる変化を化学変化として捉えます。",
            "粒子モデルでは、化学変化の前後で原子の種類と総数は保たれ、原子の組合せが変わると考えます。",
          ],
          exampleTitle: "例題: 新しい物質が生じた根拠",
          exampleProblem:
            "物質AとBを反応させると、AにもBにもなかった性質をもつCが生じた。何が化学変化の根拠か。",
          exampleSteps: [
            { expression: "A + B → C", note: "反応前後の物質を整理します。" },
            { expression: "Cの性質がA・Bと異なる", note: "新しい物質が生じた観察根拠です。" },
          ],
          practiceTitle: "練習: 化学変化を説明する",
          practiceProblem: "化学変化の見方を確認します。",
          practiceSteps: [
            {
              prompt:
                "化学変化の前後で変わるのは、原子そのものの種類と原子の組合せのどちらですか。",
              answers: ["原子の組合せ", "組合せ", "原子の組み合わせ", "組み合わせ"],
            },
            {
              prompt: "化学変化で生じる、反応前とは異なる物質を何といいますか。",
              answers: ["生成物"],
            },
          ],
          hint: "原子を色や記号の異なる球として考えます。",
          summary: ["化学変化では新しい物質が生じる。", "原子の種類は保たれ、組合せが変わる。"],
        }),
        lesson({
          key: "chemical-formulas",
          title: "化学式から物質の組成を読む",
          description:
            "元素記号と右下の数字を使い、簡単な化学式から物質をつくる原子の種類と個数比を読みます。",
          goals: ["簡単な化学式を読める。", "化学式から原子の種類と個数の関係を説明できる。"],
          conceptTitle: "化学式は物質の組成を簡潔に表す",
          body: [
            "化合物の組成は化学式で表します。H₂OやCO₂のように、元素記号と右下の数字で構成する原子の種類と割合を示します。",
            "この段階では、観察や実験で扱う代表的で簡単な化学式を中心に読みます。複雑な化学式の暗記は目的にしません。",
          ],
          formulas: ["H₂O", "CO₂", "MgO", "CuO"],
          exampleTitle: "例題: 二酸化炭素の化学式を読む",
          exampleProblem: "CO₂から炭素原子と酸素原子の個数比を読む。",
          exampleSteps: [
            { expression: "C: 1", note: "数字が省略されているので1です。" },
            { expression: "O: 2", note: "右下の2を読みます。" },
            { expression: "C:O = 1:2", note: "原子の個数の関係を表します。" },
          ],
          practiceTitle: "練習: 化学式を読む",
          practiceProblem: "H₂Oを読み取ります。",
          practiceSteps: [
            { prompt: "H₂Oに含まれる元素は水素と何ですか。", answers: ["酸素"] },
            {
              prompt: "H₂Oで水素原子と酸素原子の個数比は何対何ですか。",
              answers: ["2:1", "2対1", "2：1"],
            },
          ],
          hint: "右下の数字がない元素は1として読みます。",
          summary: [
            "化学式は元素記号と数字で物質の組成を表す。",
            "簡単な化学式から原子の種類と個数関係を読める。",
          ],
        }),
        lesson({
          key: "chemical-equations",
          title: "化学反応式で反応前後を表す",
          description: "反応物と生成物を化学式で書き、矢印で結んで化学変化を表します。",
          goals: [
            "化学反応式の左辺と右辺の意味を説明できる。",
            "簡単な反応を化学反応式として読める。",
          ],
          conceptTitle: "化学反応式は化学変化の粒子関係を表す",
          body: [
            "化学反応式では、反応する物質を左側、生成する物質を右側に書き、矢印で変化を表します。複数の物質は＋でつなぎます。",
            "式の前に付く係数は粒子の個数関係を表します。化学式の右下の数字とは役割が異なります。",
          ],
          formulas: ["2H₂ + O₂ → 2H₂O", "2Mg + O₂ → 2MgO"],
          exampleTitle: "例題: 反応式の左右を読む",
          exampleProblem: "2Mg + O₂ → 2MgO で、反応物と生成物を答える。",
          exampleSteps: [
            { expression: "左辺: Mg, O₂", note: "矢印の左は反応する物質です。" },
            { expression: "右辺: MgO", note: "矢印の右は生成する物質です。" },
          ],
          practiceTitle: "練習: 化学反応式を読む",
          practiceProblem: "2H₂ + O₂ → 2H₂Oを読みます。",
          practiceSteps: [
            {
              prompt: "この反応式の生成物の化学式を答えてください。",
              answers: ["H2O", "H₂O", "h2o"],
            },
            {
              prompt: "化学反応式で複数の反応物をつなぐ記号は何ですか。",
              answers: ["+", "＋", "プラス"],
            },
          ],
          hint: "矢印を境に反応前と反応後を分けます。",
          summary: [
            "化学反応式の左辺は反応物、右辺は生成物。",
            "係数は反応する粒子の個数関係を表す。",
          ],
        }),
        lesson({
          key: "equation-atom-conservation",
          title: "原子数をそろえて化学反応式を読む",
          description: "反応前後で元素ごとの原子数が等しいことを粒子モデルと係数から確かめます。",
          goals: [
            "反応前後で元素ごとの原子数が等しいことを確認できる。",
            "係数と化学式の右下の数字を区別できる。",
          ],
          conceptTitle: "化学反応式では原子を増減させない",
          body: [
            "化学変化では原子の組合せが変わりますが、原子が突然なくなったり新しく生じたりするとは考えません。そのため、化学反応式では元素ごとの原子数が左右で等しくなります。",
            "原子数をそろえるときは化学式そのものを書き換えず、式の前の係数を調整します。",
          ],
          formulas: ["2H₂ + O₂ → 2H₂O", "H: 4 = 4 / O: 2 = 2"],
          exampleTitle: "例題: 原子数を数える",
          exampleProblem: "2H₂ + O₂ → 2H₂Oで左右のH原子とO原子の数を確かめる。",
          exampleSteps: [
            { expression: "左 H=4, O=2", note: "係数×化学式中の原子数で数えます。" },
            { expression: "右 H=4, O=2", note: "生成物側も同じ方法で数えます。" },
            { expression: "左右で一致", note: "原子の種類と数が保存されています。" },
          ],
          practiceTitle: "練習: 原子数の保存を確かめる",
          practiceProblem: "2Mg + O₂ → 2MgOを確認します。",
          practiceSteps: [
            { prompt: "左辺のMg原子は何個ですか。", answers: ["2", "2個"] },
            { prompt: "右辺のO原子は何個ですか。", answers: ["2", "2個"] },
          ],
          hint: "係数を忘れずに掛けます。",
          summary: [
            "化学反応式では元素ごとの原子数が左右で等しい。",
            "原子数は係数でそろえ、化学式の組成は変えない。",
          ],
        }),
        lesson({
          key: "oxidation",
          title: "酸化を酸素との結び付きで捉える",
          description: "物質が酸素と結び付く反応として酸化を捉え、燃焼との関係も整理します。",
          goals: [
            "酸化を酸素と結び付く反応として説明できる。",
            "酸化前後を粒子モデルで捉えられる。",
          ],
          conceptTitle: "酸化は物質が酸素と結び付く反応",
          body: [
            "中学2年では、物質が酸素と結び付く化学変化を酸化として扱います。激しく光や熱を出す酸化は燃焼と呼ばれますが、ゆっくり進む酸化もあります。",
            "金属の酸化などを粒子モデルで見ると、反応前になかった酸素原子との組合せが生成物に現れます。",
          ],
          formulas: ["2Mg + O₂ → 2MgO"],
          exampleTitle: "例題: 酸化を見分ける",
          exampleProblem: "MgがO₂と反応してMgOになる変化は、なぜ酸化といえるか。",
          exampleSteps: [
            { expression: "Mg + O₂", note: "反応物に酸素があります。" },
            { expression: "MgO", note: "MgがOと結び付いた生成物です。" },
            { expression: "酸化", note: "物質が酸素と結び付く反応です。" },
          ],
          practiceTitle: "練習: 酸化を説明する",
          practiceProblem: "酸化の定義を確認します。",
          practiceSteps: [
            { prompt: "物質が何と結び付く反応を酸化といいますか。", answers: ["酸素", "O", "o"] },
            { prompt: "激しく光や熱を出して進む酸化を何といいますか。", answers: ["燃焼"] },
          ],
          hint: "生成物に酸素原子が加わっているかを見ます。",
          summary: ["酸化は物質が酸素と結び付く反応。", "燃焼は酸化の一種として捉えられる。"],
        }),
        lesson({
          key: "reduction",
          title: "還元を酸素が離れる変化として捉える",
          description:
            "酸化物から酸素が取り除かれる反応として還元を捉え、酸化との逆向きの関係を学びます。",
          goals: [
            "還元を酸素が離れる反応として説明できる。",
            "酸化と還元を酸素の移動で関連付けられる。",
          ],
          conceptTitle: "還元では酸化物から酸素が離れる",
          body: [
            "中学2年では、酸化物から酸素が取り除かれる化学変化を還元として扱います。酸素に注目すると、酸化と還元は逆向きの関係として整理できます。",
            "実際の還元実験には高温や反応性の高い物質を使う場合があるため、この教材では観察結果と粒子モデルの解釈だけを扱います。",
          ],
          exampleTitle: "例題: 酸素の移動を見る",
          exampleProblem: "金属酸化物から酸素が取り除かれて金属が生じた。この変化を何と呼ぶか。",
          exampleSteps: [
            { expression: "金属酸化物", note: "酸素と結び付いた状態から始まります。" },
            { expression: "酸素が離れる", note: "酸素の移動に注目します。" },
            { expression: "還元", note: "酸化物から酸素が取り除かれる変化です。" },
          ],
          practiceTitle: "練習: 還元を説明する",
          practiceProblem: "酸化と還元を対比します。",
          practiceSteps: [
            {
              prompt: "酸化物から何が取り除かれる反応を還元といいますか。",
              answers: ["酸素", "O", "o"],
            },
            { prompt: "物質が酸素と結び付く反応を何といいますか。", answers: ["酸化"] },
          ],
          hint: "酸素が付くか、離れるかに注目します。",
          summary: ["還元では酸化物から酸素が離れる。", "酸化と還元は酸素の移動で関連付けられる。"],
        }),
        lesson({
          key: "chemical-change-heat",
          title: "化学変化に伴う熱の出入りを捉える",
          description:
            "化学変化には発熱するものと吸熱するものがあることを、温度変化やエネルギーの移動から読み取ります。",
          goals: [
            "発熱反応と吸熱反応を区別できる。",
            "温度変化を熱の出入りと関連付けて説明できる。",
          ],
          conceptTitle: "化学変化では熱が出入りすることがある",
          body: [
            "化学変化の中には周囲へ熱を出す反応と、周囲から熱を受け取る反応があります。前者を発熱反応、後者を吸熱反応として捉えます。",
            "日常生活では使い捨てカイロなどで化学変化の発熱が利用されています。教材では製作手順ではなく、温度変化のデータとエネルギーの向きを読みます。",
          ],
          exampleTitle: "例題: 温度変化から判断する",
          exampleProblem: "反応後に周囲の温度が20℃から28℃へ上がった。熱の出入りをどう考えるか。",
          exampleSteps: [
            { expression: "20℃ → 28℃", note: "周囲の温度が上昇しています。" },
            { expression: "反応系 → 周囲へ熱", note: "反応で熱が放出されたと考えます。" },
            { expression: "発熱反応", note: "熱を周囲へ出す反応です。" },
          ],
          practiceTitle: "練習: 熱の出入りを判断する",
          practiceProblem: "温度変化から反応を分類します。",
          practiceSteps: [
            {
              prompt: "周囲へ熱を出す化学変化を何反応といいますか。",
              answers: ["発熱反応", "発熱"],
            },
            {
              prompt: "周囲から熱を受け取る化学変化を何反応といいますか。",
              answers: ["吸熱反応", "吸熱"],
            },
          ],
          hint: "周囲の温度と熱の移動方向を結び付けます。",
          summary: [
            "化学変化には熱の出入りが伴うことがある。",
            "発熱と吸熱は周囲との熱の移動方向で区別する。",
          ],
        }),
      ],
    },
    {
      key: "mass-relations",
      title: "化学変化と物質の質量",
      description:
        "質量保存、開放系と閉鎖系の見方、反応する物質の一定の質量関係、データからの規則性を4技能で学びます。",
      lessons: [
        lesson({
          key: "mass-conservation",
          title: "化学変化の前後で質量が保存されることを捉える",
          description:
            "反応物の質量の総和と生成物の質量の総和が等しいことを、原子モデルと測定値から理解します。",
          goals: ["質量保存の法則を説明できる。", "反応前後の総質量を計算できる。"],
          conceptTitle: "原子の種類と数が保たれるので総質量も保たれる",
          body: [
            "化学変化では原子の組合せは変わりますが、原子の種類と数は保存されます。外へ物質が出入りしない条件では、反応前の物質の質量の総和と反応後の物質の質量の総和は等しくなります。",
            "個々の物質の質量は変わっても、系全体の質量に注目することが重要です。",
          ],
          formulas: ["反応物の質量の総和 = 生成物の質量の総和"],
          exampleTitle: "例題: 生成物の質量を求める",
          exampleProblem: "6 gの物質Aと4 gの物質Bが全て反応した。生成物の総質量を求める。",
          exampleSteps: [
            { expression: "6 + 4 = 10 g", note: "反応物の総質量を求めます。" },
            {
              expression: "生成物の総質量 = 10 g",
              note: "物質の出入りがなければ総質量は保存されます。",
            },
          ],
          practiceTitle: "練習: 質量保存を使う",
          practiceProblem: "8 gと3 gの物質が全て反応した場合を考えます。",
          practiceSteps: [
            { prompt: "反応物の総質量は何gですか。", answers: ["11", "11g", "11 g"] },
            {
              prompt: "外へ物質が出入りしないとき、生成物の総質量は何gですか。",
              answers: ["11", "11g", "11 g"],
            },
          ],
          hint: "反応前後の『全体』を比較します。",
          summary: [
            "物質の出入りがなければ化学変化の前後で総質量は等しい。",
            "質量保存は原子の種類と数の保存と対応する。",
          ],
        }),
        lesson({
          key: "open-closed-system-mass",
          title: "開放した系の見かけの質量変化を説明する",
          description: "気体が出入りする場合に、容器内だけの測定値と系全体の質量保存を区別します。",
          goals: [
            "閉鎖系と開放系の測定の違いを説明できる。",
            "見かけの質量減少を気体の移動と関連付けられる。",
          ],
          conceptTitle: "質量保存は何を系に含めるかをそろえて考える",
          body: [
            "反応で気体が生じ、開いた容器から外へ出ると、容器内だけを量った質量は小さく見えることがあります。これは質量保存が破れたのではなく、測定対象から気体が外れたためです。",
            "反応前後で同じ範囲を系として比べることが、実験結果を正しく解釈するポイントです。",
          ],
          exampleTitle: "例題: 見かけの質量減少を説明する",
          exampleProblem:
            "開いた容器で気体が発生し、反応後の容器内の質量が小さくなった。どう説明するか。",
          exampleSteps: [
            { expression: "気体が発生", note: "生成物の一部が気体です。" },
            { expression: "気体が容器外へ移動", note: "測定対象から外れます。" },
            {
              expression: "系全体では質量保存",
              note: "外へ出た気体も含めれば総質量は保たれます。",
            },
          ],
          practiceTitle: "練習: 系の範囲を考える",
          practiceProblem: "測定値と質量保存を区別します。",
          practiceSteps: [
            {
              prompt: "気体を外へ逃がさないように閉じた系を何系といいますか。",
              answers: ["閉鎖系", "閉じた系"],
            },
            {
              prompt: "開いた容器で気体が外へ出たとき、質量保存が成り立たなくなったと言えますか。",
              answers: ["言えない", "いえない", "いいえ", "成り立つ"],
            },
          ],
          hint: "外へ出た気体も物質です。",
          summary: [
            "開放系では気体の出入りで測定値が変わることがある。",
            "同じ範囲の系全体で比べれば質量保存を考えられる。",
          ],
        }),
        lesson({
          key: "fixed-mass-ratio",
          title: "反応する物質の質量比を捉える",
          description:
            "一定の化学変化では、過不足なく反応する物質の質量の間に一定の関係があることを使います。",
          goals: [
            "反応物の質量比が一定になることを説明できる。",
            "簡単な比例計算で必要な質量を求められる。",
          ],
          conceptTitle: "同じ反応では反応する質量の関係が一定になる",
          body: [
            "同じ物質どうしが同じ生成物をつくる化学変化では、過不足なく反応する物質の質量の間に一定の関係があります。これは、反応する原子の個数関係が一定だからです。",
            "実測値には誤差が含まれるため、一組の値だけで決めず、複数の測定値の傾向から規則性を見いだします。",
          ],
          formulas: ["例: Mg:O = 3:2", "6 g:4 g = 3:2"],
          exampleTitle: "例題: 質量比から必要量を求める",
          exampleProblem:
            "モデル化した反応でMg:Oの質量比が3:2である。Mg 9 gに過不足なく反応するOの質量を求める。",
          exampleSteps: [
            { expression: "3:2 = 9:x", note: "同じ比になるように置きます。" },
            { expression: "9 ÷ 3 = 3", note: "Mg側は3倍です。" },
            { expression: "x = 2 × 3 = 6 g", note: "O側も同じ倍率にします。" },
          ],
          practiceTitle: "練習: 質量比を使う",
          practiceProblem: "Mg:O=3:2として考えます。",
          practiceSteps: [
            {
              prompt: "Mgが6 gなら、過不足なく反応するOは何gですか。",
              answers: ["4", "4g", "4 g"],
            },
            {
              prompt: "Mg 6 gとO 4 gが全て反応したとき、生成物の質量は何gですか。",
              answers: ["10", "10g", "10 g"],
            },
          ],
          hint: "3:2を同じ倍率で拡大します。",
          summary: [
            "同じ反応では反応する物質の質量に一定の関係がある。",
            "質量比は原子の一定の個数関係と対応する。",
          ],
        }),
        lesson({
          key: "mass-data-graph",
          title: "測定データから質量の規則性を見いだす",
          description:
            "複数の測定値やグラフから比例関係を読み、誤差を考慮して反応する質量の規則性を表現します。",
          goals: [
            "測定値の傾向から比例関係を判断できる。",
            "測定誤差を考慮して規則性を表現できる。",
          ],
          conceptTitle: "一つの測定値ではなくデータ全体の傾向を見る",
          body: [
            "反応する二つの物質の質量を変えて測定すると、理想的には原点を通る直線関係として表せる場合があります。実際の測定値にはばらつきがあるため、全体の傾向から関係を判断します。",
            "中学2年では、見通しをもって方法を考え、得られたデータを分析して、量的な規則性を根拠とともに表現することが重要です。",
          ],
          exampleTitle: "例題: データの傾向を読む",
          exampleProblem:
            "Mg 3, 6, 9 gに対し、反応したOが約2, 4, 6 gだった。どの関係が読み取れるか。",
          exampleSteps: [
            { expression: "3:2", note: "最初の測定値の比を見ます。" },
            { expression: "6:4 = 3:2 / 9:6 = 3:2", note: "他の値でも比を確かめます。" },
            { expression: "一定の質量比", note: "複数データから規則性を表現します。" },
          ],
          practiceTitle: "練習: データから比を読む",
          practiceProblem: "Aが4, 8, 12 gのときBが2, 4, 6 g反応したデータを考えます。",
          practiceSteps: [
            {
              prompt: "A:Bの質量比を最も簡単な整数比で答えてください。",
              answers: ["2:1", "2対1", "2：1"],
            },
            {
              prompt: "Aを2倍にすると、過不足なく反応するBも何倍になる関係ですか。",
              answers: ["2", "2倍"],
            },
          ],
          hint: "各組の値を同じ比に簡単化します。",
          summary: [
            "複数の測定値から質量関係の規則性を見いだす。",
            "誤差を考慮し、データ全体の傾向を根拠に表現する。",
          ],
        }),
      ],
    },
  ],
};
