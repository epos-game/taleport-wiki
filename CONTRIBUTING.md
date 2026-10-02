# Contributing

## Adding a page

1. Create `src/content/docs/en/<section>/<page>.md`.
2. Give it `title`, `description`, a new `helpKey`, and `status`.
3. Run `npm run build` — it validates the front matter and help keys as it goes.

The sidebar is generated from the directory, ordered by `sidebar.order`.

## Changing the Content Rules

The Content Rules are a published standard that reviewers cite and authors agree to. Changes go
through this repository, never through TalePort.

- **Rewording a rule** — edit both `en` and `cs`. Keep the identifier and the anchor.
- **Adding a rule** — append it within its article with the next free number. Never insert a number
  in the middle; the numbering is not a running order, it is a set of permanent names.
- **Withdrawing a rule** — remove the text but retire the number. Do not reuse it.
- **Adding an article** — continue the roman numerals.

`npm run build` fails if the two languages disagree on which rules exist.

After any substantive change, update the effective date at the bottom of both files.

## Changing a help key

Don't. TalePort links to pages by help key, and a rename silently breaks the help button on whatever
screen pointed at it. If a page genuinely changes meaning, add a new page with a new key and leave
the old one redirecting or marked `draft`.

## What does not belong here

Architecture, APIs, database structures, package formats, infrastructure, deployment, internal
processes, and internal exceptions to the rules. This repository is public. Internal material goes
in the private Knowledge Base.

## Diagrams

Diagrams live in `diagrams/*.mmd` as Mermaid source. Only the source is committed: `npm run dev`
and `npm run build` both render them to `public/diagrams/*.svg`, which is gitignored. Rendering
costs a browser launch, so it is skipped when the SVG is newer than its source and the palette in
`diagrams/theme.json` has not moved.

They are referenced from Markdown as ordinary images (`![alt](/diagrams/name.svg)`). That is
deliberate. The help panel inside TalePort fetches the raw Markdown of a page and renders it
itself, so a fenced ```mermaid block would reach an author as a wall of diagram source. An image
reaches both surfaces as a picture.

Labels are baked into the SVG, so a translated page needs its own diagram.

