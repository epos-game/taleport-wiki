---
title: Požadavky na vydání
description: Všechno, co musí platit, než se dá kapitola odeslat ke kontrole.
helpKey: publishing.requirements
status: published
sidebar:
  order: 7
---

Než TalePort vezme kapitolu ke kontrole, prověří váš autorský profil, příběh, do kterého kapitola patří, i kapitolu samotnou. První krok dialogu publikování, **Validace** s nadpisem *Připraveno k publikaci?*, provede čtrnáct z těch kontrol a vypíše je jako splněné nebo nesplněné řádky, takže se nic neobjeví až na odesílací obrazovce. Otevřete ho nad kapitolou „Kapitola 2: Solná stezka“, které chybí titulní obrázek a popis, a na začátku seznamu máte dva nesplněné řádky, u každého tlačítko **Zkontrolovat metadata**. Jak je v dalším kroku doplníte, oba se přesunou do skupiny pod nimi.

Nesplněné řádky jsou první, pod hlavičkou **Vyžaduje pozornost**. Splněné následují pod **Hotovo**. U většiny nesplněných řádků je akce, která vás dovede přímo k opravě: **Otevřít profil**, **Otevřít fakturační nastavení**, **Zkontrolovat metadata**, **Otevřít kapitoly**. Dva řádky žádnou nemají, protože není kam poslat: *Graf příběhu obsahuje přehratelný obsah* a *Dosažitelný konec kapitoly*.

U kapitoly ve stavu Návrh nebo Testování se dialog otevře o obrazovku dřív, otázkou *Jak chcete příběh publikovat?*, kde vybíráte mezi soukromým testovacím balíčkem a odesláním ke kontrole. Co pak posuzuje recenzent, je jiná věc: to jsou [pravidla obsahu](/cs/publishing/content-rules/) plus [zásady pro příběhy](/cs/publishing/story-guidelines/).

![krok Připraveno k publikaci? dialogu publikování: nesplněné řádky pod Vyžaduje pozornost na začátku seznamu, splněné pod Hotovo níž](/screens/cs/publishing/validation-step.png)

## Váš autorský profil

Tři řádky nemají s příběhem nic společného a zastaví většinu autorů při prvním vydávání: **Zobrazované jméno autora**, **Životopis autora** a **Avatar autora**. Dokud nejsou splněné, z kroku Validace se nedostanete dál. Kontrola životopisu navíc nejdřív odstraní HTML, takže životopis z prázdného formátování se pořád počítá jako chybějící.

Čtvrtý řádek profilu, **Fakturační a výplatní údaje**, je na celém seznamu jediná výjimka. Hlásí chybu vždy, když údaje nemáte kompletní, a kapitolu zdarma přesto odešlete. Zastaví jen kapitolu placenou.

## Příběh

Nastavuje se jednou za příběh a platí pro všechny jeho kapitoly.

