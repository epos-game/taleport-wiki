---
title: Skupiny
description: Jak sbalit celý úsek příběhu do jediného uzlu.
helpKey: editor.groups
status: published
sidebar:
  order: 13
---
Skupina sbalí úsek příběhu do jednoho obdélníku. Je to uzel, který v sobě obsahuje vlastní graf. Na nadřazeném plátně vidíte jeden obdélník s porty po okrajích. Když ho otevřete, uvidíte běžný graf s vlastním uzlem Začátek a uzlem Konec.

Když obdélník vyberete, pravý panel ukáže, co je uvnitř:

- uzly,
- spojení,
- rozhodovací body,
- normostrany (text přepočtený na strany po 1 800 znacích),
- celkovou dobu čtení.

Pod tím je tlačítko **Otevřít podgraf**.

![pravý panel u vybrané skupiny, se souhrnem podgrafu a akcí Otevřít podgraf](/screens/cs/story-editor/group-panel.png)

## Kdy skupinu použít

Skupina se hodí pro úsek příběhu s jedním vstupem a málo výstupy. Dobře poslouží u vedlejší linky, flashbacku, hádanky nebo samostatné scény. Úsek se sedmi výstupy se změní na jeden obdélník se sedmi popsanými porty místo sedmi větví.

## Vytvoření skupiny

Skupinu vytvoříte dvěma způsoby.

**Z palety.** Přetáhněte na plátno předvolbu **Skupina**.

- Má jeden vstupní port Vstup a jeden výstupní port Výstup.
- Uvnitř je uzel Začátek propojený přímo s uzlem Konec.
- Nová skupina nemá jméno. Dokud ji nepojmenujete, ukazuje číslo uzlu.

**Z výběru.** Vyberte uzly a zvolte **Seskupit výběr** v kontextové nabídce.

- Vybrané uzly se přesunou do grafu uvnitř skupiny a přečíslují se od jedničky. Spojení mezi nimi se přesunou s nimi.
- Obdélník se objeví uprostřed původního výběru.
- Každý vstup vybraného uzlu, do kterého nic z výběru nevede, dostane uvnitř skupiny uzel Začátek a na obdélníku vstupní port.
- Každý výstup vybraného uzlu, který nevede do žádného jiného vybraného uzlu, dostane uvnitř skupiny uzel Konec a na obdélníku výstupní port. Výstup, který jste nikdy nezapojili, tak dostane vlastní cestu ven.
- Spojení, která vedla přes okraj výběru, se přepojí na odpovídající porty. Skupina je zapojená stejně jako dřív výběr.

Vybrané uzly musí být vzájemně propojené. Jinak se zobrazí „Seskupené uzly musí být vzájemně propojené.“ **Seskupit výběr** se nenabídne, když výběr obsahuje uzel Začátek, uzel Konec nebo uzel, na který cílí globální událost.

## Porty

Vstupní port na obdélníku je uvnitř skupiny uzel Začátek. Výstupní port je uzel Konec. Další vstup nebo výstup přidáte tak, že uvnitř skupiny přidáte další uzel Začátek nebo Konec.

Když smažete hraniční uzel, zmizí i jeho port a spojení, která na něj navazovala v nadřazeném grafu.

Port pojmenujete přejmenováním jeho hraničního uzlu. Obdélník ukáže nový popisek, až skupinu opustíte. Panel náhledu k tomu radí: „Přejmenováním tohoto uzlu pojmenujete vstupní port.“ Když přejmenujete uzel Konec uvnitř, přejmenuje se i odpovídající výstupní port na obdélníku.

Prázdná skupina z palety začíná s porty Vstup a Výstup. Skupina z výběru pojmenuje každý port podle uzlu, na který navazoval.

![uzel skupiny na nadřazeném plátně, s jedním vstupním portem vlevo a dvěma výstupními vpravo, propojený s okolními uzly](/screens/cs/story-editor/group-node.png)

## Uvnitř skupiny

Čísla uzlů začínají v každé skupině znovu od jedničky. Uzel 3 ve skupině a Uzel 3 v kapitole jsou tedy dva různé uzly. Hledání v grafu prohledává jen graf, ve kterém právě jste.

Skupinu otevřete třemi způsoby:

- **Otevřít skupinu** v kontextové nabídce uzlu,
- tlačítko **Otevřít podgraf** v pravém panelu,
- **Otevřít skupinu** na kartě Náhled.

Uvnitř je v levém horním rohu plátna cesta nadřazenými grafy. Zpátky se dostanete kliknutím na dřívější položku nebo přes **Přejít na nadřazený graf**.

