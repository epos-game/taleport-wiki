import { getCollection, render, type CollectionEntry } from 'astro:content';

import { DEFAULT_LOCALE } from './types';

export interface Doc {
  locale: string;
  slug: string;
  data: CollectionEntry<'docs'>['data'];
  body: string;
  headings: { depth: number; slug: string; text: string }[];
}

export function sectionOf(slug: string): string {
  const separator = slug.indexOf('/');

  return separator < 0 ? '' : slug.slice(0, separator);
}

export function sidebarOrder(byLocale: Map<string, Map<string, Doc>>, slug: string): number {
  const order = byLocale.get(DEFAULT_LOCALE)?.get(slug)?.data.sidebar?.order;

  return typeof order === 'number' ? order : Number.MAX_SAFE_INTEGER;
}

export function rawParam(locale: string, slug: string): string {
  return `${locale}/${slug || 'index'}`;
}

export function rawPath(locale: string, slug: string): string {
  return `/raw/${rawParam(locale, slug)}.md`;
}

export async function readDocs(): Promise<Doc[]> {
  const entries = await getCollection('docs');

  return Promise.all(
    entries.map(async (entry) => {
      const [locale, ...rest] = entry.id.split('/');
      // Astro's own headings, so the manifest cannot drift from the anchors the site renders.
      const { headings } = await render(entry);

      return { locale, slug: rest.join('/'), data: entry.data, body: entry.body ?? '', headings };
    }),
  );
}

// A rule id is a permanent citation. Every language must carry the same set, or a reviewer quoting
// CR-III.1 sends a Czech author to a rule that is not there.
