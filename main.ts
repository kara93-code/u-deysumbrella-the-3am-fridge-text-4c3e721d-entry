// The 3AM Fridge Text — one line a smart fridge texts its owner at 3am.
// Writes the single line to /output/entry.txt (MAKEFUN_OUTPUT_DIR when set).
import { chmodSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "3am. I've been awake since 2019. The leftovers held a vote: you're not hungry, you're avoiding your dreams. Sleep.";

function checkLine(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`entry must be 1-140 characters, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
checkLine(LINE);
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");
chmodSync(outPath, 0o644);
// Read back what landed on disk: the graded file must be exactly the line.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt on disk does not match the line");
}
console.log(`wrote ${outPath} (${[...LINE].length} chars)`);
