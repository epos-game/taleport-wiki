---
title: Postavy a dialogy
description: Jak určit, kdo v příběhu vystupuje, a dát jim repliky.
helpKey: editor.characters
status: published
sidebar:
  order: 7
---

Postava je ten, koho umí příběh pojmenovat: jméno, volitelně popis, volitelně avatar. Patří příběhu, ne jedné kapitole, takže převozník založený v první kapitole je k dispozici i v deváté. Postavy přiřazujete replikám dialogu, a právě tím se z bloku řeči stane někdo, kdo mluví. Uzel „Převozníkova cena“ nese čtyři repliky, tři říká Halvar a jednu společník, který čtenáře doprovází, v pořadí, do jakého jste je přetáhli.

## Postavy

Postavy najdete v záložce **Postavy** v dolní části editoru. Po stisku *Přidat postavu* vznikne postava okamžitě, jmenuje se „Postava 3“ a hned se otevře k úpravám, takže po omylem kliknutém tlačítku zůstane skutečná postava, ne prázdný formulář, který byste mohli zrušit. Hned ji přejmenujte.

Jméno je povinné a vejde se do 200 znaků, popis do 2000. Ani jedno pole vám znaky nepočítá. Avatar smí mít nejvýše 0,5 MB a jeho velikost se upraví na 512×512 px.

A to je celý výčet. Postava sama o sobě nenese žádné vlastnosti ani příznaky. Jestli chcete sledovat, co si o čtenáři myslí hostinský, patří to do [proměnné](/cs/story-editor/variables/) příběhu pojmenované podle toho, co měří; postava zůstane jménem a tváří.

Smazat postavu, která někde mluví, jde, a editor nejdřív spočítá repliky: *„Tato postava se vyskytuje v 12 replikách dialogu. Smazáním se tyto odkazy odstraní.“* Repliky zůstanou i s textem, jen bez mluvčího.

## Dialog

Komponenta **Dialog** obsahuje seřazený seznam replik. Každá replika má text, volitelně postavu a volitelně vlastní dabingovou stopu, která se nahrává k replice, ne k uzlu. Viz [Dabing](/cs/media/voice-over/).

Repliky píšete v editoru pod seznamem. Výběr postavy je první tlačítko na jeho liště a dokud někoho nevyberete, stojí na něm *Bez postavy*. Repliku uložíte tlačítkem *Přidat řádek* nebo zkratkou Shift + Enter; dokud není co uložit, tlačítko zůstává neaktivní. Později můžete kliknout na avatar vedle repliky a předat ji jiné postavě, nebo repliku chytit za záhlaví a přetáhnout jinam.

![karta Dialog v pravém panelu, několik replik s přiřazenou postavou, u jedné namluvená stopa, a pod nimi pole pro novou repliku s výběrem postavy](/screens/cs/story-editor/dialogue-lines.png)

Tři věci vyvolají varování, ale nezastaví vás: dialog bez jediné repliky, replika bez přiřazené postavy (*„Jedna nebo více replik dialogu nemá přiřazenou postavu.“*) a replika bez textu. Varování nikdy nebrání publikování kapitoly, takže nepřiřazená replika snadno projde až ke čtenáři.

## Uzel je buď vyprávění, nebo řeč, nikdy obojí

Text a dialog nemohou sdílet jeden uzel. Uzel obsahuje jedno, nebo druhé, takže věta popisu a hned po ní odpověď jsou dva uzly a spojení mezi nimi je přesně ten zlom. O tohle pravidlo autoři zakopnou nejčastěji. Zároveň drží kapitolu v tempu: dlouhý blok vyprávění a pod ním čtyři repliky na jedné obrazovce se čtou hůř než čtyři obrazovky, na které to mělo být rozdělené.

Jeden vedlejší následek to má na plátně. Automatický název uzlu se skládá jen z textové komponenty, takže uzel s pouhým dialogem se ukáže jako „Uzel 24“, ať je napsaný sebelíp. Takové uzly si pojmenujte sami.

## Postavy se při publikování zamykají

Postava se zamkne, když ji používá živá kapitola, tedy když v ní někde mluví alespoň jednu repliku, a to včetně replik uvnitř skupin. Tlačítka pro úpravu a smazání nahradí visací zámek a jeho popisek pojmenuje kapitolu, která zámek drží: *„Používá ho publikovaná kapitola: …“*. Publikovaný balíček už nese jméno, popis i avatar té postavy, takže úpravou byste měnili to, co čtenáři mají stažené.

Zámek se přepočítává, není trvalý. Jakmile postava v žádné živé kapitole nemluví, sama se odemkne. Přidávat nové postavy jde vždycky, což je cesta kolem zámku, na který se čekat nedá.

## Dialog v publikované kapitole

Publikovaná kapitola je zmrazená na obsah, ne jen pro čtení, a editor dialogu se dělí přesně na této hranici. Přepsat repliku i změnit, kdo ji říká, pořád jde. Přidat repliku, smazat ji nebo přetažením změnit pořadí už ne: tlačítko *Přidat řádek* je neaktivní, ikona pro smazání zmizela a repliky se netáhnou. Opravit překlep a publikovat znovu je v pořádku. Přepsat scénu není.

## Praktické rady

- Každému, kdo mluví opakovaně, založte postavu, i tomu vedlejšímu. Přiřazení repliky je to, co čtenáři pomáhá udržet nit, a je to i předpoklad pro avatar a hlas později.
- Vyprávění schované do repliky je pořád vyprávění. Když to nikdo neříká, patří to do textové komponenty na vlastním uzlu.
- Pište krátké repliky. Každá je v publikované kapitole samostatná položka, takže řeč rozdělená na tři repliky má tři doby místo jedné.

## Související

- [Proměnné](/cs/story-editor/variables/)
- [Typy uzlů](/cs/story-editor/node-types/)
- [Dabing](/cs/media/voice-over/)
