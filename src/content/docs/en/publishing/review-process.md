---
title: Review process
description: What happens between submitting a chapter and readers seeing it.
helpKey: publishing.review
status: published
sidebar:
  order: 8
---

A reviewer opens your chapter in the editor and checks it against the [Content Rules](/en/publishing/content-rules/). They approve it or send it back with notes pinned to nodes.

Pressing **Publish** sends the chapter to review and locks it for editing. Readers cannot see it until it is approved.

## Submission processing

1. Your submission goes into a queue. The publish button changes to **Queued…** and then **Processing…**.
2. The chapter appears in the reviewers' list when processing finishes.
3. A reviewer takes it by opening it in review mode.

Only one publish per story can run at a time. A second attempt is refused: "This story is already being published. Wait for the current publish to finish before starting another one."

If processing fails, the chapter returns to its previous status with the message "Publishing failed and the chapter was returned to you. Please try again."

One reviewer decides a chapter. While they hold it, nobody else can decide it. An admin can take it over. After a rejection, the chapter stays with the same reviewer and returns to them after you fix it.

While the chapter is in review, live or live and revising, the publish button reads **Republish**. See [Republishing](/en/getting-started/publishing/#republishing).

## Review scope

A reviewer reads the whole chapter. Besides the Content Rules, they judge whether it is finished enough for readers, using the [Story guidelines](/en/publishing/story-guidelines/).

Graph errors block the submit, so reviewers never see them. They do see the editor's warnings.

## Chapter status during review

If you open the chapter while it waits, a banner above the canvas reads **Awaiting review**. The status bar shows the same label. The chapter is read-only. You can edit again after you withdraw it.

- Nobody can edit the graph or its content.
- Notes can still change. On your own chapter, you can write, resolve, delete or change the priority of a note at any status.
- For a published chapter, readers keep reading the live version the whole time. See [Story lifecycle](/en/getting-started/story-lifecycle/).

To withdraw, use **Withdraw from review** in the editor header, the chapters dialog or your dashboard.

- A first submission goes back to Draft.
- A live chapter goes back to Published. It stays unchanged and available to readers.

Either way, the reviewer no longer holds the chapter.

## Review order

Chapters go live in order, with no gaps, starting from the first one. Two rules apply:

- You can submit a chapter only when every chapter before it is live or under review.
- A reviewer can approve it only when every chapter before it is published and not under review. If you republished an earlier chapter and it is waiting, the chapters after it are blocked.

:::caution[A chapter can wait]
So a chapter can pass review and still wait. The queue shows which chapter it waits on, by number and title.
:::

## Review outcomes

**Approved.** The chapter becomes published. The characters, variables and global events it uses are locked. The next section explains when readers get it.

**Changes requested.** The chapter needs at least one note that is not from a tester. **Reject** stays disabled until one exists. Where the chapter lands depends on whether it was live. See [Story lifecycle](/en/getting-started/story-lifecycle/#rejection) for both cases. See [Working with review feedback](/en/publishing/review-feedback/) for what to do next.

Two other things can happen:

- **The review is cancelled.** The version waiting for review is discarded. The published version stays live, unchanged.
- **The price is overridden.** While a paid chapter is under review, TalePort can replace its price. Submitting the chapter again removes the override.

A reviewer cannot approve a chapter with an unresolved **high-priority** note, whoever wrote it. See [Priority and approval](/en/publishing/review-feedback/#priority-and-approval).

## Release to readers

On approval, the chapter gets an early-access date. This is the date from the **Early access** step, or the moment of approval if you chose none. From that date, backers can read the chapter. Everyone else gets it **7 days later**.

A backer is a reader who supported TalePort in the crowdfunding campaign and redeemed their pledge code. Their account has early access to every story on the platform. You cannot change this.

| What you did | Backers get it | Everyone else gets it |
| --- | --- | --- |
| Chose no date | On approval | 7 days after approval |
| Chose a date, on a chapter not yet live | On that date | 7 days after that date |

Admins, reviewers and partners are not in the table. They can read an approved chapter immediately, whatever its date.

The **Early access** step has two numbers:

- **14 days** is where the calendar starts. The earliest date you can pick is 14 days from today. The step says review can take up to 14 days.
- **7 days** is the gap between the early-access date and general release. It is the same whether you picked a date or approval set it. You cannot change it in the dialog.

A live chapter keeps the date from its first release. The step still shows the calendar, but republishing does not move the date.

## The approval email

On approval, you get one email in Czech and English. The subject is the chapter title followed by "je venku · Your chapter is live".

The email gives two dates: when backers get the chapter and when everyone else does. It also has a link to the story in the EPOS app and a QR code with the same link.

If your author profile has no linked account, no email is sent. The editor shows a notice.

## After approval

A chapter can be reviewed again if someone finds or reports a violation. See [CR-V.1](/en/publishing/content-rules/#cr-v-1) and [CR-VI.1](/en/publishing/content-rules/#cr-vi-1). For what TalePort can do, see [Published content restrictions](/en/publishing/published-content-restrictions/).

## Disagreement with a decision

Support handles appeals. If you disagree, contact support, and do not resubmit the same chapter unchanged. See [Disputing a decision](/en/publishing/review-feedback/#disputing-a-decision).

## Related

- [Working with review feedback](/en/publishing/review-feedback/)
- [Reasons for rejection](/en/publishing/reasons-for-rejection/)
- [Preparing content for review](/en/best-practices/preparing-for-review/)
- [Story lifecycle](/en/getting-started/story-lifecycle/)
