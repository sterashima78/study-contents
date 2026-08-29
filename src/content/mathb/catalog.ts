import type { MathArea } from "../math1/types";
import { sequenceUnits } from "./sequences";
import { socialLifeUnits } from "./social-life";
import { statisticalInferenceUnits } from "./statistical-inference";

export const mathBAreas: MathArea[] = [
  {
    key: "sequences",
    title: "数列",
    description: "等差・等比数列、いろいろな数列、漸化式、数学的帰納法を通して離散的な変化の規則を捉えます。",
    units: sequenceUnits,
  },
  {
    key: "statistical-inference",
    title: "統計的な推測",
    description: "確率分布、正規分布、標本調査、区間推定、仮説検定を使い、標本から母集団を推測します。",
    units: statisticalInferenceUnits,
  },
  {
    key: "social-life",
    title: "数学と社会生活",
    description: "現実の問題を数学化し、解を現実へ戻して評価・改善しながら意思決定につなげます。",
    units: socialLifeUnits,
  },
];
