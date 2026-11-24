---
title: Náhoda
description: Jak poslat čtenáře jednou z několika větví podle náhody.
helpKey: editor.random
status: published
sidebar:
  order: 15
---
**Náhoda** je přechod, u kterého o cestě ven rozhoduje náhoda. Každý výstup je **větev** s pravděpodobností. Když čtenář dorazí k uzlu, aplikace jednou hodí a vydá se po jedné z větví. Větve s vyšší pravděpodobností se vybírají častěji.

Hodí se tam, kde se má příběh při každém hraní trochu lišit a čtenář do toho nemá mluvit: hlídka, která vás může nebo nemusí najít, pověst, která se ukáže jako pravdivá nebo falešná, náhodné setkání na cestě.

## Vytvoření uzlu s náhodou

Přetáhněte **Náhoda** ze sekce **Předvolby** v paletě na plátno a vznikne uzel s tímto přechodem. Přechod u existujícího uzlu změníte pravým tlačítkem a volbou **Vložit výstup** nebo **Upravit výstup**. Uzel i jeho komponenty zůstanou. Více v části [Výměna přechodu](/cs/story-editor/transitions-and-choices/#swapping).

Nový uzel s náhodou začíná se dvěma větvemi po 50 %.

![uzel s náhodou na plátně se třemi výstupy, každý popsaný názvem větve a pravděpodobností: Větev 1 34 %, Větev 2 33 %, Větev 3 33 %](/screens/cs/story-editor/random-node.png)

V pravém panelu se přechod jmenuje **Náhoda**. Každá větev je jeden výstupní port, popsaný názvem a pravděpodobností.

## Nastavení větví

Karta **Náhoda** v pravém panelu vypisuje větve. Barevný pruh nahoře ukazuje, jak je rozdělených 100 %, a řádek pod ním součet.

![karta Náhoda v pravém panelu: tlačítko Přidat větev, pruh rozdělený na tři barevné části, součet 100 % a tři větve, z nichž první je otevřená a ukazuje pole Název a Pravděpodobnost](/screens/cs/story-editor/random-panel.png)

- **Přidat větev** přidá další výstup. Uzel má nejvýše 10 větví a tlačítko vám řekne, když limit dosáhnete: „Dosažen maximální počet větví: 10“
- **Název** je volitelný a může mít až 200 znaků. Bez něj se větev jmenuje **Větev 1**, **Větev 2** a tak dále. Název se zobrazuje na uzlu a v panelu, čtenář ho nevidí.
- **Pravděpodobnost** je celé číslo od 1 do 100. Každá větev potřebuje aspoň 1 %.
- Tažením za úchyt větve **změníte pořadí** větví. Pořadí mění jen umístění portů na uzlu, žádnou pravděpodobnost neovlivní.
- Ikona koše u větve ji odstraní. Ikona koše v záhlaví karty odstraní celý přechod. Uzel s náhodou potřebuje aspoň dvě větve.

### Součet je 100 %

Pravděpodobnosti všech větví se musí sečíst přesně na 100 %. Nemusíte počítat, editor drží součet na 100 % za vás:

- Když změníte jednu větev, ostatní se úměrně zmenší nebo zvětší a žádná neklesne pod 1 %.
- Když větev přidáte, dostane stejný díl (u tří větví třetinu) a ostatní jí uvolní místo.
- Když větev odstraníte, její procenta si úměrně rozdělí ostatní.

Protože 100 nejde vždy rozdělit rovným dílem, dopadne dělení na tři třeba 34 %, 33 % a 33 %.

Pokud součet není 100 %, řádek pod pruhem ukáže, o kolik se míjí: „Celkem: 90 % · zbývá přidělit 10 %“ nebo „Celkem: 110 % · o 10 % víc“. Uzel, který se nesčítá na 100 %, je chyba a blokuje publikování: „Pravděpodobnosti větví náhodného uzlu se musí sečíst na přesně 100 procent.“

## Připojení větví

Každá větev musí někam vést. Nepřipojený výstup je chyba: „Má výstupní port, který není připojen k žádnému uzlu.“ To blokuje publikování stejně jako každý jiný nepřipojený port.

Větve mohou vést do různých uzlů, nebo se o pár uzlů dál znovu sejít. Tvar příběhu, který se větví a vrací, popisuje část [Struktura příběhu](/cs/best-practices/story-structure/).

## Co může uzel nést

Náhoda je přechod, takže uzel může nést komponenty stejně jako každý jiný: text, pozadí, hudbu a další. Dejte na uzel text, který čtenáři říká, co se chystá, protože čtenář nevolí a žádné možnosti nevidí.

## Vyzkoušení

Záložka **Náhled** hází za vás. Na uzlu s náhodou vybere **Pokračovat** větev podle náhody a přejde na ni, takže můžete tlačítko stisknout víckrát a vidět, kam příběh vede. Více v části [Náhled uzlu](/cs/story-editor/node-preview/).

## Rady

- Náhodu použijte tam, kde výsledek čtenář neovlivňuje. Když ho ovlivnit má, použijte [ověření dovednosti](/cs/story-editor/skill-checks/), které závisí i na vlastnosti.
- Nenechávejte důležitý děj za nízkou pravděpodobností. Čtenář větev s 5 % nemusí nikdy vidět, takže tam nedávejte nic, na čem stojí zbytek příběhu.
- Zkontrolujte každou větev v náhledu a v testovacím balíčku. Větev, kterou nikdy nevidíte, se snadno nechá nedokončená.
- Výměna přechodu přesouvá spojení podle pozice portů. Když z uzlu s náhodou uděláte jiný přechod, spojení na prvních výstupech zůstanou a ostatní se ztratí.

## Související

- [Typy uzlů](/cs/story-editor/node-types/)
- [Přechody a volby](/cs/story-editor/transitions-and-choices/)
- [Ověření dovednosti](/cs/story-editor/skill-checks/)
- [Náhled uzlu](/cs/story-editor/node-preview/)
