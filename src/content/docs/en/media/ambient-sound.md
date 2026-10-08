---
title: Ambient sound
description: The atmosphere layer that sits under everything else.
helpKey: media.ambient
status: published
sidebar:
  order: 3
---
Ambient sound is the sound of the setting: rain, a crowd, wind. It plays on its own channel, together with [background music](/en/media/background-music/). Changing one doesn't affect the other.

## Add a sound

1. Add the **Ambient Sound** component from the palette ("Add ambient sound that layers over the music bed.").
2. Drop a file on the area that reads "Drag and drop audio here or click to browse". You can use .mp3, .wav, .ogg, .aac, .m4a or .flac.
3. Set the two switches under the player. Both start off.

The switches do this:

- **Keep playing** lets the sound carry on to the following nodes.
- **Loop** repeats the clip. Without it, the node is silent once the file ends.

![the Ambient Sound card in the properties panel with a clip attached, both the Keep playing and Loop switches still off under the player](/screens/en/media/ambient-sound-panel.png)

A node that receives the sound from an earlier node shows **Inherited from** and the source node's name above the player. Click the name to jump to that node.

![an inherited Ambient Sound card, reading Inherited from Node 7 above the player](/screens/en/story-editor/inherited-ambient-panel.png)

## Ending the inheritance {#inheritance}

With **Keep playing** on, the sound spreads along the links, and the nearest source wins. It stops at any of these:

- **A node with its own ambient component**, even an empty one. From there on, it's silent.
- **An inheritance stop.** This is a panel titled **Ambient Sound** that says: "Media inheritance is stopped here. This node and the nodes after it won't inherit this from upstream."
- **An end node.** It never inherits and can't hold components, so nothing plays on the closing screen.
- **A conflict.** Two different sources are the same distance away. Nothing plays until you pick one.

### Add a stop

The stop isn't in the palette. First, the node must already inherit a sound. Then click the red bin icon, **Stop inheritance**, in the header of the inherited-media panel.

If you add an Ambient Sound component to that node, it replaces the stop. You can undo that in one step.

The stop panel has two buttons:

- **Resume inheritance** deletes the stop, so the node plays what reached it before.
- **Use my own media** replaces the stop with an empty **Ambient Sound** component.

### Fix a conflict

The conflict panel lists each source by file name, with a link to its node.

- Click a source to copy its component onto this node. **Keep playing** is on in the copy.
- Click **Add your own** to insert an empty component instead.

### Groups and cutscenes

- A group lets the sound in through its entry and out through its exits.
- A group boundary never causes a conflict. If two clips reach the same entrance, or the same exit from inside, the one whose link you drew first carries on.
- A cutscene hides inherited sound on its own node, and the inherited-media panel shows "Hidden on this node". The sound comes back on the next node.

## Empty component

An ambient component with no file shows the problem "The ambient sound is not set and none is inherited." It shows on every empty component, because a node with its own component inherits nothing.

It's a warning, not an error. The chapter still publishes, and readers hear silence.

## Files

Ambient audio is handled in the same way as music. Your browser converts the file to MP3 and levels it to about -20 dB RMS. Files above 20 MB after conversion are rejected. See [Background music](/en/media/background-music/) for details.

Uploading rewrites file names. "Ambient loop (v2).wav" becomes "Ambient_loop_v2.mp3".

**Audio Duration** in the editor's **Statistics** menu counts each music or ambient track once per chapter, however many nodes it plays on. A thirty-second loop on forty nodes counts as thirty seconds. It also includes every voice-over recording, one per line or text block.

## At publish time

The **AI Music** toggle on the Classification step covers ambient sound too. It applies to the whole story, not one chapter. Switch it on even if ambient sound is the only audio made with AI.

## Tips

- Keep ambient sound quiet. Readers should barely notice it.
- A sound that clashes with the backdrop is worse than silence.
- The usual reason to stop inheritance is an outdoor loop that would otherwise carry on indoors.
- A loop with one distinct sound stands out every time it repeats.

## Related

- [Background music](/en/media/background-music/)
- [Images](/en/media/images/)
- [Node types](/en/story-editor/node-types/): media inheritance
