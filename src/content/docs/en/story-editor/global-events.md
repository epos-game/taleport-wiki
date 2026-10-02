---
title: Global events
description: Reactions that fire from anywhere in the story when a variable crosses a threshold.
helpKey: editor.global-events
status: published
sidebar:
  order: 10
---

A **global event** is a rule that watches one variable and reacts wherever the reader happens to be when the value tips over. You write the consequence once for the whole story instead of wiring it into every node that could cause it. A fight that subtracts from Health needs a single event on Health ≤ 0: it shows the "You go down in the dark" text and sends the reader back to their last checkpoint, whether they fell in the cellar or three chapters later on the bridge.

Global events belong to the **story**, not to a chapter, so one written for chapter 1 is live in chapter 9 as well. You manage them in the **Global Events** tab at the bottom of the editor. The tab needs a variable to work with: press **Add event** with none defined and you get "A variable is required to create a global event."

## The fields

Add event creates the event straight away, with the first variable in the list already selected, and opens it for editing. Every field saves on its own as you change it, so the check button in the corner only closes the editor. Ctrl+Z walks back one field at a time.

| Field | What goes in it |
| --- | --- |
| Variable, Operator, Value | The condition being watched, for example Health ≤ 0. |
| After event | Where the reader goes once the event has been shown. |
| Priority | A whole number, 0 unless you change it. |
| Event Text | Bold, italic and underline, up to 2000 characters. |
| Event Image | One image, up to 1 MB, scaled down to fit 1024 px. |

The operator list is shorter here than anywhere else in the editor, and it is drawn as symbols rather than words: `=`, `<`, `≤`, `>`, `≥`. **There is no "does not equal"**, and a Yes / No or List of values variable leaves `=` as the only option. The counter under the text field counts the HTML, so a formatted paragraph reaches 2000 well before 2000 visible characters.

A global event does not route to a node. It shows its text and image, then applies the behaviour you chose, and where the reader ends up is decided by that behaviour and nothing else. The subtitle above the tab still claims an event triggers a node; that wording is left over from an older design.

## After the event

| Behaviour | Where the reader goes |
| --- | --- |
| Return to Start | Back to the chapter's start node. |
| Return to last Checkpoint | Back to the last checkpoint they passed. |
| Continue | On from where they were. |

Return to last Checkpoint is almost always the right choice for a failure state. Returning to the start punishes a reader for a mistake made an hour in, and continuing makes the event feel weightless. See [Checkpoints](/en/story-editor/checkpoints/).

## What validation checks

Every global event is checked against whichever chapter is being validated, so one badly set event reports against every chapter in turn. The first three are errors that block publishing.

- The variable the event watches must still exist.
- Return to Start needs a start node in that chapter.
- Return to last Checkpoint needs a checkpoint node in the chapter's own top-level graph. A checkpoint sitting inside a group does not count, so if the fight is collapsed into a group, the checkpoint has to live outside it too.
- Two events sharing the same variable, operator and value raise a warning. Usually one of them is a leftover.

While you are working inside a group, these checks run against the graph you have open. A group without its own checkpoint reports the checkpoint error even though the chapter itself passes, so step back up to the chapter to see the real result.

## Trying one out

The **Preview** tab lists the story's global events, highest priority first, with a Preview button on each one so you can see the text and image the way the reader gets them.

When a node's events move a variable so that a condition goes from unmet to met, the preview opens that event by itself; if several become true at once, it takes the one with the highest priority. Stepping forward from such a node asks first: "A global event triggers when leaving this node, so real users won't reach the next steps. Continue anyway for debugging?" Priority ordering is what the editor's preview does with the number. The package carries it to the app, which decides the rest.

## Locking

As soon as any chapter of the story goes live, all of its global events lock, and so do the variables they watch. A locked event carries a padlock, cannot be edited or deleted, and the server refuses the change even if you reach it another way. Adding new events still works. This is stricter than locking for variables and characters, which lock by use: a global event applies everywhere, so there is no chapter-by-chapter way to scope it.

## Practical advice

- Write the checkpoint into the chapter before the event that returns to it, and validation never gets a chance to stop you.
- Keep them rare. An event that fires often reads as the story interrupting itself.
- Write the text as a scene. It is all the reader sees before they are moved.

## Related

- [Checkpoints](/en/story-editor/checkpoints/)
- [Variables](/en/story-editor/variables/)
- [Combat](/en/story-editor/combat/)
