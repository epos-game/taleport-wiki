---
title: Publishing
description: The publish dialog step by step, and what happens after you submit.
helpKey: getting-started.publishing
status: published
sidebar:
  order: 5
---

Publishing sends a chapter to a TalePort reviewer, not to readers. The publish dialog shows what is missing, what the chapter will cost and when readers can get it. You can keep working in the meantime.

## Submission requirements

The dialog opens on the **Validation** step. It has two lists, **Ready** and **Needs attention**. These items stop you from submitting:

- **Your author profile:** a display name, a bio and an avatar.
- **The story:** a title, a description, a cover image, a genre and at least one tag.
- **This chapter:** a description, a graph with no errors, and at least one reachable ending marked **End of chapter**.
- **A measurable path:** TalePort takes the longest route a reader can take. The check fails if that route takes zero minutes, or if the chapter's total duration is shorter than the route. The checklist calls this item **Story graph has playable content**.
- **Earlier chapters:** each must be live or in review. A chapter you only test-built doesn't count. The order rules are in [Story structure and chapters](/en/getting-started/story-structure-and-chapters/).

[Publishing requirements](/en/publishing/publishing-requirements/) explains what each row checks and which button it offers.

You set the age recommendation and the human-authorship confirmation later, on the **Classification** step.

:::caution[Mark the End of chapter]
An End node without this mark only closes a branch. If no reachable ending has the mark, readers can't finish the chapter and the story can't continue to the next one. You turn the mark on in the End node. See [End nodes](/en/story-editor/end-nodes/).
:::

**Billing and payout information** is on the same checklist. It blocks a **paid** chapter only, and a free chapter can be submitted without it. While this item is incomplete, it stays under **Needs attention** and the headings of the later steps are greyed out. Use **Next** to get to the summary.

## Publishing dialog

For a chapter in Draft or Testing, the dialog first asks what you want:

- build a private test package for your contributors, or
- go to review.

See [Testing and contributors](/en/getting-started/testing-and-contributors/). A live chapter skips this question, because you can only test before release.

Going to review has seven steps:

1. **Validation**
2. **Metadata**
3. **Classification**
4. **Pricing**
5. **Early access**
6. **Contributors**
7. **Review**: the summary, with the **Publish** button

**Next** is greyed out on **Validation** until you fix everything that blocks you:

- a gap in your profile
- an error in the graph
- a missing **End of chapter**
- a chapter with no playable content
- an earlier chapter that isn't live or in review

The tooltip says "Resolve the blocking issues listed above before continuing." You fill in the rest on later steps. Once validation reports the chapter ready, every step becomes clickable, so you can jump straight to the summary.

Two steps save to your story before you submit:

- **Next** on **Metadata** saves the story title, description, genre and tags, and this chapter's title and description.
- **Next** on **Classification** saves the age recommendation, the content tags and the AI declarations.

If you close the dialog without submitting, these changes stay.

## Classification

This step sets properties of the **story**, not of this chapter, so you answer once for the whole story.

