---
title: Podmínky a požadavky
description: Jak testovat herní stav, podmiňovat hráčské volby a větvit příběh.
helpKey: editor.conditions
status: published
sidebar:
  order: 4
---
**Podmínka** porovnává proměnnou s hodnotou. Skládá se z proměnné, operátoru a hodnoty, například „Zdraví je nejvýše 0“. Podmínky používáte na třech místech:

- U volby rozhodují, jestli se čtenáři daná volba nabídne.
- U podmínky switche rozhodují, kterou větví čtenář půjde.
- U ověření dovednosti určují test. Ověření dovednosti má jediný požadavek: vlastnost, operátor a číslo, které je potřeba přebít.

![karta Ověření dovednosti v pravém panelu, jediný požadavek složený z vlastnosti, operátoru nejméně a hodnoty 16, pod ním kostka](/screens/cs/story-editor/skill-check-panel.png)

Podmínka porovnává proměnnou, takže ji napřed musíte mít. Když v příběhu žádná není, místo tří políček se u nového požadavku zobrazí poznámka: *Zatím žádné proměnné. Vytvořte nějakou, abyste mohli větev podmínit.* Proměnné a vlastnosti založíte v záložkách **Proměnné** a **Vlastnosti** dole v editoru.

## Operátory

| Operátor | Čte se jako |
| --- | --- |
| **<** | je menší než |
| **≤** | je nejvýše |
| **=** | se rovná |
| **≠** | se nerovná |
| **≥** | je aspoň |
| **>** | je větší než |

Nabídka operátorů závisí na typu proměnné:

- Proměnné typu **Číslo** mají všech šest.
- Proměnné typu **Ano / Ne** a **Seznam hodnot** mají jen **=** a **≠**. Po výběru takové proměnné se operátor přepne na **=** a hodnota se vrátí na výchozí. U Ano / Ne je to Ne, u seznamu jeho první popisek.

Pole s hodnotou se také mění podle typu proměnné:

- U typu Ano / Ne je to rozbalovací seznam Ano / Ne.
- U typu Seznam hodnot je to rozbalovací seznam popisků.
- Jinak je to číselné pole.

Seznam hodnot bez popisků zobrazí **Žádné možnosti**. Popisky přidejte dřív, než podmínku dokončíte.

Číselná proměnná může mít minimum a maximum, která nastavíte u proměnné. Hodnotu mimo tento rozsah editor odmítne a vrátí poslední platnou hodnotu. Zároveň zobrazí varování *Hodnota nemůže být menší než minimální hodnota.* nebo *Hodnota nemůže být větší než maximální hodnota.*

[Globální události](/cs/story-editor/global-events/) mají kratší seznam operátorů bez **≠**. U proměnné typu Ano / Ne nebo Seznam hodnot tam zůstává jen **=**.

## Kombinování podmínek

Volba může mít víc požadavků. Přepínač **Požadovat** určuje, jak se spojí:

- **Všechny** znamená, že musí platit každý požadavek.
- **Libovolnou** znamená, že stačí jeden.

Přepínač se objeví, jakmile má volba dva požadavky. Mezi požadavky je spojka A ZÁROVEŇ nebo NEBO.

Volba bez požadavků se nabízí vždy. Panel to napíše: *Bez podmínek, vždy dostupné.*

Požadavky podmínky switche se vždy spojují spojkou A ZÁROVEŇ, takže musí platit všechny. Ověření dovednosti bere přesně jeden požadavek, viz [Ověření dovednosti](/cs/story-editor/skill-checks/).

![karta Switch v pravém panelu, jedna podmínka otevřená se dvěma požadavky spojenými spojkou A ZÁROVEŇ a další podmínka sbalená za zámkem](/screens/cs/story-editor/switch-requirements.png)

Podmínky nejde zanořovat. Máte dvě možnosti:

- Větev typu „buď, anebo“ uděláte dvěma podmínkami switche.
- Na „A a zároveň (B nebo C)“ použijete pomocnou proměnnou. Nastavíte ji, když začne platit B nebo C, a pak ji otestujete spolu s A.

## Prázdné požadavky

U každého požadavku vyberte proměnnou a každá podmínka switche ať má aspoň jeden požadavek:

- Požadavek bez proměnné se u volby i u podmínky switche považuje za nesplněný, takže se volba v panelu Náhled zobrazí jako zamčená. U ověření dovednosti prázdný požadavek vyvolá chybu, která blokuje publikování: *Uzel s ověřením dovednosti nemá vybranou vlastnost.*
- Podmínka switche bez požadavků platí vždy, takže podmínky pod ní se nikdy nevyhodnotí. Editor zobrazí varování *Jedna nebo více podmínek Switch nemá žádné požadavky a nikdy se neuplatní.* Přidejte požadavek, nebo podmínku smažte.

## Rady

- Porovnání s **≥** nebo **≤** platí dál, i když se čísla v příběhu změní. Porovnání s **=** přestane platit, jakmile se hodnota posune.
- Podmínky switche se testují popořadě a vyhrává první shoda. Řaďte je od nejkonkrétnější k nejobecnější, jinak široká podmínka nahoře zablokuje ty pod ní.
- Případ, který jste nepředvídali, patří na výstup **Výchozí** switche.

## Související

- [Proměnné](/cs/story-editor/variables/)
- [Přechody a volby](/cs/story-editor/transitions-and-choices/)
- [Ověření dovednosti](/cs/story-editor/skill-checks/)
- [Globální události](/cs/story-editor/global-events/)
