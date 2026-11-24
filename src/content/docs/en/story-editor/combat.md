---
title: Combat
description: A fight between an enemy and the player that ends in Success or Fail.
helpKey: editor.combat
status: published
sidebar:
  order: 9
---
**Combat** is a transition with two ways out, **Success** and **Fail**. It sets up a fight between an enemy and the player. The fight is played in rounds, and its result decides which output the story continues through.

You don't build the fight from skill checks and events. You pick the two fighters, set how hard the fight is, and connect the two outputs.

## Creating a combat node

Drag **Combat** from the **Presets** section of the palette onto the canvas. To change an existing node, right-click it and use **Insert output** or **Update output**. The node and its components stay. See [Swapping a transition](/en/story-editor/transitions-and-choices/#swapping).

![a combat node on the canvas with a Success and a Fail output](/screens/en/story-editor/combat-node.png)

## Setting it up

The **Combat** card in the right panel has three parts: **Enemy**, **Player** and **Resolution**.

![the Combat card: the Enemy part with a character and its Health, Attack and Defence, the Player part with the same, and the Resolution part with who attacks first and the success and fail thresholds](/screens/en/story-editor/combat-panel.png)

### The fighters

Enemy and player are set up the same way. **Stats from** has two choices:

- **Character (NPC)** for the enemy, or **Player character** for the player. You pick a character from your story, and its **Health**, **Attack** and **Defence** are shown. The values belong to the selected character, so you change them on the character, not here.
- **Custom** lets you type a name and the three values on the node, and add an avatar. Use it for a one-off enemy you don't want in your character list.

A character can fight only if its type is **Fightable**. Set that in the **Characters** tab, where a fightable character needs all three combat stats, each with a minimum and a maximum. A normal character is refused: "… is a normal character with no combat stats. Switch it to Fightable in Characters, or use Custom."

Health must be above 0 for both fighters. Attack and defence can be 0.

Each fighter also has a **Die**: **d6**, **d10** or **d20**. The die is rolled for the attack and for the defence. The default is d10.

### Resolution

- **Attacks first** is **Player** or **Enemy**. The fighters then take turns.
- **Success threshold** is the enemy health at which the player wins. When the enemy's health falls to this value, the story continues through **Success**.
- **Fail threshold** is the player health at which the player loses. When the player's health falls to this value, the story continues through **Fail**. The player stops there rather than dying.

A new combat node starts with a success threshold of 0 and a fail threshold of 1. Both thresholds must be below the starting health of the fighter they apply to. A threshold of 2 on a fighter who starts at 5 means that the fight ends when only 2 health is left.

## How a round works

When one fighter attacks, both roll their die. The damage is

**(attack + attacker's roll) − (defence + defender's roll)**

and never goes below 0. The panel spells it out with your values: "Damage = (attack + attacker's roll) − (defence + defender's roll)." Then the other fighter attacks. After each hit, the fight checks the thresholds: first the enemy, then the player. The first one to reach its threshold ends the fight.

Because both sides roll, a strong fighter can still miss and a weak one can still land a hit. Raise attack, or lower the other side's defence, to shift the odds. Raise health or the thresholds to make the fight longer or shorter.

## Connecting the outputs

Both outputs must lead somewhere. An output that isn't connected is an error, as on every transition. A lost fight doesn't have to end the story. **Fail** can lead to a retreat, a capture or a second chance. See [Make both outcomes matter](/en/story-editor/skill-checks/#make-both-outcomes-matter).

## What the editor checks

These are errors and block publishing:

- The enemy or the player isn't set up: no character chosen, a character that isn't fightable, a missing stat, or a custom fighter without a name or with invalid values.
- The enemy starts at or below the success threshold: "The enemy starts at … health, which is already at or below the success threshold of …. This fight is won before it begins."
- The player starts at or below the fail threshold: "… This fight is lost before it begins."
- A fightable character with incomplete combat stats. The publish checklist shows it as *Fightable characters have complete combat stats*. See [Publishing requirements](/en/publishing/publishing-requirements/).

If the story has no fightable characters, the panel tells you: "This story has no fightable NPC characters. Create one in Characters, or switch the enemy to Custom."

## Trying it out

The **Preview** tab plays the fight. **Tap to attack** rolls a round, **Resolve** plays the rest of the fight and **Reset** starts again. A list of rounds shows each roll and its damage, like "Round 1, Enemy: (5+3) − (5+4) = 0 damage". When the fight is over, you continue through the output it chose.

The preview also warns you about problems:

- "This fight cannot run. Finish the enemy and player setup on the node first."
- "Neither side can damage the other, so this fight can never end. Raise an attack or lower a defence."
- "This outcome's output is not connected."

Play a fight several times to see how often each side wins. See [Node preview](/en/story-editor/node-preview/).

## Tips

- Test the fight with the real stats a reader can have at that point. A fight tuned for a fully upgraded player is a wall for one who is not.
- Keep the fight short. A long fight is a long wait with no decision in it.
- Give the reader a decision before the fight, such as how to prepare, and use [variables](/en/story-editor/variables/) to let that decision matter.

## Related

- [Node types](/en/story-editor/node-types/)
- [Skill checks](/en/story-editor/skill-checks/)
- [Characters and dialogue](/en/story-editor/characters-and-dialogue/)
- [Player characters](/en/story-editor/player-characters/)
- [Node preview](/en/story-editor/node-preview/)
