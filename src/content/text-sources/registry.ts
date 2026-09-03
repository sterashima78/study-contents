import registry from "./public-domain.json";

export type ApprovedPublicDomainSource = {
  id: string;
  title: string;
  author: string;
  language: "ja" | "en";
  sourceProvider: string;
  sourceUrl: string;
  reviewStatus: "approved";
};

export function getApprovedPublicDomainSource(id: string): ApprovedPublicDomainSource {
  const source = registry.sources.find((candidate) => candidate.id === id);

  if (!source) {
    throw new Error(`権利台帳に存在しない作品IDです: ${id}`);
  }

  if (source.reviewStatus !== "approved") {
    throw new Error(`権利台帳で approved ではない作品は教材へ掲載できません: ${id}`);
  }

  return source as ApprovedPublicDomainSource;
}
