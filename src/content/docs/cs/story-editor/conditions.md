---
title: Podmínky
description: Testování stavu příběhu, kterým podmíníte volbu, rozvětvíte switch nebo vyhodnotíte ověření dovednosti.
helpKey: editor.conditions
status: published
sidebar:
  order: 4
---

**Podmínka** je jedno porovnání: proměnná, operátor, hodnota. Podmínky dáváte tam, kde se příběh musí podívat na vlastní stav, než se rozhodne, a to se děje na třech místech: u volby, kde podmínka rozhoduje, jestli se čtenáři vůbec nabídne, u podmínky switche, kde určuje, kterou větví se jde, a u ověření dovednosti, kde je tím, co se testuje. Na uzlu Zamčená branka nese volba „Vypáčit zámek“ podmínku `Obratnost ≥ 4`, takže čtenář, který své první body rozdal do vyjednávání, tuhle možnost nikdy neuvidí.

## Operátory porovnání

| Operátor | Čte se jako |
| --- | --- |
| **<** | je menší než |
| **≤** | je nejvýše |
| **=** | se rovná |
| **≠** | se nerovná |
| **≥** | je alespoň |
| **>** | je větší než |

Které z nich dostanete, závisí na vybrané proměnné:

- **Číslo**: všech šest, v pořadí uvedeném v tabulce.
- **Ano / Ne** a **Seznam hodnot**: jen **=** a **≠**. Jakmile takovou proměnnou vyberete, operátor přeskočí na **=** a hodnota se vrátí na výchozí, u Ano / Ne na Ne, u seznamu na jeho první popisek. Zbylé čtyři operátory se u ani jednoho z těchto typů neobjeví.

Podle typu proměnné se mění i pole s hodnotou. U Ano / Ne dostanete rozbalovací seznam Ano / Ne, u seznamu hodnot jeho popisky, jinde číselné pole. Proměnná typu Seznam hodnot, která ještě žádné popisky nemá, zobrazí **Žádné možnosti** a podmínku nedokončíte, dokud do ní popisky nepřidáte.

U čísel platí ještě jedno omezení. Má-li proměnná minimum nebo maximum, hodnotu mimo rozsah editor odmítne: vyskočí varování a pole se vrátí na předchozí hodnotu. Varování ale hranici nepojmenuje, napíše jen *Hodnota nemůže být menší než minimální hodnota.*, takže se podívejte do samotné proměnné, kde limit leží.

[Globální události](/cs/story-editor/global-events/) mají seznam kratší. **≠** se tam nenabízí vůbec a u proměnné typu Ano / Ne nebo Seznam hodnot zbyde jen **=**.

## Kombinování podmínek

Volba může nést víc požadavků a vy rozhodujete, jak se sečtou. Přepínač **Požadovat** nabízí **Všechny**, kdy musí platit každý požadavek, nebo **Libovolnou**, kdy stačí jeden. Objeví se teprve ve chvíli, kdy má volba dva požadavky, a spojka vykreslená mezi nimi říká A ZÁROVEŇ nebo NEBO, takže režim poznáte, i když přepínač nerozbalíte. Volba bez požadavků se nabízí vždy a panel to i napíše: *Bez podmínek, vždy dostupné.*

Podmínka switche žádný takový přepínač nemá. Její požadavky se vždycky spojují spojkou A ZÁROVEŇ a platit musí všechny. Na větev typu „buď, anebo“ napište dvě podmínky switche nebo si nastavte mezilehlou proměnnou. Ověření dovednosti bere přesně jeden požadavek, viz [Ověření dovednosti](/cs/story-editor/skill-checks/).

Zanořovat podmínky nelze. Na „A a zároveň (B nebo C)“ použijte switch, jehož podmínky ty větve vypisují, nebo mezilehlou proměnnou, kterou nastavíte ve chvíli, kdy začne platit B nebo C. Ta mezilehlá proměnná se po půl roce čte líp.

## Kde vám editor nepomůže

Kontrola je tady slabší, než byste čekali. Zlobí především tři mezery.

Požadavek bez vybrané proměnné u volby ani u podmínky switche nikdo nevytkne. Nic vás neupozorní a panel Náhled ho vyhodnotí jako nesplněný, takže se volba bez zjevného důvodu zobrazí jako uzamčená. Pravidlo na prázdný případ má jedině ověření dovednosti, a to rovnou jako blokující chybu: *Uzel s ověřením dovednosti nemá vybranou vlastnost.*

Podmínka switche bez požadavků vyvolá varování, které tvrdí přesný opak toho, co se stane. Text zní *Jedna nebo více podmínek Switch nemá žádné požadavky a nikdy se neuplatní.*, ale prázdný seznam požadavků se vyhodnocuje jako splněný. Taková podmínka tedy odpovídá vždycky, a protože se podmínky čtou odshora dolů, spolkne všechny pod sebou.

Panel Náhled nikdy nesplní **≠**. Jeho porovnání pro tento operátor nemá žádnou větev a propadne na nesplněno, takže volba podmíněná na ≠ se v náhledu vždy jeví jako uzamčená a podmínka switche s ≠ se nikdy neukáže jako použitá. Sama podmínka je v pořádku, jen ji náhled neumí předvést.

## Praktické rady

- Porovnávejte s rozsahem, ne s magickým číslem. `Odvaha ≥ 5` přežije vyvažování příběhu, `Odvaha = 5` ne.
- Řaďte podmínky switche od nejkonkrétnější k nejobecnější. Vyhrává první shoda, takže široká podmínka nahoře už žádnou další pod sebou nepustí ke slovu.
- Zapojte výstup Výchozí, místo abyste vymýšleli podmínku platící vždycky. Switch ten výstup má právě pro stav, který jste nepředvídali.
- Vyzkoušejte i tu stranu, kde podmínka neprojde. Podmínku, kterou jste viděli jen uspět, jste neotestovali.

## Související

- [Proměnné](/cs/story-editor/variables/)
- [Přechody a volby](/cs/story-editor/transitions-and-choices/)
- [Ověření dovednosti](/cs/story-editor/skill-checks/)
- [Globální události](/cs/story-editor/global-events/)
