---
title: Koncové uzly
description: Jak kapitolu ukončit a co předtím vyžaduje validace.
helpKey: editor.end-nodes
status: published
sidebar:
  order: 12
---

**Koncový uzel** má jeden vstup a žádný výstup, takže dojít na něj znamená zastavit rozehraný tok. Jediný přepínač na něm, **Konec kapitoly**, rozhoduje o tom, jestli čtenář dohrál jen větev, nebo celou kapitolu. Koncových uzlů může mít kapitola tolik, kolik jich větvení potřebuje: *Maják ve Vardø* se uzavírá na „Lampa znovu hoří“, na „Zmrzlý na schodech“ a na „Odvezl se za rozbřesku“ a čtenář se dostane přesně k jednomu z nich.

Nic jiného na uzel nepatří. Když na koncový uzel přetáhnete text, dialog, obrázek nebo hudbu, editor to odmítne hlášením „Uzly Začátek a Konec nesmí obsahovat žádné obsahové komponenty.“ Poslední odstavec napište na uzel před ním.

## Konec kapitoly

Vyberte koncový uzel a přepínač najdete na kartě **Výstupy**, pod ním stojí, co udělá. Zapnutý: „Dokončí aktuální kapitolu a pokračuje na další kapitolu, pokud je k dispozici.“ Vypnutý: „Ukončí pouze aktuální průběh příběhu a umožní čtenáři přehrát tuto kapitolu znovu.“

Koncový uzel přetažený z palety přichází s přepínačem už zapnutým. Krátký špatný konec, ze kterého se měl čtenář vrátit a zkusit to jinak, tak kapitolu dokončí, dokud přepínač nevypnete. U každého konce si to proto zkontrolujte. Hraniční koncové uzly, které editor vytvoří sám při **Seskupit výběr**, naopak přicházejí vypnuté.

Rozhodujte se u každého konce zvlášť, ne jednou pro celou kapitolu. „Lampa znovu hoří“ kapitolu dokončí. „Zmrzlý na schodech“ pošle čtenáře zkusit ty schody ještě jednou.

Přepnutí mění graf, takže u publikované kapitoly je věc uzavřená. Publikovaná kapitola má obsah dál k úpravám a strukturu zamčenou.

## Publikování chce jeden zapnutý

Aspoň jeden koncový uzel dosažitelný z počátečního musí mít **Konec kapitoly** zapnutý, jinak kapitolu nelze odeslat. Hláška říká, že žádný konec dosažitelný ze začátku této kapitoly není označen jako **Konec kapitoly**, takže čtenář dohraje větev, ale kapitolu nikdy nedokončí. Panel **Problémy** v editoru na tuhle věc neupozorní. Objeví se na prvním kroku dialogu **Publikovat kapitolu**, kde tlačítko **Další** zůstane mrtvé s hláškou „Před pokračováním vyřešte blokující problémy uvedené výše.“

Samotný konec musí ležet na plátně kapitoly. Ve [skupině](/cs/story-editor/groups/) je každý koncový uzel jedním z jejích výstupů a kontrola skupiny rozbalí a tok jimi provlékne, takže koncový uzel uvnitř skupiny konec není. Cesta, která vede skrz skupiny, je v pořádku. Konec v jedné z nich ne.

Testovací větev nic z toho nevyžaduje. Odeslání kapitoly do **Testování** blokují jen dvě věci: chyby v grafu a předchozí kapitola, která v testování ještě není. Nedokončená kapitola tedy může být v testu úplně hratelná a při odeslání ke kontrole stejně narazí.

## Více konců

Různé koncové uzly jsou to, čím se rozvětvená kapitola čtenáři odvděčí. Čtenář, který správce přemluvil, a čtenář, který ho nechal stát na galerii, nemají skončit na stejné obrazovce. Vstup koncového uzlu přijme libovolný počet spojení, takže větve, které už nemají co dodat, se mohou sejít na jednom.

- **Zaznamenejte, který konec to byl.** Proměnné patří příběhu, ne kapitole, takže komponenta **Událost** na uzlu před každým koncem nastaví proměnnou `konec` na 1, 2 nebo 3 a druhá kapitola si ji přečte. Událost patří na ten uzel před koncem, protože koncový uzel žádné komponenty nenese.
- **I konec, ke kterému se dojde neúspěchem, je konec.** Napište mu scénu, ne trestnou obrazovku.

## Co vyžaduje validace

Tohle jsou chyby. Blokují publikování a všechny se týkají tvaru grafu, ne psaní:

- Kapitola má počáteční uzel, a to jen jeden.
- Do počátečního uzlu nic nevede.
- Kapitola má koncový uzel.
- Koncový uzel je dosažitelný z počátečního.
- Do každého koncového uzlu něco vede.
- Každý výstupní port v grafu má na sobě spojení.

Tři z nich ve skupině neplatí: počátečních uzlů tam smí být víc, konec nemusí být dosažitelný ze začátku a do koncového uzlu nemusí nic vést. Zbytek najdete na stránce [Skupiny](/cs/story-editor/groups/).

Nedosažitelný uzel je jen varování, „Uzel není dosažitelný z uzlu Začátek.“, a nic tedy neblokuje. I tak si takové uzly projděte, polovina z nich se ukáže být větví, kterou jste zapomněli zapojit.

## Související

- [Graf příběhu](/cs/story-editor/story-graph/)
- [Typy uzlů](/cs/story-editor/node-types/)
- [Struktura příběhu](/cs/best-practices/story-structure/)
