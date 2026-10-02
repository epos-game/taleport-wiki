---
title: Životní cyklus příběhu
description: Všechny stavy, kterými kapitola projde, a co se v každém z nich dá dělat.
helpKey: getting-started.story-lifecycle
status: published
sidebar:
  order: 3
---

Každá kapitola má jeden ze šesti stavů a právě stav rozhoduje o třech věcech: jestli ji můžete upravovat, jestli si ji čtenáři mohou stáhnout a jestli ji právě drží recenzent. V jednu chvíli je kapitola vždy jen v jednom stavu a posouváte ji odesláním, testovacím sestavením nebo stažením z kontroly. Řekněme, že druhá kapitola *Zatopená šachta* je ve stavu **Publikováno** a vy si všimnete, že v uzlu *Lucerna zhasne* oslovuje předák hráče špatným jménem. Opravíte repliku, kliknete na **Publikovat znovu** a čtenáři mají dál schválenou verzi, dokud recenzent tu novou neodsouhlasí.

Příběh sám žádný stav nemá. Platí za publikovaný, jakmile je venku kterákoli jeho kapitola; za příběh v kontrole, dokud jednu z nich drží recenzent; a za testovaný, dokud se z jedné sestavuje testovací balíček.

## Stavy

Názvy v prvním sloupci jsou přesně ty štítky, které u kapitoly uvidíte v seznamu kapitol.

| Stav | Kdo ji drží | Čtenáři | Co můžete upravovat |
| --- | --- | --- | --- |
| **Návrh** | Vy | Nic | Všechno |
| **Testování** | Vy, přispěvatelé čtou testovací balíček | Jen přispěvatelé | Všechno |
| **Ke kontrole** | Recenzent | Nic | V grafu nic |
| **Publikováno** | Nikdo | Schválenou verzi | Obsah, ne graf |
| **Ke kontrole** u kapitoly, která už je vydaná | Recenzent | Schválenou verzi | V grafu nic |
| **Publikováno · v úpravách** | Vy | Schválenou verzi | Obsah, ne graf |

Vydaná kapitola, kterou jste poslali znovu, nese štítek **Ke kontrole** a je obarvená přesně jako první odeslání, takže ani štítek, ani barva neprozradí, jestli ji čtenáři pořád mají. Prozradí to **Přehled**. Karta **Publikováno** vypisuje všechny vydané kapitoly a karta **V kontrole** všechny, které drží recenzent, takže kapitola, která je na obou, je venku a zároveň má ve frontě novou verzi.

Výjimkou ze sloupce Čtenáři jsou přispěvatelé. Člen týmu si otevře kteroukoli vaši kapitolu, která není koncept.

## Obsah ano, graf ne

Jakmile je kapitola venku, její struktura zmrzne. Přidat, smazat ani přepojit uzel nejde, seskupovat je také ne. Komponenty, které už v grafu jsou, vám zůstávají: upravíte text, vyměníte obrázek, publikujete znovu.

Zámek nesahá jen na graf. Uzamkne se i každá proměnná, postava a globální událost, kterou vydaná kapitola používá, a zámek povolí teprve ve chvíli, kdy ji nepoužívá žádná vydaná kapitola. Přidat novou položku vám nic nebrání, což editor u zámku sám nabízí: „Uzamčeno publikovaným příběhem. Můžete přidat novou položku.“ Větvení, které vás napadlo po vydání, patří do další kapitoly.

## Cesta k vydané kapitole

![Z konceptu vede cesta do testování i přímo ke kontrole, z testování také ke kontrole; kontrola kapitolu buď schválí a vydá, nebo ji vrátí zpět do konceptu.](/diagrams/chapter-first-publish.svg)

Testování je nepovinné a vstoupit do něj lze jen z konceptu, nebo znovu z testování, když balíček sestavíte podruhé. Kapitola, která už je venku, se odmítne: jakmile ji čtenáři mají, aktualizace jdou přes kontrolu. Kapitola v testování zůstává plně upravitelná a testeři nic nového neuvidí, dokud balíček nesestavíte znovu.

