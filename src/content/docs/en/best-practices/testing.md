---
title: Testing
description: Finding the problems in a branching chapter before anyone else does.
helpKey: best-practices.testing
status: published
sidebar:
  order: 4
---

Testing a branching chapter is three jobs, and none of them covers for another: clear the editor's validation, walk routes in the Preview panel, then hand a test package to someone who has not read the story. Reading it yourself finds almost nothing, because you take the path you wrote first and you already know which choice is the trap. Say you add 2 to Trust in the tavern scene and gate the best ending on Trust of 5 or more. If the only other node that raises Trust sits in a branch you never wired up, nobody reaches that ending, and you will not notice until validation flags the orphan or the preview shows the ending still locked.

## Clear validation first

The editor revalidates 750 ms after your last change, and it covers the graph level you have open rather than the whole chapter. Groups are handled apart from that: each group node gets one marker reading **Contains errors** or **Contains warnings**, so you have to open the group to read the findings. The publish dialog inherits that blind spot, listing an error inside a group with no node label and no **Go to node** button.

Errors block a publish and a test build alike, in three families. Graph shape: no Start node, no End node, more than one Start, a Start with something linking into it, an End nothing links into, an End nobody reaches, an output port with no link. Incomplete transitions: a choice with no options or an option with no text, a switch with no conditions, a skill check with no stat, a group input or output that connects to nothing inside the group. And what sits on a node: content components on a Start or End node, or two components that cannot share a node, text and dialogue being the pair you meet first. Global events add three more, and because events belong to the story rather than the chapter, one bad event breaks chapters you were not editing: an event watching a deleted variable, an event set to **Return to Start** where the chapter has no Start node, an event set to **Return to last Checkpoint** where it has no Checkpoint node.

Warnings block nothing: an unreachable node, an empty text component, a dialogue with no lines, a line with no character or no text, an event component with no events, a node with no components at all, a declared backdrop or track that is neither set nor inherited, a cutscene with no video, a switch condition with no requirements, a group input port with nothing feeding it. The publish dialog lists errors only, and elsewhere you get a bare count in the toast after **Download as .ZIP** or **Export Game Book**. Work through them anyway. Half the unreachable nodes you find are a branch you forgot to connect.

Inside a group, three structural checks are switched off: End unreachable, End with no incoming link, more than one Start. A group can read clean while the chapter around it does not.

Some things stay yours to catch. Only two broken references get reported, a skill check with no stat and a global event watching a deleted variable. A choice or switch condition whose variable was deleted is not reported, and it is not ignored either: the preview treats it as never satisfied, so the choice vanishes and the switch condition can never win. Missing media files surface when a publish or test build fails, in a dialog that names each file and where it is used, not while you edit. And a node where two media sources meet plays nothing and raises no issue at any severity. See [Media usage](/en/best-practices/media-usage/).

## Walk it in the Preview panel

The **Preview** tab on the right-hand panel is a walkable simulator, not a static render of the node. It shows the node as a reader would see it, offers its outgoing links as options, evaluates its switch or skill check for real, and applies the node's events to the variable state before carrying the result forward. It also says *Approximate preview. The final EPOS rendering may differ.* Use it for logic, not for layout.

- Variables start at their defaults and you can override any of them in the debug panel, so you land on a node already in the state you want to test. Nothing clamps an override or a simulated change to the variable's Min and Max, so a stat you capped at 10 will show you 14.
- A skill check rolls once the moment you arrive and keeps that face for the node, so walking away and back does not re-roll. Press **Simulate roll** or type a face into the number field.
- A locked choice, a switch condition the current state would not pick, and the outcome your roll would not produce can each be followed anyway after a confirmation. That reaches a branch without first engineering the state that unlocks it.
- Leaving a node warns you about a global event only when that event's behaviour is **Return to Start** or **Return to last Checkpoint**. An event set to **Continue** fires without a word, which is right, since the nodes after it stay reachable.
- **The "does not equal" operator is broken in the preview.** It draws as `?` and evaluates as false, so anything gated on `≠` reads as permanently locked in the preview, whatever the state actually is. For a Bool or Enum variable it is the only alternative to "equals", so you will hit this.

![the right-hand Preview tab on a skill check node](/screens/en/story-editor/preview-debug.png)

## Then walk the branches deliberately

Not "play through it". Pick a route and hold it:

- The maximally cautious reader.
- The maximally reckless reader.
- The one who fails every skill check. Can they still finish?
- The one who passes every skill check. Is there anything left to do?
- The one who triggers every global event. The debug panel lists every event in the story with a met or unmet indicator and a **Preview** button each, so you can see an overlay without building the state that fires it.

## Check the state, not just the text

A stat that never changes, or changes and is never read, is a bug you find only by looking. Walk one route and ask at the end which variables moved and whether anything responded to them.

![the Preview panel after a skill check has resolved, showing which branch was taken and the arithmetic behind it, above the debug overrides for the dice roll and every stat](/screens/en/best-practices/debug-overrides.png)

## Build a test package

When the chapter holds together, put it into testing. The publish button offers **Build test package** as the alternative to going to review: it validates the chapter, builds a private copy from a snapshot, and your contributors read that copy in the real app.

Two things block a test build: graph errors, and the rule that every chapter before this one is already in testing or live. No author-profile, story-metadata, classification or pricing requirement applies yet, so you can test long before the chapter is submittable.

- The package is a snapshot. Keep editing, but testers see nothing new until you build again.
- **Remove testing** returns the chapter to Draft and deletes the test package, so your testers lose their copy. Collect what they found before you end the round.
- A chapter enters testing only from Draft or Testing. A live chapter cannot go back; its updates go through review.

## Then get someone else

A tester finds the branch you forgot you wrote and tells you where they got bored. Neither is something you can do for yourself. See [Testing and contributors](/en/getting-started/testing-and-contributors/).

Their feedback stays inside the product instead of in a chat thread somewhere. A contributor reading your test package writes notes on the chapter, or pinned to a node, or pinned to one component on a node, up to 2000 characters each, and every note records the package version they were playing, so you can tell a stale complaint from a current one. Contributor notes are labelled **Tester**.

The window is narrow. A contributor can write only while the chapter is in testing or sitting with a reviewer; take it back to Draft and that route closes. Gather the feedback during the round.

Ask for specifics: where did you stop caring, which choice did you not understand, what did you expect to happen that did not.

Then read it on a phone yourself, through the reading app. The editor refuses to open there, with *The editor needs a bigger screen*, so this is a reading pass and nothing more. A chapter that is fine on your monitor over a wired connection can be a different thing on mobile data.

## Related

- [Testing and contributors](/en/getting-started/testing-and-contributors/)
- [Preparing content for review](/en/best-practices/preparing-for-review/)
- [The story graph](/en/story-editor/story-graph/)
