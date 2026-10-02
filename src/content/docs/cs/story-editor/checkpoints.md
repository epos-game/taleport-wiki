---
title: Kontrolní body
description: Označení míst, kam se dá čtenář poslat zpátky.
helpKey: editor.checkpoints
status: published
sidebar:
  order: 11
---

**Kontrolní bod** je značka, kterou položíte na uzel a tím určíte, odkud čtenář pokračuje po návratu. Je to místo přistání pro [globální událost](/cs/story-editor/global-events/), která má **Po události** nastavené na **Vrátit se na poslední kontrolní bod**. Dejte ho na uzel, kde družina dojde ke vchodu do šachty, a čtenáři, kterému o čtyři uzly dál spadne zdraví na 0, se příběh vrátí ke vchodu místo na začátek kapitoly. Vyplňovat není co: komponenta nemá žádná pole a panel to řekne rovnou textem „Tento typ komponenty nemá žádné možnosti konfigurace.“

## Kam je dávat

Přetáhněte **Kontrolní bod** ze sekce **Komponenty** v levé paletě na uzel, nebo na uzlu klikněte pravým tlačítkem a zvolte **Vložit komponentu**. Celé rozhodnutí je v tom, kam ho položíte.

Dejte ho na začátek každého uceleného úseku: scény, lokace, etapy cesty. Zkouška je jednoduchá: měl by čtenář, kterého sem příběh vrátí, pocit, že přišel o přiměřeně velký kus postupu?

- Málo kontrolních bodů znamená, že jeden špatný hod stojí půl hodiny čtení. Takhle lidé přestávají číst.
- Příliš mnoho znamená, že neúspěch nestojí nic, a tím přestane cokoli znamenat.

Těsně před úsek, ve kterém se dá umřít, patří kontrolní bod vždycky. Uzel, na kterém není nic než kontrolní bod, je úplně v pořádku: editor značku bere jako obsah, takže u něj nikdy nenahlásí „Uzel nemá žádný obsah.“

## Pravidla

- Jeden na uzel. Druhý se odmítne s hlášením „Tento uzel už tuto komponentu obsahuje.“
- Uzly Začátek, Konec a Skupina ho nést nemohou vůbec. Dostanete „Tento typ uzlu nemůže obsahovat obsahové komponenty.“ Dejte ho na první skutečný uzel za začátkem.
- Uzel s filmovou sekvencí si kontrolní bod nechat smí. Filmová sekvence z uzlu vytlačí všechno ostatní a kontrolní bod je jedna ze dvou značek, které na něm můžou zůstat (druhá zastavuje dědění médií). Hodí se to: filmová sekvence obvykle scénu otevírá a začátek scény je přesně to místo, kam se čtenář má vracet.
- Přidání i odebrání kontrolního bodu je strukturální úprava, takže se u publikované kapitoly odmítne. Rozmístění si ujasněte, než kapitolu publikujete.

## Kontrolní bod ve skupině se nepočítá

Kontrola se dívá na vlastní plátno kapitoly a o úroveň hlouběji už ne. Kapitola, která má globální událost **Vrátit se na poslední kontrolní bod** a jediný kontrolní bod drží uvnitř [skupiny](/cs/story-editor/groups/), skončí chybou, že globální událost používá chování „Vrátit se na poslední kontrolní bod“, ale kapitola nemá žádný uzel s kontrolním bodem. Jeden kontrolní bod proto nechte venku na plátně kapitoly. Když je samotný souboj sbalený do skupiny, kontrolní bod před ním patří do nadřazeného grafu.

Kontrola **Konce kapitoly** se chová ještě jinak: cestu čtenáře skupinami provlékne, ale konec, který hledá, musí stejně ležet na plátně kapitoly. Z jedné kontroly na druhou tedy neusuzujte.

Dokud máte skupinu otevřenou, editor stejnou kontrolu spustí na podgraf před vámi. Skupina bez vlastního kontrolního bodu tak chybu nahlásí i ve chvíli, kdy je kapitola v pořádku. Publikování blokuje jedině kontrola na úrovni kapitoly.

## Označuje pozici, nic víc

Komponenta v sobě nenese žádná data: žádný snímek proměnných, žádné počítadlo, nic, co byste nastavovali. Nestavte stav neúspěchu na předpokladu, že návrat zároveň něco vrátí zpátky. Pokud má prohraný souboj vrátit 2 zlaté, které stál, nebo smazat příznak „dveře odemčené“, napište to jako komponentu **Událost**, kde na to vidíte a kde si to vyzkoušíte v Náhledu.

## Související

- [Globální události](/cs/story-editor/global-events/)
- [Typy uzlů](/cs/story-editor/node-types/)
- [Souboje](/cs/story-editor/combat/)
