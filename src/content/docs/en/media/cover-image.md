---
title: Cover image
description: The one piece of artwork every reader sees, and the shape it has to be.
helpKey: media.cover-image
status: published
sidebar:
  order: 6
---

The cover is the single image that belongs to the story itself, next to its title and description. It is the card someone taps in a list, and it is also the backdrop of your story's first and last screen. No chapter can be published until the story has one. A lantern burning in fog, exported at 1080 x 1920, does both jobs: it still reads as a narrow card beside the title "The Ashfall Road", and its colour carries the opening screen behind the description and the **Begin** button.

## Where you set it

The create-story wizard has a **Cover image** step ("A great cover earns the first tap."). You can replace the image later from the story page or the editor header, and once more on the **Metadata** step of the publish wizard. The publish checks list a **Story cover image** row with a **Review metadata** button next to it, and until that row passes, publishing stops with "The story cover image is missing."

One file is used at every size. TalePort never generates a smaller copy.

## It has to be portrait

The cover must be a vertical 9:16 image, with five percent of slack either way. Aim for 1080 x 1920. A 1080 x 1800 file is already too close to square and will not go through: nothing is staged, and a warning names the dimensions it read, as in "This image is 1080x1800. Please upload a vertical (portrait) image with a 9:16 ratio." Nothing is blocked, so you can crop and drop the file in again.

The dimensions are read out of the file header, and TalePort understands PNG, WebP and JPEG there. A file whose header it cannot read goes through in whatever shape it is.

Ignore the hint under the drop zone in the create-story wizard. It reads "Recommended: 16:9 aspect ratio, minimum 1280x720px", which is the opposite of what the upload accepts.

## What to upload

The picker offers `.png`, `.jpg`, `.jpeg` and `.webp`. Your browser shrinks the picture to fit inside 1080 x 1920 and re-encodes it as JPEG, and that JPEG is what gets stored. A smaller image is never enlarged. Node backdrops take a different route and end up as WebP, so the two do not match.

The size of the file you pick is not checked. The 10 MB limit applies to the resized JPEG, which at 1080 x 1920 never comes near it, so send your best export rather than one you have already squeezed.

## Designing it

Open the preview on your Start node and you will see the cover twice: blurred and darkened across the whole screen, and sharp in a square panel above the title. The square crops to the centre, so the top and bottom of your artwork are cut away there. The end screen uses only the blurred version, with "Thank you for playing" over it.

- **It will be small.** In your story library the cover is a 132 pixel wide strip beside the title. A detailed illustration turns to grey mush at that width, while one strong shape and two colours survive.
- **Leave the title out of the artwork.** It is drawn beside the cover on a card and over it on the opening screen. Paint it in and you get two titles at different sizes, and the one in the picture cannot be translated.
- Put the subject in the middle third. That is the part the square panel keeps.
- A cheerful cover on a horror story loses you the readers who would have liked it and disappoints the ones who tap.

![a story's detail page, where the cover appears at the size most readers meet it](/screens/en/media/cover-thumbnail-test.png)

## Rights and disclosure

You need the rights to the cover, as with everything else you upload ([CR-II.1](/en/publishing/content-rules/#cr-ii-1)), and artwork that AI generated or helped generate has to be declared when you publish ([CR-III.2](/en/publishing/content-rules/#cr-iii-2)).

There is a gap worth knowing about. The **AI Image** toggle on the publish wizard's Classification step only becomes selectable when some node in your graph carries a background image with a picture in it. The cover does not count towards that. In a story with no backdrops the toggle stays disabled, tooltipped "Your story doesn't contain this kind of media.", and an AI cover has nowhere to be ticked.

## Related

- [Story metadata](/en/publishing/story-metadata/)
- [Images](/en/media/images/)
- [Publishing requirements](/en/publishing/publishing-requirements/)
