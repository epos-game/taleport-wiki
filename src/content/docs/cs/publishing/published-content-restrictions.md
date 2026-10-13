---
title: Omezení u vydaného obsahu
description: Co se po publikování kapitoly uzamkne a co můžete i nadále volně upravovat.
helpKey: publishing.published-restrictions
status: published
sidebar:
  order: 11
---

Po vydání kapitoly se zamkne její struktura. Text, obrázky a zvuk můžete dál upravovat.

| Zamčeno | Dál lze upravovat |
| --- | --- |
| Graf: uzly a propojení | Text replik dialogu a textových bloků |
| Postavy, proměnné, vlastnosti a globální události, které kapitola používá | Obrázky a zvukové soubory v existujících komponentách |
| Snížení věkového doporučení, odebrání obsahových štítků | Cokoli nového, co přidáte: postavy, proměnné, vlastnosti, události |

Po úpravách kapitolu publikujte znovu. Projde [kontrolou](/cs/publishing/review-process/) jako každé jiné odeslání.

## Graf

Dokud je kapitola vydaná, nemůžete:

- přidávat, mazat, přepojovat ani přeskupovat uzly
- přejmenovávat uzly
- přidávat, mazat ani přerovnávat repliky dialogu, volby, události ani komponenty uvnitř uzlu

Upravit můžete to, co už v uzlu je: text repliky, textový blok, obrázek nebo zvukový soubor, který komponenta používá.

Nad plátnem je pruh **Publikovaná kapitola** s textem *Upravte obsah (dialogy, text, obrázky a zvuk) a znovu publikujte. Graf příběhu a stávající postavy, proměnné a statistiky zůstávají uzamčené; nové však můžete přidávat.* Ve stavovém řádku je zkrácená verze, *Publikováno: struktura grafu uzamčena, obsah lze upravovat*.

![editor s otevřenou vydanou kapitolou](/screens/cs/publishing/published-chapter-banner.png)

Zámek může zrušit jen TalePort, a to zrušením publikace kapitoly.

## Postavy, proměnné, vlastnosti a globální události

Vydáním se zamknou tyto položky:

- postavy, které v kapitole pronesou repliku dialogu
- proměnné, které kapitola mění v události nebo kontroluje v podmínce, a proměnné vlastností zamčené postavy
- každá globální událost příběhu spolu s proměnnou, na kterou událost cílí

Zamčenou položku nemůžete upravit ani smazat.

- Vlastnosti jsou proměnné, takže se zamykají stejně.
- Postava v uzlu bez repliky zůstává upravitelná.
- Globální události se zamykají v celém příběhu, i když je vydaná kapitola nikdy nespustí.
- Nové postavy, proměnné, vlastnosti i události můžete přidávat kdykoli.

Popisek u visacího zámku vypíše kapitoly, které položku drží, číslem i názvem, a dodá: *Odemkne se, jakmile ho žádná publikovaná kapitola nebude používat. Můžete přidat novou položku.*

Odebrání položky z vydané kapitoly by změnilo její strukturu. Zámek proto obejdete jen tak, že vedle staré položky přidáte novou.

## Klasifikace

:::caution[Klasifikace nejde vrátit]
Jakmile je vydaná kterákoli kapitola příběhu, dvě části klasifikace nejde vrátit zpět. Obě platí pro celý příběh.
:::

- [Věkové doporučení](/cs/publishing/age-ratings/) můžete zvýšit, ne snížit. Možnosti pod uloženou hodnotou jsou zašedlé s popiskem *Věkové doporučení nelze snížit, když je kapitola vydaná.*
- [Obsahové štítky](/cs/publishing/content-labels/) můžete přidat, ne odebrat. Štítek, který už na příběhu je, je zašedlý s popiskem *Tento štítek nelze odebrat, když je kapitola vydaná.*

Prohlášení o AI se nezamyká a můžete ho dál upravovat.

## Úprava vydané kapitoly

Úprava stav kapitoly nemění. Kapitola zůstává **Publikováno** a čtenáři mají dál svou verzi.

1. Proveďte změny. Tlačítko **Publikovat znovu** se aktivuje.
2. Odešlete kapitolu. Nová verze jde do kontroly.
3. Stará verze zůstává dostupná, dokud ji nenahradí schválení.

Když recenzent kapitolu zamítne, dostane stav **Publikováno · v úpravách**. Pro čtenáře zůstává dostupná, graf zůstává zamčený a obsah můžete upravovat.

## Stažení kapitoly

Jsou tři různé akce a jen první je vaše.

| Akce | Kdo | Co se stane |
| --- | --- | --- |
| Stažení z kontroly | Vy | Kapitola opustí kontrolu. Vydaná kapitola se vrátí do stavu **Publikováno**, beze změny a dál dostupná čtenářům. Kapitola odeslaná poprvé se vrátí do stavu **Návrh**, kde ji můžete upravit a odeslat znovu. |
| Zrušení kontroly | Recenzenti a administrátoři | Verze čekající na kontrolu se zahodí. Publikovaná verze zůstane dostupná. |
| Zrušení publikace | Jen administrátoři | Čtenáři ztratí přístup a nejde to vrátit. Kapitola se vrátí do stavu **Návrh** s nedotčeným grafem, obsahem i poznámkami. Můžete ji upravit a odeslat znovu. |

Kapitolu stáhnete v hlavičce editoru, v dialogu kapitol nebo v přehledu. Jde to, dokud je kapitola v kontrole, i když ji recenzent už otevřel. Stiskněte **Stáhnout z kontroly** a v dialogu *Stáhnout z kontroly?* potvrďte tlačítkem **Stáhnout**. Recenzent kapitolu přestane držet.

## Moderace po vydání

[CR-V.1](/cs/publishing/content-rules/#cr-v-1) dovoluje posoudit vydaný obsah znovu, když někdo zjistí nebo nahlásí porušení pravidel.

Čtenáři hlásí z aplikace EPOS, ne z editoru. TalePort autora o hlášení neinformuje. Hlášení:

- má jeden ze sedmi důvodů: explicitní obsah, nenávistná řeč, extrémní násilí, nelegální obsah, nesprávně klasifikováno, spam, jiné
- může mít až tisíc znaků vlastního textu čtenáře
- míří na příběh, ne na kapitolu

Hlášení posoudí TalePort.

Širší výčet zásahů uvádějí [CR-VI.1](/cs/publishing/content-rules/#cr-vi-1) a [CR-VIII.1](/cs/publishing/content-rules/#cr-viii-1). Sahá od vynucené opravy věkového doporučení přes skrytí příběhu až po omezení účtu. Pravidla si je jen vyhrazují. Uplatňuje je TalePort, v editoru je nenastavujete.

Když smažete autorský účet, vaše příběhy se stáhnou z nabídky. Čtenáři, kteří už kapitolu vlastní, si ji dál mohou stáhnout.

## Související

- [Životní cyklus příběhu](/cs/getting-started/story-lifecycle/)
- [Průběh kontroly](/cs/publishing/review-process/)
- [Proměnné](/cs/story-editor/variables/)
- [Věkové doporučení](/cs/publishing/age-ratings/)
