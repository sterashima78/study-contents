const PAGE_CONTEXT_LIMIT = 3200;
const FOCUS_CONTEXT_LIMIT = 1600;
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
  const x = Math.min(window.innerWidth / 2, main.getBoundingClientRect().right - 1);
  const y = Math.min(window.innerHeight / 2, Math.max(1, window.innerHeight - 1));
  const target = document.elementFromPoint(Math.max(1, x), y);
  if (!target || !main.contains(target)) return "";
  const section = target.closest("article, section");
  return extractText(section && main.contains(section) ? section : target, FOCUS_CONTEXT_LIMIT);
}

export function buildStudyContext() {
  const main = document.querySelector<HTMLElement>("main.study-page");
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content ?? "";
  const focusText = main ? findViewportContext(main) : "";
  const pageText = extractText(main, PAGE_CONTEXT_LIMIT);
  const parts = [
    `ページタイトル: ${document.title}`,
    description ? `ページ説明: ${description}` : "",
    `ページパス: ${window.location.pathname}`,
    focusText ? `現在画面付近の教材: ${focusText}` : "",
    pageText ? `教材本文: ${pageText}` : "教材本文を取得できませんでした。",
  ];
  return parts.filter(Boolean).join("\n");
}
