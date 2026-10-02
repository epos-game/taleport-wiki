---
title: Titulní obrázek
description: Jediný kus grafiky, který uvidí každý čtenář, a tvar, jaký musí mít.
helpKey: media.cover-image
status: published
sidebar:
  order: 6
---

Titulní obrázek patří příběhu, ne kapitole, a stojí hned vedle jeho názvu a popisu. Je to dlaždice, na kterou čtenář v seznamu klepne, a zároveň podklad první a poslední obrazovky příběhu. Dokud ho příběh nemá, žádnou kapitolu nevydáte. Lucerna v mlze vyexportovaná na 1080 × 1920 zvládne obojí: jako úzká dlaždice vedle názvu „Popelavá cesta“ je pořád čitelná a její barva drží úvodní obrazovku pod popisem a tlačítkem **Začít**.

## Kde se nastavuje

Průvodce zakládáním příběhu má krok **Titulní obrázek** („Skvělá obálka získá první klepnutí.“). Vyměnit ho můžete později na stránce příběhu nebo z hlavičky editoru a ještě jednou v kroku **Metadata** průvodce vydáním. V kontrolách před vydáním najdete řádek **Titulní obrázek příběhu** s tlačítkem **Zkontrolovat metadata** a dokud tenhle řádek neprojde, vydání se zastaví se zprávou „Chybí titulní obrázek příběhu.“

Všude se používá jeden a tentýž soubor. TalePort žádnou menší kopii nevyrábí.

## Musí být na výšku

Titulní obrázek musí být svislý v poměru 9:16 s tolerancí pět procent na obě strany. Miřte na 1080 × 1920. Soubor 1080 × 1800 už je příliš blízko čtverci a neprojde: nic se nezařadí a varování uvede rozměry, které přečetlo, třeba „Tento obrázek má rozměry 1080x1800. Nahrajte prosím svislý obrázek (na výšku) v poměru 9:16.“ Nic vás přitom neblokuje, takže obrázek znovu ořežete a nahrajete.

Rozměry se čtou z hlavičky souboru a TalePort tam rozumí formátům PNG, WebP a JPEG. Soubor, jehož hlavičku přečíst neumí, projde v jakémkoli tvaru.

Nápovědy pod plochou pro nahrání v průvodci zakládáním si nevšímejte. Stojí v ní „Doporučeno: poměr stran 16:9, minimálně 1280×720px“, tedy přesný opak toho, co nahrávání přijme.

## Co nahrát

Dialog pro výběr souboru nabízí `.png`, `.jpg`, `.jpeg` a `.webp`. Prohlížeč pak obrázek zmenší, aby se vešel do 1080 × 1920, a znovu ho zakóduje jako JPEG. Ukládá se právě ten JPEG a menší obrázek se nikdy nezvětšuje. Pozadí uzlů jde jinou cestou a končí jako WebP, takže se výsledné soubory formátem liší.

Velikost souboru, který vyberete, nikdo nekontroluje. Limit 10 MB platí na zmenšený JPEG a ten se k němu při rozměru 1080 × 1920 nikdy nepřiblíží. Posílejte tedy nejlepší export, jaký máte, ne ten už jednou zkomprimovaný.

## Jak ho navrhnout

Otevřete si náhled na uzlu Začátek a uvidíte titulní obrázek dvakrát: rozmazaný a ztmavený přes celou obrazovku a ostrý ve čtvercovém panelu nad názvem. Čtverec se vyřezává ze středu, takže horní a dolní část grafiky se do něj nedostane. Koncová obrazovka používá jen tu rozmazanou verzi a přes ni je text „Děkujeme za hraní“.

- **Bude malý.** V knihovně příběhů z něj zbude pruh široký 132 pixelů vedle názvu. Detailní ilustrace se v téhle šířce změní v šedou kaši, zatímco výrazný tvar a dvě barvy přežijí.
- **Název do grafiky nepatří.** Vykresluje se vedle titulního obrázku na dlaždici a přes něj na úvodní obrazovce. Když ho vypálíte do obrázku, máte dva názvy v různých velikostech a ten v obrázku se navíc nedá přeložit.
- Hlavní motiv dejte do prostřední třetiny. Právě ta zůstane ve čtvercovém panelu.
- Veselý titulní obrázek u hororu vás připraví o čtenáře, kterým by se příběh líbil, a zklame ty, kdo na něj klepnou.

![detail příběhu, kde se obálka zobrazuje ve velikosti, v jaké ji většina čtenářů potká](/screens/cs/media/cover-thumbnail-test.png)

## Práva a uvedení AI

K titulnímu obrázku musíte mít práva stejně jako ke všemu ostatnímu, co nahrajete ([CR-II.1](/cs/publishing/content-rules/#cr-ii-1)), a grafiku, kterou vytvořila nebo pomohla vytvořit AI, musíte při vydání uvést ([CR-III.2](/cs/publishing/content-rules/#cr-iii-2)).

Jedna mezera v tom ale je. Přepínač **AI obrázky** v kroku Klasifikace průvodce vydáním se dá zapnout jen tehdy, když některý uzel v grafu nese komponentu Obrázek na pozadí s nahraným obrázkem. Titulní obrázek se do toho nepočítá. V příběhu, který žádná pozadí nemá, zůstane přepínač nedostupný s popiskem „Váš příběh tento druh média neobsahuje.“ a titulní obrázek od AI tam neuvedete.

## Související

- [Metadata příběhu](/cs/publishing/story-metadata/)
- [Obrázky](/cs/media/images/)
- [Požadavky na vydání](/cs/publishing/publishing-requirements/)
