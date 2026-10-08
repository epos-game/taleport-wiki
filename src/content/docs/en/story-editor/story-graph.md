---
title: The story graph
description: Nodes, links and how a reader moves through them.
helpKey: editor.story-graph
status: published
sidebar:
  order: 1
---
A chapter is a **graph**: boxes (nodes) joined by lines (links). The reader enters at the Start node and walks the graph one node at a time. Only an End node stops them.

## Nodes

A node shows the reader one screen. It holds:

- a **transition**, which sets how the reader leaves the node
- any number of **components**: text, dialogue, images, music, sound, cutscenes, events and checkpoints

Every node has exactly one transition. A new node starts with a simple one.

## Links and ports

A transition has one or more **output ports**. A link joins an output port to another node's input port. A choice has one port per option. A skill check has Success and Fail. A simple transition has one port.

- An output port holds one link. If you draw a second link from the same port, it replaces the first. For two routes out of a node, use a choice, a switch or a skill check.
- An input port accepts any number of links. Several branches can join on one node.

An output port with nothing attached is an error: *"Has an output port that is not connected to any node."* A reader who reaches such a port gets stuck. You cannot publish the chapter until you connect it.

The check skips two cases:

- A Start node inside a group. It is one of the group's entrances, and its output may carry no link.
- The output of a node with the **Global event target** badge. Look for the small lightning bolt on the node.

## Groups

A node can contain its own graph. A **group** collapses a self-contained stretch of story into one box with ports on its boundary. Node numbers restart at 1 inside a group, so a chapter and a group can both have a node 7. See [Groups](/en/story-editor/groups/).

## The editor panels

The editor needs a browser at least about 960 px wide. In a narrower window you see **The editor needs a bigger screen** and a **Back** button.

- **Left panel**: a **Create Node** item, then three collapsible sections. **Presets** are ready-made nodes. **Components** are the pieces you drop onto a node. **Outputs** are the transitions.
- **Right panel**: **Components**, **Outputs**, **Preview** and **Notes** for the selected node.
- **Bottom panel**: **Characters**, **Variables**, **Stats** and **Global Events**. Close it when you need the full canvas. Reopen it from the **View** menu.

To create a node, drag a preset onto the empty canvas. Drag it onto an existing node and the editor links the two through that node's first free output. If there is none, the editor says *"This node has no free output to connect a new node here."*

Right-click a node to:

- insert a component or an output
- create a connected node
- copy or paste
- group the selection
- open or dissolve a group
- attach a note
- remove the node or one of its links

Right-clicking the empty canvas offers the same node types as the Presets section.

![the full editor: the palette open on the left, the graph on the canvas, the Characters tab open in the bottom panel, and the Components tab of the right panel showing the selected node](/screens/en/story-editor/editor-layout.png)

## Finding your way around

**Search** (Ctrl/⌘+F) matches a node's name or number. If a validation message points at node 47, you can jump straight to it. Search shows ten hits. When there are more, it says *"Showing first 10 of 34"* above them. It searches only the graph you have open, not the groups inside it.

An unnamed node shows a snippet of its text component. The snippet is at most 40 characters including the three dots, which leaves 37 characters of your text. A node with only dialogue gets no snippet and shows as **Node 47**. You see this label in reviewer comments, in validation messages and in search.

Keys on the canvas:

- Ctrl/⌘+C and Ctrl/⌘+V copy and paste.
- Delete or Backspace removes the selected nodes and links.
- Ctrl/⌘+Z undoes and Ctrl/⌘+Y redoes. Undo history belongs to the open chapter and resets when you open another one. It holds the last 150 steps. When older steps are dropped, undo tells you: *"You have reached the start of the undo history. Older changes are beyond the history limit and can no longer be undone."*
- **F1** opens the documentation beside the editor. **?** does the same when your cursor is not in a text field. Escape closes it.

None of these keys work while you type in a field.

The documentation page that opens depends on where you are:

- The **Characters** tab opens Characters and dialogue.
- The **Global Events** tab opens Global events.
- **Variables** and **Stats** both open Variables, because the two tabs use the same form.
- Elsewhere, this page opens.

## Copying nodes

Copy and paste work only inside one chapter. You cannot paste nodes into another chapter, so you cannot move nodes between chapters this way.

- The editor skips the Start node: *"The start node cannot be copied and was skipped."*
- Copying a group duplicates its inputs and outputs and wires each input straight to its matching output. The graph inside is not copied, so you get a working empty group.
- A pasted node uses the same images, audio and video files as the original. It keeps its own entries for them and does not share the original's.
- Each paste shifts the copy a little to the side. Every tenth paste asks whether you still want more.

The editor refuses to copy or delete more than 20 nodes at once: *"Too many nodes"*. Grouping a selection has no such cap.

## Validation

Validation runs on the open graph shortly after your last edit, and again when you publish.

Errors block publishing. Warnings do not. [Story guidelines](/en/publishing/story-guidelines/) lists both in full.

A group appears in the problem list as one entry: *"This group contains content with validation issues."* Open the group to find the error inside. An empty graph reports nothing. The missing-Start-node error appears only once the chapter has at least one node.

Publishing has one more graph requirement. It is checked in the publish dialog. At least one End node reachable from the Start node must have **End of chapter** turned on. Without it, readers can finish a branch but never complete the chapter. That End node must sit on the chapter canvas. An End node inside a group is a group exit, so the check reads it as a link, not an ending.

:::caution[Structure locks after release]
Once a chapter is live, the graph **structure** locks. Its **content** stays editable. You can rewrite the text on a node. You cannot add, remove, rewire or rename a node, because a rename counts as a structural edit.
:::

## Related

- [Node types](/en/story-editor/node-types/)
- [Transitions and choices](/en/story-editor/transitions-and-choices/)
- [Groups](/en/story-editor/groups/)
- [Story structure](/en/best-practices/story-structure/)
- [Node preview](/en/story-editor/node-preview/)
- [Story guidelines](/en/publishing/story-guidelines/)
- [Published content restrictions](/en/publishing/published-content-restrictions/)
- [Story lifecycle](/en/getting-started/story-lifecycle/)
