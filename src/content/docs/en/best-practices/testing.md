---
title: Testing
description: "The three checks on a branching chapter: validation, the Preview panel and a test package."
helpKey: best-practices.testing
status: published
sidebar:
  order: 4
---

You have three ways to check a branching chapter: validation, the Preview panel and a test package. None replaces the others. When you read your own chapter, you follow the path you wrote first and you know where each choice leads. So also give the test package to someone who hasn't read the story.

## Validation

The editor rechecks the chapter shortly after your last change. It checks the graph level you have open, not the whole chapter.

- **Errors** block a publish and a test build.
- **Warnings** block nothing. An unreachable node, such as a branch you never connected, is a warning.

[Story guidelines](/en/publishing/story-guidelines/) lists both in full.

**Where to see findings.** The **Problems** indicator in the status bar counts errors and warnings separately. Open it to see every finding with its node, and click one to jump there. A node with a warning has a warning icon on the canvas. Select the node and the properties panel states the finding.

**Only the editor shows warnings.** The publish dialog lists errors only. The message after **Export Game Book** says how many warnings the graph has, but names none.

**Groups.**

- Each group node gets one marker, **Contains errors** or **Contains warnings**. You see the findings only when you open the group.
- The publish dialog lists every error from inside a group, but without the node's name in front of the message. Open the group to find the node, because **Go to node** jumps only within the canvas level you have open.
- Inside a group, three things are not checked: End unreachable, End with no incoming link, and more than one Start. Verify these yourself.

**What to check yourself.** Validation reports a skill check with no stat and a global event watching a deleted variable. Check other things yourself.

- After you delete a variable, go through the choices and switch conditions that used it. A requirement that lost its variable shows `?` instead of the name.
- Missing media files show up only when a publish fails. The dialog names each file and where it is used.
- Check any node where two media sources meet. See [Media usage](/en/best-practices/media-usage/).

## The Preview panel

The **Preview** tab on the right-hand panel is a simulator. Walk through the chapter in it. The preview:

- shows the node as a reader would see it
- offers the node's outgoing links as options
- evaluates the switch or skill check
- applies the node's events to your variables and carries the result on

The tab says *Approximate preview. The final EPOS rendering may differ.* Use it to check logic, not layout.

**Variables.** They start at their defaults. Overwrite any of them in the **Variables (debug)** panel, so you arrive at a node already holding the values you want to test. The preview doesn't apply a variable's Min and Max, neither to values you type nor to changes from events. A stat capped at 10 can show 14. A number in the preview doesn't tell you what a reader can reach.

**Skill checks.** A check rolls once when you arrive and keeps that roll for the node. Walking away and back doesn't re-roll. To roll again, press **Simulate roll** or type a number into the field.

**Skipping ahead.** After a confirmation, you can follow a locked choice anyway. The same goes for a switch condition the current values wouldn't pick, and for an outcome your roll wouldn't produce. This gets you into a branch without building up the values that unlock it.

**Global events.** The debug panel lists every global event in the story and shows whether it is met. Each has a **Preview** button that shows its overlay without building up the values that fire it. Leaving a node warns you about a global event only when its behaviour is **Return to Start** or **Return to last Checkpoint**. An event set to **Continue** fires without a message, because the nodes after it stay reachable.

![the right-hand Preview tab on a skill check node](/screens/en/story-editor/preview-debug.png)

After a skill check resolves, the panel shows which branch was taken and how it came out. Above that are the debug overrides for the dice roll and every stat.

![the Preview panel after a skill check has resolved, showing which branch was taken and the arithmetic behind it, above the debug overrides for the dice roll and every stat](/screens/en/best-practices/debug-overrides.png)

## The test package

Besides going to review, the **Publish** button offers **Build test package**. It checks the chapter and builds a private copy of it as it stands. Your contributors read that copy in the real app.

Only two things block a test build: graph errors, and the rule that every chapter before this one must already be in testing or live. Author-profile, story-metadata, classification and pricing requirements don't apply yet. You can test long before you can submit the chapter.

- The package is a fixed copy. You can keep editing, but testers see nothing new until you build again.
- **Remove testing** returns the chapter to Draft and deletes the test package. Your testers lose their copy, so collect what they found first.
- A chapter enters testing only from Draft or Testing. A live chapter can't go back, and its updates go through review.

## Feedback from contributors

A contributor reading your test package writes notes on the chapter inside the app. See [Testing and contributors](/en/getting-started/testing-and-contributors/) for how to add contributors.

- They can pin a note to a node, or to one component on a node.
- A note can have up to 2000 characters.
- Every note records the package version the tester was playing, so you can tell a stale complaint from a current one.
- Contributor notes are labelled **Tester**.

A contributor can write only while the chapter is in testing or with a reviewer. Once you take it back to Draft, they can't.

Edit on a computer. In the reading app on a phone the editor says *The editor needs a bigger screen*, and you can only read the chapter there.

## What to try

- Play through with every skill check failing. Confirm the chapter can still be finished.
- Play through with every skill check passing. Confirm no dead branch is left.
- At the end of a path, look in **Variables (debug)** at which variables changed and whether anything reacts to them. Check that every stat changes and that something reads it. Validation doesn't check this.

## Related

- [Testing and contributors](/en/getting-started/testing-and-contributors/)
- [Preparing content for review](/en/best-practices/preparing-for-review/)
- [The story graph](/en/story-editor/story-graph/)
- [Node preview](/en/story-editor/node-preview/)
