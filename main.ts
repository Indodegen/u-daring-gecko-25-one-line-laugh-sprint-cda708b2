import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "entry.txt"), "utf8");
const line = text.trimEnd();
if (line.length < 1 || line.length > 200) {
  console.error(`entry.txt must hold 1-200 characters, got ${line.length}`);
  process.exit(1);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text);
console.log("entry.txt written to " + join(outDir, "entry.txt"));
