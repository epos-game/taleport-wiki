---
title: Review process
description: What happens between submitting a chapter and readers seeing it.
helpKey: publishing.review
status: published
sidebar:
  order: 8
---

Review is the gate between a finished chapter and your readers. A reviewer opens your chapter in the editor, reads it against the [Content Rules](/en/publishing/content-rules/), and either approves it or sends it back with notes pinned to the nodes they belong to. Submitting starts that and nothing else: press **Submit for review** on chapter 3 of *The Mill at World's End* and the chapter goes read-only, a package starts building in the background, and what comes back is either a published chapter or a high-priority note on your **Ford crossing** node saying the fight in it needs a 16+ recommendation.

## What submitting does

Submitting queues work rather than doing it. The publish button turns into **Queued…**, then **Processing…**, while the package for your whole published story is rebuilt. Only once that finishes does the chapter show up in a reviewer's list. If the build fails, you get the chapter back in the state it was in, with "Publishing failed and the chapter was returned to you".

One publish per story at a time. A second attempt while one is still running is refused: "This story is already being published. Wait for the current publish to finish before starting another one."

What a reviewer then sees is not a first-in-first-out queue. The 200 oldest submissions are loaded, then grouped by story: stories in alphabetical order, chapters inside each story in their own order. Submission time decides which chapters make the cut, not who gets read first.

There is no claim button. A reviewer claims your chapter by opening it in review mode, and from then on nobody else can decide it. The chapter stays on every reviewer's list, but the **Review** button disappears for them. Admins are the exception and can take a claim over.

Once a chapter has been submitted even once, the button reads **Republish**, and it stays disabled until the editor has unpublished changes to send ("No changes to republish yet"). Readers keep the live version the whole time.

## What a reviewer checks

- **Compliance with the [Content Rules](/en/publishing/content-rules/)**: every article.
- The [age recommendation](/en/publishing/age-ratings/) and [content tags](/en/publishing/content-labels/) against the content actually present.
- The AI declaration. See [CR-III.2](/en/publishing/content-rules/#cr-iii-2), and [CR-III.1](/en/publishing/content-rules/#cr-iii-1) for the text itself.
- Rights to media. See [CR-II](/en/publishing/content-rules/#cr-ii). Evidence of a licence may be requested.
- Completeness and quality against the [Story guidelines](/en/publishing/story-guidelines/). Graph errors never reach a reviewer, because they block the submit. What does reach them is everything the editor only warned about: a node nothing links to, a node with no content on it, a dialogue line with no character, a backdrop that has no image of its own and inherits none.

This list is [CR-V.1](/en/publishing/content-rules/#cr-v-1) in practice.

## While a chapter is in review

The graph and its content are read-only, for you and for everyone else. Notes are not. On your own chapter you can still write a note, resolve one, change its priority or delete it, at any status.

**Withdraw from review** is yours, from the editor header, the chapters dialog or your dashboard. A first submission goes back to Draft. A live chapter goes back to Published, unchanged and still with readers, even though the confirmation asks about returning it to draft either way. The reviewer's claim is cleared.

If the chapter is already published, readers keep reading the live version throughout. See [Story lifecycle](/en/getting-started/story-lifecycle/).

## Chapters are reviewed in order

The released chapters of a story always form an unbroken run from the first one, and two separate gates keep it that way:

- You can submit a chapter only once every chapter before it is live or under review.
- A reviewer can approve it only once every chapter before it is published and not itself under review. A predecessor you republished and left waiting is enough to block the one behind it.

So a chapter can be read, found fine and still sit there. The queue names what it waits on: "Waiting for chapter 2 'Ford crossing'".

## The outcomes

**Approved.** The chapter becomes published, and every character, variable and global event it uses is locked. When readers get it is a separate question, below.

**Changes requested.** At least one reviewer note is required: **Reject** stays disabled until one exists, and no written summary is sent alongside the notes, so the notes are the whole verdict. Where the chapter lands depends on whether it was live. A first submission returns as an editable draft; a live chapter returns as published and in revision, still with readers and still structurally frozen. See [Working with review feedback](/en/publishing/review-feedback/).

Two more things can happen that are not a decision on your writing:

- **The review is cancelled.** The version waiting for review is discarded and the published version stays live, exactly as it was.
- **The price is overridden.** While a paid chapter is under review, TalePort can replace its price. That can only happen during review, and submitting the chapter again clears it.

No chapter is approved while an unresolved **high-priority** note sits on it. Who wrote it makes no difference, so a note from one of your own testers blocks approval exactly as a reviewer's does. Resolve it, drop its priority, or delete it.

## When readers actually get it

Approval always stamps an early-access date on the chapter: the one you chose in the **Early access** step, or the moment of approval if you chose nothing. From that date, backers can read the chapter. Every other reader gets it **7 days later**.

| What you did | Backers get it | Everyone else gets it |
| --- | --- | --- |
| Chose no date | On approval | 7 days after approval |
| Chose a date, on a chapter not yet live | On that date | 7 days after that date |

The row that surprises people is the first one. There is no way to have general readers get a chapter the instant it is approved. Admins, reviewers and partners sit outside the table: they read an approved chapter immediately, whatever its date.

The **14 days** in the Early access step are not a promise about turnaround. That number is the floor on a scheduled date, so the calendar leaves room for a review to happen. A chapter that is already live also keeps the date from its first release: the step still offers the calendar, but republishing cannot move the date.

## Approval is not permanent

A chapter can be looked at again if a violation is discovered or reported. See [CR-V.1](/en/publishing/content-rules/#cr-v-1) and [CR-VI.1](/en/publishing/content-rules/#cr-vi-1), and [Published content restrictions](/en/publishing/published-content-restrictions/) for what TalePort can do about it.

## Disagreeing with a decision

There is no appeal button in the app. Write to TalePort support, identify the story or chapter and explain why the decision should be reconsidered. That is [CR-VII.1](/en/publishing/content-rules/#cr-vii-1), and appealing beats resubmitting the same chapter unchanged.

## Related

- [Working with review feedback](/en/publishing/review-feedback/)
- [Reasons for rejection](/en/publishing/reasons-for-rejection/)
- [Preparing content for review](/en/best-practices/preparing-for-review/)
- [Story lifecycle](/en/getting-started/story-lifecycle/)
