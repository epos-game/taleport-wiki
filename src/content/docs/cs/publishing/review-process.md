---
title: Průběh schvalovacího řízení
description: Co se děje od odeslání kapitoly do chvíle, kdy se objeví v aplikaci u čtenářů.
helpKey: publishing.review
status: published
sidebar:
  order: 8
---

Recenzent otevře kapitolu v editoru a porovná ji s [pravidly obsahu](/cs/publishing/content-rules/). Pak ji schválí, nebo vrátí s poznámkami připnutými k uzlům, kterých se týkají.

Tlačítkem **Publikovat** pošlete kapitolu do kontroly a zamknete ji pro úpravy. Čtenáři ji neuvidí, dokud není schválená.

## Zpracování odeslání

1. Odeslání se zařadí do fronty. Tlačítko **Publikovat** se změní na **Ve frontě…** a pak na **Zpracováváme…**.
2. Po dokončení zpracování se kapitola objeví v seznamu recenzentů.
3. Recenzent si ji vezme tím, že ji otevře v režimu kontroly.

Když zpracování selže, kapitola se vrátí do stavu, v jakém byla. Zobrazí se zpráva „Publikování selhalo a kapitola vám byla vrácena. Zkuste to prosím znovu.“

U jednoho příběhu může běžet jen jedno publikování najednou. Druhý pokus se odmítne: „Tento příběh se právě publikuje. Než spustíte další publikování, počkejte na dokončení toho současného.“

O kapitole rozhoduje jeden recenzent. Dokud ji drží, nikdo jiný o ní rozhodnout nemůže. Výjimkou je administrátor, který ji může převzít. Po zamítnutí zůstává kapitola stejnému recenzentovi a po opravě se vrátí k němu.

