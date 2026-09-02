export type MiddleEnglishDifficulty = "basic" | "applied" | "challenge";

export type MiddleEnglishExercise = {
  id: string;
  prompt: string;
  answers: string[];
  lessonKeys: string[];
  lessonTitles: string[];
  difficulty: MiddleEnglishDifficulty;
  hint?: string;
};

type ExerciseTemplate = {
  prompt: string;
  answers: string[];
  hint: string;
};

const lessonTitles: Record<string, string> = {
  "be-i-you": "I am / You are で自分と相手を表す",
  "be-he-she-it": "He / She / It is で一人・一つを表す",
  "be-we-they": "We / They are で複数を表す",
  "be-negative": "be動詞の否定文を作る",
  "be-questions": "be動詞を文頭に出して疑問文を作る",
  "be-short-answers": "be動詞の疑問文に短く答える",
  "be-wh-questions": "What / Who / Where とbe動詞で尋ねる",
  "be-self-introduction": "be動詞で短い自己紹介を組み立てる",
  "verb-i-you": "I / You + 一般動詞で行動を表す",
  "verb-third-person": "he / she の現在形で動詞に -s を付ける",
  "verb-negative-do": "I / You の一般動詞を don't で否定する",
  "verb-negative-does": "he / she の一般動詞を doesn't で否定する",
  "verb-question-do": "Do + 主語で一般動詞の疑問文を作る",
  "verb-question-does": "Does + 主語で三人称単数の疑問文を作る",
  "verb-wh-do": "疑問詞 + do / does で詳しく尋ねる",
  "verb-daily-routine": "一般動詞で日常を短く伝える",
};

