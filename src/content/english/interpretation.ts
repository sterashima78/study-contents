import type { EnglishUnit } from "./types";

export const englishInterpretationUnits: EnglishUnit[] = [
  {
    key: "clause-structure",
    title: "節と長い文の構造",
    description: "接続詞や動詞の数を手掛かりに節を分け、長い主語・目的語をまとまりで読みます。",
    lessons: [
      {
        key: "clause-boundaries",
        title: "動詞と接続詞から節の境界を見つける",
        description: "長文の中で述語動詞を数え、接続詞・関係詞と対応させて節のまとまりを切ります。",
        rights: "original",
        goals: [
          "述語動詞を数えて複数の節があることに気づける。",
          "because・although・that などが導く節の範囲を判断できる。",
        ],
        concepts: [
          {
            title: "述語動詞の数が節を探す手掛かり",
            body: [
              "1つの節には基本的に主語と述語動詞があります。長い文では、まず述語動詞を探し、それぞれがどの主語と組になるか確認します。",
              "接続詞や関係詞は、新しい節の始まりを示す目印になります。",
            ],
          },
        ],
        example: {
          title: "例題: although 節と主節を分ける",
          problem: "Although the forecast predicted rain, the event continued because the sky remained clear.",
          steps: [
            {
              expression: "Although [the forecast predicted rain]",
              note: "predicted が最初の述語動詞で、although が譲歩の節を導きます。",
            },
            {
              expression: "[the event continued] because [the sky remained clear]",
              note: "continued が主節の動詞、remained が because 節の動詞です。",
            },
            {
              expression: "予報では雨だったが、空が晴れたままだったのでイベントは続行された。",
              note: "節ごとの論理関係を保って意味を組み立てます。",
            },
          ],
        },
        practice: {
          title: "練習: 述語動詞を数える",
          problem: "When the bell rang, Ken noticed that his phone was missing.",
          steps: [
            {
              prompt: "述語動詞を出現順にカンマ区切りで入力してください。",
              answers: ["rang, noticed, was", "rang,noticed,was"],
              placeholder: "verb, verb, verb",
            },
            {
              prompt: "that が導く節の主語を入力してください。",
              answers: ["his phone"],
              placeholder: "主語",
            },
          ],
          hint: "When と that の後ろには、それぞれ主語と述語動詞を含む節があります。",
        },
        summary: [
          "長い文では述語動詞を数え、主語との対応を取る。",
          "接続詞・関係詞を節の境界を示す目印として使う。",
        ],
      },
      {
        key: "long-subject-object",
        title: "長い主語・目的語をひとかたまりで読む",
        description: "that節や疑問詞節を名詞のまとまりとして捉え、主節の骨格を崩さずに読みます。",
        rights: "original",
        goals: [
          "that節が主語・目的語として働く位置を判断できる。",
          "長い名詞節を一つの文要素として扱える。",
        ],
        concepts: [
          {
            title: "節全体が S や O になる",
            body: [
              "that + S + V や what + S + V などは、節全体で名詞の役割を持つことがあります。中の単語をばらばらにせず、一つの箱として主節に当てはめます。",
            ],
          },
        ],
        example: {
          title: "例題: that節を主語としてまとめる",
          problem: "That the team changed its plan surprised everyone.",
          steps: [
            {
              expression: "[That the team changed its plan] / surprised / everyone.",
              note: "that から plan までの節全体が主語です。",
            },
            {
              expression: "S / V / O",
              note: "主節の動詞は changed ではなく surprised です。changed は主語節の内部にあります。",
            },
            {
              expression: "チームが計画を変更したことは、皆を驚かせた。",
              note: "節全体を「〜ということ」とまとめると自然に読めます。",
            },
          ],
        },
        practice: {
          title: "練習: 名詞節を特定する",
          problem: "I understand why the schedule changed so suddenly.",
          steps: [
            {
              prompt: "主節の動詞を入力してください。",
              answers: ["understand"],
              placeholder: "動詞",
            },
            {
              prompt: "understand の目的語になっている節を入力してください。",
              answers: ["why the schedule changed so suddenly", "why the schedule changed"],
              placeholder: "why ...",
            },
          ],
          hint: "changed は why 節の中の動詞です。文全体の中心は I understand です。",
        },
        summary: [
          "名詞節は中身をばらさず、一つの S・O・C として扱う。",
          "節の内側の動詞と主節の述語動詞を区別する。",
        ],
      },
    ],
  },
  {
    key: "logic-and-reference",
    title: "論理関係と指示語",
    description: "逆接・因果・追加などの論理関係と、代名詞・省略の参照先を追って文章の流れを読みます。",
    lessons: [
      {
        key: "contrast-cause",
        title: "逆接と因果を文の関係として読む",
        description: "however や therefore だけを探すのではなく、前後で何が対比・因果になっているかを特定します。",
        rights: "original",
        goals: [
          "逆接の前後で対比される内容を言葉で説明できる。",
          "原因と結果を接続表現だけに頼らず判定できる。",
        ],
        concepts: [
          {
            title: "接続表現は関係のラベル",
            body: [
              "however は「後ろが重要」という合図ではなく、前後の内容が予想に反する関係にあることを示します。",
              "therefore や as a result では、何が原因で何が結果なのかを具体的な内容で結びます。",
            ],
          },
        ],
        example: {
          title: "例題: however の対比を言語化する",
          problem: "The route looked shorter on the map. However, it included a steep hill that slowed us down.",
          steps: [
            {
              expression: "前: 地図上では短く見えた",
              note: "距離だけを見ると、早く着けそうだという予想が生まれます。",
            },
            {
              expression: "後: 急な坂があり、移動が遅くなった",
              note: "実際には短さが時間短縮につながらなかった点が逆接です。",
            },
            {
              expression: "短い経路 = 速い、という予想が崩れた",
              note: "however の前後を抽象化すると、文章の論理が見えます。",
            },
          ],
        },
        practice: {
          title: "練習: 因果関係を答える",
          problem: "The library extended its weekend hours. As a result, more students began using the study rooms.",
          steps: [
            {
              prompt: "原因を表す内容を日本語で短く入力してください。",
              answers: ["図書館が週末の開館時間を延長した", "週末の開館時間を延長した"],
              placeholder: "原因",
            },
            {
              prompt: "結果を表す内容を日本語で短く入力してください。",
              answers: ["より多くの生徒が自習室を使い始めた", "生徒の自習室利用が増えた"],
              placeholder: "結果",
            },
          ],
          hint: "As a result の後ろが、前の出来事によって生じた変化です。",
        },
        summary: [
          "逆接では、前後のどの内容が食い違うのかを具体化する。",
          "因果では、原因と結果を内容レベルで対応させる。",
        ],
      },
      {
        key: "reference-ellipsis",
        title: "代名詞と省略の参照先を追う",
        description: "it・they・this・such などが何を指すかを、数・意味・直前の文脈から特定します。",
        rights: "original",
        goals: [
          "代名詞の参照先を文法と意味の両方から絞れる。",
          "this が直前の出来事全体を指す場合を説明できる。",
        ],
        concepts: [
          {
            title: "候補を数と意味で絞る",
            body: [
              "they なら複数、it なら単数という文法的な一致をまず確認します。そのうえで、代入したとき意味が自然につながる候補を選びます。",
              "this は名詞一語ではなく、直前に述べた出来事や判断全体を受けることがあります。",
            ],
          },
        ],
        example: {
          title: "例題: this の内容を特定する",
          problem: "The school moved the meeting online at the last minute. This allowed several absent students to join.",
          steps: [
            {
              expression: "This = the school moved the meeting online",
              note: "直前の名詞 meeting だけではなく、「会議をオンラインに変更したこと」全体を指します。",
            },
            {
              expression: "allowed several absent students to join",
              note: "オンライン変更という出来事が、欠席予定の生徒の参加を可能にしたという因果です。",
            },
          ],
        },
        practice: {
          title: "練習: they の参照先を特定する",
          problem: "Rina placed the keys beside the documents because she needed them later. They were still there at noon.",
          steps: [
            {
              prompt: "They が指す語を入力してください。",
              answers: ["the keys", "keys"],
              placeholder: "参照先",
            },
            {
              prompt: "判断の手掛かりとなる数を「単数・複数」から入力してください。",
              answers: ["複数"],
              placeholder: "単数 / 複数",
            },
          ],
          hint: "They は複数形です。直前の複数名詞だけでなく意味の自然さも確認します。",
        },
        summary: [
          "代名詞は数・文法的一致・意味の自然さを順に確認する。",
          "this / that は直前の内容全体を受けることがある。",
        ],
      },
    ],
  },
];
