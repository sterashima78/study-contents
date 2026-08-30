const SUBSCRIPT_DIGITS: Record<string, string> = {
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
};

const SUPERSCRIPT_DIGITS: Record<string, string> = {
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
};

const FRAGILE_MATH_GLYPHS = /[₀₁₂₃₄₅₆₇₈₉⃗]/;

export function hasFragileMathGlyphs(value: string): boolean {
  return FRAGILE_MATH_GLYPHS.test(value);
}

export function toPortableMathText(value: string): string {
  return value
    .replace(/([A-Za-z]+)⃗/g, "$1→")
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (digit) => SUBSCRIPT_DIGITS[digit] ?? digit);
}

function replaceSquareRoots(value: string): string {
  let result = "";

  for (let index = 0; index < value.length; index += 1) {
    if (value[index] !== "√") {
      result += value[index];
      continue;
    }

    let next = index + 1;
    while (value[next] === " ") next += 1;

    if (value[next] === "(") {
      let depth = 0;
      let end = next;
      for (; end < value.length; end += 1) {
        if (value[end] === "(") depth += 1;
        if (value[end] === ")") depth -= 1;
        if (depth === 0) break;
      }

      if (depth === 0 && end < value.length) {
        result += `\\sqrt{${replaceSquareRoots(value.slice(next + 1, end))}}`;
        index = end;
        continue;
      }
    }

    let end = next;
    while (end < value.length && /[A-Za-z0-9πθ⁰¹²³⁴⁵⁶⁷⁸⁹]/.test(value[end])) end += 1;
    if (end > next) {
      result += `\\sqrt{${value.slice(next, end)}}`;
      index = end - 1;
      continue;
    }

    result += "\\sqrt{}";
  }

  return result;
}

export function legacyUnicodeMathToLatex(value: string): string {
  return replaceSquareRoots(value)
    .replace(/([A-Za-z]+)⃗/g, (_match, letters: string) => `\\vec{${letters}}`)
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (digit) => `_{${SUBSCRIPT_DIGITS[digit] ?? digit}}`)
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (digit) => `^{${SUPERSCRIPT_DIGITS[digit] ?? digit}}`)
    .replaceAll("−", "-")
    .replaceAll("·", "\\cdot ")
    .replaceAll("×", "\\times ")
    .replaceAll("⇒", "\\Rightarrow ")
    .replaceAll("⊥", "\\perp ")
    .replaceAll("∈", "\\in ")
    .replaceAll("θ", "\\theta ")
    .replaceAll("π", "\\pi ")
    .replace(/\bcos\b/g, "\\cos ")
    .replace(/\bsin\b/g, "\\sin ")
    .replace(/\btan\b/g, "\\tan ");
}
