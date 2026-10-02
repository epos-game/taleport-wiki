---
title: Souboje
description: Jak postavit souboj z dílů, které TalePort už má.
helpKey: editor.combat
status: published
sidebar:
  order: 9
---

TalePort nemá bojový systém. Žádné pořadí iniciativy, žádný vzorec na zranění, žádné statistiky nepřátel. Souboj si proto skládáte z dílů, které v editoru existují kvůli něčemu jinému: z vlastnosti, která zastupuje zdraví, z jednoho ověření dovednosti na každou výměnu, z komponenty **Událost**, která po neúspěchu zdraví ubere, a z globální události, která zachytí moment, kdy zdraví dojde. V souboji v kovárně začíná Výdrž na 10, každé neúspěšné ověření stojí 3 a čtvrtý neúspěch spustí globální událost hlídající Výdrž **je nejvýše** 0, která čtenáře vrátí na kontrolní bod v uzlu *Dveře zapadnou*.

## Z čeho se souboj skládá

- Zdraví je vlastnost typu **Číslo**, založená v záložce **Vlastnosti**. Obojí je dané: ověření dovednosti umí testovat jen vlastnost a odečítat se dá jen z čísla. **Min** a **Max** jsou nepovinné, a když je nastavíte, musí mezi ně padnout i **Výchozí hodnota**.
- Na každou výměnu jedno [ověření dovednosti](/cs/story-editor/skill-checks/), které tuto vlastnost testuje. **Modifikátor kostky** je **Žádný**, **k10**, **k6** nebo **k20** a hod se k vlastnosti přičte ještě před porovnáním.
- Komponenta **Událost** na uzlu, kam vede výstup **Neúspěch**, s operací **odečíst** a s částkou. Události se použijí, když na uzel čtenář dorazí, takže cena patří na větev, ne na samotné ověření. Viz [Proměnné](/cs/story-editor/variables/).
- Jedna [globální událost](/cs/story-editor/global-events/) nad vlastností pro zdraví: **Operátor** na **je nejvýše**, **Hodnota** 0 a **Po události** nastavené na **Vrátit se na poslední kontrolní bod**. Spustí se na uzlu, kde podmínka přejde z nesplněné na splněnou, tedy na uzlu s odečtením.
- [Kontrolní bod](/cs/story-editor/checkpoints/) na uzlu před začátkem souboje.

Každý výstup každého ověření potřebuje spojení. Nepřipojený výstupní port je chyba validace, takže i větev **Neúspěch**, která se vrací na předchozí výměnu, musí být opravdu nakreslená.

## Kde musí kontrolní bod ležet

Kontrolní bod není otázka vkusu. Kapitola, která má globální událost s **Vrátit se na poslední kontrolní bod** a žádný uzel s kontrolním bodem, neprojde validací a nepublikujete ji. Chyba říká, že globální událost používá chování „Vrátit se na poslední kontrolní bod“, ale kapitola nemá žádný uzel s kontrolním bodem.

Pravidlo se dívá jen do vlastního grafu kapitoly, takže kontrolní bod uvnitř [skupiny](/cs/story-editor/groups/) ho nenaplní. Když souboj sbalíte do skupiny, kontrolní bod musí zůstat venku, na plátně kapitoly. Při práci narazíte i na obrácený případ: s otevřenou skupinou editor stejnou kontrolu pouští i na ni, takže chybu uvidíte u kapitoly, která se publikuje bez problémů. Vraťte se do grafu kapitoly, než tomu uvěříte.

## Zdraví se na nule nezastaví

Za běhu příběhu nic vlastnost na její meze neořezává. Odečtete 3 od Výdrže na hodnotě 1 a vyjde mínus 2. Souboji samotnému to nevadí, protože **je nejvýše** 0 platí tak jako tak. Rozbije se všechno, co dál čeká přesné číslo: volba podmíněná tím, že se Výdrž **rovná** 0, se čtenáři, který se přestřelil, nikdy neotevře, takže i tam porovnávejte přes **je nejvýše**. Samotné prahy navíc nemají stejná pravidla. Globální událost vezme jakékoli celé číslo, zatímco hodnota v podmínce ověření dovednosti se porovnává s **Min** a **Max** vlastnosti a při hodnotě mimo rozsah se vrátí na původní.

Větev **Neúspěch** si před publikováním projděte v panelu **Náhled**. V části **Proměnné (ladění)** si Výdrž nastavíte na 1 a uvidíte, jak ji další neúspěch pošle do minusu, a **Hodit kostkou** hod zopakuje, takže se u jednoho ověření dostanete na oba výsledky bez přehrávání kapitoly.

## Držte to krátké

Dvě nebo tři výměny jsou souboj. Šest je účetnictví. Každá výměna vás stojí uzel, ověření a dvě větve k napsání a čtenář ji potká jako tutéž obrazovku s jiným číslem.

Na dlouhou bitvu napište jednu scénu s jediným rozhodujícím ověřením uprostřed a zbytek odvyprávějte.

## Ať jsou výměny různé

Když je každé kolo „hoď, ztrať zdraví, hoď znovu“, čtenář jen mačká tlačítko. Dejte každé výměně vlastní rozhodnutí: tlačit útok, nebo ustoupit, jít po zbrani, nebo po dveřích. Pak se souboj čte jako řada rozhodnutí, která stojí zdraví, a ne jako smyčka s kostkou.

## Související

- [Ověření dovednosti](/cs/story-editor/skill-checks/)
- [Globální události](/cs/story-editor/global-events/)
- [Kontrolní body](/cs/story-editor/checkpoints/)
- [Proměnné](/cs/story-editor/variables/)
