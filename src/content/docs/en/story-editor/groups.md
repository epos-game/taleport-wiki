---
title: Groups
description: Collapsing a stretch of story into one box.
helpKey: editor.groups
status: published
sidebar:
  order: 13
---

A group is a node that holds a graph of its own. From the parent canvas it is one box with ports along its edges; open it and you are standing in an ordinary graph with its own start and end nodes. Use one when a stretch of story has taken over the canvas: the sixteen nodes of searching the cellar collapse into a single box called The cellar, with one input and two outputs, "Found the key" and "Left empty-handed". The chapter gets its shape back and the cellar is one click away.

Select the box and the right panel counts what is inside: nodes, links, decision points, standard pages and total reading time, with an **Enter sub-graph** button under them.

![the right-hand panel for a selected group, with the sub-graph summary and the Enter sub-graph action](/screens/en/story-editor/group-panel.png)

## When a group helps

The test is one way in and few ways out. A side quest, a flashback, a puzzle, a scene that stands on its own: those collapse cleanly.

A section with one entrance and seven exits does not. You have moved the complexity rather than reduced it, and now you read seven port labels on a box instead of seeing the branches. Leave that one on the main canvas.

## Making one

From the palette, drag the **Group** preset onto the canvas. It arrives with one input port called Input, one output called Output, and inside it a start node wired straight to an end node. The node has no name yet, so it reads as Node 12 until you give it one.

From a selection, pick the nodes and choose **Group selection** in the right-click menu. The selected nodes move into the new sub-graph and are renumbered from 1, the links that ran between them come along, and the box lands at the centre of where the selection was.

The ports are not worked out from which links crossed the edge of your selection. They are worked out from ports. Every input port of a selected node that nothing inside the selection feeds gets a start node inside the group and an input port on the box; every output port that nothing inside consumes gets an end node and an output port. A dangling output you never wired up still earns its own exit. The links that did cross the edge are then rewired onto the matching ports, so the group arrives connected the way the selection was.

Not every selection is accepted. The nodes have to hang together, so grouping two unrelated clusters gets you "Grouped nodes must be connected to each other." And **Group selection** is not offered at all when the selection holds a start node, an end node, or a node that a global event targets.

## Ports

An input port on the box is a start node inside the group, and an output port is an end node. That is how the two sides line up, and it is how you add an entrance or an exit: put another start or end node in the sub-graph and a port appears for it. Delete that boundary node and the port goes with it, taking whatever was linked to it in the parent graph.

There is no field for a port label. Each port takes its name from its boundary node, and the box picks the new label up when you leave the group. Hence the line in the preview panel: "Rename this node to label the input port." Rename the end node inside to Found the key and the second output on the box reads Found the key. An empty group from the palette starts with Input and Output; a group made from a selection names each boundary after the node it was attached to.

![a group node on the parent canvas, one input port on its left edge and two output ports on its right, wired to the surrounding nodes](/screens/en/story-editor/group-node.png)

## Inside a group

Node numbers restart at 1 in every sub-graph, so Node 3 in the cellar and Node 3 in the chapter are two different nodes. Graph search only looks at the graph you are standing in.

There are three ways in: **Open group** on the node's right-click menu, the **Enter sub-graph** button in the right panel, and **Open group** in the Preview tab. While you are inside, a breadcrumb trail sits in the top-left corner of the canvas. Click an earlier crumb, or use **Go to parent graph**, to come back out.

Media inheritance crosses the boundary. A music bed still playing when flow reaches the group's input port is handed to the start node inside, and whatever is playing at an output port is handed on to the nodes that port links to outside. Nothing travels around the box, only through it, so collapsing a scene into a group does not silence it.

## What a group cannot do

- A group holds no components. No text, no backdrop, no music; the editor refuses the component instead of warning about it, because the content belongs inside.
- Its transition cannot be changed in either direction: "A group node's transition can't be changed. Delete the group and create a new node instead."
- Copying one copies the shell: "Group contents were not copied. Only the group's inputs and outputs were duplicated." The new boundaries are paired up and linked through, so you paste a working empty group with the same ports.
- Nesting works, but a group holding another group cannot be dissolved: "This group contains nested groups. Ungroup the inner groups first." Unwinding goes from the inside out.
- Ungrouping puts the inner nodes and links back into the parent graph and points the crossing links at the nodes they originally came from. The restored nodes are numbered from the end of the parent graph, so they do not get their old numbers back.

## Validation inside a group

A sub-graph is validated like any other graph, with three rules dropped. The end does not have to be reachable from the start, an end node may sit there with nothing linking into it, and more than one start node is allowed, which is the point: a group with three entrances has three start nodes. The boundary start node's own output is exempt from the connected-output rule as well.

Everything else still applies. A group with no start node reports "The story graph is missing a Start node.", one with no end node reports "The story graph is missing an End node.", and a start node with an incoming link is still an error.

The boundary is then checked from both sides:

- An input whose start node leads nowhere inside: "This group input is not connected to any node inside the group." That is an error.
- An output whose end node is fed by nothing inside: "This group output is not connected to any node inside the group." Also an error.
- An input port with nothing linking into it from the parent graph: "One or more group inputs have no incoming connection." A warning, and usually a port you added and never used.

From the parent canvas you see none of this in detail. Everything in the group and in the groups below it rolls up into one issue on the box, "This group contains content with validation issues.", shown in the panel as Contains errors or Contains warnings. Open the group to find out which node it was.

The global-event check is the trap here. It runs against the chapter's own graph, so a **Return to last Checkpoint** event is not satisfied by a checkpoint buried inside a group, and while you work inside a group that has no checkpoint of its own the same error is reported there.

## Practical advice

- Name the box. A group made from a selection is called Group, and one dragged from the palette has no name at all and shows as Node 14. "The cellar" says what is inside; neither default does.
- Decide the exits before you fill the group. Re-plumbing a full group is unpleasant, and once the chapter is published the structure is locked: "This chapter is published, so its graph structure is locked. You can still edit component content and republish."
- Keep the nesting shallow. A group three levels down is the navigation problem you were trying to solve.

## Related

- [The story graph](/en/story-editor/story-graph/)
- [Node types](/en/story-editor/node-types/)
- [End nodes](/en/story-editor/end-nodes/)
- [Story structure](/en/best-practices/story-structure/)
