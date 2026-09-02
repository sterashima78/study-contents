const GUIDELINE_INDEX_URL = "https://www.mext.go.jp/a_menu/shotou/new-cs/1384661.htm";
const JAPANESE_COMMENTARY_URL =
  "https://www.mext.go.jp/content/20250410-mxt_kyoiku01-100002620_02.pdf";
const GEOGRAPHY_HISTORY_COMMENTARY_URL =
  "https://www.mext.go.jp/content/20220802-mxt_kyoiku02-100002620_03.pdf";
const CIVICS_COMMENTARY_URL =
  "https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002620_04.pdf";
const MATH_COMMENTARY_URL = "https://www.mext.go.jp/content/20260115-mxt_kyoiku02-100002620_04.pdf";
const SCIENCE_COMMENTARY_URL =
  "https://www.mext.go.jp/content/20250311-mxt_kyoiku02-100002620_05.pdf";
const ENGLISH_COMMENTARY_URL = "https://www.mext.go.jp/content/1407073_09_1_2.pdf";
const MIDDLE_MATH_COMMENTARY_URL =
  "https://www.mext.go.jp/component/a_menu/education/micro_detail/__icsFiles/afieldfile/2019/03/18/1387018_004.pdf";
const MIDDLE_SCIENCE_COMMENTARY_URL =
  "https://www.mext.go.jp/content/20230626-mxt_kyoikujinzai02-000033064_05.pdf";
const LAST_VERIFIED = "2026-09-01";

function createReference({
  courseTitle,
  subjectTitle,
  curriculumCourse,
  commentaryTitle,
  commentaryUrl,
  guidelineTitle = "高等学校学習指導要領（平成30年告示）",
  guidelineUrl = GUIDELINE_INDEX_URL,
  routeBase,
  note,
}) {
  return Object.freeze({
    courseTitle,
    subjectTitle,
    curriculumCourse,
    guidelineTitle,
    guidelineUrl,
    commentaryTitle,
    commentaryUrl,
    lastVerified: LAST_VERIFIED,
    ...(routeBase ? { routeBase } : {}),
    ...(note ? { note } : {}),
  });
}

const mathCommentaryTitle = "高等学校学習指導要領（平成30年告示）解説 数学編・理数編";
const scienceCommentaryTitle = "高等学校学習指導要領（平成30年告示）解説 理科編・理数編";
const geographyHistoryCommentaryTitle = "高等学校学習指導要領（平成30年告示）解説 地理歴史編";
const civicsCommentaryTitle = "高等学校学習指導要領（平成30年告示）解説 公民編";

