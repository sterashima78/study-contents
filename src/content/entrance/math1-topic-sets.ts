import algebra from "./math1-algebra.json";
import dataAnalysis from "./math1-data-analysis.json";
import geometry from "./math1-geometry.json";
import quadratic from "./math1-quadratic.json";

export const math1AdvancedTopicSets = [algebra, geometry, quadratic, dataAnalysis] as const;

export const findMath1AdvancedTopicSet = (topic: string) =>
  math1AdvancedTopicSets.find((topicSet) => topicSet.topic === topic);

export const getAdvancedPatternSlug = (topic: string, id: string) =>
  id.replace(`math1-${topic}-pattern-`, "");
