---
title: Zásady pro příběhy
description: Co editor zablokuje, na co jen upozorní a co posuzuje recenzent.
helpKey: publishing.story-guidelines
status: published
sidebar:
  order: 2
---

[Pravidla obsahu](/cs/publishing/content-rules/) říkají, co je povolené. Tahle stránka říká, co je dost hotové na vydání, a rozděluje problémy podle toho, u které branky uvíznou: chyby, které editor nepustí dál, upozornění, na která jen ukáže a odeslat vás přesto nechá, a to, co si přečte recenzent. Podle toho poznáte, co musíte spravit ještě před odesláním a co může počkat. Uzel s volbami „Most za rozbřesku“, kde třetí možnost zůstala prázdná, je chyba a kapitola ke kontrole nepůjde, dokud text nedoplníte; tentýž uzel s replikou dialogu bez přiřazené postavy je jen upozornění a odešlete ho tak, jak je.

## Co editor zablokuje

Tohle editor hlásí jako chyby a kapitola, která některou z nich má, se nedá odeslat. Každá chyba má v kontrolním seznamu kroku Validace svůj vlastní řádek označený uzlem, na kterém sedí, a u chyb vázaných na uzel i odkaz **Přejít na uzel**. Chyby celého grafu nemají kam odskočit, takže zůstanou jen jako řádek textu.

Tvar grafu:

- V grafu chybí uzel Začátek, nebo uzel Konec.
- Do uzlu Začátek vede propojení.
- Uzel má výstupní port, který nikam nevede.
- Uzel Začátek nebo Konec obsahuje komponenty obsahu. Oba jsou jen rozcestníky a zůstávají prázdné.

Tři další kontroly běží na grafu kapitoly, ale uvnitř podgrafu [skupiny](/cs/story-editor/groups/) se přeskakují:

- Z uzlu Začátek není dosažitelný žádný uzel Konec.
- V grafu je víc než jeden uzel Začátek.
- Do uzlu Konec nevede žádné propojení.

Uvnitř skupiny se místo toho kontroluje její hranice. Uzel Začátek skupiny musí vést na něco uvnitř skupiny a do jejího uzlu Konec musí něco uvnitř skupiny vést. Uzel, na který cílí [globální událost](/cs/story-editor/global-events/), kontrola výstupních portů vynechává, protože se do něj skáče událostí, ne propojením z grafu.

Uvnitř uzlu:

- Uzel Volba nemá žádnou možnost, nebo některá z možností nemá text.
- Uzel Switch nemá nastavenou ani jednu podmínku.
- Uzel s ověřením dovednosti nemá vybranou vlastnost.
- Na jednom uzlu jsou dvě komponenty, které spolu nemohou být: text s dialogem, dvě stejného druhu, obrázkové pozadí s videopozadím nebo pozadí společně se značkou, která dědění pozadí zastavuje. Filmová sekvence je ještě přísnější. Vedle sebe snese jen kontrolní bod nebo zastavení dědění a uzel si musí nechat jednoduchý přechod.

Globální události se kontrolují proti kapitole, které patří, takže tyhle tři chyby padnou na graf, ne na uzel: událost míří na proměnnou, která už neexistuje; událost vrací čtenáře na začátek kapitoly, která nemá uzel Začátek; událost vrací čtenáře na poslední kontrolní bod, a žádný v kapitole není.

Dvě další kontroly se spustí až při odesílání, ne během psaní: alespoň jeden dosažitelný konec musí být označený jako **Konec kapitoly** a kapitola musí mít dost obsahu, aby se z něj dala spočítat cena. V seznamu se objeví jako **Dosažitelný konec kapitoly** a **Graf příběhu obsahuje přehratelný obsah**. Ani jeden z těch řádků nenabízí odskok, problém si tedy musíte najít sami. Viz [Požadavky na vydání](/cs/publishing/publishing-requirements/).

### Ke switchům

U switche se kontroluje, že má alespoň jednu podmínku a že každý výstup, který z něj vede, někam míří. Včetně portu **Výchozí**, který vzniká spolu s uzlem a odebrat se nedá; switch bez výchozí větve tedy nepostavíte. Podmínka bez požadavků se nesplní nikdy, a to je jen upozornění.

## Na co editor jen upozorní

