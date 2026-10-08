---
title: Kontrolní body
description: Označení míst, kam se dá čtenář poslat zpátky.
helpKey: editor.checkpoints
status: published
sidebar:
  order: 11
---

**Kontrolní bod** je značka na uzlu. Určuje, odkud čtenář po návratu pokračuje. [Globální událost](/cs/story-editor/global-events/) ho tam pošle, když má v poli **Po události** nastaveno **Vrátit se na poslední kontrolní bod**.

Kontrolní bod nemá co nastavovat, stačí ho položit na uzel.

## Přidání kontrolního bodu

Použijte jeden z těchto postupů:

- Přetáhněte **Kontrolní bod** ze sekce **Komponenty** v levé paletě na uzel.
- Klikněte na uzel pravým tlačítkem a zvolte **Vložit komponentu**.

Kapitola s globální událostí **Vrátit se na poslední kontrolní bod** potřebuje na plátně aspoň jeden kontrolní bod. Jinak validace ohlásí chybu.

Uzel jen s kontrolním bodem je platný. Editor značku bere jako obsah, takže nehlásí „Uzel nemá žádný obsah.“

## Pravidla

- Uzel může mít jen jeden kontrolní bod. Druhý editor odmítne hlášením „Tento uzel už tuto komponentu obsahuje.“
- Uzly Začátek, Konec a Skupina kontrolní bod nést nemohou: „Tento typ uzlu nemůže obsahovat obsahové komponenty.“ Použijte první skutečný uzel za začátkem.
- Filmová sekvence z uzlu vytlačí všechny ostatní komponenty, kromě kontrolního bodu a značky, která zastavuje dědění médií.
- Přidání i odebrání kontrolního bodu je strukturální úprava. Jakmile je kapitola vydaná, editor ji odmítne.

## Kontrolní body ve skupinách

Kontrola události **Vrátit se na poslední kontrolní bod** hledá jen na plátně kapitoly. Kontrolní bod uvnitř [skupiny](/cs/story-editor/groups/) se nepočítá. Pokud je jediný kontrolní bod ve skupině, kapitola neprojde: „Globální událost používá chování ‚Vrátit se na poslední kontrolní bod‘, ale kapitola nemá žádný uzel s kontrolním bodem.“ Umístěte proto kontrolní bod na plátno kapitoly před vstup do skupiny.

Kontrola **Konce kapitoly** sleduje cestu čtenáře i skrz skupiny, ale hledaný konec musí ležet na plátně kapitoly.

## Co návrat obnoví

Návrat neobnoví nic, ani hodnoty proměnných. Chcete-li při návratu něco změnit, třeba hodnotu proměnné, nastavte to v komponentě **Událost**. Například vrácenému čtenáři můžete nastavit zdraví na bezpečnou hodnotu. Výsledek vyzkoušíte v záložce **Náhled**.

## Související

- [Globální události](/cs/story-editor/global-events/)
- [Typy uzlů](/cs/story-editor/node-types/)
- [Souboje](/cs/story-editor/combat/)
