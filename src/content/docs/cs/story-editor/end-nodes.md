---
title: Koncové uzly
description: Jak správně uzavřít kapitolu nebo větev a co vyžaduje publikační validace.
helpKey: editor.end-nodes
status: published
sidebar:
  order: 12
---
**Koncový uzel** zastavuje čtenářovu cestu. Má jeden vstup a žádný výstup. Má jediný přepínač, **Konec kapitoly**, který určuje, jestli čtenář dohrál jen větev, nebo celou kapitolu.

Kapitola může mít libovolný počet koncových uzlů. Čtenář dojde vždy jen k jednomu z nich.

Koncový uzel nemůže nést obsah. Když na něj přetáhnete text, dialog, obrázek nebo hudbu, editor to odmítne hlášením „Tento typ uzlu nemůže obsahovat obsahové komponenty.“ Poslední odstavec dejte na uzel před ním.

![koncový uzel na plátně: šachovnicová vlajka nad slovem Konec, s jediným vstupním portem na levém okraji a ničím vpravo](/screens/cs/story-editor/end-node.png)

## Konec kapitoly

Vyberte koncový uzel. Přepínač je na kartě **Výstupy** a pod ním je popsáno, co udělá.

- Zapnutý: „Dokončí aktuální kapitolu a pokračuje na další kapitolu, pokud je k dispozici.“
- Vypnutý: „Ukončí pouze aktuální průběh příběhu a umožní čtenáři přehrát tuto kapitolu znovu.“

Každý koncový uzel má vlastní přepínač. Koncový uzel přetažený z palety ho má zapnutý. U konce, po kterém se má čtenář vrátit a zkusit to jinak, ho vypněte. Hraniční koncové uzly, které editor vytvoří při **Seskupit výběr**, mají přepínač vypnutý.

:::caution[Nastavte před vydáním]
Přepnutí mění graf, takže u publikované kapitoly už nastavení změnit nejde.
:::

## Než půjde kapitola publikovat

Aspoň jeden koncový uzel dosažitelný z počátečního uzlu musí mít **Konec kapitoly** zapnutý. Bez takového konce kapitolu nepublikujete. V části **Vyžaduje pozornost** se zobrazí červená řádka **Dosažitelný konec kapitoly**: „Žádný konec dosažitelný ze začátku této kapitoly není označen jako ‚Konec kapitoly‘, takže čtenář dohraje větev, ale kapitolu nikdy nedokončí. Otevřete uzel Konec a zapněte ‚Konec kapitoly‘.“

- Kontrola běží na prvním kroku dialogu **Publikovat kapitolu**, ne v seznamu **Problémy** v editoru.
- Dokud neprojde, tlačítko **Další** je neaktivní a zobrazí hlášku „Před pokračováním vyřešte blokující problémy uvedené výše.“
- Konec musí ležet na plátně kapitoly. Ve [skupině](/cs/story-editor/groups/) je každý koncový uzel jedním z výstupů skupiny, takže nikdy nepočítá jako konec kapitoly. Kontrola ale sleduje cestu čtenáře i skrz skupiny, takže cesta, která vede přes skupinu ke konci na plátně, je v pořádku.

Testování konec s přepínačem **Konec kapitoly** nevyžaduje. Odeslání kapitoly do **Testování** blokují jen dvě věci:

- chyby v grafu,
- předchozí kapitola, která v testování ještě není.

Kapitola, ve které žádný konec nemá **Konec kapitoly** zapnutý, je tedy v testování hratelná, ale při publikování ji systém odmítne.

Kapitola v testování zůstává celá upravitelná, včetně struktury. Testování je poslední chvíle, kdy můžete přesunout uzel, přepojit větev nebo zapnout **Konec kapitoly**. Jakmile kapitolu publikujete, editor je jen pro čtení.

## Více konců

Vstup koncového uzlu přijme libovolný počet spojení. Větve, které končí stejně, se mohou sejít na jednom konci. Větve, které končí jinak, dostanou každá svůj konec.

- **Záznam o tom, který konec nastal.** Proměnné patří příběhu, ne kapitole. Komponenta **Událost** na uzlu před koncem může nastavit [proměnnou](/cs/story-editor/variables/), kterou si přečte další kapitola. Událost musí být na uzlu před koncem, protože koncový uzel žádné komponenty nenese.
- **Konec po neúspěchu.** Je to běžný koncový uzel. Cesta do něj může mít vlastní obsah.

## Pravidla validace

Tyto chyby blokují publikování. Všechny se týkají tvaru grafu:

- Kapitola má počáteční uzel, a to jen jeden.
- Do počátečního uzlu nic nevede.
- Kapitola má koncový uzel.
- Koncový uzel je dosažitelný z počátečního.
- Do každého koncového uzlu něco vede.
- Každý výstupní port v grafu má na sobě spojení.

Tři z těchto pravidel ve skupině neplatí. Počátečních uzlů tam smí být víc, konec nemusí být dosažitelný ze začátku a do koncového uzlu nemusí nic vést. Zbytek najdete na stránce [Skupiny](/cs/story-editor/groups/).

Nedosažitelný uzel je jen varování „Uzel není dosažitelný z uzlu Začátek.“ a nic neblokuje.

## Související

- [Graf příběhu](/cs/story-editor/story-graph/)
- [Typy uzlů](/cs/story-editor/node-types/)
- [Struktura příběhu](/cs/best-practices/story-structure/)
