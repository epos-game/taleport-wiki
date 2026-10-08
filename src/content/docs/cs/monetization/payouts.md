---
title: Výplaty
description: Jak si výplaty nastavit a kdy peníze opravdu dorazí.
helpKey: monetization.payouts
status: published
sidebar:
  order: 7
---
Než za kapitolu začnete účtovat peníze, vyplňte v nastavení část **Výplaty a fakturace**. Má dva řádky:

- Bankovní účet, na který vám TalePort posílá peníze.
- Daňové a fakturační údaje, které patří na doklady.

## Když údaje chybí

Dokud některý řádek chybí, TalePort placené odeslání odmítne. V kroku **Cena** nad cenovým polem uvidíte hlášku „Pro zpoplatnění této kapitoly doplňte své fakturační a výplatní údaje.“ a vedle ní tlačítko **Otevřít fakturační nastavení**.

Kapitolu zdarma odeslat můžete i tak. V kontrolním seznamu před publikací ale zůstane otevřená položka **Fakturační a výplatní údaje** a dialog publikování kapitolu neoznačí za připravenou.

## Bankovní účet

Potřebujete:

- Jméno majitele účtu, nejvýše 200 znaků.
- IBAN, nebo české číslo účtu. Stačí jedno z nich.
- SWIFT / BIC a název banky. Obojí je nepovinné.

TalePort číslo zkontroluje při uložení:

- **IBAN:** musí mít délku, která platí v dané zemi, a správný kontrolní součet.
- **České číslo:** zadejte ho ve tvaru předčíslí-číslo/kód banky, například 19-2000145399/0800.
  - Kód banky má čtyři číslice.
  - Číslo účtu má dvě až deset číslic a aspoň dvě z nich nejsou nula.
  - Předčíslí má nejvýše šest číslic a můžete ho vynechat.
  - Číslo účtu i předčíslí, pokud ho vyplníte, musí projít českou kontrolou čísla účtu.

Uložené číslo je na stránce skryté, zobrazíte ho přepínačem. Jakmile je účet uložený, řádek ukazuje **Propojeno**. Údaje o účtu jsou šifrované a slouží jen k výplatám.

## Daňové a fakturační údaje

Potřebujete:

- Zda jste fyzická osoba, nebo firma.
- Název firmy a DIČ. U firmy jsou obojí povinné.
- Fakturační e-mail. Při prvním otevření dialogu je zaškrtnuté **Použít můj přihlašovací e-mail pro faktury** a do pole se vloží vaše přihlašovací adresa. Pokud mají faktury chodit jinam, zaškrtnutí zrušte a napište jinou adresu.
- Ulici, město, PSČ a zemi.
- Daňové ID, to je nepovinné.

Seznam zemí má 28 položek: 27 členských států EU a Spojené státy. Adresu mimo ně uložit nelze.

DIČ se píše i s předvolbou země: CZ12345678, NL123456789B01. Výjimkou je Řecko. V adrese má kód GR, ale DIČ začíná na EL.

TalePort u daňového ID, DIČ a PSČ kontroluje formát podle zvolené země:

| Pole | Kontroluje se u |
| --- | --- |
| PSČ | všech zemí ze seznamu kromě Irska |
| DIČ | všech 27 členských států EU, u Spojených států ne |
| Daňové ID | Česka, Slovenska, Rakouska, Německa, Dánska, Španělska, Francie, Maďarska, Itálie, Nizozemska, Polska, Švédska a Spojených států |

Země, pro kterou není formát zapsaný, a prázdné nepovinné pole projdou bez kontroly.

## Smazání a oprava řádků

- Oba řádky mají tlačítko pro smazání, každé s vlastním potvrzením. Když kterýkoli řádek smažete, o placené publikování znovu přijdete.
- Pro placené publikování potřebujete všechna pole z výčtu výše kromě daňového ID a údaje musí projít kontrolou formátu.
- Pokud řádek vaše údaje ukazuje, ale kontrolní seznam před publikací stále hlásí **Fakturační a výplatní údaje**, uložte řádek znovu. TalePort pak označí chybějící pole.

## Kdy dostanete zaplaceno

TalePort připravuje **vyúčtování každý měsíc**, ale peníze neposílá každý měsíc. Platba přijde později, podle pravidel níže.

- **Lhůta:** Podle článku V. obchodních podmínek TalePort vyplatí váš podíl za daný měsíc nejpozději do konce **čtvrtého kalendářního měsíce** po něm, podle platebních lhůt distribučních platforem. Výnos z března je tedy vypořádaný nejpozději do konce července.
- **Minimum:** Podíl **nižší než 100 Kč** se nevyplácí. Převede se do dalšího zúčtovacího období.

## Refundace

Refundace může zasáhnout i do vyúčtování, které už proběhlo.

:::caution[Refundace se odečte z platby]
Podle článku III. obchodních podmínek musíte svůj podíl vrátit, když čtenář dostane zpět peníze za kapitolu, za kterou jste už byli zaplaceni. TalePort ho může odečíst z vaší příští platby.
:::

Když vaše smlouva skončí, může TalePort zadržet závěrečné vyúčtování, dokud se nevyřídí otevřené refundace a zpětné platby, a pak je z něj odečte. Zpětná platba je platba, kterou si vzala zpět banka čtenáře.

Vyúčtování proto může vyjít nižší než předchozí, i když byl měsíc prodejně lepší.

## Kolik dostanete

Dostanete svůj podíl na čistém výnosu zaznamenaném u vašich prodejů. Sazba vychází z aktuálního ceníku nebo z vaší individuální dohody. Co se odečítá z hrubé částky, vysvětlují [Autorské honoráře](/cs/monetization/royalties/).

Čísla na [stránce se statistikami](/cs/monetization/statistics/) jsou jen orientační. Nezohledňují refundace ani zpětné platby, které dorazí až po nákupu.

## Související

- [Autorské honoráře](/cs/monetization/royalties/)
- [Statistiky příběhu](/cs/monetization/statistics/)
- [Podmínky zpeněžení](/cs/monetization/requirements/)
