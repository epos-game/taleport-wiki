---
title: Player characters
description: Building the reader's own character out of stats.
helpKey: editor.player-characters
status: published
sidebar:
  order: 6
---

TalePort has no player-character object. The reader's character is the set of stats you define on the story, so you decide what your story measures. One stat can carry a chapter: Resolve, a number from 0 to 10 starting at 3, rises by 2 when the reader holds the night watch, and the rope bridge rolls a d6 against it.

## Building one

Stats live in the **Stats** tab at the bottom of the editor. *Add statistic* creates one on the spot, named "Variable 4" after a count of every variable in the story, and opens it inline. There is no form to cancel out of. Three to five stats is plenty: Strength, Cunning, Resolve.

Keep the type on Number and mind two rules:

- Minimum and maximum are stored together. Fill in one, leave the other empty, and both are discarded.
- The default has to sit inside the range. It is where every reader starts.

The editor has no field for grouping, for the icon, or for the stat-or-variable kind itself. Grouping and the icon still ship in the package. The kind comes from the tab you pressed Add in, and *Create Variable* inside an Event component makes a stat as well.

## Letting the reader shape it

Every reader starts on your defaults, so the only place they can shape a character is the story. Open the chapter with a scene asking how your character survived the winter and give each answer a node with an Event component. Use *set to* for a starting value; *increase by* and *decrease by* are for later.

## Making it matter

A stat only exists if something reads it. Gate a [choice](/en/story-editor/transitions-and-choices/) on it, test it in a [skill check](/en/story-editor/skill-checks/), branch on it in a switch condition. Skill checks are the argument for a stat over a variable, because their picker lists stats and nothing else. Requirements on choices and switch conditions take either kind. Past the editor, the kind rides in the package as `type`, and the printable GameBook export splits *Global Stats* from *Environment Variables*.

## Watch the bounds yourself

The bounds clamp nothing while the story runs. An event that subtracts 3 from a stat sitting at 1 takes it to -2. Event rows carry no condition of their own, so the guard has to be the route: put that node behind a switch condition or a gated choice. Inside the editor the bounds do hold, and a requirement value outside them reverts with a warning that never names the number it refused. See [Variables](/en/story-editor/variables/).

## Characters in the story are different

The people the reader meets are [characters](/en/story-editor/characters-and-dialogue/): their own list, with a name, a description and an avatar, used to put a speaker on a dialogue line. The editor gives a character no stat of its own. Model a relationship as a story variable named for what it tracks, and `mira_trust` can be tested anywhere except a skill check.

## Related

- [Variables](/en/story-editor/variables/)
- [Characters and dialogue](/en/story-editor/characters-and-dialogue/)
- [Skill checks](/en/story-editor/skill-checks/)
