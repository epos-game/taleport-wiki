---
title: Story guidelines
description: What the editor blocks, what it only warns about, and what a reviewer judges.
helpKey: publishing.story-guidelines
status: published
sidebar:
  order: 2
---

The [Content Rules](/en/publishing/content-rules/) say what is permitted. This page says what is finished enough to publish, and it sorts problems by the gate they fall at: errors the editor refuses to let past, warnings it flags and lets you submit anyway, and whatever a reviewer notices while reading. Knowing which gate you are standing at tells you whether to fix something before you submit or after. A choice node called Bridge at dawn whose third option is still blank is an error, and the chapter will not go to review until you fill it in; the same node with a dialogue line that has no character assigned only warns, and you can submit it exactly as it is.

## What the editor blocks

These are reported as errors, and a chapter with any of them cannot be submitted. Each error gets its own row on the publish checklist, labelled with the node it sits on, plus a **Go to node** shortcut where the error belongs to a node. Graph-wide errors have nowhere to jump to, so they appear as a bare line.

The shape of the graph:

- The graph has no Start node, or no End node.
- A connection leads into the Start node.
- A node has an output port that goes nowhere.
- A Start or End node holds content components. Both are routing markers and stay empty.

Three further checks run on the chapter graph but are skipped inside a [group](/en/story-editor/groups/)'s subgraph:

- No End node is reachable from the Start node.
- There is more than one Start node.
- An End node has no incoming connection.

Inside a group the boundary is checked instead. The group's Start node has to lead to something inside the group, and its End node has to be fed by something inside it. A node that a [global event](/en/story-editor/global-events/) targets is skipped by the output-port check, because the event jumps to it rather than the graph routing there.

Inside a node:

- A choice node has no options, or one of its choices has no text.
- A switch node has no conditions configured.
- A skill check node has no stat selected.
- Two components that cannot share a node are on one: text with dialogue, two of the same kind, a background image with a background video, or a backdrop together with the marker that stops backdrops being inherited. A cutscene is stricter. Only a checkpoint or an inheritance stop may sit beside it, and the node has to keep its simple transition.

Global events are checked against the chapter that owns them, so these three errors land on the graph rather than on a node: an event points at a variable that no longer exists, an event returns the reader to the start of a chapter that has no Start node, or an event returns the reader to the last checkpoint when there is no checkpoint to return to.

Two more checks run when you submit rather than while you edit: at least one reachable ending has to be marked **End of chapter**, and the chapter needs enough content for a price to be computed from it. They show up as **Reachable end-of-chapter ending** and **Story graph has playable content**, and neither row offers a shortcut, so you have to find the problem yourself. See [Publishing requirements](/en/publishing/publishing-requirements/).

### About switches

What is checked on a switch is that it has at least one condition, and that every output leaving it goes somewhere. That includes the **Default** port, which is created with the node and cannot be removed; there is no such thing as a switch without a fallback. A condition with no requirements never matches, and that one is only a warning.

## What the editor only warns about

None of these stop a submission, and none of them reach the publish checklist. They are still worth clearing, because a reviewer reads the chapter the way a reader would and these are what a reader notices.

- A node is not reachable from the Start node. Nodes targeted by a global event are exempt.
- A node has no content.
- A text component has no text.
- A dialogue component has no lines, or a line has no character or no text.
- An event component has no events configured.
- A switch condition has no requirements, so it will never match.
- The backdrop, background music or ambient sound is not set and none is inherited.
- A cutscene component has no video.
- A group input has no incoming connection.
- Two global events share the same variable, operator and value.

## What a reviewer judges

Nothing below is checked by anything in the editor. A reviewer may weigh the rules, the age classification, AI disclosure, rights to media and the technical requirements, and may ask for changes before approving ([CR-V.1](/en/publishing/content-rules/#cr-v-1)).

### Completeness

A chapter needs a beginning, a middle and a point at which it is over, not an arbitrary slice of a longer draft. Choices that land on empty nodes count against it, and the editor only warns about those. Placeholder content is the other thing that slips through: lorem ipsum, a `TODO` left in a dialogue line and temporary artwork are all invisible to validation and obvious to a reader.

### Language and presentation

Proofread before you submit. Spelling and grammar tools are allowed under [CR-III.1](/en/publishing/content-rules/#cr-iii-1), as is translation, provided a human wrote the text underneath. Names have to hold across the chapter: a character called Mira in one scene and Míra in the next reads as a mistake, because it is one. Narration belongs in text components, speech in dialogue components, and prose in paragraphs rather than one wall.

### Interactivity

A chapter where every choice reconverges immediately and changes nothing is a linear story with extra clicks. If you track a [variable](/en/story-editor/variables/), something later should branch on it. A reader who fails a [skill check](/en/story-editor/skill-checks/) should still be able to finish the chapter; a failed roll that leads nowhere is a hole, not a consequence.

### Media

You need the rights to every image, track, recording and clip you upload ([CR-II.1](/en/publishing/content-rules/#cr-ii-1)). Where media was generated or assisted by AI, declare it in the Classification step ([CR-III.2](/en/publishing/content-rules/#cr-iii-2)). Use media where it does work: the same backdrop on forty consecutive nodes reads as filler. See [Media usage](/en/best-practices/media-usage/).

### Classification

The age recommendation has to fit the most extreme content anywhere in the story, not the average ([CR-IV](/en/publishing/content-rules/#cr-iv)). Content tags have to match what is actually there. Both sit on the story rather than the chapter, and both tighten the moment any chapter goes live: the rating can be raised but never lowered, and a tag already on the story cannot be taken off. See [Content labels](/en/publishing/content-labels/).

## Related

- [Content Rules](/en/publishing/content-rules/)
- [Publishing requirements](/en/publishing/publishing-requirements/)
- [Preparing content for review](/en/best-practices/preparing-for-review/)
