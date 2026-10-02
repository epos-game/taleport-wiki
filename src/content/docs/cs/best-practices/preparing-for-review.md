---
title: Příprava obsahu ke kontrole
description: Co odeslání skutečně zastaví a desetiminutová kontrola, která většině zamítnutí předejde.
helpKey: best-practices.preparing-for-review
status: published
sidebar:
  order: 5
---

Průvodce vydáním začíná krokem **Validace** a ten není souhrn, ale závora. Dokud nemáte v pořádku autorský profil, graf a kapitoly před touto, tlačítko Další nejde zmáčknout a jeho popisek hlásí „Před pokračováním vyřešte blokující problémy uvedené výše.“ Projít si závoru dopředu zabere asi deset minut a ušetří jedno kolečko navíc. Třetí kapitola *Převozníkovy ceny* má čtyři konce; vypněte u všech čtyř **Konec kapitoly** a řádek *Dosažitelný konec kapitoly* spadne, takže na ničem dalším v průvodci nezáleží, dokud jeden nezapnete.

První polovina téhle stránky je to, co nepustí software. Druhá je to, co vrátí recenzent.

## Co odeslání skutečně zastaví

Kontrolní seznam řadí položky do skupin **Hotovo** a **Vyžaduje pozornost**. Tyhle položky se dají vyřešit jedině mimo průvodce, takže vás na kroku udrží:

- [ ] Zobrazované jméno autora, životopis autora a avatar autora, všechny tři na autorském profilu
- [ ] Bez chyb v grafu
- [ ] Dosažitelný konec kapitoly
- [ ] Graf příběhu obsahuje přehratelný obsah
- [ ] Předchozí kapitoly jsou připravené ke kontrole

*Graf příběhu obsahuje přehratelný obsah* znamená, že nejdelší cesta kapitolou měří víc než nula minut. Text se počítá rychlostí 1000 znaků na minutu, namluvení a filmová sekvence se počítají na uzlech bez textu a hudba ve smyčce, zvuk prostředí ani video pozadí se nepočítají vůbec. Kapitola složená z hudebního podkresu a pozadí naměří nulu a odeslání se odmítne.

*Předchozí kapitoly jsou připravené ke kontrole* znamená, že každá kapitola s nižším číslem je už vydaná, nebo už v kontrole. Vydané kapitoly tvoří nepřerušenou řadu, takže čtvrtá nemůže jít ven, dokud je druhá koncept.

Ostatní položky můžete minout a vyřešit na kroku, kterému patří. Pod **Metadata** spadá název příběhu, popis příběhu, [titulní obrázek](/cs/media/cover-image/), [žánr](/cs/publishing/genres-and-tags/), alespoň jeden štítek a popis kapitoly. Pod **Klasifikaci** patří [věkové doporučení](/cs/publishing/age-ratings/) a potvrzení lidského autorství a ta má vlastní závoru: „Před pokračováním vyberte věkové doporučení a potvrďte lidské autorství.“ Průchodem se nic neodpouští. Tlačítko odeslání ke kontrole zůstane neaktivní, dokud něco ze seznamu chybí.

Příběh nese přesně jeden žánr: jednu volbu, ne výčet. Množné číslo v té dvojici patří štítkům.

Jedna položka neblokuje všechny. **Fakturační a výplatní údaje** jsou na seznamu jako ostatní, ale zastaví jen **placené** odeslání. Kapitola zdarma se obejde bez nich.

## Chyby v grafu a varování, která vám nikdo neukáže

Má-li graf chyby, průvodce nahradí jediný řádek *Bez chyb v grafu* jedním řádkem na každou chybu, u každého uvede uzel, na kterém sedí, a nabídne tlačítko **Přejít na uzel**. Výjimkou jsou uzly vnořené ve skupině: průvodce umí pojmenovat jen uzly z té úrovně grafu, kterou máte otevřenou, takže chyba uvnitř skupiny dorazí jako samotná věta, na kterou není kam kliknout.

Obvyklí podezřelí: výstupní port bez propojení, volba bez možností nebo s možností, která nemá text, Switch bez podmínek, ověření dovednosti bez vlastnosti, uzel Konec, do kterého nic nevede, uzel Začátek, do kterého něco vede.

Výstup **Výchozí** u Switche se přehlíží nejčastěji. Je tam vždycky, odejde jím všechno, na co nesedla žádná podmínka, a je to výstupní port jako kterýkoli jiný, takže musí být připojený. Žádná záchytná podmínka se nepřidává.

