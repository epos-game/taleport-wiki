---
title: Obrázky
description: Pozadí a další grafika, co s nimi TalePort při nahrání udělá a jaká pravidla musí splnit.
helpKey: media.images
status: published
sidebar:
  order: 1
---
Obrázkové pozadí je komponenta, kterou položíte na uzel. Čtenář ho vidí na celé obrazovce za textem. Když zapnete **Pokračovat v zobrazování**, zobrazí se i na dalších uzlech, takže celá scéna potřebuje jediné nahrání.

Obrázky se používají také pro [titulní obrázek příběhu](/cs/media/cover-image/), avatary postav, ilustrace globálních událostí a váš profilový obrázek autora. Každý má vlastní pravidla velikosti.

## Pravidla pro pozadí

### Pouze na výšku

Pozadí musí být obrázek na výšku v poměru 9:16 s tolerancí 5 %. Jiný obrázek TalePort odmítne hned po výběru a nejde to obejít.

- Obrázek 1080 × 1920 projde.
- Obrázek 1920 × 1080 je na šířku a neprojde. Zpráva uvede jeho rozměry: „Tento obrázek má rozměry 1920x1080. Nahrajte prosím svislý obrázek (na výšku) v poměru 9:16.“

Avatary a obrázky globálních událostí mohou mít libovolný tvar. [Titulní obrázek](/cs/media/cover-image/) je také 9:16, ale nenahráváte ho hotový. Skládáte ho ve vlastním editoru, který váš obrázek ořízne do správného tvaru.

### Jedno pozadí na uzel

Obrázkové a video pozadí sdílejí jedno místo, takže uzel může mít jen jedno z nich. Když přidáte druhé, editor odpoví: „Uzel může obsahovat buď obrázek pozadí, nebo video pozadí, ne obojí.“ Video pozadí popisuje stránka [Video](/cs/media/video/).

Když pozadí položíte na uzel se zastavením dědění kanálu **Pozadí**, editor zastavení odstraní a médium tam vloží. Jde to vzít zpět. Další uzly pak dědí nové pozadí.

### Kam ho položit

Uzly Začátek, Konec a skupina komponenty nenesou. Když na ně pozadí položíte, dostanete hlášku „Tento typ uzlu nemůže obsahovat obsahové komponenty.“

- Uzel Začátek nebo Konec s komponentou je chyba, která blokuje vydání.
- Uzel skupiny je jen rámec kolem podgrafu. Pozadí patří na uzel uvnitř něj.

## Co se stane při nahrání

Váš prohlížeč každý obrázek před nahráním převede a zmenší:

| Použití | Delší strana | Cílová velikost |
| --- | --- | --- |
| Pozadí | 1920 px | zhruba 2 MB |
| Obrázek globální události | 1024 px | zhruba 1 MB |
| Avatar postavy | 512 px | zhruba 0,5 MB |

Obrázek, který je i po zmenšení nad 5 MB, TalePort odmítne.

- Při nahrávání ukazuje nahrávací plocha řádek „Originál: 4,2 MB (image) → Komprimováno: 0,6 MB“. Po uložení souboru zmizí. Dvě stejná čísla znamenají, že se nic nezmenšilo.
- Po nahrání se na kartě komponenty pod náhledem objeví čtyři štítky: **Rozlišení**, **Orientace**, **Formát** a **Velikost**. Popisují uložený soubor.
- Kliknutím na náhled zobrazíte obrázek v plné velikosti.

Výběr souboru pro pozadí přijme každý obrázek, který váš prohlížeč přečte. U avatarů a obrázků globálních událostí nabízí PNG, JPG a WebP. Titulní obrázek jde jinou cestou, viz [Titulní obrázek](/cs/media/cover-image/).

## Dědění pozadí

Pozadí platí jen pro uzel, na který ho položíte, dokud nezapnete **Pokračovat v zobrazování**. U nové komponenty je přepínač vypnutý. Když ho zapnete, pozadí se zobrazí na každém dalším uzlu, dokud ho něco neukončí.

Stejný obrázek na dvaceti uzlech čtenáře nic nestojí, protože shodné soubory se ukládají jen jednou. Vám to ale znamená dvacet nahrání a dvacet míst k úpravě, kdykoli grafiku předěláte.

![karta Obrázek na pozadí v panelu vlastností, přepínač Pokračovat v zobrazování pod údaji o souboru a pod ním Nahradit a Odebrat](/screens/cs/media/background-image-panel.png)

Uzel, který pozadí zdědí, má vlastní kartu. Nad obrázkem je **Zděděno z** a jméno zdrojového uzlu. Kliknutím na jméno na ten uzel skočíte.

![karta zděděného pozadí s nadpisem Obrázek na pozadí, nad obrázkem a jeho rozměry stojí Zděděno z a jméno uzlu, ze kterého se pozadí dědí, tady Node 6](/screens/cs/story-editor/inherited-image-panel.png)

