---
title: Požadavky na vydání kapitoly
description: Co všechno musí platit, než můžete kapitolu odeslat ke kontrole.
helpKey: publishing.requirements
status: published
sidebar:
  order: 7
---

Před odesláním kapitoly ke kontrole TalePort zkontroluje tři věci: váš autorský profil, příběh a kapitolu. Výsledky uvidíte v kroku **Validace**, prvním kroku dialogu publikování.

Kapitolu bez uzlů publikovat nelze. Tlačítko **Publikovat** je zašedlé a nápověda u něj říká *Před odesláním ke kontrole přidejte aspoň jeden uzel*.

## Krok Validace

1. Stiskněte **Publikovat**. U kapitoly ve stavu Návrh nebo Testování se dialog nejdřív zeptá *Jak chcete příběh publikovat?*. Na výběr je soukromý testovací balíček nebo odeslání kapitoly ke kontrole.
2. Když zvolíte odeslání ke kontrole, začne sedm kroků publikování. Kapitola, která je v kontrole nebo už je vydaná, tuhle otázku přeskočí a otevře se na prvním kroku.
3. První krok je **Validace** s nadpisem *Připraveno k publikaci?*. Spustí čtrnáct kontrol a každou ukáže jako řádek.

Nesplněné řádky jsou nahoře pod **Vyžaduje pozornost**, splněné pod **Hotovo**. Když řádek opravíte, přesune se do druhé skupiny.

U většiny nesplněných řádků je tlačítko, které vás zavede k opravě: **Otevřít profil**, **Otevřít fakturační nastavení**, **Zkontrolovat metadata**, **Otevřít kapitoly**. Tři řádky ho nemají:

- *Graf příběhu obsahuje přehratelný obsah*
- *Dosažitelný konec kapitoly*
- *Bez chyb v grafu*, dokud je splněný

Když *Bez chyb v grafu* splněný není, nahradí ho jeden řádek za každou chybu. Řádek nabízí **Přejít na uzel**, když chyba patří konkrétnímu uzlu.

![krok Připraveno k publikaci? dialogu publikování: nesplněné řádky pod Vyžaduje pozornost na začátku seznamu, splněné pod Hotovo níž](/screens/cs/publishing/validation-step.png)

## Váš autorský profil

Čtyři řádky kontrolují vás, ne příběh. Tři se týkají profilu a jeden fakturace:

- **Zobrazované jméno autora**, **Životopis autora** a **Avatar autora**. Dokud nejsou splněné, nepustí vás krok Validace dál. Životopis, ve kterém je jen prázdné formátování, se nepočítá.
- **Fakturační a výplatní údaje**. Řádek hlásí chybu, kdykoli údaje nejsou kompletní, ale zastaví jen placenou kapitolu. Kapitolu zdarma odešlete i tak.

## Příběh

Příběh nastavíte jednou a platí pro všechny jeho kapitoly.

