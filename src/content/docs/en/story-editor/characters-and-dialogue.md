---
title: Characters and dialogue
description: Defining who is in your story and giving them lines.
helpKey: editor.characters
status: published
sidebar:
  order: 7
---

A character is a person your story can name: a name, an optional description, an optional avatar. Characters belong to the story rather than to one chapter, so the ferryman you create in chapter 1 is still on the list in chapter 9. You attach them to dialogue lines, which is what turns a block of speech into someone speaking. The node "The ferryman's price" holds four lines, three of them spoken by Halvar and one by the companion travelling with the reader, in the order you dragged them into.

## Characters

Characters live in the **Characters** tab at the bottom of the editor. *Add Character* creates one straight away, called "Character 3", and opens it for editing, so a stray click leaves a real character behind rather than an empty form you can cancel. Rename it before you forget what it was for.

The name is required and goes up to 200 characters, the description up to 2000. Neither field counts for you while you type. An avatar can be up to 0.5 MB and is resized to 512×512 px.

That is the whole object. A character carries no stats and no flags of its own. To track what the innkeeper thinks of the reader, use a story [variable](/en/story-editor/variables/) named for what it measures, and leave the character as a name and a face.

Deleting a character that speaks somewhere is allowed, and the editor counts the lines first: *"This character appears in 12 dialogue line(s). Deleting it will clear those references."* The lines keep their text and lose their speaker.

## Dialogue

A **dialogue component** holds an ordered list of lines. Each line has text, optionally a speaker, and optionally a voice-over clip of its own, uploaded per line rather than per node. See [Voice-over](/en/media/voice-over/).

Lines are written in the composer under the list. The speaker is the first button on its toolbar and reads *No character* until you pick someone. *Add line*, or Shift + Enter, commits the line, and the button stays disabled until there is text. Afterwards you can click the avatar beside a line to hand it to a different character, or drag the line by its header to move it.

![the Dialogue card in the right-hand panel, several lines each attributed to a character, one of them carrying a voice-over clip, and the composer underneath with the character picker](/screens/en/story-editor/dialogue-lines.png)

Three things raise a warning instead of blocking you: a dialogue with no lines at all, a line with no speaker (*"One or more dialogue lines have no character assigned."*) and a line with no text. Warnings never stop a chapter publishing, so an unattributed line is easy to ship by accident.

## A node is narration or speech, not both

Text and dialogue cannot share a node. A node holds one or the other, so a sentence of description followed by a reply is two nodes, and the link between them is the beat. This is the placement rule authors run into most often. It is also what keeps a chapter paced: a wall of narration with four lines of dialogue underneath reads worse than the four screens it should have been.

The split has one side effect on the canvas. The automatic node label is built from a text component only, so a node holding nothing but dialogue shows as "Node 24" however good the writing is. Name those nodes yourself.

## Characters lock on publish

A character locks when a live chapter uses it, meaning it speaks at least one dialogue line somewhere in that chapter, groups included. The edit and delete buttons are then replaced by a padlock whose tooltip names the chapter holding it: *"Used by a published chapter: …"*. The published package already carries that character's name, description and avatar, so editing any of it would change what readers have downloaded.

The lock is recomputed rather than permanent. Once no live chapter has the character speaking, it unlocks on its own. Adding new characters is never blocked, which is the way around a lock you cannot wait out.

## Dialogue on a published chapter

A published chapter is content-frozen rather than read-only, and the dialogue editor splits along exactly that line. Rewriting a line and changing who says it both still work. Adding a line, deleting one and dragging the list into a new order do not: *Add line* is disabled, the delete button is gone and the lines no longer drag. Fixing a typo and republishing is fine. Rewriting the scene is not.

## Practical advice

- Give every recurring speaker a character, even a minor one. Attribution is what lets the reader keep track, and it is what makes an avatar and a voice possible later.
- Narration inside a dialogue line is still narration. If nobody is saying it, it belongs in a text component on its own node.
- Keep lines short. Each line is a separate entry in the published chapter, so breaking a speech into three lines gives it three beats instead of one.

## Related

- [Variables](/en/story-editor/variables/)
- [Node types](/en/story-editor/node-types/)
- [Voice-over](/en/media/voice-over/)
