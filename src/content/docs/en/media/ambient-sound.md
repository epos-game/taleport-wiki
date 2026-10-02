---
title: Ambient sound
description: The atmosphere layer that sits under everything else.
helpKey: media.ambient
status: published
sidebar:
  order: 3
---

Ambient sound is an atmosphere layer on its own channel: rain, a harbour crowd, wind through a forest, a generator humming two rooms away. It resolves independently of [background music](/en/media/background-music/), so both play at once and changing one leaves the other alone. Put a thirty-second rain loop on *Harbour at night* with **Keep playing** and **Loop** switched on, and the rain carries the reader through all six dock nodes while the music under it goes from a tense cue to nothing.

## Why it is a separate channel

Music says how a scene feels. Ambience says where it happens. Because the two channels resolve separately, you can rescore a sequence without moving the rain, and take the reader indoors without touching the music.

## Adding it and making it carry

**Ambient Sound** sits in the component palette, described there as "Add ambient sound that layers over the music bed". The node editor then shows a drop zone reading "Drag and drop audio here or click to browse", and the picker offers .mp3, .wav, .ogg, .aac, .m4a and .flac.

Both switches live under the player, so they appear only once a clip is attached. **Keep playing** is off on a new component, and it is what lets the ambience leave its own node. **Loop** starts off as well, and it matters more here than it does for music: a forty-second loop that runs out drops the scene into silence, and the reader hears exactly when it happened.

![the Ambient Sound card in the properties panel with a clip attached, both the Keep playing and Loop switches still off under the player](/screens/en/media/ambient-sound-panel.png)

## What ends it

From a node with Keep playing on, ambience spreads outward along the links, one node at a time, and the nearest source wins. It stops at:

- a node that carries its own ambient component, including an empty one, which means silence from there on
- the ambient inheritance stop, a panel titled **Ambient Sound** reading "Media inheritance is stopped here. This node and the nodes after it won't inherit this from upstream.", with **Resume inheritance** and **Use my own media** as its two actions
- an end node, which never inherits and cannot hold components of its own; the closing screen is your story cover with "Thank you for playing" over it, and it plays nothing
- two different sources arriving at the same distance, which is a conflict: nothing plays until you resolve it

The stop is not in the palette. You add it with the red trash icon in the header of the inherited-media panel, tooltip **Stop inheritance**, which means a node has to be inheriting before you can stop it there.

The conflict panel lists each source by file name with a link to the node it came from. Click one and its component is copied onto this node with Keep playing already on, so the chain continues from here. **Add your own** gives you an empty component instead.

A group passes ambience through: in at its entry to the nodes inside, out again at its exits. A cutscene behaves differently. It hides the inherited ambience on its own node, which the inherited-media panel marks "Hidden on this node", and the ambience comes back on the node after it.

## When the component is empty

An ambient component with no file is reported in the story's problems as "The ambient sound is not set and none is inherited." The second half of that message is misleading. A node that owns a component never inherits on that channel, so the warning fires for every empty ambient component, with no exception. It is a warning rather than an error, so the chapter still publishes: the empty component is dropped from the package and the reader gets silence.

## Files

Ambient audio takes the same path as music. Whatever you upload is converted to MP3 in your browser, levelled toward -20 dB RMS, and rejected above 20 MB after conversion. [Background music](/en/media/background-music/) has the numbers. Names are rewritten on the way in, so "Rain on tin roof (loop).wav" is stored and shown as "Rain_on_tin_roof_loop.mp3".

In the editor's **Statistics** menu, **Audio Duration** counts each unique track once for the whole chapter, however many nodes it plays on. One rain loop carried across forty nodes is thirty seconds there, not twenty minutes.

## At publish time

The **AI Music** toggle on the Classification step covers ambient sound too, and it is stored on the story rather than on the chapter. It is still labelled AI Music when ambience is the only audio you have, and one switch answers for both, so an AI-generated rain loop under a human-composed score leaves you nothing to tick separately.

## Practical advice

- Keep it quieter than feels right. If the reader notices the ambience, it is too loud.
- Match it to the backdrop. Ambience that contradicts the image distracts more than silence would.
- Stop it when the reader goes indoors. An outdoor loop that follows them into a cellar breaks the scene, and that is the most common reason to add a stop.
- Avoid loops with events in them. A dog barking every thirty seconds turns into a metronome.

## Related

- [Background music](/en/media/background-music/)
- [Images](/en/media/images/)
- [Node types](/en/story-editor/node-types/): media inheritance