Nic z toho odeslání nezastaví a do kontrolního seznamu kroku Validace se nedostane. Přesto se to vyplatí uklidit, protože recenzent čte kapitolu tak, jak by ji četl čtenář, a tohle je právě to, čeho si čtenář všimne.

- Uzel není dosažitelný z uzlu Začátek. Uzly, na které cílí globální událost, jsou z téhle kontroly vyjmuté.
- Uzel nemá žádný obsah.
- Textová komponenta nemá text.
- Komponenta Dialog nemá žádnou repliku, nebo replika nemá přiřazenou postavu či text.
- Komponenta Událost nemá nastavenou žádnou událost.
- Podmínka switche nemá žádný požadavek, takže se nesplní nikdy.
- Pozadí, hudba na pozadí nebo okolní zvuk nejsou nastavené a nic se nedědí.
- Komponenta s filmovou sekvencí nemá video.
- Do vstupu skupiny nevede žádné propojení.
- Dvě globální události mají stejnou proměnnou, operátor i hodnotu.

## Co posuzuje recenzent

Nic z toho, co následuje, editor nekontroluje. Recenzent může vážit pravidla, věkové doporučení, uvedení AI, práva k médiím i technické požadavky a před schválením si může vyžádat změny ([CR-V.1](/cs/publishing/content-rules/#cr-v-1)).

### Dokončenost

Kapitola potřebuje začátek, prostřední část a bod, kdy skončí; libovolný výřez z delšího konceptu to není. Volby, které skončí na prázdném uzlu, se jí počítají k tíži, a editor na ně jen upozorní. Druhá věc, která kontrolou projde, je provizorní obsah: lorem ipsum, `TODO` zapomenuté v replice i dočasná grafika jsou pro validaci neviditelné a pro čtenáře zjevné.

### Jazyk a podoba textu

Před odesláním udělejte korekturu. Kontrola pravopisu a gramatiky je podle [CR-III.1](/cs/publishing/content-rules/#cr-iii-1) povolená, stejně jako překlad, pokud text pod tím napsal člověk. Jména musí držet celou kapitolu: postava, která se v jedné scéně jmenuje Mira a v druhé Míra, vypadá jako chyba, protože to chyba je. Vyprávění patří do textových komponent, řeč do komponent Dialog a text do odstavců, ne do jednoho bloku.

### Interaktivita

Kapitola, kde se každá volba okamžitě vrátí do stejného místa a nic nezmění, je lineární příběh s pár kliknutími navíc. Když si vedete [proměnnou](/cs/story-editor/variables/), mělo by se podle ní někde dál větvit. Čtenář, který neuspěje v [ověření dovednosti](/cs/story-editor/skill-checks/), musí mít možnost kapitolu dokončit; neúspěšný hod, který nikam nevede, je díra, ne důsledek.

### Média

Ke každému obrázku, skladbě, nahrávce a klipu, který nahrajete, musíte mít práva ([CR-II.1](/cs/publishing/content-rules/#cr-ii-1)). Pokud médium vygenerovala AI nebo s jeho vznikem pomohla, uveďte to v kroku Klasifikace ([CR-III.2](/cs/publishing/content-rules/#cr-iii-2)). Média používejte tam, kde odvedou práci: stejné pozadí na čtyřiceti uzlech za sebou působí jako vata. Viz [Práce s médii](/cs/best-practices/media-usage/).

### Klasifikace

Věkové doporučení musí odpovídat nejextrémnějšímu obsahu kdekoli v příběhu, ne průměru ([CR-IV](/cs/publishing/content-rules/#cr-iv)). Obsahové štítky musí odpovídat tomu, co v příběhu skutečně je. Obojí patří k příběhu, ne ke kapitole, a obojí se utáhne v okamžiku, kdy je první kapitola vydaná: doporučení se dá zvýšit, ale už nikdy snížit, a štítek, který na příběhu jednou je, se nedá odebrat. Viz [Obsahové štítky](/cs/publishing/content-labels/).

## Související

- [Pravidla obsahu](/cs/publishing/content-rules/)
- [Požadavky na vydání](/cs/publishing/publishing-requirements/)
- [Příprava obsahu ke kontrole](/cs/best-practices/preparing-for-review/)
