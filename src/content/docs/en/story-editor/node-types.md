---
title: Node types
description: The transitions and components a node can be built from.
helpKey: editor.node-types
status: published
sidebar:
  order: 2
---

A node is built from two kinds of part. Exactly one transition decides how the reader leaves it, and any number of components decide what the reader sees and hears while they are on it. That split lets you rework the branching without touching the writing: a node named Cellar door carrying a background image, three lines of dialogue and a music bed becomes a fork the moment you swap its simple transition for a choice with two options, and the image, the dialogue and the music stay exactly where they were.

## Transitions

The editor calls transitions **Outputs**, in the palette and on the right-hand panel alike.

| Transition | Ports | Use it when |
| --- | --- | --- |
| **Start** | No input, one output | The chapter's entry point. |
| **Simple** | One in, one out | The story continues in one direction. |
| **Choice** | One in, one out per option | The reader picks. See [Transitions and choices](/en/story-editor/transitions-and-choices/). |
| **Skill Check** | One in, Success and Fail | The outcome depends on a stat, optionally with a dice roll. See [Skill checks](/en/story-editor/skill-checks/). |
| **Switch** | One in, one out per condition, plus a built-in **Default** | The story branches on story state without the reader choosing. See [Conditions](/en/story-editor/conditions/). |
| **Group** | One port per Start or End node inside the group | The node contains a subgraph. See [Groups](/en/story-editor/groups/). |
| **End** | One in, no outputs | The chapter ends here. See [End nodes](/en/story-editor/end-nodes/). |

A switch's **Default** port is always there and is an output like any other, so it has to be connected.

The palette's Outputs section lists six of the seven, Start included. The one place Start is left out is the right-click **Insert output** submenu on a node. A graph still takes a single start, though: drop a second one and the editor refuses with "Only one Start node is allowed in a graph." Group is the transition the palette does not offer as an output at all. You get a group from the Presets section, or by selecting nodes and grouping them.

### Changing a transition

A new node arrives with a simple transition. Changing it keeps the node and its components, so you are changing the exit rather than rebuilding the screen. The incoming link survives, because the input port is carried over.

Outgoing links are remapped by position, not by meaning. The link on the first old output moves to the first new output, the second to the second, and any link whose position does not exist on the new transition is deleted. Turn a three-option choice into a skill check and you keep two links, now on Success and Fail, and lose the third without being asked.

Two changes are refused outright:

- A group's transition cannot be changed in either direction. Delete the group and make a new node instead.
- A node holding a cutscene takes only the simple transition: "This node holds a cutscene, which only works with a simple transition. Remove the cutscene first."

## Components

| Component | What it does |
| --- | --- |
| **Text** | Narration and prose, with an optional voice-over recording. |
| **Dialogue** | An ordered list of lines, each optionally spoken by a character and optionally carrying a voice-over. |
| **Image Background** | A still backdrop behind the node. |
| **Background video** | A moving backdrop behind the node. |
| **Cutscene** | A video that plays as the node, rather than behind it. |
| **Background Music** | Music under the node, optionally looping. |
| **Ambient Sound** | An atmosphere layer under the node, independent of music, optionally looping. |
| **Event** | Changes a variable when the reader reaches the node. See [Variables](/en/story-editor/variables/). |
| **Checkpoint** | Marks a return point. See [Checkpoints](/en/story-editor/checkpoints/). |

## What a node may not hold

The same rules run twice: when you add a component, and again at validation. The editor and the problem list therefore never disagree about what a node may hold.

- One component of each type per node. A second text component, a second music track or a second checkpoint is refused with "This node already has this component."
- Text and dialogue cannot share a node. A sentence of description followed by a spoken line is two nodes, not one.
- Image Background and Background video share the single backdrop slot, so a node takes one or the other.
- A cutscene owns its node. Only a checkpoint and an inheritance stop marker may sit beside it, and only when the transition is simple. The cutscene is the screen.
- Start, End and Group nodes hold nothing: "This node type can't hold content components." They are structure.

## Media inheritance

There are three independent media channels: the **backdrop** (image or video), **music** and **ambient sound**. Each resolves separately, so music can run across a whole scene while the backdrop changes under it.

Carrying a channel forward is opt-in. A new media component affects its own node only until you switch on **Keep displaying** (backdrop) or **Keep playing** (music, ambient). Turn it on at the top of a scene and every node downstream inherits it until something stops it, which is what makes a twelve-node conversation cheap to build.

![the right-hand Components tab of a node that inherits both its music and its backdrop, each card naming the node it is inherited from](/screens/en/story-editor/inherited-media-panel.png)

How a node works out what to play:

- A node carrying its own component of that channel never inherits, even when that component is still empty. Setting a backdrop replaces the inherited one.
- The nearest source wins, counted in links travelled.
- Two different sources the same number of links away cancel each other out. Nothing plays on that node, and nothing carries past it either, so the channel stays silent downstream until a new source appears or you give a node its own. The editor says "Several sources reach this node, so nothing plays automatically" and offers **Go to source node** or **Add your own**.
- A stop marker ends the channel at its node and for everything after it.
- End nodes stop propagation, and so does a group node in the parent graph. Media still crosses group boundaries, though: whatever reaches a group's input port is seeded onto the Start node inside, and whatever leaves an output port is seeded onto the nodes wired to it outside. A scene's music survives being collapsed into a group.
- A cutscene hides every channel, on its own node only. Inherited media resumes on the nodes after it.

### Stopping a channel

Stop markers are not in the palette. On a node that is receiving inherited media, the card for that channel carries a red bin button tooltipped **Stop inheritance**. The node then reads "Media inheritance is stopped here. This node and the nodes after it won't inherit this from upstream", and you can undo it with **Resume inheritance** or replace it with **Use my own media**. Dropping a real media component of that channel onto the node replaces the marker too. This is how a scene goes quiet.

## Related

- [The story graph](/en/story-editor/story-graph/)
- [Transitions and choices](/en/story-editor/transitions-and-choices/)
- [Images](/en/media/images/)
- [Background music](/en/media/background-music/)
