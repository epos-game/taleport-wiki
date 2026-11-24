---
title: Text input
description: Letting the reader type an answer and sending them on by what they wrote.
helpKey: editor.text-input
status: published
sidebar:
  order: 17
---
A **text input** is a transition where the reader types an answer instead of picking an option. You list the answers you accept. Each list is an **output**, and an answer that matches it sends the reader down that output.

Use it for a password, a riddle, a name the reader has to remember, or a code they have to find in the story.

## Creating a text input node

Drag **Text input** from the **Presets** section of the palette onto the canvas. To change an existing node, right-click it and use **Insert output** or **Update output**. The node and its components stay. See [Swapping a transition](/en/story-editor/transitions-and-choices/#swapping).

A new node starts with the prompt "Type your answer", the feedback "Nothing happens. Try again." and one output with no answers yet. Add an answer before you publish.

![a text input node on the canvas with two outputs named Output 1 and Output 2](/screens/en/story-editor/text-input-node.png)

Each output is a port on the node. Connect every one of them, like any other transition.

## Setting it up

The **Text input** card in the right panel has two parts, **Question** and **Answers**.

![the Text input card: the Question part with the prompt, attempts, wrong answer feedback and matching options, and the Answers part with the Add output button, an open output with its accepted answers, and a second output below it](/screens/en/story-editor/text-input-panel.png)

### Question

- **Prompt** is the text shown above the field the reader types in. It has up to 200 characters.
- **Attempts** is **Unlimited** or **Limited**. See [Attempts](#attempts).
- **Wrong answer feedback** is the message shown when the answer matches nothing. It has up to 1000 characters.
- **Matching** decides how closely the reader's answer must follow yours. See [How answers are matched](#matching).

### Answers

Each output has an optional **name** (up to 200 characters, "Output 1" by default) and a list of **accepted answers**. Type an answer and press **Enter** to add it, and use the cross on a chip to remove it. An output holds up to 50 answers of up to 200 characters each.

The outputs are checked **from top to bottom, and the first available output that accepts the answer wins**. Drag an output to change the order. Use **Add output** for another one.

Put several spellings on one output when they mean the same: `banana`, `bananas`, `a banana`.

## How answers are matched {#matching}

Before comparing, the app tidies both the reader's answer and your accepted answers:

- Capital letters never matter.
- Extra spaces are collapsed and the ends are trimmed.
- **Alphanumeric only** (on by default) ignores punctuation, so "Banana!" matches `banana`.
- **Ignore diacritics** (off by default) treats "příšera" and "prisera" as the same. Turn it on when readers may not type accents.

An empty answer is not an answer. It doesn't use an attempt and shows no feedback.

## Attempts {#attempts}

- **Unlimited:** the reader can try as often as they like. After each wrong answer they see the wrong-answer feedback. There is no **Default** output, so a reader stays on the node until they type something you accept.
- **Limited:** you set the number of attempts, from 1 to 10. A **Default** output appears. When the last attempt is wrong, the reader leaves through **Default** and sees no feedback. Connect it to the path for a reader who didn't find the answer.

With limited attempts the feedback is "Shown after a wrong answer while attempts remain."

## Conditions on an output

Press **Advanced** under an output to add requirements to it. An output with requirements is available only while they are met. With several requirements, you choose whether **all** or **any** of them must hold. See [Conditions](/en/story-editor/conditions/).

A lock with a number at the right of an output tells you how many requirements it has. An output that is not available never matches, and a wrong answer to it counts as a failed attempt.

## What the editor checks

- A text input needs at least one output, and every output needs an answer that is not empty after tidying. These are errors and block publishing.
- A **Limited** number of attempts must be between 1 and 10.
- An answer that an output above already accepts can never match lower down. The editor says "These answers are already accepted by an output above and can never match here" and lists them.
- With unlimited attempts and requirements on every output, a reader who meets none of them can never leave. The editor warns about it. Limit the attempts or add an output without requirements.
- An output that isn't connected is an error, as on every transition.

## Trying it out

The **Preview** tab shows the prompt and a field to type in. It shows how many attempts are left and what you typed. Try each accepted answer and a wrong one. With limited attempts, also use them all up. The preview tells you when an output is not connected yet, or has no answers. See [Node preview](/en/story-editor/node-preview/).

## Tips

- Say in the node's text what kind of answer you want: a word, a number or a name. A reader who doesn't know the format gets stuck.
- Accept the obvious variants: singular and plural, with and without an article, a number as digits and in words.
- Don't make one guessed word block a whole chapter. Use limited attempts with a **Default** path, or give the reader a way to find the answer in the story.

## Related

- [Node types](/en/story-editor/node-types/)
- [Transitions and choices](/en/story-editor/transitions-and-choices/)
- [Conditions](/en/story-editor/conditions/)
- [Node preview](/en/story-editor/node-preview/)