S varováními je to jinak, protože **průvodce vydáním varování vůbec neukazuje**. Nedosažitelný uzel, textová komponenta bez textu, replika dialogu bez postavy, uzel bez obsahu, podmínka Switche bez požadavků, deklarované pozadí, které se nemá odkud vzít, filmová sekvence bez videa: všechno varování. Žijí v editorovém panelu **Problémy**, který se přepočítá 750 ms po vaší poslední změně, a kapitola, jejíž jediné problémy jsou varování, se odešle a vydá přesně tak, jak je.

Uzel skupiny schová svůj obsah i před tím panelem. Ukáže jen souhrn: „Tato skupina obsahuje obsah s chybami ve validaci.“ Zjištění si přečtete až po otevření skupiny.

- [ ] V grafu nikde žádná chyba, skupiny otevřené a zkontrolované
- [ ] Panel Problémy přečtený v editoru a každé varování na něm je záměr
- [ ] Uzly, kam ze stejné vzdálenosti přicházejí dvě různá pozadí nebo dvě různé stopy, zkontrolované ručně, protože tenhle konflikt kanál utne a nevyvolá žádné varování

## Dojít na konec

- [ ] Alespoň jeden konec, ke kterému se čtenář opravdu dostane, má zapnutý **Konec kapitoly**

Uzel Konec s vypnutým přepínačem uzavře aktuální tok a nabídne přehrát znovu. Kapitolu nedokončí. Pokud jsou všechny dosažitelné konce takové, čtenář dohraje cestu, ale kapitolu nikdy, a nemá ho co přenést do té další. Kontrola počítá i obsah skupin, takže konec uvnitř skupiny platí. Nově vytvořený uzel Konec přichází s přepínačem už zapnutým, takže tohle většinou kousne až po tom, co jste ho někde vypnuli záměrně. Viz [Koncové uzly](/cs/story-editor/end-nodes/).

## Klasifikace, která jde jen jedním směrem

- [ ] Věkové doporučení odpovídá tomu nejvyhrocenějšímu, co v příběhu kdekoli je, ne průměru
- [ ] Tagy obsahu pokrývají, co tam skutečně je, včetně **Citlivých témat**

Trefte to napoprvé. Jakmile je venku kterákoli kapitola příběhu, věkové doporučení lze zvýšit, ale nikdy snížit, a existující tag obsahu už nelze odebrat. Uzamčené tagy to po přejetí myší řeknou samy: „Věkové doporučení nelze snížit, když je kapitola vydaná.“ Přidat tag jde vždycky.

Klasifikace patří **příběhu**, ne kapitole, i když se k ní dostanete z kapitoly. Hodnoťte sérii, kterou plánujete, ne první kapitolu. Viz [Věkové doporučení](/cs/publishing/age-ratings/) a [Obsahové štítky](/cs/publishing/content-labels/).

Čtenáři mohou vydaný příběh nahlásit jako **Nesprávně klasifikováno** a tohle hlášení je cesta, kudy se špatná klasifikace vymáhá.

## Prohlášení o AI

