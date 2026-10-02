---
title: Interaktivita
description: Jak zařídit, aby volby, ověření dovednosti a stav příběhu skutečně něco znamenaly.
helpKey: best-practices.interactivity
status: published
sidebar:
  order: 2
---

Interaktivita je ta část kapitoly, která čte, co čtenář udělal, a něco si z toho vezme. Rozhodují tři přechody: volba, kterou dělá čtenář, Switch, který se rozhodne podle stavu příběhu, a ověření dovednosti, o němž rozhodne vlastnost plus hod kostkou. Mira zalže hlídači na uzlu Přístavní brána, událost na témže uzlu přidá 1 k proměnné Podezření, a o dvacet uzlů dál ji Switch na `Podezření ≥ 3` pošle do hospody, kde hospodský právě zamyká kasu. Jedna proměnná, jedna podmínka, přepsaný odstavec.

## Volba potřebuje následek

Zkouška, jestli jde o skutečnou volbu: **změní se po ní něco, když vyberu tu druhou možnost?** Jiný text na další obrazovce se počítá. Jiná hodnota proměnné se počítá. Když se nezmění nic, nepočítá se nic.

Volby, které se hned zase sejdou a nezmění přitom stav, jsou nejčastější vada prvních kapitol. Při psaní působí interaktivně a čtou se jako proklikávání prózy.

## Následky mohou být drobné

Nemusí všechny měnit děj. Postava, která si pamatuje, co jste jí řekli, vlastnost, která se pohnula, věta popisu, která bere na vědomí, co jste udělali: jsou levné a právě ony čtenáře přesvědčí, že příběh poslouchá. Jedna proměnná přečtená ve třech pozdějších scénách udělá víc než druhý konec.

## Tři způsoby, jak se rozvětvit, a kdo o tom rozhoduje

| Přechod | Rozhoduje | Použijte na |
| --- | --- | --- |
| **Volba** | Čtenář | Rozhodnutí, ke kterému se má přihlásit. |
| **Switch** | Stav příběhu | Reakci na to, co se nasbíralo. |
| **Ověření dovednosti** | Vlastnost, případně i hod kostkou | Zkoušku, na kterou se čtenář připravil, nebo nepřipravil. |

Zaměnitelné nejsou. Má-li se čtenář cítit odpovědný, použijte volbu. Má-li svět působit, že si něčeho všiml, použijte Switch, protože Switch se čtenáři prostě stane, místo aby se ho na něco ptal.

Ať zvolíte cokoli, **každá větev, kterou otevřete, musí někam vést**. Každá možnost volby, každá podmínka Switche, jeho port Výchozí i oba výsledky ověření dovednosti jsou výstupní porty, a nepřipojený výstupní port blokuje vydání: *Má výstupní port, který není připojen k žádnému uzlu.*

## Volba podmíněná požadavkem

Volba bez požadavků se nabízí vždy a panel to i napíše: *Bez podmínek, vždy dostupné.* Jakmile požadavky přidáte, otevře se možnost jen čtenáři, jehož stav je splňuje. Přepínač **Požadovat** rozhoduje mezi **Všechny** a **Libovolnou** a objeví se, až má volba dva požadavky.

Požadavek ale možnost neskryje. Do balíčku jde text každé možnosti i s jejími požadavky a v náhledu se nesplněná možnost ukáže se zámkem a popiskem *Podmínky nesplněny. Kliknutím obejít pro ladění*. Má-li být pointou, že se čtenář o možnosti vůbec nedozví, rozvětvete dřív, Switchem. Má-li naopak odmítnutí působit jako důsledek, volbu ukažte a pošlete ji jinam: zamčené dveře, které čtenář vidí, jsou moment příběhu.

Ani jedno z tohoto editor nepohlídá. Náhled nikdy nesplní operátor „se nerovná“, takže volba podmíněná tímto operátorem vypadá zamčená, i když stav odpovídá. A požadavek na smazanou proměnnou se v náhledu čte jako nesplněný, aniž by to kterékoli pravidlo ohlásilo. Viz [Podmínky](/cs/story-editor/conditions/).

## Switch: vyhrává první shoda

Switch čte své podmínky shora a jde tou první, která sedne. Pořadí je tím pádem součást logiky: široká podmínka nahoře spolkne každou konkrétnější pod sebou. Pořadí změníte přetažením.

Dvě věci lidi pravidelně zaskočí:

