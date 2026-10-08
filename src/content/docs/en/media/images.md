---
title: Images
description: Backdrops and other artwork, what TalePort does to them on upload, and the rules they have to meet.
helpKey: media.images
status: published
sidebar:
  order: 1
---
A background image is a component you drop on a node. Readers see it full-screen behind the text. If you switch on **Keep displaying**, it also shows on the following nodes, so one upload covers a whole scene.

Images are also used for your [story cover](/en/media/cover-image/), character avatars, global event illustrations and your author profile picture. Each has its own size rules.

## Backdrop rules

### Vertical only

A backdrop must be a vertical 9:16 image, within 5%. TalePort refuses any other image as soon as you pick it, and you can't override that.

- 1080 × 1920 passes.
- 1920 × 1080 is landscape and fails: "This image is 1920x1080. Please upload a vertical (portrait) image with a 9:16 ratio."

Avatars and global event images can have any shape. The [story cover](/en/media/cover-image/) is also 9:16, but you build it in its own editor, which crops your image to fit.

### One per node

A background image and a background video share one slot, so a node can hold only one. If you add a second, the editor says "A node can have either a background image or a background video, not both." Background video is on the [Video](/en/media/video/) page.

If you drop a backdrop on a node with a **Background** inheritance stop, the editor removes the stop and adds the media. You can undo that. The nodes after it then inherit the new backdrop.

### Where it can go

Start, End and group nodes can't hold components. If you drop a background on one, you get "This node type can't hold content components."

- A Start or End node with a component is an error that blocks publishing.
- A group node is only a frame around a sub-graph. Put the backdrop on a node inside it.

## What happens on upload

Before upload, your browser converts and shrinks each image:

| Used as | Longest side | Target size |
| --- | --- | --- |
| Backdrop | 1920 px | about 2 MB |
| Global event image | 1024 px | about 1 MB |
| Character avatar | 512 px | about 0.5 MB |

TalePort rejects an image that's still above 5 MB after shrinking.

- While uploading, the drop zone shows "Original: 4.2 MB (image) → Compressed: 0.6 MB". This message disappears once the file is stored. If both numbers are equal, nothing was shrunk.
- After upload, four chips appear under the thumbnail on the component card: **Resolution**, **Orientation**, **Format** and **Size**. They describe the stored file.
- Click the thumbnail to see the image full size.

The backdrop picker accepts any image your browser can read. The avatar and global event pickers offer PNG, JPG and WebP. Covers work differently; see [Cover image](/en/media/cover-image/).

## Backdrop inheritance

A backdrop applies only to its own node until you switch on **Keep displaying**, which is off on a new component. With it on, the backdrop shows on every following node until something ends it.

The same image on twenty nodes costs readers nothing, because identical files are stored once. For you, though, it means twenty uploads, and twenty places to change if the art changes.

![the Background Image card in the properties panel, the Keep displaying toggle under the file details, with Replace and Remove beneath it](/screens/en/media/background-image-panel.png)

A node that inherits the backdrop shows **Inherited from** and the source node's name above the picture. Click the name to jump to that node.

![an inherited backdrop card, headed Background Image, reading Inherited from Node 6 above the picture and its dimensions](/screens/en/story-editor/inherited-image-panel.png)

Node media belongs to the chapter you uploaded it in, so upload the same image again for another chapter.

## Ending the backdrop inheritance {#inheritance}

Four things end the backdrop inheritance.

- **A node with its own background component.** It shows its own image, and that image continues from there. An empty background component counts too: the node shows nothing and passes nothing on.
- **A Background inheritance stop.** Click the red bin icon, **Stop inheritance**, in the header of the inherited-media panel. You can add it only to a node that already inherits, as it isn't in the component palette. Image and video share the channel, so the stop blocks both.
- **An End node.** It never inherits anything.
- **A conflict.** See below.

A backdrop goes into a group at its entry and out at its exits. You don't need to set it again inside.

![the Background card on a node where inheritance has been stopped, with the Resume inheritance and Use my own media actions](/screens/en/media/inheritance-stopped.png)

### Conflicting sources

The nearest source wins, counted in links. If two backdrops reach one node from different directions at the same distance, the node reports a conflict and lists the nodes they came from. Nothing shows until you decide.

- Click a listed source. Its image is copied onto this node with **Keep displaying** already on, and the chain continues from here.
- Click **Add your own** to give the node an empty background component instead.

A group boundary never reports a conflict. If two backdrops reach the same group entrance, or the same exit from inside, the one whose link you drew first carries on. To avoid this, set the backdrop on the first node inside the group.

## Missing images

A node with a background component and no image shows a warning: "The background is not set and none is inherited." Every empty component gets it, because a node with its own component never inherits one.

Warnings don't block publishing. Readers just see no backdrop.

## Counts in Statistics

Open the **Statistics** menu on the editor's status bar. **Images** counts the background images you placed yourself and filled with a file. It leaves out inherited backdrops, background videos, avatars and the cover. There's no total size for a chapter.

## Rights and AI disclosure

Use only images you made or have the rights to use ([CR-II.1](/en/publishing/content-rules/#cr-ii-1), [CR-II.2](/en/publishing/content-rules/#cr-ii-2)). Finding an image in a search engine isn't permission.

If AI made or helped make an image, you must declare it when you publish ([CR-III.2](/en/publishing/content-rules/#cr-iii-2)). Use the **AI Image** toggle on the Classification step of the publish dialog. It's available once the story has any of these:

- a background image with a file in it, on any chapter at any status
- a character avatar
- a global event's image

The cover doesn't count. Your answer is stored on the story, so it applies to every chapter you publish.

The toggle starts on. Once your story has a picture, TalePort treats the art as AI-made until you change that.

- **Off** declares that you made the art yourself.
- **On** puts an AI label on your story page for every reader, and the suggested price drops.

## Tips

- Upload the original, not an already compressed copy. TalePort compresses every image again.
- Readers see a backdrop at phone size. Fine detail gets lost.

## Related

- [Cover image](/en/media/cover-image/)
- [Video](/en/media/video/)
- [Node types](/en/story-editor/node-types/): media inheritance
- [Media usage](/en/best-practices/media-usage/)
