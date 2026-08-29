import type { EnglishUnit } from "./types";

export const englishReadingUnits: EnglishUnit[] = [
  {
    key: "paragraph-reading",
    title: "段落を読む",
    description: "段落の中心文と具体例・理由の関係をつかみ、情報の階層を整理します。",
    lessons: [
      {
        key: "topic-sentence",
        title: "段落の中心文を見つける",
        description: "最初の一文だけを機械的に選ばず、段落全体を最も広く説明する文を探します。",
        rights: "original",
        goals: [
          "段落の中心的な主張と具体例を区別できる。",
          "中心文を自分の言葉で短く言い換えられる。",
        ],
        concepts: [
          {
            title: "中心文は段落全体を包む",
            body: [
              "トピックセンテンスは先頭にあることが多いものの、位置だけで決めません。他の文が理由・具体例・説明として支えられる、最も広い内容の文を探します。",
            ],
          },
        ],
        passage: {
          title: "Original Passage",
          paragraphs: [
            "Small changes in classroom routines can make group work more effective. For example, giving each student a clear role reduces the time spent deciding who should do what. A short written goal also helps the group notice when the discussion moves away from the task. Neither change requires special equipment, but both can make collaboration more focused.",
          ],
        },
        example: {
          title: "例題: 段落の中心を一文で表す",
          problem: "What is the main idea of the paragraph?",
          steps: [
            {
              expression: "Small changes in classroom routines can make group work more effective.",
              note: "後続の役割分担と目標設定の例をまとめて説明できる最も広い文です。",
            },
            {
              expression: "小さな運用の工夫でグループ活動は改善できる。",
              note: "具体例を落として抽象化すると、中心内容が短くなります。",
            },
          ],
        },
        practice: {
          title: "練習: 支える具体例を探す",
          problem: "Which two changes support the main idea?",
          steps: [
            {
              prompt: "1つ目の工夫を英語で入力してください。",
              answers: ["giving each student a clear role", "a clear role"],
              placeholder: "first change",
            },
            {
              prompt: "2つ目の工夫を英語で入力してください。",
              answers: ["a short written goal", "written goal"],
              placeholder: "second change",
            },
          ],
          hint: "For example 以降の具体的な行動を2つ探します。",
        },
        summary: [
          "中心文は段落全体を最も広く説明する文を選ぶ。",
          "具体例や理由が何を支えているかを逆向きにたどる。",
        ],
      },
      {
        key: "supporting-details",
        title: "理由・具体例・結論を整理する",
        description: "段落内の各文が主張をどのように支えているかを、役割ごとに分類します。",
        rights: "original",
        goals: [
          "理由と具体例を区別できる。",
          "結論が前の情報をどのようにまとめているか説明できる。",
        ],
        concepts: [
          {
            title: "各文に役割を付ける",
            body: [
              "長文を一文ずつ日本語にするだけでなく、「主張」「理由」「具体例」「結論」のように役割を付けると、段落の構造が見えます。",
            ],
          },
        ],
        passage: {
          title: "Original Passage",
          paragraphs: [
            "Many students remember new vocabulary better when they meet it in several contexts. A word seen only on a list may remain isolated from meaning. In contrast, seeing the same word in a story, a message, and a short explanation creates multiple connections. For this reason, repeated encounters in different contexts are more useful than simply rereading one list many times.",
          ],
        },
        example: {
          title: "例題: 第3文の役割を判断する",
          problem: "What role does the third sentence play?",
          steps: [
            {
              expression: "seeing the same word in a story, a message, and a short explanation",
              note: "語を複数の文脈で見るという方法を具体化しています。",
            },
            {
              expression: "具体例・説明",
              note: "第1文の主張を具体的な場面に落とし込む役割です。",
            },
          ],
        },
        practice: {
          title: "練習: 結論の内容を要約する",
          problem: "Complete the idea: Different contexts are better than _____.",
          steps: [
            {
              prompt: "本文に沿って空所を英語で埋めてください。",
              answers: ["rereading one list many times", "simply rereading one list many times"],
              placeholder: "...",
            },
          ],
          hint: "最終文の than の後ろを確認します。",
        },
        summary: [
          "段落内の文を、主張・理由・具体例・結論の役割で整理する。",
          "結論は前の情報をまとめ直し、比較や判断を明示することが多い。",
        ],
      },
    ],
  },
  {
    key: "exam-reading",
    title: "情報検索と推論",
    description:
      "実用文や説明文から必要情報を探し、本文に直接書かれていない内容を根拠付きで推論します。",
    lessons: [
      {
        key: "scan-information",
        title: "目的を決めて必要情報を探す",
        description: "文章を最初からすべて精読せず、設問が求める項目を先に決めて情報を検索します。",
        rights: "original",
        goals: [
          "設問から探す情報の種類を先に決められる。",
          "日時・条件・対象などの情報を素早く照合できる。",
        ],
        concepts: [
          {
            title: "読む前に検索条件を作る",
            body: [
              "実用文では、設問が求める「日時」「費用」「対象者」「条件」などを先に確認します。本文を頭から訳すのではなく、必要な情報の候補を探して周辺を精読します。",
            ],
          },
        ],
        passage: {
          title: "Community Workshop Notice",
          paragraphs: [
            "Saturday Repair Workshop — 10:00 to 12:30, Green Hall. Bring one small household item that you would like to repair. Basic tools are provided, but replacement parts are not included. The workshop is free for students under 18; other participants pay 500 yen. Registration closes at 18:00 on Thursday.",
          ],
        },
        example: {
          title: "例題: 条件に合う情報だけを抜き出す",
          problem:
            "A 17-year-old student wants to join. What must the student bring, and how much is the fee?",
          steps: [
            {
              expression: "bring one small household item",
              note: "must bring に対応する持ち物の条件を探します。",
            },
            {
              expression: "free",
              note: "under 18 に該当するため料金は無料です。",
            },
            {
              expression: "one small household item / 0 yen",
              note: "設問が求める2項目だけを組み合わせます。",
            },
          ],
        },
        practice: {
          title: "練習: 締切を探す",
          problem: "When is the registration deadline?",
          steps: [
            {
              prompt: "曜日を英語で入力してください。",
              answers: ["Thursday", "thursday"],
              placeholder: "day",
            },
            {
              prompt: "時刻を本文通りに入力してください。",
              answers: ["18:00", "6:00 p.m.", "6 p.m."],
              placeholder: "time",
            },
          ],
          hint: "registration closes という表現を探します。",
        },
        summary: [
          "実用文では、設問から検索する情報の種類を先に決める。",
          "条件を見つけたら、その周辺だけを精読して照合する。",
        ],
      },
      {
        key: "inference-paraphrase",
        title: "言い換えから推論する",
        description:
          "本文と選択肢で使われる異なる表現を対応させ、書かれている事実から妥当な結論を導きます。",
        rights: "original",
        goals: [
          "本文の表現と言い換え表現を対応させられる。",
          "本文にない情報を足さず、根拠の範囲内で推論できる。",
        ],
        concepts: [
          {
            title: "同じ意味が同じ単語で出るとは限らない",
            body: [
              "読解問題では、本文の語句がそのまま選択肢に繰り返されるとは限りません。具体表現と抽象表現、原因と結果、肯定と否定の言い換えを対応させます。",
              "推論では「ありそう」ではなく、本文の情報だけから必ず言える範囲を守ります。",
            ],
          },
        ],
        passage: {
          title: "Original Passage",
          paragraphs: [
            "Nora usually cycled to school, but she checked the weather before leaving on Monday. The forecast showed strong winds during the afternoon, so she took the bus instead. When classes ended, several bicycle racks had fallen over in the wind.",
          ],
        },
        example: {
          title: "例題: 本文から妥当な推論を選ぶ",
          problem: "What can reasonably be inferred about Nora's decision?",
          steps: [
            {
              expression: "forecast showed strong winds → took the bus instead",
              note: "バスに変えた理由が強風予報と直接結び付いています。",
            },
            {
              expression: "fallen bicycle racks",
              note: "実際に風が強かったことを後から裏付ける情報です。",
            },
            {
              expression: "Her decision helped her avoid cycling in strong wind.",
              note: "本文の因果関係から安全側の選択だったと推論できますが、事故が必ず起きたなどとは言えません。",
            },
          ],
        },
        practice: {
          title: "練習: 言い換えを対応させる",
          problem: "Which phrase best paraphrases “took the bus instead”?",
          steps: [
            {
              prompt: "最も近い表現を入力してください。",
              answers: [
                "changed her usual way of traveling",
                "changed her usual way of travelling",
                "used a different way to get to school",
              ],
              placeholder: "paraphrase",
            },
          ],
          hint: "usually cycled と instead の対比に注目します。",
        },
        summary: [
          "本文と設問・選択肢の間では、同じ内容が別の語で表現される。",
          "推論は本文から必ず支えられる範囲に限定し、情報を勝手に追加しない。",
        ],
      },
    ],
  },
];
