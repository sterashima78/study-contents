import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const src = new URL("../src/", import.meta.url);
const exerciseCssUrl = new URL("../src/styles/exercise.css", import.meta.url);
const forbiddenStyleNames = [
  "lesson.css",
  "entrance.css",
  "entrance-index.css",
  "lesson-interactive.css",
];
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
const exerciseComponents = [
  "src/components/ExerciseSet.astro",
  "src/components/MiddleMathExerciseSet.astro",
  "src/components/PhysicsExerciseSet.astro",
  "src/components/SocialExerciseSet.astro",
];
const exerciseScopeRoots = [
  "[data-exercise-set]",
  "[data-middle-math-exercise-set]",
  "[data-physics-exercise-set]",
  "[data-social-exercise-set]",
];
const requiredScopedComponents = [
  "src/components/ui/StudyPage.astro",
  "src/components/ui/CurriculumReference.astro",
  "src/components/ui/BreadcrumbTrail.astro",
  "src/components/ui/ContentHero.astro",
  "src/components/ui/ContentSection.astro",
  "src/components/ui/ContentIndex.astro",
  "src/components/ui/ConceptCard.astro",
  "src/components/ui/WorkedExample.astro",
  "src/components/ui/GuidedPractice.astro",
  "src/components/ui/PracticeProblem.astro",
  "src/components/ui/PageNavigation.astro",
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

  if (source.includes("styles/exercise.css") && !exerciseComponents.includes(relative)) {
    issues.push(`${relative}: exercise.css は演習コンポーネント以外からimportできません。`);
  }

  for (const className of forbiddenLegacyClasses) {
    if (source.includes(`class="${className}`) || source.includes(`"${className}"`)) {
      issues.push(`${relative}: 旧共有レイアウトクラス「${className}」を使用しないでください。`);
    }
  }
}

const studyPageSource = await readFile(
  new URL("../src/components/ui/StudyPage.astro", import.meta.url),
  "utf8",
);
if (!studyPageSource.includes(":global(body)")) {
  issues.push(
    "src/components/ui/StudyPage.astro: body の基本スタイルをレイアウト内で管理してください。",
  );
}
if (!studyPageSource.includes("--color-text")) {
  issues.push(
    "src/components/ui/StudyPage.astro: デザイントークンをレイアウト内で管理してください。",
  );
}

const exerciseCss = await readFile(exerciseCssUrl, "utf8");
for (const scopeRoot of exerciseScopeRoots) {
  if (!exerciseCss.includes(scopeRoot)) {
    issues.push(`src/styles/exercise.css: 演習ルート ${scopeRoot} を @scope に含めてください。`);
  }
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