Dokud je kapitola v kontrole, vydaná, nebo vydaná a v úpravách, jmenuje se tlačítko **Publikovat znovu**. Víc o tom najdete v části [Opětovné vydání](/cs/getting-started/publishing/#opětovné-vydání).

## Předmět kontroly

Recenzent čte celou kapitolu proti [pravidlům obsahu](/cs/publishing/content-rules/). Posuzuje také, jestli je kapitola dost hotová pro čtenáře. Měří ji podle [zásad pro příběhy](/cs/publishing/story-guidelines/).

Chyby v grafu odeslání zablokují, takže se k recenzentovi nedostanou. Upozornění z editoru ale uvidí.

## Stav během kontroly

Když kapitolu během čekání otevřete, je nad plátnem pruh **Čeká na kontrolu**. Stejný popisek je ve stavovém řádku dole. Kapitola je jen pro čtení. V úpravách pokračujete po stažení z kontroly.

Graf a jeho obsah nemůže upravovat nikdo. Poznámky ano. Ve své kapitole můžete v jakémkoli stavu poznámku napsat, vyřešit, změnit jí prioritu nebo ji smazat.

Kapitolu stáhnete tlačítkem **Stáhnout z kontroly** v hlavičce editoru, v dialogu kapitol nebo v přehledu.

- Kapitola, kterou jste odeslali poprvé, se vrátí do stavu **Návrh**.
- Vydaná kapitola se vrátí do stavu **Publikováno**. Zůstane beze změny a čtenářům dál dostupná.

V obou případech ji recenzent přestane držet.

U vydané kapitoly čtou čtenáři po celou dobu vydanou verzi. Podrobnosti najdete v článku [Životní cyklus příběhu](/cs/getting-started/story-lifecycle/).

## Pořadí kontroly

Kapitoly se vydávají popořadě, bez mezer, od první. Platí dvě pravidla:

- Kapitolu můžete odeslat, jen když je každá kapitola před ní venku nebo v kontrole.
- Recenzent ji může schválit, jen když je každá kapitola před ní vydaná a není v kontrole. Když jste dřívější kapitolu znovu odeslali a čeká, kapitola za ní je zablokovaná.

:::caution[Kapitola může čekat]
Kapitola tak může projít kontrolou a přesto čekat. Ve frontě je vidět, na kterou kapitolu čeká, podle čísla a názvu.
:::

## Výsledky kontroly

**Schváleno.** Kapitola je vydaná. Postavy, proměnné a globální události, které používá, se zamknou. Kdy ji dostanou čtenáři, určuje část níže.

**Vráceno k úpravám.** Kapitola musí mít aspoň jednu poznámku, která není od testera. Do té doby je tlačítko **Zamítnout** neaktivní.

Kde kapitola skončí, závisí na tom, jestli už byla vydaná. Oba případy popisuje [Životní cyklus příběhu](/cs/getting-started/story-lifecycle/#zamítnutí). Co dělat dál, najdete v článku [Práce se zpětnou vazbou z kontroly](/cs/publishing/review-feedback/).

Dále se může stát:

- **Kontrola se zruší.** Verze, která čekala na kontrolu, se zahodí. Vydaná verze zůstane dostupná beze změny.
- **Cena se přepíše.** Dokud je placená kapitola v kontrole, může TalePort nastavit jinou cenu. Když kapitolu odešlete znovu, přepsání se zruší.

Kapitola s nevyřešenou poznámkou s **vysokou** prioritou se neschválí, ať poznámku napsal kdokoli. Podrobnosti jsou v části [Priorita a schválení](/cs/publishing/review-feedback/#priorita-a-schválení).

## Vydání čtenářům

Schválením kapitola dostane datum předběžného přístupu. Je to datum z kroku **Předběžný přístup**, a když jste žádné nevybrali, okamžik schválení. Od tohoto data si kapitolu mohou číst podporovatelé. Ostatní čtenáři ji dostanou **o 7 dní později**.

Podporovatel je čtenář, který TalePort podpořil v crowdfundingové kampani a uplatnil svůj kód. Jeho účet má předběžný přístup ke všem příběhům na platformě. Změnit to nemůžete.

| Co jste udělali | Kdy ji dostanou podporovatelé | Kdy ji dostanou všichni ostatní |
| --- | --- | --- |
| Nevybrali jste datum | Při schválení | 7 dní po schválení |
| Vybrali jste datum u kapitoly, která ještě nebyla venku | K tomu datu | 7 dní po tom datu |

Administrátoři, recenzenti a partneři jsou mimo tabulku. Schválenou kapitolu čtou hned, bez ohledu na datum.

V kroku **Předběžný přístup** jsou dvě čísla:

- **14 dní** je začátek kalendáře. Nejbližší datum, které můžete vybrat, je za 14 dní. Krok uvádí, že kontrola může trvat až 14 dní.
- **7 dní** je prodleva mezi datem předběžného přístupu a obecným vydáním. Je stejná, ať jste datum vybrali, nebo ho nastavilo schválení, a v dialogu ji změnit nemůžete.

Už vydaná kapitola si drží datum z prvního vydání. Krok kalendář stále nabízí, ale opětovným publikováním datum neposunete.

## E-mail o schválení

Při schválení vám přijde e-mail česky a anglicky v jedné zprávě. V předmětu je název kapitoly a „je venku · Your chapter is live“.

E-mail obsahuje datum pro podporovatele, datum pro ostatní čtenáře, odkaz na příběh v aplikaci EPOS a QR kód se stejným odkazem.

Když váš autorský profil nemá propojený účet, e-mail se neposílá. Upozornění se zobrazí v editoru.

## Po schválení

Kapitola může projít kontrolou znovu, když se objeví porušení pravidel nebo ho někdo nahlásí. Týkají se toho pravidla [CR-V.1](/cs/publishing/content-rules/#cr-v-1) a [CR-VI.1](/cs/publishing/content-rules/#cr-vi-1). Co všechno může TalePort udělat, popisuje [Omezení u vydaného obsahu](/cs/publishing/published-content-restrictions/).

## Nesouhlas s rozhodnutím

Odvolání řeší podpora. Pokud s rozhodnutím nesouhlasíte, obraťte se na ni a stejnou kapitolu neodesílejte znovu beze změny. Postup je v části [Odvolání proti rozhodnutí](/cs/publishing/review-feedback/#odvolání-proti-rozhodnutí).

## Související

- [Práce se zpětnou vazbou z kontroly](/cs/publishing/review-feedback/)
- [Důvody zamítnutí](/cs/publishing/reasons-for-rejection/)
- [Příprava obsahu ke kontrole](/cs/best-practices/preparing-for-review/)
- [Životní cyklus příběhu](/cs/getting-started/story-lifecycle/)
