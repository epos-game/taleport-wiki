---
title: Testing and contributors
description: Sharing a chapter with other readers before it goes to review.
helpKey: getting-started.testing
status: published
sidebar:
  order: 4
---

**Testing** lets people you choose read one chapter in the EPOS app, just as readers would, before it goes to review. Their notes are attached to the node they were on.

## Starting a test build

1. Press **Publish** in the editor header.
2. In the dialog **How do you want to publish?**, choose **Test with contributors first**. (The other option sends the chapter straight to review.)
3. In the testing panel, press **Build test package**.

You get this choice for a draft and for a chapter already in testing. A published chapter doesn't get this choice. Its dialog opens on the validation step, because updates go through review.

Only two things block a test build:

- graph errors
- a chapter before this one that is neither in testing nor published. A chapter that is waiting on a reviewer doesn't count. For example, chapter 1 in the **In review** state blocks a test build of chapter 2.

You don't need a classification, price, cover or filled-in author profile. Missing media files don't stop a test build, because it skips them.

The package is a snapshot of the story when you build it. Testers don't see later edits until you build again. You can edit a chapter in testing just like a draft.

**Remove testing** is in the same panel. It returns the chapter to **Draft** and deletes the test package, but leaves your story content alone.

Only the story owner can use **Build test package** and **Remove testing**. A contributor can't build a test package, remove testing, submit for review or reorder chapters.

## Contributors

Your story's team is you plus the accounts you add. To manage it, open **Manage** on the story's detail page. The dialog has two kinds of entry:

- **Epos accounts.** Search for the user. They get access to the story and can leave feedback, and testing is meant for them.
- **Person outside Epos** and **Organization.** These are credits for people and studios who don't work inside TalePort. They only appear in the credits. They get no access, can't leave feedback, and you can't assign billing to them.

Also credit anyone who drew your backgrounds or recorded your narration. This documents your rights under [CR-II.1](/en/publishing/content-rules/#cr-ii-1).

For each entry, add a free-form list of what they did. Six presets are available: author, translator, publisher, editor, storyteller and illustrator. You are the **Creator**, and you can't remove yourself from your own story.

**Email.** The email on a person is optional. TalePort uses it only to match them to an Epos account if they open one later. It must be a valid address that isn't already on the story, whether on another credited person or on an account contributor. Otherwise the save stops with "That e-mail address is not valid." or "This e-mail is already credited on this story."

**Limits:**

- 30 credited people without an account, and 10 organisations
- names up to 100 characters
- 12 contributions each, up to 50 characters long

If you go over 30 people, the save is refused with a message that names the limit. If you go over 10 organisations, the message is "Could not save the contributors." If you see it, check the number of organisations. The contributions list is never refused, only cleaned up on save: duplicates are dropped, anything longer than 50 characters is shortened, and anything past the twelfth is ignored.

You choose again who stays when you publish. The **Contributors** step of the publish wizard lists your account contributors. Anyone you unselect there loses access to future versions. Their existing feedback is kept.

## Conditions for contributor feedback

A contributor can write notes in three states only:

- **Testing**
- **In review**
- a published chapter that has gone back **In review**

They can't write in a draft, in a settled **Published** chapter, or in **Published · revising**. A reviewer puts a rejected published chapter into that last state. Once a chapter is published and nobody is reviewing it, new notes can arrive only after you send a revision to review.

**Where notes come from.** A note from the EPOS app is attached to the node the tester was reading. TalePort also saves the version of the package they played. A contributor who opens the story from their library gets the editor in read-only mode. They can move through the graph, write in the **Notes** tab and see only their own notes. Either way, a note can have at most 2000 characters.

**Where you read them.** Open the **Notes** tab of the right-hand panel.

- Tester notes are tagged **Tester**.
- **Go to node** takes you to the node a note refers to.
- You can mark any note as complete.
- A story with unread notes has the badge **Unread testing feedback** in your library.

**What contributors can read.** A contributor sees every chapter of your story that isn't a draft. They see it free of charge, without the age gate and without waiting for the early access date. Only you see drafts.

## Testing and review

A tested chapter goes through the whole review like any other. When you submit it, it moves from **Testing** to **In review**.

## Related

- [Story lifecycle](/en/getting-started/story-lifecycle/)
- [Publishing](/en/getting-started/publishing/)
- [Testing](/en/best-practices/testing/)
- [Preparing content for review](/en/best-practices/preparing-for-review/)
