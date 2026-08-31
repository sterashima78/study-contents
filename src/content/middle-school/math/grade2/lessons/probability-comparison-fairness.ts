import type { MathLesson } from "../../../../math1/types";

export const probabilityComparisonFairnessLesson: MathLesson = {
  key: "probability-comparison-fairness",
  title: "確率を比べて公平さを判断する",
  description: "ルールごとの当たりやすさを確率で表し、くじやゲームの公平さを根拠をもって判断します。",
  goals: [
    "複数のルールの確率を同じ基準で比較できる。",
    "公平かどうかを感覚ではなく確率を根拠に説明できる。",
  ],
  concepts: [
    {
      title: "公平さを同じ確率で確かめる",
      body: [
        "見た目が対称なルールでも、実際の当たりの場合の数が異なると公平とは限りません。参加者ごとに当たる確率を求め、同じになっているかを確認します。",
        "確率を使うと、くじを引く順序やゲームのルールが結果の起こりやすさにどう影響するかを説明できます。",
      ],
    },
  ],
  example: {
    title: "例題: 二つのルールを比べる",
    problem: "Aの当たる確率が1/4、Bの当たる確率が2/8のゲームを考えます。",
    steps: [
      { expression: "1/4 = 2/8", note: "二つの確率は等しいです。" },
      { expression: "当たりやすさは同じ", note: "この観点では公平だと判断できます。" },
    ],
  },
  practice: {
    title: "練習: 公平さを判断する",
    problem: "Aの当たる確率は1/3、Bの当たる確率は2/5です。",
    steps: [
      { prompt: "当たりやすいのはAとBのどちらですか。", answers: ["B", "b"], placeholder: "A / B" },
      { prompt: "当たる確率が異なるので、公平と言えますか。「言える」か「言えない」で答えてください。", answers: ["言えない"], placeholder: "言える / 言えない" },
    ],
    hint: "1/3と2/5の大きさを比べます。",
  },
  summary: [
    "公平さを判断するときは、各参加者や各ルールの確率を比較する。",
    "確率を根拠にすると、不確定な事象について説明しやすくなる。",
  ],
};