const questionBank: Record<string, ExerciseTemplate[]> = {
  "be-i-you": [
    {
      prompt: "「私はケンです」を英語にしてください。",
      answers: ["I am Ken.", "I am Ken", "I'm Ken.", "I'm Ken"],
      hint: "I の後ろは am です。",
    },
    {
      prompt: "「あなたは親切です」を英語にしてください。",
      answers: ["You are kind.", "You are kind", "You're kind.", "You're kind"],
      hint: "you の後ろは are です。",
    },
    {
      prompt: "I (   ) ready. の空所に入るbe動詞を答えてください。",
      answers: ["am"],
      hint: "主語は I です。",
    },
  ],
  "be-he-she-it": [
    {
      prompt: "She (   ) my sister. の空所を埋めてください。",
      answers: ["is"],
      hint: "she の後ろは is です。",
    },
    {
      prompt: "「彼は忙しいです」を英語にしてください。",
      answers: ["He is busy.", "He is busy", "He's busy.", "He's busy"],
      hint: "he + is を使います。",
    },
    {
      prompt: "「それは新しいです」を英語にしてください。",
      answers: ["It is new.", "It is new", "It's new.", "It's new"],
      hint: "it + is を使います。",
    },
  ],
  "be-we-they": [
    {
      prompt: "We (   ) students. の空所を埋めてください。",
      answers: ["are"],
      hint: "we の後ろは are です。",
    },
    {
      prompt: "「彼らは友達です」を英語にしてください。",
      answers: ["They are friends.", "They are friends"],
      hint: "they + are を使います。",
    },
    {
      prompt: "「私たちは準備できています」を英語にしてください。",
      answers: ["We are ready.", "We are ready", "We're ready.", "We're ready"],
      hint: "we + are を使います。",
    },
  ],
  "be-negative": [
    {
      prompt: "She is busy. を否定文にしてください。",
      answers: ["She is not busy.", "She is not busy", "She isn't busy.", "She isn't busy"],
      hint: "is の直後に not。",
    },
    {
      prompt: "They are students. を否定文にしてください。",
      answers: [
        "They are not students.",
        "They are not students",
        "They aren't students.",
        "They aren't students",
      ],
      hint: "are の直後に not。",
    },
    {
      prompt: "「私は眠くありません」を英語にしてください。",
      answers: ["I am not sleepy.", "I am not sleepy", "I'm not sleepy.", "I'm not sleepy"],
      hint: "am not を使います。",
    },
  ],
  "be-questions": [
    {
      prompt: "You are ready. を疑問文にしてください。",
      answers: ["Are you ready?", "Are you ready"],
      hint: "are を主語の前へ。",
    },
    {
      prompt: "He is a student. を疑問文にしてください。",
      answers: ["Is he a student?", "Is he a student"],
      hint: "is を文頭へ。",
    },
    {
      prompt: "「彼女は元気ですか」を英語にしてください。",
      answers: ["Is she fine?", "Is she fine"],
      hint: "Is + she の語順です。",
    },
  ],
  "be-short-answers": [
    {
      prompt: "Are you a student? に肯定で短く答えてください。",
      answers: ["Yes, I am.", "Yes, I am"],
      hint: "you で聞かれたら I で答えます。",
    },
    {
      prompt: "Is Mika your friend? に肯定で短く答えてください。",
      answers: ["Yes, she is.", "Yes, she is"],
      hint: "Mika を she で受けます。",
    },
    {
      prompt: "Is Ken busy? に否定で短く答えてください。",
      answers: ["No, he is not.", "No, he is not", "No, he isn't.", "No, he isn't"],
      hint: "Ken を he で受けます。",
    },
  ],
  "be-wh-questions": [
    {
      prompt: "「彼女はだれですか」を英語にしてください。",
      answers: ["Who is she?", "Who is she"],
      hint: "人を尋ねるので Who。",
    },
    {
      prompt: "「あなたの本はどこですか」を英語にしてください。",
      answers: ["Where is your book?", "Where is your book"],
      hint: "場所を尋ねるので Where。",
    },
    {
      prompt: "「これは何ですか」を英語にしてください。",
      answers: ["What is this?", "What is this", "What's this?", "What's this"],
      hint: "ものを尋ねるので What。",
    },
  ],
  "be-self-introduction": [
    {
      prompt: "「私はユイです。私は東京出身です。」を2文の英語にしてください。",
      answers: [
        "I am Yui. I am from Tokyo.",
        "I'm Yui. I'm from Tokyo.",
        "I am Yui. I'm from Tokyo.",
        "I'm Yui. I am from Tokyo.",
      ],
      hint: "各文で I + am を作ります。",
    },
    {
      prompt: "自己紹介で「私は13歳です」を英語にしてください。",
      answers: ["I am thirteen.", "I am thirteen", "I'm thirteen.", "I'm thirteen"],
      hint: "I am + 年齢。",
    },
    {
      prompt: "自己紹介で「私はテニス部です」を英語にしてください。",
      answers: [
        "I am in the tennis club.",
        "I am in the tennis club",
        "I'm in the tennis club.",
        "I'm in the tennis club",
      ],
      hint: "所属は in the ... club と表せます。",
    },
  ],
  "verb-i-you": [
    {
      prompt: "「私は毎日英語を勉強します」を英語にしてください。",
      answers: ["I study English every day.", "I study English every day"],
      hint: "I の後ろは動詞原形。",
    },
    {
      prompt: "You (play) soccer. の play を適切な形にしてください。",
      answers: ["play"],
      hint: "you の現在形は原形です。",
    },
    {
      prompt: "「私は音楽が好きです」を英語にしてください。",
      answers: ["I like music.", "I like music"],
      hint: "like を一般動詞として使います。",
    },
  ],
  "verb-third-person": [
    {
      prompt: "He (play) tennis after school. の play を適切な形にしてください。",
      answers: ["plays"],
      hint: "he は三人称単数。",
    },
    {
      prompt: "Mika (study) English every day. の study を適切な形にしてください。",
      answers: ["studies"],
      hint: "study → studies。",
    },
    {
      prompt: "「彼女は毎朝走ります」を英語にしてください。",
      answers: ["She runs every morning.", "She runs every morning"],
      hint: "run に -s を付けます。",
    },
  ],
  "verb-negative-do": [
    {
      prompt: "I like coffee. を否定文にしてください。",
      answers: [
        "I do not like coffee.",
        "I do not like coffee",
        "I don't like coffee.",
        "I don't like coffee",
      ],
      hint: "do not + 動詞原形。",
    },
    {
      prompt: "We use this room. を否定文にしてください。",
      answers: [
        "We do not use this room.",
        "We do not use this room",
        "We don't use this room.",
        "We don't use this room",
      ],
      hint: "we なので don't。",
    },
    {
      prompt: "「私は野球をしません」を英語にしてください。",
      answers: [
        "I do not play baseball.",
        "I do not play baseball",
        "I don't play baseball.",
        "I don't play baseball",
      ],
      hint: "don't の後ろは play。",
    },
  ],
  "verb-negative-does": [
    {
      prompt: "He plays tennis. を否定文にしてください。",
      answers: [
        "He does not play tennis.",
        "He does not play tennis",
        "He doesn't play tennis.",
        "He doesn't play tennis",
      ],
      hint: "doesn't の後ろは原形。",
    },
    {
      prompt: "Aya studies French. を否定文にしてください。",
      answers: [
        "Aya does not study French.",
        "Aya does not study French",
        "Aya doesn't study French.",
        "Aya doesn't study French",
      ],
      hint: "studies → study。",
    },
    {
      prompt: "「彼女は猫が好きではありません」を英語にしてください。",
      answers: [
        "She does not like cats.",
        "She does not like cats",
        "She doesn't like cats.",
        "She doesn't like cats",
      ],
      hint: "does not + like。",
    },
  ],
  "verb-question-do": [
    {
      prompt: "You like math. を疑問文にしてください。",
      answers: ["Do you like math?", "Do you like math"],
      hint: "Do を文頭へ。",
    },
    {
      prompt: "Do you play soccer? に肯定で短く答えてください。",
      answers: ["Yes, I do.", "Yes, I do"],
      hint: "Yes, I do. と答えます。",
    },
    {
      prompt: "「あなたは英語を勉強しますか」を英語にしてください。",
      answers: ["Do you study English?", "Do you study English"],
      hint: "Do + you + 動詞原形。",
    },
  ],
  "verb-question-does": [
    {
      prompt: "She likes music. を疑問文にしてください。",
      answers: ["Does she like music?", "Does she like music"],
      hint: "Does を使い、like は原形。",
    },
    {
      prompt: "Does Taro study English? に否定で短く答えてください。",
      answers: ["No, he does not.", "No, he does not", "No, he doesn't.", "No, he doesn't"],
      hint: "Taro を he で受けます。",
    },
    {
      prompt: "「彼は毎日走りますか」を英語にしてください。",
      answers: ["Does he run every day?", "Does he run every day"],
      hint: "Does + he + run。",
    },
  ],
  "verb-wh-do": [
    {
      prompt: "「あなたは朝何を食べますか」を英語にしてください。",
      answers: ["What do you eat in the morning?", "What do you eat in the morning"],
      hint: "What + do + you + eat。",
    },
    {
      prompt: "「彼女はどこでテニスをしますか」を英語にしてください。",
      answers: ["Where does she play tennis?", "Where does she play tennis"],
      hint: "Where + does + she + play。",
    },
    {
      prompt: "「あなたはいつ英語を勉強しますか」を英語にしてください。",
      answers: ["When do you study English?", "When do you study English"],
      hint: "時を尋ねるので When。",
    },
  ],
  "verb-daily-routine": [
    {
      prompt: "「私は7時に起きます」を英語にしてください。",
      answers: ["I get up at seven.", "I get up at seven"],
      hint: "get up + at seven。",
    },
    {
      prompt: "「彼は毎日サッカーをします」を英語にしてください。",
      answers: ["He plays soccer every day.", "He plays soccer every day"],
      hint: "he なので plays。",
    },
    {
      prompt: "「私は朝食を家で食べます」を英語にしてください。",
      answers: ["I eat breakfast at home.", "I eat breakfast at home"],
      hint: "I + eat + breakfast。",
    },
  ],
};

