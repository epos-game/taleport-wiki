import { existsSync, globSync, statSync } from 'node:fs';
import sharp from 'sharp';

const SCREENS = new URL('../public/screens/', import.meta.url);

// Every screenshot gets a WebP twin beside it, which the site serves to browsers that can read it.
// The PNG stays: it is what the Markdown points at, so TalePort's help panel (which renders the same
// Markdown and knows nothing of WebP) keeps working, and it is the fallback everywhere else.
// Chroma subsampling is switched to the careful mode because these are interface shots, where
// coloured text on a dark ground is what blurs first.
const QUALITY = 90;

let made = 0;
for (const file of globSync('*/**/*.png', { cwd: SCREENS })) {
  const source = new URL(file, SCREENS);
  const target = new URL(file.replace(/\.png$/, '.webp'), SCREENS);
  if (existsSync(target) && statSync(target).mtimeMs >= statSync(source).mtimeMs) continue;
  await sharp(source.pathname).webp({ quality: QUALITY, smartSubsample: true, effort: 5 }).toFile(target.pathname);
  made += 1;
}

console.log(made ? `optimize-images: wrote ${made} WebP file(s)` : 'optimize-images: up to date');
