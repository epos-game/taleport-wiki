---
title: Graf příběhu
description: Uzly, propojení a jak se jimi čtenář pohybuje.
helpKey: editor.story-graph
status: published
sidebar:
  order: 1
---
Kapitola je **graf**: obdélníky (uzly) spojené čarami (spojeními). Čtenář vstoupí uzlem Začátek a prochází graf uzel po uzlu. Zastaví ho až uzel Konec.

## Uzly

Uzel ukazuje čtenáři jednu obrazovku. Obsahuje:

- **přechod**, který rozhoduje, jak čtenář uzel opustí,
- libovolný počet **komponent**: text, dialog, obrázky, hudbu, zvuk, filmové sekvence, události a kontrolní body.

Každý uzel má právě jeden přechod. Nový uzel už přichází s jednoduchým.

## Spojení a porty

Přechod nabízí jeden nebo více **výstupních portů**. Spojení vede z výstupního portu do vstupního portu jiného uzlu. Volba má jeden port na každou možnost. Ověření dovednosti má porty Úspěch a Neúspěch. Jednoduchý přechod má jediný port.

- Výstupní port udrží jen jedno spojení. Když z téhož portu vedete druhé, první ho nahradí. Pro dvě cesty ven z uzlu použijte volbu, switch nebo ověření dovednosti.
- Vstupní port přijme libovolný počet spojení. Několik větví se tak může sejít v jednom uzlu.

Výstupní port bez spojení je chyba: *„Má výstupní port, který není připojen k žádnému uzlu.“* Čtenář, který na takový port dojde, uvízne. Dokud port nezapojíte, kapitolu nepublikujete.

Z této kontroly se vynechávají dva případy:

- Uzel Začátek uvnitř skupiny. Je jedním ze vstupů skupiny a jeho výstup smí zůstat bez spojení.
- Výstup uzlu se značkou **Cíl globální události**. Poznáte ji podle malého blesku na uzlu.

## Skupiny

Uzel může mít vlastní graf. **Skupina** sbalí ucelený úsek příběhu do jediného obdélníku s porty na okraji. Číslování uzlů začíná uvnitř skupiny znovu od 1, takže uzel 7 může být v kapitole i ve skupině. Podrobnosti jsou na stránce [Skupiny](/cs/story-editor/groups/).

## Panely editoru

Editor potřebuje prohlížeč široký aspoň asi 960 pixelů. V užším okně uvidíte hlášku **Editor potřebuje větší obrazovku** a tlačítko **Zpět**.

- **Levý panel**: samostatná položka **Vytvořit uzel** a pod ní tři rozbalovací části. **Předvolby** jsou hotové uzly. **Komponenty** jsou dílky, které pokládáte na uzel. **Výstupy** jsou přechody.
- **Pravý panel**: **Komponenty**, **Výstupy**, **Náhled** a **Poznámky** pro právě vybraný uzel.
- **Dolní panel**: **Postavy**, **Proměnné**, **Vlastnosti** a **Globální události**. Zavřete ho, když potřebujete celé plátno. Znovu ho otevřete z nabídky **Zobrazit**.

Uzel vytvoříte tak, že přetáhnete předvolbu na prázdné plátno. Když ji přetáhnete na existující uzel, editor oba propojí prvním volným výstupem toho uzlu. Pokud žádný volný výstup nezbývá, napíše *„Tento uzel nemá volný výstup pro připojení nového uzlu.“*

Pravým tlačítkem na uzel můžete:

- vložit komponentu nebo výstup,
- vytvořit navazující uzel,
- kopírovat nebo vložit,
- seskupit výběr,
- otevřít nebo zrušit skupinu,
- připnout poznámku,
- odebrat uzel nebo jeho spojení.

Pravé tlačítko na prázdném plátně nabídne stejné typy uzlů jako část Předvolby.

![celý editor: paleta otevřená vlevo, graf na plátně, dolní panel otevřený na kartě Postavy a v pravém panelu karta Komponenty s vybraným uzlem](/screens/cs/story-editor/editor-layout.png)

## Orientace v grafu

**Hledání** (Ctrl/⌘+F) najde uzel podle názvu i podle čísla. Když validace ukáže na uzel 47, skočíte rovnou na něj. Hledání zobrazí deset výsledků. Při větším počtu nad nimi stojí *„Zobrazeno prvních 10 z 34“*. Prohledává jen graf, který máte právě otevřený, ne skupiny v něm.

