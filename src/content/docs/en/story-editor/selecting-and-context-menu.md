---
title: Selecting nodes and the right-click menu
description: Working on several nodes at once, and what the right-click menu offers.
helpKey: editor.selection
status: published
sidebar:
  order: 18
---
Two things speed up work on a big graph: selecting several nodes at once, and the right-click menu.

## Selecting several nodes

Drag a box across empty canvas. Every node the box touches is selected, and a selected node gets a dashed orange outline. Move the selection by dragging one of its nodes, and the others move with it.

![a box dragged across empty canvas, with three nodes inside or touched by it shown with a dashed orange outline](/screens/en/story-editor/multi-select.png)

With a selection you can:

- move all the nodes together,
- group them into one collapsible node. See [Groups](/en/story-editor/groups/),
- copy them with Ctrl/⌘+C and paste with Ctrl/⌘+V,
- remove them with Delete or Backspace.

Copying or deleting more than 20 nodes at once is refused: "Too many nodes". Grouping a selection has no such limit. See [Copying nodes](/en/story-editor/story-graph/#copying-nodes).

## The right-click menu

Right-click a node, a link or empty canvas. What you see depends on what you clicked.

### On a node

![the right-click menu on a node: Add note, Insert component, Insert output, Undo, Redo, Group selection, Copy, Paste and Remove node](/screens/en/story-editor/context-menu.png)

| Item | What it does |
| --- | --- |
| **Add note** | Attaches a note to the node. |
| Node types | Creates a new node connected to this node's first free output. It is missing when the node has no free output. |
| **Insert component** | Adds a component to the node. A component the node already has, or one that can't be combined with it, is greyed out. See [Node types](/en/story-editor/node-types/#component-rules). |
| **Insert output** / **Update output** | Changes the node's transition. The entry reads **Update output** when the node already has a transition other than simple. See [Swapping a transition](/en/story-editor/transitions-and-choices/#swapping). |
| **Undo**, **Redo** | Steps back or forward. Greyed out when there is nothing to undo or redo. |
| **Group selection** | Turns the selected nodes into a group. |
| **Copy**, **Paste** | Copies the selection, pastes what you copied. |
| **Remove node** | Deletes the node. |

On a group node the menu also has **Open group** and **Ungroup**. Inside a group it has **Go to parent graph**.

### On several nodes

Right-click inside a selection and the menu acts on all of it: **Undo**, **Redo**, **Group selection**, **Copy**, **Paste** and **Remove**.

### On a link

**Remove link** deletes the link, and the node ports stay. **Undo** and **Redo** are there too.

### On empty canvas

The menu lists the same node types as the **Presets** section, and creates the node where you clicked. **Paste** pastes copied nodes there.

### In a published chapter

While a chapter is live, its graph structure is locked. The menu then offers only **Add note**, **Copy**, and **Open group** or **Go to parent graph**. See [The story graph](/en/story-editor/story-graph/).

## Related

- [The story graph](/en/story-editor/story-graph/)
- [Groups](/en/story-editor/groups/)
- [Node types](/en/story-editor/node-types/)
