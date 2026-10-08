---
title: Global events
description: Reactions that fire from anywhere in the story when a variable crosses a threshold.
helpKey: editor.global-events
status: published
sidebar:
  order: 10
---
A **global event** is a rule that watches one variable. When the value crosses your threshold, the event acts wherever the reader is. You define the consequence once for the whole story, not on every node that could cause it.

For example, say combat subtracts from a Health stat. One event on Health ≤ 0 shows its text and sends the reader to their last checkpoint. It works wherever in the story Health reached 0.

Global events belong to the **story**, not to a chapter. An event you write for chapter 1 is live in chapter 9 too.

You manage them in the **Global Events** tab at the bottom of the editor. You need at least one variable first. If you click **Add event** without one, you see "A variable is required to create a global event."

## The event fields

**Add event** creates the event right away, selects the first variable in the list and opens the event. Every field saves as soon as you change it. The check button in the corner only closes the editor. Ctrl+Z undoes changes one field at a time.

| Field | What goes in it |
| --- | --- |
| Variable, Operator, Value | The condition being watched, for example Health ≤ 0. |
| After event | What happens to the reader once the event has been shown. |
| Priority | A whole number. It's 0 unless you change it. |
| Event Text | Text you can make bold, italic or underlined, up to 2000 characters. |
| Event Image | One image, up to 1 MB. It's scaled down to fit 1024 px. |

The operators are `=`, `<`, `≤`, `>` and `≥`. For a Yes / No or List of values variable, `=` is the only option.

**Value** is a number box whatever the variable type.

- For Yes / No, type 0 for No and 1 for Yes.
- For List of values, type the entry's number. Entries are numbered from 0, in the order you added them. Default names are numbered from 1, so "Label 3" is number 2.

The 2000-character limit also counts formatting codes, so formatted text can be shorter.

![the Global Events tab, each event showing the condition it watches and the behaviour it runs](/screens/en/story-editor/global-event-panel.png)

## After the event

A global event doesn't send the reader to a node. It shows its text and image, then does what you chose under **After event**.

| Behaviour | Where the reader goes |
| --- | --- |
| Return to Start | Back to the chapter's start node. |
| Return to last Checkpoint | Back to the last checkpoint they passed. |
| Continue | Straight on from where they were. |

Return to Start sends the reader back through everything they've already read. Continue leaves the reader where they were, so the event only shows its text and image. For more on checkpoints, see [Checkpoints](/en/story-editor/checkpoints/).

## Validation checks

Every global event is checked in every chapter you validate, so one badly set event is reported in every chapter. The first three checks below are errors that block publishing.

- The variable the event watches must still exist.
- Return to Start needs a start node in that chapter.
- Return to last Checkpoint needs a Checkpoint component on a node in the chapter's top-level graph. A checkpoint inside a group doesn't count, so you need one outside the group too.
- Two events with the same variable, operator and value raise a warning.

Inside a group, the checks run on the graph you have open. For publishing, the result at chapter level is the one that counts.

## Previewing an event

The **Preview** tab lists the story's global events, highest priority first. Each has a Preview button that shows the text and image the way the reader sees them.

When a node's events make a condition true, the preview opens that global event by itself. If several become true at once, it opens the one with the highest priority.

If you step forward from such a node, the preview asks you first: "A global event triggers when leaving this node, so real users won't reach the next steps. Continue anyway for debugging?"

## Locking

As soon as any chapter of the story goes live, all its global events lock, and so do the variables they watch. A locked event shows a padlock, and you can't edit or delete it. You can still add new events.

This is stricter than for variables and characters, which lock only when they're used. A global event applies everywhere, so it can't lock chapter by chapter.

## Tips

- Create the checkpoint first, then the event that returns to it.
- An event that fires often interrupts the reader often, so pick a threshold that is rarely crossed.
- The reader sees only the event's text and image before the event moves them.

## Related

- [Checkpoints](/en/story-editor/checkpoints/)
- [Variables](/en/story-editor/variables/)
- [Combat](/en/story-editor/combat/)
