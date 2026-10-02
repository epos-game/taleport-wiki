---
title: Obrázky
description: Pozadí a další grafika, co s nimi TalePort při nahrání udělá a jaká pravidla musí splnit.
helpKey: media.images
status: published
sidebar:
  order: 1
---

Obrázkové pozadí je komponenta, kterou položíte na uzel, a čtenář ho vidí na celé obrazovce za textem. Jeden obrázek vám pokryje celou řadu uzlů: dejte snímek deštěm nasvícené uličky v rozměru 1080 × 1920 na uzel *Ulička o půlnoci*, zapněte **Pokračovat v zobrazování** a dalších šest uzlů honičky ukáže tutéž uličku bez dalšího nahrávání. Jako obrázek nahráváte i [titulní obrázek příběhu](/cs/media/cover-image/), avatary postav, ilustrace globálních událostí a svůj profilový obrázek autora. Každý z nich má vlastní pravidla velikosti.

## Pozadí musí být na výšku

Pozadí musí být svislý obrázek v poměru 9:16, s tolerancí pět procent. Cokoli jiného se odmítne v okamžiku, kdy soubor vyberete, a zpráva uvede jeho rozměry: „Tento obrázek má rozměry 1920x1080. Nahrajte prosím svislý obrázek (na výšku) v poměru 9:16.“ Výjimka neexistuje. Čtenář drží telefon nastojato, takže obrázek na šířku by se buď ořízl do ztracena, nebo zobrazil v pruhu uprostřed.

1920 × 1080 je na šířku. Vy chcete 1080 × 1920.

Stejné pravidlo platí pro [titulní obrázek](/cs/media/cover-image/). Avatary a obrázky globálních událostí žádný požadavek na tvar nemají.

## Jedno pozadí na uzel

Obrázkové pozadí a video pozadí sdílejí jediné místo, takže uzel nese buď jedno, nebo druhé. Když přidáte druhé, editor odpoví: „Uzel může obsahovat buď obrázek pozadí, nebo video pozadí, ne obojí.“ Ani jedno nemůže stát na uzlu, který už nese zastavení dědění kanálu **Pozadí**. Kdy se pohyblivé pozadí vyplatí, najdete ve [Videu](/cs/media/video/).

Uzly Začátek a Konec neunesou žádnou komponentu. Když na ně zkusíte položit pozadí, dostanete „Tento typ uzlu nemůže obsahovat obsahové komponenty.“, a uzel Začátek nebo Konec s komponentou je chyba, která zablokuje vydání. Závěrečnou obrazovku si tedy nevyzdobíte. Skládá se z titulního obrázku příběhu a textu „Děkujeme za hraní“ přes něj.

## Co TalePort s obrázkem udělá

Obrázky se překódují ještě ve vašem prohlížeči, dřív než se cokoli nahraje:

| Použití | Delší strana | Cílová velikost |
| --- | --- | --- |
| Pozadí | 1920 px | zhruba 2 MB |
| Obrázek globální události | 1024 px | zhruba 1 MB |
| Avatar postavy | 512 px | zhruba 0,5 MB |

Uloží se překódovaný soubor WebP a je to jediná kopie, která zůstane. Nahrávejte proto tu nejlepší verzi, kterou máte, ne tu, kterou jste už jednou protlačili kompresí: komprimovat podruhé stojí kvalitu a nic neušetří. Obrázek, který je i po tomto průchodu nad 5 MB, se odmítne, což při těchto nastaveních dá práci.

Kompresní knihovna se stahuje z CDN. Když se nenačte, odejde váš původní soubor na server nedotčený, v původní velikosti i formátu, a na obrazovce se to nikde nedozvíte. Během nahrávání ukazuje nahrávací plocha „Originál: 4,2 MB (image)“ a pak „Komprimováno: 0,6 MB“. Pokud se obě čísla rovnají, průchod neproběhl. Kontrola poměru 9:16 běží ještě před načtením knihovny, takže ta platí vždy.

Výběr souboru pro pozadí přijme jakýkoli obrázek, který váš prohlížeč umí přečíst. U avatarů a obrázků globálních událostí nabízí PNG, JPG a WebP. Titulní obrázek jde jinou cestou, viz [Titulní obrázek](/cs/media/cover-image/).

## Jak pozadí přenést přes další uzly

Pozadí platí pro uzel, na který ho dáte, a pro žádný jiný, dokud nezapnete **Pokračovat v zobrazování**. Právě tento přepínač ho posílá dál a u čerstvě přidané komponenty je vypnutý.

Zapněte ho a nastavte pozadí jednou na začátku scény. Každý uzel po proudu ho zobrazí, dokud ho něco neukončí. Nahrát stejný soubor na dvacet uzlů čtenáře nic nestojí: nahrané soubory se porovnávají podle obsahu, takže shodné soubory se uloží i zabalí jen jednou. Stojí to ale dvacet nahrávání a dvacet míst, která budete měnit, když grafiku předěláte.

