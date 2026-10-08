---
title: Testování a přispěvatelé
description: Sdílení kapitoly s dalšími čtenáři před odesláním ke kontrole.
helpKey: getting-started.testing
status: published
sidebar:
  order: 4
---

**Testování** umožňuje lidem, které vyberete, přečíst si jednu kapitolu v aplikaci EPOS stejně jako čtenáři, ještě než půjde ke kontrole. Jejich poznámky se připojí k uzlu, u kterého je napsali.

## Sestavení testovacího balíčku

1. V hlavičce editoru klikněte na **Publikovat**.
2. V dialogu **Jak chcete příběh publikovat?** zvolte **Nejprve otestovat s přispěvateli**. Druhá možnost pošle kapitolu rovnou ke kontrole.
3. V testovacím panelu klikněte na **Sestavit testovací balíček**.

Tuto volbu máte u Návrhu i u kapitoly, která se už testuje. Vydaná kapitola ji nemá. Její dialog začíná validací, protože změny v ní jdou přes kontrolu.

Testovací sestavení zastaví jen dvě věci:

- chyby v grafu
- kapitola před touto, která není ani v testování, ani vydaná. Kapitola, která čeká na recenzenta, se nepočítá. Například kapitola 1 ve stavu **Ke kontrole** blokuje testovací sestavení kapitoly 2.

Klasifikaci, cenu, titulní obrázek ani vyplněný autorský profil nepotřebujete. Chybějící mediální soubory nevadí, testovací sestavení je přeskočí.

Balíček je snímek příběhu v okamžiku sestavení. Testeři další úpravy neuvidí, dokud nesestavíte balíček znovu. Kapitolu v testování můžete upravovat stejně jako Návrh.

Ve stejném panelu je tlačítko **Zrušit testování**. Vrátí kapitolu do stavu **Návrh**, smaže testovací balíček a obsahu příběhu se nedotkne.

Tlačítka **Sestavit testovací balíček** a **Zrušit testování** může použít jen vlastník příběhu. Přispěvatel nemůže sestavit testovací balíček, zrušit testování, odeslat kapitolu ke kontrole ani měnit pořadí kapitol.

## Přispěvatelé

Tým příběhu tvoříte vy a účty, které přidáte. Spravujete ho přes **Spravovat** na detailu příběhu. Dialog nabízí dva druhy záznamů:

- **Účty v Eposu.** Vyhledáte je podle uživatele. Dostanou přístup k příběhu a mohou psát zpětnou vazbu. Testování je určené jim.
- **Člověk mimo Epos** a **Organizace.** Uvedení lidí a studií, kteří v TalePortu nepracují. Zobrazují se jen v titulcích. Nemají přístup ani zpětnou vazbu a nejde na ně nastavit fakturace.

Uvádějte i ty, kdo nakreslili pozadí nebo namluvili vyprávění. Tím dokládáte práva podle pravidla [CR-II.1](/cs/publishing/content-rules/#cr-ii-1).

U každého záznamu vedete volný seznam toho, co udělal. K dispozici je šest přednastavených podílů: autor, překladatel, vydavatel, editor, vypravěč a ilustrátor. Vy jste **Tvůrce** a ze svého příběhu se odebrat nemůžete.

**E-mail.** E-mail u člověka je nepovinný. TalePort ho používá jen k propojení s účtem Epos, až si člověk účet založí. Musí to být platná adresa a nesmí být už u příběhu, ani u jiného uvedeného člověka, ani u žádného z účtů. Jinak se uložení zastaví s hláškou „Tato e-mailová adresa není platná.“ nebo „Tento e-mail už je na příběhu uvedený.“

**Limity:**

- 30 uvedených lidí bez účtu a 10 organizací
- jméno do 100 znaků
- u každého 12 podílů po nejvýše 50 znacích

Při více než 30 lidech se uložení odmítne a hláška uvede limit. Při více než 10 organizacích hláška říká jen „Spolupracovníky se nepodařilo uložit.“ Pokud na ni narazíte, zkontrolujte počet organizací. Seznam podílů se neodmítne, jen se při uložení upraví: duplicity zmizí, co je delší než 50 znaků, se zkrátí, a co je za dvanáctým, se zahodí.

Kdo u příběhu zůstane, rozhodujete znovu při publikování. Krok **Přispěvatelé** v dialogu publikování vypisuje vaše účty. Kdo tam zůstane odznačený, ztratí přístup k dalším verzím. Jeho dřívější zpětná vazba zůstane zachovaná.

## Podmínky pro zpětnou vazbu od přispěvatelů

Přispěvatel může psát poznámky jen ve třech stavech:

- **Testování**
- **Ke kontrole**
- vydaná kapitola, která se vrátila **Ke kontrole**

Do Návrhu psát nemůže. Nemůže psát ani u dořešené kapitoly ve stavu **Publikováno**, ani ve stavu **Publikováno · v úpravách**. Do toho stavu recenzent převede zamítnutou vydanou kapitolu. Když je kapitola vydaná a nikdo ji nekontroluje, nové poznámky přijdou až po odeslání revize ke kontrole.

**Odkud poznámky přicházejí.** Poznámka z aplikace EPOS se připojí k uzlu, který tester čte, a uloží se i verze balíčku, kterou hrál. Přispěvatel, který si příběh otevře ze své knihovny, dostane editor jen pro čtení. Graf si projde, píše na kartě **Poznámky** a vidí jen své vlastní poznámky. V obou případech má jedna poznámka nejvýše 2000 znaků.

**Kde je čtete.** Otevřete kartu **Poznámky** v pravém panelu.

- Poznámky od testerů jsou označené **Tester**.
- **Přejít na uzel** vás přenese na uzel, ke kterému poznámka patří.
- Kteroukoli poznámku můžete označit jako hotovou.
- Příběh s nepřečtenými poznámkami má v knihovně odznak **Nepřečtená zpětná vazba z testování**.

**Co přispěvatel vidí.** Každou kapitolu příběhu, která není Návrh. Vidí ji zdarma, bez věkové brány a bez čekání na datum předběžného přístupu. Návrhy vidíte jen vy.

## Testování a kontrola

Otestovaná kapitola projde celou kontrolou jako každá jiná. Odesláním se přesune z **Testování** do stavu **Ke kontrole**.

## Související

- [Životní cyklus příběhu](/cs/getting-started/story-lifecycle/)
- [Vydání kapitoly](/cs/getting-started/publishing/)
- [Testování](/cs/best-practices/testing/)
- [Příprava obsahu ke kontrole](/cs/best-practices/preparing-for-review/)
