---
title: End nodes
description: Finishing a chapter, and what validation demands before you can.
helpKey: editor.end-nodes
status: published
sidebar:
  order: 12
---

An **end node** has one input and no outputs, so reaching it stops the flow the reader is on. A single switch on it, **End of chapter**, decides whether they have finished a branch or finished the whole chapter. Give a chapter as many end nodes as the branching needs: *The Lighthouse at Vardø* closes on "The lamp relit", on "Frozen on the stairs" and on "Rowed back at dawn", and a reader gets to exactly one of the three.

Nothing else goes on the node. Drag text, dialogue, an image or a music bed onto an end node and the editor refuses it with "Start and End nodes cannot contain any content components." The closing paragraph belongs on the node in front of it.

## End of chapter

Select the end node and the switch sits on the **Outputs** tab, with its consequence written underneath. Switched on it reads "Completes the current chapter and continues to the next chapter when one is available." Switched off: "Ends only the current story flow and lets the reader replay this chapter."

An end node dragged out of the palette arrives with the switch already on. The short bad ending you wanted the reader to back out of will therefore complete the chapter until you turn it off, so check it on every ending you place. The boundary end nodes the editor builds for you when you use **Group selection** start off instead.

Decide it per ending, not once for the chapter. "The lamp relit" completes the chapter. "Frozen on the stairs" sends the reader back to try the stairs again.

Flipping the switch changes the graph, so it is settled once the chapter goes live. A published chapter keeps its content editable and its structure locked.

## Publishing wants one of them switched on

At least one end node reachable from the start node has to have **End of chapter** on, or the chapter cannot be submitted. The message says that no ending reachable from the start of this chapter is marked as **End of chapter**, so readers can finish a branch but never complete the chapter. The editor's **Problems** list never raises this. It appears on the first step of the **Publish chapter** dialog, where **Next** stays dead with "Resolve the blocking issues listed above before continuing."

The ending itself has to sit on the chapter canvas. Inside a [group](/en/story-editor/groups/) every end node is one of that group's exits, and the check flattens the groups away and threads the flow through them, so an end node down there is never an ending. A path that runs through groups is fine. An ending inside one is not.

The test track does not ask for any of this. Sending a chapter to Testing blocks on two things only: errors in the graph, and a previous chapter that is not in testing yet. So a chapter can be entirely playable in testing and still be refused the moment you submit it for review.

## Multiple endings

Different end nodes are how a branching chapter pays off. The reader who talked the keeper down and the reader who left him on the gallery should not land on the same screen. An end node's input accepts any number of links, so branches with nothing more to say can share one.

- **Record which ending happened.** Variables belong to the story rather than the chapter, so an **Event** on the node before each ending can set `ending` to 1, 2 or 3, and chapter 2 opens by reading it. That event goes on the node in front, because the end node holds no components.
- **An ending reached by failure is still an ending.** Write it a scene rather than a punishment screen.

## What validation demands

These are errors. They block publishing, and all of them are about the shape of the graph rather than the writing:

- The chapter has a start node, and only one.
- Nothing links into the start node.
- The chapter has an end node.
- An end node is reachable from the start node.
- Every end node has something linking into it.
- Every output port in the graph carries a link.

Three of those are dropped inside a group: several start nodes are allowed there, the end does not have to be reachable from the start, and an end node may sit with nothing linking into it. [Groups](/en/story-editor/groups/) covers the rest.

An unreachable node is a warning, "The node is not reachable from the Start node.", so it blocks nothing. Work through those anyway. Half of them turn out to be a branch you forgot to wire up.

## Related

- [The story graph](/en/story-editor/story-graph/)
- [Node types](/en/story-editor/node-types/)
- [Story structure](/en/best-practices/story-structure/)
