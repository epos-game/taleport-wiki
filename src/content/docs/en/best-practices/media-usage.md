---
title: Media usage
description: Using images, music and video so they help rather than cost.
helpKey: best-practices.media
status: published
sidebar:
  order: 3
---

Media sits on nodes, on three channels that resolve independently: backdrop, music and ambient sound. Set a channel once, turn on its carry-forward toggle, and every node below inherits it until something ends it. Put the backdrop and the rain on a node called *Tavern, night*, switch both toggles on, and the eleven nodes of dialogue that follow play over them without one extra file. Everything you do upload is packed into the chapter package the reader downloads, and that weight is the trade-off behind the rest of this page.

## Three channels, one backdrop slot

- **Backdrop**: a background image *or* a background video. One slot, so a node carries one or the other. The editor says so outright: "A node can have either a background image or a background video, not both."
- **Music** and **Ambient sound**: two slots that resolve separately and play together, which is what lets a score run under a scene while rain carries on behind it.

Ask of each node what is on the backdrop, what is on music, what is on ambient. Thinking in files instead of channels is where duplicate uploads come from.

## Carrying media forward is something you switch on

It is tempting to assume a backdrop or a track keeps playing until something replaces it. It does not, not on its own. Every media component carries a toggle, **Keep displaying** on a backdrop and **Keep playing** on music, ambient sound and background video, and on a component you have just added it is off. Until you turn it on, that media belongs to its own node and nothing else.

So the pattern that works is this. Set the backdrop and the music once at the top of a scene, turn the toggle on there, and leave the nodes below empty. Everything downstream inherits until something ends it. Do not put the same image on twenty nodes; that is a heavier download and twenty things to maintain for one result.

Where two sources could reach a node, the nearest wins, counted in links travelled.

Groups are not a wall. A backdrop set outside a group carries in through its input, and one set inside carries out through its outputs. Where several links feed one group input, the first carrying media wins, with no conflict and no warning.

One thing does arrive with the toggle already on: the copy TalePort makes for you when you pick a source from the conflict panel, or use **Use my own media** after a stop marker.

## An empty component is not a placeholder

A node that holds its own component on a channel never inherits on that channel, **even when that component has no file in it yet**. Adding an empty background component to reserve the slot reserves nothing. It silences the channel on that node, and because nothing is passing through it, on everything downstream too.

The editor warns about it ("The background is not set and none is inherited."), but a warning does not stop a publish. If you are not ready to choose an image, add nothing.

## When two sources meet, nothing plays

When two different sources on the same channel reach a node from different directions and are the same number of links away, TalePort does not guess. That node plays **nothing** on that channel, and because nothing passes through it, neither does anything after it.

What counts as two sources is narrower than it looks. Inheritance remembers the node that owns the media, not the neighbour it came from, so two arms inheriting one backdrop set above the split carry the same owner and rejoin cleanly. Branch and reconverge is safe by itself. A conflict needs two separate sources: a backdrop inside the left arm, another inside the right, both reaching the join at equal distance.

The editor shows the conflict on that node and offers **Go to source node** for each one and **Add your own**, but **no validation issue is raised for it, of any severity**. It will not appear in your problems list and it will not stop a publish. If you set media inside both arms of a branch, check the join yourself.

![the Background card on a node two backdrops reach at once, each listed with the node it came from, and Add your own underneath](/screens/en/media/media-conflict-panel.png)

## One backdrop per scene

A backdrop that changes every screen stops meaning anything. Change it when the location or the moment changes, and then it lands.

## Silence and stillness are tools

A scene with no music after twenty minutes of score is a deliberate effect, and you get it with an inheritance stop. Open the inherited media panel on the node and use **Stop inheritance**. The node then carries a marker you can undo with **Resume inheritance** or replace with **Use my own media**.

What each thing does to a running channel:

- **A stop marker** ends the channel on its node and on everything downstream, until something new starts it.
- **A cutscene** hides all three channels on its own node only. It plays alone, and inherited media resumes on the nodes after it.