- **Age recommendation:** 7+, 12+, 16+ or 18+. See [Age recommendation](/en/publishing/age-ratings/).
- **Content tags** (optional): violence, blood, profanity, horror, sexuality, sensitive topics. See [Content labels](/en/publishing/content-labels/).
- **AI-generated content:** declare it separately for images, music, speech and video. You can only mark the kinds of media your story contains. The other kinds are greyed out with "Your story doesn't contain this kind of media." [CR-III.2](/en/publishing/content-rules/#cr-iii-2) requires this declaration, and a false one is itself a violation ([CR-III.4](/en/publishing/content-rules/#cr-iii-4)).
- **Human authorship:** confirm that a human wrote the text and AI didn't generate it. You can't submit without it.

:::caution[AI toggles start on]
The toggles for images, music and speech start **on** for the media your story contains. If you never open the classification, the story declares all of it as AI-generated. Switching one off declares that a human made that media, which also raises the recommended price.
:::

Two settings lock once any chapter of the story is live:

- You can raise the age recommendation but not lower it.
- You can add content tags but not remove existing ones.

## Pricing

A chapter is free or paid. See [Free and paid content](/en/monetization/free-and-paid-content/).

You can charge for a chapter if both of these are true:

- You're a **Qualified author** or an active partner.
- Your billing and payout details are complete.

You become qualified automatically after you publish one approved **free** chapter with at least 20 minutes of unique content. Several shorter chapters don't add up. You can also ask for it by email at support@epos.games. Until you qualify, the pricing step tells you what is missing and keeps the chapter free. See [Monetization requirements](/en/monetization/requirements/#becoming-qualified) for the threshold and how it is measured.

For a paid chapter, TalePort works out a recommended price from the chapter's content and offers a range:

- The lowest price is half the recommendation, but never less than 9 EPS, the minimum for any paid chapter.
- The highest price is 299 EPS.
- Above a slider you'll find presets for **50%**, **Recommended** and **Max**. You can also type an amount.

Prices are in EPS, the currency inside the app. 1 EPS = 1 CZK, roughly €0.04. See [Pricing](/en/monetization/pricing/).

When you resubmit, TalePort clears a price that a reviewer adjusted and uses your figure again.

## Early access

Backers at the Visionary tier and above can read a chapter 7 days before everyone else. On the **Early access** step you set the date when that window opens.

- **You pick a date:** early-access readers get the chapter from that date. Everyone else gets it 7 days later.
- **You pick nothing:** the date is the moment of approval, again with a 7-day gap.
- A date you pick must be at least 14 days ahead, because a review can take that long.

You become a backer by redeeming a crowdfunding pledge code. Only the Visionary tier and above has early access. A Founder-tier backer waits 7 days like everyone else.

You can set the date only while the chapter isn't live. A live chapter keeps the dates it was released with.

## Contributors

On the **Contributors** step you decide who stays on the story after this version is published.

- Anyone you unselect loses access to future versions. Feedback they already left stays.
- You can't unselect the creator.
- People who are credited without an Epos account are shown, but you can't select them.

## After submission

After you press **Publish**, the chapter enters the review queue. You can close the dialog. The button shows **Queued…**, then **Processing…**, and a message tells you when the build has finished or failed.

- Only one publish can run at a time per story. If you start a second one, TalePort asks you to wait until the first one is done.
- A failed build returns the chapter to its previous status, flagged as having unpublished changes. If your content caused the failure (missing media included), fix it and submit again. If the cause was temporary, TalePort tries again by itself.

A build can also fail because your story points at media files that no longer exist. A dialog then lists them by where they are used (**In a node**, **Story cover image**, **Character avatar** or **Global event**). At the bottom are **Close** and **Publish without these files**. This happens only when you submit for review, because test builds skip missing media. [Non-blocking items](/en/publishing/publishing-requirements/#non-blocking-items) explains what each row offers.

While the chapter is in review, the editor opens read-only. **Withdraw from review** takes the chapter back at once:

- A first submission goes back to Draft.
- A chapter that was already live goes back to Published.

You find the button in the chapter list, in the menu on the publish button, and on the **In Review** tab of your **Dashboard**.

The decision also reaches you by email. An approval includes both availability dates, and a rejection includes the reviewer's notes. See [Review process](/en/publishing/review-process/) for what the reviewer checks and how long it takes.

## Republishing

The button reads **Republish** once you've submitted the chapter and it hasn't returned to Draft. If you withdraw a first submission, or it is rejected before the chapter was ever live, the chapter returns to Draft and the button reads **Publish** again.

The button is enabled only when there is something new to send. If it is greyed out, the tooltip tells you why:

- "No changes to republish yet" means you already submitted your last change.
- "Add at least one node before submitting for review" means the chapter's graph is empty.

## Related

- [Preparing content for review](/en/best-practices/preparing-for-review/)
- [Publishing requirements](/en/publishing/publishing-requirements/)
- [Review process](/en/publishing/review-process/)
- [Story lifecycle](/en/getting-started/story-lifecycle/)
- [Content Rules](/en/publishing/content-rules/)
- [Story guidelines](/en/publishing/story-guidelines/)