- **Název příběhu**, **popis příběhu** a **titulní obrázek**
- Právě jeden [žánr](/cs/publishing/genres-and-tags/) a aspoň jeden [štítek](/cs/publishing/genres-and-tags/)
- [Věkové doporučení](/cs/publishing/age-ratings/), které odpovídá nejextrémnějšímu obsahu kdekoli v příběhu
- Potvrzené lidské autorství: zaškrtněte políčko, že text příběhu napsal člověk a nevygenerovala ho AI. Viz [CR-III.1](/cs/publishing/content-rules/#cr-iii-1).

Věkové doporučení a potvrzení autorství nemají na kontrolním seznamu řádek. Nastavíte je v kroku **Klasifikace**. Tlačítko **Další** tam zůstane neaktivní, dokud nevyberete věkové doporučení a nezaškrtnete políčko. TalePort obojí při odeslání ověří znovu.

Krok **Klasifikace** se uloží, jakmile z něj odejdete. Podrobnosti jsou ve [Vydání kapitoly](/cs/getting-started/publishing/#dialog-publikování).

Jakmile je vydaná kterákoli kapitola příběhu, můžete věkové doporučení jen zvýšit, ne snížit. Obsahový štítek, který už na příběhu je, odebrat nejde. Obě volby jsou zašedlé a popisek vysvětlí proč.

## Kapitola

- Název kapitoly a **popis kapitoly**. Krok **Metadata** vás bez názvu nepustí dál.
- Aspoň jeden konec, ke kterému se čtenář dostane od začátku a který je označený jako **Konec kapitoly**. Kapitola může mít víc [uzlů Konec](/cs/story-editor/end-nodes/), ale stačí jeden dosažitelný.
- **Bez chyb v grafu.** Upozornění vydání neblokují, chyby ano. Každá chyba má vlastní řádek. **Přejít na uzel** řádek nabízí jen u chyb, které patří konkrétnímu uzlu. Chybějící uzel Začátek nebo uzel Konec, na který nic nenavazuje, proto uvidíte jako nesplněný řádek bez odkazu. Viz [Zásady pro příběhy](/cs/publishing/story-guidelines/).
- *Graf příběhu obsahuje přehratelný obsah.* TalePort počítá cenu podle nejdelší cesty, kterou čtenář projde. Ta musí trvat déle než nula minut. Téměř prázdná kapitola tu neprojde.
- *Předchozí kapitoly jsou připravené ke kontrole.* Každá kapitola před touto musí být vydaná nebo v kontrole.

Na prvním kroku vás drží čtyři z těchto řádků: dosažitelný konec, chyby v grafu, přehratelný obsah a pořadí kapitol. Popis kapitoly, metadata příběhu a fakturační údaje můžete doplnit až v dalším kroku. Věkové doporučení řádek nemá, hlídá ho krok **Klasifikace**.

## Co odeslání neblokuje

Tyhle věci odeslání nikdy nezastaví:

- [Obsahové štítky](/cs/publishing/content-labels/) jsou volitelné a kontrolní seznam je nekontroluje.
- Přispěvatelé. Když někomu zrušíte zaškrtnutí, odeslání se nezablokuje, ale odesláním ho z příběhu odeberete. Ztratí přístup k dalším verzím. Zpětná vazba, kterou už napsal, zůstane. Zpátky ho dostanete tak, že ho v sekci Přispěvatelé u příběhu přidáte znovu.
- Chybějící fakturační údaje u kapitoly zdarma.
- Upozornění z validace: nedosažitelný uzel, uzel bez obsahu, pozadí nebo skladba bez souboru. Editor na ně upozorní a odeslat vás nechá.

### Chybějící mediální soubory

Soubor, který příběh používá a který už neexistuje, se ukáže až při zpracování, po odeslání. Kapitola se vrátí do původního stavu a otevře se dialog **Chybějící mediální soubory**. Každý chybějící soubor má v něm vlastní řádek.

- Soubor použitý v uzlu nese název toho uzlu, nebo *V uzlu*, když uzel nemá název. Kliknutím na řádek se k uzlu dostanete.
- Chybějící titulní obrázek, avatar postavy nebo obrázek globální události je označený *Titulní obrázek příběhu*, *Avatar postavy* nebo *Globální událost*. Na takový řádek kliknout nejde, opravíte ho tam, kde ho obvykle upravujete.

Dialog se ukáže jednou, v okamžiku selhání zpracování, a jen když máte editor otevřený.

**Publikovat bez těchto souborů** znovu otevře dialog publikování, takže projdete sedm kroků podruhé. Sestavení pak ty soubory vynechá. Scéna se přehraje bez pozadí a postava zůstane bez avatara.

## Prohlášení v dialogu

V dialogu publikování učiníte tato prohlášení:

- **Zdarma, nebo placená** a u placené cena. Viz [Obsah zdarma a placený obsah](/cs/monetization/free-and-paid-content/).
- **Obsah generovaný AI**, prohlášený zvlášť pro každý druh média. Vyžaduje ho [CR-III.2](/cs/publishing/content-rules/#cr-iii-2) a vstupuje do doporučené ceny. Viz [Klasifikace](/cs/getting-started/publishing/#klasifikace).
- Práva ke každému obrázku, skladbě, nahrávce a klipu. Neověřuje je dialog publikování, ale recenzent při kontrole. Pravidlo je [CR-II.1](/cs/publishing/content-rules/#cr-ii-1).

Ze všech prohlášení může odeslání zastavit jen políčko o autorství. Prohlášení o AI ho nezastaví nikdy.

## Zpoplatnění kapitoly

Platí dvě podmínky. Obě se týkají vás, ne příběhu:

- Jste **kvalifikovaný** autor, nebo aktivní partner.
- Máte úplné fakturační a výplatní údaje.

Kapitoly zdarma se nic z toho netýká. Kvalifikaci získáte automaticky, jakmile je jedna z vašich kapitol zdarma schválená a má dost obsahu. Můžete o ni také požádat TalePort. Hranici a způsob měření času vysvětlují [Podmínky zpeněžení](/cs/monetization/requirements/#cesta-ke-kvalifikaci).

## Související

- [Vydání kapitoly](/cs/getting-started/publishing/)
- [Příprava obsahu ke kontrole](/cs/best-practices/preparing-for-review/)
- [Průběh kontroly](/cs/publishing/review-process/)
- [Zásady pro příběhy](/cs/publishing/story-guidelines/)
