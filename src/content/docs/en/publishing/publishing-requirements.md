---
title: Publishing requirements
description: Everything that must be true before a chapter can be submitted for review.
helpKey: publishing.requirements
status: published
sidebar:
  order: 7
---

Before a chapter goes to review, TalePort checks three things: your author profile, the story and the chapter. The results appear on the **Validation** step, the first step of the publish dialog.

You cannot publish a chapter with no nodes. **Publish** is greyed out, and its tooltip reads *Add at least one node before submitting for review*.

## The Validation step

1. Press **Publish**. For a chapter in Draft or Testing, the dialog first asks *How do you want to publish?* Choose between a private test build and sending the chapter to review.
2. If you choose to send the chapter to review, the seven publish steps start. A chapter that is in review or live skips the question and opens on the first step.
3. The first step is **Validation**, headed *Ready to publish?*. It runs fourteen checks and shows each as a row.

Failing rows sit at the top under **Needs attention**. Passing rows sit under **Ready**. When you fix a check, its row moves down.

Most failing rows have a button that takes you to the fix: **Open profile**, **Open billing settings**, **Review metadata**, **Open chapters**. Three rows have none:

- *Story graph has playable content*
- *Reachable end-of-chapter ending*
- *No graph errors*, when it passes

When *No graph errors* fails, it is replaced by one row per error. A row offers **Go to node** when the error belongs to a node.

![the Ready to publish? step of the publish dialog: failing rows under Needs attention at the top of the list, passing rows under Ready below them](/screens/en/publishing/validation-step.png)

## Your author profile

Four rows check you, not the story. Three are about your profile and one is about billing:

- **Author display name**, **Author bio** and **Author avatar**. These hold you on the **Validation** step until they pass. A bio that is only empty formatting does not count.
- **Billing and payout information**. It fails when your details are incomplete, but it blocks only a paid chapter. A free chapter submits anyway.

## The story

You set these once. They cover every chapter.

- **Story title**, **story description** and a **cover image**
- Exactly one [genre](/en/publishing/genres-and-tags/), and at least one [tag](/en/publishing/genres-and-tags/)
- An [age recommendation](/en/publishing/age-ratings/) that fits the strongest content anywhere in the story
- Human authorship confirmed: tick the checkbox saying a human wrote the story text and AI did not generate it. See [CR-III.1](/en/publishing/content-rules/#cr-iii-1).

The age recommendation and the authorship confirmation have no row on the checklist. You set them on the **Classification** step. Its **Next** button stays disabled until you choose a rating and tick the box. TalePort checks both again when you submit.

The **Classification** step saves when you leave it. See [Publishing](/en/getting-started/publishing/#publishing-dialog).

Once any chapter is live, you can raise the rating but not lower it. You cannot remove a content tag already on the story. Both options are greyed out, and a tooltip says why.

## The chapter

- A chapter title and a **chapter description**. The **Metadata** step needs the title before you can continue.
- At least one ending that a reader can reach from the start and that is marked **End of chapter**. A chapter can have many [end nodes](/en/story-editor/end-nodes/), but one reachable ending is enough.
- **No graph errors.** Warnings do not block. Errors do, and each error gets its own row. A row offers **Go to node** only when the error belongs to a node. A missing Start node, or an End node nothing connects to, shows as a failing row with no link. See [Story guidelines](/en/publishing/story-guidelines/).
- *Story graph has playable content.* TalePort calculates the price from the longest route a reader can take. That route must last longer than zero minutes. An almost empty chapter fails here.
- *Earlier chapters are ready for review.* Every chapter before this one must be live or in review.

Four of these rows stop you on the first step: the reachable ending, graph errors, playable content and chapter order. You can fix the chapter description, story metadata and billing details in a later step. The age recommendation has no row, because the **Classification** step enforces it.

## Non-blocking items

These never stop a submission:

- [Content tags](/en/publishing/content-labels/) are optional. The checklist ignores them.
- Contributors: you can untick a contributor without blocking the submit. Submitting then removes them from the story, and they lose access to later versions. Feedback they already wrote is kept. To bring them back, add them again under Contributors on the story.
- Missing billing details on a free chapter.
- Validation warnings: an unreachable node, a node with no content, a backdrop or track with no file. The editor flags them and lets you submit.

### Missing media files

A media file your story uses but that has gone missing shows up only during processing, after you submit. The chapter returns to its previous status, and the **Missing media files** dialog opens. It lists each missing file on its own row.

- A file used in a node shows that node's name, or *In a node* when the node has no name. Click the row to go to the node.
- A missing cover, character avatar or global-event image is labelled *Story cover image*, *Character avatar* or *Global event*. You cannot click those rows. Fix them where you normally edit them.

The dialog appears once, when processing fails, and only while the editor is open.

**Publish without these files** reopens the publish dialog, so you go through the seven steps again. The build then leaves those files out. A scene plays with no background, and a character has no avatar.

## Dialog declarations

You make these declarations in the publish dialog:

- **Free or paid**, and a price if paid. See [Free and paid content](/en/monetization/free-and-paid-content/).
- **AI-generated content**, declared per kind of media. [CR-III.2](/en/publishing/content-rules/#cr-iii-2) requires it, and it affects the recommended price. See [Classification](/en/getting-started/publishing/#classification).
- Rights to every image, track, recording and clip. A reviewer checks these rights during review, not the publish dialog. The rule is [CR-II.1](/en/publishing/content-rules/#cr-ii-1).

Of all the declarations, only the authorship checkbox can stop a submission. The AI declaration never does.

## Charging for a chapter

Two conditions apply. Both are about you, not the story:

- You are a **Qualified** author, or an active partner.
- Your billing and payout details are complete.

Neither applies to a free chapter. You become qualified automatically once one of your free chapters is approved and has enough content. You can also ask TalePort for qualification. [Monetization requirements](/en/monetization/requirements/#becoming-qualified) explains the threshold and how time is measured.

## Related

- [Publishing](/en/getting-started/publishing/)
- [Preparing content for review](/en/best-practices/preparing-for-review/)
- [Review process](/en/publishing/review-process/)
- [Story guidelines](/en/publishing/story-guidelines/)