- Výstup **Výchozí** je tam vždycky. Nepřidáváte žádnou záchytnou podmínku; Výchozím odejde všechno, co nesedlo na žádnou podmínku, a musí být připojený jako každý jiný výstup.
- Požadavky jedné podmínky Switche se spojují vždy spojkou A ZÁROVEŇ. Přepínač Všechny / Libovolnou tady na rozdíl od volby není. Na větev typu „buď, anebo“ napište dvě podmínky, nebo si nastavte mezilehlou proměnnou a testujte tu.

Každé podmínce dejte aspoň jeden požadavek. Prázdný seznam požadavků se totiž vyhodnotí jako splněný, takže podmínka bez požadavků sedne na všechno a na podmínky pod ní už nedojde. Varování, které k tomu dostanete, tvrdí opak, a je to jen varování, takže kapitola s ním projde do vydání.

## Ověření dovednosti testuje vlastnost

Ověření dovednosti testuje právě jednu **vlastnost**, ne obyčejnou proměnnou a ne seznam podmínek. Výběr nabízí jen proměnné typu vlastnost; když je prázdný, žádnou zatím nemáte.

**Modifikátor kostky** je nepovinný a nabízí **k6**, **k10** a **k20**. K hodnotě vlastnosti se přičte číslo, které padlo, a editor celé zadání vypíše slovy: *Hoď k10 a přičti vlastnost Páčení zámků. Zkouška projde, když součet je alespoň 12.* Při volbě **Žádný** kostka nepřidá nic a z ověření je prostá hranice, tedy čistá odměna pro čtenáře, který do té vlastnosti investoval. Kostka přidá napětí za cenu toho, že občas potrestá přípravu, a čím je větší vůči rozsahu vašich vlastností, tím méně rozhoduje vlastnost. Kostka k20 nad vlastnostmi v rozsahu 1 až 5 je hod mincí s mezikroky.

## Neúspěch má být zajímavý

Ověření dovednosti, jehož větev Neúspěch řekne „nepovedlo se“ a hned se zase připojí k hlavní lince, je zdržení, ne mechanika. Neúspěch má něco stát, něco odhalit, nebo odvést příběh tam, kam se úspěšný čtenář nedostane.

Žádné pravidlo nekontroluje, jestli čtenář, kterému se nepovede nic, dokáže kapitolu dohrát. Kontroluje se jen to, že výstup Neúspěch někam vede. Otázka tedy nikdy nezní, jestli jste větev neúspěchu napsali, ale kam jste ji namířili: na cestu kapitolou, ne do zdi.

## Přerušení není větev

[Globální událost](/cs/story-editor/global-events/) hlídá jednu proměnnou v celém příběhu a spustí se ve chvíli, kdy události na uzlu její podmínku nově splní. Zobrazí svůj text a pak udělá to, co jste vybrali v poli **Po události**: *Vrátit se na začátek*, *Vrátit se na poslední kontrolní bod*, nebo *Pokračovat*. Tok, který jste po tom uzlu naplánovali, zahodí jen ta první dvě chování. *Pokračovat* událost jen zobrazí a příběh jde dál tam, kde čtenář byl.

Ta dvě vracející se chování jsou proto dobrý koncový stav a špatná mechanika. Když se spouští často, čtenář zažívá příběh, který si sám skáče do řeči. Jedno z nich navíc sahá do kapitol, které jste vůbec neotevřeli: události patří příběhu, kontrola běží po kapitolách, a *Vrátit se na poslední kontrolní bod* je blokující chyba v každé kapitole, která nemá uzel s kontrolním bodem.

## Rozhodnutí rozložte

Volbu nepotřebuje každý uzel. Úseky souvislého vyprávění jsou to, díky čemu rozhodnutí působí jako rozhodnutí. Kapitola, která se ptá na každé obrazovce, je vyčerpávající, a protože každá volba potřebuje následek, je to obvykle kapitola, kde nezáleží na žádné z nich.

Hustota rozhodnutí se propisuje i do doporučené ceny. Bonus poměřuje rozhodovací body, tedy uzly s více než jednou cestou ven, vůči délce nejdelší cesty, a platí jen tehdy, když mimo tu cestu je obsah, o který čtenář může přijít. Zastaví se na +40 %. Viz [Ceny](/cs/monetization/pricing/).

## Související

- [Přechody a volby](/cs/story-editor/transitions-and-choices/)
- [Podmínky](/cs/story-editor/conditions/)
- [Ověření dovednosti](/cs/story-editor/skill-checks/)
- [Struktura příběhu](/cs/best-practices/story-structure/)
- [Testování](/cs/best-practices/testing/)
