---
title: Struktura příběhu
description: Tvar větvené kapitoly, kde větvit a co se po publikování zamkne.
helpKey: best-practices.structure
status: published
sidebar:
  order: 1
---

Kapitola je graf: uzly s obsahem, propojení mezi nimi a místa, kde se čtenář rozhoduje. Podle jeho tvaru se řídí, kolik toho napíšete, kolik bude kapitola stát a co po publikování ještě změníte.

## Větvení a opětovné spojení

Stavte kapitolu jako sled scén. Každá scéna se uvnitř rozvětví a před další scénou se větve zase sejdou.

- Větve, které se nespojí, zdvojnásobí psaní u každého rozhodnutí.
- Větve, které se spojí, práci nezvětšují.

Mezi scénami se nepřenáší cesta, ale [stav](/cs/story-editor/variables/), tedy hodnoty proměnných. Čtenáři, kteří volili různě, dorazí do stejné scény a jedna proměnná má u nich jinou hodnotu.

![Scéna 1 se větví na A a B, obě vedou do Scény 2. Scéna 2 se větví na C a D, obě vedou do Scény 3.](/diagrams/branch-and-reconverge.svg)

## Umístění větvení

Příběh rozdělte na samostatné cesty jen na jednom nebo dvou místech. Každá cesta se musí znovu spojit, nebo skončit. Čtyři samostatné cesty v plné délce jsou čtyři kapitoly, které musíte napsat, otestovat a dát ke kontrole.

[Cena](/cs/monetization/pricing/) se počítá z **nejdelšího jednotlivého průchodu**, ne ze všeho, co kapitola obsahuje. Čtyři souběžné cesty stejné délky cenu nevynásobí čtyřmi, TalePort změří jedinou. Ostatní se do ceny promítnou jen přes bonus za interaktivitu, který je zastropovaný.

Bonus se počítá z rozhodovacích bodů, ne z objemu. Obsah bez rozhodování k němu přidá skoro nic. Čtyři dlouhé souběžné cesty mají dohromady jediný rozhodovací bod. Hlavní cesta, která se větví a spojuje, jich má na stejnou hodinu desítky.

## Co se po publikování zamkne

**Jakmile je kapitola vydaná, struktura jejího grafu se zamkne.** Stavový řádek píše: „Publikováno: struktura grafu uzamčena, obsah lze upravovat“.

| Můžete | Nemůžete |
| --- | --- |
| Přepsat text uzlu | Přidat nebo odebrat uzel |
| Upravit repliku dialogu | Přidat nebo odebrat propojení |
| Vyměnit obrázek nebo zvukový soubor | Přidat nebo odebrat komponentu, možnost volby, repliku dialogu ani podmínku přepínače |
| Poslat kapitolu znovu ke kontrole | Cokoli upravovat, dokud kapitolu drží recenzent |

Dokud kapitolu drží recenzent, je editor jen pro čtení. Dokud odeslání nestáhnete, nic neupravíte.

Zamknou se i postavy, proměnné a globální události. Zámek platí pro celou položku, ne jen pro název.

- **Postava:** zamkne se, jakmile v nějaké vydané kapitole pronese repliku dialogu. Postava v uzlu bez repliky zůstává upravitelná.
- **Proměnná:** zamkne se, jakmile ji vydaná kapitola mění v události nebo kontroluje v podmínce. Proměnné vlastností zamčené postavy se zamknou s ní.
- **Globální událost:** všechny události příběhu se zamknou, jakmile je vydaná jakákoli kapitola, i ty, které tato kapitola nespouští. Zamkne se také proměnná, na kterou událost cílí.

Nové postavy, proměnné a globální události můžete přidávat kdykoli. Podrobnosti najdete v článku [Omezení vydaného obsahu](/cs/publishing/published-content-restrictions/).

První vydaná kapitola tedy určí, jaké postavy, proměnné a globální události příběh má. 

:::caution[Proměnné založte předem]
Proměnné, které budou potřeba v pozdějších kapitolách, založte před odesláním první kapitoly.
:::

## Délka

TalePort počítá délku z textu, rychlostí 1000 znaků prostého textu za minutu. U uzlu bez textu se použije dabing, potom filmová sekvence. Platí první z těch tří, která není nula.

Hudba na pozadí, okolní zvuk ani video pozadí se do délky nepočítají. Kapitola postavená jen na nich naměří nula minut a nejde odeslat.

Z měření vycházejí dva součty:

- [Cena](/cs/monetization/pricing/) se bere z nejdelší cesty od uzlu Začátek k uzlu Konec.
- [Kvalifikace pro placený obsah](/cs/monetization/requirements/) se bere z veškerého obsahu kapitoly. Vyžaduje 20 minut v jedné kapitole, ne sečtených z několika.

Příklad: krátká hlavní cesta se čtyřmi desetiminutovými větvemi se pro kvalifikaci počítá jako 40 minut. TalePort ji ale ocení jako desetiminutovou kapitolu.

## Názvy uzlů a skupiny

**Názvy.** Karta uzlu na plátně a hledání uzlů ukážou začátek textu uzlu zkrácený na 40 znaků. Když text chybí, ukážou „Uzel 12“.

Panel Problémy, dialog publikování a poznámky recenzenta tento úryvek nepoužijí a ukážou jen „Uzel 12“. Když vyplníte **Název uzlu**, ukážou „Uzel 12 - “ a za tím název.

**Skupiny.** Hotové scény sbalte do skupin. Skupina je jeden obdélník na plátně s ucelenou částí příběhu. Sbalená skupina skrývá svůj obsah, sbalujte proto jen hotové scény.

- Uzel Konec uvnitř skupiny je výstupní port obdélníku, takže kapitolu neuzavře.
- Uzly Začátek a Konec nejde přesunout do skupiny, takže hlavní cesta kapitoly zůstává na nejvyšší úrovni plátna.
- Uzly Začátek a Konec, které už ve skupině jsou, vznikají z předvolby **Skupina** nebo z **Seskupit výběr**. Každý z nich je port obdélníku.

Další pravidla a to, co skupina hlásí, dokud je sbalená, najdete ve [Skupinách](/cs/story-editor/groups/).

## Signalizace rozhodnutí

Ukažte čtenáři, že se jeho volba zapsala. Může se na ni později odvolat postava, nebo může další scéna začít větou, kterou druhý čtenář neuvidí.

## Související

- [Interaktivita](/cs/best-practices/interactivity/)
- [Graf příběhu](/cs/story-editor/story-graph/)
- [Proměnné](/cs/story-editor/variables/)
- [Omezení vydaného obsahu](/cs/publishing/published-content-restrictions/)
