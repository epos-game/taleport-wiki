# TalePort Wiki

The author-facing documentation for TalePort, published at **<https://docs.epos.games>**.

This repository is the **single source of truth** for everything authors are told about TalePort,
including the [Content Rules](src/content/docs/en/publishing/content-rules.md). Nothing here is
internal: no architecture, APIs, database structures, package formats, infrastructure, deployment or
internal process. That belongs in the private Knowledge Base.

## Running it

```bash
npm install
npm run dev      # local preview
npm run check    # types
npm run build    # static site -> dist/
```

The site is [Astro Starlight](https://starlight.astro.build). Pages are plain Markdown under
`src/content/docs/<lang>/`. There is no custom pipeline and no Markdown plugins: everything below
is produced by Astro routes over the `docs` content collection, so a page only has to exist to be
picked up.

Node 22.12 or newer is required (Astro 7).

## Languages

`en` is the default and `cs` is the second language. A page that exists only in English is still
served on the Czech site, with Starlight's own "not translated yet" notice — so **you never need a
placeholder file**. Add `src/content/docs/cs/<same path>.md` when a real translation exists.

The one exception is the Content Rules, which are fully translated and must stay that way:
`npm run build` fails if the two languages do not carry the same set of rule identifiers.

## Front matter

```yaml
---
title: Variables
description: One line, shown in search results and on cards.
helpKey: editor.variables      # required on every English page; permanent
status: published              # published | draft
sidebar:
  order: 5
---
```

`helpKey` is **the contract with TalePort**. A component in the editor asks for help by key, so
renaming one breaks that link. Treat a help key like a public identifier: add new ones freely, never
rename or reuse an old one.

`status: draft` marks a page that is a placeholder or an outline. The site shows it, but TalePort's
help panel will not deep-link to it.

## Rule identifiers

Each Content Rule carries a permanent identifier, written into its heading:

```markdown
### CR-I.1 — Sexual content involving minors {#cr-i-1}
```

- **`CR-I.1`** is the citation. Reviewers quote it in review feedback.
- **`{#cr-i-1}`** is the anchor, set explicitly so it survives the rule being reworded. Astro's
  Markdown processor reads it natively; `markdown.processor` turns the feature on in
  `astro.config.mjs`.
- **`https://docs.epos.games/r/CR-I.1`** is the permanent short link. It is generated at build time
  and sends the reader to the rule in their own language.

Rule identifiers are never reused. If a rule is withdrawn, its number retires with it — old review
feedback must keep resolving to the rule it was written about.

## The help API

Three Astro routes publish the site in a form TalePort can consume:

| Route | Emits | Built from |
| --- | --- | --- |
| `src/pages/raw/manifest.json.ts` | `/raw/manifest.json` — every page's help key, slug, title, status and anchors, plus the rule index | `src/lib/help.ts` |
| `src/pages/raw/[...path].md.ts` | `/raw/<lang>/<slug>.md` — the raw markdown | the collection entry's body |
| `src/pages/r/[rule].astro` | `/r/CR-I.1/` — a permanent redirect per rule | the rule index |

Anchors come from Astro's own `render()` headings rather than being parsed again, so the manifest
cannot drift from the anchors the site actually renders.

`src/lib/help.ts` also validates while it builds, and **throws** — a missing or duplicated
`helpKey`, a page with no English original, or the two languages disagreeing about which rules exist
all fail `npm run build` rather than shipping a broken manifest.

TalePort fetches these at runtime and renders the markdown inside its own contextual help panel, so
the documentation is never copied into the product. If you change a page, authors see the change as
soon as this site redeploys — no TalePort release needed.

**Do not remove or rename `raw/manifest.json`, and do not change the shape of its entries without
changing TalePort's client in the same week.** It is a consumed API.

## Hosting

The site is static, so anything that serves files works. It is set up for **GitHub Pages**:
`.github/workflows/deploy.yml` builds on every push to `main` and publishes `dist/`.

`docs.epos.games` currently serves the older TalePort Academy SPA from SiteGround, so the cutover
has an order to it:

1. **Enable Pages** — repository *Settings → Pages → Source: GitHub Actions*. The first push to
   `main` publishes to `https://<org>.github.io/taleport-wiki/`. Set the repository variable
   `SITE_BASE` to `/taleport-wiki` for that URL to work, and `SITE_URL` to the same origin.
2. **Point TalePort at it** while testing: set `Help__BaseUrl` to the Pages URL. TalePort fetches
   the manifest **server side**, so there is no CORS to configure.
3. **Move the Academy content in**, as a section of this site.
4. **Cut over the domain** — add the custom domain `docs.epos.games` in *Settings → Pages*, change
   the `docs` record at the DNS provider from the SiteGround A record to a `CNAME` pointing at
   `<org>.github.io`, then clear `SITE_BASE` and set `SITE_URL` to `https://docs.epos.games`.

`SITE_URL` also goes into `raw/manifest.json` and the rule redirects, so it must match the origin
the site is actually served from.

### Why not the GitHub wiki

A repository's built-in wiki has no build step, and this site's whole contract with TalePort is
built: `raw/manifest.json`, the raw markdown and the `/r/CR-I.1` rule redirects are all generated.
A wiki also cannot carry a custom domain, has no second language, and takes edits straight to the
published page with no pull request — which is the wrong shape for a document authors agree to and
reviewers cite. Its heading anchors are derived from heading text, so rewording a rule would break
every citation of it.

## Writing guidelines

Write for an author, not a developer. A feature page should answer, in this order:

1. What it is.
2. When and why an author would use it.
3. How to use it in TalePort.
4. What the options mean.
5. Rules and limits.
6. Examples, where they earn their space.

Do not document something you have not verified. A page marked `status: draft` that says so plainly
is better than a page that is confidently wrong — authors act on this, and reviewers cite it.
