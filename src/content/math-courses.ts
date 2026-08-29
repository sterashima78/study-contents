export type MathCourseInfo = {
  key: "math1" | "matha" | "mathb" | "mathc" | "physics-basics";
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

export const physicsBasicsCourse: MathCourseInfo = {
  key: "physics-basics",
  title: "物理基礎",
  kicker: "BASIC PHYSICS",
  routeBase: "physics-basics",
  homePath: "physics-basics/",
};
