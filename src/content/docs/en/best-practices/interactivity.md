---
title: Interactivity
description: Making choices, checks and state feel like they matter.
helpKey: best-practices.interactivity
status: published
sidebar:
  order: 2
---

Interactivity is the part of a chapter that reads what the reader did and acts on it. Three transitions do the acting: a choice the reader makes, a switch the story makes from its own state, and a skill check settled by a stat plus a die. Mira lies to the harbour guard on Dock gate, an event there adds 1 to Suspicion, and twenty nodes later a switch on `Suspicion ≥ 3` drops her into an inn where the innkeeper is already locking the till. One variable, one condition, a rewritten paragraph.

## A choice needs a consequence

The test for a real choice: **if I take the other option, does anything differ afterwards?** Different text on the next screen counts. A changed variable counts. Nothing counts as nothing.

Choices that reconverge immediately with no state change are the most common flaw in a first chapter. They feel interactive while you are writing and read as clicking through prose.

## Consequences can be small

They do not all have to change the plot. A character who remembers what you said, a stat that moved, a line that acknowledges what you did: cheap to write, and they are what persuade a reader the story is listening. One variable read in three later scenes does more than a second ending.

## Three ways to branch, and who decides

| Transition | Who decides | Use it for |
| --- | --- | --- |
| **Choice** | The reader | A decision you want them to own. |
| **Switch** | The story state | A reaction to what has accumulated. |
| **Skill check** | A stat, optionally plus a dice roll | A test the reader prepared for, or did not. |

They are not interchangeable. If the reader should feel responsible, use a choice. If the world should feel like it noticed, use a switch, because a switch happens to the reader rather than being asked of them.

Whichever you use, **every branch you open has to lead somewhere**. Each option, each switch condition, the switch's Default and both outcomes of a skill check are output ports, and an unlinked output port blocks publishing: *Has an output port that is not connected to any node.*

## Gating a choice with a requirement

A choice with no requirements is always available, and the panel says as much: *No requirements, always available.* Add requirements and the option opens only for a reader whose state satisfies them. **Require** decides whether **All** of them must hold or **Any** one, and it appears once the choice carries two.

Gating is not concealment. The built package carries each option's text next to its requirements, and the preview marks an unmet option with a padlock and the hint *Requirements not met. Click to bypass for debugging*. If the reader should never learn the option existed, branch earlier on a switch. If the refusal should land as a consequence, show the choice and route it somewhere else: a locked door the reader can see is a story beat.

Neither of these does the editor catch for you. The preview never satisfies "does not equal", so a choice gated that way looks locked even when the state matches. And a requirement whose variable you deleted reads as false there, with no validation issue raised. See [Conditions](/en/story-editor/conditions/).

## Switches: first match wins

A switch reads its conditions from the top and takes the first that matches, so the order is part of the logic. A broad condition placed high swallows every more specific one below it. Drag to reorder.

Two things catch people out:

- The Default output is always there. You do not add a fallback condition; Default carries everything no condition matched, and it needs a link like any other output.
- A switch condition's requirements are always combined with AND. There is no All or Any selector here, unlike a choice. For an either-or branch, write two conditions, or set an intermediate variable and test that.

Give every condition at least one requirement. An empty requirement list counts as satisfied, so a condition with nothing in it matches everything and the ones under it never run. The warning you get says the opposite, and it is only a warning, so the chapter still publishes.

## Skill checks test stats

A skill check tests exactly one **stat**, not a plain variable and not a list of conditions. The picker lists stat variables only; if it is empty you have none yet.

The **Dice Modifier** is optional and offers d6, d10 and d20. The check adds the stat to the face rolled, and the panel spells out the arithmetic: *Roll d10 and add Lockpicking. The check passes when the total is at least 12.* With **None** the die contributes nothing and the check is a plain threshold, which pays off a reader who invested in that stat. A die buys tension at the cost of sometimes punishing preparation, and the bigger it is next to your stat scale, the less the stat decides. A d20 over stats that run 1 to 5 is a coin flip with extra steps.

## Failure should be interesting

A skill check whose Fail branch says you failed and rejoins is a delay, not a mechanic. Failure should cost something, reveal something, or take the story somewhere the successful reader does not go.

No rule asks whether a reader who fails every check can still finish the chapter. Validation checks that the Fail output goes somewhere, nothing more. The question is never whether you wrote a fail branch, it is where you pointed it: at a route through the chapter, not at a wall.

## An interruption is not a branch

A [global event](/en/story-editor/global-events/) watches one variable across the whole story and fires the moment a node's events make its condition true. It shows its text, then applies what you chose under **After event**: *Return to Start*, *Return to last Checkpoint* or *Continue*. Only the first two throw away the flow you planned after that node. Continue shows the event and carries on where the reader was.

That makes the two returning behaviours a good failure state and a poor mechanic. Fire one often and the reader experiences a story interrupting itself. One of them reaches chapters you were not editing: events belong to the story, the check runs per chapter, and Return to last Checkpoint is a blocking error in any chapter with no node carrying a Checkpoint component.

## Pace the decisions

Not every node needs a choice. Stretches of straight narrative are what make a decision feel like a decision. A chapter that asks something on every screen is exhausting and, because every choice needs consequences, usually one where none of them matter.

Density reaches the recommended price too. The bonus counts decision points, nodes with more than one way out, against the longest route, and pays only when there is content off that route to miss. It caps at +40%. See [Pricing](/en/monetization/pricing/).

## Related

- [Transitions and choices](/en/story-editor/transitions-and-choices/)
- [Conditions](/en/story-editor/conditions/)
- [Skill checks](/en/story-editor/skill-checks/)
- [Story structure](/en/best-practices/story-structure/)
- [Testing](/en/best-practices/testing/)