Média uzlů patří kapitole, ve které jste je nahráli. Stejný obrázek v jiné kapitole nahrajete znovu.

## Ukončení dědění pozadí {#inheritance}

Dědění pozadí ukončí čtyři věci.

- **Uzel s vlastní komponentou pozadí.** Zobrazí vlastní obrázek a ten se přenáší dál. Počítá se i prázdná komponenta pozadí: uzel nezobrazí nic a nic jím ani neprojde dál.
- **Zastavení dědění kanálu Pozadí.** Přidáte ho červenou ikonou koše, **Zastavit dědění**, v hlavičce panelu zděděných médií. Jde ho dát jen na uzel, který už dědí, v paletě komponent totiž není. Obrázek a video sdílejí tentýž kanál, takže zastavení blokuje obojí.
- **Uzel Konec.** Ten nikdy nic nedědí.
- **Konflikt.** Viz níže.

Přenášené pozadí vstoupí do skupiny jejím vstupem a vyjde jejími výstupy. Uvnitř ho nemusíte nastavovat znovu.

![karta Pozadí na uzlu, kde je dědění zastaveno, s akcemi Obnovit dědění a Použít vlastní média](/screens/cs/media/inheritance-stopped.png)

### Konflikt zdrojů

Vyhrává nejbližší zdroj, vzdálenost se počítá na propojení. Když do jednoho uzlu dorazí dvě pozadí z různých směrů a jsou stejně daleko, uzel ohlásí konflikt a vypíše uzly, odkud přišla. Dokud se nerozhodnete, nezobrazí se nic.

- Klikněte na jeden z vypsaných zdrojů. Jeho obrázek se zkopíruje na tento uzel s už zapnutým **Pokračovat v zobrazování** a řetěz pokračuje odsud.
- Kliknutím na **Přidat vlastní** dáte uzlu místo toho prázdnou komponentu pozadí.

Na hranici skupiny se konflikt nikdy nehlásí. Když dvě pozadí dorazí do téhož vstupu skupiny nebo k témuž výstupu zevnitř, pokračuje to, jehož propojení jste nakreslili dřív. Vyhnete se tomu, když pozadí nastavíte na prvním uzlu uvnitř skupiny.

## Chybějící obrázky

Uzel s komponentou pozadí bez obrázku dostane varování: „Pozadí není nastaveno a žádné se nedědí.“ Uzel s vlastní komponentou pozadí žádné nedědí, takže varování dostane každá prázdná komponenta.

Varování vydání nebrání. Čtenář jen neuvidí žádné pozadí.

## Počty ve Statistikách

Otevřete nabídku **Statistiky** ve stavovém řádku editoru. Položka **Obrázky** počítá pozadí, která jste sami položili a naplnili souborem. Nepočítá zděděná pozadí, video pozadí, avatary ani titulní obrázek. Celková velikost kapitoly se nikde neukazuje.

## Práva a označení AI

Použít smíte jen obrázky, které jste sami vytvořili nebo ke kterým máte práva ([CR-II.1](/cs/publishing/content-rules/#cr-ii-1), [CR-II.2](/cs/publishing/content-rules/#cr-ii-2)). To, že se obrázek dá najít ve vyhledávači, není svolení.

Obrázek, který vznikl nebo částečně vznikl pomocí AI, musíte při vydání uvést ([CR-III.2](/cs/publishing/content-rules/#cr-iii-2)). Použijte přepínač **AI obrázky** v kroku Klasifikace dialogu publikování. Jde zapnout, jakmile je v příběhu některý z těchto obrázků:

- pozadí s nahraným souborem v kterékoli kapitole a v jakémkoli stavu
- avatar postavy
- obrázek globální události

Titulní obrázek se nepočítá. Odpověď se ukládá k příběhu, takže platí pro všechny kapitoly, které vydáte.

Přepínač je od začátku zapnutý. Jakmile je v příběhu nějaký obrázek, bere TalePort grafiku jako vytvořenou AI, dokud to nezměníte.

- **Vypnutý** přepínač znamená, že jste grafiku vytvořili sami.
- **Zapnutý** přepínač dá na stránku příběhu označení AI, které uvidí každý čtenář, a doporučená cena klesne.

## Praktické rady

- Nahrajte originál, ne už komprimovanou verzi. TalePort každý obrázek komprimuje znovu.
- Čtenář vidí pozadí ve velikosti telefonu. Drobný detail se tam ztratí.

## Související

- [Titulní obrázek](/cs/media/cover-image/)
- [Video](/cs/media/video/)
- [Typy uzlů](/cs/story-editor/node-types/): dědění médií
- [Práce s médii](/cs/best-practices/media-usage/)
