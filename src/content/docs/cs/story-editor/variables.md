---
title: Proměnné
description: Čísla, přepínače a seznamy, které si pamatují, co čtenář udělal.
helpKey: editor.variables
status: published
sidebar:
  order: 5
---

Proměnná je jeden kousek stavu příběhu: celé číslo, přepínač ano/ne, nebo jedna hodnota ze seznamu, který si sami pojmenujete. Proměnné patří **příběhu**, ne kapitole, takže co čtenář rozhodl v první kapitole, se dá přečíst ještě v páté. Zapisuje do nich komponenta **Událost** na uzlu, čtou je podmínky u voleb, switchů a ověření dovednosti. Nastavte `mince` na 12, když čtenář prodá koně, o dva uzly dál u přívozu tři odečtěte, a volba „Kup lucernu“ se pak může zeptat, jestli jich zbývá aspoň pět.

## Vlastnosti a proměnné

Každá proměnná je jednoho ze dvou druhů a druh určuje záložka, ve které ji založíte: **Vlastnosti**, nebo **Proměnné**. Formulář přepínač druhu nemá a žádná část editoru proměnnou z jedné záložky do druhé později nepřesune. Rozhodněte se dřív, než kliknete na **Přidat vlastnost** nebo **Přidat proměnnou**.

Na druhu závisí v editoru dvě věci. [Ověření dovednosti](/cs/story-editor/skill-checks/) umí hodit jen proti vlastnosti a jeho nabídka nic jiného neukáže. V podmínce se vlastnost kreslí s ikonou postavy a proměnná se štítkem. Druh jde také do publikovaného balíčku, takže aplikace, ve které se příběh čte, může oba seznamy zobrazit jinak. O tom se ale rozhoduje tam, ne tady.

Vlastnost zakládejte tam, kde počítáte s hodem kostkou. `potkal_kovare` a `vzal_uplatek` jsou evidence a evidence patří do záložky Proměnné.

## Typy hodnot

| Typ | Obsahuje | Typické použití |
| --- | --- | --- |
| **Číslo** | Celé číslo, volitelně omezené minimem a maximem | Vlastnosti, počítadla, zdroje |
| **Ano / Ne** | Jeden ze dvou stavů | Příznaky: stalo se to? |
| **Seznam hodnot** | Jednu hodnotu z množiny, kterou si nadefinujete; každá hodnota má vlastní popisek | Vzájemně se vylučující stavy: frakce, cesta, fáze vztahu |

Minimum a maximum jsou k dispozici jen u typu Číslo. Fungují jako pár: vyplňte jedno, druhé nechte prázdné, a uložení zahodí obě. Přepnutí existující proměnné na Ano / Ne nebo Seznam hodnot je smaže taky. Minimum nad maximem editor odmítne hlášením „Maximální hodnota musí být větší nebo rovna minimální hodnotě“ a výchozí hodnota musí ležet uvnitř rozsahu.

**Seznam hodnot** je správný tvar všude, kde byste jinak vedli tři příznaky, které nikdy nesmí platit naráz. Každá položka má číselný klíč a popisek do 100 znaků, nové položky se zakládají jako „Popisek 1“, „Popisek 2“. Popisky nadefinujte dřív, než na proměnnou cokoli namíříte: událost mířící na seznam bez popisků editor odmítne hlášením „Vybraná proměnná nemá definované žádné hodnoty výčtu. Před použitím přidejte hodnoty k proměnné.“

## Formulář

**Název** je povinný, pojme 100 znaků a budete ho číst v každé podmínce po zbytek příběhu. Vedle něj stojí **Typ** a **Výchozí hodnota**. Políčka **Min** a **Max** se objeví jen u typu Číslo. Výchozí hodnota je to, s čím každý čtenář začíná, než se v příběhu cokoli stane.

