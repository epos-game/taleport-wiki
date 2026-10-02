---
title: Věkové doporučení
description: Jak vybrat správnou kategorii, co každá z nich dovoluje a proč se dá jen zvyšovat.
helpKey: publishing.age-ratings
status: published
sidebar:
  order: 5
---

Věkové doporučení je jedna ze čtyř hodnot, **7+**, **12+**, **16+** nebo **18+**, a nastavujete ji příběhu v kroku **Klasifikace** dialogu publikování. Čtenáři říká, do čeho jde, a zároveň rozhoduje, kdo se k příběhu vůbec dostane. Hodnoťte podle toho nejtvrdšího, co v příběhu je: vesnická detektivka, která je mírná až do třetí kapitoly, kde v uzlu *Sklep u mlýna* někdo vykrvácí, je od prvního odeslání příběh 16+, ne příběh 12+ s jednou výjimkou. Dokud hodnocení nevyberete, nelze odeslat žádnou kapitolu.

## Pravidlo, na kterém záleží nejvíc

**Hodnoťte podle nejextrémnějšího obsahu kdekoli v příběhu, ne podle průměru.** Jedna scéna realistického násilí v jinak mírném příběhu určuje hodnocení celku. A protože hodnocení patří příběhu, a ne kapitole, zahrnuje i kapitoly, které jste ještě nenapsali. Série, která ve čtvrté kapitole přituhne, je příběh hodnocený podle čtvrté kapitoly.

