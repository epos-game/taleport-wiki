---
title: Interactivity
description: Choices, switches and skill checks, and what each one decides.
helpKey: best-practices.interactivity
status: published
sidebar:
  order: 2
---

Interactivity is the part of a chapter that reacts to the reader's decisions. You build it with three kinds of transition: choice, switch and skill check.

## Choices and consequences

A choice matters only when something after it differs, such as the next screen's text or a variable's value. Options that rejoin at once and change nothing have no consequence.

A consequence doesn't have to change the plot. It can be a line that mentions what the reader did, or a variable that a later scene reads.

## Three ways to branch

| Transition | Who decides | Use it for |
| --- | --- | --- |
| **Choice** | The reader | A decision the reader makes. |
| **Switch** | The story, from its variables | A reaction to what has accumulated. |
| **Skill check** | A stat, optionally plus a dice roll | A test that can go well or badly. |

A choice waits for the reader. A switch runs on its own, based on variables.

Every branch has to lead somewhere. The ways out of a node are called output ports. Each of these is an output port:

- each option of a choice
- each switch condition, and the switch's **Default**
- both outcomes of a skill check

An output port with no link blocks publishing: *Has an output port that is not connected to any node.*

## Requirements on a choice

A choice with no requirements is always available. The panel says so: *No requirements, always available.*

With requirements, the option opens only for a reader whose variables meet them. The **Require** setting decides whether **All** requirements must hold or just **Any** one. It appears once the choice has two requirements.

A requirement doesn't hide the option. The preview marks an unmet option with a padlock and the hint *Requirements not met. Click to bypass for debugging*.

To hide an option, branch earlier with a switch. If you show the choice and route it elsewhere, the reader sees the refusal.

After you delete a variable, check the requirements that used it. You can recognise them by a `?` where the variable name should be.

See [Conditions](/en/story-editor/conditions/).

## Switches

A switch reads its conditions from the top and takes the first one that matches. Order matters. A broad condition high up matches before every more specific one below it. Drag to reorder.

- The **Default** output is always there. Everything that matches no condition leaves through it, so you don't need a fallback condition.
- All requirements in a switch condition must hold (AND). For an either-or branch, write two conditions, or set a helper variable and test that.
- A condition with no requirements always matches, so nothing below it is reached. The Problems panel reports it as *One or more switch conditions have no requirements and will never match.* It is a warning, so the chapter still publishes. Still, fill in the condition or remove it.

## Skill checks

A skill check tests exactly one **stat**. It can't test a plain variable or a list of conditions. The stat list holds stat variables only. If you have none, no list is shown and the panel reads *No stat variables defined. Add stat variables to use skill checks.*

The **Dice Modifier** is optional and offers **d10**, **d6** and **d20**, in that order. TalePort adds the number rolled to the stat. The panel spells out the calculation: *Roll d10 and add Strength. The check passes when the total is at least 12.*

With **None**, the die adds nothing. The check is a plain threshold, and the same stat value always gives the same outcome.

The bigger the die is compared with your stat range, the less the stat matters. A d20 with stats from 1 to 5 leaves almost everything to the roll.

## Failure

The **Fail** output must lead somewhere. Check for yourself that a reader who fails every check can still finish the chapter.

A fail branch that reports the failure and rejoins at once changes nothing. Instead, give failure a cost, let it reveal something new, or send it somewhere a successful reader doesn't go.

## Interruptions

A [global event](/en/story-editor/global-events/) watches one variable across the whole story. It fires the moment a node's events make its condition true. It shows its text, then does what you chose under **After event**:

- *Return to Start* and *Return to last Checkpoint* discard the route you planned after that node.
- *Continue* shows the event and carries on where the reader was.

Only one event fires on a node. If two conditions become true at the same node, the one with the higher **Priority** shows. The other never appears, not then and not later, because its condition is already met when the reader moves on. If two events watch the same variable, set priorities.

:::caution[Checkpoint in every chapter]
*Return to last Checkpoint* also applies to chapters you are not editing. Events belong to the story, but the check runs chapter by chapter. Any chapter whose top-level canvas has no Checkpoint component gets a blocking error.
:::

## Decision density

Not every node needs a choice, but every choice needs a consequence.

Decision density also affects the recommended price. The bonus counts decision points, which are nodes with more than one way out. It applies only when readers can miss content off the longest route. The bonus has a cap. See [Pricing](/en/monetization/pricing/).

## Related

- [Transitions and choices](/en/story-editor/transitions-and-choices/)
- [Conditions](/en/story-editor/conditions/)
- [Skill checks](/en/story-editor/skill-checks/)
- [Story structure](/en/best-practices/story-structure/)
- [Testing](/en/best-practices/testing/)
