import { readFileSync } from 'node:fs';

const SCREENS = new URL('../../public/screens/', import.meta.url);

const SCREENSHOT = /\/screens\/(.+)\.png$/;

const sizes = new Map();

const pixelSize = (name) => {
  if (!sizes.has(name)) {
    const header = readFileSync(new URL(`${name}.png`, SCREENS)).subarray(16, 24);
    sizes.set(name, { width: header.readUInt32BE(0), height: header.readUInt32BE(4) });
  }
  return sizes.get(name);
};

const withWebp = (img) => ({
  type: 'element',
  tagName: 'picture',
  properties: {},
  children: [
    {
      type: 'element',
      tagName: 'source',
      properties: { type: 'image/webp', srcset: img.properties.src.replace(/\.png$/, '.webp') },
      children: [],
    },
    img,
  ],
});

const HEADER = 230;
const PX_PER_CHAR = 0.56;
const IMAGE_GAP = 32;
const FOLD = 1000;

const imageTops = (markdown) => {
  let above = HEADER;
  let from = 0;
  return [...markdown.matchAll(/!\[[^\]]*\]\(([^)\s]+)/g)].map((match) => {
    above += (match.index - from) * PX_PER_CHAR;
    from = match.index + match[0].length;
    const top = above;
    const screenshot = SCREENSHOT.exec(match[1]);
    above += (screenshot ? pixelSize(screenshot[1]).height / 2 : 300) + IMAGE_GAP;
    return top;
  });
};

export const lazyImages = ({ source }) => {
  const tops = imageTops(source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, ''));
  let index = 0;
  let boosted = false;

  return {
    name: 'lazy-images',
    element: {
      filter: [],
      visit(node) {
        if (node.tagName !== 'img') {
          return;
        }

        const eager = tops[index++] < FOLD;
        const loading = eager ? { loading: 'eager', ...(!boosted && { fetchpriority: 'high' }) } : { loading: 'lazy' };
        boosted ||= eager;

        const screenshot = SCREENSHOT.exec(node.properties.src ?? '');
        const img = {
          ...node,
          properties: {
            decoding: 'async',
            ...loading,
            ...(screenshot && pixelSize(screenshot[1])),
            'data-image-component': 'true',
            ...node.properties,
          },
        };

        return screenshot ? withWebp(img) : img;
      },
    },
  };
};
