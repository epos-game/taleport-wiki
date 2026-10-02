---
title: Vydání kapitoly
description: Co se ve skutečnosti stane, když kapitolu odešlete.
helpKey: getting-started.publishing
status: published
sidebar:
  order: 5
---

Vydat kapitolu znamená předat ji recenzentovi TalePortu, ne čtenářům. Dialog pro vydání z vás vytáhne, co ještě chybí, za kolik se bude kapitola prodávat a odkdy bude dostupná, a pak zařadí sestavení balíčku, které vydaný příběh přebalí celý. Odešlete v úterý kapitolu „Kapitola 3: Zatopená šachta“ za 50 EPS, a jak ji recenzent schválí, čtou ji čtenáři na úrovni Vizionář ještě ten večer, všichni ostatní o sedm dní později.

## Než tlačítko začne něco dělat

Dialog pro vydání se otevře na kroku **Validace**, rozděleném na **Hotovo** a **Vyžaduje pozornost**. Odeslání skutečně zastaví tohle:

- Autorský profil: zobrazované jméno, životopis a avatar.
- Příběh: název, popis, titulní obrázek, žánr a alespoň jeden štítek.
- Tahle kapitola: popis, graf bez chyb a alespoň jeden konec označený jako **Konec kapitoly**, ke kterému se čtenář opravdu dostane.
- Změřitelná cesta kapitolou. TalePort vezme nejdelší trasu, kterou čtenář může projít. Když ta trasa vyjde na nulu minut nebo když je celková délka kapitoly kratší než ona, podmínka neprojde. Na seznamu se tahle položka jmenuje **Graf příběhu obsahuje přehratelný obsah**.
- Kapitoly před ní: každá z nich už vydaná, nebo v kontrole. Kapitola, kterou jste jen testovali, se nepočítá, a kapitola stažená zpátky do konceptu znovu zablokuje všechny za sebou.

Dvě podmínky na tom seznamu chybí, protože je nastavujete dál v dialogu: věkové doporučení a potvrzení lidského autorství, obojí v kroku **Klasifikace**.

Požadavek na **Konec kapitoly** odhalí chybu, která se snadno přehlédne. Pokud každý konec, ke kterému se čtenář dostane, jen uzavírá větev, může dojít na konec cesty, ale nikdy nedojde na konec kapitoly, takže příběh nemá jak ho přenést do té další. Otevřete koncový uzel a zapněte **Konec kapitoly**. Viz [Koncové uzly](/cs/story-editor/end-nodes/).

**Fakturační a výplatní údaje** jsou na stejném seznamu, ale blokují jen **placenou** kapitolu. Kapitola zdarma se odešle i bez nich.

## Dialog

U kapitoly ve stavu Návrh nebo Testování se dialog nejdřív zeptá, co vlastně chcete: sestavit soukromý testovací balíček pro přispěvatele, nebo jít ke kontrole. Levnější je testovat nejdřív, viz [Testování a přispěvatelé](/cs/getting-started/testing-and-contributors/). Kapitola, která už je vydaná, otázku přeskočí, protože testovat jde jen před vydáním.

Kontrola má sedm kroků: **Validace**, **Metadata**, **Klasifikace**, **Cena**, **Předběžný přístup**, **Přispěvatelé** a **Souhrn** s odesílacím tlačítkem. Dokud něco odeslání blokuje, postupujete po jednom kroku. Jakmile validace kapitolu prohlásí za připravenou, odemknou se všechny kroky najednou a můžete skočit přímo na souhrn.

## Klasifikace

Krok **Klasifikace** nastavuje vlastnosti **příběhu**, ne téhle kapitoly, i když se k němu dostanete z kapitoly. Odpovídáte jednou za všechno, co pod daným příběhem vydáte:

