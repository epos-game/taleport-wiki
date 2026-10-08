---title: Postava čtenáře
description: Jak pomocí herních vlastností vytvořit profil hlavní postavy, za kterou čtenář hraje.
helpKey: editor.player-characters
status: published
sidebar:
  order: 6
---
Hráčskou postavu si skládáte sami. Tvoří ji vlastnosti, které nadefinujete pro svůj příběh, třeba Sílu, Obratnost, Zdraví nebo Charisma.

## Stavba hlavní postavy

Vlastnosti najdete na kartě **Vlastnosti** dole v editoru.

1. Klikněte na **Přidat vlastnost**. Vytvoří se vlastnost s názvem ve tvaru „Proměnná 1“ a otevře se v seznamu. Číslo se počítá přes všechny proměnné příběhu, ne jen přes ty na této kartě.
2. Chcete-li, přejmenujte ji v seznamu.
3. Nechte typ **Číslo**.
4. Podle potřeby nastavte rozsah.

Pro rozsah platí dvě pravidla:

- Minimum a maximum se ukládají společně. Když vyplníte jen jedno, zahodí se obě.
- Výchozí hodnota musí ležet v rozsahu. S ní začíná každý čtenář.

Druh (vlastnost, nebo proměnná) určuje karta, ve které kliknete na Přidat. Vlastnost vytvoří i tlačítko **Vytvořit proměnnou** uvnitř komponenty Událost.

## Jak si čtenář postavu utváří

Každý čtenář začíná na vašich výchozích hodnotách. Komponenta Událost na uzlu změní vlastnost, když čtenář na uzel dojde:

- **nastavit na** zapíše startovní hodnotu,
- **přičíst** a **odečíst** ji později upraví.

Chcete-li čtenáři nechat zvolit si startovní hodnoty, začněte kapitolu volbou. Každá možnost vede na uzel s komponentou Událost. Tak si čtenář může vybrat třeba povolání, například bojovníka, zloděje nebo mága.

## Použití vlastností

Vlastnost může omezit [volbu](/cs/story-editor/transitions-and-choices/), testovat se v [ověření dovednosti](/cs/story-editor/skill-checks/) nebo rozhodovat podmínku switche.

Výběr v ověření dovednosti nabízí jen vlastnosti. Požadavky u voleb a podmínky switche berou vlastnosti i běžné proměnné.

Tiskový gamebook je také drží odděleně. Vlastnosti vypíše do tabulky se záhlavím *Global Stats*, běžné proměnné do tabulky se záhlavím *Environment Variables*. Obě záhlaví zůstanou anglicky, ať píšete v jakémkoli jazyce.

## Meze za běhu příběhu

Minimum a maximum platí pro hodnoty, které zadáváte v editoru. Události je za běhu příběhu nehlídají: událost, která odečte 3 od vlastnosti na hodnotě 1, ji pošle na −2.

Řádky události nemají vlastní podmínku. Hodnotu můžete pohlídat jen na cestě k uzlu, podmínkou switche nebo omezenou volbou před ním. Když píšete podmínku, hodnota mimo meze se vrátí na poslední platnou. Více v části [Proměnné](/cs/story-editor/variables/).

## Vlastnosti a postavy příběhu

Lidé, které čtenář potkává, jsou [postavy](/cs/story-editor/characters-and-dialogue/). Mají vlastní seznam a každá má jméno, popis a avatar. Podle něj vybíráte mluvčího replik dialogu. Postava sama žádné vlastnosti nemá.

Vztah k postavě sledujte proměnnou příběhu, kterou pojmenujete podle toho, co měří. Takovou proměnnou můžete testovat všude kromě ověření dovednosti.

## Související

- [Proměnné](/cs/story-editor/variables/)
- [Postavy a dialogy](/cs/story-editor/characters-and-dialogue/)
- [Ověření dovednosti](/cs/story-editor/skill-checks/)
