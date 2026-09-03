import type { JapaneseTextSource } from "../japanese/types";
import { getApprovedPublicDomainSource } from "./registry";

export const resolveApprovedPublicDomainSource = (id: string): JapaneseTextSource => {
  const source = getApprovedPublicDomainSource(id);

  return {
    id: source.id,
    title: source.title,
    author: source.author,
    sourceProvider: source.sourceProvider,
    sourceUrl: source.sourceUrl,
  };
};
