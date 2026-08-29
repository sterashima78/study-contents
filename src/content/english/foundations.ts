import type { EnglishUnit } from "./types";

export const englishFoundationUnits: EnglishUnit[] = [
  {
    key: "sentence-core",
    title: "文の骨格",
    description: "主語・動詞・補語・目的語と時制を手掛かりに、英文の中心を素早くつかみます。",
    lessons: [
      {
        key: "five-patterns",
        title: "SVOCで文の骨格をつかむ",
        description: "修飾語をいったん外し、主語・動詞・目的語・補語の関係から英文の中心を読み取ります。",
        rights: "original",
        goals: [
          "英文から主語と動詞を最初に特定できる。",
          "OとCの違いを、動詞の後ろの関係から判断できる。",
        ],
        concepts: [
          {
            title: "最初に S と V を探す",
            body: [
              "英文が長くても、まず「だれ・何が」に当たる主語と、その主語がどうする・どうであるかを表す動詞を探します。",
              "前置詞句や副詞は文の骨格から外して考えると、SVOCを見つけやすくなります。",
            ],
          },
          {
            title: "O と C は役割が違う",
            body: [
              "Oは動作の対象、Cは主語または目的語の説明です。S = C や O = C の関係が成り立つかを確認します。",
            ],
          },
        ],
        example: {
          title: "例題: 文の骨格を分ける",
          problem: "The news made the students nervous before the presentation.",
          steps: [
            {
              expression: "The news / made / the students / nervous",
              note: "before the presentation は時を示す修飾語なので、まず骨格から外します。",
            },
            {
              expression: "S / V / O / C",
              note: "the students = nervous の関係があるため、nervous は目的格補語 C です。",
            },
            {
              expression: "その知らせは、発表前に生徒たちを緊張させた。",
              note: "骨格を確定してから修飾語を戻すと、意味のまとまりを保って訳せます。",
            },
          ],
        },
        practice: {
          title: "練習: S・V・O・Cを答える",
          problem: "Our coach kept the practice short today.",
          steps: [
            {
              prompt: "主語 S を入力してください。",
              answers: ["Our coach", "our coach"],
              placeholder: "S",
            },
            {
              prompt: "動詞 V を入力してください。",
              answers: ["kept"],
              placeholder: "V",
            },
            {
              prompt: "O と C を「O / C」の形で入力してください。",
              answers: ["the practice / short", "the practice/short"],
              placeholder: "O / C",
            },
          ],
          hint: "today は時を表す副詞です。the practice と short の関係に注目します。",
        },
        summary: [
          "長い英文でも、最初に S と V を探して骨格を作る。",
          "O = C の関係が成り立つとき、Cは目的語を説明している。",
        ],
      },
      {
        key: "tense-viewpoint",
        title: "時制を時間の視点として読む",
        description: "現在・過去・完了形を単なる形ではなく、話し手がどこから出来事を見るかで整理します。",
        rights: "original",
        goals: [
          "現在形と現在進行形の基本的な視点の違いを説明できる。",
          "現在完了が過去と現在を結ぶ形であることを読み取れる。",
        ],
        concepts: [
          {
            title: "時制は出来事を見る位置を示す",
            body: [
              "現在形は習慣・状態・一般的事実などを現在の視点から述べます。進行形は、ある時点で進行中の出来事に焦点を当てます。",
              "現在完了は、過去の出来事を現在とのつながりを保ったまま述べる形です。",
            ],
          },
        ],
        example: {
          title: "例題: 現在完了の視点を説明する",
          problem: "I have used this notebook for three years.",
          steps: [
            {
              expression: "have used",
              note: "現在完了なので、過去に始まった使用と現在がつながっています。",
            },
            {
              expression: "for three years",
              note: "期間を示し、「3年間ずっと」という継続の読みを支えます。",
            },
            {
              expression: "私はこのノートを3年間使っている。",
              note: "過去形の「使った」ではなく、現在まで続く状態として読みます。",
            },
          ],
        },
        practice: {
          title: "練習: 時制を選ぶ",
          problem: "Mika (      ) in Sendai since 2023.",
          steps: [
            {
              prompt: "live を適切な形にしてください。",
              answers: ["has lived", "has been living"],
              placeholder: "live の形",
            },
            {
              prompt: "現在とのつながりを示す語句を入力してください。",
              answers: ["since 2023", "since2023"],
              placeholder: "語句",
            },
          ],
          hint: "since は開始時点を示し、その状態が現在まで続く文脈を作ります。",
        },
        summary: [
          "時制は日本語訳の形ではなく、出来事を見る時間上の視点で考える。",
          "現在完了は過去と現在のつながりを表す。",
        ],
      },
    ],
  },
  {
    key: "verb-forms",
    title: "準動詞と修飾",
    description: "不定詞・動名詞・分詞・関係詞を、文中で果たす役割から整理します。",
    lessons: [
      {
        key: "infinitive-gerund",
        title: "不定詞と動名詞を役割で見分ける",
        description: "to do と doing を暗記だけで選ばず、名詞・形容詞・副詞としての働きや動詞との結び付きから判断します。",
        rights: "original",
        goals: [
          "不定詞が名詞・形容詞・副詞のどの役割か判断できる。",
          "動名詞を名詞として文の要素に組み込める。",
        ],
        concepts: [
          {
            title: "形より先に文中の役割を見る",
            body: [
              "to + 動詞の原形は、主語・目的語になる名詞的用法、名詞を説明する形容詞的用法、目的や理由などを添える副詞的用法があります。",
              "動名詞 doing は動詞の意味を保ちながら、名詞として主語や目的語になります。",
            ],
          },
        ],
        example: {
          title: "例題: to不定詞の役割を判定する",
          problem: "Aya went to the library to finish her report.",
          steps: [
            {
              expression: "Aya went to the library",
              note: "ここだけで「アヤは図書館へ行った」という文の骨格が完成しています。",
            },
            {
              expression: "to finish her report",
              note: "行った目的を付け加えているため、副詞的用法です。",
            },
            {
              expression: "レポートを仕上げるために",
              note: "目的を示す「〜するために」と解釈できます。",
            },
          ],
        },
        practice: {
          title: "練習: 不定詞の用法を答える",
          problem: "I need a quiet place to study after school.",
          steps: [
            {
              prompt: "to study が説明している名詞を入力してください。",
              answers: ["place", "a quiet place"],
              placeholder: "名詞",
            },
            {
              prompt: "用法を「名詞的・形容詞的・副詞的」から入力してください。",
              answers: ["形容詞的", "形容詞的用法"],
              placeholder: "○○的",
            },
          ],
          hint: "to study を取り除いたとき、a quiet place がどのような場所かという説明が消えます。",
        },
        summary: [
          "不定詞は、文中で何を説明・補足しているかから用法を決める。",
          "動名詞は動作を名詞として扱う形で、主語や目的語になれる。",
        ],
      },
      {
        key: "participle-relative",
        title: "分詞と関係詞で名詞を修飾する",
        description: "名詞の後ろに続く情報をまとまりとして捉え、どの名詞を説明しているかを追います。",
        rights: "original",
        goals: [
          "現在分詞・過去分詞が修飾する名詞を特定できる。",
          "関係詞節の終わりを見つけ、主節と分けて読める。",
        ],
        concepts: [
          {
            title: "名詞の直後から説明が始まる",
            body: [
              "英語では名詞の後ろに分詞句や関係詞節を置き、情報を追加できます。まず説明される名詞を確定し、その後ろのまとまりを括弧に入れる感覚で読みます。",
              "現在分詞は能動・進行的、過去分詞は受動・完了的な関係を示すことが多いですが、文脈で確認します。",
            ],
          },
        ],
        example: {
          title: "例題: 関係詞節の範囲を切る",
          problem: "The student who asked the final question stayed after class.",
          steps: [
            {
              expression: "The student [who asked the final question] stayed after class.",
              note: "who から question までが student を説明する関係詞節です。",
            },
            {
              expression: "The student stayed after class.",
              note: "修飾部分を外すと、主節の骨格が見えます。",
            },
            {
              expression: "最後の質問をした生徒は授業後に残った。",
              note: "修飾される名詞 student と主節の動詞 stayed を混同しないことが重要です。",
            },
          ],
        },
        practice: {
          title: "練習: 分詞が修飾する名詞を探す",
          problem: "We found a wallet left under the bench.",
          steps: [
            {
              prompt: "left が修飾している名詞を入力してください。",
              answers: ["wallet", "a wallet"],
              placeholder: "名詞",
            },
            {
              prompt: "wallet と leave の関係を「能動・受動」から入力してください。",
              answers: ["受動", "受動関係"],
              placeholder: "能動 / 受動",
            },
          ],
          hint: "財布が何かを置くのではなく、財布が置かれています。",
        },
        summary: [
          "名詞の直後に続く分詞句・関係詞節を、名詞を説明するまとまりとして切る。",
          "修飾部分を一度外すと、主節の S と V が見つけやすくなる。",
        ],
      },
    ],
  },
];
