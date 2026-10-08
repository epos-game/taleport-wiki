---
title: Preparing content for review
description: What stops a submission, and what a reviewer sends a chapter back for.
helpKey: best-practices.preparing-for-review
status: published
sidebar:
  order: 5
---

The publish dialog opens on **Validation**. **Next** stays disabled until your author profile, your graph and the chapters before this one are in order. The hint on it reads "Resolve the blocking issues listed above before continuing."

## Checklist

TalePort checks the first two groups. A reviewer sends chapters back for the rest. The dialog lists failing rows under **Needs attention** and passing rows under **Ready**.

**Rows that hold you on Validation**

- **Author profile:** display name, bio and avatar. All three are on your author profile.
- **No graph errors:** If the graph has errors, this row becomes one row per error. Each starts with the node's name and has a **Go to node** button.
  - Groups are the exception. Their errors roll up into one entry: *This group contains content with validation issues.* An error inside a group is listed without the node's name, and **Go to node** can't jump to it because the node isn't on the open canvas level. Open the group and read the errors there. See [Testing](/en/best-practices/testing/).
- **Reachable end-of-chapter ending:** At least one ending a reader can reach has **End of chapter** switched on.
  - A new End node arrives with the toggle on.
  - An End node with it off closes the current flow and offers a replay. It doesn't complete the chapter or carry the reader into the next one. See [End nodes](/en/story-editor/end-nodes/).
- **Story graph has playable content:** The longest route through the chapter must measure more than zero minutes. A chapter made only of music and backdrops measures zero. See [Counted content](/en/monetization/requirements/#counted-content).
- **Earlier chapters are ready for review:** Every chapter with a lower number is already live or in review.
  - Approval is stricter than submission. A reviewer can't approve this chapter until every chapter before it is live.
  - You can submit chapter three while chapter two is still with a reviewer, but chapter three has to wait until chapter two is out.

**What you can walk past and fix on the step that owns it**

- **Billing and payout details:** They hold up a paid chapter at **Pricing** and at the submit, never at Validation. A free chapter submits without them.
- **Story and chapter details:** All of these are on **Metadata**: the story title, the story description, the [genre](/en/publishing/genres-and-tags/) (exactly one), at least one tag and the chapter description. The [cover](/en/media/cover-image/) is a tile there, not a field. It reads **Set up the cover** while there is none, and clicking it opens the thumbnail editor.
- **Age recommendation and human-authorship confirmation:** Neither is a row on the checklist. Both are on **Classification**, which has a gate of its own.
  - **Next** stays disabled with the tooltip "Choose an age rating and confirm human authorship before continuing."
  - **Publish** stays disabled while either is missing.
  - [Publishing requirements](/en/publishing/publishing-requirements/) lists the rows and their buttons.

**Warnings, which only the editor shows**

- The editor's **Problems** panel shows warnings; the publish dialog doesn't list them. A chapter with only warnings submits and publishes as it is, and a reviewer reads it the way a reader would. [Story guidelines](/en/publishing/story-guidelines/) tells an error from a warning.
- Check any node where two different backdrops or tracks arrive from the same distance. The channel carries nothing there. See [Media usage](/en/best-practices/media-usage/).

**Classification, which only moves one way**

:::caution[Classification can't go down]
Once any chapter is live, you can raise the age recommendation but never lower it. You can never remove a tag already on the story.
:::

- The age recommendation matches the most extreme content anywhere in the story, not the average.
- Content tags cover everything in the story, **Sensitive topics** included.
- Classification belongs to the story, not to chapter one. Lower options are greyed out with the tooltip "The age recommendation can't be lowered once a chapter is live."
- After publication, a reader can also report the story as **Misclassified**. See [Age recommendation](/en/publishing/age-ratings/) and [Content labels](/en/publishing/content-labels/).

**The AI declaration**

- No story prose, dialogue or choice text was written by generative AI. See [CR-III.1](/en/publishing/content-rules/#cr-iii-1).
- The options under **AI-generated content** match what you made.
  - **AI Image**, **AI Music** and **AI Speech** all start switched on.
  - **AI Video** starts off, and its two rates are the same.

:::caution[Don't skip the AI step]
If you skip the step, you declare handmade artwork, music and voice-over as AI work and get the lower [rate](/en/monetization/pricing/) for them.
:::

- You must make this declaration ([CR-III.2](/en/publishing/content-rules/#cr-iii-2)). A false declaration is itself a violation ([CR-III.4](/en/publishing/content-rules/#cr-iii-4)).

**Rights**

- Every image, track, recording and clip is yours or licensed. See [CR-II.1](/en/publishing/content-rules/#cr-ii-1).
- You can produce the licence if asked. See [CR-II.3](/en/publishing/content-rules/#cr-ii-3).
- Nothing is included just because it was found online. See [CR-II.2](/en/publishing/content-rules/#cr-ii-2).

**Media files**

- You have dealt with the list of missing files, if one appears. See [Non-blocking items](/en/publishing/publishing-requirements/#non-blocking-items).
- Temporary artwork and placeholder audio are replaced. A test build doesn't run the missing-media check, so do this check yourself. A clean test package proves nothing here.

**Reading pass**

- Spelling and grammar are checked.
- Character names are the same throughout.
- No placeholder text is left.
- Nodes a reviewer will need to discuss have names. An unnamed node reads as "Node 14" in the Problems panel, in the publish dialog and in reviewer notes. See [Story structure](/en/best-practices/story-structure/).
- At least one other person has read the chapter. See [Testing](/en/best-practices/testing/).

**Publishing details**

- The chapter is free or paid. To charge, your author stage must be Qualified or Active partner, with complete billing and payout details. See [Monetization requirements](/en/monetization/requirements/).
- If the chapter is paid, the price sits inside the band the Pricing step offers. See [Pricing](/en/monetization/pricing/).
- Early access is scheduled at least 14 days ahead, because review can take that long. Backers read from that date and everyone else 7 days later. See [Early access](/en/getting-started/publishing/#early-access).
- Contributors are credited, and the right people are ticked on the **Contributors** step. The step states: "Unselected contributors lose access to future versions; their past feedback is kept."

## After you submit

While a reviewer holds the chapter, the editor is read-only and the banner reads **Awaiting review**. If you spot a problem, use **Withdraw from review** instead of waiting for a rejection.

- A withdrawn draft comes back fully editable.
- A withdrawn update to a live chapter goes back to **Published**. Its content opens up again, but the graph structure stays locked.

A reviewer can't use **Reject** until the chapter has at least one note that didn't come from a tester, and your own notes count. A chapter you commented on yourself can therefore come back rejected with only your own notes in it.

Notes pin to a node, sometimes to a single component on that node. Someone must resolve a note marked high priority before anyone can approve the chapter. See [Working with review feedback](/en/publishing/review-feedback/).

- A rejected draft comes back as a draft.
- A rejected update to a live chapter comes back as a revision. The published version stays in front of readers while you fix it.

## Related

- [Publishing requirements](/en/publishing/publishing-requirements/)
- [Reasons for rejection](/en/publishing/reasons-for-rejection/)
- [Review process](/en/publishing/review-process/)
- [Testing](/en/best-practices/testing/)
