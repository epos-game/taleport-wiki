---
title: Published content restrictions
description: What locks once readers have a chapter, and what you can still change.
helpKey: publishing.published-restrictions
status: published
sidebar:
  order: 11
---

Once a chapter is published, its structure is locked. You can still edit its text, images and sound.

| Locked | Still editable |
| --- | --- |
| The graph: its nodes and links | Text of dialogue lines and text blocks |
| Characters, variables, stats and global events the chapter uses | Images and audio files in existing components |
| Lowering the age rating, removing content tags | Anything new you add: characters, variables, stats, events |

After you edit, republish the chapter. It goes through [review](/en/publishing/review-process/) like any other submission.

## The graph

While a chapter is published, you cannot:

- add, delete, re-link or regroup nodes
- rename nodes
- add, delete or reorder dialogue lines, choices, events or components inside a node

You can edit what is already in a node: the text of a dialogue line, a text block, or the image or audio file a component uses.

A banner above the canvas reads **Published chapter**, *Update content (dialogue, text, images and audio), then republish. The story graph and existing characters, variables and stats stay locked; you can still add new ones.* The status bar shows the short version, *Published: graph structure locked, content editable*.

![the editor with a published chapter open](/screens/en/publishing/published-chapter-banner.png)

Only TalePort can lift the lock, by unpublishing the chapter.

## Characters, variables, stats and global events

Publishing locks these items:

- the characters that speak a line of dialogue in the chapter
- the variables the chapter changes in an event or checks in a requirement, and the stat variables of a locked character
- every global event in the story, together with the variable each event targets

You cannot edit or delete a locked item.

- Stats are variables, so they lock the same way.
- A character in a node without a dialogue line stays editable.
- Global events lock across the whole story, even if the published chapter never fires them.
- You can add new characters, variables, stats and events at any time.

The tooltip on the padlock lists the chapters that use the item, by number and title. It adds: *It unlocks when no published chapter uses it any more. You can add a new one instead.*

Removing an item from a published chapter would change its structure. So the only way around a lock is to add a new item next to the old one.

## The classification

:::caution[Classification can't be undone]
Once any chapter is live, two parts of the classification cannot be undone. Both cover the whole story.
:::

- You can raise the [age recommendation](/en/publishing/age-ratings/) but not lower it. Options below the saved rating are greyed out, with the tooltip *The age recommendation can't be lowered once a chapter is live.*
- You can add [content tags](/en/publishing/content-labels/) but not remove them. A tag already on the story is greyed out, with the tooltip *This tag can't be removed once a chapter is live.*

The AI declaration is not locked. You can keep editing it.

## Editing a live chapter

Editing does not change the chapter's status. It stays **Published**, and readers keep the version they have.

1. Make your changes. The **Republish** button becomes active.
2. Submit. The new version goes into review.
3. The old version stays live until the approval replaces it.

If a reviewer rejects the chapter, it moves to **Published · revising**. It stays live for readers. The graph stays locked and the content stays editable.

## Taking a chapter back

There are three different actions. Only the first is yours.

| Action | Who | What happens |
| --- | --- | --- |
| Withdrawing | You | The chapter leaves review. A live chapter returns to **Published**, unchanged and still with readers. A first submission returns to **Draft**, where you can edit and resubmit. |
| Cancelling a review | Reviewers and admins | The version waiting for review is discarded. The published version stays live. |
| Unpublishing | Admins only | Readers lose access. This cannot be undone. The chapter drops to **Draft** with its graph, content and notes intact. You can edit it and submit it again. |

To withdraw, use the editor header, the chapters dialog or the dashboard. It works while the chapter is in review, even if a reviewer has opened it. Press **Withdraw from review**, then confirm with **Withdraw** in the *Withdraw from review?* dialog. The reviewer no longer holds the chapter.

## Moderation after publication

[CR-V.1](/en/publishing/content-rules/#cr-v-1) allows published content to be reviewed again if someone finds or reports a violation.

Readers report from the EPOS app, not from the editor. TalePort does not notify the author about a report. A report:

- names one of seven reasons: explicit content, hate speech, extreme gore, illegal content, misclassified, spam, other
- can include up to 1000 characters in the reader's own words
- is about the story, not a chapter

TalePort reviews the report.

[CR-VI.1](/en/publishing/content-rules/#cr-vi-1) and [CR-VIII.1](/en/publishing/content-rules/#cr-viii-1) list the wider set of responses. They range from a required rating correction to hiding a story or restricting an account. The rules only reserve the right to use them. TalePort applies them, and you do not set them in the editor.

If you delete your author account, your stories leave the store. Readers who already own a chapter can still download it.

## Related

- [Story lifecycle](/en/getting-started/story-lifecycle/)
- [Review process](/en/publishing/review-process/)
- [Variables](/en/story-editor/variables/)
- [Age recommendation](/en/publishing/age-ratings/)
