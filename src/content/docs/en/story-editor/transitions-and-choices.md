---
title: Transitions and choices
description: How a reader leaves a node, and how to write choices worth making.
helpKey: editor.transitions
status: published
sidebar:
  order: 3
---

Every node carries exactly one transition, and that transition is the only thing deciding how the reader leaves it. A new node arrives with a simple transition already attached, so it is never a dead end by accident; you replace it with a choice, a switch, a skill check or an ending when the scene asks for one. Mira reaches the cellar door, so that node gets a choice transition with two options, "Knock" and "Pick the lock", and the second one carries a requirement of Lockpicking at least 3. A reader with Lockpicking 1 sees a single button and never learns the other one was there.

Ports hold the wiring. An output port takes one link: draw a second one from the same port and the editor drops the first without asking. Input ports accept as many incoming links as you point at them.

## Simple transitions

One way in, one way out. This is what every new node starts with, and most of your nodes should stay this way. A chapter where every node branches is exhausting to read and enormous to write.

## Choices

A choice transition gives the reader a list of options, each with its own output port and its own destination. The Choice preset, whether you drag the node or only the transition onto an existing node, starts you with two options named Choice 1 and Choice 2 and no button text yet. Add a third with **Add Choice** and that one arrives with its name *and* its button text filled in as "Choice 3", which is easy to leave sitting there and ship.

Each choice has:

- Text: what the reader reads on the button. Up to 1000 characters, and it cannot be blank; an empty one is a validation error.
- A name: up to 200 characters, for your orientation in the editor.
- A destination, the node its port links to.
- Requirements that decide whether the option is offered at all. None means always available. See [Conditions](/en/story-editor/conditions/).

The counter under the button text counts raw HTML rather than visible words, so a line with bold text and a link in it reaches 1000 long before it looks long. Nothing stops you typing past the limit. The save is what fails, with "The Text field must be at most 1000 characters."

Drag choices to reorder them; the reader sees them in that order. Deleting a choice also deletes the link on its port, so check where that branch went first. A choice transition left with no options is an error.

### Combining requirements on one choice

The **Require** selector appears once a choice has more than one requirement. All means every one has to hold, Any means one is enough. New choices start on All.

### Requirements on choices

A choice whose requirements are not met is not offered. In the Preview panel it shows up as a locked choice you can follow anyway for debugging. Preview has one gap. A requirement using "does not equal" never comes out true there, so a choice gated that way always previews as locked even when the condition really holds.

A reader who never sees a choice does not know it exists. When failing to qualify should land as a consequence, show the choice and route it somewhere else rather than hiding it.

### Writing choices

- Say what the reader is doing, not what will happen. "Take the coin" is a choice. "Take the coin and regret it" is a spoiler.
- Make the options actually different. If two choices rejoin at the next node and no variable changed on the way, there was nothing to decide. Merge them, or give one of them weight.
- Keep them comparable in length. A long option next to a short one reads as the recommended one.
- Two to four options is a comfortable range. Nothing in the editor caps the number, so the restraint is yours.

## Switch transitions

A switch branches without asking the reader. Conditions are evaluated top to bottom and the first match wins, which makes it the tool for "what does the world look like by now?" rather than for an immediate decision. Drag the conditions to reorder them and put the most specific first, because a broad condition near the top swallows everything under it. The requirements inside one condition are always combined with AND; a switch has no All/Any selector.

Every switch ends with a built-in **Default** output. Flow leaves through it when nothing matched. You do not have to write a catch-all condition, but you do have to connect Default, because an unconnected output port is an error like any other: "Has an output port that is not connected to any node."

Fill in every condition. A condition with no requirements counts as satisfied, so it matches straight away and nothing below it is ever reached. The editor raises a warning about it, though the warning's own wording ("have no requirements and will never match") says the opposite of what happens. Leave the cases you did not anticipate to Default.

A switch with no conditions at all is an error.

## Swapping one transition for another

Right-click a node and open **Insert output** (the entry reads **Update output** once the node has something other than a simple transition), or drag an output from the palette onto the node. The node and its components survive, and so do the incoming links, because the input port is carried over.

The outgoing links move by position, not by meaning. Whatever hung on the first output lands on the new first output, and any link whose position does not exist on the new transition is deleted outright. Turn a three-option choice into a skill check and you keep two links, on Success and Fail, and lose the third.

Two cases are refused. A group node's transition cannot be changed in either direction, and a node holding a cutscene takes nothing but a simple transition.

## Related

- [Conditions](/en/story-editor/conditions/)
- [Variables](/en/story-editor/variables/)
- [Node types](/en/story-editor/node-types/)
- [Interactivity](/en/best-practices/interactivity/)
