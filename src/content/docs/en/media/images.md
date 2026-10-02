---
title: Images
description: Backdrops and other artwork, what TalePort does to them on upload, and the rules they have to meet.
helpKey: media.images
status: published
sidebar:
  order: 1
---

A background image is a component you drop on a node, and the reader sees it full-screen behind the text. One image can cover a whole run of nodes: put a 1080 x 1920 shot of a rain-lit alley on *Alley at midnight*, switch on **Keep displaying**, and the next six nodes of the chase show the same alley without another upload. Images also carry your [story cover](/en/media/cover-image/), character avatars, global event illustrations and your author profile picture, each with its own size rules.

## Backdrops have to be portrait

A backdrop must be a vertical 9:16 image, give or take five percent. Anything else is refused the moment you pick it, with a message naming the dimensions of the file you tried: "This image is 1920x1080. Please upload a vertical (portrait) image with a 9:16 ratio." There is no override. The reader is holding a phone upright, so a landscape image would be cropped to nothing or shown in a letterbox.

1920 x 1080 is landscape. 1080 x 1920 is what you want.

The same rule applies to the [story cover](/en/media/cover-image/). Avatars and global event images have no shape requirement.

## One backdrop per node

A background image and a background video share a single slot, so a node carries one or the other. Add the second and the editor answers "A node can have either a background image or a background video, not both." Neither can sit on a node that already carries a Background inheritance stop. See [Video](/en/media/video/) for when a moving backdrop is worth its weight.

Start and End nodes hold no components at all. Drop a background on one and you get "This node type can't hold content components."; a Start or End node carrying a component is an error that blocks publishing. The closing screen is not yours to decorate. It is built from the story cover with "Thank you for playing" over it.

## What TalePort does to an image

Images are re-encoded in your browser before anything is uploaded:

| Used as | Longest side | Target size |
| --- | --- | --- |
| Backdrop | 1920 px | about 2 MB |
| Global event image | 1024 px | about 1 MB |
| Character avatar | 512 px | about 0.5 MB |

What is stored is the re-encoded WebP file, and it is the only copy kept. So upload the best version you have rather than one you have already squeezed: compressing twice costs quality and saves nothing. An image that is still above 5 MB after that pass is rejected, which at these settings takes some doing.

The compression library is loaded from a CDN. When it fails to load, your original file goes up untouched, at its original size and format, and nothing on screen says so. While a file uploads, the drop zone reports "Original: 4.2 MB (image)" and then "Compressed: 0.6 MB". If those two numbers are the same, the pass did not run. The 9:16 check happens before the library loads, so that one always applies.

The backdrop picker accepts any image file your browser can read. The pickers for avatars and global event images offer PNG, JPG and WebP. Covers take a different route; see [Cover image](/en/media/cover-image/).

## Carrying a backdrop across nodes

A backdrop applies to the node you put it on and no other, until you switch on **Keep displaying**. That toggle is what makes it carry forward, and it is off on a component you have just added.

Turn it on and set the backdrop once at the top of a scene. Every node downstream shows it until something ends it. Re-uploading the same file on twenty nodes costs the reader nothing, because uploads are matched by content and identical files are stored and packaged once. It costs you twenty uploads and twenty places to change when the art changes.

![the Background Image card in the properties panel, the Keep displaying toggle under the file details, with Replace and Remove beneath it](/screens/en/media/background-image-panel.png)

There is no asset library. Node media belongs to the chapter you uploaded it in, so putting the same alley in chapter two means uploading it again. Removal is not immediate: a removed image is kept for 30 days, and re-uploading the same file inside that window revives the old reference instead of making a new one.

## What ends a carried backdrop

Four things, not just the obvious one.

- A node with its own background component shows its own image, and from there it is that image that continues. An empty background component counts: the node shows nothing, and nothing passes through it either.
- A Background inheritance stop. You add one from the red bin icon in the header of the inherited-media panel, tooltipped **Stop inheritance**, which means you can only put a stop on a node that is inheriting at that moment. There is no palette entry for it. It is named **Background** after the channel it blocks, and because image and video share that channel, it blocks both.
- An End node, which never inherits anything.
- A conflict, below.

A group is not a wall. A carried backdrop goes into a group at its entry and comes back out at its exits, so you do not need to set it again inside.

![the Background card on a node where inheritance has been stopped, with the Resume inheritance and Use my own media actions](/screens/en/media/inheritance-stopped.png)

## When two sources meet

If two backdrops reach the same node from different directions and are exactly the same number of steps away, TalePort does not guess. The node reports a conflict and lists the nodes the two came from, and nothing is shown there until you decide. Click one of the listed sources and its image is copied onto this node with **Keep displaying** already on, so the chain continues from here. **Add your own** gives the node an empty background component instead.

## Missing images

A node with a background component and no image in it is listed as a warning in the story's problems. The message reads "The background is not set and none is inherited.", and the second half of that is noise: a node that owns a background component never inherits one, so the warning covers every empty component without exception. Warnings do not block publishing, so a backdrop you forgot to upload is just absent for the reader. Check the problems list before you submit.

## Where the numbers are

The **Statistics** menu on the editor's status bar is the only place these counts appear. **Images** there counts background images you placed yourself and filled with a file. Inherited backdrops, background videos, avatars and the cover are all left out of it. Nothing in the app shows the total weight of a chapter, so the per-file caps are all you have to go on.

## Rights

You may only use images you made yourself or have the rights to use; see [CR-II.1](/en/publishing/content-rules/#cr-ii-1) and [CR-II.2](/en/publishing/content-rules/#cr-ii-2). An image being findable through a search engine is not permission.

If the image is AI-generated or AI-assisted, you must declare it when you publish. See [CR-III.2](/en/publishing/content-rules/#cr-iii-2). The **AI Image** toggle on the publish wizard's Classification step only becomes selectable once the chapter's graph holds a background image with a file in it; an AI cover or an AI avatar does not unlock it. The answer is stored on the story, so it applies to every chapter you publish.

## Practical advice

- One backdrop per scene reads better than one per node, and it is less to maintain.
- Look at the image at phone size. Detail that carries on your monitor disappears there.

## Related

- [Cover image](/en/media/cover-image/)
- [Video](/en/media/video/)
- [Node types](/en/story-editor/node-types/): media inheritance
- [Media usage](/en/best-practices/media-usage/)
