---
title: Node preview
description: Playing a single node the way a reader would see it, and the debug controls that come with it.
helpKey: editor.node-preview
status: published
sidebar:
  order: 14
---
The **Preview** tab in the right panel plays the selected node in a phone-shaped frame. It shows the backdrop, plays the music and offers the dialogue and choices a reader would get. It previews one node, not the whole chapter. Nothing you do here is saved.

The tab always shows the warning *Approximate preview. The final EPOS rendering may differ.*

With no node selected, the tab is empty. On a group node it offers **Open group**, because a group has no content of its own.

![the Preview tab: the approximate-preview notice, Previous and Continue with a page counter, the node playing in a phone frame with the speaker name over the backdrop, and the Variables (debug) panel starting underneath](/screens/en/story-editor/node-preview.png)

## Walking the graph

**Previous** and **Continue** move you from node to node.

- If a node has several incoming links, **Previous** lists them.
- If a node has several outputs, **Continue** lists them.
- If a node has text on several pages, a counter appears beside **Continue**. Preview steps through the text pages first.

## Sound

The **Audio** panel lists music and ambient sound. It has **Play all** and **Pause all**.

A channel inherited from an earlier node is marked **inherited**. A node that stops inheritance says so: *Backdrop inheritance blocked*, *Music inheritance blocked*, *Ambient inheritance blocked*.

## Variables, dice and switches {#debug}

The **Variables (debug)** panel lists every variable with its value. Type a different value to reach a branch without playing the nodes that set it. The value applies only to this preview session.

Once you change something, a **Reset all overrides** button appears in the panel header. It drops every value you typed and any dice value you set by hand on this node.

- A **skill check** shows the whole calculation: the stat, the dice and the target. Set the dice field by hand or roll with **Simulate roll**.
- A **switch** shows **Switch evaluation**: which case it would take and why.

The number in each row is the value the reader arrives with, before this node's events run. This is the number you overwrite. When the node changes a variable, a chip beside it shows the value the reader leaves with. Its tooltip is **Value after this node's events**.

A skill check reads the value from before the node's events. To check a stat that an **Event** has already raised, put the Event on an earlier node. An Event on the same node does not count towards the roll.

## Paths a reader could not take

Preview marks what a reader would not be allowed to do. You can still follow these paths after you confirm.

- A choice with unmet requirements reads *Requirements not met. Click to bypass for debugging*.
- A skill check outcome that the current roll would not produce reads *Wouldn't occur with the current roll*.
- A switch case that the current variables would not select reads *Not taken with current variables*.
- When you leave a node that fires a global event, preview warns that real readers will not reach the steps after it.

## What validation checks

Preview runs one node at a time from the values you give it. Errors that only show across a whole chapter are checked by validation and a real test run:

- a variable that is never set
- a checkpoint that is never passed
- an end node that nothing reaches


## Related

- [The story graph](/en/story-editor/story-graph/)
- [Variables](/en/story-editor/variables/)
- [Skill checks](/en/story-editor/skill-checks/)
- [Conditions](/en/story-editor/conditions/)
- [Testing and contributors](/en/getting-started/testing-and-contributors/)
