---
title: Souboje
description: Souboj mezi nepřítelem a hráčem, který končí Úspěchem nebo Neúspěchem.
helpKey: editor.combat
status: published
sidebar:
  order: 9
---
**Souboj** je přechod se dvěma cestami ven, **Úspěch** a **Neúspěch**. Nastaví souboj mezi nepřítelem a hráčem. Souboj se hraje po kolech a jeho výsledek rozhodne, kterým výstupem příběh pokračuje.

Souboj nestavíte z ověření dovedností a událostí. Vyberete dva bojovníky, nastavíte, jak těžký souboj je, a připojíte dva výstupy.

## Vytvoření uzlu se soubojem

Přetáhněte **Souboj** ze sekce **Předvolby** v paletě na plátno. Přechod u existujícího uzlu změníte pravým tlačítkem a volbou **Vložit výstup** nebo **Upravit výstup**. Uzel i jeho komponenty zůstanou. Více v části [Výměna přechodu](/cs/story-editor/transitions-and-choices/#swapping).

![uzel se soubojem na plátně s výstupy Success a Fail](/screens/cs/story-editor/combat-node.png)

## Nastavení

Karta **Souboj** v pravém panelu má tři části: **Nepřítel**, **Hráč** a **Vyhodnocení**.

![karta Souboj: část Nepřítel s postavou a jejím Zdravím, Útokem a Obranou, část Hráč se stejnými hodnotami a část Vyhodnocení s tím, kdo útočí první, a hranicemi výhry a prohry](/screens/cs/story-editor/combat-panel.png)

### Bojovníci

Nepřítel a hráč se nastavují stejně. **Hodnoty z** nabízí dvě možnosti:

- **Postava (NPC)** u nepřítele, nebo **Hráčská postava** u hráče. Vyberete postavu ze svého příběhu a ukáže se její **Zdraví**, **Útok** a **Obrana**. Hodnoty patří vybrané postavě, takže je měníte na postavě, ne tady.
- **Vlastní** vám dovolí napsat na uzlu jméno a tři hodnoty a přidat avatar. Hodí se pro jednorázového nepřítele, kterého nechcete v seznamu postav.

Bojovat může jen postava typu **Bojová**. Nastavíte ji na záložce **Postavy**, kde bojová postava potřebuje všechny tři bojové vlastnosti, každou s minimem a maximem. Běžnou postavu editor odmítne: „… je běžná postava bez bojových vlastností. Přepni ji na Bojovou v Postavách, nebo použij Vlastní.“

Zdraví musí být u obou bojovníků větší než 0. Útok a obrana mohou být 0.

Každý bojovník má také **Kostku**: **k6**, **k10** nebo **k20**. Kostka se hází při útoku i při obraně. Výchozí je k10.

### Vyhodnocení

- **Útočí první** je **Hráč** nebo **Nepřítel**. Bojovníci se pak střídají.
- **Hranice výhry** je zdraví nepřítele, při kterém hráč vyhrává. Když zdraví nepřítele klesne na tuto hodnotu, příběh pokračuje výstupem **Úspěch**.
- **Hranice prohry** je zdraví hráče, při kterém hráč prohrává. Když zdraví hráče klesne na tuto hodnotu, příběh pokračuje výstupem **Neúspěch**. Hráč se na ní zastaví, neumírá.

Nový uzel se soubojem začíná s hranicí výhry 0 a hranicí prohry 1. Obě hranice musí být pod počátečním zdravím bojovníka, ke kterému patří. Hranice 2 u bojovníka, který začíná s 5, znamená, že souboj skončí, když mu zbydou jen 2 body zdraví.

## Jak funguje kolo

Když jeden bojovník útočí, oba hodí kostkou. Poškození je

**(útok + hod útočníka) − (obrana + hod obránce)**

a nikdy není záporné. Panel to vypíše s vašimi hodnotami: „Poškození = (útok + hod útočníka) − (obrana + hod obránce).“ Pak útočí druhý bojovník. Po každém zásahu souboj zkontroluje hranice: nejdřív nepřítele, pak hráče. První, kdo hranici dosáhne, souboj ukončí.

Protože hází obě strany, silný bojovník může minout a slabý zasáhnout. Šance posunete zvýšením útoku nebo snížením obrany protivníka. Souboj prodloužíte nebo zkrátíte zdravím a hranicemi.

## Připojení výstupů

Oba výstupy musí někam vést. Nepřipojený výstup je chyba jako u každého přechodu. Prohraný souboj nemusí končit příběh. **Neúspěch** může vést k ústupu, zajetí nebo druhé šanci. Více v části [Ať záleží na obou výsledcích](/cs/story-editor/skill-checks/#make-both-outcomes-matter).

## Co editor kontroluje

Tohle jsou chyby a blokují publikování:

- Nepřítel nebo hráč není nastavený: není vybraná postava, postava není bojová, chybí vlastnost, nebo vlastní bojovník nemá jméno či má neplatné hodnoty.
- Nepřítel začíná na hranici výhry nebo pod ní: „Nepřítel začíná se … zdraví, což je na nebo pod hranicí výhry …. Tento souboj je vyhraný, než začne.“
- Hráč začíná na hranici prohry nebo pod ní: „… Tento souboj je prohraný, než začne.“
- Bojová postava s neúplnými bojovými vlastnostmi. Kontrolní seznam publikování ji ukáže jako *Bojové postavy mají kompletní bojové vlastnosti*. Více v části [Požadavky na vydání kapitoly](/cs/publishing/publishing-requirements/).

Když v příběhu není žádná bojová postava, panel vás upozorní: „V příběhu není žádná bojová NPC postava. Vytvoř ji v Postavách, nebo přepni nepřítele na Vlastní.“

## Vyzkoušení

Záložka **Náhled** souboj přehraje. **Klepnutím zaútoč** hodí jedno kolo, **Dohrát** dohraje zbytek souboje a **Reset** začne znovu. Seznam kol ukazuje každý hod a poškození, třeba „Kolo 1, Nepřítel: (5+3) − (5+4) = 0 poškození“. Po skončení souboje pokračujete výstupem, který souboj vybral.

Náhled také upozorňuje na problémy:

- „Souboj nelze spustit. Nejprve dokonči nastavení nepřítele a hráče na uzlu.“
- „Ani jedna strana nemůže druhé ublížit, souboj tedy nikdy neskončí. Zvyš útok nebo sniž obranu.“
- „Výstup tohoto výsledku není propojen.“

Zahrajte souboj víckrát a uvidíte, jak často která strana vyhraje. Více v části [Náhled uzlu](/cs/story-editor/node-preview/).

## Rady

- Souboj zkoušejte se skutečnými hodnotami, které čtenář v tom místě může mít. Souboj nastavený pro plně vylepšeného hráče je pro jiného zeď.
- Nedělejte souboj dlouhý. Dlouhý souboj je dlouhé čekání bez rozhodnutí.
- Dejte čtenáři rozhodnutí před soubojem, třeba jak se připravit, a pomocí [proměnných](/cs/story-editor/variables/) ho nechte mít váhu.

## Související

- [Typy uzlů](/cs/story-editor/node-types/)
- [Ověření dovednosti](/cs/story-editor/skill-checks/)
- [Postavy a dialogy](/cs/story-editor/characters-and-dialogue/)
- [Postava čtenáře](/cs/story-editor/player-characters/)
- [Náhled uzlu](/cs/story-editor/node-preview/)
