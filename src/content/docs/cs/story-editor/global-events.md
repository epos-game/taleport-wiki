---
title: Globální události
description: Jak nastavit reakce na změny proměnných pro celý příběh (např. smrt hrdiny nebo vypršení času).
helpKey: editor.global-events
status: published
sidebar:
  order: 10
---
**Globální událost** je pravidlo, které hlídá jednu proměnnou. Když hodnota překročí vaši hranici, událost zasáhne tam, kde se čtenář právě nachází. Důsledek napíšete jednou pro celý příběh a nemusíte ho zadávat v každém uzlu, který ho může vyvolat.

Příklad: souboj odebírá vlastnosti Zdraví. Stačí jedna událost na Zdraví ≤ 0, která ukáže svůj text a vrátí čtenáře na poslední kontrolní bod. Funguje to, ať se Zdraví dostalo na nulu kdekoli v příběhu.

Globální události patří **příběhu**, ne kapitole. Událost, kterou napíšete pro první kapitolu, platí i v deváté.

Spravujete je v záložce **Globální události** dole v editoru. Napřed potřebujete aspoň jednu proměnnou. Když kliknete na **Přidat událost** a žádná proměnná neexistuje, zobrazí se „Pro vytvoření globální události je vyžadována proměnná.“

## Pole události

**Přidat událost** založí událost hned, předvybere první proměnnou v seznamu a otevře událost k úpravám. Každé pole se ukládá samo, jakmile ho změníte. Zatržítko v rohu editor jen zavře. Ctrl+Z vrací změny po jednotlivých polích.

| Pole | Co do něj patří |
| --- | --- |
| Proměnná, Operátor, Hodnota | Hlídaná podmínka, například Zdraví ≤ 0. |
| Po události | Kam se čtenář dostane po zobrazení události. |
| Priorita | Celé číslo. Pokud ho nezměníte, je 0. Rozhoduje o pořadí, když začne platit víc událostí naráz (vyšší číslo znamená vyšší prioritu). |
| Text události | Text, který můžete psát tučně, kurzivou a podtrženě, až 2000 znaků. |
| Obrázek události | Jeden obrázek do 1 MB. Zmenší se, aby se vešel do 1024 px. |

Operátory jsou `=`, `<`, `≤`, `>` a `≥`. U proměnné typu Ano / Ne nebo Seznam hodnot je jedinou možností `=`.

**Hodnota** je číselné pole bez ohledu na typ proměnné.

- U typu Ano / Ne napište 0 pro Ne a 1 pro Ano.
- U typu Seznam hodnot napište číslo položky. Položky se číslují od nuly v pořadí, v jakém jste je přidali. Výchozí názvy se číslují od jedničky, takže položka „Popisek 3“ má číslo 2.

Limit 2000 znaků počítá i skryté formátovací kódy, takže formátovaný text může být kratší.

Tady je otevřená událost. Vlevo je podmínka, vpravo text a obrázek, které čtenář uvidí, a pod podmínkou **Po události** a **Priorita**:

![otevřená globální událost: pole Proměnná, Operátor a Hodnota, volby Po události Na začátek, Na kontrolní bod a Pokračovat s vybraným Na začátek, pole Priorita, editor Textu události s počítadlem znaků a Obrázek události, nahoře Zpět, Smazat a Hotovo](/screens/cs/story-editor/global-event-detail.png)

Tlačítko **Hotovo** zavře editor a vrátí vás na seznam událostí:

![záložka Globální události s počtem událostí, polem pro hledání a tlačítkem Přidat událost nad seznamem událostí, u každé je vidět sledovaná podmínka, chování, které spustí (zde Na začátek), a priorita (P0)](/screens/cs/story-editor/global-event-panel.png)

Seznam ukazuje u každé události podmínku, chování z pole **Po události** a prioritu zapsanou jako **P** a číslo. Událost v dlouhém seznamu najdete polem pro hledání.

## Po události

Globální událost nevede na žádný uzel. Ukáže svůj text a obrázek a pak provede to, co zvolíte v poli **Po události**.

| Chování | Kam čtenář jde |
| --- | --- |
| Vrátit se na začátek | Zpět na počáteční uzel kapitoly. |
| Vrátit se na poslední kontrolní bod | Zpět na poslední kontrolní bod, kterým prošel. |
| Pokračovat | Rovnou dál od místa, kde byl. |

Vrátit se na začátek pošle čtenáře znovu vším, co už přečetl. Pokračovat nechá čtenáře tam, kde byl, takže událost jen zobrazí text a obrázek. Víc o kontrolních bodech najdete na stránce [Kontrolní body](/cs/story-editor/checkpoints/).

## Kontroly validace

Každá globální událost se kontroluje v každé kapitole, kterou validujete. Jedna špatně nastavená událost se proto ohlásí v každé kapitole. První tři kontroly jsou chyby, které blokují publikování.

- Proměnná, kterou událost hlídá, musí stále existovat.
- Vrátit se na začátek vyžaduje v dané kapitole počáteční uzel.
- Vrátit se na poslední kontrolní bod vyžaduje uzel s komponentou kontrolního bodu přímo v nejvyšším grafu kapitoly. Kontrolní bod uvnitř skupiny se nepočítá, takže kontrolní bod potřebujete i mimo skupinu.
- Dvě události se stejnou proměnnou, operátorem i hodnotou vyvolají varování.

Uvnitř skupiny kontroly běží nad grafem, který máte otevřený. Pro publikování rozhoduje výsledek na úrovni kapitoly.

## Náhled události

Záložka **Náhled** vypisuje globální události příběhu od nejvyšší priority. U každé je tlačítko Náhled, které ukáže text a obrázek tak, jak je uvidí čtenář.

Když události na uzlu přepnou proměnnou tak, že podmínka začne platit, náhled tu globální událost otevře sám. Pokud jich začne platit víc zároveň, otevře tu s nejvyšší prioritou.

Když z takového uzlu půjdete o krok dál, náhled se nejdřív zeptá: „Při opuštění tohoto uzlu se spustí globální událost, takže se skuteční hráči k dalším krokům nedostanou. Přesto pro ladění pokračovat?“

## Zamykání

Jakmile je živá jakákoli kapitola příběhu, zamknou se všechny jeho globální události i proměnné, které hlídají. Zamčená událost má zámek a nejde upravit ani smazat. Nové události přidávat můžete.

Je to přísnější než zamykání proměnných a postav, které se zamykají podle použití. Globální událost platí všude, takže ji nejde omezit po jednotlivých kapitolách.

## Rady

- Nejdřív vytvořte kontrolní bod a pak událost, která se na něj vrací.
- Událost, která se spouští často, čtenáře často přeruší. Nastavte proto hranici, která se překročí jen zřídka.
- Než čtenáře událost přenese jinam, uvidí jen její text a obrázek.

## Související

- [Kontrolní body](/cs/story-editor/checkpoints/)
- [Proměnné](/cs/story-editor/variables/)
