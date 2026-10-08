---
title: Node types
description: The transitions and components a node can be built from.
helpKey: editor.node-types
status: published
sidebar:
  order: 2
---
A node is built from two kinds of parts:

- Exactly one **transition** sets how the reader leaves the node.
- Any number of **components** set what the reader sees and hears on the node.

The two are independent. When you swap the transition, the components stay.

## Transitions

The palette and the right-hand panel call transitions **Outputs**.

| Transition | Ports | Used when |
| --- | --- | --- |
| **Start** | No input, one output | The chapter's entry point. |
| **Simple** | One in, one out | The story continues in one direction. |
| **Choice** | One in, one out per option | The reader picks. See [Transitions and choices](/en/story-editor/transitions-and-choices/). |
| **Skill Check** | One in, Success and Fail | The outcome depends on a stat, optionally with a dice roll. See [Skill checks](/en/story-editor/skill-checks/). |
| **Switch** | One in, one out per condition, plus a built-in **Default** | The story branches on what it remembers, without the reader choosing. See [Conditions](/en/story-editor/conditions/). |
| **Group** | One port per Start or End node inside the group | The node contains a graph of its own. See [Groups](/en/story-editor/groups/). |
| **End** | One in, no outputs | The chapter ends here. See [End nodes](/en/story-editor/end-nodes/). |

Things to know:

- A switch's **Default** port is always there. Connect it like any other output.
- The Group transition is not in the Outputs section of the palette. Create it from the **Presets** section, or by grouping selected nodes.
- Start is in the palette but not in the right-click **Insert output** submenu. A chapter canvas takes only one Start. The editor refuses a second: "Only one Start node is allowed in a graph." Inside a group this rule does not apply. Each Start node there is one entrance of the group.
- A new node starts with a simple transition. If you change it, the node and its components stay. See [Swapping a transition](/en/story-editor/transitions-and-choices/#swapping).

## Components

| Component | What it does |
| --- | --- |
| **Text** | Narration, with optional voice-over. |
| **Dialogue** | An ordered list of lines. Each line can have a speaking character and voice-over. |
| **Image Background** | A still backdrop behind the node, a vertical 9:16 image. |
| **Background video** | A moving backdrop behind the node, a vertical video up to 1 MB. |
| **Cutscene** | A video of up to 25 MB that plays as the node, rather than behind it. |
| **Background Music** | Music under the node, optionally looping. |
| **Ambient Sound** | An atmosphere layer under the node, independent of music, optionally looping. |
| **Event** | Changes a variable when the reader reaches the node. See [Variables](/en/story-editor/variables/). |
| **Checkpoint** | Marks a return point. See [Checkpoints](/en/story-editor/checkpoints/). |

## Component rules

The same rules apply when you add a component and when the chapter is validated.

- A node can have one component of each type. A second text, music track or checkpoint is refused: "This node already has this component."
- Text and dialogue cannot share a node. To describe a scene and then add a spoken line, use two nodes.
- Image Background and Background video share one backdrop slot. A node has one or the other.
- A cutscene takes the whole node. Only a checkpoint and an inheritance stop marker may sit beside it. The node must have a simple transition. On a node that branches, the editor shows "A cutscene can only be placed on a node with a simple transition."
- Start, End and Group nodes hold no components: "This node type can't hold content components."

## Media inheritance

Media works on three independent channels: the **backdrop** (image or video), **music** and **ambient sound**. Music can keep playing when the backdrop changes.

A media component affects only its own node until you switch on **Keep displaying** (backdrop) or **Keep playing** (music, ambient sound).

When several sources reach a node from the same distance, the node shows "Several sources reach this node, so nothing plays automatically. Pick one to continue here, or add your own." You get the actions **Go to source node** and **Add your own**.

Each channel's page explains what carries it forward, what ends it, what an inheritance stop marker does and what happens when two sources meet.

- The backdrop, image or video: [Images](/en/media/images/#inheritance).
- Music: [Background music](/en/media/background-music/#inheritance).
- Ambient sound: [Ambient sound](/en/media/ambient-sound/#inheritance).

## Related

- [The story graph](/en/story-editor/story-graph/)
- [Transitions and choices](/en/story-editor/transitions-and-choices/)
- [Images](/en/media/images/)
- [Background music](/en/media/background-music/)
- [Ambient sound](/en/media/ambient-sound/)
- [Interactivity](/en/best-practices/interactivity/)