- Jedno **věkové doporučení**: 7+, 12+, 16+ nebo 18+. Viz [Věkové doporučení](/cs/publishing/age-ratings/).
- Nepovinné **tagy obsahu**: násilí, krev, vulgarismy, horor, sexualita, citlivá témata. Viz [Obsahové štítky](/cs/publishing/content-labels/).
- Prohlášení o **obsahu generovaném AI** zvlášť pro každý druh média: obrázky, hudbu, mluvené slovo a video. Označit jde jen to, co váš příběh skutečně obsahuje, zbytek je zašedlý s poznámkou „Váš příběh tento druh média neobsahuje.“ Vyžaduje to [CR-III.2](/cs/publishing/content-rules/#cr-iii-2) a nepravdivé označení je samo o sobě porušením pravidel ([CR-III.4](/cs/publishing/content-rules/#cr-iii-4)).
- Potvrzení, že text napsal člověk a nevygenerovala ho AI. Bez něj nelze odeslat.

Přepínače AI si projděte i v případě, že jste nic negenerovali. Obrázky, hudba a mluvené slovo jsou u každého druhu média, který příběh obsahuje, **zapnuté** od začátku, takže příběh, u kterého klasifikaci nikdy neotevřete, prohlásí za vygenerované AI všechno. Každý přepínač jde oběma směry: vypnutím prohlásíte lidskou výrobu, a ta zvedá doporučenou cenu.

Dvě věci se zamknou, jakmile je venku kterákoli kapitola příběhu. Věkové doporučení lze zvýšit, ale ne snížit, a existující tag obsahu už nelze odebrat. Přidat další tag můžete vždycky.

## Cena

Kapitola je buď zdarma, nebo placená, viz [Obsah zdarma a placený](/cs/monetization/free-and-paid-content/).

Zpoplatnit kapitolu můžete, až splníte dvě podmínky: musíte být **kvalifikovaný autor** nebo aktivní partner a mít kompletní fakturační a výplatní údaje. Kvalifikace přijde sama, když vydáte jednu schválenou kapitolu **zdarma**, která sama nese alespoň 20 minut unikátního obsahu. Několik kratších kapitol se nesčítá. Požádat o ni jde i e-mailem na support@epos.games, na který krok s cenou odkazuje. Do té doby vám krok vysvětlí, jak na tom jste, a kapitolu nechá zdarma.

U placené kapitoly TalePort spočítá doporučenou cenu z obsahu kapitoly a dá vám kolem ní pásmo: dole polovina doporučení, nikdy však méně než 9 EPS, nahoře 299 EPS. Nad posuvníkem najdete přednastavené hodnoty **50 %**, **Doporučeno** a **Max**, cenu ale můžete zadat i ručně. Ceny jsou v EPS, měně uvnitř aplikace, kde 1 EPS = 1 Kč, tedy asi 0,04 €. Viz [Ceny](/cs/monetization/pricing/).

Pokud vám cenu někdy upravil recenzent, opětovné odeslání tu úpravu zruší a použije se znovu vaše částka.

## Předběžný přístup

Mezi schválením a plnou dostupností je vždycky odstup. Krok **Předběžný přístup** rozhoduje o tom, kdy se hodiny spustí, ne o tom, jestli běží.

- Zvolíte datum a čtenáři od úrovně Vizionář výš si kapitolu mohou číst od toho data. Všichni ostatní ji dostanou o sedm dní později, podporovatele na úrovni Zakladatel v to počítaje.
- Nezvolíte nic a datem se stane okamžik schválení, se stejným sedmidenním odstupem po něm.
- Datum, které zvolíte, musí být nejméně 14 dní dopředu, protože samotná kontrola může tak dlouho trvat.

Datum se zapisuje jen do kapitoly, která ještě není vydaná. Opětovným odesláním vydané kapitoly s ním nehnete, takže si drží termín, se kterým vyšla.

## Přispěvatelé

Krok **Přispěvatelé** určuje, kdo u příběhu zůstane po vydání této verze. Odznačením někomu vezmete přístup k dalším verzím a zpětná vazba, kterou už napsal, zůstane. Tvůrce odznačit nelze a lidé uvedení bez účtu Epos se zobrazují, ale vybírat je nejde.

## Co odeslání skutečně udělá

Kapitola se zařadí do fronty ke kontrole a TalePort pustí sestavení balíčku na pozadí. Zavřením dialogu práce nekončí: na tlačítku se objeví **Ve frontě…** a pak **Zpracováváme…** a po dokončení i po selhání se ozve hlášení.

- Vydáním se znovu sestaví celý vydaný příběh. Každá kapitola, která už je venku nebo drží místo v kontrole, se přebalí do nové verze spolu s tou odeslanou, a to včetně kapitol, které jste jen testovali. Koncepty, které jste nevydali, zůstanou stranou.
- Jeden příběh, jedno vydávání najednou. Když spustíte druhé, zatímco první běží, TalePort vás nechá počkat na jeho dokončení.
- Neúspěšné sestavení neznamená ztracenou kapitolu. Vrátí se vám ve stavu, ve kterém byla, s příznakem nevydaných změn. Sestavení si systém zkusí až třikrát a po 20 minutách uvízlé sestavení odepíše.

Sestavení může spadnout i proto, že příběh odkazuje na média, která už v úložišti nejsou. Dialog je pak vypíše podle místa použití, tedy v uzlu, titulní obrázek příběhu, avatar postavy nebo globální událost, a nabídne **Přejít na uzel** nebo **Publikovat bez těchto souborů**. Testovací sestavení chybějící média přeskakuje, takže na tohle narazíte jen při odeslání ke kontrole.

Dokud kapitolu drží recenzent, editor se otevře jen pro čtení. Na verdikt ale čekat nemusíte: **Stáhnout z kontroly** ji vytáhne rovnou zpátky, u prvního odeslání do konceptu a u kapitoly, která už byla venku, zpátky mezi vydané. Najdete to v seznamu kapitol, v nabídce u tlačítka pro vydání a v **Přehledu** na kartě **V kontrole**.

Rozhodnutí recenzenta vám přijde i e-mailem. Schválení nese obě data dostupnosti, zamítnutí souhrn a komentáře recenzenta. Co recenzent kontroluje a jak dlouho to trvá, popisuje [Průběh kontroly](/cs/publishing/review-process/).

## Opětovné vydání

Na tlačítku je **Publikovat znovu** vždy, když už kapitola jednou odešla a nespadla zpátky do konceptu. Když první odeslání stáhnete nebo ho recenzent zamítne ještě před vydáním, kapitola se vrátí do konceptu a na tlačítku je zase **Publikovat**. V obou případech tlačítko zabere jen tehdy, když je co poslat; když je zašedlé, nemáte co poslat a poslední změna už odešla.

## Než odešlete

Projděte si [Přípravu obsahu ke kontrole](/cs/best-practices/preparing-for-review/). Většina zamítnutí padá na věcech, které autor mohl zachytit za deset minut.

## Související

- [Požadavky na vydání](/cs/publishing/publishing-requirements/)
- [Průběh kontroly](/cs/publishing/review-process/)
- [Životní cyklus příběhu](/cs/getting-started/story-lifecycle/)
- [Pravidla obsahu](/cs/publishing/content-rules/)
