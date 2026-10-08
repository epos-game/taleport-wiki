---
title: Conditions
description: Testing story state to gate a choice, branch a switch or resolve a skill check.
helpKey: editor.conditions
status: published
sidebar:
  order: 4
---
A **condition** compares a variable with a value. It has three parts: a variable, an operator and a value. For example, "Health is at most 0". You use conditions in three places:

- On a choice, to decide whether the reader gets that choice.
- On a switch condition, to decide which branch the reader takes.
- On a skill check, to set the test. A skill check has one requirement: the stat, the operator and the number to beat.

![the Skill Check card in the right panel, one requirement built from a stat, the operator at least and the value 16, with the dice modifier under it](/screens/en/story-editor/skill-check-panel.png)

A condition compares a variable, so you need one first. If the story has none, a new requirement shows a note instead of the three fields: *No variables yet. Create one to gate this branch.* Create variables and stats in the **Variables** and **Stats** tabs at the bottom of the editor.

## Operators

| Operator | Reads as |
| --- | --- |
| **<** | is less than |
| **≤** | is at most |
| **=** | equals |
| **≠** | does not equal |
| **≥** | is at least |
| **>** | is greater than |

Which operators you get depends on the variable type:

- **Number** variables get all six.
- **Yes / No** and **List of values** variables get only **=** and **≠**. When you pick such a variable, the operator switches to **=** and the value resets. Yes / No goes back to No, and a list goes back to its first label.

The value field also depends on the variable type:

- For Yes / No, it's a Yes / No dropdown.
- For List of values, it's a dropdown of the list's labels.
- For anything else, it's a number box.

A list variable with no labels shows **No options defined**. Add labels before you finish the condition.

A number variable can have a minimum and a maximum, which you set on the variable. The editor refuses a value outside that range and restores the previous one. It then warns *Value cannot be less than minimum value* or *Value cannot be greater than maximum value*.

[Global events](/en/story-editor/global-events/) have a shorter list of operators, without **≠**. For a Yes / No or List of values variable, only **=** is left there.

## Combining conditions

A choice can have several requirements. The **Require** selector decides how they combine:

- **All** means every requirement has to hold.
- **Any** means one is enough.

The selector appears once the choice has two requirements. The word between them reads AND or OR.

A choice with no requirements is always offered. The panel says so: *No requirements, always available.*

A switch condition always joins requirements with AND, so all of them must hold. A skill check takes exactly one requirement. See [Skill checks](/en/story-editor/skill-checks/).

![the Switch card in the right panel, one condition open with two requirements joined by AND and the next condition collapsed behind a padlock](/screens/en/story-editor/switch-requirements.png)

You can't nest conditions. There are two workarounds:

- For an either-or switch branch, use two switch conditions.
- For "A and (B or C)", use a helper variable. Set it when B or C becomes true, then test it together with A.

## Empty requirements

Give every requirement a variable, and give every switch condition at least one requirement:

- A requirement with no variable on a choice or a switch condition counts as unmet, so the choice shows as locked in the Preview panel. On a skill check, an empty requirement raises an error that blocks publishing: *The skill check node has no stat selected.*
- A switch condition with no requirements always matches, so the conditions below it are never evaluated. The editor shows the warning *One or more switch conditions have no requirements and will never match.* Add a requirement or delete the condition.

## Tips

- **≥** and **≤** keep working when the numbers in your story change. **=** stops matching once the value moves past it.
- Switch conditions are tested in order, and the first match wins. Put the most specific one first, because a broad condition placed early blocks the ones after it.
- Send any case you didn't plan for to the switch's **Default** output.

## Related

- [Variables](/en/story-editor/variables/)
- [Transitions and choices](/en/story-editor/transitions-and-choices/)
- [Skill checks](/en/story-editor/skill-checks/)
- [Global events](/en/story-editor/global-events/)
