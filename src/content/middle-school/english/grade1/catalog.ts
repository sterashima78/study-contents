import type { EnglishArea, EnglishLesson } from "../../../../english/types";

type LessonSpec = {
  key: string;
  title: string;
  description: string;
  goals: [string, string];
  points: string[];
  example: string;
  analysis: Array<[string, string]>;
  practice: Array<{ prompt: string; answers: string[]; placeholder?: string }>;
  hint: string;
  summary: [string, string];
};

const lesson = (spec: LessonSpec): EnglishLesson => ({
  key: spec.key,
  title: spec.title,
  description: spec.description,
  rights: "original",
  goals: spec.goals,
  concepts: [{ title: spec.title, body: spec.points }],
  example: {
    title: `例題: ${spec.title}`,
    problem: spec.example,
    steps: spec.analysis.map(([expression, note]) => ({ expression, note })),
  },
  practice: {
    title: `練習: ${spec.title}`,
    problem: "短い英文を自分で組み立て、語順と形を確認します。",
    steps: spec.practice,
    hint: spec.hint,
  },
  summary: spec.summary,
});

const beLessons: EnglishLesson[] = [
  lesson({
    key: "be-i-you",
    title: "I am / You are で自分と相手を表す",
    description: "I には am、you には are を使い、自分や相手の状態・属性を伝えます。",
    goals: [
      "I am と You are を正しい語順で作れる。",
      "be動詞が主語と説明語を結ぶことを捉えられる。",
    ],
    points: [
      "英語の基本語順は「主語 + 動詞 + 続き」です。I には am、you には are を使います。",
      "I am a student. のように、be動詞は主語と名詞・形容詞などの説明を結びます。",
    ],
    example: "「私は中学生です」を英語で表す。",
    analysis: [
      ["I", "まず主語を置きます。"],
      ["am", "I に対応する be動詞です。"],
      ["I am a junior high school student.", "主語の説明を後ろへ続けます。"],
    ],
    practice: [
      {
        prompt: "「私は13歳です」を英語にしてください。",
        answers: ["I am thirteen.", "I am thirteen", "I'm thirteen.", "I'm thirteen"],
      },
      {
        prompt: "「あなたは親切です」を英語にしてください。",
        answers: ["You are kind.", "You are kind", "You're kind.", "You're kind"],
      },
    ],
    hint: "I → am、you → are を先に決めます。",
    summary: ["I には am、you には are を使う。", "be動詞は主語と、その人・ものの説明を結ぶ。"],
  }),
  lesson({
    key: "be-he-she-it",
    title: "He / She / It is で一人・一つを表す",
    description: "he・she・it には is を使い、第三者やものについて説明します。",
    goals: ["he・she・it と is を組み合わせられる。", "人とものに応じて代名詞を選べる。"],
    points: [
      "he は男性一人、she は女性一人、it は一つのもの・動物・事柄などを受ける基本的な代名詞です。",
      "he・she・it の後ろの be動詞は is です。",
    ],
    example: "「彼女は私の友達です」を英語で表す。",
    analysis: [
      ["She", "話題の女性を代名詞で受けます。"],
      ["is", "she に対応する be動詞です。"],
      ["She is my friend.", "my friend を補います。"],
    ],
    practice: [
      {
        prompt: "「彼は忙しいです」を英語にしてください。",
        answers: ["He is busy.", "He is busy", "He's busy.", "He's busy"],
      },
      {
        prompt: "「それは新しいです」を英語にしてください。",
        answers: ["It is new.", "It is new", "It's new.", "It's new"],
      },
    ],
    hint: "he / she / it の後ろは is です。",
    summary: [
      "he・she・it には is を使う。",
      "代名詞は、同じ人・ものを繰り返さずに受ける働きをする。",
    ],
  }),
  lesson({
    key: "be-we-they",
    title: "We / They are で複数を表す",
    description: "we・they と are を組み合わせ、複数の人やものを説明します。",
    goals: ["we・they と are を正しく組み合わせられる。", "単数と複数で主語を区別できる。"],
    points: [
      "we は「私たち」、they は「彼ら・彼女ら・それら」を表します。",
      "we・you・they の後ろの be動詞は are です。複数の名詞を主語にするときも基本的に are を使います。",
    ],
    example: "「私たちは同じクラスです」を英語で表す。",
    analysis: [
      ["We", "「私たち」を主語にします。"],
      ["are", "we に対応します。"],
      ["We are in the same class.", "場所・所属の情報を続けます。"],
    ],
    practice: [
      {
        prompt: "「彼らはサッカー選手です」を英語にしてください。",
        answers: ["They are soccer players.", "They are soccer players"],
      },
      {
        prompt: "「私たちは準備できています」を英語にしてください。",
        answers: ["We are ready.", "We are ready", "We're ready.", "We're ready"],
      },
    ],
    hint: "we / they の後ろは are です。",
    summary: ["we・they には are を使う。", "主語が一人・一つか複数かを意識する。"],
  }),
  lesson({
    key: "be-negative",
    title: "be動詞の否定文を作る",
    description: "am / is / are の直後に not を置き、「〜ではない」を表します。",
    goals: ["be動詞の否定文を作れる。", "not の位置を主語の後ろではなくbe動詞の後ろと判断できる。"],
    points: [
      "be動詞の文を否定するときは、am / is / are の直後に not を置きます。",
      "is not → isn't、are not → aren't の短縮形もよく使います。",
    ],
    example: "She is busy. を「忙しくありません」に変える。",
    analysis: [
      ["She is", "主語とbe動詞を確認します。"],
      ["is not", "be動詞の直後に not を置きます。"],
      ["She is not busy.", "残りをそのまま続けます。"],
    ],
    practice: [
      {
        prompt: "I am tired. を否定文にしてください。",
        answers: ["I am not tired.", "I am not tired", "I'm not tired.", "I'm not tired"],
      },
      {
        prompt: "They are students. を否定文にしてください。",
        answers: [
          "They are not students.",
          "They are not students",
          "They aren't students.",
          "They aren't students",
        ],
      },
    ],
    hint: "not は am / is / are の直後です。",
    summary: ["be動詞の否定文は be動詞 + not。", "短縮形を使っても語順は変わらない。"],
  }),
  lesson({
    key: "be-questions",
    title: "be動詞を文頭に出して疑問文を作る",
    description: "am / is / are を主語の前へ移し、Yes / No で答えられる疑問文を作ります。",
    goals: ["be動詞の疑問文を作れる。", "肯定文から疑問文への語順変化を説明できる。"],
    points: [
      "be動詞の疑問文は、am / is / are を主語の前へ出します。",
      "You are ready. → Are you ready? のように、be動詞と主語の順序を入れ替えます。",
    ],
    example: "He is a teacher. を疑問文にする。",
    analysis: [
      ["He is", "主語とbe動詞を確認します。"],
      ["Is he", "is を主語の前へ移します。"],
      ["Is he a teacher?", "文末を ? にします。"],
    ],
    practice: [
      {
        prompt: "You are from Tokyo. を疑問文にしてください。",
        answers: ["Are you from Tokyo?", "Are you from Tokyo"],
      },
      {
        prompt: "She is happy. を疑問文にしてください。",
        answers: ["Is she happy?", "Is she happy"],
      },
    ],
    hint: "be動詞を主語の前へ移します。",
    summary: ["be動詞の疑問文は be動詞 + 主語。", "肯定文との語順の違いを意識する。"],
  }),
  lesson({
    key: "be-short-answers",
    title: "be動詞の疑問文に短く答える",
    description: "Yes / No の後ろで主語を代名詞にし、対応するbe動詞で短く答えます。",
    goals: ["be動詞の疑問文に短く答えられる。", "質問の主語に対応する代名詞を選べる。"],
    points: [
      "Are you ...? には Yes, I am. / No, I'm not. のように答えます。",
      "Is Ken ...? なら Ken を he に置き換えて Yes, he is. のように答えます。",
    ],
    example: "Is Mika your friend? に肯定で答える。",
    analysis: [
      ["Mika → she", "答えでは代名詞で受けます。"],
      ["she is", "質問の is に対応します。"],
      ["Yes, she is.", "Yes の後ろに短い文を続けます。"],
    ],
    practice: [
      {
        prompt: "Are you a student? に肯定で短く答えてください。",
        answers: ["Yes, I am.", "Yes, I am"],
      },
      {
        prompt: "Is Taro busy? に否定で短く答えてください。",
        answers: ["No, he is not.", "No, he is not", "No, he isn't.", "No, he isn't"],
      },
    ],
    hint: "質問の主語を I / he / she / it / we / they に置き換えます。",
    summary: [
      "Yes / No の後ろも主語 + be動詞で答える。",
      "固有名詞は代名詞に置き換えて答えられる。",
    ],
  }),
  lesson({
    key: "be-wh-questions",
    title: "What / Who / Where とbe動詞で尋ねる",
    description: "知りたい情報を疑問詞で示し、その後ろにbe動詞の疑問文を続けます。",
    goals: ["what・who・where を目的に応じて選べる。", "疑問詞 + be動詞 + 主語の語順を作れる。"],
    points: [
      "what は「何」、who は「だれ」、where は「どこ」を尋ねる基本的な疑問詞です。",
      "Where is your bag? のように、疑問詞の後ろは be動詞の疑問文の語順です。",
    ],
    example: "「あなたの本はどこですか」を英語で尋ねる。",
    analysis: [
      ["Where", "場所を尋ねるので where。"],
      ["is your book", "be動詞を主語の前へ置きます。"],
      ["Where is your book?", "疑問詞を文頭に置きます。"],
    ],
    practice: [
      {
        prompt: "「彼女はだれですか」を英語にしてください。",
        answers: ["Who is she?", "Who is she"],
      },
      {
        prompt: "「これは何ですか」を英語にしてください。",
        answers: ["What is this?", "What is this", "What's this?", "What's this"],
      },
    ],
    hint: "知りたい情報の種類を決めてから、be動詞の疑問文を続けます。",
    summary: [
      "what・who・where は知りたい情報の種類を示す。",
      "疑問詞の後ろは be動詞 + 主語の語順。",
    ],
  }),
  lesson({
    key: "be-self-introduction",
    title: "be動詞で短い自己紹介を組み立てる",
    description: "学んだbe動詞の文をつなぎ、名前・出身・状態などを短く伝えます。",
    goals: ["複数のbe動詞文を一つの自己紹介にまとめられる。", "主語に応じてbe動詞を選び直せる。"],
    points: [
      "一文ずつ正しい主語 + be動詞を作り、それを意味の流れに沿って並べます。",
      "自己紹介では I am ... を繰り返しすぎず、I'm ... の短縮形も活用できます。",
    ],
    example: "名前、出身、所属を3文で紹介する。",
    analysis: [
      ["I'm Aoi.", "最初に名前を伝えます。"],
      ["I'm from Nagano.", "次に出身を加えます。"],
      ["I'm in the tennis club.", "最後に身近な情報を加えます。"],
    ],
    practice: [
      {
        prompt: "「私はユウです。私は大阪出身です。」を2文の英語にしてください。",
        answers: [
          "I am Yu. I am from Osaka.",
          "I'm Yu. I'm from Osaka.",
          "I am Yu. I'm from Osaka.",
          "I'm Yu. I am from Osaka.",
        ],
      },
      {
        prompt: "自己紹介で「私は元気です」を英語にしてください。",
        answers: ["I am fine.", "I am fine", "I'm fine.", "I'm fine"],
      },
    ],
    hint: "各文で主語 I と be動詞 am の組を確認します。",
    summary: ["短い文を正確に作ってからつなげる。", "自己紹介も基本は主語 + be動詞 + 情報。"],
  }),
];

