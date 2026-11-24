import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, rmSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";

function runAndHash(): { text: string; bytes: number; sha256: string } {
  if (existsSync(OUTPUT_PATH)) {
    rmSync(OUTPUT_PATH);
  }
  execFileSync(process.execPath, ["main.ts"], { stdio: "inherit" });
  const raw = readFileSync(OUTPUT_PATH);
  const text = new TextDecoder("utf-8", { fatal: true }).decode(raw);
  const sha256 = createHash("sha256").update(raw).digest("hex");
  return { text, bytes: raw.length, sha256 };
}

function verify(): void {
  const first = runAndHash();
  const second = runAndHash();

  if (first.sha256 !== second.sha256) {
    throw new Error(`Non-deterministic output: ${first.sha256} !== ${second.sha256}`);
  }

  const chars = [...first.text].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`Character count out of range (1..200): ${chars}`);
  }
  if (first.text.trim().length === 0) {
    throw new Error("Entry must not be whitespace only");
  }
  if (/[\r\n]/.test(first.text)) {
    throw new Error("Entry must be a single line without line breaks");
  }

  const license = readFileSync("LICENSE", "utf8");
  if (!license.includes("SPDX-License-Identifier: MIT")) {
    throw new Error("LICENSE missing SPDX-License-Identifier: MIT");
  }

  console.log(
    JSON.stringify(
      {
        status: "PASS",
        chars,
        bytes: first.bytes,
        sha256: first.sha256,
        entry: first.text,
      },
      null,
      2,
    ),
  );
}

verify();
