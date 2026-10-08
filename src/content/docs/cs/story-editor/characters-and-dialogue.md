---title: Postavy a dialogy
description: Jak definovat postavy příběhu a skládat interaktivní dialogy.
helpKey: editor.characters
status: published
sidebar:
  order: 7
---
Postava je ten, kdo ve vašem příběhu mluví. Nejdřív postavy přidáte, pak z nich u každé repliky dialogu vyberete mluvčího. Postavy patří celému příběhu, takže postavu z první kapitoly použijete i v deváté.

## Postavy

Otevřete kartu **Postavy** dole v editoru. Tlačítko **Přidat postavu** vytvoří postavu hned, pojmenuje ji „Postava 1“ a otevře ji k úpravám. Když ji přidáte omylem, prostě ji smažte.

Každá postava má:

- Jméno. Je povinné a může mít až 200 znaků.
- Popis. Je nepovinný a může mít až 2000 znaků.
- Avatar. Je nepovinný a může mít až 0,5 MB. TalePort ho zmenší na 512 × 512 px.

Pole nezobrazují počet znaků, délku si proto hlídejte sami. Text nad limit se neuloží.

Když chcete o postavě něco sledovat, použijte [proměnnou](/cs/story-editor/variables/).

Postavu, která má repliky, můžete smazat. Editor vás předem upozorní, kolika replik se to týká: *„Tato postava se vyskytuje v 12 replikách dialogu. Smazáním se tyto odkazy odstraní.“* Repliky zůstanou i s textem, jen přijdou o mluvčího.

![karta Postavy v dolním panelu editoru, seznam postav s avatary vedle tlačítka Přidat postavu](/screens/cs/story-editor/characters-panel.png)

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

Postava se zamkne, když ji používá živá kapitola, tedy když v ní mluví aspoň v jedné replice (počítají se i repliky ve skupinách).

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