Hodnocení nikdy neudělá ze zakázaného obsahu povolený. Doporučení 18+ nepovoluje nic z [článku I](/cs/publishing/content-rules/#cr-i).

## Zvýšit ano, snížit ne

Jakmile je kterákoli kapitola příběhu venku, posouvá se hodnocení jen jedním směrem. Všechny štítky pod uloženou hodnotou zešednou a nápověda u nich vysvětlí proč: *Věkové doporučení nelze snížit, když je kapitola vydaná.* Zvýšit ho můžete kdykoli. Pokud se nižší hodnota přesto dostane na server, vrátí se chyba *Věkové doporučení nelze snížit, jakmile je kapitola vydaná.*

Poslední chvíle, kdy se dá jít dolů, je okamžik předtím, než vyjde vaše první kapitola. Čtenář, který si kapitolu koupil podle odznaku 12+, by neměl zjistit, že se mu týž příběh pod rukama překlasifikoval. Proto cesta zpátky není.

![řádek Věkové doporučení v kroku Klasifikace dialogu publikování, se čtyřmi věkovými štítky a poznámkou pod vybraným](/screens/cs/publishing/classification-age-row.png)

## Kde se hodnocení kontroluje a kdy se ukládá

V kontrolním seznamu kroku **Validace** řádek pro věkové doporučení není. Hlídá si to sám krok Klasifikace: tlačítko **Další** zůstane neaktivní, dokud nevyberete hodnocení a nezaškrtnete potvrzení lidského autorství, a nápověda u něj říká *Před pokračováním vyberte věkové doporučení a potvrďte lidské autorství.* Při odeslání si totéž ověří i server a odmítne ho hláškou *Před publikováním je nutné zvolit věkové doporučení.*

Tlačítko Další zároveň ukládá. Hodnocení, obsahové štítky i prohlášení o AI se do příběhu zapíšou hned, takže pozdějším zavřením dialogu se nic nevrátí zpátky. Dokud není venku žádná kapitola, můžete krok otevřít znovu a vybrat jinak. Hodnota uložená ve chvíli, kdy vyjde vaše první kapitola, se stává spodní hranicí.

## Kategorie

Aplikace pod vybranou možností ukáže jednořádkový souhrn. Závazné jsou delší definice v [článku IV](/cs/publishing/content-rules/#cr-iv) pravidel obsahu.

### 7+, pro všechny

V aplikaci: *Vhodné pro všechny, včetně malých čtenářů.*

[CR-IV.1](/cs/publishing/content-rules/#cr-iv-1). Mírné fantasy nebo kreslené násilí, mírné nebezpečí, témata vhodná pro děti, nevinná náklonnost nebo romantika. **Ne**: silné vulgarismy, realistické násilí, sexuální témata, užívání drog.

### 12+, mírná témata

V aplikaci: *Mírná témata, krátké násilí nebo fantasy nebezpečí.*

[CR-IV.2](/cs/publishing/content-rules/#cr-iv-2). Mírná akce nebo boj, umírněné fantasy násilí, napětí a nebezpečí, příležitostné mírné vulgarismy, romantika a líbání, mírné odkazy na dospělejší témata. **Ne**: explicitní sexuální obsah, silně grafické násilí, obsah určený výhradně dospělým.

### 16+, dospělejší témata

V aplikaci: *Silné výrazy, násilí nebo témata pro dospělé.*

[CR-IV.3](/cs/publishing/content-rules/#cr-iv-3). Silné vulgarismy, realistické násilí, horor, témata alkoholu nebo drog, smutek, závislost, dospělé vztahy, neexplicitní sexuální odkazy. **Ne**: pornografický nebo explicitní sexuální obsah.

### 18+, pouze pro dospělé

V aplikaci: *Pouze pro dospělé.*

[CR-IV.4](/cs/publishing/content-rules/#cr-iv-4). Silné násilí, znepokojivá nebo psychologicky náročná témata, silné vulgarismy, témata drog nebo alkoholu, nahota, sexuální témata, neexplicitní zobrazení konsenzuální sexuální aktivity mezi dospělými. **Ne**: pornografický obsah, který zůstává zakázaný při každém hodnocení.

## Kdo co uvidí

Čtenář, který není ve vašem týmu, se dostane jen k příběhům ve svém věkovém pásmu a pod ním. Pásmo se počítá z data narození na jeho účtu a kontrola platí pro prohlížení i pro otevření příběhu přímo.

| Čtenář | Nejvyšší hodnocení, které uvidí |
| --- | --- |
| Do 12 let | 7+ |
| 12 až 15 let | 12+ |
| 16 až 17 let | 16+ |
| 18 let a víc | 18+ |
| Bez data narození na účtu | 7+ |

Pod 18 let je tabulka celé pravidlo. Nad ní kontrola končí: čtenář v pásmu 18+ vidí všechna hodnocení včetně příběhu, který hodnocení nastavené nemá, a totéž platí pro administrátory a recenzenty. Kdo je v nižším pásmu, nevidí z nehodnoceného příběhu nic. Mimo to stojí veřejný výpis příběhů, který API poskytuje vně aplikace; ten se podle věkového pásma nefiltruje.

Zužuje to publikum víc, než se zdá. Čtenář, který datum narození nikdy nevyplnil, vidí příběhy 7+ a nic jiného.

## Když si nejste jistí

Vyberte vyšší kategorii. Správnost věkového hodnocení patří podle [CR-V.1](/cs/publishing/content-rules/#cr-v-1) k tomu, co kontrola posuzuje, takže recenzent, kterému hodnocení přijde nízké, vrátí kapitolu s poznámkami, a vás to stojí celé jedno kolo kontroly. Po vydání zbývá čtenáři jediná páka, hlášení: jedním ze sedmi důvodů je **Nesprávně klasifikováno**. Moderátor pak hlášení uzavře jako vyřešené, nebo jako nerelevantní, připojí k rozhodnutí interní poznámku a vám se o něm nic neukáže. Co bude s příběhem dál, řeší [CR-VI.1](/cs/publishing/content-rules/#cr-vi-1): TalePort může požadovat změnu věkového hodnocení, obsah skrýt nebo omezit účet. Nic z toho není tlačítko v aplikaci.

Příliš vysoké hodnocení vás stojí čtenáře a po vydání první kapitoly se nedá vzít zpět. To je důvod rozhodnout se před prvním odesláním poctivě, ne důvod tipovat nízko.

## Související

- [Obsahové štítky](/cs/publishing/content-labels/)
- [Pravidla obsahu, článek IV](/cs/publishing/content-rules/#cr-iv)
- [Metadata příběhu](/cs/publishing/story-metadata/)
- [Požadavky na vydání](/cs/publishing/publishing-requirements/)
