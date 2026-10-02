---
title: Story lifecycle
description: Every state a chapter can be in, and what you can do in each.
helpKey: getting-started.story-lifecycle
status: published
sidebar:
  order: 3
---

Every chapter carries one of six statuses, and the status decides three things: whether you can edit the chapter, whether readers can download it, and whether a reviewer is holding it. A chapter sits in exactly one status at a time, and you move it by submitting it, test-building it or withdrawing it. Say chapter 2, *The Flooded Mine*, is **Published** and you spot that the foreman uses the wrong name in the node *Lantern goes out*. You fix the line, press **Republish**, and readers keep the approved version until the reviewer signs off on the new one.

The story has no status of its own. It counts as published once any chapter is live, as in review while a reviewer holds one, and as in testing while one is being test-built.

## The statuses

The names in the first column are the labels the chapter list puts on a chapter.

| Status | Who holds it | Readers | What you can edit |
| --- | --- | --- | --- |
| **Draft** | You | Nothing | Everything |
| **Testing** | You, with contributors reading a test build | Contributors only | Everything |
| **In review** | A reviewer | Nothing | Nothing in the graph |
| **Published** | Nobody | The approved version | Content, not the graph |
| **In review**, on a chapter that is already published | A reviewer | The approved version | Nothing in the graph |
| **Published · revising** | You | The approved version | Content, not the graph |

A live chapter you have resubmitted is labelled **In review** and coloured exactly like a first submission, so neither the label nor the colour tells you whether readers still have it. The Dashboard does. Its **Published** tab lists every live chapter and its **In Review** tab every chapter with a reviewer, so a chapter sitting in both is live with a revision in the queue.

Contributors are the exception to the Readers column. A team member can open any chapter of yours that is not a draft.

## Content, but not the graph

Once a chapter is live, its structure is frozen. Adding, deleting or re-linking nodes is refused, and so is grouping them. The components already in the graph stay open to you: edit their text, swap an image, republish.

The freeze reaches further than the graph. Every variable, character and global event a live chapter uses is locked too, and stays locked until no live chapter uses it any more. Adding a new one is never blocked, and the editor says so at the lock: "Locked by a published story. You can add a new one instead." Branching you thought of after publishing goes into the next chapter.

## Getting a chapter published

![Draft branches to Testing and to In review, Testing also leads to In review, and a review either approves the chapter to Published or rejects it back to Draft.](/diagrams/chapter-first-publish.svg)

Testing is optional, and you can only enter it from Draft or from Testing itself when you rebuild. A chapter that is already live is refused: once readers have it, updates go through review. A chapter in Testing stays fully editable, and your testers see nothing new until you build the package again.

## Updating a published chapter

![Published goes to In review when you resubmit. An approval returns it to Published; a rejection moves it to Published, revising, from where you resubmit.](/diagrams/chapter-update.svg)

Note the direction: a published chapter goes **straight back into review** when you resubmit it. **Published · revising** is not a step on the way there. It is where a reviewer puts the chapter when they send it back to you.

Readers keep the approved version the whole time. Submitting builds a new package that waits in review; an approval releases it and retires the one before it. Cancel the review and the waiting version is discarded while the published one stays live. Publishing a fix never takes the chapter away from readers.

## Rejection

A rejection comes back with the reviewer's feedback attached: a written summary, notes pinned to specific nodes or components, or both. A reviewer cannot reject a chapter without leaving at least a summary or one note of their own. The same thing arrives by e-mail, with the summary and the notes.

Where the chapter lands depends on whether it was already live:

- A chapter that had never been published returns as an editable **Draft**.
- A chapter that is live returns as **Published · revising**. Readers still have it and the graph is still frozen, so you are fixing content and resubmitting.

Either way it turns up on the Dashboard under **Needs Attention**, with the reviewer's feedback one click away.

Notes marked **High** priority block approval, and you are the one who clears them: open **Notes** in the editor and use **Mark as complete** on each. Ordinary notes are advice, and you can disagree with them.

## Ways back that are yours

**Withdraw from review** pulls the chapter out of the queue without waiting for a rejection you can already see coming. A first submission goes back to Draft, a live chapter back to Published, unchanged. It sits in three places: the chapter list, the dropdown on the editor's publish button, and the Dashboard's **In Review** tab.

**Remove testing** returns a chapter in testing to Draft and deletes the test package. Your story content is kept. This one is not in the chapter list. Open the publish dialog, choose **Test with contributors first**, and the button is on that panel.

Unpublishing a live chapter is not something your editor offers; TalePort handles that. Deleting the chapter is offered, and readers end up in the same place, because the delete takes all of the chapter's packages with it. Delete is refused only on a chapter under review and on a story's last remaining chapter, so a published chapter goes without a word about the readers who lose it. An undo in the editor brings it back while the editor is still open. Plan around it: a live chapter is meant to be updated through review, not pulled.

## Related

- [Publishing](/en/getting-started/publishing/)
- [Review process](/en/publishing/review-process/)
- [Reasons for rejection](/en/publishing/reasons-for-rejection/)
- [Testing and contributors](/en/getting-started/testing-and-contributors/)
