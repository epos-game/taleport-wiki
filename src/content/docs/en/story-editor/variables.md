---
title: Variables
description: The numbers, flags and lists that remember what the reader did.
helpKey: editor.variables
status: published
sidebar:
  order: 5
---
Your story remembers values in variables. A variable can be a whole number, a yes/no switch, or a value from a list you name yourself. Variables belong to the **story**, not to a chapter, so a value set in one chapter can be read in any later chapter.

An **Event** component on a node writes to a variable. Conditions on choices, switches and skill checks read it.

## Stats and variables

Variables come in two kinds: stats and plain variables. The kind depends on the tab where you create it, **Stats** or **Variables**. You choose the kind when you create the variable, and you can't move it to the other tab later.

![the Variables tab, each row naming a variable with its default value under it](/screens/en/story-editor/variables-panel.png)

The kind matters in two places:

- A [skill check](/en/story-editor/skill-checks/) can only roll against a stat.
- In a condition, a stat has a person icon and a variable has a tag.

A reading app can show stats and variables as two lists, but that's up to the app.

Put a value that a skill check tests in the Stats tab, even if the check rolls no die. Put values that are only read and set in the Variables tab.

![the Stats tab, holding the same kind of rows](/screens/en/story-editor/stats-panel.png)

## Value types

| Type | Holds | Typical use |
| --- | --- | --- |
| **Number** | A whole number. It can have a minimum and a maximum. | Stats, counters, resources |
| **Yes / No** | One of two states. | Flags |
| **List of values** | One value from a set you define, each with its own label. | States that exclude each other: a faction, a route, a stage of a relationship |

A minimum and a maximum exist only on Number variables, and they work as a pair. If you fill in only one, saving drops both. Switching a variable to Yes / No or List of values clears them too.

The editor refuses a minimum above the maximum: "Maximum value must be greater than or equal to the minimum value." The default must be inside the range.

**List of values** replaces several Yes / No variables that must never be true at the same time. Each entry has a numeric key and a label of up to 100 characters. New entries are named "Label 1", "Label 2" and so on.

Add labels to a list before an event points at it. Otherwise the editor refuses the event: "The selected variable has no enum labels defined. Please add labels to the variable before using it."

## Creating a variable

Fill in the form:

- **Name** is required and can be up to 100 characters.
- **Type** and **Default value**. Every reader starts with the default value.
- **Min value** and **Max value** are only for the Number type.

**Add variable** creates the variable right away and opens it for editing. It gets a name like "Variable 1", and the number counts across both tabs. **Add statistic** in the Stats tab names a new row the same way. If you don't want a row, delete it from the list.

The **Create Variable** button inside an Event component opens the same form. It always creates a stat, so the new item appears in the Stats tab.

## Changing a variable

An **Event** component on a node changes a variable. **Add Event** adds a row. Rows apply when the reader arrives at the node, in the order listed, and you can drag them to reorder them.

Each row names a variable, an operation and a value. Each row also has a name of up to 200 characters and an optional description of up to 1000. The counter under the description includes hidden formatting codes.

| Operation | Reads as | Available on |
| --- | --- | --- |
| **=** | set to | every type |
| **+** | increase by | Number only |
| **-** | decrease by | Number only |

Yes / No and List of values variables can only be set. When an event points at one of them, the operation switches to **set to** and the value resets. Yes / No goes back to No, and a list goes back to its first label.

:::caution[Events ignore Min and Max]
Increase and decrease do not use the bounds. Min and Max are checked for a default value and for a value in a condition, and they do not limit the result of an event. A number with a maximum of 10, at 9, becomes 12 when an event adds 3. To keep a value under its ceiling, put a condition before the event.
:::

Event rows are fixed once the chapter goes live. In a published chapter the component is a read-only list, without the **Add Event** button, the pencil, the bin or dragging. Each row keeps its variable, operation and value. The **Preview** tab shows the numbers before you publish the chapter.

## Locking

A variable locks as soon as a live chapter uses it. You can't rename a locked variable, change its type or its bounds, or delete it. Its editor doesn't open.

The row shows a padlock. Its tooltip reads "Used by a published chapter: {0}. It unlocks when no published chapter uses it any more. You can add a new one instead." {0} stands for the chapters that hold the lock, each as its sequence number and title, separated by commas. If no chapter is listed, the tooltip reads "Locked by a published story. You can add a new one instead."

"Uses" means any of these, anywhere in a live chapter (groups included):

- an event changes it
- a choice, a switch condition or a skill check tests it
- a [global event](/en/story-editor/global-events/) targets it. Global events apply story-wide, so every variable one targets locks the moment any chapter of the story goes live.

The lock updates itself. When the usage goes away, or the chapter is no longer live, the variable unlocks. You can always add a new variable.

## Related

- [Conditions](/en/story-editor/conditions/)
- [Player characters](/en/story-editor/player-characters/)
- [Global events](/en/story-editor/global-events/)
- [Skill checks](/en/story-editor/skill-checks/)
