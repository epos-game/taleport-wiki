---
title: Checkpoints
description: Marking the points a reader can be sent back to.
helpKey: editor.checkpoints
status: published
sidebar:
  order: 11
---

A **checkpoint** is a marker you drop on a node to say where a reader restarts. It is the landing point for a [global event](/en/story-editor/global-events/) whose **After event** is set to **Return to last Checkpoint**. Put one on the node where the party reaches the mine entrance, and a reader whose health hits 0 four nodes down the shaft resumes at the entrance instead of the top of the chapter. There is nothing to fill in: the component has no fields, and its panel says so with "No configuration options for this component type."

## Where to put them

Drag **Checkpoint** out of the **Components** section of the left palette onto a node, or right-click the node and pick **Insert component**. Where you drop it is the whole decision.

Put one at the start of each self-contained stretch: a scene, a location, a leg of a journey. The test is whether a reader sent back here would feel they had lost a fair amount of progress.

- Too few, and one bad roll costs half an hour of reading. That is how people stop reading.
- Too many, and failure costs nothing, so failure stops meaning anything.

Put one immediately before any stretch that can kill the reader. A node carrying a checkpoint and nothing else is a perfectly good node: the editor counts the marker as content, so it never reports "The node has no content." on it.

## The rules

- One per node. A second one is refused with "This node already has this component."
- Start, End and Group nodes cannot hold one at all. You get "This node type can't hold content components." Put the checkpoint on the first real node after the start instead.
- A node with a cutscene on it may keep its checkpoint. A cutscene pushes everything else off the node, and the checkpoint is one of the two markers allowed to stay (the other one stops media inheritance). That pairing is useful, because a cutscene usually opens a scene and the start of a scene is where you want the reader to land.
- Adding or removing a checkpoint counts as a structural edit, so it is refused once the chapter is published. Settle the placement before you publish.

## A checkpoint inside a group does not count

The check runs against the chapter's own canvas and nothing deeper. A chapter that has a **Return to last Checkpoint** global event and keeps its only checkpoint inside a [group](/en/story-editor/groups/) still fails with "A global event uses the Return to Last Checkpoint behavior but the chapter has no Checkpoint node." Keep at least one checkpoint out on the chapter canvas. If the fight itself is collapsed into a group, the checkpoint in front of it belongs in the parent graph.

The **End of chapter** check works differently again: it threads the reader's path through the groups on the way, but the ending it is looking for still has to sit on the chapter canvas. Do not reason from one check to the other.

While you have a group open, the editor applies the same check to the sub-graph in front of you. A group without a checkpoint of its own therefore reports the error even when the chapter passes. Publishing is gated on the chapter-level check only.

## It marks a position, nothing more

The component carries no data: no variable snapshot, no counter, nothing you can set. Do not build a failure state on the assumption that the return also puts something back. If a lost fight should refund the 2 coins it cost or clear a "door unlocked" flag, write that as an **Event** component, where you can see it and try it in the Preview tab.

## Related

- [Global events](/en/story-editor/global-events/)
- [Node types](/en/story-editor/node-types/)
- [Combat](/en/story-editor/combat/)
