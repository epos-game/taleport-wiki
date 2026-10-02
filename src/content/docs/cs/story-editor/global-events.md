---
title: Globální události
description: Reakce, které se spustí kdekoli v příběhu, jakmile proměnná překročí hranici.
helpKey: editor.global-events
status: published
sidebar:
  order: 10
---

**Globální událost** je pravidlo, které hlídá jednu proměnnou a zasáhne tam, kde zrovna čtenář je. Důsledek napíšete jednou pro celý příběh, místo abyste ho zadrátovali do každého uzlu, který ho může vyvolat. Souboj, který odebírá Zdraví, tak potřebuje jedinou událost na Zdraví ≤ 0: ukáže text „Padáš do tmy“ a vrátí čtenáře k poslednímu kontrolnímu bodu, ať padl ve sklepě, nebo o tři kapitoly dál na můstku.

Globální události patří **příběhu**, ne kapitole, takže ta napsaná pro první kapitolu platí i v deváté. Spravujete je v záložce **Globální události** v dolní části editoru. Záložka potřebuje aspoň jednu proměnnou: když zmáčknete **Přidat událost** a žádná neexistuje, objeví se „Pro vytvoření globální události je vyžadována proměnná.“

## Jednotlivá pole

Tlačítko Přidat událost ji založí hned, předvybere první proměnnou ze seznamu a rovnou ji otevře k úpravám. Každé pole se ukládá samo při změně, takže zatržítko v rohu editor jen zavře. Ctrl+Z se vrací po jednotlivých polích.

| Pole | Co do něj patří |
| --- | --- |
| Proměnná, Operátor, Hodnota | Hlídaná podmínka, například Zdraví ≤ 0. |
| Po události | Kam se čtenář dostane, až se událost ukáže. |
| Priorita | Celé číslo; dokud ho nezměníte, je 0. |
| Text události | Tučně, kurzivou a podtrženě, až 2000 znaků. |
| Obrázek události | Jeden obrázek do 1 MB, zmenší se na 1024 px. |

Seznam operátorů je tu kratší než jinde v editoru a vybíráte ze symbolů, ne ze slov: `=`, `<`, `≤`, `>`, `≥`. **Chybí „nerovná se“** a u proměnné typu Ano / Ne nebo Seznam hodnot zůstává jediná možnost `=`. Počítadlo pod textem počítá HTML, takže formátovaný odstavec narazí na 2000 znaků dřív, než jich 2000 bude vidět.

Globální událost nevede na žádný uzel. Ukáže svůj text a obrázek a pak uplatní chování, které jste zvolili; kde čtenář skončí, rozhoduje jedině to chování. Popisek nad záložkou pořád tvrdí, že událost spustí uzel, ale to je zbytek staršího návrhu.

## Po události

| Chování | Kam čtenář jde |
| --- | --- |
| Vrátit se na začátek | Na počáteční uzel kapitoly. |
| Vrátit se na poslední kontrolní bod | Na poslední kontrolní bod, kterým prošel. |
| Pokračovat | Dál odtud, kde byl. |

U neúspěchu je skoro vždycky správná volba Vrátit se na poslední kontrolní bod. Návrat na začátek trestá čtenáře za chybu udělanou po hodině čtení, pokračování zase udělá z události bezvýznamnou epizodu. Viz [Kontrolní body](/cs/story-editor/checkpoints/).

## Co kontroluje validace

Každá globální událost se kontroluje proti té kapitole, která se právě validuje, takže jedna špatně nastavená se postupně ohlásí u každé z nich. První tři body jsou chyby a blokují publikování.

- Proměnná, kterou událost hlídá, musí pořád existovat.
- Vrátit se na začátek vyžaduje v té kapitole počáteční uzel.
- Vrátit se na poslední kontrolní bod vyžaduje kontrolní bod v hlavním grafu kapitoly. Kontrolní bod uvnitř skupiny se nepočítá, takže když je souboj schovaný ve skupině, musí být kontrolní bod i mimo ni.
- Dvě události se stejnou proměnnou, operátorem i hodnotou vyvolají varování. Obvykle jedna z nich někde zbyla.

Když pracujete uvnitř skupiny, kontroly běží nad grafem, který máte otevřený. Skupina bez vlastního kontrolního bodu tak hlásí chybu, i když samotná kapitola projde; skutečný výsledek uvidíte, až se vrátíte na úroveň kapitoly.

## Jak si ji vyzkoušet

Záložka **Náhled** vypisuje globální události příběhu od nejvyšší priority a u každé má tlačítko Náhled, takže si text i obrázek prohlédnete tak, jak je dostane čtenář.

Jakmile události na uzlu posunou proměnnou tak, že podmínka začne platit, náhled tu událost otevře sám. Když jich začne platit víc naráz, vybere tu s nejvyšší prioritou. Krok dopředu se z takového uzlu nejdřív zeptá: „Při opuštění tohoto uzlu se spustí globální událost, takže se skuteční hráči k dalším krokům nedostanou. Přesto pro ladění pokračovat?“ Podle priority řadí události náhled v editoru. Do balíčku se číslo pošle a dál si s ním poradí aplikace.

## Zamykání

Jakmile je živá jakákoli kapitola příběhu, zamknou se všechny jeho globální události i proměnné, které hlídají. Zamčená událost má u sebe zámek, nejde upravit ani smazat a server změnu odmítne, i kdybyste se k ní dostali jinou cestou. Přidávat nové ale pořád můžete. Je to přísnější než u proměnných a postav, které se zamykají podle použití: globální událost platí všude a nedá se omezit po kapitolách.

## Praktické rady

- Kontrolní bod napište do kapitoly dřív než událost, která se na něj vrací. Validace tak nedostane šanci vás zastavit.
- Nechte je vzácné. Událost, která se spouští často, čtenář zažívá jako příběh skákající si do řeči.
- Text pište jako scénu. Je to všechno, co čtenář uvidí, než ho to přenese jinam.

## Související

- [Kontrolní body](/cs/story-editor/checkpoints/)
- [Proměnné](/cs/story-editor/variables/)
- [Souboje](/cs/story-editor/combat/)
