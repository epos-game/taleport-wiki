---
title: Typy uzlů
description: Přechody a komponenty, ze kterých se uzel skládá.
helpKey: editor.node-types
status: published
sidebar:
  order: 2
---

Uzel se skládá ze dvou druhů částí. Právě jeden přechod určuje, kudy z uzlu čtenář odejde, a libovolný počet komponent určuje, co na uzlu vidí a slyší. Díky tomu přestavíte větvení, aniž byste sahali na text: uzel „Dveře do sklepa“ s obrázkovým pozadím, třemi replikami dialogu a hudebním podkresem se stane rozcestím v okamžiku, kdy jednoduchý přechod vyměníte za volbu se dvěma možnostmi, a obrázek, dialog i hudba zůstanou na svém místě.

## Přechody

Editor přechodům říká **Výstupy**, a to jak v paletě, tak v pravém panelu.

| Přechod | Porty | Použijete, když |
| --- | --- | --- |
| **Začátek** | Žádný vstup, jeden výstup | Je to vstupní bod kapitoly. |
| **Jednoduchý** | Jeden vstup, jeden výstup | Příběh pokračuje jedním směrem. |
| **Volba** | Jeden vstup, jeden výstup na každou možnost | Rozhoduje čtenář. Viz [Přechody a volby](/cs/story-editor/transitions-and-choices/). |
| **Ověření dovednosti** | Jeden vstup, Úspěch a Neúspěch | Výsledek závisí na vlastnosti, případně i na hodu kostkou. Viz [Ověření dovednosti](/cs/story-editor/skill-checks/). |
| **Switch** | Jeden vstup, jeden výstup na každou podmínku a k tomu vestavěný **Výchozí** | Příběh se větví podle svého stavu, aniž by čtenář volil. Viz [Podmínky](/cs/story-editor/conditions/). |
| **Skupina** | Jeden port na každý uzel Začátek nebo Konec uvnitř skupiny | Uzel obsahuje vlastní graf. Viz [Skupiny](/cs/story-editor/groups/). |
| **Konec** | Jeden vstup, žádný výstup | Kapitola tady končí. Viz [Koncové uzly](/cs/story-editor/end-nodes/). |

Port **Výchozí** u switche existuje vždycky a je to výstup jako každý jiný, takže musí být připojený.

Sekce Výstupy v paletě nabízí šest z těchto sedmi přechodů, Začátek včetně. Jediné místo, kde Začátek chybí, je podnabídka **Vložit výstup** v místní nabídce uzlu. V grafu i tak smí být jen jeden začátek: druhý editor odmítne hlášením „V grafu je povolen pouze jeden uzel Začátek.“ Jako výstup paleta nenabízí Skupinu. Tu vezmete ze sekce Předvolby, nebo vznikne seskupením vybraných uzlů.

### Změna přechodu

Nový uzel začíná s jednoduchým přechodem. Když ho změníte, uzel i jeho komponenty zůstanou: měníte výstup, nestavíte obrazovku znovu. Příchozí spojení vydrží, protože vstupní port se přenese na nový přechod.

Odchozí spojení se ale přemapují podle pozice, ne podle významu. Spojení z prvního původního výstupu přejde na první nový výstup, druhé na druhý a spojení, pro které na novém přechodu žádná pozice není, se bez dotazu smaže. Když z volby se třemi možnostmi uděláte ověření dovednosti, zůstanou dvě spojení, nově na portech Úspěch a Neúspěch, a třetí zmizí.

Dvě změny editor odmítne:

- Přechod skupiny změnit nelze, ani jedním směrem. Skupinu smažte a vytvořte místo ní nový uzel.
- Uzel s filmovou sekvencí snese jen jednoduchý přechod: „Tento uzel obsahuje filmovou sekvenci, která funguje pouze s jednoduchým přechodem. Nejprve sekvenci odeberte.“

## Komponenty

| Komponenta | Co dělá |
| --- | --- |
| **Text** | Vyprávění a próza, volitelně s namluvenou nahrávkou. |
| **Dialog** | Seřazený seznam replik, každá volitelně s přiřazenou postavou a volitelně s nahrávkou. |
| **Obrázkové pozadí** | Statické pozadí za uzlem. |
| **Video pozadí** | Pohyblivé pozadí za uzlem. |
| **Filmová sekvence** | Video, které se přehraje jako celý uzel, ne za ním. |
| **Hudba na pozadí** | Hudba pod uzlem, volitelně ve smyčce. |
| **Okolní zvuk** | Zvuková atmosféra pod uzlem, nezávislá na hudbě, volitelně ve smyčce. |
| **Událost** | Změní proměnnou, jakmile na uzel čtenář dojde. Viz [Proměnné](/cs/story-editor/variables/). |
| **Kontrolní bod** | Označí místo návratu. Viz [Kontrolní body](/cs/story-editor/checkpoints/). |

