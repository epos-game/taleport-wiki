---
title: Video
description: Cutscenes and background video, what they cost the reader, and what will be rejected.
helpKey: media.video
status: published
sidebar:
  order: 5
---

Video arrives as two components that behave nothing alike. A **cutscene** is the node itself: it fills the screen, plays alone, and nothing else may sit on that node. A **background video** takes the backdrop slot instead and loops behind text and choices, with 1 MB to do it in. Put a six-second cutscene of the cellar door swinging open on *Cellar door*, then let *Down the stairs* loop torchlight on wet stone while the reader picks a direction.

## Accepted files

An mp4, and the picker offers nothing else. The video track has to be H.264, which an mp4 records as `avc1` or `avc3`. Audio is optional: a silent clip passes, which is what most looping backdrops are anyway. When there is an audio track, it has to be AAC.

Shape is checked as "not landscape" rather than as 9:16, so a square 1080 x 1080 clip is accepted even though a phone will letterbox it. Resolution is checked per axis, so anything wider than 1080 or taller than 1920 is refused: "Video resolution too high (1920x1080); the maximum is 1080x1920."

Both checks run in your browser on the file you picked. If the browser cannot read the file's metadata within ten seconds, you get "This video could not be read. Please upload an H.264 mp4 file." The codec check then parses the mp4 box tree, and a track whose codec it cannot read is left unchecked, so an unusual file occasionally gets through on the strength of the browser being able to play it.

## TalePort does not convert video

Images and audio are re-encoded in your browser. Video is only checked. What you upload is what readers download, byte for byte, which makes your export settings the only compression you get and the size caps the real constraint:

| Used as | Size cap |
| --- | --- |
| Cutscene | 25 MB |
| Background video | 1 MB |

Nothing limits duration, but 1 MB does. A background video wants to be short, low on movement and clean at the loop point: drifting smoke, rain on glass, a slow pan. Busier footage either overruns the cap or looks like a bad GIF.

## A cutscene owns its node

A cutscene is exclusive content. The only things allowed beside it are a [checkpoint](/en/story-editor/checkpoints/) and an inheritance stop marker, and the node has to use the simple transition. Text, dialogue, choices, a background image, a background video, music and ambient sound are all refused with "This is primary content (like a video) and can't be combined with the node's other components. Clear the node first; a checkpoint may stay." Switching that node to another transition is refused as well, until you remove the clip.

While the cutscene is on screen, the inherited backdrop, music and ambient sound are hidden so it plays alone, and they resume on the nodes after it. A cutscene never carries forward, and there is no Loop or Keep displaying toggle on it. The editor shows its **Length** and leaves you nothing else to set.

A cutscene component with no file in it shows up in the story's problems as "The cutscene is not set." That is a warning, so it will not stop you publishing a node where readers get a blank scene.

## Background video shares the backdrop slot

A background video and a [background image](/en/media/images/) occupy one slot, so a node holds either one. Add the second and the editor answers "A node can have either a background image or a background video, not both." Neither can sit on a node that carries a Background inheritance stop, and that stop ends both kinds at once, because there is a single backdrop channel to block.

Two toggles sit beside the preview, and they are not the same switch. **Loop** is on from the moment you upload, unlike music and ambient sound, which start with it off. **Keep displaying** starts off, so the clip stays on its own node until you turn it on, whatever the component palette says about child nodes inheriting it.

## What it costs the reader

A chapter downloads as one package before the reader opens it, media included, so a 20 MB cutscene is 20 MB of waiting on mobile data. Nothing in TalePort caps a chapter's total size, and the editor never shows you the package size either. The nearest number you have is **Video Duration** in the **Statistics** menu on the editor status bar, which sums your cutscenes and counts each background clip once however many nodes carry it.

## Rights

Video carries the same rights requirements as every other medium, and usually several at once: the footage, the music under it, and anyone recognisable in it. See [CR-II.1](/en/publishing/content-rules/#cr-ii-1) and [CR-II.2](/en/publishing/content-rules/#cr-ii-2).

AI-generated video is declared on the publish wizard's Classification step, where the **AI Video** toggle is selectable only once your chapter actually holds a cutscene or a background video. See [CR-III.2](/en/publishing/content-rules/#cr-iii-2). It does not move the suggested price: the AI and human video rates in the calculator are the same number.

## Practical advice

- Export portrait H.264 at or below 1080 x 1920 before you try to upload. The three things that get a file refused are orientation, resolution and codec, and all three are export settings.
- Fitting a backdrop into 1 MB means cutting the motion first and the bitrate second. Three seconds that loop beat eight that stutter.
- Keep cutscenes short. A reader who sat through the first one will skip the second.
- Put nothing load-bearing in video alone. Some readers skip it, some read with the sound off.
- Test on a phone over mobile data, not at your desk.

## Related

- [Images](/en/media/images/)
- [Node types](/en/story-editor/node-types/)
- [Media usage](/en/best-practices/media-usage/)
