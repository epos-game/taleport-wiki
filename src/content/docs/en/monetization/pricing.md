---
title: Pricing
description: How a chapter's suggested price is computed, and how far you can move it.
helpKey: monetization.pricing
status: published
sidebar:
  order: 3
---

Every paid chapter gets a recommended price, and TalePort computes it from the chapter's own graph rather than from anything you type. The longest route a reader can take sets the scale, the media attached to the nodes sets the rate per hour, and content branching off that route adds a bonus on top. A chapter whose longest route runs 92 minutes across 470 nodes, carrying 87 images, 16 minutes of video and voice-over on 73% of its text, comes out at 159 EPS. From there you can pull it down to half the recommendation or push it up to 299 EPS.

Prices are set in **EPS**, the in-app currency readers buy with real money. 1 EPS is 1 CZK, roughly €0.04.

## What the calculation looks at

**Length means the longest single playthrough.** TalePort walks the chapter from its start nodes and takes the longest route to a terminal, which is either a node carrying the End transition or a node with nothing leading out of it. That length, in hours, multiplies everything else. Where the graph loops back on itself the back edges are dropped, so the figure is a lower bound rather than an exact worst case.

Two chapters holding the same amount of writing price very differently if one has a long spine and the other has many short alternatives. Everything beyond the longest route still counts, but only through the interactivity bonus, which is built from two measurements:

- How much more content the chapter holds than its longest path. Counted up to three times that path's length; past that it stops helping.
- Decision points per hour of that longest path. A decision point is a node with more than one way out, so a node offering five options counts once rather than five times. Full credit at 150 per hour.

Together they add at most +40%. A chapter richer in choice than its length suggests earns more than a chapter that is only long.

Media raises the per-hour rate, each kind in its own way:

| Media | How it is counted |
| --- | --- |
| Voice-over | The share of the chapter's text characters that have a recording attached. |
| Images | Images against nodes. One image per two nodes already earns the full amount; more adds nothing. |
| Video | Minutes of video against the length of the longest path. |
| Music | A flat addition per hour. How much of the chapter it covers makes no difference. |

Nodes count whether a reader can reach them or not, and so do their images. An orphaned branch raises the total content figure and the image count, but it cannot lengthen the longest path.

## Human and AI media

How the media was made changes what it earns. These are EPS per hour of the longest playthrough, on top of a base of 75:

| | AI | Human |
| --- | --- | --- |
| Voice-over | 15 | 30 |
| Images | 10 | 20 |
| Music | 5 | 12 |

The chips in the Classification step set this, and each one has exactly two states. **AI Image** on prices your images at 10, off prices them at 20. Switching a chip off is how you claim the human rate, so the declaration has to be truthful. It is a content rule ([CR-III.2](/en/publishing/content-rules/#cr-iii-2)), and misdeclaring it is treated seriously ([CR-III.4](/en/publishing/content-rules/#cr-iii-4)).

Three details catch authors out:

- A medium your story does not contain earns nothing at all, and its chip is disabled with "Your story doesn't contain this kind of media." Availability is measured across the whole story, every chapter at any status plus the story's own images, so a chip can be live because a different chapter uses that medium.
- AI and human video both earn 8, and the publish path prices video at the AI rate regardless, so the **AI Video** chip never moves the price in either direction.
- The declaration belongs to the story, not the chapter. Flip a chip while publishing chapter 3 and you have changed the rate basis for every chapter of that story.

## Where these numbers come from

The base, the per-media rates, the 150 decision points, the +40% cap, the 9 EPS minimum and the 299 ceiling all sit in a pricing configuration that an administrator can replace at runtime by saving a new revision. The figures above are the ones TalePort ships with. Each chapter stores the revision that priced it next to its computed price, so two chapters of the same story can have been priced under different coefficients.

## Rounding and the minimum

The computed amount is divided by ten, rounded, multiplied back and reduced by one, so **every recommendation ends in 9**. The rounding is banker's rounding on the tens digit, which shows up only at an exact midpoint: an amount of 145 becomes 139, not 149. The lowest price TalePort will suggest or accept is 9 EPS.

## Six reference chapters

Six chapters the pricing tests pin as reference vectors, with the price the calculator gives each one. "Longest" is the longest playthrough, "total" is everything in the chapter.

| Longest | Total | Nodes | Decision points | Images | Voice-over | Media | Price |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 92 min | 133 min | 470 | 110 | 87 | 73% | All AI, plus 16 min of video | 159 EPS |
| 64 min | 224 min | 4,499 | 429 | 2,250 | 100% | All human | 199 EPS |
| 59 min | 172 min | 116 | 44 | 100 | 100% | AI | 129 EPS |
| 54 min | 94 min | 153 | 23 | 5 | none | AI images only | 69 EPS |
| 54 min | 78 min | 105 | 22 | 65 | 94% | AI | 99 EPS |
| 25 min | 59 min | 125 | 67 | 32 | 93% | AI | 59 EPS |

The second row repays a second look. That chapter has by far the most content of the six, along with an hour of fully narrated, human-made media, and it still lands at 199, because its longest playthrough is only 64 minutes. When a recommendation comes in well under what you expected, look at the longest path first. It is the one input the whole formula is multiplied by.

## Moving the price

The Pricing step gives you a field and a slider running between a floor and a ceiling:

- Floor: half the recommendation, rounded to a whole unit, then held between 9 EPS and the ceiling.
- Ceiling: 299 EPS, flat, whatever the recommendation was.

Three presets sit alongside. **50%** and **Recommended** are what they say, and each is greyed out when its value falls outside your band. **Max** jumps to 299 rather than to a multiple of the recommendation, so on a modest chapter it is a long way up, and unlike the other two it is never out of range.

Field and slider both step by one, and anything you type is rounded and clamped back into the band. A price outside the band is refused at submission, where the band is derived again from the server's own figures. The whole number you submit is what a reader is charged.

![the Pricing step of the publish dialog for a paid chapter: the charge toggle, the recommended price, the slider between floor and ceiling, and the three preset chips](/screens/en/monetization/pricing-step.png)

## The reviewer can change it

A reviewer can set a different price while your chapter is in review. The only bound on them is the 9 EPS minimum; the 299 ceiling does not apply to an override.

Clearing an override does not bring your price back. It sets the price to the computed recommendation instead. Your own figure returns when you submit the chapter again, because a new submission drops the override with it.

## Related

- [Free and paid content](/en/monetization/free-and-paid-content/)
- [Credits](/en/monetization/credits/)
- [Author royalties](/en/monetization/royalties/)
