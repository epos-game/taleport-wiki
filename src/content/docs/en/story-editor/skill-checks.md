---
title: Skill checks
description: Letting a stat, and optionally a dice roll, decide what happens.
helpKey: editor.skill-checks
status: published
sidebar:
  order: 8
---

A **skill check** is a transition with two ways out, **Success** and **Fail**. It tests one stat, adds a die roll when you want one, and sends the reader down whichever branch the total earns. Put one on the node where Mira reaches the bolted cellar door: the check rolls **d6**, adds **Strength** and passes when the total is at least 8, so Success gets her into the cellar and Fail puts her back in the kitchen with the cook awake.

## How it is configured

- **Requirement**: one stat, one operator, one value. Exactly one; a skill check does not take a list of conditions. See [Conditions](/en/story-editor/conditions/).
- **Dice Modifier**: **None**, **d10**, **d6** or **d20**, in that order in the list.
- **Success** and **Fail**: two output ports, one per outcome.

A new skill check starts out as "is greater than 0" with no stat chosen. The roll is the stat's current value plus the face the die shows, and that total is what the operator compares against your value. With **None** the die adds nothing and the check is a plain comparison. Pick a stat and the editor writes the whole thing out underneath the fields: "Roll d6 and add Strength. The check passes when the total is at least 8."

![the Skill Check card in the right-hand panel: the requirement on a stat with its comparison and target number, the dice modifier, and the sentence spelling out what has to be rolled](/screens/en/story-editor/skill-check-panel.png)

Both ports have to lead somewhere. Leave one dangling and the node reports "Has an output port that is not connected to any node.", which blocks publishing.

## Only stats can be checked

The picker lists **stats**, not plain variables. Until the story has one, the panel says "No stat variables defined. Add stat variables to use skill checks." rather than showing an empty list. A check with nothing selected is the error "The skill check node has no stat selected.", and errors block publishing. Create whatever you want to roll against in the **Stats** tab; see [Player characters](/en/story-editor/player-characters/).

If the stat has a minimum and a maximum, the number you compare against has to sit inside that range. That bites as soon as you add dice: with Strength capped at 10 you cannot ask for a total of 15, even though Strength plus d20 reaches it easily. Either widen the stat or keep the target inside its range.

## Choosing whether to roll

Checks without dice reward planning. The reader who invested in Strength gets the Strength outcome every time, which pays off the choices that got them there.

Dice add tension and a reason to read the chapter twice. They also mean a reader can fail something they prepared for, so use them where the failure is interesting and not where it only punishes.

Die size decides how much of the outcome you hand to chance. A d20 on stats that run 0 to 10 means the roll decides almost everything. A d6 on the same scale means the stat decides and the roll nudges.

## Both outcomes must be worth reaching

The usual mistake is a rich Success branch next to a Fail branch that says "you fail" and rejoins the main line two nodes later. If failure is not interesting, do not make it a check. Make it a choice, or let it succeed.

A good failure branch goes somewhere else: a different route, a price paid, a complication, something the successful reader never learns.

## Practical advice

- **Do not gate the main path behind a check.** A reader who fails has to be able to finish the chapter anyway.
- Say what is at stake before the roll. The check node can carry that text itself, and an empty one warns "The node has no content."
- The Preview panel rolls for you. Selecting a skill-check node rolls its die once and keeps the number, the dice button rerolls it, and under **Variables (debug)** you can type a face by hand to force either branch.
- Preview never passes a check set to **does not equal**. The comparison has no case for that operator, so the check reads as a failure there whatever the stat holds. If you use it, walk both branches in a test package instead. See [Testing](/en/best-practices/testing/).
- Swapping a transition moves links by port position. Turn a three-option choice into a skill check and the first two links land on Success and Fail, while the third one is deleted.

## Related

- [Conditions](/en/story-editor/conditions/)
- [Player characters](/en/story-editor/player-characters/)
- [Combat](/en/story-editor/combat/)
- [Interactivity](/en/best-practices/interactivity/)
