---
title: Video
description: Cutscenes and background video, what they cost the reader, and what will be rejected.
helpKey: media.video
status: published
sidebar:
  order: 5
---
TalePort has two kinds of video:

| | Cutscene | Background video |
| --- | --- | --- |
| What it is | The node itself | A clip in the backdrop slot |
| How it plays | Fills the screen and plays alone | Loops behind the text and choices |
| Size limit | 25 MB | 1 MB |

## Supported files

You can upload mp4 files only.

- **Video:** H.264 (an mp4 records it as `avc1` or `avc3`).
- **Audio:** optional, so a silent clip passes. If there's audio, it must be AAC.
- **Anything else** is refused with this message: "Unsupported video codec (hev1). Please use H.264 video with AAC audio in an mp4 file."

### Shape and resolution

- Only landscape video is rejected, with this message: "This video is landscape. Please upload a vertical (portrait, 9:16) video."
- It doesn't have to be exactly 9:16. A square 1080 × 1080 clip is accepted, though a phone will letterbox it.
- Each side is checked on its own. A portrait clip wider than 1080 or taller than 1920 is refused with: "Video resolution too high (1440x2560); the maximum is 1080x1920."
- Both checks run in your browser. If your browser can't read the file within ten seconds, you get "This video could not be read. Please upload an H.264 mp4 file."

## Size

Your browser converts images and audio, but it only checks video.

:::tip[Compress when exporting]
Readers get exactly what you upload. Compress the video in your export settings.
:::

Length isn't limited; only size is. To fit 1 MB, a background video has to be short and have little movement. Make the loop join cleanly.

## Cutscene

A cutscene is exclusive content: it can't share its node with other components. Only a [checkpoint](/en/story-editor/checkpoints/) and an inheritance stop may sit beside it, and the node must use the simple transition.

- Text, dialogue, choices, a background image, a background video, music and ambient sound are all refused with this message: "This node holds primary content (like a video) that can't share the node. Only a checkpoint can be added alongside it."
- It works the same the other way round. If you drop a cutscene onto a node that already holds something, you get "This is primary content (like a video) and can't be combined with the node's other components. Clear the node first, a checkpoint may stay."
- You can't change that node's transition until you remove the clip.

While the cutscene plays, the inherited backdrop, music and ambient sound are hidden. They come back on the nodes after it.

A cutscene never carries forward, so it has no **Loop** or **Keep displaying** toggle. Under the file name are four chips: **Length**, **Resolution**, **Orientation** and **Format**. Click the thumbnail to play the clip.

A cutscene with no file shows the problem "The cutscene is not set." It's a warning and doesn't block publishing, but readers get a blank scene.

![the Cutscene card in the right-hand panel: a portrait thumbnail with a play badge, the file name, and chips for length, dimensions, orientation and format, with Replace and Remove underneath](/screens/en/media/cutscene-panel.png)

## Background video

A background video and a [background image](/en/media/images/) share one slot, so a node can hold only one. If you add a second, the editor says "A node can have either a background image or a background video, not both."

One **Background** inheritance stop ends both, because image and video share one backdrop channel. You can also drop a backdrop on a stopped node. The editor removes the stop and adds the clip, and you can undo that.

A node that inherits the backdrop shows one card with **Inherited from** and the source node's name. The source can be an image or a video. The example below shows an image.

![an inherited backdrop card, headed Background Image, reading Inherited from Node 6 above the picture and its dimensions](/screens/en/story-editor/inherited-image-panel.png)

Two toggles sit beside the preview:

- **Loop** is on after upload. (For music and ambient sound it starts off.)
- **Keep displaying** is off, so the clip stays on its own node until you turn it on.

The following nodes inherit a background video only with **Keep displaying** on.

## What it costs the reader

A chapter downloads as a whole, media included, before the reader opens it. A 20 MB cutscene means 20 MB of waiting on mobile data.

A chapter's total size has no limit. To estimate it, use **Video Duration** in the **Statistics** menu on the editor status bar. It adds up your cutscenes and counts each background clip once, however many nodes use it.

## Rights and AI disclosure

Video follows the same rights rules as every other medium, and often several apply at once: the footage, the music under it, and anyone recognisable in it. See [CR-II.1](/en/publishing/content-rules/#cr-ii-1) and [CR-II.2](/en/publishing/content-rules/#cr-ii-2).

Declare AI-generated video on the Classification step of the publish dialog ([CR-III.2](/en/publishing/content-rules/#cr-iii-2)).

- The **AI Video** toggle is available once the story has a cutscene or background video in any chapter, at any status.
- Your answer is stored on the story, so it covers every chapter you publish.
- Unlike **AI Image**, **AI Music** and **AI Speech**, this toggle starts off.
- It doesn't change the suggested price, because AI and human video have the same rate.

## Tips

- Export portrait H.264 at 1080 × 1920 or smaller. Apart from the size limit, TalePort refuses a file only for orientation, resolution or codec.
- To fit a backdrop into 1 MB, cut the motion first, then lower the bitrate.

## Related

- [Images](/en/media/images/)
- [Node types](/en/story-editor/node-types/)
- [Media usage](/en/best-practices/media-usage/)
