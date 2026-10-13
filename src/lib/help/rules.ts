import { DEFAULT_LOCALE } from './types';
import type { Doc } from './docs';
import type { HelpRule } from './types';

const RULE_ID = /^(CR-[IVXLC]+\.\d+)\s+(.*)$/;

export function ruleIdOf(text: string): RegExpExecArray | null {
  return RULE_ID.exec(text);
}

export function collectRules(slug: string, fallback: Doc, rules: Record<string, HelpRule>): string[] {
  const errors: string[] = [];

  for (const heading of fallback.headings) {
    const rule = ruleIdOf(heading.text);

    if (!rule) {
      continue;
    }

    if (rules[rule[1]]) {
      errors.push(`duplicate rule id ${rule[1]}`);
      continue;
    }

    rules[rule[1]] = { slug, anchor: heading.slug, title: rule[2] };
  }

  return errors;
}

// A rule id is a permanent citation. Every language must carry the same set, or a reviewer quoting
// CR-III.1 sends a Czech author to a rule that is not there.
export function ruleParityErrors(docs: Doc[]): string[] {
  const ruleIds = (doc: Doc) =>
    doc.headings.map((heading) => ruleIdOf(heading.text)?.[1]).filter((id) => id !== undefined);

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
      errors.push(`${doc.locale}/${doc.slug}: rules not in ${DEFAULT_LOCALE}: ${extra.join(', ')}`);
    }
  }

  return errors;
}