## Aktualizace vydané kapitoly

![Vydaná kapitola jde po opětovném odeslání ke kontrole. Schválení ji vrátí mezi vydané, zamítnutí ji převede do stavu Publikováno · v úpravách, odkud ji odešlete znovu.](/diagrams/chapter-update.svg)

Všimněte si směru: vydaná kapitola jde při opětovném odeslání **rovnou do kontroly**. **Publikováno · v úpravách** není mezikrok na té cestě. Je to místo, kam kapitolu odloží recenzent, když vám ji vrací.

Čtenáři mají celou dobu schválenou verzi. Odesláním se sestaví nový balíček, který čeká v kontrole; schválení ho vydá a ten předchozí odstaví. Když se kontrola zruší, čekající verze se zahodí a publikovaná zůstane venku. Vydání opravy nikdy nevezme kapitolu čtenářům z ruky.

## Zamítnutí

Zamítnutá kapitola se vrací se zpětnou vazbou recenzenta: psaným souhrnem, poznámkami připnutými ke konkrétním uzlům nebo komponentám, nebo obojím. Recenzent nemůže kapitolu zamítnout, aniž by nechal alespoň souhrn nebo jednu vlastní poznámku. Totéž vám přijde e-mailem, se souhrnem i s poznámkami.

Kde kapitola skončí, závisí na tom, jestli už byla venku:

- Kapitola, která nikdy nebyla vydaná, se vrátí jako **Návrh** a je zase plně upravitelná.
- Kapitola, která je venku, se vrátí jako **Publikováno · v úpravách**. Čtenáři ji dál mají a graf je dál zmrzlý, takže opravujete obsah a odesíláte znovu.

Tak či tak se objeví v **Přehledu** na kartě **Vyžaduje pozornost** a zpětná vazba recenzenta je odtud na jedno kliknutí.

Poznámky s prioritou **Vysoká** blokují schválení a odblokovat je musíte vy: v editoru otevřete **Poznámky** a u každé použijete **Označit jako hotové**. Běžné poznámky jsou doporučení a můžete s nimi nesouhlasit.

## Cesty zpět, které máte ve svých rukou

**Stáhnout z kontroly** vytáhne kapitolu z fronty, aniž byste čekali na zamítnutí, které už sami vidíte přicházet. První odeslání se vrátí do konceptu, vydaná kapitola zpátky mezi vydané, beze změny. Najdete to na třech místech: v seznamu kapitol, v rozbalovací nabídce u publikovacího tlačítka v editoru a v **Přehledu** na kartě **V kontrole**.

**Zrušit testování** vrátí testovanou kapitolu do konceptu a smaže testovací balíček. Obsah příběhu zůstane zachovaný. Tohle v seznamu kapitol nenajdete. Otevřete dialog publikování, zvolte **Nejprve otestovat s přispěvateli** a tlačítko je na tom panelu.

Zrušit publikaci vydané kapitoly editor nenabízí, řeší to TalePort. Smazat kapitolu nabízí, a pro čtenáře to vyjde nastejno, protože smazání vezme i všechny balíčky kapitoly. Mazání se odmítne jen u kapitoly v kontrole a u poslední kapitoly příběhu, takže publikovaná kapitola odejde bez jediného slova o čtenářích, kteří o ni přijdou. Vrácení změny v editoru ji přivede zpět, dokud ho máte otevřený. Počítejte s tím: vydaná kapitola se má aktualizovat přes kontrolu, ne stahovat.

## Související

- [Vydání kapitoly](/cs/getting-started/publishing/)
- [Průběh kontroly](/cs/publishing/review-process/)
- [Důvody zamítnutí](/cs/publishing/reasons-for-rejection/)
- [Testování a přispěvatelé](/cs/getting-started/testing-and-contributors/)
