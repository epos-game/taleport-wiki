---
title: Preparing content for review
description: What actually stops a submission, and the ten-minute check that avoids most rejections.
helpKey: best-practices.preparing-for-review
status: published
sidebar:
  order: 5
---

The publish dialog opens on a step called **Validation**, and it is a gate rather than a summary. Until your author profile, your graph and the chapters before this one are in order, Next stays dead and its tooltip reads "Resolve the blocking issues listed above before continuing." Clearing the gate yourself first takes about ten minutes and saves a round trip. Chapter three of *The Ferryman's Price* has four endings; switch **End of chapter** off on all four and the row *Reachable end-of-chapter ending* fails, and nothing else in the dialog matters until one of them is back on.

The first half of this page is what the software refuses. The second half is what a reviewer sends back.

## What actually stops a submission

The checklist sorts its rows into **Ready** and **Needs attention**. These rows can only be cleared outside the dialog, so they hold you on the step:

- [ ] Author display name, author bio, author avatar, all three on your author profile
- [ ] No graph errors
- [ ] Reachable end-of-chapter ending
- [ ] Story graph has playable content
- [ ] Earlier chapters are ready for review

*Story graph has playable content* means the longest route through the chapter measures more than zero minutes. Text counts at 1000 characters a minute; voice-over and cutscene video count on nodes that carry no text; looping music, ambient sound and background video never count at all. A chapter made of score and backdrops measures zero and is refused.

*Earlier chapters are ready for review* means every chapter with a lower sequence number is already live or already in review. Releases stay a contiguous run, so chapter four cannot go out while chapter two is still a draft.

The remaining rows you can walk past and fix on the step that owns them. **Metadata** holds the story title, the story description, the [cover image](/en/media/cover-image/), the [genre](/en/publishing/genres-and-tags/), at least one tag and the chapter description. **Classification** holds the [age recommendation](/en/publishing/age-ratings/) and the human-authorship confirmation, and it has a gate of its own: "Choose an age rating and confirm human authorship before continuing." Nothing is waived by passing through. **Submit for review** stays disabled while any of it is missing.

A story carries exactly one genre, a single choice rather than a list. Tags are the plural half of that pair.

One row is not a blocker for everyone. **Billing and payout information** sits on the checklist with the rest, but it only stops a **paid** submission. A free chapter goes without it.

## Graph errors, and the warnings nobody will show you

When the graph has errors, the dialog replaces its single *No graph errors* row with one row per error, each prefixed with the node it sits on and carrying a **Go to node** button. Nodes nested inside a group are the exception: the dialog can only name nodes in the graph level you have open, so an error inside a group arrives as a bare message with nothing to click.

The usual suspects: an output port with no link, a choice with no options or with an option whose text is blank, a switch with no conditions, a skill check with no stat, an End node nothing links into, a Start node something links into.

The **Default** output of a switch is the one people miss. It is always there, everything no condition matched leaves through it, and it is an output port like any other, so it has to be connected. There is no fallback case to add.

Warnings are a different matter, because **the publish dialog does not show warnings at all**. An unreachable node, a text component with no text, a dialogue line with no character, a node with no content, a switch condition with no requirements, a declared backdrop that resolves to nothing, a cutscene with no video: all warnings. They live in the editor's **Problems** panel, which revalidates 750 ms after your last change, and a chapter whose only problems are warnings submits and publishes exactly as it is.

A group node hides its contents from that panel too. All it shows is a rollup: "This group contains content with validation issues." Open the group to read the findings.

- [ ] No errors anywhere in the graph, groups opened and checked
- [ ] Problems panel read in the editor, and every warning on it is deliberate
- [ ] Nodes where two different backdrops or tracks arrive from the same distance checked by hand, because that conflict silences the channel and raises no warning of any kind

## Reaching the end

- [ ] At least one ending a reader can actually get to has **End of chapter** switched on

An End node with the toggle off closes the current flow and offers a replay. It does not complete the chapter. If every reachable ending is one of those, a reader can finish a path but never the chapter, and nothing carries them into the next one. The check flattens groups in, so an ending inside a group counts. A freshly created End node arrives with the toggle already on, which is why this usually bites only after you have been switching it off on purpose. See [End nodes](/en/story-editor/end-nodes/).

## Classification, which only moves one way

- [ ] The age recommendation matches the most extreme content anywhere in the story, not the average
- [ ] Content tags cover what is actually there, **Sensitive topics** included

Get these right the first time. Once any chapter of the story is live, the age recommendation can be raised but never lowered, and an existing content tag can never be removed. The locked chips say so on hover: "The age recommendation can't be lowered once a chapter is live." Adding a tag is always allowed.

