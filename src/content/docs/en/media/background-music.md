---
title: Background music
description: Scoring a scene, and making it carry across nodes.
helpKey: media.music
status: published
sidebar:
  order: 2
---
Background music plays under a scene. To add it:

1. Add the **Background Music** component to a node.
2. Upload a file.
3. Switch on **Keep playing**, so the track plays on the following nodes too.

Music is one of three media channels. Each channel works separately on each node, so the backdrop and the ambient layer can change while the music keeps going.

## Music inheritance

A new component is heard only on its own node. Under the player are two toggles, and both start off.

- **Keep playing** carries the track on to the following nodes.
- **Loop** repeats the track.

A reader can stay on one node for minutes. If a two-minute track has **Loop** off, a long scene is mostly silent.

Usually you put the music on the first node of a scene with both toggles on and leave the other nodes empty.

![the Background Music card in the properties panel: the waveform player with the track length, the Keep playing and Loop toggles under it, and Replace and Remove at the bottom](/screens/en/media/background-music-panel.png)

A node that inherits the track shows **Inherited from** and the source node's name above the player. Click the name to jump to that node.

![an inherited music card, headed Background Music, reading Inherited from Node 3 above the player](/screens/en/story-editor/inherited-music-panel.png)

## Ending the inheritance {#inheritance}

Three things end the inheritance.

- **A node with its own Background Music component.** Its file takes over. A component with no file means silence from that node on, and the node also shows a problem: "The background music is not set and none is inherited."
- **An inheritance stop on the music channel.**
  - Click the red bin icon, **Stop inheritance**, in the header of the inherited-media panel.
  - The stop is named **Background Music**, after the channel it blocks.
  - It isn't in the component palette, so you can add it only to a node that already inherits.
  - If you add a Background Music component to that node, it replaces the stop. You can undo that in one step.
- **A conflict.** The nearest source wins, counted in links. If two tracks reach a node from different directions at the same distance, nothing plays. TalePort lists both source nodes. When you pick one, its component is copied onto this node with **Keep playing** on.

### Where music can't go

Start and end nodes can't hold components. The editor refuses the drop with "This node type can't hold content components." A start or end node with a component is an error that blocks publishing. So you can't add music to the closing screen.

### Groups and cutscenes

- A group lets music in through its entry and out through its exits.
- If two tracks reach the same entrance, or the same exit from inside, there's no conflict. The one whose link you drew first carries on.
- A [cutscene](/en/media/video/) pauses the music but doesn't end it. The cutscene hides inherited music on its own node and plays alone. The music comes back on the nodes after it.

## Supported files

You can upload MP3, WAV, OGG, AAC, M4A and FLAC files.

- Your browser converts the file to a 96 kbps MP3 with a 44.1 kHz ceiling. Only the converted file is uploaded, and readers get that file.
- The 20 MB limit applies after conversion.
- Uploading rewrites the file name. Every run of characters that isn't a letter or a digit becomes one underscore. `Main theme (final mix).mp3` becomes `Main_theme_final_mix.mp3`. You see that name beside the player.
- A track belongs to the chapter you uploaded it in, so upload the same track again for chapter two.

## Levelling

TalePort measures every upload and adjusts its volume, so tracks from different sources stay at a similar level from scene to scene.

- The target is an average of -20 dB RMS, the level audiobooks are mastered to.
- The loudest moments stay below -4 dBFS, just under the level where sound starts to clip.

Levelling only fixes volume. Noise, room tone and clipping already in the file get louder along with everything else.

## Separate channels

Music, [ambient sound](/en/media/ambient-sound/) and [voice-over](/en/media/voice-over/) are independent channels. The music keeps playing when the ambient layer switches, and dialogue plays over both.

Changing the backdrop doesn't stop the music. To change the music with a scene, set new music on that node.

## Playback in the editor

Select a node and open the **Preview** tab under the phone frame. The **Audio** card lists every track that reaches this node, one per row. Each row says **Music** or **Ambient sound**, and a track from an earlier node also says **inherited**.

One play button starts all tracks together and loops those set to loop. This is the only place in the editor where you hear the mix your reader hears. Above the frame it says *Approximate preview. The final EPOS rendering may differ.*

## Good to know

- **Audio Duration** in the **Statistics** menu on the editor's status bar counts each music or ambient track once per chapter, so the same loop on thirty nodes counts once. The figure also includes every voice-over recording.
- Music made by someone else falls under [CR-II.2](/en/publishing/content-rules/#cr-ii-2). "Royalty-free" doesn't mean "no licence needed". The licence terms decide.
- Music counts toward the [suggested price](/en/monetization/pricing/) as a yes or no, never by the minute. A second track changes nothing, but the AI declaration does.

:::caution[AI Music starts on]
The **AI Music** switch starts on. A story with any music or ambient track counts as AI-scored until you switch **AI Music** off on the Classification step of the publish dialog. The AI-scored label lowers the music part of the suggested price.
:::

## Related

- [Ambient sound](/en/media/ambient-sound/)
- [Voice-over](/en/media/voice-over/)
- [Media usage](/en/best-practices/media-usage/)
