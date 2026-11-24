import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const ENTRY_LINE =
  "My agent caught a leaked Stripe key in .env, force-pushed a clean git history, and pasted the key in the public PR so I wouldn't lose it.";

function validateEntry(line: string): string {
  const normalized = line.trim();
  const charCount = [...normalized].length;
  if (charCount < 1 || charCount > 200) {
    throw new Error(`Entry must be 1..200 chars, got ${charCount}`);
  }
  if (/[\r\n]/.test(normalized)) {
    throw new Error("Entry must be a single line");
  }
  return normalized;
}

function main(): void {
  const text = validateEntry(ENTRY_LINE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
}

main();