Classification belongs to the **story**, not the chapter, even though you reach it from a chapter. Rate for the series you are planning, not for chapter one. See [Age recommendation](/en/publishing/age-ratings/) and [Content labels](/en/publishing/content-labels/).

Readers can report a published story as **Misclassified**, and that report is the enforcement path behind getting it wrong.

## AI declaration

- [ ] No story prose, dialogue or choice text was written by generative AI. See [CR-III.1](/en/publishing/content-rules/#cr-iii-1).
- [ ] The chips under **AI-generated content** match what you actually made

The failure mode here is the opposite of what people expect. **AI Image**, **AI Music** and **AI Speech** all start switched on, so skipping the step does not mean declaring nothing. It means being paid the AI [rate](/en/monetization/pricing/) for artwork, score and voice-over you made by hand, and the gap is not small: the human rate is double the AI rate for images and for voice-over, and more than double for music. **AI Video** is the one exception. It starts off, and the AI and human video rates are identical, so video costs you nothing either way.

Only the kinds of media your story contains can be selected. The rest are greyed out with "Your story doesn't contain this kind of media."

Declaring is required under [CR-III.2](/en/publishing/content-rules/#cr-iii-2), and a false declaration is itself a violation ([CR-III.4](/en/publishing/content-rules/#cr-iii-4)).

## Rights

- [ ] Every image, track, recording and clip is yours or licensed. See [CR-II.1](/en/publishing/content-rules/#cr-ii-1).
- [ ] You could produce the licence if asked. See [CR-II.3](/en/publishing/content-rules/#cr-ii-3).
- [ ] Nothing is in there because it was easy to find online. See [CR-II.2](/en/publishing/content-rules/#cr-ii-2).

## Media files

- [ ] The missing files list, if one appears, dealt with rather than clicked through
- [ ] No temporary artwork, no placeholder audio

If the story references media that storage no longer holds, the publish job fails and hands the chapter back to you. You then get **Missing media files**, with a count and each file's location: in a node, a character avatar, the story cover image or a global event. **Publish without these files** sends it again with the check switched off, and the gap reaches readers as nothing at all. A test build never runs this check, so a clean test package proves nothing here.

## Reading pass

- [ ] Spelling and grammar checked
- [ ] Character names consistent throughout
- [ ] No placeholder text, and names on the nodes a reviewer will need to discuss. An unnamed node reads as "Node 14" in the Problems panel, in the publish dialog and in reviewer notes; the text snippet you recognise it by on the canvas never appears in any of them.
- [ ] At least one other person has read it. See [Testing](/en/best-practices/testing/).

## Publishing details

- [ ] Free or paid decided. Charging needs an author stage of **Qualified** or **Active partner**, complete billing and payout details, and a price inside the band. Qualification arrives on its own once you publish one approved **free** chapter whose own content measures at least 20 minutes, and the Pricing step offers the alternative: "publish a free chapter with at least 20 minutes of unique content, or contact us to request qualification". The 20 minutes is the chapter's whole content with every branch counted once, not its longest route, and it cannot be assembled from two shorter chapters. See [Monetization requirements](/en/monetization/requirements/).
- [ ] If paid, the price is inside the band: half the recommendation at the bottom, never under 9 EPS, and 299 EPS at the top. See [Pricing](/en/monetization/pricing/).
- [ ] If you are scheduling early access, the date is at least 14 days out, because review can take that long. Backers read from that date and everyone else 7 days later. See [Free and paid content](/en/monetization/free-and-paid-content/).
- [ ] Contributors credited, and the right people still ticked on the **Contributors** step, which states the consequence itself: "Unselected contributors lose access to future versions; their past feedback is kept."

## After you submit

While a reviewer holds the chapter the editor goes read-only and the banner reads **Awaiting review**. If you spot something, withdraw the chapter rather than wait to be rejected. A withdrawn draft comes back fully editable; a withdrawn update to a live chapter goes back to being published, so its content opens up again while the graph structure stays locked.

A rejection always arrives with something to work from, because a reviewer cannot reject on silence: the Reject button stays disabled until they have left at least one note of their own. Notes pin to a node, sometimes to a single component on that node, and a note marked high priority has to be resolved before the chapter can be approved at all. A rejected draft comes back as a draft. A rejected update to a live chapter comes back as a revision, with the published version still in front of readers while you fix it.

## Related

- [Publishing requirements](/en/publishing/publishing-requirements/)
- [Reasons for rejection](/en/publishing/reasons-for-rejection/)
- [Review process](/en/publishing/review-process/)
- [Testing](/en/best-practices/testing/)
