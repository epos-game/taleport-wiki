import { getCollection, render, type CollectionEntry } from 'astro:content';

export const DEFAULT_LOCALE = 'en';
export const LOCALES = ['en', 'cs'];

const MANIFEST_VERSION = 1;
const RULE_ID = /^(CR-[IVXLC]+\.\d+)\s+(.*)$/;

export interface HelpRule {
  slug: string;
  anchor: string;
  title: string;
}

export interface HelpPage {
  helpKey?: string;
  slug: string;
  status: string;
  title: Record<string, string>;
  translated: Record<string, boolean>;
  raw: Record<string, string>;
  url: Record<string, string>;
  anchors: { depth: number; id: string; text: string; ruleId?: string }[];
}

export interface HelpManifest {
  version: number;
  generatedAt: string;
  site: string;
  defaultLocale: string;
  locales: string[];
  pages: HelpPage[];
  rules: Record<string, HelpRule>;
}

interface Doc {
  locale: string;
  slug: string;
  data: CollectionEntry<'docs'>['data'];
  headings: { depth: number; slug: string; text: string }[];
}

function rawPath(locale: string, slug: string): string {
  return `/raw/${locale}/${slug || 'index'}.md`;
}

function publicRoot(): string {
  const site = (import.meta.env.SITE ?? 'https://docs.epos.games').replace(/\/$/, '');

  return (site + import.meta.env.BASE_URL).replace(/\/$/, '');
}

export async function buildManifest(): Promise<HelpManifest> {
  const docs = await readDocs();
  const byLocale = new Map(LOCALES.map((locale) => [locale, new Map<string, Doc>()]));

  for (const doc of docs) {
    byLocale.get(doc.locale)?.set(doc.slug, doc);
  }

  const errors: string[] = [];
  const helpKeys = new Map<string, string>();
  const pages: HelpPage[] = [];
  const rules: Record<string, HelpRule> = {};

  for (const slug of [...new Set(docs.map((doc) => doc.slug))].sort()) {
    const fallback = byLocale.get(DEFAULT_LOCALE)!.get(slug);

    if (!fallback) {
      errors.push(`${slug}: has no ${DEFAULT_LOCALE} page`);
      continue;
    }

    const helpKey = fallback.data.helpKey;

    if (!helpKey) {
      errors.push(`${DEFAULT_LOCALE}/${slug}: missing "helpKey" — TalePort cannot link to this page`);
    } else if (helpKeys.has(helpKey)) {
      errors.push(`${DEFAULT_LOCALE}/${slug}: helpKey "${helpKey}" already used by ${helpKeys.get(helpKey)}`);
    } else {
      helpKeys.set(helpKey, slug);
    }

    const title: Record<string, string> = {};
    const translated: Record<string, boolean> = {};
    const raw: Record<string, string> = {};
    const url: Record<string, string> = {};

    for (const locale of LOCALES) {
      const own = byLocale.get(locale)!.get(slug);
      const doc = own ?? fallback;

      translated[locale] = Boolean(own);
      title[locale] = doc.data.title;
      raw[locale] = rawPath(doc.locale, slug);
      url[locale] = `/${locale}/${slug}`;
    }

    for (const heading of fallback.headings) {
      const rule = RULE_ID.exec(heading.text);

      if (!rule) {
        continue;
      }

      if (rules[rule[1]]) {
        errors.push(`duplicate rule id ${rule[1]}`);
        continue;
      }

      rules[rule[1]] = { slug, anchor: heading.slug, title: rule[2] };
    }

    pages.push({
      ...(helpKey ? { helpKey } : {}),
      slug,
      status: fallback.data.status,
      title,
      translated,
      raw,
      url,
      anchors: fallback.headings
        .filter((heading) => heading.depth <= 3)
        .map((heading) => {
          const rule = RULE_ID.exec(heading.text);

          return {
            depth: heading.depth,
            id: heading.slug,
            text: heading.text,
            ...(rule ? { ruleId: rule[1] } : {}),
          };
        }),
    });
  }

  errors.push(...ruleParityErrors(docs));

  if (errors.length > 0) {
    throw new Error(`Help manifest is not valid:\n  ${errors.join('\n  ')}`);
  }

  return {
    version: MANIFEST_VERSION,
    generatedAt: new Date().toISOString(),
    site: publicRoot(),
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES,
    pages,
    rules,
  };
}

async function readDocs(): Promise<Doc[]> {
  const entries = await getCollection('docs');

  return Promise.all(
    entries.map(async (entry) => {
      const [locale, ...rest] = entry.id.split('/');
      // Astro's own headings, so the manifest cannot drift from the anchors the site renders.
      const { headings } = await render(entry);

      return { locale, slug: rest.join('/'), data: entry.data, headings };
    }),
  );
}

// A rule id is a permanent citation. Every language must carry the same set, or a reviewer quoting
// CR-III.1 sends a Czech author to a rule that is not there.
function ruleParityErrors(docs: Doc[]): string[] {
  const ruleIds = (doc: Doc) =>
    doc.headings.map((heading) => RULE_ID.exec(heading.text)?.[1]).filter((id) => id !== undefined);

  const reference = new Map(
    docs
      .filter((doc) => doc.locale === DEFAULT_LOCALE)
      .map((doc) => [doc.slug, ruleIds(doc)] as const),
  );

  const errors: string[] = [];

  for (const doc of docs) {
    if (doc.locale === DEFAULT_LOCALE) {
      continue;
    }

    const expected = reference.get(doc.slug) ?? [];
    const actual = ruleIds(doc);
    const missing = expected.filter((id) => !actual.includes(id));
    const extra = actual.filter((id) => !expected.includes(id));

    if (missing.length > 0) {
      errors.push(`${doc.locale}/${doc.slug}: missing rules ${missing.join(', ')}`);
    }

    if (extra.length > 0) {
      errors.push(`${doc.locale}/${doc.slug}: rules not in ${DEFAULT_LOCALE} — ${extra.join(', ')}`);
    }
  }

  return errors;
}
