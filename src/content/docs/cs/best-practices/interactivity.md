---
title: Interaktivita
description: Volby, Switch a ověření dovednosti a o čem rozhoduje které z nich.
helpKey: best-practices.interactivity
status: published
sidebar:
  order: 2
---

Interaktivita je část kapitoly, která reaguje na rozhodnutí čtenáře. Stavíte ji ze tří druhů přechodů: z volby, Switche a ověření dovednosti.

## Volby a následky

Volba má smysl, jen když se po ní něco liší, třeba text další obrazovky nebo hodnota proměnné. Možnosti, které se hned zase sejdou a nic nezmění, nemají žádný následek.

Následek nemusí měnit děj. Může to být věta, která zmíní, co čtenář udělal, nebo proměnná, kterou přečte pozdější scéna.

## Tři způsoby větvení

| Přechod | Rozhoduje | Použití |
| --- | --- | --- |
| **Volba** | Čtenář | Rozhodnutí, které dělá čtenář. |
| **Switch** | Příběh podle svých proměnných | Reakce na to, co se nasbíralo. |
| **Ověření dovednosti** | Vlastnost, případně i hod kostkou | Zkouška, která může dopadnout dobře i špatně. |

Volba čeká na čtenáře. Switch proběhne sám podle proměnných.

Každá větev musí někam vést. Cesty z uzlu ven se jmenují výstupní porty. Výstupní port je každá z těchto věcí:

- každá možnost volby
- každá podmínka Switche a jeho port **Výchozí**
- oba výsledky ověření dovednosti

Výstupní port bez propojení blokuje publikování: *Má výstupní port, který není připojen k žádnému uzlu.*

## Požadavky u volby

Volba bez požadavků je dostupná vždy. Panel to napíše: *Bez podmínek, vždy dostupné.*

S požadavky se možnost otevře jen čtenáři, jehož proměnné je splňují. Přepínač **Požadovat** určuje, jestli musí platit **Všechny** požadavky, nebo **Libovolný** z nich. Objeví se, až má volba dva požadavky.

Požadavek možnost neskryje. V náhledu je nesplněná možnost se zámkem a popiskem *Podmínky nesplněny. Kliknutím obejít pro ladění*.

Chcete-li možnost skrýt, větvěte dřív pomocí Switche. Když volbu ukážete a pošlete ji jinam, čtenář uvidí odmítnutí.

Až smažete proměnnou, zkontrolujte požadavky, které ji používaly. Poznáte je podle `?` na místě jména proměnné.

Více najdete v [Podmínkách](/cs/story-editor/conditions/).

## Switch

Switch čte podmínky shora a jde tou první, která platí. Na pořadí proto záleží. Obecná podmínka nahoře platí dřív než každá konkrétnější pod ní. Pořadí změníte přetažením.

- Výstup **Výchozí** je vždy. Jde jím všechno, co neodpovídá žádné podmínce, takže záchytnou podmínku nepřidáváte.
- Požadavky jedné podmínky Switche musí platit všechny zároveň (A). Pro větev „buď, anebo“ napište dvě podmínky, nebo nastavte pomocnou proměnnou a testujte ji.
- Podmínka bez požadavků platí vždy, takže na podmínky pod ní nedojde. Panel Problémy ji hlásí jako *Jedna nebo více podmínek Switch nemá žádné požadavky a nikdy se neuplatní.* Je to jen varování, kapitola se přesto vydá. Podmínku přesto doplňte, nebo ji odeberte.

## Ověření dovednosti

Ověření dovednosti testuje právě jednu **vlastnost**. Obyčejnou proměnnou ani seznam podmínek netestuje. Seznam obsahuje jen proměnné typu vlastnost. Když žádnou nemáte, seznam se nezobrazí a panel napíše: *Nejsou definovány žádné proměnné vlastností. Přidejte proměnné vlastností pro použití ověření dovedností.*

**Modifikátor kostky** je nepovinný a nabízí **k10**, **k6** a **k20**, v tomto pořadí. TalePort přičte číslo, které padne, k hodnotě vlastnosti. Panel celý výpočet vypíše: *Hoďte k10 a přičtěte vlastnost Síla. Zkouška projde, když součet je aspoň 12.*

Při volbě **Žádný** kostka nic nepřidá. Ověření je pak prostá hranice a stejná hodnota vlastnosti dá vždy stejný výsledek.

Čím větší je kostka vůči rozsahu vašich vlastností, tím méně rozhoduje vlastnost. Kostka k20 u vlastností v rozsahu 1 až 5 nechává rozhodnutí téměř celé na hodu.

## Neúspěch

Výstup **Neúspěch** musí někam vést. Sami si ověřte, že čtenář, kterému se nepovede žádné ověření, dokáže kapitolu dohrát.

Větev neúspěchu, která neúspěch oznámí a hned se napojí zpět na hlavní linku, nic nemění. Dejte neúspěchu cenu, nechte ho odhalit něco nového, nebo ho pošlete na místo, kam se úspěšný čtenář nedostane.

## Přerušení

[Globální událost](/cs/story-editor/global-events/) hlídá jednu proměnnou v celém příběhu. Spustí se ve chvíli, kdy události na uzlu její podmínku nově splní. Zobrazí svůj text a pak udělá to, co jste vybrali v poli **Po události**:

- *Vrátit se na začátek* a *Vrátit se na poslední kontrolní bod* zruší cestu, kterou jste po tom uzlu naplánovali.
- *Pokračovat* událost jen zobrazí a příběh jde dál tam, kde čtenář byl.

Na jednom uzlu se spustí jen jedna událost. Když se na něm nově splní dvě podmínky, ukáže se ta s vyšší **Prioritou**. Druhá se neobjeví ani později, protože její podmínka už je splněná, když čtenář jde dál. U dvou událostí nad stejnou proměnnou proto nastavte priority.

:::caution[Kontrolní bod v každé kapitole]
*Vrátit se na poslední kontrolní bod* se týká i kapitol, které právě neupravujete. Události patří příběhu, ale kontrola běží kapitolu po kapitole. Každá kapitola, která nemá na nejvyšší úrovni plátna komponentu Kontrolní bod, dostane blokující chybu.
:::

## Hustota rozhodnutí

Volbu nepotřebuje každý uzel, ale každá volba potřebuje následek.

Hustota rozhodnutí ovlivňuje i doporučenou cenu. Bonus se počítá za rozhodovací body, tedy uzly s více než jednou cestou ven. Platí jen tehdy, když mimo nejdelší cestu je obsah, o který může čtenář přijít. Bonus je zastropovaný. Více najdete v [Cenách](/cs/monetization/pricing/).

## Související

- [Přechody a volby](/cs/story-editor/transitions-and-choices/)
- [Podmínky](/cs/story-editor/conditions/)
- [Ověření dovednosti](/cs/story-editor/skill-checks/)
- [Struktura příběhu](/cs/best-practices/story-structure/)
- [Testování](/cs/best-practices/testing/)
