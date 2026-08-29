import {
  chemistryBasicCourse,
  chemistryCourse,
  type MathCourseInfo,
  math2Course,
  math3Course,
  mathACourse,
  mathBCourse,
  mathCCourse,
  physicsBasicsCourse,
  physicsCourse,
} from "../math-courses";
import chemistry from "./chemistry-advanced.json";
import chemistryBasic from "./chemistry-basic-advanced.json";
import math2 from "./math2-advanced.json";
import math3 from "./math3-advanced.json";
import matha from "./matha-advanced.json";
import mathb from "./mathb-advanced.json";
import mathc from "./mathc-advanced.json";
import physics from "./physics-advanced.json";
import physicsBasics from "./physics-basics-advanced.json";

export type AdvancedPattern = {
  id: string;
  title: string;
  level: "application" | "advanced";
  estimatedMinutes: number;
  skills: string[];
  thinking: {
    title: string;
    body: string[];
    checkpoints: string[];
  };
  example: {
    statement: string[];
    question: string;
    solution: {
      strategy: string;
      steps: string[];
      answer: string;
    };
  };
  guidedPractice: {
    title: string;
    statement: string[];
    question: string;
    steps: {
      prompt: string;
      answers: string[];
      placeholder?: string;
    }[];
    hint: string;
  };
  practice: {
    statement: string[];
    question: string;
    solution: {
      steps: string[];
      answer: string;
    };
  };
};

export type AdvancedTopicSet = {
  course: MathCourseInfo["key"];
  topic: string;
  areaTitle: string;
  title: string;
  description: string;
  patterns: AdvancedPattern[];
};

type AdvancedDocument = {
  topicSets: AdvancedTopicSet[];
};

const documents = [
  matha,
  math2,
  mathb,
  mathc,
  math3,
  physicsBasics,
  physics,
  chemistryBasic,
  chemistry,
] as unknown as AdvancedDocument[];

export const advancedTopicSets = documents.flatMap((document) => document.topicSets);

const courseByKey = new Map<MathCourseInfo["key"], MathCourseInfo>([
  [mathACourse.key, mathACourse],
  [math2Course.key, math2Course],
  [mathBCourse.key, mathBCourse],
  [mathCCourse.key, mathCCourse],
  [math3Course.key, math3Course],
  [physicsBasicsCourse.key, physicsBasicsCourse],
  [physicsCourse.key, physicsCourse],
  [chemistryBasicCourse.key, chemistryBasicCourse],
  [chemistryCourse.key, chemistryCourse],
]);

export function findAdvancedTopicSet(course: MathCourseInfo["key"], topic: string) {
  return advancedTopicSets.find(
    (topicSet) => topicSet.course === course && topicSet.topic === topic,
  );
}

export function findAdvancedCourse(course: string) {
  return courseByKey.get(course as MathCourseInfo["key"]);
}
