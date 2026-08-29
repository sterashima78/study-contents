export type MathCourseInfo = {
  key: "math1" | "matha" | "chemistry-basic";
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

export const chemistryBasicCourse: MathCourseInfo = {
  key: "chemistry-basic",
  title: "化学基礎",
  kicker: "BASIC CHEMISTRY",
  routeBase: "chemistry-basic",
  homePath: "chemistry-basic/",
};
