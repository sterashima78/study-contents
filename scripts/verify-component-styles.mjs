import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const src = new URL("../src/", import.meta.url);
const globalCssUrl = new URL("../src/styles/global.css", import.meta.url);
const exerciseCssUrl = new URL("../src/styles/exercise.css", import.meta.url);
const forbiddenStyleNames = ["lesson.css", "entrance.css", "entrance-index.css", "lesson-interactive.css"];
const forbiddenLegacyClasses = [
  "lesson-shell",
  "lesson-hero",
  "lesson-section",
  "lesson-navigation",
  "entrance-page",
  "entrance-hero",
  "entrance-footer-nav",
  "application-pattern",
];
const requiredScopedComponents = [
  "src/components/ui/StudyPage.astro",
  "src/components/ui/BreadcrumbTrail.astro",
  "src/components/ui/ContentHero.astro",
  "src/components/ui/ContentSection.astro",
  "src/components/ui/ContentIndex.astro",
  "src/components/ui/ConceptCard.astro",
  "src/components/ui/WorkedExample.astro",
  "src/components/ui/GuidedPractice.astro",
  "src/components/ui/PracticeProblem.astro",
  "src/components/ui/PageNavigation.astro",
  "src/components/AdvancedPatternIndex.astro",
  "src/components/AdvancedPatternPage.astro",
];
const issues = [];
const astroFiles = await findFiles(src, ".astro");

for (const file of astroFiles) {
  const source = await readFile(file, "utf8");
  const relative = relativePath(file);

  for (const forbidden of forbiddenStyleNames) {
    if (source.includes(forbidden)) {
      issues.push(`${relative}: 廃止した共有CSS「${forbidden}」を参照しないでください。`);
    }
  }

  if (source.includes("styles/global.css") && relative !== "src/components/ui/StudyPage.astro") {
    issues.push(`${relative}: global.css のimportは StudyPage.astro に集約してください。`);
  }

  if (
    source.includes("styles/exercise.css") &&
    !["src/components/ExerciseSet.astro", "src/components/PhysicsExerciseSet.astro"].includes(relative)
  ) {
    issues.push(`${relative}: exercise.css は演習コンポーネント以外からimportできません。`);
  }

  for (const className of forbiddenLegacyClasses) {
    if (source.includes(`class=\"${className}`) || source.includes(`\"${className}\"`)) {
      issues.push(`${relative}: 旧共有レイアウトクラス「${className}」を使用しないでください。`);
    }
  }
}

const globalCss = await readFile(globalCssUrl, "utf8");
if (/^\s*\.[a-zA-Z_-]/m.test(globalCss)) {
  issues.push("src/styles/global.css: 教材固有のクラスセレクタを置かないでください。");
}

const exerciseCss = await readFile(exerciseCssUrl, "utf8");
if (!exerciseCss.includes("@scope ([data-exercise-set], [data-physics-exercise-set])")) {
  issues.push("src/styles/exercise.css: 演習ルートを指定した @scope が必要です。");
}

for (const componentPath of requiredScopedComponents) {
  const source = await readFile(new URL(`../${componentPath}`, import.meta.url), "utf8");
  if (!source.includes("<style>")) {
    issues.push(`${componentPath}: コンポーネント所有の scoped <style> が必要です。`);
  }
}

if (issues.length > 0) {
  console.error("Component style verification failed:");
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log(`Component style verification passed: ${astroFiles.length} Astro files checked.`);
}

async function findFiles(directory, extension) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const child = new URL(entry.name, directory);
    if (entry.isDirectory()) {
      child.pathname += "/";
      files.push(...(await findFiles(child, extension)));
    } else if (entry.isFile() && entry.name.endsWith(extension)) {
      files.push(child);
    }
  }
  return files;
}

function relativePath(file) {
  const absoluteRoot = fileURLToPath(root);
  return fileURLToPath(file).slice(absoluteRoot.length).replaceAll("\\", "/");
}
