import { DEFAULT_LOCALE, LOCALES, MANIFEST_VERSION } from './types';
import type { HelpManifest, HelpPage, HelpRule } from './types';
import { rawPath, readDocs, sectionOf, sidebarOrder, type Doc } from './docs';
import { collectRules, ruleParityErrors } from './rules';
import { searchableSections } from './search';

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

  for (const slug of orderedSlugs(docs, byLocale)) {
    const fallback = byLocale.get(DEFAULT_LOCALE)!.get(slug);

    if (!fallback) {
      errors.push(`${slug}: has no ${DEFAULT_LOCALE} page`);
      continue;
    }

    errors.push(...claimHelpKey(slug, fallback, helpKeys));
    errors.push(...collectRules(slug, fallback, rules));
    pages.push(buildPage(slug, fallback, byLocale));
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

// The order the wiki's own sidebar uses, so TalePort's help panel browses the same way.
function orderedSlugs(docs: Doc[], byLocale: Map<string, Map<string, Doc>>): string[] {
  return [...new Set(docs.map((doc) => doc.slug))].sort((left, right) =>
    sectionOf(left).localeCompare(sectionOf(right))
    || sidebarOrder(byLocale, left) - sidebarOrder(byLocale, right)
    || left.localeCompare(right));
}

// A help key is how TalePort addresses a page, so it has to exist and be the only one of its name.
function claimHelpKey(slug: string, fallback: Doc, helpKeys: Map<string, string>): string[] {
  const helpKey = fallback.data.helpKey;

  if (!helpKey) {
    return [`${DEFAULT_LOCALE}/${slug}: missing "helpKey", so TalePort cannot link to this page`];
  }

  if (helpKeys.has(helpKey)) {
    return [`${DEFAULT_LOCALE}/${slug}: helpKey "${helpKey}" already used by ${helpKeys.get(helpKey)}`];
  }

  helpKeys.set(helpKey, slug);

  return [];
}

// A page a language has not been written in falls back to the English one, marked untranslated.
function buildPage(slug: string, fallback: Doc, byLocale: Map<string, Map<string, Doc>>): HelpPage {
  const helpKey = fallback.data.helpKey;
  const page: HelpPage = {
    ...(helpKey ? { helpKey } : {}),
    slug,
    status: fallback.data.status,
    title: {},
    description: {},
    translated: {},
    raw: {},
    url: {},
    headings: {},
  };

  for (const locale of LOCALES) {
    const own = byLocale.get(locale)!.get(slug);
    const doc = own ?? fallback;

    page.translated[locale] = Boolean(own);
    page.title[locale] = doc.data.title;
    page.description[locale] = doc.data.description ?? '';
    page.raw[locale] = rawPath(doc.locale, slug);
    page.url[locale] = `/${locale}/${slug}`;
    page.headings[locale] = searchableSections(doc);
  }

  return page;
}
