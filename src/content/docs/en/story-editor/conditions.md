---
title: Conditions
description: Testing story state to gate a choice, branch a switch or resolve a skill check.
helpKey: editor.conditions
status: published
sidebar:
  order: 4
---

A **condition** is one comparison: a variable, an operator, a value. You hang conditions wherever the story has to look at its own state before it decides something, and that happens in three places: on a choice, where the condition decides whether the reader is offered it, on a switch condition, where it decides which branch the flow takes, and on a skill check, where it is the thing being tested. On the node called The locked gate, the choice "Pick the lock" carries `Dexterity ≥ 4`, so a reader who spent their early points on talking their way through never sees the option.

## The comparison operators

| Operator | Reads as |
| --- | --- |
| **<** | is less than |
| **≤** | is at most |
| **=** | equals |
| **≠** | does not equal |
| **≥** | is at least |
| **>** | is greater than |

Which ones you get depends on the variable you picked:

- **Number**: all six, in the order above.
- **Yes / No** and **List of values**: only **=** and **≠**. Picking one of these snaps the operator to **=** and resets the value, to No for a Yes / No variable and to the first label for a list. The other four never appear for either type.

The value field changes shape with the variable too. A Yes / No variable gives you a Yes / No dropdown, a list gives you its labels, everything else is a number box. A list variable with no labels defined yet shows **No options defined**, and you cannot finish the condition until you go and add some.

Numbers carry one more constraint. If the variable has a minimum or a maximum, a value outside that range is refused: a warning pops up and the field reverts to what it held before. The warning does not name the bound you broke. It only says *Value cannot be less than minimum value*, so go back to the variable if you are not sure where the limit sits.

[Global events](/en/story-editor/global-events/) use a shorter list. **≠** is never offered there, and a Yes / No or List of values variable leaves only **=**.

## Combining conditions

A choice can carry several requirements and you decide how they add up. The **Require** selector offers **All**, where every requirement has to hold, or **Any**, where one is enough. It only appears once the choice has two requirements, and the joiner drawn between them reads AND or OR, so you can see the mode without opening the selector. A choice with no requirements is always offered, and the panel says as much: *No requirements, always available.*

A switch condition has no such selector. Its requirements are always combined with AND and every one of them has to hold. For an either-or branch, write two switch conditions or set an intermediate variable. A skill check takes exactly one requirement; see [Skill checks](/en/story-editor/skill-checks/).

There is no nesting. For "A and (B or C)", use a switch whose conditions spell out the branches, or set an intermediate variable the moment B or C becomes true. The intermediate variable reads better six months later.

## Where the editor will not save you

Validation here is thinner than you would hope. Three gaps in particular will bite you.

A requirement with no variable picked goes unflagged on a choice and on a switch condition. Nothing warns you, and the Preview panel reads it as false, so the choice turns up locked for no visible reason. Only a skill check has a rule for the empty case, and there it is a blocking error: *The skill check node has no stat selected.*

A switch condition with no requirements raises a warning that says the opposite of what happens. The text reads *One or more switch conditions have no requirements and will never match*, but an empty requirement list counts as satisfied. That condition matches everything, and since conditions are read from the top down, it swallows every condition below it.

The Preview panel never satisfies **≠**. Its comparison has no branch for that operator and falls through to false, so a choice gated on ≠ always previews as locked and a switch condition using ≠ never previews as taken. The condition itself is sound. The preview is what cannot show it to you.

## Practical advice

- Compare against a range, not a magic number. `Courage ≥ 5` survives you rebalancing the story, `Courage = 5` does not.
- Order switch conditions from the most specific down to the least. First match wins, so a broad condition placed early swallows the ones after it.
- Connect Default instead of inventing a condition that is always true. The switch already has that output for the state you did not anticipate.
- Test the failing side. A condition you have only ever watched pass is a condition you have not tested.

## Related

- [Variables](/en/story-editor/variables/)
- [Transitions and choices](/en/story-editor/transitions-and-choices/)
- [Skill checks](/en/story-editor/skill-checks/)
- [Global events](/en/story-editor/global-events/)
