---title: Přechody a volby
description: Jak čtenář opouští uzel a jak fungují volby.
helpKey: editor.transitions
status: published
sidebar:
  order: 3
---
Každý uzel má jeden přechod. Ten určuje, kudy čtenář z uzlu odejde. Nový uzel začíná s jednoduchým přechodem. Můžete ho vyměnit za volbu, switch, ověření dovednosti nebo konec.

Spojení drží porty. Výstupní port unese jedno spojení. Když z něj vedete druhé, nahradí to první. Vstupní port přijme libovolný počet příchozích spojení.

## Jednoduché přechody

Jednoduchý přechod má jednu cestu dovnitř a jednu ven. Začíná s ním každý nový uzel.

## Volby

Přechod typu volba dá čtenáři seznam možností. Každá možnost má vlastní výstupní port a vlastní cíl. Počet možností není omezený.

![uzel s volbou na plátně, obě možnosti pojmenované u pravého okraje, každá s vlastním výstupním portem](/screens/cs/story-editor/choice-node.png)

Předvolba Volba založí dvě možnosti, Volba 1 a Volba 2, zatím bez textu na tlačítku. Platí to, ať přetáhnete celý uzel, nebo jen přechod na stávající uzel. Třetí možnost přidáte tlačítkem **Přidat možnost**. Název i text tlačítka bude „Volba 3“.

Každá možnost má:

- Text: to, co čtenář vidí na tlačítku. Až 1000 znaků. Prázdný text je chyba validace.
- Název: až 200 znaků. Vidíte ho jen vy v editoru.
- Cíl: uzel, kam vede její port.
- Požadavky: podmínky, které rozhodují, jestli se možnost nabídne. Bez požadavků je dostupná vždy. Více v části [Podmínky](/cs/story-editor/conditions/).

Počítadlo pod textem tlačítka počítá i skryté formátovací kódy. Text nad limitem nejde uložit a editor ohlásí: „Pole Text může mít maximálně 1000 znaků.“

Pořadí možností změníte přetažením. Čtenář je uvidí ve stejném pořadí. Smazáním možnosti zmizí i spojení na jejím portu. Volba bez jediné možnosti je chyba.

![karta Volba v pravém panelu, každá možnost na vlastním řádku s úchytem pro přetažení, pod ní text a zámek s počtem požadavků](/screens/cs/story-editor/choice-panel.png)

### Požadavky u voleb

Možnost s nesplněnými požadavky se čtenáři nenabídne. V panelu Náhled se ukáže jako uzamčená volba a stále ji můžete projít.

Přepínač **Požadovat** se objeví, jakmile má možnost víc než jeden požadavek. **Všechny** znamená, že musí platit každý. **Libovolný** znamená, že stačí jeden. Nová možnost začíná na Všechny.

### Psaní voleb

Text tlačítka by měl říkat, co čtenář udělá, ne co se stane potom. „Vezmi minci“ pojmenovává čin. „Vezmi minci a lituj toho“ prozradí následek předem.

## Přechody typu switch

Switch větví příběh, aniž by se čtenář na cokoli rozhodoval. Rozhoduje podle toho, co si příběh zatím zapamatoval. Podmínky čte shora dolů a použije první, která platí.

![uzel switch na plátně, podmínky a výchozí větev pojmenované u pravého okraje](/screens/cs/story-editor/switch-node.png)

Podmínky přeřadíte přetažením. Podmínka, která platí široce, zastíní všechny pod ní, protože na ně už nedojde. Konkrétní podmínku (třeba „Zdraví je nejvýše 0“) proto dejte nad obecnější. Požadavky v jedné podmínce se vždy spojují spojkou A ZÁROVEŇ. Switch nemá přepínač Všechny/Libovolný.

![karta Switch v pravém panelu, nahoře poznámka o pořadí, jedna podmínka sbalená a další otevřená s požadavkem na vlastnost](/screens/cs/story-editor/switch-panel.png)

Každý switch končí vestavěným výstupem **Výchozí**. Čtenář jím odejde, když nesedí žádná podmínka. Port **Výchozí** připojte vždy. Nepřipojený výstupní port je chyba: „Má výstupní port, který není připojen k žádnému uzlu.“

Nový switch začíná s jednou prázdnou podmínkou, takže se hned ukáže varování: „Jedna nebo více podmínek Switch nemá žádné požadavky a nikdy se neuplatní.“ Dejte podmínce požadavek, nebo ji smažte.

Switch úplně bez podmínek je chyba.

## Výměna přechodu {#swapping}

Klikněte na uzel pravým tlačítkem a otevřete **Vložit výstup**. Když má uzel jiný než jednoduchý přechod, položka se jmenuje **Upravit výstup**. Můžete také přetáhnout výstup z palety na uzel. Uzel, jeho komponenty i příchozí spojení zůstanou.

Odchozí spojení se přesouvají podle pozice, ne podle významu. Spojení z prvního výstupu skončí na novém prvním výstupu. Když na novém přechodu odpovídající pozice není, spojení se smaže. Když z volby o třech možnostech uděláte ověření dovednosti, zůstanou dvě spojení, na Úspěchu a Neúspěchu, a třetí zmizí.

Editor odmítne dva případy:

- Přechod uzlu typu skupina nelze změnit a jiný přechod nelze změnit na skupinu.
- Uzel s filmovou sekvencí přijme jen jednoduchý přechod: „Tento uzel obsahuje filmovou sekvenci, která funguje pouze s jednoduchým přechodem. Nejprve sekvenci odeberte.“

## Zamykání

Vydaná kapitola zamkne celou kartu **Výstupy**. Pole zešednou a nemůžete:

- přepsat text tlačítka,
- přidat ani smazat možnost,
- změnit pořadí možností,
- změnit požadavek,
- změnit modifikátor kostky,
- zapnout ani vypnout **Konec kapitoly**.

Text uvnitř komponent, tedy text na uzlu a text repliky v dialogu, můžete upravovat dál.

## Související

- [Podmínky](/cs/story-editor/conditions/)
- [Proměnné](/cs/story-editor/variables/)
- [Typy uzlů](/cs/story-editor/node-types/)
- [Interaktivita](/cs/best-practices/interactivity/)
