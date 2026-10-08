---
title: Transitions and choices
description: How a reader leaves a node, and how choices work.
helpKey: editor.transitions
status: published
sidebar:
  order: 3
---
Every node has one transition. It sets how the reader leaves the node. A new node starts with a simple transition. You can replace it with a choice, a switch, a skill check or an ending.

Ports hold the links. An output port takes one link. If you draw a second one, it replaces the first. An input port accepts any number of incoming links.

## Simple transitions

A simple transition has one way in and one way out. Every new node starts with it.

## Choices

A choice gives the reader a list of options. Each option has its own output port and destination. The number of options is not limited.

![a choice node on the canvas, its two options named on the right edge, each with its own output port](/screens/en/story-editor/choice-node.png)

The Choice preset starts with two options, Choice 1 and Choice 2, with no button text yet. This is the same whether you drag the whole node or only the transition onto an existing node. **Add Choice** adds a third. Its name and button text are both "Choice 3".

Each option has:

- Text: what the reader sees on the button. Up to 1000 characters. Empty text is a validation error.
- A name: up to 200 characters. Only you see it, in the editor.
- A destination: the node its port links to.
- Requirements: conditions that decide whether the option is offered. No requirements means the option is always available. See [Conditions](/en/story-editor/conditions/).

The counter under the button text also counts hidden formatting codes. Text over the limit cannot be saved, and the editor reports "The Text field must be at most 1000 characters."

Drag options to reorder them. The reader sees them in the same order. Deleting an option also deletes the link on its port. A choice with no options is an error.

![the Choice card in the right panel, each option on its own row with a drag handle, its text underneath and a padlock counting its requirements](/screens/en/story-editor/choice-panel.png)

### Requirements on choices

The reader does not get an option with unmet requirements. In the Preview panel it shows as a locked choice, and you can still follow it.

The **Require** selector appears once an option has more than one requirement. **All** means every requirement must hold. **Any** means one is enough. New options start on All.

### Writing choices

Make the button text say what the reader does, not what will happen. "Take the coin" names an action. "Take the coin and regret it" gives away an outcome.

## Switch transitions

A switch branches without asking the reader. It decides from what the story remembers so far. It reads conditions from top to bottom and uses the first match.

![a switch node on the canvas, its conditions and the default branch named on the right edge](/screens/en/story-editor/switch-node.png)

Drag the conditions to reorder them. A broad condition hides every condition below it, because they are never reached. Put a specific condition (say, Health is at most 0) above the general ones. The requirements inside one condition always combine with AND. A switch has no All/Any selector.

![the Switch card in the right panel, the reorder notice at the top, one condition collapsed and the next one open with a requirement on a stat](/screens/en/story-editor/switch-panel.png)

Every switch ends with a built-in **Default** output. The reader leaves through it when no condition matches. Connect **Default**. An unconnected output port is an error: "Has an output port that is not connected to any node."

A new switch starts with one empty condition, so this warning shows at once: "One or more switch conditions have no requirements and will never match." Give the condition a requirement or delete it.

A switch with no conditions at all is an error.

## Swapping a transition {#swapping}

Right-click a node and open **Insert output**. If the node has a transition other than simple, the entry reads **Update output**. You can also drag an output from the palette onto the node. The node, its components and its incoming links stay.

Outgoing links move by position, not by meaning. A link on the first output moves to the new first output. If the new transition has no matching position, the link is deleted. Turn a three-option choice into a skill check and you keep two links, on Success and Fail. The third is lost.

The editor refuses two cases:

- You cannot change a group node's transition, or change another transition into a group.
- A node with a cutscene accepts only a simple transition: "This node holds a cutscene, which only works with a simple transition. Remove the cutscene first."

## Locking

A published chapter locks the whole **Outputs** tab. The fields go grey. You cannot:

- rewrite the button text
- add or delete an option
- change the order of options
- change a requirement
- change the dice modifier
- turn **End of chapter** on or off

You can still edit text inside components: the text on a node and the text of a dialogue line.

## Related

- [Conditions](/en/story-editor/conditions/)
- [Variables](/en/story-editor/variables/)
- [Node types](/en/story-editor/node-types/)
- [Interactivity](/en/best-practices/interactivity/)