- **Název příběhu**, **popis příběhu** a **titulní obrázek**
- Právě jeden [žánr](/cs/publishing/genres-and-tags/) a alespoň jeden [štítek](/cs/publishing/genres-and-tags/)
- [Věkové doporučení](/cs/publishing/age-ratings/), které odpovídá nejextrémnějšímu obsahu kdekoli v příběhu
- Potvrzené lidské autorství: zaškrtávací políčko, kterým stvrzujete, že text příběhu napsal lidský autor a nevygenerovala ho AI. Viz [CR-III.1](/cs/publishing/content-rules/#cr-iii-1).

Poslední dvě položky se jako řádky na kontrolním seznamu neobjeví nikdy. Nastavují se v kroku **Klasifikace**, kde zůstane tlačítko Další neaktivní, dokud nevyberete věkové doporučení a nezaškrtnete políčko. Server si obojí při odeslání ověří znovu.

Ten krok se ukládá, jakmile z něj odejdete. Tlačítko Další zapíše do příběhu věkové doporučení, obsahové štítky, prohlášení o AI i potvrzení autorství okamžitě, a pozdější zrušení dialogu už nic z toho nevezme zpátky. Jak je jedna kapitola příběhu venku, dá se doporučení zvýšit, ale ne snížit, a obsahový štítek, který na příběhu už je, nelze odebrat. Oboje se ukáže jako zašedlý štítek s vysvětlujícím popiskem.

## Kapitola

- **Popis kapitoly** a k tomu název kapitoly, který krok Metadata vyžaduje, než vás pustí dál.
- Alespoň jeden konec dosažitelný ze začátku a označený jako **Konec kapitoly**. Kapitola může mít [koncových uzlů](/cs/story-editor/end-nodes/) mnoho; tato kontrola se ptá, jestli čtenář dokončí celou kapitolu, a ne jen jednu větev.
- **Bez chyb v grafu.** Upozornění neblokují, chyby ano, a každá chyba má vlastní řádek. Akci **Přejít na uzel** nabídne řádek jen tehdy, když chyba patří konkrétnímu uzlu, takže chybějící uzel Začátek nebo nedosažitelný konec se vypíše jako řádek bez odkazu. Viz [zásady pro příběhy](/cs/publishing/story-guidelines/).
- *Graf příběhu obsahuje přehratelný obsah.* Výpočet ceny potřebuje, aby nejdelší cesta, kterou čtenář může projít, vyšla nad nulu minut. Téměř prázdná kapitola spadne tady.
- *Předchozí kapitoly jsou připravené ke kontrole.* Kapitoly jdou ke kontrole v pořadí, takže každá kapitola před touto už musí být venku, nebo v kontrole.

Na prvním kroku vás drží čtyři z těch řádků: dosažitelný konec, chyby v grafu, přehratelný obsah a pořadí kapitol. Popis kapitoly patří k metadatům, takže vás pustí dál, a stejně tak zbytek metadat, nevybrané věkové doporučení i nekompletní fakturace. Opravují se v dalších krocích.

## Co odeslání neblokuje

- [Obsahové štítky](/cs/publishing/content-labels/): volitelné a kontrolní seznam se po nich vůbec nedívá.
- Přispěvatelé. Ten krok jen určuje, kdo si po vydání kapitoly udrží přístup k příběhu.
- Fakturační údaje u kapitoly zdarma.
- Upozornění z validace: nedosažitelný uzel, uzel bez obsahu, pozadí nebo skladba bez souboru. Editor na ně upozorní a odeslat vás nechá.

Zrada v tom seznamu jsou chybějící mediální soubory. Do úložiště se dialog vůbec nepodívá, takže odeslání projde a rozsype se až sestavování balíčku na pozadí: kapitola se vám vrátí s hlášením *Publikování selhalo a kapitola vám byla vrácena* a teprve pak dialog vypíše každý chybějící soubor i odkaz na místo, kde ho příběh používá. **Publikovat bez těchto souborů** otevře dialog publikování znovu a problém promine, což znamená projít sedm kroků podruhé.

## Co v dialogu prohlašujete

- **Zdarma, nebo placená**, a u placené cena. Viz [Obsah zdarma a placený obsah](/cs/monetization/free-and-paid-content/).
- **Obsah generovaný AI.** Pod tímto nadpisem jsou čtyři štítky: AI obrázky, AI hudba, AI mluvené slovo a AI video. Přepnout lze jen druhy, které váš příběh skutečně obsahuje, ostatní jsou zašedlé s popiskem „Váš příběh tento druh média neobsahuje.“, a obrázky, hudba i mluvené slovo začínají vybrané. Je to prohlášení podle [CR-III.2](/cs/publishing/content-rules/#cr-iii-2) a vstupuje do doporučené ceny: druh, který označíte za lidskou tvorbu, se počítá výš než ten samý druh vygenerovaný AI.
- Práva ke každému obrázku, skladbě, nahrávce a klipu. Nic z toho průběh vydání nekontroluje. Pravidlo je [CR-II.1](/cs/publishing/content-rules/#cr-ii-1) a řeší se při kontrole.

Políčko o autorství je jediná věc kolem AI, která odeslání zastaví. Ty čtyři štítky ho nezastaví nikdy.

## Zpoplatnění kapitoly

Dvě podmínky, obě o vás, ne o tomhle příběhu:

- Jste **kvalifikovaný** autor, nebo aktivní partner.
- Máte kompletní fakturační a výplatní údaje.

Kapitole zdarma se nic z toho do cesty nepostaví. Kvalifikaci získáte sami, jakmile je jedna z vašich kapitol zdarma schválená a ta jedna kapitola obsahuje alespoň dvacet minut unikátního obsahu; dvě desetiminutové se na to nesečtou. Můžete o ni také TalePort požádat. Jak se čas měří, popisují [Podmínky zpeněžení](/cs/monetization/requirements/).

## Související

- [Vydání kapitoly](/cs/getting-started/publishing/)
- [Příprava obsahu ke kontrole](/cs/best-practices/preparing-for-review/)
- [Průběh kontroly](/cs/publishing/review-process/)
- [Zásady pro příběhy](/cs/publishing/story-guidelines/)
