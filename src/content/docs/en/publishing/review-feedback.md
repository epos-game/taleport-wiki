---
title: Working with review feedback
description: Reading the notes a reviewer left, clearing the blocking ones, and getting the chapter approved.
helpKey: publishing.review-feedback
status: published
sidebar:
  order: 9
---

Review feedback is a set of notes pinned to your chapter. Each note is anchored to a node, often to one component inside it, and the reviewer uses them to say what has to change before the chapter can be approved. Say the skill check on your Cellar Door node reads a torch variable that nothing ever sets: the reviewer leaves a High note on that node, you open it from the notes icon in the editor, jump to Cellar Door, set the variable in the scene before it and submit again.

## Where the feedback is

The notes live on the chapter. In the editor, an icon appears in the status bar as soon as the chapter has any, shows how many are still open and carries a dot while something is unread. Clicking it opens the whole list, grouped by node, with a **Go to node** link on each group. The notes on a selected node also sit on the **Notes** tab of the properties panel. On the story page, every chapter row shows its count of unresolved reviewer notes.

A note does not vanish when the thing it points at does. If its node or component has been deleted it moves to **Unlinked notes**, tagged "Removed node" or "Chapter-level", under the hint that these notes point to content that no longer exists in the graph.

There is no separate written verdict. The notes are the decision, which is why a chapter cannot be sent back without at least one note from the reviewer. If you were expecting a paragraph summarising the review, the notes are it.

A decision also sends you an email, Czech and English in one message. The rejection email quotes up to five of the reviewer's notes, oldest first and stripped to plain text, gives the total and how many are not shown, dates the review and links back to the chapter in the editor. Tester notes are never quoted, however many there are. If your author profile has no linked account, no email goes out at all and the notes wait for you in the editor.

Review notes never reach readers, because they are left out of the published package. You can write your own alongside the reviewer's. Each note is rich text capped at 2000 stored characters, so the formatting counts against the limit too.

## Priority, and what blocks approval

Every note carries a priority: **High**, **Normal** or **Low**. High and Low get a badge in the list. Normal is the default and shows none.

High priority is blocking. While one High note is unresolved the chapter cannot be approved, and the reviewer's decision dialog spells it out: "Resolve 5 high-priority note(s) before approving." Normal and Low are advice, and you are allowed to disagree with them.

The rule counts every open High note on the chapter, whoever wrote it. A note your own tester set to High blocks approval exactly as a reviewer's does, so read the list before you submit again.

The label on a note says where it came from. **Tester** marks a contributor's note and carries the test-package version it was written against. **Reviewer** covers the rest, including the notes you wrote yourself.

## What you can do with a note

On your own chapter you can mark a note complete, reopen it, change its priority or delete it, whatever status the chapter is in. A reviewer has less room: their own notes only, and only while they hold the chapter.

So a blocking note can be cleared three ways. Resolve it, lower it below High, or delete it.

None of the three is a shortcut. Clearing the block only puts the chapter back in the queue, where a reviewer reads it again. A chapter whose notes were ticked off without being acted on comes back a second time, and a second rejection costs more than one question would have.

## Notes from your testers

Your [contributors](/en/getting-started/testing-and-contributors/) can write notes while the chapter is in Testing or under review, and only then. They appear in the same list, labelled **Tester**.

Since you can reprioritise any note on your own chapter, a tester note you disagree with is not a trap. Read it, decide, and move it down rather than leaving it sitting as a block.

## Working through a rejection

1. **Read every note before changing anything.** Several notes often describe one underlying problem, and fixing that once beats six patches.
2. Fix, then retest the branches you touched. See [Testing](/en/best-practices/testing/).
3. Clear the high-priority notes once you have actually dealt with them.
4. Submit again. A chapter that had never gone out comes back as a draft, and the publish dialog opens on the choice between a test build and review. A chapter that was live sits in **Published · revising** and its button reads **Republish**, disabled with the tooltip "No changes to republish yet" until the editor registers an unpublished change.

If a note cites a Content Rule by its identifier, say CR-II.2, that identifier is the standard being applied; you will find it under the same identifier in the [Content Rules](/en/publishing/content-rules/).

## If you think the decision is wrong

There is no appeal button in the app. Write to TalePort support, name the story and the chapter, and say why the decision should be reconsidered. See [CR-VII.1](/en/publishing/content-rules/#cr-vii-1). Appealing is better than resubmitting the chapter unchanged.

## Related

- [Review process](/en/publishing/review-process/)
- [Reasons for rejection](/en/publishing/reasons-for-rejection/)
- [Testing and contributors](/en/getting-started/testing-and-contributors/)
