---
title: Proměnné a vlastnosti
description: Jak uchovávat herní stav, inventář a rozhodnutí čtenáře v paměti příběhu.
helpKey: editor.variables
status: published
sidebar:
  order: 5
---
Příběh si pamatuje hodnoty v proměnných. Proměnná může být celé číslo, přepínač ano/ne, nebo hodnota ze seznamu, který si sami pojmenujete. Patří **příběhu**, ne kapitole, takže hodnotu nastavenou v jedné kapitole přečtete v kterékoli další.

Do proměnné zapisuje komponenta **Událost** na uzlu. Čtou ji podmínky u voleb, switchů a ověření dovednosti.

## Vlastnosti a proměnné

Proměnné jsou dvou druhů: vlastnosti a obyčejné proměnné. Druh určuje záložka, ve které ji založíte, **Vlastnosti** nebo **Proměnné**. Druh volíte při vytvoření a později proměnnou do druhé záložky přesunout nejde.

![záložka Proměnné, každý řádek nese název proměnné a pod ním výchozí hodnotu](/screens/cs/story-editor/variables-panel.png)

Druh se projeví na dvou místech:

- [Ověření dovednosti](/cs/story-editor/skill-checks/) umí hodit jen proti vlastnosti.
- V podmínce má vlastnost ikonu postavy a proměnná ikonu štítku.

Čtecí aplikace může vlastnosti a proměnné zobrazit jako dva seznamy, ale to už rozhoduje ona.

Hodnotu, kterou testuje ověření dovednosti, dejte do záložky Vlastnosti, i když ověření nehází kostkou. Hodnoty, které se jen čtou a nastavují, patří do záložky Proměnné.

![záložka Vlastnosti se stejnými řádky](/screens/cs/story-editor/stats-panel.png)

## Typy hodnot

| Typ | Obsahuje | Typické použití |
| --- | --- | --- |
| **Číslo** | Celé číslo. Může mít minimum a maximum. | Vlastnosti, počítadla, zdroje |
| **Ano / Ne** | Jeden ze dvou stavů. | Příznaky |
| **Seznam hodnot** | Jednu hodnotu z množiny, kterou si nadefinujete, každou s vlastním popiskem. | Stavy, které se vylučují: frakce, cesta, fáze vztahu |

Minimum a maximum existují jen u typu Číslo a fungují jako pár. Když vyplníte jen jedno, uložení zahodí obě. Přepnutím proměnné na Ano / Ne nebo Seznam hodnot je také smažete.

Minimum vyšší než maximum editor odmítne hlášením „Maximální hodnota musí být větší nebo rovna minimální hodnotě“. Výchozí hodnota musí ležet uvnitř rozsahu.

**Seznam hodnot** nahradí několik proměnných Ano / Ne, které nesmějí platit zároveň. Každá položka má číselný klíč a popisek dlouhý nejvýše 100 znaků. Nové položky se jmenují „Popisek 1“, „Popisek 2“ a tak dále.

Popisky do seznamu přidejte dřív, než na něj zamíří událost. Jinak editor událost odmítne hlášením „Vybraná proměnná nemá definované žádné hodnoty výčtu. Před použitím přidejte hodnoty k proměnné.“

## Vytvoření proměnné

Vyplňte formulář:

- **Název** je povinný a může mít až 100 znaků.
- **Typ** a **Výchozí hodnota**. Výchozí hodnotou začíná každý čtenář.
- **Min** a **Max** se zobrazí jen u typu Číslo.

**Přidat proměnnou** proměnnou hned vytvoří a otevře k úpravě. Dostane název jako „Proměnná 1“ a číslo se počítá přes obě záložky dohromady. **Přidat vlastnost** v záložce Vlastnosti pojmenuje novou položku stejně. Pokud nějaký řádek nechcete, smažte ho ze seznamu.

Tlačítko **Vytvořit proměnnou** uvnitř komponenty Událost otevře stejný formulář. Vždy založí vlastnost, takže se nová položka objeví v záložce Vlastnosti.

## Změna proměnné

Proměnnou mění komponenta **Událost** na uzlu. Řádek přidáte tlačítkem **Přidat událost**. Řádky se použijí ve chvíli, kdy čtenář dojde na uzel, a to v pořadí, v jakém jsou vypsané. Přetažením je přeřadíte.

Každý řádek určuje proměnnou, operaci a hodnotu. Má také vlastní název do 200 znaků a volitelný popis do 1000 znaků. Počítadlo pod popisem počítá i skryté formátovací kódy.

| Operace | Čte se jako | Dostupná u |
| --- | --- | --- |
| **=** | nastavit na | každého typu |
| **+** | zvýšit o | jen typ Číslo |
| **-** | snížit o | jen typ Číslo |

Proměnné typu Ano / Ne a Seznam hodnot jde jen nastavit. Když na ně událost zamíří, operace se přepne na **nastavit na** a hodnota se vrátí na výchozí. U Ano / Ne je to Ne, u seznamu jeho první popisek.

:::caution[Události meze ignorují]
Zvýšení a snížení meze nezohledňují. Min a Max se kontrolují u výchozí hodnoty a u hodnoty zadané v podmínce, výsledek události ale neomezují. Číslo s maximem 10 na hodnotě 9 skočí po přičtení 3 na 12. Chcete-li hodnotu udržet pod stropem, zařaďte před událost podmínku.
:::

Řádky událostí se s publikováním kapitoly uzavřou. V publikované kapitole je komponenta jen seznam ke čtení, bez tlačítka **Přidat událost**, tužky, koše a přetahování. Každý řádek si ponechá proměnnou, operaci i hodnotu. Čísla před publikováním kapitoly ukáže karta **Náhled**.

## Zamykání

Proměnná se zamkne, jakmile ji použije živá kapitola. Zamčenou proměnnou nejde přejmenovat, změnit jí typ ani meze, ani ji smazat. Její editace se neotevře.

V řádku se zobrazí zámek. Jeho popisek zní „Používá ho publikovaná kapitola: {0}. Odemkne se, jakmile ho žádná publikovaná kapitola nebude používat. Můžete přidat novou položku.“ Za {0} se dosadí kapitoly, které zámek drží, každá jako pořadové číslo a název, oddělené čárkami. Pokud žádná kapitola zámek nedrží, popisek zní „Uzamčeno publikovaným příběhem. Můžete přidat novou položku.“

„Používá“ znamená cokoli z tohoto, kdekoli v živé kapitole, včetně skupin:

- mění ji událost,
- testuje ji volba, podmínka switche nebo ověření dovednosti, nebo
- míří na ni [globální událost](/cs/story-editor/global-events/). Globální události platí v celém příběhu, takže se každá proměnná, na kterou některá míří, zamkne ve chvíli, kdy je živá jakákoli kapitola příběhu.

Zámek se přepočítává sám. Když použití zmizí nebo kapitola přestane být živá, proměnná se odemkne. Novou proměnnou můžete přidat vždy.

## Související

- [Podmínky](/cs/story-editor/conditions/)
- [Postava čtenáře](/cs/story-editor/player-characters/)
- [Globální události](/cs/story-editor/global-events/)
- [Ověření dovednosti](/cs/story-editor/skill-checks/)
