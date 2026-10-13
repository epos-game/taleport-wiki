---
title: Groups
description: Collapsing a stretch of story into one box.
helpKey: editor.groups
status: published
sidebar:
  order: 13
---
A group collapses a stretch of story into one box. It is a node with its own graph inside. On the parent canvas you see one box with ports along its edges. Open it to see an ordinary graph with its own start and end nodes.

Select the box and the right panel shows what is inside:

- nodes
- links
- decision points
- standard pages (text counted in pages of 1,800 characters)
- total reading time

Under the counts is an **Enter sub-graph** button.

![the right-hand panel for a selected group, with the sub-graph summary and the Enter sub-graph action](/screens/en/story-editor/group-panel.png)

## When to use a group

Use a group for a stretch of story with one way in and few ways out. Good fits are a side quest, a flashback, a puzzle or a self-contained scene. A section with seven exits becomes one box with seven labelled ports instead of seven branches.

## Creating a group

There are two ways.

**From the palette.** Drag the **Group** preset onto the canvas.

- It has one input port, Input, and one output port, Output.
- Inside, a start node links directly to an end node.
- The new group has no name. It shows its node number until you name it.

**From a selection.** Select the nodes and choose **Group selection** in the right-click menu.

- The nodes move into the group's own graph and are renumbered from 1. The links between them move too.
- The box appears in the centre of the old selection.
- Every input of a selected node that nothing in the selection feeds gets a start node inside the group and an input port on the box.
- Every output of a selected node that does not lead to another selected node gets an end node inside the group and an output port on the box. So an output you never connected gets an exit of its own.
- Links that crossed the edge of the selection move onto the matching ports. The group stays connected the way the selection was.

The selected nodes must be connected to each other. Otherwise you get "Grouped nodes must be connected to each other." **Group selection** is not offered when the selection contains a start node, an end node, or a node that a global event targets.

## Ports

An input port on the box is a start node inside the group. An output port is an end node. To add an entrance or an exit, add another start or end node inside the group.

When you delete a boundary node, its port goes too, along with the links on that port in the parent graph.

You name a port by renaming its boundary node. The box shows the new label after you leave the group. The preview panel reminds you: "Rename this node to label the input port." Renaming an end node inside renames the matching output port on the box.

An empty group from the palette starts with Input and Output. A group made from a selection names each port after the node it was attached to.

![a group node on the parent canvas, one input port on its left edge and two output ports on its right, wired to the surrounding nodes](/screens/en/story-editor/group-node.png)

## Inside a group

Node numbers restart at 1 inside every group. Node 3 in a group and Node 3 in the chapter are different nodes. Graph search covers only the graph you are in.

Open a group in any of three ways:

- **Open group** in the node's right-click menu
- the **Enter sub-graph** button in the right panel
- **Open group** in the Preview tab

Inside, a trail of the parent graphs shows in the top-left corner of the canvas. To go back, click an earlier step in the trail or use **Go to parent graph**.

The canvas inside has the same palette, right-click menu and shortcuts. You can nest another group. A chapter canvas takes exactly one start node. A group takes as many start and end nodes as you need. Each one is a port on the box.

![inside a group, the breadcrumb reading Chapter then Group, two start nodes feeding the same first node and three end nodes leaving it](/screens/en/story-editor/group-inside.png)

Media inheritance crosses the group boundary:

- Music playing when the reader reaches the group's input port passes to the start node inside.
- Whatever plays at an output port passes to the nodes that port links to outside.

Music from a scene keeps playing when you move the scene into a group.

## Limits

- A group holds no components (text, backdrop, music). The editor refuses them.
- You cannot change a group's transition, or change another transition into a group: "A group node's transition can't be changed. Delete the group and create a new node instead."
- Copying a group copies only the shell: "Group contents were not copied. Only the group's inputs and outputs were duplicated." The pasted group is empty and has the same ports.
- You can nest groups. You cannot ungroup a group that contains another group: "This group contains nested groups. Ungroup the inner groups first." Ungroup from the innermost group outward.
- Ungrouping puts the inner nodes and links back into the parent graph. Links that crossed the boundary point back at the nodes they came from. The restored nodes are numbered from the end of the parent graph. They do not get their old numbers back.

## Validation inside a group

The graph inside a group is checked like any other. Only three rules are dropped:

- The end does not have to be reachable from the start.
- An end node may have nothing linking into it.
- More than one start node is allowed.

The boundary start node's own output is also exempt from the connected-output rule.

All other rules still apply:

- A group with no start node reports "The story graph is missing a Start node."
- A group with no end node reports "The story graph is missing an End node."
- A start node with an incoming link is an error.

The boundary is checked from both sides:

| Problem | Message | Level |
| --- | --- | --- |
| An input whose start node leads nowhere inside | "This group input is not connected to any node inside the group." | Error |
| An output whose end node is fed by nothing inside | "This group output is not connected to any node inside the group." | Error |
| An input port with nothing linking into it from the parent graph | "One or more group inputs have no incoming connection." | Warning |

On the parent canvas, issues from the group and the groups inside it combine into one issue on the box: "This group contains content with validation issues." The panel shows it as Contains errors or Contains warnings. Open the group to see which node causes it.

The global-event check looks only at the chapter's own graph. A checkpoint inside a group does not satisfy a **Return to last Checkpoint** event. Put the checkpoint on the chapter canvas.

## Tips

- A group made from a selection is called Group. A group from the palette has no name and shows its node number. Give it a name.
- Once the chapter is published, the structure is locked. You can no longer change the ports of a group that has content: "This chapter is published, so its graph structure is locked. You can still edit component content and republish." Decide the ports before you fill the group.

## Related

- [The story graph](/en/story-editor/story-graph/)
- [Node types](/en/story-editor/node-types/)
- [End nodes](/en/story-editor/end-nodes/)
- [Story structure](/en/best-practices/story-structure/)
