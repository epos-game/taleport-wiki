---
title: Story structure and chapters
description: How stories, chapters and the story graph relate to each other.
helpKey: getting-started.story-structure
status: published
sidebar:
  order: 2
---

A story is the whole work you publish under one author profile, and it owns everything that has to hold true from the first page to the last: the cover, the genre, the tags, the age recommendation, the characters, the variables and the global events. A chapter is the piece inside it that you write, price and submit for review, and that a reader buys on its own. A node is one screen of a chapter. In a story called *The Last Lighthouse*, the keeper's `Trust` variable and the storm global event belong to the story, chapter 2 "The Night Watch" holds the 40 nodes the storm plays out across, and the node "Lamp room" is one screen with two lines of dialogue and a choice between staying at the lamp and going down to the boats.

## The three levels

| Level | What it is | What readers see |
| --- | --- | --- |
| **Story** | The published work. Owns the cover, genre, tags, age recommendation, content tags, characters, variables and global events. | One entry in EPOS. |
| **Chapter** | One publishable unit of a story. Has its own graph, its own description, its own price and its own review. | One part they buy and download. |
| **Node** | One screen: text, media and dialogue, plus the one transition that decides what comes next. | One step while reading. |

Anything that has to mean the same thing in chapter 1 and in chapter 9 belongs to the story. Anything that is part of one stretch of narrative belongs to the chapter.

One part of that split catches almost everyone out the first time. The age recommendation, the content tags and the AI declarations are **story** properties, but you set them from inside a chapter, on the **Classification** step of its publish wizard. You are editing the whole story from there, not that one chapter. Set them once and they cover everything you publish under that story, with one catch: as soon as a chapter is live the rating can only go up, and a content tag you have already declared cannot be taken back off.

## Why chapters matter

A chapter is reviewed on its own, priced on its own, published on its own, and a reader buys and downloads it on its own. That makes chapter length an editorial decision with consequences. The recommended price is computed from the chapter's own content, so a short chapter prices low; a long one means every later fix, down to one wrong name, goes back through review as a whole chapter. Length also decides when you can start charging: paid publishing opens up after one approved free chapter with at least 20 minutes of unique content, and four five-minute chapters do not add up to it.

## Chapters are released in order

Chapters have a fixed order, and the released part of a story stays an unbroken run from chapter 1. There is no way to put chapter 4 in front of readers while chapter 3 is a draft. The **Chapters** panel states the rule in one line: "Chapters are reviewed and published in this order. Published chapters and chapters in review are pinned; only drafts can be moved."

- A chapter goes to review once every chapter before it is live or already in review. A test build of an earlier chapter does not count, and an earlier chapter you withdrew back to **Draft** blocks everything after it again.
- A reviewer can approve it once every chapter before it is live and out of review. A published chapter with its own revision in review is not settled, so it still blocks the approval behind it.
- A test build needs every chapter before it to be in testing or live. An earlier chapter waiting in its first review blocks it.
- Chapters that are published, in review or in testing are pinned in their current order and stay ahead of the drafts. Dragging a draft above them is refused.

A pinned chapter shows a pin where the drag handle would be, and the first chapter that is not pinned is badged **Next to publish**. The order you settle on before your first submission is largely the order you keep.

## Adding, renaming and deleting chapters

Chapters live behind **Chapters** in the editor, and the story detail page opens the same list through **Manage** on its Chapters card. **Add Chapter** puts a new one at the end. **Create** stays disabled until the chapter has both a title and a description, so a nameless or undescribed chapter never gets created: up to 200 characters for the title, 1000 for the description. Reordering saves itself as you drop.

- A story always keeps at least one chapter. Deleting the last one is refused: "A story must have at least one chapter."
- While a chapter is in review, the editor greys out its Edit button ("Chapters in review cannot be edited") and deleting it is refused outright. Withdraw it from review to get it back.
- Deleting a *published* chapter does work. It takes the chapter away from readers, deletes its packages and releases its media, and the confirmation says nothing about any of that. Ctrl+Z puts it back.

## State carries across chapters

Stats, flags and relationships belong to the story rather than the chapter, so what a reader accumulated in chapter 1 is still on them in chapter 4. That is the whole reason a decision early on can pay off much later.

Locking is the other half of that. When a chapter goes live, everything it leans on is pinned: the characters who speak a line in it, the variables it reads or writes, every variable on a speaking character's stat sheet, every global event in the story, and the variable each of those global events targets. The last two reach further than you would guess, so a variable your chapter never mentions can still be locked because a global event points at it. A locked item shows a padlock instead of its Edit and Delete buttons, and both commands are refused server-side: "It unlocks when no published chapter uses it any more. You can add a new one instead." Withdrawing, unpublishing or deleting the chapter that uses it releases the lock.

The chapter's own graph freezes in the same way. While it is live you can still edit the components inside a node, but adding, deleting or relinking nodes is refused until the chapter comes back to you.

## Related

- [The story graph](/en/story-editor/story-graph/)
- [Variables](/en/story-editor/variables/)
- [Story lifecycle](/en/getting-started/story-lifecycle/)
- [Publishing](/en/getting-started/publishing/)
