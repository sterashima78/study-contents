export type MathCourseInfo = {
  key: "math1" | "matha" | "physics-basics";
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

export const physicsBasicsCourse: MathCourseInfo = {
  key: "physics-basics",
  title: "物理基礎",
  kicker: "BASIC PHYSICS",
  routeBase: "physics-basics",
  homePath: "physics-basics/",
};
