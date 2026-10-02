---
title: Graf příběhu
description: Uzly, propojení a jak se jimi čtenář pohybuje.
helpKey: editor.story-graph
status: published
sidebar:
  order: 1
---

Kapitola je **graf**: obdélníky (uzly) spojené čarami (spojeními). Čtenář vstupuje uzlem Začátek a prochází graf uzel po uzlu, dokud ho nezastaví uzel Konec. Tvar, který na plátně nakreslíte, je tedy tvarem větvení. Vezměte si uzel „Dveře do sklepa“ se dvěma odstavci vyprávění a s přechodem Volba, který nabízí „Vypáčit zámek“ a „Vrátit se nahoru“: dvě spojení vedoucí z toho uzlu jsou jediné dvě věci, které se mohou stát dál, a obě vidíte, aniž byste cokoli otevírali.

## Co je uzel

Jeden uzel je jedna obrazovka. Obsahuje:

- **přechod**: jedinou věc, která rozhoduje o tom, jak čtenář uzel opustí, a
- libovolný počet **komponent**: text, dialog, obrázky, hudbu, zvuk, filmové sekvence, události a kontrolní body, tedy to, co čtenář na dané obrazovce vidí a slyší.

Každý uzel má právě jeden přechod a nový uzel přichází už s jednoduchým. Právě díky tomu je graf čitelný: kam uzel může vést, zjistíte na jediném místě.

## Spojení a porty

Přechod nabízí jeden nebo více **výstupních portů**. Spojení vede z výstupního portu do vstupního portu jiného uzlu. Volba má jeden port na každou možnost, ověření dovednosti porty Úspěch a Neúspěch, jednoduchý přechod jediný port.

Zapojování se řídí dvěma pravidly a právě o ně autoři nejčastěji zakopnou:

- Výstupní port udrží jen jedno spojení. Jakmile z téhož portu vedete druhé, první se bez ptaní zruší. Chcete-li z uzlu dvě cesty ven, potřebujete dva porty, tedy volbu, switch nebo ověření dovednosti.
- Vstupní port přijme libovolný počet spojení. Svést několik větví zpátky do jednoho uzlu je běžné a nic to nestojí.

Výstupní port, na kterém nic nevisí, je chyba: *„Má výstupní port, který není připojen k žádnému uzlu.“* Čtenář, který na něj dojde, uvízne, a tak kapitolu nepustíte dál, dokud port nezapojíte. Dva případy kontrola přeskakuje. Uvnitř skupiny se nekontroluje výstup hraničního uzlu Začátek a stejně tak se nekontrolují uzly cílené globální událostí, které nesou už jen starší kapitoly.

## Skupiny

Uzel může mít vlastní graf. **Skupina** sbalí ucelený úsek příběhu do jediného obdélníku s porty na okraji; díky tomu zůstane přehledná i kapitola o dvou stech uzlech. Čísla uzlů se uvnitř skupiny začínají znovu od 1, takže uzel 7 může být v kapitole i ve skupině. Viz [Skupiny](/cs/story-editor/groups/).

## Editor kolem grafu

- **Levý panel**: samostatná položka **Vytvořit uzel** a pod ní tři rozbalovací části. **Předvolby** jsou celé hotové uzly, **Komponenty** jsou dílky, které na uzel pokládáte, **Výstupy** jsou přechody.
- **Pravý panel**: **Komponenty**, **Výstupy**, **Náhled** a **Poznámky**, vždy pro právě vybraný uzel.
- **Dolní panel**: **Postavy**, **Proměnné**, **Vlastnosti** a **Globální události**. Zavřete ho, když potřebujete zpátky plátno, a znovu otevřete z nabídky **Zobrazit**.

Přetáhněte předvolbu na prázdné plátno a vznikne uzel. Přetáhněte ji na existující uzel a editor oba propojí prvním volným výstupem toho uzlu. Pokud žádný volný výstup nezbývá, místo hádání řekne *„Tento uzel nemá volný výstup pro připojení nového uzlu.“*

Pravým tlačítkem na uzel vložíte komponentu nebo výstup, vytvoříte navazující uzel, kopírujete nebo vložíte, seskupíte výběr, otevřete nebo zrušíte skupinu, připnete poznámku a odeberete uzel či jeho spojení. Pravým tlačítkem na prázdné plátno dostanete stejné typy uzlů jako v části Předvolby.

![celý editor: paleta uzlů otevřená vlevo, malý graf na plátně a dolní panel otevřený na komponentách příběhu](/screens/cs/story-editor/editor-layout.png)

## Jak se v grafu vyznat

