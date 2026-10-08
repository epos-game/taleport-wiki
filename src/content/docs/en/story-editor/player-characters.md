---
title: Player characters
description: Building the reader's own character out of stats.
helpKey: editor.player-characters
status: published
sidebar:
  order: 6
---
You build the player character yourself. It is the set of stats you define for your story, such as Strength, Dexterity, Health or Charisma.

## Building a player character

Stats live in the **Stats** tab at the bottom of the editor.

1. Click **Add statistic**. It creates a stat with a name like "Variable 1" and opens it in the list. The number counts all the variables in the story, not just the ones in this tab.
2. Rename it in the list if you want.
3. Keep the type on **Number**.
4. Set a range if you need one.

Two rules apply to the range:

- The minimum and maximum are saved together. If you fill in only one, both are discarded.
- The default must be inside the range. Every reader starts with it.

The tab where you click Add decides the kind (stat or variable). **Create Variable** inside an Event component also makes a stat.

## Letting readers shape the character

Every reader starts with your default values. An Event component on a node changes a stat when the reader reaches that node:

- **set to** writes a starting value.
- **increase by** and **decrease by** adjust it later.

To let readers choose their own starting values, open the chapter with a choice. Each option leads to a node with an Event component. This way a reader can pick a class, for example fighter, thief or mage.

## Using stats

A stat can restrict a [choice](/en/story-editor/transitions-and-choices/), be tested in a [skill check](/en/story-editor/skill-checks/), or decide a switch condition.

The skill-check picker lists only stats. Requirements on choices and switch conditions accept both stats and plain variables.

The printable gamebook keeps the two apart as well. Stats go in a table headed *Global Stats*, and plain variables go in a table headed *Environment Variables*. Both headings stay in English, whatever language you write in.

## Bounds while the story runs

The minimum and maximum apply to values you enter in the editor. Events do not enforce them while the story runs: an event that subtracts 3 from a stat at 1 takes it to −2.

Event rows have no condition of their own. You can guard the value only on the route to the node, with a switch condition or a restricted choice before it. When you write a condition, the editor refuses a value outside the bounds and restores the last valid one. See [Variables](/en/story-editor/variables/).

## Stats and story characters

The people the reader meets are [characters](/en/story-editor/characters-and-dialogue/). They have a separate list, and each one has a name, a description and an avatar. You use that list to put a speaker on a dialogue line. A character has no stats of its own.

To track a relationship with a character, use a story variable named after what it tracks. You can test it anywhere except a skill check.

## Related

- [Variables](/en/story-editor/variables/)
- [Characters and dialogue](/en/story-editor/characters-and-dialogue/)
- [Skill checks](/en/story-editor/skill-checks/)
