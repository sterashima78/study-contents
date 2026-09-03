import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const checks = [
  {
    path: new URL("../dist/index.html", import.meta.url),
    markers: ["英語", "英語基礎", "長文読解"],
  },
  {
    path: new URL("../dist/english/index.html", import.meta.url),
    markers: ["英語", "学習する4つの領域", "全16小教材", "オリジナル英文で学ぶ"],
  },
  {
    path: new URL(
      "../dist/english/foundations/sentence-core/five-patterns/index.html",
      import.meta.url,
    ),
    markers: ["SVOCで文の骨格をつかむ", "The news made the students nervous", "直後の練習"],
  },
  {
    path: new URL(
      "../dist/english/reading/exam-reading/inference-paraphrase/index.html",
      import.meta.url,
    ),
    markers: ["言い換えから推論する", "Nora usually cycled to school"],
  },
  {
    path: new URL(
      "../dist/english/expression/practical-expression/email-request/index.html",
      import.meta.url,
    ),
    markers: [
      "依頼メールを目的から組み立てる",
      "Could you send me the updated schedule by Friday?",
    ],
  },
  {
    path: new URL("../dist/middle-school/english/index.html", import.meta.url),
    markers: ["中学英語", "中学1年", "中学2年", "中学3年", "3学年で全79教材"],
  },
  {
    path: new URL("../dist/middle-school/english/grade1/index.html", import.meta.url),
    markers: ["中学英語 1年", "基本文とやり取り", "日常表現を広げる文法", "全36小教材"],
  },
  {
    path: new URL(
      "../dist/middle-school/english/grade1/everyday-grammar/progressive-and-past/past-story/index.html",
      import.meta.url,
    ),
    markers: ["過去の出来事を時間順に伝える", "A Saturday Morning", "理解を確認する3問"],
  },
  {
    path: new URL("../dist/middle-school/english/grade2/index.html", import.meta.url),
    markers: ["中学英語 2年", "表現を広げる文法", "全21小教材"],
  },
  {
    path: new URL(
      "../dist/middle-school/english/grade2/expanding-expression/infinitive-gerund-comparison/comparative/index.html",
      import.meta.url,
    ),
    markers: [
      "比較級 + than で二つを比べる",
      "This book is newer than that one.",
      "理解を確認する3問",
    ],
  },
  {
    path: new URL(
      "../dist/middle-school/english/grade2/expanding-expression/structures-and-clauses/exercise/index.html",
      import.meta.url,
    ),
    markers: ["文構造と複文 · 単元末演習", "全8問", "小単元ごとの理解度"],
  },
  {
    path: new URL("../dist/middle-school/english/grade3/index.html", import.meta.url),
    markers: ["中学英語 3年", "中学英語の統合", "全22小教材"],
  },
  {
    path: new URL(
      "../dist/middle-school/english/grade3/integrated-grammar/advanced-structures/basic-subjunctive/index.html",
      import.meta.url,
    ),
    markers: [
      "If I were ... / I wish ... で現実と異なる想像を表す",
      "If I were you, I would ask the teacher.",
      "理解を確認する3問",
    ],
  },
];

for (const check of checks) {
  const html = await readFile(check.path, "utf8");
  const filePath = fileURLToPath(check.path);

  for (const marker of check.markers) {
    if (!html.includes(marker)) {
      throw new Error(`${filePath} に期待する英語教材表示がありません: ${marker}`);
    }
  }

  if (html.includes("<_English") || html.includes("[object Object]")) {
    throw new Error(`${filePath} に未解決のAstroコンポーネント出力があります`);
  }
}

console.log("Generated HTML rendering checks passed for English content.");
