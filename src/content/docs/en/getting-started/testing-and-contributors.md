---
title: Testing and contributors
description: Getting other people to read a chapter before a reviewer does.
helpKey: getting-started.testing
status: published
sidebar:
  order: 4
---

**Testing** is a state you put a single chapter into: TalePort builds a private package of it, and the people you invited read that package in the EPOS app exactly as a reader would. You keep writing while they read, and their notes come back attached to the node they were standing on. Put chapter 2 into testing, send three friends the story link, and by the next evening you know that nobody took the bribe at Harbour Gate and that the Courage check before the finale cannot be failed.

## What testing is for

Reading your own branching story does not work. You know which choices are interesting, you never take the path you consider obviously wrong, and you cannot see your own missing text. A tester walks into branches you forgot you wrote, finds the choices that lead nowhere, notices the stat that never changes, and tells you where they got bored.

## Starting a test build

Press **Publish** in the editor header. For a draft, and for a chapter already in testing, the dialog opens on a fork: **Test with contributors first** or **Publish for review**. The first one leads to the testing panel, and **Build test package** is the button there. A chapter that is already live never sees that fork. Its dialog opens straight on the validation step, because an update to a published chapter has to go through review.

Two things block a test build, and nothing else does:

- graph errors;
- the rule that every chapter before this one is in testing or already live. A chapter waiting on a reviewer does not satisfy it, so chapter 1 sitting **In review** blocks a test build of chapter 2.

None of the publishing requirements apply yet. No classification, no price, no cover, no filled-in author profile. Media files that have gone missing from storage do not stop it either, because a test build skips them.

The package is a snapshot of the story as it stands when you press the button. Keep editing, and you should, but your testers see none of it until you build again. A chapter in testing stays as editable as a draft.

**Remove testing** sits in the same panel. It returns the chapter to **Draft**, deletes the test package and leaves your story content alone. Testing comes before publication and never after: once readers have a chapter, updates go through review.

Both buttons are yours alone. A contributor cannot build a test package, remove testing, submit for review or reorder chapters, because every one of those actions checks that you own the story.

## Contributors

Your story's team is you plus the accounts you add under **Manage** on the story's detail page. Two kinds sit in that dialog, and the difference is not cosmetic:

- **Epos accounts.** You find them by searching for the user. They get access to the story and can leave feedback. Testing is for them.
- **Person outside Epos** and **Organization.** Credits for people and studios who are not working inside TalePort. They are display only: no access, no feedback, and billing cannot be assigned to them. The e-mail on a person is optional and exists only to link them up if they open an EPOS account later.

Both kinds carry a free-form list of what they did, with six presets: author, translator, publisher, editor, storyteller, illustrator. You are the **Creator** and cannot be removed from your own story.

The limits, in case you are crediting a large production: 30 credited people without an account, 10 organisations, names up to 100 characters, and 12 contributions each of at most 50 characters. Go past 30 people and the save is refused with a message. Contributions are handled quietly instead: duplicates dropped, anything longer than 50 characters cut to fit, anything past the twelfth ignored. Read back what you get.

Who stays is decided again at publishing time. The **Contributors** step of the publish wizard lists your account contributors, and anyone you unselect there loses access to future versions. Their existing feedback is kept.

Credit people accurately. If someone drew your backgrounds or recorded your narration, they belong in the contributor list, and crediting them also makes your rights position clear under [CR-II.1](/en/publishing/content-rules/#cr-ii-1).

## When contributors can leave feedback

A contributor can write in three states only: **Testing**, **In review**, and a live chapter that has gone back **In review**. A draft is closed to them, and so is **Published · revising**, where a reviewer parks a rejected live chapter.

Feedback reaches you from two places. In the EPOS app it arrives pinned to the node the tester was reading, carrying the package version they played, so a complaint about text you have since rewritten is recognisable as one. A contributor who opens the story from their library gets the editor read-only: the graph to walk, the **Notes** tab to write in, and only their own notes visible. Either way a note holds at most 2000 characters.

You read all of it in the **Notes** tab of the right-hand panel, where tester notes are tagged **Tester** and **Go to node** takes you to whatever a note points at. Any note can be marked complete. A story with unread notes is badged **Unread testing feedback** in your library.

Access is wider than the chapter being tested. A contributor sees every chapter of your story that is not a draft, free of charge, without the age gate, and without waiting out the early access date. Drafts stay invisible to everybody but you.

## Testing does not replace review

A tested chapter goes through the whole review like any other. Submitting it moves the chapter from **Testing** to **In review**, and the test round takes nothing off what the reviewer looks at. Testing finds the dead branch; review decides whether the chapter can be published at all.

## Related

- [Story lifecycle](/en/getting-started/story-lifecycle/)
- [Publishing](/en/getting-started/publishing/)
- [Testing](/en/best-practices/testing/)
- [Preparing content for review](/en/best-practices/preparing-for-review/)
