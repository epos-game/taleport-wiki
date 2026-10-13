import type { Doc } from './docs';
import type { HelpHeading } from './types';

/*
 * The page cut into the pieces a search result can point at: everything before the first heading,
 * then one piece per h2 or h3. Deeper headings stay with the section above them, because the
 * panel scrolls to a section and there is nothing to gain from a finer landing point.
 */
export function searchableSections(doc: Doc): HelpHeading[] {
  const sections: HelpHeading[] = [{ id: '', text: '', body: '' }];
  const headings = [...doc.headings];
  let fenced = false;
  let lines: string[] = [];

  const flush = () => {
    sections[sections.length - 1].body = plainText(lines.join('\n'));
    lines = [];
  };

  for (const line of doc.body.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) {
      fenced = !fenced;
    }

    const heading = fenced ? null : /^(#{1,6})\s+(.*)$/.exec(line);

    if (!heading) {
      lines.push(line);
      continue;
    }

    const depth = heading[1].length;
    const own = headings.shift();

    if (depth > 3) {
      lines.push(heading[2]);
      continue;
    }

    flush();
    sections.push({
      id: own?.slug ?? '',
      text: own?.text ?? plainText(heading[2]),
      body: '',
    });
  }

  flush();

  return sections.filter((section) => section.id !== '' || section.body !== '');
}

// Enough of the markdown taken off that a reader's words match: links keep their text, pictures
// and code blocks go, and the attribute syntax the pages use for rule anchors goes with them.
function plainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```|~~~[\s\S]*?~~~/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<((?:https?|mailto):[^>]+)>/g, '$1')
    .replace(/<\/?[a-z][^>]*>/gi, ' ')
    .replace(/\{[#.][^}]*\}/g, ' ')
    .replace(/[`*_>|]/g, ' ')
    .replace(/^[-+]\s+/gm, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
