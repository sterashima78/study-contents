import { englishExpressionUnits } from "./expression";
import { englishFoundationUnits } from "./foundations";
import { englishInterpretationUnits } from "./interpretation";
import { englishPublicDomainUnits } from "./public-domain";
import { englishReadingUnits } from "./reading";
import type { EnglishArea } from "./types";

export const englishAreas: EnglishArea[] = [
  {
    key: "foundations",
    title: "英語基礎",
    description: "SVOC、時制、準動詞、修飾の基本を、英文中での役割と意味のつながりから学びます。",
    units: englishFoundationUnits,
  },
  {
    key: "interpretation",
    title: "英文解釈",
    description: "節の境界、長い文要素、論理関係、指示語を手掛かりに、英文の構造を崩さず読みます。",
    units: [...englishInterpretationUnits, ...englishPublicDomainUnits],
  },
  {
    key: "reading",
    title: "長文読解",
    description:
      "段落構造、情報検索、言い換え、推論を使い、まとまりのある英文から必要な情報を取り出します。",
    units: englishReadingUnits,
  },
  {
    key: "expression",
    title: "論理・表現",
    description: "意見、比較、要約、依頼を、目的と論理の流れが伝わる英文に組み立てます。",
    units: englishExpressionUnits,
  },
];
