---
title: Published content restrictions
description: What is frozen once readers have a chapter, and what you can still change.
helpKey: publishing.published-restrictions
status: published
sidebar:
  order: 10
---

Publishing hands a chapter to readers, and from that moment TalePort freezes the parts they depend on. The shape of the graph is fixed, and so is every character, variable and global event the chapter uses, while the words, pictures and sound inside the components already there stay editable. Chapter 2 of *The Mill at World's End* is live and a reader points out that the ferryman at **Ford crossing** asks for "fourty" coins: you open the node, retype the line and republish. Adding a second ferryman, branching past him or renaming the `ferry_paid` variable that scene writes to is a different matter, and none of it is possible while the chapter is live.

## The graph is frozen

Fixed structure means more than the canvas. You cannot add, delete, re-link or regroup nodes, and inside a node you cannot add, delete or reorder dialogue lines, choices, events or components either. Node titles go read-only as well.

What stays editable is what is already there: the text of a dialogue line, a text block, the image or audio file a component points at. Edit it and republish, and the chapter goes through [review](/en/publishing/review-process/) like any other submission.

The editor is blunt about it. A banner sits above the canvas reading **Published chapter**, *Update content (dialogue, text, images and audio), then republish. The story graph and existing characters, variables and stats stay locked; you can still add new ones.* The status bar carries the short version, *Published: graph structure locked, content editable*.

![the editor with a published chapter open](/screens/en/publishing/published-chapter-banner.png)

Only TalePort can lift that lock, by unpublishing the chapter, which deletes its packages. Treat a structural change as a new chapter instead.

## Characters, variables, stats and global events lock

Going live locks everything the chapter uses: the characters that appear in it, the variables and stats it reads or writes, the global events it fires. A locked item cannot be renamed, retyped or deleted. Stats are variables, so they lock the same way.

Only what a live chapter actually uses is affected. A character you created and never put in a scene stays editable, and you can add new characters, variables, stats and events whenever you like. That is the way past a lock: leave the old item alone and put a new one next to it.

Hover the padlock and the tooltip names the chapters holding the item, by number and title, then adds: *It unlocks when no published chapter uses it any more. You can add a new one instead.* Taking the item out of a live chapter would itself be a structural edit, so adding a new one is the route that is actually open to you.

## The classification only moves one way

From the moment any single chapter of the story is live, two parts of the classification stop being reversible. Both cover the whole story, not the chapter you happen to be publishing.

- The [age recommendation](/en/publishing/age-ratings/) can be raised, never lowered. Every chip below the stored rating is disabled, with the tooltip *The age recommendation can't be lowered once a chapter is live.*
- [Content tags](/en/publishing/content-labels/) can be added, never removed. A tag already on the story shows as a disabled chip: *This tag can't be removed once a chapter is live.*

The AI declaration is not part of that ratchet and stays editable. Watch when the rest is written, though: the Classification step saves when you press **Next**, not when you submit. A tag you tick and then abandon by closing the dialog is already on the story, and it turns permanent the moment a chapter goes live.

## Editing a live chapter

Editing does not change the chapter's status. It stays **Published** while you work, readers carry on with the version they have, and the **Republish** button wakes up once there are unpublished changes to send. Submitting puts the new version in review with the published one still live, and the live one is replaced only on approval. Readers are never left without the chapter.

A rejection during that cycle leaves the chapter at **Published · revising**. Still live for readers, still structurally frozen, still editable in content only. The lock does not lift because a reviewer sent the chapter back.

## Taking a chapter back

Three different actions, and only the first is yours.

Withdrawing is available from the editor header, the chapters dialog and the dashboard for as long as a reviewer is holding the chapter; the button reads **Withdraw from review**. A live chapter returns to **Published**, untouched. A first submission returns to **Draft**. The confirmation says *Return "…" to draft?* either way, even for the live chapter that is going nowhere near a draft.

Cancelling a review belongs to reviewers and admins. The version waiting for review is discarded along with its review packages, and the published version stays live.

Unpublishing is admin-only and has no author-facing equivalent. Every package of the chapter is deleted and readers lose access, and that part cannot be undone. The chapter itself survives: it drops to **Draft** with its graph, content and notes intact, and you can edit it and submit it again. Treat a published chapter as something you update rather than something you pull.

## Moderation after publication

Approval does not close the file. [CR-V.1](/en/publishing/content-rules/#cr-v-1) keeps the door open to looking at published content again if a violation is discovered or reported.

Readers file reports from the reader app, not from the editor. A report names one of seven reasons (explicit content, hate speech, extreme gore, illegal content, misclassified, spam, other), can carry up to 1000 characters in the reader's own words, and is filed against the story rather than a chapter. Nothing tells you that a report exists.

A moderator then closes it one of two ways, **Mark resolved** or **Not relevant**, with an optional internal note that other moderators can read. That is the whole of what the moderation screen does today. The wider set of responses in [CR-VI.1](/en/publishing/content-rules/#cr-vi-1) and [CR-VIII.1](/en/publishing/content-rules/#cr-viii-1), from a required rating correction to hiding a story or restricting an account, is what the rules reserve rather than a button in the app.

One flag does get set automatically. Deleting your author account delists your stories: they leave the storefront, and readers who already own a chapter keep their download access.

## Related

- [Story lifecycle](/en/getting-started/story-lifecycle/)
- [Review process](/en/publishing/review-process/)
- [Variables](/en/story-editor/variables/)
- [Age recommendation](/en/publishing/age-ratings/)
