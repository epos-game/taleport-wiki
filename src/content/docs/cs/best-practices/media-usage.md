---
title: Práce s médii
description: Jak používat obrázky, hudbu a video tak, aby příběhu pomáhaly, a ne jen stály.
helpKey: best-practices.media
status: published
sidebar:
  order: 3
---

Média jsou na uzlech a řeší se na třech nezávislých kanálech: pozadí, hudba a okolní zvuk. Kanál nastavíte jednou, zapnete u něj přepínač přenosu dál a každý navazující uzel ho zdědí, dokud ho něco neukončí. Dejte pozadí a zvuk deště na uzel *Krčma, noc*, zapněte oba přepínače a jedenáct uzlů dialogu, které následují, se přehraje nad nimi bez jediného dalšího souboru. Všechno, co nahrajete, se zabalí do balíčku kapitoly, který si čtenář stahuje, a právě tahle váha stojí za vším ostatním na této stránce.

## Tři kanály a jediné místo pro pozadí

- **Pozadí**: obrázek, *nebo* video. Jedno místo, takže uzel nese jedno, nebo druhé. Editor to říká naplno: „Uzel může obsahovat buď obrázek pozadí, nebo video pozadí, ne obojí.“
- **Hudba** a **Okolní zvuk**: dvě místa, která se řeší zvlášť a hrají společně; právě proto může pod scénou běžet hudba a za ní dál pršet.

U každého uzlu se ptejte, co je na pozadí, co na hudbě a co na okolním zvuku. Kdo myslí v souborech místo v kanálech, nahraje tytéž soubory dvakrát.

## Přenesení média dál se zapíná

Snadno se předpokládá, že pozadí nebo stopa hrají dál, dokud je něco nevystřídá. Nehrají, samy od sebe ne. Každá komponenta médií má přepínač, **Pokračovat v zobrazování** u pozadí a **Pokračovat v přehrávání** u hudby, okolního zvuku a videa pozadí, a u čerstvě přidané komponenty je vypnutý. Dokud ho nezapnete, patří to médium svému uzlu a ničemu dalšímu.

Funguje tedy tenhle postup. Nastavte pozadí a hudbu jednou na začátku scény, tam zapněte přepínač a uzly pod tím nechte prázdné. Všechno navazující kanál zdědí, dokud ho něco neukončí. Nedávejte stejný obrázek na dvacet uzlů; je to těžší stahování a dvacet míst k údržbě pro jediný výsledek.

Pokud by k uzlu mohly dorazit dva zdroje, vyhrává bližší; vzdálenost se počítá na propojení.

Skupina není hradba. Pozadí nastavené mimo skupinu přejde dovnitř jejím vstupem a pozadí nastavené uvnitř pokračuje jejími výstupy dál. Pokud do jednoho vstupu skupiny vede víc propojení, vyhrává první, které nese médium, bez konfliktu a bez varování.

Jedna věc přijde s přepínačem už zapnutým: kopie, kterou vám TalePort vytvoří, když v panelu konfliktu vyberete zdroj nebo po značce zastavení použijete **Použít vlastní médium**.

## Prázdná komponenta není rezervace místa

Uzel, který má na daném kanálu vlastní komponentu, na tom kanálu nikdy nedědí, **i když v té komponentě zatím žádný soubor není**. Když přidáte prázdnou komponentu pozadí, abyste si to místo podrželi, nepodržíte nic. Na tom uzlu kanál umlčíte, a protože jím nic neprochází, umlčíte ho i na všem, co následuje.

Editor na to upozorní („Pozadí není nastaveno a žádné se nedědí.“), jenže varování vydání nezastaví. Pokud ještě nevíte, jaký obrázek to bude, nepřidávejte nic.

## Když se setkají dva zdroje, nehraje nic

Pokud k uzlu dorazí dva různé zdroje téhož kanálu z různých stran a jsou stejně daleko, TalePort nehádá. Na tom uzlu nehraje na tom kanálu **nic**, a protože jím nic neprochází, nehraje nic ani na tom, co následuje.

