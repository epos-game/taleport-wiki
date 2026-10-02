---
title: Combat
description: Building a fight out of the pieces TalePort already has.
helpKey: editor.combat
status: published
sidebar:
  order: 9
---

TalePort has no combat system. There is no initiative order, no damage formula and no enemy statblock, so a fight is something you assemble out of parts that exist for other reasons: a stat standing in for health, a skill check per exchange, an **Event** component that takes health away when the check fails, and a global event that catches the moment health runs out. In the smithy fight, Stamina starts at 10, every failed check costs 3, and the fourth failure trips a global event watching Stamina **is at most** 0, which puts the reader back on the checkpoint node *Doors slam shut*.

## The pieces

- Health is a stat of type **Number**, created in the **Stats** tab. Both of those are forced on you: a skill check can test only a stat, and only a Number can be decreased by an event. **Min** and **Max** are optional, and if you set them the default value has to fall between them.
- One [skill check](/en/story-editor/skill-checks/) per exchange, testing that stat. The **Dice Modifier** is **None**, **d10**, **d6** or **d20**, and the roll is added to the stat before the comparison.
- An **Event** component on the node each **Fail** output leads to, with the operation **decrease by** and the amount. Events apply when the reader arrives at a node, so the cost sits on the branch, not on the check. See [Variables](/en/story-editor/variables/).
- One [global event](/en/story-editor/global-events/) on the health stat: **Operator** set to **is at most**, **Value** 0, **After event** set to **Return to last Checkpoint**. It fires on the node where the condition goes from unmet to met, which is the node carrying the subtraction.
- A [checkpoint](/en/story-editor/checkpoints/) on a node before the fight starts.

Every output of every check needs a link. An unconnected output port is a validation error, so a **Fail** branch that loops back to the previous exchange still has to be drawn.

## Where the checkpoint has to sit

The checkpoint is not a style preference. A chapter with a **Return to last Checkpoint** global event and no checkpoint node fails validation with "A global event uses the Return to Last Checkpoint behavior but the chapter has no Checkpoint node." and cannot be published.

The rule looks at the chapter's own graph and nothing else, so a checkpoint inside a [group](/en/story-editor/groups/) does not satisfy it. Collapse the fight into a group and the checkpoint has to stay outside, on the chapter canvas. There is a mirror image of this while you work: with a group open, the editor runs the same check against that group, so you can be shown the error on a chapter that publishes without complaint. Step back out to the chapter graph before you trust it.

## Health does not stop at zero

Nothing clamps a stat to its bounds while the story runs. Subtract 3 from a Stamina of 1 and you get minus 2. The fight does not care, because **is at most** 0 holds either way. What breaks is anything downstream that expects the exact number: a choice gated on Stamina **equals** 0 never opens for a reader who overshot, so compare with **is at most** there as well. The thresholds themselves are not symmetrical either. A global event takes any whole number, while a skill check's requirement value is tested against the stat's **Min** and **Max** and snaps back if you type outside them.

Walk the **Fail** branch in the **Preview** panel before you publish. **Variables (debug)** lets you set Stamina to 1 and see the next failure take it negative, and **Simulate roll** rerolls the die, so you can reach both outcomes of one check without replaying the chapter.

## Keep it short

Two or three exchanges make a fight. Six make bookkeeping. Each exchange costs you a node, a check and two branches to write, and the reader meets them as the same screen with a different number on it.

For a long battle, write one scene with a single decisive check in the middle and narrate the rest.

## Make the exchanges different

If every round is "roll, lose health, roll again", the reader is pressing a button. Give each exchange its own decision: press the attack or fall back, go for the weapon or for the door. The fight then reads as a sequence of choices that cost health, rather than a dice loop.

## Related

- [Skill checks](/en/story-editor/skill-checks/)
- [Global events](/en/story-editor/global-events/)
- [Checkpoints](/en/story-editor/checkpoints/)
- [Variables](/en/story-editor/variables/)
