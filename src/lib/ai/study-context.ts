const FALLBACK_CONTEXT_LIMIT = 650;
const SECTION_CONTEXT_LIMIT = 420;
const MAX_RELEVANT_SECTIONS = 2;
const removableSelector = [
  "script",
  "style",
  "template",
  "[data-study-ai-exclude]",
  "input",
  "textarea",
  "select",
  "button",
  "math-field",
].join(",");

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function clipText(value: string, limit: number) {
  if (value.length <= limit) return value;
  return `${value.slice(0, limit).trimEnd()}…`;
}

function extractText(element: Element | null, limit: number) {
  if (!element) return "";
  const clone = element.cloneNode(true);
  if (!(clone instanceof Element)) return "";
  for (const removable of clone.querySelectorAll(removableSelector)) removable.remove();
  return clipText(normalizeText(clone.textContent ?? ""), limit);
}

function findViewportContext(main: HTMLElement) {
  const rect = main.getBoundingClientRect();
  const x = Math.min(window.innerWidth / 2, rect.right - 1);
  const y = Math.min(window.innerHeight / 2, Math.max(1, window.innerHeight - 1));
  const target = document.elementFromPoint(Math.max(1, x), y);
  if (!target || !main.contains(target)) return "";
  const section = target.closest("article, section");
  return extractText(section && main.contains(section) ? section : target, SECTION_CONTEXT_LIMIT);
}

function buildQuestionTerms(question: string) {
  const normalized = normalizeText(question).toLowerCase();
  const terms = new Set<string>();
  for (const word of normalized.match(/[a-z0-9]+/g) ?? []) {
    if (word.length >= 2) terms.add(word);
  }

  const japanese = Array.from(normalized.replace(/[\s、。！？,.!?「」『』（）()【】\-]/g, "")).filter(
    (character) => /[ぁ-んァ-ヶ一-龠々]/.test(character),
  );
  for (let index = 0; index < japanese.length - 1; index += 1) {
    terms.add(`${japanese[index]}${japanese[index + 1]}`);
  }
  return [...terms].slice(0, 40);
}

function findRelevantSections(main: HTMLElement, question: string) {
  const terms = buildQuestionTerms(question);
  if (terms.length === 0) return [];

  return [...main.querySelectorAll<HTMLElement>("article, section")]
    .map((section, index) => {
      const text = extractText(section, SECTION_CONTEXT_LIMIT);
      const normalized = text.toLowerCase();
      const score = terms.reduce((total, term) => total + (normalized.includes(term) ? 1 : 0), 0);
      return { text, score, index };
    })
    .filter((candidate) => candidate.text.length >= 30 && candidate.score > 0)
    .sort((left, right) => right.score - left.score || left.index - right.index)
    .map((candidate) => candidate.text);
}

function uniqueContexts(values: string[]) {
  const result: string[] = [];
  for (const value of values) {
    if (!value) continue;
    if (result.some((existing) => existing === value || existing.includes(value) || value.includes(existing))) {
      continue;
    }
    result.push(value);
    if (result.length >= MAX_RELEVANT_SECTIONS) break;
  }
  return result;
}

export function buildStudyContext(question = "") {
  const main = document.querySelector<HTMLElement>("main.study-page");
  const description =
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content ?? "";
  const focusText = main ? findViewportContext(main) : "";
  const relevantSections = main ? findRelevantSections(main, question) : [];
  const selectedContexts = uniqueContexts([focusText, ...relevantSections]);
  const fallbackText = selectedContexts.length === 0 ? extractText(main, FALLBACK_CONTEXT_LIMIT) : "";

  const parts = [
    `ページタイトル: ${document.title}`,
    description ? `ページ説明: ${description}` : "",
    `ページパス: ${window.location.pathname}`,
    ...selectedContexts.map((text, index) => `関連教材${index + 1}: ${text}`),
    fallbackText ? `教材概要: ${fallbackText}` : "",
  ];
  return parts.filter(Boolean).join("\n");
}
