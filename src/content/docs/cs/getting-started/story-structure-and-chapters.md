---
title: Struktura příběhu a kapitoly
description: Jak spolu souvisí příběh, kapitola a graf příběhu.
helpKey: getting-started.story-structure
status: published
sidebar:
  order: 2
---

Příběh je celé dílo, které vydáváte pod jedním autorským profilem, a patří mu všechno, co musí platit od první stránky do poslední: obálka, žánr, štítky, věkové doporučení, postavy, proměnné a globální události. Kapitola je ta část uvnitř, kterou píšete, oceňujete a posíláte ke kontrole a kterou si čtenář kupuje samostatně. Uzel je jedna obrazovka kapitoly. V příběhu *Poslední maják* patří příběhu proměnná `Důvěra` i globální událost s bouří, kapitola 2 „Noční hlídka“ obsahuje 40 uzlů, ve kterých se bouře odehrává, a uzel „Lampová komora“ je jedna obrazovka se dvěma replikami a volbou, jestli zůstat u lampy, nebo sejít k lodím.

## Tři úrovně

| Úroveň | Co to je | Co z toho vidí čtenář |
| --- | --- | --- |
| **Příběh** | Vydané dílo. Patří mu obálka, žánr, štítky, věkové doporučení, tagy obsahu, postavy, proměnné a globální události. | Jedna položka v EPOSu. |
| **Kapitola** | Jedna vydatelná část příběhu. Má vlastní graf, vlastní popis, vlastní cenu a vlastní kontrolu. | Jedna část, kterou si kupuje a stahuje. |
| **Uzel** | Jedna obrazovka: text, média a dialog, plus jediný přechod, který rozhoduje, co bude dál. | Jeden krok při čtení. |

Všechno, co musí znamenat totéž v první i v deváté kapitole, patří **příběhu**. Všechno, co je součástí jednoho úseku vyprávění, patří **kapitole**.

Jedna část toho dělení napoprvé zmate skoro každého. Věkové doporučení, tagy obsahu a prohlášení o AI jsou vlastnosti **příběhu**, ale nastavujete je zevnitř kapitoly, v kroku **Klasifikace** jejího průvodce publikováním. Upravujete odtud celý příběh, ne tu jednu kapitolu. Nastavíte je jednou a platí pro všechno, co pod tím příběhem vydáte. Jeden háček: jakmile je některá kapitola vydaná, doporučení už jde jen zvýšit a tag obsahu, který jste přiznali, se nedá odebrat.

## Proč jsou kapitoly tak důležité

Kapitola se samostatně kontroluje, samostatně oceňuje, samostatně vydává a čtenář si ji samostatně kupuje a stahuje. Délka kapitoly je proto redakční rozhodnutí, které něco stojí. Doporučená cena se počítá z obsahu kapitoly, takže krátká kapitola vyjde levně; u dlouhé zase každá pozdější oprava, i kdyby to bylo jedno špatné jméno, projde kontrolou jako celá kapitola. Na délce závisí i to, odkdy si můžete účtovat: zpoplatnění se otevře po jedné schválené volně dostupné kapitole s alespoň 20 minutami unikátního obsahu a čtyři pětiminutové kapitoly se k tomu nesečtou.

## Kapitoly vycházejí v pořadí

Kapitoly mají pevné pořadí a vydaná část příběhu tvoří nepřerušenou řadu od první kapitoly. Není způsob, jak dostat ke čtenářům kapitolu 4, když je kapitola 3 pořád koncept. Panel **Kapitoly** to říká jednou větou: „Kapitoly se kontrolují a publikují v tomto pořadí. Publikované kapitoly a kapitoly v kontrole jsou uzamčené; přesouvat lze pouze koncepty.“

- Kapitolu pošlete ke kontrole ve chvíli, kdy je každá kapitola před ní vydaná nebo už v kontrole. Testovací sestavení předchozí kapitoly se nepočítá a kapitola, kterou jste stáhli zpátky do konceptu, znovu zablokuje všechno za sebou.
- Recenzent může kapitolu schválit, až je každá kapitola před ní vydaná a mimo kontrolu. Vydaná kapitola, která má v kontrole vlastní revizi, není dořešená, takže schválení té další pořád blokuje.
- Testovací sestavení potřebuje každou kapitolu před sebou v testování nebo už vydanou. Předchozí kapitola, která čeká na svou první kontrolu, ho zablokuje.
- Kapitoly, které jsou vydané, v kontrole nebo v testování, jsou ukotvené ve svém pořadí a drží se před koncepty. Přetáhnout koncept před ně se odmítne.

Ukotvená kapitola má místo úchytu k přetažení špendlík a první neukotvená kapitola nese odznak **Další k publikování**. Pořadí, na kterém se ustálíte před prvním odesláním, vám tedy z velké části zůstane.

## Přidávání, přejmenování a mazání kapitol

Kapitoly najdete v editoru pod položkou **Kapitoly**, ke stejnému seznamu se dostanete i z detailu příběhu tlačítkem **Spravovat** na kartě kapitol. **Přidat kapitolu** zařadí novou na konec. **Vytvořit** zůstane nedostupné, dokud kapitola nemá název i popis, takže bezejmenná kapitola bez popisu vůbec nevznikne: název až 200 znaků, popis až 1000. Nové pořadí se po přetažení uloží samo.

- Příběh si vždy ponechá alespoň jednu kapitolu. Smazání poslední se odmítne: „Příběh musí mít alespoň jednu kapitolu.“
- Dokud je kapitola v kontrole, editor jí zešedne tlačítko úpravy („Kapitoly v kontrole nelze upravovat.“) a smazání rovnou odmítne. Pokud ji potřebujete zpátky, stáhněte ji z kontroly.
- Smazat *vydanou* kapitolu jde. Zmizí čtenářům, smažou se její balíčky a uvolní se její média, a potvrzovací dialog o ničem z toho nemluví. Ctrl+Z ji vrátí.

## Stav se přenáší mezi kapitolami

Vlastnosti, příznaky a vztahy patří příběhu, ne kapitole, takže co si čtenář nasbíral v první kapitole, má u sebe i ve čtvrté. Právě proto může rozhodnutí z úvodu něco znamenat mnohem později.

Platí se za to zamykáním. Když kapitola vyjde, ukotví se všechno, o co se opírá: postavy, které v ní mají repliku, proměnné, které čte nebo mění, každá proměnná z karty vlastností takové mluvící postavy, všechny globální události příběhu a proměnná, na kterou každá z nich míří. Poslední dva body sahají dál, než se zdá, takže proměnná, kterou vaše kapitola nikde nezmiňuje, může být zamčená jen proto, že na ni míří globální událost. Zamčená položka má místo tlačítek úpravy a smazání zámek a oba příkazy odmítá i server: „Odemkne se, jakmile ho žádná publikovaná kapitola nebude používat. Můžete přidat novou položku.“ Stažení, zrušení publikace nebo smazání té kapitoly zámek uvolní.

Vlastní graf kapitoly zamrzá stejně. Dokud je vydaná, komponenty uvnitř uzlu upravovat můžete, ale přidání, smazání nebo přepojení uzlů se odmítne, než se kapitola vrátí k vám.

## Související

- [Graf příběhu](/cs/story-editor/story-graph/)
- [Proměnné](/cs/story-editor/variables/)
- [Životní cyklus příběhu](/cs/getting-started/story-lifecycle/)
- [Vydání kapitoly](/cs/getting-started/publishing/)
