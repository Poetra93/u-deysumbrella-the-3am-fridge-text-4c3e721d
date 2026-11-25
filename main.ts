import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "3am. Third time tonight you've opened me just to stare. I'm a fridge, not a therapist. Pick something, or let me hum in peace.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
