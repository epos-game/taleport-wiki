---
title: Práce se zpětnou vazbou z kontroly
description: Jak číst poznámky recenzenta, vyřídit ty blokující a dostat kapitolu ke schválení.
helpKey: publishing.review-feedback
status: published
sidebar:
  order: 9
---

Zpětná vazba z kontroly jsou poznámky připnuté ke kapitole. Každá je u nějakého uzlu, často přímo u jedné jeho komponenty. Recenzent v nich píše, co se musí změnit, než kapitolu schválí.

Čtenáři poznámky z kontroly neuvidí.

## Umístění zpětné vazby

Poznámky najdete na třech místech.

- **Stavový řádek.** Jakmile nějaké poznámky jsou, objeví se v něm ikona. Ukazuje, kolik jich je otevřených, a dokud je něco nepřečtené, svítí u ní tečka. Kliknutím otevřete seznam rozdělený po uzlech. U každé skupiny je odkaz **Přejít na uzel**.
- **Karta Poznámky.** Poznámky k vybranému uzlu jsou i na kartě **Poznámky** v panelu vlastností.
- **Stránka příběhu.** Každý řádek kapitoly ukazuje, kolik má nevyřešených poznámek recenzenta. Poznámky testerů se do počtu nepočítají. Před odesláním proto projděte seznam i kvůli poznámkám testerů, protože schválení blokuje i otevřená poznámka testera s vysokou prioritou. Když je otevřená jakákoli poznámka s vysokou prioritou, ať ji napsal kdokoli, změní se popisek u počtu na „Prioritní poznámky recenzenta je nutné vyřešit před schválením této kapitoly“.

Když smažete uzel nebo komponentu, ke které poznámka patří, poznámka zůstane. Přesune se do sekce **Nepřipojené poznámky** se štítkem „Odstraněný uzel“ nebo „Na úrovni kapitoly“. Upozornění u ní říká, že odkazuje na obsah, který v grafu už neexistuje.

Vedle poznámek recenzenta si můžete psát vlastní. Poznámka může mít nejvýš 2000 znaků. Do limitu se počítá i formátování.

## E-mail o zamítnutí

Recenzent může kapitolu vrátit, až když má aspoň jednu poznámku, která nepřišla od testera. Ke každému rozhodnutí vám přijde e-mail, česky a anglicky v jedné zprávě. E-mail o vrácení obsahuje:

- nejvýš pět poznámek recenzenta, od nejstarší a bez formátování
- celkový počet poznámek a kolik se jich do zprávy nevešlo
- datum kontroly
- odkaz zpět na kapitolu v editoru

Poznámky testerů e-mail necituje nikdy. Jde na adresu účtu, kterému patří autorský profil pod příběhem. Když adresa chybí, nepošle se nic a poznámky na vás čekají v editoru.

## Priorita a schválení

Každá poznámka má prioritu: **Vysoká**, **Normální** nebo **Nízká**. Vysoká a nízká mají v seznamu štítek. Normální je výchozí a štítek nemá.

**Vysoká priorita blokuje schválení.** Dokud je nevyřešená jediná poznámka s vysokou prioritou, kapitolu nejde schválit. Dialog recenzenta to napíše: „Před schválením vyřešte 5 prioritních poznámek.“ Normální a nízká priorita schválení neblokují.

Pravidlo platí pro každou otevřenou poznámku s vysokou prioritou, ať ji napsal kdokoli. Poznámka s vysokou prioritou od vašeho testera blokuje stejně jako poznámka recenzenta.

Štítek u poznámky říká, odkud přišla. **Tester** označuje poznámku přispěvatele a nese verzi testovacího balíčku, ke které vznikla. **Recenzent** pokrývá všechno ostatní, včetně poznámek, které jste napsali sami.

## Práce s poznámkou

U vlastní kapitoly můžete poznámku označit jako hotovou, znovu ji otevřít, změnit jí prioritu nebo ji smazat, v jakémkoli stavu kapitoly. Recenzent může upravovat jen své poznámky, a jen dokud kapitolu drží.

Blokující poznámku odblokujete jedním ze tří způsobů:

- vyřešíte ji
- snížíte jí prioritu pod vysokou
- smažete ji

Kapitola se pak vrátí do fronty a recenzent ji přečte znovu.

## Poznámky od vašich testerů

Vaši [přispěvatelé](/cs/getting-started/testing-and-contributors/) mohou psát poznámky, jen dokud je kapitola v testování nebo v kontrole. Objeví se ve stejném seznamu se štítkem **Tester**.

Prioritu libovolné poznámky u vlastní kapitoly můžete měnit. Když s poznámkou testera nesouhlasíte, snižte jí prioritu pod vysokou. Schválení pak neblokuje.

## Po zamítnutí

1. Přečtěte si všechny poznámky. Rozhodnutím jsou právě poznámky. Víc poznámek někdy popisuje jeden problém.
2. Problém opravte a znovu projděte větve, do kterých jste zasáhli. Viz [Testování](/cs/best-practices/testing/).
3. Poznámky s vysokou prioritou označte jako vyřešené.
4. Odešlete kapitolu znovu.
   - Kapitola, která ještě nebyla vydaná, se vrátí jako návrh. Dialog publikování se otevře volbou mezi testovacím balíčkem a kontrolou.
   - Kapitola, která vydaná byla, zůstává ve stavu **Publikováno · v úpravách**. Viz [Opětovné vydání](/cs/getting-started/publishing/#opětovné-vydání).

Když poznámka cituje pravidlo obsahu kódem, například CR-II.2, recenzent kapitolu posoudil podle něj. Pravidlo najdete pod stejným kódem v [Pravidlech obsahu](/cs/publishing/content-rules/).

## Odvolání proti rozhodnutí

Odvolání řeší podpora TalePortu. Napište jim, uveďte příběh i kapitolu a vysvětlete, proč by se mělo rozhodnutí přehodnotit. Viz [CR-VII.1](/cs/publishing/content-rules/#cr-vii-1). Když kapitolu odešlete znovu beze změny, vrátí se témuž recenzentovi.

## Související

- [Průběh kontroly](/cs/publishing/review-process/)
- [Důvody zamítnutí](/cs/publishing/reasons-for-rejection/)
- [Testování a přispěvatelé](/cs/getting-started/testing-and-contributors/)
