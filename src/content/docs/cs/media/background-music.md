---
title: Hudba na pozadí
description: Jak scénu podkreslit hudbou a jak ji přenést přes další uzly.
helpKey: media.music
status: published
sidebar:
  order: 2
---

Hudba na pozadí je jedna zvuková stopa, která hraje pod scénou. Na uzel přidáte komponentu **Hudba na pozadí**, nahrajete soubor a zapnete **Pokračovat v přehrávání**; skladba pak zní dál i na všech navazujících uzlech. Dejte loutnovou smyčku na první uzel scény v hospodě U Zlaté kotvy a bude hrát celým šestiuzlovým rozhovorem, dokud čtenář nevyjde na ulici. Hudba je jeden ze tří mediálních kanálů, které se na každém uzlu vyhodnocují zvlášť, takže běží dál, i když se kolem ní mění pozadí i okolní zvuk.

## Jak hudbu přenést dál

Čerstvě přidaná komponenta zní jen na svém uzlu, protože **Pokračovat v přehrávání** je vypnuté. Pod přehrávačem jsou dva přepínače, ne jeden. **Pokračovat v přehrávání** posílá skladbu dál, **Smyčka** ji opakuje. Oba začínají vypnuté, a protože čtenář může na jednom uzlu zůstat několik minut, dvouminutová skladba bez smyčky nechá většinu dlouhé scény v tichu.

Běžný postup: přidat hudbu na první uzel scény, nahrát skladbu, zapnout oba přepínače a ostatní uzly scény nechat prázdné.

![karta Hudba na pozadí v panelu vlastností: přehrávač s délkou skladby, pod ním přepínače Pokračovat v přehrávání a Smyčka a dole Nahradit a Odebrat](/screens/cs/media/background-music-panel.png)

## Co ji ukončí

- Uzel s vlastní komponentou hudby na pozadí. Přehrávání převezme jeho soubor a komponenta bez souboru znamená ticho od toho místa dál. Takový uzel navíc skončí v seznamu problémů: „Hudba pozadí není nastavena a žádná se nedědí.“
- Zastavení dědění na kanálu hudby. Vytvoříte ho červenou ikonou koše v hlavičce panelu zděděných médií, kde má popisek **Zastavit dědění**. Značka, která vznikne, se jmenuje **Hudba na pozadí** podle kanálu, který blokuje. V paletě komponent pro ni nic není, takže zastavení můžete dát jen na uzel, který právě dědí.
- Konflikt. Dvě skladby, které do stejného uzlu dorazí z různých směrů a jsou stejně daleko, se navzájem vyruší. Nehraje nic, TalePort vypíše oba zdrojové uzly, a když jeden vyberete, zkopíruje se jeho komponenta na tento uzel už se zapnutým **Pokračovat v přehrávání**, takže řetěz pokračuje odsud.

Uzly Začátek a Konec jsou jiný případ: neunesou vůbec žádnou komponentu. Editor odmítne vložení se zprávou „Tento typ uzlu nemůže obsahovat obsahové komponenty.“ a uzel Začátek nebo Konec s komponentou je chyba, která blokuje publikování. Závěrečná obrazovka se skládá z titulního obrázku příběhu a slov „Děkujeme za hraní“; hudbu na ní nenastavíte.

Skupina hudbu propustí dovnitř svým vstupem a zase ven svými výstupy. Jediná věc, která hudbu přeruší, ale neukončí, je [filmová sekvence](/cs/media/video/): na svém uzlu zděděnou hudbu skryje a hraje sama, na dalších uzlech se hudba vrátí.

## Přijímané soubory a co se s nimi stane

Vyberte MP3, WAV, OGG, AAC, M4A nebo FLAC. Ať dodáte cokoli, TalePort to ještě ve vašem prohlížeči převede na MP3 se 96 kbps a stropem 44,1 kHz a nahraje až tento převedený soubor. Ten pak dostanou čtenáři. Z bezztrátového masteru nezískáte nic kromě čistého zdroje k převodu.

