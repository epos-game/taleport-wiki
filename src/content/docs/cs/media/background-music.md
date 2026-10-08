---
title: Hudba na pozadí
description: Jak scénu podkreslit hudbou a jak ji přenést přes další uzly.
helpKey: media.music
status: published
sidebar:
  order: 2
---
Hudba na pozadí hraje pod scénou. Přidáte ji takto:

1. Přidejte na uzel komponentu **Hudba na pozadí**.
2. Nahrajte soubor.
3. Zapněte **Pokračovat v přehrávání**, aby skladba zněla i na navazujících uzlech.

Hudba je jeden ze tří mediálních kanálů. Každý kanál se na uzlu vyhodnocuje zvlášť, takže hudba hraje dál, i když se mění pozadí a okolní zvuk.

## Dědění hudby

Nově přidaná komponenta zní jen na svém uzlu. Pod přehrávačem jsou dva přepínače a oba jsou vypnuté.

- **Pokračovat v přehrávání** posílá skladbu dál.
- **Smyčka** ji opakuje.

Čtenář může na jednom uzlu zůstat i několik minut. Dvouminutová skladba s vypnutou **Smyčkou** nechá většinu dlouhé scény v tichu.

Hudba se obvykle dává na první uzel scény s oběma přepínači zapnutými. Ostatní uzly scény zůstanou prázdné.

![karta Hudba na pozadí v panelu vlastností: přehrávač s délkou skladby, pod ním přepínače Pokračovat v přehrávání a Smyčka a dole Nahradit a Odebrat](/screens/cs/media/background-music-panel.png)

Uzel, který skladbu zdědí, ukáže stejnou kartu. Nad přehrávačem je **Zděděno z** a jméno zdrojového uzlu. Kliknutím na jméno na ten uzel skočíte.

![karta zděděné hudby s nadpisem Hudba na pozadí, nad přehrávačem stojí Zděděno z a jméno uzlu, ze kterého se hudba dědí, tady Uzel 3](/screens/cs/story-editor/inherited-music-panel.png)

## Ukončení dědění {#inheritance}

Dědění hudby ukončí tři věci.

- **Uzel s vlastní komponentou Hudba na pozadí.** Přehrávání převezme jeho soubor. Komponenta bez souboru znamená ticho od toho uzlu dál a uzel se objeví v seznamu problémů: „Hudba pozadí není nastavena a žádná se nedědí.“
- **Zastavení dědění na kanálu hudby.**
  - Klikněte na červenou ikonu koše, **Zastavit dědění**, v hlavičce panelu zděděných médií.
  - Zastavení se jmenuje **Hudba na pozadí** podle kanálu, který blokuje.
  - V paletě komponent není, takže ho jde přidat jen na uzel, který už dědí.
  - Když na takový uzel přidáte komponentu Hudba na pozadí, nahradí zastavení. Jde to vzít zpět jedním krokem.
- **Konflikt.** Vyhrává nejbližší zdroj, vzdálenost se počítá v propojeních. Když do uzlu dorazí dvě skladby z různých směrů a jsou stejně daleko, nehraje nic. TalePort vypíše oba zdrojové uzly. Když jeden vyberete, jeho komponenta se zkopíruje na tento uzel se zapnutým **Pokračovat v přehrávání**.

### Kam hudbu nelze dát

Uzly Začátek a Konec komponenty nenesou. Editor vložení odmítne hláškou „Tento typ uzlu nemůže obsahovat obsahové komponenty.“ Uzel Začátek nebo Konec s komponentou je chyba, která blokuje vydání. Hudbu na závěrečnou obrazovku tedy dát nemůžete.

### Skupiny a filmové sekvence

