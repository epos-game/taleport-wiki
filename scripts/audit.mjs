import { createReadStream, existsSync, globSync, readFileSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import puppeteer from 'puppeteer-core';

// Runs the checks of Astro's dev-toolbar Audit app, plus axe-core, over every built page, in the
// terminal. The toolbar only audits the page open in a browser; this opens each one in a headless
// Chrome, at a desktop and a phone size, and prints what it finds with the page it was found on.
//
//   npm run audit               audit everything
//   npm run audit -- random     only pages whose path contains "random"
//   npm run audit -- --no-axe   Astro's rules only

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DIST = join(ROOT, 'dist');
const args = process.argv.slice(2);
const useAxe = !args.includes('--no-axe');
const filter = args.find((arg) => !arg.startsWith('--'));

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'phone', width: 390, height: 844, isMobile: true, hasTouch: true },
];

const CHROME = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].find((path) => path && existsSync(path));

if (!CHROME) {
  console.error('audit: no Chrome found. Set CHROME_PATH to a Chrome or Chromium executable.');
  process.exit(2);
}
if (!existsSync(join(DIST, 'index.html')) && !existsSync(join(DIST, 'en/index.html'))) {
  console.error('audit: dist/ is empty. Run `npm run build` first (`npm run audit` does).');
  process.exit(2);
}

// Pages worth auditing: everything except the redirect stubs that only exist to cite a rule.
const pages = globSync('**/index.html', { cwd: DIST })
  .map((file) => `/${file.replace(/index\.html$/, '')}`)
  .filter((path) => path !== '/' && !path.startsWith('/r/'))
  .filter((path) => !filter || path.includes(filter))
  .sort();

if (!pages.length) {
  console.error(`audit: no pages${filter ? ` match "${filter}"` : ' found in dist/'}.`);
  process.exit(2);
}

// Astro's rules import from aria-query and friends, so they are bundled into one script the page
// can evaluate, instead of being imported file by file.
const rules = await build({
  stdin: {
    contents: `export { a11y } from './a11y.js'; export { perf } from './perf.js';`,
    resolveDir: join(ROOT, 'node_modules/astro/dist/runtime/client/dev-toolbar/apps/audit/rules'),
  },
  bundle: true,
  write: false,
  format: 'iife',
  globalName: 'AstroAudit',
  platform: 'browser',
  logLevel: 'silent',
});
const rulesScript = rules.outputFiles[0].text;
const axeScript = useAxe ? readFileSync(join(ROOT, 'node_modules/axe-core/axe.min.js'), 'utf8') : '';

const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.json': 'application/json', '.woff2': 'font/woff2' };
const server = createServer((request, response) => {
  const url = new URL(request.url, 'http://localhost');
  let file = normalize(join(DIST, decodeURIComponent(url.pathname)));
  if (!file.startsWith(DIST)) return response.writeHead(403).end();
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file)) return response.writeHead(404).end();
  response.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' });
  createReadStream(file).pipe(response);
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });

// Same loop as the toolbar: every element a rule selects, kept if its `match` says so.
const runAstroRules = async () => {
  const found = [];
  for (const rule of [...AstroAudit.a11y, ...AstroAudit.perf]) {
    for (const element of document.querySelectorAll(rule.selector)) {
      const snippet = element.outerHTML.slice(0, 140).replace(/\s+/g, ' ');
      try {
        if (rule.match && !(await rule.match(element))) continue;
      } catch (error) {
        // A rule that cannot run must not read as a rule that found nothing.
        found.push({ rule: `Rule could not run: ${rule.title}`, element: `${error}`, failed: true });
        continue;
      }
      found.push({ rule: rule.title, element: snippet });
    }
  }
  return found;
};

const problems = new Map();
const add = (page, viewport, source, rule, element) => {
  const key = `${source}|${rule}|${element}`;
  if (!problems.has(key)) problems.set(key, { source, rule, element, where: new Set() });
  problems.get(key).where.add(`${page} (${viewport})`);
};

for (const viewport of VIEWPORTS) {
  const page = await browser.newPage();
  await page.setViewport(viewport);
  for (const path of pages) {
    const response = await page.goto(origin + path, { waitUntil: 'networkidle0' }).catch(() => null);
    if (!response?.ok()) {
      // Without this the checks would run on Chrome's own error page and report its problems.
      add(path, viewport.name, 'audit', 'Page failed to load', String(response?.status() ?? 'no response'));
      continue;
    }
    await page.evaluate(rulesScript);
    for (const found of await page.evaluate(`(${runAstroRules})()`)) {
      add(path, viewport.name, found.failed ? 'audit' : 'astro', found.rule, found.element);
    }
    if (useAxe) {
      await page.evaluate(axeScript);
      const result = await page.evaluate(() => axe.run(document, { resultTypes: ['violations'] }));
      for (const violation of result.violations) {
        for (const node of violation.nodes) {
          add(path, viewport.name, 'axe', `${violation.help} (${violation.id})`, node.html.slice(0, 140).replace(/\s+/g, ' '));
        }
      }
    }
  }
  await page.close();
}

await browser.close();
server.close();

if (!problems.size) {
  console.log(`audit: ${pages.length} pages, ${VIEWPORTS.length} sizes, nothing found.`);
  process.exit(0);
}

for (const problem of problems.values()) {
  const where = [...problem.where];
  const shown = where.slice(0, 3).join(', ') + (where.length > 3 ? `, +${where.length - 3} more` : '');
  console.log(`[${problem.source}] ${problem.rule}\n  ${problem.element}\n  ${shown}\n`);
}
console.log(`audit: ${problems.size} problem(s) across ${pages.length} pages.`);
process.exit(1);
