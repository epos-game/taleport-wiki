---
title: Vydání kapitoly
description: Dialog publikování krok za krokem a co se děje po odeslání.
helpKey: getting-started.publishing
status: published
sidebar:
  order: 5
---

Publikování pošle kapitolu recenzentovi TalePortu, ne čtenářům. Dialog publikování ukáže, co chybí, kolik kapitola bude stát a odkdy ji čtenáři dostanou. Mezitím můžete pracovat dál.

## Požadavky na odeslání

Dialog se otevře na kroku **Validace**. Má dva seznamy, **Hotovo** a **Vyžaduje pozornost**. Odeslání zastaví tyto položky:

- **Autorský profil:** zobrazované jméno, životopis a avatar.
- **Příběh:** název, popis, titulní obrázek, žánr a aspoň jeden štítek.
- **Tato kapitola:** popis, graf bez chyb a aspoň jeden dosažitelný konec označený jako **Konec kapitoly**.
- **Měřitelná cesta:** TalePort vezme nejdelší trasu, kterou může čtenář projít. Kontrola neprojde, když ta trasa trvá nula minut, nebo když je celková délka kapitoly kratší než ona. V seznamu se položka jmenuje **Graf příběhu obsahuje přehratelný obsah**.
- **Předchozí kapitoly:** každá musí být vydaná nebo v kontrole. Kapitola, kterou jste jen testovali, se nepočítá. Pravidla pořadí najdete v článku [Struktura příběhu a kapitoly](/cs/getting-started/story-structure-and-chapters/).

Co každý řádek kontroluje a jaké tlačítko nabízí, vysvětluje článek [Požadavky na vydání](/cs/publishing/publishing-requirements/).

Věkové doporučení a potvrzení lidského autorství nastavíte později, v kroku **Klasifikace**.

:::caution[Označte Konec kapitoly]
Uzel Konec bez této značky jen uzavírá větev. Pokud ji nemá žádný dosažitelný konec, čtenáři kapitolu nedokončí a příběh nemůže pokračovat další kapitolou. Značku zapnete přímo v uzlu Konec. Více v článku [Koncové uzly](/cs/story-editor/end-nodes/).
:::

**Fakturační a výplatní údaje** jsou na stejném seznamu. Blokují jen **placenou** kapitolu. Kapitolu zdarma odešlete i bez nich. Dokud údaje chybí, zůstávají ve **Vyžaduje pozornost** a názvy dalších kroků jsou zašedlé. K souhrnu se dostanete tlačítkem **Další**.

## Dialog publikování

U kapitoly ve stavu Návrh nebo Testování se dialog nejdřív zeptá, co chcete:

- sestavit soukromý testovací balíček pro přispěvatele, nebo
- kapitolu odeslat ke kontrole.

Více v článku [Testování a přispěvatelé](/cs/getting-started/testing-and-contributors/). U vydané kapitoly se tato otázka přeskočí, protože testovat jde jen před vydáním.

Cesta ke kontrole má sedm kroků:

1. **Validace**
2. **Metadata**
3. **Klasifikace**
4. **Cena**
5. **Předběžný přístup**
6. **Přispěvatelé**
7. **Souhrn**: poslední krok s tlačítkem **Publikovat**

Tlačítko **Další** je v kroku **Validace** zašedlé, dokud nevyřešíte všechno, co vás blokuje:

- mezeru v profilu
- chybu v grafu
- chybějící **Konec kapitoly**
- kapitolu bez přehratelného obsahu
- předchozí kapitolu, která není vydaná ani v kontrole

Bublina říká „Před pokračováním vyřešte blokující problémy uvedené výše.“ Zbytek doplníte v dalších krocích. Jakmile validace kapitolu uzná za připravenou, všechny kroky se odemknou a můžete skočit rovnou na souhrn.

Dva kroky ukládají do příběhu ještě před odesláním:

- **Další** v kroku **Metadata** uloží název, popis, žánr a štítky příběhu a také název a popis této kapitoly.
- **Další** v kroku **Klasifikace** uloží věkové doporučení, tagy obsahu a prohlášení o AI.

