import { japaneseAreas as baseJapaneseAreas } from "./catalog-base";
import { publicDomainReadingUnit } from "./public-domain-reading";
import type { JapaneseArea } from "./types";

export const japaneseAreas: JapaneseArea[] = baseJapaneseAreas.map((area) =>
  area.key === "gendai"
    ? {
        ...area,
        units: [...area.units, publicDomainReadingUnit],
      }
    : area,
);

export const findJapaneseArea = (areaKey: string) =>
  japaneseAreas.find((area) => area.key === areaKey);

export const findJapaneseUnit = (areaKey: string, unitKey: string) => {
  const area = findJapaneseArea(areaKey);
  const unit = area?.units.find((candidate) => candidate.key === unitKey);
  return area && unit ? { area, unit } : undefined;
};

export const findJapaneseLesson = (areaKey: string, unitKey: string, lessonKey: string) => {
  const found = findJapaneseUnit(areaKey, unitKey);
  const lesson = found?.unit.lessons.find((candidate) => candidate.key === lessonKey);
  return found && lesson ? { ...found, lesson } : undefined;
};