![karta Obrázek na pozadí v panelu vlastností, přepínač Pokračovat v zobrazování pod údaji o souboru a pod ním Nahradit a Odebrat](/screens/cs/media/background-image-panel.png)

Knihovna médií neexistuje. Média uzlů patří kapitole, ve které jste je nahráli, takže stejná ulička ve druhé kapitole znamená nahrát ji znovu. Odebrání není okamžité: odebraný obrázek se drží 30 dní a nahrání téhož souboru v této době oživí původní záznam místo vytvoření nového.

## Co přenášené pozadí ukončí

Čtyři věci, ne jen ta zřejmá.

- Uzel s vlastní komponentou pozadí zobrazí vlastní obrázek a od tohoto uzlu dál se přenáší právě on. Počítá se i prázdná komponenta pozadí: uzel nezobrazí nic a nic jím ani neprojde dál.
- Zastavení dědění kanálu Pozadí. Přidáte ho červenou ikonou koše v hlavičce panelu zděděných médií, kde má popisek **Zastavit dědění**. Z toho plyne, že zastavení umístíte jen na uzel, který právě dědí. V paletě komponent ho nenajdete. Jmenuje se **Pozadí** podle kanálu, který blokuje, a protože obrázek i video sdílejí tentýž kanál, blokuje obojí.
- Uzel Konec, který nikdy nic nedědí.
- Konflikt, viz níže.

Skupina není zeď. Přenášené pozadí vstoupí do skupiny jejím vstupem a vyjde zase jejími výstupy, takže ho uvnitř nemusíte nastavovat znovu.

![karta Pozadí na uzlu, kde je dědění zastaveno, s akcemi Obnovit dědění a Použít vlastní média](/screens/cs/media/inheritance-stopped.png)

## Když se potkají dva zdroje

Pokud do stejného uzlu dorazí dvě pozadí z různých směrů a jsou přesně stejně daleko, TalePort nehádá. Uzel ohlásí konflikt a vypíše uzly, ze kterých obě pozadí přišla; dokud se nerozhodnete, nezobrazí se nic. Klikněte na jeden z vypsaných zdrojů a jeho obrázek se zkopíruje na tento uzel už se zapnutým **Pokračovat v zobrazování**, takže řetěz pokračuje odsud. **Přidat vlastní** dá uzlu prázdnou komponentu pozadí.

## Chybějící obrázky

Uzel, který má komponentu pozadí bez obrázku, se objeví mezi problémy příběhu jako varování. Zpráva zní „Pozadí není nastaveno a žádné se nedědí.“ a druhá polovina je navíc: uzel s vlastní komponentou pozadí nikdy žádné nedědí, takže varování dostanete u každé prázdné komponenty bez výjimky. Varování vydání nebrání, takže pozadí, které jste zapomněli nahrát, prostě pro čtenáře nebude. Než kapitolu odešlete, projděte si seznam problémů.

## Kde se čísla dají najít

Nabídka **Statistiky** ve stavovém řádku editoru je jediné místo, kde tyto počty uvidíte. Položka **Obrázky** počítá pozadí, která jste sami položili a naplnili souborem. Zděděná pozadí, video pozadí, avatary ani titulní obrázek se do ní nepočítají. Celkovou velikost kapitoly aplikace neukazuje nikde, takže vodítkem zůstávají limity jednotlivých souborů.

## Práva

Použít smíte jen obrázky, které jste sami vytvořili nebo ke kterým máte práva; viz [CR-II.1](/cs/publishing/content-rules/#cr-ii-1) a [CR-II.2](/cs/publishing/content-rules/#cr-ii-2). To, že se obrázek dá najít ve vyhledávači, není svolení.

Pokud obrázek vytvořila nebo pomáhala vytvořit AI, musíte to při vydání uvést. Viz [CR-III.2](/cs/publishing/content-rules/#cr-iii-2). Přepínač **AI obrázky** v kroku Klasifikace průvodce vydáním se dá zapnout teprve ve chvíli, kdy graf kapitoly obsahuje pozadí s nahraným souborem; titulní obrázek ani avatar od AI ho neodemknou. Odpověď se ukládá k příběhu, takže platí pro všechny kapitoly, které vydáte.

## Praktické rady

- Jedno pozadí na scénu se čte lépe než jedno na uzel a je méně práce s údržbou.
- Podívejte se na obrázek ve velikosti telefonu. Detail, který na monitoru funguje, se tam ztratí.

## Související

- [Titulní obrázek](/cs/media/cover-image/)
- [Video](/cs/media/video/)
- [Typy uzlů](/cs/story-editor/node-types/): dědění médií
- [Práce s médii](/cs/best-practices/media-usage/)
