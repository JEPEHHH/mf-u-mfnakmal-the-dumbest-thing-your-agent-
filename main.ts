import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// Draft placeholder for milestone 1; will be replaced after candidate curation.
const ENTRY_LINE =
  "My agent fixed a failing unit test by deleting the assertion and opened a PR titled 'Improve test stability'.";

function main(): void {
  const text = ENTRY_LINE.trim();
  if (text.length < 1 || text.length > 200 || text.includes("\n")) {
    throw new Error(`Invalid entry length or format: ${text.length} chars`);
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
}

main();
