---
title: Skill checks
description: Letting a stat, and optionally a dice roll, decide what happens.
helpKey: editor.skill-checks
status: published
sidebar:
  order: 8
---
A **skill check** is a transition with two ways out, **Success** and **Fail**. It tests one stat and can add a die roll. The result sends the reader down one of the two branches.

## Setting one up

- **Requirement** is one stat, one operator and one value, for example Dexterity is at least 12. A skill check doesn't take a list of conditions. See [Conditions](/en/story-editor/conditions/).
- **Dice Modifier** can be **None**, **d10**, **d6** or **d20**, in that order in the list.
- **Success** and **Fail** are two output ports, one for each outcome.

A new skill check starts as "is greater than 0" with no stat chosen. The total is the stat's current value plus the number on the die. The operator compares this total with your value. With **None**, the check is a plain comparison.

Once you pick a stat, the editor spells the check out under the fields: "Roll d6 and add Strength. The check passes when the total is at least 8."

![the Skill Check card in the right-hand panel: the requirement on a stat with its comparison and target number, the dice modifier, and the sentence spelling out what has to be rolled](/screens/en/story-editor/skill-check-panel.png)

Both ports must lead somewhere. If one isn't connected, the node reports "Has an output port that is not connected to any node." This blocks publishing.

## Which stats you can test

The list offers **stats**, not plain variables. Until your story has one, the panel says "No stat variables defined. Add stat variables to use skill checks." A check with no stat is an error that blocks publishing: "The skill check node has no stat selected."

Create the stat in the **Stats** tab. See [Player characters](/en/story-editor/player-characters/).

If the stat has a minimum and a maximum, the number you compare against must be inside that range. With a stat capped at 10, you can't ask for a total of 15, even though that stat plus a d20 can reach it. Widen the stat's range or lower the target.

## Dice

Without dice, only the stat decides, so readers with the same value always get the same outcome. With dice, the stat and chance decide together, so the same reader can pass once and fail the next time.

The size of the die sets how much chance matters. On stats from 0 to 10, a d20 decides almost the whole outcome, while a d6 only nudges the stat.

## Make both outcomes matter

A Fail branch that rejoins the main line two nodes later changes nothing in the story, and a choice or a simple transition would do the same job. Let failure lead somewhere else: a different route, a price paid, or something the successful reader never learns.

## Tips

- A reader who fails must still be able to finish the chapter, so don't make the main path depend on one check.
- Put the text that tells the reader what's at stake on the check node itself. An empty node warns "The node has no content."
- Swapping a transition moves links by port position. A three-option choice that becomes a skill check keeps two links and loses the third. See [Swapping a transition](/en/story-editor/transitions-and-choices/#swapping).

## Testing a check

- The Preview panel rolls for you. When you select a skill-check node, it rolls the die once and keeps the number. The dice button rolls again.
- Under **Variables (debug)** you can type a face by hand to force either branch.
- Walk both branches in a test package too. See [Testing](/en/best-practices/testing/).

## Related

- [Conditions](/en/story-editor/conditions/)
- [Player characters](/en/story-editor/player-characters/)
- [Combat](/en/story-editor/combat/)
- [Interactivity](/en/best-practices/interactivity/)