- [ ] Prózu, dialogy ani texty voleb nenapsala generativní AI. Viz [CR-III.1](/cs/publishing/content-rules/#cr-iii-1).
- [ ] Volby pod **Obsah generovaný AI** odpovídají tomu, co jste skutečně vytvořili

Tady se chybuje opačně, než lidé čekají. **AI obrázky**, **AI hudba** i **AI mluvené slovo** jsou zapnuté od začátku, takže přeskočit ten krok neznamená neuvést nic. Znamená to dostat [sazbu](/cs/monetization/pricing/) pro AI za grafiku, hudbu a namluvení, které jste udělali ručně, a rozdíl není malý: u obrázků a u namluvení je lidská sazba dvojnásobná, u hudby víc než dvojnásobná. Jedinou výjimkou je **AI video**. To je od začátku vypnuté a sazba za AI video a za lidské video je stejná, takže na videu nepřijdete o nic ani tak, ani tak.

Vybrat jde jen ty druhy médií, které příběh obsahuje. Zbytek je zašedlý s popiskem „Váš příběh tento druh média neobsahuje.“

Uvést použití AI je povinné podle [CR-III.2](/cs/publishing/content-rules/#cr-iii-2) a nepravdivé prohlášení je samo porušením pravidel ([CR-III.4](/cs/publishing/content-rules/#cr-iii-4)).

## Práva

- [ ] Každý obrázek, stopa, nahrávka i klip je váš, nebo k němu máte licenci. Viz [CR-II.1](/cs/publishing/content-rules/#cr-ii-1).
- [ ] Licenci byste dokázali doložit, kdyby ji po vás někdo chtěl. Viz [CR-II.3](/cs/publishing/content-rules/#cr-ii-3).
- [ ] Nic tam není proto, že se to dalo snadno najít na internetu. Viz [CR-II.2](/cs/publishing/content-rules/#cr-ii-2).

## Soubory médií

- [ ] Seznam chybějících souborů, pokud se objeví, je vyřešený, ne proklikaný
- [ ] Žádná provizorní grafika, žádné zástupné audio

Pokud se příběh odkazuje na média, která už v úložišti nejsou, úloha publikování selže a kapitola se vám vrátí. Pak dostanete okno **Chybějící mediální soubory** s počtem a u každého souboru s místem, kde se používá: v uzlu, avatar postavy, titulní obrázek příběhu, globální událost. Tlačítko **Publikovat bez těchto souborů** pošle kapitolu znovu s vypnutou kontrolou a prázdné místo dorazí ke čtenářům. Testovací sestavení tuhle kontrolu nedělá nikdy, takže z čistého testovacího balíčku tady nic nevyčtete.

## Kontrolní čtení

- [ ] Pravopis a gramatika zkontrolované
- [ ] Jména postav konzistentní v celé kapitole
- [ ] Žádný zástupný text a názvy u uzlů, o kterých bude recenzent potřebovat mluvit. Nepojmenovaný uzel se v panelu Problémy, v průvodci vydáním i v poznámkách recenzenta objeví jako „Uzel 14“; úryvek textu, podle kterého ho poznáváte na plátně, se v žádném z nich neukáže.
- [ ] Kapitolu přečetl alespoň jeden další člověk. Viz [Testování](/cs/best-practices/testing/).

## Detaily k vydání

- [ ] Rozhodnuto, jestli zdarma, nebo placená. Zpoplatnit kapitolu můžete až v autorské fázi **Kvalifikován** nebo **Aktivní partner**, s kompletními fakturačními a výplatními údaji a s cenou v povoleném pásmu. Kvalifikace přijde sama, jakmile vydáte jednu schválenou kapitolu **zdarma**, jejíž vlastní obsah měří alespoň 20 minut, a krok Cena nabízí i druhou cestu: „publikujte volně dostupnou kapitolu s alespoň 20 minutami unikátního obsahu, nebo nás požádejte o kvalifikaci“. Těch 20 minut je veškerý obsah kapitoly, každá větev započítaná jednou, ne její nejdelší cesta, a nedá se poskládat ze dvou kratších kapitol. Viz [Podmínky zpeněžení](/cs/monetization/requirements/).
- [ ] Je-li placená, cena leží v pásmu: zdola polovina doporučení a nikdy méně než 9 EPS, shora 299 EPS. Viz [Ceny](/cs/monetization/pricing/).
- [ ] Plánujete-li předběžný přístup, datum je nejméně 14 dní dopředu, protože kontrola může tak dlouho trvat. Od toho data čtou podporovatelé, všichni ostatní o 7 dní později. Viz [Obsah zdarma a placený obsah](/cs/monetization/free-and-paid-content/).
- [ ] Přispěvatelé uvedení a v kroku **Přispěvatelé** zůstali zaškrtnutí ti správní lidé. Ten krok to říká sám: „Nevybraní přispěvatelé ztratí přístup k dalším verzím; jejich dřívější zpětná vazba zůstane zachována.“

## Po odeslání

Dokud kapitolu drží recenzent, editor je jen pro čtení a v záhlaví svítí **Čeká na kontrolu**. Pokud něco objevíte, stáhněte kapitolu z kontroly, místo abyste čekali na zamítnutí. Stažený koncept se vrátí plně upravitelný; stažená aktualizace vydané kapitoly se vrátí do stavu publikováno, takže se obsah zase otevře, ale struktura grafu zůstane uzamčená.

Zamítnutí vždycky přijde s něčím, z čeho se dá vyjít, protože recenzent nemůže zamítnout mlčky: tlačítko Zamítnout zůstane neaktivní, dokud nezanechá alespoň jednu vlastní poznámku. Poznámky se připínají k uzlu, někdy ke konkrétní komponentě na něm, a poznámku označenou jako prioritní je nutné vyřešit, než kapitolu vůbec někdo schválí. Zamítnutý koncept se vrátí jako koncept. Zamítnutá aktualizace vydané kapitoly se vrátí jako revize a vydaná verze zůstane dál před čtenáři, dokud ji opravujete.

## Související

- [Požadavky na vydání](/cs/publishing/publishing-requirements/)
- [Důvody zamítnutí](/cs/publishing/reasons-for-rejection/)
- [Průběh kontroly](/cs/publishing/review-process/)
- [Testování](/cs/best-practices/testing/)