## Co uzel obsahovat nesmí

Stejná pravidla platí dvakrát: hned při přidávání komponenty a znovu při validaci. Editor a seznam problémů se tak nikdy nerozejdou v tom, co uzel smí obsahovat.

- Od každého typu jedna komponenta na uzel. Druhý text, druhá hudební stopa nebo druhý kontrolní bod se odmítne hlášením „Tento uzel už tuto komponentu obsahuje.“
- Text a dialog nemohou být na stejném uzlu. Věta popisu a po ní replika jsou dva uzly, ne jeden.
- Obrázkové pozadí a video pozadí sdílejí jediný slot pro pozadí, takže uzel má buď jedno, nebo druhé.
- Filmová sekvence si bere celý uzel. Vedle ní smí stát jen kontrolní bod a značka zastavení dědění, a to jen na uzlu s jednoduchým přechodem. Sekvence je celá obrazovka.
- Uzly Začátek, Konec a Skupina neobsahují nic: „Tento typ uzlu nemůže obsahovat obsahové komponenty.“ Jsou to prvky struktury.

## Dědění médií

Existují tři nezávislé kanály médií: **pozadí** (obrázek nebo video), **hudba** a **okolní zvuk**. Každý se řeší zvlášť, takže hudba může běžet přes celou scénu, zatímco se pozadí pod ní mění.

Přenesení kanálu dál si musíte zapnout. Nová komponenta médií platí jen pro svůj uzel, dokud nezapnete **Pokračovat v zobrazování** (pozadí) nebo **Pokračovat v přehrávání** (hudba, okolní zvuk). Zapněte to na začátku scény a každý navazující uzel kanál zdědí, dokud ho něco nezastaví. Právě proto se dvanáctiuzlový rozhovor staví snadno.

![pravá karta Komponenty u uzlu, který dědí hudbu i pozadí, u každé karty je uveden uzel, ze kterého se dědí](/screens/cs/story-editor/inherited-media-panel.png)

Jak uzel pozná, co má hrát:

- Uzel s vlastní komponentou daného kanálu nedědí nikdy, ani když je ta komponenta ještě prázdná. Nastavené pozadí zděděné přebije.
- Vyhrává nejbližší zdroj, počítáno v počtu spojení.
- Dva různé zdroje stejně daleko se navzájem vyruší. Na takovém uzlu nehraje nic a dál se nepřenese nic, takže kanál mlčí i ve všem, co následuje, dokud nepřijde nový zdroj nebo dokud některému uzlu nedáte vlastní. Editor to napíše: „Do tohoto uzlu přichází několik zdrojů, takže se nic nepřehrává automaticky.“ a nabídne **Přejít na zdrojový uzel** nebo **Přidat vlastní**.
- Značka zastavení ukončí kanál na svém uzlu a na všem za ním.
- Koncové uzly šíření zastaví a v nadřazeném grafu ho zastaví i uzel skupiny. Hranice skupiny ale médium přesto překoná: co dojde na vstupní port skupiny, nasadí se na uzel Začátek uvnitř, a co odchází z výstupního portu, nasadí se na uzly připojené k tomu portu venku. Hudba scény tak seskupení přežije.
- Filmová sekvence skryje všechny kanály, ale jen na svém uzlu. Na dalších uzlech zděděná média pokračují.

### Jak kanál zastavit

Značky zastavení v paletě nenajdete. Na uzlu, který zděděná média dostává, je na kartě daného kanálu červené tlačítko s košem a popiskem **Zastavit dědění**. Na uzlu se pak objeví text „Dědění média je zde zastaveno. Tento uzel ani uzly za ním toto médium nezdědí z předchozích uzlů.“ a zrušíte ho volbou **Obnovit dědění** nebo nahradíte volbou **Použít vlastní médium**. Značku nahradí i to, když na uzel přetáhnete skutečnou komponentu daného kanálu. Takhle se scéna ztiší.

## Související

- [Graf příběhu](/cs/story-editor/story-graph/)
- [Přechody a volby](/cs/story-editor/transitions-and-choices/)
- [Obrázky](/cs/media/images/)
- [Hudba na pozadí](/cs/media/background-music/)
