import type { MathLesson } from "../../../../math1/types";

export const functionMeaningLesson: MathLesson = {
  key: "function-meaning",
  title: "関数関係の意味",
  description: "二つの数量のうち、一方の値を決めると他方の値がただ一つ決まる関係を捉えます。",
  goals: [
    "二つの数量から関数関係にあるものを見分けられる。",
    "どちらの数量を決めると、どちらが決まるかを説明できる。",
  ],
  concepts: [
    {
      title: "一方を決めると他方がただ一つ決まる",
      body: [
        "関係する二つの数量について、一方の値を決めると他方の値がただ一つ決まるとき、後の数量は前の数量の関数であるといいます。",
        "同じ値を入れたときに結果が二つ以上に分かれないことが大切です。",
      ],
      formulas: ["x を決める → y がただ一つ決まる"],
    },
  ],
  example: {
    title: "例題: 1本120円のペンの本数と代金",
    problem: "1本120円のペンを x 本買うときの代金を y 円とします。x と y の関係を調べます。",
    steps: [
      {
        expression: "x = 1 なら y = 120",
        note: "本数を1本と決めると、代金は120円に決まります。",
      },
      {
        expression: "x = 3 なら y = 360",
        note: "本数を3本と決めても、代金はただ一つに決まります。",
      },
      {
        expression: "y は x の関数",
        note: "x の値ごとに y がただ一つ決まるので、関数関係です。",
      },
    ],
  },
  practice: {
    title: "練習: 関数関係を確かめる",
    problem: "1個80円の商品を x 個買うときの代金を y 円とします。",
    steps: [
      {
        prompt: "x = 4 のときの y の値を答えてください。",
        answers: ["320"],
        placeholder: "代金",
      },
      {
        prompt: "y は x の何であるといいますか。",
        answers: ["関数"],
        placeholder: "用語",
      },
    ],
    hint: "x を一つ決めたとき、代金 y が一つに決まるかを確認します。",
  },
  summary: [
    "一方の値を決めると他方の値がただ一つ決まる関係を関数関係という。",
    "関数では、どの数量を決めるとどの数量が決まるかを明確にする。",
  ],
};