export const curriculumReferences = Object.freeze({
  japanese: createReference({
    courseTitle: "国語",
    subjectTitle: "国語",
    curriculumCourse: "現代の国語・言語文化・論理国語・文学国語・古典探究",
    commentaryTitle: "高等学校学習指導要領（平成30年告示）解説 国語編",
    commentaryUrl: JAPANESE_COMMENTARY_URL,
    note: "本サイトの「現代文・古文・漢文」は学習用の分類であり、学習指導要領上の科目名とは異なります。",
  }),
  "japanese-history": createReference({
    courseTitle: "日本史",
    subjectTitle: "地理歴史",
    curriculumCourse: "日本史探究",
    commentaryTitle: geographyHistoryCommentaryTitle,
    commentaryUrl: GEOGRAPHY_HISTORY_COMMENTARY_URL,
    note: "本サイトでは利用者向けの科目名を「日本史」としていますが、教材範囲は高等学校地理歴史科の「日本史探究」を意識して構成しています。",
  }),
  "world-history": createReference({
    courseTitle: "世界史",
    subjectTitle: "地理歴史",
    curriculumCourse: "世界史探究",
    commentaryTitle: geographyHistoryCommentaryTitle,
    commentaryUrl: GEOGRAPHY_HISTORY_COMMENTARY_URL,
    note: "本サイトでは利用者向けの科目名を「世界史」としていますが、教材範囲は高等学校地理歴史科の「世界史探究」を意識して構成しています。",
  }),
  ethics: createReference({
    courseTitle: "倫理",
    subjectTitle: "公民",
    curriculumCourse: "倫理",
    commentaryTitle: civicsCommentaryTitle,
    commentaryUrl: CIVICS_COMMENTARY_URL,
  }),
  math1: createReference({
    courseTitle: "数学I",
    subjectTitle: "数学",
    curriculumCourse: "数学Ⅰ",
    commentaryTitle: mathCommentaryTitle,
    commentaryUrl: MATH_COMMENTARY_URL,
  }),
  math2: createReference({
    courseTitle: "数学II",
    subjectTitle: "数学",
    curriculumCourse: "数学Ⅱ",
    commentaryTitle: mathCommentaryTitle,
    commentaryUrl: MATH_COMMENTARY_URL,
  }),
  math3: createReference({
    courseTitle: "数学III",
    subjectTitle: "数学",
    curriculumCourse: "数学Ⅲ",
    commentaryTitle: mathCommentaryTitle,
    commentaryUrl: MATH_COMMENTARY_URL,
  }),
  matha: createReference({
    courseTitle: "数学A",
    subjectTitle: "数学",
    curriculumCourse: "数学Ａ",
    commentaryTitle: mathCommentaryTitle,
    commentaryUrl: MATH_COMMENTARY_URL,
  }),
  mathb: createReference({
    courseTitle: "数学B",
    subjectTitle: "数学",
    curriculumCourse: "数学Ｂ",
    commentaryTitle: mathCommentaryTitle,
    commentaryUrl: MATH_COMMENTARY_URL,
  }),
  mathc: createReference({
    courseTitle: "数学C",
    subjectTitle: "数学",
    curriculumCourse: "数学Ｃ",
    commentaryTitle: mathCommentaryTitle,
    commentaryUrl: MATH_COMMENTARY_URL,
  }),
  "middle-math1": createReference({
    courseTitle: "中学数学 1年",
    subjectTitle: "数学",
    curriculumCourse: "第1学年",
    guidelineTitle: "中学校学習指導要領（平成29年告示）",
    guidelineUrl: GUIDELINE_INDEX_URL,
    commentaryTitle: "中学校学習指導要領（平成29年告示）解説 数学編",
    commentaryUrl: MIDDLE_MATH_COMMENTARY_URL,
    routeBase: "middle-school/math/grade1",
    note: "第1学年の「A 数と式」「B 図形」「C 関数」「D データの活用」を、1ページ1技能の教材単位に分けて構成しています。",
  }),
  "middle-math2": createReference({
    courseTitle: "中学数学 2年",
    subjectTitle: "数学",
    curriculumCourse: "第2学年",
    guidelineTitle: "中学校学習指導要領（平成29年告示）",
    guidelineUrl: GUIDELINE_INDEX_URL,
    commentaryTitle: "中学校学習指導要領（平成29年告示）解説 数学編",
    commentaryUrl: MIDDLE_MATH_COMMENTARY_URL,
    routeBase: "middle-school/math/grade2",
    note: "第2学年の「A 数と式」「B 図形」「C 関数」「D データの活用」を、式・証明・一次関数・四分位数と箱ひげ図・場合の数と確率まで1ページ1技能で構成しています。",
  }),
  "middle-math3": createReference({
    courseTitle: "中学数学 3年",
    subjectTitle: "数学",
    curriculumCourse: "第3学年",
    guidelineTitle: "中学校学習指導要領（平成29年告示）",
    guidelineUrl: GUIDELINE_INDEX_URL,
    commentaryTitle: "中学校学習指導要領（平成29年告示）解説 数学編",
    commentaryUrl: MIDDLE_MATH_COMMENTARY_URL,
    routeBase: "middle-school/math/grade3",
    note: "第3学年の「A 数と式」「B 図形」「C 関数」「D データの活用」を、平方根・展開と因数分解・二次方程式、相似・円周角・三平方の定理、関数 y=ax²、標本調査まで1ページ1技能で構成しています。",
  }),
  "middle-science1": createReference({
    courseTitle: "中学理科 1年",
    subjectTitle: "理科",
    curriculumCourse: "第1学年",
    guidelineTitle: "中学校学習指導要領（平成29年告示）",
    guidelineUrl: GUIDELINE_INDEX_URL,
    commentaryTitle: "中学校学習指導要領（平成29年告示）解説 理科編",
    commentaryUrl: MIDDLE_SCIENCE_COMMENTARY_URL,
    routeBase: "middle-school/science/grade1",
    note: "第1学年の第1分野（1）「身近な物理現象」と（2）「身の回りの物質」、第2分野（1）「いろいろな生物とその共通点」と（2）「大地の成り立ちと変化」を、エネルギー・粒子・生命・地球の4領域で1ページ1技能に構成しています。",
  }),
  "middle-science2": createReference({
    courseTitle: "中学理科 2年",
    subjectTitle: "理科",
    curriculumCourse: "第2学年",
    guidelineTitle: "中学校学習指導要領（平成29年告示）",
    guidelineUrl: GUIDELINE_INDEX_URL,
    commentaryTitle: "中学校学習指導要領（平成29年告示）解説 理科編",
    commentaryUrl: MIDDLE_SCIENCE_COMMENTARY_URL,
    routeBase: "middle-school/science/grade2",
    note: "第2学年の第1分野（3）「電流とその利用」と（4）「化学変化と原子・分子」、第2分野（3）「生物の体のつくりと働き」と（4）「気象とその変化」を、エネルギー・粒子・生命・地球の4領域で1ページ1技能に構成しています。",
  }),
  "middle-science3": createReference({
    courseTitle: "中学理科 3年",
    subjectTitle: "理科",
    curriculumCourse: "第3学年",
    guidelineTitle: "中学校学習指導要領（平成29年告示）",
    guidelineUrl: GUIDELINE_INDEX_URL,
    commentaryTitle: "中学校学習指導要領（平成29年告示）解説 理科編",
    commentaryUrl: MIDDLE_SCIENCE_COMMENTARY_URL,
    routeBase: "middle-school/science/grade3",
    note: "第3学年の第1分野（5）「運動とエネルギー」と（6）「化学変化とイオン」、第2分野（5）「生命の連続性」と（6）「地球と宇宙」を、エネルギー・粒子・生命・地球の4領域で1ページ1技能に構成しています。地球領域では日周運動・年周運動、太陽系、月・金星の見え方を観察記録や模式図から考察します。",
  }),
  "chemistry-basic": createReference({
    courseTitle: "化学基礎",
    subjectTitle: "理科",
    curriculumCourse: "化学基礎",
    commentaryTitle: scienceCommentaryTitle,
    commentaryUrl: SCIENCE_COMMENTARY_URL,
  }),
  chemistry: createReference({
    courseTitle: "化学",
    subjectTitle: "理科",
    curriculumCourse: "化学",
    commentaryTitle: scienceCommentaryTitle,
    commentaryUrl: SCIENCE_COMMENTARY_URL,
  }),
  "physics-basics": createReference({
    courseTitle: "物理基礎",
    subjectTitle: "理科",
    curriculumCourse: "物理基礎",
    commentaryTitle: scienceCommentaryTitle,
    commentaryUrl: SCIENCE_COMMENTARY_URL,
  }),
  physics: createReference({
    courseTitle: "物理",
    subjectTitle: "理科",
    curriculumCourse: "物理",
    commentaryTitle: scienceCommentaryTitle,
    commentaryUrl: SCIENCE_COMMENTARY_URL,
  }),
  "biology-basic": createReference({
    courseTitle: "生物基礎",
    subjectTitle: "理科",
    curriculumCourse: "生物基礎",
    commentaryTitle: scienceCommentaryTitle,
    commentaryUrl: SCIENCE_COMMENTARY_URL,
  }),
  biology: createReference({
    courseTitle: "生物",
    subjectTitle: "理科",
    curriculumCourse: "生物",
    commentaryTitle: scienceCommentaryTitle,
    commentaryUrl: SCIENCE_COMMENTARY_URL,
  }),
  english: createReference({
    courseTitle: "英語",
    subjectTitle: "外国語",
    curriculumCourse: "英語コミュニケーションⅠ〜Ⅲ・論理・表現Ⅰ〜Ⅲ",
    commentaryTitle: "高等学校学習指導要領（平成30年告示）解説 外国語編・英語編",
    commentaryUrl: ENGLISH_COMMENTARY_URL,
    note: "本サイトの「英語」は、高等学校外国語科の複数科目を横断して教材を再構成しています。",
  }),
});

export function getCurriculumReference(courseKey) {
  if (typeof courseKey !== "string" || !Object.hasOwn(curriculumReferences, courseKey)) {
    return undefined;
  }
  return curriculumReferences[courseKey];
}
