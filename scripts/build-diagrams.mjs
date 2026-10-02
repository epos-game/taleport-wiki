import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const SOURCE = 'diagrams';
const OUTPUT = 'public/diagrams';
const THEME = join(SOURCE, 'theme.json');

/*
 * Mermaid has no build that runs without a browser, so the CLI drives one. Rather than let it
 * download a second Chromium, point it at one that is already here when we can find one.
 */
function puppeteerConfig() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
  ].filter((path) => path && existsSync(path));

  if (candidates.length === 0) {
    return [];
  }

  const file = join(tmpdir(), 'taleport-wiki-puppeteer.json');
  writeFileSync(file, JSON.stringify({ executablePath: candidates[0], args: ['--no-sandbox'] }));

  return ['-p', file];
}

/*
 * The CLI writes width="100%" and leaves the real size in a style rule, so an <img> has no
 * intrinsic size to work from and stretches to whatever column it lands in. Putting the viewBox
 * back on as width and height makes it behave like any other image: natural size by default,
 * shrinking only when the column is narrower than that.
 */
function fixIntrinsicSize(file) {
  const svg = readFileSync(file, 'utf8');
  const box = svg.match(/viewBox="([\d.\s-]+)"/);

  if (!box) {
    throw new Error(`${file}: no viewBox to size from`);
  }

  const [, , width, height] = box[1].split(/\s+/).map(Number);

  writeFileSync(
    file,
    svg
      .replace(/\swidth="100%"/, ` width="${Math.round(width)}" height="${Math.round(height)}"`)
      .replace(/style="max-width:[^"]*"/, 'style="max-width: 100%"'),
  );
}

const modified = (file) => (existsSync(file) ? statSync(file).mtimeMs : 0);
const themeChanged = modified(THEME);

mkdirSync(OUTPUT, { recursive: true });

const config = puppeteerConfig();
let rendered = 0;

for (const name of readdirSync(SOURCE).filter((file) => file.endsWith('.mmd'))) {
  const source = join(SOURCE, name);
  const target = join(OUTPUT, name.replace(/\.mmd$/, '.svg'));

  // Rendering costs a browser launch, so only do it when the source or the palette has moved.
  if (modified(target) > Math.max(modified(source), themeChanged)) {
    continue;
  }

  execFileSync(
    'npx',
    ['-y', '@mermaid-js/mermaid-cli', '-i', source, '-o', target,
      '-c', THEME, '-b', 'transparent', ...config],
    { stdio: 'inherit', env: { ...process.env, PUPPETEER_SKIP_DOWNLOAD: 'true' } },
  );

  fixIntrinsicSize(target);
  console.log(`${name} -> ${target}`);
  rendered += 1;
}

console.log(rendered === 0 ? 'diagrams up to date' : `${rendered} diagram(s) rendered`);
