export type MathCourseInfo = {
  key:
    | "math1"
    | "matha"
    | "math2"
    | "mathb"
    | "mathc"
    | "math3"
    | "chemistry-basic"
    | "chemistry"
    | "physics-basics"
    | "physics"
    | "biology-basic"
    | "biology"
    | "japanese-history"
    | "world-history"
    | "ethics";
  title: string;
  kicker: string;
  routeBase: string;
  homePath: string;
};

export const math1Course: MathCourseInfo = {
  key: "math1",
  title: "数学I",
  kicker: "MATHEMATICS I",
  routeBase: "math1",
  homePath: "math1/",
};

export const mathACourse: MathCourseInfo = {
  key: "matha",
  title: "数学A",
  kicker: "MATHEMATICS A",
  routeBase: "matha",
  homePath: "matha/",
};

export const math2Course: MathCourseInfo = {
  key: "math2",
  title: "数学II",
  kicker: "MATHEMATICS II",
  routeBase: "math2",
  homePath: "math2/",
};

export const mathBCourse: MathCourseInfo = {
  key: "mathb",
  title: "数学B",
  kicker: "MATHEMATICS B",
  routeBase: "mathb",
  homePath: "mathb/",
};

export const mathCCourse: MathCourseInfo = {
  key: "mathc",
  title: "数学C",
  kicker: "MATHEMATICS C",
  routeBase: "mathc",
  homePath: "mathc/",
};

export const math3Course: MathCourseInfo = {
  key: "math3",
  title: "数学III",
  kicker: "MATHEMATICS III",
  routeBase: "math3",
  homePath: "math3/",
};

export const chemistryBasicCourse: MathCourseInfo = {
  key: "chemistry-basic",
  title: "化学基礎",
  kicker: "BASIC CHEMISTRY",
  routeBase: "chemistry-basic",
  homePath: "chemistry-basic/",
};

export const chemistryCourse: MathCourseInfo = {
  key: "chemistry",
  title: "化学",
  kicker: "CHEMISTRY",
  routeBase: "chemistry",
  homePath: "chemistry/",
};

export const physicsBasicsCourse: MathCourseInfo = {
  key: "physics-basics",
  title: "物理基礎",
  kicker: "BASIC PHYSICS",
  routeBase: "physics-basics",
  homePath: "physics-basics/",
};

export const physicsCourse: MathCourseInfo = {
  key: "physics",
  title: "物理",
  kicker: "PHYSICS",
  routeBase: "physics",
  homePath: "physics/",
};

export const biologyBasicCourse: MathCourseInfo = {
  key: "biology-basic",
  title: "生物基礎",
  kicker: "BASIC BIOLOGY",
  routeBase: "biology-basic",
  homePath: "biology-basic/",
};

export const biologyCourse: MathCourseInfo = {
  key: "biology",
  title: "生物",
  kicker: "BIOLOGY",
  routeBase: "biology",
  homePath: "biology/",
};

export const japaneseHistoryCourse: MathCourseInfo = {
  key: "japanese-history",
  title: "日本史",
  kicker: "JAPANESE HISTORY",
  routeBase: "japanese-history",
  homePath: "japanese-history/",
};

export const worldHistoryCourse: MathCourseInfo = {
  key: "world-history",
  title: "世界史",
  kicker: "WORLD HISTORY",
  routeBase: "world-history",
  homePath: "world-history/",
};

export const ethicsCourse: MathCourseInfo = {
  key: "ethics",
  title: "倫理",
  kicker: "ETHICS",
  routeBase: "ethics",
  homePath: "ethics/",
};
