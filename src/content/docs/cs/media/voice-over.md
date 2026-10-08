---
title: Dabing
description: Namluvení replik a textových bloků a jak se počítá pokrytí.
helpKey: media.voice-over
status: published
sidebar:
  order: 4
---
Dabing je nahrávka, která patří k napsanému textu, ne k uzlu. Jedna replika dialogu má jeden soubor a jeden textový blok také. Uzel se třemi replikami a jedním textovým blokem tedy potřebuje čtyři nahrání.

## Přidání nahrávky

**U repliky dialogu:**

1. V řádku akcí repliky klikněte na ikonu mikrofonu. Dokud replika nemá zvuk, popisek ikony zní **Připojit zvuk**.
2. Vyberte soubor.
3. Ikona se vyplní a popisek se změní na **Přepnout dabing**. Kliknutím na text repliky otevřete přehrávač, kde je i tlačítko pro odebrání.
4. Nahrávku vyměníte kliknutím na mikrofon. Editor se zeptá **Nahradit dabing?** a znovu otevře výběr souboru.

**U textového bloku:** po nahrání se pod nadpisem **Dabing** objeví přehrávač. Tlačítko **Nahradit zvuk** soubor přepíše bez ptaní.

Soubor se připojuje ikonou mikrofonu u konkrétní repliky. Přetažení souboru na komponentu dialogu ho nepřipojí.

![replika dialogu v panelu vlastností s připojenou namluvenou stopou, přehrávač ukazuje název souboru a délku](/screens/cs/media/voice-over-on-a-line.png)

## Podporované soubory

Vyberte soubor MP3, WAV, OGG, AAC, M4A nebo FLAC. Prohlížeč ho převede na MP3 do 96 kbps s horní hranicí 44,1 kHz. Čtenáři slyší převedený soubor, takže limit 20 MB se měří na MP3, ne na souboru, který jste vybrali.

TalePort také vyrovná hlasitost. Cílem je -20 dB RMS a špičky zůstanou pod -4 dBFS. Mění se jen hlasitost: ruch místnosti, mlaskání i ořez zůstanou a zesílí se spolu se vším ostatním.

## Pokrytí

Pokrytí je podíl textu kapitoly, počítaného ve znacích, který má nahrávku.

- Počítá se každý textový blok i každá replika.
- Jako namluvený se započítá jen kus s vlastní nahrávkou.
- V textovém bloku formátování znaky nepřidává, v replice ano.
- Hudba, okolní zvuk ani zvuk uvnitř filmové sekvence se nepočítají.

Příklad: kapitola má 9 000 znaků a 3 000 je namluvených. Pokrytí je 33 %.

Číslo najdete jako **Pokrytí namluvením** v nabídce **Statistiky** pod ikonou grafu ve stavovém řádku editoru. Ukazuje se i u každé kapitoly na stránce příběhu. Částečné pokrytí je v pořádku.

## Poslech v editoru

Karta **Zvuk** je pod rámem telefonu na kartě **Náhled**. Řídí se vybraným uzlem a vypisuje všechno, co se na něm přehrává:

- textový blok jako **Text** s názvem souboru
- repliku jako **Dialog** se jménem postavy, která ji říká
- hudbu a okolní zvuk

Jedno tlačítko spustí všechny nahrávky naráz, takže se namluvené repliky překryjí. Chcete-li přehrát jen jednu, klikněte na její text.

## Práva a označení AI

Nahraný výkon je něčí práce. Když ho namluvil někdo jiný, uveďte ho mezi přispěvatele a ujistěte se, že smíte nahrávku vydat ([CR-II.1](/cs/publishing/content-rules/#cr-ii-1)).

Syntetický hlas i hlas generovaný AI se počítá jako médium, ne jako text. Může být povolený, ale při vydání ho musíte uvést ([CR-III.2](/cs/publishing/content-rules/#cr-iii-2)). Použijte přepínač **AI mluvené slovo** v kroku Klasifikace dialogu publikování.

- Jde zapnout, jakmile má kterákoli kapitola příběhu, v jakémkoli stavu, textový blok nebo repliku se zvukem.
- Vaše odpověď se ukládá k příběhu, takže platí pro všechny vydané kapitoly.
- Přepínač je od začátku zapnutý a TalePort bere nahrávky jako syntetické, dokud to nezměníte.
- **Vypnuto** prohlašuje, že nahrávky namluvil vy nebo jiný člověk.
- **Zapnuto** ukáže čtenářům, že vyprávění je od AI, a dabingová část doporučené ceny klesne.

Platí ještě dvě pravidla:

- Klonovat hlas skutečné osoby tak, aby to čtenáře klamalo, není povolené ([CR-III.3](/cs/publishing/content-rules/#cr-iii-3), [CR-I.10](/cs/publishing/content-rules/#cr-i-10)).
- [Zákaz textu generovaného AI](/cs/publishing/content-rules/#cr-iii-1) platí pro samotná slova, bez ohledu na to, kdo je přednese. Dialog napsaný AI není přijatelný jen proto, že ho někdo namluví.

## Praktické rady

- Každá replika má jen vlastní soubor, proto nahrávejte po replikách. Dlouhou nahrávku dodatečně rozdělit je mnohem víc práce.
- Dabing ovlivňuje doporučenou cenu podílem textu, který má nahrávku. Podrobnosti jsou v kapitole [Ceny](/cs/monetization/pricing/).

## Související

- [Postavy a dialogy](/cs/story-editor/characters-and-dialogue/)
- [Hudba na pozadí](/cs/media/background-music/)
- [Ceny](/cs/monetization/pricing/)
