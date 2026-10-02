---
title: Práce se zpětnou vazbou z kontroly
description: Jak čtete poznámky recenzenta, jak vyřídíte ty blokující a jak kapitolu dostanete ke schválení.
helpKey: publishing.review-feedback
status: published
sidebar:
  order: 9
---

Zpětná vazba z kontroly jsou poznámky připnuté ke kapitole. Každá je ukotvená u uzlu, často přímo u jedné komponenty v něm, a recenzent jimi říká, co je potřeba změnit, než půjde kapitola schválit. Řekněme, že skillcheck v uzlu Dveře do sklepa čte proměnnou pochodeň, kterou nic nenastavuje: recenzent u toho uzlu nechá poznámku s vysokou prioritou, vy si ji otevřete z ikony poznámek v editoru, skočíte na Dveře do sklepa, proměnnou nastavíte ve scéně před ním a odešlete kapitolu znovu.

## Kde zpětnou vazbu najdete

Poznámky jsou u kapitoly. V editoru se ve stavovém řádku objeví ikona poznámek, jakmile u kapitoly nějaká je; ukazuje, kolik jich je otevřených, a dokud je něco nepřečtené, svítí u ní tečka. Kliknutím se otevře celý seznam rozdělený po uzlech, u každé skupiny s odkazem **Přejít na uzel**. Poznámky k vybranému uzlu najdete i na kartě **Poznámky** v panelu vlastností. Na stránce příběhu má každá kapitola svůj počet nevyřešených poznámek recenzenta.

Když zmizí to, na co poznámka ukazuje, poznámka nezmizí. Pokud byl její uzel nebo komponenta smazán, přesune se do sekce **Nepřipojené poznámky** se štítkem „Odstraněný uzel“ nebo „Na úrovni kapitoly“ a s upozorněním, že odkazuje na obsah, který v grafu už neexistuje.

Samostatný psaný verdikt neexistuje. Poznámky *jsou* to rozhodnutí, a právě proto nelze kapitolu vrátit, aniž by u ní byla alespoň jedna poznámka od recenzenta. Pokud jste čekali odstavec, který kontrolu shrne, tím odstavcem jsou právě poznámky.

K rozhodnutí přijde i e-mail, česky a anglicky v jedné zprávě. E-mail o vrácení cituje nejvýš pět poznámek recenzenta, od nejstarší a bez formátování, uvede jejich celkový počet i to, kolik z nich se do zprávy nevešlo, datuje kontrolu a odkáže zpět na kapitolu v editoru. Poznámky testerů necituje nikdy, ať je jich kolik chce. Pokud váš autorský profil nemá propojený účet, e-mail se neposílá vůbec a poznámky na vás čekají v editoru.

Ke čtenářům se poznámky nedostanou, protože se do publikovaného balíčku nezapisují. Vedle poznámek recenzenta si můžete psát vlastní. Každá je formátovaný text s limitem 2000 uložených znaků, takže se do limitu počítá i formátování.

## Priorita a co blokuje schválení

Každá poznámka nese prioritu: **Vysoká**, **Normální** nebo **Nízká**. Vysoká a nízká mají v seznamu štítek. Normální je výchozí a žádný štítek nemá.

Vysoká priorita blokuje. Dokud je nevyřešená jediná poznámka s vysokou prioritou, kapitolu nelze schválit, a recenzentovi to jeho dialog napíše: „Před schválením vyřešte 5 prioritních poznámek.“ Normální a nízká priorita jsou doporučení a nesouhlasit s nimi smíte.

Pravidlo platí pro každou otevřenou poznámku s vysokou prioritou, bez ohledu na to, kdo ji napsal. Poznámka, kterou na vysokou prioritu nastavil váš vlastní tester, blokuje schválení stejně jako poznámka recenzenta, takže si seznam projděte, než odešlete znovu.

Štítek u poznámky říká, odkud přišla. **Tester** označuje poznámku přispěvatele a nese i verzi testovacího balíčku, ke které vznikla. **Recenzent** pokrývá všechno ostatní včetně poznámek, které jste napsali vy sami.

## Co se s poznámkou dá dělat

U vlastní kapitoly můžete poznámku označit jako hotovou, znovu ji otevřít, změnit jí prioritu nebo ji smazat, a to v jakémkoli stavu kapitoly. Recenzent má prostor menší: jen své vlastní poznámky, a jen dokud kapitolu drží.

Blokující poznámku tedy odblokujete třemi způsoby. Vyřešíte ji, snížíte jí prioritu pod vysokou, nebo ji smažete.

Žádný z nich není zkratka. Odblokováním se kapitola jen vrátí do fronty a recenzent ji přečte znovu. Kapitola, jejíž poznámky někdo odklikal, aniž by s nimi cokoli udělal, se vrátí podruhé, a druhé vrácení stojí víc než jedna otázka na začátku.

## Poznámky od vašich testerů

Vaši [přispěvatelé](/cs/getting-started/testing-and-contributors/) mohou psát poznámky, dokud je kapitola v testování nebo v kontrole, a jen tehdy. Objeví se ve stejném seznamu se štítkem **Tester**.

Protože u vlastní kapitoly můžete prioritu libovolné poznámky změnit, poznámka testera, se kterou nesouhlasíte, pro vás není pastí. Přečtěte ji, rozhodněte se a snižte jí prioritu, místo abyste ji nechali ležet jako blok.

## Jak projít vrácenou kapitolu

1. **Než cokoli změníte, přečtěte si všechny poznámky.** Několik poznámek často popisuje jeden problém pod povrchem a vyřešit ho jednou je lepší než šest záplat.
2. Spravte to a pak znovu projděte větve, do kterých jste zasáhli. Viz [Testování](/cs/best-practices/testing/).
3. Poznámky s vysokou prioritou vyřešte teprve tehdy, až je skutečně vyřídíte.
4. Odešlete znovu. Kapitola, která ještě nebyla venku, se vrátí jako návrh a dialog publikování začne volbou mezi testovacím balíčkem a kontrolou. Kapitola, která venku byla, zůstává ve stavu **Publikováno · v úpravách** a její tlačítko se jmenuje **Publikovat znovu**: zůstává nedostupné s popiskem „Zatím žádné změny k publikování“, dokud editor nezaznamená nepublikovanou změnu.

Pokud poznámka cituje pravidlo obsahu jeho identifikátorem, například CR-II.2, je to přesně ten standard, podle kterého se kapitola posuzuje; pod stejným identifikátorem ho najdete v [pravidlech obsahu](/cs/publishing/content-rules/).

## Když si myslíte, že rozhodnutí bylo špatné

V aplikaci žádné tlačítko na odvolání není. Napište podpoře TalePortu, uveďte příběh i kapitolu a vysvětlete, proč by se rozhodnutí mělo přehodnotit. Viz [CR-VII.1](/cs/publishing/content-rules/#cr-vii-1). Odvolat se je lepší než poslat kapitolu znovu beze změny.

## Související

- [Průběh kontroly](/cs/publishing/review-process/)
- [Důvody zamítnutí](/cs/publishing/reasons-for-rejection/)
- [Testování a přispěvatelé](/cs/getting-started/testing-and-contributors/)
