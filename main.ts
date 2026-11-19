// news-image-20261119 entry program.
//
// Deterministically copies the entry image (entry.png, next to this file)
// to /output/entry.png. No network access, no randomness, no timestamps:
// running it twice produces byte-identical output.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here: string = dirname(fileURLToPath(import.meta.url));
const inputPath: string = join(here, "entry.png");
const outDir: string = "/output";
const outputPath: string = join(outDir, "entry.png");

if (!existsSync(inputPath)) {
  throw new Error(`entry image not found: ${inputPath}`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(inputPath, outputPath);
console.log(`copied ${inputPath} -> ${outputPath}`);
