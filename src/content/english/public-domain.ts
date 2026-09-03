import type { EnglishUnit } from "./types";

export const englishPublicDomainUnits: EnglishUnit[] = [
  {
    key: "classic-english",
    title: "古典英文を読む",
    description:
      "権利確認済みの古典英文を使い、現代英語と異なる表現にも注意しながら文の対比と主張を読み取ります。",
    lessons: [
      {
        key: "bacon-of-studies",
        title: "Bacon の対比表現を読む",
        description:
          "Francis Bacon の『Of Studies』を題材に、否定表現の反復と but による対比から筆者の主張を捉えます。",
        rights: "public-domain",
        sourceId: "bacon-of-studies",
        goals: [
          "not / nor / but が作る対比構造をまとまりで読める。",
          "古典的な英文でも、反復される文型から筆者の主張を説明できる。",
        ],
        concepts: [
          {
            title: "否定の列挙と but の転換を一組で読む",
            body: [
              "同じ形の否定が続いた後に but が置かれると、前半で退けた読み方と後半で勧める読み方が対比されます。語を一つずつ訳すより、反復される構造を先に取ると主張が見えます。",
              "17世紀の英文には現代と異なる綴りや語法がありますが、まず接続関係と並列構造を手掛かりにします。",
            ],
          },
        ],
        passage: {
          title: "Of Studies",
          paragraphs: [
            "Read not to contradict and confute; nor to believe and take for granted; nor to find talk and discourse; but to weigh and consider.",
          ],
        },
        example: {
          title: "例題: 何を退け、何を勧めているか整理する",
          problem: "What contrast does Bacon make in this sentence?",
          steps: [
            {
              expression: "not to contradict / nor to believe / nor to find talk",
              note: "読書の目的として退ける三つの姿勢が、同じ形で並べられています。",
            },
            {
              expression: "but to weigh and consider",
              note: "but の後ろで、内容を吟味し考える読み方へ転換しています。",
            },
            {
              expression: "Read to examine ideas rather than merely oppose, accept, or repeat them.",
              note: "列挙された具体表現を一段抽象化すると、筆者の主張を短くまとめられます。",
            },
          ],
        },
        practice: {
          title: "練習: 同じ対比構造を読む",
          problem:
            "Read not only to collect facts, but to connect them and decide what they mean.",
          steps: [
            {
              prompt: "退けている読み方を英語で入力してください。",
              answers: ["only to collect facts", "to collect facts", "collect facts"],
              placeholder: "not only ...",
            },
            {
              prompt: "勧めている二つの行動を英語で入力してください。",
              answers: [
                "connect them and decide what they mean",
                "to connect them and decide what they mean",
              ],
              placeholder: "connect ... and decide ...",
            },
          ],
          hint: "but の前後を分け、後半で追加される読み方を確認します。",
        },
        summary: [
          "反復される not / nor を一まとまりとして捉え、but の後ろとの対比を読む。",
          "古典英文でも、並列・接続・反復という構造上の手掛かりを優先する。",
          "外部作品を使う場合は、権利台帳で approved の本文だけを出典付きで掲載する。",
        ],
      },
    ],
  },
];
