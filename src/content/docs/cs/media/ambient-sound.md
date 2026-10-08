---
title: Okolní zvuk
description: Atmosférická vrstva, která leží pod vším ostatním.
helpKey: media.ambient
status: published
sidebar:
  order: 3
---
Okolní zvuk je zvuk prostředí, například déšť, hluk davu nebo vítr. Hraje na vlastním kanálu spolu s [hudbou na pozadí](/cs/media/background-music/). Změna jednoho druhý neovlivní.

## Přidání zvuku

1. Z palety přidejte komponentu **Okolní zvuk** („Přidat okolní zvuk vrstvený přes hudbu.“).
2. Přetáhněte soubor na plochu s textem „Přetáhněte sem zvuk nebo klikněte na Procházet“. Použít můžete .mp3, .wav, .ogg, .aac, .m4a nebo .flac.
3. Nastavte dva přepínače pod přehrávačem. Oba jsou od začátku vypnuté.

Přepínače fungují takto:

- **Pokračovat v přehrávání** nechá zvuk pokračovat na navazujících uzlech.
- **Smyčka** stopu opakuje. Bez ní je na uzlu po konci souboru ticho.

![karta Okolní zvuk v panelu vlastností s nahranou stopou, přepínače Pokračovat v přehrávání i Smyčka jsou pod přehrávačem stále vypnuté](/screens/cs/media/ambient-sound-panel.png)

Uzel, který zvuk dostane z dřívějšího uzlu, ukáže nad přehrávačem **Zděděno z** a jméno zdrojového uzlu. Kliknutím na jméno na ten uzel skočíte.

![karta zděděného okolního zvuku, nad přehrávačem stojí Zděděno z a jméno uzlu, ze kterého se zvuk dědí, tady Uzel 7](/screens/cs/story-editor/inherited-ambient-panel.png)

## Ukončení dědění {#inheritance}

Při zapnutém **Pokračovat v přehrávání** se zvuk šíří po propojeních a vyhrává nejbližší zdroj. Zastaví ho kterákoli z těchto věcí:

- **Uzel s vlastní komponentou okolního zvuku**, i prázdnou. Od tohoto uzlu je ticho.
- **Zastavení dědění.** Je to panel **Okolní zvuk** s textem „Dědění média je zde zastaveno. Tento uzel ani uzly za ním toto médium nezdědí z předchozích uzlů.“
- **Uzel Konec.** Nic nedědí a nesmí nést komponenty, takže na závěrečné obrazovce nic nehraje.
- **Konflikt.** Dva různé zdroje jsou stejně daleko. Nehraje nic, dokud jeden nevyberete.

### Přidání zastavení

Zastavení v paletě není. Uzel nejdřív musí nějaký zvuk dědit. Potom klikněte na červenou ikonu koše, **Zastavit dědění**, v hlavičce panelu zděděných médií.

Když na takový uzel přidáte komponentu Okolní zvuk, nahradí zastavení. Jde to vzít zpět jedním krokem.

Panel zastavení má dvě tlačítka:

- **Obnovit dědění** zastavení smaže. Uzel pak slyší to, co k němu docházelo předtím.
- **Použít vlastní médium** vymění zastavení za prázdnou komponentu **Okolní zvuk**.

### Řešení konfliktu

Panel konfliktu vypíše každý zdroj podle názvu souboru s odkazem na jeho uzel.

- Kliknutím na zdroj zkopírujete jeho komponentu na tento uzel. U kopie je **Pokračovat v přehrávání** zapnuté.
- Kliknutím na **Přidat vlastní** vložíte místo toho prázdnou komponentu.

### Skupiny a filmové sekvence

- Skupina zvuk propouští dovnitř svým vstupem a ven svými výstupy.
- Na hranici skupiny konflikt nikdy nevznikne. Když do stejného vstupu nebo ke stejnému výstupu zevnitř dorazí dvě stopy, pokračuje ta, jejíž propojení jste nakreslili dřív.
- Filmová sekvence skryje zděděný zvuk na svém uzlu. Panel zděděných médií to označí textem „Na tomto uzlu skryto“. Na následujícím uzlu se zvuk vrátí.

## Prázdná komponenta

Komponenta okolního zvuku bez souboru se v přehledu problémů objeví jako „Zvuk prostředí není nastaven a žádný se nedědí.“ Varování se zobrazí u každé prázdné komponenty, protože uzel s vlastní komponentou nic nedědí.

Je to varování, ne chyba. Kapitola se vydá a čtenář uslyší ticho.

## Soubory

Okolní zvuk se zpracuje stejně jako hudba. Váš prohlížeč soubor převede na MP3 a vyrovná ho na zhruba -20 dB RMS. Soubory nad 20 MB po převodu TalePort odmítne. Podrobnosti jsou v [Hudbě na pozadí](/cs/media/background-music/).

Názvy souborů se při nahrání přepisují. Z „Okolní smyčka (v2).wav“ se stane „Okolní_smyčka_v2.mp3“.

V nabídce **Statistiky** se u položky **Délka zvuku** počítá každá hudební nebo zvuková stopa jednou za kapitolu, bez ohledu na počet uzlů, na kterých hraje. Třicetisekundová smyčka na čtyřiceti uzlech se počítá jako třicet sekund. Číslo zahrnuje i každou dabingovou nahrávku, jednu na repliku nebo textový blok.

## Při vydání

Přepínač **AI hudba** v kroku Klasifikace zahrnuje i okolní zvuk. Platí pro celý příběh, ne pro jednu kapitolu. Zapněte ho i tehdy, když je okolní zvuk jediný zvuk vytvořený pomocí AI.

## Praktické rady

- Okolní zvuk nechte hrát tiše, aby si ho čtenář sotva všiml.
- Zvuk, který nesedí k pozadí, ruší víc než ticho.
- Nejčastější důvod, proč zastavit dědění, je venkovní smyčka, která by jinak hrála i uvnitř.
- Smyčka s jedním výrazným zvukem je slyšet při každém opakování.

## Související

- [Hudba na pozadí](/cs/media/background-music/)
- [Obrázky](/cs/media/images/)
- [Typy uzlů](/cs/story-editor/node-types/): dědění médií
