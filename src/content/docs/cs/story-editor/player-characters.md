---
title: Postava čtenáře
description: Jak z vlastností poskládat postavu, za kterou čtenář hraje.
helpKey: editor.player-characters
status: published
sidebar:
  order: 6
---

TalePort nemá žádný objekt „hráčská postava“. Postavu čtenáře tvoří vlastnosti, které si nadefinujete na příběhu, takže si sami určíte, co váš příběh měří. Celou kapitolu unese i jediná vlastnost: Odhodlání, číslo od 0 do 10 se startovní hodnotou 3, stoupne o 2, když čtenář vydrží noční hlídku, a na lanovém mostě se proti němu hodí k6.

## Jak ji postavit

Vlastnosti najdete v záložce **Vlastnosti** v dolní části editoru. Tlačítko *Přidat vlastnost* ji vytvoří okamžitě, pojmenuje ji „Proměnná 4“ podle počtu všech proměnných příběhu a hned otevře k úpravám. Není tu žádný formulář, který byste mohli zrušit. Tři až pět vlastností bohatě stačí: Síla, Mazanost, Odhodlání.

Nechte typ na Číslo a počítejte se dvěma pravidly:

- Min a Max se ukládají společně. Když vyplníte jen jedno a druhé necháte prázdné, zahodí se obě.
- Výchozí hodnota musí ležet v rozsahu. S ní začíná každý čtenář.

Editor nemá pole pro skupinu, pro ikonu ani pro samotný druh vlastnost/proměnná. Skupina a ikona se do balíčku přesto dostanou. Druh určuje záložka, ve které jste stiskli Přidat, a vlastnost vytvoří i tlačítko *Vytvořit proměnnou* uvnitř komponenty Událost.

## Nechte čtenáře, ať si ji utvoří

Každý čtenář startuje na vašich výchozích hodnotách, takže postavu si může utvořit jedině skrze příběh. Otevřete kapitolu scénou s otázkou, jak vaše postava přežila zimu, a ke každé odpovědi dejte uzel s komponentou Událost. Startovní hodnotu zapíše *nastavit na*; *přičíst* a *odečíst* patří tomu, co přijde potom.

## Ať na vlastnostech záleží

Vlastnost existuje jen tehdy, když ji něco čte. Podmiňte jí [volbu](/cs/story-editor/transitions-and-choices/), otestujte ji [ověřením dovednosti](/cs/story-editor/skill-checks/), rozvětvěte se podle ní v podmínce switche. Právě ověření dovednosti je důvod, proč z něčeho udělat vlastnost a ne proměnnou: jeho výběr nabízí vlastnosti a nic jiného. Podmínky u voleb a u switche berou oba druhy. Mimo editor jde druh v balíčku jako `type` a tiskový export GameBook dělí vlastnosti do sekce *Global Stats* a proměnné do *Environment Variables*.

## Meze si pohlídejte sami

Za běhu příběhu meze nic neořezávají. Událost, která odečte 3 od vlastnosti na hodnotě 1, ji pošle na -2. Řádky události vlastní podmínku nemají, takže hlídat to musí cesta: schovejte takový uzel za podmínku switche nebo za podmíněnou volbu. V editoru meze naopak platí a hodnota mimo rozsah se v podmínce vrátí na původní, s varováním, které odmítnuté číslo nepojmenuje. Viz [Proměnné](/cs/story-editor/variables/).

## Postavy v příběhu jsou něco jiného

Lidé, které čtenář potkává, jsou [postavy](/cs/story-editor/characters-and-dialogue/): vlastní seznam se jménem, popisem a avatarem, ze kterého se obsazuje mluvčí replik dialogu. Editor postavě žádnou vlastnost nepřiřadí. Vztah k ní modelujte proměnnou příběhu pojmenovanou podle toho, co sleduje; `mira_duvera` se dá testovat všude kromě ověření dovednosti.

## Související

- [Proměnné](/cs/story-editor/variables/)
- [Postavy a dialogy](/cs/story-editor/characters-and-dialogue/)
- [Ověření dovednosti](/cs/story-editor/skill-checks/)
