---
title: Background music
description: Scoring a scene, and making it carry across nodes.
helpKey: media.music
status: published
sidebar:
  order: 2
---

Background music is one audio track playing under a scene. You add the **Background Music** component to a node, upload a file, and switch on **Keep playing**; the track then carries onto every node that follows. Put a lute loop on the first node of your Tavern scene and it runs through all six nodes of the conversation there, stopping when the reader steps out onto the street. Music is one of three media channels resolved separately on each node, so it keeps going while the backdrop and the ambient layer change around it.

## Making it carry

A component you have just added is heard on its own node and nowhere else, because **Keep playing** starts off. Under the player there are two toggles, not one. **Keep playing** carries the track forward; **Loop** repeats it. Both start off, and a reader can sit on a single node for minutes, so a two-minute track with **Loop** off leaves most of a long scene silent.

The usual pattern: put the music on the first node of the scene, upload the track, switch both toggles on, and leave the rest of the scene's nodes empty.

![the Background Music card in the properties panel: the waveform player with the track length, the Keep playing and Loop toggles under it, and Replace and Remove at the bottom](/screens/en/media/background-music-panel.png)

## What ends it

- A node that holds its own Background Music component. Its file takes over, and a component with no file in it means silence from there on. That node also turns up in the problems list: "The background music is not set and none is inherited."
- An inheritance stop on the music channel. You create one from the red trash icon in the header of the inherited-media panel, where the tooltip reads **Stop inheritance**. The marker that appears is named **Background Music** after the channel it blocks. Nothing in the component palette creates one, so a stop can only land on a node that is already inheriting.
- A conflict. Two tracks that reach the same node from different directions, the same number of steps away, cancel each other out. Nothing plays, TalePort lists both source nodes, and picking one copies that component onto this node with **Keep playing** already switched on, so the chain continues from here.

Start and end nodes are a separate case: they hold no components at all. The editor refuses the drop with "This node type can't hold content components.", and a start or end node carrying a component is an error that blocks publishing. The closing screen is built from the story cover and the words "Thank you for playing", and there is nothing on it for you to score.

A group passes music through, in at its entry and out again at its exits. A [cutscene](/en/media/video/) is the one thing that interrupts without ending: it hides the inherited music on its own node and plays alone, and the music returns on the nodes after it.

## Accepted files, and what happens to them

Pick an MP3, WAV, OGG, AAC, M4A or FLAC. Whatever you supply, TalePort converts it in your browser to a 96 kbps MP3 with a 44.1 kHz ceiling, and the converted file is the one readers get. A lossless master buys you nothing beyond a clean source to convert from.

The 20 MB ceiling applies after that conversion, and at 96 kbps that is a very long piece of music. The first audio file of a session is the slow one: the converter fetches a 31 MB WebAssembly build from a CDN, and it starts that download as soon as you open the file picker. Conversion gives up after five minutes on a single file.

Two smaller things to expect. Your file name is rewritten: every run of characters that is not a letter or a digit becomes one underscore, so `Tavern Theme (final mix).mp3` ends up as `Tavern_Theme_final_mix.mp3` beside the player and inside the package. And a track belongs to the chapter you uploaded it in, with no asset picker anywhere, so reusing the same theme in chapter two means uploading the file again. Identical files are stored and shipped once, so that costs your readers nothing.

## Levelling

Every upload is measured and gain-adjusted so tracks from different sources do not jump in volume between scenes. The target is -20 dB RMS with peaks held below -4 dBFS, and the correction can move up or down by as much as 30 dB. Anything measuring -60 dB RMS or quieter is treated as silence and left alone. A limiter is added only when the gain would push peaks past the ceiling, so a track already inside the band keeps the dynamics you mixed.

This fixes level. It does not fix a recording: noise, room tone and clipping already in the file are amplified along with everything else.

Occasionally the in-browser conversion cannot run at all, and the file is uploaded exactly as you supplied it, unconverted and unlevelled, with no warning. The drop zone is where you catch it. It reports "Original: 4.2 MB (audio)" and then "Compressed: 0.6 MB"; two numbers that match mean nothing happened.

## Music, ambient and voice are separate

Music, [ambient sound](/en/media/ambient-sound/) and [voice-over](/en/media/voice-over/) are independent channels. Music can run unchanged while the ambient layer switches from tavern to street, and dialogue plays over both. Changing the backdrop does not stop the music either, so if a scene change should also change the score, set the music on that node too.

## Practical advice

- Score scenes, not nodes. A track that changes every screen is exhausting.
- Use silence. A scene with no music after twenty minutes of score lands hard.
- Loop cleanly. An audible seam every ninety seconds is worse than no music at all.
- Watch the totals. The **Statistics** menu on the editor's status bar shows **Audio Duration**, which counts each unique track once for the whole chapter, so the same loop attached to thirty nodes adds its length one time.
- **Check the rights.** Music belonging to someone else falls under [CR-II.2](/en/publishing/content-rules/#cr-ii-2). "Royalty-free" is not the same as "no licence needed"; read the licence.
- **More music does not raise your price.** Music enters the [suggested price](/en/monetization/pricing/) as a yes or no, never by the minute: 12 CZK per hour of story for human-made music, 5 for AI-generated. The second track changes nothing; the AI declaration does.

## Related

- [Ambient sound](/en/media/ambient-sound/)
- [Voice-over](/en/media/voice-over/)
- [Media usage](/en/best-practices/media-usage/)
