import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const checks = [
  {
    path: new URL("../dist/index.html", import.meta.url),
    markers: [
      "中学校",
      "中学数学",
      "middle-school/math/",
      "中学理科",
      "middle-school/science/",
      "中学英語",
      "middle-school/english/",
    ],
  },
  {
    path: new URL("../dist/middle-school/index.html", import.meta.url),
    markers: ["中学校", "中学数学", "1〜3年・4領域公開"],
  },
  {
    path: new URL("../dist/middle-school/math/index.html", import.meta.url),
    markers: ["中学数学", "中学1年", "中学2年", "中学3年"],
  },
  {
    path: new URL("../dist/middle-school/math/grade1/index.html", import.meta.url),
    markers: ["中学1年", "数と式", "図形", "関数", "データの活用"],
  },
  {
    path: new URL("../dist/middle-school/math/grade2/index.html", import.meta.url),
    markers: ["中学2年", "数と式", "図形", "関数", "データの活用"],
  },
  {
    path: new URL("../dist/middle-school/math/grade3/index.html", import.meta.url),
    markers: ["中学3年", "数と式", "図形", "関数", "データの活用"],
  },
  {
    path: new URL(
      "../dist/middle-school/math/grade1/numbers-expressions/positive-negative-numbers/positive-negative-meaning/index.html",
      import.meta.url,
    ),
    markers: ["理解を確認する3問"],
  },
  {
    path: new URL(
      "../dist/middle-school/math/grade1/numbers-expressions/positive-negative-numbers/exercise/index.html",
      import.meta.url,
    ),
    markers: ["単元末演習"],
  },
  {
    path: new URL(
      "../dist/middle-school/math/grade1/functions/proportion-inverse-proportion/proportion-table-expression/index.html",
      import.meta.url,
    ),
    markers: ["y = 3x の対応表と y/x の値", "concept-table", "y/x"],
  },
  {
    path: new URL(
      "../dist/middle-school/math/grade1/functions/proportion-inverse-proportion/inverse-proportion-table-expression/index.html",
      import.meta.url,
    ),
    markers: ["y = 12/x の対応表と xy の値", "concept-table", "xy"],
  },
  {
    path: new URL(
      "../dist/middle-school/math/grade1/data/data-distribution/frequency-distribution-range/index.html",
      import.meta.url,
    ),
    markers: ["記録を5秒ごとの階級に整理した度数分布表", "concept-table", "25以上30未満"],
  },
  {
    path: new URL(
      "../dist/middle-school/math/grade1/data/data-distribution/cumulative-frequency/index.html",
      import.meta.url,
    ),
    markers: ["待ち時間20人の度数・累積度数・累積相対度数", "concept-table", "1.00"],
  },
  {
    path: new URL(
      "../dist/middle-school/math/grade2/functions/linear-functions/linear-function-meaning/index.html",
      import.meta.url,
    ),
    markers: ["理解を確認する3問"],
  },
  {
    path: new URL(
      "../dist/middle-school/math/grade2/functions/linear-functions/linear-function-expression/index.html",
      import.meta.url,
    ),
    markers: ["の対応表", "concept-table", "1列目", "14"],
  },
  {
    path: new URL(
      "../dist/middle-school/math/grade2/functions/linear-functions/exercise/index.html",
      import.meta.url,
    ),
    markers: ["単元末演習"],
  },
  {
    path: new URL(
      "../dist/middle-school/math/grade3/functions/quadratic-functions/quadratic-function-meaning/index.html",
      import.meta.url,
    ),
    markers: ["対応表と", "concept-table", "x²", "18"],
  },
  {
    path: new URL(
      "../dist/middle-school/math/grade3/functions/quadratic-functions/quadratic-function-representations/index.html",
      import.meta.url,
    ),
    markers: ["1列目", "concept-table", "表・式・グラフを相互に関連付ける"],
  },
  {
    path: new URL(
      "../dist/middle-school/math/grade3/data/sample-survey/sample-survey-planning/index.html",
      import.meta.url,
    ),
    markers: ["理解を確認する3問"],
  },
  {
    path: new URL(
      "../dist/middle-school/math/grade3/data/sample-survey/exercise/index.html",
      import.meta.url,
    ),
    markers: ["単元末演習"],
  },
];

for (const check of checks) {
  const html = await readFile(check.path, "utf8");
  const filePath = fileURLToPath(check.path);
  for (const marker of check.markers) {
    if (!html.includes(marker)) {
      throw new Error(`${filePath} に期待する中学校教材表示がありません: ${marker}`);
    }
  }
}

console.log(
  "Generated HTML rendering checks passed for middle school navigation and math grades 1-3.",
);
