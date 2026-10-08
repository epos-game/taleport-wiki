---
title: Voice-over
description: Narration on dialogue lines and text blocks, and how coverage is counted.
helpKey: media.voice-over
status: published
sidebar:
  order: 4
---
A voice-over is a recording that belongs to written content, not to a node. A dialogue line holds one file, and so does a text block. A node with three dialogue lines and a text block takes four uploads.

## Add a recording

**On a dialogue line:**

1. Click the mic icon in the line's action row. While the line has no audio, its label is **Link Audio**.
2. Pick a file.
3. The icon fills in and the label becomes **Toggle voice-over**. Click the line text to open the player, where you'll find the remove button.
4. To replace the clip, click the mic. It asks **Replace voice-over?** and reopens the file picker.

**On a text block:** after upload, a player appears under the **Voice-over** heading. **Replace audio** overwrites the file without asking.

A file is attached with the mic icon on a specific line. Dragging a file onto a dialogue component doesn't attach it.

![a dialogue line in the properties panel with its voice-over clip attached, the player showing the file name and its length](/screens/en/media/voice-over-on-a-line.png)

## Supported files

Pick an MP3, WAV, OGG, AAC, M4A or FLAC file. Your browser converts it to an MP3 at up to 96 kbps with a 44.1 kHz ceiling. Readers hear the converted file, so the 20 MB limit applies to the MP3, not to the file you picked.

TalePort also levels the volume. The target is -20 dB RMS, and peaks stay under -4 dBFS. Only the volume changes: room tone, mouth noise and clipping stay and get louder along with everything else.

## Coverage

Coverage is the share of your chapter's text, counted in characters, that has a recording.

- Every text block and dialogue line counts.
- A piece counts as voiced only if it has its own clip.
- In a text block, formatting adds no characters. In a dialogue line, it does.
- Music, ambient sound and cutscene audio don't count.

Example: a chapter has 9,000 characters and 3,000 are voiced. That's a coverage of 33%.

Find the figure as **Voice-over Coverage** in the editor's **Statistics** menu, behind the chart icon on the status bar. It also shows beside each chapter on the story page. Partial coverage is fine.

## Playback in the editor

The **Audio** card is under the phone frame in the **Preview** tab. It follows the selected node and lists everything that plays on it:

- a text block as **Text**, with its file name
- a dialogue line as **Dialogue**, with the name of the character who speaks it
- the music and ambient tracks

One play button starts all recordings together, so voiced lines overlap. To play a single line alone, click it.

## Rights and AI disclosure

A recorded performance is someone's work. If someone else performed it, credit them as a contributor and make sure you're allowed to publish the recording ([CR-II.1](/en/publishing/content-rules/#cr-ii-1)).

Synthesised and AI-generated voice counts as media, not text. It can be allowed, but you must declare it when you publish ([CR-III.2](/en/publishing/content-rules/#cr-iii-2)). Use the **AI Speech** toggle on the Classification step of the publish dialog.

- It's available once any chapter of the story, at any status, has a text block or dialogue line with audio.
- Your answer is stored on the story, so it covers every chapter you publish.
- It starts on, and TalePort treats the recordings as synthesised until you change that.
- **Off** declares that you or a performer recorded them.
- **On** shows readers that the narration is AI, and the voice-over part of the suggested price drops.

Two more rules:

- Cloning a real person's voice to deceive readers isn't allowed ([CR-III.3](/en/publishing/content-rules/#cr-iii-3), [CR-I.10](/en/publishing/content-rules/#cr-i-10)).
- The [ban on AI-generated text](/en/publishing/content-rules/#cr-iii-1) applies to the words themselves, however they're performed. Recording AI-written dialogue doesn't make it acceptable.

## Tips

- Each line holds its own file, so record line by line. Splitting a long recording later is much more work.
- Voice-over affects the suggested price through the share of your text that has a recording. See [Pricing](/en/monetization/pricing/).

## Related

- [Characters and dialogue](/en/story-editor/characters-and-dialogue/)
- [Background music](/en/media/background-music/)
- [Pricing](/en/monetization/pricing/)
