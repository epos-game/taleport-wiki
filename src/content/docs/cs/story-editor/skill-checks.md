---title: Ověření dovednosti (Skill Check)
description: Jak fungují herní testy vlastností, hody kostkou a větvení na Úspěch a Neúspěch.
helpKey: editor.skill-checks
status: published
sidebar:
  order: 8
---
**Ověření dovednosti** je přechod se dvěma cestami ven, **Úspěch** a **Neúspěch**. Testuje jednu vlastnost a volitelně k ní přidá hod kostkou. Podle výsledku pošle čtenáře jednou ze dvou větví.

## Nastavení

Na kartě **Výstupy** v pravém panelu nastavíte:

- **Požadavek**: jedna vlastnost, jeden operátor a jedna hodnota, třeba Obratnost je aspoň 12. Seznam podmínek ověření dovednosti nebere. Více v části [Podmínky](/cs/story-editor/conditions/).
- **Modifikátor kostky**: **Žádný**, **k10**, **k6** nebo **k20**, v tomto pořadí v seznamu.
- **Úspěch** a **Neúspěch**: dva výstupní porty, pro každý výsledek jeden.

Nové ověření začíná na „je větší než 0“ a bez vybrané vlastnosti. Součet je aktuální hodnota vlastnosti plus číslo na kostce. Operátor porovná tento součet s vaší hodnotou. Při volbě **Žádný** je ověření prosté porovnání.

Jakmile vyberete vlastnost, editor pod políčky celé zadání vypíše slovy: *„Hoďte k6 a přičtěte vlastnost Síla. Zkouška projde, když součet je aspoň 8.“*

![karta Ověření dovednosti v pravém panelu: požadavek na vlastnost s porovnáním a cílovým číslem, kostka a věta, která říká, co je potřeba hodit](/screens/cs/story-editor/skill-check-panel.png)

Oba porty musí někam vést. Když jeden není připojený, uzel ohlásí: „Má výstupní port, který není připojen k žádnému uzlu.“ To blokuje publikování.

## Které vlastnosti můžete testovat

Nabídka ukazuje **vlastnosti**, ne běžné proměnné. Dokud v příběhu žádná není, panel napíše: „Nejsou definovány žádné proměnné vlastností. Přidejte proměnné vlastností pro použití ověření dovedností.“ Ověření bez vybrané vlastnosti je chyba, která blokuje publikování: „Uzel s ověřením dovednosti nemá vybranou vlastnost.“

Vlastnost založte na kartě **Vlastnosti**. Více v části [Postava čtenáře](/cs/story-editor/player-characters/).

Pokud má vlastnost minimum a maximum, musí cílové číslo ležet v tomto rozsahu. U vlastnosti omezené na 10 nemůžete chtít součet 15, i když ho vlastnost s kostkou k20 dokáže dát. Rozšiřte rozsah vlastnosti, nebo snižte cílové číslo.

## Kostky

Bez kostky rozhoduje jen vlastnost, takže čtenáři se stejnou hodnotou dopadnou vždy stejně. S kostkou rozhodují vlastnost i náhoda společně, takže stejný čtenář může jednou uspět a podruhé selhat.

Velikost kostky určuje, jak moc záleží na náhodě. U vlastností od 0 do 10 rozhodne k20 skoro celý výsledek, zatímco k6 vlastnost jen mírně posune.

## Ať záleží na obou výsledcích

Větev Neúspěch, která se o dva uzly dál vrátí do hlavní linie, nic v příběhu nezmění. Totéž zvládne volba nebo jednoduchý přechod. Nechte neúspěch vést jinam: jinou cestou, zaplacenou cenou nebo něčím, co se úspěšný čtenář nikdy nedozví.

## Rady

- Čtenář, který neuspěje, musí mít stále možnost kapitolu dokončit. Nenavazujte proto hlavní cestu na jediné ověření.
- Text, který čtenáři říká, o co jde, dejte přímo na uzel s ověřením. Prázdný uzel upozorní: „Uzel nemá žádný obsah.“
- Výměna přechodu přesouvá spojení podle pozice portů. Volba o třech možnostech, kterou změníte na ověření dovednosti, si ponechá dvě spojení a třetí ztratí. Více v části [Výměna přechodu](/cs/story-editor/transitions-and-choices/#swapping).

## Vyzkoušení ověření

- Panel Náhled hází za vás. Když vyberete uzel s ověřením, hodí kostkou jednou a číslo si podrží. Tlačítko s kostkou hodí znovu.
- V sekci **Proměnné (ladění)** můžete číslo na kostce zadat ručně a vynutit si tak jednu nebo druhou větev.
- Projděte obě větve i v testovacím balíčku. Více v části [Testování](/cs/best-practices/testing/).

## Související

- [Podmínky](/cs/story-editor/conditions/)
- [Postava čtenáře](/cs/story-editor/player-characters/)
- [Souboje](/cs/story-editor/combat/)
- [Interaktivita](/cs/best-practices/interactivity/)
