const GUIDELINE_INDEX_URL = "https://www.mext.go.jp/a_menu/shotou/new-cs/1384661.htm";
const MIDDLE_ENGLISH_COMMENTARY_URL =
  "https://www.mext.go.jp/content/20210531-mxt_kyoiku01-100002608_010.pdf";
const LAST_VERIFIED = "2026-09-02";

const createReference = (grade) =>
  Object.freeze({
    courseTitle: `中学英語 ${grade}年`,
    subjectTitle: "外国語",
    curriculumCourse: `第${grade}学年（サイト上の段階配置）`,
    guidelineTitle: "中学校学習指導要領（平成29年告示）",
    guidelineUrl: GUIDELINE_INDEX_URL,
    commentaryTitle: "中学校学習指導要領（平成29年告示）解説 外国語編",
    commentaryUrl: MIDDLE_ENGLISH_COMMENTARY_URL,
    lastVerified: LAST_VERIFIED,
    routeBase: `middle-school/english/grade${grade}`,
    note: "中学校外国語の言語材料を3学年で段階配置するサイト独自の学習順序です。学習指導要領が個々の文法事項をこの学年へ固定配当していることを示すものではありません。",
  });

export const middleEnglishCurriculumReferences = Object.freeze({
  "middle-english1": createReference(1),
  "middle-english2": createReference(2),
  "middle-english3": createReference(3),
});
