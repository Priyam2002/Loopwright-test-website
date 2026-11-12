// Full-page screenshot via Puppeteer.
// Usage: node screenshot.mjs <url> [label]
//   node screenshot.mjs http://localhost:3000
//   node screenshot.mjs http://localhost:3000 hero
// Saves to ./temporary screenshots/screenshot-N.png (or screenshot-N-label.png), auto-incremented, never overwritten.
// Optional env: WIDTH (default 1440), HEIGHT (default 900).
import { createRequire } from 'node:module';
import { mkdir, readdir } from 'node:fs/promises';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// Puppeteer is installed in the user's home folder (~/node_modules), which Node can't find
// from a project on another drive on its own. Override with the PUPPETEER_DIR env var.
const PUPPETEER_DIR = process.env.PUPPETEER_DIR || path.join(homedir(), 'node_modules', 'puppeteer');
const require = createRequire(pathToFileURL(PUPPETEER_DIR + '/package.json'));
const { default: puppeteer } = await import(pathToFileURL(require.resolve('puppeteer')).href);

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(ROOT, 'temporary screenshots');

const url = process.argv[2] || 'http://localhost:3000';
const label = (process.argv[3] || '').replace(/[^\w-]+/g, '-').replace(/^-+|-+$/g, '');
const width = Number(process.env.WIDTH) || 1440;
const height = Number(process.env.HEIGHT) || 900;

if (url.startsWith('file:')) {
  console.error('Screenshot from localhost, not a file:// URL. Start the server with: node serve.mjs');
  process.exit(1);
}

await mkdir(OUT_DIR, { recursive: true });
const used = (await readdir(OUT_DIR))
  .map((f) => /^screenshot-(\d+)(?:-.*)?\.png$/.exec(f)?.[1])
  .filter(Boolean)
  .map(Number);
const n = used.length ? Math.max(...used) + 1 : 1;
const outFile = path.join(OUT_DIR, `screenshot-${n}${label ? `-${label}` : ''}.png`);

const browser = await puppeteer.launch();
try {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);

  // Scroll through the page so lazy-loaded images and scroll-triggered content render.
  await page.evaluate(async () => {
    const step = window.innerHeight;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await new Promise((r) => setTimeout(r, 600));

  await page.screenshot({ path: outFile, fullPage: true });
  console.log(`Saved ${path.relative(ROOT, outFile)}`);
} catch (err) {
  console.error(`Screenshot failed: ${err.message}`);
  process.exitCode = 1;
} finally {
  await browser.close();
}