const verbLessons: EnglishLesson[] = [
  lesson({
    key: "verb-i-you",
    title: "I / You + 一般動詞で行動を表す",
    description: "play・like・use などの一般動詞を使い、自分や相手の行動・好みを表します。",
    goals: ["I / you の後ろに動詞の原形を置ける。", "be動詞の文と一般動詞の文を区別できる。"],
    points: [
      "I play tennis. の play のように、動作や好みを表す動詞を一般動詞として扱います。",
      "I / you が主語の現在形では、一般動詞は基本的に原形を使います。",
    ],
    example: "「私は音楽が好きです」を英語で表す。",
    analysis: [
      ["I", "主語を置きます。"],
      ["like", "I なので現在形は原形。"],
      ["I like music.", "目的語 music を続けます。"],
    ],
    practice: [
      {
        prompt: "「私は毎日英語を勉強します」を英語にしてください。",
        answers: ["I study English every day.", "I study English every day"],
      },
      {
        prompt: "「あなたはサッカーをします」を英語にしてください。",
        answers: ["You play soccer.", "You play soccer"],
      },
    ],
    hint: "I / you の現在形では動詞を原形にします。",
    summary: ["I / you + 一般動詞の現在形は基本的に原形。", "一般動詞は行動・好みなどを直接表す。"],
  }),
  lesson({
    key: "verb-third-person",
    title: "he / she の現在形で動詞に -s を付ける",
    description: "主語がhe・she・一人の人などのとき、一般動詞の現在形に -s / -es を付けます。",
    goals: ["三人称単数現在の -s を付けられる。", "主語を見て動詞の形を選べる。"],
    points: [
      "現在の習慣を表す文で、主語が he / she / it や一人・一つなら、一般動詞に -s / -es を付けます。",
      "play → plays、watch → watches、study → studies のように綴りが変わるものもあります。",
    ],
    example: "「彼女は毎朝走ります」を英語で表す。",
    analysis: [
      ["She", "三人称単数の主語です。"],
      ["runs", "run に -s を付けます。"],
      ["She runs every morning.", "時を表す語句を続けます。"],
    ],
    practice: [
      {
        prompt: "He (play) tennis after school. の play を適切な形にしてください。",
        answers: ["plays"],
      },
      {
        prompt: "Mika (study) English every day. の study を適切な形にしてください。",
        answers: ["studies"],
      },
    ],
    hint: "主語が he / she / 一人の名前なら三人称単数現在を確認します。",
    summary: [
      "三人称単数の現在形では一般動詞に -s / -es。",
      "まず主語を見てから動詞の形を決める。",
    ],
  }),
  lesson({
    key: "verb-negative-do",
    title: "I / You の一般動詞を don't で否定する",
    description: "I / you / we / they の一般動詞の前に do not を置き、否定文を作ります。",
    goals: ["do not / don't を使って否定文を作れる。", "否定文では後ろの動詞を原形にできる。"],
    points: [
      "一般動詞の否定文では、I / you / we / they の後ろに do not（don't）を置きます。",
      "don't の後ろの一般動詞は原形です。",
    ],
    example: "I play baseball. を否定文にする。",
    analysis: [
      ["I", "主語を確認します。"],
      ["do not play", "do not を加え、play は原形。"],
      ["I do not play baseball.", "残りを続けます。"],
    ],
    practice: [
      {
        prompt: "I like coffee. を否定文にしてください。",
        answers: [
          "I do not like coffee.",
          "I do not like coffee",
          "I don't like coffee.",
          "I don't like coffee",
        ],
      },
      {
        prompt: "We use this room. を否定文にしてください。",
        answers: [
          "We do not use this room.",
          "We do not use this room",
          "We don't use this room.",
          "We don't use this room",
        ],
      },
    ],
    hint: "don't の後ろは動詞の原形です。",
    summary: [
      "I / you / we / they の否定は do not + 動詞原形。",
      "be動詞の否定文とは作り方が違う。",
    ],
  }),
  lesson({
    key: "verb-negative-does",
    title: "he / she の一般動詞を doesn't で否定する",
    description: "三人称単数の一般動詞を does not で否定し、後ろの動詞を原形に戻します。",
    goals: [
      "does not / doesn't を使って否定文を作れる。",
      "doesn't の後ろで動詞から -s を外せる。",
    ],
    points: [
      "主語が he / she / it や一人・一つなら、否定には does not（doesn't）を使います。",
      "does に三人称単数の情報が入るので、後ろの一般動詞は原形です。He doesn't plays とはしません。",
    ],
    example: "She likes cats. を否定文にする。",
    analysis: [
      ["She", "三人称単数です。"],
      ["does not like", "does not を置き、likes → like。"],
      ["She does not like cats.", "原形で続けます。"],
    ],
    practice: [
      {
        prompt: "He plays tennis. を否定文にしてください。",
        answers: [
          "He does not play tennis.",
          "He does not play tennis",
          "He doesn't play tennis.",
          "He doesn't play tennis",
        ],
      },
      {
        prompt: "Aya studies French. を否定文にしてください。",
        answers: [
          "Aya does not study French.",
          "Aya does not study French",
          "Aya doesn't study French.",
          "Aya doesn't study French",
        ],
      },
    ],
    hint: "doesn't の後ろでは動詞を原形に戻します。",
    summary: ["三人称単数の否定は does not + 動詞原形。", "-s は does 側に移ったと考える。"],
  }),
  lesson({
    key: "verb-question-do",
    title: "Do + 主語で一般動詞の疑問文を作る",
    description: "I / you / we / they の一般動詞の疑問文を Do で始めます。",
    goals: ["Do で始まる疑問文を作れる。", "Do you ...? に短く答えられる。"],
    points: [
      "一般動詞の疑問文では Do を文頭に置き、Do + 主語 + 動詞原形 ...? の語順にします。",
      "Do you ...? には Yes, I do. / No, I don't. のように答えます。",
    ],
    example: "You play the piano. を疑問文にする。",
    analysis: [
      ["Do", "文頭に do を置きます。"],
      ["you play", "主語の後ろは動詞原形。"],
      ["Do you play the piano?", "疑問文を完成します。"],
    ],
    practice: [
      {
        prompt: "You like math. を疑問文にしてください。",
        answers: ["Do you like math?", "Do you like math"],
      },
      {
        prompt: "Do you study English? に肯定で短く答えてください。",
        answers: ["Yes, I do.", "Yes, I do"],
      },
    ],
    hint: "文頭に Do、主語の後ろは動詞原形です。",
    summary: ["一般動詞の疑問文は Do + 主語 + 動詞原形。", "短い答えでも do / don't を使う。"],
  }),
  lesson({
    key: "verb-question-does",
    title: "Does + 主語で三人称単数の疑問文を作る",
    description: "he・she・一人の人などを主語にした一般動詞の疑問文を Does で始めます。",
    goals: ["Does で始まる疑問文を作れる。", "does の後ろで動詞を原形にできる。"],
    points: [
      "三人称単数の一般動詞の疑問文では Does を文頭に置きます。",
      "Does she play ...? のように、does の後ろの動詞は原形です。",
    ],
    example: "Ken plays soccer. を疑問文にする。",
    analysis: [
      ["Does", "三人称単数なので does。"],
      ["Ken play", "plays を原形 play に戻します。"],
      ["Does Ken play soccer?", "文末を ? にします。"],
    ],
    practice: [
      {
        prompt: "She likes music. を疑問文にしてください。",
        answers: ["Does she like music?", "Does she like music"],
      },
      {
        prompt: "Does Taro study English? に否定で短く答えてください。",
        answers: ["No, he does not.", "No, he does not", "No, he doesn't.", "No, he doesn't"],
      },
    ],
    hint: "Does を使ったら、後ろの動詞は原形です。",
    summary: [
      "三人称単数の疑問文は Does + 主語 + 動詞原形。",
      "短い答えでも does / doesn't を使う。",
    ],
  }),
  lesson({
    key: "verb-wh-do",
    title: "疑問詞 + do / does で詳しく尋ねる",
    description: "what・where・when・how の後ろに do / does の疑問文を続けます。",
    goals: ["疑問詞と do / does を組み合わせられる。", "知りたい情報に応じて疑問詞を選べる。"],
    points: [
      "一般動詞について詳しく尋ねるときは、疑問詞 + do / does + 主語 + 動詞原形の語順を使います。",
      "what は内容、where は場所、when は時、how は方法・様子などを尋ねます。",
    ],
    example: "「あなたは放課後どこで勉強しますか」を英語で尋ねる。",
    analysis: [
      ["Where", "場所を尋ねます。"],
      ["do you study", "you なので do + 主語 + 動詞原形。"],
      ["Where do you study after school?", "時を表す語句を最後に加えます。"],
    ],
    practice: [
      {
        prompt: "「あなたは朝何を食べますか」を英語にしてください。",
        answers: ["What do you eat in the morning?", "What do you eat in the morning"],
      },
      {
        prompt: "「彼女はどこでテニスをしますか」を英語にしてください。",
        answers: ["Where does she play tennis?", "Where does she play tennis"],
      },
    ],
    hint: "疑問詞の次に do / does、その後ろは主語 + 動詞原形です。",
    summary: [
      "疑問詞 + do / does + 主語 + 動詞原形で詳しく尋ねる。",
      "what / where / when / how を目的に応じて選ぶ。",
    ],
  }),
  lesson({
    key: "verb-daily-routine",
    title: "一般動詞で日常を短く伝える",
    description: "一般動詞の肯定・否定・疑問を使い、日常の行動や好みについてまとまりを作ります。",
    goals: [
      "現在形を使って日常の行動を複数文で書ける。",
      "主語が変わったとき動詞の形を調整できる。",
    ],
    points: [
      "日常の説明では、I get up ... / I eat ... / I go ... のように時間順に並べると伝わりやすくなります。",
      "自分以外の人を説明するときは、he / she と三人称単数現在の -s を確認します。",
    ],
    example: "朝の習慣を3文で表す。",
    analysis: [
      ["I get up at seven.", "最初の行動を時刻とともに示します。"],
      ["I eat breakfast at home.", "次の行動を続けます。"],
      ["I walk to school.", "最後に移動を伝えます。"],
    ],
    practice: [
      {
        prompt: "「私は7時に起きます。私は学校へ歩きます。」を2文の英語にしてください。",
        answers: ["I get up at seven. I walk to school.", "I get up at seven. I walk to school"],
      },
      {
        prompt: "「彼は毎日サッカーをします」を英語にしてください。",
        answers: ["He plays soccer every day.", "He plays soccer every day"],
      },
    ],
    hint: "自分なら動詞原形、he / she なら三人称単数現在を確認します。",
    summary: [
      "日常の行動は現在形で時間順に並べると伝わりやすい。",
      "主語が変わるたびに動詞の形を確認する。",
    ],
  }),
];

export const middleEnglish1Areas: EnglishArea[] = [
  {
    key: "foundations",
    title: "基本文とやり取り",
    description:
      "be動詞と一般動詞を使い、自分・相手・身近な人の日常を短い英文で伝えたり尋ねたりします。",
    units: [
      {
        key: "be-verbs",
        title: "be動詞の基本文",
        description: "am / is / are の肯定・否定・疑問と、短い自己紹介を8技能で学びます。",
        lessons: beLessons,
      },
      {
        key: "general-verbs",
        title: "一般動詞の現在形",
        description:
          "一般動詞、三人称単数現在、do / does の否定・疑問と日常表現を8技能で学びます。",
        lessons: verbLessons,
      },
    ],
  },
];