Limit 20 MB platí až po převodu, a to je při 96 kbps pořádně dlouhá skladba. První zvukový soubor v každém sezení je ten pomalý: převodník si z CDN stáhne 31 MB kódu ve WebAssembly a začne s tím ve chvíli, kdy otevřete dialog pro výběr souboru. Převod jednoho souboru se po pěti minutách vzdá.

Dvě drobnosti, které vás čekají. Název souboru se přepíše: každý úsek znaků, který není písmeno ani číslice, se změní na jedno podtržítko, takže z `Hudba v hospode (final mix).mp3` bude `Hudba_v_hospode_final_mix.mp3`. A skladba patří té kapitole, ve které jste ji nahráli. Nikde není výběr už nahraných souborů, takže stejný motiv ve druhé kapitole znamená nahrát soubor znovu; shodné soubory se ukládají i balíčkují jen jednou, takže to čtenáře nic nestojí.

## Vyrovnání hlasitosti

Každý nahraný soubor se změří a hlasitost se mu upraví tak, aby skladby z různých zdrojů mezi scénami neskákaly nahoru a dolů. Cílem je -20 dB RMS se špičkami pod -4 dBFS a úprava může jít nahoru i dolů až o 30 dB. Co má -60 dB RMS a méně, bere se jako ticho a zůstane beze změny. Limiter se přidá jen tam, kde by zesílení přeteklo přes strop, takže skladba, která už v pásmu je, si podrží dynamiku, jak jste ji namíchali.

Tohle srovná hlasitost. Nespraví to nahrávku: šum, ruch místnosti a ořez, které v souboru už jsou, se zesílí spolu se vším ostatním.

Občas se převod v prohlížeči nespustí vůbec a soubor se nahraje přesně tak, jak jste ho dodali, bez převodu, bez vyrovnání a bez upozornění. Poznáte to na nahrávací ploše. Vypíše „Originál: 4,2 MB (audio)“ a pak „Komprimováno: 0,6 MB“; dvě stejná čísla znamenají, že se nic nestalo.

## Hudba, okolní zvuk a dabing jsou oddělené

Hudba, [okolní zvuk](/cs/media/ambient-sound/) a [dabing](/cs/media/voice-over/) jsou nezávislé kanály. Hudba může běžet beze změny, zatímco se okolní zvuk přepne z hospody na ulici, a přes obojí zní mluvené slovo. Hudbu nezastaví ani změna pozadí, takže pokud má se změnou scény přijít i jiný podkres, nastavte hudbu i na tom uzlu.

## Praktické rady

- Podkreslujte scény, ne uzly. Skladba, která se mění s každou obrazovkou, je vyčerpávající.
- Používejte ticho. Scéna bez hudby po dvaceti minutách podkresu udeří silněji než další skladba.
- Hlídejte čistou smyčku. Slyšitelný šev každých devadesát sekund je horší než žádná hudba.
- Sledujte součty. Nabídka **Statistiky** ve stavovém řádku editoru ukazuje **Délku zvuku**, do které se každá skladba počítá jednou za celou kapitolu, takže stejná smyčka na třiceti uzlech přidá svou délku jen jednou.
- **Ověřte si práva.** Na cizí hudbu se vztahuje [CR-II.2](/cs/publishing/content-rules/#cr-ii-2). „Royalty-free“ neznamená „bez licence“; licenci si přečtěte.
- **Víc hudby cenu nezvedne.** Hudba se do [doporučené ceny](/cs/monetization/pricing/) počítá jako ano nebo ne, nikdy podle minut: 12 Kč na hodinu příběhu za hudbu od člověka, 5 Kč za hudbu od AI. Druhá skladba nezmění nic, deklarace AI ano.

## Související

- [Okolní zvuk](/cs/media/ambient-sound/)
- [Dabing](/cs/media/voice-over/)
- [Práce s médii](/cs/best-practices/media-usage/)
