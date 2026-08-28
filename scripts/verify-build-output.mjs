import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const checks = [
  {
    path: new URL("../dist/math1/algebra/expansion-factorization/index.html", import.meta.url),
    marker: "式の展開と因数分解",
  },
  {
    path: new URL(
      "../dist/math1/algebra/expansion-factorization/expansion/index.html",
      import.meta.url,
    ),
    marker: "多項式の展開",
  },
];

for (const check of checks) {
  const html = await readFile(check.path, "utf8");
  const filePath = fileURLToPath(check.path);

  if (!html.includes(check.marker)) {
    throw new Error(`${filePath} に期待する教材タイトルがありません: ${check.marker}`);
  }

  if (html.includes("<_Algebra") || html.includes("[object Object]")) {
    throw new Error(`${filePath} に未解決のAstroコンポーネント出力があります`);
  }
}

console.log("Generated HTML rendering checks passed.");
