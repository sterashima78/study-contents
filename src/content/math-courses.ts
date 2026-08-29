export type MathCourseInfo = {
  key: "math1" | "matha" | "math2" | "mathb" | "mathc";
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
