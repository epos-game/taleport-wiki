---
title: Creating a story
description: From an empty library to a first playable chapter.
helpKey: getting-started.creating-a-story
status: published
sidebar:
  order: 1
---

A **story** is the container you publish under one author profile: title, cover, genre, tags, age recommendation, characters, variables, global events, and at least one **chapter**. Readers buy and read chapters, so the story itself holds the shell and everything the chapters share. A ghost story called *The Lighthouse at Vardø* starts life as one story with two characters, a `Trust` variable set to 0, a cover of the lighthouse at dusk, and one chapter that opens on a node named Arrival and reaches the choice to go inside four nodes later.

## Create the story

Open **My Stories** and choose **Create Story**. The **Create New Epos** dialog has four steps:

1. **Basics**: the title, with a counter at 200 characters, and a description in a rich-text field capped at 1000.
2. **Cover**: the cover image. Skip it here if you do not have one yet.
3. **Details**: the genre and any tags. The genre is required.
4. **Preview**: the cover card with your title and genre, the same details listed under it, and the **Create Epos** button.

A title and a genre are the only compulsory fields. Until both are filled in, **Create Epos** stays disabled and you cannot step past the one that is missing. Everything in the dialog can be changed later, from the story's detail page or from **Settings** in the editor header.

![the Create New Epos dialog on the Basics step, with the four step names listed down the side and the story title filled in](/screens/en/getting-started/create-story-dialog.png)

The cover is checked against a 9:16 portrait ratio before anything is uploaded, with 5% of slack in either direction. 1080 x 1920 is exact and 1000 x 1800 passes; a 1920 x 1080 screenshot is turned away with *This image is 1920x1080. Please upload a vertical (portrait) image with a 9:16 ratio.* The hint under the drop zone still reads "Recommended: 16:9 aspect ratio, minimum 1280x720px". Ignore it: the ratio is the wrong way round, and nothing checks a minimum size. Accepted files are re-encoded and shrunk to fit 1080 x 1920, and the server refuses anything over 5 MB.

A new story is created with one empty chapter called **Chapter 1**, and TalePort takes you straight into the editor.

## What to do next

1. Sketch the shape of the first chapter before writing prose. Even three nodes and two choices tell you whether the idea works.
2. Add the variables you already know you need: see [Variables](/en/story-editor/variables/). Retrofitting them into a finished graph costs far more.
3. Add your characters: see [Characters and dialogue](/en/story-editor/characters-and-dialogue/).
4. Write, then test: see [Testing and contributors](/en/getting-started/testing-and-contributors/).

## What locks once a chapter is live

Parts of a story freeze as soon as one chapter is live, so the ground does not move under readers who are part-way through it.

- Characters and variables a live chapter uses, and the reach is wider than it sounds. A character locks once it speaks a line of dialogue. A variable locks when an event component or a transition requirement points at it, when it sits on a locked character's stats, or when any global event targets it. Every global event in the story locks as well, because global events fire story-wide rather than from one node.
- The order of the chapters already in the pipeline. Published, in-review and testing chapters are pinned ahead of your drafts in their current order, and only drafts can be moved.
- The age recommendation can go up but not down.
- Content tags can be added but never taken away.

Locks are recalculated from what live chapters use, so one lifts again when that chapter is withdrawn from review, unpublished or deleted. New variables, characters and global events are never blocked, and nothing locks while every chapter is still a draft.

## Related

- [Story structure and chapters](/en/getting-started/story-structure-and-chapters/)
- [Genres and tags](/en/publishing/genres-and-tags/)
- [Story lifecycle](/en/getting-started/story-lifecycle/)
