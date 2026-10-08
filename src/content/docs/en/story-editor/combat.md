---
title: Combat
description: Building a fight out of the pieces TalePort already has.
helpKey: editor.combat
status: published
sidebar:
  order: 9
---
You build a fight from parts the editor already has:

- a stat that stands in for health
- a skill check for each exchange
- an **Event** component that takes health away when the check fails
- a global event that catches the moment health runs out

## What you need

1. **A health stat.** Create it in the **Stats** tab with the type **Number**. A skill check can test only a stat, and an event can decrease only a number. **Min** and **Max** are optional. If you set them, the **Default value** must fall between them.
2. **A [skill check](/en/story-editor/skill-checks/) for each exchange**, testing that stat. The **Dice Modifier** can be **None**, **d10**, **d6** or **d20**. The roll is added to the stat before the comparison.
3. **An Event component on the node that each Fail output leads to.** Use the operation **decrease by** and an amount. Events apply when the reader arrives at a node, so the cost goes on the branch, not on the check. See [Variables](/en/story-editor/variables/).
4. **One [global event](/en/story-editor/global-events/) on the health stat.** Set **Operator** to **≤**, **Value** to 0 and **After event** to **Return to last Checkpoint**. It fires on the node where the condition changes from unmet to met, which is the node with the subtraction.
5. **A [checkpoint](/en/story-editor/checkpoints/) on a node before the fight.**

Connect every output of every check. An unconnected output port is a validation error, even on a **Fail** branch that loops back to the previous exchange.

## Checkpoint placement

Without a checkpoint, a chapter with a **Return to last Checkpoint** global event fails validation and cannot be published: "A global event uses the Return to Last Checkpoint behavior but the chapter has no Checkpoint node."

:::caution[Keep the checkpoint outside groups]
The rule looks only at the chapter's own graph, so a checkpoint inside a [group](/en/story-editor/groups/) doesn't count. If you collapse the fight into a group, keep the checkpoint outside it, on the chapter canvas.
:::

The same check runs on whichever graph is open, including a group's graph. The result on the chapter graph is the one that decides.

## Health below zero

The minimum and maximum don't apply while the story runs. Subtracting 3 from a health of 1 gives −2. The fight still works, because **≤** 0 is true either way.

A condition on an exact number breaks, though. A choice that requires health **=** 0 never opens for a reader who overshot. Use **≤** there too.

Both thresholds must sit inside the stat's range. The editor checks them at different moments:

- A skill check's target number: if you type a value outside **Min** and **Max**, the editor refuses it and restores the last valid value.
- A global event's **Value** is checked only when you save. The editor refuses the save, restores the last valid value and warns that the step could not be applied.

For an event on health **≤** 0, the stat's **Min** must be 0 or lower.

## Testing a fight

In the **Preview** tab you can test the **Fail** branch without replaying the whole chapter:

- In **Variables (debug)**, set health to 1, so the next failure takes it below zero.
- **Simulate roll** rolls the die again, so you can reach both outcomes of a single check.

## More than a roll

An exchange doesn't have to be a roll. It can also offer a decision, such as pressing the attack or falling back.

## Related

- [Skill checks](/en/story-editor/skill-checks/)
- [Global events](/en/story-editor/global-events/)
- [Checkpoints](/en/story-editor/checkpoints/)
- [Variables](/en/story-editor/variables/)
