---
title: Story structure
description: Shaping a branching chapter that is worth reading, possible to finish, and still fixable later.
helpKey: best-practices.structure
status: published
sidebar:
  order: 1
---

A chapter's structure is the graph you draw: nodes that carry the content, links between them, and the points where the reader decides something. The shape you choose sets how much you have to write, what the chapter is priced at, and how much of it you can still change after it goes live. Take a scene that splits into "Accept the bribe" and "Refuse the bribe". If both arms run back into a node called Morning at the docks and one variable carries the difference, you have written two short scenes; if they never meet again, you have written the rest of the chapter twice.

## The shape that works

Most good chapters are a sequence of scenes, each branching inside itself and reconverging before the next one begins. Branches that never rejoin double your writing at every decision. Branches that rejoin let a choice matter without multiplying the work.

What carries forward between scenes is not a separate path. It is [state](/en/story-editor/variables/). The reader who lied and the reader who told the truth arrive at the same next scene, and the scene reads differently because a variable is different.

![Scene 1 branches into A and B, both of which lead to Scene 2. Scene 2 branches into C and D, both of which lead to Scene 3.](/diagrams/branch-and-reconverge.svg)

This is what lets a chapter with dozens of decisions stay finishable.

## Where to spend real divergence

Save genuinely separate paths for one or two points where the story should split, and give each of them somewhere to rejoin or end. A chapter with four independent full-length routes is four chapters to write, test and get through review.

[Pricing](/en/monetization/pricing/) pushes you the same way. A chapter is priced from its **longest single playthrough**, not from everything it contains. Four parallel routes of the same length do not multiply the price by four: one route is measured, and the other three reach the price only through the interactivity bonus, which is capped at +40%.

That bonus is two numbers multiplied together. The first is how much more content the chapter holds than its longest route, and it stops rising once the total reaches three times that route. The second is decision points per hour of the longest route, counting every node reachable from Start that has more than one outgoing link, groups included; it tops out at 150 per hour. Because the two are multiplied, content without decisions earns almost nothing. Four long parallel routes hand you one decision point and a great deal of unmeasured writing. A reconverging spine hands you dozens of them over the same hour.

## Decide the shape before you publish

**Once a chapter is live, its graph structure is locked.** The status bar says it plainly: "Published: graph structure locked, content editable". You can rewrite a node's text, edit a dialogue line, swap an image, replace an audio file, and send that through review again. You cannot add or remove a node, a link, a component, a choice option, a dialogue line or a switch condition. The chapter keeps the shape it went out with.

While the chapter sits with a reviewer, nothing is editable at all. The editor turns read-only until you withdraw the submission.

The characters, variables and global events a live chapter uses lock as well, and the lock covers every field, not only the name and the type. For a variable that is the default value, the Min and Max range, the group name, the icon and the enum labels. Only the components a live chapter actually uses lock, so anything you never placed stays free, and you can add new ones at any time. See [Published content restrictions](/en/publishing/published-content-restrictions/).

So the first chapter you publish quietly fixes the vocabulary for the whole story. Before you submit it, ask what chapter five will need to know about the reader and create those variables now. A few general ones you can extend beat a long list of specific flags you are stuck with.

## Length

Aim for a chapter a reader finishes in one sitting. A reader who abandons a chapter part-way does not buy the next one.

Length is counted from the text, at 1000 plain-text characters a minute. A node with no text falls back to its voice-over, then to its cutscene, and the first of the three that is not zero wins. Background music, ambient sound and background video never count toward length, so a chapter built from a looping score over a background video measures zero minutes and cannot be submitted at all.

Two totals come out of that measurement and they are easy to confuse. [Pricing](/en/monetization/pricing/) reads the longest route from the Start node to an End node. [Qualifying to charge](/en/monetization/requirements/) reads all the content in the chapter and wants 20 minutes of it inside one chapter, not accumulated across several. A short spine with four 10-minute arms carries 40 minutes toward qualification and prices as a 10-minute chapter.

## Keep the shape legible

A chapter you cannot see is a chapter you cannot check.

- Name your nodes. The canvas card and node search fall back to the opening of the node's text trimmed to 40 characters, and then to "Node 12". The Problems panel, the publish dialog and reviewer notes never use that snippet. They show "Node 12", or "Node 12 - Morning at the docks" once you have filled in Node Name.
- Collapse finished scenes into [groups](/en/story-editor/groups/). A group is one box on the canvas holding a self-contained stretch of story, and an End node inside a group still counts as an ending for the chapter.

Groups cost you visibility, so collapse the scenes you have finished rather than the ones you are still fixing. A group node reports only "Contains errors" or "Contains warnings" and a single issue that reads "This group contains content with validation issues." The individual findings are dropped on the way out, and an error on a node inside a group reaches the publish dialog with no label and no Go to node button. Open the group to find out what it is. Three checks also never run inside a group, not even at publish time: the unreachable-End check, the End-with-no-incoming-link check and the duplicate-Start check.

Start and End nodes cannot be moved into a group, and neither can a node a global event targets. The selection you group has to be connected to itself, so two unrelated clumps will not go in together. Ungrouping is refused while the group still holds nested groups, and copying a group duplicates its ports without its contents. The first of those restrictions is why the spine of a chapter stays on the top-level canvas, which is where it reads best.

## Signposting

A reader of a branching story needs to know the choice registered. Reflect it back. A character brings it up two scenes later, or the next scene opens on a line the other reader never sees. A choice whose effect is invisible reads as a choice that did nothing.

## Related

- [Interactivity](/en/best-practices/interactivity/)
- [The story graph](/en/story-editor/story-graph/)
- [Variables](/en/story-editor/variables/)
- [Published content restrictions](/en/publishing/published-content-restrictions/)
