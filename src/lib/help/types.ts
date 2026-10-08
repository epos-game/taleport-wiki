export const DEFAULT_LOCALE = 'en';
export const LOCALES = ['en', 'cs'];
export const MANIFEST_VERSION = 1;

export interface HelpRule {
  slug: string;
  anchor: string;
  title: string;
}

export interface HelpHeading {
  id: string;
  text: string;
  // The prose under this heading, stripped to plain text. TalePort's help panel searches it, so
  // a reader who remembers a word from the middle of a page finds the page and lands on the
  // section the word is in. The lead-in before the first heading rides on an entry with no id.
  body: string;
}

export interface HelpPage {
  helpKey?: string;
  slug: string;
  status: string;
  title: Record<string, string>;
  description: Record<string, string>;
  translated: Record<string, boolean>;
  raw: Record<string, string>;
  url: Record<string, string>;
  // Per language, because a heading's anchor is generated from its own words: the Czech reader
  // of the same page jumps to a different id. This is what TalePort's help search looks through.
  headings: Record<string, HelpHeading[]>;
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
