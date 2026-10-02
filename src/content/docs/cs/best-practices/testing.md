---
title: Testování
description: Jak ve větvené kapitole najít problémy dřív než kdokoli jiný.
helpKey: best-practices.testing
status: published
sidebar:
  order: 4
---

Testování větvené kapitoly jsou tři různé práce a žádná nezastoupí druhou: vyčistit validaci v editoru, projít cesty v Náhledu a dát testovací balíček někomu, kdo příběh nečetl. Přečtením si nenajdete skoro nic, protože jdete tou cestou, kterou jste napsali první, a dávno víte, která volba je past. Řekněme, že v krčmě přidáte 2 k Důvěře a nejlepší konec podmíníte Důvěrou alespoň 5. Jediný další uzel, který Důvěru zvyšuje, ale leží ve větvi, kterou jste nikdy nepropojili, takže se k tomu konci nikdo nedostane a nevšimnete si toho, dokud validace neoznačí osamocenou větev nebo dokud vám náhled neukáže, že konec zůstává zamčený.

## Nejdřív vyčistěte validaci

Editor překontroluje graf 750 ms po poslední změně a bere tu úroveň grafu, kterou máte otevřenou, ne celou kapitolu. Skupiny se řeší zvlášť: každý uzel skupiny dostane jedinou značku **Obsahuje chyby** nebo **Obsahuje varování**, takže jednotlivé nálezy uvidíte, až skupinu otevřete. Tatáž slepá místa má i průvodce vydáním, který chybu uvnitř skupiny vypíše bez názvu uzlu a bez tlačítka **Přejít na uzel**.

Chyby blokují vydání i testovací sestavení a dělí se do tří rodin. Tvar grafu: žádný uzel Začátek, žádný uzel Konec, víc než jeden Začátek, Začátek, do kterého něco vede, Konec, do kterého nevede nic, Konec, ke kterému se nikdo nedostane, nepřipojený výstupní port. Nedokončené přechody: volba bez možností nebo možnost bez textu, Switch bez podmínek, ověření dovednosti bez vybrané vlastnosti, vstup nebo výstup skupiny, který uvnitř skupiny nikam nevede. A to, co na uzlu sedí: jakákoli obsahová komponenta na uzlu Začátek nebo Konec, nebo dvě komponenty, které spolu na jednom uzlu být nemohou. První takový pár, na který narazíte, je text a dialog. Globální události přidávají tři další, a protože patří příběhu, ne kapitole, jedna špatná událost rozbije i kapitoly, které jste neupravovali: událost sledující smazanou proměnnou, událost s chováním **Vrátit se na začátek** v kapitole bez uzlu Začátek a událost s chováním **Vrátit se na poslední kontrolní bod** v kapitole bez uzlu s kontrolním bodem.

Varování neblokují nic: nedosažitelný uzel, prázdná textová komponenta, dialog bez replik, replika bez postavy nebo bez textu, komponenta události bez událostí, uzel bez jakékoli komponenty, pozadí nebo stopa, kterou uzel má, ale není nastavená ani se nedědí, filmová sekvence bez videa, podmínka Switche bez požadavků, vstupní port skupiny, do kterého nic nevede. Průvodce vydáním vypíše jen chyby, jinde dostanete nanejvýš počet v hlášce po **Stáhnout jako .ZIP** nebo **Exportovat Game Book**. Projděte je stejně. Polovina nedosažitelných uzlů, které najdete, je větev, kterou jste zapomněli připojit.

Uvnitř skupiny jsou tři kontroly struktury vypnuté: nedosažitelný Konec, Konec bez příchozího propojení a víc než jeden Začátek. Skupina tak může vypadat čistě, i když kapitola okolo ní čistá není.

Pár věcí zůstává na vás. Rozbité odkazy se hlásí jen dva, ověření dovednosti bez vlastnosti a globální událost sledující smazanou proměnnou. Volba ani podmínka Switche, jejíž proměnná byla smazána, se nehlásí, a přehlížet se taky nezačne: náhled ji vyhodnotí jako nesplněnou, takže podmíněná volba zmizí a podmínka Switche nemůže nikdy vyhrát. Chybějící soubory médií vyplavou, až vydání nebo testovací sestavení selže, v dialogu, který pojmenuje každý soubor i místo, kde se používá, ne během psaní. A uzel, kde se potkají dva zdroje médií, nic nepřehraje a nevyvolá žádné hlášení v žádné závažnosti. Viz [Práce s médii](/cs/best-practices/media-usage/).

## Projděte si to v Náhledu

Karta **Náhled** v pravém panelu není statické vykreslení uzlu, je to simulátor, kterým se dá projít. Ukáže uzel tak, jak ho uvidí čtenář, nabídne jeho odchozí propojení jako možnosti, opravdu vyhodnotí jeho Switch nebo ověření dovednosti a aplikuje události uzlu na stav proměnných, než výsledek ponese dál. Taky tam stojí *Přibližný náhled. Finální vykreslení v EPOS se může lišit.* Používejte ho na logiku, ne na vzhled.

