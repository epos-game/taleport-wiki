---
title: Přechody a volby
description: Jak čtenář opouští uzel a jak psát volby, které za rozhodnutí stojí.
helpKey: editor.transitions
status: published
sidebar:
  order: 3
---

Každý uzel má přesně jeden přechod a jedině ten rozhoduje, kudy z uzlu čtenář odejde. Nový uzel vzniká s jednoduchým přechodem, takže se z něj nestane slepá ulička jen omylem; když si to scéna vyžádá, vymění se za volbu, switch, ověření dovednosti nebo konec. Mira dojde ke dveřím do sklepa, a tak uzel dostane přechod typu volba se dvěma možnostmi, „Zaklepat“ a „Otevřít paklíčem“, a u druhé je podmínka Páčení zámků alespoň 3. Čtenář s Páčením 1 uvidí jediné tlačítko a o tom druhém se nedozví.

Zapojení mají na starosti porty. Výstupní port unese jedno spojení: když z něj vedete druhé, editor to první bez dotazu zruší. Vstupní port přijme libovolný počet příchozích spojení.

## Jednoduché přechody

Jedna cesta tam, jedna ven. Takhle vzniká každý nový uzel a většina uzlů by tak měla zůstat. Kapitola, ve které větví každý uzel, čtenáře vyčerpá a vám zabere nekonečně času.

## Volby

Přechod typu volba dá čtenáři seznam možností, každou s vlastním výstupním portem a vlastním cílem. Předvolba Volba, ať už přetáhnete celý uzel, nebo jen samotný přechod na uzel stávající, vám založí dvě možnosti pojmenované Volba 1 a Volba 2, zatím bez textu na tlačítku. Třetí přidáte tlačítkem **Přidat možnost** a ta přijde s názvem *i* s textem tlačítka vyplněným na „Volba 3“. To se snadno přehlédne a čtenář pak na tlačítku čte „Volba 3“.

Každá možnost má:

- Text: to, co si čtenář přečte na tlačítku. Až 1000 znaků a nesmí zůstat prázdný; prázdný text je chyba validace.
- Název: až 200 znaků, pro vaši orientaci v editoru.
- Cíl, tedy uzel, kam vede její port.
- Podmínky, které rozhodují, jestli se možnost vůbec nabídne. Žádné podmínky znamenají vždy dostupnou možnost. Viz [Podmínky](/cs/story-editor/conditions/).

Počítadlo pod textem tlačítka počítá surové HTML, ne viditelná slova, takže věta s tučným písmem a odkazem narazí na 1000 znaků dávno předtím, než se bude zdát dlouhá. Psát přes limit vám nikdo nezakáže. Neprojde až uložení, s hlášením „Pole Text může mít maximálně 1000 znaků.“

Pořadí možností změníte přetažením; v tom pořadí je uvidí čtenář. Smazáním možnosti zmizí i spojení na jejím portu, takže se nejdřív podívejte, kam ta větev vedla. Přechod typu volba bez jediné možnosti je chyba.

### Kombinování podmínek u jedné možnosti

Přepínač **Požadovat** se objeví, jakmile má možnost víc než jednu podmínku. Všechny znamená, že musí platit každá, Libovolnou znamená, že stačí jedna. Nová možnost začíná na Všechny.

### Podmíněné možnosti

Možnost s nesplněnou podmínkou se nenabídne. V Náhledu se ukáže jako uzamčená volba, kterou můžete pro ladění přesto projít. Náhled má jednu slabinu. Podmínka s operátorem „se nerovná“ v něm nikdy nevyjde jako splněná, takže takto podmíněná možnost vypadá zamčeně i tehdy, když podmínka ve skutečnosti platí.

Čtenář, který možnost nikdy neuvidí, netuší, že existuje. Pokud má nesplněná podmínka dopadnout jako důsledek, bývá lepší možnost ukázat a poslat ji jinam, než ji schovávat.

### Jak psát volby

- Řekněte, co čtenář dělá, ne co se stane. „Vezmi minci“ je volba. „Vezmi minci a lituj toho“ je spoiler.
- Ať se možnosti opravdu liší. Když se dvě možnosti na dalším uzlu zase sejdou a po cestě se nezměnila žádná proměnná, nebylo co rozhodovat. Spojte je, nebo jedné dejte váhu.
- Držte je podobně dlouhé. Dlouhá možnost vedle krátké vypadá jako ta doporučená.
- Dvě až čtyři možnosti jsou pohodlná míra. Editor počet nijak neomezuje, takže zdrženlivost je na vás.

## Přechod switch

Switch větví, aniž by se čtenáře ptal. Podmínky se vyhodnocují shora dolů a vyhrává první, která sedne; proto se hodí na otázku „jak svět mezitím dopadl?“, ne na okamžité rozhodnutí. Podmínky přeřadíte přetažením a nejkonkrétnější patří nahoru, protože široká podmínka na začátku spolkne všechny pod sebou. Požadavky v jedné podmínce se vždy spojují spojkou A ZÁROVEŇ; switch přepínač Všechny/Libovolnou nemá.

Každý switch má na konci vestavěný výstup **Výchozí**. Když nesedne nic, tok odejde tudy. Podmínku na zbytek případů psát nemusíte, port Výchozí ale připojit musíte, protože nepřipojený výstupní port je chyba jako každá jiná: „Má výstupní port, který není připojen k žádnému uzlu.“

Každou podmínku vyplňte. Podmínka bez požadavků se počítá jako splněná, takže sedne hned a na nic pod ní už nedojde. Editor na ni upozorní varováním, jehož formulace („nemá žádné požadavky a nikdy se neuplatní“) ale tvrdí pravý opak toho, co se stane. Případy, které jste nepředvídali, nechte na Výchozím.

Switch úplně bez podmínek je chyba.

## Výměna přechodu za jiný

Klikněte na uzel pravým tlačítkem a otevřete **Vložit výstup** (jakmile má uzel jiný než jednoduchý přechod, nabídka se jmenuje **Upravit výstup**), nebo přetáhněte výstup z palety na uzel. Uzel i jeho komponenty zůstanou, a protože se vstupní port přenáší, přežijí i příchozí spojení.

Odchozí spojení se ale přesouvají podle pozice, ne podle významu. Co viselo na prvním výstupu, skončí na novém prvním výstupu, a spojení, pro které na novém přechodu žádná pozice není, se smaže. Když z volby o třech možnostech uděláte ověření dovednosti, zůstanou vám dvě spojení, na Úspěchu a Neúspěchu, a o třetí přijdete.

Dva případy editor odmítne. Přechod uzlu skupiny nelze změnit ani jedním směrem a uzel s filmovou sekvencí přijme jedině jednoduchý přechod.

## Související

- [Podmínky](/cs/story-editor/conditions/)
- [Proměnné](/cs/story-editor/variables/)
- [Typy uzlů](/cs/story-editor/node-types/)
- [Interaktivita](/cs/best-practices/interactivity/)
