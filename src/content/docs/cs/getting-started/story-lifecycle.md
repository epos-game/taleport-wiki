---
title: Životní cyklus příběhu
description: Přehled stavů kapitoly a dostupných akcí v každém z nich.
helpKey: getting-started.story-lifecycle
status: published
sidebar:
  order: 3
---

Každá kapitola má jeden ze šesti stavů. Stav určuje:

- jestli ji můžete upravovat,
- jestli si ji čtenáři mohou stáhnout,
- jestli ji právě drží recenzent.

Stav se mění odesláním, sestavením testovacího balíčku nebo stažením z kontroly.

Příběh sám stav nemá:

- Je **publikovaný**, jakmile je vydaná kterákoli jeho kapitola.
- Je **v kontrole**, dokud některou kapitolu drží recenzent.
- Je **testovaný**, dokud se z některé kapitoly sestavuje testovací balíček.

## Stavy

Jsou to štítky ze seznamu kapitol. Dva stavy mají stejný štítek **Ke kontrole**, takže šest stavů uvidíte pod pěti názvy.

- **Návrh:** držíte ji vy. Čtenáři nevidí nic a upravovat můžete všechno.
- **Testování:** držíte ji vy a přispěvatelé čtou testovací balíček. Vidí ji jen přispěvatelé a upravovat můžete všechno.
- **Ke kontrole:** drží ji recenzent. Čtenáři nevidí nic a v grafu nemůžete upravovat nic.
- **Publikováno:** nikdo ji nedrží. Čtenáři vidí schválenou verzi a vy můžete upravovat obsah, ne graf.
- **Ke kontrole** u kapitoly, která už je vydaná: drží ji recenzent. Čtenáři dál vidí schválenou verzi a v grafu nemůžete upravovat nic.
- **Publikováno · v úpravách:** držíte ji vy. Čtenáři vidí schválenou verzi a vy můžete upravovat obsah, ne graf.

Znovu odeslaná vydaná kapitola má štítek **Ke kontrole** a stejnou barvu jako první odeslání.

V **Přehledu**:

- Karta **Publikováno** vypisuje všechny vydané kapitoly.
- Karta **V kontrole** vypisuje všechny kapitoly, které drží recenzent.
- Kapitola na obou kartách je vydaná a má ve frontě novou verzi.

Přispěvatelé jsou výjimkou z toho, co vidí čtenáři. Člen týmu otevře kteroukoli vaši kapitolu, která není Návrh.

## Upravitelný obsah

Jakmile je kapitola vydaná, její struktura se uzamkne. Uzly nejde přidat, smazat, přepojit ani seskupit. Komponenty, které už v grafu jsou, můžete dál upravovat, například změnit text nebo vyměnit obrázek.

:::caution[Zámek sahá dál než graf]
Uzamkne se i každá proměnná, postava a globální událost, kterou vydaná kapitola používá. Odemkne se, až ji nepoužívá žádná vydaná kapitola.
:::

Místo úpravy uzamčené položky můžete přidat novou. Editor to u zámku říká: „Uzamčeno publikovaným příběhem. Můžete přidat novou položku.“

## Cesta k vydané kapitole

Když kapitola jde ven poprvé, má dvě cesty: rovnou ke kontrole, nebo nejdřív přes testování.

![Z Návrhu vede cesta do Testování i přímo ke kontrole, z Testování také ke kontrole. Kontrola kapitolu buď schválí a vydá, nebo ji vrátí do Návrhu.](/diagrams/chapter-first-publish.svg)

Testování je nepovinné.

- Začít s ním můžete z Návrhu, nebo z Testování, když znovu sestavujete balíček.
- Vydanou kapitolu testovat nejde. Aktualizace jdou přes kontrolu.
- Kapitola v testování zůstává plně upravitelná. Testeři neuvidí nic nového, dokud balíček nesestavíte znovu.

## Aktualizace vydané kapitoly

Aktualizace jde kratší cestou.

![Vydaná kapitola jde po opětovném odeslání ke kontrole. Schválení ji vrátí mezi vydané, zamítnutí ji převede do stavu Publikováno · v úpravách, odkud ji odešlete znovu.](/diagrams/chapter-update.svg)

Vydaná kapitola jde při opětovném odeslání rovnou do kontroly. Pokud ji recenzent vrátí, přejde do stavu **Publikováno · v úpravách**.

Čtenáři mají celou dobu schválenou verzi. Nová verze čeká v kontrole.

- Schválení novou verzi vydá a předchozí odstaví.
- Když kontrolu zrušíte, čekající verze se zahodí a publikovaná zůstane venku.

## Zamítnutí

Zamítnutá kapitola se vrací s poznámkami recenzenta. Každá je připnutá k uzlu nebo komponentě, které se týká, a stejné poznámky dostanete e-mailem. (Recenzent může použít **Zamítnout**, až když má kapitola aspoň jednu poznámku, která nepřišla od testera.)

Kde kapitola skončí, záleží na tom, jestli už byla vydaná:

- **Nikdy nevydaná:** vrátí se jako plně upravitelný **Návrh**.
- **Už vydaná:** vrátí se jako **Publikováno · v úpravách**. Čtenáři ji dál mají a graf zůstává uzamčený. Opravíte obsah a odešlete znovu.

Kapitola se objeví v **Přehledu** na kartě **Vyžaduje pozornost** s odkazem na zpětnou vazbu recenzenta.

Poznámky s prioritou **Vysoká** blokují schválení. Odblokujete je sami: v editoru otevřete **Poznámky** a u každé použijete **Označit jako hotové**. Ostatní poznámky jsou doporučení. Více v článku [Práce se zpětnou vazbou z kontroly](/cs/publishing/review-feedback/).

## Zrušení a stažení

**Stáhnout z kontroly** vytáhne kapitolu z fronty dřív, než recenzent rozhodne. První odeslání se vrátí do stavu Návrh. Vydaná kapitola se vrátí do stavu Publikováno beze změny. Tlačítko je na třech místech:

- v seznamu kapitol
- v rozbalovací nabídce u tlačítka **Publikovat** v editoru
- v **Přehledu** na kartě **V kontrole**

**Zrušit testování** vrátí testovanou kapitolu do stavu Návrh a smaže testovací balíček. Obsah příběhu zůstane. Tohle tlačítko v seznamu kapitol není. Otevřete dialog publikování a zvolte **Nejprve otestovat s přispěvateli**, tlačítko je na tom panelu.

**Zrušení publikace.** Vydanou kapitolu v editoru zrušit nejde, to řeší jen TalePort. Můžete ji smazat, čímž ji vezmete i čtenářům.

**Mazání.** Nesmažete kapitolu v kontrole ani poslední kapitolu příběhu. Dokud máte editor otevřený, vrácení změny smazanou kapitolu přivede zpět.

## Související

- [Vydání kapitoly](/cs/getting-started/publishing/)
- [Průběh kontroly](/cs/publishing/review-process/)
- [Práce se zpětnou vazbou z kontroly](/cs/publishing/review-feedback/)
- [Důvody zamítnutí](/cs/publishing/reasons-for-rejection/)
- [Testování a přispěvatelé](/cs/getting-started/testing-and-contributors/)