const unitLessonKeys: Record<string, string[]> = {
  "be-verbs": [
    "be-i-you",
    "be-he-she-it",
    "be-we-they",
    "be-negative",
    "be-questions",
    "be-short-answers",
    "be-wh-questions",
    "be-self-introduction",
  ],
  "general-verbs": [
    "verb-i-you",
    "verb-third-person",
    "verb-negative-do",
    "verb-negative-does",
    "verb-question-do",
    "verb-question-does",
    "verb-wh-do",
    "verb-daily-routine",
  ],
};

const difficulties: MiddleEnglishDifficulty[] = ["basic", "applied", "challenge"];

const createExercise = (
  lessonKey: string,
  templateIndex: number,
  difficulty: MiddleEnglishDifficulty,
): MiddleEnglishExercise | undefined => {
  const templates = questionBank[lessonKey];
  const template = templates?.[templateIndex % templates.length];
  if (!template) return undefined;
  return {
    id: `middle-english1-${lessonKey}-${Date.now()}-${templateIndex}-${Math.random().toString(36).slice(2, 7)}`,
    prompt: template.prompt,
    answers: template.answers,
    lessonKeys: [lessonKey],
    lessonTitles: [lessonTitles[lessonKey] ?? lessonKey],
    difficulty,
    hint: template.hint,
  };
};

export const generateMiddleEnglish1LessonExercises = (
  unitKey: string,
  lessonKey: string,
  count = 3,
): MiddleEnglishExercise[] => {
  if (!unitLessonKeys[unitKey]?.includes(lessonKey) || !questionBank[lessonKey]) return [];
  return Array.from({ length: count }, (_, index) =>
    createExercise(lessonKey, index, difficulties[index % difficulties.length]),
  ).filter((exercise): exercise is MiddleEnglishExercise => Boolean(exercise));
};

export const generateMiddleEnglish1UnitExercises = (
  unitKey: string,
  count = 8,
): MiddleEnglishExercise[] => {
  const keys = unitLessonKeys[unitKey];
  if (!keys?.length) return [];
  const start = Math.floor(Math.random() * keys.length);
  return Array.from({ length: count }, (_, index) => {
    const lessonKey = keys[(start + index) % keys.length];
    const difficulty = difficulties[index % difficulties.length];
    return createExercise(lessonKey, index, difficulty);
  }).filter((exercise): exercise is MiddleEnglishExercise => Boolean(exercise));
};
