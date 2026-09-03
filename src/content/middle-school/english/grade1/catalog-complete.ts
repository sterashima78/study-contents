import type { EnglishArea, EnglishLesson } from "../../../english/types";
import { middleEnglishLesson as lesson } from "../lesson-factory";
import { middleEnglish1Areas as foundationAreas } from "./catalog";

const canAndCommands: EnglishLesson[] = [
  lesson({
    key: "can-ability",
    title: "can + 動詞原形でできることを表す",
    description: "can の後ろに動詞原形を置き、能力や可能なことを伝えます。",
    goals: ["can + 動詞原形の語順を作れる。", "主語が変わってもcanの形が変わらないと分かる。"],
    points: [
      "can は主語の後ろ、動詞の前に置きます。後ろの動詞は原形です。",
      "he / she が主語でも can plays ではなく can play とします。",
    ],
    example: "「私は速く泳げます」を英語で表す。",
    analysis: [
      ["I", "主語を置きます。"],
      ["can swim", "can の後ろは動詞原形です。"],
      ["I can swim fast.", "様子を表す語を加えます。"],
    ],
    practice: [
      {
        prompt: "「彼女はピアノを弾けます」を英語にしてください。",
        answers: ["She can play the piano.", "She can play the piano"],
      },
      { prompt: "Ken can (plays / play) tennis. 正しい語を答えてください。", answers: ["play"] },
    ],
    hint: "can の直後は動詞原形です。",
    summary: ["can + 動詞原形で「〜できる」。", "主語が三人称単数でも動詞に -s を付けない。"],
  }),
  lesson({
    key: "can-negative",
    title: "cannot / can't でできないことを表す",
    description: "can の直後に not を置き、できないことや不可能なことを伝えます。",
    goals: ["cannot / can't を使った否定文を作れる。", "一般動詞の don't と混同せず否定できる。"],
    points: [
      "can の否定は cannot または can't です。",
      "助動詞 can がある文では don't / doesn't を追加しません。",
    ],
    example: "「今日は自転車に乗れません」を英語で表す。",
    analysis: [
      ["I can ride a bike.", "肯定文を確認します。"],
      ["cannot / can't", "can を否定します。"],
      ["I can't ride a bike today.", "時を表す語を加えます。"],
    ],
    practice: [
      {
        prompt: "She can cook. を否定文にしてください。",
        answers: ["She cannot cook.", "She cannot cook", "She can't cook.", "She can't cook"],
      },
      {
        prompt: "「私は今は行けません」を英語にしてください。",
        answers: ["I cannot go now.", "I cannot go now", "I can't go now.", "I can't go now"],
      },
    ],
    hint: "can の直後に not。",
    summary: ["can の否定は cannot / can't。", "can がある文では don't / doesn't を使わない。"],
  }),
  lesson({
    key: "can-question",
    title: "Can + 主語でできるか尋ねる",
    description: "can を主語の前へ出し、能力や依頼について尋ねます。",
    goals: ["Can + 主語 + 動詞原形の疑問文を作れる。", "Yes / No の短い答えを作れる。"],
    points: [
      "疑問文は Can + 主語 + 動詞原形 ...? の語順です。",
      "Can you ...? は文脈によって能力だけでなく依頼にも使えます。",
    ],
    example: "「あなたは英語を話せますか」を英語で尋ねる。",
    analysis: [
      ["You can speak English.", "元の語順を確認します。"],
      ["Can you speak", "can を主語の前へ出します。"],
      ["Can you speak English?", "疑問符を付けます。"],
    ],
    practice: [
      {
        prompt: "「彼は泳げますか」を英語にしてください。",
        answers: ["Can he swim?", "Can he swim"],
      },
      {
        prompt: "Can you cook? に肯定で短く答えてください。",
        answers: ["Yes, I can.", "Yes, I can"],
      },
    ],
    hint: "can を文頭へ移し、動詞は原形のままです。",
    summary: ["Can + 主語 + 動詞原形で疑問文。", "短い答えは Yes, ... can. / No, ... can't."],
  }),
  lesson({
    key: "imperative",
    title: "動詞原形で指示・案内をする",
    description: "主語を置かず動詞原形から始め、短い指示や案内を表します。",
    goals: ["肯定の命令文を作れる。", "文脈に応じてpleaseを使い丁寧さを調整できる。"],
    points: [
      "命令文は動詞原形から始めます。主語 you は通常書きません。",
      "Please を文頭や文末に加えると、依頼として丁寧にできます。",
    ],
    example: "「このドアを開けてください」を英語で表す。",
    analysis: [
      ["Open", "動詞原形から始めます。"],
      ["the door", "対象を続けます。"],
      ["Please open the door.", "please を加えて依頼にします。"],
    ],
    practice: [
      {
        prompt: "「ここに座ってください」を英語にしてください。",
        answers: ["Please sit here.", "Please sit here", "Sit here, please.", "Sit here, please"],
      },
      {
        prompt: "「右に曲がりなさい」を英語にしてください。",
        answers: ["Turn right.", "Turn right"],
      },
    ],
    hint: "主語ではなく動詞原形から始めます。",
    summary: ["肯定の命令文は動詞原形から始める。", "please を使うと依頼として表しやすい。"],
  }),
  lesson({
    key: "negative-imperative",
    title: "Don't + 動詞原形で禁止を表す",
    description: "Don't を文頭に置き、してはいけないことを伝えます。",
    goals: ["否定の命令文を作れる。", "一般動詞の否定文との語順の違いを説明できる。"],
    points: [
      "禁止は Don't + 動詞原形 ... の語順です。",
      "主語を置かない点が You don't ... という平叙文との違いです。",
    ],
    example: "「ここで走らないで」を英語で表す。",
    analysis: [
      ["run here", "禁止する行動を確認します。"],
      ["Don't run", "Don't を動詞原形の前へ置きます。"],
      ["Don't run here.", "場所を加えます。"],
    ],
    practice: [
      {
        prompt: "「窓を開けないで」を英語にしてください。",
        answers: ["Don't open the window.", "Don't open the window"],
      },
      {
        prompt: "「心配しないで」を英語にしてください。",
        answers: ["Don't worry.", "Don't worry"],
      },
    ],
    hint: "Don't の後ろは動詞原形です。",
    summary: ["禁止は Don't + 動詞原形。", "主語を置かない命令文の形を保つ。"],
  }),
  lesson({
    key: "lets",
    title: "Let's + 動詞原形で一緒にすることを提案する",
    description: "Let's を使い、相手と一緒に行う行動を提案します。",
    goals: ["Let's + 動詞原形で提案できる。", "命令・依頼・提案を文脈で区別できる。"],
    points: [
      "Let's + 動詞原形で「一緒に〜しよう」と提案します。",
      "Let's は Let us の短縮に由来しますが、提案の定型としてまとまりで使います。",
    ],
    example: "「放課後にテニスをしよう」を英語で表す。",
    analysis: [
      ["Let's", "一緒にする提案を示します。"],
      ["play tennis", "後ろは動詞原形です。"],
      ["Let's play tennis after school.", "時を表す語句を加えます。"],
    ],
    practice: [
      {
        prompt: "「昼食を食べよう」を英語にしてください。",
        answers: ["Let's eat lunch.", "Let's eat lunch"],
      },
      {
        prompt: "「一緒に勉強しよう」を英語にしてください。",
        answers: ["Let's study together.", "Let's study together"],
      },
    ],
    hint: "Let's の後ろも動詞原形です。",
    summary: ["Let's + 動詞原形で提案する。", "同じ動詞原形でも、命令文とは目的が異なる。"],
  }),
];

