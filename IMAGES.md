# Images the wiki needs

Every page below has a place where a picture does something prose cannot. Pages not listed do not
need one: a screenshot that only repeats the sentence next to it costs a reader time and costs us
a re-shoot every time the UI moves.

## Conventions

Put files in `public/screens/<lang>/<section>/<name>.png` and reference them from the site root.
Each language has its own copy of every screenshot, so a page shows the interface in the language
it is written in:

```markdown
<!-- src/content/docs/en/story-editor/node-types.md -->
![A node with a text component and a choice transition](/screens/en/story-editor/node-anatomy.png)

<!-- src/content/docs/cs/story-editor/node-types.md -->
![Uzel s textovou komponentou a volbou](/screens/cs/story-editor/node-anatomy.png)
```

Both files must exist under the same `<section>/<name>.png`. Where no translated shot has been taken
yet, copy the English one into the other language rather than pointing two pages at one path: the
file is then a placeholder anyone can replace without touching Markdown.

Not `src/assets` with a relative path, however much nicer Astro's image pipeline would be. The
TalePort help panel renders the same Markdown and rewrites root-relative images to fetch them
through TalePort; a relative path means nothing there, so the panel would show a broken icon on
every page carrying a screenshot.

- **Shoot in dark mode at 1440px wide.** That is what the app looks like and what the wiki looks like.
- **Shoot at 2x.** `npm run sizes` lays every screenshot out at half its pixel width, so a 2x capture
  renders at the size it was taken and stays sharp on a dense display. A 1x capture renders soft.
- **Crop to the subject.** A full-window screenshot to show one field wastes most of its pixels.
- **Leave a few pixels outside the component's own border**, and nothing else: no panel scrollbar, no
  strip of the page behind a dialog, no window chrome.
- **Use the same demo story throughout** so readers are not re-orienting on every page.
- **No personal data.** No real author names, emails or unpublished third-party work.
- **Write the alt text as the information**, not as a label. "A choice node with three outputs, one
  of them unlinked" beats "Screenshot of the editor".

Diagrams are better than screenshots wherever the point is a relationship rather than an
interface. Those are already handled: write the Mermaid source in `diagrams/` and run
`npm run diagrams`. See CONTRIBUTING.

Done so far: the chapter lifecycle on `getting-started/story-lifecycle`, and the
branch-and-reconverge shape on `best-practices/story-structure`.

## Priority 1: pages that are hard to follow without one

| Page | What the image must show | Kind |
| --- | --- | --- |
| `story-editor/story-graph` | A small graph of six or seven nodes with one group collapsed, so the reader sees nodes, links, ports and a group at once | Screenshot |
| `story-editor/node-types` | One node opened in the properties panel with a transition and two components, each labelled | Annotated screenshot |
| `story-editor/transitions-and-choices` | A choice transition with three outputs, one of them gated by a requirement | Screenshot |
| `story-editor/groups` | The same section shown twice: collapsed on the parent canvas, and opened as a subgraph | Screenshot pair |
| `story-editor/skill-checks` | A skill check with its pass and fail branches going somewhere different | Screenshot |
| `story-editor/global-events` | The global event editor with a condition, text and a post-event behaviour selected | Screenshot |

## Priority 2: pages where a picture saves a paragraph

| Page | What the image must show | Kind |
| --- | --- | --- |
| `getting-started/creating-a-story` | The new-story dialog | Screenshot |
| `getting-started/sharing-your-story` | The share link panel on a story's detail page | Screenshot |
| `story-editor/variables` | The variable editor with a bounded number stat: default, minimum, maximum, group, icon | Screenshot |
| `story-editor/conditions` | A condition row with the operator list open | Screenshot |
| `story-editor/characters-and-dialogue` | A dialogue component with two lines by different speakers, one carrying audio | Screenshot |
| `story-editor/checkpoints` | A node with a checkpoint component in the properties panel | Screenshot |
| `media/cover-image` | One cover shown at full size next to the same cover at list thumbnail size | Composite |
| `media/images` | Two adjacent nodes where the second inherits the backdrop, and the same pair with an inheritance stop | Screenshot pair |
| `publishing/age-ratings` | The four rating chips as the author sees them in the publish dialog | Screenshot |
| `publishing/content-labels` | The content tag chips, some selected | Screenshot |
| `publishing/review-feedback` | A node with a reviewer comment pinned to it, one marked high priority | Screenshot |
| `monetization/statistics` | The statistics page with its summary figures and the monthly chart | Screenshot |

## Priority 3: nice to have

| Page | What the image must show | Kind |
| --- | --- | --- |
| `getting-started/testing-and-contributors` | The contributors dialog | Screenshot |
| `publishing/publishing-requirements` | The publish wizard's validation step with a failing check | Screenshot |
| `publishing/review-process` | The chapter status badge in each of its states | Composite |
| `monetization/requirements` | The author stage shown on the profile | Screenshot |

## Not needed

`publishing/content-rules` and the other standards pages stay text. They are cited clause by clause
and translated; pictures would date faster than the rules and cannot be quoted in review feedback.

The `best-practices` pages other than `story-structure` are editorial advice rather than interface
walkthroughs, so a screenshot would be decoration.
