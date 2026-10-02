---
title: Age recommendation
description: Choosing the right category, what each one allows, and why you can only ever raise it.
helpKey: publishing.age-ratings
status: published
sidebar:
  order: 5
---

The age recommendation is one of four values, **7+**, **12+**, **16+** or **18+**, that you set on the story in the **Classification** step of the publish dialog. It tells a reader what they are walking into, and it decides which readers reach the story at all. Rate for the hardest thing in it: a village mystery that stays gentle until a man bleeds out in the *Mill cellar* node of chapter three is a 16+ story from its first submission, not a 12+ story with one exception. No chapter can be submitted until a rating is chosen.

## The rule that matters most

**Rate for the most extreme content anywhere in the story, not for the average.** One scene of realistic violence in an otherwise gentle story sets the rating for the whole thing. Because the rating belongs to the story and not to the chapter, it also covers chapters you have not written yet. A series that turns dark in chapter four is a story rated for chapter four.

A rating never makes prohibited content acceptable. An 18+ recommendation does not permit anything in [Article I](/en/publishing/content-rules/#cr-i).

## You can raise it later, never lower it

Once any chapter of the story is live, the rating moves one way only. Every chip below the stored value is disabled and the tooltip says why: *The age recommendation can't be lowered once a chapter is live.* Raising it is allowed at any time. If a lower value reaches the server anyway, it comes back as *The age recommendation cannot be lowered once a chapter is live.*

The last moment you can come down is just before your first chapter goes live. A reader who bought a chapter on the strength of a 12+ badge should not find the same story reclassified under them, which is why there is no way back.

![the Age recommendation row in the Classification step of the publish dialog, with the four age chips and the note under the selected one](/screens/en/publishing/classification-age-row.png)

## Where it is checked, and when it is saved

The Validation checklist has no row for the age recommendation. The gate is the Classification step itself: **Next** stays disabled until you pick a rating and tick the human-authorship box, and the tooltip reads *Choose an age rating and confirm human authorship before continuing.* The server checks again when you submit, and refuses with *An age recommendation is required before publishing.*

Next also saves. It writes the rating, the content tags and the AI declaration to the story straight away, so cancelling the dialog afterwards takes none of it back. While no chapter is live you can reopen the step and pick differently. Whatever is stored the moment your first chapter goes live becomes the floor.

## The categories

The app shows a one-line summary under the chip you pick. The operative definitions are the longer ones in [Article IV](/en/publishing/content-rules/#cr-iv) of the Content Rules.

### 7+, everyone

In the app: *Suitable for everyone, including young readers.*

[CR-IV.1](/en/publishing/content-rules/#cr-iv-1). Mild fantasy or cartoon violence, mild peril, themes suitable for children, innocent affection or romance. **Not**: strong language, realistic violence, sexual themes, drug use.

### 12+, mild themes

In the app: *Mild themes, brief violence, or fantasy peril.*

[CR-IV.2](/en/publishing/content-rules/#cr-iv-2). Mild action or combat, moderate fantasy violence, tension and peril, occasional mild profanity, romance and kissing, mild references to mature themes. **Not**: explicit sexual content, strong graphic violence, adults-only content.

### 16+, mature themes

In the app: *Strong language, violence, or mature themes.*

[CR-IV.3](/en/publishing/content-rules/#cr-iv-3). Strong language, realistic violence, horror, alcohol or drug themes, grief, addiction, mature relationships, non-explicit sexual references. **Not**: pornographic or explicit sexual content.

### 18+, adults only

In the app: *Adult content only.*

[CR-IV.4](/en/publishing/content-rules/#cr-iv-4). Strong violence, disturbing or psychologically intense themes, strong language, drug or alcohol themes, nudity, sexual themes, non-explicit depictions of consensual sexual activity between adults. **Not**: pornographic content, which stays prohibited at every rating.

## Who can see what

A reader who is not on your team reaches only stories at or below their own age band, worked out from the birthday on their account. The check applies to browsing and to opening a story directly.

| Reader | Highest rating they can see |
| --- | --- |
| Under 12 | 7+ |
| 12 to 15 | 12+ |
| 16 to 17 | 16+ |
| 18 and over | 18+ |
| No birthday on the account | 7+ |

The table is the whole rule below 18. Above it the check stops: a reader in the 18+ band sees every rating, including a story whose rating is not set yet, and so do admins and reviewers. Everyone below that band sees nothing of an unrated story. The public story listing the API serves outside the app sits outside this and is not filtered by age band.

The narrowing is sharper than it looks. A reader who never filled in a birthday sees 7+ stories and nothing else.

## When you are unsure

Pick the higher one. Correct classification is one of the things a review covers under [CR-V.1](/en/publishing/content-rules/#cr-v-1), so a reviewer who reads the rating as too low sends the chapter back with notes, and that costs you a review cycle. After publication the only lever a reader has is a report: one of the seven reasons is **Misclassified**. A moderator then closes the report as resolved or not relevant with an internal note, and you are not told it was filed. What happens next to the story is governed by [CR-VI.1](/en/publishing/content-rules/#cr-vi-1), which lets TalePort require a corrected rating, hide the content or restrict the account. None of that is a button in the app.

Over-rating costs you readers and, once a chapter is live, cannot be undone. That is a reason to decide carefully before your first submission, not a reason to guess low.

## Related

- [Content labels](/en/publishing/content-labels/)
- [Content Rules, Article IV](/en/publishing/content-rules/#cr-iv)
- [Story metadata](/en/publishing/story-metadata/)
- [Publishing requirements](/en/publishing/publishing-requirements/)