The End node works differently from either. It accepts no content components at all, backdrops included, so the last screen that can show one is the node before it. Nothing follows an End node in any case; it has no output port.

## Video sparingly

[Video](/en/media/video/) is the heaviest thing in a chapter by a wide margin. An opening, a key moment, not decoration. And never put information only in a video: some readers skip, some read with sound off.

Before you shoot or buy anything, know what each form costs you structurally. A cutscene owns its node: only a checkpoint and a stop marker may sit with it, the node has to use a simple transition, and text, dialogue or a choice on the same screen is refused. A background video takes the backdrop slot, so that node has no background image.

Length is no argument for either. Chapter length is text first, at 1000 characters a minute; a cutscene's running time counts only on a node with no text and no voice-over, and a looping background video never counts at all. Fill a chapter with score and moving wallpaper and it measures zero minutes, which cannot be submitted.

## The limits you are working inside

| | Cap |
| --- | --- |
| Image | 5 MB after re-encoding |
| Audio | 20 MB |
| Cutscene video | 25 MB |
| Background video | 1 MB |

A background image and the story cover are checked against 9:16 with 5% of leeway, and refused on upload if they miss it. Video has to be portrait and no larger than 1080 x 1920, an mp4 holding H.264 video and AAC audio. Video is not held to 9:16, so a 3:4 clip passes.

The difference that matters in practice: **images and audio are re-encoded in your browser, video is not**. Upload the best image you have and let TalePort compress it to webp. Audio comes back as mp3 at up to 96 kbps, resampled to 44.1 kHz at most, and loudness-normalized toward -20 dBFS RMS with a -4 dBFS peak ceiling, which is worth knowing if you mixed the track yourself. For video, the settings you render with are the only compression you get, and 1 MB of background video buys a few seconds of low-motion footage, so pick something that loops cleanly and barely moves.

## Missing files are a prompt, not a gate

When you publish or build a test package, TalePort lists any media the story references but cannot find in storage, and says where each one is used: in a node, on a character avatar, as the story cover, on a global event. You can re-upload it, remove it, or choose **Publish without these files**.

That last option is real: **a missing file does not block the submission**. It will not be there for the reader. Read the list rather than clicking past it.

## Keep a rights ledger

Record where every asset came from and under what licence **as you add it**. You hold the rights to everything you submit, and TalePort may ask you to produce a licence, a permission or proof of ownership ([CR-II.3](/en/publishing/content-rules/#cr-ii-3)); media can be rejected or removed where there are reasonable grounds to think it infringes. Reconstructing provenance for forty assets months later is miserable.

The editor gives you somewhere to put it. Right-click a node and use **Add note** to record a source against the screen it belongs to. Two traps to avoid: material being publicly available online is not permission ([CR-II.2](/en/publishing/content-rules/#cr-ii-2)), and "royalty-free" is a licence with terms, not the absence of one.

## Declare AI media as you go

Track which assets were AI-generated or AI-assisted while you add them, not at submission time when you are trying to remember.

The declaration is made once per story, in the Classification step of the publish dialog, under **AI-generated content**. There are four chips: AI Image, AI Music, AI Speech and AI Video. Only the kinds of media your story actually contains can be selected, and the rest are disabled with "Your story doesn't contain this kind of media."

Images, music and speech start the story declared as AI. Skip the step and your hand-made artwork ships as AI-generated at the AI [rate](/en/monetization/pricing/), which is half the human rate for images and voice-over, and under half for music. Video breaks the pattern twice: it starts declared as human, and its AI and human rates are identical, so that chip changes nothing about the price.

Getting it wrong is a violation in itself. Declaring is required ([CR-III.2](/en/publishing/content-rules/#cr-iii-2)), and intentionally failing to declare is handled seriously ([CR-III.4](/en/publishing/content-rules/#cr-iii-4)).

## Related

- [Images](/en/media/images/)
- [Background music](/en/media/background-music/)
- [Video](/en/media/video/)
- [Node types](/en/story-editor/node-types/)
