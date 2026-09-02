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
    path: new URL("../dist/middle-school/english/grade1/index.html", import.meta.url),
    markers: ["中学英語 1年", "基本文とやり取り", "全16小教材", "オリジナル英文で学ぶ"],
  },
  {
    path: new URL(
      "../dist/middle-school/english/grade1/foundations/be-verbs/be-questions/index.html",
      import.meta.url,
    ),
    markers: ["be動詞を文頭に出して疑問文を作る", "Is he a teacher?", "理解を確認する3問"],
  },
  {
    path: new URL(
      "../dist/middle-school/english/grade1/foundations/general-verbs/exercise/index.html",
      import.meta.url,
    ),
    markers: ["一般動詞の現在形 · 単元末演習", "全8問", "小単元ごとの理解度"],
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
