---
title: Media usage
description: The three media channels, how a node inherits them, and what media costs a chapter.
helpKey: best-practices.media
status: published
sidebar:
  order: 3
---

Media sits on nodes, on three independent channels: backdrop, music and ambient sound. Set a channel on one node and turn on its carry-forward toggle. Every later node then inherits it until something ends it.

Readers download everything you upload together with the chapter. For format rules and what TalePort does to a file on upload, see [Images](/en/media/images/), [Background music](/en/media/background-music/) and [Video](/en/media/video/).

## The media channels

- **Backdrop:** a background image *or* a background video. It is one slot, so a node carries one or the other. The editor says: "A node can have either a background image or a background video, not both."
- **Music** and **Ambient sound:** two separate slots that play together. A score can run under a scene while rain carries on behind it.

Each channel page says which toggle carries the channel forward and what ends it: [Images](/en/media/images/#inheritance), [Background music](/en/media/background-music/#inheritance) and [Ambient sound](/en/media/ambient-sound/#inheritance).

When two sources can reach a node, the nearest one wins. Distance is counted in links.

**Groups.**

- Media set outside a group carries in through the group's input.
- Media set inside carries out through the group's outputs.
- When several links feed one group input, TalePort uses the first one that carries media. That raises no conflict and no warning.

## Empty components

A node with its own component on a channel does not inherit on that channel, **even when the component has no file in it yet**. An empty component still takes the slot. The channel carries nothing on that node, so nothing passes on to later nodes either.

The editor warns ("The background is not set and none is inherited."). The warning doesn't stop a publish. Until you know which image you want, don't add the component.

## Two sources at the same distance

Two different sources on one channel can reach a node from different directions at the same distance. That node then plays **nothing** on that channel, and nothing plays on later nodes either.

Branching and rejoining alone is safe. Inheritance remembers the node that owns the media, not the neighbour it came from. Two arms that inherit one backdrop set above the split have the same owner and rejoin cleanly.

A conflict needs two separate sources: one backdrop inside the left arm, another inside the right arm, both reaching the join at equal distance.

The media card on that node shows the conflict. For each source it offers **Go to source node**, plus **Add your own**. A conflict doesn't stop a publish. If you set media inside both arms of a branch, check the join. Restore the channel with **Add your own**, or set the media before the split.

The copy made from the conflict panel, or from **Use my own media**, already has the carry-forward toggle on.

![the Background card on a node two backdrops reach at once, each listed with the node it came from, and Add your own underneath](/screens/en/media/media-conflict-panel.png)

## Backdrop changes

A backdrop carries forward until something replaces it. To change it, set a new one on that node.

## Stopping a channel

To end a running channel on a node:

1. Select the node.
2. In the right-hand panel, find the card for the inherited media.
3. Click the bin icon in its header. On hover it reads **Stop inheritance**.

The node then carries a marker. Undo it with **Resume inheritance**, or replace it with **Use my own media**.

- **A stop marker** ends the channel on its own node and on every node after it, until something new starts it.
- **A cutscene** hides all three channels on its own node only. It plays alone, and inherited media resumes on the nodes after it.

The End node accepts no content components, backdrops included. So the last screen that can show a backdrop is the node before it. Nothing follows an End node anyway, because it has no output port.

## Video

[Video](/en/media/video/) is the heaviest part of a chapter. Some readers skip a video and some read with the sound off. These readers can miss information that is only in a video.

- **A cutscene** takes a whole node. Only a checkpoint and a stop marker may sit with it. The node must use a simple transition. You can't put text, dialogue or a choice on the same screen.
- **A background video** takes the backdrop slot, so that node can't have a background image.

Neither adds much length. Chapter length comes mostly from text, at 1000 characters a minute.

- A cutscene's running time counts only on a node with no text and no voice-over.
- A background video never counts, whether **Loop** is on or off.
- A chapter of music and moving backgrounds measures zero minutes, and you can't submit a chapter with zero minutes.

## Missing files

When you publish, TalePort lists any media the story references but can no longer find. For each one it says where it is used: in a node, on a character avatar, as the story cover, or on a global event. You can re-upload it, remove it, or choose **Publish without these files**.

**A missing file doesn't block the submission.** Readers won't have it.

## Records of your rights

As you add each asset, record where it came from and under what licence.

You must hold the rights to everything you submit. TalePort may ask for a licence, a permission or proof of ownership ([CR-II.3](/en/publishing/content-rules/#cr-ii-3)). It can reject or remove media when there are reasonable grounds to think it infringes rights.

In the editor, right-click a node and use **Add note** to record a source on the screen it belongs to. Material that is publicly available online is not permission to use it ([CR-II.2](/en/publishing/content-rules/#cr-ii-2)). "Royalty-free" is a licence with terms, not the lack of one.

## Declaring AI media

As you add each asset, track whether it was AI-generated or AI-assisted.

You declare once per story, on the Classification step of the publish dialog. [Classification](/en/getting-started/publishing/#classification) covers the four options. Each media page says which option applies to it.

- **Images, music and speech** start out declared as AI. If you skip the step, your hand-made artwork ships as AI-generated at the AI [rate](/en/monetization/pricing/). That is half the human rate for images and voice-over, and under half for music.
- **Video** starts out declared as human. Its AI and human rates are the same, so the option doesn't change the price.

You must make this declaration ([CR-III.2](/en/publishing/content-rules/#cr-iii-2)). Deliberately failing to declare is a serious violation ([CR-III.4](/en/publishing/content-rules/#cr-iii-4)).

## Related

- [Images](/en/media/images/)
- [Background music](/en/media/background-music/)
- [Ambient sound](/en/media/ambient-sound/)
- [Video](/en/media/video/)
- [Voice-over](/en/media/voice-over/)
- [Cover image](/en/media/cover-image/)
- [Node types](/en/story-editor/node-types/)
