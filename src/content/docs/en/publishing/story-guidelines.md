---
title: Story guidelines
description: Editor errors and warnings, and the criteria a reviewer judges a chapter by.
helpKey: publishing.story-guidelines
status: published
sidebar:
  order: 2
---

The [Content Rules](/en/publishing/content-rules/) say what is allowed. This page says what must be finished before you submit a chapter for review.

Problems come in three kinds:

| Kind | What happens | Example |
| --- | --- | --- |
| Error | The editor blocks the submit | A choice option with no text |
| Warning | The editor flags it but lets you submit | A dialogue line with no character |
| Quality | A reviewer judges it while reading | Placeholder text left in |

## Editor errors

You cannot submit a chapter with any of these errors.

Each error gets its own row on the **Validation** checklist, labelled with its node. Click **Go to node** to jump to it. An error about the whole graph is a plain line with no shortcut.

Graph structure:

- The graph has no Start node, or no End node.
- A connection leads into the Start node.
- A node has an output that nothing is connected to.
- A Start or End node holds content components. Both must stay empty.

The unconnected-output check skips a node that a [global event](/en/story-editor/global-events/) targets. The event jumps straight to it, so no connection leads there.

Three more checks run on the chapter graph. They do not run inside a [group](/en/story-editor/groups/):

- No End node is reachable from the Start node.
- There is more than one Start node.
- An End node has no incoming connection.

Inside a group, the editor checks the group's start and end instead. The group's Start node must lead to something inside the group. Something inside the group must lead to its End node.

Inside a node:

- A choice node has no options, or one of its choices has no text.
- A switch node has no conditions set.
- A skill check node has no stat selected.
- A node holds two components that cannot share a node:
  - text with dialogue
  - two of the same kind
  - a background image with a background video
  - media on a channel beside the inheritance stop marker for that same channel. Each of the three channels has its own stop. Background music beside the music stop is the same error as a backdrop beside the backdrop stop.
- A cutscene breaks its own stricter rules. Only a checkpoint or an inheritance stop marker may sit beside it. The node's transition must be a **Simple Transition**, not a choice, switch or skill check. With any other transition the editor shows *A cutscene can only be placed on a node with a simple transition.*

The editor checks global events against their chapter. So these three errors belong to the graph, not to a node:

- an event points at a variable that no longer exists
- an event returns the reader to the start of a chapter that has no Start node
- an event returns the reader to the last checkpoint, but there is no checkpoint

Two more checks run when you submit:

- At least one reachable ending has to be marked **End of chapter**.
- The chapter needs enough content to calculate a price.

They show as **Reachable end-of-chapter ending** and **Story graph has playable content**. Neither row has a shortcut. See [Publishing requirements](/en/publishing/publishing-requirements/).

### About switches

A switch needs at least one condition. Every output must lead somewhere, including the **Default** output. Default is created with the node and cannot be removed.

A condition with no requirements never matches. That is only a warning.

## Editor warnings

These do not stop a submission. They do not appear on the **Validation** checklist.

- A node is not reachable from the Start node. Nodes that a global event targets are exempt.
- A node has no content.
- A text component has no text.
- A dialogue component has no lines, or a line has no character or no text.
- An event component has no events set.
- A switch condition has no requirements, so it will never match.
- The backdrop, background music or ambient sound is not set and none is inherited.
- A cutscene component has no video.
- A group input has no incoming connection.
- Two global events share the same variable, operator and value.

## Reviewer judgment

The editor checks none of the following. A reviewer may weigh the rules, the age classification, the AI declaration, rights to media and the technical requirements. They may ask for changes before they approve ([CR-V.1](/en/publishing/content-rules/#cr-v-1)).

### Completeness

A chapter needs a beginning, a middle and an ending. Choices that lead to empty nodes are only a warning.

Remove placeholder content yourself before you submit, such as lorem ipsum, a `TODO` left in a dialogue line or temporary artwork. A reviewer looks for it.

### Language and presentation

Proofread before you submit. [CR-III.1](/en/publishing/content-rules/#cr-iii-1) allows spelling and grammar tools. It allows translation too, if a human wrote the original text.

Spell a character's name the same way throughout the chapter. Put narration in text components and speech in dialogue components. Write prose in paragraphs.

### Interactivity

Choices should differ in where they lead or what they change. If you track a [variable](/en/story-editor/variables/), something later should depend on it. A reader who fails a [skill check](/en/story-editor/skill-checks/) must still be able to finish the chapter.

### Media

You need the rights to every image, track, recording and clip you upload ([CR-II.1](/en/publishing/content-rules/#cr-ii-1)). If AI generated the media or helped make it, declare it in the **Classification** step ([CR-III.2](/en/publishing/content-rules/#cr-iii-2)). See [Media usage](/en/best-practices/media-usage/).

### Classification

The age recommendation must fit the strongest content anywhere in the story, not the average ([CR-IV](/en/publishing/content-rules/#cr-iv)). Content tags must match the story's content.

Both belong to the story, not the chapter. Both lock in once any chapter goes live: you can raise the rating but never lower it, and you cannot remove a tag already on the story. See [Content labels](/en/publishing/content-labels/).

## Related

- [Content Rules](/en/publishing/content-rules/)
- [Publishing requirements](/en/publishing/publishing-requirements/)
- [Preparing content for review](/en/best-practices/preparing-for-review/)
