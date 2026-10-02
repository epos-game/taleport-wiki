---
title: Voice-over
description: Narration on dialogue lines and text blocks, and how coverage is counted.
helpKey: media.voice-over
status: published
sidebar:
  order: 4
---

Voice-over is a narration recording that hangs off written content rather than off a node. A dialogue line holds one file; a text block holds one file. In a tavern node called *Mordrin's Offer*, the innkeeper's three lines each carry their own clip and the paragraph of description above them carries a fourth, so one node means four uploads. TalePort counts the characters in those four pieces as voiced and reports your chapter's coverage as a percentage.

On a dialogue line the control is the mic icon in the line's action row. Empty, its tooltip reads **Link Audio**. Once a clip is attached the icon fills in and the tooltip changes to **Toggle voice-over**, which is misleading: clicking the mic asks **Replace voice-over?** and reopens the picker. Clicking the line body is what opens the player, and the remove button sits in there.

A text block differs in one way that costs people recordings: under its **Voice-over** heading the player's **Replace audio** button asks nothing before it overwrites. Dragging a file onto a dialogue component looks like it should work and does nothing, because the upload arrives with no line attached and is discarded.

![a dialogue line in the properties panel with its voice-over clip attached, the player showing the file name and its length](/screens/en/media/voice-over-on-a-line.png)

## Accepted files, and what happens to them

Pick an MP3, WAV, OGG, AAC, M4A or FLAC. Nothing else is offered. Your file is converted in the browser to an MP3 at up to 96 kbps with a 44.1 kHz ceiling, and that converted file is what readers hear, so the 20 MB limit is measured on the MP3 rather than on what you picked. Recording lossless is still worth it for the editing.

Levels are matched too. The pass aims for −20 dB RMS, holds peaks under −4 dBFS and moves a file by at most 30 dB either way, leaving anything below −60 dB RMS alone. Volume is all it handles, so room tone, mouth noise and clipping survive and get louder with everything else. The first upload of a session also pulls down about 31 MB of conversion code, so it feels slow and the second does not. If that code fails to load your file goes up unconverted and unlevelled, the screen still says **Voice-over uploaded.**, and you find out when one line sits well above the rest.

## Coverage

Coverage is the share of your chapter's characters that have a recording. Plain text from every text block and dialogue line is counted with tags stripped, and a block counts as voiced only when that exact block or line carries a clip of its own. Music, ambient sound and a cutscene's audio count for nothing. A chapter of 9,000 characters with 3,000 voiced reads 33%, a figure you find in the editor's **Statistics** menu, behind the chart icon on the status bar, listed as **Voice-over Coverage**, and again beside each chapter on the story page.

Partial coverage is allowed and it is jarring. A reader who has heard three characters speak notices the fourth going quiet. Voice the chapter in full, or voice one character consistently throughout.

## Rights and disclosure

A recorded performance is someone's work. If somebody else performed it, credit them as a contributor and make sure you have the right to publish the recording. See [CR-II.1](/en/publishing/content-rules/#cr-ii-1).

Synthesised and AI-generated voice counts as media rather than text, so it may be permitted, but you have to declare it when you publish, under [CR-III.2](/en/publishing/content-rules/#cr-iii-2). The declaration is the **AI Speech** toggle on the publish wizard's Classification step. It unlocks only when the chapter contains a text block or dialogue line with audio, and the value is stored on the story, so it covers every chapter you publish from there. Cloning a real person's voice to deceive readers is not permitted. See [CR-III.3](/en/publishing/content-rules/#cr-iii-3) and [CR-I.10](/en/publishing/content-rules/#cr-i-10).

The [prohibition on AI-generated text](/en/publishing/content-rules/#cr-iii-1) applies to the words themselves however they are performed. Recording AI-written dialogue does not make it acceptable.

## Practical advice

Record at a consistent distance and level. The levelling pass matches volume between lines and cannot fix a room.

One file per line beats one long take: a line holds nothing but a file of its own, and splitting a recording afterwards is far more work than recording it in pieces.

Voice-over moves the suggested price further than any other medium. Coverage multiplies the voice-over rate, 30 CZK per hour of story for human narration and 15 for AI, on top of a 75 CZK base, so a fully voiced one-hour chapter starts from 105 CZK instead of 75. See [Pricing](/en/monetization/pricing/).

## Related

- [Characters and dialogue](/en/story-editor/characters-and-dialogue/)
- [Background music](/en/media/background-music/)
- [Pricing](/en/monetization/pricing/)