const progressiveAndPast: EnglishLesson[] = [
  lesson({
    key: "present-progressive",
    title: "be動詞 + -ing で今していることを表す",
    description: "be動詞と現在分詞を組み合わせ、今進行中の動作を表します。",
    goals: ["現在進行形の肯定文を作れる。", "現在形との意味の違いを捉えられる。"],
    points: [
      "現在進行形は am / is / are + 動詞-ing です。",
      "I play tennis. は習慣、I am playing tennis. は今進行中の動作を表します。",
    ],
    example: "「私は今、本を読んでいます」を英語で表す。",
    analysis: [
      ["I am", "主語に合うbe動詞を選びます。"],
      ["reading", "read を -ing 形にします。"],
      ["I am reading a book now.", "目的語と now を加えます。"],
    ],
    practice: [
      {
        prompt: "「彼女は今料理をしています」を英語にしてください。",
        answers: ["She is cooking now.", "She is cooking now"],
      },
      {
        prompt: "They are (play) soccer. の play を適切な形にしてください。",
        answers: ["playing"],
      },
    ],
    hint: "主語に合うbe動詞 + 動詞-ing。",
    summary: ["現在進行形は be動詞 + -ing。", "習慣の現在形と、今の動作を区別する。"],
  }),
  lesson({
    key: "progressive-negative-question",
    title: "現在進行形を否定・疑問にする",
    description: "be動詞の文と同じ操作で、進行形の否定文と疑問文を作ります。",
    goals: ["進行形の否定文を作れる。", "be動詞を文頭へ出して疑問文を作れる。"],
    points: [
      "否定は be動詞 + not + -ing、疑問は be動詞 + 主語 + -ing ...? です。",
      "進行形では do / does を使いません。",
    ],
    example: "She is studying. を疑問文にする。",
    analysis: [
      ["She is studying.", "be動詞 is を見つけます。"],
      ["Is she studying", "is を主語の前へ出します。"],
      ["Is she studying?", "疑問符を付けます。"],
    ],
    practice: [
      {
        prompt: "I am running. を否定文にしてください。",
        answers: ["I am not running.", "I am not running", "I'm not running.", "I'm not running"],
      },
      {
        prompt: "「彼らは今勉強していますか」を英語にしてください。",
        answers: ["Are they studying now?", "Are they studying now"],
      },
    ],
    hint: "現在進行形の中心はbe動詞です。",
    summary: ["進行形の否定・疑問はbe動詞を操作する。", "do / does は使わない。"],
  }),
  lesson({
    key: "past-be",
    title: "was / were で過去の状態を表す",
    description: "be動詞の過去形 was / were を使い、過去の状態や場所を伝えます。",
    goals: ["主語に応じてwas / wereを選べる。", "過去の時を表す語句と組み合わせられる。"],
    points: [
      "I / he / she / it には was、you / we / they には were を使います。",
      "yesterday、last ...、... ago などで過去の時を示せます。",
    ],
    example: "「私は昨日忙しかった」を英語で表す。",
    analysis: [
      ["I", "主語を確認します。"],
      ["was busy", "I の過去のbe動詞は was。"],
      ["I was busy yesterday.", "過去の時を加えます。"],
    ],
    practice: [
      {
        prompt: "「彼らは昨日学校にいました」を英語にしてください。",
        answers: ["They were at school yesterday.", "They were at school yesterday"],
      },
      { prompt: "She (is) tired last night. の is を過去形にしてください。", answers: ["was"] },
    ],
    hint: "単数中心は was、you / 複数は were。",
    summary: ["be動詞の過去形は was / were。", "過去を示す語句と合わせて時を明確にする。"],
  }),
  lesson({
    key: "past-regular",
    title: "一般動詞の過去形 -ed を使う",
    description: "規則動詞に -ed を付け、過去に行ったことを伝えます。",
    goals: ["規則動詞の過去形を作れる。", "主語に関係なく過去形が同じだと分かる。"],
    points: [
      "規則動詞の過去形は基本的に -ed を付けます。",
      "過去形では he / she でも形は同じで、現在形の -s は使いません。",
    ],
    example: "「私は昨日テニスをしました」を英語で表す。",
    analysis: [
      ["play", "元の動詞を確認します。"],
      ["played", "過去形 -ed にします。"],
      ["I played tennis yesterday.", "時を表す語を加えます。"],
    ],
    practice: [
      {
        prompt: "「彼女は昨夜テレビを見ました」を英語にしてください。",
        answers: ["She watched TV last night.", "She watched TV last night"],
      },
      {
        prompt: "We (visit) Kyoto last week. の visit を適切な形にしてください。",
        answers: ["visited"],
      },
    ],
    hint: "過去の出来事なら規則動詞は -ed。",
    summary: ["規則動詞の過去形は基本 -ed。", "過去形は主語で変化しない。"],
  }),
  lesson({
    key: "past-irregular",
    title: "不規則動詞の過去形を文の中で使う",
    description: "go→went、see→saw など形が変わる動詞を、意味のある文脈で使います。",
    goals: ["頻度の高い不規則動詞の過去形を使える。", "過去を示す手掛かりから動詞の形を選べる。"],
    points: [
      "不規則動詞は -ed ではなく固有の過去形を持ちます。",
      "go→went、have→had、see→saw、eat→ate、come→came などを文ごと覚えます。",
    ],
    example: "「私は昨日図書館へ行きました」を英語で表す。",
    analysis: [
      ["go", "意味に合う動詞を選びます。"],
      ["went", "go の過去形です。"],
      ["I went to the library yesterday.", "場所と時を加えます。"],
    ],
    practice: [
      {
        prompt: "「彼は朝食を食べました」を英語にしてください。",
        answers: ["He ate breakfast.", "He ate breakfast"],
      },
      { prompt: "I (see) Ken yesterday. の see を過去形にしてください。", answers: ["saw"] },
    ],
    hint: "過去の手掛かりを確認してから不規則形を選びます。",
    summary: ["不規則動詞は文の中で形を覚える。", "過去の時を示す語句から時制を判断する。"],
  }),
  lesson({
    key: "past-negative-question",
    title: "did / didn't で過去の否定・疑問を作る",
    description: "一般動詞の過去文を did で支え、否定文・疑問文にします。",
    goals: ["didn't + 動詞原形の否定文を作れる。", "Did + 主語 + 動詞原形の疑問文を作れる。"],
    points: [
      "did が過去を表すため、後ろの一般動詞は原形へ戻します。",
      "went を使った文でも Did you go ...? のように go へ戻ります。",
    ],
    example: "You played tennis. を疑問文にする。",
    analysis: [
      ["played", "過去の一般動詞を確認します。"],
      ["Did you play", "did を文頭に置き、play は原形へ戻します。"],
      ["Did you play tennis?", "残りを続けます。"],
    ],
    practice: [
      {
        prompt: "She watched TV. を否定文にしてください。",
        answers: [
          "She did not watch TV.",
          "She did not watch TV",
          "She didn't watch TV.",
          "She didn't watch TV",
        ],
      },
      {
        prompt: "「あなたは昨日学校へ行きましたか」を英語にしてください。",
        answers: ["Did you go to school yesterday?", "Did you go to school yesterday"],
      },
    ],
    hint: "did / didn't があると一般動詞は原形です。",
    summary: ["過去の否定・疑問は did を使う。", "did の後ろは動詞原形。"],
  }),
  lesson({
    key: "past-story",
    title: "過去の出来事を時間順に伝える",
    description: "過去形を複数文でつなぎ、短い出来事のまとまりを作ります。",
    goals: ["複数の過去形を時間順に並べられる。", "first / then / after that で流れを示せる。"],
    points: [
      "出来事は時間順に並べると読み手が追いやすくなります。",
      "first、then、after that などを使うと文同士の関係を示せます。",
    ],
    passage: {
      title: "A Saturday Morning",
      paragraphs: [
        "I got up at seven. Then I ate breakfast with my family. After that, I walked to the library and read a book about space.",
      ],
    },
    example: "「起きた→朝食→図書館」の順に3文を作る。",
    analysis: [
      ["I got up at seven.", "最初の出来事。"],
      ["Then I ate breakfast.", "then で次を示します。"],
      ["After that, I went to the library.", "最後の出来事を続けます。"],
    ],
    practice: [
      {
        prompt: "「私は宿題をしました。それから夕食を食べました。」を2文で英語にしてください。",
        answers: ["I did my homework. Then I ate dinner.", "I did my homework. Then I ate dinner"],
      },
      {
        prompt: "I went home. (   ) I took a shower. 「それから」に当たる語を答えてください。",
        answers: ["Then", "then"],
      },
    ],
    hint: "過去形を保ちながら、出来事の順番を示します。",
    summary: ["過去形を時間順に並べて短い話を作る。", "つなぎ語で出来事同士の関係を明示する。"],
  }),
];

