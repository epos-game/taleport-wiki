---
title: Pricing
description: How a chapter's suggested price is computed, and how far you can move it.
helpKey: monetization.pricing
status: published
sidebar:
  order: 3
---
Every paid chapter has a recommended price, which TalePort calculates from the chapter's content. You can lower it to half the recommendation or raise it up to the ceiling of 299 EPS.

Prices are in **EPS**, the in-app currency readers buy with real money. 1 EPS is 1 CZK, roughly €0.04.

## What the recommendation is based on

### Length

**Length is the longest single playthrough.** TalePort walks the chapter from the Start node and takes the longest route to an ending. An ending is an End node or a node with no way out. A node the route passes twice counts once, so a loop doesn't raise the price.

### Extra content and decisions

Content beyond the longest route earns a bonus. The bonus is capped, and it has two parts:

- how much more content the chapter has than its longest route,
- the chapter's decision points.

A decision point is a node with more than one way out. A node with five options counts once. The bonus is multiplied by the price set by length.

### Media

Media raises the price too. Here's how each kind counts:

| Medium | How it counts |
| --- | --- |
| Voice-over | By the share of your text that has a recording. |
| Images | By how many nodes have one. At most one image per two nodes counts. |
| Video | By its minutes compared with the longest path. Cutscene clips and looping background video both count. A looping clip counts once, however many nodes it's on. |
| Music | Only as yes or no, however much of the chapter it covers. |

Music is the only rate that isn't measured on the chapter you're pricing. It applies as soon as any chapter of the story has music.

### Unreachable nodes

Nodes and their images count even if a reader can't reach them. Decision points count only on routes a reader can walk from the Start node. The walk stops at an End node, so anything behind one is unreachable.

An unreachable branch raises the content total and the image count. It adds no decision points and doesn't lengthen the longest path.

## When no price can be calculated

If the longest route is zero, TalePort can't calculate a price. The first step of the publish dialog then shows **Story graph has playable content** as a failed check, and you can't submit the chapter, free or paid.

This happens when no route from the Start node has text, voice-over or a cutscene. Usually the Start node leads straight into an End node.

## Human and AI media

The price depends on how the media was made. You set this with the chips on the **Classification** step. A medium declared as AI is priced lower than the same medium declared as your own work.

:::caution[Declare media truthfully]
If you switch a chip off, you claim the human rate. This is a content rule ([CR-III.2](/en/publishing/content-rules/#cr-iii-2)), and a false declaration is a serious violation ([CR-III.4](/en/publishing/content-rules/#cr-iii-4)).
:::

About the chips:

- A medium your story doesn't contain adds nothing. Its chip is disabled with "Your story doesn't contain this kind of media."
- TalePort checks the whole story. Chapters at any status count, plus character portraits and global event images. The cover never counts. So a chip can be active because another chapter uses that medium.
- The **AI Video** chip doesn't change the price, but the content rule still applies to it.
- The declaration belongs to the story, not the chapter. A chip you flip while publishing chapter 3 changes the basis for every chapter of that story.

## Rounding and the minimum

A recommendation always ends in 9. An amount of 145 becomes 139, not 149.

The lowest price TalePort suggests or accepts is 9 EPS.

## Changing the price

The **Pricing** step gives you a field and a slider between a floor and a ceiling:

- **Floor:** half the recommendation, rounded to a whole unit, but always between 9 EPS and the ceiling.
- **Ceiling:** 299 EPS, whatever the recommendation is.

Three presets sit beside them:

- **50%** sets half the recommendation and **Recommended** sets the full recommendation. Each is greyed out if its value is outside your range.
- **Max** sets 299 EPS, not a multiple of the recommendation. It's never out of range.

The recommendation itself has no ceiling, so on a very long chapter it can be above 299. Then 299 EPS is the most you can ask, and **Recommended** is greyed out.

The field and slider both step by one. TalePort rounds a typed value and pulls it back into the range. A price outside the range is refused when you submit, not only in the dialog. Readers are charged the whole number you submit.

![the Pricing step of the publish dialog for a paid chapter: the charge toggle, the recommended price, the slider between floor and ceiling, and the three preset chips](/screens/en/monetization/pricing-step.png)

## Changes by the reviewer

A reviewer can set a different price while your chapter is in review. The only limit is the 9 EPS minimum. The 299 EPS ceiling doesn't apply to reviewers.

Clearing the reviewer's price doesn't bring yours back. The price becomes the calculated recommendation instead. Your own price returns when you submit the chapter again, because a new submission drops the override.

## Related

- [Free and paid content](/en/monetization/free-and-paid-content/)
- [Credits](/en/monetization/credits/)
- [Author royalties](/en/monetization/royalties/)