Nepojmenovaný uzel ukazuje úryvek ze své textové komponenty. Úryvek má nejvýše 40 znaků včetně tří teček, takže z vašeho textu zbude 37 znaků. Uzel, který má jen dialog, úryvek nedostane a zobrazí se jako **Uzel 47**. Tento popisek uvidíte v poznámkách recenzenta, ve zprávách z validace i při hledání.

Na plátně platí:

- Ctrl/⌘+C a Ctrl/⌘+V kopírují a vkládají.
- Delete nebo Backspace odebere vybrané uzly a spojení.
- Ctrl/⌘+Z je krok zpět, Ctrl/⌘+Y krok vpřed. Historie změn patří kapitole, ve které právě jste, a při přechodu do jiné kapitoly se vynuluje. Drží posledních 150 kroků. Když se starší kroky zahodí, krok zpět to oznámí: *„Dosáhli jste začátku historie změn. Starší změny jsou nad rámec limitu historie a už je nelze vrátit zpět.“*
- **F1** otevře dokumentaci vedle editoru. **?** udělá totéž, pokud nepíšete do textového pole. Escape dokumentaci zavře.

Žádná z těchto zkratek nefunguje, když píšete do pole.

Která stránka dokumentace se otevře, závisí na tom, kde jste:

- Karta **Postavy** otevře Postavy a dialogy.
- Karta **Globální události** otevře Globální události.
- Karty **Proměnné** i **Vlastnosti** otevřou Proměnné, protože obě používají stejný formulář.
- Odjinud se otevře tato stránka.

## Kopírování uzlů

Kopírování a vkládání funguje jen v rámci jedné kapitoly. Uzly do jiné kapitoly nevložíte, takže takto je mezi kapitolami přesouvat nejde.

- Uzel Začátek se nekopíruje, editor ho přeskočí: *„Počáteční uzel nelze kopírovat, byl přeskočen.“*
- U skupiny se zkopírují vstupy a výstupy. Každý vstup se spojí přímo s odpovídajícím výstupem. Graf uvnitř se nekopíruje, takže dostanete funkční prázdnou skupinu.
- Vložený uzel používá stejné soubory obrázků, zvuků a videí jako originál, ale má pro ně vlastní záznamy. Originál s ním nic nesdílí.
- Každé vložení posune kopii kousek stranou. Po každém desátém se editor zeptá, jestli další kopie opravdu potřebujete.

Kopírování nebo mazání více než 20 uzlů najednou editor odmítne zprávou *„Příliš mnoho uzlů“*. Seskupení výběru takový strop nemá.

## Validace

Validace proběhne nad otevřeným grafem krátce po vaší poslední úpravě a znovu při publikování.

Chyby publikování blokují, varování ne. Oboje v plném rozsahu uvádějí [Zásady pro příběhy](/cs/publishing/story-guidelines/).

Skupina se v seznamu problémů objeví jako jediná položka: *„Tato skupina obsahuje obsah s chybami ve validaci.“* Chybu uvnitř najdete po otevření skupiny. Prázdný graf nehlásí nic. Chyba o chybějícím uzlu Začátek se objeví, až když má kapitola aspoň jeden uzel.

Publikování má navíc jeden požadavek na graf. Kontroluje se v dialogu publikování. Aspoň jeden uzel Konec dosažitelný z uzlu Začátek musí mít zapnutý **Konec kapitoly**. Bez něj čtenář dohraje větev, ale kapitolu nikdy nedokončí. Takový uzel musí ležet na plátně kapitoly. Uzel Konec uvnitř skupiny je výstupem skupiny, takže ho kontrola čte jako spojení, ne jako konec.

:::caution[Po vydání se struktura zamkne]
Jakmile je kapitola vydaná, **struktura** grafu se zamkne. **Obsah** zůstane upravitelný. Text v uzlu přepsat můžete. Uzel přidat, odebrat, přepojit ani přejmenovat nemůžete, protože přejmenování se počítá jako zásah do struktury.
:::

## Související

- [Typy uzlů](/cs/story-editor/node-types/)
- [Přechody a volby](/cs/story-editor/transitions-and-choices/)
- [Skupiny](/cs/story-editor/groups/)
- [Struktura příběhu](/cs/best-practices/story-structure/)
- [Náhled uzlu](/cs/story-editor/node-preview/)
- [Zásady pro příběhy](/cs/publishing/story-guidelines/)
- [Omezení u vydaného obsahu](/cs/publishing/published-content-restrictions/)
- [Životní cyklus příběhu](/cs/getting-started/story-lifecycle/)
