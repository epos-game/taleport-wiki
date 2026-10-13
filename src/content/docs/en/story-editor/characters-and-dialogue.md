---
title: Characters and dialogue
description: Defining who is in your story and giving them lines.
helpKey: editor.characters
status: published
sidebar:
  order: 7
---
A character is someone who speaks in your story. You add characters first, then pick one as the speaker of each dialogue line. Characters belong to the whole story, so a character from chapter 1 also works in chapter 9.

## Characters

Open the **Characters** tab at the bottom of the editor. **Add Character** creates a character right away, named "Character 1", and opens it. If you add one by mistake, just delete it.

Each character has:

- A name. It's required and can be up to 200 characters.
- A description. It's optional and can be up to 2000 characters.
- An avatar. It's optional and can be up to 0.5 MB. TalePort resizes it to 512 × 512 px.

The fields don't show a character count, so keep an eye on the length yourself. Text over the limit isn't saved.

To track something about a character, use a [variable](/en/story-editor/variables/).

You can delete a character who has lines. The editor first tells you how many lines are affected: *"This character appears in 12 dialogue line(s). Deleting it will clear those references."* The lines keep their text but lose their speaker.

![the Characters tab at the bottom of the editor, listing each character with its avatar beside Add Character](/screens/en/story-editor/characters-panel.png)

## Dialogue

A **dialogue component** is a list of lines in order. Each line has text, and it can also have a speaker and its own voice-over clip. You upload the clip for each line, not for the whole node. See [Voice-over](/en/media/voice-over/).

To add a line:

1. Type the text in the box under the list.
2. Pick the speaker with the first toolbar button. It says *No character* until you pick someone.
3. Click **Add line** or press Shift + Enter. The button stays disabled until you type some text.

To change a line:

- Click the avatar beside it to hand the line to another character.
- Drag the line by its header to move it.

![the Dialogue card in the right-hand panel, several lines each attributed to a character, one of them carrying a voice-over clip, and the composer underneath with the character picker](/screens/en/story-editor/dialogue-lines.png)

The editor warns you about:

- a dialogue with no lines
- a line with no speaker: *"One or more dialogue lines have no character assigned."*
- a line with no text

These warnings don't block publishing.

## Narration or speech

Text and dialogue can't share a node. If you want to describe a scene and then give a reply, use two nodes.

A node gets its automatic name only from a text component. A node with just dialogue is called "Node 24" (or similar) until you name it yourself.

Put text that nobody says in a text component on its own node, not in a dialogue line. Give each speaker their own character, so every line shows an avatar.

## Locking

A character gets locked when a live chapter uses it, which means it speaks at least one line there (lines in groups count too).

- A padlock replaces the edit and delete buttons.
- The padlock's tooltip names the chapter: *"Used by a published chapter: …"*.
- You can't edit a locked character, because readers have already downloaded its name, description and avatar.

The lock isn't permanent. When the character no longer speaks in any live chapter, it unlocks. You can always add new characters.

## Dialogue on a published chapter

You can rewrite a line or change its speaker. You can't add, delete or move lines: **Add line** is disabled, the delete button is gone and lines can't be dragged.

## Related

- [Variables](/en/story-editor/variables/)
- [Node types](/en/story-editor/node-types/)
- [Voice-over](/en/media/voice-over/)
