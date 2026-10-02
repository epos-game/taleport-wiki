---
title: Variables
description: The numbers, flags and lists that remember what the reader did.
helpKey: editor.variables
status: published
sidebar:
  order: 5
---

A variable is one piece of story state: a whole number, a yes/no switch, or one value out of a list you name yourself. Variables belong to the **story** and not to a chapter, so what the reader decided in chapter 1 is still readable in chapter 5. An **Event** component on a node writes to them; conditions on choices, switches and skill checks read them. Set `coins` to 12 when the reader sells the horse, take 3 off at the ferry two nodes later, and the choice "Buy the lantern" can ask whether 5 are left.

## Stats and variables

Every variable is one of two kinds, and the kind comes from the tab you create it in: **Stats** or **Variables**. The form has no kind selector, and nothing in the editor moves a variable from one tab to the other afterwards. Decide before you press **Add statistic** or **Add variable**.

Two things in the editor depend on the kind. A [skill check](/en/story-editor/skill-checks/) can only roll against a stat, and its picker lists nothing else. In a condition, a stat is drawn with a person icon and a variable with a tag. The kind also goes into the published package, so the app that plays your story can present the two lists differently, but that part is decided there and not here.

Make it a stat when you expect to roll against it. `met_the_smith` and `took_the_bribe` are bookkeeping, and bookkeeping belongs in the Variables tab.

## Value types

| Type | Holds | Typical use |
| --- | --- | --- |
| **Number** | A whole number, optionally bounded by a minimum and maximum | Stats, counters, resources |
| **Yes / No** | One of two states | Flags: did this happen? |
| **List of values** | One value from a set you define; each value has its own label | Mutually exclusive states: a faction, a route, a relationship stage |

A minimum and a maximum are available on Number and nowhere else. They work as a pair: fill in one, leave the other blank, and saving drops both. Switching an existing variable to Yes / No or List of values clears them as well. A minimum above the maximum is refused with "Maximum value must be greater than or equal to the minimum value.", and the default has to sit inside the range.

**List of values** is the right shape wherever you would otherwise keep three flags that must never be true at once. Each entry has a numeric key and a label of up to 100 characters, and new entries arrive named "Label 1", "Label 2". Define the labels before you point anything at the variable: an event aimed at a list with no labels is turned away with "The selected variable has no enum labels defined. Please add labels to the variable before using it."

## The form

**Name** is required, holds up to 100 characters, and is what you will read in every condition for the rest of the story. **Type** and **Default value** sit beside it. **Min value** and **Max value** appear only for Number. The default is what every reader starts with, before anything in the story has run.

Pressing **Add variable** creates the variable at once, names it "Variable 4" (counted across both tabs, not per tab) and opens it for editing. There is no draft to cancel out of, so a stray click leaves a real variable in the list and you have to delete the row. The **Create Variable** button inside an Event component opens the same form and always produces a stat, so look for it in the Stats tab afterwards.

There are no fields for grouping or icons.

## Changing a variable

Add an **Event** component to a node. Its rows apply when the reader arrives, in the order you put them in; drag to reorder. Each row names a variable, an operation and a value, and carries a name of up to 200 characters plus an optional description of up to 1000, so a list of five events still reads as something. The counter under the description counts the underlying HTML rather than the visible text, so a formatted description runs out earlier than you would expect.

| Operation | Reads as | Available on |
| --- | --- | --- |
| **=** | set to | every type |
| **+** | increase by | Number only |
| **-** | decrease by | Number only |

Yes / No and List of values can only be set. Point an event at one of them and the operation flips to **set to**, and the value resets: to No for Yes / No, to the first label for a list.

Increase and decrease ignore the bounds. Min and Max are checked when you type a default value, and again when you type a value into a condition; they do nothing to the result of an event. Courage with a maximum of 10, sitting at 9, goes to 12 if an event adds 3. If a stat must not pass its ceiling, branch on it before you change it, or gate the event behind a condition.

## Locking

A variable locks as soon as a live chapter uses it, and a locked variable cannot be edited at all: not renamed, not retyped, not given new bounds, not deleted. Readers have saves that point at it, and changing what it means underneath them corrupts their progress. The row shows a padlock, and its tooltip names the chapters holding the lock: "Used by a published chapter: {0}. It unlocks when no published chapter uses it any more. You can add a new one instead."

"Uses" means any of these, anywhere in a live chapter, inside groups included:

- an event changes it,
- a choice, a switch condition or a skill check tests it, or
- a [global event](/en/story-editor/global-events/) targets it. Global events apply story-wide, so every variable one of them targets locks the moment any chapter of the story goes live.

The lock is recomputed rather than permanent. Take the usage away, or take the chapter out of a live status, and the variable unlocks. Adding new variables is never blocked, which is the escape route when you need a different shape for something that is already locked.

## Practical advice

- Name variables so the condition reads as a sentence. `has_lantern = yes` tells you more at a glance than `flag7 = 1`.
- Fix one scale and keep to it. Stats running 0 to 10 mixed with stats running 0 to 100 turn every threshold into a guess.

## Related

- [Conditions](/en/story-editor/conditions/)
- [Player characters](/en/story-editor/player-characters/)
- [Global events](/en/story-editor/global-events/)
- [Skill checks](/en/story-editor/skill-checks/)