const basicTools: EnglishLesson[] = [
  lesson({
    key: "object-pronouns",
    title: "me / him / her / us / them を目的語に使う",
    description: "動詞や前置詞の後ろで、人やものを目的語の代名詞で受けます。",
    goals: ["目的格の代名詞を選べる。", "主格と目的格の位置の違いを説明できる。"],
    points: [
      "I→me、he→him、she→her、we→us、they→them のように目的語では形が変わります。",
      "I like him. / Talk to her. のように動詞・前置詞の後ろで使います。",
    ],
    example: "「私は彼女を知っています」を英語で表す。",
    analysis: [
      ["I know", "主語と動詞を置きます。"],
      ["she → her", "目的語なので目的格へ。"],
      ["I know her.", "動詞の後ろに置きます。"],
    ],
    practice: [
      {
        prompt: "「彼は私を知っています」を英語にしてください。",
        answers: ["He knows me.", "He knows me"],
      },
      { prompt: "Please help (we). の we を適切な形にしてください。", answers: ["us"] },
    ],
    hint: "動詞・前置詞の後ろなら目的格を考えます。",
    summary: ["目的語では me / him / her / us / them。", "文中の役割で代名詞の形を選ぶ。"],
  }),
  lesson({
    key: "possessives",
    title: "my / your と mine / yours を使い分ける",
    description: "名詞の前に置く所有格と、名詞を含んで受ける所有代名詞を区別します。",
    goals: ["所有格を名詞の前に置ける。", "mine / yours などで名詞の繰り返しを避けられる。"],
    points: [
      "my book の my は名詞の前に置きます。",
      "This book is mine. の mine は「my book」に相当し、後ろに名詞を置きません。",
    ],
    example: "「このかばんは私のものです」を英語で表す。",
    analysis: [
      ["This bag is", "主語とbe動詞を置きます。"],
      ["my bag → mine", "名詞を含む形へ。"],
      ["This bag is mine.", "mine だけで所有を示します。"],
    ],
    practice: [
      {
        prompt: "「これは彼女の本です」を英語にしてください。",
        answers: ["This is her book.", "This is her book"],
      },
      { prompt: "This pen is (my / mine). 正しい語を答えてください。", answers: ["mine"] },
    ],
    hint: "後ろに名詞があるなら my / your、ないなら mine / yours を考えます。",
    summary: ["所有格は名詞の前。", "所有代名詞は名詞を含んで受ける。"],
  }),
  lesson({
    key: "demonstratives",
    title: "this / that / these / those で指し示す",
    description: "近い・遠い、単数・複数を組み合わせて人やものを指します。",
    goals: ["this / that / these / thoseを距離と数で選べる。", "指示語に合うbe動詞を選べる。"],
    points: [
      "this / these は近く、that / those は離れたものを指します。",
      "this / that は単数なので is、these / those は複数なので are と組み合わせます。",
    ],
    example: "「これらは私の本です」を英語で表す。",
    analysis: [
      ["these", "近くの複数を指します。"],
      ["are", "複数なので are。"],
      ["These are my books.", "複数名詞を続けます。"],
    ],
    practice: [
      {
        prompt: "「あれは私の学校です」を英語にしてください。",
        answers: [
          "That is my school.",
          "That is my school",
          "That's my school.",
          "That's my school",
        ],
      },
      { prompt: "(This / These) are my shoes. 正しい語を答えてください。", answers: ["These"] },
    ],
    hint: "距離と単数・複数の2点を確認します。",
    summary: ["this/these は近く、that/those は遠く。", "単数・複数に合わせて is / are を選ぶ。"],
  }),
  lesson({
    key: "prepositions-place-time",
    title: "in / on / at などで場所と時を表す",
    description: "前置詞を名詞の前に置き、場所・時・方向などの関係を示します。",
    goals: [
      "基本的な場所・時の前置詞を使える。",
      "前置詞を日本語一語との対応だけでなく関係として捉えられる。",
    ],
    points: [
      "at school、in the room、on the desk のように、前置詞は位置関係を示します。",
      "at seven、on Monday、in July のように時にも使います。",
    ],
    example: "「本は机の上にあります」を英語で表す。",
    analysis: [
      ["The book is", "主語とbe動詞。"],
      ["on", "表面に接している位置。"],
      ["The book is on the desk.", "前置詞 + 名詞で場所を示します。"],
    ],
    practice: [
      {
        prompt: "「私は7時に起きます」を英語にしてください。",
        answers: ["I get up at seven.", "I get up at seven"],
      },
      {
        prompt: "The cat is (in / at) the box. 箱の中なら正しい語を答えてください。",
        answers: ["in"],
      },
    ],
    hint: "前置詞の後ろに名詞を置き、どんな関係か考えます。",
    summary: [
      "前置詞は名詞の前で関係を示す。",
      "場所と時で使われる代表的な組み合わせを文ごと覚える。",
    ],
  }),
  lesson({
    key: "which-whose",
    title: "Which / Whose で選択・所有を尋ねる",
    description: "which で選択肢、whose で持ち主を尋ねます。",
    goals: ["which と whose を目的に応じて選べる。", "疑問詞の後ろの語順を保てる。"],
    points: [
      "Which ...? は「どちら・どの〜」、Whose ...? は「だれの〜」を尋ねます。",
      "Which book do you want? のように疑問詞の後ろへ名詞を置けます。",
    ],
    example: "「どちらの本があなたのものですか」を英語で尋ねる。",
    analysis: [
      ["Which book", "選択肢の中から本を尋ねます。"],
      ["is", "be動詞の疑問文へ。"],
      ["Which book is yours?", "所有代名詞で受けます。"],
    ],
    practice: [
      {
        prompt: "「だれのかばんですか」を英語にしてください。",
        answers: ["Whose bag is it?", "Whose bag is it"],
      },
      {
        prompt: "「どちらの色が好きですか」を英語にしてください。",
        answers: ["Which color do you like?", "Which color do you like"],
      },
    ],
    hint: "選択なら which、所有なら whose。",
    summary: [
      "which は選択、whose は所有を尋ねる。",
      "疑問詞の後ろもbe動詞・一般動詞の疑問文の規則を使う。",
    ],
  }),
  lesson({
    key: "compound-conjunctions",
    title: "and / but / or / so で文をつなぐ",
    description: "二つの情報の関係を考え、並列・対比・選択・結果としてつなぎます。",
    goals: ["基本接続詞で重文を作れる。", "文同士の意味関係に合う接続詞を選べる。"],
    points: [
      "and は追加、but は対比、or は選択、so は結果を表します。",
      "つなぐ前に、それぞれの文が独立して意味を持つか確認します。",
    ],
    example: "「私は疲れていましたが、宿題をしました」を英語で表す。",
    analysis: [
      ["I was tired.", "前半の事実。"],
      ["I did my homework.", "後半の事実。"],
      ["I was tired, but I did my homework.", "対比なので but でつなぎます。"],
    ],
    practice: [
      {
        prompt: "I like soccer. I like tennis. を and で1文にしてください。",
        answers: [
          "I like soccer and I like tennis.",
          "I like soccer and I like tennis",
          "I like soccer, and I like tennis.",
          "I like soccer, and I like tennis",
        ],
      },
      {
        prompt: "It was raining, (and / so) I stayed home. 正しい語を答えてください。",
        answers: ["so"],
      },
    ],
    hint: "二つの情報が追加・対比・選択・結果のどれか考えます。",
    summary: ["接続詞で文同士の意味関係を示す。", "重文でも各文の主語と動詞を確認する。"],
  }),
  lesson({
    key: "grade1-integration",
    title: "中1の文法を使って自分の一日を伝える",
    description: "現在・進行・過去、助動詞、接続詞を使い分け、短いまとまりを作ります。",
    goals: ["時制や文の種類を目的に応じて選べる。", "3〜5文の短い文章を読み書きできる。"],
    points: [
      "「いつのことか」を先に決めると、現在・進行・過去を選びやすくなります。",
      "一文ごとの正しさだけでなく、and / but / so などで情報の流れを作ります。",
    ],
    passage: {
      title: "My Busy Day",
      paragraphs: [
        "I usually walk to school, but it was raining this morning. I took a bus. Now I am studying in the library. I can finish my homework before dinner.",
      ],
    },
    example: "日常・今・過去・できることを4文で整理する。",
    analysis: [
      ["I usually walk to school.", "習慣は現在形。"],
      ["I took a bus this morning.", "終わった出来事は過去形。"],
      ["Now I am studying. I can finish my homework.", "今の動作と可能性を使い分けます。"],
    ],
    practice: [
      {
        prompt: "「私は普段走りますが、今日は歩いています」を英語にしてください。",
        answers: [
          "I usually run, but I am walking today.",
          "I usually run, but I am walking today",
        ],
      },
      {
        prompt: "「昨日は忙しかったので、家にいました」を英語にしてください。",
        answers: [
          "I was busy yesterday, so I stayed home.",
          "I was busy yesterday, so I stayed home",
        ],
      },
    ],
    hint: "時を表す語と、文同士の関係を先に確認します。",
    summary: [
      "中1の主要な文の形を意味に応じて選ぶ。",
      "短い文章では時と情報のつながりを意識する。",
    ],
  }),
];

export const middleEnglish1CompleteAreas: EnglishArea[] = [
  ...foundationAreas,
  {
    key: "everyday-grammar",
    title: "日常表現を広げる文法",
    description:
      "can、命令文、進行形、過去形、代名詞・前置詞・接続詞を使い、身近な出来事をより詳しく伝えます。",
    units: [
      {
        key: "can-and-commands",
        title: "can・命令文・提案",
        description: "できること、依頼・禁止・提案を6技能で使い分けます。",
        lessons: canAndCommands,
      },
      {
        key: "progressive-and-past",
        title: "進行形と過去形",
        description: "今していることと過去の出来事を7技能で表します。",
        lessons: progressiveAndPast,
      },
      {
        key: "basic-language-tools",
        title: "代名詞・前置詞・接続詞",
        description: "文を詳しくし、文同士をつなぐための基本語法を7技能で学びます。",
        lessons: basicTools,
      },
    ],
  },
];
