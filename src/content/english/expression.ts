import type { EnglishUnit } from "./types";

export const englishExpressionUnits: EnglishUnit[] = [
  {
    key: "paragraph-writing",
    title: "パラグラフを書く",
    description: "主張・理由・具体例・結論を一つの段落にまとめ、論理の流れが見える英文を書きます。",
    lessons: [
      {
        key: "opinion-reason",
        title: "意見と理由を一続きで書く",
        description: "主張だけで終わらず、理由と具体例を接続して読み手が追える段落を作ります。",
        rights: "original",
        goals: [
          "意見を一文で明確に述べられる。",
          "because だけに頼らず、理由と具体例を段落としてつなげられる。",
        ],
        concepts: [
          {
            title: "主張 → 理由 → 具体例の順で骨格を作る",
            body: [
              "最初に自分の立場を一文で示し、次にその立場を支える理由を書きます。具体例は理由をより納得しやすくする材料として置きます。",
              "接続語を増やすことより、各文の役割がはっきりしていることを優先します。",
            ],
          },
        ],
        example: {
          title: "例題: 3文で意見を組み立てる",
          problem: "Should schools provide more quiet study spaces?",
          steps: [
            {
              expression: "Schools should provide more quiet study spaces.",
              note: "第1文で立場を明確にします。",
            },
            {
              expression: "Some students cannot concentrate well in busy classrooms or shared halls.",
              note: "第2文で理由を示します。",
            },
            {
              expression: "A small silent room, for example, would give them a place to review difficult material between classes.",
              note: "第3文で具体例を加え、理由を具体化します。",
            },
          ],
        },
        practice: {
          title: "練習: 理由を一文で加える",
          problem: "School libraries should stay open later on weekdays.",
          steps: [
            {
              prompt: "理由の文を英語で入力してください。例: 放課後に静かな場所が必要な生徒がいる。",
              answers: [
                "Some students need a quiet place to study after school.",
                "Students need a quiet place to study after school.",
              ],
              placeholder: "Reason sentence",
            },
          ],
          hint: "主張を繰り返すのではなく、「なぜそうすべきか」を一つ具体化します。",
        },
        summary: [
          "意見文は、主張・理由・具体例の役割を分ける。",
          "接続語より先に、各文が何を支えているかを確認する。",
        ],
      },
      {
        key: "compare-contrast",
        title: "比較・対照を軸に段落を組み立てる",
        description: "二つの選択肢を同じ観点で比べ、比較軸を途中で変えずに結論へつなげます。",
        rights: "original",
        goals: [
          "同じ比較軸で二つの対象を比べられる。",
          "whereas・while・in contrast などを関係に合わせて使える。",
        ],
        concepts: [
          {
            title: "比較軸を先に決める",
            body: [
              "Aは費用、Bは便利さというように別々の観点を並べると比較になりません。費用、時間、柔軟性など一つの軸を決め、両方を同じ軸で述べます。",
            ],
          },
        ],
        example: {
          title: "例題: 通学手段を時間の観点で比べる",
          problem: "Compare taking a train with riding a bicycle in terms of travel time.",
          steps: [
            {
              expression: "Taking the train is usually faster over long distances.",
              note: "比較軸を travel time に固定します。",
            },
            {
              expression: "Riding a bicycle, however, may be quicker for a short trip because there is no waiting time.",
              note: "同じ時間軸で、短距離では逆転する条件を示します。",
            },
            {
              expression: "The faster choice therefore depends on the distance and the train schedule.",
              note: "比較した情報を条件付きの結論にまとめます。",
            },
          ],
        },
        practice: {
          title: "練習: 対照文を作る",
          problem: "Online notes are easy to search. Paper notes are easy to annotate freely.",
          steps: [
            {
              prompt: "while を使って1文にしてください。",
              answers: [
                "Online notes are easy to search, while paper notes are easy to annotate freely.",
                "While online notes are easy to search, paper notes are easy to annotate freely.",
              ],
              placeholder: "While ...",
            },
          ],
          hint: "二つの特徴を消さず、while で対照関係を示します。",
        },
        summary: [
          "比較・対照では、両方を同じ比較軸で述べる。",
          "結論では、どの条件ならどちらが適切かまで整理すると論理が明確になる。",
        ],
      },
    ],
  },
  {
    key: "practical-expression",
    title: "要約と実用的な表現",
    description: "情報を短くまとめ、依頼や連絡を目的・相手・必要情報に合わせて書きます。",
    lessons: [
      {
        key: "summary-writing",
        title: "具体例を落として要約する",
        description: "元の文章の中心内容を保ちながら、細部や重複を削って短い英文にまとめます。",
        rights: "original",
        goals: [
          "中心主張と支える情報を区別できる。",
          "具体例を一般化して短く言い換えられる。",
        ],
        concepts: [
          {
            title: "削る前に中心を決める",
            body: [
              "要約では単に文を短くするのではなく、文章の中心的な主張を残します。固有の具体例や細かな数字は、中心理解に不要なら一般化または削除します。",
            ],
          },
        ],
        passage: {
          title: "Original Passage",
          paragraphs: [
            "The student council tested three ways to reduce paper waste during school events. Digital sign-up forms reduced printing most clearly, while reusable direction boards also helped. Asking every club to print on both sides had a smaller effect because many notices were only one page long. The council therefore decided to use digital forms and reusable boards at future events.",
          ],
        },
        example: {
          title: "例題: 1文で要約する",
          problem: "Summarize the passage in one English sentence.",
          steps: [
            {
              expression: "中心: student council tested ways to reduce paper waste",
              note: "テーマをまず取り出します。",
            },
            {
              expression: "結果: digital forms and reusable boards were most useful",
              note: "三つの方法の細かな説明を、採用された二つの方法に圧縮します。",
            },
            {
              expression: "The student council found that digital forms and reusable boards were effective ways to reduce paper waste at school events.",
              note: "中心テーマと結論だけを残した要約です。",
            },
          ],
        },
        practice: {
          title: "練習: 不要な具体例を見分ける",
          problem: "Which detail can be omitted most safely from a short summary?",
          steps: [
            {
              prompt: "本文中の、効果が小さかった方法を英語で入力してください。",
              answers: ["printing on both sides", "asking every club to print on both sides"],
              placeholder: "detail",
            },
          ],
          hint: "最終的に採用された方法ではない具体的な試行を探します。",
        },
        summary: [
          "要約では中心主張を決めてから、具体例・重複・細部を削る。",
          "元の文章にない評価や意見を追加しない。",
        ],
      },
      {
        key: "email-request",
        title: "依頼メールを目的から組み立てる",
        description: "相手が判断・行動するために必要な情報を、目的・背景・依頼内容・期限の順に整理します。",
        rights: "original",
        goals: [
          "依頼の目的を冒頭で明確にできる。",
          "相手が対応するために必要な条件や期限を簡潔に書ける。",
        ],
        concepts: [
          {
            title: "丁寧さより先に必要情報をそろえる",
            body: [
              "実用的な英文では、目的が分からない丁寧表現を重ねるより、何を依頼し、なぜ必要で、いつまでに必要かを明確にします。",
              "Could you ...? や Would it be possible to ...? は、具体的な依頼内容と組み合わせて使います。",
            ],
          },
        ],
        example: {
          title: "例題: 資料送付を依頼する",
          problem: "Ask a club adviser to send the updated schedule by Friday.",
          steps: [
            {
              expression: "I'm preparing the notice for next week's club meeting.",
              note: "最初に背景を短く示します。",
            },
            {
              expression: "Could you send me the updated schedule by Friday?",
              note: "依頼内容と期限を一文で明確にします。",
            },
            {
              expression: "I need it to finish the notice before the weekend.",
              note: "必要なら理由を一文だけ補います。",
            },
          ],
        },
        practice: {
          title: "練習: 依頼文を作る",
          problem: "You need a teacher to check your presentation title before Wednesday.",
          steps: [
            {
              prompt: "Could you で始まる依頼文を入力してください。",
              answers: [
                "Could you check my presentation title before Wednesday?",
                "Could you check the title of my presentation before Wednesday?",
              ],
              placeholder: "Could you ...?",
            },
          ],
          hint: "依頼する行動 check、対象 title、期限 before Wednesday を一文に入れます。",
        },
        summary: [
          "実用文では目的・依頼内容・必要条件・期限を優先して整理する。",
          "丁寧表現は具体的な依頼内容を曖昧にしない範囲で使う。",
        ],
      },
    ],
  },
];
