---
title: End nodes
description: Finishing a chapter, and what validation demands before you can.
helpKey: editor.end-nodes
status: published
sidebar:
  order: 12
---
An **end node** stops the reader's path. It has one input and no outputs. It has one switch, **End of chapter**, that says whether the reader has finished a branch or the whole chapter.

A chapter can have any number of end nodes. A reader reaches only one of them.

An end node cannot hold content. If you drag text, dialogue, an image or music onto it, the editor refuses: "This node type can't hold content components." Put the closing paragraph on the node before it.

![an end node on the canvas: a chequered flag over the word End, with a single input port on its left edge and nothing on the right](/screens/en/story-editor/end-node.png)

## End of chapter

Select the end node. The switch is on the **Outputs** tab, with a description of its effect underneath.

- On: "Completes the current chapter and continues to the next chapter when one is available."
- Off: "Ends only the current story flow and lets the reader replay this chapter."

Each end node has its own switch. A new end node from the palette has it on. Turn it off for an ending that sends the reader back to try again. The boundary end nodes the editor builds with **Group selection** have it off.

:::caution[Set it before publishing]
The switch changes the graph, so you cannot change it once the chapter is published.
:::

## Before you can publish

At least one end node reachable from the start node must have **End of chapter** on. Without such an ending you cannot submit the chapter. A red line, **Reachable end-of-chapter ending**, appears under **Needs attention**: "No ending reachable from the start of this chapter is marked as 'End of chapter', so readers can finish a branch but never complete the chapter. Open an End node and turn on 'End of chapter'."

- This check runs on the first step of the **Publish chapter** dialog, not in the editor's **Problems** list.
- Until it passes, **Next** is disabled: "Resolve the blocking issues listed above before continuing."
- The ending must be on the chapter canvas. Inside a [group](/en/story-editor/groups/), every end node is a group exit, so it never counts as the chapter's ending. A path through a group to an ending on the canvas is fine.

Testing does not need an **End of chapter** ending. Only two things block sending a chapter to **Testing**:

- errors in the graph
- a previous chapter that is not in testing yet

A chapter without that ending is playable in testing, but it is refused when you submit it for review.

A chapter in testing stays fully editable, structure included. It is your last chance to move a node, rewire a branch or turn on **End of chapter**. Once you submit the chapter for review, the editor is read-only.

## Multiple endings

An end node's input accepts any number of links. Branches that end the same way can share one ending. Give branches that end differently their own endings.

- **Recording which ending happened.** Variables belong to the story, not the chapter. An **Event** can set a variable that the next chapter reads. Put it on the node before the ending, because an end node holds no components.
- **An ending after failure.** This is an ordinary end node. The path into it can carry its own content.

## Validation rules

These errors block publishing. All of them are about the shape of the graph:

- The chapter has one start node, and only one.
- Nothing links into the start node.
- The chapter has an end node.
- An end node is reachable from the start node.
- Every end node has something linking into it.
- Every output port in the graph carries a link.

Three of these do not apply inside a group. A group can have several start nodes. Its end does not have to be reachable from the start. An end node may have nothing linking into it. See [Groups](/en/story-editor/groups/) for the rest.

An unreachable node is only a warning, "The node is not reachable from the Start node.", and blocks nothing.

## Related

- [The story graph](/en/story-editor/story-graph/)
- [Node types](/en/story-editor/node-types/)
- [Story structure](/en/best-practices/story-structure/)
