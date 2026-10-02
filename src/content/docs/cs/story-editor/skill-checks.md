---
title: Ověření dovednosti
description: Nechte o výsledku rozhodnout vlastnost, případně i hod kostkou.
helpKey: editor.skill-checks
status: published
sidebar:
  order: 8
---

**Ověření dovednosti** je přechod se dvěma cestami ven, **Úspěch** a **Neúspěch**. Testuje jednu vlastnost, volitelně k ní přidá hod kostkou a čtenáře pošle tou větví, na kterou mu součet stačí. Dejte ho na uzel, kde Mira dojde k zaraženým dveřím do sklepa: ověření hodí **k6**, přičte **Sílu** a projde, když je součet alespoň 8. Úspěch ji dostane do sklepa, neúspěch zpátky do kuchyně, kde se zrovna probudila kuchařka.

## Jak se nastavuje

- **Podmínka**: jedna vlastnost, jeden operátor, jedna hodnota. Právě jedna; ověření dovednosti seznam podmínek nebere. Viz [Podmínky](/cs/story-editor/conditions/).
- **Modifikátor kostky**: **Žádný**, **k10**, **k6** nebo **k20**, v tomto pořadí v seznamu.
- **Úspěch** a **Neúspěch**: dva výstupní porty, pro každý výsledek jeden.

Nové ověření začíná na „je větší než 0“ a bez vybrané vlastnosti. Hod je aktuální hodnota vlastnosti plus číslo, které padlo na kostce, a tenhle součet operátor porovná s vaší hodnotou. Při volbě **Žádný** kostka nepřidá nic a z ověření je prosté porovnání. Jakmile vyberete vlastnost, editor pod poli vypíše celé zadání slovy: „Hoď k6 a přičti vlastnost Síla. Zkouška projde, když součet je alespoň 8.“

![karta Ověření dovednosti v pravém panelu: požadavek na vlastnost s porovnáním a cílovým číslem, kostka a věta, která říká, co je potřeba hodit](/screens/cs/story-editor/skill-check-panel.png)

Oba porty musí někam vést. Když jeden necháte viset, uzel nahlásí „Má výstupní port, který není připojen k žádnému uzlu.“ a to blokuje publikování.

## Testovat jde jen vlastnost

Výběr nabízí **vlastnosti**, ne obyčejné proměnné. Dokud v příběhu žádná není, panel místo prázdného seznamu napíše „Nejsou definovány žádné proměnné vlastností. Přidejte proměnné vlastností pro použití ověření dovedností.“ Ověření bez vybrané vlastnosti je chyba „Uzel s ověřením dovednosti nemá vybranou vlastnost.“ a chyby blokují publikování. Vlastnost, proti které chcete házet, založte v záložce **Vlastnosti**; viz [Postava čtenáře](/cs/story-editor/player-characters/).

Pokud má vlastnost minimum a maximum, musí se cílové číslo vejít do tohoto rozsahu. S kostkou to začne vadit hned: Síla omezená na 10 znamená, že si nemůžete říct o součet 15, i když Síla s hodem k20 na něj dosáhne snadno. Buď vlastnosti rozšiřte rozsah, nebo cíl nechte uvnitř něj.

## Házet, nebo neházet

Ověření bez kostky odměňuje plánování. Čtenář, který investoval do Síly, dostane výsledek pro Sílu pokaždé, a to je poctivá odměna za volby, které ho sem dovedly.

Kostka přidá napětí a důvod přečíst si kapitolu podruhé. Taky ale znamená, že čtenář může neuspět v něčem, na co se připravoval, takže ji používejte tam, kde je neúspěch zajímavý, ne tam, kde jen trestá.

Velikost kostky rozhoduje o tom, kolik z výsledku přenecháte náhodě. Kostka k20 nad vlastnostmi v rozsahu 0 až 10 znamená, že rozhoduje skoro jen ona. Kostka k6 na téže škále znamená, že rozhoduje vlastnost a hod ji jen postrčí.

## Obě cesty musí stát za přečtení

Nejčastější chyba je bohatá větev Úspěch a vedle ní Neúspěch, který řekne „neuspěl jsi“ a o dva uzly dál se vrátí do hlavní linky. Pokud neúspěch není zajímavý, nedělejte z toho ověření. Udělejte volbu, nebo to nechte projít.

Dobrá větev neúspěchu vede jinam: jiná cesta, zaplacená cena, komplikace, informace, kterou úspěšný čtenář nikdy nedostane.

## Praktické rady

- **Nepodmiňujte hlavní linku ověřením.** Čtenář, který neuspěje, musí mít pořád možnost kapitolu dočíst.
- Dejte předem najevo, o co se hraje. Text může nést uzel s ověřením sám, a prázdný uzel navíc hlásí varování „Uzel nemá žádný obsah.“
- Náhled hodí za vás. Jak uzel s ověřením vyberete, kostka se hodí sama a číslo zůstane, tlačítko s kostkou ho přehodí a pod **Proměnné (ladění)** si hodnotu kostky můžete napsat ručně a projít si tak obě větve.
- Náhled nikdy neuzná ověření nastavené na **se nerovná**. Porovnání pro tenhle operátor v náhledu chybí, takže ověření vypadá vždy jako neúspěch, ať má vlastnost jakoukoli hodnotu. Když ho používáte, projděte si obě větve v testovacím balíčku. Viz [Testování](/cs/best-practices/testing/).
- Záměna přechodu přenese spojení podle pozice portů. Když z volby se třemi možnostmi uděláte ověření dovednosti, první dvě spojení skončí na Úspěchu a Neúspěchu a třetí se smaže.

## Související

- [Podmínky](/cs/story-editor/conditions/)
- [Postava čtenáře](/cs/story-editor/player-characters/)
- [Souboje](/cs/story-editor/combat/)
- [Interaktivita](/cs/best-practices/interactivity/)
