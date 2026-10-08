---
title: Story structure and chapters
description: Relationship between a story, a chapter and the story graph.
helpKey: getting-started.story-structure
status: published
sidebar:
  order: 2
---

A story is the whole work you publish under one author profile. It is made of chapters. Each chapter has its own price and review, and readers buy each one separately.

## The three levels

| Level | What it is | What readers see |
| --- | --- | --- |
| **Story** | The published work. It owns the cover, genre, tags, age recommendation, content tags, characters, variables and global events. | One entry in EPOS. |
| **Chapter** | One publishable part of a story. It has its own graph, description, price and review. | One part they buy and download. |
| **Node** | One screen: text, media and dialogue, plus the one transition that decides what comes next. | One step while reading. |

The age recommendation, content tags and AI declarations belong to the **story**. You set them on the **Classification** step of the publish wizard for any chapter. They apply to every chapter. Once a chapter is live, you can only raise the rating. You can't remove a content tag you have declared.

## Chapter length

Each chapter is reviewed, priced and published on its own. This is why length matters, in three ways:

- TalePort works out the recommended price from the chapter's own content, so a short chapter gets a low price.
- Every later fix to a live chapter sends the whole chapter back through review, even if you only correct one wrong name. The longer the chapter, the more there is to review.
- You can publish paid chapters only after one approved free chapter with at least 20 minutes of unique content. Four five-minute chapters don't add up to that.

## Release order

Chapters are released in order, starting with chapter 1. For example, chapter 4 can't reach readers while chapter 3 is a draft. The **Chapters** panel says so: "Chapters are reviewed and published in this order. Published chapters and chapters in review are pinned; only drafts can be moved."

Each action has a condition on the chapters before it:

- **Sending a chapter to review:** every earlier chapter must be live or in review. A test build doesn't count.
- **Getting a chapter approved by a reviewer:** every earlier chapter must be live and not in review. A live chapter whose own revision is in review blocks the next chapter.
- **Building a test package:** every earlier chapter must be in testing or live. A chapter that is waiting for its first review blocks it.

If you withdraw an earlier chapter back to **Draft**, it blocks every chapter after it again.

Published, in-review and in-testing chapters are pinned in their order, ahead of the drafts. You can't drag a draft above them. A pinned chapter shows a pin where the drag handle would be. The first chapter that isn't pinned has the badge **Next to publish**.

## Adding, renaming and deleting chapters

You'll find your chapters under **Chapters** in the editor. The same list opens from **Manage** on the Chapters card of the story detail page. **Add Chapter** puts a new chapter at the end.

**Create** stays disabled until the chapter has a title (up to 200 characters) and a description (up to 1000). A new order is saved when you drop the chapter.

- A story must always have at least one chapter. You can't delete the last one: "A story must have at least one chapter."
- While a chapter is in review, its Edit button is greyed out ("Chapters in review cannot be edited.") and you can't delete it. Withdraw it from review and both work again.
- You can delete a *published* chapter. It disappears for readers and its media is released. While the editor stays open, Ctrl+Z brings the chapter back with its media.

## State across chapters

Stats, flags and relationships belong to the story, not the chapter. Values from chapter 1 carry over to chapter 4.

While a chapter is live, these things are locked:

- the characters who speak a line in it
- the variables it reads or writes
- every variable on a speaking character's stat sheet
- every global event in the story
- the variable each of those global events targets

A locked item shows a padlock instead of its Edit and Delete buttons, and you can't edit or delete it. The padlock explains: "It unlocks when no published chapter uses it any more. You can add a new one instead."

The chapter's own graph locks the same way. While the chapter is live, you can edit the components inside a node. You can't add, delete or relink nodes until the chapter comes back to you.

A lock is released only when the chapter holding it stops being live. That happens when TalePort unpublishes the chapter or when you delete it. Withdrawing it from review is not enough. A live chapter you withdraw goes straight back to **Published**.

## Related

- [The story graph](/en/story-editor/story-graph/)
- [Variables](/en/story-editor/variables/)
- [Story lifecycle](/en/getting-started/story-lifecycle/)
- [Publishing](/en/getting-started/publishing/)
- [Story structure](/en/best-practices/story-structure/)