**Hledání** (Ctrl/⌘+F) najde uzel podle názvu i podle čísla, takže když validace ukáže na uzel 47, skočíte rovnou na něj. Zobrazí deset výsledků a nad nimi při větším počtu stojí *„Zobrazeno prvních 10 z 34“*. Prohledává jen graf, který máte právě otevřený, nikoli skupiny v něm.

Pojmenovávejte uzly. Nepojmenovaný uzel si půjčí úryvek ze své textové komponenty, ustřižený na 40 znaků včetně tří teček, takže z vašeho textu zbude 37 znaků. Uzel, který má jako obsah jen dialog, žádný úryvek nedostane a zobrazí se jako **Uzel 47**. Tenhle popisek uvidíte v poznámkách recenzenta, ve zprávách z validace i při vlastním hledání.

Na plátně kopírujete a vkládáte pomocí Ctrl/⌘+C a Ctrl/⌘+V, Delete nebo Backspace odebere vybrané uzly a spojení, Ctrl+Z je krok zpět a Ctrl+Y krok vpřed. Historie změn patří kapitole, ve které právě jste, a při přechodu do jiné se vynuluje. **F1** otevře dokumentaci vedle editoru: ze záložky Proměnné, Vlastnosti nebo Globální události se dostanete na jejich vlastní stránku, odjinud na tuhle, a Escape nápovědu zavře. Žádná z těchto klávesových zkratek nefunguje, když píšete do pole.

## Kopírování uzlů

Kopírování a vkládání nepřekročí hranice kapitoly. Schránka si pamatuje, kde jste ji naplnili, a vložení v jiné kapitole neudělá nic a nic neoznámí. Přesouvat uzly mezi kapitolami takhle nejde.

Co schránka dělá dál:

- Uzel Začátek se nekopíruje, ale přeskočí: *„Počáteční uzel nelze kopírovat, byl přeskočen.“*
- U skupiny se zkopírují vstupy a výstupy a každý vstup se spojí přímo s odpovídajícím výstupem. Graf uvnitř se nekopíruje, takže dostanete funkční prázdnou skupinu.
- Vložené uzly si vezmou vlastní odkazy na obrázky, zvuky a videa, místo aby je sdílely s originálem. Každé další vložení kopii posune o 40 px a každé desáté se zeptá, jestli další kopie opravdu potřebujete.

Kopírování nebo mazání více než 20 uzlů najednou editor odmítne zprávou *„Příliš mnoho uzlů“*. Seskupení výběru žádný takový strop nemá.

## Validace

Validace proběhne nad otevřeným grafem 750 ms po vaší poslední úpravě a znovu na serveru při publikování. **Chyby** publikování blokují: chybějící uzel Začátek nebo Konec, nepřipojený výstup, uzel Konec, do kterého nic nevede, volba bez možností, ověření dovednosti bez vybrané vlastnosti. **Varování** je neblokují: nedosažitelný uzel, prázdná textová komponenta, replika dialogu bez přiřazené postavy. Varování si přesto projděte, většinou jde o něco, k čemu jste se chtěli vrátit.

Skupina se v seznamu problémů objeví jako jediná položka, *„Tato skupina obsahuje obsah s chybami ve validaci.“*, takže chyba o tři úrovně níž je jeden odznak, do kterého se musíte prokliknout. Prázdný graf nehlásí nic; chyba o chybějícím uzlu Začátek se objeví, až když má kapitola alespoň jeden uzel.

Publikování má navíc jeden požadavek na graf, který se v seznamu problémů neukáže: alespoň jeden uzel Konec dosažitelný ze začátku musí mít zapnutý **Konec kapitoly**. Bez něj čtenář dohraje větev, ale kapitolu nikdy nedokončí. Takový uzel Konec musí ležet na plátně kapitoly: každý uzel Konec uvnitř skupiny je jedním z jejích výstupů a kontrola ho čte jako spojení, ne jako konec.

Jakmile je kapitola publikovaná, **struktura** grafu se zamkne, zatímco **obsah** zůstane upravitelný. Text v uzlu přepsat můžete. Přidat, odebrat nebo přepojit uzel už ne, a přejmenovat ho také ne, protože přejmenování se počítá jako zásah do struktury. Tvar kapitoly si tedy vyřešte dřív, než ji odešlete.

## Související

- [Typy uzlů](/cs/story-editor/node-types/)
- [Přechody a volby](/cs/story-editor/transitions-and-choices/)
- [Skupiny](/cs/story-editor/groups/)
- [Struktura příběhu](/cs/best-practices/story-structure/)
