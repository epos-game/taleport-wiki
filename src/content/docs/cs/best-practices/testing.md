---
title: Testování
description: "Tři kontroly větvené kapitoly: validace, Náhled a testovací balíček."
helpKey: best-practices.testing
status: published
sidebar:
  order: 4
---

Větvenou kapitolu můžete zkontrolovat třemi způsoby: validací v editoru, Náhledem a testovacím balíčkem. Žádný nenahradí ostatní. Když kapitolu čtete sami, jdete cestou, kterou jste napsali jako první, a víte, kam která volba vede. Testovací balíček proto dejte i někomu, kdo příběh nečetl.

## Validace

Editor zkontroluje kapitolu krátce po vaší poslední změně. Kontroluje úroveň grafu, kterou máte otevřenou, ne celou kapitolu.

- **Chyby** blokují publikování i sestavení testovacího balíčku.
- **Varování** neblokují nic. Nedosažitelný uzel, například větev, kterou jste nepřipojili, je varování.

Obojí najdete v plném rozsahu v [Zásadách pro příběhy](/cs/publishing/story-guidelines/).

**Kde nálezy uvidíte.** Ukazatel **Problémy** ve stavovém řádku počítá chyby a varování zvlášť. Po otevření vypíše každý nález i s uzlem a kliknutím na něj na uzel skočíte. Uzel s varováním má na plátně ikonu varování. Když ho vyberete, panel vlastností nález vypíše.

**Varování ukazuje jen editor.** Dialog publikování vypisuje jen chyby. Hláška po **Exportovat Game Book** řekne, kolik varování graf má, ale žádné nepojmenuje.

**Skupiny.**

- Každý uzel skupiny dostane jedinou značku, **Obsahuje chyby** nebo **Obsahuje varování**. Jednotlivé nálezy uvidíte, až skupinu otevřete.
- Dialog publikování vypíše všechny chyby z nitra skupiny, ale bez názvu uzlu před zprávou. Uzel najdete tak, že skupinu otevřete, protože **Přejít na uzel** přeskakuje jen po úrovni plátna, kterou máte otevřenou.
- Uvnitř skupiny se nekontrolují tři věci: nedosažitelný Konec, Konec bez příchozího propojení a víc než jeden Začátek. Ověřte je sami.

**Co zkontrolovat sami.** Validace ohlásí jen ověření dovednosti bez vlastnosti a globální událost, která sleduje smazanou proměnnou. Ostatní zkontrolujte sami.

- Až smažete proměnnou, projděte volby a podmínky Switche, které ji používaly. Požadavek, který o proměnnou přišel, má místo jména `?`.
- Chybějící soubory médií se ukážou, až publikování selže. Dialog pojmenuje každý soubor i místo, kde se používá.
- Zkontrolujte každý uzel, kde se potkají dva zdroje médií. Více najdete v [Práci s médii](/cs/best-practices/media-usage/).

## Náhled

Karta **Náhled** v pravém panelu je simulátor, kterým můžete kapitolou procházet. Náhled:

- ukáže uzel tak, jak ho uvidí čtenář
- nabídne odchozí propojení uzlu jako možnosti
- vyhodnotí Switch nebo ověření dovednosti
- použije události uzlu na vaše proměnné a výsledek ponese dál

Karta uvádí: *Přibližný náhled. Finální vykreslení v EPOS se může lišit.* Slouží ke kontrole logiky, ne vzhledu.

**Proměnné.** Začínají na výchozích hodnotách. Kteroukoli přepíšete v panelu **Proměnné (ladění)** a na uzel tak dorazíte rovnou s hodnotami, které chcete vyzkoušet. Náhled nerespektuje Min a Max proměnné, ani u hodnot, které napíšete, ani u změn z událostí. Vlastnost se stropem 10 může ukázat 14. Číslo v náhledu proto neříká, kam se čtenář může dostat.

**Ověření dovednosti.** Hodí kostkou jednou, jakmile na uzel dorazíte, a hod si pro uzel zapamatuje. Odchod a návrat hod nezmění. Nový hod vyvoláte tlačítkem **Hodit kostkou** nebo ručním přepsáním čísla v poli.

