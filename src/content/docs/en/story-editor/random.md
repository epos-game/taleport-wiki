---
title: Random
description: Sending the reader down one of several branches by chance.
helpKey: editor.random
status: published
sidebar:
  order: 15
---
**Random** is a transition that lets chance pick the way out. Each output is a **branch** with a percentage. When the reader reaches the node, the app rolls once and follows one branch. Branches with a higher percentage are chosen more often.

Use it when the story should vary between playthroughs and the reader has no say in it: a patrol that may or may not find you, a rumour that turns out true or false, a random encounter on the road.

## Creating a random node

Drag **Random** from the **Presets** section of the palette onto the canvas to create a node with this transition. To change an existing node instead, right-click it and use **Insert output** or **Update output**. The node and its components stay. See [Swapping a transition](/en/story-editor/transitions-and-choices/#swapping).

A new random node starts with two branches at 50% each.

![a random node on the canvas with three outputs, each labelled with the branch name and its chance: Branch 1 34%, Branch 2 33%, Branch 3 33%](/screens/en/story-editor/random-node.png)

The right panel calls the transition **Random**. Each branch is one output port, labelled with its name and chance.

## Setting up the branches

The **Random** card in the right panel lists the branches. A coloured bar at the top shows how the 100% is split, and the line under it shows the total.

![the Random card in the right panel: the Add branch button, a bar split into three coloured segments, the total of 100%, and three branches with the first one open to show its Name and Chance fields](/screens/en/story-editor/random-panel.png)

- **Add branch** adds one more output. A node holds at most 10 branches, and the button tells you when you have reached the limit: "Maximum of 10 branches reached."
- **Name** is optional and up to 200 characters. Without one, the branch is called **Branch 1**, **Branch 2** and so on. The name appears on the node and in the panel, not to the reader.
- **Chance** is a whole number from 1 to 100. Every branch needs at least 1%.
- Drag the handle on a branch to **reorder** the branches. The order only changes where the ports sit on the node. It does not change any chance.
- The trash icon on a branch removes it. The trash icon in the card header removes the whole transition. A random node needs at least two branches.

### The chances add up to 100%

The chances of all branches must add up to exactly 100%. You don't have to do the sums. The editor keeps the total at 100% for you:

- When you change one branch, the other branches shrink or grow in proportion to what they had, and none drops below 1%.
- When you add a branch, it takes an equal share (a third, when there are three) and the others make room for it.
- When you remove a branch, the others share its percentage in proportion.

Because 100 does not always divide evenly, a three-way split comes out as 34%, 33% and 33%.

If the total is not 100%, the line under the bar tells you how far off it is: "Total: 90% · 10% left to assign" or "Total: 110% · 10% over". Reading the line is a quick way to see what is wrong. A node that does not add up to 100% is an error and blocks publishing: "The chances of the random node branches must add up to exactly 100 percent."

## Connecting the branches

Each branch must lead somewhere. An output that is not connected is an error: "Has an output port that is not connected to any node." This blocks publishing, like every other unconnected port.

The branches can go to different nodes or come back together a few nodes later. See [Story structure](/en/best-practices/story-structure/) for the shape of a story that branches and returns.

## What the node can carry

Random is a transition, so it can hold components in the same way as any other node: text, a backdrop, music and so on. Put text on the node that tells the reader what is about to happen, because the reader does not choose and sees no options.

## Trying it out

The **Preview** tab rolls for you. With a random node selected, **Continue** picks a branch by chance and moves on to it, so you can press it several times to see where the story goes. See [Node preview](/en/story-editor/node-preview/).

## Tips

- Use Random when the outcome is not up to the reader. When the reader should be able to influence it, use a [skill check](/en/story-editor/skill-checks/), which also depends on a stat.
- Don't hide the important story behind a low chance. A reader may never see a branch at 5%, so don't put something the rest of the story relies on there.
- Check every branch in the preview and in a test package. A branch you never see is easy to leave unfinished.
- Swapping a transition moves links by port position. Turning a random node into another transition keeps the links on the first outputs and loses the rest.

## Related

- [Node types](/en/story-editor/node-types/)
- [Transitions and choices](/en/story-editor/transitions-and-choices/)
- [Skill checks](/en/story-editor/skill-checks/)
- [Node preview](/en/story-editor/node-preview/)