- Proměnné začínají na výchozích hodnotách a kteroukoli z nich můžete v ladicím panelu přepsat, takže na uzel dorazíte rovnou ve stavu, který chcete vyzkoušet. Přepis ani simulovanou změnu nic neomezuje na Min a Max proměnné, takže vlastnost se stropem 10 vám klidně ukáže 14.
- Ověření dovednosti hodí kostkou samo, jen co na uzel dorazíte, a ten hod si pro uzel zapamatuje. Odejít a vrátit se tedy nestačí: nový hod vyvoláte tlačítkem **Hodit kostkou** nebo tím, že číslo přepíšete ručně.
- Zamčenou volbu, podmínku Switche, která by se při aktuálním stavu nepoužila, i výsledek, který by z vašeho hodu nevyšel, lze po potvrzení projít stejně. Takhle se dostanete do větve, aniž byste nejdřív vyrobili stav, který ji odemyká.
- Na globální událost vás editor při odchodu z uzlu upozorní jen tehdy, když má chování **Vrátit se na začátek** nebo **Vrátit se na poslední kontrolní bod**. Událost s chováním **Pokračovat** se spustí bez hlášky, a to správně, protože uzly za ní zůstávají dosažitelné.
- **Operátor „se nerovná“ je v náhledu rozbitý.** Vykreslí se jako `?` a vyhodnotí se jako nesplněný, takže všechno podmíněné `≠` vypadá v náhledu trvale zamčeně, ať je stav jakýkoli. U logické proměnné a u výčtu je to jediná alternativa k „se rovná“, takže na to narazíte.

![pravá karta Náhled na uzlu s ověřením dovednosti](/screens/cs/story-editor/preview-debug.png)

## Pak větve projděte záměrně

Ne „projít si to“. Vyberte si cestu a držte se jí:

- Čtenář maximálně opatrný.
- Čtenář maximálně lehkomyslný.
- Ten, kterému selže každé ověření dovednosti. Dokáže kapitolu dohrát?
- Ten, kterému projde každé ověření dovednosti. Zbude mu ještě co dělat?
- Ten, kdo spustí každou globální událost. Ladicí panel vypíše všechny události příběhu s ukazatelem, jestli jsou splněné, a u každé má tlačítko **Náhled**, takže si překryv zobrazíte bez vyrábění stavu, který ho spustí.

## Kontrolujte stav, nejen text

Vlastnost, která se nikdy nemění, nebo se mění a nikdo ji nečte, je chyba, kterou najdete jedině tak, že se podíváte. Projděte jednu cestu a na konci se zeptejte, které proměnné se pohnuly a jestli na ně něco zareagovalo.

![panel Náhled po vyhodnocení ověření dovednosti: která větev se použila a jak to vyšlo, nad tím ladicí přepisy hodu kostkou a všech vlastností](/screens/cs/best-practices/debug-overrides.png)

## Sestavte testovací balíček

Když kapitola drží pohromadě, přepněte ji do testování. Tlačítko pro vydání nabízí **Sestavit testovací balíček** jako druhou možnost vedle cesty ke kontrole: zkontroluje kapitolu, sestaví ze snímku soukromou kopii a vaši přispěvatelé si ji přečtou v opravdové aplikaci.

Testovací sestavení zastaví jen dvě věci: chyby v grafu a pravidlo, že každá kapitola před touhle už musí být v testování nebo venku. Žádný požadavek na autorský profil, metadata příběhu, klasifikaci ani cenu zatím neplatí, takže můžete testovat dávno předtím, než je kapitola vůbec odeslatelná.

- Balíček je snímek. Upravujte dál, ale testeři neuvidí nic nového, dokud nesestavíte znovu.
- **Zrušit testování** vrátí kapitolu do konceptu a testovací balíček smaže, takže testeři o svou kopii přijdou. Sesbírejte, co našli, ještě než kolo ukončíte.
- Do testování se kapitola dostane jen z konceptu nebo z testování. Vydanou kapitolu zpátky vrátit nelze, její aktualizace jdou přes kontrolu.

## Pak sežeňte někoho dalšího

Tester najde větev, o které jste zapomněli, že jste ji napsali, a řekne vám, kde ho to přestalo bavit. Ani jedno si sami neuděláte. Viz [Testování a přispěvatelé](/cs/getting-started/testing-and-contributors/).

Jejich zpětná vazba zůstává uvnitř produktu, ne někde v chatu. Přispěvatel, který čte váš testovací balíček, píše poznámky ke kapitole, nebo je připíná k uzlu, nebo ke konkrétní komponentě na uzlu, každou až na 2000 znaků, a každá poznámka nese verzi balíčku, kterou právě hrál, takže zastaralou výtku poznáte od aktuální. Poznámky přispěvatelů jsou označené **Tester**.

Okno je úzké. Přispěvatel může psát jen tehdy, když je kapitola v testování nebo u recenzenta; jak ji vrátíte do konceptu, tahle cesta se zavře. Sbírejte zpětnou vazbu během kola.

Ptejte se konkrétně: kde vás to přestalo zajímat, které volbě jste nerozuměli, co jste čekali, že se stane, a nestalo se.

Pak si to sami přečtěte na telefonu, ve čtecí aplikaci. Editor se tam vůbec neotevře, hlásí *Editor potřebuje větší obrazovku*, takže tohle je čtení a nic víc. Kapitola, která je v pořádku na monitoru a na pevném připojení, může být na mobilních datech úplně jiná věc.

## Související

- [Testování a přispěvatelé](/cs/getting-started/testing-and-contributors/)
- [Příprava obsahu ke kontrole](/cs/best-practices/preparing-for-review/)
- [Graf příběhu](/cs/story-editor/story-graph/)
