---
title: Checkpoints
description: Marking the points a reader can be sent back to.
helpKey: editor.checkpoints
status: published
sidebar:
  order: 11
---
A **checkpoint** is a marker on a node. It sets where a reader restarts. A [global event](/en/story-editor/global-events/) sends the reader back to it when its **After event** is **Return to last Checkpoint**.

A checkpoint has nothing to set. Just drop it on a node.

## Adding a checkpoint

Do one of these:

- Drag **Checkpoint** from the **Components** section of the left palette onto a node.
- Right-click the node and pick **Insert component**.

A chapter with a **Return to last Checkpoint** global event needs at least one checkpoint on its canvas. Otherwise validation reports an error.

A node with only a checkpoint is valid. The editor counts the marker as content, so it does not report "The node has no content."

## Rules

- A node holds one checkpoint. A second one is refused: "This node already has this component."
- Start, End and Group nodes cannot hold one: "This node type can't hold content components." Use the first real node after the start.
- A cutscene removes every other component from its node, except the checkpoint and the marker that stops media inheritance.
- Adding or removing a checkpoint is a structural edit. The editor refuses it once the chapter is published.

## Checkpoints in groups

The **Return to last Checkpoint** check looks only at the chapter's own canvas. A checkpoint inside a [group](/en/story-editor/groups/) does not count. If the only checkpoint is in a group, the chapter fails: "A global event uses the Return to Last Checkpoint behavior but the chapter has no Checkpoint node."

The **End of chapter** check follows the reader's path through groups. The ending it looks for must still be on the chapter canvas.

## What a return restores

A return restores nothing, not even variable values. To change a variable on the way back, set it in an **Event** component. You can test the result in the **Preview** tab.

## Related

- [Global events](/en/story-editor/global-events/)
- [Node types](/en/story-editor/node-types/)
- [Combat](/en/story-editor/combat/)
