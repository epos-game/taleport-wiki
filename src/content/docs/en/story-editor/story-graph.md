---
title: The story graph
description: Nodes, links and how a reader moves through them.
helpKey: editor.story-graph
status: published
sidebar:
  order: 1
---

A chapter is a **graph**: boxes (nodes) joined by lines (links). The reader enters at the Start node and walks the graph one node at a time until an End node stops them, so the shape you draw on the canvas is the shape of the branching. Take a node named "Cellar door" that carries two paragraphs of narration and a choice transition with "Force the lock" and "Go back upstairs". The two links leaving it are the only two things that can happen next, and you can see both without opening anything.

## What a node is

One node is one screen. It holds:

- a **transition**: the single thing that decides how the reader leaves the node, and
- any number of **components**: the text, dialogue, images, music, sound, cutscenes, events and checkpoints that make up what the reader sees and hears there.

Every node has exactly one transition, and a new node arrives with a simple one already attached. That is what makes the graph readable: to know where a node can lead, you look in one place.

## Links and ports

A transition exposes one or more **output ports**. A link joins an output port to another node's input port. A choice has one port per option, a skill check has Success and Fail, a simple transition has one.

Two rules govern linking, and they are the ones people trip over:

- An output port holds one link. Draw a second link from the same port and the first one is thrown away without asking. Two routes out of a node means two ports, which means a choice, a switch or a skill check.
- An input port accepts any number of links. Bringing several branches back together on one node is normal and costs nothing.

An output port with nothing attached is an error: *"Has an output port that is not connected to any node."* A reader who reaches one is stuck, so the chapter will not publish until you connect it. The check skips two cases. Inside a group, the boundary Start node's output is not examined, and neither are the global-event target nodes that only older chapters still carry.

## Groups

A node can own its own graph. A **group** collapses a self-contained stretch of story into a single box with ports on its boundary, which is how a two-hundred-node chapter stays navigable. Node numbers restart at 1 inside a group, so a chapter and a group can both have a node 7. See [Groups](/en/story-editor/groups/).

## The editor around the graph

- **Left panel**: a **Create Node** item on its own, then three collapsible sections. **Presets** are whole ready-made nodes, **Components** are the pieces you drop onto a node, **Outputs** are the transitions.
- **Right panel**: **Components**, **Outputs**, **Preview** and **Notes**, all for whichever node is selected.
- **Bottom panel**: **Characters**, **Variables**, **Stats** and **Global Events**. Close it when you need the canvas back and reopen it from the **View** menu.

Drag a preset onto the empty canvas to create a node. Drag it onto an existing node and the two are linked for you through that node's first free output. If there is no free output left, the editor says *"This node has no free output to connect a new node here."* instead of guessing.

Right-click a node to insert a component or an output, create a connected node, copy or paste, group the selection, open or dissolve a group, attach a note, or remove the node or one of its links. Right-click the empty canvas for the same node types the Presets section offers.

![the full editor: the node palette open on the left, a small graph on the canvas, and the bottom panel open on the story components](/screens/en/story-editor/editor-layout.png)

## Finding your way around

**Search** (Ctrl/⌘+F) matches a node's name or its number, so if a validation message points at node 47 you can jump straight to it. It shows ten hits at a time, headed *"Showing first 10 of 34"* when there are more, and it searches only the graph you have open, not the groups inside it.

Name your nodes. An unnamed node borrows a snippet of its text component, cut to 40 characters including the three dots, which leaves 37 characters of your prose. A node whose only content is dialogue gets no snippet at all and shows up as **Node 47**. Reviewer comments, validation messages and your own searching all use that label.

On the canvas, Ctrl/⌘+C and Ctrl/⌘+V copy and paste, Delete or Backspace removes the selected nodes and links, Ctrl+Z undoes and Ctrl+Y redoes. Undo history belongs to the chapter you are in and resets when you open another one. **F1** opens the documentation beside the editor: from the Variables, Stats or Global Events tab it opens their own page, elsewhere it opens this one, and Escape closes it. None of these keys fire while you are typing in a field.

## Copying nodes

Copy and paste stay inside one chapter. The clipboard remembers where it was filled, and pasting into a different chapter does nothing and says nothing, so this is not a way to move nodes between chapters.

The rest of what the clipboard does:

- The Start node is skipped rather than copied: *"The start node cannot be copied and was skipped."*
- Copying a group duplicates its inputs and outputs and wires each input straight through to its matching output. The graph inside is not copied, so what you get is a working empty group.
- Pasted nodes take their own references to the images, audio and video they use rather than sharing the originals'. Each paste shifts the copy another 40 px, and every tenth one interrupts to ask whether you still need more.

Copying or deleting more than 20 nodes at once is refused with *"Too many nodes"*. Grouping a selection has no such cap.

## Validation

Validation runs on the open graph 750 ms after your last edit, and again on the server when you publish. **Errors** block publishing: a missing Start or End node, an unconnected output, an End node nothing links into, a choice with no options, a skill check with no stat selected. **Warnings** do not block it: an unreachable node, an empty text component, a dialogue line with no speaker. Work through the warnings anyway, because most of them turn out to be something you meant to come back to.

A group appears in the problem list as a single entry, *"This group contains content with validation issues."*, so a mistake three levels down is one badge you have to drill into. An empty graph reports nothing; the missing-Start-node error only shows up once the chapter has at least one node.

Publishing adds one graph requirement that the problem list never raises: at least one End node reachable from the Start has to have **End of chapter** turned on. Without it readers can finish a branch but never complete the chapter. The End node has to sit on the chapter canvas, because every End node inside a group is one of that group's exits and the check reads it as a link rather than an ending.

Once a chapter is live, the graph **structure** locks while its **content** stays editable. You can rewrite the text on a node. You cannot add, remove or rewire one, and you cannot rename one either, because a rename counts as a structural edit. Get the shape right before you submit.

## Related

- [Node types](/en/story-editor/node-types/)
- [Transitions and choices](/en/story-editor/transitions-and-choices/)
- [Groups](/en/story-editor/groups/)
- [Story structure](/en/best-practices/story-structure/)