Plátno uvnitř má stejnou paletu, kontextovou nabídku i zkratky. Můžete zde zanořit další skupinu. Na plátně kapitoly smí být přesně jeden uzel Začátek. Ve skupině jich může být, kolik potřebujete, stejně jako uzlů Konec. Každý z nich je portem na obdélníku.

![uvnitř skupiny, v levém horním rohu navigační cesta s položkami Chapter a Group (popisky na obrázku jsou anglicky), dva uzly Start vedoucí do téhož prvního uzlu a tři uzly End, které z něj vedou ven](/screens/cs/story-editor/group-inside.png)

Dědění médií hranici skupiny překračuje:

- Hudba, která hraje, když čtenář dojde ke vstupnímu portu skupiny, se předá uzlu Začátek uvnitř.
- To, co hraje na výstupním portu, se předá uzlům, na které port navazuje venku.

Hudba ze scény tedy hraje dál i po přesunu scény do skupiny.

## Omezení skupiny

- Skupina neobsahuje žádné komponenty (text, pozadí, hudbu). Editor je odmítne.
- Přechod skupiny se nedá změnit a na skupinu se nedá změnit ani jiný přechod: „Přechod uzlu skupiny nelze změnit. Místo toho skupinu odstraňte a vytvořte nový uzel.“
- Kopírování zkopíruje jen obal: „Obsah skupiny nebyl zkopírován. Byly duplikovány pouze vstupy a výstupy skupiny.“ Vložená skupina je prázdná a má stejné porty.
- Skupiny můžete zanořovat. Skupinu, ve které je další skupina, nelze rozpustit: „Tato skupina obsahuje vnořené skupiny. Nejprve zrušte vnitřní skupiny.“ Rušte je od nejvnitřnější skupiny směrem ven.
- Zrušení skupiny vrátí vnitřní uzly a spojení do nadřazeného grafu. Spojení, která vedla přes hranici, se nasměrují zpátky na původní uzly. Vrácené uzly se číslují od konce nadřazeného grafu a svá původní čísla nedostanou zpátky.

## Validace uvnitř skupiny

Graf uvnitř skupiny se kontroluje jako každý jiný. Vypouštějí se jen tři pravidla:

- Konec nemusí být dosažitelný ze začátku.
- Do uzlu Konec nemusí nic vést.
- Uzlů Začátek může být víc než jeden.

Z pravidla o připojených výstupech je navíc vyňatý vlastní výstup hraničního uzlu Začátek.

Všechno ostatní platí dál:

- Skupina bez uzlu Začátek hlásí „Graf příběhu nemá uzel Začátek.“
- Skupina bez uzlu Konec hlásí „Graf příběhu nemá uzel Konec.“
- Uzel Začátek s příchozím spojením je chyba.

Hranice se kontroluje z obou stran:

| Problém | Hlášení | Úroveň |
| --- | --- | --- |
| Vstup, jehož uzel Začátek nikam dovnitř nevede | „Tento vstup skupiny není propojen s žádným uzlem uvnitř skupiny.“ | Chyba |
| Výstup, do jehož uzlu Konec zevnitř nic nevede | „Tento výstup skupiny není propojen s žádným uzlem uvnitř skupiny.“ | Chyba |
| Vstupní port, do kterého z nadřazeného grafu nic nevede | „Jeden nebo více vstupů skupiny nemá příchozí propojení.“ | Varování |

Na nadřazeném plátně se problémy ze skupiny i ze skupin pod ní sloučí do jednoho problému na obdélníku: „Tato skupina obsahuje obsah s chybami ve validaci.“ V panelu se ukáže jako Obsahuje chyby nebo Obsahuje varování. Který uzel ho způsobuje, uvidíte po otevření skupiny.

Kontrola globálních událostí se dělá nad vlastním grafem kapitoly. Kontrolní bod ve skupině proto událost **Vrátit se na poslední kontrolní bod** nesplní. Kontrolní bod dejte na plátno kapitoly.

## Praktické rady

- Skupina z výběru se jmenuje Skupina. Skupina z palety jméno nemá a ukazuje číslo uzlu, proto ji pojmenujte.
- Po vydání kapitoly je struktura uzamčená a porty skupiny s obsahem už nezměníte: „Tato kapitola je publikovaná, proto je struktura grafu uzamčena. Stále můžete upravit obsah komponent a znovu publikovat.“ Porty proto určete dřív, než skupinu naplníte.

## Související

- [Graf příběhu](/cs/story-editor/story-graph/)
- [Typy uzlů](/cs/story-editor/node-types/)
- [Koncové uzly](/cs/story-editor/end-nodes/)
- [Struktura příběhu](/cs/best-practices/story-structure/)
