---
title: Searching the graph
description: Finding a node by its number, name or content.
helpKey: editor.search
status: published
sidebar:
  order: 16
---
In a long chapter you will not find a node by scrolling. **Search** finds it by its number, its name, or by what it says, and takes you straight to it.

## Opening the search

Press **Ctrl+F** (**⌘+F** on a Mac) while the graph is in focus, or click the magnifying glass in the top bar. Press the shortcut again to close it. The search bar floats over the graph. Drag it by the handle on its left edge if it covers something, and the editor remembers where you left it.

You can also close the bar with the **×**, with **Esc**, or by clicking outside it.

![the search bar floating over the graph with matka typed in; below it a list of nodes, each with its number, a snippet of the matching text or dialogue, and its transition type on the right](/screens/en/story-editor/graph-search.png)

## What it searches

Search looks at:

- the **node number**, for example `2889`,
- the **node name**,
- the **text** of the node,
- every **dialogue line** on the node,
- every **choice** on a choice node.

It ignores capital letters and diacritics, so `matka` finds "Matka" and `zeme` finds "země".

When you type several words, a node has to contain all of them. They can be in different places on the node, for example one in the name and one in a dialogue line.

With nothing typed, the list shows the nodes in the order of their numbers.

## Reading the results

Each result shows the node number or name, the transition type on the right, and, when the match is in the content, a short snippet with the kind of content in front of it: **Text**, **Dialogue** or **Choice**.

The best matches come first:

1. An exact number.
2. A name that equals or starts with what you typed.
3. A name that contains it.
4. Content, where a match at the start of a word ranks above a match inside a word.

The list holds 20 results. When there are more, it says *"Showing first 20 of 134"*. Type another word to narrow it.

## Going to a node

Move through the list with the **↑** and **↓** keys and press **Enter**, or click a result. The node is selected and the graph moves to it. The search bar stays open, so you can go to the next result straight away.

## Limits

- Search covers only the graph you have open. It doesn't look inside groups. Open the group to search in it. See [Groups](/en/story-editor/groups/).
- It searches the story's own content, not comments from reviewers or the names of characters and variables.
- Search follows the graph as you edit it. A node you have just changed shows up with its new text.

## Tips

- A validation message names the node by its number. Search for the number to jump to it. See [Publishing requirements](/en/publishing/publishing-requirements/).
- Search for a line you remember from the story to find the node that holds it. That is quicker than walking the branches.
- Give important nodes a name. A name ranks above content, so a named node comes first.

## Related

- [The story graph](/en/story-editor/story-graph/)
- [Groups](/en/story-editor/groups/)