**Přeskakování.** Po potvrzení můžete projít i zamčenou volbou, podmínkou Switche, která by se při aktuálních hodnotách nepoužila, a výsledkem, který by z vašeho hodu nevyšel. Do větve se tak dostanete bez skládání hodnot, které ji odemykají.

**Globální události.** Ladicí panel vypíše všechny globální události příběhu a u každé ukáže, jestli je splněná. U každé je tlačítko **Náhled**, které zobrazí překryv bez skládání hodnot, které událost spustí. Při odchodu z uzlu vás editor na globální událost upozorní jen tehdy, když má chování **Vrátit se na začátek** nebo **Vrátit se na poslední kontrolní bod**. Událost s chováním **Pokračovat** se spustí bez hlášky, protože uzly za ní zůstávají dosažitelné.

![pravá karta Náhled na uzlu s ověřením dovednosti](/screens/cs/story-editor/preview-debug.png)

Po vyhodnocení ověření dovednosti panel ukáže, která větev se použila a jak to vyšlo. Nad tím jsou ladicí přepisy hodu kostkou a všech vlastností.

![panel Náhled po vyhodnocení ověření dovednosti: která větev se použila a jak to vyšlo, nad tím ladicí přepisy hodu kostkou a všech vlastností](/screens/cs/best-practices/debug-overrides.png)

## Testovací balíček

Tlačítko **Publikovat** nabízí vedle cesty ke kontrole i možnost **Sestavit testovací balíček**. Zkontroluje kapitolu a sestaví její soukromou kopii v tom stavu, v jakém kapitola právě je. Vaši přispěvatelé si ji přečtou v opravdové aplikaci.

Testovací sestavení zastaví jen dvě věci: chyby v grafu a pravidlo, že každá kapitola před touto už musí být v testování, nebo vydaná. Požadavky na autorský profil, metadata příběhu, klasifikaci ani cenu zatím neplatí, takže testovat můžete dávno předtím, než půjde kapitolu odeslat.

- Balíček je pevná kopie. Můžete dál upravovat, ale testeři neuvidí nic nového, dokud balíček nesestavíte znovu.
- **Zrušit testování** vrátí kapitolu do konceptu a smaže testovací balíček. Testeři o svou kopii přijdou, takže nejdřív sesbírejte, co našli.
- Do testování se kapitola dostane jen z konceptu nebo z testování. Vydanou kapitolu zpátky vrátit nelze, její aktualizace jdou přes kontrolu.

## Zpětná vazba od přispěvatelů

Jak přispěvatele přidat, najdete v [Testování a přispěvatelé](/cs/getting-started/testing-and-contributors/).

Přispěvatel, který čte váš testovací balíček, píše poznámky ke kapitole přímo v aplikaci.

- Poznámku může připnout k uzlu nebo ke konkrétní komponentě na uzlu.
- Poznámka může mít až 2000 znaků.
- Každá poznámka nese verzi balíčku, kterou tester právě hrál, takže poznáte zastaralou výtku od aktuální.
- Poznámky přispěvatelů jsou označené **Tester**.

Přispěvatel může psát jen tehdy, když je kapitola v testování nebo u recenzenta. Jakmile ji vrátíte do konceptu, tato možnost se zavře.

Upravujte na počítači. V čtecí aplikaci na telefonu editor hlásí *Editor potřebuje větší obrazovku* a kapitolu si tam můžete jen přečíst.

## Co vyzkoušet

- Projděte kapitolu tak, aby každé ověření dovednosti selhalo, a ověřte, že se dá dohrát.
- Projděte ji tak, aby každé ověření prošlo, a ověřte, že nezůstala slepá větev.
- Na konci cesty se v **Proměnné (ladění)** podívejte, které proměnné se změnily a jestli na ně něco reaguje. Ověřte, že se mění každá vlastnost a že ji něco čte. Validace to nekontroluje.

## Související

- [Testování a přispěvatelé](/cs/getting-started/testing-and-contributors/)
- [Příprava obsahu ke kontrole](/cs/best-practices/preparing-for-review/)
- [Graf příběhu](/cs/story-editor/story-graph/)
- [Interaktivní náhled uzlu](/cs/story-editor/node-preview/)
