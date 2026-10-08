---
title: Cover image
description: The one piece of artwork every reader sees, and the editor you build it in.
helpKey: media.cover-image
status: published
sidebar:
  order: 6
---
The cover is the one picture every reader sees. It belongs to the story, not to a chapter. You don't upload a finished file. You create the cover (the thumbnail) directly in the TalePort editor, and it has three parts:

- a background image,
- one layer of text or a logo on top,
- a layout that sets where that layer goes.

TalePort exports one 1080 × 1920 image and shows it as the story's cover everywhere. In the editor it is called the **cover**, and the button on the story's detail page is called **Thumbnail**. It is the same image.

## You need a cover to publish

You can't publish any chapter without one. The publish checks include a **Story cover image** row with a **Review metadata** button. Until it passes, publishing stops with "The story cover image is missing."

The cover is also the backdrop of the first and last screen.

- **First screen:** the cover is blurred and darkened. A sharp version sits in a square panel above the title, with the description and the **Begin** button below. The square crops to the centre, so it cuts off the top and bottom of the artwork.
- **Last screen:** only the blurred version, with "Thank you for playing".

## Open the editor

You can open it from any of these:

- the **Thumbnail** button next to **Edit Details** on the story's detail page,
- the cover tile in the **Epos Properties** dialog,
- the cover tile on the **Metadata** step of the publish dialog.

On the two tiles, the label is **Set up the cover** until a cover exists, then **Edit the cover**. If you came from a dialog, saving takes you back to it.

The editor opens on its own page, with the canvas on the left and the **Composition** panel on the right.

The first time, **Choose a layout** offers **Title at the top**, **Title in the middle** and **Title at the bottom**. Your choice sets where the title band starts, and you can still move the layer. If you use **Change layout** later, the layer moves into the new band and keeps its position in it.

## Background

Drop an image into **Background**.

- Use PNG, JPEG or WebP.
- Use a portrait image with a 9:16 ratio, 1080 × 1920 px or larger.
- Every background goes through a crop dialog with a 9:16 frame. Only what's inside the frame stays. The image then fills the canvas, centred.
- **Replace** swaps the image. **Remove** clears it.

Until you add a background, **Preview** and **Save cover** are disabled and show "Add a background image".

:::caution[No text in the background]
The background must have no text: no title, author name, tagline or watermark. The editor says: "The background must not contain any text. The title layer is the only text on the cover."
:::

## Title layer

There is one layer, called **Title**, and you can't add another. The **Text** / **Image** switch makes it text or an image. The layer is centred in its band and can't be rotated. Drag it where you want it.

### As text

- It starts as your story title and follows it, so if you rename the story, the cover text changes too.
- Your first keystroke in the text ends that link for good, even if you type the old title again.
- Your own text is limited to **120 characters**, spaces included. A long title inherited from the story has no limit until you edit it.
- On save, TalePort merges repeated spaces inside a line and trims the ends. Each line you type stays its own line.
- TalePort never shortens text. If it doesn't fit, it runs outside the band.

You can set:

- **Typeface**: there are twenty-one, grouped as Fantasy, Sci-fi, Horror, Drama and thriller, Romance, Adventure and Playful.
- **Colour**, **Brightness**, **Opacity** and **Font size**.
- **Text shadow**: None, Soft, Medium or Strong. **Shadow colour** appears once the shadow is on.

### As an image

The layer takes a transparent PNG, which suits a logo or ready-made lettering. You can set **Size**, position, **Shadow**, **Brightness** and **Opacity**.

## Guides

Turn on **Guides** to mark the parts of the image you can't rely on. The guides aren't included in the export.

- **Covered by the store**: the top and bottom 8.8% of the cover.
- **May be cropped**: the strips that the layout leaves unused, between the store bands and the title and picture bands. Their size differs per layout. Anything there may show or be cut off, depending on the screen.
- **Main text**: the band for the title layer.
- **Artwork**: the band left for the picture. It appears only with **Title at the top** (about a third to four fifths down) and **Title at the bottom** (a fifth to two thirds down). **Title in the middle** gives the title most of the frame, so it has no artwork band.

The images below show the bands over a finished cover for each layout. Red is covered by the store, orange may be cropped, green is for your subject and blue is the title layer.

With **Title at the top**, the blue title band is above the green artwork band.

![the zones on a cover built with the title at the top](/screens/en/media/cover-zones-top.png)

With **Title in the middle**, blue takes the centre and there's no green band.

![the zones on a cover built with the title in the middle](/screens/en/media/cover-zones-middle.png)

With **Title at the bottom**, the green artwork band is above the blue title band.

![the zones on a cover built with the title at the bottom](/screens/en/media/cover-zones-bottom.png)

## Preview

**Preview** shows the cover in the two places readers see it:

- **Featured card**, at the top of the library: the whole cover in a 9:16 ratio, shown at 172 px.
- **Library card**, in the grid below: a 132 px strip that crops 7.4% off the top and bottom.

**Back to editing** takes you back.

![a story's detail page, where the cover appears at the size most readers see it](/screens/en/media/cover-thumbnail-test.png)

## Save

**Save cover** builds the image in your browser and uploads it. Before saving, the editor tells you if anything is missing: "Add a background image", "Add the title text", "Add an image to the title layer", "Shorten the title text".

:::caution[Save first]
Unsaved work is lost when you leave the page.
:::

- TalePort resizes the background to fit inside 1080 × 1920. It doesn't enlarge a smaller image.
- Your background and layer stay saved as working material. Readers download only the finished cover.
- The header shows **Unsaved changes** until you save, then **Saved** with the time.
- **Discard changes** in the menu of extra actions drops your unsaved work on purpose, after you confirm.
- **Delete** removes the cover from the story. You can't publish again until you build a new one.

## Rights and disclosure

- You need the rights to everything on the cover ([CR-II.1](/en/publishing/content-rules/#cr-ii-1)).
- When you publish, you must declare artwork that AI made or helped make ([CR-III.2](/en/publishing/content-rules/#cr-iii-2)).

The cover doesn't count toward the **AI Image** toggle on the Classification step of the publish dialog. That toggle covers backdrops, character avatars and global event images. If your story has none, the toggle is disabled with the note "Your story doesn't contain this kind of media."

## Related

- [Story metadata](/en/publishing/story-metadata/)
- [Images](/en/media/images/)
- [Publishing requirements](/en/publishing/publishing-requirements/)