Kliknutí na **Přidat proměnnou** proměnnou okamžitě vytvoří, pojmenuje ji „Proměnná 4“ (číslo se počítá přes obě záložky dohromady, ne zvlášť) a otevře ji k úpravě. Žádný rozepsaný koncept ke zrušení neexistuje, takže po omylem kliknutém tlačítku zůstane v seznamu skutečná proměnná a musíte ji smazat. Tlačítko **Vytvořit proměnnou** uvnitř komponenty Událost otevírá stejný formulář a zakládá vždycky vlastnost, takže ji potom hledejte v záložce Vlastnosti.

Pro seskupení ani pro ikonu tady políčka nejsou.

## Jak proměnnou změnit

Přidejte na uzel komponentu **Událost**. Její řádky se provedou, jakmile na uzel čtenář dojde, v pořadí, v jakém jste je vložili; přetažením je přeřadíte. Každý řádek pojmenuje proměnnou, operaci a hodnotu a nese vlastní název do 200 znaků a volitelný popis do 1000, takže i seznam pěti událostí se dá číst. Počítadlo pod popisem počítá podkladové HTML, ne viditelný text, takže formátovaný popis dojde dřív, než byste čekali.

| Operace | Čte se jako | Dostupná u |
| --- | --- | --- |
| **=** | nastavit na | každého typu |
| **+** | přičíst | jen u typu Číslo |
| **-** | odečíst | jen u typu Číslo |

Proměnné Ano / Ne a Seznam hodnot jdou jen nastavit. Jakmile na ně událost namíříte, operace se přepne na **nastavit na** a hodnota se vrátí na výchozí: u Ano / Ne na Ne, u seznamu na jeho první popisek.

Přičtení a odečtení si mezí nevšímají. Min a Max se kontrolují, když zadáváte výchozí hodnotu, a potom znovu, když zadáváte hodnotu do podmínky; s výsledkem události nedělají nic. Odvaha s maximem 10 na hodnotě 9 skočí na 12, pokud k ní událost přičte 3. Když vlastnost nesmí svůj strop přesáhnout, rozvětvěte se podle ní dřív, než ji změníte, nebo událost podmiňte podmínkou.

## Zamykání

Proměnná se zamkne, jakmile ji použije živá kapitola, a zamčená proměnná nejde upravit vůbec nijak: ani přejmenovat, ani přetypovat, ani jí změnit rozsah, ani smazat. Čtenáři na ni mají navázané uložené pozice a změna jejího významu pod rukama jim rozbije postup. V řádku se objeví zámek a jeho popisek vyjmenuje kapitoly, které ji drží: „Používá ho publikovaná kapitola: {0}. Odemkne se, jakmile ho žádná publikovaná kapitola nebude používat. Můžete přidat novou položku.“

„Používá“ znamená cokoli z následujícího, kdekoli v živé kapitole, skupiny včetně:

- mění ji událost,
- testuje ji volba, podmínka switche nebo ověření dovednosti, nebo
- míří na ni [globální událost](/cs/story-editor/global-events/). Globální události platí v celém příběhu, takže každá proměnná, na kterou některá míří, se zamkne v okamžiku, kdy je živá jakákoli kapitola příběhu.

Zámek se přepočítává, není trvalý. Když dané použití zmizí nebo kapitola přestane být živá, proměnná se odemkne. Přidávat nové proměnné jde vždycky, což je úniková cesta, když potřebujete jiný tvar něčeho, co už je zamčené.

## Praktické rady

- Pojmenujte proměnné tak, aby se podmínka dala přečíst jako věta. `ma_lucernu = ano` řekne na první pohled víc než `priznak7 = 1`.
- Držte se jedné škály. Vlastnosti od 0 do 10 pomíchané s vlastnostmi od 0 do 100 znamenají, že každá hranice bude odhad.

## Související

- [Podmínky](/cs/story-editor/conditions/)
- [Postava čtenáře](/cs/story-editor/player-characters/)
- [Globální události](/cs/story-editor/global-events/)
- [Ověření dovednosti](/cs/story-editor/skill-checks/)