Co se počítá jako dva zdroje, je ale užší, než to vypadá. Dědění si pamatuje uzel, kterému médium patří, ne souseda, od kterého přišlo. Dvě větve, které zdědily jedno pozadí nastavené nad rozvětvením, proto nesou stejného vlastníka a svedou se zpátky bez problému. Samotný tvar „rozvětvi a sveď zpátky“ je bezpečný. Konflikt potřebuje dva oddělené zdroje: pozadí uvnitř levé větve, druhé uvnitř pravé, a oba dorazí stejně daleko.

Editor konflikt na uzlu ukáže a u každého zdroje nabídne **Přejít na zdrojový uzel**, případně **Přidat vlastní**, ale **žádný problém validace z toho nevznikne, v žádné závažnosti**. V seznamu problémů se neobjeví a vydání nezastaví. Pokud nastavíte média uvnitř obou větví, zkontrolujte si místo, kde se sbíhají, sami.

![karta Pozadí na uzlu, kam zároveň dorazila dvě pozadí, u každého je uvedený uzel, odkud přišlo, a pod nimi Přidat vlastní](/screens/cs/media/media-conflict-panel.png)

## Jedno pozadí na scénu

Pozadí, které se mění každou obrazovku, přestane cokoli znamenat. Vyměňte ho, když se mění místo nebo okamžik, a pak to zabere.

## Ticho a nehybnost jsou nástroje

Scéna bez hudby po dvaceti minutách podkresu je záměrný efekt a uděláte ho zastavením dědění. Na uzlu otevřete panel zděděných médií a použijte **Zastavit dědění**. Na uzlu pak zůstane značka, kterou zrušíte přes **Obnovit dědění** nebo nahradíte přes **Použít vlastní médium**.

Co s běžícím kanálem udělá která věc:

- **Značka zastavení** ukončí kanál na svém uzlu a na všem, co následuje, dokud ho něco nového nezačne.
- **Filmová sekvence** skryje všechny tři kanály, ale jen na svém uzlu. Hraje sama a na uzlech za ní zděděná média pokračují.

Uzel Konec se chová jinak než obojí. Nepřijme vůbec žádnou obsahovou komponentu, pozadí v to počítaje, takže poslední obrazovka, která může pozadí ukázat, je uzel před ním. Za uzlem Konec navíc nic nenásleduje; nemá výstupní port.

## S videem šetřete

[Video](/cs/media/video/) je s velkým náskokem nejtěžší věc v kapitole. Úvod, klíčový okamžik, ne výzdoba. A nikdy nedávejte informaci jen do videa: někdo ho přeskočí, někdo čte s vypnutým zvukem.

Dřív než začnete točit nebo něco kupovat, počítejte s tím, co si která varianta vezme. Filmová sekvence si bere celý uzel: vedle ní smí stát jen kontrolní bod a značka zastavení, uzel musí mít jednoduchý přechod a text, dialog ani volbu na stejnou obrazovku nedostanete. Video pozadí zabírá místo pro pozadí, takže ten uzel nemůže mít obrázek na pozadí.

Délkou kapitoly ani jedno neobhájíte. Délka se počítá především z textu, 1000 znaků na minutu; čas filmové sekvence se přičte jen na uzlu, kde není text ani namluvení, a video pozadí ve smyčce se nepočítá vůbec. Kapitola plná podkresu a pohyblivé tapety naměří nula minut, a nula minut odeslat nejde.

## Limity, uvnitř kterých se pohybujete

| | Limit |
| --- | --- |
| Obrázek | 5 MB po překódování |
| Audio | 20 MB |
| Filmová sekvence | 25 MB |
| Video pozadí | 1 MB |

Obrázek pozadí a titulní obrázek příběhu se kontrolují na poměr 9:16 s pětiprocentní tolerancí a při nahrávání se odmítnou, pokud ho nemají. Video musí být na výšku a nejvýše 1080 × 1920, mp4 s obrazem H.264 a zvukem AAC. Na poměr 9:16 se u videa nekontroluje, takže záběr 3:4 projde.

