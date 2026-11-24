---
title: Postavy a dialogy
description: Jak definovat postavy příběhu a skládat interaktivní dialogy.
helpKey: editor.characters
status: published
sidebar:
  order: 7
---
Postava je ten, kdo ve vašem příběhu mluví. Nejdřív postavy přidáte, pak z nich u každé repliky dialogu vyberete mluvčího. Postavy patří celému příběhu, takže postavu z první kapitoly použijete i v deváté.

## Postavy

Otevřete záložku **Postavy** dole v editoru. Tlačítko **Přidat postavu** vytvoří postavu hned, pojmenuje ji „Postava 1“ a otevře ji k úpravám. Když ji přidáte omylem, prostě ji smažte.

Každá postava má:

- Jméno. Je povinné a může mít až 200 znaků.
- Popis. Je nepovinný a může mít až 2000 znaků.
- Avatar. Je nepovinný a může mít až 0,5 MB. TalePort ho zmenší na 512 × 512 px.
- Typ, **Běžná** nebo **Bojová**. Více v části [Bojové postavy](#fightable).

Pole nezobrazují počet znaků, délku si proto hlídejte sami. Text nad limit se neuloží.

Když chcete o postavě něco sledovat, použijte [proměnnou](/cs/story-editor/variables/).

Postavu, která má repliky, můžete smazat. Editor vás předem upozorní, kolika replik se to týká: *„Tato postava se vyskytuje v 12 replikách dialogu. Smazáním se tyto odkazy odstraní.“* Repliky zůstanou i s textem, jen přijdou o mluvčího.

![záložka Postavy v dolním panelu editoru: počet postav, pole pro hledání a tlačítko Přidat postavu nad seznamem postav, každá s avatarem a rolí (Běžná nebo Bojová)](/screens/cs/story-editor/characters-panel.png)

## Bojové postavy {#fightable}

**Běžná** postava jen mluví. **Bojová** postava může být navíc protivníkem v uzlu se [soubojem](/cs/story-editor/combat/). Přepněte **Typ postavy** ve formuláři postavy na **Bojová** a objeví se část **Bojové vlastnosti**.

![formulář postavy s typem Bojová: vlevo jméno, volba Běžná a Bojová a popis, vpravo tabulka Bojové vlastnosti se Zdravím, Útokem a Obranou, každé navázané na proměnnou s výchozí hodnotou a rozsahem, a pod ní část Vlastnosti](/screens/cs/story-editor/fightable-character.png)

Každá bojová postava potřebuje všechny tři bojové vlastnosti:

- **Zdraví**, **Útok** a **Obrana**. Každý řádek je slot a vy ho navážete na proměnnou.
- **Proměnná** musí být číselná. Vyberte ji ze seznamu. Můžete také pro slot vytvořit novou proměnnou, která vznikne jako vlastnost a ke slotu se hned naváže.
- **Výchozí** je hodnota, se kterou postava začíná.
- **Rozsah** je minimum a maximum, obojí je povinné. Hodnota se během hraní drží mezi nimi.
- Ikona přerušeného odkazu na konci řádku proměnnou od slotu odpojí.

„Všechny tři jsou povinné, vždy s min a max.“ Postava s chybějícím slotem, proměnnou, která není číselná, nebo bez minima či maxima ukazuje chybu a kontrolní seznam publikování selže na řádku *Bojové postavy mají kompletní bojové vlastnosti*. Více v části [Požadavky na vydání kapitoly](/cs/publishing/publishing-requirements/).

Pod bojovými vlastnostmi část **Vlastnosti** vypisuje další vlastnosti postavy. **Přidat vlastnost** přidá existující vlastnost a **Nová vlastnost** vytvoří novou. „Tato postava má u každé vlastnosti vlastní hodnotu“, takže dvě postavy mohou sdílet vlastnost a přitom mít různé hodnoty.

Běžnou postavu nelze v souboji použít. Uzel se soubojem to řekne a nabídne dvě cesty: přepnout postavu na Bojovou, nebo použít na uzlu **Vlastní** bojovníky.

## Dialog

Komponenta **Dialog** je seřazený seznam replik. Každá replika má text a může mít i mluvčího a vlastní dabingovou stopu. Stopu nahráváte ke každé replice zvlášť, ne k celému uzlu. Více v části [Dabing](/cs/media/voice-over/).

Novou repliku přidáte takto:

1. Napište text do pole pod seznamem.
2. Prvním tlačítkem na liště vyberte mluvčího. Dokud nikoho nevyberete, stojí na něm *Bez postavy*.
3. Klikněte na **Přidat řádek** nebo stiskněte Shift + Enter. Dokud nenapíšete text, je tlačítko neaktivní.

Existující repliku upravíte takto:

- Kliknutím na avatar vedle ní ji přiřadíte jiné postavě.
- Přetažením za záhlaví ji přesunete.

![karta Dialog v pravém panelu, několik replik s přiřazenou postavou, u jedné namluvená stopa, a pod nimi pole pro novou repliku s výběrem postavy](/screens/cs/story-editor/dialogue-lines.png)

Editor vás upozorní na:

- dialog bez jediné repliky,
- repliku bez mluvčího: *„Jedna nebo více replik dialogu nemá přiřazenou postavu.“*,
- repliku bez textu.

Tato varování vám nebrání v publikování.

## Vyprávění, nebo řeč

Text a dialog nemůžou být ve stejném uzlu. Chcete-li popsat scénu a pak vložit odpověď, použijte dva uzly.

Uzel dostane automatický název jen z textové komponenty. Uzel jen s dialogem se jmenuje třeba „Uzel 24“, dokud ho sami nepojmenujete.

Text, který nikdo neříká, patří do textové komponenty na samostatném uzlu, ne do repliky dialogu. Každému mluvčímu dejte vlastní postavu, ať má každá replika avatar.

## Zamykání

Postava se zamkne, když ji používá vydaná kapitola, tedy když v ní mluví aspoň v jedné replice (počítají se i repliky ve skupinách).

- Tlačítka pro úpravu a smazání nahradí zámek.
- Popisek zámku uvádí kapitolu: *„Používá ho publikovaná kapitola: …“*.
- Zamčenou postavu nelze upravit, protože čtenáři už mají její jméno, popis i avatar stažené.

Zámek není trvalý. Jakmile postava v žádné živé kapitole nemluví, odemkne se. Nové postavy přidáte vždy.

## Dialog ve vydané kapitole

Repliku můžete přepsat nebo změnit jejího mluvčího. Repliku nepřidáte, nesmažete ani nepřesunete: tlačítko **Přidat řádek** je neaktivní, ikona pro smazání zmizí a repliky nejdou přetáhnout.

## Související

- [Proměnné](/cs/story-editor/variables/)
- [Typy uzlů](/cs/story-editor/node-types/)
- [Dabing](/cs/media/voice-over/)