- Skupina hudbu propouští dovnitř svým vstupem a ven svými výstupy.
- Když do stejného vstupu nebo ke stejnému výstupu zevnitř dorazí dvě skladby, konflikt nevznikne. Dál pokračuje ta, jejíž propojení jste nakreslili dřív.
- [Filmová sekvence](/cs/media/video/) hudbu přeruší, ale neukončí. Na svém uzlu skryje zděděnou hudbu a hraje sama. Na dalších uzlech se hudba vrátí.

## Podporované soubory

Nahrát můžete soubory MP3, WAV, OGG, AAC, M4A a FLAC.

- Váš prohlížeč soubor převede na MP3 se 96 kbps a stropem 44,1 kHz. Nahraje se až převedený soubor a ten dostanou i čtenáři.
- Limit 20 MB platí až po převodu.
- Název souboru se při nahrání přepíše. Každý úsek znaků, který není písmeno ani číslice, se změní na jedno podtržítko. Z `Hlavní motiv (finální mix).mp3` bude `Hlavní_motiv_finální_mix.mp3`. Pod tímto názvem soubor uvidíte u přehrávače.
- Skladba patří kapitole, ve které jste ji nahráli, takže stejnou skladbu ve druhé kapitole nahrajete znovu.

## Vyrovnání hlasitosti

TalePort každý nahraný soubor změří a upraví jeho hlasitost, aby skladby z různých zdrojů mezi scénami neskákaly.

- Cíl je průměr -20 dB RMS, tedy hlasitost, na kterou se masterují audioknihy.
- Nejhlasitější místa zůstanou pod -4 dBFS, kousek pod úrovní, kde se zvuk začne zkreslovat.

Vyrovnání opravuje jen hlasitost. Šum, ruch místnosti a ořez, které už v souboru jsou, se zesílí spolu se zbytkem.

## Oddělené kanály

Hudba, [okolní zvuk](/cs/media/ambient-sound/) a [dabing](/cs/media/voice-over/) jsou nezávislé kanály. Hudba běží beze změny, zatímco se okolní zvuk přepne, a dialog zní přes obojí.

Změna pozadí hudbu nezastaví. Když má se změnou scény přijít i jiná hudba, nastavte ji na tom uzlu.

## Poslech v editoru

Vyberte uzel a otevřete kartu **Náhled** pod rámem telefonu. Karta **Zvuk** vypíše každou stopu, která na uzel dosahuje, jednu na řádek. Řádek je označený **Hudba** nebo **Okolní zvuk** a u stopy z dřívějšího uzlu je i **zděděno**.

Jedno tlačítko spustí všechny stopy naráz a ty se smyčkou opakuje. Je to jediné místo v editoru, kde uslyšíte mix tak, jak ho uslyší čtenář. Nad rámem stojí *Přibližný náhled. Finální vykreslení v EPOS se může lišit.*

## Dobré vědět

- **Délka zvuku** v nabídce **Statistiky** ve stavovém řádku editoru počítá každou hudební nebo zvukovou stopu jednou za kapitolu. Stejná smyčka na třiceti uzlech se tak započítá jen jednou. Číslo zahrnuje i každou dabingovou nahrávku.
- Na cizí hudbu se vztahuje [CR-II.2](/cs/publishing/content-rules/#cr-ii-2). „Royalty-free“ neznamená „bez licence“, rozhodují podmínky licence.
- Hudba se do [doporučené ceny](/cs/monetization/pricing/) počítá jako ano nebo ne, nikdy podle minut. Druhá skladba na ceně nic nezmění, deklarace AI ano.

:::caution[AI hudba je zapnutá]
Přepínač **AI hudba** je od začátku zapnutý. Příběh s jakoukoli hudbou nebo okolním zvukem se bere jako podkreslený AI, dokud **AI hudba** v kroku Klasifikace dialogu publikování nevypnete. Označení „podkresleno AI“ snižuje hudební část doporučené ceny.
:::

## Související

- [Okolní zvuk](/cs/media/ambient-sound/)
- [Dabing](/cs/media/voice-over/)
- [Práce s médii](/cs/best-practices/media-usage/)
