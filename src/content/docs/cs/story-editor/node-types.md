---title: Typy uzlů a komponent
description: Jak fungují přechody a obsahové komponenty na jednotlivých uzlech.
helpKey: editor.node-types
status: published
sidebar:
  order: 2
---
Uzel se skládá ze dvou druhů částí:

- Právě jeden **přechod** určuje, kudy čtenář uzel opustí.
- Libovolný počet **komponent** určuje, co čtenář na uzlu vidí a slyší.

Obě části jsou na sobě nezávislé. Když přechod vyměníte, komponenty zůstanou.

## Přechody

V paletě i v pravém panelu se přechody jmenují **Výstupy**.

| Přechod | Porty | Použití |
| --- | --- | --- |
| **Začátek** | Žádný vstup, jeden výstup | Vstupní bod kapitoly. |
| **Jednoduchý** | Jeden vstup, jeden výstup | Příběh pokračuje jedním směrem. |
| **Volba** | Jeden vstup, jeden výstup na každou možnost | Rozhoduje čtenář. Více v části [Přechody a volby](/cs/story-editor/transitions-and-choices/). |
| **Ověření dovednosti** | Jeden vstup, Úspěch a Neúspěch | Výsledek závisí na vlastnosti, případně i na hodu kostkou. Více v části [Ověření dovednosti](/cs/story-editor/skill-checks/). |
| **Switch** | Jeden vstup, jeden výstup na každou podmínku a k tomu vestavěný **Výchozí** | Příběh se větví podle toho, co si pamatuje, aniž by čtenář volil. Více v části [Podmínky](/cs/story-editor/conditions/). |
| **Skupina** | Jeden port na každý uzel Začátek nebo Konec uvnitř skupiny | Uzel obsahuje vlastní graf. Více v části [Skupiny](/cs/story-editor/groups/). |
| **Konec** | Jeden vstup, žádný výstup | Kapitola tady končí. Více v části [Koncové uzly](/cs/story-editor/end-nodes/). |

Co je dobré vědět:

- Port **Výchozí** u switche je tam vždy. Připojte ho jako každý jiný výstup.
- Přechod Skupina není v sekci Výstupy v paletě. Vytvoříte ho v sekci **Předvolby** nebo seskupením vybraných uzlů.
- Začátek je v paletě, ale ne v podnabídce **Vložit výstup** v místní nabídce uzlu. Na plátně kapitoly smí být jen jeden. Druhý editor odmítne hlášením „V grafu je povolen pouze jeden uzel Začátek.“ Uvnitř skupiny toto pravidlo neplatí. Každý uzel Začátek je tam jedním ze vstupů skupiny.
- Nový uzel začíná s jednoduchým přechodem. Když ho změníte, uzel i komponenty zůstanou. Více v části [Výměna přechodu](/cs/story-editor/transitions-and-choices/#swapping).

## Komponenty

| Komponenta | Co dělá |
| --- | --- |
| **Text** | Vyprávění, volitelně s dabingem. |
| **Dialog** | Seřazený seznam replik. Každá replika může mít mluvčího a dabing. |
| **Obrázkové pozadí** | Statické pozadí za uzlem, obrázek na výšku 9:16. |
| **Video pozadí** | Pohyblivé pozadí za uzlem, video na výšku do 1 MB. |
| **Filmová sekvence** | Video do 25 MB, které se přehraje jako celý uzel, ne za ním. |
| **Hudba na pozadí** | Hudba pod uzlem, volitelně ve smyčce. |
| **Okolní zvuk** | Zvuková atmosféra pod uzlem, nezávislá na hudbě, volitelně ve smyčce. |
| **Událost** | Změní proměnnou, jakmile čtenář na uzel dojde. Více v části [Proměnné](/cs/story-editor/variables/). |
| **Kontrolní bod** | Označí místo návratu. Více v části [Kontrolní body](/cs/story-editor/checkpoints/). |

## Pravidla pro komponenty

Stejná pravidla platí při přidávání komponenty i při validaci kapitoly.

- Na uzlu smí být od každého typu jedna komponenta. Druhý text, druhou hudební stopu nebo druhý kontrolní bod editor odmítne: „Tento uzel už tuto komponentu obsahuje.“
- Text a dialog nemůžou být na stejném uzlu. Chcete-li popsat scénu a pak přidat repliku, použijte dva uzly.
- Obrázkové pozadí a video pozadí sdílejí jediný slot pro pozadí. Uzel má jedno nebo druhé.
- Filmová sekvence zabere celý uzel. Vedle ní smí být jen kontrolní bod a značka zastavení dědění. Uzel musí mít jednoduchý přechod. Na uzlu, který se větví, editor ukáže: „Filmovou sekvenci lze umístit pouze do uzlu s jednoduchým přechodem.“
- Uzly Začátek, Konec a Skupina žádné komponenty neobsahují: „Tento typ uzlu nemůže obsahovat obsahové komponenty.“

## Dědění médií

Média mají tři nezávislé kanály: **pozadí** (obrázek nebo video), **hudbu** a **okolní zvuk**. Hudba tak může hrát dál, když se pozadí změní.

Komponenta médií platí jen pro svůj uzel, dokud nezapnete **Pokračovat v zobrazování** (pozadí) nebo **Pokračovat v přehrávání** (hudba, okolní zvuk).

Když do uzlu dorazí několik zdrojů ze stejné vzdálenosti, uzel ukáže: „Do tohoto uzlu přichází několik zdrojů, takže se nic nepřehrává automaticky. Vyberte jeden, který bude pokračovat zde, nebo přidejte vlastní.“ Nabídne vám akce **Přejít na zdrojový uzel** a **Přidat vlastní**.

Stránka každého kanálu vysvětluje, co ho přenáší dál, co ho ukončí, co dělá značka zastavení dědění a co se stane, když se potkají dva zdroje.

- Pozadí, obrázek nebo video: [Obrázky](/cs/media/images/#inheritance).
- Hudba: [Hudba na pozadí](/cs/media/background-music/#inheritance).
- Okolní zvuk: [Okolní zvuk](/cs/media/ambient-sound/#inheritance).

## Související

- [Graf příběhu](/cs/story-editor/story-graph/)
- [Přechody a volby](/cs/story-editor/transitions-and-choices/)
- [Obrázky](/cs/media/images/)
- [Hudba na pozadí](/cs/media/background-music/)
- [Okolní zvuk](/cs/media/ambient-sound/)
- [Interaktivita](/cs/best-practices/interactivity/)
