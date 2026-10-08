---
title: Working with review feedback
description: Reading the notes a reviewer left, clearing the blocking ones, and getting the chapter approved.
helpKey: publishing.review-feedback
status: published
sidebar:
  order: 9
---

Review feedback is a set of notes pinned to your chapter. Each note is attached to a node, often to one component in it. Reviewers use notes to say what must change before approval.

Readers never see review notes.

## Feedback locations

You can find the notes in three places.

- **The status bar.** Once there are notes, an icon appears. It shows how many are open, with a dot while any are unread. Click it to open the list, grouped by node. Each group has a **Go to node** link.
- **The Notes tab.** Notes on a selected node are also on the **Notes** tab of the properties panel.
- **The story page.** Each chapter row shows how many reviewer notes are unresolved. Tester notes are not counted. Before you submit, also check the list for tester notes, because an open High note from a tester blocks approval too. If any High note is open, whoever wrote it, the tooltip on the count changes to *High-priority reviewer notes must be resolved before this chapter can be approved*.

If you delete the node or component a note points to, the note stays. It moves to **Unlinked notes**, tagged "Removed node" or "Chapter-level". The hint there says it points to content that no longer exists in the graph.

You can write your own notes next to the reviewer's. A note can hold up to 2000 characters. Formatting counts toward that limit.

## The rejection email

A reviewer cannot send a chapter back until it has at least one note that is not a tester's. Every decision sends you one email, in Czech and English. The rejection email contains:

- up to five of the reviewer's notes, oldest first, without formatting
- the total number of notes, and how many are not shown
- the date of the review
- a link back to the chapter in the editor

The email never quotes tester notes. It goes to the address of the account that owns the story's author profile. If there is no address, nothing is sent. The notes wait for you in the editor.

## Priority and approval

Every note has a priority: **High**, **Normal** or **Low**. High and Low get a badge in the list. Normal is the default and has no badge.

**High priority blocks approval.** The chapter cannot be approved while one High note is unresolved. The reviewer's decision dialog says so: "Resolve 5 high-priority note(s) before approving." Normal and Low do not block approval.

The rule counts every open High note, whoever wrote it. A High note from your own tester blocks approval just like a reviewer's.

The label on a note shows where it came from. **Tester** marks a contributor's note and shows the test-package version it was written against. **Reviewer** covers all the rest, including your own notes.

## Working with a note

On your own chapter, you can mark a note complete, reopen it, change its priority or delete it, in any chapter status. A reviewer can edit only their own notes, and only while they hold the chapter.

To clear a blocking note, do one of these:

- resolve it
- lower its priority below High
- delete it

The chapter then goes back in the queue, and a reviewer reads it again.

## Notes from your testers

Your [contributors](/en/getting-started/testing-and-contributors/) can write notes only while the chapter is in Testing or under review. Their notes appear in the same list, labelled **Tester**.

You can change the priority of any note on your own chapter. If you disagree with a tester note, lower it below High. It then stops blocking approval.

## After a rejection

1. Read every note. The notes themselves are the decision. Several notes can describe one problem.
2. Fix the problem, then retest the branches you changed. See [Testing](/en/best-practices/testing/).
3. Mark the high-priority notes resolved.
4. Submit again.
   - A chapter that was never live comes back as a draft. The publish dialog opens on the choice between a test build and review.
   - A chapter that was live stays in **Published · revising**. See [Republishing](/en/getting-started/publishing/#republishing).

If a note cites a Content Rule by its code, such as CR-II.2, the reviewer judged the chapter by that rule. Find it under the same code in the [Content Rules](/en/publishing/content-rules/).

## Disputing a decision

TalePort support handles appeals. Write to them. Name the story and the chapter, and say why the decision should be reconsidered. See [CR-VII.1](/en/publishing/content-rules/#cr-vii-1). If you resubmit unchanged, the chapter goes back to the same reviewer.

## Related

- [Review process](/en/publishing/review-process/)
- [Reasons for rejection](/en/publishing/reasons-for-rejection/)
- [Testing and contributors](/en/getting-started/testing-and-contributors/)