Když dialog zavřete bez odeslání, tyto změny zůstanou.

## Klasifikace

Tento krok nastavuje vlastnosti **příběhu**, ne této kapitoly. Odpovídáte tedy jednou za celý příběh.

- **Věkové doporučení:** 7+, 12+, 16+ nebo 18+. Více v článku [Věkové doporučení](/cs/publishing/age-ratings/).
- **Tagy obsahu** (nepovinné; jinde je najdete jako obsahové štítky): násilí, krev, vulgarismy, horor, sexualita, citlivá témata. Více v článku [Obsahové štítky](/cs/publishing/content-labels/).
- **Obsah generovaný AI:** prohlášení zvlášť pro obrázky, hudbu, mluvené slovo a video. Označit jde jen druhy médií, které příběh obsahuje. Ostatní jsou zašedlé s textem „Váš příběh tento druh média neobsahuje.“ Prohlášení vyžaduje pravidlo [CR-III.2](/cs/publishing/content-rules/#cr-iii-2). Nepravdivé prohlášení je samo porušením pravidel ([CR-III.4](/cs/publishing/content-rules/#cr-iii-4)).
- **Lidské autorství:** potvrzení, že text napsal člověk a nevygenerovala ho AI. Bez něj kapitolu neodešlete.

:::caution[Přepínače AI jsou zapnuté]
Přepínače pro obrázky, hudbu a mluvené slovo jsou u médií, která příběh obsahuje, od začátku **zapnuté**. Když klasifikaci neotevřete, příběh prohlásí všechno za vygenerované AI. Vypnutím prohlásíte, že dané médium vytvořil člověk, a tím se zvýší i doporučená cena.
:::

Jakmile je vydaná kterákoli kapitola příběhu, dvě nastavení se uzamknou:

- Věkové doporučení můžete zvýšit, ale ne snížit.
- Tagy obsahu můžete přidávat, ale ne odebírat ty, které už příběh má.

## Cena

Kapitola je zdarma, nebo placená. Více v článku [Obsah zdarma a placený](/cs/monetization/free-and-paid-content/).

Za kapitolu můžete účtovat, jen když platí obojí:

- Jste **kvalifikovaný autor** nebo aktivní partner.
- Máte kompletní fakturační a výplatní údaje.

Kvalifikaci získáte automaticky, když vydáte jednu schválenou kapitolu **zdarma** s aspoň 20 minutami unikátního obsahu. Několik kratších kapitol se nesčítá. Požádat o ni můžete i e-mailem na support@epos.games. Dokud ji nemáte, krok s cenou řekne, co chybí, a kapitola zůstane zdarma. Hranici a způsob měření najdete v článku [Podmínky zpeněžení](/cs/monetization/requirements/#cesta-ke-kvalifikaci).

U placené kapitoly TalePort spočítá z jejího obsahu doporučenou cenu a nabídne rozpětí:

- Nejnižší cena je polovina doporučené ceny, nejméně však 9 EPS. To je minimum pro jakoukoli placenou kapitolu.
- Nejvyšší cena je 299 EPS.
- Nad posuvníkem jsou předvolby **50 %**, **Doporučeno** a **Max**. Částku můžete zadat i ručně.

Ceny jsou v EPS, což je měna uvnitř aplikace. 1 EPS = 1 Kč, tedy asi 0,04 €. Více v článku [Ceny](/cs/monetization/pricing/).

Když kapitolu odešlete znovu, TalePort zruší cenu upravenou recenzentem a použije vaši částku.

## Předběžný přístup

Podporovatelé od úrovně Vizionář výš čtou kapitolu o 7 dní dřív než ostatní. V kroku **Předběžný přístup** nastavíte datum, kdy se toto okno otevře.

- **Datum zvolíte:** čtenáři s předběžným přístupem dostanou kapitolu od toho dne. Ostatní ji dostanou o 7 dní později.
- **Nezvolíte nic:** datem je okamžik schválení, opět s odstupem 7 dní.
- Zvolené datum musí být nejméně 14 dní dopředu, protože i kontrola může trvat tak dlouho.

Podporovatelem se čtenář stane uplatněním kódu z crowdfundingové podpory. Předběžný přístup má jen úroveň Vizionář a výš. Podporovatel na úrovni Zakladatel čeká 7 dní jako všichni ostatní.

Datum jde nastavit, jen dokud kapitola není vydaná. Vydaná kapitola si drží data, se kterými vyšla.

## Přispěvatelé

V kroku **Přispěvatelé** určíte, kdo u příběhu zůstane po vydání této verze.

- Kdo zůstane odznačený, ztratí přístup k dalším verzím. Zpětná vazba, kterou už napsal, zůstane.
- Tvůrce odznačit nejde.
- Lidé uvedení bez účtu Epos se zobrazují, ale nejdou vybrat.

## Zpracování po odeslání

Po kliknutí na **Publikovat** se kapitola zařadí do fronty ke kontrole. Dialog můžete zavřít. Tlačítko ukáže **Ve frontě…** a pak **Zpracováváme…** a hlášení oznámí, že sestavení skončilo nebo selhalo.

- Pro jeden příběh může běžet jen jedno publikování. Když spustíte druhé, TalePort vás požádá, ať počkáte na dokončení prvního.
- Neúspěšné sestavení vrátí kapitolu do původního stavu s příznakem nevydaných změn. Pokud selhalo kvůli vašemu obsahu, včetně chybějících médií, opravte ho a odešlete znovu. Pokud selhalo z přechodné příčiny, TalePort to zkusí znovu sám.

Sestavení může selhat i proto, že příběh odkazuje na mediální soubory, které už neexistují. Dialog je pak vypíše podle místa použití (**V uzlu**, **Titulní obrázek příběhu**, **Avatar postavy** nebo **Globální událost**). Dole jsou tlačítka **Zavřít** a **Publikovat bez těchto souborů**. Tohle se stane jen při odeslání ke kontrole, protože testovací sestavení chybějící média přeskakuje. Co každý řádek nabízí, vysvětluje oddíl [Co odeslání neblokuje](/cs/publishing/publishing-requirements/#co-odeslání-neblokuje).

Dokud je kapitola v kontrole, editor se otevře jen pro čtení. **Stáhnout z kontroly** kapitolu vrátí okamžitě:

- První odeslání se vrátí do stavu Návrh.
- Už vydaná kapitola se vrátí do stavu Publikováno.

Tlačítko najdete v seznamu kapitol, v nabídce u tlačítka **Publikovat** a v **Přehledu** na kartě **V kontrole**.

Rozhodnutí přijde i e-mailem. Schválení obsahuje obě data dostupnosti, zamítnutí poznámky recenzenta. Co recenzent kontroluje a jak dlouho to trvá, popisuje článek [Průběh kontroly](/cs/publishing/review-process/).

## Opětovné vydání

Tlačítko se jmenuje **Publikovat znovu**, když jste kapitolu už odeslali a nevrátila se do stavu Návrh. Když první odeslání stáhnete nebo ho recenzent zamítne dřív, než kapitola vyšla, vrátí se do stavu Návrh a tlačítko se zase jmenuje **Publikovat**.

Tlačítko je aktivní, jen když je co poslat. Když je zašedlé, bublina řekne proč:

- „Zatím žádné změny k publikování“ znamená, že poslední změnu jste už odeslali.
- „Před odesláním ke kontrole přidejte aspoň jeden uzel“ znamená, že graf kapitoly je prázdný.

## Související

- [Příprava obsahu ke kontrole](/cs/best-practices/preparing-for-review/)
- [Požadavky na vydání](/cs/publishing/publishing-requirements/)
- [Průběh kontroly](/cs/publishing/review-process/)
- [Životní cyklus příběhu](/cs/getting-started/story-lifecycle/)
- [Pravidla obsahu](/cs/publishing/content-rules/)
- [Zásady a pravidla pro příběhy](/cs/publishing/story-guidelines/)