Rozdíl, na kterém v praxi záleží: **obrázky a zvuk se překódují ve vašem prohlížeči, video ne**. Nahrajte ten nejlepší obrázek, který máte, a nechte TalePort, ať ho zkomprimuje do webp. Zvuk se vrátí jako mp3 do 96 kb/s, převzorkovaný nejvýše na 44,1 kHz a hlasitostně normalizovaný k -20 dBFS RMS se špičkovým stropem -4 dBFS, což je dobré vědět, pokud jste si stopu míchali sami. U videa je jedinou kompresí, kterou dostanete, nastavení, ve kterém ho vyrenderujete; z jednoho megabajtu dostanete pár sekund záběru s málo pohybem, takže vyberte něco, co se čistě opakuje a téměř se nehýbe.

## Chybějící soubory jsou upozornění, ne závora

Při vydání nebo při sestavení testovacího balíčku vám TalePort vypíše média, na která se příběh odkazuje, ale nejsou v úložišti, a u každého řekne, kde se používá: v uzlu, jako avatar postavy, jako titulní obrázek příběhu nebo u globální události. Můžete je nahrát znovu, odebrat nebo zvolit **Publikovat bez těchto souborů**.

Ta poslední možnost je skutečná: **chybějící soubor odeslání nezablokuje**. Pro čtenáře tam prostě nebude. Ten seznam si přečtěte, místo abyste ho jen proklikali.

## Veďte si přehled o právech

Zapisujte si, odkud každý soubor pochází a pod jakou licencí, **už ve chvíli, kdy ho přidáváte**. Za práva ke všemu, co odešlete, odpovídáte vy a TalePort může požádat o předložení licence, souhlasu nebo dokladu o vlastnictví práv ([CR-II.3](/cs/publishing/content-rules/#cr-ii-3)); obsah může být zamítnut nebo odstraněn, pokud je důvodné podezření, že porušuje práva třetích stran. Dohledávat původ čtyřiceti souborů o pár měsíců později je utrpení.

Editor vám k tomu dává místo. Klikněte na uzel pravým tlačítkem a přes **Přidat poznámku** si zdroj zapište přímo k obrazovce, které patří. Dvě pasti za zmínku: to, že je materiál veřejně dostupný na internetu, není svolení ([CR-II.2](/cs/publishing/content-rules/#cr-ii-2)), a „royalty-free“ je licence s podmínkami, ne nepřítomnost licence.

## Použití AI uvádějte průběžně

Zapisujte si, které soubory vznikly pomocí AI nebo s její asistencí, už při jejich přidávání, ne až při odesílání, kdy se to snažíte vybavit.

Prohlášení se dělá jednou za příběh, v kroku Klasifikace průvodce vydáním, v sekci **Obsah generovaný AI**. Jsou tam čtyři možnosti: AI obrázky, AI hudba, AI mluvené slovo a AI video. Vybrat lze jen ty druhy médií, které příběh skutečně obsahuje; zbytek je nedostupný s poznámkou „Váš příběh tento druh média neobsahuje.“

Obrázky, hudba a mluvené slovo začínají u příběhu označené jako AI. Když ten krok přeskočíte, vydáte vlastnoručně vytvořenou grafiku jako dílo AI a dostanete za ni [sazbu](/cs/monetization/pricing/) pro AI: u obrázků a namluvení polovinu lidské sazby, u hudby ještě méně. Video se vymyká dvakrát: začíná označené jako lidské a jeho sazba pro AI i pro člověka je stejná, takže na ceně se tou volbou nic nezmění.

Špatné prohlášení je samo porušením pravidel. Uvést použití AI je povinné ([CR-III.2](/cs/publishing/content-rules/#cr-iii-2)) a úmyslné zatajení se bere vážně ([CR-III.4](/cs/publishing/content-rules/#cr-iii-4)).

## Související

- [Obrázky](/cs/media/images/)
- [Hudba na pozadí](/cs/media/background-music/)
- [Video](/cs/media/video/)
- [Typy uzlů](/cs/story-editor/node-types/)
