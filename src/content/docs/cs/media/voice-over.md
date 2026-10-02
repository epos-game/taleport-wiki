---
title: Dabing
description: Namluvení replik a textových bloků a jak se počítá pokrytí.
helpKey: media.voice-over
status: published
sidebar:
  order: 4
---

Dabing je nahrávka, která patří k napsanému textu, ne k uzlu. Jedna replika dialogu unese jeden soubor, jeden textový blok taky jeden. V hospodské scéně *Mordrinova nabídka* má každá ze tří hostinského replik vlastní nahrávku a odstavec popisu nad nimi čtvrtou, takže jediný uzel znamená čtyři nahrání. Znaky těch čtyř kusů pak TalePort započítá jako namluvené a vypíše pokrytí kapitoly v procentech.

Na replice dialogu je ovládacím prvkem ikona mikrofonu v řádku akcí. Dokud je replika beze zvuku, bublina u ikony říká **Připojit zvuk**. Po přidání nahrávky se ikona vyplní a bublina se změní na **Přepnout dabing**, což mate: kliknutí na mikrofon se zeptá **Nahradit dabing?** a znovu otevře výběr souboru. Přehrávač rozbalíte kliknutím na text repliky a tlačítko na odebrání je právě v něm.

Textový blok se v jedné věci chová jinak a lidé kvůli tomu přicházejí o nahrávky: pod jeho nadpisem **Dabing** se po nahrání objeví přehrávač a jeho tlačítko **Nahradit zvuk** se před přepsáním na nic neptá. Přetažení souboru na komponentu dialogu vypadá funkčně, ale neudělá nic: nahrání dorazí bez informace, ke které replice patří, a zahodí se.

![replika dialogu v panelu vlastností s připojenou namluvenou stopou, přehrávač ukazuje název souboru a délku](/screens/cs/media/voice-over-on-a-line.png)

## Přijímané soubory a co se s nimi stane

Vybrat jde MP3, WAV, OGG, AAC, M4A nebo FLAC, nic jiného dialog neukáže. Soubor se ještě v prohlížeči převede na MP3 do 96 kbps se stropem 44,1 kHz a čtenáři slyší tento převedený soubor, takže limit 20 MB se měří na tom MP3, ne na tom, co jste vybrali. Nahrávat bezztrátově se pořád vyplatí kvůli střihu.

Hlasitost se taky srovnává. Průchod míří na −20 dB RMS, drží špičky pod −4 dBFS a posune soubor nejvýš o 30 dB v obou směrech, a co je tišší než −60 dB RMS, nechá být. Řeší se tím jen hlasitost, takže ruch místnosti, mlaskání i ořez průchod přežijí a zesílí se vším ostatním. První nahrávka v sezení s sebou navíc nese stažení asi 31 MB kódu pro převod, takže je pomalá a druhá už ne. Když se ten kód nenačte, soubor se nahraje bez převodu a bez vyrovnání, na obrazovce se stejně objeví **Dabing nahrán.** a poznáte to až podle toho, že jedna replika sedí hlasitostně mimo zbytek.

## Pokrytí

Pokrytí je podíl znaků kapitoly, které mají nahrávku. Počítá se čistý text každého textového bloku i každé repliky bez značek a blok se započítá jako namluvený jen tehdy, když vlastní nahrávku má právě on. Hudba, okolní zvuk ani zvuk uvnitř filmové sekvence se nepočítají. Kapitola s 9 000 znaky, z nichž 3 000 je namluvených, ukáže 33 %. Číslo najdete v nabídce **Statistiky** pod ikonou grafu ve stavovém řádku editoru jako **Pokrytí namluvením** a pak u každé kapitoly na stránce příběhu. Editor jinak pro tuhle funkci používá slovo „dabing“; jde o totéž.

Částečné pokrytí je povolené a ruší. Čtenář, který slyšel mluvit tři postavy, pozná, že čtvrtá zmlkla. Nadabujte kapitolu celou, nebo důsledně jednu postavu od začátku do konce.

## Práva a uvedení AI

Nahraný výkon je něčí práce. Pokud ho namluvil někdo jiný, uveďte ho mezi přispěvatele a mějte právo nahrávku vydat. Viz [CR-II.1](/cs/publishing/content-rules/#cr-ii-1).

Syntetický hlas i hlas generovaný AI se počítá jako médium, ne jako text, takže povolený být může, ale při vydání ho musíte uvést podle [CR-III.2](/cs/publishing/content-rules/#cr-iii-2). Uvedením se myslí přepínač **AI mluvené slovo** v kroku Klasifikace průvodce vydáním. Odemkne se jen tehdy, když kapitola obsahuje textový blok nebo repliku se zvukem, a hodnota se ukládá na příběh, takže platí pro všechny kapitoly, které z něj vydáte. Klonování hlasu skutečné osoby způsobem, který čtenáře klame, povolené není. Viz [CR-III.3](/cs/publishing/content-rules/#cr-iii-3) a [CR-I.10](/cs/publishing/content-rules/#cr-i-10).

[Zákaz textu generovaného AI](/cs/publishing/content-rules/#cr-iii-1) platí pro samotná slova bez ohledu na to, kdo je přednese. Tím, že dialog napsaný AI někdo namluví, přijatelný nebude.

## Praktické rady

Nahrávejte ze stejné vzdálenosti a na stejné úrovni. Vyrovnání srovná hlasitost mezi replikami, místnost nespraví.

Jeden soubor na repliku je lepší než jedna dlouhá stopa: replika unese jen vlastní soubor a rozsekat nahrávku dodatečně je mnohem víc práce než ji nahrát po kusech.

Dabing hýbe doporučenou cenou víc než kterékoli jiné médium. Pokrytí násobí sazbu za namluvení, 30 Kč na hodinu příběhu u lidského hlasu a 15 Kč u AI, a to nad základem 75 Kč. Hodinová kapitola s plným lidským dabingem tak začíná na 105 Kč místo 75 Kč. Viz [Ceny](/cs/monetization/pricing/).

## Související

- [Postavy a dialogy](/cs/story-editor/characters-and-dialogue/)
- [Hudba na pozadí](/cs/media/background-music/)
- [Ceny](/cs/monetization/pricing/)
